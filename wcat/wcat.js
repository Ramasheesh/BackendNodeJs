const os = require('os');
const fs = require('fs');
// node wcat.js [options] file path

// options is [ -s , -n , -b]

// -s:- display the big line breake
// -n:- display the numbering to all lines
//  -b:- numbering to non empty line

// 1> node wcat.js -s abc.txt[filepath] => display the context of a file in terminal

// let input = process.argv;
let inputArr = process.argv.slice(2);
// console.log(inputArr);


let optionsArr = [];

let fileArr = [];
for (let i = 0; i< inputArr.length ;i++ ){
 let firstChar = inputArr[i].charAt(0);
 // console.log(firstChar);

 if(firstChar == '-'){
  optionsArr.push(inputArr[i]);
 }
 else{
 fileArr.push(inputArr[i]);
}
}
// console.log("file to be readed",fileArr);
// check if the file is present or not
for(let i = 0; i<fileArr.length; i++){
    let fileExist = fs.existsSync(fileArr[i]);
    if(!fileExist){
     console.log("file does not exist");
    //  return;
     process.exit()
    }
   }
// content read and appending start
let content="";
for(let i = 0; i<fileArr.length; i++){
    let fileContent = fs.readFileSync(fileArr[i]);
    // content += fileContent ;
    // content += fileContent + "\n" ;
    // content += content + fileContent +"r\\n";
// or
    content += fileContent + os.EOL;
}

// console.log(content);

let contentArr = content.split(" "); //(os.EOL , "" ," ", "w" , "\n")
// console.table(contentArr);

// check if -s is present or not

let tempArr = [];
let isSPresent = optionsArr.includes("-s");
if(isSPresent){
    for(let i = 1; i<contentArr.length; i++){
        if(contentArr[i] == "" && contentArr[i-1]==""){
            contentArr[i] = null;
        }
        else if(contentArr[i] == "" && contentArr[i-1]==null){
            contentArr[i] = null;
        }
   }
// console.table(contentArr);
// null value remove
   for(let i = 0; i<contentArr.length; i++){
    //push everythings in array tempArr
        if(contentArr[i] != null){
            tempArr.push(contentArr[i]);
        }
    }
    console.log("remove extra line break",tempArr);
}

contentArr = tempArr;

let indexOfN = optionsArr.indexOf("-n");
let indexOfB = optionsArr.indexOf("-b");

// if both -n and -b is not fund hten return -1
let finalOption = "";
if(indexOfN != -1 && indexOfB != -1){
    if (indexOfN < indexOfB) {
        finalOption = "-n";
    }
    else{
        finalOption = "-b"
    }
}

// either -n is present or -b is present
else{
    if(indexOfN != -1){
        finalOption = "-n";
    }
    else if(indexOfB != -1){
        finalOption = "-b"
    }
}
// calling of functions by evaluating finalOptionaning
if(finalOption == "-n"){
    modifiyContentByN();
}
if(finalOption == "-b"){
    modifiyContentByB();
}
function modifiyContentByN(){
    for (let i = 0; i < contentArr.length; i++) {
        contentArr[i] = (i+1) + ":- " + contentArr[i];
    }
}
// console.log(contentArr);

function modifiyContentByB(){
    let count = 1;
    for (let i = 0; i < contentArr.length; i++) {
        if(contentArr[i] != ""){
            contentArr[i] = count + ":- " + contentArr[i];
            count ++;
        }
    }
}

console.log(contentArr);
