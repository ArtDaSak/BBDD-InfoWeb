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
    button.innerHTML = 'Flujo actual: Recibir <img src="../assets/icons/arrowTop.svg">';
  } else {
    stack.classList.remove("flujo-ascendente");
    stack.classList.add("flujo-descendente");
    button.innerHTML = 'Flujo actual: Enviar <img src="../assets/icons/arrowBottom.svg">';
  }
}