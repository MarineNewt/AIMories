import React, { Component } from 'react';
import Web3 from 'web3';
import './App.css';
import abstract from './../contracts/abstract.json'; 
import pixel from './../contracts/pixel.json'; 
import landscape from './../contracts/landscape.json'; 
import bionic from './../contracts/bionic.json'; 
import serum5 from './../contracts/serum5.json'; 
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
    setInterval(() => {
      this.loadBlockchainData();
    }, 9000);
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

    const networkId = await web3.eth.net.getId() 

    const abstractcontractdata = abstract.networks[networkId]
    const pixelcontractdata = pixel.networks[networkId]
    const landscapecontractdata = landscape.networks[networkId]
    const bioniccontractdata = bionic.networks[networkId]
    const serum5contractdata = serum5.networks[networkId]
    if(abstractcontractdata && pixelcontractdata && landscapecontractdata && bioniccontractdata && serum5contractdata) {
            //const abstractcontract = new web3.eth.Contract(abstract.abi, abstractcontractdata.address)
      //this.setState({ abstractcontract })
      //let abstractsbalance = await abstractcontract.methods.walletSerum(this.state.account).call()
      //this.setState({ abstractsbalance: abstractsbalance.toNumber() })
            //const pixelcontract = new web3.eth.Contract(pixel.abi, pixelcontractdata.address)
      //this.setState({ pixelcontract })
      //let pixelsbalance = await pixelcontract.methods.walletSerum(this.state.account).call()
      //this.setState({ pixelsbalance: pixelsbalance.toNumber() })
            //const landscapecontract = new web3.eth.Contract(landscape.abi, landscapecontractdata.address)
      //this.setState({ landscapecontract })
      //let landscapesbalance = await landscapecontract.methods.walletSerum(this.state.account).call()
      //this.setState({ landscapesbalance: landscapesbalance.toNumber() })
            //const bioniccontract = new web3.eth.Contract(bionic.abi, bioniccontractdata.address)
      //this.setState({ bioniccontract })
      //let bionicsbalance = await bioniccontract.methods.walletSerum(this.state.account).call()
      //this.setState({ bionicsbalance: bionicsbalance.toNumber() })
            //const serum5contract = new web3.eth.Contract(serum5.abi, serum5contractdata.address)
      //this.setState({ serum5contract })
      //let serum5sbalance = await serum5contract.methods.walletSerum(this.state.account).call()
      //this.setState({ serum5sbalance: serum5sbalance.toNumber() })
      }
    else {
      //window.alert('Please switch to Ethereum Network ')
    }

    this.setState({ loading: false })
  }

  
  mintserum = (serumnum) => {
    const web3 = window.web3
    this.setState({loading: true})
    if(serumnum === 1){
    this.state.abstractcontract.methods.mint().send({ from: this.state.account, value: web3.utils.toWei('0.03') }).on('transactionHash', (hash) => {})}
    if(serumnum === 2){
    this.state.pixelcontract.methods.mint().send({ from: this.state.account, value: web3.utils.toWei('0.03') }).on('transactionHash', (hash) => {})}
    if(serumnum === 3){
    this.state.landscapecontract.methods.mint().send({ from: this.state.account, value: web3.utils.toWei('0.03') }).on('transactionHash', (hash) => {})}
    if(serumnum === 4){
    this.state.bioniccontract.methods.mint().send({ from: this.state.account, value: web3.utils.toWei('0.03') }).on('transactionHash', (hash) => {})}
    if(serumnum === 5){
    this.state.serum5contract.methods.mint().send({ from: this.state.account, value: web3.utils.toWei('0.03') }).on('transactionHash', (hash) => {})}

    this.setState({ loading: false })
  }

  mintmorie = (serumnum, morienum) => {
    this.setState({loading: true})
    if(serumnum === 1){
    this.state.abstractcontract.methods.useSerum(morienum).send({ from: this.state.account, }).on('transactionHash', (hash) => {})}
    if(serumnum === 2){
    this.state.pixelcontract.methods.useSerum(morienum).send({ from: this.state.account, }).on('transactionHash', (hash) => {})}
    if(serumnum === 3){
    this.state.landscapecontract.methods.useSerum(morienum).send({ from: this.state.account, }).on('transactionHash', (hash) => {})}
    if(serumnum === 4){
    this.state.bioniccontract.methods.useSerum(morienum).send({ from: this.state.account, }).on('transactionHash', (hash) => {})}
    if(serumnum === 5){
    this.state.serum5contract.methods.useSerum(morienum).send({ from: this.state.account, }).on('transactionHash', (hash) => {})}
    this.setState({ loading: false })
  }

  constructor(props) {
    super(props)
    this.state = {
      account: '0x0',
      abstractcontract: {},
      pixelcontract: {},
      landscapecontract: {},
      bioniccontract: {},
      serum5contract: {},
      abstractsbalance: 0,
      pixelsbalance: 0,
      landscapesbalance: 0,
      bionicsbalance: 0,
      serum5sbalance: 0,
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
        <Minter 
        mintserum={this.mintserum}
        />
        <UseSerum 
              mintmorie={this.mintmorie}
              abstractsbalance={this.state.abstractsbalance}
              pixelsbalance={this.state.pixelsbalance}
              landscapesbalance={this.state.landscapesbalance}
              bionicsbalance={this.state.bionicsbalance}
              serum5sbalance={this.state.serum5sbalance}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
