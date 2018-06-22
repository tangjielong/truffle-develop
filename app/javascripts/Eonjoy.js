var web3 = require("web3");
var web3  = new web3();
var web3Admin = require("web3admin");
web3Admin.extend(web3);//扩展web3模块
web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));
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
var aAddress = "0x4456bfe80dA05EC414bC0d673AFF73f4E227E826";

var a = web3.eth.contract(abi).at(aAddress);
web3.personal.unlockAccount(web3.eth.accounts[0], "long3737257", 15000);
//放开指定的账号
web3.eth.defaultAccount = web3.eth.accounts[0];
//上链数据
var sayes = a.add.sendTransaction(web3.eth.accounts[0], "this is file hash", "this is the title", "abc",{from:web3.eth.accounts[0], gas:4700000});
console.log(sayes);
//打印上链数据到js中
var abs = a.attribute(0);
console.log(abs);
