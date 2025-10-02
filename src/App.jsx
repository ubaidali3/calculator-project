import Buttons from "./component/button-container"
import './App.css'
import { useState } from "react"
function App(){
  const [input,setinput]=useState("")
  const handleClick=(value)=>{
    setinput(input+value)
  }
  const clearinput=()=>{
    setinput("")
  }
  const claculate=()=>{
    setinput(eval(input))
  }
 
  return <>

  <div className="container">
    <input type="text"  value={input} className="input" readOnly/>
    <Buttons 
    handleClick={handleClick}
    clearinput={clearinput}
    claculate={claculate}></Buttons>
  </div>

  </>
}
export default App