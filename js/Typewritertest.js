var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('FreeLancer')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Photographer')
    .pauseFor(2500)
    .deleteChars(7)
    .typeString('Developer')
    .pauseFor(2500)
    .start();