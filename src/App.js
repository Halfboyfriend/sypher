import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {

  const[dt, setDt] = useState("")
  const[key, setKey] = useState("")

  useEffect(() => {
    // localStorage.removeItem("pKey");
    getPvKey();
  }, []);


  function setPvKey(e) {
    e.preventDefault();
    localStorage.setItem("pKey", key);
    window.location.reload();
    
    console.log(key)
  }



  function getPvKey() {
   const data = localStorage.getItem("pKey");
   setDt(data);
   console.log(data)
  }

  return <div className="App">

    {dt ? <div>
      <p>PrivateKey: {dt}</p>
    </div> :
    
    <div>
      <form onSubmit={setPvKey}>
        <input type="text" placeholder="input key" onChange={(e) => setKey(e.target.value)} required />
        <button>Submit</button>
      </form>
    </div>
    
    }
    
  </div>;
}

export default App;
