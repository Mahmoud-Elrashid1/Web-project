// admin.js
const pendingContainer = document.querySelector(".pending-events");

function loadPendingEvents() {
    const pendingEvents = JSON.parse(localStorage.getItem("pendingEvents")) || [];
    pendingContainer.innerHTML = "";

    if (pendingEvents.length === 0) {
        pendingContainer.innerHTML = "<p>No pending events.</p>";
        return;
    }

    pendingEvents.forEach((event, index) => {
        const article = document.createElement("article");
        article.classList.add("event-review");
        article.innerHTML = `
            <h3>${event.title}</h3>
            <p><strong>Organizer:</strong> ${event.organizer}</p>
            <img src="${event.image}" alt="${event.title}">
            <p><strong>Date:</strong> ${event.date}</p>
            <p><strong>Location:</strong> ${event.location}</p>
            <p><strong>Description:</strong> ${event.description}</p>
            <div class="admin-respond">
                <button class="approve-btn">Approve</button>
                <button class="reject-btn">Reject</button>
            </div>
        `;

        // Approve button
        article.querySelector(".approve-btn").addEventListener("click", () => {
            const approvedEvents = JSON.parse(localStorage.getItem("approvedEvents")) || [];
            approvedEvents.push(event);
            localStorage.setItem("approvedEvents", JSON.stringify(approvedEvents));

            // Remove from pending
            pendingEvents.splice(index, 1);
            localStorage.setItem("pendingEvents", JSON.stringify(pendingEvents));

            loadPendingEvents();
        });

        // Reject button
        article.querySelector(".reject-btn").addEventListener("click", () => {
            pendingEvents.splice(index, 1);
            localStorage.setItem("pendingEvents", JSON.stringify(pendingEvents));
            loadPendingEvents();
        });

        pendingContainer.appendChild(article);
    });
}

// Initial load
loadPendingEvents();