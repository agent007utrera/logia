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
            { text: 'Barnabas <span class="char-hover">CRANE<img src="images/f_crane.jpg" class="char-hover-img" alt=""></span>. Anticuario. Dueño de «Crane e Hijos, Curiosidades y Libros Raros», es el principal proveedor de la Logia.', type: "info", img: "images/f_crane.jpg" },
            { text: 'Jeremiah <span class="char-hover">NICHOLS<img src="images/f_nichols.jpg" class="char-hover-img" alt=""></span>. Inspector de Policía. Inspector del Departamento de Policía de Arkham, invitado «honorario» y representante de la ley.', type: "info", img: "images/f_nichols.jpg" },
            { text: 'Robert <span class="char-hover">PICKMAN<img src="images/f_pickman.jpg" class="char-hover-img" alt=""></span>. Pintor. Pinta sus visiones. Su exposición «Ventanas al Otro Lado» ha causado furor en Boston.', type: "info", img: "images/f_pickman.jpg" },
            { text: 'Edmund <span class="char-hover">RICE<img src="images/f_rice.jpg" class="char-hover-img" alt=""></span>. Profesor. Catedrático de «Lenguas Muertas» en la Universidad de Miskatonic. La mayor autoridad viva en manuscritos prohibidos.', type: "info", img: "images/f_rice.jpg" },
            { text: 'Abel <span class="char-hover">BREWER<img src="images/f_brewer.jpg" class="char-hover-img" alt=""></span>. Doctor. Director del Sanatorio de Arkham y héroe de la Gran Guerra.', type: "info", img: "images/f_brewer.jpg" }, 
        ]
    },

    1: {
        title: "Trasfondo",
        unlocked: true,
        items: [
            { text: "¿Quién eres?", type: "subheading" },
            { type: "space" },
            { text: 'Eres doctor, de cuarenta y nueve años. Director del Sanatorio de Arkham y antiguo cirujano militar en Argonne durante la Gran Guerra. Conoces al inspector <span class="char-hover">NICHOLS<img src="images/f_nichols.jpg" class="char-hover-img" alt=""></span> de esa época, de la 26ª División «Yankee». Tienes las manos temblorosas por la morfina que te administras desde la guerra. También tienes un talento especial para firmar certificados de defunción sin hacer muchas preguntas.', type: "info" },
            { text: 'Durante años has servido a la Logia: has dispuesto de los cuerpos de los «pacientes» que el Gran Maestre <span class="char-hover">WETHERBY<img src="images/f_wetherby.jpg" class="char-hover-img" alt=""></span> reclamaba y, por una cantidad razonable de dinero, te deshaces de los cuerpos de los sacrificios en el crematorio del Sanatorio. Hace justo un año quemaste los restos del estudiante Harlan Pierce. Detestas lo que haces, pero la morfina y tus deudas no te dejan otra salida.', type: "info" },
            { text: 'Lo único que has hecho con verdadera bondad ha sido cuidar de Robert <span class="char-hover">PICKMAN<img src="images/f_pickman.jpg" class="char-hover-img" alt=""></span>, el pintor que, hace dos años, ingresó en tu Sanatorio por sus visiones. <span class="char-hover">WETHERBY<img src="images/f_wetherby.jpg" class="char-hover-img" alt=""></span> te obligó a «preparar» a <span class="char-hover">PICKMAN<img src="images/f_pickman.jpg" class="char-hover-img" alt=""></span> administrándole extracto de loto azul (que le compras al anticuario <span class="char-hover">CRANE<img src="images/f_crane.jpg" class="char-hover-img" alt=""></span>). No sabes para qué lo está preparando exactamente, pero crees que no es para nada bueno. No permitirás que le ocurra nada malo a <span class="char-hover">PICKMAN<img src="images/f_pickman.jpg" class="char-hover-img" alt=""></span>, al que consideras como un hijo. Así que has decidido impedirlo esta noche: añadirás hidrato de cloral a la copa de brandy de <span class="char-hover">WETHERBY<img src="images/f_wetherby.jpg" class="char-hover-img" alt=""></span>, para dejarlo aturdido y arruinar lo que esté tramando sin derramar ni una sola gota de sangre.', type: "info" },
            { type: "space" },
            { type: "line" },
            { text: "Habilidad especial: Consulta médica", type: "subheading" },
            { type: "space" },
            { text: 'Una vez por persona, estando en privado con un miembro, puedes curarle 2 puntos de cordura. Puedes cobrar por la consulta, 50 dólares estaría bien. No puedes curarte a ti mismo. Coste: 1 Punto de Acción.', type: "info" },            { type: "line" },
            { text: "Actuando y vestuario", type: "subheading" },
            { type: "space" },
            { text: 'Bata blanca, maletín de médico, estetoscopio asomando del bolsillo, olor a éter y fenol. Habla con suavidad, mira a los ojos como si tomases el pulso y frota tus manos temblorosas a menudo.', type: "info" }
        ]
    },

    equipo_inicial: {
        title: "Secretos que conoces",
        unlocked: true,
        items: [
            { text: 'Por orden de <span class="char-hover">WETHERBY<img src="images/f_wetherby.jpg" class="char-hover-img" alt=""></span>, has estado administrando a <span class="char-hover">PICKMAN<img src="images/f_pickman.jpg" class="char-hover-img" alt=""></span> extracto de loto azul para prepararlo para algo que desconoces.', type: "info" },
            { text: 'Hace un año, el profesor <span class="char-hover">RICE<img src="images/f_rice.jpg" class="char-hover-img" alt=""></span> llevó a su alumno Harlan Pierce a la Sede de la Logia y se marchó. Después, supones que sacrificaron a Pierce, porque más tarde, <span class="char-hover">WETHERBY<img src="images/f_wetherby.jpg" class="char-hover-img" alt=""></span> te ordenó que certificaras que murió de «neumonía». Luego, quemaste el cuerpo de Pierce en el crematorio del Sanatorio sin hacer preguntas.', type: "info" },
            { text: 'El profesor <span class="char-hover">RICE<img src="images/f_rice.jpg" class="char-hover-img" alt=""></span> falsifica páginas del Necronomicón, que luego el anticuario <span class="char-hover">CRANE<img src="images/f_crane.jpg" class="char-hover-img" alt=""></span> las vende como si fueran auténticas (te lo contó el anticuario <span class="char-hover">CRANE<img src="images/f_crane.jpg" class="char-hover-img" alt=""></span> una noche estando borracho).', type: "info" },
            { text: 'Tú le compras el extracto de loto azul al anticuario <span class="char-hover">CRANE<img src="images/f_crane.jpg" class="char-hover-img" alt=""></span>.', type: "info" },
       	    { text: 'El inspector <span class="char-hover">NICHOLS<img src="images/f_nichols.jpg" class="char-hover-img" alt=""></span> sirvió contigo en el Argonne, en tu misma división, durante la Gran Guerra. Nunca habláis de esa época. Fue traumático para ambos.', type: "info" },
       	    { text: 'Hace dos años exactamente, <span class="char-hover">PICKMAN<img src="images/f_pickman.jpg" class="char-hover-img" alt=""></span> pintó, antes de que ocurriera, la muerte de un paciente del Sanatorio: Jonas Palmer. Aunque le contaste a la Policía que ese Jonas Palmer se había fugado.', type: "info" },
       	    { text: 'Hace una semana, consultaste en el Archivo Municipal los planos de la Sede de la Logia.', type: "info" }
        ]
    },

    2: {
        title: "Objetivos Acto I",
        unlocked: false,
        code: "ventana",
        sheetKey: "capitulo2",
        items: [
            { type: "space" },
            { text: 'Procura mantener a <span class="char-hover">PICKMAN<img src="images/f_pickman.jpg" class="char-hover-img" alt=""></span> lejos de <span class="char-hover">WETHERBY<img src="images/f_wetherby.jpg" class="char-hover-img" alt=""></span> y del Santuario. Acompáñalo de vez en cuando. Si puedes, convéncelo de que se marche antes de medianoche. Pregúntale a <span class="char-hover">PICKMAN<img src="images/f_pickman.jpg" class="char-hover-img" alt=""></span> por sus sueños recientes y alguna de sus visiones. Pídele que no hable de eso en público, podría parecer un loco.', type: "check" },
            { text: 'Si <span class="char-hover">WETHERBY<img src="images/f_wetherby.jpg" class="char-hover-img" alt=""></span> te pide que le lleves su elixir al Santuario a las 23:00, dile que lo harás.', type: "check" },
            { text: 'Durante la fiesta, sírvele a <span class="char-hover">WETHERBY<img src="images/f_wetherby.jpg" class="char-hover-img" alt=""></span> una <strong style="color:#e03c3c;">COPA DE BRANDY</strong> delante de todos: «Para calmar los nervios, Gran Maestre».', type: "check" },
            { text: 'Brinda con el inspector <span class="char-hover">NICHOLS<img src="images/f_nichols.jpg" class="char-hover-img" alt=""></span> por el tiempo que estuvisteis en el Argonne durante la Gran Guerra. Intenta recordar con él alguna batallita que otra.', type: "check" },
            { text: 'Avisa a <span class="char-hover">CRANE<img src="images/f_crane.jpg" class="char-hover-img" alt=""></span> de que <span class="char-hover">WETHERBY<img src="images/f_wetherby.jpg" class="char-hover-img" alt=""></span> sospecha de sus falsificaciones de las páginas del Necronomicón; ofrécete a «guardar el secreto» a cambio de algo de dinero.', type: "check" },
            { text: 'Si alguien quiere los registros del Sanatorio, tendrá que darte a cambio <strong style="color:#e03c3c;">EXTRACTO DE LOTO AZUL</strong>. Tienes que conseguir el extracto de loto azul como sea, porque <span class="char-hover">PICKMAN<img src="images/f_pickman.jpg" class="char-hover-img" alt=""></span> no puede parar su tratamiento de golpe, tiene que ser de manera progresiva. De lo contrario, podría afectar a su mente.', type: "check" },
            { text: 'Si alguien te chantajea sobre irregularidades en tu Sanatorio, ofrece algo de dinero para que mantenga la boca cerrada.', type: "check" },
            { text: 'Atiende «consultas médicas» esporádicas para ganar algo de dinero y averiguar secretos.', type: "check" },
            { type: "line" },
       	    { text: 'A las 23:00 h, cuando <span class="char-hover">WETHERBY<img src="images/f_wetherby.jpg" class="char-hover-img" alt=""></span> se retire al Santuario, debes marcharte a solas al Comedor, sin decir a nadie adónde vas y sin que nadie te vea allí. Después lee la parte «¿Qué hiciste?» Más tarde, cuando suene el gong 3 veces, podrás ir al Santuario.', type: "info" }
        ]
    },

    3: {
        title: "¿Qué hiciste durante el asesinato?",
        unlocked: false,
        code: "mesa",
        sheetKey: "capitulo3",
        items: [
       	    { text: 'A las 23:00, estabas preparando el elixir en el Comedor. Después fuiste al Santuario por el pasadizo secreto de la Biblioteca para llevar el elixir a <span class="char-hover">WETHERBY<img src="images/f_wetherby.jpg" class="char-hover-img" alt=""></span>. Conoces ese pasadizo secreto por los planos antiguos que consultaste en el Archivo Municipal hace una semana. Cuando llegaste al Santuario, <span class="char-hover">WETHERBY<img src="images/f_wetherby.jpg" class="char-hover-img" alt=""></span> estaba adormilado y farfulló: «Pronto seré joven». Luego, regresaste al Comedor y no te moviste de ahí. Ahora espera a que suene el gong 3 veces.', type: "info" }
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
            { text: 'Examina el cuerpo y el charco de sangre para escribir tu <strong style="color:#e03c3c;">INFORME PRELIMINAR</strong>. Cuando lo tengas, entrégaselo al inspector <span class="char-hover">NICHOLS<img src="images/f_nichols.jpg" class="char-hover-img" alt=""></span>. Herida penetrante bajo las costillas, hoja compatible con un arma blanca alargada, como una bayoneta; hay restos de cloral en la sangre (no mucha cantidad); muerte instantánea hacia las 23:05.', type: "check" },
            { text: 'Niega haber estado en el Santuario. Si se demuestra, admite que <span class="char-hover">WETHERBY<img src="images/f_wetherby.jpg" class="char-hover-img" alt=""></span> te pidió que le llevaras el elixir y que seguía vivo cuando te marchaste.', type: "check" },
            { text: 'Sobre el cloral: di que <span class="char-hover">WETHERBY<img src="images/f_wetherby.jpg" class="char-hover-img" alt=""></span> te lo pidió «para calmar los nervios» (eso es una media verdad). El cloral no pudo haberlo matado, la dosis era baja, solamente para adormecerlo.', type: "check" },
            { text: 'Si el inspector <span class="char-hover">NICHOLS<img src="images/f_nichols.jpg" class="char-hover-img" alt=""></span> te pregunta cómo llegaste al Santuario, cuéntale lo del pasadizo secreto en la Biblioteca (lo sabes por los planos que consultaste en el Archivo Municipal). Dile que sospechas que alguien más conocía el pasadizo: el asesino.', type: "check" },
       	    { text: 'Protege a <span class="char-hover">PICKMAN<img src="images/f_pickman.jpg" class="char-hover-img" alt=""></span>: si lo acusan o lo insultan, defiéndelo.', type: "check" },
       	    { text: '¿Por qué <span class="char-hover">PICKMAN<img src="images/f_pickman.jpg" class="char-hover-img" alt=""></span> tiene las manos manchadas de pintura roja y azul?', type: "check" },
       	    { text: 'Tienes sospechas de <span class="char-hover">RICE<img src="images/f_rice.jpg" class="char-hover-img" alt=""></span> y <span class="char-hover">CRANE<img src="images/f_crane.jpg" class="char-hover-img" alt=""></span> (por las páginas falsificadas del Necronomicón).', type: "check" },
       	    { text: 'Si te preguntan por la bayoneta, di que cualquiera pudo haberla comprado.', type: "check" },
       	    { text: 'Consigue el <strong style="color:#e03c3c;">EXTRACTO DE LOTO AZUL</strong> si no lo has hecho todavía.', type: "check" }
        ]
    }

};
