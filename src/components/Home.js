import React from 'react'
import { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import { Button, Container } from "semantic-ui-react";
const { ethers } = require("ethers");

// Generate a random 12-word mnemonic
// const mnemonic = ethers.Wallet.createRandom().mnemonic.phrase;
// console.log("Mnemonic:", mnemonic);

// // Derive the private key from the mnemonic
// const wallet = ethers.Wallet.fromMnemonic(mnemonic);
// const privateKey = wallet.privateKey;
// console.log("Private Key:", privateKey);


function Home() {
  return (
    <Container>
    <ToastContainer/>

      <section className='py-5'>
      <div >
            <h1>Welcome to Sypher Wallet</h1>
            <div>
                <Button primary>Create a new wallet</Button>
                <Button secondary>Import existing wallet</Button>
            </div>
        </div>
      </section>

    </Container>
  )
}

export default Home
