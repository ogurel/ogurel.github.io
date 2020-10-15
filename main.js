document.addEventListener('DOMContentLoaded', function () {
    let html = document.querySelector(".page-cab");

    function size() {
        html.style.minHeight = window.innerHeight + 'px';
    }
    setInterval(size, 2000)
})
