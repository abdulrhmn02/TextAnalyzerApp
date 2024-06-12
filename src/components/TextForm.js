import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("uppercase was clicked");
    let newText1 = text.toUpperCase();
    setText(newText1);
  };

  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };

  const handleLowClick = () => {
    console.log("lowercase was clicked");
    let newText2 = text.toLowerCase();
    setText(newText2);
  };

  const handleCapitalizeClick = () => {
    console.log("capitalize first letters was clicked");
    let newText3 = capitalizeSentences(text);
    setText(newText3);
  };
  const handleCLearCLick = () => {
    console.log("clear text was clicked");
    let newText4 = "";
    setText(newText4);
  };
  const handleCopyClick = () => {
    if (window.location.protocol === "http:") {
      alert("Copying text may not work over an unsecured connection. Redirecting to GitHub where it works.");
      window.location.href = "https://abdulrhmn02.github.io/TextAnalyzerApp/";
    } else {
      // Your copy logic here
      console.log("Text copied!");
      navigator.clipboard.writeText(text);
    }
  };
    // var text = document.getElementById("myBox");
    // text.select();
   

  const handleSpacesClick = () => {
    let newText5 = text.split(/[ ]+/);
    setText(newText5.join(" "));
  };

  const capitalizeSentences = (text) => {
    const sentences = text.split(/([.!?])/).filter(Boolean);
    let result = "";
    for (let i = 0; i < sentences.length; i += 2) {
      const sentence = sentences[i].trim();
      const punctuation = sentences[i + 1] || "";
      result += capitalizeFirstLetter(sentence) + punctuation + " ";
    }
    return result.trim();
  };

  const capitalizeFirstLetter = (sentence) => {
    return sentence.charAt(0).toUpperCase() + sentence.slice(1);
  };

  const { mode } = props;

  const buttonClass = mode === "dark" ? "btn btn-light" : "btn btn-dark";
  const buttonStyle = {
    border: mode === "dark" ? "2px solid white" : "2px solid black",
    color:mode === "dark" ? " 2px solid black" : " 2px solid white"
    
  };
  
  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "white" }}
      >
        <div
          className="mb-3"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          <h2>{props.heading}</h2>
          <textarea
            className="form-control"
            id="myBox"
            rows="15"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "black" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            value={text}
          ></textarea>
          <button
            disabled={text.length === 0}
            className={`my-3 mx-4 fw-bold ${buttonClass}`} style={buttonStyle}
            onClick={handleUpClick}
          >
            Convert To UPPERCASE
          </button>

          <button
            disabled={text.length === 0}
            className={`my-3 mx-4 fw-bold ${buttonClass}`} style={buttonStyle}
            onClick={handleLowClick}
          >
            Convert To lowercase
          </button>
          <button
            disabled={text.length === 0}
            className={`my-3 mx-4 fw-bold ${buttonClass}`} style={buttonStyle}
            onClick={handleCapitalizeClick}
          >
            Capitalize First Letters
          </button>

          <button
            disabled={text.length === 0}
            className={`my-3 mx-4 fw-bold ${buttonClass}`} style={buttonStyle}
            onClick={handleCopyClick}
          >
            Copy Text
          </button>

          <button
            disabled={text.length === 0}
            className={`my-3 mx-4 fw-bold ${buttonClass}`} style={buttonStyle} 
            onClick={handleSpacesClick}
          >
            Remove Extra Spaces
          </button>
          <button
            disabled={text.length === 0}
            className={`my-3 mx-4 fw-bold ${buttonClass}`} style={buttonStyle}
            onClick={handleCLearCLick}
          >
            Clear Text
          </button>
        </div>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summary</h2>
        <p className="fw-bold">
          Number of words:
           {text.split(/\s+/).filter((word) => word.length > 0).length}
        </p>
        <p className="fw-bold">Number of characters:{text.replace(/\s+/g, "").length}</p>
        <p className="fw-bold">
          Number of sentences:
            {
             text.split(/[.!?]/).filter((sentence) => sentence.trim().length > 0)
              .length
            }
        </p>
      </div>
    </>
  );
}
