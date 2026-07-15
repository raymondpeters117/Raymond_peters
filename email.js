/*==============================
    EMAIL JS
==============================*/

// Your EmailJS values
const PUBLIC_KEY = "yBBhs7VyLJJ-0Xhk8";
const SERVICE_ID = "service_wmjtgwl";
const TEMPLATE_ID = "template_upuac99";


// Initialize EmailJS
emailjs.init({
    publicKey: PUBLIC_KEY
});


const form = document.getElementById("contactForm");
const status = document.getElementById("status");



if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();


        status.innerHTML = "Sending message...";
        status.style.color = "orange";


        emailjs.sendForm(
            SERVICE_ID,
            TEMPLATE_ID,
            form
        )


        .then(function () {


            status.innerHTML =
            "✅ Message sent successfully!";


            status.style.color = "#00ff88";


            form.reset();


        })


        .catch(function (error) {


            console.log("EmailJS Error:", error);


            status.innerHTML =
            "❌ Failed to send message.";


            status.style.color = "red";


        });


    });

}
