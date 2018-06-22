var web3 = require("web3");
var web3  = new web3();
if(typeof web3 !=='undefined') {
    App.web3Provider = web3.currentProvider;  
    web3 =new Web3(web3.currentProvider);
}else{
    // 注意设置到你自己的 infura 地址
    App.web3Provider = new Web3.providers.HttpProvider('https://ropsten.infura.io/ubQWERawsd');  
    web3 =new Web3(App.web3Provider);
}

