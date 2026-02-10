export const es = {
  common: {
    siteTitle: 'Portafolio – Desarrollador Fullstack',
  },
  nav: {
    items: [
      { id: 'hero', label: 'Inicio' },
      { id: 'projects', label: 'Proyectos' },
      { id: 'contact', label: 'Contacto' },
    ],
  },
  hero: {
    eyebrow: 'Desarrollador Fullstack',
    title: 'Miqueas Moreno', // TODO: reemplaza "Tu Nombre" con tu nombre real
    subtitle:
      'De donde soy, que he hecho, que estoy haciendo ahora y a que estoy apuntando en el futuro.',
    ctaContact: 'Contactar',
  },
  keyboardGuide: {
    title: 'Navegación por Teclado',
    shortcuts: [
      { keys: ['↑', '↓', '←', '→'], description: 'Navegar elementos' },
      { keys: ['Tab'], description: 'Inputs de formulario' },
      { keys: ['1-9'], description: 'Ir a sección' },
      { keys: ['L'], description: 'Cambiar idioma' },
      { keys: ['Enter'], description: 'Activar' },
      { keys: ['Esc'], description: 'Cerrar' },
    ],
  },
  about: {
    heading: 'Informacin personal',
    nameLabel: 'Nombre',
    roleLabel: 'Rol',
    name: 'Tu nombre completo aqu', // TODO: reemplazar con tu nombre real
    role: 'Desarrollador Fullstack',
    summary:
      'Ingeniero fullstack enfocado en construir sistemas robustos y mantenibles de punta a punta  desde la arquitectura y las APIs hasta interfaces cuidadas.',
    principlesTitle: 'Cmo trabajo',
    principles: [
      'Mentalidad orientada al problema: entender la necesidad real antes de elegir herramientas.',
      'Equilibrio entre pragmatismo y calidad: entregar valor rpido sin comprometer la mantenibilidad.',
      'Slidos fundamentos: separacin de responsabilidades, interfaces claras y cdigo defensivo.',
    ],
  },
  contactInfo: {
    heading: 'Informaci�n de contacto',
    emailLabel: 'Correo electr�nico',
    emailValue: 'correo-test@ejemplo.com', // TODO
    linkedinLabel: 'LinkedIn',
    linkedinUrl: 'https://www.linkedin.com/in/tu-perfil', // TODO
    githubLabel: 'GitHub',
    githubUrl: 'https://github.com/tu-usuario', // TODO
    otherHeading: 'Otras plataformas',
    otherItems: ['A�ade enlaces a tu portafolio, comunidades o charlas aqu�.'],
    tooltipEmail: 'Haz clic para copiar el email',
    tooltipLinkedIn: 'Ver perfil',
    tooltipGitHub: 'Ver repositorios',
    copied: 'Copiado',
    failed: 'Error',
    viewProfile: 'Ver perfil profesional',
    viewRepositories: 'Explorar repositorios y contribuciones',
    connectText: 'Elige tu forma preferida de contactar',
  },
  projects: {
    heading: 'Proyectos',
    intro:
      'Una seleccin de proyectos que muestran cmo diseo, implemento y entrego soluciones listas para produccin.',
    cards: [
      {
        id: 'proj-1',
        name: 'Proyecto Uno',
        role: 'Desarrollador Fullstack',
        summary:
          'Descripcin breve del proyecto, el tipo de usuarios y el principal valor que aporta.',
        technologies: ['Astro', 'TypeScript', 'Tailwind CSS'],
        githubUrl: 'https://github.com/tu-usuario/proyecto-uno', // TODO
        liveUrl: 'https://ejemplo.com/proyecto-uno', // TODO
        image: {
          src: '/images/projects/proyecto-uno-thumb.jpg', // TODO
          alt: 'Captura de pantalla de la interfaz de Proyecto Uno',
        },
        caseStudy: {
          problem:
            'Descripcin corta del problema principal que resuelve el proyecto para usuarios o negocio.',
          requirements:
            'Requisitos funcionales y no funcionales clave, incluyendo rendimiento, accesibilidad y restricciones.',
          decisions:
            'Decisiones tcnicas y de diseo importantes, los trade-offs y por qu se eligieron.',
          technologies:
            'Motivos por los que este stack (Astro, TypeScript, Tailwind, etc.) encaja con los objetivos del proyecto.',
          approach:
            'Descripcin general de la arquitectura, responsabilidades de los componentes principales y flujo de datos.',
          results:
            'Impacto medible u observable: mejoras de rendimiento, feedback de usuarios, mantenibilidad o confiabilidad.',
        },
      },
      {
        id: 'proj-2',
        name: 'Proyecto Dos',
        role: 'Backend y diseo de APIs',
        summary:
          'Otro ejemplo centrado en diseo de APIs, rendimiento o integraciones.',
        technologies: ['Node.js', 'PostgreSQL'],
        githubUrl: 'https://github.com/tu-usuario/proyecto-dos', // TODO
        liveUrl: '',
        image: {
          src: '/images/projects/proyecto-dos-thumb.jpg', // TODO
          alt: 'Diagrama o panel relacionado con el backend y APIs de Proyecto Dos',
        },
        caseStudy: {
          problem:
            'Problema de backend o APIs, como cuellos de botella de rendimiento, integraciones poco confiables o escalado.',
          requirements:
            'Requisitos de rendimiento, latencia, confiabilidad e integraciones que guiaron el diseo del sistema.',
          decisions:
            'Decisiones clave sobre modelos de datos, contratos de APIs, gestin de errores y observabilidad.',
          technologies:
            'Razones para usar Node.js, PostgreSQL y cualquier otra tecnologa o infraestructura relacionada.',
          approach:
            'Cmo se estructur la solucin: capas, patrones y cmo se probaron y desplegaron los cambios.',
          results:
            'Mejoras concretas como tiempos de respuesta menores, menos incidencias o entrega ms rpida de funcionalidades.',
        },
      },
    ],
    caseStudyStructure: {
      problem: 'Problema o desafo',
      requirements: 'Requisitos y restricciones',
      decisions: 'Decisiones tcnicas y de diseo',
      technologies: 'Tecnologas y por qu se eligieron',
      approach: 'Enfoque de solucin',
      results: 'Resultados e impacto',
    },
  },
  // se omite la seccin de experiencia en la interfaz para mantener el foco en los proyectos
  experience: {
    heading: 'Experiencia',
    intro:
      'Experiencia que ha moldeado cmo diseño sistemas, colaboro con equipos y entrego software confiable.',
    items: [
      {
        id: 'exp-1',
        role: 'Ingeniero de software / Fullstack',
        company: 'Tu empresa o proyecto', // TODO
        period: 'AAAA  AAAA', // TODO
        summary:
          'Descripcin corta de tus responsabilidades, reas de responsabilidad y tipo de productos en los que has trabajado.',
        highlights: [
          'Diseo e implementacin de funcionalidades a travs de todo el stack (frontend, backend, datos).',
          'Mejoras de rendimiento, observabilidad o confiabilidad en sistemas existentes.',
        ],
      },
    ],
  },
  contactSection: {
    heading: 'Contacto',
    intro:
      'Si te interesa colaborar, contratar o comentar un proyecto, usa el formulario o escribe directamente por correo.',
    visualHint: 'Construyamos algo genial juntos',
    form: {
      nameLabel: 'Nombre',
      emailLabel: 'Correo electrnico',
      messageLabel: 'Mensaje',
      submitLabel: 'Abrir cliente de correo',
      helperText:
        'Este formulario no almacena datos. Abre tu cliente de correo para que mantengas el control de lo que envas.',
    },
  },
};

export type EsDict = typeof es;
