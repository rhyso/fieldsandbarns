


const uri = "mongodb+srv://sandbox:mald1ve5@sandbox-vyjju.mongodb.net/test?retryWrites=true&w=majority";

const express = require('express');
const logger  = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors  = require('cors');
const Data = require("./models/data");

const app = express();
const router = express.Router();

const API_PORT = 3001;

// db config -- set your URI from mLab in secrets.js
mongoose.connect(uri);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router.get("/", (req, res) => {
    res.json({ message: "HELLOW WORLDUUHHHH" });
});

router.get("/getData", (req, res) => {
    Data.find((err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: data });
    });
});


app.use("/api", router);

app.listen(API_PORT, () => console.log(`LISTENING ON UHH PORT ${API_PORT}`));
