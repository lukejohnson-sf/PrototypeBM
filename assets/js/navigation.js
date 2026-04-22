// ================================================
// SFCC Business Manager - Navigation Utilities
// ================================================

/**
 * Navigate to a screen
 * @param {string} screenPath - Path to the screen HTML file
 */
function navigateTo(screenPath) {
    window.location.href = screenPath;
}

/**
 * Highlight the current page in navigation
 */
function highlightCurrentPage() {
    const currentPath = window.location.pathname;
    const currentFile = currentPath.split('/').pop();

    document.querySelectorAll('.bm-nav-link, .bm-sidebar-link').forEach(link => {
        const linkPath = link.getAttribute('href');
        const linkFile = linkPath ? linkPath.split('/').pop() : '';

        if (linkFile === currentFile) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

/**
 * Toggle mobile sidebar
 */
function toggleSidebar() {
    const sidebar = document.querySelector('.bm-sidebar');
    if (sidebar) {
        sidebar.classList.toggle('is-open');
    }
}

/**
 * Initialize navigation on page load
 */
document.addEventListener('DOMContentLoaded', () => {
    highlightCurrentPage();

    // Add mobile menu toggle button if needed
    const header = document.querySelector('.bm-header');
    if (header && window.innerWidth <= 1024) {
        const menuButton = document.createElement('button');
        menuButton.className = 'bm-button bm-button-secondary bm-button-sm';
        menuButton.textContent = 'Menu';
        menuButton.onclick = toggleSidebar;
        header.insertBefore(menuButton, header.firstChild);
    }
});

/**
 * Go back to previous page
 */
function goBack() {
    window.history.back();
}

/**
 * Refresh current page
 */
function refreshPage() {
    window.location.reload();
}
