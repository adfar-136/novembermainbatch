var os = require("os")
// console.log(os)
console.log("CPU Architecture: ",os.arch())
console.log("Free Memory: ",os.freemem())
var memory = os.totalmem()/(1024*1024*1024)
console.log(memory.toFixed(2))
console.log(os.hostname())
console.log(os.type())
console.log(os.release())
console.log(os.platform())
// console.log("CPU Architecture: ",os.arch())