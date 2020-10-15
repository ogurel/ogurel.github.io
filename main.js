document.addEventListener('DOMContentLoaded', function () {
    let html = document.querySelector("html");

    function size() {
        html.style.minHeight = window.innerHeight + 'px';
    }
    setInterval(size, 2000)
})