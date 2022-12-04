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
                <h1 className='mb-2'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="6" style={{backgroundColor: props.mode==="dark"?"#225174":"#adb5bd", color:props.mode==="dark"?"black":"#092a47" }}></textarea>
                </div>
                <button disabled={text.length===0} className='btn btn-warning my-1' onClick={handleUpClick}>convert to uppercase</button>

                <button disabled={text.length===0} className='btn btn-warning mx-1 my-1' onClick={handleLoClick}>convet to lowercase</button>

                <button disabled={text.length===0} className='btn btn-warning my-1' onClick={handleClear}>Clear</button>
            </div>

            <div className='container my-2' style={{color:props.mode==="dark"?"yellow":"#092a47"}}>
                <h3>Your Text Count</h3>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} charecter</p>
                <p>{0.008*text.split(" ").length} minuts read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing to preview"}</p>
            </div>
        </>
    )
}

