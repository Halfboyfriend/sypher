import React from "react";
import { useEffect, useState } from "react";
import { Form } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Button, Container, TextArea } from "semantic-ui-react";
const { ethers } = require("ethers");

// Generate a random 12-word mnemonic
// const mnemonic = ethers.Wallet.createRandom().mnemonic.phrase;
// console.log("Mnemonic:", mnemonic);

// // Derive the private key from the mnemonic
// const wallet = ethers.Wallet.fromMnemonic(mnemonic);
// const privateKey = wallet.privateKey;
// console.log("Private Key:", privateKey);

function Home() {
  const [load, setLoading] = useState(false);
  const [create, setCreate] = useState(false);
  const [imprt, setImprt] = useState(false);
  const [seed, setSeed] = useState(null);
  const [inputSeed, setInputSeed] = useState(null);

  function generate() {
    setLoading(true);
    const mnemonic = ethers.Wallet.createRandom().mnemonic.phrase;
    setSeed(mnemonic);
    setLoading(false);
  }

  function createNew() {
    setCreate(true);
  }

  function importNew() {
    setImprt(true);
  }

  function checkSeed(e) {
    console.log(inputSeed)

    e.preventDefault();
    try {
      ethers.utils.HDNode.fromPrivateKey(inputSeed);
      toast.success("Correct seed phrase")
  } catch (error) {
    toast.error("Wrong seed phrase");
    console.log(error);

  }



  }
  return (
    <Container>
      <ToastContainer />

      <section className="py-5">
        <div>
          <h1 style={{ fontSize: "45px" }}>Welcome to Sypher Wallet</h1>
        </div>
      </section>

      {create || imprt ? (
        <>
          {create ? (
            <section className="mt-2">
              <div>
                <Button primary loading={load} onClick={generate}>
                  Generate SeedPhrase
                </Button>

                <h3>Your seedPhrase</h3>
                <h2>{seed}</h2>
              </div>
            </section>
          ) : (
            <section className="">
              <div>
                <form onSubmit={checkSeed}>
                  <TextArea
                    style={{
                      width: "100%",
                      height: "100px",
                      padding: "5px",
                      fontSize: "16px",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      resize: "vertical", // Allow vertical resizing
                    }}
                    onChange={(e) => setInputSeed(e.target.value)}
                    required
                  />
                  <br />
                  <Button primary>Import</Button>
                </form>

               
              </div>
            </section>
          )}
        </>
      ) : (
        <>
          {" "}
          <div>
            <Button primary onClick={createNew}>
              Create a new wallet
            </Button>
            <Button onClick={importNew} secondary>
              Import existing wallet
            </Button>
          </div>
        </>
      )}
    </Container>
  );
}


export default Home;
