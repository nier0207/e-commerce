// ========================================
// CODEBOOKS E-COMMERCE - SETTINGS
// settings.js - Dark mode, font size, etc.
// ========================================

// ---------- DARK MODE TOGGLE ----------
function toggleDarkMode() {
    const toggle = document.getElementById('darkModeToggle');
    const isDark = document.body.classList.toggle('dark-mode');
    
    if (toggle) {
        if (isDark) {
            toggle.classList.add('active');
        } else {
            toggle.classList.remove('active');
        }
    }
    
    saveToLocalStorage('darkMode', isDark);
}

// ---------- SET FONT SIZE ----------
function setFontSize(size) {
    // Remove existing font classes
    document.body.classList.remove('font-small', 'font-medium', 'font-large');
    document.body.classList.add('font-' + size);
    
    // Update active state on buttons
    const fontOptions = document.querySelectorAll('.font-option');
    fontOptions.forEach(opt => {
        if (opt.dataset.size === size) {
            opt.classList.add('active');
        } else {
            opt.classList.remove('active');
        }
    });
    
    saveToLocalStorage('fontSize', size);
}

// ---------- LOAD DARK MODE SETTING ----------
function loadDarkModeSetting() {
    const isDark = loadFromLocalStorage('darkMode', false);
    if (isDark) {
        document.body.classList.add('dark-mode');
        const toggle = document.getElementById('darkModeToggle');
        if (toggle) toggle.classList.add('active');
    }
}

// ---------- LOAD FONT SIZE SETTING ----------
function loadFontSizeSetting() {
    const fontSize = loadFromLocalStorage('fontSize', 'medium');
    document.body.classList.add('font-' + fontSize);
    
    // Update active font option buttons
    const fontOptions = document.querySelectorAll('.font-option');
    fontOptions.forEach(opt => {
        if (opt.dataset.size === fontSize) {
            opt.classList.add('active');
        }
    });
}

// ---------- TOGGLE ORDER HISTORY (COLLAPSIBLE) ----------
let isOrderHistoryOpen = false;

function toggleOrderHistory() {
    const container = document.getElementById('orderHistoryContainer');
    const icon = document.getElementById('toggleIcon');
    
    if (!container) return;
    
    isOrderHistoryOpen = !isOrderHistoryOpen;
    
    if (isOrderHistoryOpen) {
        container.style.display = 'block';
        if (icon) {
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');
        }
        // Render orders when opened
        renderOrderHistory();
    } else {
        container.style.display = 'none';
        if (icon) {
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
        }
    }
}

// ---------- RENDER ORDER HISTORY (for settings.html) ----------
function renderOrderHistory() {
    const historyContainer = document.getElementById('orderHistoryList');
    if (!historyContainer) return;
    
    loadOrders();
    
    if (orders.length === 0) {
        historyContainer.innerHTML = '<div style="text-align:center; padding:1rem; color:#a28fc0;">No orders yet. Start shopping!</div>';
        return;
    }
    
    let html = '';
    orders.forEach(order => {
        const statusClass = order.status === 'Pending' ? 'status-pending' : 'status-completed';
        html += `
            <div class="order-item">
                <div class="order-item-header">
                    <span class="order-date">${order.date}</span>
                    <span class="order-status ${statusClass}">${order.status}</span>
                </div>
                <div class="order-details">
                    <div><strong>${escapeHtml(order.fullName)}</strong></div>
                    <div>${escapeHtml(order.address)}</div>
                    <div>Payment: ${order.paymentMethod}</div>
                    <div style="margin-top: 0.4rem;">
                        ${order.items.map(item => `${item.title} x${item.quantity || 1}`).join(', ')}
                    </div>
                    <div style="margin-top: 0.4rem; font-weight:700;">Total: ${formatCurrency(order.total)}</div>
                </div>
            </div>
        `;
    });
    
    historyContainer.innerHTML = html;
}

// ---------- HELPER: ESCAPE HTML TO PREVENT XSS ----------
function escapeHtml(str) {
    if (!str) return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

// ---------- SETUP SETTINGS PAGE ----------
function setupSettingsPage() {
    // Dark Mode Toggle
    const darkToggle = document.getElementById('darkModeToggle');
    if (darkToggle) {
        darkToggle.addEventListener('click', toggleDarkMode);
    }
    
    // Font Size Options
    const fontOptions = document.querySelectorAll('.font-option');
    fontOptions.forEach(opt => {
        opt.addEventListener('click', () => {
            setFontSize(opt.dataset.size);
        });
    });
    
    // Order History Toggle
    const toggleBtn = document.getElementById('orderHistoryToggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', toggleOrderHistory);
    }
    
    // Load saved settings
    loadDarkModeSetting();
    loadFontSizeSetting();
    
    // Note: Order history is NOT auto-rendered, only when toggled
}

// Initialize settings page
document.addEventListener('DOMContentLoaded', function() {
    setupSettingsPage();
});