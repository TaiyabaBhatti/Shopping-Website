let iconStatus=false;
let rightNavlinks=document.getElementById("right-nav");
let navLinks=rightNavlinks.getElementsByTagName("ul")[0];
let barElement=document.getElementById("bar-icon");
console.log(navLinks);

let mediaQNav=window.matchMedia("(max-width:775px)");


function displaySidebar(){
navLinks.style.display="flex";
 }
 function hideSidebar(){
    navLinks.style.display="none";
     }
    












     