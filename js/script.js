const DEFAULT_LANGUAGE = "fr";
const STORAGE_KEY = "portfolio-language";

const translations = {
  fr: {
    pageTitle: "Mouad Barrou — Portfolio",
    navAbout: "À propos",
    navSkills: "Compétences",
    navExperience: "Expérience",
    navProjects: "Projets",
    navEducation: "Formation",
    navContact: "Contact",
    heroEyebrow: "Ingénieur Full Stack · Support N3",
    heroTitle: "Mouad Barrou",
    heroLead: "Je conçois, développe et fiabilise des applications métier modernes.",
    heroDescription:
      "Ingénieur d’État avec plus de 3 ans d’expérience, spécialisé dans la conception d’architectures microservices performantes. Expert du binôme Java (Spring Boot) et Angular, je maîtrise l’intégralité du cycle de vie logiciel, du développement de nouvelles fonctionnalités à la résolution d’incidents critiques en production.",
    heroProjectsBtn: "Voir mes projets",
    heroContactBtn: "Me contacter",
    heroCvBtn: "Télécharger mon CV",
    profileTitle: "Profil rapide",
    profileText:
      "Développement Full Stack, support production, analyse des logs, microservices et méthodes Agile.",
    locationLabel: "Localisation :",
    emailLabel: "Email :",
    phoneLabel: "Téléphone :",
    skillsEyebrow: "Compétences",
    skillsTitle: "Expertise technique et humaine",
    skillsTechTitle: "Compétences techniques",
    skillsTechText:
      "Java, Spring Boot, Angular, Python, JavaScript, TypeScript, Flask, Laravel, PostgreSQL, MySQL, MongoDB.",
    skillsMethodsTitle: "Méthodes & conception",
    skillsMethodsText:
      "Scrum, SAFe, Kanban, UML, MERISE, BPMN, RGPD, eIDAS, analyse de logs avec Kibana et support utilisateur.",
    skillsSoftTitle: "Soft skills",
    skillsSoftText:
      "Autonomie, esprit analytique, travail en équipe, gestion du temps, curiosité et apprentissage continu.",
    skillsLanguagesTitle: "Langues",
    skillsLanguagesText: "Arabe : langue maternelle · Français : C1 · Anglais : B2",
    experienceEyebrow: "Expérience",
    experienceTitle: "Mon parcours professionnel",
    exp1Period: "Depuis septembre 2023 · Docaposte, Casablanca",
    exp1Title: "Ingénieur Full Stack",
    exp1Item1: "Correction d’anomalies et gestion d’incidents critiques en production.",
    exp1Item2: "Conception et implémentation de nouvelles fonctionnalités.",
    exp1Item3: "Participation aux sessions de planification et d’estimation des charges.",
    exp1Item4: "Analyse des journaux applicatifs via Kibana pour diagnostiquer les incidents.",
    exp1Item5: "Support utilisateur et accompagnement des demandes métier.",
    exp2Period: "Mars 2023 — Août 2023 · Docaposte, Casablanca",
    exp2Title: "Stage de fin d’études — Ingénieur Full Stack",
    exp2Item1: "Développement d’évolutions et de nouvelles fonctionnalités.",
    exp2Item2: "Participation aux réunions de planification et d’estimation.",
    exp2Item3: "Implémentation d’interfaces à partir de maquettes Figma.",
    exp3Period: "Juillet 2021 — Septembre 2021 · FST Tanger",
    exp3Title: "Stage de fin d’année — Développeur web",
    exp3Item1: "Analyse et conception d’une application e-commerce.",
    exp3Item2: "Développement backend avec Laravel.",
    exp3Item3: "Intégration des paiements PayPal et sécurisation via SSL.",
    projectsEyebrow: "Projets",
    projectsTitle: "Quelques réalisations",
    project1Title: "Application web de gestion des étudiants du cycle d’ingénieur LSI",
    project1Text:
      "Conception et développement d’une application web basée sur une architecture REST pour la gestion des étudiants, des inscriptions, des parcours académiques et des emplois du temps.",
    project2Title: "Application web décentralisée pour la gestion des contrats immobiliers",
    project2Text:
      "Conception d’une application web décentralisée basée sur la blockchain et une architecture microservices pour gérer les contrats d’achat et de vente de biens immobiliers.",
    educationEyebrow: "Formation",
    educationTitle: "Diplômes et formations",
    edu1Title: "Diplôme d’ingénieur d’État",
    edu1Text:
      "Filière : Logiciels et systèmes intelligents — Faculté des sciences et des techniques, Tanger",
    edu2Title: "Diplôme d’Études Universitaires en Sciences et Techniques",
    edu2Text:
      "Filière : Mathématique-Informatique-Physique-Chimie — Faculté des sciences et des techniques, Tanger",
    edu3Title: "Baccalauréat",
    edu3Text: "Filière : Sciences Physiques — Lycée Qualifiant Abi Bakr Errazi, Tanger",
    contactEyebrow: "Contact",
    contactTitle: "Travaillons ensemble",
    contactText:
      "Vous avez un projet, une opportunité ou un besoin en développement Full Stack ? N’hésitez pas à me contacter.",
    footerText: "Mouad Barrou — Ingénieur Full Stack / Full Stack Engineer"
  },
  en: {
    pageTitle: "Mouad Barrou — Portfolio",
    navAbout: "About",
    navSkills: "Skills",
    navExperience: "Experience",
    navProjects: "Projects",
    navEducation: "Education",
    navContact: "Contact",
    heroEyebrow: "Full Stack Engineer · L3 Support",
    heroTitle: "Mouad Barrou",
    heroLead: "I design, build, and improve modern business applications.",
    heroDescription:
      "State Engineer with more than 3 years of experience, specialized in designing high-performance microservices architectures. Skilled in Java (Spring Boot) and Angular, I cover the full software lifecycle, from implementing new features to resolving critical production incidents.",
    heroProjectsBtn: "View my projects",
    heroContactBtn: "Contact me",
    heroCvBtn: "Download my resume",
    profileTitle: "Quick profile",
    profileText:
      "Full Stack development, production support, log analysis, microservices, and Agile delivery.",
    locationLabel: "Location:",
    emailLabel: "Email:",
    phoneLabel: "Phone:",
    skillsEyebrow: "Skills",
    skillsTitle: "Technical and human expertise",
    skillsTechTitle: "Technical skills",
    skillsTechText:
      "Java, Spring Boot, Angular, Python, JavaScript, TypeScript, Flask, Laravel, PostgreSQL, MySQL, MongoDB.",
    skillsMethodsTitle: "Methods & design",
    skillsMethodsText:
      "Scrum, SAFe, Kanban, UML, MERISE, BPMN, GDPR, eIDAS, log analysis with Kibana, and user support.",
    skillsSoftTitle: "Soft skills",
    skillsSoftText:
      "Autonomy, analytical mindset, teamwork, time management, curiosity, and continuous learning.",
    skillsLanguagesTitle: "Languages",
    skillsLanguagesText: "Arabic: native · French: C1 · English: B2",
    experienceEyebrow: "Experience",
    experienceTitle: "Professional background",
    exp1Period: "Since September 2023 · Docaposte, Casablanca",
    exp1Title: "Full Stack Engineer",
    exp1Item1: "Bug fixing and management of critical production incidents.",
    exp1Item2: "Design and implementation of new features.",
    exp1Item3: "Participation in planning and workload estimation sessions.",
    exp1Item4: "Application log analysis with Kibana to diagnose incidents.",
    exp1Item5: "User support and business request handling.",
    exp2Period: "March 2023 — August 2023 · Docaposte, Casablanca",
    exp2Title: "Final Year Internship — Full Stack Engineer",
    exp2Item1: "Developed enhancements and new features.",
    exp2Item2: "Participated in planning and estimation meetings.",
    exp2Item3: "Implemented interfaces based on Figma mockups.",
    exp3Period: "July 2021 — September 2021 · FST Tangier",
    exp3Title: "End-of-year Internship — Web Developer",
    exp3Item1: "Analysis and design of an e-commerce application.",
    exp3Item2: "Backend development with Laravel.",
    exp3Item3: "PayPal integration and platform security with SSL.",
    projectsEyebrow: "Projects",
    projectsTitle: "Selected work",
    project1Title: "Web application for managing engineering students",
    project1Text:
      "Designed and developed a web application based on a REST architecture to manage students, enrollments, academic pathways, and class schedules.",
    project2Title: "Decentralized web application for real estate contract management",
    project2Text:
      "Designed a decentralized web application based on blockchain technology and microservices architecture to manage real estate purchase and sale contracts.",
    educationEyebrow: "Education",
    educationTitle: "Degrees and education",
    edu1Title: "State Engineering Degree",
    edu1Text:
      "Field: Software and Intelligent Systems — Faculty of Sciences and Technologies, Tangier",
    edu2Title: "University Diploma in Science and Technology",
    edu2Text:
      "Field: Mathematics, Computer Science, Physics, Chemistry — Faculty of Sciences and Technologies, Tangier",
    edu3Title: "Baccalaureate",
    edu3Text: "Field: Physical Sciences — Abi Bakr Errazi High School, Tangier",
    contactEyebrow: "Contact",
    contactTitle: "Let’s work together",
    contactText:
      "Do you have a project, an opportunity, or a Full Stack development need? Feel free to contact me.",
    footerText: "Mouad Barrou — Full Stack Engineer"
  }
};

function getSavedLanguage() {
  return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANGUAGE;
}

function saveLanguage(lang) {
  localStorage.setItem(STORAGE_KEY, lang);
}

function getCvPath(lang) {
  return lang === "en" ? "assets/cv/cv-en.pdf" : "assets/cv/cv-fr.pdf";
}

function chooseLanguage(lang) {
  saveLanguage(lang);
  window.location.href = "portfolio.html";
}

function applyTranslations(lang) {
  const dict = translations[lang] || translations[DEFAULT_LANGUAGE];
  document.documentElement.lang = lang;
  document.title = dict.pageTitle;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dict[key]) {
      element.textContent = dict[key];
    }
  });

  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });

  const cvButton = document.getElementById("cv-button");
  if (cvButton) {
    cvButton.href = getCvPath(lang);
  }
}

function setupLanguageSwitcher() {
  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const lang = button.dataset.lang;
      saveLanguage(lang);
      applyTranslations(lang);
    });
  });
}

function initPortfolioPage() {
  const savedLanguage = getSavedLanguage();
  applyTranslations(savedLanguage);
  setupLanguageSwitcher();
}

document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.includes("portfolio.html")) {
    initPortfolioPage();
  }
});