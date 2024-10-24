import { useState } from "react";

function App() {
  // const [value,setValue] = useState('HEllo')
  const [fullname,setFullname] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  // const alertInfo = ()=>{
  //   console.log(value)
  // }
  const signUp = ()=>{
    console.log(fullname);
    console.log(email);
    console.log(password);
    if(fullname===""){
      alert("Sheiyvanet fullname")
    }
    if(email===""){
      alert("Sheiyvanet email")
    }
    if(password===""){
      alert("Sheiyvanet password")
    }
  }
  return (
    <div className="App">
      {/* <input type="text" value={value}  onChange={(e)=>setValue(e.target.value)} />
      <button onClick={alertInfo}>Alert Value</button> */}

      <input type="text" value={fullname} onChange={(e)=>setFullname(e.target.value)} />
      <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
      <button onClick={signUp}>Sign Up</button>
    </div>
  );
}

export default App;
