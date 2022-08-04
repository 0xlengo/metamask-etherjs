import logo from './logo.svg';
//import {Button} from '.antd';
import { useState } from 'react';
import { ethers } from 'ethers';

import './App.css';


function App() {

  const [walletAddress, setWalletAddress] = useState("");

  async function requestAccount(){
    console.log('Requesting account...')  ;
  
    //Check Metamask Installed
  
    if (window.ethereum){
      console.log('detected')  ;
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
  
      } catch (error) {
        console.log('Error connecting...');
      }
  
    }else{
      console.log('Metamask no detected')  ;
    }
  
  }

  async function connectWallet(){
    if(typeof window.ethereum !== 'undefined'){
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
    }
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <button 
          onClick={()=> requestAccount()}
        >Connect Wallet</button>
        <h3>Wallet Address: {walletAddress}</h3>
      </header>
    </div>
  );
}

export default App;
