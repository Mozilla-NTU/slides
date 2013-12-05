var text;
var spot;

function init() {
    text = document.getElementById('tsb-text');
    spot = document.getElementById('tsb-spot');

    document.getElementById('text-shadow-box').onmousemove = onMouseMove;
    document.getElementById('text-shadow-box').ontouchmove = function (e) {
        e.preventDefault();
        e.stopPropagation();
        onMouseMove({clientX: e.touches[0].clientX, clientY: e.touches[0].clientY});
    };

    onMouseMove({clientX: -300, clientY: -200});
}


function onMouseMove(e) {
    var xm = e.clientX - 300;
    var ym = e.clientY - 175;
    var d = Math.sqrt(xm * xm + ym * ym);
    text.style.textShadow = -xm + 'px ' + -ym + 'px ' + (d / 5 + 10) + 'px black';

    xm = e.clientX;
    ym = e.clientY;
    console.log("e.clientx = " + e.clientX);
    console.log("e.clienty = " + e.clientY);
    spot.style.backgroundPosition = xm + 'px ' + ym + 'px';
}

init();
