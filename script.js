// Almacena las materias aprobadas en el navegador
let aprobadas = JSON.parse(localStorage.getItem("materiasAprobadas")) || [];

const contenedor = document.getElementById("malla");
const porcentajeTexto = document.getElementById("porcentaje");
const alertasDiv = document.getElementById("alertas");

// Guardar cambios
function guardarAprobadas() {
  localStorage.setItem("materiasAprobadas", JSON.stringify(aprobadas));
}

// Calcular créditos totales aprobados
function creditosAprobados() {
  return materias
    .filter(m => aprobadas.includes(m.codigo))
    .reduce((sum, m) => sum + m.creditos, 0);
}

// Verifica si puedo cursar una materia
function puedeCursar(materia) {
  return materia.prerrequisitos.every(pr => aprobadas.includes(pr));
}

// Renderizar materias
function renderMalla() {
  contenedor.innerHTML = "";

  materias.forEach(materia => {
    const div = document.createElement("div");
    div.classList.add("card");

    const estaAprobada = aprobadas.includes(materia.codigo);
    const habilitada = puedeCursar(materia);

    if (estaAprobada) div.classList.add("aprobada");
    else if (!habilitada) div.classList.add("bloqueada");

    div.innerHTML = `
      <div class="nombre">${materia.nombre}</div>
      <div class="codigo">${materia.codigo}</div>
      <div class="creditos">Créditos: ${materia.creditos}</div>
    `;

    div.onclick = () => {
      if (estaAprobada) {
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
}

// Mostrar progreso y alertas
function calcularProgreso() {
  const totalCreditos = 166;
  const aprobados = creditosAprobados();
  const porcentaje = ((aprobados / totalCreditos) * 100).toFixed(1);

  porcentajeTexto.textContent = `${porcentaje}% (${aprobados}/${totalCreditos} créditos)`;

  // Mostrar alertas
  let alertas = [];
  if (aprobados >= 125) {
    alertas.push("🎓 Ya puedes presentar la prueba Saber Pro.");
  }
  if (aprobados >= 128) {
    alertas.push("📝 Puedes matricular el Seminario de Grado.");
  }
  alertasDiv.innerHTML = alertas.join("<br>");
}

renderMalla();
calcularProgreso();
