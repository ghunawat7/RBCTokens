function myFunction() {
   
    copyText="0xb52f...47d";
    navigator.clipboard.writeText(copyText);
  // Alert the copied text
  alert("Copied the text: " + copyText);
  }


  window.onscroll = function() {scrollFunction()};

function scrollFunction() {

    if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
        document.getElementById("nav").style.backgroundColor = "#081526";
        document.getElementById("nav").style.margin="0px"; 
        document.getElementById("nav").style.padding="10px"; 
        
      } else {
          document.getElementById("nav").style.backgroundColor = "transparent";
          document.getElementById("nav").style.margin="15px"; 
          document.getElementById("nav").style.padding="0px"; 


      }
}