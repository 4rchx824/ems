//credit: w3schools
let topbutton = document.getElementById("topBtn");
let botbutton = document.getElementById("botBtn");

// window.onscroll = function () {
//     scrollFunction();
// };

// function scrollFunction() {
//     if (
//         document.body.scrollTop > 20 ||
//         document.documentElement.scrollTop > 20
//     ) {
//         topbutton.style.display = "block";
//         botbutton.style.display = "block";
//     } else {
//         topbutton.style.display = "none";
//         botbutton.style.display = "none";
//     }
// }

topbutton.style.display = "block";
botbutton.style.display = "block";

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
