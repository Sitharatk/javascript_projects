function generate(){
    var quotes={
        "-James A. Garfield":'"The truth will set you free, but first it will make you miserable."',
        "-Richard Bach":'"If you love someone, set them free. If they come back they are yours; if they dont they never were."',
        "-Michelangelo":'"I saw the angel in the marble and carved until I set him free."',
        "-Lewis B. Smedes":'"To forgive is to set a prisoner free and discover that the prisoner was you."',
        "-Hannah Arendt":'"Forgiveness is the key to action and freedom."',
        "-Voltaire":'"It is difficult to free fools from the chains they revere."',
        "-Denis Diderot":'"Man will never be free until the last king is strangled with the entrails of the last priest."'
    }
    var authors=Object.keys(quotes);
    var author=authors[Math.floor(Math.random()*authors.length)];
    var quote =quotes[author];
    document.getElementById("quote").innerHTML=quote;
    document.getElementById("author").innerHTML=author;
}