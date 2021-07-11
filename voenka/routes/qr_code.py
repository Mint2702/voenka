from flask import Blueprint, render_template, redirect, request

from .logic.mongo_client import MongoConnector


qr = Blueprint("qr", __name__)
mongo_client = MongoConnector()
print(mongo_client)

@qr.route("/me")
def me():
    return render_template("qr/qr_base.html")

@qr.route("/", methods=["GET"])
def main():
    return render_template("qr/qr_index.html")

@qr.route("/<id>")
def search(id):
    global mongo_client

    data = mongo_client.find_document(id)
    if data:
        return render_template("qr/qr_base.html", FIO = data["fio"], birth_date = data["birth_date"], end_date = "12.10.2022")

@qr.route('/', methods=['POST'])
def form_worker():
    birth_date = request.form.get("birth_date")
    fio = request.form.get("fio")
    mongo_id = str(mongo_client.add({"fio":fio, "birth_date":birth_date}))
    return search(mongo_id)