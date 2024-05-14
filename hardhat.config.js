require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()
require("@nomicfoundation/hardhat-chai-matchers")
require("@nomiclabs/hardhat-ethers");
require('hardhat-contract-sizer');
require('@openzeppelin/hardhat-upgrades');
require('ethers')
require('./scripts/deploy.js')

/* Test with mocha: 
  mocha test --timeout 40000
*/

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  }, 
  settings: { 
    optimizer: { 
      enabled: true, 
      runs: 200 
    } 
  }
};