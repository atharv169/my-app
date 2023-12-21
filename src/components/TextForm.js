import React,{useState} from 'react'



export default function TextForm(props) {
    const handleUpClick=()=>{
        //console.log("Uppercase was clicked"+text)
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleLoClick=()=>{
      //console.log("Uppercase was clicked"+text)
      let newText=text.toLowerCase();
      setText(newText)
  }
    const handleOnChange=(event)=>{
       // console.log("On change")
        setText(event.target.value);
    }
    const [text, setText] = useState('');
   // setText("Hi Bro");
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="6"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick} >Convert to Lowercase</button>
    </div>
    <div className='container'style={{color:props.mode==='dark'?'white':'black'}} >
       <h2>Your text summary</h2>
       <p>{text.split(" ").length} words and {text.length} characters</p>
       <p>{0.008*text.split(" ").length} Minutes read</p>
       <h2>Preview</h2>
       <p>{text.length>0?text:"Enter somthing to preview"}</p>
    </div>
</>
  )
}
