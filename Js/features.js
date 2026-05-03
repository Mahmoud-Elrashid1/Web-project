/* ============================================================
   features.js — Dark Mode + Language Switch + Card Animations
                 + Smooth Page Transitions
   Add this script to every HTML page AFTER campusevent.js
   ============================================================ */

/* ============================================================
   1. DARK / LIGHT MODE
   - Saves preference in localStorage so it persists across pages
   - Toggles 'light-mode' class on <body>
   ============================================================ */
const themeToggle = document.getElementById('themeToggle');

function applyTheme(theme) {
  if (theme === 'light') {
    document.body.classList.add('light-mode');
    if (themeToggle) themeToggle.textContent = '☀️';
  } else {
    document.body.classList.remove('light-mode');
    if (themeToggle) themeToggle.textContent = '🌙';
  }
}

// Apply on load immediately (no flash)
applyTheme(localStorage.getItem('theme') || 'dark');

if (themeToggle) {
  themeToggle.addEventListener('click', function () {
    const next = localStorage.getItem('theme') === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', next);
    applyTheme(next);
  });
}

/* ============================================================
   2. ARABIC / ENGLISH LANGUAGE SWITCH
   - Saves preference in localStorage
   - Swaps text of elements with data-i18n attribute
   - Sets dir="rtl" on body for Arabic layout
   - Loads Cairo font for Arabic
   ============================================================ */
const langToggle = document.getElementById('langToggle');

const translations = {
  en: {
    'nav.home':        'Home',
    'nav.events':      'Events',
    'nav.create':      'Create Event',
    'nav.admin':       'Admin',
    'nav.login':       'Login',
    'nav.signup':      'Sign Up',
    'hero.title':      'Discover Campus Events That Matter',
    'hero.subtitle':   'Seminars, workshops, and meetups — all in one place.',
    'hero.host':       'Want to host an event?',
    'hero.btnPost':    'Post Your Event',
    'hero.btnExplore': 'Explore Events',
    'features.title':  'Why Use Campus Event Hub?',
    'events.title':    'Upcoming Events',
    'events.all':      'All',
    'events.seminars': 'Seminars',
    'events.workshops':'Workshops',
    'events.meetups':  'Meetups',
    'cat.browse':      'Browse by Category',
    'cat.all':         'All',
    'login.title':     'Login',
    'login.btn':       'Login',
    'signup.title':    'Create an Account',
    'signup.btn':      'Create Account',
    'create.title':    'Create New Event',
    'create.btn':      'Submit Event For Review',
    'rsvp.title':      'Event RSVP',
    'rsvp.btn':        'Confirm RSVP',
    'admin.title':     'Admin Dashboard',
    'admin.logout':    'Logout',
    'footer.account':  'Your Account',
    'footer.about':    'About Us',
    'footer.contact':  'Contact Us',
    'footer.copy':     '© 2026 Campus Event Hub',
  },
  ar: {
    'nav.home':        'الرئيسية',
    'nav.events':      'الفعاليات',
    'nav.create':      'إنشاء فعالية',
    'nav.admin':       'المشرف',
    'nav.login':       'تسجيل الدخول',
    'nav.signup':      'إنشاء حساب',
    'hero.title':      'اكتشف فعاليات الحرم الجامعي المهمة',
    'hero.subtitle':   'ندوات وورش عمل ولقاءات — كل شيء في مكان واحد.',
    'hero.host':       'هل تريد استضافة فعالية؟',
    'hero.btnPost':    'انشر فعاليتك',
    'hero.btnExplore': 'استكشف الفعاليات',
    'features.title':  'لماذا تستخدم Campus Event Hub؟',
    'events.title':    'الفعاليات القادمة',
    'events.all':      'الكل',
    'events.seminars': 'ندوات',
    'events.workshops':'ورش عمل',
    'events.meetups':  'لقاءات',
    'cat.browse':      'تصفح حسب الفئة',
    'cat.all':         'الكل',
    'login.title':     'تسجيل الدخول',
    'login.btn':       'دخول',
    'signup.title':    'إنشاء حساب جديد',
    'signup.btn':      'إنشاء الحساب',
    'create.title':    'إنشاء فعالية جديدة',
    'create.btn':      'إرسال الفعالية للمراجعة',
    'rsvp.title':      'تسجيل الحضور',
    'rsvp.btn':        'تأكيد الحضور',
    'admin.title':     'لوحة تحكم المشرف',
    'admin.logout':    'تسجيل الخروج',
    'footer.account':  'حسابك',
    'footer.about':    'من نحن',
    'footer.contact':  'تواصل معنا',
    'footer.copy':     '© 2026 Campus Event Hub',
  }
};

function applyLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  // Set RTL for Arabic
  document.body.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  document.documentElement.setAttribute('lang', lang);

  // Swap all labelled elements
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.tagName === 'INPUT' || el.tagName === 'TEXTAREA'
        ? (el.placeholder = dict[key])
        : (el.textContent  = dict[key]);
    }
  });

  // Update button label
  if (langToggle) {
    langToggle.textContent = lang === 'en' ? 'ع' : 'EN';
  }
}

// Apply on load
applyLanguage(localStorage.getItem('lang') || 'en');

if (langToggle) {
  langToggle.addEventListener('click', function () {
    const next = localStorage.getItem('lang') === 'ar' ? 'en' : 'ar';
    localStorage.setItem('lang', next);
    applyLanguage(next);
  });
}

/* ============================================================
   3. EVENT CARD 3D TILT ANIMATION
   - On mousemove: rotates card toward cursor (max 10 degrees)
   - On mouseleave: resets smoothly
   ============================================================ */
function init3DTilt() {
  document.querySelectorAll('.eventcard').forEach(function (card) {
    card.addEventListener('mousemove', function (e) {
      const rect    = card.getBoundingClientRect();
      const centerX = rect.left + rect.width  / 2;
      const centerY = rect.top  + rect.height / 2;
      const tiltX   = -((e.clientY - centerY) / (rect.height / 2) * 8).toFixed(2);
      const tiltY   =  ((e.clientX - centerX) / (rect.width  / 2) * 8).toFixed(2);
      card.style.transform = `perspective(600px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-6px)`;
    });

    card.addEventListener('mouseleave', function () {
      card.style.transform = 'perspective(600px) rotateX(0) rotateY(0) translateY(0)';
    });
  });
}

// Run now and whenever new cards are added to the DOM
init3DTilt();
const cardContainers = document.querySelectorAll('.events-grid, .events-container');
cardContainers.forEach(function (container) {
  new MutationObserver(init3DTilt).observe(container, { childList: true });
});

/* ============================================================
   4. SMOOTH PAGE TRANSITIONS
   - Intercepts all internal link clicks
   - Fades the page out before navigating
   - CSS handles the fade-in on arrival (main animation)
   ============================================================ */
document.addEventListener('click', function (e) {
  const link = e.target.closest('a');
  if (!link) return;

  const href = link.getAttribute('href');
  if (!href) return;

  const isExternal = link.hostname && link.hostname !== window.location.hostname;
  const isHash     = href.startsWith('#');
  const isNewTab   = link.target === '_blank';

  if (isExternal || isHash || isNewTab || e.ctrlKey || e.metaKey) return;

  e.preventDefault();
  document.body.classList.add('page-exit');
  setTimeout(function () {
    window.location.href = href;
  }, 280);
});
