console.log('scrolling connected')

document.getElementById("btn1").addEventListener("click", function () {
    document.getElementById("section2").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("btn2").addEventListener("click", function () {
    document.getElementById("section1").scrollIntoView({ behavior: "smooth" });
});