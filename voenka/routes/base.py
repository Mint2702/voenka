from flask import Blueprint, render_template


base = Blueprint("base", __name__)


@base.route("/")
def hello():
    return render_template("homepage.html")
