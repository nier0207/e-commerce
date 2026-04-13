// ========================================
// CODEBOOKS E-COMMERCE - CART
// cart.js - Shopping cart functions
// ========================================

// ---------- CART ARRAY ----------
let cartItems = [];

// ---------- LOAD CART FROM STORAGE ----------
function loadCart() {
    cartItems = loadFromLocalStorage('ebookCart', []);
    return cartItems;
}

// ---------- SAVE CART TO STORAGE ----------
function saveCartToStorage() {
    saveToLocalStorage('ebookCart', cartItems);
}

// ---------- GET CART ----------
function getCart() {
    return cartItems;
}

// ---------- GET CART ITEM COUNT ----------
function getCartItemCount() {
    return cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);
}

// ---------- GET CART TOTAL ----------
function getCartTotal() {
    return cartItems.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
}

// ---------- ADD TO CART ----------
function addToCart(book) {
    const existing = cartItems.find(item => item.id === book.id);
    
    if (existing) {
        existing.quantity = (existing.quantity || 1) + 1;
    } else {
        cartItems.push({ 
            ...book, 
            quantity: 1 
        });
    }
    
    saveCartToStorage();
    
    // Update cart display on current page
    if (typeof renderCartItems === 'function') {
        renderCartItems();
    }
    if (typeof updateCartPreview === 'function') {
        updateCartPreview();
    }
    
    showToast(`📘 ${book.title} added to cart`);
}

// ---------- REMOVE FROM CART ----------
function removeFromCart(bookId) {
    cartItems = cartItems.filter(item => item.id !== bookId);
    saveCartToStorage();
    
    if (typeof renderCartItems === 'function') {
        renderCartItems();
    }
    if (typeof updateCartPreview === 'function') {
        updateCartPreview();
    }
    
    showToast('✖ Item removed from cart');
}

// ---------- UPDATE QUANTITY ----------
function updateQuantity(bookId, delta) {
    const item = cartItems.find(i => i.id === bookId);
    
    if (item) {
        const newQuantity = (item.quantity || 1) + delta;
        
        if (newQuantity <= 0) {
            removeFromCart(bookId);
        } else {
            item.quantity = newQuantity;
            saveCartToStorage();
            
            if (typeof renderCartItems === 'function') {
                renderCartItems();
            }
            if (typeof updateCartPreview === 'function') {
                updateCartPreview();
            }
        }
    }
}

// ---------- CLEAR CART ----------
function clearCart() {
    cartItems = [];
    saveCartToStorage();
    
    if (typeof renderCartItems === 'function') {
        renderCartItems();
    }
    if (typeof updateCartPreview === 'function') {
        updateCartPreview();
    }
    
    showToast('🧹 Cart cleared');
}

// ---------- RENDER CART ITEMS (for cart.html) ----------
function renderCartItems() {
    const cartContainer = document.getElementById('cartItemsContainer');
    const totalContainer = document.getElementById('cartTotal');
    
    if (!cartContainer) return;
    
    if (cartItems.length === 0) {
        cartContainer.innerHTML = '<div class="empty-cart">🛒 Your cart is empty. Add some e-books!</div>';
        if (totalContainer) totalContainer.innerHTML = formatCurrency(0);
        return;
    }
    
    let html = '';
    cartItems.forEach(item => {
        const itemTotal = item.price * (item.quantity || 1);
        html += `
            <div class="cart-item">
                <div>
                    <div class="cart-item-title">${item.title}</div>
                    <div class="cart-item-price">${formatCurrency(item.price)}</div>
                </div>
                <div style="display: flex; align-items: center; gap: 8px;">
                    <button class="remove-item" onclick="updateQuantity('${item.id}', -1)" style="background:#ede4ff; width:28px; height:28px; border-radius:50%;">-</button>
                    <span style="font-weight:600;">${item.quantity || 1}</span>
                    <button class="remove-item" onclick="updateQuantity('${item.id}', 1)" style="background:#ede4ff; width:28px; height:28px; border-radius:50%;">+</button>
                    <button class="remove-item" onclick="removeFromCart('${item.id}')"><i class="fas fa-trash-alt"></i></button>
                </div>
            </div>
        `;
    });
    
    cartContainer.innerHTML = html;
    if (totalContainer) totalContainer.innerHTML = formatCurrency(getCartTotal());
}

// ---------- UPDATE CART PREVIEW (for index.html and shop.html) ----------
function updateCartPreview() {
    const previewContainer = document.getElementById('cartPreview');
    if (!previewContainer) return;
    
    const itemCount = getCartItemCount();
    const total = getCartTotal();
    
    if (itemCount === 0) {
        previewContainer.innerHTML = '<div class="empty-cart">🛒 Your cart is empty</div>';
        return;
    }
    
    let itemsHtml = '';
    cartItems.slice(0, 3).forEach(item => {
        itemsHtml += `
            <div class="cart-item">
                <div>
                    <div class="cart-item-title">${item.title}</div>
                    <div class="cart-item-price">${formatCurrency(item.price)}</div>
                </div>
                <div style="display: flex; align-items: center; gap: 4px;">
                    <span style="font-size:0.8rem;">x${item.quantity || 1}</span>
                </div>
            </div>
        `;
    });
    
    if (cartItems.length > 3) {
        itemsHtml += `<div style="text-align:center; padding:0.5rem; color:#7a5fa5;">+${cartItems.length - 3} more items</div>`;
    }
    
    previewContainer.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center;">
            <span class="cart-badge"><i class="fas fa-shopping-cart"></i> Cart (${itemCount})</span>
            <a href="cart.html" class="clear-cart" style="font-size:0.8rem;">View Cart →</a>
        </div>
        ${itemsHtml}
        <div class="cart-total">Total: ${formatCurrency(total)}</div>
        <a href="cart.html" class="checkout-btn" style="display:block; text-align:center; margin-top:0.8rem; text-decoration:none;">
            <i class="fas fa-credit-card"></i> Checkout
        </a>
    `;
}

// Initialize cart on page load
document.addEventListener('DOMContentLoaded', function() {
    loadCart();
    
    if (typeof renderCartItems === 'function') {
        renderCartItems();
    }
    if (typeof updateCartPreview === 'function') {
        updateCartPreview();
    }
});