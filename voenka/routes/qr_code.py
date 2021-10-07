from flask import Blueprint, render_template, redirect, request

from .logic.mongo_client import MongoConnector
from .logic.strings_convertation import fio_convert
from .logic.qr_code_creator import create_qr


qr = Blueprint("qr", __name__)
mongo_client = MongoConnector()

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
        fio = fio_convert(str(data["fio"]))
        return render_template("qr/qr_base.html", FIO = fio, birth_date = data["birth_date"], end_date = "12.10.2022")

@qr.route('/', methods=['POST'])
def form_worker():
    birth_date = request.form.get("birth_date")
    fio = request.form.get("fio")
    mongo_id = str(mongo_client.add({"fio":fio, "birth_date":birth_date}))
    filename = create_qr(mongo_id)
    filename = f"../.{filename}"
    #filename = filename[13:]
    print(filename)
    return render_template("qr/qr_qr.html", filename=filename)