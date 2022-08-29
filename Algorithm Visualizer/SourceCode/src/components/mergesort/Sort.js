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
async function merge(l, m, r)
{
   var n1 = m-l+1;
   var n2 = r - m;
   var L = [];
   var R = [];
   
   for(var i = 0; i < n1; i++)
       L.push(parseFloat(elements[l+i].style.height.slice(0, -2)))
   for(var j= 0; j< n2; j++)
       R.push(parseFloat(elements[m+1+j].style.height.slice(0, -2)))
   
  i = 0;
  j = 0;
  var k = l;
  while(i< n1 && j <n2)
  {
    if(L[i]<= R[j])
{
   elements[k].style.height = L[i]+"px";
   i++;
   
}
else
{
elements[k].style.height = R[j]+"px";
j++;
}
elements[k].style.background = "green";
k++;
await timeout(speed);
}

while(i< n1)
{
elements[k].style.height = L[i]+"px";
elements[k].style.background = "green";
i++;
k++;
await timeout(speed);
}

while(j< n2)
{
elements[k].style.height = R[j]+"px";
elements[k].style.background = "green";
j++;
k++;
await timeout(speed);
}
elements[m].style.background = "red";
}

          /* elements[i+1].style.height = elements[high].style.height;
           elements[high].style.height = temp; 
DOSA 
           elements[i+1].style.background = "red";
           elements[high].style.background = "#575A5E";
      await timeout(speed)*/

/*Merge function definition ends here*/
/*mergeSort function definition*/

async function mergeSort(l, r)
{
   if(l>=r)
   {
     return;   
 }
   var m = parseInt((l+r-1)/2);
   elements[m].style.background = "red";
   await timeout(speed)
   await mergeSort(l,m)
   await mergeSort(m+1,r)
   await merge(l,m,r)
}
/*mergeSort function definition ends here*/
/*Calling Merge Sort function*/
await mergeSort(0,length-1)
await timeout(speed)
elements[parseInt((length-2)/2)].style.background = "green";
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
