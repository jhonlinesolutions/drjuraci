// Dr. Juraci Rosa de Oliveira — script principal do site

document.addEventListener("DOMContentLoaded", function () {
  // Menu mobile
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.querySelector(".nav-principal");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("aberto");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("aberto");
      });
    });
  }

  // Busca rápida de convênios
  var busca = document.getElementById("busca-convenio");
  if (busca) {
    busca.addEventListener("input", function () {
      var filtro = busca.value.trim().toUpperCase();
      document.querySelectorAll(".lista-convenios li").forEach(function (item) {
        var texto = item.textContent.toUpperCase();
        item.classList.toggle("escondido", filtro !== "" && texto.indexOf(filtro) === -1);
      });
    });
  }
});
