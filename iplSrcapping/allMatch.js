// reqquest to web links
const request = require("request");
// get the data from web to html body
const cheerio = require('cheerio');
const getScoreCard = require('./indfoscoreCard');

let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595"
request(url,cb);
function getAllMatch(url ,cb){
    // console.log("full link from allmatch: ",url);
    request(url ,cb)
}
function cb(err,res,body){
    if(err){
        console.error("error",err);
    }
    else{
        handleHtml(body);
        // console.log(body);
    }
}
function handleHtml(html){
    let selecTool = cheerio.load(html)
    let allMatchEle = selecTool('a[href="/series/ipl-2020-21-1210595/match-schedule-fixtures-and-results"]')
    // console.log('allMatchEle: ', allMatchEle.text());
    console.log(allMatchEle.length);
    for(let i =0 ; i<= allMatchEle.length-1 ; i++ ){
        let allMatchLink = selecTool(allMatchEle[i]).attr('href')
        // console.log('allMatchLink: ',i,": ", allMatchLink);
        let fullLink = "https://www.espncricinfo.com" + allMatchLink;
        // console.log('fullLink: ', fullLink);
        getScoreCard.gifc(fullLink);
        break;
    }

}
// data from allMatch
module.exports ={
    getAllMatch: getAllMatch
}