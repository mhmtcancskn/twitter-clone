const express = require("express");
const app = express();
const cors = require('cors');
var bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient;
const { ObjectId } = require('mongodb');
require('dotenv').config();
app.use(cors());

const client = new MongoClient(process.env.MONGODB_URI);
client.connect();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

async function authMiddleware(req, res, next) {
  const userId = req.headers.token;
  // TODO: deneme amaçlıdır. jsonwebtoken kullanılmalıdır
  try {
    const db = client.db('twitter');
    var user = await db.collection("users").findOne({ _id: new ObjectId(userId) })
    if(user === null){
      return res.status(401).send("auth error");
    }
    req.user = user;
    next();
  } catch (e) {
    res.status(401).send("auth error");
  }
  // TODO: deneme amaçlıdır. jsonwebtoken kullanılmalıdır
}

app.get("/users", async function (req, res) {
  try {
    const db = client.db('twitter');
    var users = await db.collection("users").find().toArray();
    res.send(users);
  } catch (e) {
    res.send("error");
  }
})

app.post("/twittes", authMiddleware, async function (req, res) {
  const db = client.db('twitter');
  var preTwit = { content: req.body.content, user_id: new ObjectId(req.user._id), creation_time: new Date() };
  await db.collection("twittes").insertOne(preTwit);
  preTwit.user = req.user;
  preTwit.likes = [];
  preTwit.liked_by_user = false;
  res.json(preTwit);
})

app.get("/twittes", authMiddleware, async function(req,res) {
  let user_id = new ObjectId(req.user._id);
  const db = client.db('twitter');

let data = await db.collection("twittes").aggregate([
  {
    $lookup: {
      from : "users", 
      localField: "user_id", 
      foreignField: "_id", 
      as : "user"
    }
  },
  {
    $addFields: {
      user: { $arrayElemAt: [ "$user", 0 ] }
    }
  },
  {
    $lookup: {
      from : "likes", 
      localField: "_id", 
      foreignField: "twit_id", 
      as : "likes"
    }
  },
  {
    $addFields: {
      liked_by_user: { 
        $cond: {
          if: { $in: [ user_id, "$likes.user_id" ] }, 
          then: true, 
          else: false
        }
      }
    }
  },
  {
    $sort: {
      creation_time: -1 // Sıralama yönü (desc)
    }
  }
]).toArray();

  
  res.json(data);
})

app.post("/:twit_id/like", authMiddleware, async function(req,res) {
  const db = client.db('twitter');
  // twit_id ile twitte çek
  var twit = await db.collection("twittes").findOne({_id: new ObjectId(req.params.twit_id)});
  // eğer twit yok ise hata döndür
  if(twit === null) return res.status(404).send("twit not found");

  let isLike = true;

  // kullanıcı daha önce twitte beğnemiş mi
  var twit_like = await db.collection("likes").findOne({user_id: new ObjectId(req.user._id), twit_id: new ObjectId(req.params.twit_id)});
  if(twit_like === null) {
    // kulanıcı twitte beğenmemiş. yeni bir kayıt oluştur
    var preLike = { user_id: new ObjectId(req.user._id), twit_id: new ObjectId(req.params.twit_id) };
    await db.collection("likes").insertOne(preLike);
  } else{
    // kullanıcı twitte beğenmiş. kayıtı sil
    await db.collection("likes").deleteOne({_id: twit_like._id});
    isLike = false;
  }
  twit.likes = await db.collection("likes").find({twit_id: new ObjectId(req.params.twit_id)}).toArray();
  twit.user = req.user;
  twit.liked_by_user = isLike;

  res.json(twit);
})

app.listen(4040, function () {
  console.log("listen port 4040");
})


// çalıştırma: node index.js