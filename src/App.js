import React,{ Component } from 'react';
import './App.css';
import Web3 from 'web3'

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {account:''};
  }

  async componentDidMount(){
    await window.ethereum.enable();
    this.loadBlockchainData();
  }

  async loadBlockchainData(){
    let web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
    const network = await web3.eth.net.getNetworkType();
    const account = await web3.eth.getAccounts();
    this.setState({account:account[0]})
    console.log(account)
  }

  render(){
    return(
      <div>
        <h1>Hello,World</h1>
        <p>
          Your Account is:
          {this.state.account}
        </p>
      </div>
    )
  }
}
