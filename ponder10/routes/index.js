const db = require('../config/db.config.js');

const Category = db.category;
const User = db.tusuario;
const Transaction = db.transactions;
const Balview = db.balview;
// force: true will drop the table if it already exists
db.sequelize.sync({force: false}).then(() => {
    console.log('Drop and Resync with { force: false }');
    console.log('users table has been successfully created, if one doesn\'t exist');
  }).catch(error => console.log('This error occured', error));


module.exports = (app) => {
///////////////////SEARCHING AJAX TESTING////////////////////////////
// second route

app.get('/searching', function(req, res){

	
    Balview.findAll().then(function(balviewResult){
        //console.log("Periods result: " + JSON.stringify(balviewResult));
     //   var err = null;
        //results = req.body.query.results.RDF.item[0]['about'];
        craig = JSON.stringify(balviewResult);
        //console.log(craig);
        res.send(craig);
    });
	

});

};
