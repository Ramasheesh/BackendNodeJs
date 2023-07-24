let helpFunction = require("./commands/help.js");
const organizer = require("./commands/organize.js");
const tree = require("./commands/tree.js");

//
let inputArr = process.argv.slice(2);
let command = inputArr[0];
let path = inputArr[1];

//enttry point of my command line
switch (command) {
 case "tree":
  // console.log("Tree command executed with path ", path);
  tree.treeFn(path)
  break;
 case "organizer":
  // console.log("Organizer command executed with path ", path);
  organizer.organizerFn(path)
  break;
 case "help":
  // console.log("Help command executed with path ", path);
  helpFunction.help();
  break;
 default:
  console.log("Please input a valid command");
  break;
}
