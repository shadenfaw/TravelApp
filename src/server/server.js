var path = require('path')
const express = require('express')

const dotenv = require('dotenv');
const fetch = require("node-fetch");
const cors = require('cors');
const bodyParser = require('body-parser');

dotenv.config();

  
const app = express()

app.use(express.static('dist'))
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.get('/', function (req, res) {
     res.sendFile('dist/index.html')
})


let countryInfo ={};

app.get('/location', function (req, res) {
    let where=req.query.where;
    
    fetch(`http://api.geonames.org/searchJSON?style=full&maxRows=10&name_startsWith=${where}&username=${process.env.geonamesKey}`)
    .then(data=>data.json())
    .then(function(data) {
        countryInfo=data.geonames[0];
        res.send(countryInfo);
    })
    .catch(
        err=>res.send(err)
    )
})

let currentWeatherData={};

app.get('/currentWeatherData', function (req, res) {
    let lat=req.query.lat;
    let lng=req.query.lng;
    
    fetch(`http://api.weatherbit.io/v2.0/current?key=${process.env.weatherbitKey}&lat=${lat}&lon=${lng}`)
    .then(data=>data.json())
    .then(function(data) {
        
        currentWeatherData=data.data[0];
        res.send(currentWeatherData);
    })
    .catch(
        err=>res.send(err)
    )
})

let forecastWeatherData ={};

// get last future weather information 
app.get('/forecastWeatherData', function (req, res) {
    let lat=req.query.lat;
    let lng=req.query.lng;
    
    
    fetch(`http://api.weatherbit.io/v2.0/forecast/daily?key=${process.env.weatherbitKey}&lat=${lat}&lon=${lng}`)
    .then(data=>data.json())
    .then(function(data) {
        
        const allFutureInfo=data.data;
        forecastWeatherData=allFutureInfo[allFutureInfo.length - 1];
        res.send(forecastWeatherData);
    })
    .catch(
        err=>res.send(err)
    )
})


let imageUrl ='';

// get city first hit image url
app.get('/cityImageUrl', function (req, res) {
    let city=req.query.city;
    
    
    fetch(`https://pixabay.com/api/?key=${process.env.pixabayKey}&q=${city}&image_type=photo&pretty=true`)
    .then(data=>data.json())
    .then(function(data) {
        const imageUrl=data.hits[0];
        res.send(data);
    })
    .catch(
        err=>res.send(err)
    )
})

module.exports = app