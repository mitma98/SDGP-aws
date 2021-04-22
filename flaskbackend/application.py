from flask import Flask , jsonify , request
from flask_cors import CORS

application = app = Flask(__name__)
CORS(app)

@app.route('/hello', methods=["POST"])
def hello_world():
    data = request.get_data().decode('utf-8')
    data = data + "  " + data
    print(data)
    return jsonify(data)


if __name__ == '__main__':
    app.run()
