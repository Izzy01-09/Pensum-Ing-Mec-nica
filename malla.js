const materias = [
  {
    "codigo": "452001",
    "nombre": "Cálculo I",
    "prerrequisitos": [],
    "creditos": 4
  },
  {
    "codigo": "452002",
    "nombre": "Cálculo II",
    "prerrequisitos": [
      "452001"
    ],
    "creditos": 4
  },
  {
    "codigo": "452003",
    "nombre": "Cálculo III",
    "prerrequisitos": [
      "452002"
    ],
    "creditos": 4
  },
  {
    "codigo": "452008",
    "nombre": "Física I y Laboratorio",
    "prerrequisitos": [],
    "creditos": 4
  },
  {
    "codigo": "452016",
    "nombre": "Física II y Laboratorio",
    "prerrequisitos": [
      "452008"
    ],
    "creditos": 4
  },
  {
    "codigo": "452022",
    "nombre": "Física III y Laboratorio",
    "prerrequisitos": [
      "452016"
    ],
    "creditos": 4
  },
  {
    "codigo": "452012",
    "nombre": "Dibujo Técnico I",
    "prerrequisitos": [],
    "creditos": 3
  },
  {
    "codigo": "452018",
    "nombre": "Dibujo Técnico II",
    "prerrequisitos": [],
    "creditos": 3
  },
  {
    "codigo": "452010",
    "nombre": "Álgebra Lineal",
    "prerrequisitos": [],
    "creditos": 3
  },
  {
    "codigo": "452025",
    "nombre": "Geometría Descriptiva",
    "prerrequisitos": [],
    "creditos": 3
  },
  {
    "codigo": "452004",
    "nombre": "Algoritmo y Programación",
    "prerrequisitos": [],
    "creditos": 3
  },
  {
    "codigo": "452005",
    "nombre": "Introducción a la Ing. Mecánica",
    "prerrequisitos": [],
    "creditos": 3
  },
  {
    "codigo": "452015",
    "nombre": "Ecuaciones Diferenciales",
    "prerrequisitos": [
      "452001"
    ],
    "creditos": 3
  },
  {
    "codigo": "452029",
    "nombre": "Métodos Numéricos",
    "prerrequisitos": [
      "452015"
    ],
    "creditos": 3
  },
  {
    "codigo": "452034",
    "nombre": "Estadística",
    "prerrequisitos": [],
    "creditos": 3
  },
  {
    "codigo": "452017",
    "nombre": "Química General y Laboratorio",
    "prerrequisitos": [],
    "creditos": 4
  },
  {
    "codigo": "452011",
    "nombre": "Química de Polímeros",
    "prerrequisitos": [],
    "creditos": 3
  },
  {
    "codigo": "452019",
    "nombre": "Materiales de Ingeniería I",
    "prerrequisitos": [],
    "creditos": 3
  },
  {
    "codigo": "452054",
    "nombre": "Materiales de Ingeniería II",
    "prerrequisitos": [
      "452019"
    ],
    "creditos": 3
  },
  {
    "codigo": "452026",
    "nombre": "Estática",
    "prerrequisitos": [
      "452010"
    ],
    "creditos": 3
  },
  {
    "codigo": "452033",
    "nombre": "Dinámica",
    "prerrequisitos": [
      "452026"
    ],
    "creditos": 3
  },
  {
    "codigo": "452039",
    "nombre": "Resistencia de Materiales II",
    "prerrequisitos": [
      "452033"
    ],
    "creditos": 3
  },
  {
    "codigo": "452032",
    "nombre": "Termodinámica",
    "prerrequisitos": [
      "452001"
    ],
    "creditos": 3
  },
  {
    "codigo": "452037",
    "nombre": "Mecánica de Fluidos",
    "prerrequisitos": [
      "452032"
    ],
    "creditos": 4
  },
  {
    "codigo": "452041",
    "nombre": "Transferencia de Calor",
    "prerrequisitos": [
      "452037"
    ],
    "creditos": 4
  },
  {
    "codigo": "452043",
    "nombre": "Diseño de Máquinas I",
    "prerrequisitos": [],
    "creditos": 3
  },
  {
    "codigo": "452050",
    "nombre": "Diseño de Máquinas II",
    "prerrequisitos": [
      "452043"
    ],
    "creditos": 4
  },
  {
    "codigo": "452044",
    "nombre": "Procesos de Manufactura I",
    "prerrequisitos": [],
    "creditos": 3
  },
  {
    "codigo": "452051",
    "nombre": "Procesos de Manufactura II",
    "prerrequisitos": [
      "452044"
    ],
    "creditos": 4
  },
  {
    "codigo": "452048",
    "nombre": "Electiva de Carrera I",
    "prerrequisitos": [],
    "creditos": 3
  },
  {
    "codigo": "452062",
    "nombre": "Electiva de Carrera III",
    "prerrequisitos": [],
    "creditos": 3
  },
  {
    "codigo": "452027",
    "nombre": "Electiva Libre I",
    "prerrequisitos": [],
    "creditos": 3
  },
  {
    "codigo": "452030",
    "nombre": "Electiva Libre II",
    "prerrequisitos": [],
    "creditos": 3
  },
  {
    "codigo": "452052",
    "nombre": "Conversión de Energía",
    "prerrequisitos": [],
    "creditos": 3
  },
  {
    "codigo": "452046",
    "nombre": "Taller de Máquinas y Herramientas",
    "prerrequisitos": [],
    "creditos": 4
  },
  {
    "codigo": "452045",
    "nombre": "Máquinas Térmicas",
    "prerrequisitos": [],
    "creditos": 4
  },
  {
    "codigo": "452049",
    "nombre": "Economía para Ingenieros",
    "prerrequisitos": [],
    "creditos": 3
  },
  {
    "codigo": "452060",
    "nombre": "Gestión Ambiental",
    "prerrequisitos": [],
    "creditos": 3
  },
  {
    "codigo": "452063",
    "nombre": "Electiva de Profundización",
    "prerrequisitos": [],
    "creditos": 3
  },
  {
    "codigo": "452065",
    "nombre": "Electiva de Profundización",
    "prerrequisitos": [],
    "creditos": 3
  },
  {
    "codigo": "452066",
    "nombre": "Proyecto de Grado",
    "prerrequisitos": [
      "452050",
      "452051"
    ],
    "creditos": 4
  },
  {
    "codigo": "452061",
    "nombre": "Seminario de Grado",
    "prerrequisitos": [
      "452001",
      "452002",
      "452003",
      "452008",
      "452016",
      "452022"
    ],
    "creditos": 2
  },
  {
    "codigo": "452006",
    "nombre": "Competencias Comunicativas I",
    "prerrequisitos": [],
    "creditos": 3
  },
  {
    "codigo": "452013",
    "nombre": "Competencias Comunicativas II",
    "prerrequisitos": [],
    "creditos": 3
  },
  {
    "codigo": "452007",
    "nombre": "Universidad y Contexto",
    "prerrequisitos": [],
    "creditos": 3
  },
  {
    "codigo": "452021",
    "nombre": "Humanidades II",
    "prerrequisitos": [],
    "creditos": 3
  },
  {
    "codigo": "452035",
    "nombre": "Humanidades I",
    "prerrequisitos": [],
    "creditos": 3
  },
  {
    "codigo": "452028",
    "nombre": "Inglés I",
    "prerrequisitos": [],
    "creditos": 3
  },
  {
    "codigo": "452042",
    "nombre": "Inglés II",
    "prerrequisitos": [],
    "creditos": 3
  },
  {
    "codigo": "452036",
    "nombre": "Inglés III",
    "prerrequisitos": [],
    "creditos": 3
  },
  {
    "codigo": "452047",
    "nombre": "Electiva de Carrera II",
    "prerrequisitos": [],
    "creditos": 3
  },
  {
    "codigo": "452031",
    "nombre": "Metodología de la Investigación",
    "prerrequisitos": [],
    "creditos": 3
  },
  {
    "codigo": "452067",
    "nombre": "Gerencia para Ingenieros",
    "prerrequisitos": [],
    "creditos": 3
  },
  {
    "codigo": "452038",
    "nombre": "Mecanismos",
    "prerrequisitos": [],
    "creditos": 3
  },
  {
    "codigo": "452056",
    "nombre": "Lubricación y Mantenimiento",
    "prerrequisitos": [],
    "creditos": 3
  },
  {
    "codigo": "452057",
    "nombre": "Instrumentación y Control de Procesos",
    "prerrequisitos": [],
    "creditos": 3
  },
  {
    "codigo": "452058",
    "nombre": "Refrigeración y Aire Acondicionado",
    "prerrequisitos": [],
    "creditos": 3
  },
  {
    "codigo": "452064",
    "nombre": "CAD-CAM",
    "prerrequisitos": [],
    "creditos": 3
  },
  {
    "codigo": "452014",
    "nombre": "Aprendizaje Autónomo",
    "prerrequisitos": [],
    "creditos": 3
  },
  {
    "codigo": "452020",
    "nombre": "Electrotecnia y Electrónica",
    "prerrequisitos": [],
    "creditos": 3
  }
];