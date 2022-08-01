import React, { Component } from 'react';
import Web3 from 'web3';
import './App.css';
import Nav from './Nav.js';
import Intro from './Intro.js';
import InfoPanel from './InfoPanel.js';
import Minter from './Minter.js';
import UseSerum from './UseSerum.js';
import Footer from './Footer.js';

class App extends Component {

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }
  async loadWeb3(){
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-ethereum browser detected. Metamask install is recommended.')
    }
  }
  async loadBlockchainData() {
    const web3 = window.web3

    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })

    //const networkId = await web3.eth.net.getId() 

    //load Tree Token
    //const treeTokenData = TreeToken.networks[networkId]
    //if(treeTokenData) {
      //const treeToken = new web3.eth.Contract(TreeToken.abi, treeTokenData.address)
      //this.setState({ treeToken })
      //let treeTokenBalance = await treeToken.methods.balanceOf(this.state.account).call()
      //this.setState({ treeTokenBalance: treeTokenBalance.toString() })
      //let treeTokenSupply = await treeToken.methods.totalSupply().call()
      //this.setState({ treeTokenSupply: treeTokenSupply.toString() })
      //let untilMine = await treeToken.methods.mineTime(this.state.account).call()
      //this.setState({ untilMine: untilMine.toString()  })
      //}
    //else {
    //  window.alert('TreeToken contract not deployed to detected network. ')
    //  }

    this.setState({ loading: false })
  }

  constructor(props) {
    super(props)
    this.state = {
      account: '0x0',
      treeToken: {},
      loading: true
    }
  }

  render() {
    return (
      <div>
        <Nav 
        account = {this.state.account} />
        <Intro />
        <InfoPanel />
        <Minter />
        <UseSerum />
        <Footer />
      </div>
    );
  }
}

export default App;
