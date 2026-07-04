// Typing effect
const words = ["Frontend Developer", "Web Designer", "Programmer","excavator operator"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
  currentWord = words[i];

  if (isDeleting) {
    j--;
  } else {
    j++;
  }

  document.getElementById("typed").textContent = currentWord.substring(0, j);

  if (!isDeleting && j === currentWord.length) {
    isDeleting = true;
    setTimeout(type, 1000);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
  }

  setTimeout(type, 100);
}

type();
document.querySelector("form").addEventListener("submit", function(e){

    e.preventDefault();

    emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        this
    ).then(() => {

        alert("Message sent successfully!");

        this.reset();

    }).catch((error)=>{

        alert("Failed to send message.");

        console.log(error);

    });

});
