const express = require('express')
const router = express.Router()

// router.get()

router.post('/api/todos', (req, res) => {
    console.log(req.body)
    res.end()
})

// router.put()

// router.delete()

module.exports = router