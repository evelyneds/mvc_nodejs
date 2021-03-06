//require('dotenv/config')

module.exports={
    dialect:process.env.DB_DIALECT, 
    host:process.env.DB_HOST,
    username:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
    define:{
        timeStamps: true,
        underscored: true,
        underscoredAll: true,
    }

/*
 dialect:'postgres',
    host:'ziggy.db.elephantsql.com',
    username:'dlwcpkin',
    password:'apOufL43N0LcCbeWOgIsoWTmHLDpXAye',
    database:'dlwcpkin',
    define:{
        timeStamps: true,
        underscored: true,
        underscoredAll: true,
    }
*/



}