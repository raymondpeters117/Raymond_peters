// =========================================
// PORTFOLIO WEBSITE JAVASCRIPT
// =========================================

document.addEventListener("DOMContentLoaded", () => {

    // =====================================
    // MOBILE MENU
    // =====================================

    const menuToggle = document.getElementById("menuToggle");
    const mobileMenu = document.getElementById("mobileMenu");
    const overlay = document.getElementById("overlay");

    if (menuToggle && mobileMenu && overlay) {

        menuToggle.addEventListener("click", () => {
            mobileMenu.classList.toggle("active");
            overlay.classList.toggle("active");
        });

        overlay.addEventListener("click", () => {
            mobileMenu.classList.remove("active");
            overlay.classList.remove("active");
        });

    }


    // =====================================
    // TYPING EFFECT
    // =====================================

    const typed = document.getElementById("typed");

    if (typed) {

        const words = [
            "Web Developer",
            "UI Designer",
            "ICT Student"
        ];

        let wordIndex = 0;
        let charIndex = 0;
        let deleting = false;

        function type() {

            const currentWord = words[wordIndex];

            if (deleting) {
                typed.textContent = currentWord.substring(0, charIndex--);
            } else {
                typed.textContent = currentWord.substring(0, charIndex++);
            }

            let speed = deleting ? 60 : 120;

            if (!deleting && charIndex === currentWord.length + 1) {
                deleting = true;
                speed = 1500;
            }

            if (deleting && charIndex === 0) {
                deleting = false;
                wordIndex = (wordIndex + 1) % words.length;
            }

            setTimeout(type, speed);
        }

        type();
    }


    // =====================================
    // SLIDESHOW
    // =====================================

    const slides = document.querySelectorAll(".slide");

    if (slides.length > 0) {

        let slideIndex = 0;

        function showSlides() {

            slides.forEach(slide => slide.classList.remove("active"));

            slides[slideIndex].classList.add("active");

            slideIndex++;

            if (slideIndex >= slides.length) {
                slideIndex = 0;
            }
        }

        showSlides();

        setInterval(showSlides, 3000);
    }


    // =====================================
    // SCROLL TO TOP
    // =====================================

    const topBtn = document.getElementById("topBtn");

    if (topBtn) {

        window.addEventListener("scroll", () => {

            topBtn.style.display =
                window.scrollY > 300 ? "block" : "none";

        });

        topBtn.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    // =====================================
    // FADE IN
    // =====================================

    const sections = document.querySelectorAll("section");

    if (sections.length > 0) {

        const observer = new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }

            });

        }, {
            threshold: 0.1
        });

        sections.forEach(section => {
            section.classList.add("hidden");
            observer.observe(section);
        });

    }


    // =====================================
    // EMAILJS
    // =====================================

    emailjs.init({
        publicKey: "yBBhs7VyLJJ-0Xhk8"
    });

    const form = document.getElementById("contactForm");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            const params = {

                from_name: document.getElementById("name").value.trim(),

                from_email: document.getElementById("email").value.trim(),

                subject: document.getElementById("subject").value.trim(),

                message: document.getElementById("message").value.trim()

            };

            emailjs.send(
                "service_wmjtgwl",
                "template_mun37y8", // Replace with your template ID
                params
            )

            .then(() => {

                document.getElementById("status").innerHTML =
                    "✅ Message sent successfully.";

                // Save locally

                const messages =
                    JSON.parse(localStorage.getItem("messages")) || [];

                messages.push({
                    ...params,
                    date: new Date().toLocaleString()
                });

                localStorage.setItem(
                    "messages",
                    JSON.stringify(messages)
                );

                form.reset();

            })

            .catch(error => {

                console.error(error);

                document.getElementById("status").innerHTML =
                    "❌ Failed to send message.";

            });

        });

    }

});
