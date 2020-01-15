var mysql = require('mysql')
var config = require('./config.json')
/*
var pool = mysql.createPool({
    host : config.dbhost,
    user : config.dbuser,
    password : config.dbpassword,
    database : config.dbname
});
console.log('pool : ' + pool);
*/


var connection = mysql.createConnection({
    host : config.dbhost,
    user : config.dbuser,
    password : config.dbpassword,
    database : config.dbname
});

exports.handler = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  connection.query('select * from kh.emp', function (error, results, fields) {

        if (error) {

            connection.destroy();

            throw error;

        } else {

            // connected!

            console.log(results);

            //connection.end(function (err) { console.log(err);});
            connection.end();

        }

    });
};
