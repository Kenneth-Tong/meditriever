import os
import requests
from dotenv import load_dotenv
from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

#User class that maps to data table in db
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    date = db.Column(db.Integer, unique=True, nullabele=False)

# #Initialize SQLAlchemy extension and configure database url
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///meditriever/src/UserData.db' #not sure if this is the correct path
db = SQLAlchemy(app)

from FDADrugAPI import get_drug
from GoogleMapsAPI import get_id

load_dotenv()

FDA_API_KEY = os.getenv("FDA_API_KEY")  # Remember .env file!
GOOGLE_MAPS_API_KEY = os.getenv("GOOGLE_MAPS_API_KEY")  # Remember .env file!

# app = Flask(__name__)

@app.route("/")
def return_response():
    json_list = list()
    json_list.append(app_get_drug())
    json_list.append(app_get_id())
    print(json_list)
    return json_list

@app.route("/drug")
def app_get_drug(drug):
    return get_drug(FDA_API_KEY, "adderall", 1)

@app.route("/location")
def app_get_id(location):
    return get_id(GOOGLE_MAPS_API_KEY, location)


if __name__ == "__main__":
    app.run(port=3000)
    # db.create_all()
    app.run(debug=True)
