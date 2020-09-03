
let imageInfo='';
let locationWeatherInfo={};
let where = '';
let date = '';
let Difference_In_Days=0;
function handleSubmit(event) {
    event.preventDefault()

    // get the form data
    where = document.getElementById('where').value
    date = document.getElementById('date').value

    getLocation(where)
    .then(res => res)
    .then(location=>{
        
        let currentDate = new Date();
                
        Difference_In_Days=diffDays(currentDate,new Date(date).getTime());
        if(Difference_In_Days <= 7)
            return getCurrentWeatherData(location.lng,location.lat);
        
 
        return getForecastWeatherData(location.lng,location.lat);       

    })
    .then(
        data=>{
            locationWeatherInfo=data;
            
            return  getCityImageUrl();
        }
    )
    .then(
        data=>{
            imageInfo=data.hits[0];
            displayAllInformations();
        }
    )
}

//get location information
function getLocation(){
      
    return fetch(`http://localhost:8080/location?where=${where}`)
    .then(res => res.json());
    
}

//get location information
function getCurrentWeatherData(lng,lat){
      
    return fetch(`http://localhost:8080/currentWeatherData?lat=${lat}&lng=${lng}`)
    .then(res => res.json());
}

//get future weather information
function getForecastWeatherData(lng,lat){
      
    return fetch(`http://localhost:8080/forecastWeatherData?lat=${lat}&lng=${lng}`)
    .then(res => res.json());
}

//get city Image url
function getCityImageUrl(){
      
    return fetch(`http://localhost:8080/cityImageUrl?city=${where}`)
    .then(res => res.json());
}


function displayAllInformations(){
    const endDate=document.getElementById('enddateV').value;
    document.getElementById('endDate').innerHTML="Length of the trip : "+diffDays(new Date(date).getTime(),new Date(endDate).getTime())+" days";
    document.getElementById('where-src').src=imageInfo['largeImageURL'];
    document.getElementById('location').innerHTML="My trip to : "+where;
    document.getElementById('toDate').innerHTML=`Departing : ${date} is ${Difference_In_Days} days away`;
    document.getElementById('temp').innerHTML=`Temp: ${locationWeatherInfo.temp} <span>&#8451;</span>`;
    document.getElementById('whereInfo').style.display='block';
    document.getElementById('wherePage').style.display='none';


}


function back(event) {
    event.preventDefault();
    document.getElementById('whereInfo').style.display='none';
    document.getElementById('wherePage').style.display='block';
}

//return diffrence between tow dates
function diffDays(date1,date2){
    // To calculate the time difference of two dates 
    const Difference_In_Time = Math.abs(date1 - date2); 
            
    return Math.round(Difference_In_Time / (1000 * 3600 * 24));
}

module.exports = {handleSubmit , back ,getCityImageUrl}

