import React, { useState } from 'react'

export default function TextForms(props) {

    const handleOnChange = (event) => {

        settext(event.target.value);
    }
    const handleUpClick = () => {

        let newText = text.toUpperCase();
        settext(newText);
        props.showAlert("Words converted to uppercase sucessfully", "success")
    }
    const handleLoClick = () => {
        let newText2 = text.toLowerCase();
        settext(newText2);
        props.showAlert("Words converted to lowercase sucessfully", "success")
    }
    const handleClearClick = () => {
        let newText3 = "";
        settext(newText3);
        props.showAlert("Words removed sucessfully", "success")
    }
    const handleCopy = () => {

        const myTexx = document.getElementById("mytext");
        myTexx.select();
        document.execCommand("Copy");
        props.showAlert("Words copy sucessfully", "success")
    }
    const handleSpaces = () => {
        let newtet = text.split(/[ ]+/);
        settext(newtet.join(" "));
        props.showAlert("Spaces are removed sucessfully", "success")
    }
    const [text, settext] = useState('');

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>
                    {props.heading}
                </h1>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Text Area</label>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="mytext" rows="8" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} ></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-danger mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-dark mx-1" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-success mx-1" onClick={handleCopy}>Copy the Text</button>
                <button className="btn btn-warning mx-1" onClick={handleSpaces}>Remove Spaces</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                <p><b>{text.split(" ").length} words, {text.length} charcters</b></p>
                <p><b>{0.08 * text.split(" ").length} Minutes to read</b></p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
