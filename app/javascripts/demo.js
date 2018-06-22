var web3 = require("web3");
var web3  = new web3();
var web3Admin = require("web3admin");
web3Admin.extend(web3);//扩展web3模块
web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));

var abi = [
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
        "name": "putOrder",
        "outputs": [],
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
        "name": "putTransfer",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
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
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_attr_number",
                "type": "uint256"
            }
        ],
        "name": "getAttribute",
        "outputs": [
            {
                "name": "",
                "type": "address"
            },
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "string"
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
        "inputs": [
            {
                "name": "_order_number",
                "type": "uint256"
            }
        ],
        "name": "getOrder",
        "outputs": [
            {
                "name": "",
                "type": "address"
            },
            {
                "name": "",
                "type": "address"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
];

var aAddress = "0x3a0D3caA1f382021Edd9C7eE59D9E4859158cE91";

var a = web3.eth.contract(abi).at(aAddress);

web3.personal.unlockAccount(web3.eth.accounts[0], "long3737257", 15000);
//放开指定的账号
web3.eth.defaultAccount = web3.eth.accounts[0];


//var myMonery = a.issue.sendTransaction(web3.eth.accounts[0], 10000, {from: web3.eth.accounts[0]});
//console.log(myMonery);
//var bances = a.getBalance(web3.eth.accounts[0]);
//console.log(bances);
//contract.default({from: web3.eth.accounts[0]});
//var transferrs = token.putTransfer.sendTransaction(web3.eth.accounts[1],"mm","20180514","ml",{form:web3.eth.accounts[0],gas: 300000});
//var transferrs = a.putTransfer(web3.eth.accounts[0],"tt","20180514","ll");


var getTrans = a.getAttribute(1).call().then(function(result) {
    console.log('contract greeter: ' + result);
//console.log(getTrans);
});