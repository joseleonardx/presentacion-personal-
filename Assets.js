// --- Selector de Modo Claro / Modo Oscuro ---
const themeToggleBtn = document.getElementById('theme-toggle');
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Comprobación inicial del tema preferido
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    if(themeToggleLightIcon) themeToggleLightIcon.classList.remove('hidden');
} else {
    document.documentElement.classList.remove('dark');
    if(themeToggleDarkIcon) themeToggleDarkIcon.classList.remove('hidden');
}

themeToggleBtn.addEventListener('click', function() {
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
});

// --- Manejo del Modal de Detalles de Proyectos ---
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-description');

function showProjectDetails(title, description) {
    event.preventDefault(); // Evita el comportamiento por defecto del enlace
    modalTitle.textContent = title;
    modalDesc.textContent = description;
    modal.classList.remove('hidden');
}

function closeModal() {
    modal.classList.add('hidden');
}

// --- Manejo del Formulario de Contacto (Toast simulado) ---
function handleContactSubmit(event) {
    event.preventDefault();
    
    const toast = document.getElementById('toast-success');
    toast.classList.remove('hidden');
    
    document.getElementById('contact-form').reset();
    
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 4000);
}