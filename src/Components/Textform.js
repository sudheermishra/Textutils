import React, { useState } from "react";

export default function Textform(props) {
  const handleLoClick = () => {
    let newext = text.toLowerCase();
    setText(newext);
    props.showAlert("converted to lower case", "success");
  };
  const handleUpClick = () => {
    console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to upper case", "success");
  };
  const cleartext = () => {
    let newtext = " ";
    setText(newtext);
    props.showAlert("Text is cleared", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("copy to clipboard", "success");
  };


  const [text, setText] = useState("Enter text here");
  //   text ="new text"; wrong way to change the the state
  //   setText("new text"); correct way to change the state
  return (
    <>
      <div
        className="container"
        style={{color: props.mode === 'dark'?'white':'#061743'}}
      >
        <h1>{props.heading}</h1>  
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
          
            onChange={handleOnChange} 
            id="myBox"
            rows="8"   style={{backgroundColor: props.mode === 'dark'?'#162754':'white',color: props.mode === 'dark'?'white':'#061743' }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={cleartext}>
          Clear
        </button>
      </div>
      <div
        className="container my-3" style={{color: props.mode === 'dark'?'white':'#061743'}}
      >
        <h2>Your Text summary</h2>
        <p>
          {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}Minutes Read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0 ? text : "Enter something in Box to Preview here"}
        </p>
      </div>
    </>
  );
}
