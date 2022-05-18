
const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit : 100, //important
    host     : 'localhost',
    user     : 'root',
    password : 'Groople123',
    database : 'entries',
    debug    :  false
});


/*
pool.query("SELECT * FROM entries",(err, data) => {
    if(err) {
        console.error(err);
        return;
    }
    // rows fetch
    console.log(data);
});*/

function getMeanings(word)
{
    return new Promise(function(resolve, reject) {
        

        var query_str = "SELECT * FROM entries where word ='"+word+"'";


        pool.query(query_str,(err, data) => {
            if(err) {
                return reject(err);
            }
            resolve(data);
        });
        
    });
}

module.exports.getMeanings = getMeanings;