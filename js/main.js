//document.addEventListener('DOMContentLoaded', function () {
//    let html = document.querySelector(".page-cab");
//
//    function size() {
//        html.style.minHeight = window.screen.availHeight + 'px';
//    }
//    setInterval(size, 2000)
//})


document.addEventListener('DOMContentLoaded', function () {
    let width = document.body.offsetWidth;
    let height = document.body.offsetHeight;

    console.log(width + ' ' + height)
    let stars = document.querySelectorAll('.star');

    function show(elem) {
        let left = randomInteger(0, width);
        let top = randomInteger(0, height);
        elem.style.left = left + 'px';
        elem.style.top = top + 'px';
        elem.classList.remove("star_active");
        elem.classList.add("star_active");
    }
    setInterval(function () {
        for (let item of stars) {
            show(item);

        };
    }, 1000)
});

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
