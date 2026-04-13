// ========================================
// CODEBOOKS E-COMMERCE - CHECKOUT
// checkout.js - Checkout and order history
// ========================================

// ---------- ORDERS ARRAY ----------
let orders = [];

// ---------- LOAD ORDERS FROM STORAGE ----------
function loadOrders() {
    orders = loadFromLocalStorage('ebookOrders', []);
    return orders;
}

// ---------- SAVE ORDERS TO STORAGE ----------
function saveOrdersToStorage() {
    saveToLocalStorage('ebookOrders', orders);
}

// ---------- GET ALL ORDERS ----------
function getOrders() {
    return orders;
}

// ---------- SAVE NEW ORDER ----------
function saveOrder(orderData) {
    const newOrder = {
        id: generateId(),
        date: getCurrentDate(),
        fullName: orderData.fullName,
        address: orderData.address,
        paymentMethod: orderData.paymentMethod,
        items: [...orderData.items],
        total: orderData.total,
        status: 'Pending'
    };
    
    orders.unshift(newOrder); // Add to beginning of array
    saveOrdersToStorage();
    
    // Clear cart after successful order
    cartItems = [];
    saveCartToStorage();
    
    return newOrder;
}

// ---------- UPDATE ORDER STATUS ----------
function updateOrderStatus(orderId, newStatus) {
    const order = orders.find(o => o.id === orderId);
    if (order) {
        order.status = newStatus;
        saveOrdersToStorage();
        
        if (typeof renderOrderHistory === 'function') {
            renderOrderHistory();
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
                    <div><strong>${order.fullName}</strong></div>
                    <div>${order.address}</div>
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

// ---------- OPEN CHECKOUT MODAL ----------
function openCheckoutModal() {
    if (cartItems.length === 0) {
        showToast('🛒 Your cart is empty! Add items first.');
        return;
    }
    
    const modal = document.getElementById('checkoutModal');
    if (modal) {
        modal.classList.add('active');
    }
}

// ---------- CLOSE CHECKOUT MODAL ----------
function closeCheckoutModal() {
    const modal = document.getElementById('checkoutModal');
    if (modal) {
        modal.classList.remove('active');
        // Clear form
        const fullNameInput = document.getElementById('fullName');
        const addressInput = document.getElementById('address');
        if (fullNameInput) fullNameInput.value = '';
        if (addressInput) addressInput.value = '';
    }
}

// ---------- CONFIRM CHECKOUT ----------
function confirmCheckout() {
    const fullName = document.getElementById('fullName')?.value.trim();
    const address = document.getElementById('address')?.value.trim();
    const paymentMethod = document.getElementById('paymentMethod')?.value;
    
    if (!fullName) {
        showToast('❌ Please enter your full name');
        return;
    }
    
    if (!address) {
        showToast('❌ Please enter your address');
        return;
    }
    
    const total = getCartTotal();
    const items = [...cartItems];
    
    // Save order
    const newOrder = saveOrder({
        fullName: fullName,
        address: address,
        paymentMethod: paymentMethod,
        items: items,
        total: total
    });
    
    // Show success message
    showToast(`✅ Order placed! Thank you ${fullName}!`);
    
    // Close modal
    closeCheckoutModal();
    
    // Redirect to settings page to see order history
    setTimeout(() => {
        window.location.href = 'settings.html';
    }, 1500);
}

// Initialize checkout on page load
document.addEventListener('DOMContentLoaded', function() {
    loadOrders();
    
    // Setup checkout button if on cart page
    const checkoutBtn = document.getElementById('checkoutModalBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', openCheckoutModal);
    }
    
    // Setup confirm button
    const confirmBtn = document.getElementById('confirmCheckoutBtn');
    if (confirmBtn) {
        confirmBtn.addEventListener('click', confirmCheckout);
    }
    
    // Setup cancel button
    const cancelBtn = document.getElementById('cancelCheckoutBtn');
    if (cancelBtn) {
        cancelBtn.addEventListener('click', closeCheckoutModal);
    }
    
    // Render order history if on settings page
    if (document.getElementById('orderHistoryList')) {
        renderOrderHistory();
    }
});