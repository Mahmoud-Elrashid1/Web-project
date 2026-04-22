rsvpForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const event = document.getElementById("event").value;
    const guests = parseInt(document.getElementById("guests").value) || 0;

    // 1. IMPROVEMENT: Check for Duplicate RSVP
    const alreadyRSVPd = rsvps.some(r => r.email === currentUser.email && r.event === event);
    if (alreadyRSVPd) {
        alert("You have already RSVP'd for this event!");
        return;
    }

    // 2. Logic: Calculate total capacity
    const currentEventRSVPs = rsvps.filter(r => r.event === event);
    const totalOccupied = currentEventRSVPs.reduce((sum, r) => sum + parseInt(r.guests) + 1, 0);

    if (totalOccupied + guests + 1 > 150) {
        alert(`Only ${150 - totalOccupied} seats left!`);
        return;
    }

    // 3. Save Data
    const newRSVP = {
        name: currentUser.name,
        email: currentUser.email,
        event,
        guests,
        timestamp: new Date().toLocaleString() // Better for display than ISO
    };

    rsvps.push(newRSVP);
    localStorage.setItem("rsvps", JSON.stringify(rsvps));

    alert(`Success! RSVP confirmed for ${event}.`);
    
    // 4. IMPROVEMENT: Redirect or Refresh
    window.location.href = "events.html"; 
});