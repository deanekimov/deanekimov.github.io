function runAnimation(element) {
    element.style.animation = "content_div_inner_bordermove 1s";
    element.style.animationIterationCount = "1";
    document.body.style.backgroundImage = `linear-gradient(to right, ${getRandomColor()}, ${getRandomColor()})`;
    element.addEventListener("animationend", function() {
        element.style.animation = "";
    });
}
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

