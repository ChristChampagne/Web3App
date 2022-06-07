
const personMedicalRecord = artifacts.require("Records")

// since a deployed contract cannot be easily updated, it is advised to test contracts with unit-tests
contract('Claim Test', () => {

    it('Inicializado Transacción', async function () {
        // sample of a claiming-test to verify that an NFT can be only claimed once
        const medicalContract = await personMedicalRecord.deployed();
        
        
        try {
            await medicalContract.setMedicalRecord("String encripted")
           //await medicalContract.testing1()
            let respuesta = await medicalContract.getInfo()
            console.log(respuesta);
            
        } catch (e) {
            assert.equal(e.reason, 'Error in the transaction', 'Wrong exception thrown');
        }
    });
});
