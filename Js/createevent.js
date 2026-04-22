// createevent.js
const eventForm = document.getElementById("eventForm");

eventForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Grab form values
    const title = document.getElementById("title").value.trim();
    const organizer = document.getElementById("organizer").value.trim();
    const category = document.getElementById("category").value;
    const image = document.getElementById("image").value.trim();
    const date = document.getElementById("date").value;
    const location = document.getElementById("location").value.trim();
    const description = document.getElementById("description").value.trim();

    // Simple validation
    if (!title || !organizer || !date || !location || description.length < 10) {
        alert("Please fill all fields correctly. Description must be at least 10 characters.");
        return;
    }

    // Prepare new event object
    const newEvent = {
        title,
        organizer,
        category,
        image: image || "../images/default.jpg",
        date,
        location,
        description
    };

    // Get pendingEvents from localStorage
    const pendingEvents = JSON.parse(localStorage.getItem("pendingEvents")) || [];
    pendingEvents.push(newEvent);
    localStorage.setItem("pendingEvents", JSON.stringify(pendingEvents));

    alert("Event submitted successfully! Waiting for admin approval.");
    eventForm.reset();
});