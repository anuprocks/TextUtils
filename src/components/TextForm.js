import React, { useState } from 'react'

export default function TextForm(props) {
    //state
    const [text, setText] = useState(' ');
    // setText("New Text");

    const handleUpClick = () => {
        // console.log("Uppercase was clicked" +text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleloClick = () => {
        // console.log("Uppercase was clicked" +text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value)
    }
    
    return (
        <>
            <div className='container' style={{color:props.mode==='dark'?'white':'black'}} >

                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="8" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}  onChange={handleOnChange}></textarea>

                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
                <button className="btn btn-primary" onClick={handleloClick}>Convert to lowercase</button>

            </div>
            <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>Your Text Summary</h1>
                <p>{text === " " ? 0 : text.split(" ").length - 1} words and {text.replace(/ /g, "").length} characters</p>
                <p>{0.008 * text.split(" ").length} in mins to read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>

        </>
    )
}
