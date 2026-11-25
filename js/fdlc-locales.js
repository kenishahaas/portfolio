/* Extended copy for the FDLC case study, kept separate to keep its page content focused. */
Object.assign(window.I18N.en.caseFdlc, {
  overviewEyebrow:"01 — Project overview", overviewTitle:"A digital guide to the festival", overviewLead:"FDLC is a collaborative BTS SIO SLAM project: a web application for managing and exploring information about the Festival du Livre de Colmar.", overviewText:"The application brings together people, authors, exhibitors, books, events, venues and attendance slots. Developed as a team, it applies the methods and technologies from our programme to a real cultural event.", contextNoteLabel:"Project context", contextNote:"Academic team project · BTS SIO, SLAM specialisation · Festival du Livre de Colmar 2026",
  roleEyebrow:"02 — My role", roleTitle:"My contributions", roleIntro:"Within the collaborative project, my work focused on the participant profile and the information associated with it. I contributed across the interface and data retrieval layers.", roleOneTitle:"Participant profile", roleOneText:"I worked on the person page to present personal information and biography clearly.", roleTwoTitle:"Exhibitor connections", roleTwoText:"I integrated the exhibitors associated with a person, including the related stand number.", roleThreeTitle:"Attendance slots", roleThreeText:"I worked on displaying the four festival attendance slots: Saturday morning and afternoon, and Sunday morning and afternoon.", roleFourTitle:"Navigation and data", roleFourText:"I also integrated navigation from a person to their exhibitors and worked with Angular/Ionic, TypeScript, services and SQL data retrieval.",
  participantEyebrow:"03 — Participant profile", participantTitle:"Making participant information useful", participantIntro:"I improved the person page so visitors can connect a profile with the exhibitors and schedule details linked to that participant.", participantText:"The page brings together the person's details and biography, associated exhibitors, stand number and four attendance periods. I also added navigation towards an exhibitor's information, connecting related parts of the application.", participantCaptureTitle:"Person page interface", participantCaptureText:"A real screen capture will show participant details, biography, exhibitor links, stand and attendance periods.", participantCaptureContribution:"My work: participant details, biography, exhibitors, stand and attendance slots.", angularCaptureTitle:"Exhibitor display in the template", angularCaptureText:"The relevant Angular/HTML excerpt can document how associated exhibitors are rendered and linked.", angularContribution:"My contribution: displaying linked exhibitors and their navigation.", typeScriptContribution:"My contribution: participant display integration and data retrieval.", sqlContribution:"My work: understanding the relationships and LEFT JOINs; full view authorship is not claimed.", captureNeeded:"Evidence image not included in the portfolio files yet.",
  sqlEyebrow:"04 — SQL views & data", sqlTitle:"Connecting related information", sqlIntro:"The PersonneComplete view groups information that belongs together across the festival database.", sqlText:"Working with this model helped me understand how participant, book, exhibitor, attendance-slot and event records relate. LEFT JOIN can keep a person visible even when some associated information is absent. The aim is to make related data easier to retrieve and reduce repeated query logic.", sqlPointOne:"Understand relationships between the tables", sqlPointTwo:"Use LEFT JOIN to retain records with optional related data", sqlPointThree:"Retrieve linked profile and festival information together", sqlCaution:"I am presenting this view as part of my data work; I am not claiming to have created the complete view or that every service uses it.", sqlCaptureTitle:"PersonneComplete SQL view", sqlCaptureText:"Add a capture of the actual SQL definition here to show the joins and selected fields.",
  gitEyebrow:"05 — Collaborative development", gitTitle:"Working with the team through Git", gitIntro:"I worked on my personal Kenisha branch and integrated updates from the shared master branch while preserving existing application behaviour.", gitOneTitle:"Work on my branch", gitOneText:"I developed my assigned changes on the Kenisha branch.", gitTwoTitle:"Bring in shared updates", gitTwoText:"I retrieved updates from master so my work stayed aligned with the team's version.", gitThreeTitle:"Merge and resolve", gitThreeText:"I integrated changes with git merge and resolved conflicts in HTML and TypeScript files.", gitFourTitle:"Validate the integration", gitFourText:"I checked the resulting application with npx ng build and preserved existing functionality.",
  galleryEyebrow:"06 — Technical gallery", galleryTitle:"Project evidence", posterTitle:"Festival visual identity", posterText:"The official poster is a source visual for the collaborative application project.", posterTech:"Festival artwork · not an application screenshot", posterContribution:"Project context · collective work", modelTech:"SQL · relational data model", modelContribution:"Reference model used to understand data relationships", galleryAngularTitle:"Angular / HTML participant view", galleryAngularText:"Add a real capture of the template that displays exhibitors associated with a person.", galleryTypeScriptTitle:"TypeScript participant logic", galleryTypeScriptText:"Add the corresponding component or service capture once the source is available.", gallerySqlTitle:"SQL · PersonneComplete", gallerySqlText:"Add a capture of the real view definition to document the joins and returned data.",
  challengeEyebrow:"07 — Challenges & solutions", challengeTitle:"What I learned to work through", challengeOneTitle:"Combining data sources", challengeOneText:"Bringing profile details, exhibitors and schedules together required understanding how their records connect and presenting them as one useful view.", challengeTwoTitle:"Showing attendance periods", challengeTwoText:"The four time slots needed to be easy to distinguish. I worked on integrating them into the participant profile so the schedule is understandable at a glance.", challengeThreeTitle:"Integrating team updates", challengeThreeText:"Updates from master had to fit with my branch. I used merges to bring in shared work while keeping my contribution intact.", challengeFourTitle:"Resolving conflicts carefully", challengeFourText:"Conflicts in HTML and TypeScript called for checking each change, preserving existing behaviour and validating the integration with a build.",
  closingEyebrow:"Festival du Livre de Colmar · 2026", closingTitle:"A team project with a real audience", closingText:"This work gave me the opportunity to contribute to an application intended for festival visitors and practise how interface, data and teamwork come together in a real project."
});

