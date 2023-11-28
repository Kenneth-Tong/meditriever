import os
import requests
from dotenv import load_dotenv

load_dotenv()

FDA_API_KEY = os.getenv("FDA_API_KEY")  # Remember .env file!


# TODO: connect this to google maps for location (manufacture name)

def get_drug(api_key, search, limit):
    url = "https://api.fda.gov/drug/label.json?"
    params = {
        "api_key": api_key,
        "search": search,
        "limit": limit,
    }
    response = requests.get(url=url, params=params)
    return response.json()


def get_form(api_key, search, limit):
    url = "https://api.fda.gov/drug/event.json?"
    params = {
        "api_key": api_key,
        "search": search,
        "limit": limit,
        "count": "patient.drug.drugdosageform.exact"
    }
    response = requests.get(url=url, params=params)
    return response.json()


def get_patient_drug_reaction(api_key, search, limit):
    url = "https://api.fda.gov/drug/event.json?"
    params = {
        "api_key": api_key,
        "search": search,
        "limit": limit,
        "count": "patient.reaction.reactionmeddrapt.exact"
    }
    response = requests.get(url=url, params=params)
    return response.json()