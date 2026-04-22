// ================================================
// Shared Navigation Components
// ================================================

function toggleSection(element) {
    const section = element.parentElement;
    section.classList.toggle('collapsed');
}

// Get navigation HTML
function getIconSidebar(activePage = '') {
    return `
    <aside class="dev-icon-sidebar">
        <a href="../index.html" class="dev-icon-sidebar-item ${activePage === 'home' ? 'active' : ''}" title="Home">
            <div style="text-align: center;">
                <div style="font-size: 20px;">🏠</div>
                <div class="dev-icon-sidebar-label">Home</div>
            </div>
        </a>
        <div class="dev-icon-sidebar-item ${activePage === 'activity' ? 'active' : ''}" title="Activity">
            <div style="text-align: center;">
                <div style="font-size: 20px;">🔔</div>
                <div class="dev-icon-sidebar-label">Activity</div>
            </div>
        </div>
        <div class="dev-icon-sidebar-item ${activePage === 'jobs' ? 'active' : ''}" title="Jobs">
            <div style="text-align: center;">
                <div style="font-size: 20px;">⚡</div>
                <div class="dev-icon-sidebar-label">Jobs</div>
            </div>
        </div>
        <div class="dev-icon-sidebar-item ${activePage === 'toolkit' ? 'active' : ''}" title="Toolkit">
            <div style="text-align: center;">
                <div style="font-size: 20px;">🔧</div>
                <div class="dev-icon-sidebar-label">Toolkit</div>
            </div>
        </div>
        <div class="dev-icon-sidebar-item ${activePage === 'more' ? 'active' : ''}" title="More">
            <div style="text-align: center;">
                <div style="font-size: 20px;">⋯</div>
                <div class="dev-icon-sidebar-label">More</div>
            </div>
        </div>
    </aside>
    `;
}

function getSecondarySidebar(activeItem = '') {
    return `
    <aside class="dev-secondary-sidebar">
        <a href="dashboard.html" class="dev-dashboard-button">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                <rect x="1" y="1" width="5" height="5" rx="1"/>
                <rect x="8" y="1" width="5" height="5" rx="1"/>
                <rect x="1" y="8" width="5" height="5" rx="1"/>
                <rect x="8" y="8" width="5" height="5" rx="1"/>
            </svg>
            My Dashboard
        </a>

        <div class="dev-nav-section">
            <div class="dev-nav-section-header" onclick="toggleSection(this)">
                <span>Main</span>
                <span class="dev-nav-section-arrow">▼</span>
            </div>
            <div class="dev-nav-section-content">
                <a href="dashboard.html" class="dev-nav-item ${activeItem === 'dashboard' ? 'active' : ''}">Dashboard</a>
                <a href="orders.html" class="dev-nav-item ${activeItem === 'orders' ? 'active' : ''}">Orders</a>
                <a href="products.html" class="dev-nav-item ${activeItem === 'products' ? 'active' : ''}">Products</a>
                <a href="customers.html" class="dev-nav-item ${activeItem === 'customers' ? 'active' : ''}">Customers</a>
            </div>
        </div>

        <div class="dev-nav-section collapsed">
            <div class="dev-nav-section-header" onclick="toggleSection(this)">
                <span>Analytics</span>
                <span class="dev-nav-section-arrow">▼</span>
            </div>
            <div class="dev-nav-section-content">
                <a href="#" class="dev-nav-item">Reports</a>
                <a href="#" class="dev-nav-item">Insights</a>
            </div>
        </div>

        <div class="dev-nav-section collapsed">
            <div class="dev-nav-section-header" onclick="toggleSection(this)">
                <span>Settings</span>
                <span class="dev-nav-section-arrow">▼</span>
            </div>
            <div class="dev-nav-section-content">
                <a href="#" class="dev-nav-item">Site Preferences</a>
                <a href="#" class="dev-nav-item">User Management</a>
            </div>
        </div>

        <a href="#" class="dev-manage-nav">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                <path d="M13,6H8V1c0-0.6-0.4-1-1-1S6,0.4,6,1v5H1C0.4,6,0,6.4,0,7s0.4,1,1,1h5v5c0,0.6,0.4,1,1,1s1-0.4,1-1V8h5c0.6,0,1-0.4,1-1S13.6,6,13,6z"/>
            </svg>
            Manage Navigation
        </a>
    </aside>
    `;
}

function getHeader() {
    return `
    <header class="dev-header">
        <a href="../index.html" class="dev-header-logo">
            <span class="dev-cloud-icon">☁️</span>
            <span>Developer App</span>
        </a>
        <div class="dev-header-search">
            <input type="text" class="dev-search-input" placeholder="Search...">
        </div>
        <div class="dev-header-actions">
            <button class="dev-icon-button" title="Settings">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
                    <path d="M9,6.5C7.6,6.5,6.5,7.6,6.5,9s1.1,2.5,2.5,2.5s2.5-1.1,2.5-2.5S10.4,6.5,9,6.5z M17.4,10.6l-1.5-0.3c-0.1-0.4-0.3-0.8-0.5-1.2l0.9-1.2c0.3-0.4,0.2-1-0.1-1.3l-1.3-1.3c-0.3-0.3-0.9-0.4-1.3-0.1l-1.2,0.9c-0.4-0.2-0.8-0.4-1.2-0.5L10.9,4c-0.1-0.5-0.5-0.8-1-0.8H8.1c-0.5,0-0.9,0.3-1,0.8L6.8,5.6C6.4,5.7,6,5.9,5.6,6.1L4.4,5.2c-0.4-0.3-1-0.2-1.3,0.1L1.8,6.6C1.5,6.9,1.4,7.5,1.7,7.9l0.9,1.2C2.4,9.5,2.2,9.9,2.1,10.3l-1.5,0.3c-0.5,0.1-0.8,0.5-0.8,1v1.8c0,0.5,0.3,0.9,0.8,1l1.5,0.3c0.1,0.4,0.3,0.8,0.5,1.2l-0.9,1.2c-0.3,0.4-0.2,1,0.1,1.3l1.3,1.3c0.3,0.3,0.9,0.4,1.3,0.1l1.2-0.9c0.4,0.2,0.8,0.4,1.2,0.5l0.3,1.5c0.1,0.5,0.5,0.8,1,0.8h1.8c0.5,0,0.9-0.3,1-0.8l0.3-1.5c0.4-0.1,0.8-0.3,1.2-0.5l1.2,0.9c0.4,0.3,1,0.2,1.3-0.1l1.3-1.3c0.3-0.3,0.4-0.9,0.1-1.3l-0.9-1.2c0.2-0.4,0.4-0.8,0.5-1.2l1.5-0.3c0.5-0.1,0.8-0.5,0.8-1v-1.8C18.2,11.1,17.9,10.7,17.4,10.6z"/>
                </svg>
            </button>
            <button class="dev-icon-button" title="Profile">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
                    <circle cx="9" cy="5.5" r="3.5"/>
                    <path d="M16,18H2c-0.6,0-1-0.4-1-1c0-3.3,2.7-6,6-6h2c3.3,0,6,2.7,6,6C17,17.6,16.6,18,16,18z"/>
                </svg>
            </button>
        </div>
    </header>
    `;
}

// Initialize navigation on page load
document.addEventListener('DOMContentLoaded', () => {
    // This file provides functions for building navigation
    // Each page will call these functions as needed
});
