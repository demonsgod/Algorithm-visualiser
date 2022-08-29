import React, {useState} from "react"
import Userinput from "./Userinput"
import Randominput from "./Randominput"
import Main from "./Main"
function App() {

var [isSelect,setSelect] = useState("random")
var [array, setArray] = useState([])
function handleClick(e){
setSelect(e.target.value)
}


function getArray(input) {
setArray(input)
}


  return (
    <div>
    <div className="algo-top"><span className="algo-title">Heap Sort</span>
<span>
<button value="random" id = "randombutton" onClick={handleClick}>Random</button>
<button value="input" id="userbutton" onClick={handleClick}>Enter Input</button>
{isSelect==="input" ? <Userinput sendArray = {getArray} /> :<Randominput sendArray = {getArray} />}
</span>
</div>
<Main input = {array} type={isSelect}/>
    </div>
  );
}

export default App;
