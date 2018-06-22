var web3 = require("web3");
var web3  = new web3();
var web3Admin = require("web3admin");
web3Admin.extend(web3);//扩展web3模块
// xxxx为你在infura申请的地址
web3.setProvider(new web3.providers.HttpProvider("https://ropsten.infura.io/bhkRk7IJ023nMWaG09ov"));

var Tx = require('ethereumjs-tx');
//申请账号
var account1 = "0x9382b62F56A940aB85aEc37DFfaa3CdCA2b7eF3d";
var account2 = "0xc4969Fd4ec16f1EA57CDB928455C2Af3347403C7";


function balance(addr) {
    var start = Date.now();
    var latestBalance = web3.eth.getBalance(addr, "latest");
    var nonce = web3.eth.getTransactionCount(addr, "latest");
    var end = Date.now();
    return nonce;
}



function showBalance(addr) {
    var start = Date.now();
    var latestBalance = web3.eth.getBalance(addr, "latest");
    var nonce = web3.eth.getTransactionCount(addr, "latest");
    var end = Date.now();
    var res = {
        "address": addr,
        "balance": latestBalance + " Wei / " + web3.fromWei(latestBalance).toString() + " ETH",
        "nonce": nonce.toString(),
        "timestamp": (end - start).toString() + "ms"
    }
    return res;
}



function sendBalance(_from, _to) {
    var nonce = balance(_from);
    var amount = 0.05;
    var rawTx = {
        nonce: web3.toHex(nonce),
        gasPrice: web3.toHex(10),
        gasLimit: web3.toHex(21000),
        to: _to,
        value: web3.toHex(amount * 1000000000),
        data: "",
        chainId: 3
    }

    var addFromPrivateKey = new Buffer('a0e17b9dded10be6ea6cae4bb8e0e39d5e01447131b1258d4e41a4b967f3dff9', 'hex');
    var transaction = new Tx(rawTx);
    transaction.sign(addFromPrivateKey);
    var res ="";
    var serializedTx = transaction.serialize().toString('hex');
    /*web3.eth.sendTransaction({
        from: _from,
        to: _to,
        value: web3.toWei(amount, "ether"),
        gas: rawTx.gasLimit,
        price: rawTx.gasPrice,
        nonce: rawTx.nonce
    });*/
    var txLog = "";
    web3.eth.sendRawTransaction('0x' + serializedTx, function(err, result) {
     if(err) {
          txLog = err;
      } else {
          txLog = result;
          console.log("txLog12"+txLog);
      }
    });
    res = "Status: " + res + " |||| from: " + _from + "\nsendValueETH: " + amount + "\nrawTx: " + JSON.stringify(rawTx, null, 4) + " " + txLog;
    return res;
}




