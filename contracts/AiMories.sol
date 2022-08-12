// SPDX-License-Identifier: GPL-3.0
//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract AiMories is ERC721Enumerable, Ownable {
  using Strings for uint256;


    string public baseURI;
    string public serumURI;
    string public baseExtension = ".json";
    uint256 public SerumMinted = 0;
    uint256 public cost = .0 ether;
    uint256 public maxSupply = 10000;
    bool public paused = false;
    address public moriesContract = 0x1a2F71468F656E97c2F86541E57189F59951efe7;

    constructor() ERC721('AiMories', 'AiM') {}

  // external
  function mint() external payable {
    require(!paused);
    uint256 supply = SerumMinted;
    require(supply + 1 <= maxSupply);
    require(msg.value >= cost);
    SerumMinted++;
    _mint(msg.sender, supply + 10000);
  }

  function useSerum(uint256 morie) external {
    require(morie >= 0);
    require(morie <= 9999);
    require(!_exists(morie));
    uint256 wallet = walletSerum(msg.sender);
    require(wallet > 0);
    address target = IERC721(moriesContract).ownerOf(morie);
    require(target == msg.sender);
    _burn(wallet);
    _mint(msg.sender, morie);
  }

    //View
  function walletOfOwner(address _owner)
    public
    view
    returns (uint256[] memory)
  {
    uint256 ownerTokenCount = balanceOf(_owner);
    uint256[] memory tokenIds = new uint256[](ownerTokenCount);
    for (uint256 i; i < ownerTokenCount; i++) {
      tokenIds[i] = tokenOfOwnerByIndex(_owner, i);}
    return tokenIds;
  }

    function walletSerum(address _owner)
    public
    view
    returns (uint256)
  {
    uint256 ownerTokenCount = balanceOf(_owner);
    uint256 tokenId = 0;
    for (uint256 i; i < ownerTokenCount; i++) {
      if(tokenOfOwnerByIndex(_owner, i) > 9999){
      tokenId = tokenOfOwnerByIndex(_owner, i);}
    }
    return tokenId;
  }

  function tokenURI(uint256 tokenId)
    public
    view
    virtual
    override
    returns (string memory)
  {
    require(
      _exists(tokenId),
      "ERC721Metadata: URI query for nonexistent token"
    );
    if (tokenId >= 10000) {
    string memory currentBaseURI = serumURI;
    return bytes(currentBaseURI).length > 0
        ? string(abi.encodePacked(currentBaseURI, '1', baseExtension))
        : "";}
    else {
    string memory currentBaseURI = _baseURI();
    return bytes(currentBaseURI).length > 0
        ? string(abi.encodePacked(currentBaseURI, tokenId.toString(), baseExtension))
        : "";}
  }

    function _baseURI() internal view virtual override returns (string memory) {
    return baseURI;
  }

  //only owner
  function setCost(uint256 _newCost) public onlyOwner {
    cost = _newCost;
  }

  function setBaseURI(string memory _newBaseURI) public onlyOwner {
    baseURI = _newBaseURI;
  }

  function setBaseExtension(string memory _newBaseExtension) public onlyOwner {
    baseExtension = _newBaseExtension;
  }

  function pause(bool _state) public onlyOwner {
    paused = _state;
  }

  function withdraw() public payable onlyOwner {
    require(payable(msg.sender).send(address(this).balance));
  }
}