require("@nomiclabs/hardhat-waffle");

const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString();

// const projectId = "********************************";

const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: process.env.REACT_APP_INFURA_POLYGON_MUMBAI_RPC_URL,
      accounts: [privateKey]
    },
    mainnet: {
      url: process.env.REACT_APP_INFURA_POLYGON_MAINNET_RPC_URL,
      accounts: [privateKey]
    },
  },
  solidity: "0.8.4",
};
