console.log('scrolling connected')

document.getElementById("btn1").addEventListener("click", function () {
    const target = document.getElementById("section2");
    const offset = 100;
    window.scrollTo({
        top: target.offsetTop - offset,
        behavior: "smooth"
    });
});

document.getElementById("btn2").addEventListener("click", function () {
    const target = document.getElementById("section1");
    const offset = 100;
    window.scrollTo({
        top: target.offsetTop - offset,
        behavior: "smooth"
    });
});