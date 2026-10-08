const menu = document.querySelector('#menu');
const menuButton = document.querySelector('#menuButton');

menuButton.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menu.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

document.addEventListener('keydown', event => {
  if (event.key !== 'Escape' || !menu.classList.contains('open')) return;
  menu.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.focus();
});

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const reveals = document.querySelectorAll('.reveal');

if (reducedMotion || !('IntersectionObserver' in window)) {
  reveals.forEach(element => element.classList.add('in'));
} else {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: .12 });
  reveals.forEach(element => revealObserver.observe(element));
}

const stageData = {
  recognize: {
    stage: 'Etapa 01',
    title: 'Reconocer señales observables',
    text: 'Una guía breve presenta los elementos de FAST en lenguaje directo para apoyar la observación inicial, siempre priorizando la llamada a urgencias.',
    list: ['Rostro y sonrisa', 'Elevación de ambos brazos', 'Claridad del habla y tiempo de inicio'],
    status: 'Guía visual preparada',
    mode: 'Observación guiada',
    icon: 'face'
  },
  register: {
    stage: 'Etapa 02',
    title: 'Registrar el momento y el contexto',
    text: 'La experiencia propone ordenar la hora observada de inicio, síntomas y antecedentes aportados por la persona o su cuidador.',
    list: ['Hora de inicio o última vez bien', 'Síntomas observados', 'Medicamentos y antecedentes declarados'],
    status: 'Contexto listo para registrar',
    mode: 'Registro de tiempo',
    icon: 'clock'
  },
  connect: {
    stage: 'Etapa 03',
    title: 'Conectar con la red de apoyo',
    text: 'Los contactos autorizados podrían recibir una alerta clara, sin sustituir ni retrasar la comunicación con los servicios de urgencia.',
    list: ['Contactos definidos previamente', 'Mensaje breve y comprensible', 'Consentimiento y privacidad por diseño'],
    status: 'Red de apoyo disponible',
    mode: 'Contactos autorizados',
    icon: 'network'
  },
  share: {
    stage: 'Etapa 04',
    title: 'Compartir un resumen legible',
    text: 'La información registrada podría organizarse en un documento simple para facilitar la conversación, sin presentar conclusiones diagnósticas.',
    list: ['Cronología de lo observado', 'Antecedentes aportados', 'Documento claramente identificado como informativo'],
    status: 'Resumen conceptual listo',
    mode: 'Documento informativo',
    icon: 'document'
  }
};

const icons = {
  face: '<circle class="scan-shape" cx="90" cy="90" r="58" fill="none" stroke="currentColor" stroke-width="2"/><path class="scan-shape" d="M56 75c9-8 20-8 30 0m9 0c9-8 20-8 30 0M68 117c14 10 30 10 44 0M90 77v27l-10 8h20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  arms: '<circle cx="90" cy="48" r="18" fill="none" stroke="currentColor" stroke-width="2"/><path d="M90 67v63M69 141h42" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path class="motion-arm" d="M88 78 48 60 28 39" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><path class="motion-arm" d="M92 78 132 60 152 39" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>',
  speech: '<path d="M40 48h100v70H91l-28 21 8-21H40V48Z" fill="none" stroke="currentColor" stroke-width="2"/><path class="speech-bar" d="M61 83v12" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><path class="speech-bar" d="M78 72v34" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><path class="speech-bar" d="M95 63v52" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><path class="speech-bar" d="M112 75v28" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><path class="speech-bar" d="M129 83v12" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>',
  time: '<circle class="scan-shape" cx="90" cy="90" r="58" fill="none" stroke="currentColor" stroke-width="2"/><path class="scan-shape" d="M90 55v38l27 16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>',
  clock: '<circle class="scan-shape" cx="90" cy="90" r="58" fill="none" stroke="currentColor" stroke-width="2"/><path class="scan-shape" d="M90 55v38l27 16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>',
  network: '<circle class="network-node" cx="90" cy="55" r="22" fill="none" stroke="currentColor" stroke-width="2"/><circle class="network-node" cx="48" cy="119" r="17" fill="none" stroke="currentColor" stroke-width="2"/><circle class="network-node" cx="132" cy="119" r="17" fill="none" stroke="currentColor" stroke-width="2"/><path class="network-link" d="M77 73 58 103m45-30 19 30M66 119h48" fill="none" stroke="currentColor" stroke-width="2"/>',
  document: '<path class="scan-shape" d="M58 37h47l25 25v81H58V37Z" fill="none" stroke="currentColor" stroke-width="2"/><path class="scan-shape" d="M105 37v27h25M75 88h38m-38 18h38m-38 18h26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'
};

const stepTabs = [...document.querySelectorAll('[data-step]')];
const demoStage = document.querySelector('.demo-stage');
const demoIcon = document.querySelector('#demoIcon');
const fastControls = document.querySelector('#fastControls');
const fastButtons = [...document.querySelectorAll('[data-fast]')];
const generateSummary = document.querySelector('#generateSummary');
const summaryNote = document.querySelector('#summaryNote');
const documentPreview = document.querySelector('#documentPreview');
const scanWindow = document.querySelector('#scanWindow');
let summaryTimer;

function selectFast(button) {
  fastButtons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  demoIcon.innerHTML = icons[button.dataset.fast];
  demoStage.dataset.visual = button.dataset.fast;
}

fastButtons.forEach(button => button.addEventListener('click', () => selectFast(button)));

