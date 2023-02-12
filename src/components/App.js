import React,{useState,useEffect,useRef} from 'react'
import '../styles/App.css';
const App = () => {
 const ref1 = useRef(null);
 const ref2 = useRef(null);
 
const [val1 , setval1] = useState("");
const [val2 , setval2] = useState("");
const [email , setemail] = useState("");
const [pass , setpass] = useState("");

function handleEmail(e){
 setval1(e.target.value);
}

function handlePass(e){
  setval2(e.target.value);
}

function handleSubmit(){
 if(!val1){
  ref1.current.focus();
 }
 else if(!val2){
  ref2.current.focus();
 }
 else{
  setemail(val1);
  setpass(val2);
  setval1("");
  setval2("");
 }
}

  return (
    <div id="main">
      Email
      <input id="inputEmail" type="text" value={val1} ref={ref1} onChange={handleEmail}/><br/>
      Password
      <input id="inputPassword" type="text" value={val2} ref={ref2} onChange={handlePass}/><br/>
      <button id="submitButton" onClick={handleSubmit}>Submit</button><br/>
      <p id="emailText">Your Email : {email}</p>
      <p id ="passwordText">Your Password : {pass}</p>
      
    </div>
  )
}


export default App;
