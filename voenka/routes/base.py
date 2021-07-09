from flask import Blueprint, render_template


base = Blueprint("base", __name__)


@base.route("/")
def hello():
    return render_template("voenka/homepage.html")


@base.route("/about")
def about():
    return render_template("voenka/about.html")


@base.route("/money")
def money():
    return render_template("voenka/money.html")


@base.route("/instructions")
def instructions():
    return render_template("voenka/instructions.html")
