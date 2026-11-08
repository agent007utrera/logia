// =========================================================
// SONIDO_LOCALIZACION.JS — Sonido de ambiente propio de una sala
// =========================================================
// Pensado para las páginas de localización (sala_oficina.html, etc.).
// Solo suena en las salas donde lo actives: las que no lleven el bloque
// de configuración se quedan en silencio.
//
// USO: al final del html de la sala, DESPUÉS de webcams.js:
//
//   <script>
//     const SONIDO_LOCALIZACION = { archivo: 'lluvia.mp3', volumen: 60, loop: true };
//   </script>
//   <script src="sonido_localizacion.js"></script>
//
// Opciones:
//   archivo : nombre del mp3 dentro de la carpeta audio/ (igual que el ambiente global).
//             Si lleva una barra (p. ej. 'otra/lluvia.mp3') se usa tal cual.
//   volumen : 0 a 100 (como en la hoja Ambiente1). Por defecto 50.
//   loop    : true  = suena en bucle mientras estés en la sala.
//             false = suena una sola vez al entrar.
//   fundido : milisegundos de fundido al entrar y al salir. Por defecto 1500. 0 = sin fundido.
//
// Para varios sonidos a la vez (por ejemplo lluvia + viento) usa una lista:
//
//   const SONIDO_LOCALIZACION = [
//     { archivo: 'lluvia.mp3', volumen: 60, loop: true },
//     { archivo: 'viento.mp3', volumen: 35, loop: true }
//   ];
//
// Al pulsar "volver al mapa" (función volverAlMapa de la sala) el sonido
// se apaga con fundido antes de salir.
// =========================================================
(function () {
  'use strict';

  if (typeof SONIDO_LOCALIZACION === 'undefined' || !SONIDO_LOCALIZACION) return;

  var configs = Array.isArray(SONIDO_LOCALIZACION) ? SONIDO_LOCALIZACION : [SONIDO_LOCALIZACION];
  var sonidos = [];
  var detenido = false;

  function ruta(archivo) {
    archivo = String(archivo || '').trim();
    if (!archivo) return '';
    return archivo.indexOf('/') !== -1 ? archivo : 'audio/' + archivo;
  }

  function aplicarFundido(audio, desde, hasta, ms, alTerminar) {
    if (!ms || ms <= 0) {
      audio.volume = hasta;
      if (alTerminar) alTerminar();
      return;
    }
    if (audio._fundido) clearInterval(audio._fundido);
    var paso = 50, pasos = Math.max(1, Math.round(ms / paso)), n = 0;
    audio.volume = desde;
    audio._fundido = setInterval(function () {
      n++;
      var v = desde + (hasta - desde) * (n / pasos);
      audio.volume = Math.min(1, Math.max(0, v));
      if (n >= pasos) {
        clearInterval(audio._fundido);
        audio._fundido = null;
        if (alTerminar) alTerminar();
      }
    }, paso);
  }

  function crear(cfg) {
    var src = ruta(cfg.archivo);
    if (!src) return null;

    var vol = Number(cfg.volumen);
    if (isNaN(vol)) vol = 50;
    vol = Math.min(100, Math.max(0, vol)) / 100;

    var fundido = (cfg.fundido === undefined) ? 1500 : Number(cfg.fundido) || 0;

    var audio = new Audio(src);
    audio.loop = (cfg.loop !== false); // por defecto, en bucle
    audio.preload = 'auto';
    audio.volume = fundido > 0 ? 0 : vol;

    var s = { audio: audio, volumen: vol, fundido: fundido, arrancado: false };
    audio.addEventListener('error', function () {
      console.warn('Sonido de localización no encontrado:', src);
    });
    return s;
  }

  function arrancar(s) {
    if (detenido || s.arrancado) return;
    var p = s.audio.play();
    if (p && p.then) {
      p.then(function () {
        s.arrancado = true;
        aplicarFundido(s.audio, 0, s.volumen, s.fundido);
      }).catch(function () {
        // El navegador exige un gesto del usuario: se reintenta en el primer toque.
        esperarGesto();
      });
    } else {
      s.arrancado = true;
    }
  }

  var esperando = false;
  function esperarGesto() {
    if (esperando) return;
    esperando = true;
    function reintentar() {
      document.removeEventListener('pointerdown', reintentar, true);
      document.removeEventListener('keydown', reintentar, true);
      esperando = false;
      sonidos.forEach(arrancar);
    }
    document.addEventListener('pointerdown', reintentar, true);
    document.addEventListener('keydown', reintentar, true);
  }

  // Apaga con fundido. Se puede llamar a mano: detenerSonidoLocalizacion()
  function detener() {
    if (detenido) return;
    detenido = true;
    sonidos.forEach(function (s) {
      var parar = function () { try { s.audio.pause(); } catch (e) {} };
      if (s.arrancado && s.fundido > 0) {
        aplicarFundido(s.audio, s.audio.volume, 0, Math.min(s.fundido, 1200), parar);
      } else {
        parar();
      }
    });
  }
  window.detenerSonidoLocalizacion = detener;

  // Si la sala tiene volverAlMapa(), se apaga el sonido justo antes de salir.
  if (typeof window.volverAlMapa === 'function') {
    var original = window.volverAlMapa;
    window.volverAlMapa = function () {
      detener();
      return original.apply(this, arguments);
    };
  }

  window.addEventListener('pagehide', function () {
    sonidos.forEach(function (s) { try { s.audio.pause(); } catch (e) {} });
  });

  sonidos = configs.map(crear).filter(Boolean);
  sonidos.forEach(arrancar);
})();
