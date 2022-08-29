import React from "react"

function Sort(props) {

function timeout(delay) {
    return new Promise(res => setTimeout(res, delay));
}
    async function handleClick() {
        

  
    document.querySelector("#userbutton").disabled = true;
    document.querySelector("#randombutton").disabled = true;
   if(props.type === "input")
   {
    document.querySelector("#userinput").disabled = true;
   }
   else
   {
    document.querySelector("#randominput").disabled = true;
    }


        var elements = document.querySelectorAll(".bubble-small")
        var length = elements.length;
        var speed;
        if(length<30)
        {
         speed = 400;
        }
        else
        { 
speed = 1000/length;}
        var min_idx = 0;
        for (var i = 0; i < length-1; i++) {
            min_idx = i;
            elements[i].style.background  = "red";
            for (var j = i+1; j < length; j++) {
                 elements[j].style.background = "black";
                if (parseFloat(elements[j].style.height.slice(0, -2)) < parseFloat(elements[min_idx].style.height.slice(0, -2))) {
                    elements[min_idx].style.background = "#575A5E";
                    elements[j].style.background = "red";
                    min_idx = j;
                    await timeout(speed);
                }
                else
                {
                  await timeout(speed);
                elements[j].style.background = "#575A5E"
                }
            }
           var temp = elements[i].style.height;
               elements[i].style.height = elements[min_idx].style.height;
               elements[min_idx].style.background = "#575A5E";
               elements[i].style.background = "green";
               elements[min_idx].style.height = temp;
               
               await timeout(speed);
        }
      elements[length-1].style.background = "green";


 document.querySelector("#userbutton").disabled = false;
    document.querySelector("#randombutton").disabled = false;
   if(props.type === "input")
   {
    document.querySelector("#userinput").disabled = false;
   }
   else
   {
    document.querySelector("#randominput").disabled = false;
    }
    }

    return ( 
        <button className = "bubble-sortbutton"
        onClick = {
            handleClick
        } > Sort < /button>
    );
}

export default Sort;
