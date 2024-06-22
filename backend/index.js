const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config/config");
const express = require("express");



//Creating the express app
app.use(express.json());
const DB_URI = config.mongoose.url
mongoose
  .connect(`${DB_URI}`, {
    useNewUrlParser: true,
  })
  .then(() => console.log("Connected to DB at ", DB_URI))
  .catch(() => console.log("Failed to connect at DB at", DB_URI));
app.listen(8082, () => {
  console.log("App is running on port 8082");
});

//for passing the assesment , we need hardcode the server 8082  here in index.js


// Your mongoDB clsuter and port in env:
// PORT = 8082
// MONGODB_URL= mongodb+srv://richamhshwr2:3uEFtUykBCz02MOS@xflix.p7tbo4r.mongodb.net/?retryWrites=true&w=majority&appName=xflix


//local db 
//mongodb://127.0.0.1:27017/xflix

//updated cloud 
//mongodb+srv://richamhshwr2:3uEFtUykBCz02MOS@xflix.p7tbo4r.mongodb.net/xflix_backend?retryWrites=true&w=majority&appName=xflix