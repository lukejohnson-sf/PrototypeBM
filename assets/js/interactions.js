// ================================================
// SFCC Business Manager - UI Interactions
// ================================================

/**
 * Tab switching
 */
function initTabs() {
    document.querySelectorAll('.bm-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            const targetId = tab.getAttribute('data-tab');

            // Remove active class from all tabs and content
            document.querySelectorAll('.bm-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.bm-tab-content').forEach(c => c.classList.remove('active'));

            // Add active class to clicked tab and corresponding content
            tab.classList.add('active');
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}

/**
 * Modal management
 */
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    const backdrop = document.querySelector('.bm-modal-backdrop');

    if (modal) {
        modal.classList.add('active');
    }
    if (backdrop) {
        backdrop.classList.add('active');
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    const backdrop = document.querySelector('.bm-modal-backdrop');

    if (modal) {
        modal.classList.remove('active');
    }
    if (backdrop) {
        backdrop.classList.remove('active');
    }
}

/**
 * Dropdown management
 */
function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    if (dropdown) {
        dropdown.classList.toggle('active');
    }
}

/**
 * Close dropdowns when clicking outside
 */
document.addEventListener('click', (e) => {
    if (!e.target.closest('.bm-dropdown')) {
        document.querySelectorAll('.bm-dropdown-menu').forEach(menu => {
            menu.classList.remove('active');
        });
    }
});

/**
 * Table sorting (placeholder for future implementation)
 */
function sortTable(columnIndex, tableId) {
    console.log(`Sorting table ${tableId} by column ${columnIndex}`);
    // Future implementation: actual sorting logic
}

/**
 * Form validation helper
 */
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return false;

    let isValid = true;
    const requiredFields = form.querySelectorAll('[required]');

    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.classList.add('error');
            isValid = false;

            // Show error message if it exists
            const errorMsg = field.parentElement.querySelector('.bm-form-error');
            if (errorMsg) {
                errorMsg.style.display = 'block';
            }
        } else {
            field.classList.remove('error');
            const errorMsg = field.parentElement.querySelector('.bm-form-error');
            if (errorMsg) {
                errorMsg.style.display = 'none';
            }
        }
    });

    return isValid;
}

/**
 * Show/hide loading state
 */
function showLoading(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = 'Loading...';
        element.disabled = true;

        const spinner = document.createElement('div');
        spinner.className = 'bm-spinner';
        element.insertBefore(spinner, element.firstChild);
    }
}

function hideLoading(elementId, originalContent) {
    const element = document.getElementById(elementId);
    if (element) {
        const spinner = element.querySelector('.bm-spinner');
        if (spinner) {
            spinner.remove();
        }
        element.textContent = originalContent;
        element.disabled = false;
    }
}

/**
 * Toast notification (simple alert replacement)
 */
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `bm-alert bm-alert-${type}`;
    toast.textContent = message;
    toast.style.position = 'fixed';
    toast.style.top = '80px';
    toast.style.right = '20px';
    toast.style.zIndex = '9999';
    toast.style.maxWidth = '400px';
    toast.style.animation = 'slideIn 0.3s ease';

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

/**
 * Confirm action dialog
 */
function confirmAction(message, callback) {
    if (confirm(message)) {
        callback();
    }
}

/**
 * Initialize all interactions on page load
 */
document.addEventListener('DOMContentLoaded', () => {
    initTabs();

    // Close modal when clicking backdrop
    const backdrop = document.querySelector('.bm-modal-backdrop');
    if (backdrop) {
        backdrop.addEventListener('click', () => {
            document.querySelectorAll('.bm-modal').forEach(modal => {
                modal.classList.remove('active');
            });
            backdrop.classList.remove('active');
        });
    }

    // Auto-dismiss alerts after 5 seconds
    document.querySelectorAll('.bm-alert[data-auto-dismiss="true"]').forEach(alert => {
        setTimeout(() => {
            alert.style.animation = 'fadeOut 0.3s ease';
            setTimeout(() => alert.remove(), 300);
        }, 5000);
    });
});

/**
 * Simple animation styles
 */
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;
document.head.appendChild(style);
