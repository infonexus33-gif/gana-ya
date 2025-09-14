// scripts.js
document.addEventListener('DOMContentLoaded', () => {

  // ---------------- SUBTÍTULOS ANIMADOS ----------------
  const subtitleEl = document.getElementById('hero-subtitle');
  const counterEl  = document.getElementById('today-count');

  const subtitles = Array.from({ length: 49 }, (_, i) => {
    const n = i + 2;
    return `EJ:\nCargas ${n} mil ➢ Recibís ${n * 3} mil`;
  });
  let idx = 0;

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function animateSubtitle(text) {
    subtitleEl.textContent = text;
    subtitleEl.style.animation = 'none';
    subtitleEl.offsetWidth; // reinicia animación
    subtitleEl.style.animation = 'fadeIn 0.8s ease-in-out forwards';
  }

  counterEl.textContent = randomInt(250, 400);
  animateSubtitle(subtitles[idx]);

  setInterval(() => {
    idx = (idx + 1) % subtitles.length;
    animateSubtitle(subtitles[idx]);
  }, 5000);

  // ---------------- EMOJIS ----------------
  const emojis = ['⁷⁷⁷','⁷⁷⁷','⁷⁷⁷','⁷⁷⁷','⁷⁷⁷'];
  const container = document.getElementById('emoji-container');

  function spawnEmoji() {
    const span = document.createElement('span');
    span.className = 'emoji';
    span.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    span.style.left = `${5 + Math.random() * 90}%`;
    const duration = 4 + Math.random() * 2;
    const delay = Math.random() * 2;
    span.style.animationDuration = `${duration}s`;
    span.style.animationDelay = `${delay}s`;
    container.appendChild(span);
    span.addEventListener('animationend', () => span.remove());
  }

  setInterval(spawnEmoji, 500 + Math.random() * 1000);

  // ---------------- CONTADOR "JUGANDO" ----------------
  const playingCountEl = document.getElementById('playing-count');
  let playingCount = Math.floor(1200 + Math.random() * (3500 - 1200 + 1));
  playingCountEl.textContent = playingCount;

  function randDelay(minMs, maxMs) {
    return minMs + Math.random() * (maxMs - minMs);
  }

  function tick() {
    const change = Math.random() < 0.7 ? 1 : -1;
    playingCount += change;
    playingCountEl.textContent = playingCount;
    setTimeout(tick, randDelay(500, 3000));
  }
  tick();

  // ---------------- CONTADOR "GANADORES" ----------------
  const winnersCountEl = document.getElementById('winners-count');
  let winnersCount = Math.floor(playingCount * 0.7);
  winnersCountEl.textContent = winnersCount;

  function winnersTick() {
    winnersCount += 1;
    winnersCountEl.textContent = winnersCount;
    setTimeout(winnersTick, randDelay(4000, 10000));
  }
  winnersTick();

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('wa-btn');
  const fallbackLink = document.getElementById('wa-alt');
  const copiarBtn = document.getElementById('wa-copiar');

  // Números que rotan
  const numeros = [
    "5491127398763",
    "5491165432109",
    "5491133344455",
    "5491144455566"
  ];

  let i = 0;
  const mensaje = "Hola%20mi%20nombre%20es...";

  // Función para actualizar botón y fallback
  function actualizarLinks() {
    const numero = numeros[i];
    const url = `https://wa.me/${numero}?text=${mensaje}`;

    // Botón principal
    btn.onclick = () => window.open(url, '_blank');

    // Fallback
    fallbackLink.href = url;
    fallbackLink.textContent = `Abrir ${numero}`;

    // Copiar número
    copiarBtn.onclick = () => {
      navigator.clipboard.writeText(numero);
      copiarBtn.textContent = "¡Copiado!";
      setTimeout(() => copiarBtn.textContent = "Copiar número", 2000);
    };

    // Avanzar al siguiente
    i = (i + 1) % numeros.length;
  }

  // Primera actualización inmediata
  actualizarLinks();

  // Rotar cada 2 segundos
  setInterval(actualizarLinks, 2000);
});


}); // DOMContentLoaded




