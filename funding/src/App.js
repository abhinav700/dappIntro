import { useState, useEffect } from "react";
import "./App.css";
import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";

function App() {
  const connectToMetaMask = async () => {
    const accounts = await window.ethereum.request({
      // it will print the metamask account to which we are connected.
      method: "eth_requestAccounts",
    });
    console.log(accounts);
  };

  useEffect(() => {
    const loadProvider = async () => {
      // whenever we have metamask installed in our browser, it injects two objects on
      //our browser. one is the object of web3,one is of etherium.
      // they help us in doing the things like connecting to blockchain.
      
    };
  }, []);

  return (
    <>
      <div className="card text-center">
        <div className="card-header">Funding</div>
        <div className="card-body">
          <h5 className="card-title">Balance: 20 ETH </h5>
          <p className="card-text">Account :</p>
          {/* <button
            type="button"
            className="btn btn-success"
            onClick={async () => {
              const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
              });
              console.log(accounts);
            }}
          >
            Connect to metamask
          </button> */}
          &nbsp;
          <button
            onClick={connectToMetaMask}
            type="button"
            className="btn btn-primary "
          >
            Connect to metamask.
          </button>
          &nbsp;
          <button type="button" className="btn btn-success ">
            Transfer
          </button>
          &nbsp;
          <button type="button" className="btn btn-primary ">
            Withdraw
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
//npm install --save react-scripts@4.0.3