Object.assign(window.I18N.fr.caseFdlc, {
  overviewEyebrow:"01 — Présentation du projet", overviewTitle:"Un guide numérique pour le festival", overviewLead:"FDLC est un projet collaboratif de BTS SIO SLAM : une application web pour gérer et consulter les informations du Festival du Livre de Colmar.", overviewText:"L’application rassemble des informations sur les personnes, les auteurs, les exposants, les livres, les événements, les lieux et les créneaux de présence. Développée en équipe, elle nous permet d’appliquer les méthodes et technologies de la formation à un événement culturel réel.", contextNoteLabel:"Contexte du projet", contextNote:"Projet scolaire en équipe · BTS SIO, option SLAM · Festival du Livre de Colmar 2026",
  roleEyebrow:"02 — Mon rôle", roleTitle:"Mes contributions", roleIntro:"Dans ce projet collectif, j’ai surtout travaillé sur le profil des participants et les informations qui lui sont associées. Ma contribution a porté sur l’interface et la récupération des données.", roleOneTitle:"Profil du participant", roleOneText:"J’ai travaillé sur la page personne pour présenter clairement les informations personnelles et la biographie.", roleTwoTitle:"Liens avec les exposants", roleTwoText:"J’ai intégré les exposants associés à une personne, avec le numéro de stand correspondant.", roleThreeTitle:"Créneaux de présence", roleThreeText:"J’ai participé à l’affichage des quatre créneaux du festival : samedi matin et après-midi, puis dimanche matin et après-midi.", roleFourTitle:"Navigation et données", roleFourText:"J’ai également intégré la navigation d’une personne vers ses exposants et travaillé avec Angular/Ionic, TypeScript, les services et la récupération des données SQL.",
  participantEyebrow:"03 — Profil du participant", participantTitle:"Rendre les informations des participants utiles", participantIntro:"J’ai amélioré la page personne afin de relier un profil aux exposants et aux horaires associés à cette personne.", participantText:"La page rassemble les informations personnelles et la biographie, les exposants associés, le numéro de stand et les quatre périodes de présence. J’ai également ajouté une navigation vers les informations d’un exposant pour relier les différentes parties de l’application.", participantCaptureTitle:"Interface de la page personne", participantCaptureText:"Une vraie capture montrera les informations du participant, sa biographie, les liens vers les exposants, le stand et les créneaux de présence.", participantCaptureContribution:"Ma contribution : informations, biographie, exposants, stand et créneaux de présence.", angularCaptureTitle:"Affichage des exposants dans le template", angularCaptureText:"L’extrait Angular/HTML correspondant permettra de montrer comment les exposants associés sont affichés et reliés.", angularContribution:"Ma contribution : affichage des exposants associés et navigation vers ceux-ci.", typeScriptContribution:"Ma contribution : intégration de l’affichage du participant et récupération des données.", sqlContribution:"Mon travail : compréhension des relations et des LEFT JOIN ; je ne revendique pas la création complète de la vue.", captureNeeded:"Capture justificative absente des fichiers du portfolio pour le moment.",
  sqlEyebrow:"04 — Vues SQL et données", sqlTitle:"Relier les informations", sqlIntro:"La vue PersonneComplete regroupe des informations liées provenant de plusieurs tables de la base du festival.", sqlText:"Ce modèle m’a aidée à comprendre les liens entre les personnes, les livres, les exposants, les créneaux de présence et les événements. Un LEFT JOIN peut conserver une personne même lorsque certaines informations associées sont absentes. L’objectif est de faciliter la récupération des données liées et de limiter la répétition des requêtes.", sqlPointOne:"Comprendre les relations entre les tables", sqlPointTwo:"Utiliser LEFT JOIN pour conserver les enregistrements avec des données associées facultatives", sqlPointThree:"Récupérer ensemble les informations liées au profil et au festival", sqlCaution:"Je présente cette vue dans le cadre de mon travail sur les données ; je ne prétends pas avoir créé la vue complète ni qu’elle est utilisée par tous les services.", sqlCaptureTitle:"Vue SQL PersonneComplete", sqlCaptureText:"Ajouter ici une capture de la définition SQL réelle pour montrer les jointures et les champs sélectionnés.",
  gitEyebrow:"05 — Développement collaboratif", gitTitle:"Collaborer avec Git", gitIntro:"J’ai travaillé sur ma branche personnelle Kenisha et intégré les nouveautés de la branche partagée master en veillant à préserver le fonctionnement existant.", gitOneTitle:"Travailler sur ma branche", gitOneText:"J’ai développé les changements qui m’étaient confiés sur la branche Kenisha.", gitTwoTitle:"Récupérer les mises à jour", gitTwoText:"J’ai récupéré les nouveautés de master pour garder mon travail aligné sur la version de l’équipe.", gitThreeTitle:"Fusionner et résoudre", gitThreeText:"J’ai intégré les changements avec git merge et résolu des conflits dans des fichiers HTML et TypeScript.", gitFourTitle:"Valider l’intégration", gitFourText:"J’ai vérifié l’application obtenue avec npx ng build et préservé les fonctionnalités existantes.",
  galleryEyebrow:"06 — Galerie technique", galleryTitle:"Éléments de preuve", posterTitle:"Identité visuelle du festival", posterText:"L’affiche officielle est un visuel de référence du projet d’application réalisé en équipe.", posterTech:"Visuel du festival · pas une capture de l’application", posterContribution:"Contexte du projet · travail collectif", modelTech:"SQL · modèle de données relationnel", modelContribution:"Modèle de référence utilisé pour comprendre les relations des données", galleryAngularTitle:"Vue participant Angular / HTML", galleryAngularText:"Ajouter une capture réelle du template qui affiche les exposants liés à une personne.", galleryTypeScriptTitle:"Logique participant en TypeScript", galleryTypeScriptText:"Ajouter une capture du composant ou du service correspondant lorsque le code source sera disponible.", gallerySqlTitle:"SQL · PersonneComplete", gallerySqlText:"Ajouter une capture de la définition réelle de la vue pour montrer les jointures et les données retournées.",
  challengeEyebrow:"07 — Difficultés et solutions", challengeTitle:"Les problèmes que j’ai appris à résoudre", challengeOneTitle:"Combiner plusieurs sources", challengeOneText:"Rassembler les informations du profil, les exposants et les horaires demandait de comprendre les liens entre les données et de les présenter dans une vue utile.", challengeTwoTitle:"Afficher les créneaux de présence", challengeTwoText:"Les quatre créneaux devaient être faciles à distinguer. J’ai travaillé à leur intégration dans le profil participant pour rendre le planning compréhensible d’un coup d’œil.", challengeThreeTitle:"Intégrer les nouveautés de l’équipe", challengeThreeText:"Les mises à jour de master devaient être compatibles avec ma branche. Les fusions m’ont permis d’intégrer le travail partagé tout en conservant ma contribution.", challengeFourTitle:"Résoudre les conflits avec soin", challengeFourText:"Les conflits HTML et TypeScript nécessitaient de vérifier chaque changement, de préserver le fonctionnement existant et de valider l’intégration par une compilation.",
  closingEyebrow:"Festival du Livre de Colmar · 2026", closingTitle:"Un projet d’équipe pour de vrais visiteurs", closingText:"Ce travail m’a permis de contribuer à une application destinée aux visiteurs du festival et de mettre en pratique la collaboration entre interface, données et travail d’équipe dans un projet concret."
});

