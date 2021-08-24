import React from 'react'
import {useState} from 'react'

export default function Form(props) {
    const handleOnChange =(event)=>{
        console.log("onchange")
        setText(event.target.value)

    }
    const handleUpClick=()=>{
        let newText=text.toUpperCase()
        setText(newText
            )
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase()
        setText(newText
            )
    }
    const handleClearClick=()=>{
        let newText= ""
        setText(newText
            )
    }

    const [text, setText] = useState("");
    return (
        <>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
  <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
  <br/><button className="btn btn-primary mx-2"  onClick={handleUpClick} my-2>Change to uppercase</button> 
  <button className="btn btn-primary" onClick={handleLoClick}>Change to lowercase</button>
  <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
  
</div>
<div className="container my-3">
    <h4>words and character summery</h4>
    <p>{text.split(" ").length} words and {text.length}characters</p>
    <h2>Summery here</h2>
    <p>{text}</p>

</div>
</>
    )
}
