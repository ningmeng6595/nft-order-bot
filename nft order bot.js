/* 本地日志功能 */
const fs = require('fs');
let options = { flags: 'a', encoding: 'utf8' }, stderr = fs.createWriteStream(__dirname + "\\findpk.log", options), logger = new console.Console(stderr)
if (1) fs.writeFile(__dirname + "\\findpk.log", '', ()=>{}) // 0 = 不删除之前的记录
// if (0) fs.writeFile(__dirname + "\\findpk.log", '', function (err) { if (err) console.log(err) }) // 0 = 不删除之前的记录
// logger.log('这是一条保存到文件里的日志1')

/* 初始化 */
const Web3 = require('Web3')
const web3 = new Web3('https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161')
process.on('uncaughtException', () => { })


/* 开始编写代码 */
// https://docs.opensea.io/reference/getting-assets
// https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161
// console.info('开始：')