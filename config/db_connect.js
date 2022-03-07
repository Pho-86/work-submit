const mysql = require('mysql')

require('dotenv').config()


var pool = mysql.createPool({
    connectionLimit : 100,
    host            : process.env.DB_HOST,
    user            : process.env.DB_USER,
    password        : process.env.DB_PASS,
    database        : process.env.DB_NAME
})

module.exports = {

    createPool: pool,

    query: (query, params, callback) => {
        pool.getConnection(function(err, connection) {
            if (err) throw err // not connected!
           
            // Use the connection
            connection.query(query, params, function (error, results, fields) {
              // When done with the connection, release it.
              connection.release()

              // Handle error after the release.
              if (error) throw error

              connection.destroy()

              callback(error, results)
        
            })
        })
    },

    pingCheck : (callback) => {
        pool.getConnection(function(err, connection) {
            if (err) {
                callback(true, err)
            } else {
                connection.destroy()
                callback(false, null)
            }
        })
    }
}