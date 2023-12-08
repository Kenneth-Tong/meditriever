import os
import requests
from dotenv import load_dotenv
from flask import Flask, jsonify


from src.FDADrugAPI import get_drug
from src.GoogleMapsAPI import get_id

load_dotenv()

FDA_API_KEY = os.getenv("FDA_API_KEY")  # Remember .env file!
GOOGLE_MAPS_API_KEY = os.getenv("GOOGLE_MAPS_API_KEY")  # Remember .env file!

app = Flask(__name__)


@app.route("/")
def return_response():
    json_list = list()
    json_list.append(app_get_drug())
    json_list.append(app_get_id())
    return json_list

@app.route("/drug")
def app_get_drug(drug):
    return get_drug(FDA_API_KEY, drug, 1)

@app.route("/location")
def app_get_id(location):
    return get_id(GOOGLE_MAPS_API_KEY, location)


if __name__ == "__main__":
    app.run(port=5000)
