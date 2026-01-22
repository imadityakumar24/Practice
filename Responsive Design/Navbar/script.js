let navlinks = document.getElementById("nav-links");
let classnavlinks = document.getElementsByClassName("Class-nav-links");

let menuopen = document.getElementById("menu-open");
let menuclose = document.getElementById("menu-close"); 

menuopen.addEventListener("click", ()=> {
    navlinks.style.display = "block";
    menuopen.style.display = "none";
    menuclose.style.display = "block";
});

menuclose.addEventListener("click", ()=> {
    navlinks.style.display = "none";
    menuopen.style.display = "block";
    menuclose.style.display = "none";
});