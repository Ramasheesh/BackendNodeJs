const path = require("path");
const fs = require("fs");
// this function is used to print the tree
function treeFn(dirPath){
 if(dirPath == undefined){
  console.log("Please Enter a Valid Path");
  return;
 }
 // check if the path is valid or not
 let doesExist = fs.existsSync(dirPath);
 if(doesExist){
  treeHelper(dirPath, " ");
 }
}
// this function is used to print the tree
function treeHelper(targetPath, indent){
 // check if the path is valid or not

 let isFile = fs.lstatSync(targetPath).isFile();
 // check if the path is a file or a directory
 // if it is a file then print the file name
 // if it is a directory then print the directory name
 // and call the treeHelper function for the children of the directory
 // and then print the children of the directory
 // so that the tree is printed in the desired format

 // if(isFile){
 //  console.log(indent + "├──" + path.basename(targetPath));
 // }
 if(isFile){
  let fileName = path.basename(targetPath);
  console.log(indent + "├──" + fileName);
 }
 else{
  // this is a directory
  let dirName = path.basename(targetPath);
  console.log(indent + "└──" + dirName);
  let children = fs.readdirSync(targetPath);
  // console.log(children);
  for(let i=0; i<children.length; i++){
   let childPath = path.join(targetPath, children[i]);
   treeHelper(childPath, indent + "\t");
  }
  return ;
 }
}

// exporting the tree function
module.exports = {
 treeFn : treeFn
}