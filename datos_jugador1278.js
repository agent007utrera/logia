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
            { text: 'Jeremiah <span class="char-hover">NICHOLS<img src="images/f_nichols.jpg" class="char-hover-img" alt=""></span>. Inspector de Policía. Inspector del Departamento de Policía de Arkham, invitado «honorario» y representante de la ley.', type: "info", img: "images/f_nichols.jpg" },
            { text: 'Robert <span class="char-hover">PICKMAN<img src="images/f_pickman.jpg" class="char-hover-img" alt=""></span>. Pintor. Pinta sus visiones. Su exposición «Ventanas al Otro Lado» ha causado furor en Boston.', type: "info", img: "images/f_pickman.jpg" },
            { text: 'Edmund <span class="char-hover">RICE<img src="images/f_rice.jpg" class="char-hover-img" alt=""></span>. Profesor. Catedrático de «Lenguas Muertas» en la Universidad de Miskatonic. La mayor autoridad viva en manuscritos prohibidos.', type: "info", img: "images/f_rice.jpg" }
        ]
    },

    1: {
        title: "Trasfondo",
        unlocked: true,
        items: [
            { text: "¿Quién eres?", type: "subheading" },
            { type: "space" },
            { text: 'Eres el Gran Maestre de la Logia del Crepúsculo de Plata, la sociedad más respetada —y más temida— de Arkham. Aparentas sesenta años; muy pocos sospechan que llevas muchos más al frente de la Logia. Benefactor de la Universidad de Miskatonic, dueño de la Sede de French Hill y de una fortuna que nadie ha visto menguar, eres un hombre que siempre sabe más de lo que dice.', type: "info" },
            { text: 'El secreto de tu longevidad es el Prisma de Plata, una joya antigua que has alimentado cada víspera de Todos los Santos con una «Ofrenda». Pero el Prisma ya no basta: tu cuerpo se agota y lo sabes. Esta noche, a medianoche, realizarás la Transposición del Crepúsculo: te abrirás las venas sobre el Prisma y tu espíritu despertará en un cuerpo joven y receptivo. Has elegido a Robert <span class="char-hover">PICKMAN<img src="images/f_pickman.jpg" class="char-hover-img" alt=""></span>, pintor y soñador, cuya mente lleva meses preparándose con extracto de loto azul que el doctor <span class="char-hover">BREWER<img src="images/f_brewer.jpg" class="char-hover-img" alt=""></span> le da en su «tratamiento» en el Sanatorio mental. Ni <span class="char-hover">PICKMAN<img src="images/f_pickman.jpg" class="char-hover-img" alt=""></span> ni los demás saben nada.', type: "info" },
            { text: 'Para disimular, has convocado al Círculo Interior con el pretexto de anunciar un sucesor. Cada uno de ellos cree ser el elegido. Sabes que todos te deben algo: en el Libro Mayor, es donde anotas cada favor, cada deuda y cada pecado. Sabes que la lealtad por miedo es frágil, y últimamente hueles la traición en el aire: sospechas que alguien te está engañando.', type: "info" },
            { text: 'Vas a ser la víctima esta noche. Cuando hayas cumplido tus objetivos, te retirarás al Santuario y caerás muerto. En el Acto II, volverás como el periodista Rex Simmons (sobre II).', type: "info" },
            { type: "space" },
            { type: "line" },
            { text: "Habilidad especial: Tributo", type: "subheading" },
            { type: "space" },
            { text: 'Como Gran Maestre puedes exigir a cada hermano 50 dólares como «cuota de la Logia» (una vez por persona). Quien se niegue pierde toda opción de ser considerado sucesor.', type: "info" },
            { type: "line" },
            { text: "Actuando y vestuario", type: "subheading" },
            { type: "space" },
            { text: 'Silas Wetherby: Ven de chaqué o de traje negro de etiqueta, con la insignia de la Logia (un triángulo plateado en la solapa), bastón y un reloj de bolsillo bien visible. Habla despacio, con cortesía exquisita y una sonrisa que no llegue a los ojos. Eres el anfitrión: recibes, presentas y controlas.', type: "info" },
       	    { text: 'Rex Simmons: Traje gris de reportero arrugado, sombrero de fieltro con una tarjeta «PRENSA» en la cinta, libreta, lápiz y una cámara de fotos. Habla rápido, pregunta siempre «¿y por qué?» y mira por encima del hombro del que te habla. ', type: "info" }
        ]
    },

    equipo_inicial: {
        title: "Secretos que conoces",
        unlocked: true,
        items: [
            { text: 'El ritual de Transposición con <span class="char-hover">PICKMAN<img src="images/f_pickman.jpg" class="char-hover-img" alt=""></span>, <strong style="color:#e03c3c;">NO</strong> lo reveles bajo ningún concepto.', type: "info" },
            { text: 'En 1923, un entrometido siguió a un sospechoso hasta la Sede: fue la Ofrenda de ese año. Fue sacrificado. No recuerdas su nombre.', type: "info" },
            { text: 'El doctor <span class="char-hover">BREWER<img src="images/f_brewer.jpg" class="char-hover-img" alt=""></span> hace desaparecer los cuerpos en el crematorio del Sanatorio. Su Ofrenda de 1924 fue un paciente suyo, Jonas P.', type: "info" },
            { text: 'El profesor <span class="char-hover">RICE<img src="images/f_rice.jpg" class="char-hover-img" alt=""></span> llevó a un alumno suyo, Harlan Pierce, a la Sede en la víspera de 1925: fue la Ofrenda de ese año.', type: "info" },
            { text: 'El anticuario <span class="char-hover">CRANE<img src="images/f_crane.jpg" class="char-hover-img" alt=""></span> te vendió una página del «Necronomicón» por 1.000 dólares. La tinta es sospechosa: crees que es falso.', type: "info" },
            { text: 'El inspector <span class="char-hover">NICHOLS<img src="images/f_nichols.jpg" class="char-hover-img" alt=""></span> cobra de la Logia «para mirar hacia otro lado». Es corrupto.', type: "info" },
       	    { text: 'El pintor <span class="char-hover">PICKMAN<img src="images/f_pickman.jpg" class="char-hover-img" alt=""></span> pinta lo que sueña, y lo que pinta tiene la costumbre de cumplirse.', type: "info" }
        ]
    },

    2: {
        title: "Objetivos Acto I",
        unlocked: false,
        code: "ventana",
        sheetKey: "capitulo2",
        items: [
            { type: "space" },
            { text: 'Lee la Introducción en voz alta en el Salón, cuando hayan llegado todos.', type: "check" },
            { text: 'Reúnete en privado con cada hermano y hazles creer a cada uno que podría ser tu sucesor. A <span class="char-hover">PICKMAN<img src="images/f_pickman.jpg" class="char-hover-img" alt=""></span> dile que tienes «un destino especial» para él. Mira a ver quién se lo cree. Pídele que te cuente una de sus visiones.', type: "check" },
            { text: 'Cobra el Tributo (50 dólares) a todos los hermanos que puedas.', type: "check" },
            { text: 'Pide a <span class="char-hover">PICKMAN<img src="images/f_pickman.jpg" class="char-hover-img" alt=""></span> que pinte el Sello del Crepúsculo en la puerta del Santuario sobre las 23:00h.', type: "check" },
            { text: 'Dile al profesor <span class="char-hover">RICE<img src="images/f_rice.jpg" class="char-hover-img" alt=""></span> que termine su traducción del Códice. Exígele que termine de traducir el último tomo que queda antes de medianoche.', type: "check" },
            { text: 'Dile a <span class="char-hover">CRANE<img src="images/f_crane.jpg" class="char-hover-img" alt=""></span> que sospechas que la página del Necronomicón que te vendió es una falsificación, y que debe demostrarte su autenticidad antes de medianoche.', type: "check" },
            { text: 'Ordena al inspector <span class="char-hover">NICHOLS<img src="images/f_nichols.jpg" class="char-hover-img" alt=""></span> que vigile el Jardín sobre las 23:00, cuando tú te retires al Santurario. Que nadie entre ni salga por la verja. Prométele 100 dólares «por las molestias».', type: "check" },
            { text: 'Pide al doctor <span class="char-hover">BREWER<img src="images/f_brewer.jpg" class="char-hover-img" alt=""></span> que te lleve el elixir al Santuario a las 23:00. Acepta de él una copa de brandy si te la ofrece durante la velada.', type: "check" },
            { type: "line" },
       	    { text: 'Hacia las 23:00 anuncia que te retiras al Santuario y que acudan allí cuando suene el gong 3 veces. Guarda en tu bolsillo interior la Prueba A (reloj de bolsillo detenido a las 23:05). Si alguien te ha colado una nota en el bolsillo, no la saques ni la leas. Más tarde, tendrás que caerte muerto en el Santuario, y entonces sonara el gong 3 veces.', type: "info" }
        ]
    },

    3: {
        title: "¿Qué hiciste durante el asesinato?",
        unlocked: false,
        code: "mesa",
        sheetKey: "capitulo3",
        items: [
       	    { text: 'Ahora eres REX SIMMONS. Reportero del Arkham Advertiser, 29 años. Te has colado en la Logia porque estás investigando las desapariciones de años anteriores durante la víspera de Todos los Santos. Entraste en el Estudio de <span class="char-hover">WETHERBY<img src="images/f_wetherby.jpg" class="char-hover-img" alt=""></span>, forzando la cerradura y hojeando el Libro Mayor. Leíste entradas de 1923 («Ofrenda: Michael N.»), 1924 («Ofrenda: Jonas P.») y 1925 («Ofrenda: Harlan P.»), y la de esta noche: 1926 («Transposición. Receptáculo: R. P.»). No sabes qué significa. A las 23:10 entraste en el Santuario con todos y te presentaste.', type: "info" }
        ]
    },

    4: {
        title: "Objetivos Acto II",
        unlocked: false,
        code: "agua",
        sheetKey: "capitulo4",
        items: [
            { type: "space" },
            { text: 'No eres el asesino. Descubre quién mató a <span class="char-hover">WETHERBY<img src="images/f_wetherby.jpg" class="char-hover-img" alt=""></span>.', type: "check" },
            { text: 'Crees que <span class="char-hover">WETHERBY<img src="images/f_wetherby.jpg" class="char-hover-img" alt=""></span> planeaba algo esta noche, aunque no sabes el qué.', type: "check" },
            { text: 'Pregunta a <span class="char-hover">PICKMAN<img src="images/f_pickman.jpg" class="char-hover-img" alt=""></span> por qué <span class="char-hover">WETHERBY<img src="images/f_wetherby.jpg" class="char-hover-img" alt=""></span> tenía «planes» para él.', type: "check" },
            { text: 'Defiende a tu fuente: si alguien te acusa de allanamiento, niégalo todo.', type: "check" },
       	    { text: 'Habla con todo el mundo. Saca información.', type: "check" }
        ]
    }
};
