const express = require("express");
const dbConnect = require("../database/db.js");
const router = express.Router();

router.get("/get-all", async (req, res) => {
    const collection = await dbConnect();

    collection.find({}).toArray(function (err, data) {
        if (!data) {
            res.send("No data found!");
        } else {
            res.send(data);
        }
    });
});

router.get("/get-single", async (req, res) => {
    const { id } = req.query;
    const collection = await dbConnect();
    collection.findOne({ ID: id }, (err, result) => {
        if (!result) {
            res.send("No movie found with that id!");
        } else {
            res.send(result);
        }
    });
});

router.get("/get-paginated", async (req, res) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.size);

    const collection = await dbConnect();
    
    //Assume per page 10 records are there.
    const skip = (page - 1) * 10;
    collection.find().skip(skip).limit(limit).toArray(function (err, data) {
        if (data) {
            res.send(data);
        }
    });
});

router.post("/add-movie", async (req, res) => {
    const collection = await dbConnect();
    const ID = req.body.id;
    const Name = req.body.name;
    const ReleaseYear = req.body.releaseyear;

    collection.insertOne({ ID, Name, ReleaseYear }, (err, result) => {
        if (err) {
            throw err;
        } else {
            console.log("Data Inserted");
        }
    });

});


module.exports = router;