# Pass: rrDevAppPassword
client = pymongo.MongoClient("mongodb+srv://dev:<password>@rrcluster0-cnrvc.mongodb.net/rrDevData?retryWrites=true&w=majority")
db = client.rrDevData
