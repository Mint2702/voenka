from flask import Blueprint, render_template


qr = Blueprint("qr", __name__)


@qr.route("/me")
def me():
    return render_template("qr/qr_base.html")

@qr.route("/")
def main():
    return render_template("qr/qr_index.html")
