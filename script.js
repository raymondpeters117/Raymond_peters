
// ================= TYPING EFFECT =================

const words = ["Frontend Developer", "Web Designer", "Programmer", "Excavator Operator"];

let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {

    currentWord = words[i];

    if (!isDeleting) {
        j++;
    } else {
        j--;
    }

    document.getElementById("typed").textContent =
        currentWord.substring(0, j);

    if (!isDeleting && j === currentWord.length) {
        isDeleting = true;
        setTimeout(type, 1200);
        return;
    }
// =========================
// MOBILE MENU TOGGLE
// =========================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// close menu when clicking a link
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});
    if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
    }

    setTimeout(type, isDeleting ? 60 : 100);
}

type();


// ================= HERO SLIDESHOW (FIXED) =================

const slides = document.querySelectorAll(".hero-slideshow .slide");

let current = 0;

// show first slide
function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
}

// initialize
showSlide(current);

// auto change every 4 seconds
setInterval(nextSlide, 4000);


// ================= CONTACT FORM (EMAILJS) =================

document.querySelector("form").addEventListener("submit", function (e) {

    e.preventDefault();

    emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        this
    ).then(() => {

        alert("Message sent successfully!");
        this.reset();

    }).catch((error) => {

        alert("Failed to send message.");
        console.log(error);

    });

});
// Scroll to top button
let topBtn = document.getElementById("topBtn");

// Show button when scrolling
window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

// Click to scroll top
topBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
const toggleBtn = document.getElementById("menuToggle");
const menu = document.getElementById("mobileMenu");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});
document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});
