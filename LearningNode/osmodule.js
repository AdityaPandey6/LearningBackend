const fs = require('fs');
const os = require('os');
console.log(os.freemem())
console.log(os.homedir())
console.log(os.hostname())
console.log(os.release())
console.log(os.cpus())
console.log(os.getPriority())
console.log(os.machine())
console.log(os.uptime())

console.log(__filename)

const f = fs.readFile('f.txt', 'utf-8', (error, data) => {
    console.log(error, data)
})
const a = fs.readFileSync('f.txt');
console.log(a.toString());