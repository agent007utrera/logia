// =====================================================================
// OBJETOS.JS — Catálogo único de objetos del juego
// =====================================================================
// Es lo ÚNICO que hay que editar para cambiar de juego (objetos, nombres,
// descripciones, si se pueden usar, si se pueden entregar...).
// Lo cargan jugadorXXXX.html y master.html con:
//
//     <script src="objetos.js"></script>
//
// (en el jugador y en el máster, ANTES del <script> principal de la página).
//
// CÓMO AÑADIR UN OBJETO
//   1) Añade una entrada en OBJETOS (la clave va en minúsculas, sin espacios
//      y es el nombre de la columna en la hoja Inventario1 y de la imagen
//      images/<clave>.jpg).
//   2) Añade la columna con ese mismo nombre en la hoja Inventario1.
//   Nada más.
//
// CAMPOS DE CADA OBJETO
//   nombre       Nombre que ve el jugador. Obligatorio.
//   descripcion  Texto del pop-up "Descripción". Si falta, sale un texto genérico.
//   usar         { stat, cantidad }  Hace que aparezca el botón "Usar".
//                stat: 'vida' | 'puntos_accion' | 'cordura' | cualquier columna numérica.
//                El objeto se consume al usarse.
//   recarga      Nombre de la función de recarga que se lanza al "Usar"
//                (solicitarRecarga, solicitarRecargaRevolver, solicitarRecargaEscopeta).
//   entregable   false = el botón "Entregar" sale deshabilitado. Por defecto true.
//
// NOTA: el daño, la munición máxima y los empates de las armas NO están aquí:
// siguen en CONFIG_ARMAS de INVENTARIO1.js (Apps Script, es el servidor).
// =====================================================================

