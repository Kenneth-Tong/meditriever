import os
import sys
import requests
from dotenv import load_dotenv
from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

#Start with two terminal, one with npm start and another for back end python -m flask run

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

#testing posting
@app.route('/test', methods=['GET'])
def testFun():
    return jsonify({'message':'Hello World'})

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

from FDADrugAPI import get_drug, get_form, get_patient_drug_reaction
from GoogleMapsAPI import get_id, get_place, get_times

load_dotenv()

FDA_API_KEY = os.getenv("FDA_API_KEY")  # Remember .env file!
GOOGLE_MAPS_API_KEY = os.getenv("GOOGLE_MAPS_API_KEY")  # Remember .env file!

#converting lists from json to list for front end
def convert_list(response, term, length):
    addList = list()
    addList.append((response[0][term]).lower().capitalize())
    if length > 1:
        for i in (1, length - 1, 1):
            addList.append((response[i][term]).lower().capitalize())
    addList = list(set(addList))  # conversion into a set then into a list for duplicates
    return addList

def api_response():
    from flask import jsonify
    if request.method == 'POST':
        return jsonify(**request.json)

@app.route("/about-drug", methods=['POST'])
def handle_user_data_drug():
    if request.method == 'POST':
        # Get the data from the JSON body of the request
        data = request.get_json()
        
        drug_name = data.get('drug')
        
        # Call get_drug function to retrieve drug information
        drug_data = get_drug(FDA_API_KEY, drug_name, 1)["results"][0]

        try:
            generic_name = drug_data["openfda"]["generic_name"]
        except Exception as e:
            generic_name = drug_name

        try:
            active_ingredients = drug_data["active_ingredient"]
        except Exception as e:
            active_ingredients = "None Listed"

        try:
            warnings = ", ".join(drug_data["do_not_use"])
        except Exception as e:
            try:
                warnings = ", ".join(drug_data["warnings"])
            except Exception as e:
                try:
                    warnings = ", ".join(drug_data["warnings_and_cautions"])
                except Exception as e:
                    try:
                        warnings = ", ".join(drug_data["boxed_warning"])
                    except Exception as e:
                        warnings = "None Listed"

        try:
            brand_name = " ".join(drug_data["openfda"]["brand_name"])
        except Exception as e:
            brand_name = drug_name

        try:
            drug_form = get_form(FDA_API_KEY, drug_name, 3)
        except Exception as e:
            "None Listed"

        form_list_string = convert_list(drug_form["results"], "term", 3)

        try:
            administation = drug_data["dosage_and_administration"]
        except Exception as e:
            try:
                administation_get_form = get_form(FDA_API_KEY, drug_name, 3)
                administation = convert_list(administation_get_form["results"], "term", 3)
            except Exception as e:
                administation = "None Listed" 
        
        try:
            reactions = drug_data["adverse_reactions"]
        except Exception as e:
            try:
                reactions_get_reaction = get_patient_drug_reaction(FDA_API_KEY, drug_name, 5)["results"]  # number of results
                reactions = convert_list(reactions_get_reaction, "term", 5)
            except Exception as e:
                reactions = "None Listed" 

        try:
            purpose = drug_data["purpose"]
        except Exception as e:
            try:
                purpose = drug_data["indications_and_usage"]
            except Exception as e:
                try:
                    purpose = drug_data["description"]
                except Exception as e:
                    purpose = "None Listed" 

        try:
            interactions = drug_data["drug_interactions"]
        except Exception as e:
            try:
                interactions = drug_data["description"]
            except Exception as e:
                interactions = "None Listed" 
        
        # Perform any necessary backend processing with the received data
        response_data = {
            'message': 'Data received successfully!',
            'given_name': drug_name,
            'generic_name': generic_name,
            'brand_name': brand_name,
            'purpose': purpose,
            'active_ingredients': active_ingredients,
            'warnings': warnings,
            'reactions': reactions,
            'interactions': interactions,
            'dosage_and_administration': administation,
            'drug_data': drug_data
        }
        
        # Return the response as JSON
        return jsonify(response_data), 200, {'Content-Type': 'application/json'}

@app.route("/about-location", methods=['POST'])
def handle_user_data_location():
    if request.method == 'POST':
        # Get the data from the JSON body of the request
        data_location = request.get_json()

        location_name = data_location.get('location')
        
        # Call get_drug function to retrieve drug information
        location_id = get_id(GOOGLE_MAPS_API_KEY, location_name)

        print(location_id, file=sys.stderr)

        address = get_place(GOOGLE_MAPS_API_KEY, location_id)
        times = get_times(GOOGLE_MAPS_API_KEY, location_id)
        
        # Perform any necessary backend processing with the received data
        response_data = {
            'message': 'Data received successfully!',
            'name': location_name,
            'address': address,
            'times': times,
            'location_data': location_id
        }
        
        # Return the response as JSON
        return jsonify(response_data), 200, {'Content-Type': 'application/json'}

if __name__ == "__main__":
    app.run(port=3000)
    app.debug = True
    # db.create_all()
    app.run(debug=True)
