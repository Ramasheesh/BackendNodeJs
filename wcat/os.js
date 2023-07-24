const os = require('os')
//return the underlinig architecture
let myStstemArc = os.arch();
// console.log(myStstemArc);

let mysCpuInfo = os.cpus();
// console.log(mysCpuInfo);

// return host name of the operating system as astring
let hostname = os.hostname();
// console.log(hostname);

let networkInfo = os.networkInterfaces();
// console.log(networkInfo);
let plateform = os.platform();
console.log(plateform);
console.log(os.release());
console.log(os.type());
console.log(os.totalmem());
console.log(os.uptime()/3600);
console.log(os.userInfo());



// so this is the basic of os module and you can find more information about it in the official documentation of node