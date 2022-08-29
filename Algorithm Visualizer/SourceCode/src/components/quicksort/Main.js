import React, {useState} from "react"
import Sort from "./Sort"
function Main(props) {

 let [height, setHeight] = useState(Math.min(window.innerHeight - 100,500))
 let [width, setWidth] = useState(window.innerWidth - 30)
 var ratio = height/Math.max(...props.input)
 var single_width = Math.min(width/props.input.length,10);
 var intial = (width-single_width*props.input.length)/2
  window.addEventListener('resize', ()=> {
    if(window.innerHeight - 100 !== height)
    { setHeight(Math.min(window.innerHeight - 100,500)) }
    
    if(window.innerHeight - 100 !== height)
    { setWidth(window.innerWidth - 30) }
 })
  
  function lines(item,index)
{
  return <div className = "bubble-small" style = {{height: ratio*item+"px", width: single_width+"px", left: intial+ index*single_width + "px", background: "#575A5E"}}></div> 
}

  return (
    <div className="bubble-main">{props.input.length > 0?<Sort type= {props.type}/>: null} 
    <div className = "bubble-master">
	  {props.input.map(lines)}
	  <div style={{float: "clear"}}>
	</div>
	</div>
    </div>
  );
}

export default Main;
