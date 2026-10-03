(function () {
"use strict";

```
var activePopover = null;
var previouslyFocused = null;

function openLegacyPopover(id) {
    var element = document.getElementById(id);
    var closeButton;

    if (!element) {
        return;
    }

    if (activePopover) {
        closeLegacyPopover(activePopover.id);
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

function closeLegacyPopover(id) {
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

    if (
        (event.key === "Escape" || event.keyCode === 27) &&
        activePopover
    ) {
        closeLegacyPopover(activePopover.id);
    }
}

window.openLegacyPopover = openLegacyPopover;
window.closeLegacyPopover = closeLegacyPopover;

if (document.addEventListener) {
    document.addEventListener("keydown", handleKeyDown, false);
} else if (document.attachEvent) {
    document.attachEvent("onkeydown", handleKeyDown);
}
```

}());
