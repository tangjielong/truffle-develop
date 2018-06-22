var web3 = require("web3");
var web3  = new web3();
var web3Admin = require("web3admin");
web3Admin.extend(web3);//扩展web3模块
// xxxx为你在infura申请的地址
web3.setProvider(new web3.providers.HttpProvider("https://ropsten.infura.io/bhkRk7IJ023nMWaG09ov"));
/*web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/bhkRk7IJ023nMWaG09ov"));*/

// wei是以太坊上的的最小单位，ether小数点后18位为一个wei
//var balanceWei = web3.eth.getBalance("0xc4969Fd4ec16f1EA57CDB928455C2Af3347403C7").toNumber();
// 从wei转换成ether
//var balance = web3.fromWei(balanceWei, 'ether');

//web3.eth.personal.unlockAccount('0x9382b62F56A940aB85aEc37DFfaa3CdCA2b7eF3d', "long150700", 5);
//console.log(balance);
var MyTokenABI = [
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
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
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
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
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
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            },
            {
                "name": "_spender",
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
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "_from",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "_to",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "_owner",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "_spender",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    }
];

var aAddress = "0xFEf695E315c68a7CaB26D0eEF11765544DBB0E6f";
// 目前web3没有api来解锁账户,只能自己事先解锁
var tokenContract = web3.eth.contract(MyTokenABI, null, {
    from: '0x1a9ec3b0b807464e6d3398a59d6b0a369bf422fa'
});

//获取协议
//var tokenContracted = web3.eth.contract(MyTokenABI, '0xFEf695E315c68a7CaB26D0eEF11765544DBB0E6f');

/*tokenContracted.methods.transfer("0x8c1b2e9e838e2bf510ec7ff49cc607b718ce8401",387).send({from: '0x1a9ec3b0b807464e6d3398a59d6b0a369bf422fa'})
    .on('transactionHash', function(hash){
    })
    .on('confirmation', function(confirmationNumber, receipt){
    })
    .on('receipt', function(receipt){
        // receipt example
        console.log(receipt); //查询这里可以得到结果
    })
    .on('error', console.error); // If a out of gas error, the second parameter is the receipt.*/

var a = web3.eth.contract(MyTokenABI).at(aAddress);

//var abc = a.constructor;
//console.log(abc);
var banlances = a.balanceOf("0xc4969Fd4ec16f1EA57CDB928455C2Af3347403C7");
console.log(banlances);




