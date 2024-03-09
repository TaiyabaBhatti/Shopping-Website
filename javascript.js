let iconStatus=false;
let rightNavlinks=document.getElementById("right-nav");
let navLinks=rightNavlinks.getElementsByTagName("ul")[0];
let barElement=document.getElementById("bar-icon");




console.log(navLinks);

function IconChange(){

 if(barElement.classList.contains("fa-bars")){
    barElement.classList.remove("fa-bars")
    barElement.classList.add("fa-xmark")
    iconStatus=true;
 }

else{
    barElement.classList.add("fa-bars");
    barElement.classList.remove("fa-xmark");
    iconStatus=false;
}
 }

