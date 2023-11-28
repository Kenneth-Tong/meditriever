import os
import requests
from dotenv import load_dotenv

load_dotenv()

GOOGLE_MAPS_API_KEY = os.getenv("GOOGLE_MAPS_API_KEY")  # Remember .env file!


# TODO Appending not working for the time table

def get_id(key, search):
    url = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?"
    params = {
        "key": key,
        "input": search,
        "inputtype": "textquery"
    }
    response = requests.get(url=url, params=params)
    return response.json()


def get_location(key):
    url = "https://www.googleapis.com/geolocation/v1/geolocate?"
    params = {
        "key": key
    }
    response = requests.get(url=url, params=params)
    return response.json()


def get_nearby(key, search, location):
    url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?"
    params = {
        "keyword": search,
        "location": location["lat"] + location["lng"],
        "radius": 1500,
        "type": "pharmacy",
        "key": key
    }
    response = requests.get(url=url, params=params)
    return response.json()


def get_place(key, search_id):
    url = "https://maps.googleapis.com/maps/api/place/details/json?"
    params = {
        "key": key,
        "place_id": search_id
    }
    response = requests.get(url=url, params=params)
    return response.json()


def get_times(key, search_id):
    url = "https://maps.googleapis.com/maps/api/place/details/json?"
    params = {
        "key": key,
        "fields": "current_opening_hours/weekday_text",
        "place_id": search_id
    }
    response = requests.get(url=url, params=params)
    return response.json()


def reformat_string(list_input, term):
    results = list_input[term]
    return results