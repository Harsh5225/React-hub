import React, { useState, useEffect, useCallback } from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));

function PasswordGenerator() {
  const [password, setpassword] = useState("xxxxppppxxcxx");
  const [length, setlength] = useState(10);
  const [numberchanged, setnumberchanged] = useState(false);
  const [charchanged, setcharchanged] = useState(false);

  // useCallback
  let generatepassword = useCallback(() => {
    let str = "agstevcwtqoemcbhohpjcxvzcutsvyghdjkomdpowbbsid";
    if (numberchanged) {
      str += "172639632738";
    }
    if (charchanged) {
      str += "!@#$%^&*()_+=~`?<>:";
    }

    let pass = "";
    for (let i = 0; i < length; i++) {
      pass += str[Math.floor(Math.random() * str.length)];
    }
    setpassword(pass);
  }, [length, numberchanged, charchanged]);

  // function generatepassword() {
  //   let str = "agstevcwtqoemcbhohpjcxvzcutsvyghdjkomdpowbbsid";
  //   if (numberchanged) {
  //     str += "172639632738";
  //   }
  //   if (charchanged) {
  //     str += "!@#$%^&*()_+=~`?<>:";
  //   }

  //   let pass = "";
  //   for (let i = 0; i < length; i++) {
  //     pass += str[Math.floor(Math.random() * str.length)];
  //   }
  //   setpassword(pass);
  // }

  useEffect(generatepassword,[generatepassword]);

  return (
    <>
      <h1>{password}</h1>
      <div className="second">
        <input
          type="range"
          min={5}
          max={50}
          value={length}
          onChange={(e) => {
            setlength(e.target.value);
          }}
        ></input>
        <label>Length is : {length} </label>

        <input
          type="checkbox"
          defaultChecked={numberchanged}
          onChange={() => setnumberchanged(!numberchanged)}
        ></input>
        <label>Number</label>
        <input
          type="checkbox"
          defaultChecked={charchanged}
          onChange={() => setcharchanged(!charchanged)}
        ></input>
        <label>Character</label>
      </div>
    </>
  );
}

root.render(<PasswordGenerator />);
