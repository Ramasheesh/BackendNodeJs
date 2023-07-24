// reqquest to web links
const request = require("request");
// console.log("before");

const cheerio = require('cheerio')
request("https://www.worldometers.info/coronavirus/",cb);
function cb(err,res,body){
    if(err){
        console.error(err);
    }
    else{
        handleHtml(body);
    }
}
function handleHtml(html){
    let selecTool = cheerio.load(html)
    let cronaDetails = selecTool(".maincounter-number")
    // console.log(coranaDetails.text());
    let totalCases = selecTool(cronaDetails[0]).text();
    console.log('total no of Cases: ', totalCases);
    let totalDeath = selecTool(cronaDetails[0]).text();
    console.log('total no of Death: ', totalDeath);
    let totalRecoverd = selecTool(cronaDetails[0]).text();
    console.log('total no of Recoverd: ', totalRecoverd);

}