Object.assign(window.I18N.de.caseFdlc, {
  overviewEyebrow:"01 — Projektübersicht", overviewTitle:"Ein digitaler Wegweiser zum Festival", overviewLead:"FDLC ist ein gemeinsames BTS-SIO-SLAM-Projekt: eine Webanwendung zur Verwaltung und Anzeige von Informationen rund um das Festival du Livre de Colmar.", overviewText:"Die Anwendung bündelt Informationen zu Personen, Autorinnen und Autoren, Ausstellern, Büchern, Veranstaltungen, Orten und Anwesenheitszeiten. Im Team setzen wir Methoden und Technologien aus unserer Ausbildung in einem realen Kulturprojekt ein.", contextNoteLabel:"Projektkontext", contextNote:"Gemeinschaftliches Schulprojekt · BTS SIO, Schwerpunkt SLAM · Festival du Livre de Colmar 2026",
  roleEyebrow:"02 — Meine Rolle", roleTitle:"Meine Beiträge", roleIntro:"Im Teamprojekt lag mein Schwerpunkt auf dem Teilnehmerprofil und den dazugehörigen Informationen. Ich arbeitete sowohl an der Oberfläche als auch am Datenabruf.", roleOneTitle:"Teilnehmerprofil", roleOneText:"Ich arbeitete an der Personenseite, damit persönliche Angaben und Biografie übersichtlich dargestellt werden.", roleTwoTitle:"Verknüpfte Aussteller", roleTwoText:"Ich integrierte die einer Person zugeordneten Aussteller einschließlich der zugehörigen Standnummer.", roleThreeTitle:"Anwesenheitszeiten", roleThreeText:"Ich arbeitete an der Anzeige der vier Festivalzeiten: Samstagvormittag und -nachmittag sowie Sonntagvormittag und -nachmittag.", roleFourTitle:"Navigation und Daten", roleFourText:"Außerdem integrierte ich die Navigation von einer Person zu ihren Ausstellern und arbeitete mit Angular/Ionic, TypeScript, Services und dem Abruf von SQL-Daten.",
  participantEyebrow:"03 — Teilnehmerprofil", participantTitle:"Teilnehmerinformationen sinnvoll verbinden", participantIntro:"Ich verbesserte die Personenseite, damit sich ein Profil mit den zugehörigen Ausstellern und Zeitangaben verbinden lässt.", participantText:"Die Seite führt persönliche Angaben und Biografie, zugeordnete Aussteller, Standnummer und vier Anwesenheitszeiten zusammen. Zusätzlich integrierte ich die Navigation zu den Informationen eines Ausstellers, damit verbundene Bereiche der Anwendung erreichbar sind.", participantCaptureTitle:"Oberfläche der Personenseite", participantCaptureText:"Ein echter Screenshot soll Teilnehmerangaben, Biografie, Ausstellerverknüpfungen, Stand und Anwesenheitszeiten zeigen.", participantCaptureContribution:"Mein Beitrag: Angaben, Biografie, Aussteller, Stand und Anwesenheitszeiten.", angularCaptureTitle:"Ausstelleranzeige im Template", angularCaptureText:"Der passende Angular/HTML-Ausschnitt kann zeigen, wie zugeordnete Aussteller dargestellt und verlinkt werden.", angularContribution:"Mein Beitrag: verknüpfte Aussteller anzeigen und ihre Navigation ermöglichen.", typeScriptContribution:"Mein Beitrag: Integration der Teilnehmeranzeige und Datenabruf.", sqlContribution:"Meine Arbeit: Beziehungen und LEFT JOINs verstehen; die vollständige Erstellung der Ansicht beanspruche ich nicht.", captureNeeded:"Ein entsprechender Screenshot ist derzeit noch nicht in den Portfolio-Dateien vorhanden.",
  sqlEyebrow:"04 — SQL-Ansichten und Daten", sqlTitle:"Verknüpfte Informationen zusammenführen", sqlIntro:"Die Ansicht PersonneComplete bündelt zusammengehörige Informationen aus mehreren Tabellen der Festivaldatenbank.", sqlText:"Die Arbeit mit diesem Modell half mir, die Beziehungen zwischen Personen, Büchern, Ausstellern, Anwesenheitszeiten und Veranstaltungen zu verstehen. Ein LEFT JOIN kann eine Person auch dann anzeigen, wenn manche zugehörigen Angaben fehlen. Ziel ist ein einfacherer Zugriff auf verbundene Daten und weniger wiederholte Abfragelogik.", sqlPointOne:"Beziehungen zwischen Tabellen verstehen", sqlPointTwo:"LEFT JOIN verwenden, um Datensätze mit optionalen Zusatzdaten zu behalten", sqlPointThree:"Zusammengehörige Profil- und Festivalinformationen gemeinsam abrufen", sqlCaution:"Ich stelle die Ansicht im Zusammenhang mit meiner Datenarbeit vor. Ich behaupte nicht, die gesamte Ansicht erstellt zu haben oder dass alle Services sie bereits verwenden.", sqlCaptureTitle:"SQL-Ansicht PersonneComplete", sqlCaptureText:"Hier einen Screenshot der tatsächlichen SQL-Definition ergänzen, damit Joins und ausgewählte Felder sichtbar werden.",
  gitEyebrow:"05 — Zusammenarbeit und Entwicklung", gitTitle:"Gemeinsam mit Git entwickeln", gitIntro:"Ich arbeitete auf meinem persönlichen Branch Kenisha und integrierte Aktualisierungen aus dem gemeinsamen master-Branch, wobei ich die vorhandene Funktionalität bewahrte.", gitOneTitle:"Auf meinem Branch arbeiten", gitOneText:"Meine zugewiesenen Änderungen entwickelte ich im Branch Kenisha.", gitTwoTitle:"Gemeinsame Aktualisierungen übernehmen", gitTwoText:"Ich holte Aktualisierungen aus master, damit mein Stand mit der Teamversion übereinstimmte.", gitThreeTitle:"Zusammenführen und Konflikte lösen", gitThreeText:"Mit git merge integrierte ich Änderungen und löste Konflikte in HTML- und TypeScript-Dateien.", gitFourTitle:"Integration überprüfen", gitFourText:"Ich prüfte die Anwendung mit npx ng build und erhielt die bestehenden Funktionen.",
  galleryEyebrow:"06 — Technische Galerie", galleryTitle:"Projektbelege", posterTitle:"Visuelle Identität des Festivals", posterText:"Das offizielle Plakat ist ein Referenzmotiv für das gemeinsam entwickelte Anwendungsprojekt.", posterTech:"Festivalmotiv · kein Anwendungsscreenshot", posterContribution:"Projektkontext · Teamarbeit", modelTech:"SQL · relationales Datenmodell", modelContribution:"Referenzmodell zum Verständnis der Datenbeziehungen", galleryAngularTitle:"Angular-/HTML-Ansicht der Teilnehmenden", galleryAngularText:"Hier einen echten Screenshot des Templates ergänzen, das die einer Person zugeordneten Aussteller anzeigt.", galleryTypeScriptTitle:"TypeScript-Logik des Teilnehmerprofils", galleryTypeScriptText:"Den passenden Komponenten- oder Service-Ausschnitt ergänzen, sobald der Quellcode verfügbar ist.", gallerySqlTitle:"SQL · PersonneComplete", gallerySqlText:"Einen Screenshot der tatsächlichen Ansicht ergänzen, um Joins und zurückgegebene Daten zu zeigen.",
  challengeEyebrow:"07 — Herausforderungen und Lösungen", challengeTitle:"Technische Herausforderungen bewältigen", challengeOneTitle:"Datenquellen zusammenführen", challengeOneText:"Profilangaben, Aussteller und Zeitpläne zusammenzubringen erforderte, ihre Beziehungen zu verstehen und sie übersichtlich darzustellen.", challengeTwoTitle:"Anwesenheitszeiten anzeigen", challengeTwoText:"Die vier Zeitfenster sollten leicht unterscheidbar sein. Ich arbeitete daran, sie in das Teilnehmerprofil einzubinden und den Ablauf schnell erfassbar zu machen.", challengeThreeTitle:"Teamaktualisierungen integrieren", challengeThreeText:"Aktualisierungen aus master mussten zu meinem Branch passen. Durch Zusammenführen integrierte ich die gemeinsame Arbeit und erhielt meinen eigenen Beitrag.", challengeFourTitle:"Konflikte sorgfältig lösen", challengeFourText:"Konflikte in HTML und TypeScript machten es nötig, Änderungen einzeln zu prüfen, vorhandenes Verhalten zu erhalten und die Integration per Build zu kontrollieren.",
  closingEyebrow:"Festival du Livre de Colmar · 2026", closingTitle:"Ein Teamprojekt für echte Besucher", closingText:"Durch dieses Projekt konnte ich zu einer Anwendung für Festivalbesucher beitragen und das Zusammenspiel von Oberfläche, Daten und Teamarbeit in einem konkreten Projekt erleben."
});

/* Evidence and copy focused on Kenisha's Person page contribution. */
Object.assign(window.I18N.en.caseFdlc, {
  roleIntro:"My contribution to the team project was the People page. The screenshots show the parts I worked on: browsing the directory and narrowing it by name or role.",
  roleOneTitle:"People directory", roleOneText:"I developed the page that presents the festival's people in a clear, browsable list.",
  roleTwoTitle:"Name search", roleTwoText:"I worked on the search field so visitors can find a person by name.",
  roleThreeTitle:"Role filter", roleThreeText:"I added a role selector to help visitors narrow the list, with options such as author, illustrator and technical team.",
  roleFourTitle:"Mobile presentation", roleFourText:"I adapted the directory and its expanded filter menu for a compact screen.",
  participantTitle:"A clearer way to browse people", participantIntro:"I developed the People page, giving visitors a direct way to browse the festival directory and filter its entries.",
  participantText:"The page combines a name search, a role selector and a list of people with their roles. I focused my work on this directory experience, including how the role options open on mobile.",
  appHomeAlt:"Home screen of the Festival du Livre application", appHomeTitle:"Festival application home", appHomeText:"The home screen links visitors to the programme, venue map, authors and personal planning.",
  peopleDirectoryAlt:"Mobile People page showing the name search, role selector and directory list", peopleDirectoryTitle:"People directory on mobile", peopleDirectoryText:"The screen shows the name search, role selector and list of people with their roles.",
  peopleFilterAlt:"Mobile People page with the role filter expanded", peopleFilterTitle:"Filtering people by role", peopleFilterText:"The expanded selector shows the available roles for narrowing the directory."
});

Object.assign(window.I18N.fr.caseFdlc, {
  roleIntro:"Dans ce projet d’équipe, ma contribution a porté sur la page Personnes. Les captures montrent les éléments sur lesquels j’ai travaillé : parcourir l’annuaire et filtrer les résultats par nom ou par rôle.",
  roleOneTitle:"Annuaire des personnes", roleOneText:"J’ai développé la page qui présente les personnes du festival sous la forme d’une liste facile à parcourir.",
  roleTwoTitle:"Recherche par nom", roleTwoText:"J’ai travaillé sur le champ de recherche pour retrouver une personne à partir de son nom.",
  roleThreeTitle:"Filtre par rôle", roleThreeText:"J’ai ajouté un sélecteur de rôle pour affiner la liste, avec des options comme auteur, animateur ou équipe technique.",
  roleFourTitle:"Affichage mobile", roleFourText:"J’ai adapté l’annuaire et l’ouverture du menu de filtres aux petits écrans.",
  participantTitle:"Parcourir les personnes plus facilement", participantIntro:"J’ai développé la page Personnes pour permettre aux visiteurs de consulter l’annuaire du festival et d’en filtrer les entrées.",
  participantText:"La page réunit une recherche par nom, un sélecteur de rôle et une liste des personnes avec leur fonction. Mon travail s’est concentré sur cette expérience d’annuaire, y compris l’ouverture des options de rôle sur mobile.",
  appHomeAlt:"Page d’accueil de l’application du Festival du Livre", appHomeTitle:"Accueil de l’application du festival", appHomeText:"L’accueil donne accès au programme, au plan du salon, aux auteurs et au planning personnel.",
  peopleDirectoryAlt:"Page Personnes sur mobile avec recherche par nom, sélecteur de rôle et liste", peopleDirectoryTitle:"Annuaire des personnes sur mobile", peopleDirectoryText:"L’écran montre la recherche par nom, le sélecteur de rôle et la liste des personnes avec leur fonction.",
  peopleFilterAlt:"Page Personnes sur mobile avec le filtre de rôle ouvert", peopleFilterTitle:"Filtrer les personnes par rôle", peopleFilterText:"Le sélecteur ouvert présente les rôles disponibles pour filtrer l’annuaire."
});

Object.assign(window.I18N.de.caseFdlc, {
  roleIntro:"Mein Beitrag zum Teamprojekt war die Personenseite. Die Screenshots zeigen die Bereiche, an denen ich gearbeitet habe: das Verzeichnis durchsuchen und nach Namen oder Rolle filtern.",
  roleOneTitle:"Personenverzeichnis", roleOneText:"Ich entwickelte die Seite, auf der sich die Personen des Festivals übersichtlich durchsehen lassen.",
  roleTwoTitle:"Suche nach Namen", roleTwoText:"Ich arbeitete am Suchfeld, damit Besucher Personen über ihren Namen finden können.",
  roleThreeTitle:"Filter nach Rolle", roleThreeText:"Ich ergänzte eine Rollenauswahl, mit der sich die Liste eingrenzen lässt, zum Beispiel nach Autor, Animateur oder Technikteam.",
  roleFourTitle:"Mobile Darstellung", roleFourText:"Ich passte das Verzeichnis und das geöffnete Filtermenü an kleine Bildschirme an.",
  participantTitle:"Personen einfacher finden", participantIntro:"Ich entwickelte die Personenseite, damit Besucher das Festivalverzeichnis durchsuchen und die Einträge filtern können.",
  participantText:"Die Seite verbindet eine Namenssuche, eine Rollenauswahl und eine Liste mit Personen und ihren Rollen. Meine Arbeit konzentrierte sich auf dieses Verzeichnis, einschließlich der geöffneten Rollenauswahl auf dem Smartphone.",
  appHomeAlt:"Startseite der Anwendung für das Festival du Livre", appHomeTitle:"Startseite der Festivalanwendung", appHomeText:"Von der Startseite gelangen Besucher zum Programm, zum Lageplan, zu den Autoren und zu ihrer persönlichen Planung.",
  peopleDirectoryAlt:"Mobile Personenseite mit Namenssuche, Rollenauswahl und Verzeichnisliste", peopleDirectoryTitle:"Personenverzeichnis auf dem Smartphone", peopleDirectoryText:"Der Bildschirm zeigt die Namenssuche, die Rollenauswahl und die Personenliste mit Rollen.",
  peopleFilterAlt:"Mobile Personenseite mit geöffneter Rollenauswahl", peopleFilterTitle:"Personen nach Rolle filtern", peopleFilterText:"Die geöffnete Auswahl zeigt die verfügbaren Rollen zum Eingrenzen des Verzeichnisses."
});

Object.assign(window.I18N.en.caseFdlc, {
  alainBauerTopAlt:"Profile details, exhibitor stand and festival map for Alain Bauer",
  alainBauerDetailsAlt:"Alain Bauer's event schedule and book list",
  alainBauerTitle:"Alain Bauer's participant page",
  alainBauerText:"The two captures are grouped together to show the profile, stand location, event schedule and books on one page."
});
Object.assign(window.I18N.fr.caseFdlc, {
  alainBauerTopAlt:"Profil, stand associé et plan du festival pour Alain Bauer",
  alainBauerDetailsAlt:"Programme des événements et liste des livres d’Alain Bauer",
  alainBauerTitle:"La page participant d’Alain Bauer",
  alainBauerText:"Les deux captures sont réunies pour montrer le profil, l’emplacement du stand, les événements et les livres sur une même page."
});
Object.assign(window.I18N.de.caseFdlc, {
  alainBauerTopAlt:"Profil, zugeordneter Stand und Festivalplan von Alain Bauer",
  alainBauerDetailsAlt:"Veranstaltungsprogramm und Bücherliste von Alain Bauer",
  alainBauerTitle:"Die Teilnehmerseite von Alain Bauer",
  alainBauerText:"Die beiden Screenshots sind zusammengefasst und zeigen Profil, Stand, Veranstaltungen und Bücher auf einer Seite."
});

