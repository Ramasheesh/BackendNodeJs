const fs = require('fs');
const path = require('path'); //path module

let types = {
 media: ["mp4", "mkv", "mp3"],
 archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
 documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
 app: ['exe', 'dmg', 'pkg', ,"apk","deb"],
 images: ['png', 'jpg', 'jpeg']
}

function organizeFn(dirPath) {
    console.log("organize command implemted for ", dirPath);
//1. input -> directory path given
    // let destPath;
    if (dirPath == undefined) {
        destPath = process.cwd();
        // console.log('destPath: ', destPath);
        // return;
    }
    // let oragnizeFiles = dirPath + "/" + "organize_files"
    let oragnizeFiles = path.join(dirPath, "organized_files");
    // console.log('organizeFiles: ', oragnizeFiles);
//2. create -> organize_files -> directory
    if (!fs.existsSync(oragnizeFiles)) {
        fs.mkdirSync(oragnizeFiles);
        // fs.mkdirSync("oragnizeFiles", {recursive: true}, err => { console.log(err);})
        console.log('folder created');

    }
    else{
        console.log("folder already exists");
    }
    //3. identify categories of all the files present in that input directory
    let allFiles = fs.readdirSync(dirPath);
    // console.log('allFiles: ', allFiles);
    for (let i = 0; i < allFiles.length; i++) {
        // let filePathExt = path.extname(allFiles[i]);
        let filePath = path.join(dirPath, allFiles[i]);
        // console.log('filePath: ', filePath);
        //1. check file or folder
        let isFile = fs.lstatSync(filePath).isFile();
        if(isFile){
            //1 get ext name
            let extName = path.extname(filePath).slice(1);
            // console.log('extName: ', extName);
            //2. get folder name from the ext name
            let folderName = getFolderName(extName);
            copyFileToFolder(filePath, oragnizeFiles, folderName);

        }

    }

}
// function to get the folder name from the ext name
function getFolderName(fileName){
    for(let key in types){
        for(let i = 0; i < types[key].length; i++){
            if(types[key][i] == fileName){
                return key;
            }
        }
    }
    return "others";
}
//  function to copy the file to the folder
function copyFileToFolder(filePath, oragnizeFiles, folderName){
    let destFolderPath = path.join(oragnizeFiles, folderName);
    if (!fs.existsSync(destFolderPath)) {
        fs.mkdirSync(destFolderPath);
    }

    let fileName = path.basename(filePath);
    let destFilePath = path.join(destFolderPath, fileName);
    fs.copyFileSync(filePath, destFilePath);
    fs.unlinkSync(filePath);
    console.log(fileName, "copied to ", folderName);
}
// let dirPath = 'P:\\WEB\\NodeJs\\NodeJs\\ProjectModule\\fileOrganizer\\downloads'
// let dirPath ='C:\Users\rch23\Downloads'
// organizeFn(dirPath);

module.exports = {
    organizerFn : organizeFn
}