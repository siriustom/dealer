let express = require('express');
let router = express.Router();
let individualServices = require('../services/individual-services');
let dealearServices = require('../services/dealer-services');
let carServices = require('../services/cars-services');

let ctlIndividual = require('../controller/ctl-individual');


router.get('/', function (req, res, next) {
    res.render('pg-home', {title: "Car Dealer"});
});

router.get('/register', function(req, res, next) {
    res.render('pg-register', {title: "Register"});
});

router.post('/login', individualServices.getIndividualByFirstAndLast);

router.get('/search', function(req, res, next) {
    dealearServices.getAllDealers()
        .then((result) => {
            console.log(result);
        })
        .catch(err => {
            console.log(err);
        });
});

router.get('/post-car', function(req, res, next) {
    carServices.getAllCars()
        .then((result) => {
            console.log(result);
        })
        .catch(err => {
            console.log(err);
        });
});

router.get('/edit-post', function(req, res, next) {
    carServices.getAllCars()
        .then((result) => {
            console.log(result);
        })
        .catch(err => {
            console.log(err);
        });
});

module.exports = router;