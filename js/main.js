const projects = [
  {
    id: '01',
    name: 'Vengo',
    category: 'App · Gestión de eventos',
    description: 'Plataforma para crear actividades comunitarias, compartir inscripciones mediante enlaces y gestionar la asistencia de forma simple.',
    tech: ['Next.js', 'TypeScript', 'Prisma + PostgreSQL', "Tailwind CSS", "Auth.js", "Vercel Blob"],
    image: 'img/projects/vengo.png',
    alt: 'Vista de la plataforma Vengo',
    url: 'https://www.vengo.click/'
  },
  {
    id: '02', name: 'Racha App', category: 'App · Fitness',
    description: 'Cuaderno digital de entrenamiento para registrar rutinas, seguir progreso y mantener la constancia.',
    tech: ['React', 'JavaScript', 'Prisma', "PostgreSQL", "Tailwind CSS", "Node/Express"], image: 'img/projects/dashboard-racha.png',
    alt: 'Vista de Racha App', url: 'https://www.fitracha.com/'
  },
  {
    id: '03', name: 'Tu Ventana Perfecta', category: 'Web · Empresa',
    description: 'Servicios, productos y cotización en una experiencia pensada para facilitar la decisión de compra.',
    tech: ['HTML', 'CSS', 'JavaScript', "Wordpress CRM", "PHP", "fetch API"], image: 'img/projects/tuventana.png',
    alt: 'Vista de Tu Ventana Perfecta', url: 'https://fergonzalez47.github.io/vanilla-helyver/'
  },
  {
    id: '04', name: 'ROTA Store', category: 'E-commerce · Moda',
    description: 'Vitrina digital centrada en producto, identidad de marca y navegación visual.',
    tech: ['Web', 'Liquid', 'Responsive', "CSS", "Shopify CRM"], image: 'img/projects/rota.png',
    alt: 'Vista de ROTA Store', url: 'https://rotaofficial.com/'
  },
  {
    id: '05', name: 'Tu Shower', category: 'Web · Empresa',
    description: 'Sitio de servicios que lleva el foco a la propuesta de valor y al contacto sin fricción.',
    tech: ['HTML', 'CSS', 'JavaScript', "Wordpress CRM", "PHP", "react"], image: 'img/projects/tushower.png',
    alt: 'Vista de Tu Shower', url: 'https://tushower.cl/newWebsite/'
  },
  {
    id: '06', name: 'FYG Eléctrica', category: 'Web · Servicios',
    description: 'Sitio para una empresa de proyectos y normalización eléctrica, con servicios claros y contacto para cotizaciones.',
    tech: ['Figma', 'Responsive', 'GSC', "HTML5", "CSS", "PHP", "JavaScript", "Wordpress CRM", "Cpanel"], image: 'img/projects/fygelectrica.png',
    alt: 'Vista del sitio FYG Eléctrica', url: 'https://fygelectrica.cl/'
  },
  {
    id: '07', name: 'Cleaning Solutions', category: 'Web · Servicios',
    description: 'Información práctica y una presentación de beneficios diseñada para generar confianza.',
    tech: ['HTML', 'CSS', 'JavaScript', "Wordpress CRM", "PHP", "fetch API"], image: 'img/projects/c-s.png',
    alt: 'Vista de Cleaning Solutions', url: 'https://fergonzalez47.github.io/c-s/'
  },
  {
    id: '08', name: 'Temple Album', category: 'Interacción · JavaScript',
    description: 'Galería filtrable que permite explorar imágenes mediante categorías y criterios.',
    tech: ['JavaScript', 'HTML', 'UI', "CSS"], image: 'img/projects/temple.png',
    alt: 'Vista de Temple Album', url: 'https://fergonzalez47.github.io/wdd131/filtered-temples.html'
  },
  {
    id: '09', name: 'Zen Garden', category: 'Desafío Zen · CSS',
    description: 'Dirección visual aplicada a una misma estructura HTML sin modificarla.',
    tech: ['Unicamente CSS',], image: 'img/projects/zen.png',
    alt: 'Vista del proyecto Zen Garden', url: 'https://fergonzalez47.github.io/CSS-Zen-GArden---Fernando-Gonzalez/'
  }
];

const projectCopy = {
  en: {
    '01': { category: 'App · Event management', description: 'Platform to create community activities, share registrations through links, and manage attendance simply.' },
    '02': { category: 'App · Fitness', description: 'Digital training journal to record routines, track progress, and stay consistent.' },
    '03': { category: 'Web · Business', description: 'Services, products, and quoting in an experience designed to make purchase decisions easier.' },
    '04': { category: 'E-commerce · Fashion', description: 'Digital storefront focused on product, brand identity, and visual navigation.' },
    '05': { category: 'Web · Business', description: 'Service website focused on the value proposition and frictionless contact.' },
    '06': { category: 'Web · Services', description: 'Website for an electrical projects company, with clear services and quote-oriented contact.' },
    '07': { category: 'Web · Services', description: 'Practical information and a benefits-led presentation designed to build trust.' },
    '08': { category: 'Interaction · JavaScript', description: 'Filterable gallery for browsing images through categories and criteria.' },
    '09': { category: 'Zen challenge · CSS', description: 'Visual direction applied to the same HTML structure without changing it.' }
  }
};

