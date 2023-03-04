const express = require("express");
const app = express();
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
app.use(cors());
require('dotenv').config();

const client = new MongoClient(process.env.MONGODB_URI);

app.get("/me", function (req, res) {
    console.log("bir istek geldi");

    // istek atanı bul
    // veritabanı işlemini hallet
    // cevap ver

    res.json({
        name: "memo",
        follower_count: 300,
        following_count: 100
    });
});

app.get("/trends", function (req, res) {
    res.json(["Enes Ünal", "Zehra"]);
})

app.get("/users", function (req, res) {
    try {
        const db = client.db('twitter');
        db.collection('users').find().toArray((err, results) => {
            if (err) {
                console.error(err);
                res.status(500).send('Sunucu hatası');
            } else {
                res.json(results);
            }
        });
    } catch (e) {
        res.send("error");
    }
})

app.listen(4040, function () {
    console.log("listen port 4040");
})


// çalıştırma: node index.js