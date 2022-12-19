const startbutton = document.getElementById("startbutton");
const videoplayer = document.getElementById("videoplayer");


let height = window.innerHeight;
let widit = window.innerWidth;

document.getElementById("testh1").innerHTML = "Widit: " + widit + " | Height: " + height;

const delay = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
}

async function playvideo() {
    document.body.style.backgroundColor = "black";
    startbutton.style.display = "none";
    videoplayer.style.display = "block";
    await delay(200);
    videoplayer.play();
    console.log("hej");
}

function onload1() {
    console.log("hej");
}