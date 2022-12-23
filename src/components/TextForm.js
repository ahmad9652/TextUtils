import React,{useState} from 'react'
export default function TextForm(props) {
  const[text,setText] = useState('');
  const handleUpClick=()=>{
    // console.log("CLicked on button");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text is now in UPPER CASE","success");
  }
  const handledownClick=()=>{
    // console.log("CLicked on button");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("text is now in lower case","success");
  }
  const handleclear=()=>{
    setText('');
    props.showAlert("Text is cleared","success");
  }
  const handleEEClick=()=>{
    // console.log("CLicked on button");
    let tempText = text.split(" ");
    let newText = ''; 
    for (let index = 0; index < tempText.length; index++) {
      if (tempText[index].includes("@")) {
        if (newText.length!==0) {
          newText+=tempText[index]
        }
        else{
          newText = newText +" "+tempText[index]
        }
      }
    }
    setText(newText);
    props.showAlert("All the Emails are Extracted Successfully","success");
  }
  const handlecopytext=()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard","success");
  }
  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed","success");
  }
  const handleOnChange=(event)=>{
    // console.log("handleOnChange");
    setText(event.target.value);
  }
  const countWordsCharTime=(text,i)=>{
    let words = text.split(" ");
    switch (i) {
      case 1:
        let WordCount = 0;
        for (let index = 0; index < words.length; index++) {
          if(words[index]==='' || words[index]===' '){
            continue;
          }
          WordCount++;
        }
        return WordCount;
      case 2:
        let CharCount = 0;
        for (let index = 0; index < words.length; index++) {
          if(words[index]==='' || words[index]===' '){
            continue;
          }
          CharCount+=words[index].length;
        }
        return CharCount;
      case 3:
        let temp = 0;
        for (let index = 0; index < words.length; index++) {
          if(words[index]==='' || words[index]===' '){
            continue;
          }
          temp+=words[index].length;
        }
        return temp*0.008;
      default:
        return 0;
    }
    
    // console.log(typeof(words));
    // console.log(count);
  }
  return (
    <div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3" >
              <textarea className="form-control" style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'grey':'white'}} value = {text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <div className="">
              <button className="btn btn-primary m-1" onClick={handleUpClick}>
                Change to UPPER CASE
              </button>
              <button className="btn btn-primary m-1" onClick={handledownClick}>
                Change to lower case
              </button>
              <button className="btn btn-primary m-1" onClick={handleEEClick}>
                Extract Email
              </button>
              <button className="btn btn-primary m-1" onClick={handlecopytext}>
                Copy text
              </button>
              <button className="btn btn-primary m-1" onClick={handleExtraSpaces}>
                Remove Extra Spaces
              </button>
              <button className="btn btn-danger m-1" onClick={handleclear}>
                Clear Text
              </button>
            </div>

        </div>
        <div className="container my-5" style={{color:props.mode==='dark'?'white':'black'}}>
          <h3 className=''>Your Text Summary</h3>
          <p>{countWordsCharTime(text,1)} Words</p>
          <p>{countWordsCharTime(text,2)} Characters</p>
          <p>{countWordsCharTime(text,3)} Minutes To Read</p>
          <h4>Preview</h4>
          <p>{text}</p>
        </div>
    </div>
  )
}
