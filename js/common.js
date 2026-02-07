
/**
 * Physics Notebook - Common Utilities
 * Handles Theme persistence and Initialization
 */

const ThemeManager = {
    init() {
        this.setupTheme();
        this.bindEvents();
    },

    setupTheme() {
        // Check localStorage first, fallback to 'light'
        const savedTheme = localStorage.getItem('physics-notebook-theme') || 'light';
        document.body.setAttribute('data-theme', savedTheme);
    },

    toggle() {
        const current = document.body.getAttribute('data-theme');
        const next = current === 'light' ? 'dark' : 'light';

        document.body.setAttribute('data-theme', next);
        localStorage.setItem('physics-notebook-theme', next);

        // Dispatch event for canvases to redraw colors
        window.dispatchEvent(new CustomEvent('theme-changed', { detail: next }));
    },

    bindEvents() {
        const btn = document.getElementById('themeBtn');
        if (btn) {
            btn.addEventListener('click', () => this.toggle());
        }

        // Also listen for logo click in top left if it sometimes acts as toggle? 
        // No, logo is navigation.
    }
};

// Immediate execution to prevent flash IF this script is loaded in head deferred
// But we actually want to run `setupTheme` ASAP.
// Optimally, a small inline script in head handles the initial set, but this works traversing the DOM once body exists
document.addEventListener('DOMContentLoaded', () => {
    ThemeManager.init();
    // Initialize Lucide icons if library is present
    if (window.lucide) {
        window.lucide.createIcons();
    }
});

// Expose for usage
window.ThemeManager = ThemeManager;
