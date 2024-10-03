require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    Argochain_Testnet: {
      url: "https://rpctest.devolvedai.com",
      accounts: ["db43db1d5e411bb1e15bc24d05f80bef76e299dcf1287f58cf6d724624b330e6"],
      chainId: 1299,
    },
    // Polygon: {
    //   url: "https://rpctest.devolvedai.com",
    //   accounts: ["db43db1d5e411bb1e15bc24d05f80bef76e299dcf1287f58cf6d724624b330e6"],
    //   chainId: 1299,
    // },
  },
};
