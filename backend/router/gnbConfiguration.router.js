
const express = require('express')
const model = require('../model/gnbConfiguration.model')

const router = express.Router()

const UNIMPLEMENTED = (req, res) => {
    res.status(400).send("Unimplemented.\n")
}

router.get('/api/gnb/configuration', UNIMPLEMENTED)

router.get('/api/gnb/configuration/:id', UNIMPLEMENTED)

router.post('/api/gnb/configuration', UNIMPLEMENTED)

module.exports = router
