(function () {
    "use strict";

    var activePopover = null;
    var previouslyFocused = null;

    function showPopover(id) {
        var element = document.getElementById(id);
        var closeButton;

        if (!element) {
            return;
        }

        if (activePopover) {
            hidePopover(activePopover.id);
        }

        previouslyFocused = document.activeElement;
        element.style.display = "block";
        element.setAttribute("aria-hidden", "false");
        activePopover = element;

        closeButton = element.getElementsByTagName("button")[0];
        if (closeButton) {
            closeButton.focus();
        }
    }

    function hidePopover(id) {
        var element = document.getElementById(id);

        if (!element) {
            return;
        }

        element.style.display = "none";
        element.setAttribute("aria-hidden", "true");
        activePopover = null;

        if (previouslyFocused && previouslyFocused.focus) {
            previouslyFocused.focus();
        }
        previouslyFocused = null;
    }

    function handleKeyDown(event) {
        event = event || window.event;
        if ((event.key === "Escape" || event.keyCode === 27) && activePopover) {
            hidePopover(activePopover.id);
        }
    }

    window.showPopover = showPopover;
    window.hidePopover = hidePopover;

    if (document.addEventListener) {
        document.addEventListener("keydown", handleKeyDown, false);
    } else {
        document.attachEvent("onkeydown", handleKeyDown);
    }
}());
