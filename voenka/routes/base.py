from flask import Blueprint, render_template


base = Blueprint("base", __name__)


@base.route("/")
def hello():
    return render_template("homepage.html")


@base.route("/about")
def about():
    return render_template("about.html")


@base.route("/money")
def money():
    return render_template("money.html")


@base.route("/instructions")
def instructions():
    return render_template("instructions.html")