/* Final, source-checked copy focused on the People directory and person detail page. */
Object.assign(window.I18N.en.caseFdlc, {
  roleIntro:"The app helps festival visitors browse the People directory, find a participant and view their profile with related festival information. My work focused on building the directory and person-page experience.",
  roleOneTitle:"People directory", roleOneText:"I built the page that presents festival participants in a list visitors can browse.",
  roleTwoTitle:"Find a person", roleTwoText:"I added a name search with filtering and reset actions, so visitors can narrow the directory and start again easily.",
  roleThreeTitle:"Person detail page", roleThreeText:"I built an individual page that presents a participant's photo, name, speciality and biography when available.",
  roleFourTitle:"Related festival information", roleFourText:"The page brings together linked exhibitors and stand details, attendance periods, events and books where available.",
  participantEyebrow:"03 — Person page", participantTitle:"From a directory entry to a full profile", participantIntro:"Selecting a name opens its person page, where the visitor can see the profile and related festival information in one place.",
  participantText:"I worked on the person page and its connections to the app's data: the participant's photo, name and speciality, an optional biography, linked exhibitors with stand numbers and attendance periods, plus related events and books. Sections appear when relevant information is available, keeping each profile useful without showing empty blocks.",
  sqlEyebrow:"04 — Directory flow", sqlTitle:"A simple path from search to profile", sqlIntro:"The directory lets a visitor enter a name, apply the search, and open the matching person page from a list item.",
  sqlText:"In the page logic, the entered name is trimmed before filtering, and the reset action clears both the field and the displayed search value. Each result links to the person page using that participant's ID.",
  sqlPointOne:"Search the directory by name", sqlPointTwo:"Clear the search and restore the full list", sqlPointThree:"Open the selected person's page from their result",
  sqlCaution:"These are the two parts I developed: the directory page and the individual person page, within a shared team application.",
  gitEyebrow:"05 — Person page details", gitTitle:"Bringing a participant's information together", gitIntro:"The detail page connects a person's profile to the festival information visitors may need next.",
  gitOneTitle:"Profile", gitOneText:"Show the person's name, photo and speciality, with a fallback when a photo cannot be loaded.",
  gitTwoTitle:"Biography", gitTwoText:"Display the biography only when one exists, while preserving its paragraph breaks.",
  gitThreeTitle:"Stands and times", gitThreeText:"List linked exhibitors, their stand numbers and the person's festival attendance periods.",
  gitFourTitle:"Events and books", gitFourText:"Include the related events and books through the app's existing components when those items are available.",
  peopleFilterTitle:"Directory interface", peopleFilterText:"A mobile view of the directory's filtering controls.",
  directoryCodeTitle:"Opening a person page", directoryCodeText:"A directory result links to the individual page with the selected person's ID.",
  profileCodeTitle:"Showing an optional biography", profileCodeText:"The profile template displays the biography block only when biography text exists.",
  challengeTitle:"Making the two pages work together", challengeOneTitle:"Finding the right person", challengeOneText:"The name search needs to make a long directory easier to browse and provide a clear way to return to the full list.",
  challengeTwoTitle:"Keeping profiles readable", challengeTwoText:"Optional details such as a photo or biography should not leave awkward empty sections when they are missing.",
  challengeThreeTitle:"Linking festival details", challengeThreeText:"A person can be linked to exhibitors, stands, time slots, events and books; the page brings these relationships together for visitors.",
  challengeFourTitle:"Making navigation clear", challengeFourText:"Selecting a directory entry should open the matching profile, and links from that profile should lead to the relevant festival information.",
});
Object.assign(window.I18N.fr.caseFdlc, {
  roleIntro:"L’application aide les visiteurs à parcourir la liste des personnes, à retrouver un participant et à consulter son profil ainsi que les informations du festival qui lui sont liées. J’ai travaillé sur la liste et les pages individuelles.",
  roleOneTitle:"Liste des personnes", roleOneText:"J’ai développé la page qui présente les participants du festival dans une liste facile à parcourir.",
  roleTwoTitle:"Rechercher une personne", roleTwoText:"J’ai ajouté une recherche par nom avec des actions pour lancer le filtre et le réinitialiser, afin de retrouver plus facilement une personne.",
  roleThreeTitle:"Page personne", roleThreeText:"J’ai développé une page individuelle qui affiche, lorsqu’elles sont disponibles, la photo, le nom, la spécialité et la biographie du participant.",
  roleFourTitle:"Informations liées au festival", roleFourText:"La page rassemble aussi les exposants associés et leur numéro de stand, les créneaux de présence, les événements et les livres disponibles.",
  participantEyebrow:"03 — Page personne", participantTitle:"De la liste à une fiche complète", participantIntro:"En sélectionnant un nom, le visiteur ouvre la page de la personne et retrouve son profil ainsi que les informations du festival qui lui sont liées.",
  participantText:"J’ai travaillé sur la page personne et ses liens avec les données de l’application : photo, nom et spécialité du participant, biographie facultative, exposants associés avec leur numéro de stand et leurs créneaux de présence, ainsi que les événements et les livres liés. Les sections apparaissent lorsque les informations existent, ce qui évite d’afficher des blocs vides.",
  sqlEyebrow:"04 — Parcours dans l’annuaire", sqlTitle:"De la recherche à la fiche personne", sqlIntro:"Le visiteur saisit un nom, lance la recherche, puis ouvre la page correspondante depuis un résultat de la liste.",
  sqlText:"Dans la logique de la page, le nom saisi est nettoyé avant le filtrage. L’action de réinitialisation vide le champ et efface le filtre affiché. Chaque résultat ouvre la page personne à partir de l’identifiant du participant.",
  sqlPointOne:"Rechercher une personne par son nom", sqlPointTwo:"Effacer la recherche pour retrouver la liste complète", sqlPointThree:"Ouvrir la fiche de la personne depuis son résultat",
  sqlCaution:"Ce sont les deux parties sur lesquelles j’ai travaillé : la page de liste et la page personne, au sein d’une application développée en équipe.",
  gitEyebrow:"05 — Contenu de la page personne", gitTitle:"Réunir les informations d’un participant", gitIntro:"La fiche relie le profil d’une personne aux informations du festival dont les visiteurs peuvent avoir besoin.",
  gitOneTitle:"Profil", gitOneText:"Afficher le nom, la photo et la spécialité, avec une solution de remplacement si la photo ne se charge pas.",
  gitTwoTitle:"Biographie", gitTwoText:"Afficher la biographie uniquement lorsqu’elle existe et conserver ses retours à la ligne.",
  gitThreeTitle:"Stands et horaires", gitThreeText:"Lister les exposants associés, leurs numéros de stand et les créneaux de présence de la personne.",
  gitFourTitle:"Événements et livres", gitFourText:"Présenter les événements et les livres liés grâce aux composants déjà utilisés dans l’application, lorsqu’ils sont disponibles.",
  peopleFilterTitle:"Interface de l’annuaire", peopleFilterText:"Une vue mobile des commandes de filtrage de la liste.",
  directoryCodeTitle:"Ouvrir une page personne", directoryCodeText:"Un résultat de la liste ouvre la page individuelle à partir de l’identifiant de la personne sélectionnée.",
  profileCodeTitle:"Afficher une biographie facultative", profileCodeText:"Le template affiche le bloc biographie uniquement lorsqu’un texte est disponible.",
  challengeTitle:"Faire fonctionner les deux pages ensemble", challengeOneTitle:"Retrouver la bonne personne", challengeOneText:"La recherche par nom doit faciliter la consultation d’un annuaire long et permettre de revenir simplement à la liste complète.",
  challengeTwoTitle:"Garder des fiches lisibles", challengeTwoText:"Les informations facultatives, comme la photo ou la biographie, ne doivent pas créer de sections vides lorsqu’elles manquent.",
  challengeThreeTitle:"Relier les données du festival", challengeThreeText:"Une personne peut être liée à des exposants, des stands, des horaires, des événements et des livres ; la page rassemble ces liens pour les visiteurs.",
  challengeFourTitle:"Clarifier la navigation", challengeFourText:"La sélection d’un résultat doit ouvrir le bon profil, puis les liens de la fiche doivent mener aux informations correspondantes du festival.",
});
Object.assign(window.I18N.de.caseFdlc, {
  roleIntro:"Die App hilft Festivalbesuchern, das Personenverzeichnis zu durchsuchen, Teilnehmende zu finden und ihre Profile mit den zugehörigen Festivalinformationen aufzurufen. Meine Arbeit konzentrierte sich auf das Verzeichnis und die einzelnen Personenseiten.",
  roleOneTitle:"Personenverzeichnis", roleOneText:"Ich entwickelte die Seite, auf der sich die Festivalteilnehmenden in einer übersichtlichen Liste durchsuchen lassen.",
  roleTwoTitle:"Personensuche", roleTwoText:"Ich ergänzte eine Namenssuche mit Aktionen zum Filtern und Zurücksetzen, damit sich Personen leichter finden lassen.",
  roleThreeTitle:"Personenseite", roleThreeText:"Ich entwickelte eine Einzelseite, auf der Foto, Name, Fachgebiet und – falls vorhanden – Biografie angezeigt werden.",
  roleFourTitle:"Verknüpfte Festivalinformationen", roleFourText:"Die Seite bündelt außerdem zugeordnete Aussteller und Standnummern, Anwesenheitszeiten, Veranstaltungen und verfügbare Bücher.",
  participantEyebrow:"03 — Personenseite", participantTitle:"Vom Verzeichnis zum vollständigen Profil", participantIntro:"Durch die Auswahl eines Namens öffnet sich die Personenseite mit dem Profil und den zugehörigen Festivalinformationen.",
  participantText:"Ich arbeitete an der Personenseite und ihren Verbindungen zu den App-Daten: Foto, Name und Fachgebiet, eine optionale Biografie, zugeordnete Aussteller mit Standnummern und Anwesenheitszeiten sowie verknüpfte Veranstaltungen und Bücher. Bereiche werden nur angezeigt, wenn passende Informationen vorhanden sind. So entstehen keine leeren Abschnitte.",
  sqlEyebrow:"04 — Weg durch das Verzeichnis", sqlTitle:"Von der Suche zum Personenprofil", sqlIntro:"Besucher geben einen Namen ein, starten die Suche und öffnen die passende Personenseite über einen Listeneintrag.",
  sqlText:"Vor dem Filtern wird der eingegebene Name bereinigt. Über die Zurücksetzen-Aktion werden sowohl das Eingabefeld als auch der aktive Suchwert geleert. Jeder Treffer verlinkt über die ID der Person auf deren Seite.",
  sqlPointOne:"Personen nach Namen suchen", sqlPointTwo:"Die Suche zurücksetzen und wieder die ganze Liste anzeigen", sqlPointThree:"Das Profil direkt über den passenden Treffer öffnen",
  sqlCaution:"Das sind die beiden Bereiche, an denen ich gearbeitet habe: die Verzeichnisseite und die einzelne Personenseite innerhalb einer gemeinsam entwickelten Anwendung.",
  gitEyebrow:"05 — Inhalte der Personenseite", gitTitle:"Informationen zu einer Person bündeln", gitIntro:"Die Detailseite verbindet ein Personenprofil mit den Festivalinformationen, die Besucher als Nächstes benötigen könnten.",
  gitOneTitle:"Profil", gitOneText:"Name, Foto und Fachgebiet anzeigen; falls das Foto nicht geladen werden kann, erscheint ein Ersatz.",
  gitTwoTitle:"Biografie", gitTwoText:"Die Biografie nur anzeigen, wenn sie vorhanden ist, und ihre Absatzumbrüche beibehalten.",
  gitThreeTitle:"Stände und Zeiten", gitThreeText:"Zugeordnete Aussteller, ihre Standnummern und die Anwesenheitszeiten der Person auflisten.",
  gitFourTitle:"Veranstaltungen und Bücher", gitFourText:"Verknüpfte Veranstaltungen und Bücher über die vorhandenen App-Komponenten einbinden, sofern Einträge verfügbar sind.",
  peopleFilterTitle:"Oberfläche des Verzeichnisses", peopleFilterText:"Eine mobile Ansicht der Filtermöglichkeiten in der Liste.",
  directoryCodeTitle:"Eine Personenseite öffnen", directoryCodeText:"Ein Listentreffer öffnet anhand der ID das Profil der ausgewählten Person.",
  profileCodeTitle:"Optionale Biografie anzeigen", profileCodeText:"Das Template zeigt den Biografie-Abschnitt nur an, wenn ein Text vorhanden ist.",
  challengeTitle:"Beide Seiten sinnvoll verbinden", challengeOneTitle:"Die richtige Person finden", challengeOneText:"Die Namenssuche soll ein umfangreiches Verzeichnis leichter durchsuchbar machen und eine einfache Rückkehr zur vollständigen Liste ermöglichen.",
  challengeTwoTitle:"Profile übersichtlich halten", challengeTwoText:"Optionale Angaben wie Foto oder Biografie sollen keine leeren Bereiche erzeugen, wenn sie fehlen.",
  challengeThreeTitle:"Festivaldaten verknüpfen", challengeThreeText:"Eine Person kann mit Ausstellern, Ständen, Zeiten, Veranstaltungen und Büchern verbunden sein. Die Seite bündelt diese Beziehungen für Besucher.",
  challengeFourTitle:"Navigation verständlich machen", challengeFourText:"Ein Listentreffer soll das passende Profil öffnen; von dort sollen Links zu den relevanten Festivalinformationen führen.",
});

