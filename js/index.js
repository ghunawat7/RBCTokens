window.onscroll = function() {scrollFunction()};

function scrollFunction() {

  
    
    if(document.body.scrollTop>150 || document.documentElement.scrollTop>150)
    {
        document.getElementById("arrowbtn").style.display="inline";
        
    }
    else{
      document.getElementById("arrowbtn").style.display="none";

   }
}

window.onload=()=>show();
function show()
{
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    xclock=new Date();
    date.innerHTML=months[xclock.getMonth() ]+" "+(xclock.getDate()+1)
    date2.innerHTML=months[xclock.getMonth() ]+" "+(xclock.getDate()+1)
    date3.innerHTML=months[xclock.getMonth() ]+" "+(xclock.getDate()+1)
    date4.innerHTML=months[xclock.getMonth() ]+" "+(xclock.getDate()+1)
    hour.innerHTML=xclock.getHours();    
    minute.innerHTML=xclock.getMinutes();
    second.innerHTML=xclock.getSeconds();
    setTimeout("show()",10)
}




// redirect
function rabitosite(){
    window.location.href = "https://rabito.io/register/0x0876307652F29E967369F16FF9f9Fba9436ba7f5";
}

// convert
function convert(){
    let text = document.getElementById("usdtvalue").value;
    let rbc=text*5;
    document.getElementById("rbcvalue").value = rbc;
}
// copy tokan address
function Mycopy() {
   
    copyText="0xFe777Dc834BE3C4B77Bba89A2A13518a92c6770b";
    navigator.clipboard.writeText(copyText);
  // Alert the copied text
  alert("Copied the text: " + copyText);
  }


