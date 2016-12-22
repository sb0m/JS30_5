window.onload = function () {
    let panels = document.querySelectorAll(".panel");
    // Reference to the funtion: toggleOpen
    // run the function: toggleOpen()
    panels.forEach(panel => panel.addEventListener('click', toggleOpen));
    panels.forEach(panel => panel.addEventListener("touchstart", toggleOpen));
    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
}

function toggleOpen() {
    this.classList.toggle('open');
}

function toggleActive(e) {
    // here are 2 things transitioned, so you've to select one
    // in Safari just flex, in the rest flex-grow
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}
