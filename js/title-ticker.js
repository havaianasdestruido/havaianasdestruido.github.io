/* ==========================================================================
   title-ticker.js — scrolls a random message through the document title,
   old-school marquee style.
   ========================================================================== */

(function () {
    "use strict";

    var SPACE = " ";
    var SPEED = 60; // milliseconds between frames

    var messages = [
        "QUACK!! oops, i mean: meow! w-well, actually :nerd: it would be MEACK since my pfp is a cat but my name is PatoFlamejanteTV, so its.. both?!",
        "UltimateQuack, now on the Internet!!",
        "hi hi hi hi hi hi hi hi hi hi hi hi hi hi hih ih ih ihi hih ih ... ... ... does anyone really read this?",
        "QUACK QUACK QUACK!!",
        "asdfghjkl",
        "meow :3",
        "Certified Duck Moment\u2122",
        "fun fact: this website is open-source!"
    ];

    var queue = [];
    var msg = "";
    var pos = 0;

    // Fisher-Yates shuffle, in place.
    function shuffle(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }

        return array;
    }

    // Takes the next message, reshuffling once every message has been shown.
    function nextMessage() {
        if (queue.length === 0) {
            queue = shuffle(messages.slice());
        }

        return queue.shift();
    }

    function scroll() {
        document.title = msg.substring(pos, msg.length) + SPACE + msg.substring(0, pos);

        pos++;

        if (pos > msg.length) {
            pos = 0;
            msg = nextMessage();
        }

        window.setTimeout(scroll, SPEED);
    }

    msg = nextMessage();
    scroll();
}());
