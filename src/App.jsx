
import { use } from 'react';
import Bilal from './bilal.jsx'
import { useState } from 'react';
function App() {
  let [count, setcount] = useState(0);
  let [color, setcolor] = useState("green");


let addvalue = () =>{
  console.log("add value button clicked ", count);
  if ( count >20){
    alert("You have reached the limit");
    return;
  }
  setcount(count + 1);
}
let subtract = () =>{
  // if ( count <=0){
  //   alert("Value cannot be negative");
  //   return;
  // }
  if (count > 0){
    setcount(count - 1);
  }
}
  return (
    <>
   <h1>We will create a counter: {count}</h1>
   <button onClick={addvalue} >add Value {count}</button>
   <button onClick={subtract}>Subtract Value {count}</button>
    <br />
    <div  style={{height: "100vh", width: "100%",backgroundColor: color,}}>
      <div style={{  position: "fixed", bottom: "8px", display: "flex", justifyContent: "center", padding: "10px" , width: "100%"}}>  
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "lightgray", paddingInline: "20px", borderRadius: "10px"}}>
        <button onClick={ () => setcolor("red") } style={{backgroundColor:"red", color:"white", margin:"10px"}}>Red</button>
    <button onClick={ () => setcolor("yellow")} style={{backgroundColor:"yellow", color:"white", margin:"10px"}}>yellow</button>
    </div>
    </div>
    </div>
  
    </>
  )
}
 
export default App
