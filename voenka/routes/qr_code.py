from flask import Blueprint, render_template


qr = Blueprint("qr", __name__)


@qr.route("/")
def hello():
    return render_template("qr/qr_base.html")
