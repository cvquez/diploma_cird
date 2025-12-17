import { Module, Instructor, PricingTier, FaqItem } from './types';

export const LOGOS = {
  ag: "/public/logo/ag.png",
  mitic: "/public/logo/mitic.png"
};

export const NAV_LINKS = [
  { name: 'Inicio', href: '#hero' },
  { name: 'Programa', href: '#program' },
  { name: 'Temario', href: '#syllabus' },
  { name: 'Docentes', href: '#instructors' },
  { name: 'Inscripción', href: '#pricing' },
];

export const COURSE_MODULES: Module[] = [
  {
    id: 1,
    title: 'IA en el Desarrollo de Software: Fundamentos y Transformación Digital',
    duration: '12 Horas',
    topics: [
      'Introducción a la IA en el ciclo de desarrollo de software (SDLC)',
      'Herramientas de IA generativa, automatización y agentes',
      'Ética y riesgos en el uso de IA',
      'Identificación de casos de uso y mejora de productividad'
    ]
  },
  {
    id: 2,
    title: 'Documentación, Análisis Técnico y Datos Asistidos por IA',
    duration: '24 Horas',
    topics: [
      'Generación asistida de artefactos técnicos',
      'Ejercicios de análisis estructurado con IA',
      'Producción de documentación coherente integrando múltiples herramientas',
      'Técnicas de Prompt Engineering para documentación'
    ]
  },
  {
    id: 3,
    title: 'IA para Desarrollo: Prototipo, Arquitectura y Testing',
    duration: '24 Horas',
    topics: [
      'Vibe coding con IA y prototipado rápido',
      'Generación de código, refactorización y diseño de arquitectura',
      'Explicación de errores y testing automatizado',
      'Diseño de flujos avanzados de desarrollo asistido'
    ]
  },
  {
    id: 4,
    title: 'Automatización y Agentes de IA en el Ciclo de Desarrollo',
    duration: '18 Horas',
    topics: [
      'APIs, orquestación e integraciones con DevOps',
      'Creación de automatizaciones básicas',
      'Integración de agentes inteligentes en flujos de trabajo',
      'Diseño de soluciones originales para acelerar procesos'
    ]
  },
  {
    id: 5,
    title: 'Proyecto Final Integrado',
    duration: '18 Horas',
    topics: [
      'Integración de miniproyectos desarrollados durante el curso',
      'Refactorización final, documentación y presentación',
      'Creación de un portafolio profesional (código y repositorio)',
      'Desarrollo de una solución innovadora y escalable'
    ]
  }
];

export const INSTRUCTORS: Instructor[] = [
  {
    id: 1,
    name: 'Msc. Linda Riquelme',
    role: 'Docente Principal',
    bio: 'Analista de Datos en MentorMate y docente investigadora en la Universidad Católica. Máster en Educación y especialista en Ingeniería Informática, con foco en procesamiento de lenguaje natural (NLP) e ingeniería de software.',
    imageUrl: 'https://ui-avatars.com/api/?name=Linda+Riquelme&background=0ea5e9&color=fff&size=400'
  },
  {
    id: 2,
    name: 'Equipo de Mentores',
    role: 'Soporte Académico',
    bio: 'Profesionales del sector tecnológico encargados del acompañamiento personalizado, resolución de dudas técnicas y seguimiento de proyectos prácticos.',
    imageUrl: 'https://ui-avatars.com/api/?name=Mentores+CIRD&background=1e293b&color=94a3b8&size=400'
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    name: 'Beca Completa',
    price: 'GRATIS',
    features: [
      'Cobertura del 100% por el MITIC',
      '96 horas de formación intensiva',
      'Certificación oficial',
      'Materiales y acceso a plataformas'
    ],
    isRecommended: true
  }
];

export const FAQS: FaqItem[] = [
  {
    question: '¿Cuál es la carga horaria total?',
    answer: 'El diplomado tiene una duración total de 96 horas, distribuidas en 9 horas cátedras semanales (sesiones síncronas y asíncronas).'
  },
  {
    question: '¿Qué requisitos necesito para postular?',
    answer: 'Ser paraguayo/a o residente, mayor de 18 años, y ser egresado BTI (Bachiller Técnico en Informática) o estudiante/egresado universitario de carreras TIC.'
  },
  {
    question: '¿Cómo son las clases?',
    answer: 'La modalidad es virtual con clases síncronas (Zoom/Meet) los martes y jueves de 19:00 a 21:00 hs, más actividades asíncronas en Moodle.'
  }
];