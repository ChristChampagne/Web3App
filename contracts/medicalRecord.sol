//SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract Records {
    string public medicalRecord;

    string public wallet;


    constructor(){
        medicalRecord = "";
    }
    
    function setMedicalRecord(string memory newMedicalRecord) public {
        medicalRecord = newMedicalRecord;
    } 
   
    
    function getInfo() public view returns (string memory){
        return string (medicalRecord);
    }

   // function getWallet()

}