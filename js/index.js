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



//   open facebook

function OpenFacebookApp(){
    var url=["https://www.facebook.com/share/v/1GfNyCXyxz/","https://www.facebook.com/share/p/1LEtxoJr8b/","https://www.facebook.com/share/17nAZxu7bb/","https://www.facebook.com/share/p/1PuMkz1a95/"];
    const randomIndex = Math.floor(Math.random() * url.length);
    window.location.href = "https://www.facebook.com/sharer/sharer.php?u="+ url[randomIndex] +"&quote=Check out this amazing post!";
    console.log(url[randomIndex])
}


// open whatsapp

function OpenWhatsApp(){
   
        const message = "Hello! Check out this amazing website: ";
        var url=["https://www.facebook.com/share/v/1GfNyCXyxz/","https://www.rabito.io/","https://www.facebook.com/share/17nAZxu7bb/","https://www.facebook.com/share/p/1PuMkz1a95/"];
        const randomIndex = Math.floor(Math.random() * url.length);
        const whatsappURL = `https://wa.me/?text=${encodeURIComponent(message + url[randomIndex])}`;
        
        if (/Android|iPhone|iPad/i.test(navigator.userAgent)) {
            window.location.href = whatsappURL;
        } else {
            alert("WhatsApp sharing is available only on mobile devices.");
        }
    }
    


function OpenInstagram(){
    var url = ["https://www.instagram.com/reel/DCuACktTMnb/?igsh=dHZvb2tmOW90NHRk","https://www.instagram.com/p/DCriejWz6FS/?igsh=MWwxY2lvYWw0a2VkZw==/","https://www.instagram.com/reel/DBv8_k9Iohm/?igsh=MTJxYzJ4aTMzdzBkMQ=="]
    const randomIndex = Math.floor(Math.random() * url.length);
    window.location.href=url[randomIndex];
    // window.location.href = "https://www.facebook.com/sharer/sharer.php?u="+ url[randomIndex] +"&quote=Check out this amazing post!";
    console.log(url[randomIndex])


}

// share telegram

function shareOnTelegram() {
    const message = "Hello! Check out this amazing website: ";
    var url = ["https://www.instagram.com/reel/DCuACktTMnb/?igsh=dHZvb2tmOW90NHRk","https://www.instagram.com/p/DCriejWz6FS/?igsh=MWwxY2lvYWw0a2VkZw==/","https://www.instagram.com/reel/DBv8_k9Iohm/?igsh=MTJxYzJ4aTMzdzBkMQ=="]
    const randomIndex = Math.floor(Math.random() * url.length);
    const telegramURL = `https://t.me/share/url?url=${encodeURIComponent(url[randomIndex])}&text=${encodeURIComponent(message)}`;
    
    if (/Android|iPhone|iPad/i.test(navigator.userAgent)) {
        window.location.href = telegramURL;
    } else {
        alert("Telegram sharing is available only on mobile devices.");
    }
}
