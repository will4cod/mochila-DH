const index = function(req, res, next) {
    res.render('index', { title: 'will' });
}

module.exports = { index };