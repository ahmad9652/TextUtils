import React from 'react'

export default function About(props) {
  return (
    <div className="container my-5" style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'#212529':'white'}} >
        <h1 className="my-2 p-2">About Us</h1>
      <div className="accordion my-2 p-4" id="accordionExample">
            <div className="accordion-item" >
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'grey':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    About TextUtils
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body"style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'black':'white'}}>
                    <strong>TextUtils</strong> is a utility which can be used to manipulate your text in the way you want. 
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'grey':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Technology Used
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'black':'white'}}>
                    <strong>Technologies used:- </strong> 
                    <li>React JS</li>
                    <li>Bootstrap</li>
                    <li>Git-Hub</li>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'grey':'white'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Features
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'grey':'white'}} className="accordion-body">
                    <strong>Features Of TextUtils:-</strong>
                    <li>CONVERT YOUR TEXT IN UPPER CASE</li>
                    <li>convert your text in lower case</li>
                    <li>Extract Email from your text</li>
                    <li>Copy your text to Clipboard</li>
                    <li>Clear Text</li>
                    <li>Word Count</li>
                    <li>Character Count</li>
                    <li>Check Time to read</li>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
