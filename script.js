document.addEventListener("DOMContentLoaded", function () {
    const heart = document.querySelector(".heart");
    const message = document.querySelector(".message");

    heart.addEventListener("click", function () {
        message.style.opacity = 1;
    });
});
