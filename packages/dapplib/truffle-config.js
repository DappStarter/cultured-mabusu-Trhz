require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom problem brown turtle chaos rare remember promote give process tail genuine'; 
let testAccounts = [
"0x24855cefa43b8a298777c330f7a6e6050bfb40356d17cc80d41a6e8d51a91413",
"0x390739cf88d725bb8afc51fbaca894722ff8c1d023a633179ebc22c2d9fb43f7",
"0xef6f7067f93da1e020e1d76369d3f5ec0b0ded50cb909bf841817b2f6b4555e9",
"0x066a9d9095ee590a13571addf788c5838133f6d7acf7a45ee57ec9d13783b0ff",
"0xea989e7707b2eb2b0f3ee751beae68b91c486884e34559df4feef7198d1a0708",
"0x2f39ec003aac200f62e9cc026c2a7c1b1a70612d99aea22fb5af94cc8a14abb9",
"0x4024c20627a240d52f7fa39d8fcf8b87ea6d16be64ab86c2198e610db8a1081b",
"0xa96592cb1f74a35d5a7548248e8f45ec42d260d309ed053bee3282f1fc8ce427",
"0x42dc4af1460931ed585dc3be9b2e6ed429dd65d51019c8a1ac459334bc1a39b6",
"0x2f4a8c8dc23414f9417bae72f52ecb6a9b9e9a3980faefb68f7f9a1a0626b784"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

