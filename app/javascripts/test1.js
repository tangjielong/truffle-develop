var web3 = require("web3");
var web3  = new web3();
var web3Admin = require("web3admin");
web3Admin.extend(web3);//扩展web3模块
web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));
var flag = web3.eth.mining;//判断是否挖矿
console.log(flag);
//web3.personal.unlockAccount('0x2f81FB3534FA7Aa6b284DEdD86084D6a98476BF0','long3737257',1000);
web3.miner.start();
//web3.miner.stop();