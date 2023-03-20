import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick= ()=>{
        // console.log("UpperCase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success")
    }
    
    const handleloClick= ()=>{
        // console.log("lowerCase was Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success")
    }
    const handleClearClick= ()=>{
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared!","success")
    }
    const handleCapClick= ()=>{
       
        let newText1 = text.charAt(0).toUpperCase()+text.slice(1);
        setText(newText1);
    }
    const handleCopyClick= ()=>{
       
        let copyText =  document.getElementById("myBox");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("Copied to clipboard","success")
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    
    const handleOnChange= (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }


    const [text, setText] = useState('Enter Text here');
    // text= "new text"; // wrong way to change state
    //  setText("new text"); // correct  way to change state
    return (
        <>
    <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
        <h3>{props.heading} </h3>
        <div className="mb-3">
        <textarea className="form-control"  style={{color:props.mode==='light'?'black':'white' , backgroundColor:props.mode==='dark'?'black':'white'
    }} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleloClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleCapClick}>Capitalize</button>
        <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
        <h3>Your text summary</h3>
        <p>{text.split(" ").filter(function(num) { return num !== ''}).length} words and {text.length} characters</p>
        <p>Will take {0.008*text.split(" ").filter(function(num) { return num !== ''}).length} minutes to Read </p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
        </>
  );
}
//