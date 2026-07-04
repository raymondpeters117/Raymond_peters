/*==============================
    EMAIL JS
==============================*/

// Replace these with your EmailJS values
const PUBLIC_KEY = "YOUR_PUBLIC_KEY";
const SERVICE_ID = "YOUR_SERVICE_ID";
const TEMPLATE_ID = "YOUR_TEMPLATE_ID";

emailjs.init(PUBLIC_KEY);

const form = document.getElementById("contact-form");
const status = document.getElementById("status");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    status.innerHTML = "Sending message...";

    emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form
    )

    .then(function () {

        status.innerHTML = "✅ Message sent successfully!";

        status.style.color = "#00ff88";

        form.reset();

    })

    .catch(function (error) {

        console.log(error);

        status.innerHTML = "❌ Failed to send message.";

        status.style.color = "red";

    });

});
