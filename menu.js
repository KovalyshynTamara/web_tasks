function toggleMenu() {
  document.getElementById("mobile_menu").classList.toggle("open");
  document.getElementById("hamb-btn").classList.toggle("active");
  document.getElementById("shadow").classList.toggle("show");
}

function toggleDropdown(button) {
  const parentLi = button.closest('.has-dropdown');
  parentLi.classList.toggle('open');
}
