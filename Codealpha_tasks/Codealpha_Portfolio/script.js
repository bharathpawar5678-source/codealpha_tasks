// Typing Effect
const text = "Frontend Developer | BCA Student";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.querySelector(".hero p").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
    }
}
typeEffect();


// Scroll Animation
let projects = document.querySelectorAll(".project");

projects.forEach(p => {
    p.style.opacity = "0";
    p.style.transform = "translateY(50px)";
    p.style.transition = "0.5s";
});

window.addEventListener("scroll", () => {
    projects.forEach(p => {
        let position = p.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            p.style.opacity = "1";
            p.style.transform = "translateY(0)";
        }
    });
});


// Active Navbar
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        let sectionTop = section.offsetTop - 100;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});


// Scroll to Top Button
let btn = document.createElement("button");
btn.innerText = "⬆️";
btn.style.position = "fixed";
btn.style.bottom = "20px";
btn.style.right = "20px";
btn.style.padding = "10px";
btn.style.border = "none";
btn.style.borderRadius = "10px";
btn.style.cursor = "pointer";
btn.style.display = "none";

document.body.appendChild(btn);

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
});

btn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};