import os
import requests
from dotenv import load_dotenv
from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

#User class that maps to data table in db
class User(db.Model):
    email = db.Column(db.String(120), primary_key=True, unique=True, nullable=False)
    username = db.Column(db.String(80), unique=True, nullable=False)
    date = db.Column(db.Integer, nullabele=False)
    search_history = db.relationship('SearchHistory', backref='User', lazy=True)

#stores user search history
class SearchHistory(db.Model):
    id = db.Column(db.Integer, primary_key=True) #uniquely identify each search history entry
    query = db.Column(db.String(255), nullable=False)
    user_email = db.Column(db.String(120), db.ForeignKey('User.email'), nullable=False) #establishes a foreign key relationship with the User model using db.ForeignKey

# #Initialize SQLAlchemy extension and configure database url
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///meditriever/src/UserData.db' #not sure if this is the correct path
db = SQLAlchemy(app)


#placeholder --> replace with javascript user input
#drug_input = "tylenol"
#email_input = "kat@gmail.com"
#username_input = "kluelesskat"

'''
Updating User Database
'''

@app.route('/add_user', methods=['POST'])
def add_user(username_input, email_input, date_input):
    data = request.get_json() #returns username_input + email_input
    new_user = User(username=data[username_input], email=data[email_input], date = data[date_input])
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message': 'User added successfully'})

@app.route('/add_search', methods=['POST'])
def add_search(email_input, user_search_input):
    data = request.get_json()
    user_email = data[email_input]  # Get the user's email
    query = data[user_search_input]

    # Create a new search history entry for the user
    new_search_entry = SearchHistory(query=query, user_email=user_email)

    try:
        db.session.add(new_search_entry)
        db.session.commit()
        return jsonify({'message': 'Search entry added successfully'})
    except Exception as e:
        db.session.rollback()
        return jsonify({'message': 'Failed to add search entry', 'error': str(e)})
    finally:
        db.session.close()


@app.route('/add_data', methods=['POST'])
def add_data():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    search = data.get('search')
    date = data.get('date')

    add_user(username, email, date)
    add_search(email, search)

    return jsonify({'message': 'Data received and processed successfully'})



'''
FDA API + Google Maps API
'''

from src.FDADrugAPI import get_drug
from src.GoogleMapsAPI import get_id

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
