const express = require('express');
const app = express();
const mysql = require('mysql');

app.set('view engine', 'ejs');

// Tempelkan code untuk menspesifikasikan folder yang menyimpan file CSS dan image 
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db_latihan'
});

/*app.get('/', (req, res) => {
  res.render('hello.ejs');
});*/

app.get('/', (req, res) => {
  res.render('top');
});

app.get('/index', (req, res) => {
  connection.query('select * from items', (error, results) => {
    //console.log(results);
    res.render('index', {items: results});
  });
  
});

app.get('/new', (req, res) => {
  res.render('new');
});

app.post('/create', (req, res) => {
  // Ketik kueri untuk menambahkan data ke database
  connection.query(
    `insert into items set name = '${req.body.itemName}'`, (error, results)=>{
      res.redirect('/index')
    }
  )

});
 
app.post('/delete/:id', (req, res) => {
  //console.log(req.params.id);
  connection.query('DELETE FROM items WHERE id = ?', [req.params.id], (error, results) => {
    res.redirect('/index');
  });
});

app.get('/edit/:id', (req, res) => {
  connection.query('SELECT * FROM items WHERE id = ?', [req.params.id], (error, results) => {
    res.render('edit', {item: results[0]});
  });
});

app.post('/update/:id', (req, res) => {
  connection.query('UPDATE items SET name= ? WHERE id = ?', [req.body.itemName, req.params.id], (error, results) => {
    res.redirect('/index');
  }); 
});

app.listen(3000, function () {
    console.log('Server berjalan diport 3000');
});

