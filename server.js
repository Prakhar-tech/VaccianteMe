const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

mongoose
  .connect(process.env.DATABASE, {
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("DataBase Connected");
  });

const app = require("./app");

const PORT = process.env.PORT || 8080;

if(process.env.NODE_ENV ==='production' ){
  app.use(express.static('client/build'))
}


app.listen(PORT, () => {
  console.log(`Server Is Running on port ${PORT}`);
});
