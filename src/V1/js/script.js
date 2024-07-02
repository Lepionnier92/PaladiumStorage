document.getElementById('themeToggleBtn').addEventListener('click', function () {
    const htmlElement = document.documentElement;
    if (htmlElement.getAttribute('data-bs-theme') === 'dark') {
      htmlElement.setAttribute('data-bs-theme', 'light');
    } else {
      htmlElement.setAttribute('data-bs-theme', 'dark');
    }
  });