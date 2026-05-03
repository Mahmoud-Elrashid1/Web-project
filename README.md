# 🎓 Campus Event Hub

> A full web application for discovering, creating, and managing campus events — built with HTML, CSS, and JavaScript and nodejs.

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 📌 About The Project

**Campus Event Hub** is a platform designed to help students discover and participate in events happening across campus. It allows clubs, departments, and organizations to create and promote events while giving students an easy way to find activities that match their interests.

This project was built as part of a Web Development course, with a focus on clean code, professional UI, real-world features, and a complete user flow from registration to event approval.

---

## ✨ Features

### 👤 User Side
- **Sign Up / Login** — Student registration with validation and duplicate email detection
- **Browse Events** — View all approved events in a responsive grid
- **Search & Filter** — Search by keyword, filter by category (Seminars, Workshops, Meetups)
- **RSVP System** — Register attendance with seat capacity management (max 150 per event)
- **Create Event** — Submit events for admin review

### 🔐 Admin Side
- **Protected Dashboard** — Auth guard using `sessionStorage` (URL-direct access blocked)
- **Event Approval** — Approve or reject submitted events
- **Stats Counter** — Live count of pending / approved / rejected events
- **Approved events** — Automatically appear on the public events page

### 🎨 UI & UX
- **Dark / Light Mode** — Toggle with preference saved across sessions
- **Arabic / English Switch** — Full RTL layout support with Cairo font
- **Card Animations** — 3D tilt on hover, staggered entrance, shine sweep effect
- **Smooth Page Transitions** — Fade in/out between every page
- **Toast Notifications** — Replaces all `alert()` calls with elegant toasts
- **Responsive Design** — Mobile-friendly with hamburger menu
- **Back to Top** button
- **Active nav highlight** — Shows current page in navigation

---

## 🗂️ Project Structure

```
Web-project/
│
├── HTML/
│   ├── campusevent.html     # Homepage
│   ├── events.html          # All events + search & filter
│   ├── createEvent.html     # Submit a new event
│   ├── RSVP.html            # Event registration
│   ├── login.html           # User login
│   ├── sign-up.html         # User registration
│   ├── admin.html           # Admin dashboard (protected)
│   ├── adminlogin.html      # Admin login
│   ├── about.html           # About page
│   ├── blog.html            # Blog page
│   └── support.html         # FAQ + Contact form
│
├── Css/
│   ├── campusevent.css      # Global styles + CSS variables + dark mode
│   ├── homepage.css         # Hero, features, categories
│   ├── events.css           # Events grid + filters + search
│   ├── login.css            # Login page
│   ├── sign-up.css          # Sign up page
│   ├── admin.css            # Admin dashboard
│   ├── adminlogin.css       # Admin login
│   ├── createevents.css     # Create event form
│   ├── RSVP.css             # RSVP form
│   ├── about.css            # About page
│   ├── blog.css             # Blog page
│   └── support.css          # Support page
│
├── Js/
│   ├── campusevent.js       # Global JS (nav, scroll, toast, back-to-top)
│   ├── features.js          # Dark mode, language switch, animations, transitions
│   ├── events.js            # Event display, filter, search, URL params
│   ├── admin.js             # Admin dashboard logic
│   ├── adminlogin.js        # Admin auth with sessionStorage
│   ├── login.js             # User login
│   ├── sign-up.js           # User registration
│   ├── createevent.js       # Event submission form
│   ├── RSVP.js              # RSVP form + seat management
│   └── support.js           # Contact form
│
└── images/
    └── ...                  # Event images
```

---

## 🔄 How The App Flow Works

```
User signs up → logs in → creates event
                                ↓
                     Event saved to localStorage
                     as "pendingEvents"
                                ↓
                     Admin logs in → reviews event
                                ↓
                  Approve ──────────────→ Event moves to
                                          "approvedEvents"
                                ↓
                     Event appears on Events page
                                ↓
                     Users can RSVP to attend
```

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Semantic page structure |
| CSS3 | Styling, animations, CSS variables, RTL |
| Vanilla JavaScript | All interactivity and data flow |
| localStorage | Persistent data (events, users, RSVPs) |
| sessionStorage | Admin auth session |
| IntersectionObserver API | Scroll-triggered animations |
| Google Fonts (Poppins + Cairo) | Typography (EN + AR) |

---

## 🚀 Getting Started

No installation needed — this is a full project.

1. Clone the repository:
```bash
git clone https://github.com/Mahmoud-Elrashid1/Web-project.git
```

2. Open `HTML/campusevent.html` in your browser.

3. That's it! ✅

---

## 🔑 Admin Access

To access the admin dashboard use these credentials on the Admin Login page:

| Field | Value |
|---|---|
| Email | `admin@campus.com` |
| Password | `Admin@123` |

> ⚠️ These are hardcoded credentials for demo purposes only. In a real application, authentication would be handled by a secure backend.

---

## 📱 Responsive

The app is fully responsive and works on:
- 🖥️ Desktop
- 💻 Laptop
- 📱 Mobile (with hamburger menu)

---

## 🌙 Theme & Language

| Feature | How to use |
|---|---|
| Dark / Light mode | Click the 🌙 button (bottom-left) |
| Arabic / English | Click the `EN` / `ع` button (above theme button) |

Both preferences are saved and persist across all pages.

---

## 🔮 Future Improvements

- [ ] Backend integration (Node.js / Firebase)
- [ ] Real user authentication with JWT
- [ ] Email notifications on event approval
- [ ] Event image upload (not just URL)
- [ ] User profile page
- [ ] Event comments and ratings
- [ ] Calendar view for events

---

## 👨‍💻 Author

**Mahmoud Elrashid**
- GitHub: [@Mahmoud-Elrashid1](https://github.com/Mahmoud-Elrashid1)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
