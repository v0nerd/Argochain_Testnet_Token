const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const MyToken = await hre.ethers.getContractFactory("ForPeopleByPeople");
    const initialSupply = hre.ethers.parseEther("100000000000000"); // 100000000000000 tokens

    console.log('MyToken ', MyToken);

    // Estimate gas for deployment
    const gasEstimate = await hre.ethers.provider.estimateGas(
        MyToken.getDeployTransaction(initialSupply)
    );

    console.log("Estimated gas for deployment:", gasEstimate.toString());

    // Optionally set gas price and gas limit
    // const gasPrice = hre.ethers.parseUnits('10', 'gwei'); // Adjust based on the Argochain Testnet
    // const gasLimit = 5000000; // Adjust based on the complexity of your contract

    // const currentNonce = await hre.ethers.provider.getTransactionCount(deployer.address);

    // Deploy the contract
    try {
        const myToken = await MyToken.deploy(initialSupply);

        // Log the contract address
        console.log("MyToken deployed to:", myToken);
    } catch (error) {
        console.error("Error deploying contract:", error);
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });