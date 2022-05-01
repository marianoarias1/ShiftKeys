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

    let indiceImagenes=0;

    function cambiarImagenes (){
        document.slider.src=imagenes[indiceImagenes];

        if(indiceImagenes < 2){
            indiceImagenes++;
        }else{
            indiceImagenes=0;
        }
    }

    setInterval(cambiarImagenes,2000)
})