function changeColor(){
    var hex_numbers=["1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    var hexcode="";
    for(i=0;i<6;i++){
        var random_index=Math.floor(Math.random()*hex_numbers.length);
        hexcode+=hex_numbers[random_index]
    }
    document.getElementById("hexacode").innerHTML=hexcode;
    document.getElementsByTagName("body")[0].style.backgroundColor="#"+hexcode
}