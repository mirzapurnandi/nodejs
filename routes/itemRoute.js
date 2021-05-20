const express = require('express')

const router = express.Router()

const items = require('../controller/items')

router.get('/', items.index)
router.get('/index', items.result)
router.get('/new', items.newData)
router.post('/create', items.create)
router.post('/delete/:id', items.deleteData)
router.get('/edit/:id', items.edit)
router.post('/update/:id', items.update)

module.exports = router