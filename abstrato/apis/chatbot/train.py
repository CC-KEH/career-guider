import json
from nltk_utils import tokenize, stem, bag_of_words
import numpy as np
import torch
import torch.nn as nn
from torch.utils.data import Dataset, DataLoader
from model import NeuralNet

# Load intents, skills-to-jobs mapping, and jobs-to-courses mapping
with open('intents.json', 'r') as f:
    intents = json.load(f)

with open('jobs.json', 'r') as f:
    jobs_data = json.load(f)

with open('courses.json', 'r') as f:
    courses_data = json.load(f)


# Extract data from intents, skills-to-jobs, and jobs-to-courses
all_words = []
tags = []
xy = []

for intent in intents['intents']:
    tag = intent['tag']
    tags.append(tag)
    for pattern in intent['patterns']:
        w = tokenize(pattern)
        all_words.extend(w)
        xy.append((w, tag))

# Extract skills-to-jobs mapping data
for job_entry in jobs_data['jobs']:
    job_title = job_entry['job_title']
    tags.append(job_title)  # Add job titles as tags
    for pattern in job_entry['patterns']:
        w = tokenize(pattern)
        all_words.extend(w)
        xy.append((w, job_title))

# Extract jobs-to-courses mapping data
for job_entry in courses_data['job_courses']:
    job_title = job_entry['job_title']
    tags.append(job_title)  # Add job titles as tags
    for pattern in job_entry['patterns']:
        w = tokenize(pattern)
        all_words.extend(w)
        xy.append((w, job_title))

# Remove duplicates and ignore characters
ignore = ['?', '.', ',', '!', "'"]
all_words = [stem(w) for w in all_words if w not in ignore]
all_words = sorted(set(all_words))
tags = sorted(set(tags))

X_train = []
y_train = []

for (pattern_sentence, tag) in xy:
    bag = bag_of_words(pattern_sentence, all_words)
    X_train.append(bag)
    label = tags.index(tag)
    y_train.append(label)

X_train = np.array(X_train)
y_train = np.array(y_train)

class ChatDataset(Dataset):
    def __init__(self):
        self.n_samples = len(X_train)
        self.x_data = X_train
        self.y_data = y_train

    def __getitem__(self, index):
        return self.x_data[index], self.y_data[index]

    def __len__(self):
        return self.n_samples
# Hyperparameters
batch_size = 32  # Increase batch size further
hidden_size = 16  # Decrease model complexity
output_size = len(tags) + 2  # Plus 1 for the new intent "job_recommendation"
input_size = len(X_train[0])
learning_rate = 0.001  # Keep learning rate the same
num_epochs = 500  # Decrease the number of epochs


dataset = ChatDataset()
train_loader = DataLoader(dataset=dataset, batch_size=batch_size, shuffle=True)

device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

model = NeuralNet(input_size, hidden_size, output_size).to(device)

# Loss and optimizer
criterion = nn.CrossEntropyLoss()
optimizer = torch.optim.Adam(model.parameters(), lr=learning_rate)

for epoch in range(num_epochs):
    for (words, labels) in train_loader:
        words = words.to(device)
        labels = labels.to(device).long()

        # Forward pass
        outputs = model(words)
        loss = criterion(outputs, labels)

        # Backward and optimize
        optimizer.zero_grad()
        loss.backward()
        optimizer.step()

    if (epoch + 1) % 100 == 0:
        print(f'Epoch [{epoch+1}/{num_epochs}], Loss: {loss.item():.4f}')

print(f'Final Loss: {loss.item():.4f}')

# Save the model and relevant data
data = {
    "model_state": model.state_dict(),
    "input_size": input_size,
    "hidden_size": hidden_size,
    "output_size": output_size,
    "all_words": all_words,
    "tags": tags
}

FILE = "data.pth"
torch.save(data, FILE)

print(f"Training Complete. File saved to {FILE}")
