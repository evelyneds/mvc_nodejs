export default {
    //secret: 'dfd2fe109f6c9d7056c7207397c24a64', //https://www.md5hashgenerator.com/
    //expiresIn:'1d',
    secret:process.env.APP_SECRET, 
    expiresIn:process.env.APP_EXPIRESIN,
}