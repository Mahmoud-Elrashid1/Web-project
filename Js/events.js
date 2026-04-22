// Default events
const defaultEvents = [
  { title: "AI & Machine Learning Seminar", organizer: "CS Department", category: "seminar", image: "../images/images.jpg", date: "2026-04-20", location: "Science Hall", description: "Learn AI & Machine Learning basics." },
  { title: "Photography Workshop", organizer: "Art & Media Club", category: "workshop", image: "../images/images.jpg", date: "2026-04-20", location: "Room 204", description: "Improve your photography skills." },
  { title: "Startup Networking Night", organizer: "Entrepreneur Club", category: "meetup", image: "../images/image.webp", date: "2026-04-20", location: "Student Hall", description: "Meet startup founders and network." }
];

// Approved events
let approvedEvents = JSON.parse(localStorage.getItem("approvedEvents")) || [];

// Combine default + approved
let allEvents = [...defaultEvents, ...approvedEvents];

// Grid container
const eventsGrid = document.querySelector(".events-grid");

// Selected category
let selectedCategory = "all";

// Display events function
function displayEvents(events) {
  if (!events || events.length === 0) {
    eventsGrid.innerHTML = "<p>No events available at the moment.</p>";
    return;
  }

  eventsGrid.innerHTML = "";
  events.forEach(event => {
    const article = document.createElement("article");
    article.classList.add("eventcard");
    article.dataset.category = event.category;

    article.innerHTML = `
      <div class="event-badge">
        <span>${new Date(event.date).toLocaleString('default', { month: 'short' }).toUpperCase()}</span>
        <strong>${new Date(event.date).getDate()}</strong>
      </div>
      <img src="${event.image}" alt="${event.title} image">
      <h3>${event.title}</h3>
      <p class="date">Date: <time datetime="${event.date}">${new Date(event.date).toLocaleDateString()}</time></p>
      <p class="organizer">${event.organizer}</p>
      <p class="location">${event.location}</p>
      <a href="RSVP.html" class="rsvp-btn">RSVP</a>
    `;
    eventsGrid.appendChild(article);
  });
}

// ---------- FILTER ----------
const filterButtons = document.querySelectorAll(".filter-btn");
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    selectedCategory = btn.dataset.category;
    applyFilters(); // Apply filters after category change


    // ----- HIGHLIGHT SELECTED BUTTON -----
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

  });
});

// ---------- SEARCH ----------
const searchInput = document.querySelector("#search");
const searchForm = document.querySelector(".searchbar");

searchForm.addEventListener("submit", e => {
  e.preventDefault();
  applyFilters();
});

// ---------- APPLY FILTERS ----------
function applyFilters() {
  const keyword = searchInput.value.trim().toLowerCase();

  const filtered = allEvents.filter(event => {
    // Category must match or be "all"
    const categoryMatch = selectedCategory === "all" || event.category === selectedCategory;

    // Keyword matches title, organizer, location, or description
    const searchMatch = !keyword || 
      event.title.toLowerCase().includes(keyword) ||
      event.organizer.toLowerCase().includes(keyword) ||
      event.location.toLowerCase().includes(keyword) ||
      event.description.toLowerCase().includes(keyword);

    // BOTH conditions must be true
    return categoryMatch && searchMatch;
  });

  displayEvents(filtered);
}

// ---------- INITIAL DISPLAY ----------
displayEvents(allEvents);