const themeSwitcher = document.querySelector('.switch-input');

themeSwitcher.addEventListener('input', toggleTheme);

function setTheme(themeName) {
 localStorage.setItem('theme', themeName);
 document.body.className = themeName;
}

function toggleTheme() {
  if (localStorage.getItem('theme') === 'dark') {
    setTheme('light');
  } else {
    setTheme('dark');
  }
}

(function () {
  if (localStorage.getItem('theme') === 'dark') {
    setTheme('dark');
    themeSwitcher.checked = false;
  } else {
    setTheme('light');
    themeSwitcher.checked = true;
  }   
})();
