document.addEventListener('DOMContentLoaded', function() {
  // Inicializar el sistema de idiomas
  initLanguageSystem();
});

function initLanguageSystem() {
  // Botones de idioma
  const langES = document.getElementById('lang-es');
  const langEN = document.getElementById('lang-en');

  // Verificar que los botones existan antes de agregar eventos
  if (langES && langEN) {
    // Eventos de clic para los botones
    langES.addEventListener('click', function() {
      setLanguage('es');
      setActiveLanguageButton(langES, langEN);
    });

    langEN.addEventListener('click', function() {
      setLanguage('en');
      setActiveLanguageButton(langEN, langES);
    });
  }

  // Cargar el idioma guardado o usar español como predeterminado
  const savedLanguage = localStorage.getItem('selectedLanguage') || 'es';
  setLanguage(savedLanguage);

  // Solo intentar activar botones si existen
  if (langES && langEN) {
    if (savedLanguage === 'en') {
      setActiveLanguageButton(langEN, langES);
    } else {
      setActiveLanguageButton(langES, langEN);
    }
  }
}

function setActiveLanguageButton(activeBtn, inactiveBtn) {
  activeBtn.classList.add('active');
  inactiveBtn.classList.remove('active');
}

function setLanguage(language) {
  // Guardar preferencia de idioma
  localStorage.setItem('selectedLanguage', language);
  
  // Traducir todos los elementos con atributo data-translate
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[key] && translations[key][language]) {
      element.textContent = translations[key][language];
    }
  });
  
  // Para elementos que necesitan HTML, no solo texto
  document.querySelectorAll('[data-translate-html]').forEach(element => {
    const key = element.getAttribute('data-translate-html');
    if (translations[key] && translations[key][language]) {
      element.innerHTML = translations[key][language];
    }
  });
}

