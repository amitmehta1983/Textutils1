import React,{useState} from 'react'
import PropTypes from 'prop-types'



//rfc
export default function TextForm(props) {
    const handleUpClick=()=>{
        //console.log("Onclick event Generated");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Text Changed to Uppercase","success");
    }

    const handleLoClick=()=>{        
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Text Changed to Lowercase","success");
    }
    const handleClearClick=()=>{        
        let newText='';
        setText(newText);
        props.showAlert("Text Cleared","success");
    }
    const handleCopyClick=()=>{
        var text=document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied","success");
    }
    const handleRemoveSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Extra Spaces","success");
    }

    const handleOnChange=(event)=>{
        //console.log("Onchange event Generated");
        setText(event.target.value);

    }

    
    // Declare a new state variable, which we'll call "count"  const [count, setCount] = useState(0);
    const [text, setText] = useState('Enter text here');
  return (
    <>
        <div className='container' style={{ color:props.mode==='light'?'black':'white'}}>
            <h2 >{props.heading}</h2>
            <div className="mb-3">            
                <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='light'?'white':'grey' , color:props.mode==='light'?'black':'white'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleRemoveSpaces}>Remove Extra Spaces</button>

        </div>
        <div className='container my-3' style={{ color:props.mode==='light'?'black':'white'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(' ').length} Words and {text.length} characters</p>
            <p>{0.008 * text.split(' ').length} Minutes to Read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </>
  )
}
TextForm.propTypes={
    heading:PropTypes.string.isRequired
}

TextForm.defaultProps={
    heading: 'Enter Your Text:'
    }


