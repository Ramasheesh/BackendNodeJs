// reqquest to web links
const request = require("request");
// get the data from web to html body
const cheerio = require('cheerio');
const allMatch = require('./allMatch')

let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595"
request(url,cb);
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
    // let ancherEle = selecTool('div[class="ds-border-t ds-border-line  ds-text-center ds-py-2"]');
    let ancherEle = selecTool('div[class="ds-border-t ds-border-line  ds-text-center ds-py-2"] a[href="/series/ipl-2020-21-1210595/match-schedule-fixtures-and-results"]')
    // console.log(ancherEle.html());

    // attr method get the data from html body
    let reativeLink = ancherEle.attr("href");
    // console.log('reativeLink: ', reativeLink);
    let fullLink = "https://www.espncricinfo.com" + reativeLink;
    // console.log('fullLink: ', fullLink);
    allMatch.getAllMatch(fullLink);

}
// /series/major-league-cricket-2023-1357742/match-schedule-fixtures-and-results"