/* Section 01 blends the published class-project introduction with the individual contribution. */
Object.assign(window.I18N.en.caseFdlc, {
  overviewEyebrow:"01 — Project overview",
  overviewTitle:"From classroom to real-world application",
  overviewLead:"This project went beyond a classroom exercise: together with my classmates and under our teacher's guidance, we created a mobile application for visitors to the Festival du Livre de Colmar 2026.",
  overviewText:"Working as a team gave us the opportunity to put our BTS SIO SLAM skills into practice, from structuring information to building the app interfaces. My contribution focused on the People directory and individual person page, helping visitors find participants and explore the information linked to them.",
  disclaimer:"A class project developed collaboratively. This case study focuses on my contribution to the People directory and person page."
});
Object.assign(window.I18N.fr.caseFdlc, {
  overviewEyebrow:"01 — Présentation du projet",
  overviewTitle:"De la salle de classe à une application concrète",
  overviewLead:"Ce projet est allé au-delà d’un exercice scolaire : avec mes camarades et sous la supervision de notre professeur, nous avons créé une application mobile destinée aux visiteurs du Festival du Livre de Colmar 2026.",
  overviewText:"Le travail en équipe nous a permis de mettre en pratique les compétences acquises en BTS SIO SLAM, de l’organisation des informations à la création des interfaces. Ma contribution s’est concentrée sur la liste des personnes et leur page individuelle, pour aider les visiteurs à retrouver un participant et à consulter les informations qui lui sont associées.",
  disclaimer:"Un projet de classe réalisé en équipe. Cette étude de cas présente plus particulièrement ma contribution à la liste des personnes et à leur page individuelle."
});
Object.assign(window.I18N.de.caseFdlc, {
  overviewEyebrow:"01 — Projektübersicht",
  overviewTitle:"Vom Unterricht zur Anwendung in der Praxis",
  overviewLead:"Dieses Projekt ging über eine klassische Schulaufgabe hinaus: Gemeinsam mit meinen Mitschülerinnen und Mitschülern und unter der Betreuung unseres Lehrers entwickelten wir eine mobile Anwendung für die Besucher des Festival du Livre de Colmar 2026.",
  overviewText:"Durch die Teamarbeit konnten wir unsere Kenntnisse aus dem BTS-SIO-SLAM-Unterricht praktisch anwenden – von der Strukturierung der Informationen bis zur Gestaltung der App-Oberflächen. Mein Beitrag konzentrierte sich auf das Personenverzeichnis und die einzelnen Personenseiten, damit Besucher Teilnehmende finden und zugehörige Informationen ansehen können.",
  disclaimer:"Ein gemeinsames Klassenprojekt. Diese Fallstudie stellt besonders meinen Beitrag zum Personenverzeichnis und zu den Personenseiten vor."
});

/* Section 03 reflects technologies confirmed in the shared application repository. */
Object.assign(window.I18N.en.caseFdlc, {
  architectureEyebrow:"03 — Technical architecture", architectureTitle:"Technologies & implementation",
  layerLabel:"Technology", roleLabel:"How it is used", evidenceLabel:"Example in the shared code",
  ionicUse:"Ionic components and Angular pages build the mobile interface and its navigation.",
  typeScriptUse:"Page logic and RxJS services handle interactions and asynchronous data requests.",
  htmlCssUse:"Angular templates structure the directory and profile; SCSS styles the screens.",
  phpUse:"PHP endpoints provide the people list and individual participant records to the app.",
  sqlMysqlUse:"SQL queries retrieve and filter participant data from the festival's relational data model.",
  restJsonUse:"Angular HttpClient sends requests to PHP endpoints, which return data as JSON."
});
Object.assign(window.I18N.fr.caseFdlc, {
  architectureEyebrow:"03 — Architecture technique", architectureTitle:"Technologies et mise en œuvre",
  layerLabel:"Technologie", roleLabel:"Utilisation dans le projet", evidenceLabel:"Exemple dans le code partagé",
  ionicUse:"Les composants Ionic et les pages Angular construisent l’interface mobile et sa navigation.",
  typeScriptUse:"La logique des pages et les services RxJS gèrent les interactions et les requêtes de données asynchrones.",
  htmlCssUse:"Les templates Angular structurent la liste et le profil ; SCSS met les écrans en forme.",
  phpUse:"Des points d’accès PHP transmettent à l’application la liste des personnes et les fiches individuelles.",
  sqlMysqlUse:"Des requêtes SQL récupèrent et filtrent les données des participants dans le modèle relationnel du festival.",
  restJsonUse:"HttpClient d’Angular envoie des requêtes aux points d’accès PHP, qui renvoient les données en JSON."
});
Object.assign(window.I18N.de.caseFdlc, {
  architectureEyebrow:"03 — Technische Architektur", architectureTitle:"Technologien und Umsetzung",
  layerLabel:"Technologie", roleLabel:"Einsatz im Projekt", evidenceLabel:"Beispiel im gemeinsamen Code",
  ionicUse:"Ionic-Komponenten und Angular-Seiten bilden die mobile Oberfläche und ihre Navigation.",
  typeScriptUse:"Seitenlogik und RxJS-Services verarbeiten Interaktionen und asynchrone Datenabfragen.",
  htmlCssUse:"Angular-Templates strukturieren Verzeichnis und Profil; SCSS gestaltet die Oberflächen.",
  phpUse:"PHP-Endpunkte liefern der App das Personenverzeichnis und einzelne Teilnehmerdatensätze.",
  sqlMysqlUse:"SQL-Abfragen rufen Teilnehmerdaten aus dem relationalen Festivaldatenmodell ab und filtern sie.",
  restJsonUse:"Angular HttpClient sendet Anfragen an PHP-Endpunkte, die Daten als JSON zurückgeben."
});

