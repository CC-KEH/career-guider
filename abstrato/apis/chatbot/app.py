from flask import Flask, request, jsonify
from flask_cors import CORS
from chat import get_response

app = Flask(__name__)
CORS(app)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    message = data.get('message')
    response = get_response(message)
    print(response)
    return jsonify({"message": response})

if __name__ == "__main__":
    app.run(port=5000, debug=True)
