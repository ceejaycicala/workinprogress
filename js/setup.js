const yearSpan = document.getElementById('year');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

// Disable Dark Reader
const lock = document.createElement('meta');
lock.name = 'darkreader-lock';
document.head.appendChild(lock);