// =====================================================================
// DATOS_JUGADORXXXX.JS — Trasfondo, compañeros y objetivos de ESTE jugador
// =====================================================================
// Lo carga jugadorXXXX.html con:
//
//     <script src="datos_jugadorXXXX.js"></script>
//
// (ANTES del <script> principal de la página).
// Para otro jugador: copia este archivo como datos_jugadorXXXX.js, cambia el
// contenido y el <script src> de su jugadorXXXX.html.
//
// Cada entrada de objectivesData es una pestaña del panel de objetivos:
//   title      Título de la pestaña.
//   unlocked   true = visible desde el principio. false = se desbloquea con el
//              código "code" o cuando el máster pone "yes" en la columna "sheetKey" de la hoja.
//   code       Contraseña que desbloquea el capítulo.
//   sheetKey   Columna de la hoja Inventario1 que lo activa (capitulo2, capitulo3...).
//   items      Contenido, en orden. Tipos: subheading, info, check, line, space.
//              Los textos "info" admiten HTML (por ejemplo la foto al pasar el ratón).
// =====================================================================
// ESTO ES PARA INTRODUCIR UN HIPERVÍNCULO PARA VER UN VÍDEO EN EL TEXTO.
// { text: 'Recuerdas lo que viste aquella noche... <a href="#" style="color:#9fd4ff;" onclick="abrirVideo(\'videos/puerta.mp4\'); return false;">🎬 pincha para ver el vídeo🎬</a>', type: "info" },
// =====================================================================
// ---------- Popup de vídeo a pantalla completa ----------
function abrirVideo(src) {
    if (document.getElementById('video-popup')) return;

    const overlay = document.createElement('div');
    overlay.id = 'video-popup';
    overlay.style.cssText =
        'position:fixed;top:0;left:0;width:100vw;height:100vh;background:#000;' +
        'z-index:99999;display:flex;align-items:center;justify-content:center;';

    const video = document.createElement('video');
    video.src = src;
    video.autoplay = true;
    video.playsInline = true;
    video.style.cssText = 'width:100%;height:100%;object-fit:contain;';

    const cerrar = document.createElement('button');
    cerrar.textContent = '✕';
    cerrar.setAttribute('aria-label', 'Cerrar vídeo');
    cerrar.style.cssText =
        'display:none;position:absolute;top:15px;right:20px;width:44px;height:44px;' +
        'font-size:26px;line-height:1;color:#fff;background:rgba(0,0,0,.6);' +
        'border:2px solid #fff;border-radius:50%;cursor:pointer;z-index:100000;';
    cerrar.onclick = function () {
        video.pause();
        overlay.remove();
    };

    // La X solo aparece cuando el vídeo se ha reproducido una vez entero
    // (o si el vídeo falla al cargar, para no dejar al jugador atrapado)
    video.addEventListener('ended', function () { cerrar.style.display = 'block'; });
    video.addEventListener('error', function () { cerrar.style.display = 'block'; });

    overlay.appendChild(video);
    overlay.appendChild(cerrar);
    document.body.appendChild(overlay);
}

// ***************************** TEXTOS ***************************************************

