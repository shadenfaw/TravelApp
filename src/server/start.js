const app = require('./server.js')
const port=process.env.PORT || 8080;

// designates what port the app will listen to for incoming requests
app.listen(port, function () {
    console.log('app listening on port 8080!')
})