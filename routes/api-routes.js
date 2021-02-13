const express = require('express')
const router = express.Router()
const db = require('../models')

// router.get()

router.post('/api/todos', async (req, res) => {

    try {
        // pause the code with await and create the record
        await db.Todo.create(req.body)
        res.stats(200).send()
    } catch(err) {
        res.status(500).send(err)
    }
})

// router.put()

// router.delete()

module.exports = router