const objectivesData = {

    tus_companeros: {
        title: "Miembros de la Logia",
        unlocked: true,
        items: [
            { type: "space" },
            { text: 'Silas <span class="char-hover">WETHERBY<img src="images/f_wetherby.jpg" class="char-hover-img" alt=""></span>. Gran Maestre. Filántropo, dueño de la Logia y de una fortuna que nunca mengua. Un hombre al que no te conviene traicionar.', type: "info", img: "images/f_wetherby.jpg" },
            { text: 'Abel <span class="char-hover">BREWER<img src="images/f_brewer.jpg" class="char-hover-img" alt=""></span>. Doctor. Director del Sanatorio de Arkham y héroe de la Gran Guerra.', type: "info", img: "images/f_brewer.jpg" }, 
            { text: 'Barnabas <span class="char-hover">CRANE<img src="images/f_crane.jpg" class="char-hover-img" alt=""></span>. Anticuario. Dueño de «Crane e Hijos, Curiosidades y Libros Raros», es el principal proveedor de la Logia.', type: "info", img: "images/f_crane.jpg" },
            { text: 'Robert <span class="char-hover">PICKMAN<img src="images/f_pickman.jpg" class="char-hover-img" alt=""></span>. Pintor. Pinta sus visiones. Su exposición «Ventanas al Otro Lado» ha causado furor en Boston.', type: "info", img: "images/f_pickman.jpg" },
            { text: 'Edmund <span class="char-hover">RICE<img src="images/f_rice.jpg" class="char-hover-img" alt=""></span>. Profesor. Catedrático de «Lenguas Muertas» en la Universidad de Miskatonic. La mayor autoridad viva en manuscritos prohibidos.', type: "info", img: "images/f_rice.jpg" },
            { text: 'Jeremiah <span class="char-hover">NICHOLS<img src="images/f_nichols.jpg" class="char-hover-img" alt=""></span>. Inspector de Policía. Inspector del Departamento de Policía de Arkham, invitado «honorario» y representante de la ley.', type: "info", img: "images/f_nichols.jpg" }
        ]
    },

    1: {
        title: "Trasfondo",
        unlocked: true,
        items: [
            { text: "¿Quién eres?", type: "subheading" },
            { type: "space" },
            { text: 'Eres inspector de policía, de cuarenta y dos años. Veterano condecorado del Argonne, durante la Gran Guerra. Conoces al doctor <span class="char-hover">BREWER<img src="images/f_brewer.jpg" class="char-hover-img" alt=""></span> de esa época, de la 26ª División «Yankee». Hombre de pocas palabras, con uniforme y cigarrillos liados a mano. Tienes fama de incorruptible, aunque sólo es fama, ya que recibes dinero todos los meses de la Logia del Crepúsculo de Plata.', type: "info" },
            { text: 'Hace tres años, en la víspera de Todos los Santos de 1923, tu hermano menor Michael, patrullero, desapareció mientras seguía a un sospechoso por French Hill. Nunca encontraron nada. Desde entonces, has dedicado cada una de tus horas libres a buscar una respuesta. Cuando el Gran Maestre <span class="char-hover">WETHERBY<img src="images/f_wetherby.jpg" class="char-hover-img" alt=""></span> te ofreció ingresar como «miembro honorario» en la Logia, aceptaste: era la única forma de entrar en la mansión donde supuestamente desapareció tu hermano.', type: "info" },
            { text: 'Recibes dinero, miras hacia otro lado y cierras expedientes que no deberías cerrar (entre ellos, el de un estudiante desaparecido hace un año llamado Harlan Pierce). Podría decirse que lo haces por dinero, no se lo discutirías a nadie. Aunque la verdad es que lo haces para averiguar qué le pasó a tu hermano. La culpa te quema por dentro.', type: "info" },
            { text: 'Esta noche, como invitado del Círculo Interior y único representante de la ley, mantendrás el orden y estarás con los ojos abiertos.', type: "info" },
            { type: "space" },
            { type: "line" },
            { text: "Habilidad especial: Registrar", type: "subheading" },
            { type: "space" },
            { text: 'Una vez por persona, puedes registrar a un jugador y saber qué objetos lleva encima (que estén a simple vista, no escondidos en un doble fondo, por ejemplo). Coste: 1 Punto de Acción.', type: "info" },
            { type: "line" },
            { text: "Actuando y vestuario", type: "subheading" },
            { type: "space" },
       	    { text: 'Uniforme de policía, placa, libreta, lápiz y cigarrillos. Hablas poco, miras mucho.', type: "info" }
        ]
    },

    equipo_inicial: {
        title: "Secretos que conoces",
        unlocked: true,
        items: [
            { text: 'Tu hermano Michael desapareció la víspera de Todos los Santos de 1923 en French Hill. Sospechas de la Logia. NADIE DEBE SABER QUE MICHAEL ERA TU HERMANO.', type: "info" },
            { text: 'Recibes dinero de la Logia. Eso no debe saberse.', type: "info" },
            { text: 'El doctor <span class="char-hover">BREWER<img src="images/f_brewer.jpg" class="char-hover-img" alt=""></span> sirvió contigo en el Argonne, durante la Gran Guerra. ', type: "info" },
            { text: 'Crees que el profesor <span class="char-hover">RICE<img src="images/f_rice.jpg" class="char-hover-img" alt=""></span> miente sobre la desaparición de su alumno Harlan Pierce. ', type: "info" },
       	    { text: 'El anticuario <span class="char-hover">CRANE<img src="images/f_crane.jpg" class="char-hover-img" alt=""></span> trata con marineros de Innsmouth. Lo descubriste preguntando en el muelle.', type: "info" },
       	    { text: 'El pintor <span class="char-hover">PICKMAN<img src="images/f_pickman.jpg" class="char-hover-img" alt=""></span> «ve cosas» y tiene premoniciones.', type: "info" },
       	    { text: 'Has estado consultando los planos de la mansión de la Logia en el Archivo Municipal. Eso tampoco debe saberse.', type: "info" }
        ]
    },

    2: {
        title: "Objetivos Acto I",
        unlocked: false,
        code: "ventana",
        sheetKey: "capitulo2",
        items: [
            { type: "space" },
            { text: 'Si <span class="char-hover">WETHERBY<img src="images/f_wetherby.jpg" class="char-hover-img" alt=""></span> te ordena hacer algo, respóndele: «A sus órdenes, gran maestre».', type: "check" },
            { text: 'Interroga al profesor <span class="char-hover">RICE<img src="images/f_rice.jpg" class="char-hover-img" alt=""></span> por su alumno Harlan Pierce: ¿dónde está? ¿qué pasó con él? Presiónalo.', type: "check" },
            { text: 'Pide al doctor <span class="char-hover">BREWER<img src="images/f_brewer.jpg" class="char-hover-img" alt=""></span> los registros del Sanatorio de 1923 a 1925. Tienes que conseguir ese documento sea como sea. Si no te lo da, dile que vas a abrir una investigación en su Sanatorio para encontrar irregularidades.', type: "check" },
            { text: 'Si alguien te pide el Expediente de Harlan Pierce, entrégalo solamente a cambio de los Registros del Sanatorio de 1923 a 1925. Si ya tienes los Registros en tu poder, pide algo de dinero por el Expediente, recuerda: eres corrupto.', type: "check" },
            { text: 'Averigua qué hace <span class="char-hover">CRANE<img src="images/f_crane.jpg" class="char-hover-img" alt=""></span> tratando con marineros de Innsmouth en el puerto. Estuviste investigando y te dieron ese chivatazo.', type: "check" },
            { text: 'Observa a <span class="char-hover">PICKMAN<img src="images/f_pickman.jpg" class="char-hover-img" alt=""></span>: ¿qué ve cuando «ve cosas»? Que te hable de sus visiones. Que te cuente al menos una.', type: "check" },
            { text: 'No te gusta hablar de tu época durante la Gran Guerra. Fue un periodo traumático para ti. Si alguien te habla de la guerra, cambia de tema.', type: "check" },
            { text: 'Gánate la confianza de todos: pregunta a cada uno si teme a alguien esta noche.', type: "check" },
            { type: "line" },
            { text: 'A las 23:00 h, cuando <span class="char-hover">WETHERBY<img src="images/f_wetherby.jpg" class="char-hover-img" alt=""></span> se retire al Santuario, debes marcharte a solas a la Biblioteca, sin decir a nadie adónde vas y sin que nadie te vea allí. Después lee la parte «¿Qué hiciste?» Más tarde, cuando suene el gong 3 veces, podrás ir al Santuario.', type: "check" }
        ]
    },

    3: {
        title: "¿Qué hiciste durante el asesinato?",
        unlocked: false,
        code: "mesa",
        sheetKey: "capitulo3",
        items: [
            { text: 'Eres el asesino. No se lo digas a nadie. Hace dos semanas viste el Libro Mayor abierto sobre el escritorio de <span class="char-hover">WETHERBY<img src="images/f_wetherby.jpg" class="char-hover-img" alt=""></span>: «1923 — Ofrenda: patrullero Michael Nichols». Desde entonces supiste que el Gran Maestre mató a tu hermano Michael. Decidiste que ese bastardo debía morir.', type: "info" },
       	    { text: 'A las 23:00 simulaste ir a las celdas, pero entraste en la Biblioteca y te ocultaste tras la estantería de los atlas. Gracias a los planos del Archivo Municipal que consultaste hace una semana, sabías que había un pasadizo secreto que llevaba al Santuario desde allí. Bajo tu uniforme, llevabas una bayoneta Lebel de tu época de la Gran Guerra. Esperaste a que el doctor <span class="char-hover">BREWER<img src="images/f_brewer.jpg" class="char-hover-img" alt=""></span> saliera por el pasadizo, venía de darle el elixir. A las 23:05, entraste al Santuario por el pasadizo y viste a <span class="char-hover">WETHERBY<img src="images/f_wetherby.jpg" class="char-hover-img" alt=""></span> adormilado, te reconoció, sonrió y te dijo: «Es pronto aún, Inspector». No terminó de hablar, cuando le clavaste la bayoneta bajo las costillas. No hubo lucha. El reloj de <span class="char-hover">WETHERBY<img src="images/f_wetherby.jpg" class="char-hover-img" alt=""></span> se cayó y se rompió. Saliste de nuevo por la Biblioteca. Lanzaste la bayoneta desde el pasillo al Observatorio y fuiste a las Celdas. Delante de todo el mundo debes parecer el más inocente de todos, y tendrás que decir que estuviste en las Celdas todo el tiempo.', type: "info" }
        ]
    },

    4: {
        title: "Objetivos Acto II",
        unlocked: false,
        code: "agua",
        sheetKey: "capitulo4",
        items: [
            { type: "space" },
            { text: 'Lee las Instrucciones después del asesinato en voz alta. ', type: "check" },
            { text: 'Recoge el reloj (Prueba A) del bolsillo de la víctima.', type: "check" },
            { text: 'Pide al doctor <span class="char-hover">BREWER<img src="images/f_brewer.jpg" class="char-hover-img" alt=""></span> el Informe preliminar de la víctima (Prueba B).', type: "check" },
            { text: 'Pide a <span class="char-hover">PICKMAN<img src="images/f_pickman.jpg" class="char-hover-img" alt=""></span> la Prueba H. Que te hable de ese cuadro, El Banquete del Crepúsculo.', type: "check" },
            { text: 'Tienes que conseguir las Pruebas C, D, E, F y G.', type: "check" },
            { text: 'Si te preguntan, miente y di que estuviste en las Celdas todo el tiempo, por orden de <span class="char-hover">WETHERBY<img src="images/f_wetherby.jpg" class="char-hover-img" alt=""></span>.', type: "check" },
            { text: 'Sin que sea muy «evidente», orienta las sospechas hacia el doctor <span class="char-hover">BREWER<img src="images/f_brewer.jpg" class="char-hover-img" alt=""></span> (ya que la víctima fue drogada con cloral y fue el último en visitarlo para llevarle el elixir).', type: "check" },
            { text: 'Consigue los Registros del Sanatorio de <span class="char-hover">BREWER<img src="images/f_brewer.jpg" class="char-hover-img" alt=""></span> si no lo has hecho todavía.', type: "check" },
            { text: 'Pregúntale al doctor <span class="char-hover">BREWER<img src="images/f_brewer.jpg" class="char-hover-img" alt=""></span> cómo llegó al Santuario si la puerta estaba cerrada.', type: "check" },
            { text: 'Desacredita a <span class="char-hover">PICKMAN<img src="images/f_pickman.jpg" class="char-hover-img" alt=""></span> dile a todos que «es un lunático del Sanatorio».', type: "check" },
            { text: '¿Por qué <span class="char-hover">PICKMAN<img src="images/f_pickman.jpg" class="char-hover-img" alt=""></span> tiene las manos manchadas de pintura roja y azul?', type: "check" },
       	    { text: 'Interroga a cada sospechoso al menos una vez y toma notas de lo que digan. Haz el paripé.', type: "check" },
       	    { text: 'Si te preguntan por la bayoneta: di que no guardas ningún recuerdo de la guerra, detestas esa época de tu vida. Cambia de tema.', type: "check" },
            { type: "line" },
       	    { text: 'Ganas si la mayoría no te incrimina durante la votación. Tu deber es presentar las pruebas, no resolver el caso. Votarás a quién tú creas que va a votar la mayoría, para que tenga más votos en contra que tú.', type: "check" }
        ]
    }
};
