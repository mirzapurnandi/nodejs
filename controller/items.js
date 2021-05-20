const Item = require('../model/item');

/* function index(req, res){
    res.render('top');
} */
const index = (req, res) => {
    res.render('top');
}

function result(req, res){
    Item.show(req.con, function(err, results) {
        res.render('index', {items: results});
    });
}

const newData = (req, res) => {
    res.render('new');
}

function create(req, res){
    Item.create(req.con, req.body, function(err, results) {
        res.redirect('/index');
    });
}

function deleteData(req, res){
    Item.destroy(req.con, req.params.id, function(err, results) {
        res.redirect('/index');
    });
}

function edit(req, res) {
    Item.edit(req.con, req.params.id, function(err, results) {
        res.render('edit', {item: results[0]});
    });
}

function update(req, res){
    Item.update(req.con, {itemName : req.body.itemName, id: req.params.id}, function(err, results) {
        res.redirect('/index');
    });
}

module.exports = {
    index,
    result,
    newData,
    create,
    deleteData,
    edit,
    update
}