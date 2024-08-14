
let imgbox = document.getElementById("imgbox");
let qrimg = document.getElementById("qrimg");
let qrText = document.getElementById("qrText");


function generateQR() {
    let qrData = qrText.value.trim(); 
    if (qrData) {
        qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrData);
        imgbox.classList.add("show-img");
    } else {
        alert("Please enter some text or URL.");
    }
}