/* Section 04 combines the directory flow with the person-page information. */
Object.assign(window.I18N.en.caseFdlc, {
  sqlEyebrow:"04 — From directory to person page", sqlTitle:"Find a person, then explore their profile",
  sqlIntro:"Visitors can search the People directory by name and open a result to reach that participant's page, where available profile details and related festival information are gathered.",
  sqlText:"I worked on both parts of this journey. The directory trims the entered name before filtering, offers a reset action, and links each result to the matching person page by ID. The profile then shows the participant's name, photo, speciality and optional biography, alongside linked exhibitors, stand numbers, attendance periods, events and books when available.",
  sqlPointOne:"Search the people directory by name", sqlPointTwo:"Open the selected person's page from the matching result", sqlPointThree:"View their profile and available festival links in one place",
  sqlCaution:"The directory and person page are my contributions to this class project, built within the shared team application."
});
Object.assign(window.I18N.fr.caseFdlc, {
  sqlEyebrow:"04 — De la liste à la page personne", sqlTitle:"Retrouver une personne et consulter sa fiche",
  sqlIntro:"Les visiteurs peuvent rechercher un nom dans la liste des personnes, puis ouvrir un résultat pour accéder à la page du participant et aux informations du festival qui lui sont associées.",
  sqlText:"J’ai travaillé sur ces deux étapes. La liste nettoie le nom saisi avant le filtrage, propose une action pour réinitialiser la recherche et relie chaque résultat à la page correspondante grâce à l’identifiant de la personne. La fiche affiche ensuite, selon les informations disponibles, son nom, sa photo, sa spécialité et sa biographie, ainsi que ses exposants, numéros de stand, créneaux de présence, événements et livres associés.",
  sqlPointOne:"Rechercher une personne dans l’annuaire", sqlPointTwo:"Ouvrir sa page depuis le résultat correspondant", sqlPointThree:"Consulter son profil et les informations liées au festival au même endroit",
  sqlCaution:"La liste des personnes et leur page individuelle sont mes contributions à ce projet de classe réalisé avec une application commune à l’équipe."
});
Object.assign(window.I18N.de.caseFdlc, {
  sqlEyebrow:"04 — Vom Verzeichnis zur Personenseite", sqlTitle:"Personen finden und ihr Profil ansehen",
  sqlIntro:"Besucher können das Personenverzeichnis nach Namen durchsuchen und einen Treffer öffnen. Auf der Personenseite finden sie verfügbare Profilangaben und zugehörige Festivalinformationen.",
  sqlText:"Ich arbeitete an beiden Schritten. Vor dem Filtern wird der eingegebene Name bereinigt; außerdem lässt sich die Suche zurücksetzen. Jeder Treffer führt über die Personen-ID zur passenden Seite. Dort werden – sofern vorhanden – Name, Foto, Fachgebiet und Biografie sowie verknüpfte Aussteller, Standnummern, Anwesenheitszeiten, Veranstaltungen und Bücher angezeigt.",
  sqlPointOne:"Das Personenverzeichnis nach Namen durchsuchen", sqlPointTwo:"Die passende Personenseite über den Treffer öffnen", sqlPointThree:"Profil und verfügbare Festivalinformationen an einem Ort ansehen",
  sqlCaution:"Das Personenverzeichnis und die Personenseite sind meine Beiträge zu diesem Klassenprojekt innerhalb der gemeinsamen Team-Anwendung."
});

/* Section 04: technical data flow verified against the Angular and PHP source. */
Object.assign(window.I18N.en.caseFdlc, {
  sqlIntro:"The directory uses Angular's bound search field to request matching people from the PHP service; selecting a result opens the profile and loads its related data by ID.",
  sqlText:"The page binds the input to saisieNom with ngModel. Enter or the Filter button calls onFiltrer(), which trims the value and sets the active query; reset clears both values. ListePersonnesComponent passes that query to PersonneService.getToutesLesPersonnes(), which returns an Observable<Personne[]> from an HttpClient GET. The PHP endpoint applies a prepared nom LIKE :nom condition to the PersonneComplete view and returns JSON. AsyncPipe renders the results, and RouterLink passes each person's ID to the detail page. There, PagePersonnePage loads the person and associated exhibitors through services; the template conditionally displays optional profile information and includes the existing events and books components.",
  sqlPointOne:"Search state — ngModel binds the input; onFiltrer() trims the query and reset clears it.",
  sqlPointTwo:"Directory data — HttpClient calls the PHP endpoint; a prepared SQL filter returns JSON, rendered from Observable<Personne[]> with AsyncPipe.",
  sqlPointThree:"Profile route — RouterLink passes the person's ID; services load the profile and exhibitors for the detail page.",
  sqlCaution:"This describes the shared app's data flow. My contribution was the People directory and person page, connected to the project's existing services."
});
Object.assign(window.I18N.fr.caseFdlc, {
  sqlIntro:"La liste utilise un champ Angular lié aux données pour demander au service PHP les personnes correspondantes. La sélection d’un résultat ouvre la fiche et charge les données associées à partir de son identifiant.",
  sqlText:"La page lie le champ de saisie à saisieNom avec ngModel. La touche Entrée ou le bouton Filtrer appelle onFiltrer(), qui nettoie la valeur avec trim() et définit le filtre actif ; la réinitialisation vide les deux valeurs. ListePersonnesComponent transmet ce filtre à PersonneService.getToutesLesPersonnes(), qui renvoie un Observable<Personne[]> obtenu par une requête HTTP GET avec HttpClient. Le point d’accès PHP applique une condition préparée nom LIKE :nom sur la vue PersonneComplete et renvoie du JSON. AsyncPipe affiche les résultats, et RouterLink transmet l’identifiant de chaque personne à la page détaillée. PagePersonnePage charge ensuite la personne et ses exposants associés via les services ; le template affiche les informations facultatives si elles existent et intègre les composants existants pour les événements et les livres.",
  sqlPointOne:"Recherche — ngModel lie le champ ; onFiltrer() nettoie la saisie et la réinitialisation vide le filtre.",
  sqlPointTwo:"Données de la liste — HttpClient appelle le point d’accès PHP ; un filtre SQL préparé renvoie du JSON, affiché depuis Observable<Personne[]> avec AsyncPipe.",
  sqlPointThree:"Navigation vers la fiche — RouterLink transmet l’identifiant ; les services chargent le profil et les exposants associés.",
  sqlCaution:"Cette description explique le flux de données de l’application commune. Ma contribution porte sur la liste des personnes et leur page, reliées aux services existants du projet."
});
Object.assign(window.I18N.de.caseFdlc, {
  sqlIntro:"Das Verzeichnis verwendet ein an Angular gebundenes Suchfeld, um passende Personen beim PHP-Service anzufragen. Ein ausgewählter Treffer öffnet das Profil und lädt zugehörige Daten anhand der ID.",
  sqlText:"Das Eingabefeld ist mit ngModel an saisieNom gebunden. Enter oder die Schaltfläche Filtrer ruft onFiltrer() auf. Die Methode bereinigt den Wert mit trim() und setzt den aktiven Suchfilter; Zurücksetzen leert beide Werte. ListePersonnesComponent übergibt den Filter an PersonneService.getToutesLesPersonnes(), das über einen HttpClient-GET ein Observable<Personne[]> zurückgibt. Der PHP-Endpunkt wendet auf die Ansicht PersonneComplete die vorbereitete Bedingung nom LIKE :nom an und liefert JSON. AsyncPipe zeigt die Ergebnisse an, und RouterLink übergibt die Personen-ID an die Detailseite. Dort lädt PagePersonnePage die Person und zugehörige Aussteller über Services; optionale Profilangaben werden bedingt angezeigt, Veranstaltungen und Bücher über vorhandene Komponenten eingebunden.",
  sqlPointOne:"Suche — ngModel bindet das Eingabefeld; onFiltrer() bereinigt die Eingabe, Zurücksetzen leert den Filter.",
  sqlPointTwo:"Verzeichnisdaten — HttpClient ruft den PHP-Endpunkt auf; ein vorbereiteter SQL-Filter liefert JSON, das AsyncPipe aus Observable<Personne[]> darstellt.",
  sqlPointThree:"Navigation — RouterLink übergibt die Personen-ID; Services laden Profil und zugehörige Aussteller für die Detailseite.",
  sqlCaution:"Beschrieben wird der Datenfluss der gemeinsamen App. Mein Beitrag waren Personenverzeichnis und Personenseite, angebunden an die vorhandenen Projekt-Services."
});

