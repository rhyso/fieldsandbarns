require('dotenv').config();

let uri = 'mongodb+srv://';
uri += process.env.DB_NAME + ':';
uri += process.env.DB_PASSWORD;
uri += '@sandbox-vyjju.mongodb.net/test?retryWrites=true&w=majority';


const express = require('express');
const logger  = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors  = require('cors');

const Owners = require("./models/land-owners")
const Test2 = require("./models/land-owners")
const Fields = require("./models/fields")
const User = require("./models/users")

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


/*
Get All users
*/
router.get('/getOwners', (req,res) => {
	Owners.find().then( (owners) =>{
		res.send({owners});
	},(err) =>{
		res.status(400).send(err);
   });
});

router.get("/getData", (req, res) => {

    Owners.findById('5ddffbc8fa12de47c60c3683', function (err, owner) {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, owner: owner });
    })
});

router.get("/getAllFieldsByOwner", (req,res) => {
    //return fields without any owner data
    Fields.find({"owner": '5ddffbc8fa12de47c60c3683'},
        (err, fields) => {
        return res.status(200).json({ success: true, fields: fields })
    })

    //fields with owner data populted
    // Fields.find({"owner": '5ddffbc8fa12de47c60c3683'})
    //     .populate("owner")
    //     .exec(function (err, fields) {
    //         console.log(fields)
    //     });
})

router.post("/addField", (req, res) => {
 const { owner, name, type, comments, image } = req.body
    if (!name ) {
        return res.status(400).json({
            success: false,
            error: 'You must provide details',
        })
    }

    const field = new Fields()

    field.owner = owner
    field.name = name
    field.type = type
    field.comments = comments
    field.image = image

    field
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: field.name,
                message: 'New Field created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Field not created!',
            })
        })


})

router.post("/addOwner", (req, res) => {
        const { firstName, surname, bio, alias, email } = req.body
        if ( !firstName || !bio || !alias || !email) {
            return res.status(400).json({
                success: false,
                error: 'You must provide details',
            })
        }
        const owner = new Owners()

        if (!owner) {
            return res.status(400).json({ success: false, error: 'error' })
        }

        owner.firstName = firstName;
        owner.lastName = surname;
        owner.alias = alias;
        owner.biography = bio;
        owner.email = email;

        owner
            .save()
            .then(() => {
                return res.status(201).json({
                    success: true,
                    id: owner._id,
                    message: 'New Owner created!',
                })
            })
            .catch(error => {
                return res.status(400).json({
                    error,
                    message: 'Owner not created!',
                })
            })
    })





/*
BOOKING 
*/
router.post('/booking',function(req,res){
	
    var fullName = req.body.fullName;
    var email = req.body.email;
    var arrivalDate = new Date(req.body.arrivalDate).getTime() / 1000 ; //converting to unix 
    var departureDate = new Date(req.body.departureDate).getTime() / 1000 ;

    //Validate departure date & arrival date are max 3 days using unix epich time
    if(departureDate < arrivalDate){
    	return res.status(400).send("Depature Date cannot be before than arrival date!!");
    }
    console.log(Date.parse(departureDate) > Date.parse(arrivalDate))
    if(Date.parse(departureDate) > Date.parse(arrivalDate)) {
    	return res.status(400).send("Wrong Dates Selected !");
    }

    var reservedDates = [];

    //Check if departure date & arrival date are already booked
    User.find().then( (users) =>{

	for (var i = users.length - 1; i >= 0; i--) {
			reservedDates.push(users[i].arrivalDate);
			reservedDates.push(users[i].departureDate);
		}

		if(reservedDates.includes(arrivalDate) && reservedDates.includes(departureDate) ){
			return res.status(400).send("Wrong Dates Selected !");
		} 
	});


    let user = new User({
	    name: fullName, 
	    email: email,
	    arrivalDate: arrivalDate,
	    departureDate: departureDate 
	});

    user.save().then((doc) =>{
		res.send("Reservation for " + doc.name + ' done Successfully! Booking Id : ' + doc._id);
	},(err)=>{
		res.status(400).send(err);
	});
});


router.get("/getUsers", (req, res) => {
    User.find().then( (users) =>{
        res.status(200)
        // res.json( users);
        return res.json({ success: true, users: users });

	},(err) =>{
		res.status(400).send(err);
   });
});



router.get("/getOwners", (req, res) => {

    LandOwners.find((err, fields) => {
        console.log(fields)

        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, fields: fields });
    });
});

router.get("/getTest2", (req, res) => {

    Test2.find((err, fields) => {
        console.log(fields)

        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, fields: fields });
    });
});


router.post("/Test2", (req, res) => {
    let data = new Test2();

    const { name } = req.body;
    //check the form is valie
    if (!name) {
        return res.json({
            success: false,
            error: "INVALID INPUTS"
        });
    }

    data.name = name;

    //save into collection the response body
    data.save(err => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});



router.post("/putData", (req, res) => {
    let data = new LandOwners();

    const { name } = req.body;
    //check the form is valie
    if (!name) {
        return res.json({
            success: false,
            error: "INVALID INPUTS"
        });
    }

    data.name = name;

    //save into collection the response body
    data.save(err => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});


router.post("/putData", (req, res) => {
    let data = new LandOwners();

    const { id, name, alias, email } = req.body;
    console.log(name)
    //check the form is valie
    if (!name) {
        return res.json({
            success: false,
            error: "INVALID INPUTS"
        });
    }


    data.name = name;
    data.alias = alias;
    data.email = email;
    data.id = id;
    //save into collection the response body
    data.save(err => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});


app.use("/api", router);

app.listen(API_PORT, () => console.log(`LISTENING ON UHH PORT ${API_PORT}`));
