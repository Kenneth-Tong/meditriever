import os
from dotenv import load_dotenv
from flask import Flask

from src.FDADrugAPI import get_drug

load_dotenv()

FDA_API_KEY = os.getenv("FDA_API_KEY")  # Remember .env file!


app = Flask(__name__)


@app.route("/")
def app_get_drug():
    return get_drug(FDA_API_KEY, "advil", 3)


if __name__ == "__main__":
    app.run(port=5000)
