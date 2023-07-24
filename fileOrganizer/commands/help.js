// const { machine } = require( "os" );

function help(){

 console.log(
  '// These are some cli commands used in this project: \n',
        " 1: node main.js tree <path> \n",
        " 2: node main.js organize <path> \n",
        " 3: node main.js help"
 );
}

module.exports = {
 help : help
}