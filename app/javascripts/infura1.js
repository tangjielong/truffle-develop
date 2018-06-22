var web3 = require("web3");
var web3  = new web3();
var web3Admin = require("web3admin");
web3Admin.extend(web3);//扩展web3模块
// xxxx为你在infura申请的地址
web3.setProvider(new web3.providers.HttpProvider("https://ropsten.infura.io/bhkRk7IJ023nMWaG09ov"));
var aAddress = "0xA12EC2A937Abc1467B2feB668Ad18a0491f04C75";
var abiToken = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "from",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Burn",
        "type": "event"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_spender",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "name": "success",
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
                "name": "_spender",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            },
            {
                "name": "_extraData",
                "type": "bytes"
            }
        ],
        "name": "approveAndCall",
        "outputs": [
            {
                "name": "success",
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
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "burn",
        "outputs": [
            {
                "name": "success",
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
                "name": "_from",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "burnFrom",
        "outputs": [
            {
                "name": "success",
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
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
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
                "indexed": true,
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
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
                "name": "_from",
                "type": "address"
            },
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "name": "success",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "initialSupply",
                "type": "uint256"
            },
            {
                "name": "tokenName",
                "type": "string"
            },
            {
                "name": "tokenSymbol",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "address"
            },
            {
                "name": "",
                "type": "address"
            }
        ],
        "name": "allowance",
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
                "type": "address"
            }
        ],
        "name": "balanceOf",
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
        "name": "decimals",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
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
        "inputs": [],
        "name": "symbol",
        "outputs": [
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
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
];
//获取协议
var abToken = web3.eth.contract(abiToken).at(aAddress);
//申请账号
var account1 = "0x9382b62F56A940aB85aEc37DFfaa3CdCA2b7eF3d";
var account2 = "0xc4969Fd4ec16f1EA57CDB928455C2Af3347403C7";


var Tx = require('ethereumjs-tx');
var privateKey = new Buffer('a0e17b9dded10be6ea6cae4bb8e0e39d5e01447131b1258d4e41a4b967f3dff9', 'hex');
//从路径获取私匙方法
//var keythereum = require("keythereum");
//var datadir = "D:/kaifa/MetaMask Account 1 Private Key";
//var fromkey = keythereum.importFromFile("0xc4969Fd4ec16f1EA57CDB928455C2Af3347403C7", datadir);
//var privateKey = keythereum.recover('long150700', fromkey);
//var transCount = web3.eth.getTransactionCount('0x060394c2d6ca6a98d6c0c06e187516960eaad0da’,‘pending');

//var data = contract.transfer.getData(account1, 10000, {from: account2});
function balance(addr) {
    var start = Date.now();
    var latestBalance = web3.eth.getBalance(addr, "latest");
    var nonce = web3.eth.getTransactionCount(addr, "latest");
    var end = Date.now();
    return nonce;
}
//这个大小是18次方后的值，要后面街上18个0就可以
var transferAmount = web3.toWei('99', 'ether');

//data: abToken.methods.transfer(account1, transferAmount).encodeABI(),
console.log("abToken"+abToken.transfer.getData(account1, transferAmount));
var rawTx = {
    nonce: balance(account2),//由eth_getTransactionCount获取。参数为交易发送方地址
    to: '0xA12EC2A937Abc1467B2feB668Ad18a0491f04C75',
    gasPrice:'0x4a817c800',
    gasLimit: '0x47e7c4',
    value: '0x0',
    data: abToken.transfer.getData(account1, transferAmount),
    chainId: 3
}
var tx = new Tx(rawTx);
tx.sign(privateKey);
var serializedTx = tx.serialize();
var rawparam = serializedTx.toString('hex');
console.log(rawparam)//f865808504a817c8008347e7c4949382b62f56a940ab85aec37dffaa3cdca2b7ef3d0a8029a0d10fb56204c8ee2e85b1b6c927793354c6f5f32b45b37ed45fd936718f013c64a009bec38342654ac70e83d7490d5ea42424190b94b0e57dfecb38469d9b91dd71

var receipt = web3.eth.sendRawTransaction('0x' + rawparam, function(err, result) {
    if(err) {
        txLog = err;
    } else {
        txLog = result;
        console.log("txLog"+txLog);
    }
});
console.log(receipt);


//查看协议函数
/*var result = web3.eth.call({
    to: "0xA12EC2A937Abc1467B2feB668Ad18a0491f04C75",
    data: "0x" + "18160ddd"
});*/
// Print Result
//console.log(parseInt(result, 16));

//查询合约的 function signature
//var functionSig = web3.sha3("balanceOf(aAddress)").substr(2,8);
//console.log("functionSig"+functionSig)





//账户积分余额
/*var aBalance = abToken.balanceOf(account1);
var bBalance = abToken.balanceOf(account2);
console.log(aBalance);
console.log(bBalance);*/
//var txhash = abToken.transfer.sendTransaction(account1, 100, {from:account2});
//console.log(txhash);
/*var balances = abToken.balanceOf("0xc4969Fd4ec16f1EA57CDB928455C2Af3347403C7");
console.log(balances);*/

//转账
//var transfers = abToken.transferFrom("0xc4969Fd4ec16f1EA57CDB928455C2Af3347403C7",addrsss,10000);

//a.transfer(account1,amount,{from:account2});
//web3.personal.unlockAccount(account2, "long150700", 10);


//abToken.transfer(account1,100,{from:account2});






