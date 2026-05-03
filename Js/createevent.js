// createevent.js
const eventForm = document.getElementById("eventForm");

eventForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Grab form values
    const title = document.getElementById("title").value.trim();
    const organizer = document.getElementById("organizer").value.trim();
    const category = document.getElementById("category").value;
    const image = document.getElementById("image").value.trim();
    const dateValue = document.getElementById("date").value;
    const location = document.getElementById("location").value.trim();
    const description = document.getElementById("description").value.trim();

    // 1. Regex Patterns
    const patterns = {
        title: /^[a-zA-Z0-9\s]{5,50}$/, // 5-50 chars, alphanumeric + spaces
        url: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/i // Valid image URL
    };

    // 2. Date Validation (Check if date is before today)
    const selectedDate = new Date(dateValue);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time to compare only the date

    // 3. Professional Validation Logic
    if (!patterns.title.test(title)) {
        alert("Title must be 5-50 characters and alphanumeric.");
        return;
    }

    if (!organizer || organizer.length < 3) {
        alert("Please enter a valid organizer name.");
        return;
    }

    if (image && !patterns.url.test(image)) {
        alert("Please provide a valid image URL (jpg, png, etc.).");
        return;
    }

    if (!dateValue || selectedDate < today) {
        alert("Please select a valid date. You cannot pick a date in the past.");
        return;
    }

    if (description.length < 20) {
        alert("Description is too short. Please provide at least 20 characters.");
        return;
    }

    // Prepare new event object
    const newEvent = {
        title,
        organizer,
        category,
        image: image || "../images/default.jpg",
        date: dateValue,
        location,
        description,
        createdAt: new Date().toISOString() // Good practice for admin logs
    };

    // Save to localStorage
    const pendingEvents = JSON.parse(localStorage.getItem("pendingEvents")) || [];
    pendingEvents.push(newEvent);
    localStorage.setItem("pendingEvents", JSON.stringify(pendingEvents));

    alert("Event submitted successfully! Waiting for admin approval.");
    eventForm.reset();
});