const express = require('express');
const app = express();
const port = 4000;

const con = require('./services/db');

app.set('view engine', 'ejs');

// file CSS dan image 
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

app.use(function(req, res, next) {
  req.con = con;
  next();
})

// include router
const itemRouter = require("./routes/itemRoute");

// routing
app.use("/", itemRouter)

app.listen(port, () => {
    console.log(`Server berjalan diport ${port}, http://localhost:${port}`);
});

