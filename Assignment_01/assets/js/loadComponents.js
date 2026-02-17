async function loadComponent(id, file) {
  const res = await fetch(file);
  document.getElementById(id).innerHTML = await res.text();
}

loadComponent("navbar", "components/navbar.html");
loadComponent("footer", "components/footer.html");