const copy = {
  es: {
    nav: ['Proyectos', 'Stack', 'Estudios', 'Contacto', 'Hablemos'], availability: 'Disponible para proyectos',
    hero: 'Diseño y desarrollo soluciones web completas, integrando interfaces ágiles con arquitecturas backend de alto rendimiento. Especializado en automatizar flujos comerciales, optimizar tiempos de carga y llevar productos desde la idea hasta producción.',
    actions: ['Ver proyectos', 'Contacto', 'Descargar CV'], titles: ['Proyectos seleccionados', 'Stack técnico', 'Estudios', 'Contacto'],
    stack: [['Frontend', '<b>React</b> <b>TypeScript</b> <b>Next.js</b> JavaScript (ES6+) HTML CSS / Sass Tailwind CSS Accessibility'], ['Backend &amp; APIs', '<b>Node.js</b> <b>Express.js</b> REST APIs Integración de APIs PHP Validación backend'], ['Datos &amp; CMS', '<b>PostgreSQL</b> MySQL MongoDB Prisma SQL WordPress Sanity Vercel Blob'], ['Calidad &amp; rendimiento', '<b>Playwright</b> Vitest Jest React Testing Lighthouse PageSpeed SEO Responsive Design'], ['Entrega', '<b>Git &amp; GitHub</b> AWS Docker CI/CD Vercel Azure Linux Figma']],
    education: ['Aplicaciones full stack con React, Node.js, APIs REST, testing e integración continua.', 'Formación universitaria en ingeniería de software, estructuras de datos, algoritmos y desarrollo de aplicaciones.', '', 'Interfaces con HTML, CSS, JavaScript, Sass, React y Next.js; diseño responsive y SEO.'],
    certificates: 'Certificaciones', contact: ['¿Tienes un proyecto<br>en mente?<br><span>Hablemos.</span>', 'Abierto a oportunidades freelance, roles full-time y colaboraciones técnicas de largo plazo.', 'Enviar mensaje →'], labels: ['Email', 'LinkedIn', 'GitHub', 'WhatsApp'], footer: 'Fernando Gonzalez · Full Stack Developer · Chile<br>Por tradición a mis inicios en software, este portafolio está hecho únicamente con HTML, CSS y JavaScript.'
  },
  en: {
    nav: ['Projects', 'Stack', 'Education', 'Contact', "Let's talk"], availability: 'Available for projects',
    hero: 'I design and build end-to-end web solutions, combining responsive interfaces with high-performance backend architectures. Specialized in automating business workflows, optimizing load times, and taking products from concept to production.',
    actions: ['View projects', 'Contact', 'Download Resume'], titles: ['Selected projects', 'Technical stack', 'Education', 'Contact'],
    stack: [['Frontend', '<b>React</b> <b>TypeScript</b> <b>Next.js</b> JavaScript (ES6+) HTML CSS / Sass Tailwind CSS Accessibility'], ['Backend &amp; APIs', '<b>Node.js</b> <b>Express.js</b> REST APIs API integration PHP Backend validation'], ['Data &amp; CMS', '<b>PostgreSQL</b> MySQL MongoDB Prisma SQL WordPress Sanity Vercel Blob'], ['Quality &amp; performance', '<b>Playwright</b> Vitest Jest React Testing Lighthouse PageSpeed SEO Responsive Design'], ['Delivery', '<b>Git &amp; GitHub</b> AWS Docker CI/CD Vercel Azure Linux Figma']],
    education: ['Full-stack applications with React, Node.js, REST APIs, testing, and continuous integration.', 'University education in software engineering, data structures, algorithms, and application development.', '', 'Interfaces with HTML, CSS, JavaScript, Sass, React, and Next.js; responsive design and SEO.'],
    certificates: 'Certificates', contact: ['Got a project<br>in mind?<br><span>Let’s talk.</span>', 'Open to freelance opportunities, full-time roles, and long-term technical collaborations.', 'Send message →'], labels: ['Email', 'LinkedIn', 'GitHub', 'WhatsApp'], footer: 'Fernando Gonzalez · Full Stack Developer · Chile<br>Built exclusively with HTML, CSS, and JavaScript as a nod to my software beginnings.'
  }
};

