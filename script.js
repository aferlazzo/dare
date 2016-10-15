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
    var roller = [];

    roller = document.getElementsByClassName("conveyor-belt-roller");

    for (i = 1; i < 8; i++) {
        if (animationRunning === true) {
            for (j = 1; j < 10; j++) {
                thisPacket = "packet" + i + "-" + j;
                packet = document.getElementById(thisPacket);
                addClass(packet, "pause-animation");
                removeClass(packet, "start-automation");
                //console.log("pausing " + thisPacket);
            }
            for (j = 0; j < roller.length; j++) {
                addClass(roller[j], "pause-animation");
                removeClass(roller[j], "start-automation");
                //console.log("pausing roller[" + j +"]");
            }
        } else {
            for (j = 1; j < 10; j++) {
                thisPacket = "packet" + i + "-" + j;
                packet = document.getElementById(thisPacket);
                removeClass(packet, "pause-animation");
                addClass(packet, "start-automation");
                //console.log("restarting " + thisPacket);
            }
            for (j = 0; j < roller.length; j++) {
                removeClass(roller[j], "pause-animation");
                addClass(roller[j], "start-automation");
                //console.log("restarting roller[" + j +"]");
            }
        }
    }
    animationRunning = !animationRunning;
}




