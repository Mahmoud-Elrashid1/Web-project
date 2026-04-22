// signup.js

const signupForm = document.querySelector('form');

signupForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const role = document.querySelector('input[name="role"]:checked')?.value;

    // Validate required fields
    if (!name || !email || !password || !confirmPassword) {
        alert('Please fill in all fields.');
        return;
    }

    if (!role) {
        alert('Please select a role.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    const userData = { name, email, password };

    if (role === 'student') {
        let students = JSON.parse(localStorage.getItem('students')) || [];

        // Check if email already exists
        let emailExists = false;
        for (let i = 0; i < students.length; i++) {
            if (students[i].email === email) {
                emailExists = true;
            }
        }

        if (emailExists) {
            alert('This email is already registered as a student.');
            return;
        }

        students.push(userData);
        localStorage.setItem('students', JSON.stringify(students));
        alert('Student account created successfully!');

    } else if (role === 'admin') {
        let admins = JSON.parse(localStorage.getItem('admins')) || [];

        // Check if email already exists
        let emailExists = false;
        for (let i = 0; i < admins.length; i++) {
            if (admins[i].email === email) {
                emailExists = true;
            }
        }

        if (emailExists) {
            alert('This email is already registered as an admin.');
            return;
        }

        admins.push(userData);
        localStorage.setItem('admins', JSON.stringify(admins));
        alert('Admin account created successfully!');
    }

    signupForm.reset();
});