// data_missions.js - Mission data for Cosmic Chronicles

// Missions data
const AN_missions_data = [
    {
        id: 'mission-001',
        type: 'mission',
        status: 'completed',
        category: 'moon',
        agency: 'NASA',
        date: '1969-07-20',
        image: 'assets/images/missions/apollo11.jpg',
        en: {
            title: 'Apollo 11',
            subtitle: 'First crewed mission to land on the Moon',
            body: 'Apollo 11 was the American spaceflight that first landed humans on the Moon. Commander Neil Armstrong and lunar module pilot Buzz Aldrin landed the Apollo Lunar Module Eagle on July 20, 1969. Armstrong became the first person to step onto the lunar surface six hours and 39 minutes later on July 21 at 02:56 UTC; Aldrin joined him 19 minutes later. They spent about two and a quarter hours together outside the spacecraft, and they collected 47.5 pounds (21.5 kg) of lunar material to bring back to Earth. Command module pilot Michael Collins flew the command module Columbia alone in lunar orbit while they were on the Moon\'s surface.',
            agency: 'National Aeronautics and Space Administration (NASA)'
        },
        fr: {
            title: 'Apollo 11',
            subtitle: 'Première mission habitée à se poser sur la Lune',
            body: 'Apollo 11 était le vol spatial américain qui a fait atterrir pour la première fois des humains sur la Lune. Le commandant Neil Armstrong et le pilote du module lunaire Buzz Aldrin ont fait atterrir le module lunaire Apollo Eagle le 20 juillet 1969. Armstrong est devenu la première personne à poser le pied sur la surface lunaire six heures et 39 minutes plus tard, le 21 juillet à 02h56 UTC ; Aldrin l\'a rejoint 19 minutes plus tard. Ils ont passé environ deux heures et quart ensemble à l\'extérieur du vaisseau spatial et ont collecté 47,5 livres (21,5 kg) de matériau lunaire à ramener sur Terre. Le pilote du module de commande Michael Collins a piloté le module de commande Columbia seul en orbite lunaire pendant qu\'ils étaient à la surface de la Lune.',
            agency: 'Administration nationale de l\'aéronautique et de l\'espace (NASA)'
        },
        ar: {
            title: 'أبولو 11',
            subtitle: 'أول مهمة مأهولة تهبط على القمر',
            body: 'كانت أبولو 11 رحلة الفضاء الأمريكية التي هبطت لأول مرة بالبشر على القمر. هبط القائد نيل أرمسترونج وطيار الوحدة القمرية باز ألدرين بالوحدة القمرية أبولو إيغل في 20 يوليو 1969. أصبح أرمسترونج أول شخص يطأ سطح القمر بعد ست ساعات و 39 دقيقة في 21 يوليو الساعة 02:56 بالتوقيت العالمي؛ وانضم إليه ألدرين بعد 19 دقيقة. أمضيا حوالي ساعتين وربع معًا خارج المركبة الفضائية، وجمعا 47.5 رطلاً (21.5 كجم) من المواد القمرية لإعادتها إلى الأرض. طار طيار وحدة القيادة مايكل كولينز بوحدة القيادة كولومبيا بمفرده في مدار القمر بينما كانا على سطح القمر.',
            agency: 'الإدارة الوطنية للملاحة الجوية والفضاء (ناسا)'
        }
    },
    {
        id: 'mission-002',
        type: 'mission',
        status: 'active',
        category: 'mars',
        agency: 'NASA',
        date: '2021-02-18',
        image: 'assets/images/missions/perseverance.jpg',
        en: {
            title: 'Mars 2020: Perseverance Rover',
            subtitle: 'Searching for signs of ancient life on Mars',
            body: 'Perseverance rover landed on Mars on February 18, 2021. Its mission is to seek signs of ancient life and collect rock and soil samples for possible return to Earth. The rover carries seven primary science instruments, 23 cameras, and two microphones. It also transported the Ingenuity helicopter, which completed the first powered flight on another planet. Perseverance is exploring Jezero Crater, a 28-mile-wide (45 kilometers) crater that once held a lake and a river delta billions of years ago.',
            agency: 'National Aeronautics and Space Administration (NASA)'
        },
        fr: {
            title: 'Mars 2020 : Rover Perseverance',
            subtitle: 'Recherche de signes de vie ancienne sur Mars',
            body: 'Le rover Perseverance a atterri sur Mars le 18 février 2021. Sa mission est de rechercher des signes de vie ancienne et de collecter des échantillons de roche et de sol pour un éventuel retour sur Terre. Le rover transporte sept instruments scientifiques principaux, 23 caméras et deux microphones. Il a également transporté l\'hélicoptère Ingenuity, qui a réalisé le premier vol motorisé sur une autre planète. Perseverance explore le cratère Jezero, un cratère de 28 miles de large (45 kilomètres) qui abritait autrefois un lac et un delta fluvial il y a des milliards d\'années.',
            agency: 'Administration nationale de l\'aéronautique et de l\'espace (NASA)'
        },
        ar: {
            title: 'المريخ 2020: روفر المثابرة',
            subtitle: 'البحث عن علامات الحياة القديمة على المريخ',
            body: 'هبطت مركبة المثابرة على المريخ في 18 فبراير 2021. مهمتها هي البحث عن علامات الحياة القديمة وجمع عينات من الصخور والتربة لإعادتها المحتملة إلى الأرض. تحمل المركبة سبعة أدوات علمية رئيسية و 23 كاميرا وميكروفونين. كما نقلت مروحية إنجينيويتي، التي أكملت أول رحلة تعمل بالطاقة على كوكب آخر. تستكشف المثابرة فوهة جيزيرو، وهي فوهة بعرض 28 ميلاً (45 كيلومتراً) كانت تحتوي ذات يوم على بحيرة ودلتا نهرية منذ مليارات السنين.',
            agency: 'الإدارة الوطنية للملاحة الجوية والفضاء (ناسا)'
        }
    },
    {
        id: 'mission-003',
        type: 'mission',
        status: 'active',
        category: 'deep-space',
        agency: 'ESA/NASA',
        date: '2021-12-25',
        image: 'assets/images/missions/james-webb.jpg',
        en: {
            title: 'James Webb Space Telescope',
            subtitle: 'Next-generation space observatory',
            body: 'The James Webb Space Telescope is the largest, most powerful space telescope ever built. It was launched on December 25, 2021, and reached its destination at the second Lagrange point (L2) about 1.5 million kilometers from Earth. Webb will allow scientists to look at what our universe was like about 200 million years after the Big Bang. It can observe objects 100 times fainter than Hubble can see, and will study every phase of cosmic history: from the first luminous glows after the Big Bang to the formation of galaxies, stars, and planets.',
            agency: 'European Space Agency / NASA'
        },
        fr: {
            title: 'Télescope spatial James Webb',
            subtitle: 'Observatoire spatial de nouvelle génération',
            body: 'Le télescope spatial James Webb est le plus grand et le plus puissant télescope spatial jamais construit. Il a été lancé le 25 décembre 2021 et a atteint sa destination au deuxième point de Lagrange (L2) à environ 1,5 million de kilomètres de la Terre. Webb permettra aux scientifiques de voir à quoi ressemblait notre univers environ 200 millions d\'années après le Big Bang. Il peut observer des objets 100 fois plus faibles que ce que Hubble peut voir, et étudiera chaque phase de l\'histoire cosmique : des premières lueurs lumineuses après le Big Bang à la formation des galaxies, des étoiles et des planètes.',
            agency: 'Agence spatiale européenne / NASA'
        },
        ar: {
            title: 'تلسكوب جيمس ويب الفضائي',
            subtitle: 'مرصد فضائي من الجيل التالي',
            body: 'تلسكوب جيمس ويب الفضائي هو أكبر وأقوى تلسكوب فضائي تم بناؤه على الإطلاق. تم إطلاقه في 25 ديسمبر 2021، ووصل إلى وجهته عند نقطة لاغرانج الثانية (L2) على بعد حوالي 1.5 مليون كيلومتر من الأرض. سيسمح ويب للعلماء بالنظر إلى ما كان عليه كوننا قبل حوالي 200 مليون سنة بعد الانفجار العظيم. يمكنه مراقبة أجرام أضعف 100 مرة مما يمكن أن يراه هابل، وسيدرس كل مرحلة من تاريخ الكون: من الومضات المضيئة الأولى بعد الانفجار العظيم إلى تشكل المجرات والنجوم والكواكب.',
            agency: 'الوكالة الفضائية الأوروبية / ناسا'
        }
    },
    {
        id: 'mission-004',
        type: 'mission',
        status: 'upcoming',
        category: 'moon',
        agency: 'NASA',
        date: '2025-11-01',
        image: 'assets/images/missions/artemis.jpg',
        en: {
            title: 'Artemis Program',
            subtitle: 'Returning humans to the Moon',
            body: 'Artemis is NASA\'s program to return astronauts to the lunar surface by 2025. The program will land the first woman and first person of color on the Moon. Artemis I, an uncrewed test flight, was successfully completed in 2022. Artemis II will carry astronauts around the Moon in 2024, and Artemis III will land astronauts on the lunar surface in 2025. The program aims to establish a sustainable human presence on the Moon by the end of the decade, serving as a stepping stone for future Mars missions.',
            agency: 'National Aeronautics and Space Administration (NASA)'
        },
        fr: {
            title: 'Programme Artemis',
            subtitle: 'Retour des humains sur la Lune',
            body: 'Artemis est le programme de la NASA pour ramener des astronautes à la surface lunaire d\'ici 2025. Le programme fera atterrir la première femme et la première personne de couleur sur la Lune. Artemis I, un vol d\'essai sans équipage, a été achevé avec succès en 2022. Artemis II transportera des astronautes autour de la Lune en 2024, et Artemis III fera atterrir des astronautes sur la surface lunaire en 2025. Le programme vise à établir une présence humaine durable sur la Lune d\'ici la fin de la décennie, servant de tremplin pour les futures missions vers Mars.',
            agency: 'Administration nationale de l\'aéronautique et de l\'espace (NASA)'
        },
        ar: {
            title: 'برنامج أرتميس',
            subtitle: 'عودة البشر إلى القمر',
            body: 'أرتميس هو برنامج ناسا لإعادة رواد الفضاء إلى سطح القمر بحلول عام 2025. سيهبط البرنامج بأول امرأة وأول شخص من ذوي البشرة الملونة على القمر. تم الانتهاء بنجاح من أرتميس الأول، وهي رحلة تجريبية بدون طاقم، في عام 2022. ستحمل أرتميس الثاني رواد فضاء حول القمر في عام 2024، وستهبط أرتميس الثالث برواد فضاء على سطح القمر في عام 2025. يهدف البرنامج إلى إنشاء وجود بشري مستدام على القمر بحلول نهاية العقد، ليكون بمثابة نقطة انطلاق للبعثات المستقبلية إلى المريخ.',
            agency: 'الإدارة الوطنية للملاحة الجوية والفضاء (ناسا)'
        }
    },
    {
        id: 'mission-005',
        type: 'mission',
        status: 'active',
        category: 'tunisia',
        agency: 'TASA',
        date: '2023-03-22',
        image: 'assets/images/missions/tunisia-satellite.jpg',
        en: {
            title: 'Tunisia\'s First Educational Satellite',
            subtitle: 'Advancing space technology in Tunisia',
            body: 'Tunisia launched its first educational satellite developed by Tunisian students and researchers from the Tunisian Association for Space Activities (TASA). The satellite, named "Challenge One," is a CubeSat designed for educational and technological demonstration purposes. It carries payloads for IoT connectivity testing and serves as a platform for training the next generation of Tunisian space engineers and scientists. This mission marks a significant step in Tunisia\'s space program and demonstrates the country\'s commitment to developing indigenous space capabilities.',
            agency: 'Tunisian Association for Space Activities (TASA)'
        },
        fr: {
            title: 'Premier satellite éducatif tunisien',
            subtitle: 'Développement de la technologie spatiale en Tunisie',
            body: 'La Tunisie a lancé son premier satellite éducatif développé par des étudiants et des chercheurs tunisiens de l\'Association Tunisienne des Activités Spatiales (ATAS). Le satellite, nommé "Challenge One", est un CubeSat conçu à des fins éducatives et de démonstration technologique. Il transporte des charges utiles pour les tests de connectivité IoT et sert de plateforme pour former la prochaine génération d\'ingénieurs et de scientifiques spatiaux tunisiens. Cette mission marque une étape importante dans le programme spatial tunisien et démontre l\'engagement du pays à développer des capacités spatiales indigènes.',
            agency: 'Association Tunisienne des Activités Spatiales (ATAS)'
        },
        ar: {
            title: 'أول قمر صناعي تعليمي تونسي',
            subtitle: 'تطوير تكنولوجيا الفضاء في تونس',
            body: 'أطلقت تونس أول قمر صناعي تعليمي تم تطويره من قبل الطلاب والباحثين التونسيين من الجمعية التونسية للأنشطة الفضائية. القمر الصناعي، المسمى "تحدي واحد"، هو قمر صناعي مكعب مصمم لأغراض التعليم والتوضيح التكنولوجي. يحمل حمولات لاختبار اتصال إنترنت الأشياء ويخدم كمنصة لتدريب الجيل القادم من المهندسين والعلماء الفضائيين التونسيين. تمثل هذه المهمة خطوة مهمة في البرنامج الفضائي التونسي وتظهر التزام البلاد بتطوير قدرات فضائية محلية.',
            agency: 'الجمعية التونسية للأنشطة الفضائية'
        }
    },
    {
        id: 'mission-006',
        type: 'mission',
        status: 'upcoming',
        category: 'mars',
        agency: 'ESA',
        date: '2028-09-01',
        image: 'assets/images/missions/exomars.jpg',
        en: {
            title: 'ExoMars Rover',
            subtitle: 'European search for life on Mars',
            body: 'The ExoMars rover, named Rosalind Franklin, is designed to search for evidence of past life on Mars. It will drill down to 2 meters below the surface to analyze soil samples protected from Mars\' harsh surface conditions. The rover carries a sophisticated suite of instruments called Pasteur that will perform organic and geochemical analysis. Originally scheduled for 2022, the mission was postponed due to geopolitical considerations and is now planned for launch in 2028. ExoMars is a joint program between the European Space Agency and Roscosmos.',
            agency: 'European Space Agency (ESA)'
        },
        fr: {
            title: 'Rover ExoMars',
            subtitle: 'Recherche européenne de la vie sur Mars',
            body: 'Le rover ExoMars, nommé Rosalind Franklin, est conçu pour rechercher des preuves de vie passée sur Mars. Il forera jusqu\'à 2 mètres sous la surface pour analyser des échantillons de sol protégés des conditions de surface difficiles de Mars. Le rover transporte une suite sophistiquée d\'instruments appelée Pasteur qui effectuera une analyse organique et géochimique. Initialement prévue pour 2022, la mission a été reportée pour des considérations géopolitiques et est maintenant prévue pour un lancement en 2028. ExoMars est un programme conjoint entre l\'Agence spatiale européenne et Roscosmos.',
            agency: 'Agence spatiale européenne (ESA)'
        },
        ar: {
            title: 'روبر إكسومارس',
            subtitle: 'البحث الأوروبي عن الحياة على المريخ',
            body: 'تم تصميم مركبة إكسومارس، المسماة روزاليند فرانكلين، للبحث عن أدلة على الحياة السابقة على المريخ. ستحفر حتى عمق مترين تحت السطح لتحليل عينات التربة المحمية من الظروف السطحية القاسية للمريخ. تحمل المركبة مجموعة متطورة من الأدوات تسمى باستور ستقوم بإجراء تحليل عضوي وجيوكيميائي. تم تأجيل المهمة، التي كانت مقررة أصلاً لعام 2022، بسبب اعتبارات جيوسياسية ومن المقرر إطلاقها الآن في عام 2028. إكسومارس هو برنامج مشترك بين الوكالة الفضائية الأوروبية وروسكوسموس.',
            agency: 'الوكالة الفضائية الأوروبية (ESA)'
        }
    }
];

