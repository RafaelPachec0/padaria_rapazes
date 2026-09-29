const dialog = document.querySelector("#orderDialog");
const productSelect = document.querySelector("#productSelect");

document.querySelectorAll("[data-open-order]").forEach((button) => {
  button.addEventListener("click", () => {
    dialog.showModal();
  });
});

document.querySelectorAll("[data-close-order]").forEach((button) => {
  button.addEventListener("click", () => dialog.close());
});

document.querySelectorAll("[data-product]").forEach((button) => {
  button.addEventListener("click", () => {
    productSelect.value = button.dataset.product;
    dialog.showModal();
  });
});

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

document.querySelector("#orderForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const product = productSelect.value;
  const name = event.target.querySelector('input[type="text"]').value.trim();
  alert(`Obrigado, ${name}! Seu pedido de ${product} foi registrado no protótipo.`);
  event.target.reset();
  dialog.close();
});

document.querySelector("#learnMore").addEventListener("click", () => {
  alert("Aqui você pode colocar a história completa da Padaria Rapazes, seus valores e diferenciais.");
});

document.querySelector("#mapButton").addEventListener("click", () => {
  // Substitua pelo endereço real da padaria.
  window.open("https://www.google.com/maps/search/?api=1&query=Padaria+Rapazes", "_blank");
});

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

menuToggle.addEventListener("click", () => {
  const open = mobileMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  mobileMenu.setAttribute("aria-hidden", String(!open));
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    mobileMenu.setAttribute("aria-hidden", "true");
  });
});
