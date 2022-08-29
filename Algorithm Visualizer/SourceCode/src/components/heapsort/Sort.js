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

/*Merge function defintion*/

async function heapify(length, i)
{
  elements[i].style.background = "red";
  var largest = i;
  var l = 2*i + 1;
  var r = 2*i + 2;
  if(l<length)
  elements[l].style.background = "#87CEEB";
  if(r<length)
  elements[r].style.background = "#87CEEB";
  await timeout(speed);
  if(l<length && parseFloat(elements[l].style.height.slice(0, -2)) > parseFloat(elements[largest].style.height.slice(0, -2)))
{largest = l;
 elements[l].style.background = "blue"; }

  if(r<length && parseFloat(elements[r].style.height.slice(0, -2)) > parseFloat(elements[largest].style.height.slice(0, -2)))
{largest = r;
 elements[r].style.background = "blue";
 elements[l].style.background = "#87CEEB";  }

if(largest!== i)
{
await timeout(speed);
var temp = elements[i].style.height;
elements[i].style.height = elements[largest].style.height;
elements[largest].style.height = temp;
elements[i].style.background = "blue";
elements[largest].style.background = "red";
await timeout(speed);
elements[i].style.background = "#575A5E";
if(l<length)
elements[l].style.background = "#575A5E";
if(r<length)
elements[r].style.background = "#575A5E";
elements[largest].style.background = "#575A5E";
await heapify(length, largest);
}
else
{
elements[i].style.background = "#575A5E";
if(l<length)
elements[l].style.background = "#575A5E";
if(r<length)
elements[r].style.background = "#575A5E";
}
}
/*Merge function definition ends here*/
/*mergeSort function definition*/
async function heapSort()
{
for(var i = parseInt(length/2)-1; i>=0; i--)
{
   await heapify(length, i)
}

for(var i = length-1; i>0; i--)
{
elements[0].style.background = "green";
await timeout(speed);
var temp = elements[0].style.height;
elements[0].style.height = elements[i].style.height;
elements[i].style.height = temp;
elements[0].style.background = "red"
elements[i].style.background = "green";
await heapify(i, 0)
}
elements[0].style.background = "green";
} 
/*mergeSort function definition ends here*/
/*Calling Merge Sort function*/
await heapSort()
/*Calling Merge Sort function ends here*/
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
