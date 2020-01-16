var mysql = require('mysql')
var config = require('./config.json')




exports.handler = (event, context, callback) => {

  var connection = mysql.createConnection({
      host : config.dbhost,
      user : config.dbuser,
      password : config.dbpassword,
      database : config.dbname
  });
  context.callbackWaitsForEmptyEventLoop = false;
  connection.query('select * from kh.emp where sleep(3) = 0', function (error, results, fields) {

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
