db.trainers.updateOne(
    { _id: trainerLazio },
    { $set: { email: "maurizio.new.sarri@lazio.com" } }
);

db.teams.updateMany(
    { $or: [{ name: "Roma" }, { "spieler.name": "Ciro" }] },
    { $set: { "spieler.$[].status": "active" } }
);

db.gruppierungen.replaceOne(
    { name: "Roma Fans" },
    {
        name: "Roma Ultra Fans",
        teamId: teamRoma,
        fans: [
            {
                fanId: new ObjectId(),
                name: "Aurora",
                nachname: "Gjemaj",
                email: "aurora.gjemaj@fans.com",
                teamId: teamRoma,
                spielerId: null
            },
            {
                fanId: new ObjectId(),
                name: "Jasmin",
                nachname: "Jeyakumar",
                email: "jasmin.jeyakumar@fans.com",
                teamId: teamRoma,
                spielerId: null
            },
            {
                fanId: new ObjectId(),
                name: "Ruben",
                nachname: "Schneebeli",
                email: "ruben.schneebeli@fans.com",
                teamId: teamRoma,
                spielerId: null
            }
        ]
    }
);