document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();
            const result = document.getElementById("result");

            if (name === "" || email === "" || message === "") {
                result.style.color = "red";
                result.textContent = "Моля, попълнете всички полета.";
            } else {
                result.style.color = "green";
                result.textContent = "Съобщението е изпратено успешно!";
                form.reset();
            }
        });
    }
});