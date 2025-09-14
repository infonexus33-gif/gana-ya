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

// ---------------- WHATSAPP ----------------
const waButton = document.getElementById("wa-button");
const waAlt = document.getElementById("wa-alt");
const waCopiar = document.getElementById("wa-copiar");

const numerosWhatsapp = [
  "5491127398763",
  "5491127398447",
  "5491140976763"
];
const mensaje = "Hola mi nombre es...";
let idxWA = 0;

// Función para actualizar botón y fallback al mismo número
function updateWhatsappLinks() {
  const num = numerosWhatsapp[idxWA];
  const url = `https://wa.me/${num}?text=${encodeURIComponent(mensaje)}`;

  // Botón principal
  waButton.setAttribute("href", url);

  // Fallback
  waAlt.href = url;
  waAlt.textContent = `Abrir ${num}`;
}

// Rotar automáticamente cada 2s
setInterval(() => {
  idxWA = (idxWA + 1) % numerosWhatsapp.length;
  updateWhatsappLinks();
}, 2000);

// Inicializar al cargar
updateWhatsappLinks();

// Click explícito en el botón (abre el número actual)
function redirigirWhatsapp(e) {
  e.preventDefault();
  const num = numerosWhatsapp[idxWA];
  const url = `https://wa.me/${num}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
}
waButton.addEventListener("click", redirigirWhatsapp);

// Copiar número del fallback
waCopiar.addEventListener("click", () => {
  const num = waAlt.textContent.replace("Abrir ", "");
  navigator.clipboard.writeText(num);
});

}); // DOMContentLoaded



