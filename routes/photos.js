const express = require('express');
const router = express.Router();
const Photos = require('../models/PhotoModel')

router.get('/', (req, res) => {
    Photos.find().then(
        photos => res.json(photos)
    ).catch(
        error => res.status(500).json({
            error: error.message
        })
    )
})

router.delete('/:id', (req, res) => {
    Photos.findByIdAndRemove(req.params.id).then(
        () => res.send(204)
    ).catch(
        error => res.status(500).json({
            error: error.message
        })
    )
})

module.exports = router