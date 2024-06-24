db.teams.deleteOne({"_id": ObjectId("56a7e1e8b2e7c6541f8032d9")})
db.gruppierungen.deleteMany({"teamId": "teamLazio"})
db.trainer.deleteMany({ $or: [ { _id: ObjectId("56a7e1e8b2e7c6541f8032d9") }, { _id: ObjectId("58d07a4d48b5770013f41e2f") } ] })



