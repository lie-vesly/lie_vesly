


function sendToWhatsapp(){
  
    const text = document.getElementById("text").value;


    const numerowhatsApp = "+242065737226";
    const url =  "https://wa.me/" + numerowhatsApp + "?text="
    
    + "Message:" +text+ "%0a"


    window.open(url, "_blank").focus()



    

}