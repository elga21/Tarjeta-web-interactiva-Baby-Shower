/* ==========================================================================
   Baby Shower de Fernanda - Lógica JavaScript (Música, Video, Pétalos y Destellos)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initVideoAutoplay();
  initMusicPlayer();
  initCountdown();
  initPetalsCanvas();
  initRSVPButton();
  initCalendarButton();
});

/* --------------------------------------------------------------------------
   1. ASEGURAR AUTOPLAY DEL VIDEO DE ECOGRAFÍA
   -------------------------------------------------------------------------- */
function initVideoAutoplay() {
  const video = document.getElementById('eco-video');
  if (!video) return;

  video.muted = true;
  video.playsInline = true;

  const playPromise = video.play();
  if (playPromise !== undefined) {
    playPromise.catch((err) => {
      console.log('Autoplay video diferido:', err);
      // Intentar reproducir de nuevo tras el primer toque del usuario
      document.body.addEventListener('touchstart', () => video.play(), { once: true });
      document.body.addEventListener('click', () => video.play(), { once: true });
    });
  }
}

/* --------------------------------------------------------------------------
   2. REPRODUCTOR DE MÚSICA DE LA FLOR
   -------------------------------------------------------------------------- */
function initMusicPlayer() {
  const audio = document.getElementById('bg-music');
  const flowerBtn = document.getElementById('flower-music-btn');
  const statusBadge = document.getElementById('music-status');

  if (!audio || !flowerBtn) return;

  flowerBtn.addEventListener('click', () => {
    if (audio.paused) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            flowerBtn.classList.add('playing');
            statusBadge.classList.add('active');
            statusBadge.innerHTML = '🎵 Sonando canción...';
            showToast('🌸 Reproduciendo música...');
            createMusicNotesEffect(flowerBtn);
          })
          .catch((error) => {
            console.log('Audio error:', error);
            showToast('🎵 Agrega el archivo bebesong.mp3 en la carpeta raíz para escuchar la música');
          });
      }
    } else {
      audio.pause();
      flowerBtn.classList.remove('playing');
      statusBadge.classList.remove('active');
      showToast('⏸️ Música pausada');
    }
  });
}

// Animación visual de notas musicales flotantes
function createMusicNotesEffect(btnElement) {
  const notes = ['🎵', '🎶', '🌸', '✨'];
  const rect = btnElement.getBoundingClientRect();

  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      const note = document.createElement('span');
      note.textContent = notes[Math.floor(Math.random() * notes.length)];
      note.style.position = 'fixed';
      note.style.left = `${rect.left + rect.width / 2 + (Math.random() * 40 - 20)}px`;
      note.style.top = `${rect.top + (Math.random() * 20 - 10)}px`;
      note.style.fontSize = '1.4rem';
      note.style.pointerEvents = 'none';
      note.style.zIndex = '999';
      note.style.transition = 'all 1.6s cubic-bezier(0.25, 1, 0.5, 1)';
      note.style.opacity = '1';

      document.body.appendChild(note);

      requestAnimationFrame(() => {
        note.style.transform = `translateY(-80px) scale(1.25) rotate(${Math.random() * 60 - 30}deg)`;
        note.style.opacity = '0';
      });

      setTimeout(() => note.remove(), 1700);
    }, i * 280);
  }
}

/* --------------------------------------------------------------------------
   3. CONTADOR REGRESIVO HASTA EL 1 DE NOVIEMBRE DE 2026 (3:30 PM)
   -------------------------------------------------------------------------- */
function initCountdown() {
  const targetDate = new Date('2026-11-01T15:30:00-05:00').getTime();

  const daysEl = document.getElementById('cd-days');
  const hoursEl = document.getElementById('cd-hours');
  const minsEl = document.getElementById('cd-mins');
  const secsEl = document.getElementById('cd-secs');

  if (!daysEl) return;

  function update() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minsEl.textContent = '00';
      secsEl.textContent = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = days < 10 ? '0' + days : days;
    hoursEl.textContent = hours < 10 ? '0' + hours : hours;
    minsEl.textContent = minutes < 10 ? '0' + minutes : minutes;
    secsEl.textContent = seconds < 10 ? '0' + seconds : seconds;
  }

  update();
  setInterval(update, 1000);
}

/* --------------------------------------------------------------------------
   4. ANIMACIÓN DE PÉTALOS Y DESTELLOS DORADOS (CANVAS 2D)
   -------------------------------------------------------------------------- */
