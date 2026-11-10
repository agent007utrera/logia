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
            { text: 'Jeremiah <span class="char-hover">NICHOLS<img src="images/f_nichols.jpg" class="char-hover-img" alt=""></span>. Inspector de Policía. Inspector del Departamento de Policía de Arkham, invitado «honorario» y representante de la ley.', type: "info", img: "images/f_nichols.jpg" },
            { text: 'Robert <span class="char-hover">PICKMAN<img src="images/f_pickman.jpg" class="char-hover-img" alt=""></span>. Pintor. Pinta sus visiones. Su exposición «Ventanas al Otro Lado» ha causado furor en Boston.', type: "info", img: "images/f_pickman.jpg" },
            { text: 'Edmund <span class="char-hover">RICE<img src="images/f_rice.jpg" class="char-hover-img" alt=""></span>. Profesor. Catedrático de «Lenguas Muertas» en la Universidad de Miskatonic. La mayor autoridad viva en manuscritos prohibidos.', type: "info", img: "images/f_rice.jpg" },
            { text: 'Barnabas <span class="char-hover">CRANE<img src="images/f_crane.jpg" class="char-hover-img" alt=""></span>. Anticuario. Dueño de «Crane e Hijos, Curiosidades y Libros Raros», es el principal proveedor de la Logia.', type: "info", img: "images/f_crane.jpg" }
        ]
    },

    1: {
        title: "Trasfondo",
        unlocked: true,
        items: [
            { text: "¿Quién eres?", type: "subheading" },
            { type: "space" },
            { text: 'Eres un anticuario y librero de cuarenta y cinco años. Dueño de «Crane e Hijos, Curiosidades y Libros Raros», en Arkham. Eres un hombre afable y de risa fácil, de ojos algo saltones y voz húmeda, rasgos que algunos atribuyen a la familia de tu padre, de Innsmouth, y que nadie menciona en tu presencia. Vendes de todo: reliquias de guerra, ídolos de dudosa procedencia y «páginas del Necronomicón». Éstas últimas, en realidad, son falsificaciones que te fabrica el profesor <span class="char-hover">RICE<img src="images/f_rice.jpg" class="char-hover-img" alt=""></span>.', type: "info" },
            { text: 'Vives endeudado con un contrabandista de Innsmouth que te trae piezas imposibles de conseguir, y te exige un importante pago, 1.000 dólares. Por eso ideaste un robo: sustraer el Prisma de Plata de la Logia, que el Gran Maestre <span class="char-hover">WETHERBY<img src="images/f_wetherby.jpg" class="char-hover-img" alt=""></span> guarda en el Santuario, que crees que vale una fortuna. Esta tarde llegaste a la Sede antes que nadie «para tasar unos libros», pero lo que hiciste en realidad fue cambiar el Prisma de Plata auténtico por una réplica de vidrio de plomo. El Prisma verdadero está en tu maleta donde llevas el resto de reliquias, y que quieres venderlo al contrabandista que le debes tanto dinero. Está frío y, a veces, emite zumbidos.', type: "info" },
            { type: "space" },
            { type: "line" },
            { text: "Habilidad especial: Reliquias y tasación", type: "subheading" },
            { type: "space" },
            { text: 'Puedes vender tus cinco «reliquias» por 50 dólares cada una o más. También puedes tasar cualquier objeto que otro te muestre: dirás si es auténtico o no (puedes mentir si te conviene).', type: "info" },
            { type: "line" },
            { text: "Actuando y vestuario", type: "subheading" },
            { type: "space" },
       	    { text: 'Abrigo de lana pesado, bastón con empuñadura de bronce en forma de pulpo, guantes, un puro y una sonrisa de vendedor. Hueles a sal y a cuero. Llevas una maleta con reliquias y el Prisma de Plata verdadero.', type: "info" }
        ]
    },

    equipo_inicial: {
        title: "Secretos que conoces",
        unlocked: true,
        items: [
            { text: 'Las páginas del Necronomicón que vendes son falsas. Te las falsifica el profesor <span class="char-hover">RICE<img src="images/f_rice.jpg" class="char-hover-img" alt=""></span>.', type: "info" },
            { text: 'Cambiaste el Prisma: el que hay en el altar es una réplica. El verdadero lo llevas contigo dentro de tu maleta, en un doble fondo. <strong style="color:#e03c3c;">ESTO NO DEBE SABERLO NADIE</strong>.', type: "info" },
            { text: 'Le debes 1.000 dólares a un marinero contrabandista de Innsmouth, apodado «el Capitán», que te espera esta noche sobre las 23:00 junto a la verja del Jardín. Le enseñarás el Prisma, a ver si lo quiere.', type: "info" },
            { text: 'También le compras loto azul a marineros de Innsmouth, para vendérselo al doctor <span class="char-hover">BREWER<img src="images/f_brewer.jpg" class="char-hover-img" alt=""></span>. Aunque no sabes para qué lo quiere.', type: "info" },
            { text: 'El inspector <span class="char-hover">NICHOLS<img src="images/f_nichols.jpg" class="char-hover-img" alt=""></span> ha estado merodeando últimamente por el puerto haciendo preguntas sobre ti.', type: "info" },
       	    { text: 'El pintor <span class="char-hover">PICKMAN<img src="images/f_pickman.jpg" class="char-hover-img" alt=""></span> «ve cosas» y tiene premoniciones.', type: "info" }
        ]
    },

    2: {
        title: "Objetivos Acto I",
        unlocked: false,
        code: "ventana",
        sheetKey: "capitulo2",
        items: [
            { type: "space" },
            { text: 'Vende tus 5 reliquias (a 50 dólares cada una, o incluso más, si ves interés en el comprador). Jurarías que son falsas, pero nunca se sabe. Inventa los efectos que puede producir cada reliquia (protección, curación, etc.).', type: "check" },
            { text: 'Pide al profesor <span class="char-hover">RICE<img src="images/f_rice.jpg" class="char-hover-img" alt=""></span> que mantenga la mentira sobre las páginas del Necronomicón: «que diga que la tinta es antigua». Si lo ves reacio, págale algo de dinero por su discreción.', type: "check" },
            { text: 'Jura ante <span class="char-hover">WETHERBY<img src="images/f_wetherby.jpg" class="char-hover-img" alt=""></span> que la página del Necronomicón que le vendiste es auténtica. Que le pregunte al profesor <span class="char-hover">RICE<img src="images/f_rice.jpg" class="char-hover-img" alt=""></span> para corroborarlo.', type: "check" },
            { text: 'Mantén el Prisma de Plata verdadero escondido. Si alguien se acerca a tu maleta, cámbiala de sitio. <strong style="color:#e03c3c;">NADIE</strong> debe saber que robaste el verdadero Prisma.', type: "check" },
            { text: 'Un coleccionista que conoces de Boston te pagará mucho dinero por un boceto de <span class="char-hover">PICKMAN<img src="images/f_pickman.jpg" class="char-hover-img" alt=""></span>. Intenta comprarle un <strong style="color:#e03c3c;">CUADRO</strong> por 50 dólares; si se niega, puedes subir la oferta. Tienes que conseguirlo sea como sea.', type: "check" },
            { text: 'Si el inspector <span class="char-hover">NICHOLS<img src="images/f_nichols.jpg" class="char-hover-img" alt=""></span> te pregunta por tus tratos con marineros del puerto, di que son «clientes que solamente te traen curiosidades». Cambia de tema.', type: "check" },
            { text: 'Averigua cuánto sabe el doctor <span class="char-hover">BREWER<img src="images/f_brewer.jpg" class="char-hover-img" alt=""></span> de lo que ocurrirá esta noche: ofrécele extracto de loto azul a cambio de dinero e información (¿para qué lo quiere?). O que te consiga un cuadro de <span class="char-hover">PICKMAN<img src="images/f_pickman.jpg" class="char-hover-img" alt=""></span> si no has podido comprarlo aún.', type: "check" },
            { type: "line" },
       	    { text: 'A las 23:00 h, cuando <span class="char-hover">WETHERBY<img src="images/f_wetherby.jpg" class="char-hover-img" alt=""></span> se retire al Santuario, debes marcharte a solas al Jardín, sin decir a nadie adónde vas y sin que nadie te vea allí. Después lee la parte «¿Qué hiciste?» Más tarde, cuando suene el gong 3 veces, podrás ir al Santuario.', type: "info" }
        ]
    },

    3: {
        title: "¿Qué hiciste durante el asesinato?",
        unlocked: false,
        code: "mesa",
        sheetKey: "capitulo3",
        items: [

	{ text: 'A las 23:00, estuviste en el Jardín, junto a la verja.  <a href="#" style="color:#9fd4ff;" onclick="abrirVideo(\'videos/marinero.mp4\'); return false;">🎬 Llegó el Capitán, el marinero contrabandista de Innsmouth🎬</a> (llevaba botas y gabán de pescador) y te pidió que le enseñaras el Prisma de Plata. El Capitán cuando lo vio se burló de ti, no le interesó en absoluto y te dio una semana más para que le pagaras los 1.000 dólares que le debes. Se marchó y te quedaste en el Jardín solo. Ahora espera a que suene el gong 3 veces.', type: "info" }
  
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
            { text: 'Si alguien sospecha que el Prisma de Plata no es el verdadero, desvía la conversación, cambia de tema.', type: "check" },
            { text: 'Oculta el Prisma de Plata verdadero. Nadie debe verlo. Si alguien te descubre con el Prisma verdadero, di que lo guardaste «para protegerlo del asesino».', type: "check" },
            { text: 'Si te preguntan dónde estuviste, di que estuviste todo el tiempo en el Jardín.', type: "check" },
            { text: 'Intenta que nadie te relacione con las pisadas del marinero (Prueba F) del suelo del Jardín.', type: "check" },
            { text: 'Acusa al doctor <span class="char-hover">BREWER<img src="images/f_brewer.jpg" class="char-hover-img" alt=""></span> del asesinato (porque la víctima fue drogada con cloral).', type: "check" },
            { text: 'Si el profesor <span class="char-hover">RICE<img src="images/f_rice.jpg" class="char-hover-img" alt=""></span> te amenaza con contar que las páginas del Necronomicón son falsificaciones, dile que eso no le conviene a él tampoco.', type: "check" },
            { text: '¿Por qué <span class="char-hover">PICKMAN<img src="images/f_pickman.jpg" class="char-hover-img" alt=""></span> tiene las manos manchadas de pintura roja y azul?', type: "check" },
            { text: 'Cómprale un <strong style="color:#e03c3c;">CUADRO</strong> a <span class="char-hover">PICKMAN<img src="images/f_pickman.jpg" class="char-hover-img" alt=""></span> si no lo has hecho todavía.', type: "check" },
            { text: 'Intenta vender tus reliquias a los demás, si te quedan algunas.', type: "check" },
       	    { text: 'Convence al menos a dos miembros de que tú serías el mejor sucesor para ser el Gran Maestre de la Logia (puedes pagar por ello).', type: "check" }
        ]
    }
};
