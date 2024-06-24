var teamLazio = new ObjectId();
var teamRoma = new ObjectId();
var teamJuventus = new ObjectId();

db.teams.insertMany([
    {
        _id: teamLazio,
        name: "Lazio",
        spieler: [
            {
                spielerId: new ObjectId(),
                name: "Ciro",
                nachname: "Immobile",
                email: "ciro.immobile@lazio.com"
            },
            {
                spielerId: new ObjectId(),
                name: "Sergej",
                nachname: "Milinković-Savić",
                email: "sergej.milinkovic@lazio.com"
            }
        ]
    },
    {
        _id: teamRoma,
        name: "Roma",
        spieler: [
            {
                spielerId: new ObjectId(),
                name: "Lorenzo",
                nachname: "Pellegrini",
                email: "lorenzo.pellegrini@roma.com"
            },
            {
                spielerId: new ObjectId(),
                name: "Paulo",
                nachname: "Dybala",
                email: "paulo.dybala@roma.com"
            }
        ]
    },
    {
        _id: teamJuventus,
        name: "Juventus",
        spieler: [
            {
                spielerId: new ObjectId(),
                name: "Federico",
                nachname: "Chiesa",
                email: "federico.chiesa@juventus.com"
            },
            {
                spielerId: new ObjectId(),
                name: "Dusan",
                nachname: "Vlahovic",
                email: "dusan.vlahovic@juventus.com"
            }
        ]
    }
]);

var trainerLazio = new ObjectId();
var trainerRoma = new ObjectId();
var trainerJuventus = new ObjectId();

db.trainers.insertMany([
    {
        _id: trainerLazio,
        name: "Maurizio",
        nachname: "Sarri",
        email: "maurizio.sarri@lazio.com",
        teamId: teamLazio
    },
    {
        _id: trainerRoma,
        name: "Jose",
        nachname: "Mourinho",
        email: "jose.mourinho@roma.com",
        teamId: teamRoma
    },
    {
        _id: trainerJuventus,
        name: "Massimiliano",
        nachname: "Allegri",
        email: "massimiliano.allegri@juventus.com",
        teamId: teamJuventus
    }
]);

var gruppierung1 = new ObjectId();
var gruppierung2 = new ObjectId();
var gruppierung3 = new ObjectId();

db.gruppierungen.insertMany([
    {
        _id: gruppierung1,
        name: "Lazio Fans",
        teamId: teamLazio,
        fans: [
            {
                fanId: new ObjectId(),
                name: "Marco",
                nachname: "Rossi",
                email: "marco.rossi@fans.com",
                teamId: teamLazio,
                spielerId: null
            },
            {
                fanId: new ObjectId(),
                name: "Luca",
                nachname: "Bianchi",
                email: "luca.bianchi@fans.com",
                teamId: teamLazio,
                spielerId: null
            }
        ]
    },
    {
        _id: gruppierung2,
        name: "Roma Fans",
        teamId: teamRoma,
        fans: [
            {
                fanId: new ObjectId(),
                name: "Giulia",
                nachname: "Verdi",
                email: "giulia.verdi@fans.com",
                teamId: teamRoma,
                spielerId: null
            },
            {
                fanId: new ObjectId(),
                name: "Francesca",
                nachname: "Neri",
                email: "francesca.neri@fans.com",
                teamId: teamRoma,
                spielerId: null
            }
        ]
    },
    {
        _id: gruppierung3,
        name: "Juventus Fans",
        teamId: teamJuventus,
        fans: [
            {
                fanId: new ObjectId(),
                name: "Alessandro",
                nachname: "Rizzo",
                email: "alessandro.rizzo@fans.com",
                teamId: teamJuventus,
                spielerId: null
            },
            {
                fanId: new ObjectId(),
                name: "Martina",
                nachname: "Gallo",
                email: "martina.gallo@fans.com",
                teamId: teamJuventus,
                spielerId: null
            }
        ]
    }
]);
