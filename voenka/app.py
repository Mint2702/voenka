from flask import Flask

from routes.base import base


app = Flask(__name__)

app.register_blueprint(base, url_prefix="/")
