// Funktion zum Umschalten der aktiven Sektion
function showSection(sectionId) {
    // Verstecken aller Sektionen
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Anzeigen der gewählten Sektion
    document.getElementById(sectionId).classList.add('active');
}

// Sidebar und Menü-Icon
const sidebar = document.getElementById('sidebar');
const menuIcon = document.getElementById('menuIcon');

// Toggle Menü-Icon
menuIcon.addEventListener('click', () => {
    if (sidebar.classList.contains('closed')) {
        sidebar.classList.remove('closed');
        sidebar.style.left = '0'; // Menü anzeigen
    } else {
        sidebar.classList.add('closed');
        sidebar.style.left = '-250px'; // Menü ausblenden
    }
});

// Unsichtbares Hover-Menü
const hoverArea = document.createElement('div');
hoverArea.id = 'hover-area';
document.body.appendChild(hoverArea);

// Sidebar anzeigen
hoverArea.addEventListener('mouseenter', () => {
    sidebar.style.left = '0'; // Menü anzeigen
    sidebar.classList.remove('closed');
});

// Sidebar wieder ausblenden
sidebar.addEventListener('mouseleave', () => {
    sidebar.classList.add('closed');
    sidebar.style.left = '-250px'; // Menü ausblenden
});
