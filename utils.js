// ========================================
// CODEBOOKS E-COMMERCE - UTILITIES
// utils.js - Helper functions
// ========================================

// ---------- SHOW TOAST NOTIFICATION ----------
function showToast(message, isError = false) {
    // Get or create toast element
    let toast = document.getElementById('globalToast');
    
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'globalToast';
        toast.className = 'notif-toast';
        document.body.appendChild(toast);
    }
    
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

// ---------- LOCALSTORAGE HELPERS ----------
function saveToLocalStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
        return true;
    } catch (e) {
        console.error('Error saving to localStorage:', e);
        return false;
    }
}

function loadFromLocalStorage(key, defaultValue = null) {
    try {
        const saved = localStorage.getItem(key);
        if (saved) {
            return JSON.parse(saved);
        }
        return defaultValue;
    } catch (e) {
        console.error('Error loading from localStorage:', e);
        return defaultValue;
    }
}

// ---------- FORMAT CURRENCY (PHP) ----------
function formatCurrency(amount) {
    return '₱' + amount.toFixed(2);
}

// ---------- GET CURRENT DATE STRING ----------
function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    
    return `${year}-${month}-${day} ${hours}:${minutes}`;
}

// ---------- GENERATE UNIQUE ID ----------
function generateId() {
    return Date.now() + '-' + Math.random().toString(36).substr(2, 8);
}

// ---------- UPDATE ALL PRICES ON PAGE (for currency) ----------
function updateAllPrices() {
    // This function will be called when currency changes
    // For now, we just re-render affected components
    const event = new Event('currencyChanged');
    document.dispatchEvent(event);
}