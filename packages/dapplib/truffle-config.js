require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'imitate prize frame street name raise ranch coconut install hen equal gift'; 
let testAccounts = [
"0xbbc0cdbea9d0e21de855fb37cae36972e3cbe8967ad47c0655ad6d79b4e91ca0",
"0x3efbcba2aa304e6b87e00d5be25d30e1e331136503e5bdd4d54204f41958be20",
"0x9aeef9469ae6d89fd6240c6edefeed78f83ca3293bd9d4ab555aea48a58ed31a",
"0x037ccff6d90d90593943d49246e58aa52a8b287871f5cad551097af622aff347",
"0xa83186ef0c8774c6047bf388bdf3800acf36192c784893aded7340032ae85aff",
"0xa6f66952f797c1cdf379d71a9d962fe8a89ad73b298bc9f9ef779528350c1ada",
"0x9844fbb869b37c2fa03de4339444dbf92606cd9f221f473557b588c7ad6b2d6e",
"0x45fe57484b601296914bc69a4848588c0032e7f72e50feae070c9eaf7c72c8dc",
"0x0969fc4fbefd82b713ad87648dc8bd8081efe3c11a29fcc6a99b6f521d4a9798",
"0x4528739e3edf26955d2b7d3dbeba12fc716fee7e2bd8eee3396898d15365b393"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

