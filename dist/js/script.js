const menuBar = document.querySelector(".menu-bar");
const menuNav = document.querySelector(".menu");

menuBar.addEventListener("click", () => {
	menuNav.classList.toggle("menu-active");
});

const navBar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
	console.log(window.scrollY);
	const windowPosition = window.scrollY > 0;
	navBar.classList.toggle("scrolling-active", windowPosition);
	menuNav.classList.remove("menu-active");
});

// Scroll Animation Right
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});


const boxElements = document.querySelectorAll(".bxright");
boxElements.forEach((el) => observer.observe(el));

// Scroll Animation Left
const observerr = new IntersectionObserver((entriess) => {
    entriess.forEach((entryy) => {
        console.log(entryy)
        if (entryy.isIntersecting) {
            entryy.target.classList.add("show");
        } else {
            entryy.target.classList.remove("show");
        }
    });
});


const boxxElements = document.querySelectorAll(".bxleft");
boxxElements.forEach((el) => observerr.observe(el));

// Scroll Animation Right Responsive
const observer2 = new IntersectionObserver((entries2) => {
    entries2.forEach((entry2) => {
        console.log(entry2)
        if (entry2.isIntersecting) {
            entry2.target.classList.add("show");
        } else {
            entry2.target.classList.remove("show");
        }
    });
});


const box2Elements = document.querySelectorAll(".r-bxright");
box2Elements.forEach((el) => observer2.observe(el));