const OBJETOS = {


// =========================OBJETOS INICIALES===========================


  anillo_logia: {
    nombre: "Anillo de la Logia",
    descripcion: "Un macizo sello de plata con el grabado de un ojo insomne bajo una luna creciente, cuya sola mirada evoca una frialdad arcaica y perturbadora.",
    entregable: false
  },

// ======= WETHERBY

  pagina: {
    nombre: "Página del Necronomicón",
    descripcion: "Una página del Necronomicón vendida por Crane e Hijos.",
  },

// ======= BREWER

  habilidad_curar: {
    nombre: "Habilidad: Curar",
    descripcion: "Tu pericia médica puede calmar a un alma al borde del abismo. Una sola vez a cada jugador (nunca a ti mismo), puedes curarle 2 puntos de cordura. Coste: 1 Punto de Acción.",
    entregable: false,
    gastaPA: true,   // true = la habilidad cuesta puntos de acción · false = gratis
    costePA: 1,      // cuántos puntos de acción cuesta (solo si gastaPA es true)
    curar: { stat: "cordura", cantidad: 2 }
  },

  registros: {
    nombre: "Registros del Sanatorio Mental",
    descripcion: "Un volumen de páginas amarillentas y lomo fatigado, cuyas anotaciones manuscritas detallan los oscuros y desesperantes diagnósticos de pacientes consumidos por terrores innombrables.",
  },

// ======= CRANE

  prisma: {
    nombre: "Prisma de Plata verdadero",
    descripcion: "Un prisma de plata, descansando sobre el terciopelo negro de un estuche de cuero; un artefacto de ángulos inquietantes que parece reflejar luces que no pertenecen a esta dimensión.",
    ocultoRegistro: true,   // true = doble fondo: el inspector no lo detecta al registrar
  },

  loto: {
    nombre: "Extracto de Loto Azul",
    descripcion: "Un frasco de vidrio oscuro con extracto de loto azul traído de Innsmouth, en cuyo interior se agita un líquido de tonalidad abisal capaz de inducir sopores profanos e inquietantes visiones.",
  },

  rel_amuleto: {
    nombre: "Amuleto",
    descripcion: "Reliquia: Un arcaico amuleto suspendido de un cordel de cuero, tallado en una sustancia rojiza. Representa una aberrante criatura pisciforme de ojos saltones y aletas grotescas.",
  },

  rel_colmillo: {
    nombre: "Colmillo tallado de kraken",
    descripcion: "Reliquia: Un marfil amarillento y agrietado grabado con serpenteantes tentáculos y runas impías, un vestigio profano de las profundidades marinas cuya mera presencia transmite el gélido abrazo del abismo.",
  },

  rel_espejo: {
    nombre: "Espejo de Nitocris",
    descripcion: "Reliquia: Un antiguo espejo maldito vinculado a la reina egipcia Nitocris que permite traspasar la barrera entre mundos o reflejar realidades distorsionadas.",
  },

  rel_frasco: {
    nombre: "Frasco de Niebla de Kingsport",
    descripcion: "Reliquia: Un frasco de vidrio sellado con cera que aprisiona la niebla del solsticio de Kingsport, en cuyo interior danzan efervescencias fosforescentes que insinúan la presencia del lejano y misterioso espíritu de la costa.",
  },

  rel_moneda: {
    nombre: "Moneda Extraña",
    descripcion: "Reliquia: Una pesada moneda de bronce envejecido que exhibe el relieve de una entidad monstruosa de tentáculos y alas, rodeada por la blasfema inscripción Cthulhu R'lyeh wgah'nagl fhtagn.",
  },

// ======= NICHOLS

  habilidad_registrar: {
    nombre: "Habilidad: Registrar",
    descripcion: "Tu olfato de policía sabe dónde mirar. Una sola vez a cada jugador, puedes registrarlo y ver qué objetos lleva encima. Coste: 1 Punto de Acción.",
    entregable: false,
    gastaPA: true,   // true = la habilidad cuesta puntos de acción · false = gratis
    costePA: 1,      // cuántos puntos de acción cuesta (solo si gastaPA es true)
    registrar: true
  },

  expediente: {
    nombre: "Expediente policial",
    descripcion: "Una ajada carpeta del departamento de policía de Arkham sobre el caso del alumno Harlan Pierce.",
  },

// ======= PICKMAN

  boceto: {
    nombre: "Cuadro Ventana a Ciudades",
    descripcion: "Un inquietante lienzo firmado por R. Pickman que muestra una urbe de torres imposibles e inclinadas bajo un firmamento pesadillesco plagado de múltiples lunas.",
  },

  prueba_h_cuadro: {
    nombre: "Cuadro de El Banquete del Crepúsculo",
    descripcion: "Un lúgubre lienzo firmado por R. Pickman que retrata un banquete impío, donde figuras macilentas se sientan a la mesa bajo la mirada de una encapuchada entidad armada y dos lunas gemelas que desafían las leyes del firmamento. ",
  },

// ======= RICE

  traduccion: {
    nombre: "Traducción del Códice",
    descripcion: "Traducción de los Tomos Prohibidos I y II.",
  },

  nota: {
    nombre: "Nota anónima",
    descripcion: "Nota anónima escrita a mano.",
  },


// =========================OBJETOS USABLES===========================


  cafe: {
    nombre: "Taza de café",
    descripcion: "Una taza de café, de loza oscura con el grabado de la Logia, de la que emana un vapor denso. Si la usas, recuperas 4 puntos de acción.",
    usar: { stat: "puntos_accion", cantidad: 4 }
  },

  kola: {
    nombre: "Frasco de Kola",
    descripcion: "Un frasco etiquetado bajo una fórmula farmacéutica de Arkham, cuyo líquido espeso y estimulante promete vigor. Si lo usas, recuperas 4 puntos de acción.",
    usar: { stat: "puntos_accion", cantidad: 4 }
  },

  te: {
    nombre: "Taza de té",
    descripcion: "Una delicada taza de té, de porcelana fina con motivos florales. Si la usas, recuperas 4 puntos de acción.",
    usar: { stat: "puntos_accion", cantidad: 4 }
  },

  galletas: {
    nombre: "Bandeja de galletas",
    descripcion: "Una labrada bandeja de plata con una selección de pastas caseras. Si la usas, recuperas 2 puntos de vida.",
    usar: { stat: "vida", cantidad: 2 }
  },


  lata_conservas: {
    nombre: "Lata de conservas",
    descripcion: "Un cilindro metálico de etiqueta gastada y bordes herrumbrosos, en cuyo interior y bajo el rotulo de una falsa prosperidad costera se encierra una materia oleosa y opaca, evocadora de las inmundicias que flotan en las simas abisales. Si la usas, recuperas 2 de vida.",
    usar: { stat: "vida", cantidad: 2 }
  },

  sopa: {
    nombre: "Tazón de sopa",
    descripcion: "Un tazón de barro grabado con la luna y la estrella de la Logia, del que brota un vapor denso sobre un caldo espeso e indefinible, cuyo aroma despierta un leve recelo entre las penumbras de la estancia. Si lo usas, recuperas 2 puntos de vida.",
    usar: { stat: "vida", cantidad: 2 }
  },

  bourbon: {
    nombre: "Vaso de bourbon",
    descripcion: "Un vaso de cristal tallado con bourbon. Si lo usas, recuperas 2 puntos de cordura.",
    usar: { stat: "cordura", cantidad: 2 }
  },

  brandy: {
    nombre: "Copa de brandy",
    descripcion: "Una copa de fino cristal tallado con el emblema de la luna creciente de la Logia, conteniendo brandy. Si la usas, recuperas 2 puntos de cordura.",
    usar: { stat: "cordura", cantidad: 2 }
  },

  pitillera: {
    nombre: "Pitillera",
    descripcion: "Un estuche metálico de fría superficie plateada y filigranas geométricas, que resguarda en su interior una hilera de cigarrillos marcados con fechas fatídicas; un adminículo mundano que parece exhalar el vaho ceniciento de las horas previas a un sacrificio innombrable. Si la usas, recuperas 2 puntos de cordura.",
    usar: { stat: "cordura", cantidad: 2 }
  },


// =========================VARIOS===========================


  invitacion: {
    nombre: "Invitación a la Logia",
    descripcion: "Una elegante invitación en pergamino grueso de la Logia del Crepúsculo de Plata.",
  },

  llave_cajon: {
    nombre: "Llave pequeña",
    descripcion: "Una llave de latón ennegrecido y corroído por una pátina antinatural.",
  },

  pala: {
    nombre: "Pala",
    descripcion: "Una pala de hierro forjado y tosca madera, manchada con la tierra de sepulturas olvidadas.",
  },


// =========================PRUEBAS===========================


  prueba_a_reloj: {
    nombre: "Reloj de bolsillo",
    descripcion: "Prueba A: Reloj de bolsillo detenido a las 11:05. Roto. Encontrado en el bolsillo de la víctima en el Santuario.",
  },

  prueba_b_informe: {
    nombre: "Informe del Dr. Brewer",
    descripcion: "Prueba B: Herida penetrante con arma de filo larga. Restos de hidrato de cloral.",
  },

  prueba_c_copa: {
    nombre: "Copa de brandy con polvo",
    descripcion: "Prueba C: Copa de brandy con poso de polvo blanquecino en el fondo. Encontrada en el Comedor.",
  },

  prueba_d_nota: {
    nombre: "Nota anónima",
    descripcion: "Prueba D: Nota hallada en el bolsillo del abrigo de la víctima. Encontrada en el Vestíbulo.",
  },

  prueba_e_pagina: {
    nombre: "Página del Necronomicón",
    descripcion: "Según el análisis de la tinta, es una falsificación. Encontrada en el Observatorio.",
  },

  prueba_f_pisadas: {
    nombre: "Marcas de pisadas",
    descripcion: "Prueba F: Fotografía de pisadas en el jardín de botas de pescador con algas y salitre. También hay pisadas de zapatos.",
  },

  prueba_g_bayoneta: {
    nombre: "Bayoneta",
    descripcion: "Bayoneta con manchas de pintura azul y roja en el mango, y con mancha de sangre en la hoja. Encontrada en el Jardín.",
  },


// =========================ARMAS===========================


  escopeta1: {
    nombre: "Escopeta Ref.: 176",
    descripcion: "Una escopeta de doble cañón con culata de madera pulida y mecanismos de acero envejecidos. Daño: 3d6"
  },
  cartuchos_escopeta1: {
    nombre: "Cartuchos para escopeta",
    descripcion: "2 cartuchos para escopeta. Si los usas, recargas tu escopeta.",
    recarga: "solicitarRecargaEscopeta"
  },

  revolver1: {
    nombre: "Revólver Ref.: 132",
    descripcion: "Una pieza de ingeniería de acero pavonado, cuyo cañón y tambor lucen la pátina oscura y el desgaste de décadas de uso. Daño: 1d10+2"
  },
  municion_revolver1: {
    nombre: "Munición para revólver",
    descripcion: "Una ajada caja de cartón cobija seis balas de plomo y latón en su interior alveolado. Si la usas, recargas tu revólver.",
    recarga: "solicitarRecargaRevolver"
  },

  pistola1: {
    nombre: "Pistola Ref.: 143",
    descripcion: "Una pistola semiautomática Colt M1911A1, de acero pavonado oscurecido por el tiempo y el uso. Daño: 1d10.",
  },
  cargador_pistola1: {
    nombre: "Cargador para pistola",
    descripcion: "Un cargador de acero monohilera para la pistola M1911A1, con 15 balas. Si lo usas, recargas tu pistola.",
    recarga: "solicitarRecarga"
  },

  hacha1: {
    nombre: "Hacha",
    descripcion: "Un hacha de leñador con mango de nogal y hoja de acero oscurecida. Daño: 1d8+2"
  },

  machete1: {
    nombre: "Machete",
    descripcion: "Un machete de hoja ancha y oxidada, manchada con un residuo oscuro e innombrable. Daño: 1d8."
  },

  cuchillo1: {
    nombre: "Cuchillo",
    descripcion: "Un cuchillo de cocina rústico y desgastado con mango de madera oscura fijado con tres remaches metálicos y una hoja de acero oxidada y manchada. Daño: 1d6."
  }

};


