export const profile = {
  name: 'Hery Nandrasana Dodé',
  fullName: 'RANDRIAMANANJATOVO Hery Nandrasana Dodé',
  role: 'Développeur Web Full-Stack',
  age: '22 ans',
  location: 'Analamahitsy, Antananarivo',
  address: 'Lot II N 171 ibis F Analamahitsy',
  email: 'randriadode22@gmail.com',
  phone: '034 08 608 88',
  bio: "Développeur web passionné par la création d'applications modernes, performantes et intuitives. Je maîtrise les technologies front-end (HTML, CSS, JavaScript, Vue.js, Next.js) comme back-end (PHP, Node.js, Java, Symfony, Spring Boot, Python) pour donner vie à des produits complets.",
}

export const skillGroups = [
  {
    title: 'Langages',
    items: ['PHP', 'Java', 'JavaScript', 'Python', 'Node.js', 'HTML', 'CSS', 'Bootstrap'],
  },
  {
    title: 'Frameworks',
    items: ['Symfony', 'Spring Boot', 'Django', 'Next.js', 'Vue.js'],
  },
  {
    title: 'Bases de données',
    items: ['PostgreSQL', 'Oracle', 'MySQL', 'Access'],
  },
  {
    title: 'Outils & Logiciels',
    items: ['VS Code', 'Windsurf', 'GitHub', 'Docker', 'Postman', 'Firebase'],
  },
]

export const experiences = [
  {
    company: 'ESPA — École Supérieure Polytechnique d\u2019Antananarivo',
    role: 'Stage développeur — 4 mois',
    period: 'Décembre 2025 – Mars 2026',
    tasks: [
      "Site vitrine de l'ESPA présentant les informations de l'école avec gestion des actualités et évènements.",
      'Gestion de scolarité : module d\u2019inscription et gestion des notes des étudiants.',
    ],
  },
  {
    company: 'Mesupres',
    role: 'Projet — Gestion documentaire',
    period: 'Projet',
    tasks: ['Développement de la gestion des rapports Mesupres.'],
    link: 'https://rapport.mesupres.mg' // 👈 Ajout du lien ici
  },
  {
    company: "Projets d'étude",
    role: 'Applications web & mobiles',
    period: 'Cursus IT University',
    tasks: [
      "Gestion d'emploi du temps pour un cabinet dentaire.",
      "Gestion des employés via l'API ERPNext pour centraliser les informations de chaque employé.",
      'Gestion des produits sur Dolibarr (stock, fabrication) en exploitant son API.',
      'Plateforme de crypto-monnaies : achat/vente avec suivi des cours en temps réel et application mobile de consultation.',
    ],
    // Si tu ne mets pas de 'link' ici, le bouton ne s'affichera tout simplement pas !
  },
]

export const education = [
  {
    title: 'Licence en développement web',
    place: 'IT University',
    period: '2025',
    detail: 'BACC+3 en informatique — diplôme de licence en développement web.',
  },
  {
    title: 'Baccalauréat série C',
    place: 'NY SEKOLINTSIKA, Analamahitsy',
    period: '',
    detail: 'Baccalauréat scientifique série C.',
  },
]

export const languages = [
  { name: 'Français', level: 'C1', value: 90 },
  { name: 'Anglais', level: 'B1', value: 55 },
  { name: 'Allemand', level: 'A1', value: 25 },
]
