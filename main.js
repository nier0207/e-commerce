// ========================================
// CODEBOOKS E-COMMERCE - MAIN
// main.js - Global data and initialization
// ========================================

// ---------- E-BOOKS DATA (Programming Languages Only) ----------
const booksData = [
    { id: 'py1', title: 'Python Basics', category: 'python', lesson: 36, price: 28.00, icon: 'fab fa-python' },
    { id: 'py2', title: 'Python Django', category: 'python', lesson: 45, price: 38.00, icon: 'fab fa-python' },
    { id: 'js1', title: 'JavaScript Essentials', category: 'javascript', lesson: 30, price: 32.00, icon: 'fab fa-js' },
    { id: 'js2', title: 'React JS Mastery', category: 'javascript', lesson: 32, price: 36.00, icon: 'fab fa-js' },
    { id: 'jv1', title: 'Java Programming', category: 'java', lesson: 40, price: 34.00, icon: 'fab fa-java' },
    { id: 'jv2', title: 'Spring Boot', category: 'java', lesson: 38, price: 42.00, icon: 'fab fa-java' },
    { id: 'cpp1', title: 'C++ Mastery', category: 'cpp', lesson: 38, price: 30.00, icon: 'fas fa-code' },
    { id: 'cs1', title: 'C# Essentials', category: 'csharp', lesson: 35, price: 29.00, icon: 'fas fa-hashtag' },
    { id: 'php1', title: 'PHP Web Dev', category: 'php', lesson: 28, price: 24.00, icon: 'fab fa-php' }
];

// ---------- CURRENCY SETTING (PHP only for now) ----------
let currentCurrency = 'PHP';

// ---------- INITIALIZE PAGE ----------
document.addEventListener('DOMContentLoaded', function() {
    // Load settings
    loadSettings();
    
    // Update all prices to show PHP
    updateAllPrices();
    
    // Highlight active nav based on current page
    highlightActiveNav();
});

// ---------- HIGHLIGHT ACTIVE NAVIGATION ----------
function highlightActiveNav() {
    const currentPage = window.location.pathname.split('/').pop();
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(nav => {
        nav.classList.remove('active');
        const href = nav.getAttribute('href');
        if (href && href.includes(currentPage)) {
            nav.classList.add('active');
        } else if (currentPage === '' || currentPage === 'index.html') {
            if (href && href.includes('index.html')) {
                nav.classList.add('active');
            }
        }
    });
}

// ---------- LOAD SETTINGS FROM LOCALSTORAGE ----------
function loadSettings() {
    // Load Dark Mode
    const darkMode = loadFromLocalStorage('darkMode', false);
    if (darkMode) {
        document.body.classList.add('dark-mode');
        const darkToggle = document.getElementById('darkModeToggle');
        if (darkToggle) {
            darkToggle.classList.add('active');
        }
    }
    
    // Load Font Size
    const fontSize = loadFromLocalStorage('fontSize', 'medium');
    document.body.classList.add('font-' + fontSize);
    
    // Update active font option
    const fontOptions = document.querySelectorAll('.font-option');
    fontOptions.forEach(opt => {
        if (opt.dataset.size === fontSize) {
            opt.classList.add('active');
        }
    });
}