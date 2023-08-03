const mysql = require('mysql');
var con = mysql.createConnection({
    host: "ls-46de0f009be6ac57131adc488c1fc7cc6b22ffd9.cpjdlt4ax3rv.ap-south-1.rds.amazonaws.com",
    port: 3306,
    user: "admin",
    password: "admin_SoupX",
    database: "SoupX_Db",
});

con.connect((error) => {
    if (error) {
        console.log("Error connecting to the database:", error);
        return;
    }
    console.log("Database Connected");
})

module.exports = {con};