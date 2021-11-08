// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "hardhat/console.sol";

contract shahToken is ERC20{

    //This acts as a storage to keep all records of balance.
    mapping(address => uint) public balancesOf;
    mapping(address => mapping(address => uint)) public allowances;

    uint public _totalSupply = 10000000 *(10**10);

    constructor() ERC20("SHAHToken", "SHA"){
        address owner = msg.sender;
        balancesOf[owner] = _totalSupply;
    }

    function mint(address _account, uint256 _amount) public {
        require(_account != address(0));
        _totalSupply += _amount;
        balancesOf[_account] += _amount;
        emit Transfer(address(0), _account, _amount);
    }

    function totalSupplyIs() public view returns(uint){
        return _totalSupply;
    }

    function checkBalance(address _ownerOfToken) public view returns(uint){
        return balancesOf[_ownerOfToken];
    }

    //This allows the creator to send tokens.
    function transfer(address _to, uint _value) public override returns(bool sucess){
        require(_value <= balancesOf[msg.sender]);
        balancesOf[msg.sender] -= _value;
        balancesOf[_to] += _value;
        emit Transfer(msg.sender, _to, _value);
        return true;
    }

    //This allows an account to use tokens.
    function approve(address _spender, uint _value) public override returns(bool sucess){
        allowances[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }


    function Allowance(address _owner, address _receiver) public view returns(uint){
        return allowances[_owner][_receiver];
    }

    //This allows third party user to send tokens to the someone. if they are allowed.
    function transferFrom(address _from, address _to, uint _value) public override returns(bool sucess){
        require(_value <= balancesOf[_from]);
        require(_value <= allowances[_from][msg.sender]);
        balancesOf[_from] -= _value;
        balancesOf[_to] += _value;
        allowances[_from][msg.sender] -= _value;
        emit Transfer(_from, _to, _value);
        return true;
    }
    
}  