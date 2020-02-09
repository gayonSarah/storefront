const express = require('express')
const app = express()
const port = 3000
// ----- mustache-express config :
var mustacheExpress = require('mustache-express');
 
// Register '.mustache' extension with The Mustache Express
app.engine('html', mustacheExpress());
app.disable('view cache');
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static('public'));

//ROUTES
app.get('/', function(req, res) {
    res.render('category-page.html', {"title": "Category"});
});

app.get('/cart', function(req, res) {
    res.render('cart.html', {"title": "Shopping Cart"});
});

app.get('/product-details', function(req, res) {
    res.render('product-details.html', {"title": "Product details"});
});

app.listen(port, () => console.log(`App listening on port http://localhost:${port}/`))
