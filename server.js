var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
///////  DATABASE SETUP ////////

//var User = require('./models/user');


///////////////////////////////
var PORT = process.env.PORT || 8000;
// invoke an instance of express application.
var app = express();


// set our application port
app.set('port', PORT);

//the public_html folder
app.use(express.static("public"));
// set the view engine to ejs
app.set('views', './views'); //folder to look for the ejs templetes
app.set('view engine', 'ejs');

// set morgan to log info about our requests for development use.
app.use(morgan('dev'));

// initialize body-parser to parse incoming parameters requests to req.body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./ponder09/routes')(app);
require('./ponder10/routes')(app);


//var index = require('./routes/index');
//app.use('/', index);
// route for Home-Page
app.get('/', (req, res) => {
    res.redirect('/ponder09');
});

// route for user's dashboard
app.get('/ponder10', (req, res) => {
    
        res.render('ponder10/p10form');

});


//var inctrans = require('./routes/inctrans');
//app.use('/inctrans', inctrans);





app.get('/home', (req, res) => {
    if (req.session.user && req.cookies.user_sid) {
        
        res.render('home',{user:  req.session.user, loggedin:true , index1_active:false, index2_active:false, index3_active:false ,index4_active:false,index4_active:false} );
    } else {
        res.redirect('/login');
    }
});



// route for handling 404 requests(unavailable routes)
app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
});


// start the express server
app.listen(app.get('port'), () => console.log(`App started on port ${app.get('port')}`));

