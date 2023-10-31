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

while True:
    sentence = input('You: ')
    if sentence == "quit":
        break
    sentence = tokenize(sentence)
    X = bag_of_words(sentence, all_words)
    X = X.reshape(1, X.shape[0])
    X = torch.from_numpy(X)
    output = model(X)
    _, predicted = torch.max(output, dim=1)
    tag = tags[predicted.item()]

    probs = torch.softmax(output, dim=1)
    prob = probs[0][predicted.item()]

    if prob.item() > 0.70:
        # Check if the tag corresponds to a job or course intent
        if tag in [job["job_title"] for job in jobs_data["jobs"]]:
            # Handle job-related response
            for job in jobs_data["jobs"]:
                if job["job_title"] == tag:
                    print(f"{bot_name}: {random.choice(job['responses'])}")
                    print("\n")
                    
        elif tag in [course["job_title"] for course in courses_data["job_courses"]]:
            # Handle course-related response
            for course in courses_data["job_courses"]:
                if course["job_title"] == tag:
                    print(f"{bot_name}: {random.choice(course['responses'])}")
                    print("\n")
                    
        else:
            # Handle intents defined in 'intents.json'
            for intent in intents["intents"]:
                if tag == intent["tag"]:
                    print(f"{bot_name}: {random.choice(intent['responses'])}")
                    print("\n")
    else:
        print(f"{bot_name}: Sorry, I am dumb, I don't understand what you said")
        print("\n")
