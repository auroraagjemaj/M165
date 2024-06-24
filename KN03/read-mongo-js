db.teams.find();
db.trainers.find({$or: [{ teamId: teamLazio }, { teamId: teamRoma }]});
db.gruppierungen.find({ createdAt: { $gte: ISODate('2023-01-01') } });
db.trainers.find({$and: [{ email: { $regex: /com/ } }, { teamId: { $exists: true } }]});
db.teams.find({}, { name: 1 });
db.teams.find({}, { _id: 0, name: 1, spieler: 1 });