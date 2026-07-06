//// ================= MOBILE MENU =================
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("overlay");

menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
});

//// ================= TYPING TEXT =================
const typed = document.getElementById("typed");

const words = ["Web Developer", "UI Designer", "ICT Student"];
let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function typeEffect() {
    current = words[i];

    if (isDeleting) {
        typed.textContent = current.substring(0, j--);
    } else {
        typed.textContent = current.substring(0, j++);
    }

    if (!isDeleting && j === current.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1200);
        return;
    }

    if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);
}

typeEffect();

//// ================= SLIDESHOW =================
let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide() {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");

    index = (index + 1) % slides.length;
}

setInterval(showSlide, 3000);

//// ================= SCROLL TO TOP =================
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

//// ================= EMAILJS CONTACT FORM (ADDED) =================
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.querySelector("input[type='text']").value;
    const email = form.querySelector("input[type='email']").value;
    const message = form.querySelector("textarea").value;

    // Send email using EmailJS
    emailjs.send(
        "service_wmjtgwl",     // your service ID
        "YOUR_TEMPLATE_ID",    // replace this
        {
            from_name: name,
            from_email: email,
            message: message
        },
        "YOUR_PUBLIC_KEY"      // replace this
    )
    .then(() => {
        alert("Message sent successfully 📩");

        // also save locally (your old feature)
        const messages = JSON.parse(localStorage.getItem("messages")) || [];
        messages.push({ name, email, message });
        localStorage.setItem("messages", JSON.stringify(messages));

        form.reset();
    })
    .catch((error) => {
        console.log("EmailJS Error:", error);
        alert("Failed to send message ❌");
    });
});

//// ================= FADE IN ANIMATION =================
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.1 });

sections.forEach(sec => {
    sec.classList.add("hidden");
    observer.observe(sec);
});
emailjs.init({
    publicKey: "YOUR_PUBLIC_KEY"
});

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const params = {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_wmjtgwl", "service_wmjtgwl", params)
    .then(() => {
        document.getElementById("status").innerHTML =
            "✅ Message sent successfully!";

        form.reset();
    })
    .catch((error) => {
        document.getElementById("status").innerHTML =
            "❌ Failed to send message.";

        console.log(error);
    });
});
