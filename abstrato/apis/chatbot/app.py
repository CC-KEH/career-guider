from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
from chat import get_response


app = Flask(__name__)
CORS(app)


@app.post('/predict')
def predict(request):
    message = request.get_json().get('message')
    response = get_response(message)
    return jsonify({"response": response})



if __name__ == "__main__":
    app.run(port=5000, debug=True)