const projectCard = ({ id, name, category, description, tech, image, alt, url }) => `
  <article class="project">
    <a class="project__image" href="${url}" target="_blank" rel="noopener noreferrer">
      <img loading="lazy" src="${image}" alt="${alt}">
    </a>
    <div class="project__content">
      <div class="project__meta"><span>${id}</span><span>${category}</span></div>
      <h3>${name}</h3>
      <p>${description}</p>
      <ul>${tech.map((item) => `<li>${item}</li>`).join('')}</ul>
    </div>
  </article>`;

document.addEventListener('DOMContentLoaded', () => {
  const projectGrid = document.querySelector('#project-grid');
  const renderProjects = (language) => {
    if (!projectGrid) return;
    projectGrid.innerHTML = projects.map((project) => projectCard({
      ...project,
      ...(projectCopy[language]?.[project.id] || {})
    })).join('');
  };

  const certificateDialog = document.querySelector('.certificate-dialog');
  const certificateImage = document.querySelector('.certificate-dialog__image');
  const certificateClose = document.querySelector('.certificate-dialog__close');

  document.querySelectorAll('[data-certificate]').forEach((trigger) => trigger.addEventListener('click', () => {
    if (!certificateDialog || !certificateImage) return;
    certificateImage.src = trigger.dataset.certificate;
    certificateImage.alt = trigger.dataset.certificateAlt;
    certificateDialog.showModal();
  }));

  certificateClose?.addEventListener('click', () => certificateDialog?.close());
  certificateDialog?.addEventListener('click', (event) => {
    if (event.target === certificateDialog) certificateDialog.close();
  });

  const menu = document.querySelector('.menu');
  const nav = document.querySelector('.nav');
  const themeToggle = document.querySelector('.theme-toggle');
  const themeLabel = document.querySelector('.theme-label');
  const languageButtons = document.querySelectorAll('[data-language]');
  let language = localStorage.getItem('portfolio-language') || 'es';

  const setTheme = (theme) => {
    const light = theme === 'light';

    document.body.classList.toggle('light', light);

    themeToggle?.setAttribute('aria-pressed', String(light));
    themeToggle?.setAttribute('aria-label', light ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro');

    if (themeLabel) themeLabel.textContent = language === 'en' ? (light ? 'Dark' : 'Light') : (light ? 'Oscuro' : 'Claro');
    localStorage.setItem('portfolio-theme', theme);

  };

  const setLanguage = (nextLanguage) => {
    language = nextLanguage;
    const text = copy[language];
    document.documentElement.lang = language;
    document.querySelector('.skip').textContent = language === 'en' ? 'Skip to content' : 'Saltar al contenido';
    [...nav.querySelectorAll('a')].forEach((link, index) => { link.textContent = text.nav[index]; });
    document.querySelector('.availability').innerHTML = `<i></i>${text.availability}`;
    document.querySelector('.hero__description').textContent = text.hero;
    document.querySelectorAll('.hero__actions a').forEach((link, index) => { link.textContent = text.actions[index]; });
    ['#proyectos', '#stack', '#trayectoria', '#contacto'].forEach((selector, index) => {
      document.querySelector(`${selector} .title-row h2`).textContent = text.titles[index];
    });
    document.querySelectorAll('.stack > div').forEach((row, index) => {
      row.querySelector('span').innerHTML = text.stack[index][0];
      row.querySelector('p').innerHTML = text.stack[index][1];
    });
    document.querySelectorAll('.timeline li').forEach((item, index) => {
      const description = item.querySelector('p:not(.institution)');
      if (description && text.education[index]) description.textContent = text.education[index];
    });
    document.querySelector('.certs > h3').textContent = text.certificates;
    const contactHeading = document.querySelector('.contact h3');
    contactHeading.innerHTML = text.contact[0];
    document.querySelector('.contact__grid > div > p').textContent = text.contact[1];
    document.querySelector('.contact__grid .button').textContent = text.contact[2];
    document.querySelectorAll('.contact__links span').forEach((label, index) => { label.textContent = text.labels[index]; });
    document.querySelector('footer .container > span:nth-of-type(1)').innerHTML = text.footer;
    languageButtons.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.language === language)));
    renderProjects(language);
    localStorage.setItem('portfolio-language', language);
    setTheme(localStorage.getItem('portfolio-theme') || 'dark');
  };

  setTheme(localStorage.getItem('portfolio-theme') || 'dark');
  setLanguage(language);
  languageButtons.forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.language)));

  themeToggle?.addEventListener('click', () => setTheme(document.body.classList.contains('light') ? 'dark' : 'light'));
  menu?.addEventListener('click', () => {
    const open = nav?.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('menu-open', Boolean(open));
  });
  nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menu?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  }));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav?.classList.contains('open')) {
      nav.classList.remove('open');
      menu?.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('menu-open');
      menu?.focus();
    }
  });
});
