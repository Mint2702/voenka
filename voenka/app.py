from flask import Flask

from routes.base import base
from routes.qr_code import qr


app = Flask(__name__)

app.register_blueprint(base, url_prefix="/")
app.register_blueprint(qr, url_prefix="/qr")
