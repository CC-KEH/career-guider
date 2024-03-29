#TODO: Fix the course data

import random
import json
import torch
from model import NeuralNet
from nltk_utils import bag_of_words, tokenize

device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

# Load intents, jobs, and courses
with open('intents.json', 'r') as f:
    intents = json.load(f)

with open('jobs.json', 'r') as f:
    jobs_data = json.load(f)

with open('courses.json', 'r') as f:
    courses_data = json.load(f)

# Load the pre-trained model and other data
FILE = "data.pth"
data = torch.load(FILE)

input_size = data["input_size"]
hidden_size = data["hidden_size"]
output_size = data["output_size"]
all_words = data["all_words"]
tags = data["tags"]
model_state = data["model_state"]

model = NeuralNet(input_size, hidden_size, output_size).to(device)
model.load_state_dict(model_state)
model.eval()

bot_name = "Vidit"

print("Let's get started! Type 'quit' to exit.\n")

def get_response(msg):
    sentence = tokenize(msg)
    X = bag_of_words(sentence, all_words)
    X = X.reshape(1, X.shape[0])
    X = torch.from_numpy(X).to(device)

    output = model(X)
    _, predicted = torch.max(output, dim=1)

    tag = tags[predicted.item()]

    probs = torch.softmax(output, dim=1)
    prob = probs[0][predicted.item()]
    if prob.item() > 0.75:
        for intent in intents['intents']:
            if tag == intent["tag"]:
                return random.choice(intent['responses'])
            
        for job_data in jobs_data['jobs']:
            if tag == job_data["job_title"]:
                return random.choice(job_data['responses'])

        for course_data in courses_data['job_courses']:
            if tag == course_data["course_title"]:
                return random.choice(course_data['recommended_courses'])
    
    return "Sorry I do not understand."


if __name__ == "__main__":
    print("Let's chat! (type 'quit' to exit)")
    while True:
        # sentence = "do you use credit cards?"
        sentence = input("You: ")
        if sentence == "quit":
            break

        resp = get_response(sentence)
        print(bot_name+": "+resp)