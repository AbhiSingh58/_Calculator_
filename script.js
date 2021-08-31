 var inputval=document.querySelectorAll('input');

     inputval.forEach( e => {
         e.addEventListener("click",function main() {
             if(e.value =="="){
                 let x=document.getElementById("output").value;
                 let y=eval(x);
                 document.getElementById("output").value=y;

                }
             else if(e.value=="Clr"){
                 document.getElementById("output").value="0";
             }   
             else{
                 document.getElementById("output").value+=e.value;
             }
             
         })
     });
