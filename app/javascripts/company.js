var web3 = require("web3");
var web3  = new web3();
var web3Admin = require("web3admin");
web3Admin.extend(web3);//扩展web3模块
web3.setProvider(new web3.providers.HttpProvider("http://47.106.92.62:8545"));
var abi =[
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "from",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            },
            {
                "name": "_name",
                "type": "string"
            },
            {
                "name": "_date",
                "type": "string"
            },
            {
                "name": "_desc",
                "type": "string"
            }
        ],
        "name": "add",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            },
            {
                "name": "_order",
                "type": "address"
            },
            {
                "name": "_maney",
                "type": "uint256"
            },
            {
                "name": "_date",
                "type": "string"
            },
            {
                "name": "_desc",
                "type": "string"
            }
        ],
        "name": "addTrs",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "account",
                "type": "address"
            },
            {
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "issue",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "account",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "Issue",
        "type": "event"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "to",
                "type": "address"
            },
            {
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "attribute",
        "outputs": [
            {
                "name": "owner",
                "type": "address"
            },
            {
                "name": "name",
                "type": "string"
            },
            {
                "name": "date",
                "type": "string"
            },
            {
                "name": "desc",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "creator",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "account",
                "type": "address"
            }
        ],
        "name": "getBalance",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getNumber",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "orderes",
        "outputs": [
            {
                "name": "owner",
                "type": "address"
            },
            {
                "name": "order",
                "type": "address"
            },
            {
                "name": "maney",
                "type": "uint256"
            },
            {
                "name": "date",
                "type": "string"
            },
            {
                "name": "desc",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
];
//查询余额 转化为eth后的值
//web3.fromWei(eth.getBalance("0x2f81fb3534fa7aa6b284dedd86084d6a98476bf0"))

//var aAddress = "0x6E6e487BeA94C943F2e7c517de0308a377D4B758";
//var aAddress = "0xcbdcab140e2fd673c5424bef768ad2dfb3296632";

//var a = web3.eth.contract(abi).at(aAddress);
//web3.personal.unlockAccount(web3.eth.accounts[0], "long3737257", 15000);
//web3.eth.defaultAccount = web3.eth.accounts[0];
//上链数据
//var sayes = a.add.sendTransaction(web3.eth.accounts[0], "this is file hash", "this is the title", "abc",{from:web3.eth.accounts[0], gas:4700000});
//上链数据
//var sayes = a.addTrs.sendTransaction(web3.eth.accounts[0],web3.eth.accounts[1], 123, "this is the title", "abc",{from:web3.eth.accounts[0], gas:4700000});

//console.log(sayes);

//var numbers = a.getNumber();
//console.log(numbers);
//打印上链数据到js中
//var abs = a.attribute(0);
//console.log(abs);

//var abs = a.orderes(0);
//console.log(abs);



//获取里面字段长度
//var lengthed = a.attribute().length;
//console.log(lengthed);

//监听事件
//var filter = web3.eth.filter('pending');

//filter.watch(function (error,log) {
 //   console.log(log);
//});

//filter.get(function (error,log) {
  // console.log(log);
//});

//filter.stopWatching();


//查询区块的信息
var blockNumber = web3.eth.blockNumber;
console.log(blockNumber);
var blocksInfo = new Array();
var index = 0;
var transactionsInfo = [];
for(var i= blockNumber;i>blockNumber-10;i--){
    blocksInfo[index] = web3.eth.getBlock(i);
    //console.log( blocksInfo[index].timestamp);
    //console.log( blocksInfo[index].hash);
    //通过区块的hash值查出这个交易
    var transactions = web3.eth.getBlock(blocksInfo[index].hash).transactions;
for(var i=0;i<transactions.length;i++){
 var hash = transactions[i];
    transactionsInfo[i] = web3.eth.getTransaction(hash);
}
console.log(transactionsInfo);
    index++;
}








