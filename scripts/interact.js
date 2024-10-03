const hre = require("hardhat");

async function main() {
    const tokenAddress = "0x88d7eA782F2f6a4a46ad1CA956E3aE75FBd61A21"; // replace with your contract address
    const [owner] = await hre.ethers.getSigners();
    const MyToken = await hre.ethers.getContractAt("ForPeopleByPeople", tokenAddress);

    // Read functions
    const name = await MyToken.name();
    const symbol = await MyToken.symbol();
    const totalSupply = await MyToken.totalSupply();
    
    console.log("Token Name:", name);
    console.log("Token Symbol:", symbol);
    console.log("Total Supply:", totalSupply.toString());

    // Write functions
    const recipient = "0xBa17fD16Dee03FAA7F460C016D7963e5dc4072CA"; // replace with recipient address
    const amount = hre.ethers.parseEther("10000"); // 10000 tokens

    const tx1 = await MyToken.transfer(recipient, amount);
    await tx1.wait();
    console.log("Transferred 10 tokens to:", recipient);

    const tx2 = await MyToken.approve(recipient, amount);
    await tx2.wait();
    console.log("Approved 10000 tokens for:", recipient);

    const tx3 = await MyToken.transferFrom(owner.address, recipient, amount);
    await tx3.wait();
    console.log("Transferred 10000 tokens from owner to:", recipient);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });