from pymongo import MongoClient
from bson.objectid import ObjectId


class MongoConnector:
    def __init__(self) -> None:
        self.get_collection()

    def get_collection(self):
        # Create the client
        client = MongoClient('localhost', 27017)

        # Connect to our database
        db = client['QRs']

        # Fetch our collection
        self.collection = db['qrs']

    def add(self, data: dict) -> None:
        return self.collection.insert_one(data).inserted_id

    def find_document(self, id: str) -> dict:
        return self.collection.find_one({"_id":ObjectId(id)})
