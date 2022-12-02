import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("")

    const handleUpClick = () => {
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to uppercase","success")
    }
    const handleLoClick = () => {
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert("Converted to Lowercase","success")
    }

    const handleClear = () => {
        let newtext = '';
        setText(newtext)
        props.showAlert("Clear Successfully ","success")
    }


    const handleOnChange = (e) => {
        setText(e.target.value)
    }


    return (
        <>
            <div className='container' style={{color:props.mode==="dark"?"yellow":"#092a47"}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="6" style={{backgroundColor: props.mode==="dark"?"grey":"orange", color:props.mode==="dark"?"black":"#092a47" }}></textarea>
                </div>
                <button className='btn btn-warning ' onClick={handleUpClick}>convert to uppercase</button>

                <button className='btn btn-warning mx-2' onClick={handleLoClick}>convet to lowercase</button>

                <button className='btn btn-warning' onClick={handleClear}>Clear</button>
            </div>

            <div className='container my-2' style={{color:props.mode==="dark"?"yellow":"#092a47"}}>
                <h3>Your Text Count</h3>
                <p>{text.split(" ").length} Words and {text.length} charecter</p>
                <p>{0.008*text.split(" ").length} minuts read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter Somthing in TextBox for preview"}</p>
            </div>
        </>
    )
}

