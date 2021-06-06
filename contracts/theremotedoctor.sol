pragma solidity ^0.6.0;
contract theremotedoctor {

    struct Voter {
        address patient;
        address doctor;
        bytes32 report_hash;
        bool permission;
    }
    
    mapping(uint => Voter) appointment_number;

    function addReport(uint _an, address _patient, bytes32 _hash) public {
        appointment_number[_an]=Voter(_patient, msg.sender, _hash, true);
    }
    
    function getHash(uint _an) public view returns(bytes32){
       if(checkPermission(_an, msg.sender))
            return appointment_number[_an].report_hash;
        return "NULL";
    }
    
    function checkPermission(uint _an, address _doc) private view returns(bool){
        if(appointment_number[_an].doctor == _doc && appointment_number[_an].permission)
            return true;
        return false;
    }
}
    