// =====================================================================
// DERIVADOS — No tocar. Con estos nombres siguen funcionando el jugador y el máster.
// =====================================================================
const OBJETOS_BASE = Object.keys(OBJETOS);
const NOMBRES_VISIBLES = {};
const DESCRIPCIONES_OBJETOS = {};
const OBJETOS_USABLES = {};
const OBJETOS_RECARGA = {};
const OBJETOS_NO_ENTREGABLES = [];
const OBJETOS_CURAR = {};
const OBJETOS_REGISTRAR = {};
const OBJETOS_COSTE_PA = {};
const OBJETOS_OCULTOS_REGISTRO = [];
Object.keys(OBJETOS).forEach(function (k) {
  var o = OBJETOS[k];
  NOMBRES_VISIBLES[k] = o.nombre;
  if (o.descripcion) DESCRIPCIONES_OBJETOS[k] = o.descripcion;
  if (o.usar) OBJETOS_USABLES[k] = o.usar;
  if (o.curar) OBJETOS_CURAR[k] = o.curar;
  if (o.registrar) OBJETOS_REGISTRAR[k] = o.registrar;
  if (o.gastaPA === true && Number(o.costePA) > 0) OBJETOS_COSTE_PA[k] = Number(o.costePA);
  if (o.recarga) OBJETOS_RECARGA[k] = o.recarga;
  if (o.entregable === false) OBJETOS_NO_ENTREGABLES.push(k);
  if (o.ocultoRegistro === true) OBJETOS_OCULTOS_REGISTRO.push(k);
});
