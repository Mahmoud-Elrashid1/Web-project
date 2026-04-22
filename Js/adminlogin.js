
// adminlogin.js

const adminForm = document.querySelector('.loginform');

adminForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('pass').value;

    // Get admins array from localStorage (populated during Sign-Up)
    const admins = JSON.parse(localStorage.getItem('admins')) || [];

    // Check if email and password match an existing admin account
    const admin = admins.find(a => a.email === email && a.password === password);

    if (admin) {
        alert(`Welcome Admin ${admin.name}!`);
        
        // Save logged-in admin status
        localStorage.setItem('currentAdmin', JSON.stringify(admin)); 
        
        // Redirect to your admin dashboard page
        window.location.href = "admin.html"; 
    } else {
        alert('Invalid admin email or password!');
    }
});