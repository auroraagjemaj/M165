// Löschen von Dokumenten

// 1. Einzelnes Dokument in der customers-Collection löschen
db.customers.deleteOne({ "_id": ObjectId("563237a41a4d68582c2509da") });

// 2. Mehrere Dokumente in der orders-Collection löschen, wo orderCompleted true ist
db.orders.deleteMany({ "orderCompleted": true });

// 3. Mehrere Dokumente in der products-Collection löschen, die bestimmte _id haben
db.products.deleteMany({
    $or: [
        { _id: ObjectId("563237a41a4d68582c2509da") },
        { _id: ObjectId("563237a41a4d68582c2509db") } // Beispiel für eine weitere _id zum Löschen
    ]
});
