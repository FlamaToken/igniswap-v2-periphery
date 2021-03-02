var Router = artifacts.require("IgniswapRouter.sol");

module.exports = function(deployer) {
  // Testnet
  const factoryAddressTEST = '0xd91019Fb3180F1d4238174B1ea66Db24DD804026'
  const WBNBAddressTEST = '0xae13d989dac2f0debff460ac112a837c89baa7cd'
  deployer.deploy(Router, factoryAddressTEST, WBNBAddressTEST);

  // BSC
  /*const factoryAddressTEST = '0x2Eeb9ba03e4A7094A202C1f7943fB2B3a3d20F51'
  const WBNBAddressTEST = '0xae13d989dac2f0debff460ac112a837c89baa7cd'
  deployer.deploy(Router, factoryAddress, WBNBAddress);*/
};
