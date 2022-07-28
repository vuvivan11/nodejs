const newsRoute = require('./news')

function routes(app) {

    app.use('/news', newsRoute);

    app.get('/', (req, res) => {
        res.render('home');
    });

    app.get('/search', (req, res) => {
        res.render('search');
    });
}

module.exports = routes