const intervalID = setInterval(timePrinting, 1000)

function timePrinting(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}