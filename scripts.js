// scripts.js

document.addEventListener('DOMContentLoaded', () => {
  const subtitleEl = document.getElementById('hero-subtitle');
  const counterEl  = document.getElementById('today-count');

  // Frases a rotar
const subtitles = Array.from({ length: 49 }, (_, i) => {
  const n = i + 2;
  return `EJ:\nCargas ${n} mil ➢ Recibís ${n * 3} mil`;
});


console.log(subtitles);
  let idx = 0;

  // Generar un entero aleatorio entre min y max (ambos incluidos)
  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Animar y actualizar subtítulo
  function animateSubtitle(text) {
    subtitleEl.textContent = text;
    subtitleEl.style.animation = 'none';
    // Forzar reflow para reiniciar la animación
    // eslint-disable-next-line no-unused-expressions
    subtitleEl.offsetWidth;
    subtitleEl.style.animation = 'fadeIn 0.8s ease-in-out forwards';
  }

  // Al cargar: generar y mostrar contador fijo
  const todayUsers = randomInt(250, 400);
  counterEl.textContent = todayUsers;

  // Iniciar subtítulo animado
  animateSubtitle(subtitles[idx]);

  // Cada 5s rota al siguiente subtítulo
  setInterval(() => {
    idx = (idx + 1) % subtitles.length;
    animateSubtitle(subtitles[idx]);
  }, 5000);
});





const emojis = ['⁷⁷⁷','⁷⁷⁷','⁷⁷⁷','⁷⁷⁷', "⁷⁷⁷", ];
  const container = document.getElementById('emoji-container');

  function spawnEmoji() {
    const span = document.createElement('span');
    span.className = 'emoji';
    span.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    // Posición horizontal aleatoria (entre 5% y 95%)
    const left = 5 + Math.random() * 90;
    span.style.left = `${left}%`;

    // Duración y retraso aleatorio para que no sean uniformes
    const duration = 4 + Math.random() * 2; // 4s–6s
    const delay = Math.random() * 2;         // 0s–2s
    span.style.animationDuration = `${duration}s`;
    span.style.animationDelay = `${delay}s`;

    container.appendChild(span);

    // Lo eliminamos una vez termine la animación
    span.addEventListener('animationend', () => {
      span.remove();
    });
  }

  // Genera un emoji cada 0.8–1.5 segundos
  setInterval(spawnEmoji, 500 + Math.random() * 1000);







  // 1. Referencia al elemento HTML
const playingCountEl = document.getElementById('playing-count');

// 2. Valor inicial aleatorio entre 1200 y 3500
let playingCount = Math.floor(1200 + Math.random() * (3500 - 1200 + 1));
playingCountEl.textContent = playingCount;

// 3. Función para obtener un delay aleatorio entre min y max (en ms)
function randDelay(minMs, maxMs) {
  return minMs + Math.random() * (maxMs - minMs);
}

// 4. Función recursiva que sube o baja el contador
function tick() {
  // Probabilidad de subida 70%, bajada 30%
  const change = Math.random() < 0.7 ? 1 : -1;
  playingCount += change;
  playingCountEl.textContent = playingCount;
  
  // Vuelve a ejecutarse tras un intervalo de 500–3000 ms
  setTimeout(tick, randDelay(500, 3000));
}

// 5. Inicia el bucle
tick();










// 1. Referencia al elemento HTML
const winnersCountEl = document.getElementById('winners-count');

// 2. Valor inicial: 70% del valor actual de playingCount
let winnersCount = Math.floor(playingCount * 0.7);
winnersCountEl.textContent = winnersCount;

// 3. Reutilizamos randDelay(minMs, maxMs) definida antes

// 4. Función recursiva que solo suma de uno en uno, lento
function winnersTick() {
  winnersCount += 1;
  winnersCountEl.textContent = winnersCount;
  
  // Delay más lento: entre 1000 ms y 5000 ms
  setTimeout(winnersTick, randDelay(4000, 10000));
}

// 5. Inicia el bucle
winnersTick();
