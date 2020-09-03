# Travel App Project


## Overview
The project will include a simple form where you enter the location you are traveling to and the date you are leaving. If the trip is within a week, you will get the current weather forecast. If the trip is in the future, you will get a predicted forecast. The OpenWeather API is fantastic but it doesn’t let you get future data for free and it’s not that flexible with what information you enter; we are going to use the Weatherbit API for you to see how another API accomplishes the same goals. Weatherbit API has one problem, it only takes in coordinates for weather data -- it’s that specific. So, we’ll need to get those coordinates from the Geonames API. Once we have all of this data, we’ll want to display an image of the location entered; for this, we will be using the Pixabay API.

## Extras
adding end date and display length of trip

## Instructions

#### Install dependencies
 - `cd` to project folder
 - Run ` npm install `

###### How to run project in dev mode
if you want to run the app locally just :
 - Run `npm start` to start the server 
 - Run  `npm run dev ` to get the app running.
 
###### How to run project in production mode
if you want to run the app locally just :
 - cd into the project folder
 - first thing  run `npm install `
 - Then run `npm start` to start the server 
 - and  `npm run dev ` to get the app running.


## Important files
⦁	Create in you project folder .env file to store the api keys,you need to have 3 variables in it :
    - `geonamesKey` : for geonames key
    - `weatherbitKey` : for weatherbit key
    - `pixabayKey` : for pixabay key
## Setting up the API
⦁	Create an account with Geonames : The key is the username
⦁	Create an account with Weatherbit : 
    - Sign up for an account.
    - Use the API key provided in the account dashboard.
⦁	Create an account with Pixabay : [check this link on how to get the Api key](https://support.explaindio.com/support/solutions/articles/13000053848-how-to-add-pixabay-key-)