// Timeline data - Expanded with more events
const AN_timeline_data = [
    { 
        year: '1957', 
        en: { title: 'Sputnik 1', desc: 'First artificial satellite launched by the Soviet Union, marking the beginning of the Space Age' },
        fr: { title: 'Spoutnik 1', desc: 'Premier satellite artificiel lancé par l\'Union Soviétique, marquant le début de l\'Ère Spatiale' },
        ar: { title: 'سبوتنك 1', desc: 'أول قمر صناعي أطلقته الاتحاد السوفييتي، مما يمثل بداية عصر الفضاء' },
        icon: 'fa-satellite' 
    },
    { 
        year: '1958', 
        en: { title: 'NASA Founded', desc: 'National Aeronautics and Space Administration established in the United States' },
        fr: { title: 'Fondation de la NASA', desc: 'Administration nationale de l\'aéronautique et de l\'espace créée aux États-Unis' },
        ar: { title: 'تأسيس ناسا', desc: 'تم تأسيس الإدارة الوطنية للملاحة الجوية والفضاء في الولايات المتحدة' },
        icon: 'fa-building' 
    },
    { 
        year: '1961', 
        en: { title: 'Vostok 1', desc: 'Yuri Gagarin becomes the first human in space, completing one orbit of Earth' },
        fr: { title: 'Vostok 1', desc: 'Youri Gagarine devient le premier humain dans l\'espace, accomplissant une orbite de la Terre' },
        ar: { title: 'فوستوك 1', desc: 'يوري غاغارين يصبح أول إنسان في الفضاء، ويكمل دورة واحدة حول الأرض' },
        icon: 'fa-user-astronaut' 
    },
    { 
        year: '1963', 
        en: { title: 'Valentina Tereshkova', desc: 'First woman in space aboard Vostok 6' },
        fr: { title: 'Valentina Terechkova', desc: 'Première femme dans l\'espace à bord de Vostok 6' },
        ar: { title: 'فالنتينا تيريشكوفا', desc: 'أول امرأة في الفضاء على متن فوستوك 6' },
        icon: 'fa-user-astronaut' 
    },
    { 
        year: '1965', 
        en: { title: 'First Spacewalk', desc: 'Alexei Leonov performs first extravehicular activity (spacewalk)' },
        fr: { title: 'Première sortie spatiale', desc: 'Alexeï Leonov effectue la première activité extravéhiculaire (sortie spatiale)' },
        ar: { title: 'أول نشاط خارج المركبة', desc: 'ألكسي ليونوف يؤدي أول نشاط خارج المركبة (سير في الفضاء)' },
        icon: 'fa-walking' 
    },
    { 
        year: '1969', 
        en: { title: 'Apollo 11', desc: 'First crewed Moon landing - "That\'s one small step for man, one giant leap for mankind"' },
        fr: { title: 'Apollo 11', desc: 'Premier alunissage habité - "Un petit pas pour l\'homme, un bond de géant pour l\'humanité"' },
        ar: { title: 'أبولو 11', desc: 'أول هبوط مأهول على القمر - "خطوة صغيرة للإنسان، قفزة عملاقة للبشرية"' },
        icon: 'fa-moon' 
    },
    { 
        year: '1971', 
        en: { title: 'Salyut 1', desc: 'First space station launched, beginning era of long-term human presence in space' },
        fr: { title: 'Saliout 1', desc: 'Première station spatiale lancée, début de l\'ère de la présence humaine à long terme dans l\'espace' },
        ar: { title: 'ساليوت 1', desc: 'أول محطة فضائية تطلق، بداية عصر الوجود البشري طويل الأمد في الفضاء' },
        icon: 'fa-space-station' 
    },
    { 
        year: '1975', 
        en: { title: 'Apollo-Soyuz', desc: 'First international crewed space mission between US and Soviet Union' },
        fr: { title: 'Apollo-Soyouz', desc: 'Première mission spatiale habitée internationale entre les États-Unis et l\'Union Soviétique' },
        ar: { title: 'أبولو-سويوز', desc: 'أول مهمة فضائية مأهولة دولية بين الولايات المتحدة والاتحاد السوفييتي' },
        icon: 'fa-handshake' 
    },
    { 
        year: '1977', 
        en: { title: 'Voyager 1 & 2', desc: 'Interstellar space probes launched, carrying Golden Records with sounds and images from Earth' },
        fr: { title: 'Voyager 1 & 2', desc: 'Sondes spatiales interstellaires lancées, transportant des Disques d\'Or avec des sons et des images de la Terre' },
        ar: { title: 'فوياجر 1 و 2', desc: 'أطلقت مسابير الفضاء بين النجوم، تحمل أقراصاً ذهبية تحتوي على أصوات وصور من الأرض' },
        icon: 'fa-satellite-dish' 
    },
    { 
        year: '1981', 
        en: { title: 'Space Shuttle Columbia', desc: 'First reusable spacecraft launched, beginning the Space Shuttle program' },
        fr: { title: 'Navette spatiale Columbia', desc: 'Premier vaisseau spatial réutilisable lancé, début du programme de la navette spatiale' },
        ar: { title: 'مكوك الفضاء كولومبيا', desc: 'أول مركبة فضائية قابلة لإعادة الاستخدام تطلق، بداية برنامج مكوك الفضاء' },
        icon: 'fa-space-shuttle' 
    },
    { 
        year: '1986', 
        en: { title: 'Mir Space Station', desc: 'First modular space station launched, remained in orbit for 15 years' },
        fr: { title: 'Station spatiale Mir', desc: 'Première station spatiale modulaire lancée, restée en orbite pendant 15 ans' },
        ar: { title: 'محطة مير الفضائية', desc: 'أول محطة فضائية معيارية تطلق، بقيت في المدار لمدة 15 عاماً' },
        icon: 'fa-dharmachakra' 
    },
    { 
        year: '1990', 
        en: { title: 'Hubble Telescope', desc: 'Space telescope deployed from Space Shuttle, revolutionizing astronomy' },
        fr: { title: 'Télescope Hubble', desc: 'Télescope spatial déployé depuis la navette spatiale, révolutionnant l\'astronomie' },
        ar: { title: 'تلسكوب هابل', desc: 'تلسكوب فضائي تم نشره من مكوك الفضاء، أحدث ثورة في علم الفلك' },
        icon: 'fa-telescope' 
    },
    { 
        year: '1998', 
        en: { title: 'ISS Construction Begins', desc: 'International Space Station assembly begins, largest human-made object in space' },
        fr: { title: 'Début construction ISS', desc: 'Début de l\'assemblage de la Station Spatiale Internationale, plus grand objet artificiel dans l\'espace' },
        ar: { title: 'بداية بناء محطة الفضاء الدولية', desc: 'بداية تجميع محطة الفضاء الدولية، أكبر جسم من صنع الإنسان في الفضاء' },
        icon: 'fa-network-wired' 
    },
    { 
        year: '2000', 
        en: { title: 'ISS Permanent Crew', desc: 'First long-term residents arrive at International Space Station' },
        fr: { title: 'Équipage permanent ISS', desc: 'Premiers résidents à long terme arrivent à la Station Spatiale Internationale' },
        ar: { title: 'طاقم دائم لمحطة الفضاء الدولية', desc: 'وصول أول مقيمين على المدى الطويل إلى محطة الفضاء الدولية' },
        icon: 'fa-users' 
    },
    { 
        year: '2004', 
        en: { title: 'SpaceShipOne', desc: 'First privately funded crewed spaceflight wins Ansari X Prize' },
        fr: { title: 'SpaceShipOne', desc: 'Premier vol spatial habité financé par des fonds privés remporte le prix Ansari X' },
        ar: { title: 'سفينة الفضاء واحد', desc: 'أول رحلة فضائية مأهولة ممولة من القطاع الخاص تفوز بجائزة إكس أنصاري' },
        icon: 'fa-rocket' 
    },
    { 
        year: '2012', 
        en: { title: 'Curiosity Rover', desc: 'NASA rover lands on Mars, begins search for habitable conditions' },
        fr: { title: 'Rover Curiosity', desc: 'Le rover de la NASA atterrit sur Mars, commence la recherche de conditions habitables' },
        ar: { title: 'مركبة كيوريوسيتي', desc: 'مركبة ناسا تهبط على المريخ، وتبدأ البحث عن ظروف قابلة للسكن' },
        icon: 'fa-robot' 
    },
    { 
        year: '2014', 
        en: { title: 'Rosetta Mission', desc: 'First spacecraft to orbit and land on a comet' },
        fr: { title: 'Mission Rosetta', desc: 'Premier vaisseau spatial à orbiter et atterrir sur une comète' },
        ar: { title: 'مهمة روزيتا', desc: 'أول مركبة فضائية تدور وتهبط على مذنب' },
        icon: 'fa-comet' 
    },
    { 
        year: '2015', 
        en: { title: 'New Horizons', desc: 'First spacecraft to fly by Pluto, revealing its complex surface' },
        fr: { title: 'New Horizons', desc: 'Premier vaisseau spatial à survoler Pluton, révélant sa surface complexe' },
        ar: { title: 'آفاق جديدة', desc: 'أول مركبة فضائية تحلق بالقرب من بلوتو، تكشف عن سطحه المعقد' },
        icon: 'fa-globe-americas' 
    },
    { 
        year: '2018', 
        en: { title: 'Falcon Heavy', desc: 'Most powerful operational rocket by SpaceX launches with Tesla Roadster payload' },
        fr: { title: 'Falcon Heavy', desc: 'Fusée opérationnelle la plus puissante de SpaceX lancée avec une charge utile Tesla Roadster' },
        ar: { title: 'فالكون هيفي', desc: 'أقوى صاروخ تشغيلي من سبيس إكس يطلق بحمولة تسلا رودستر' },
        icon: 'fa-rocket' 
    },
    { 
        year: '2020', 
        en: { title: 'Crew Dragon', desc: 'First commercial crewed mission to ISS by SpaceX' },
        fr: { title: 'Crew Dragon', desc: 'Première mission habitée commerciale vers l\'ISS par SpaceX' },
        ar: { title: 'دراجون كرو', desc: 'أول مهمة مأهولة تجارية إلى محطة الفضاء الدولية من قبل سبيس إكس' },
        icon: 'fa-space-shuttle' 
    },
    { 
        year: '2021', 
        en: { title: 'Perseverance Rover', desc: 'NASA rover with Ingenuity helicopter lands on Mars, begins sample collection' },
        fr: { title: 'Rover Perseverance', desc: 'Le rover de la NASA avec l\'hélicoptère Ingenuity atterrit sur Mars, commence la collecte d\'échantillons' },
        ar: { title: 'مركبة المثابرة', desc: 'مركبة ناسا مع مروحية إنجينيويتي تهبط على المريخ، وتبدأ جمع العينات' },
        icon: 'fa-helicopter' 
    },
    { 
        year: '2021', 
        en: { title: 'James Webb Telescope', desc: 'Next-generation space telescope launched, successor to Hubble' },
        fr: { title: 'Télescope James Webb', desc: 'Télescope spatial de nouvelle génération lancé, successeur de Hubble' },
        ar: { title: 'تلسكوب جيمس ويب', desc: 'أطلق تلسكوب الفضاء من الجيل التالي، خليفة هابل' },
        icon: 'fa-satellite' 
    },
    { 
        year: '2022', 
        en: { title: 'Artemis I', desc: 'First uncrewed test flight of NASA\'s Moon return program' },
        fr: { title: 'Artemis I', desc: 'Premier vol d\'essai sans équipage du programme de retour sur la Lune de la NASA' },
        ar: { title: 'أرتميس الأول', desc: 'أول رحلة تجريبية بدون طاقم لبرنامج عودة ناسا إلى القمر' },
        icon: 'fa-moon' 
    },
    { 
        year: '2023', 
        en: { title: 'Chandrayaan-3', desc: 'India successfully lands spacecraft on the Moon\'s south pole' },
        fr: { title: 'Chandrayaan-3', desc: 'L\'Inde atterrit avec succès un vaisseau spatial sur le pôle sud de la Lune' },
        ar: { title: 'تشاندرايان-3', desc: 'الهند تهبط بنجاح بمركبة فضائية على القطب الجنوبي للقمر' },
        icon: 'fa-globe-asia' 
    }
];