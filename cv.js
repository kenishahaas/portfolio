// ===============================
// FORMULAIRE (CONTACT)
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".vogue-form");
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const data = new FormData(form);
      const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        alert("Merci ! Votre message a bien été envoyé.");
        form.reset();
      } else {
        alert("Oups ! Il y a eu un problème lors de l'envoi.");
      }
    });
  }
});

// ===============================
// TRADUCTIONS
// ===============================
const translations = {
  fr: {
    // Navigation
    "nav-about": "À PROPOS",
    "nav-exp": "EXPÉRIENCES",
    "nav-edu": "FORMATIONS",
    "nav-projects": "PROJETS",
    "nav-contact": "CONTACT",

    // Hero Section
    "hero-search": "Stage en Informatique Développement / développment web ou Cybersécurité",
    "hero-bts": "BTS SIO / SLAM",
    "hero-sub": "(Services Informatiques aux Organisations, spécialisation SLAM)",
    "btn-cv": "TÉLÉCHARGER CV (PDF)",
    "btn-mail": "CONTACT MAIL",

    // About
    "title-about": "PORTRAIT",
    "about-p1":
      "Étudiante en BTS SIO, spécialisation SLAM, je me forme aux métiers de l’informatique avec enthousiasme et curiosité. J’aime relever de nouveaux défis et trouver des solutions concrètes qui allient logique et créativité.",
    "about-p2":
      "Après une licence en Économie et Gestion, j’ai choisi de me réorienter vers l’informatique, un domaine qui me passionne réellement. L’an dernier, j’ai passé six mois à Berlin pour améliorer mon allemand et découvrir un environnement international. Cette expérience m’a appris l’autonomie et l’adaptabilité.",
    "about-p3":
      "Aujourd’hui, trilingue (français, anglais, allemand) et motivée, je suis à la recherche d’un stage en informatique. Mon objectif est de mettre en pratique mes compétences et de contribuer à des projets concrets aux côtés de professionnels passionnés.",

    // Exp
    "title-exp": "PARCOURS",
    "exp1-role": "Stagiaire Data & Projet - Berlin",
    "exp1-desc":
      "Mon stage chez Dolling + Partners m’a permis de développer des compétences analytiques et de synthèse en travaillant sur la collecte, le traitement et la présentation de données pour aider à la prise de décision. J’y ai acquis une bonne maîtrise du travail en mode projet, de la communication professionnelle dans un contexte international et de l'études de marché, ce qui a renforcé ma capacité à structurer des informations et à formuler des recommandations pertinentes.",
    "exp2-role": "Conseillère Vente - Bâle",
    "exp2-desc":
      "Chez ZARA, j’ai développé des compétences solides en relation client, en identifiant les besoins, en conseillant les clients et en améliorant leur expérience d’achat. J’ai également renforcé mon sens commercial et visuel à travers le merchandising et la mise en rayon, tout en apprenant à gérer les stocks, à rester efficace en période de forte affluence et à travailler en équipe pour atteindre des objectifs de vente ambitieux",
    "exp3-role": "Serveuse / Barmaid - Saint-Louis",
    "exp3-desc":
      "Cette expérience m’a permis de développer un sens aigu du service client et de la communication, en gérant l’accueil, la prise de commande et le service au bar comme en salle dans un environnement animé. J’y ai renforcé ma rapidité d’exécution et mon sens du détail à travers la préparation de boissons et cocktails, tout en apprenant à gérer une caisse de manière fiable et à travailler efficacement sous pression en coordination avec l’équipe cuisine/bar.",

    // Edu
    "title-edu": "BACKSTAGE",
    "edu1-date": "2027 : en cours (première année)",
    "edu1-school": "Lycée Camille Sée",
    "edu1-deg": "BTS SIO (Services Informatiques aux Organisations)",
    "edu1-spec": "Spécialisation : SLAM (Solutions Logicielles)",
    "edu-loc-colmar": "Colmar, FRANCE",
    "edu2-school": "Université de Strasbourg",
    "edu2-deg": "Licence Économie et Gestion",
    "edu-loc-stras": "Strasbourg, FRANCE",
    "edu3-school": "Lycée Jean Mermoz",
    "edu3-deg": "Baccalauréat Scientifique",
    "edu3-spec": "Spécialisation : Science de l’ingénieur - Section européenne anglais",
    "edu-loc-sl": "Saint-Louis, FRANCE",

    // Projects
    "title-projects": "DOSSIERS",
    "proj1-title": "Portfolio Magazine",
    "proj1-desc":
      "Création d’un site vitrine multilingue (FR/EN/DE) au design minimaliste inspiré de la presse de mode, optimisant l’expérience utilisateur et mettant en valeur le contenu visuel de manière élégante.",
    "proj1-comp": "HTML / CSS / JS",
    "proj2-title": "Analyse de Données Stratégiques",
    "proj2-desc":
      "Analyse et traitement de données stratégiques pour améliorer la prise de décision chez Dolling + Partners, en identifiant les tendances clés et en facilitant la visualisation des résultats pour les équipes décisionnelles.",
    "proj2-comp": "EXCEL / ANALYSE",

    // Contact
    "title-contact": "EN COULISSES",
    "contact-sub1": "MES COORDONNÉES",
    "contact-loc": "LOCALISATION",
    "contact-sub2": "VOUS ÊTES UN RECRUTEUR ?",
    "form-name": "NOM",
    "form-email": "EMAIL",
    "form-btn": "ENVOYER LE MESSAGE",

    // Placeholders
    "ph-name": "Votre nom",
    "ph-email": "votre@mail.com",
    "ph-msg": "Votre proposition de stage...",

    // Footer
    "footer-copy": "© 2025 KENISHA HAAS. TOUS DROITS RÉSERVÉS.",
  },

  en: {
    "nav-about": "ABOUT",
    "nav-exp": "EXPERIENCE",
    "nav-edu": "EDUCATION",
    "nav-projects": "PROJECTS",
    "nav-contact": "CONTACT",

    "hero-search": "IT Internship in Software Development, Web Development or Cybersecurity",
    "hero-bts": "BTS SIO / SLAM",
    "hero-sub": "(IT Services for Organizations, SLAM specialization – Software Solutions & Business Applications)",
    "btn-cv": "DOWNLOAD CV (PDF)",
    "btn-mail": "EMAIL ME",

    "title-about": "PORTRAIT",
    "about-p1":
      "I am currently studying for a BTS SIO with a specialization in SLAM, where I am developing strong skills in computer science with curiosity and enthusiasm. I enjoy taking on new challenges and building practical solutions that combine logical thinking and creativity.",
    "about-p2":
      "After studying Economics and Management, I chose to shift my career path toward IT a field I am genuinely passionate about. Last year, I spent six months in Berlin to improve my German and gain experience in an international environment, which helped me become more independent and adaptable.",
    "about-p3":
      "Today, as a motivated trilingual student (French, English, and German), I am looking for an internship in computer science, particularly in software development, web development, or cybersecurity. My goal is to apply my skills in a real-world setting and contribute meaningfully to projects alongside experienced professionals.",

    "title-exp": "CAREER",
    "exp1-role": "Data & Project Intern - Berlin",
    "exp1-desc":
      "My internship at Dolling + Partners allowed me to develop strong analytical and synthesis skills by working on the collection, processing, and presentation of data to support decision-making. I gained solid experience in project-based work, professional communication in an international environment, and market research, which strengthened my ability to organize information and provide meaningful recommendations.",
    "exp2-role": "Sales Advisor - Basel",
    "exp2-desc":
      "At ZARA, I developed strong customer service skills by identifying clients needs, providing personalized advice, and enhancing their shopping experience. I also strengthened my commercial and visual skills through merchandising and shelf organization, while learning to manage stock, stay efficient during peak periods, and collaborate effectively with the team to achieve ambitious sales targets.",
    "exp3-role": "Waitress / Barmaid - Saint-Louis",
    "exp3-desc":
      "This experience allowed me to develop a strong sense of customer service and communication by managing guest reception, taking orders, and serving at both the bar and tables in a lively environment. I improved my speed and attention to detail through preparing drinks and cocktails, while learning to handle cash reliably and work efficiently under pressure in coordination with the kitchen and bar team.",

    "title-edu": "BACKSTAGE",
    "edu1-date": "2027: Ongoing (First Year)",
    "edu1-school": "Camille Sée High School",
    "edu1-deg": "BTS SIO (IT Services for Organizations)",
    "edu1-spec": "Specialization: Software Development (SLAM)",
    "edu-loc-colmar": "Colmar, FRANCE",
    "edu2-school": "University of Strasbourg",
    "edu2-deg": "Bachelor’s Degree in Economics and Management",
    "edu-loc-stras": "Strasbourg, FRANCE",
    "edu3-school": "Jean Mermoz High School",
    "edu3-deg": "Scientific Baccalaureate",
    "edu3-spec": "Major: Engineering Science - European English Section",
    "edu-loc-sl": "Saint-Louis, FRANCE",

    "title-projects": "PROJECTS",
    "proj1-title": "Magazine Portfolio",
    "proj1-desc":
      "Created a multilingual (FR/EN/DE) showcase website with a minimalist design inspired by fashion magazines, enhancing user experience and presenting visual content in a clean and elegant way.",
    "proj1-comp": "HTML / CSS / JS",
    "proj2-title": "Strategic Data Analysis",
    "proj2-desc":
      "Analyzed and processed strategic data at Dolling + Partners to support decision-making by identifying key trends and providing clear visualizations for management teams.",
    "proj2-comp": "EXCEL / DATA ANALYSIS",

    "title-contact": "BEHIND THE SCENES",
    "contact-sub1": "MY CONTACT DETAILS",
    "contact-loc": "LOCATION",
    "contact-sub2": "ARE YOU A RECRUITER?",
    "form-name": "NAME",
    "form-email": "EMAIL",
    "form-btn": "SEND MESSAGE",

    "ph-name": "Your name",
    "ph-email": "your@mail.com",
    "ph-msg": "Your internship proposal...",

    "footer-copy": "© 2025 KENISHA HAAS. ALL RIGHTS RESERVED.",
  },

  de: {
    "nav-about": "ÜBER MICH",
    "nav-exp": "ERFAHRUNG",
    "nav-edu": "AUSBILDUNG",
    "nav-projects": "PROJEKTE",
    "nav-contact": "KONTAKT",

    "hero-search": "IT-Praktikum in Softwareentwicklung, Webentwicklung oder Cybersicherheit",
    "hero-bts": "BTS SIO / SLAM",
    "hero-sub": "(IT-Dienstleistungen für Organisationen, Spezialisierung SLAM – Softwarelösungen und Geschäftsanwendungen)",
    "btn-cv": "LEBENSLAUF (PDF)",
    "btn-mail": "E-MAIL KONTAKT",

    "title-about": "PORTRÄT",
    "about-p1":
      "Derzeit absolviere ich eine Ausbildung im Rahmen des BTS SIO mit der Spezialisierung SLAM, bei der ich meine Kenntnisse in der Informatik mit viel Neugier und Motivation vertiefe. Besonders schätze ich es, neue Herausforderungen anzunehmen und praxisnahe Lösungen zu entwickeln, die logisches Denken und Kreativität verbinden.",
    "about-p2":
      "Nach einem Studium der Wirtschafts- und Managementwissenschaften habe ich mich bewusst für einen beruflichen Neustart in der Informatik entschieden einem Bereich, der mich wirklich begeistert. Im letzten Jahr habe ich sechs Monate in Berlin verbracht, um meine Deutschkenntnisse zu verbessern und internationale Erfahrungen zu sammeln. Diese Zeit hat meine Selbstständigkeit und Anpassungsfähigkeit deutlich gestärkt.",
    "about-p3":
      "Heute bin ich eine motivierte, trilinguale Studentin (Französisch, Englisch und Deutsch) und suche ein Praktikum im Bereich Informatik, insbesondere in der Softwareentwicklung, Webentwicklung oder Cybersicherheit. Mein Ziel ist es, meine Kenntnisse praktisch anzuwenden und aktiv zu spannenden Projekten in einem professionellen Umfeld beizutragen.",

    "title-exp": "WERDEGANG",
    "exp1-role": "Praktikantin Data & Projekt - Berlin",
    "exp1-desc":
      "Mein Praktikum bei Dolling + Partners ermöglichte mir, meine analytischen und zusammenfassenden Fähigkeiten zu entwickeln, indem ich Daten für die Entscheidungsfindung sammelte, aufbereitete und präsentierte. Ich konnte umfassende Erfahrung in projektorientierter Arbeit, professioneller Kommunikation in einem internationalen Umfeld sowie in der Marktanalyse sammeln, wodurch meine Fähigkeit gestärkt wurde, Informationen zu strukturieren und fundierte Empfehlungen zu geben.",
    "exp2-role": "Verkaufsberaterin - Basel",
    "exp2-desc":
      "Bei ZARA konnte ich meine Fähigkeiten im Kundenservice ausbauen, indem ich die Bedürfnisse der Kunden erkannte, sie beriet und ihr Einkaufserlebnis verbesserte. Gleichzeitig habe ich mein kaufmännisches und visuelles Gespür durch Merchandising und Regalorganisation gestärkt, Lagerbestände verwaltet, in Stoßzeiten effizient gearbeitet und erfolgreich im Team zusammengearbeitet, um anspruchsvolle Verkaufsziele zu erreichen.",
    "exp3-role": "Kellnerin / Barmaid - Saint-Louis",
    "exp3-desc":
      "Diese Erfahrung ermöglichte es mir, mein Verständnis für Kundenservice und Kommunikation zu stärken, indem ich Gäste empfing, Bestellungen aufnahm und sowohl an der Bar als auch im Servicebereich in einem lebhaften Umfeld tätig war. Dabei konnte ich meine Schnelligkeit und Detailgenauigkeit bei der Zubereitung von Getränken und Cocktails verbessern und gleichzeitig den Umgang mit der Kasse zuverlässig erlernen sowie effizient unter Druck im Zusammenspiel mit dem Küchen- und Barteam arbeiten.",

    "title-edu": "BACKSTAGE",
    "edu1-date": "2027: laufend (1. Jahr)",
    "edu1-school": "Camille-Sée-Gymnasium",
    "edu1-deg": "BTS SIO – IT-Dienstleistungen für Organisationen",
    "edu1-spec": "Schwerpunkt: SLAM – Softwarelösungen und Geschäftsanwendungen",
    "edu-loc-colmar": "Colmar, FRANKREICH",
    "edu2-school": "Universität Straßburg",
    "edu2-deg": "Bachelor in Wirtschaft und Management",
    "edu-loc-stras": "Straßburg, FRANKREICH",
    "edu3-school": "Jean-Mermoz-Gymnasium",
    "edu3-deg": "Naturwissenschaftliches Abitur",
    "edu3-spec": "Schwerpunkt: Ingenieurwissenschaften - Europäische Sektion (Englisch)",
    "edu-loc-sl": "Saint-Louis, FRANKREICH",

    "title-projects": "PROJEKTE",
    "proj1-title": "Magazin Portfolio",
    "proj1-desc":
      "Erstellung einer mehrsprachigen (FR/EN/DE) Präsentationswebsite mit minimalistischem Design, inspiriert von Modemagazinen, zur Optimierung der Benutzererfahrung und zur stilvollen Präsentation visueller Inhalte.",
    "proj1-comp": "HTML / CSS / JS",
    "proj2-title": "Strategische Datenanalyse",
    "proj2-desc":
      "Analyse und Aufbereitung strategischer Daten bei Dolling + Partners zur Unterstützung von Entscheidungsprozessen, durch Identifikation wichtiger Trends und Bereitstellung übersichtlicher Visualisierungen für die Führungsteams.",
    "proj2-comp": "EXCEL / DATENALYSEE",

    "title-contact": "HINTER DEN KULISSES",
    "contact-sub1": "MEINE KONTAKTDATEN",
    "contact-loc": "STANDORT",
    "contact-sub2": "SIND SIE RECRUITER?",
    "form-name": "NAME",
    "form-email": "EMAIL",
    "form-btn": "NACHRICHT SENDEN",

    "ph-name": "Ihr Name",
    "ph-email": "ihr@mail.com",
    "ph-msg": "Ihr Praktikumsangebot...",

    "footer-copy": "© 2025 KENISHA HAAS. ALLE RECHTE VORBEHALTEN.",
  },
};

