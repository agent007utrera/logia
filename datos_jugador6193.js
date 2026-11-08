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
            { text: 'Eres profesor en la Universidad de Miskatonic, de cincuenta y cuatro años, viudo. Catedrático de Lenguas Muertas y Arqueología Prohibida. Con una reputación académica impecable y una vida que descansa sobre dos secretos:', type: "info" },
            { text: 'El primero: eres el único hombre de Nueva Inglaterra capaz de traducir el Códice del Crepúsculo, el manuscrito que guía los ritos de la Logia, y llevas dos años traduciéndolo para el Gran Maestre Silas <span class="char-hover">WETHERBY<img src="images/f_wetherby.jpg" class="char-hover-img" alt=""></span>, a cambio de una cátedra vitalicia.', type: "info" },
            { text: 'El segundo: para sostener tu estilo de vida y tus deudas, falsificas «páginas» del Necronomicón que tu socio el anticuario <span class="char-hover">CRANE<img src="images/f_crane.jpg" class="char-hover-img" alt=""></span> vende a coleccionistas crédulos (con tinta de anilina que tú envejeces con té y humo).', type: "info" },
            { text: 'Hace justo un año, tu mejor alumno, Harlan Pierce, descubrió que estabas traduciendo el Códice que había robado <span class="char-hover">WETHERBY<img src="images/f_wetherby.jpg" class="char-hover-img" alt=""></span> de la Biblioteca de la Universidad de Miskatonic. Pierce te amenazó con denunciarte. Así que, aterrado, se lo contaste a <span class="char-hover">WETHERBY<img src="images/f_wetherby.jpg" class="char-hover-img" alt=""></span>. Por orden del Gran Maestre, llevaste a tu alumno Pierce a la Sede de la Logia en la víspera de Todos los Santos de 1925. Después, tú te marchaste y no sabes qué ocurrió, lo único que sabes es que no se supo nada más de tu alumno, desapareció esa noche. Desde entonces no has podido dormir una noche entera.', type: "info" },
            { text: 'Anoche, tras releer el Códice, has entendido por fin el plan del Gran Maestre <span class="char-hover">WETHERBY<img src="images/f_wetherby.jpg" class="char-hover-img" alt=""></span>, y sabes que el «sucesor» será, en realidad, una víctima. <span class="char-hover">WETHERBY<img src="images/f_wetherby.jpg" class="char-hover-img" alt=""></span> quiere realizar un ritual de «Transposición» (su mente en el cuerpo de otro). No soportarías otra desaparición más. Has escrito una nota anónima de advertencia para <span class="char-hover">WETHERBY<img src="images/f_wetherby.jpg" class="char-hover-img" alt=""></span> a ver si cambia de idea, y quieres avisar al pintor <span class="char-hover">PICKMAN<img src="images/f_pickman.jpg" class="char-hover-img" alt=""></span>, que crees que será su «elegido» para la «Transposición», aunque no estás seguro y podría ser otro miembro.', type: "info" },
            { type: "space" },
            { type: "line" },
            { text: "Habilidad especial: Traducción", type: "subheading" },
            { type: "space" },
            { text: 'Cualquier jugador puede pedirte que le traduzcas un Tomo Prohibido de la Biblioteca y, por 50 dólares, puedes hacerlo «con autoridad académica». Puedes traducirlo fielmente o con un pequeño matiz a tu favor. Tú decides. Solamente has traducido los Tomos I y II. Para traducir el Tomo III necesitas el Espejo de Nitocris. Las traducciones las tienes en tu inventario.', type: "info" },
            { type: "line" },
            { text: "Actuando y vestuario", type: "subheading" },
            { type: "space" },
       	    { text: 'Chaqué de profesor algo raído, gafas redondas, pipa y una cartera llena de papeles. Gesticula al explicar, corrige el lenguaje de los demás y, si puedes, huele a tabaco de pipa y a polvo de libros viejos.', type: "info" }
        ]
    },

    equipo_inicial: {
        title: "Secretos que conoces",
        unlocked: true,
        items: [
            { text: 'Según el Códice, esta noche el Gran Maestre <span class="char-hover">WETHERBY<img src="images/f_wetherby.jpg" class="char-hover-img" alt=""></span> realizará un ritual de Transposición, en el que la mente del Receptáculo morirá (el cuerpo del receptáculo recibirá la mente del Gran Maestre). Sospechas que va a ser el cuerpo de <span class="char-hover">PICKMAN<img src="images/f_pickman.jpg" class="char-hover-img" alt=""></span>. No lo reveles sin ganar nada a cambio.', type: "info" },
            { text: 'Sabes que el doctor <span class="char-hover">BREWER<img src="images/f_brewer.jpg" class="char-hover-img" alt=""></span> hace desaparecer los cuerpos de los sacrificios de la Logia en el crematorio del Sanatorio.', type: "info" },
            { text: 'El anticuario <span class="char-hover">CRANE<img src="images/f_crane.jpg" class="char-hover-img" alt=""></span> vende falsificaciones de páginas del Necronomicón que tú fabricas. También sabes que <span class="char-hover">CRANE<img src="images/f_crane.jpg" class="char-hover-img" alt=""></span> le debe mucho dinero a un marinero de Innsmouth.', type: "info" },
            { text: 'El inspector <span class="char-hover">NICHOLS<img src="images/f_nichols.jpg" class="char-hover-img" alt=""></span> es corrupto. Él recibe dinero de la Logia.', type: "info" },
       	    { text: 'El pintor <span class="char-hover">PICKMAN<img src="images/f_pickman.jpg" class="char-hover-img" alt=""></span> y tu alumno Harlan Pierce eran íntimos amigos y compartían estudio.', type: "info" }
        ]
    },

    2: {
        title: "Objetivos Acto I",
        unlocked: false,
        code: "ventana",
        sheetKey: "capitulo2",
        items: [
            { type: "space" },
            { text: 'Habla con <span class="char-hover">CRANE<img src="images/f_crane.jpg" class="char-hover-img" alt=""></span>: crees que <span class="char-hover">WETHERBY<img src="images/f_wetherby.jpg" class="char-hover-img" alt=""></span> sospecha que la página del Necronomicón, que tú fabricaste y que él le vendió, es una falsificación. Tenéis que mentir y dar la misma versión los dos: «la página es auténtica; la tinta es del siglo VIII». Pídele a <span class="char-hover">CRANE<img src="images/f_crane.jpg" class="char-hover-img" alt=""></span> algo de dinero si quiere que tú mientas y des esa versión.', type: "check" },
            { text: 'Pregunta a <span class="char-hover">WETHERBY<img src="images/f_wetherby.jpg" class="char-hover-img" alt=""></span> si tú vas a ser su sucesor.', type: "check" },
            { text: 'Si <span class="char-hover">WETHERBY<img src="images/f_wetherby.jpg" class="char-hover-img" alt=""></span> te pide que termines de traducir el Códice, dile que te falta el último Tomo Prohibido, el número III. Para terminar de traducirlo, necesitas el Espejo de Nitocris y mirar su reverso. Averigua si alguien lo tiene. Consigue ese espejo como sea.', type: "check" },
            { text: 'Introduce, sin que nadie te vea, la nota anónima que tienes en tu inventario en el bolsillo de <span class="char-hover">WETHERBY<img src="images/f_wetherby.jpg" class="char-hover-img" alt=""></span>. Cuando estés hablando con él a solas, entrégaselo sin que se dé cuenta.', type: "check" },
            { text: 'Convence a <span class="char-hover">PICKMAN<img src="images/f_pickman.jpg" class="char-hover-img" alt=""></span> para hablar en privado con él. Dile: «Es urgente, es sobre tu destino». Puedes comentarle en privado tus sospechas a cambio de dinero.', type: "check" },
            { text: 'Pregúntale al doctor <span class="char-hover">BREWER<img src="images/f_brewer.jpg" class="char-hover-img" alt=""></span> qué le ocurrió a tu alumno Harlan Pierce hace un año. Tú lo trajiste a la Logia, pero no sabes nada más. No sabes qué le hicieron.', type: "check" },
            { text: 'Si el inspector <span class="char-hover">NICHOLS<img src="images/f_nichols.jpg" class="char-hover-img" alt=""></span> te pregunta por tu alumno Harlan Pierce, dile que no sabes nada de él desde hace un año. Miéntele, dile que crees que se marchó a Europa a estudiar o algo así.', type: "check" },
            { text: 'Ofrécete para traducir los Tomos Prohibidos a todos los jugadores, por unos 50$ cada uno. Las traducciones están en tu inventario.', type: "check" },
            { type: "line" },
       	    { text: 'A las 23:00 h, cuando <span class="char-hover">WETHERBY<img src="images/f_wetherby.jpg" class="char-hover-img" alt=""></span> se retire al Santuario, debes marcharte a solas al Vestíbulo, sin decir a nadie adónde vas y sin que nadie te vea allí. Después lee la parte «¿Qué hiciste?» Más tarde, cuando suene el gong 3 veces, podrás ir al Santuario.', type: "check" }
        ]
    },

    3: {
        title: "¿Qué hiciste durante el asesinato?",
        unlocked: false,
        code: "mesa",
        sheetKey: "capitulo3",
        items: [
       	    { text: 'Estuviste en el Vestíbulo hasta que sonó el gong. Estuviste traduciendo el Tomo Prohibido III del Códice: «Si la sangre del Maestro cae antes de la hora señalada, su espíritu quedará atado a esta casa hasta que la verdad sea dicha». Puedes vender esa traducción también si quieres.', type: "info" }
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
            { text: 'Consigue el Espejo de Nitocris, si aún no lo has hecho.', type: "check" },
            { text: 'No cuentes que avisaste a <span class="char-hover">PICKMAN<img src="images/f_pickman.jpg" class="char-hover-img" alt=""></span>, ni que conocías el ritual de Transposición. Aunque si te acorralan, tendrás que confesar.', type: "check" },
            { text: 'Si te acusan con la nota anónima (Prueba D): puedes decir que fue un gesto desesperado para frenar a <span class="char-hover">WETHERBY<img src="images/f_wetherby.jpg" class="char-hover-img" alt=""></span>; di que «presentías» que iba a ocurrir algo malo, aunque no sabías exactamente qué iba a pasar.', type: "check" },
            { text: 'Acusa al doctor <span class="char-hover">BREWER<img src="images/f_brewer.jpg" class="char-hover-img" alt=""></span>: es el único con conocimiento de sedantes y fue el último en dar el elixir a <span class="char-hover">WETHERBY<img src="images/f_wetherby.jpg" class="char-hover-img" alt=""></span> en el Santuario.', type: "check" },
            { text: 'Exige a <span class="char-hover">CRANE<img src="images/f_crane.jpg" class="char-hover-img" alt=""></span> silencio con el tema de las falsificaciones del Necronomicón: si tú caes, él caerá contigo también. Amenázalo.', type: "check" },
            { text: 'Evita que <span class="char-hover">PICKMAN<img src="images/f_pickman.jpg" class="char-hover-img" alt=""></span> sufra: si alguien lo acusa, defiéndelo.', type: "check" },
            { text: '¿Por qué <span class="char-hover">PICKMAN<img src="images/f_pickman.jpg" class="char-hover-img" alt=""></span> tiene las manos manchadas de pintura roja y azul?', type: "check" },
       	    { text: 'Convence al menos a dos hermanos de que tú serías el mejor sucesor para ser el Gran Maestre de la Logia (puedes pagar por ello).', type: "check" }
        ]
    }
};
