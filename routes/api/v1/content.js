'use strict';

let express = require('express')
let router = express.Router()
let content = require('../../../controllers/api/v1/content')

//
router.use(function(req, res, next) {
    res.set({
        'Access-Control-Allow-Origin': '*'
    });
    next();
});

router.route('/:id')
    .get(content.show)
    .put(content.update)
    .delete(content.destroy)

router.route('/:id/update')
    .post(content.update)

router.route('/:id/del')
    .post(content.destroy)
    
router.route('/')
    .get(content.all)
    .post(content.create)

module.exports = function(app) {
    app.use('/api/v1/content', router);
};