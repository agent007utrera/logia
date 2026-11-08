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
            { text: 'Edmund <span class="char-hover">RICE<img src="images/f_rice.jpg" class="char-hover-img" alt=""></span>. Profesor. Catedrático de «Lenguas Muertas» en la Universidad de Miskatonic. La mayor autoridad viva en manuscritos prohibidos.', type: "info", img: "images/f_rice.jpg" },
            { text: 'Robert <span class="char-hover">PICKMAN<img src="images/f_pickman.jpg" class="char-hover-img" alt=""></span>. Pintor. Pinta sus visiones. Su exposición «Ventanas al Otro Lado» ha causado furor en Boston.', type: "info", img: "images/f_pickman.jpg" }
        ]
    },

    1: {
        title: "Trasfondo",
        unlocked: true,
        items: [
            { text: "¿Quién eres?", type: "subheading" },
            { type: "space" },
            { text: 'Eres pintor de visiones. Tienes treinta y dos años. Tus cuadros —ventanas a ciudades de torres inclinadas y cielos con demasiadas lunas— se venden bien en Boston. Lo que tus admiradores no saben es que tú no los inventas: los ves realmente en tus visiones. Hace dos años, cuando las visiones te impedían dormir, ingresaste en el Sanatorio Mental de Arkham, donde el doctor <span class="char-hover">BREWER<img src="images/f_brewer.jpg" class="char-hover-img" alt=""></span> te trató con paciencia infinita (y con algunos extractos que a veces te dejaban la mente en blanco).', type: "info" },
            { text: 'Tu mecenas es el Gran Maestre Silas <span class="char-hover">WETHERBY<img src="images/f_wetherby.jpg" class="char-hover-img" alt=""></span>: pagó tu estudio, tus lienzos y tu exposición. Se lo debes todo y le tienes un cariño casi filial, es como un padre para ti. <span class="char-hover">WETHERBY<img src="images/f_wetherby.jpg" class="char-hover-img" alt=""></span> te ha dicho que esta noche tiene «un destino especial» reservado para ti.', type: "info" },
            { text: 'Hace tres noches, en trance, pintaste el cuadro «El Banquete del Crepúsculo»: cuatro hombres en una mesa, una silla vacía en la cabecera, una luna doble en la ventana y, detrás de la silla, una figura alta con un abrigo largo y una hoja de acero con forma de cruz. No sabes qué significa. No se lo has enseñado a nadie.', type: "info" },
            { text: 'Tu mejor amigo, Harlan Pierce, con quien compartiste estudio, desapareció hace un año. A menudo, sueñas con el culpable de su desaparición: tiene pipa humeante y gafas.', type: "info" },
            { type: "space" },
            { type: "line" },
            { text: "Habilidad especial: Visiones", type: "subheading" },
            { type: "space" },
            { text: 'Puedes decirle a otro jugador una de tus Visiones a cambio de 50 dólares cada una, leyéndola en voz baja con tono de trance. Tienes cinco y puedes contarlas durante los dos actos (no repitas ninguna):<br>◆ «Alguien caerá dos veces: primero su cuerpo, luego su alma».<br>◆ «La sombra que mata traerá la muerte a esta casa».<br>◆ «El frío del Prisma duerme en un lugar que no le corresponde».<br>◆ «Sueño servido en una copa».<br>◆ «Hay una advertencia escrita que nadie quiso leer».', type: "info" },
            { type: "line" },
            { text: "Actuando y vestuario", type: "subheading" },
            { type: "space" },
       	    { text: 'Chaqueta de terciopelo, pañuelo de seda, camisa arrugada. Quédate mirando como si vieras algo detrás de los demás. Habla con pausas. Llevas una carpeta grande con bocetos.', type: "info" }
        ]
    },

    equipo_inicial: {
        title: "Secretos que conoces",
        unlocked: true,
        items: [
            { text: 'El estudiante Harlan Pierce era tu amigo y desapareció hace un año exactamente. Sospechas que el profesor <span class="char-hover">RICE<img src="images/f_rice.jpg" class="char-hover-img" alt=""></span> tiene algo que ver con su desaparición. Lo ves en sueños (pipa humeante, gafas).', type: "info" },
            { text: 'Encontraste frascos de extracto de loto azul en la consulta del doctor <span class="char-hover">BREWER<img src="images/f_brewer.jpg" class="char-hover-img" alt=""></span> y te sientes muy «apagado» desde hace meses. Crees que te ha estado administrando eso.', type: "info" },
            { text: 'Tu cuadro «El Banquete del Crepúsculo» lo llevas esta noche entre tus bocetos, es muy importante para ti, NO LO VENDAS. También llevas el cuadro «Ventana a ciudades de torres inclinadas y cielos con demasiadas lunas», ése sí puedes venderlo.', type: "info" },
       	    { text: 'Hace dos años exactamente, tú pintaste, antes de que ocurriera, la muerte de un paciente del Sanatorio.', type: "info" }
        ]
    },

    2: {
        title: "Objetivos Acto I",
        unlocked: false,
        code: "ventana",
        sheetKey: "capitulo2",
        items: [
            { type: "space" },
            { text: 'Si <span class="char-hover">WETHERBY<img src="images/f_wetherby.jpg" class="char-hover-img" alt=""></span> te pide que hagas algo, dile que lo harás.', type: "check" },
            { text: 'Pregunta a <span class="char-hover">WETHERBY<img src="images/f_wetherby.jpg" class="char-hover-img" alt=""></span> qué significa que él tiene reservado «un destino especial» para ti.', type: "check" },
            { text: 'Dile al doctor <span class="char-hover">BREWER<img src="images/f_brewer.jpg" class="char-hover-img" alt=""></span> que has tenido nuevas visiones. Si te pide que te marches de allí, dile que no lo harás. Rechaza cualquier bebida o líquido que el doctor <span class="char-hover">BREWER<img src="images/f_brewer.jpg" class="char-hover-img" alt=""></span> te ofrezca: ya no te fías de él.', type: "check" },
            { text: 'Si el profesor <span class="char-hover">RICE<img src="images/f_rice.jpg" class="char-hover-img" alt=""></span> te invita a ir a algún sitio con él, acepta. En privado, dile al profesor <span class="char-hover">RICE<img src="images/f_rice.jpg" class="char-hover-img" alt=""></span> que sueñas con el que fuera su alumno, el desaparecido Harlan Pierce. Durante el sueño Pierce «está mirando fijamente a una persona con pipa y gafas». Pídele explicaciones. ¿Qué cree él que puede significar ese sueño?', type: "check" },
            { text: 'Pide al inspector <span class="char-hover">NICHOLS<img src="images/f_nichols.jpg" class="char-hover-img" alt=""></span> el Expediente del caso de desaparición de tu amigo Harlan Pierce. Tienes que conseguirlo sea como sea. Pídele también que reabra el caso.', type: "check" },
            { text: 'Si alguien te pide comprar algunos de tus cuadros, solamente lo harás a cambio del Expediente Policial de tu amigo Harlan Pierce. Recuerda que puedes vender el cuadro de «Ventana a ciudades de torres inclinadas», NUNCA PODRÁS VENDER el cuadro de «El Banquete del Crepúsculo».', type: "check" },
            { type: "line" },
            { text: 'Vende todas las visiones que puedas (una por persona, y sin repetir). Tú eliges qué vision decirle a cada uno:', type: "info" },
            { text: '◆	«Alguien caerá dos veces: primero su cuerpo, luego su alma».', type: "check" },
            { text: '◆	«La sombra que mata traerá la muerte a esta casa».', type: "check" },
            { text: '◆	«El frío del Prisma duerme en un lugar que no le corresponde».', type: "check" },
            { text: '◆	«Sueño servido en una copa».', type: "check" },
            { text: '◆	«Hay una advertencia escrita que nadie quiso leer».', type: "check" },
            { type: "line" },
       	    { text: 'A las 23:00 h, cuando <span class="char-hover">WETHERBY<img src="images/f_wetherby.jpg" class="char-hover-img" alt=""></span> se retire al Santuario, debes marcharte a solas al Observatorio, sin decir a nadie adónde vas y sin que nadie te vea allí. Después lee la parte «¿Qué hiciste?» Más tarde, cuando suene el gong 3 veces, podrás ir al Santuario.', type: "check" }
        ]
    },

    3: {
        title: "¿Qué hiciste durante el asesinato?",
        unlocked: false,
        code: "mesa",
        sheetKey: "capitulo3",
        items: [

	{ text: 'A las 23:00 estabas <a href="#" style="color:#9fd4ff;" onclick="abrirVideo(\'videos/puerta.mp4\'); return false;">🎬 pintando el Sello en la puerta del Santuario 🎬</a> como te pidió <span class="char-hover">WETHERBY<img src="images/f_wetherby.jpg" class="char-hover-img" alt=""></span> (por eso tienes las manos manchadas de pintura azul y roja). Después fuiste al Observatorio y por la ventana viste a <span class="char-hover">CRANE<img src="images/f_crane.jpg" class="char-hover-img" alt=""></span> en el Jardín hablando con un hombre que parecía un pescador o un marinero. Después alguien lanzó desde la puerta una bayoneta dentro del Observatorio, tuviste miedo y tiraste la bayoneta por la ventana hacia el Jardín.', type: "info" }

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
            { text: 'Entrega tu cuadro «El Banquete del Crepúsculo» (Prueba H) al inspector <span class="char-hover">NICHOLS<img src="images/f_nichols.jpg" class="char-hover-img" alt=""></span> cuando te lo pida y explícale cada detalle: la figura de abrigo largo, la hoja en cruz, la silla vacía, la luna doble («el Gran Maestre caerá dos veces»).', type: "check" },
            { text: 'Consigue el Expediente policial de tu amigo Harlan Pierce si no lo tienes todavía.', type: "check" },
            { text: 'Si alguien te desacredita (llamándote «lunático del sanatorio» por ejemplo), enfréntate a él diciendo que debe respetarte, que eres un gran artista.', type: "check" },
            { text: 'Cuando alguien afirme haber estado en el Jardín, cuenta que desde el Observatorio: solamente viste a <span class="char-hover">CRANE<img src="images/f_crane.jpg" class="char-hover-img" alt=""></span> y al marinero.', type: "check" },
            { text: 'Enfréntate al doctor <span class="char-hover">BREWER<img src="images/f_brewer.jpg" class="char-hover-img" alt=""></span>, grítale: «Sé lo que me estabas administrando. Extracto de Loto Azul». Exige la verdad. ¿Por qué te administraba eso?', type: "check" },
            { text: 'Exige al profesor <span class="char-hover">RICE<img src="images/f_rice.jpg" class="char-hover-img" alt=""></span> la verdad sobre la desaparición de tu amigo, el estudiante Harlan Pierce. Que te cuente realmente qué pasó con él. Él sabe más de lo que cuenta.', type: "check" },
       	    { text: 'Sientes que el Prisma de Plata que hay en el Santuario no es el verdadero. Hazlo saber a todos.', type: "check" }
        ]
    }
};
