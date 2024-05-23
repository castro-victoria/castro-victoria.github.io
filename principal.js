const botonLeft = document.querySelector(".btn-left");
const botonRight = document.querySelector(".btn-right");
const lado = document.querySelector("#slider");
const ladoSection = document.querySelectorAll(".slider-section");


botonLeft.addEventListener("click", e => moverLeft());
botonRight.addEventListener("click", e => moverRight());

let operacion = 0;
let counter = 0;
let widthImg = 100 / ladoSection.length;

function moverRight() {
    if (counter >= ladoSection.length-1) {
        counter = 0;
        operacion = 0;
        lado.style.transform = `translate(-${operacion}%)`;
        lado.style.transition = "none";
        return;
    } 
    counter++;
    operacion = operacion + widthImg;
    lado.style.transform = `translate(-${operacion}%)`;
    lado.style.transition = "all ease .6s";
    
}  

function moverLeft() {
    counter--;
    if (counter < 0 ) {
        counter = ladoSection.length-1;
        operacion = widthImg * (ladoSection.length-1);
        lado.style.transform = `translate(-${operacion}%)`;
        lado.style.transition = "none";
        return;
    } 
    operacion = operacion - widthImg;
    lado.style.transform = `translate(-${operacion}%)`;
    lado.style.transition = "all ease .6s";

}  