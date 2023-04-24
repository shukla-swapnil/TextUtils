import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleOnChange = (e) => setText(e.target.value);

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  };

  const handleClearText = () => setText("");

  const handleCopy = () => {
    const text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#0b314e",
              color: props.mode === "light" ? "black" : "white",
            }}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleClearText}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(/\s+/).filter((el) => el.length !== 0).length} words and{" "}
          {text.length} characters
        </p>
        <p>
          {text.split(" ").filter((el) => el.length !== 0).length * 0.008}{" "}
          minutes needed to read
        </p>
      </div>
      <h2
        style={{
          color: props.mode === "light" ? "black" : "white",
          paddingLeft: "12px",
        }}
      >
        Preview
      </h2>
      <p
        style={{
          color: props.mode === "light" ? "black" : "white",
          paddingLeft: "12px",
        }}
      >
        {text.length > 0 ? text : "Nothing to preview"}
      </p>
    </>
  );
}
