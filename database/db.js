const {MongoClient} = require("mongodb");

const url = "mongodb+srv://HSAM:WuMDfNqPImObsQ3R@cluster0.0x0cv.mongodb.net/moviesDB?retryWrites=true&w=majority";

const Client = new MongoClient(url);

async function dbConnect(){
    let result = await Client.connect();
    let db = result.db("moviesDB");
    return db.collection("movie");
}

module.exports = dbConnect;
