var web3 = require('web3');
var web3  = new web3();
web3.setProvider(new web3.providers.HttpProvider('http://47.106.92.62:8545'));

//获取账户
var account = web3.eth.accounts[0];
var accontArray = web3.eth.accounts;
console.log(account);
//余额
var banlanceInWei = web3.eth.getBalance(web3.eth.accounts[0]);
console.log(banlanceInWei);

var balanceInEther = web3.fromWei(web3.eth.getBalance(web3.eth.accounts[0]),'ether');
console.log(balanceInEther);


//将16进制转换为10进制
var number = web3.toDecimal('0x15');
console.log(number);

//将10进制数字或者10进制字符串转为16进制
var value = web3.fromDecimal('21');
console.log(value);

//新建用户地址
//var address = web3.personal.newAccount('long3737257');
//解锁用户
//web3.personal.unlockAccount(0x2f81fb3534fa7aa6b284dedd86084d6a98476bf0,'long3737257',1000);
//是否进行挖矿
var flag = web3.eth.mining;
console.log(flag);
//查看节点信息
//var messages = admin.nodeInfo;

//添加节点，如果是局域网，将ip换成局域网ip
//admin.addPeer("192.168.4.102");
//转账
//web3.eth.sendTransaction({form:account1,to:account2,value:web3.toWei(1,"ether")});

//等待打包的交易数量
//var stastrs = web3.txpool.status;

//获取目前的区块数量
//var blockNumber = web3.eth.blockNumber;
//console.log(blockNumber);

//通过块高获取区块信息
//var blockInfo = web3.eth.getBlock(512);

//获得区块中的所有交易的hash，返回值为一个列表
//var transactionArray = blockInfo.transactions;
//console.log(transactionArray);
//通过交易的hash值查询交易信息，通过交易，查询内部的个字段的值
//var transactionInfo = web3.eth.getTransaction(transactionArray);
//console.log(transactionInfo);

//在交易中添加一些data，会保存在transaction.input中，这些必须是hex格式，十六进制表示数据
//var hex1 = web3.formUtf8(data1);//添加中文数据
//var hex2 = web3.formAscii(data2);//英文数据
//如果想返回真实数据
//var data1 = web3.toUtf8(hex1);
//var data2 = web3.toAscii(hex2);