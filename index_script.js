function runAnimation(element) {
    element.style.animation = "content_div_inner_bordermove 1s";
    element.style.animationIterationCount = "1";
    element.addEventListener("animationend", function() {
        element.style.animation = ""; // Reset animation
    });
}