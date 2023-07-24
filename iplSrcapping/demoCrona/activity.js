// reqquest to web links
const request = require("request");
// console.log("before");

const cheerio = require('cheerio')
request("https://www.worldometers.info/coronavirus/",cb);
function cb(err,res,body){
    // console.error(err,"Eorror");
    // console.log(res);
    // console.log(body);
    // console.log(typeof body);
    if(err){
        console.error(err);
    }
    else{
        console.log(body);
    }
}
