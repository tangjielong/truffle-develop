//var api = require('etherscan-api').init('YourApiKey','ropsten');
var api = require('etherscan-api').init('YourApiKeyToken', 'ropsten');
var balance = api.account.balance('0xc4969Fd4ec16f1EA57CDB928455C2Af3347403C7');
balance.then(function(balanceData){
    console.log(balanceData);
});
//获取用户的转账记录txList
//var txlist = api.account.getminedblocks('0xc4969Fd4ec16f1EA57CDB928455C2Af3347403C7');
//console.log(txlist);

//var supply = api.account.tokenbalance('0xc4969Fd4ec16f1EA57CDB928455C2Af3347403C7', false, '0x57d90b64a1a57749b0f932f1a3395792e12e7055');
//console.log(supply);

/*
var txlist = api.account.txlist('0xc4969Fd4ec16f1EA57CDB928455C2Af3347403C7');
txlist.then(function(res){
    console.log(txlist);
    assert.ok(res);
   done();
});
*/

//var txlist1 = api.account.txlistinternal('0xc4969Fd4ec16f1EA57CDB928455C2Af3347403C7');
//console.log(txlist1);


//var abi1 = api.contract.getabi('0xfef695e315c68a7cab26d0eef11765544dbb0e6f ');
//console.log(abi1);


//var res = api.proxy.eth_blockNumber();

var res1 = api.proxy.eth_getTransactionCount('0xc4969Fd4ec16f1EA57CDB928455C2Af3347403C7', 'latest');
console.log(res1);
setTimeout(() => {
    //console.log(res);
    console.log(res1);
},1000);


var abi = [
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





