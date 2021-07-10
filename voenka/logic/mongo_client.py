from pymongo import MongoClient

# Create the client
client = MongoClient('localhost', 27017)

# Connect to our database
db = client['QRs']

# Fetch our collection
collection = db['qrs']

res = collection.find_one({"name":"Мирталибов Даниил Игоревич"})
print(res)