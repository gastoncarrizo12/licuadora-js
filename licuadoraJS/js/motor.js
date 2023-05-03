var estadoLicuadora = "apagada";
var licuadora = document.getElementById("blender");
var sonidoLicuadora = document.getElementById("blender-sound");
var botonLicuadora = document.getElementById("blender-button-sound");

function controlarLicuadora () {
    if (estadoLicuadora == "apagada") {
        estadoLicuadora = "encendido" ;
        hacerRuido();
        licuadora.classList.add ("active");
       /* console.log ("me prendiste");*/
    } else {
        estadoLicuadora = "apagada";
        hacerRuido();
        licuadora.classList.remove ("active");
       /* console.log ("me apagaste");*/
    }
}

function hacerRuido() {
    if (sonidoLicuadora.paused) {
        botonLicuadora.play();
        sonidoLicuadora.play();
    } else {
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }
}