function show(con, callback){
    con.query('select * from items', callback)
}

function create(con, data, callback){
    con.query(`insert into items set name = '${data.itemName}'`, callback)
}

function destroy(con, id, callback){
    con.query('DELETE FROM items WHERE id = ?', [id], callback)
}

function edit(con, id, callback){
    con.query('SELECT * FROM items WHERE id = ?', [id], callback);
}

function update(con, data, callback){
    con.query('UPDATE items SET name= ? WHERE id = ?', [data.itemName, data.id], callback);
}

module.exports = {
    show,
    create,
    destroy,
    edit,
    update
}