var web3 = require('web3');
var web3  = new web3();
web3.setProvider(new web3.providers.HttpProvider('http://127.0.0.1:8545'));

var account1 = web3.eth.accounts[0];
var account2 = web3.eth.accounts[1];

//解锁
web3.personal.unlockAccount(account1, "long3737257", 30000);
500000000000000000000000000
var abc = web3.fromWei("500000000000000000000000000");
console.log(abc)

//转账
//var abd = web3.eth.estimateGas({from:account1, to: account2, value: web3.toWei(1, "ether")});
//console.log(abd);
//var tranfer = web3.eth.sendTransaction({from: account1, to: account2, value: web3.toWei(1, "ether"),gas:21050});

//var values = web3.eth.getTransaction("0x524176a8646aaf6650f260c9d9f4e5db8d9ef08777a8fdef6fff16c3cd1904af");
//交易获取多少gas


//获取交易值




