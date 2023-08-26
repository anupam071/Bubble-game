var timer = 30;
var score = 0;
var hitrn = 0;
function increasescore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}
function getnewhit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}
function makeBubble() {
    let clutter = "";
    for (var i = 0; i <168; i++) {
        var rn = Math.floor(Math.random() * 10)  //math.floor removes decimal number and .random()*10 generates nos b/w (1-9)
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector('#pbtm').innerHTML = clutter;
}


function runtimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML=`<h2>Game over</h2>`;
        }
    }, 1000)
}
document.querySelector("#pbtm").addEventListener("click", function (dets) {
    var clickednum = (Number(dets.target.textContent));
    if (clickednum === hitrn) {
        increasescore();
        makeBubble();
        getnewhit();
    }
});
runtimer();
makeBubble();
getnewhit();


