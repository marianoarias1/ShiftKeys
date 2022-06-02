/* Pantalla de carga */

let funcionPantalla = function (){
    $(`#onload`).fadeOut();
    $(`body`).removeClass('hidden')
}

window.setInterval(funcionPantalla, 2000)

/* menu hamburguesa */

const navHamburguesa= document.querySelector("#padre_hamburguesa");
const listaHamburguesa= document.querySelector(".padre_ul");
const ulHamburguesa= document.querySelector(".cont_ul")



navHamburguesa.addEventListener("click",()=>{
    navHamburguesa.classList.toggle("active");

    listaHamburguesa.classList.toggle("active");

    ulHamburguesa.classList.toggle("active");

    document.body.classList.toggle('opacity')


});



const listaNav1= document.querySelector("#lista_nav1")
const listaNav2= document.querySelector("#lista_nav2")
const listaNav3= document.querySelector("#lista_nav3")
const listaNav4= document.querySelector("#lista_nav4")
const listaNav5= document.querySelector("#lista_nav5")

const iconoPersona= document.querySelector('#icono_persona')
const contLogReg= document.querySelector('.cont_log_reg')

listaNav1.addEventListener("click",()=>{
    navHamburguesa.classList.remove("active");

    listaHamburguesa.classList.remove("active");

    ulHamburguesa.classList.remove("active");

    document.body.classList.remove('opacity')
})

listaNav2.addEventListener("click",()=>{
    navHamburguesa.classList.remove("active");

    listaHamburguesa.classList.remove("active");

    ulHamburguesa.classList.remove("active");

    document.body.classList.remove('opacity')
})

listaNav3.addEventListener("click",()=>{
    navHamburguesa.classList.remove("active");

    listaHamburguesa.classList.remove("active");

    ulHamburguesa.classList.remove("active");

    document.body.classList.remove('opacity')
})

listaNav4.addEventListener("click",()=>{
    navHamburguesa.classList.remove("active");

    listaHamburguesa.classList.remove("active");

    ulHamburguesa.classList.remove("active");

    document.body.classList.remove('opacity')

    iconoPersona.classList.remove('active2')

    contLogReg.classList.remove('active2')

})

listaNav5.addEventListener("click",()=>{
    navHamburguesa.classList.remove("active");

    listaHamburguesa.classList.remove("active");

    ulHamburguesa.classList.remove("active");

    document.body.classList.remove('opacity')

    iconoPersona.classList.remove('active2')

    contLogReg.classList.remove('active2')

})


/* Icono personas */



iconoPersona.addEventListener('click',()=>{
    iconoPersona.classList.toggle('active2')
    contLogReg.classList.toggle('active2')
})



/* Animacion maquina de escribir */

let app = document.getElementById('titulo_nosotros');

let typewriter = new Typewriter(app, {
    loop: false

});


typewriter.typeString('ShiftKeys')
    .pauseFor(2500)
    .start();
    



/* Slider */

window.addEventListener("load", ()=>{
    let imagenes= [];
    imagenes[0]="./Slider/slider1.jpg"
    imagenes[1]="./Slider/slider2.jpg"
    imagenes[2]="./Slider/slider3.jpg"
    imagenes[3]="./Slider/slider4.jpg"

    let indiceImagenes=0;

    function cambiarImagenes (){
        document.slider.src=imagenes[indiceImagenes];

        if(indiceImagenes < 3){
            indiceImagenes++;
        }else{
            indiceImagenes=0;
        }
    }

    setInterval(cambiarImagenes,2000)
})



