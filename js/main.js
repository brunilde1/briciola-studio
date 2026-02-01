// ========================================
// TOGGLE LIGHT/DARK con MEMORIA PERSISTENTE
// La modalità scelta rimane tra tutte le pagine
// ========================================
document.addEventListener('DOMContentLoaded', function() {
  
  const toggleButton = document.getElementById('toggle-theme');
  const stylesheet = document.getElementById('theme-stylesheet');
  
  // Carica modalità salvata (o default light)
  const savedTheme = localStorage.getItem('theme') || 'light';
  const isDark = savedTheme === 'dark';
  
  if (isDark) {
    stylesheet.href = 'css/style-dark.css';
    toggleButton.textContent = 'Modalità chiara';
  } else {
    stylesheet.href = 'css/style-light.css';
    toggleButton.textContent = 'Modalità scura';
  }
  
  // Toggle al click
  toggleButton.addEventListener('click', function() {
    const currentHref = stylesheet.getAttribute('href');
    
    if (currentHref === 'css/style-light.css') {
      // Passa a dark
      stylesheet.href = 'css/style-dark.css';
      toggleButton.textContent = 'Modalità chiara';
      localStorage.setItem('theme', 'dark');
    } else {
      // Passa a light
      stylesheet.href = 'css/style-light.css';
      toggleButton.textContent = 'Modalità scura';
      localStorage.setItem('theme', 'light');
    }
  });
});

// compilazione del form

const form = document.getElementById('contact-form');
const feedback = document.getElementById('form-feedback');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    feedback.textContent = 'Compila tutti i campi.';
    feedback.style.color = 'red';
    return;
  }

  if (!email.includes('@')) {
    feedback.textContent = 'Inserisci un’email valida.';
    feedback.style.color = 'red';
    return;
  }

  // simulazione invio
  feedback.textContent = 'Messaggio inviato correttamente.';
  feedback.style.color = 'green';

  form.reset();
});

