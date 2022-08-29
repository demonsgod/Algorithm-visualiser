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
        var key, j;
        for (var i = 1; i < length; i++) {
            elements[i].style.background = "red";
            await timeout(speed+100);
            key = parseFloat(elements[i].style.height.slice(0, -2))
            j = i - 1;
            while(j>=0 && parseFloat(elements[j].style.height.slice(0, -2)) > key ){
                 elements[j].style.background = "red"; 
                 elements[j+1].style.background = "green";
                 await timeout(speed);
                 elements[j+1].style.background = "green"; 
                 elements[j].style.background = "green";
                 elements[j+1].style.height = elements[j].style.height;
                 j = j - 1;
            }
           elements[j+1].style.background = "red";
           await timeout(speed+ 100)
           elements[j+1].style.height = key+"px";
           elements[j+1].style.background = "green";
        }

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
