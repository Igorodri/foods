var btn_mobile = document.querySelector(".btn-mobile");
var mobile_menu = document.querySelector("#mobile_menu");
var btn_default = document.querySelector(".btn-default")

btn_mobile.addEventListener("click", function()
{
    if (mobile_menu.classList.contains("active")) {
        mobile_menu.classList.remove("active");
        btn_default.classList.remove("active");
    } else {
        mobile_menu.classList.add("active");
        btn_default.classList.add("active");

    }
});


var cta = ScrollReveal().reveal('#cta',{
    origin: 'left',
    duration: 2000,
    distance: '20%'
});

var shape = ScrollReveal().reveal('.shape',{
    origin: 'left',
    duration: 2000,
    distance: '20%'
});

var banner = ScrollReveal().reveal('#banner',{
    origin: 'left',
    duration: 2000,
    distance: '20%'
});

var arealanchonete = ScrollReveal().reveal('#area-lanchonete',{
    origin: 'top',
    duration: 2000,
    distance: '20%'
});

var box = ScrollReveal().reveal('.box',{
    origin: 'top',
    duration: 2000,
    distance: '20%'
});

var box_menu = ScrollReveal().reveal('#box-menu',{
    origin: 'left',
    duration: 2500,
    distance: '5%'
});

var contato = ScrollReveal().reveal('#area-contato',{
    origin: 'bottom',
    duration: 2500,
    distance: '5%'
});







