import os
import requests
from dotenv import load_dotenv
from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

#User class that maps to data table in db
class User(db.Model):
    email = db.Column(db.String(120), primary_key=True, unique=True, nullable=False)
    username = db.Column(db.String(80), unique=True, nullable=False)
    #date = db.Column(db.Integer, nullabele=False)df
    search_history = db.relationship('SearchHistory', backref='User', lazy=True)

#stores user search history
class SearchHistory(db.Model):
    id = db.Column(db.Integer, primary_key=True) #uniquely identify each search history entry
    query = db.Column(db.String(255), nullable=False)
    user_email = db.Column(db.String(120), db.ForeignKey('User.email'), nullable=False) #establishes a foreign key relationship with the User model using db.ForeignKey

# #Initialize SQLAlchemy extension and configure database url
app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///meditriever/src/UserData.db' #not sure if this is the correct path
db = SQLAlchemy(app)


#placeholder --> replace with javascript user input
#drug_input = "tylenol"
#email_input = "kat@gmail.com"
#username_input = "kluelesskat"

'''
Updating User Database
'''

@app.route('/test', methods=['GET'])
def testFun():
    return jsonify({'message':'poopy'})

@app.route('/add_user', methods=['POST'])
def add_user(username_input, email_input):
    data = request.get_json() #returns username_input + email_input
    new_user = User(username=data[username_input], email=data[email_input])
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
    #date = data.get('date')

    add_user(username, email)
    add_search(email, search)

    return jsonify({'message': 'Data received and processed successfully'})


'''
FDA API + Google Maps API
'''

from FDADrugAPI import get_drug
from GoogleMapsAPI import get_id

load_dotenv()

FDA_API_KEY = os.getenv("FDA_API_KEY")  # Remember .env file!
GOOGLE_MAPS_API_KEY = os.getenv("GOOGLE_MAPS_API_KEY")  # Remember .env file!

# app = Flask(__name__)

from FDADrugAPI import get_drug

@app.route("/about-drug", methods=['POST'])
def handle_user_data():
    if request.method == 'POST':
        # Get the data from the JSON body of the request
        data = request.get_json()
        
        drug_name = data.get('drug')
        print('drug_name: ' + drug_name)
        
        # Call get_drug function to retrieve drug information
        drug_data = get_drug(FDA_API_KEY, drug_name, 1)
        
        # Extract relevant information from the returned JSON
        effects = drug_data.get('effects', "")
        company_name = drug_data.get('companyName', "")
        purpose = drug_data.get('purpose', "")
        contents = drug_data.get('contents', "")
        howTo = drug_data.get('howTo', "")
        
        # Perform any necessary backend processing with the received data
        response_data = {
            'message': 'Data received successfully!',
            'generic_name': drug_name,
            'warnings': effects,
            'brand_name': company_name,
            'indications_and_usage': purpose,
            'inactive_ingredients': contents,
            'dosage_and_administration': howTo
        }
        
        # Return the response as JSON
        return jsonify(response_data), 200, {'Content-Type': 'application/json'}



@app.route("/location")
def app_get_id(location):
    return get_id(GOOGLE_MAPS_API_KEY, location)

if __name__ == "__main__":
    app.run(port=3000)
    # db.create_all()
    app.run(debug=True)
