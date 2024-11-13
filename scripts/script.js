function updateFooterYear() {
  const yearElement = document.querySelector(".footer__copyright__year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

window.onload = updateFooterYear;
