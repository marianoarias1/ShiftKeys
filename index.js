let app = document.getElementById('titulo_header');

let typewriter = new Typewriter(app, {
    loop: false
});

typewriter.typeString('ShiftKeys')
    .pauseFor(2500)
    .start();