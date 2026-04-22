/* --- 1. SELECTION --- */
const header = document.querySelector("header");
const reveals = document.querySelectorAll(".reveal");
const eventCards = document.querySelectorAll(".eventcard");
const backToTop = document.getElementById("backToTop");
const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector("nav ul");
const buttons = document.querySelectorAll(".btn-post, .btn-explore, .rsvp-btn, .category-item");
const categoryButtons = document.querySelectorAll(".category-item");

/* --- 2. CONSOLIDATED SCROLL EVENTS --- */
// One listener handles header shadow, reveal animations, and back-to-top visibility
window.addEventListener("scroll", function () {
    const scrollPos = window.scrollY;
    const windowHeight = window.innerHeight;

    // Header Shadow
    if (scrollPos > 50) {
        header.style.boxShadow = "0 6px 15px rgba(0,0,0,0.15)";
    } else {
        header.style.boxShadow = "0 2px 8px rgba(0,0,0,0.05)";
    }

    // Reveal Sections
    reveals.forEach(function (section) {
        if (section.getBoundingClientRect().top < windowHeight - 100) {
            section.classList.add("active");
        }
    });

    // Staggered Event Cards Reveal
    eventCards.forEach(function (card, index) {
        if (card.getBoundingClientRect().top < windowHeight - 100) {
            setTimeout(function () {
                card.classList.add("active"); // Using active to match your CSS reveal
            }, index * 150);
        }
    });

    // Back to Top visibility
    backToTop.style.display = scrollPos > 300 ? "block" : "none";
});

/* --- 3. UI INTERACTIONS --- */

// Smooth scroll to top
backToTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Mobile menu toggle
hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("show");
});

// Single listener for all button click effects (Combined your redundant listeners)
buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
        btn.classList.add("clicked");
        setTimeout(() => btn.classList.remove("clicked"), 200);
    });
});

/* --- 4. NAVIGATION & LOGIC --- */

// Highlight active menu item
document.querySelectorAll("nav ul li").forEach(function (item) {
    const link = item.querySelector("a");
    const currentPage = window.location.pathname.split("/").pop();
    if (link.getAttribute("href") === currentPage) {
        item.classList.add("active");
    }
});

// Category Filtering
categoryButtons.forEach(function (button) {
    button.addEventListener("click", function (e) {
        e.preventDefault();
        const category = button.getAttribute("data-category");

        eventCards.forEach(function (event) {
            const eventCat = event.getAttribute("data-category");
            if (category === "all" || eventCat === category) {
                event.style.display = "block";
                event.style.opacity = "1";
            } else {
                event.style.display = "none";
            }
        });
    });
});