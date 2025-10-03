
let x
let z


document.getElementById("trunXandZ").onclick = function(){
    x= document.getElementById("x").value;
    z=  document.getElementById("z").value;
    x = Number(x)/8;
    z = Number(z)/8;
   console.log(x,z)

   document.getElementById("myCoordinte").textContent=`X: ${x} Z: ${z}`
    }