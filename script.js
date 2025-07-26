const contenedor = document.getElementById("malla");
const porcentajeTexto = document.getElementById("porcentaje");

let aprobadas = JSON.parse(localStorage.getItem("materiasAprobadas")) || [];

function guardarAprobadas() {
  localStorage.setItem("materiasAprobadas", JSON.stringify(aprobadas));
}

function calcularProgreso() {
  const total = materias.length;
  const porcentaje = ((aprobadas.length / total) * 100).toFixed(1);
  porcentajeTexto.textContent = `${porcentaje}%`;
}

function puedeCursar(materia) {
  return materia.prerrequisitos.every(pr => aprobadas.includes(pr));
}

function renderMalla() {
  contenedor.innerHTML = "";
  materias.forEach(materia => {
    const div = document.createElement("div");
    div.classList.add("card");

    if (aprobadas.includes(materia.codigo)) {
      div.classList.add("aprobada");
    } else if (!puedeCursar(materia)) {
      div.classList.add("bloqueada");
    }

    div.innerHTML = `
      <div class="nombre">${materia.nombre}</div>
      <div class="codigo">${materia.codigo}</div>
    `;

    div.onclick = () => {
      if (aprobadas.includes(materia.codigo)) {
        aprobadas = aprobadas.filter(c => c !== materia.codigo);
      } else {
        aprobadas.push(materia.codigo);
      }
      guardarAprobadas();
      renderMalla();
      calcularProgreso();
    };

    contenedor.appendChild(div);
  });

  calcularProgreso();
}

renderMalla();
