"use strict";

var animationRunning = true;

// removeClass from an element
function removeClass(el, className) {
    if (el.classList)
        el.classList.remove(className);
    else
        el.className = el.className.replace(new RegExp('(^|\\b)' +
            className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
}

//addClass to an element
function addClass(el, className) {
    if (el.classList)
        el.classList.add(className);
    else
        el.className += ' ' + className;
}


/*
 Event listener to toggle animation
 */

function toggle_animation() {
    var i;
    var j;
    var packet;
    var thisPacket;

    for (i = 1; i < 8; i++) {
        if (animationRunning === true) {
            for (j = 1; j < 10; j++) {
                thisPacket = "packet" + i + "-" + j;
                packet = document.getElementById(thisPacket);
                addClass(packet, "pause-animation");
                removeClass(packet, "start-automation");
                console.log("pausing " + thisPacket);
            }
        } else {
            for (j = 1; j < 10; j++) {
                thisPacket = "packet" + i + "-" + j;
                packet = document.getElementById(thisPacket);
                removeClass(packet, "pause-animation");
                addClass(packet, "start-automation");
                console.log("restarting " + thisPacket);
            }
        }
    }
    animationRunning = !animationRunning;
}




