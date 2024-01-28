const { PrivateKey } = require("bitcore-lib");

const { mainnet, testnet } = require("bitcore-lib/lib/networks");
const Mnemonic = require("bitcore-mnemonic/lib/mnemonic");

const createWallet = (network = mainnet) => {
  let privateKey = new PrivateKey();
  let address = privateKey.toAddress(network);
  return {
    privateKey: privateKey.toString(),
    address: address.toString(),
  };
};

const createHDWallet = (network = mainnet) => {
  let passPhrase = new Mnemonic(Mnemonic.Words.SPANISH);
  let xpriv = passPhrase.toHDPrivateKey(passPhrase.toString(), network);

  return {
    xpub: xpriv.xpubkey,
    privateKey: xpriv.privateKey.toString(),
    address: xpriv.publicKey.toAddress().toString(),
    mnemonic: passPhrase.toString(),
  };
};

module.exports = {
    createHDWallet,
  createWallet,
};
