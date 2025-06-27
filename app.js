const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Session Middleware
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(flash());

// Routes
app.use('/', require('./routes/home'));
app.use('/menu', require('./routes/menu'));
app.use('/subscription', require('./routes/subscription'));
app.use('/contact', require('./routes/contact'));
app.use('/dashboard', require('./routes/dashboard'));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});