// Diccionario de traducciones
const translations = {
  'nav_home': {
    'es': 'Inicio',
    'en': 'Home'
  },
  'nav_back': {
    'es': 'Regresar',
    'en': 'Back'
  },
  'nav_welcome': {
    'es': 'Bienvenida',
    'en': 'Welcome'
  },
  'nav_calls': {
    'es': 'Convocatorias',
    'en': 'Calls'
  },
  'nav_workshops': {
    'es': 'Talleres',
    'en': 'Workshops'
  },
  'nav_conferences': {
    'es': 'Conferencias',
    'en': 'Conferences'
  },
  'nav_gallery': {
    'es': 'Galeria',
    'en': 'Gallery'
  },
  'nav_sponsors': {
    'es': 'Patrocinadores',
    'en': 'Sponsors'
  },
  'nav_committee': {
    'es': 'Comité',
    'en': 'Committee'
  },
  'hero_title': {
    'es': 'Congreso CORE 2026',
    'en': 'CORE Congress 2026'
  },
  'hero_more_info': {
    'es': 'Más información',
    'en': 'More information'
  },
  'hero_workshops_date': {
    'es': 'Talleres. 19 al 23 de octubre de 2026.',
    'en': 'Workshops. October 19-23, 2026.'
  },
  'hero_talks_date': {
    'es': 'Congreso. 26 al 29 de octubre de 2026.',
    'en': 'Congress. October 26-29, 2026.'
  },
  'about_title': {
    'es': 'El congreso CORE 2026',
    'en': 'The CORE 2026 congress'
  },
  'about_p1': {
    'es': 'El congreso CORE 2026, es la continuación de una tradición de 25 años, en la que la comunidad del Centro de Investigación en Computación (CIC) participa arduamente. En esta nueva emisión, el Congreso CORE se centra en temas relacionados a la sustentabilidad y la incorporación de las ciencias de la computación en su desarrollo.',
    'en': 'The CORE 2026 congress is the continuation of a 25-year tradition, in which the Computing Research Center (CIC) community actively participates. In this new edition, the CORE Congress focuses on topics related to sustainability and the incorporation of computer science in its development.'
  },
  'about_p2': {
    'es': 'El propósito es dar a conocer avances realizados en el área de las Tecnologías de la Información y la Comunicación, la Inteligencia Artificial y la Computación en general, relacionados con la sustentabilidad, estudio y cuidado del ambiente, además de desarrollos tecnológicos e investigaciones que se realizan dentro del área de la Computación.',
    'en': 'The purpose is to share advances in the area of Information and Communication Technologies, Artificial Intelligence and Computing in general, related to sustainability, environmental study and care, as well as technological developments and research carried out within the Computing field.'
  },
  'about_p3': {
    'es': 'El congreso CORE 2026 busca como sus antecesores la inclusión de todos los miembros de la comunidad, y la equidad de género. Para ello contará con un panel de discusión de mujeres que desarrollan proyectos enfocados a la sustentabilidad.',
    'en': 'The CORE 2026 congress, like its predecessors, seeks the inclusion of all community members and gender equity. To this end, it will feature a panel discussion with women who develop projects focused on sustainability.'
  },
  'facebook_title': {
    'es': '¡Síguenos en Facebook!',
    'en': 'Follow us on Facebook!'
  },
  'facebook_text': {
    'es': 'Mantente al día con nuestras últimas noticias y eventos. ¡Síguenos y sé parte de nuestra comunidad en Facebook!',
    'en': 'Stay up to date with our latest news and events. Follow us and be part of our Facebook community!'
  },
  'facebook_button': {
    'es': 'CORE2026 en Facebook',
    'en': 'CORE2026 on Facebook'
  },
  // Continuar con todas las traducciones para las ponencias
  'ponencias_title': {
    'es': 'Ponencias',
    'en': 'Presentations'
  },
  'ponencias_subtitle': {
    'es': 'Conoce los diferentes tipos de presentaciones y actividades académicas de nuestro congreso',
    'en': 'Learn about the different types of presentations and academic activities at our congress'
  },
  'conferencia_magistral': {
    'es': 'Conferencia magistral',
    'en': 'Keynote conference'
  },
  'conferencia_text': {
    'es': 'Impartida por una investigadora o investigador invitado al CIC, en la que durante aproximadamente entre 40 y 60 minutos podrá presentar un tema relevante relacionado con las LGAC del centro. Estas conferencias permiten que los asistentes al congreso conozcan investigaciones desarrolladas por expertos en el área de la ingeniería y la computación, e incluso entablar posibles colaboraciones.',
    'en': 'Delivered by a researcher invited to the CIC, who will present a relevant topic related to the center\'s research lines for approximately 40 to 60 minutes. These conferences allow congress attendees to learn about research developed by experts in engineering and computing, and even establish possible collaborations.'
  },
  // Continuar con el resto de traducciones para todas las secciones
  
  // Programa de talleres
  'talleres_title': {
    'es': 'Talleres',
    'en': 'Workshops'
  },
  'talleres_program': {
    'es': 'Programa de talleres',
    'en': 'Workshop program'
  },
  'talleres_description': {
    'es': 'Se contará con al menos 12 talleres que se llevarán a cabo en las aulas equipadas del Centro de Investigación en Computación, las características de los talleres son las siguientes:',
    'en': 'There will be at least 12 workshops held in the equipped classrooms of the Computing Research Center, the characteristics of the workshops are as follows:'
  },
  'talleres_list_item1': {
    'es': 'Tema enfocado en cualquiera de las LGAC del Centro.',
    'en': 'Topics focused on any of the Center\'s research lines.'
  },
  'talleres_list_item2': {
    'es': 'Duración mínima de 4 horas, máxima de 8 horas.',
    'en': 'Minimum duration of 4 hours, maximum of 8 hours.'
  },
  'talleres_list_item3': {
    'es': 'Cupo máximo de 20 asistentes.',
    'en': 'Maximum capacity of 20 attendees.'
  },
  'talleres_list_item4': {
    'es': 'Los talleres serán ofertados en el call for workshops, siguiendo las fechas propuestas para el evento.',
    'en': 'Workshops will be offered in the call for workshops, following the dates proposed for the event.'
  },
  
  // Sección de ponencias
  'ponencia_title': {
    'es': 'Ponencia',
    'en': 'Presentation'
  },
  'ponencia_text': {
    'es': 'Son presentaciones de aproximadamente 20 minutos (15 minutos de presentación y 5 de preguntas), en las que jóvenes investigadores, estudiantes, y profesores de nivel Superior y Posgrado describen algún proyecto y los avances que tienen en el mismo, con la finalidad de darle difusión a su trabajo y recibir retroalimentación.',
    'en': 'These are presentations of approximately 20 minutes (15 minutes of presentation and 5 for questions), in which young researchers, students, and professors from Higher Education and Graduate levels describe a project and their progress, with the aim of disseminating their work and receiving feedback.'
  },
  'panel_discusion': {
    'es': 'Panel de discusión',
    'en': 'Discussion panel'
  },
  'panel_text': {
    'es': 'Mesas redondas en las que al menos 4 especialistas de algún tema sobre las LGAC del centro, dirigidos por un moderador, platican con el público, generando una lluvia de ideas y conocimiento general.',
    'en': 'Round tables in which at least 4 specialists on a topic related to the center\'s research lines, led by a moderator, talk with the audience, generating a brainstorm of ideas and general knowledge.'
  },
  'proyecto_cic': {
    'es': 'Presentación de proyecto CIC',
    'en': 'CIC project presentation'
  },
  'proyecto_text': {
    'es': 'En un espacio de 30 minutos, investigadores y alumnos del CIC tendrán la oportunidad de presentar algún proyecto en el que estén trabajando con la comunidad del CIC.',
    'en': 'In a 30-minute space, CIC researchers and students will have the opportunity to present a project they are working on with the CIC community.'
  },
  'posters': {
    'es': 'Sesión de posters',
    'en': 'Poster session'
  },
  'posters_text': {
    'es': 'En el primer piso del CIC se colocarán 10 posters en los que se presentarán trabajos de estudiantes para darles divulgación. Los posters deberán cumplir con las características solicitadas en la correspondiente convocatoria.',
    'en': 'On the first floor of the CIC, 10 posters will be placed presenting student work for dissemination. The posters must comply with the characteristics requested in the corresponding call.'
  },
  'open_labs': {
    'es': 'OPEN LABS',
    'en': 'OPEN LABS'
  },
  'open_labs_text': {
    'es': 'Una actividad propia del centro, en el que cada laboratorio de los 15 que componen el centro presentan en pequeños stands las actividades que desarrollan, así como los trabajos de investigación en los que participan. El objetivo es que los asistentes al congreso puedan conocer a los miembros de cada laboratorio.',
    'en': 'An activity specific to the center, in which each of the 15 laboratories that make up the center present in small stands the activities they develop, as well as the research work in which they participate. The objective is for congress attendees to get to know the members of each laboratory.'
  },
  
  // Sección de programa
  'programa_title': {
    'es': 'Programa CORE 2026',
    'en': 'CORE 2026 Program'
  },
  
  // Sección de talleres
  'talleres_horarios': {
    'es': 'Horarios',
    'en': 'Schedule'
  },
  'talleres_programa_detallado': {
    'es': 'Programa detallado de talleres',
    'en': 'Detailed workshop program'
  },
  'talleres_dia1': {
    'es': 'Día 1',
    'en': 'Day 1'
  },
  'talleres_dia2': {
    'es': 'Día 2',
    'en': 'Day 2'
  },
  'talleres_dia3': {
    'es': 'Día 3',
    'en': 'Day 3'
  },
  'talleres_dia4': {
    'es': 'Día 4',
    'en': 'Day 4'
  },
  'talleres_horario1': {
    'es': '10:00-12:00 horas',
    'en': '10:00-12:00 hours'
  },
  'talleres_horario2': {
    'es': '12:00-14:00 horas',
    'en': '12:00-14:00 hours'
  },
  'talleres_horario3': {
    'es': '14:00-15:00 horas',
    'en': '14:00-15:00 hours'
  },
  'talleres_horario4': {
    'es': '15:00-17:00 horas',
    'en': '15:00-17:00 hours'
  },
  'talleres_receso': {
    'es': 'Receso',
    'en': 'Break'
  },
  'talleres_tabla_caption': {
    'es': 'Tabla 1. Programa tentativo de talleres, se propone que los talleres se lleven a cabo en sesiones de dos horas, y que se constituyan por al menos dos sesiones.',
    'en': 'Table 1. Tentative workshop program, it is proposed that the workshops be carried out in two-hour sessions, and that they consist of at least two sessions.'
  },
  
  // Panel de discusión con enfoque de género
  'panel_genero_title': {
    'es': 'Panel de discusión con enfoque de género',
    'en': 'Gender-focused discussion panel'
  },
  'panel_genero_text1': {
    'es': 'Como parte de las actividades del Congreso CORE 2024, está la inclusión de género. Si bien parte del equipo que participa en la planeación y organización del congreso está conformado por alumnas y trabajadoras del IPN, nos interesa que la ciencia, la tecnología, y en general el conocimiento lleguen a más jóvenes y estudiantes para lograr espacios de verdadera equidad.',
    'en': 'As part of the activities of the CORE 2024 Congress, there is gender inclusion. Although part of the team participating in the planning and organization of the congress is made up of female students and workers from the IPN, we are interested in science, technology, and knowledge in general reaching more young people and students to achieve spaces of true equity.'
  },
  'panel_genero_text2': {
    'es': 'En esta ocasión se propone el panel de discusión titulado: <strong>Avances y retos de la equidad de género en las humanidades, la ciencia y la tecnología.</strong> En este espacio, mujeres dedicadas a las humanidades, la ciencia y la tecnología, platicarán de los retos que enfrentan las mujeres en su área, y darán consejos de cómo sortear las adversidades y crecer profesionalmente.',
    'en': 'On this occasion, the discussion panel entitled: <strong>Advances and challenges of gender equity in humanities, science and technology.</strong> In this space, women dedicated to humanities, science and technology, will talk about the challenges that women face in their area, and will give advice on how to overcome adversities and grow professionally.'
  },
  
  // Sección de galería
  'galeria_title': {
    'es': 'Galería',
    'en': 'Gallery'
  },
  
  // Sección de comité organizador
  'comite_title': {
    'es': 'Comité Organizador',
    'en': 'Organizing Committee'
  },
  
  // Sección de horarios
  'horario_header': {
    'es': 'Horario',
    'en': 'Schedule'
  },
  'table_caption': {
    'es': 'Tabla 1. Programa tentativo de talleres, se propone que los talleres se lleven a cabo en sesiones de dos horas, y que se constituyan por al menos dos sesiones.',
    'en': 'Table 1. Tentative workshop program, it is proposed that workshops be carried out in two-hour sessions, and consist of at least two sessions.'
  },
  
  // Footer
  'footer_title': {
    'es': 'CORE 2026',
    'en': 'CORE 2026'
  },
  'footer_address': {
    'es': 'Centro de Investigación en Computación<br>Instituto Politécnico Nacional<br>',
    'en': 'Computing Research Center<br>National Polytechnic Institute<br>'
  },
  'footer_links': {
    'es': 'Links',
    'en': 'Links'
  },
  'footer_cic': {
    'es': 'CIC-IPN',
    'en': 'CIC-IPN'
  },
  'footer_rcs': {
    'es': 'Research in Computing Science',
    'en': 'Research in Computing Science'
  },
  
  // Modal
  'modal_close': {
    'es': 'Cerrar',
    'en': 'Close'
  },

  // Temas de interés
  'topics_title': {
    'es': 'Temas de interés',
    'en': 'Topics of interest'
  },
  'topic1': {
    'es': 'Ingeniería de software',
    'en': 'Software engineering'
  },
  'topic2': {
    'es': 'Ciencia de datos',
    'en': 'Data science'
  },
  'topic3': {
    'es': 'Ciberseguridad',
    'en': 'Cybersecurity'
  },
  'topic4': {
    'es': 'Sistemas de información geográfica',
    'en': 'Geographic information systems'
  },
  'topic5': {
    'es': 'Microtecnología y sistemas embebidos',
    'en': 'Microtechnology and embedded systems'
  },
  'topic6': {
    'es': 'Simulación y modelado',
    'en': 'Simulation and modeling'
  },
  'topic7': {
    'es': 'Procesamiento de lenguaje natural',
    'en': 'Natural language processing'
  },
  'topic8': {
    'es': 'Redes',
    'en': 'Networks'
  },
  'topic9': {
    'es': 'Computación cuántica',
    'en': 'Quantum computing'
  },
  'topic10': {
    'es': 'Inteligencia artificial',
    'en': 'Artificial intelligence'
  },
  'topic11': {
    'es': 'Lógica difusa y redes neuronales',
    'en': 'Fuzzy logic and neural networks'
  },
  'topic12': {
    'es': 'Cómputo en la nube',
    'en': 'Cloud computing'
  },
  'topic13': {
    'es': 'Interacción humano-computadora',
    'en': 'Human-computer interaction'
  },
  'topic14': {
    'es': 'Big-Data',
    'en': 'Big Data'
  },
  'topic15': {
    'es': 'Automatización y sistemas inteligentes',
    'en': 'Automation and intelligent systems'
  },
  'topic16': {
    'es': 'IoT y ciudades inteligentes',
    'en': 'IoT and smart cities'
  },
  'topic17': {
    'es': 'Ciencias cognitivas computacionales',
    'en': 'Computational cognitive sciences'
  },
  'topic18': {
    'es': 'Robótica y mecatrónica',
    'en': 'Robotics and mechatronics'
  },
  'topic19': {
    'es': 'Procesamiento de imágenes y visión artificial',
    'en': 'Image processing and computer vision'
  },
  // Comité
  'committee_chairs': {
    'es': 'Presidentes del Comité',
    'en': 'Committee Chairs'
  },
  'committee_members': {
    'es': 'Miembros del Comité',
    'en': 'Committee Members'
  },
  'committee_reviewers': {
    'es': 'Revisores',
    'en': 'Reviewers'
  },
  // Programa y Call for Papers
  'workshop_program_title': {
    'es': 'PROGRAMA DE TALLERES',
    'en': 'WORKSHOP PROGRAM'
  },
  'workshops_description': {
    'es': 'Se contará con al menos 12 talleres que se llevarán a cabo en las aulas equipadas del Centro de Investigación en Computación, las características de los talleres son las siguientes:',
    'en': 'There will be at least 12 workshops held in the equipped classrooms of the Computing Research Center, the characteristics of the workshops are as follows:'
  },
  'view_workshop_schedule': {
    'es': 'Ver horarios de talleres',
    'en': 'View workshop schedule'
  },
  'workshops_list_item1': {
    'es': 'Tema enfocado en cualquiera de las LGAC del Centro.',
    'en': 'Topics focused on any of the Center\'s research lines.'
  },
  'workshops_list_item2': {
    'es': 'Duración mínima de 4 horas, máxima de 8 horas.',
    'en': 'Minimum duration of 4 hours, maximum of 8 hours.'
  },
  'workshops_list_item3': {
    'es': 'Cupo máximo de 20 asistentes.',
    'en': 'Maximum capacity of 20 attendees.'
  },
  'workshops_list_item4': {
    'es': 'Los talleres serán ofertados en el call for workshops, siguiendo las fechas propuestas para el evento.',
    'en': 'Workshops will be offered in the call for workshops, following the dates proposed for the event.'
  },
  
  // Sección de sponsors y patrocinadores
  'sponsors_title': {
    'es': 'Sponsors y Patrocinadores',
    'en': 'Sponsors and Partners'
  },
  'sponsors_description': {
    'es': 'Agradecemos a nuestros patrocinadores por su valioso apoyo al Congreso CORE 2026',
    'en': 'We thank our sponsors for their valuable support to the CORE 2026 Congress'
  },
  'sponsors_coming_soon': {
    'es': 'Próximamente se anunciarán los patrocinadores del evento',
    'en': 'Event sponsors will be announced soon'
  },
  'become_sponsor': {
    'es': '¿Interesado en ser patrocinador?',
    'en': 'Interested in becoming a sponsor?'
  },
  'sponsor_contact': {
    'es': 'Para información sobre cómo convertirse en patrocinador del Congreso CORE 2026, por favor contacte a: core@cic.ipn.mx',
    'en': 'For information on how to become a sponsor of the CORE 2026 Congress, please contact: core@cic.ipn.mx'
  },
  'sponsor_info': {
    'es': 'El Congreso Internacional de Ciencias de la Computación CORE 2026 es un evento estudiantil del Instituto Politécnico Nacional que se celebrará del 28 al 31 de octubre de 2026 en Ciudad de México. En su 24ª edición, este congreso se enfoca en la sostenibilidad y el papel de las ciencias computacionales, especialmente la Inteligencia Artificial, en el desarrollo sostenible. Se esperan alrededor de 300 participantes y la presentación de aproximadamente 55 trabajos entre presentaciones orales y pósters. CORE 2026 ofrece tres niveles de patrocinio (Platino: $50,000, Oro: $20,000 y Plata: $10,000) con beneficios que incluyen desde presencia de marca hasta espacios de exhibición y presentaciones promocionales. Los interesados en patrocinar deben contactar al comité organizador antes del 10 de agosto de 2026 mediante el correo core@cic.ipn.mx.',
    'en': 'The International Congress of Computer Science CORE 2026 is a student-led event by the National Polytechnic Institute taking place from October 28-31, 2026, in Mexico City. In its 24th edition, this congress focuses on sustainability and the role of computer sciences, especially Artificial Intelligence, in sustainable development. Around 300 participants are expected, with approximately 55 papers to be presented through oral presentations and posters. CORE 2026 offers three sponsorship levels (Platinum: $50,000, Gold: $20,000, and Silver: $10,000) with benefits ranging from brand presence to exhibition spaces and promotional presentations. Those interested in sponsoring should contact the organizing committee before August 10, 2026, via email at core@cic.ipn.mx.'
  },
  'download_sponsor_info': {
    'es': 'Descargar información para patrocinadores',
    'en': 'Download sponsor information'
  },
  // Añadir traducciones para los niveles de patrocinio
  'sponsor_level_platinum': {
    'es': 'Platino',
    'en': 'Platinum'
  },
  'sponsor_level_gold': {
    'es': 'Oro',
    'en': 'Gold'
  },
  'sponsor_level_silver': {
    'es': 'Plata',
    'en': 'Silver'
  },
  'sponsor_benefit_1': {
    'es': 'Logo en materiales promocionales',
    'en': 'Logo on promotional materials'
  },
  'sponsor_benefit_2': {
    'es': 'Stand en área de exhibición',
    'en': 'Booth in exhibition area'
  },
  'sponsor_benefit_3': {
    'es': 'Presentación promocional',
    'en': 'Promotional presentation'
  },
  'sponsor_benefit_4': {
    'es': 'Pases completos al congreso',
    'en': 'Full congress passes'
  },
  'sponsor_deadline': {
    'es': 'Fecha límite para patrocinio: 10 de agosto de 2026',
    'en': 'Sponsorship deadline: August 10, 2026'
  },
  'mascot_title': {
    'es': 'Mascota Oficial',
    'en': 'Official Mascot'
  }
}; 