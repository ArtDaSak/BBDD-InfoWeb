function toggleSection(id) {
  const section = document.getElementById(id);
  section.classList.toggle('hidden');
}

function cambiarFlujo() {
  const stack = document.querySelector(".tcpip-stack");
  const button = document.getElementById("toggle-flow");

  if (stack.classList.contains("flujo-descendente")) {
    stack.classList.remove("flujo-descendente");
    stack.classList.add("flujo-ascendente");
    button.textContent = "Flujo actual: Recibir ⬆️";
  } else {
    stack.classList.remove("flujo-ascendente");
    stack.classList.add("flujo-descendente");
    button.textContent = "Flujo actual: Enviar ⬇️";
  }
}