Object.assign(window.I18N.en.caseFdlc, {
  galleryIntro:"The screenshots show the app context and both parts of my contribution. The two code excerpts are taken from the shared project's actual Angular templates."
});
Object.assign(window.I18N.fr.caseFdlc, {
  galleryIntro:"Les captures montrent le contexte de l’application et les deux parties de ma contribution. Les deux extraits de code viennent des templates Angular du dépôt partagé."
});
Object.assign(window.I18N.de.caseFdlc, {
  galleryIntro:"Die Screenshots zeigen den App-Kontext und beide Bereiche meines Beitrags. Die zwei Codeausschnitte stammen aus den tatsächlichen Angular-Templates des gemeinsamen Repositorys."
});

Object.assign(window.I18N.en.caseFdlc, {
  appHomeTitle:"Shared project overview",
  appHomeText:"This team-built home screen brings together the programme, venue map, authors and personal planning. It presents the app context rather than an individual feature I developed.",
  peopleDirectoryTitle:"People directory — my contribution",
  peopleDirectoryText:"I worked on the mobile directory, including the name search, role selector and readable list of festival participants.",
  peopleFilterTitle:"Filtering the directory — my contribution",
  peopleFilterText:"I added the role filter so visitors can narrow the participant list by category.",
  directoryCodeText:"This Angular template links each directory result to the selected person's page using their ID.",
  profileCodeText:"I used conditional rendering so the biography appears only when the person has one.",
  alainBauerTitle:"Participant profile and festival details",
  alainBauerText:"The two captures show the participant profile alongside its stand, attendance times, events and books."
});
Object.assign(window.I18N.fr.caseFdlc, {
  appHomeTitle:"Vue d’ensemble du projet d’équipe",
  appHomeText:"Cet écran d’accueil commun réunit le programme, le plan du salon, les auteurs et le planning personnel. Il présente le contexte de l’application, pas une fonctionnalité que j’ai développée individuellement.",
  peopleDirectoryTitle:"Annuaire des personnes — ma contribution",
  peopleDirectoryText:"J’ai travaillé sur l’annuaire mobile : recherche par nom, sélecteur de rôle et liste des participants du festival.",
  peopleFilterTitle:"Filtrer l’annuaire — ma contribution",
  peopleFilterText:"J’ai ajouté le filtre par rôle pour permettre de réduire la liste des participants selon leur catégorie.",
  directoryCodeText:"Ce template Angular relie chaque résultat de l’annuaire à la page de la personne sélectionnée grâce à son identifiant.",
  profileCodeText:"J’ai utilisé un affichage conditionnel pour montrer la biographie uniquement lorsqu’elle est renseignée.",
  alainBauerTitle:"Profil d’un participant et informations du festival",
  alainBauerText:"Les deux captures montrent le profil du participant, son stand, ses créneaux de présence, ses événements et ses livres associés."
});
Object.assign(window.I18N.de.caseFdlc, {
  appHomeTitle:"Überblick über das gemeinsame Projekt",
  appHomeText:"Diese gemeinsam entwickelte Startseite bündelt Programm, Lageplan, Autoren und persönliche Planung. Sie zeigt den App-Kontext und keine einzelne Funktion, die ich selbst entwickelt habe.",
  peopleDirectoryTitle:"Personenverzeichnis — mein Beitrag",
  peopleDirectoryText:"Ich arbeitete am mobilen Verzeichnis mit Namenssuche, Rollenauswahl und einer übersichtlichen Liste der Festivalteilnehmenden.",
  peopleFilterTitle:"Verzeichnis filtern — mein Beitrag",
  peopleFilterText:"Ich ergänzte den Rollenfilter, damit Besucher die Personenliste nach Kategorien eingrenzen können.",
  directoryCodeText:"Dieses Angular-Template verknüpft jeden Verzeichniseintrag über die ID mit der Seite der ausgewählten Person.",
  profileCodeText:"Mit einer bedingten Anzeige erscheint die Biografie nur, wenn ein entsprechender Eintrag vorhanden ist.",
  alainBauerTitle:"Teilnehmerprofil und Festivalinformationen",
  alainBauerText:"Die beiden Screenshots zeigen das Teilnehmerprofil mit Stand, Anwesenheitszeiten, Veranstaltungen und zugehörigen Büchern."
});

Object.assign(window.I18N.en.caseFdlc, {
  filterCodeTitle:"Name search and reset logic",
  filterCodeText:"The TypeScript trims the entered name when filtering and clears both values when the search is reset.",
  sqlViewCodeTitle:"PersonneComplete SQL view",
  sqlViewCodeText:"I created this view to connect person details with exhibitor and attendance data through LEFT JOINs."
});
Object.assign(window.I18N.fr.caseFdlc, {
  filterCodeTitle:"Logique de recherche et de réinitialisation",
  filterCodeText:"Le TypeScript nettoie le nom saisi lors du filtrage et vide les deux valeurs à la réinitialisation.",
  sqlViewCodeTitle:"Vue SQL PersonneComplete",
  sqlViewCodeText:"J’ai créé cette vue pour relier les informations des personnes à celles des exposants et des créneaux de présence avec des LEFT JOIN."
});
Object.assign(window.I18N.de.caseFdlc, {
  filterCodeTitle:"Logik für Suche und Zurücksetzen",
  filterCodeText:"Der TypeScript-Code bereinigt den Namen beim Filtern und leert beide Werte beim Zurücksetzen.",
  sqlViewCodeTitle:"SQL-Ansicht PersonneComplete",
  sqlViewCodeText:"Ich erstellte diese Ansicht, um Personendaten mit Aussteller- und Anwesenheitsdaten über LEFT JOINs zu verbinden."
});
Object.assign(window.I18N.en.caseFdlc, {
  peopleSearchAlt:"Mobile people directory showing search results for the name ba",
  peopleSearchTitle:"Search results by name",
  peopleSearchText:"The name search narrows the directory to matching people while keeping the role selector available."
});
Object.assign(window.I18N.fr.caseFdlc, {
  peopleSearchAlt:"Annuaire mobile affichant les résultats de recherche pour le nom ba",
  peopleSearchTitle:"Résultats de la recherche par nom",
  peopleSearchText:"La recherche réduit l’annuaire aux personnes correspondantes tout en gardant le sélecteur de rôle disponible."
});
Object.assign(window.I18N.de.caseFdlc, {
  peopleSearchAlt:"Mobiles Personenverzeichnis mit Suchergebnissen für den Namen ba",
  peopleSearchTitle:"Suchergebnisse nach Namen",
  peopleSearchText:"Die Namenssuche grenzt das Verzeichnis auf passende Personen ein; die Rollenauswahl bleibt verfügbar."
});