function initPetalsCanvas() {
  const canvas = document.getElementById('petals-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const petalsCount = 20;
  const sparklesCount = 15;
  const particles = [];

  // Crear pétalos rosa
  for (let i = 0; i < petalsCount; i++) {
    particles.push({
      type: 'petal',
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 8 + 6,
      speedY: Math.random() * 0.8 + 0.4,
      speedX: Math.random() * 0.4 - 0.2,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 1.5,
      opacity: Math.random() * 0.5 + 0.4
    });
  }

  // Crear destellos dorados mágicos
  for (let i = 0; i < sparklesCount; i++) {
    particles.push({
      type: 'sparkle',
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 1,
      speedY: Math.random() * 0.4 + 0.2,
      opacity: Math.random() * 0.7 + 0.3,
      pulseSpeed: Math.random() * 0.05 + 0.02
    });
  }

  function drawPetal(p) {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate((p.rotation * Math.PI) / 180);
    ctx.globalAlpha = p.opacity;

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(-p.size, -p.size * 1.5, -p.size * 1.5, p.size, 0, p.size * 1.8);
    ctx.bezierCurveTo(p.size * 1.5, p.size, p.size, -p.size * 1.5, 0, 0);
    
    const grad = ctx.createLinearGradient(0, -p.size, 0, p.size);
    grad.addColorStop(0, '#fdebf0');
    grad.addColorStop(1, '#f4a6bb');
    ctx.fillStyle = grad;
    ctx.fill();

    ctx.restore();
  }

  function drawSparkle(s) {
    ctx.save();
    ctx.globalAlpha = s.opacity;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
    ctx.fillStyle = '#fce4ec';
    ctx.shadowBlur = 6;
    ctx.shadowColor = '#e5c158';
    ctx.fill();
    ctx.restore();
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach((p) => {
      if (p.type === 'petal') {
        p.y += p.speedY;
        p.x += Math.sin(p.y * 0.01) * 0.5 + p.speedX;
        p.rotation += p.rotationSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;

        drawPetal(p);
      } else {
        p.y += p.speedY;
        p.opacity += Math.sin(Date.now() * p.pulseSpeed) * 0.02;
        if (p.opacity < 0.1) p.opacity = 0.2;
        if (p.opacity > 0.9) p.opacity = 0.9;

        if (p.y > height + 10) {
          p.y = -10;
          p.x = Math.random() * width;
        }
        drawSparkle(p);
      }
    });

    requestAnimationFrame(render);
  }

  render();
}

/* --------------------------------------------------------------------------
   5. REDIRECCIÓN DE WHATSAPP PARA RSVP
   -------------------------------------------------------------------------- */
function initRSVPButton() {
  const rsvpBtn = document.getElementById('rsvp-btn');
  if (!rsvpBtn) return;

  const phone = '573045337513';
  const text = encodeURIComponent(
    '¡Hola Fernando y Eliana! Quiero confirmar mi asistencia al Baby Shower de Fernanda 👶🏻🌸. Mi nombre es: '
  );
  const whatsappUrl = `https://wa.me/${phone}?text=${text}`;

  rsvpBtn.href = whatsappUrl;
  rsvpBtn.setAttribute('target', '_blank');
}

/* --------------------------------------------------------------------------
   6. BOTÓN DE AGENDAR EN GOOGLE CALENDAR
   -------------------------------------------------------------------------- */
function initCalendarButton() {
  const calBtn = document.getElementById('add-calendar-btn');
  if (!calBtn) return;

  const title = encodeURIComponent('Baby Shower de Fernanda 👶🏻🌸');
  const details = encodeURIComponent(
    '¡Te esperamos para celebrar la llegada de nuestra princesa Fernanda! Padres: Fernando & Eliana.'
  );
  const location = encodeURIComponent('Hotel Atrium Plaza Barranquilla - Cra. 44 #74-85');
  const dates = '20261101T203000Z/20261102T003000Z';

  const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;

  calBtn.href = googleCalUrl;
  calBtn.setAttribute('target', '_blank');
}

/* --------------------------------------------------------------------------
   7. MENSAJE TOAST INFORMATIVO
   -------------------------------------------------------------------------- */
function showToast(msg) {
  let toast = document.getElementById('toast-msg');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-msg';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }

  toast.textContent = msg;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3400);
}
