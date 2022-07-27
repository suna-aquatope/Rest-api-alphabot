var express = require('express'),
    cors = require('cors'),
    secure = require('ssl-express-www');
const api1keyy = process.env.KEY1;
const api2keyy = process.env.KEY2;
const listkey = ["$api1keyy","$api2keyy"];
const PORT = process.env.PORT || 8080 || 5000 || 3000
var { color } = require('./lib/color.js')

var mainrouter = require('./routes/main'),
    apirouter = require('./routes/api')

var app = express()
app.enable('trust proxy');
app.set("json spaces",2)
app.use(cors())
app.use(secure)
app.use(express.static("public"))

app.use('/', mainrouter)
app.use('/api', apirouter)

app.listen(PORT, () => {
    console.log(color("Server running on port " + PORT,'green'))
    console.log("List Apinya " + listkey);
})

module.exports = app
