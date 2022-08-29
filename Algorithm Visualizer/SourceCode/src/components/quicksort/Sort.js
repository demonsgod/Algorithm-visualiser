import React from "react"

function Sort(props) {

function timeout(delay) {
    return new Promise(res => setTimeout(res, delay));
}

    async function handleClick() {
       
/*Disabling buttons Since not required*/ 
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
/*Disabling buttons Since not required*/
/*Main Sorting Part*/

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

/*Partition function defintion*/
async function partition(low,high)
{
   var pivot = parseFloat(elements[high].style.height.slice(0, -2))
   elements[high].style.background = "red";
   var i = (low-1);
   for(var j = low; j<=high-1;j++)
   {
       elements[j].style.background = "black";
    if(parseFloat(elements[j].style.height.slice(0, -2)) < pivot)
        {
           elements[j].style.background = "black";
           await timeout(speed)
           i+=1;
           var temp = elements[j].style.height;
           elements[j].style.height = elements[i].style.height;
           elements[i].style.height = temp; 
           elements[j].style.background = "#575A5E"
           elements[i].style.background = "black";
           await timeout(speed)
           elements[i].style.background = "#575A5E";
        }
       else
        {await timeout(speed)
          elements[j].style.background = "#575A5E"}
    }
    
    var temp = elements[i+1].style.height;
           elements[i+1].style.height = elements[high].style.height;
           elements[high].style.height = temp;
           elements[i+1].style.background = "red";
           elements[high].style.background = "#575A5E";
      await timeout(speed)
     return i+1;
    
}
/*Partition function definition ends here*/
/*quickSort function definition*/
async function quickSort(low, high)
{
   if(low<high)
   {
    var pivot_index = await partition(low,high);
    elements[pivot_index].style.background = "green";
    await quickSort(low, pivot_index-1);
    await quickSort(pivot_index+1, high);
    
    }
    else if(low===high)
     {
       elements[low].style.background = "green";
     }
}
/*quickSort function definition ends here*/
/*Calling Quick Sort function*/

/*Calling Quick SOrt function ends here*/
await quickSort(0,length-1)

/*Main Sorting Part Ends*/

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
