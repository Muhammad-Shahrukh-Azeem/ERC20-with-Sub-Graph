const hre = require("hardhat");
async function main() {

  await hre.run('compile');
  const shahToken = await hre.ethers.getContractFactory("shahToken");
  const sha = await shahToken.deploy();

  await sha.deployed();

  console.log("Contract has been deployed to : ", sha.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