function selectStep(button) {
  stepTabs.forEach(tab => tab.setAttribute('aria-selected', String(tab === button)));
  stepTabs.forEach(tab => { tab.tabIndex = tab === button ? 0 : -1; });
  const data = stageData[button.dataset.step];
  const copy = document.querySelector('#demoCopy');

  window.clearTimeout(summaryTimer);
  demoStage.dataset.stage = button.dataset.step;
  demoStage.setAttribute('aria-labelledby', button.id);
  fastControls.hidden = button.dataset.step !== 'recognize';
  generateSummary.hidden = button.dataset.step !== 'share';
  summaryNote.hidden = button.dataset.step !== 'share';
  documentPreview.classList.remove('show');
  scanWindow.classList.remove('preview-ready');
  generateSummary.disabled = false;
  generateSummary.removeAttribute('aria-busy');
  generateSummary.firstChild.textContent = 'Generar PDF ficticio ';

  if (!reducedMotion) {
    copy.animate(
      [{ opacity: .25, transform: 'translateY(8px)' }, { opacity: 1, transform: 'translateY(0)' }],
      { duration: 320, easing: 'ease-out' }
    );
  }

  copy.querySelector('.eyebrow').textContent = data.stage;
  document.querySelector('#demoTitle').textContent = data.title;
  document.querySelector('#demoText').textContent = data.text;
  document.querySelector('#demoList').replaceChildren(...data.list.map(item => {
    const li = document.createElement('li');
    li.textContent = item;
    return li;
  }));
  document.querySelector('#appStatus').textContent = data.status;
  document.querySelector('#appMode').textContent = data.mode;
  demoIcon.innerHTML = icons[data.icon];
  demoStage.dataset.visual = data.icon;
}

stepTabs.forEach((button, index) => {
  button.tabIndex = index === 0 ? 0 : -1;
  button.addEventListener('click', () => selectStep(button));
  button.addEventListener('keydown', event => {
    if (!['ArrowDown', 'ArrowRight', 'ArrowUp', 'ArrowLeft'].includes(event.key)) return;
    event.preventDefault();
    const direction = ['ArrowDown', 'ArrowRight'].includes(event.key) ? 1 : -1;
    const next = stepTabs[(index + direction + stepTabs.length) % stepTabs.length];
    next.focus();
    selectStep(next);
  });
});

generateSummary.addEventListener('click', () => {
  generateSummary.disabled = true;
  generateSummary.setAttribute('aria-busy', 'true');
  generateSummary.firstChild.textContent = 'Preparando demostración… ';
  summaryTimer = window.setTimeout(() => {
    documentPreview.classList.add('show');
    scanWindow.classList.add('preview-ready');
    generateSummary.disabled = false;
    generateSummary.removeAttribute('aria-busy');
    generateSummary.firstChild.textContent = 'PDF ficticio listo ';
  }, reducedMotion ? 0 : 650);
});

const chart = document.querySelector('.chart-card');
if (chart && 'IntersectionObserver' in window) {
  new IntersectionObserver(([entry], observer) => {
    if (entry.isIntersecting) {
      chart.classList.add('is-visible');
      observer.disconnect();
    }
  }, { threshold: .35 }).observe(chart);
}

const chartSeries = {
  7: { value: '118 / 76', points: '0,57 38,61 76,45 114,55 152,39 190,47 228,35 266,43 300,37', label: '7 días' },
  30: { value: '121 / 78', points: '0,62 38,48 76,53 114,39 152,58 190,43 228,50 266,34 300,45', label: '30 días' },
  90: { value: '119 / 77', points: '0,49 38,55 76,47 114,51 152,44 190,46 228,39 266,43 300,40', label: '90 días' }
};
const periodButtons = [...document.querySelectorAll('[data-period]')];
const chartLine = document.querySelector('.chart-line');
const chartValue = document.querySelector('#chartValue');
const chartPeriodLabel = document.querySelector('#chartPeriodLabel');

periodButtons.forEach(button => button.addEventListener('click', () => {
  const series = chartSeries[button.dataset.period];
  periodButtons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  chartLine.setAttribute('points', series.points);
  chartValue.replaceChildren(document.createTextNode(`${series.value} `));
  const unit = document.createElement('small');
  unit.textContent = 'mmHg';
  chartValue.append(unit);
  chartPeriodLabel.textContent = series.label;
  document.querySelector('.chart-svg').setAttribute('aria-label', `Gráfico ficticio de presión arterial para ${series.label}`);
  if (!reducedMotion) {
    chartLine.animate([{ strokeDashoffset: 500 }, { strokeDashoffset: 0 }], { duration: 650, easing: 'ease-out' });
  }
}));

if (!reducedMotion && 'IntersectionObserver' in window) {
  const numberObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting || entry.target.dataset.done) return;
    entry.target.dataset.done = 'true';
    const target = Number(entry.target.dataset.counter);
    const decimal = String(target).includes('.');
    const start = performance.now();
    const duration = 1100;

    const tick = now => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = target * eased;
      entry.target.textContent = (decimal ? value.toFixed(1) : Math.round(value)).toString().replace('.', ',');
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
    numberObserver.unobserve(entry.target);
  }), { threshold: .8 });
  document.querySelectorAll('[data-counter]').forEach(element => numberObserver.observe(element));
}

const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('.menu a')];

if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
    });
  }), { rootMargin: '-35% 0px -55% 0px' });
  sections.forEach(section => sectionObserver.observe(section));
}

const shareButton = document.querySelector('#shareButton');
const toast = document.querySelector('#toast');

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 2500);
}

shareButton.addEventListener('click', async () => {
  const shareData = {
    title: 'NeuroFAST',
    text: 'Conoce NeuroFAST, tecnología en investigación para acompañar el reconocimiento de señales FAST.',
    url: location.href
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      await navigator.clipboard.writeText(location.href);
      showToast('Enlace copiado.');
    }
  } catch (error) {
    if (error.name !== 'AbortError') showToast('Puedes copiar la URL desde el navegador.');
  }
});
