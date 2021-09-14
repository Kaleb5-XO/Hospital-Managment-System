function toggleMenu(){
    var elem7 = document.getElementById("main");
    var elem6 = document.getElementById("header");
    var elem5 = document.getElementById("SideMenu");
    var elem4 = document.getElementById("Status");
    var elem3 = document.getElementById("sideBrand");
    var elem2 = document.getElementById("toggle");
    var elem = document.getElementById("sidebar");
    elem7.classList.toggle("active7");
    elem6.classList.toggle("active6");
    elem5.classList.toggle("active5");
    elem3.classList.toggle("active3");
    elem4.classList.toggle("active4");
    elem.classList.toggle("active1");  
    elem2.classList.toggle("active2");

}