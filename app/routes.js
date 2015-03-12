module.exports = function (app) {
    // set up the RESTful API, handler methods are defined in api.js
    var api = require('../controllers/api.js');
    app.post('/thread', api.post);
    app.get('/thread/:title.:format?', api.show);
    app.get('/thread', api.list);
};