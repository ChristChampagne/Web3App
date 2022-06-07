
const medicalRecord = artifacts.require("Records")

module.exports = async function (deployer) {
   
    await deployer.deploy(medicalRecord);
    
    
    
};
