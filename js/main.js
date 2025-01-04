const logos = ["img/soaplogo1.png","img/soaplogo2.png","img/soaplogo3.png","img/soaplogo4.png"]


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
var image = document.getElementById('logo');
image.src = logos[getRndInteger(0,3)];