// ===============================
// CV FILES
// ===============================
const cvFiles = {
  fr: "SIO_Kenisha_HAAS_CV_FR.pdf",
  en: "SIO_Kenisha_HAAS_CV_EN.pdf",
  de: "SIO_Kenisha_HAAS_CV_DE.pdf",
};

// ===============================
// CHANGE LANGUAGE (PROPRE)
// ===============================
function applyLanguage(lang) {
  // Boutons langue
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  // Traductions data-key
  document.querySelectorAll("[data-key]").forEach((el) => {
    const key = el.getAttribute("data-key");
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Placeholders
  const nameInput = document.getElementById("input-name");
  const emailInput = document.getElementById("input-email");
  const msgInput = document.getElementById("input-msg");

  if (nameInput) nameInput.placeholder = translations[lang]["ph-name"] || "";
  if (emailInput) emailInput.placeholder = translations[lang]["ph-email"] || "";
  if (msgInput) msgInput.placeholder = translations[lang]["ph-msg"] || "";

  // CV
  const cvLink = document.getElementById("cv-link");
  if (cvLink && cvFiles[lang]) {
    cvLink.href = cvFiles[lang];
  }

  localStorage.setItem("selectedLang", lang);
}

// ===============================
// INIT + EVENTS
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  // clicks
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      applyLanguage(btn.dataset.lang);
    });
  });

  // init
  const savedLang = localStorage.getItem("selectedLang") || "fr";
  applyLanguage(savedLang);
});
