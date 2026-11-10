// data.js - Updated with categories and Tunisian data
const AN_data = [
    // Tunisian Local News
    // Global News
    {
		id: 'news-001',
		type: 'news',
		category: 'global',
		image: 'assets2/images/news/gamma-ray-burst.jpg',
		date: '2025-12-10',
		en: {
			title: 'Record-Breaking Gamma-Ray Burst Stuns Astronomers',
			subtitle: 'Unprecedented seven-hour event challenges existing astrophysical models',
			body: 'On July 2, 2025, astronomers detected GRB 250702B, a gamma-ray burst that lasted over seven hours instead of the typical seconds to minutes. Observations from NASA\'s Fermi satellite, ground-based telescopes including the Víctor M. Blanco and Gemini instruments, and the James Webb Space Telescope revealed a relativistic jet in a dusty, massive galaxy 8 billion light-years away. The event\'s extraordinary duration challenges current collapsar models, with scientists considering alternative explanations like tidal disruption events involving intermediate-mass black holes.'
		},
		ar: {
			title: 'انفجار أشعة غاما قياسي يُحيّر الفلكيين',
			subtitle: 'حدث غير مسبوق يستمر لسبع ساعات يتحدى النماذج الفيزيائية الفلكية الحالية',
			body: 'في 2 جويلية 2025، رصد الفلكيون انفجار أشعة غاما GRB 250702B الذي استمر لأكثر من سبع ساعات بدلاً من الثواني أو الدقائق المعتادة. كشفت عمليات الرصد من قمر فيرمي التابع لناسا، والتلسكوبات الأرضية بما فيها تلسكوبات Víctor M. Blanco وGemini، وتلسكوب جيمس ويب الفضائي عن نفث نسبي في مجرة غبارية ضخمة تبعد 8 مليارات سنة ضوئية. تتحدى المدة غير المسبوقة للحدث النماذج الحالية لانفجارات المستعرات العظمى الضخمة، مما دفع العلماء لبحث تفسيرات بديلة مثل أحداث تمزق المد والجزر المتضمنة ثقوباً سوداء متوسطة الكتلة.'
		},
		fr: {
			title: 'Un sursaut gamma record stupéfie les astronomes',
			subtitle: 'Un événement sans précédent de sept heures remet en question les modèles astrophysiques existants',
			body: 'Le 2 juillet 2025, les astronomes ont détecté GRB 250702B, un sursaut gamma qui a duré plus de sept heures au lieu des secondes ou minutes habituelles. Les observations du satellite Fermi de la NASA, des télescopes terrestres dont les instruments Víctor M. Blanco et Gemini, et du télescope spatial James Webb ont révélé un jet relativiste dans une galaxie poussiéreuse massive à 8 milliards d\'années-lumière. La durée extraordinaire de l\'événement remet en cause les modèles actuels de collapsar, poussant les scientifiques à envisager des explications alternatives comme des événements de disruption par effet de marée impliquant des trous noirs de masse intermédiaire.'
		}
	},
    {
		id: 'news-002',
		type: 'news',
		category: 'global',
		image: 'assets2/images/news/comet-3i-atlas.jpg',
		date: '2025-12-05',
		en: {
			title: 'Juice and Hubble Observe Interstellar Comet 3I/Atlas',
			subtitle: 'Spacecraft and telescope provide unique data on the mysterious visitor before its closest approach to Earth',
			body: 'The Jupiter-bound spacecraft Juice and the Hubble Space Telescope have successfully observed the interstellar comet 3I/Atlas. Juice used five instruments, including its NavCam, to capture the comet\'s plasma and dust tails just days before its perihelion. Hubble provided additional images on November 30th. The comet, the third confirmed interstellar visitor after \'Oumuamua and Borisov, will make its closest approach to Earth on December 19th, coming within 273 million kilometers, becoming visible with amateur telescopes.'
		},
		ar: {
			title: 'مسبار جويس وتلسكوب هابل يدرسان المذنب بين النجوم 3I/أطلس',
			subtitle: 'مركبة فضائية وتلسكوب يقدمان بيانات فريدة عن الزائر الغامق قبل اقترابه الأقصى من الأرض',
			body: 'تمكن المسبار جويس المتجه نحو المشتري وتلسكوب هابل الفضائي من رصد المذنب بين النجوم 3I/أطلس. استخدم جويس خمسة أدوات، بما فيها كاميرا الملاحة، لالتقاط ذيول البلازما والغبار الخاصة بالمذنب قبل أيام فقط من وصوله إلى الحضيض الشمسي. وفر هابل صوراً إضافية في 30 نوفمبر. سيصل المذنب، وهو الزائر بين النجوم الثالث المؤكد بعد أومواموا وبوريسوف، إلى أقرب نقطة من الأرض في 19 ديسمبر، ليصبح على بعد 273 مليون كيلومتر، ومرئياً بالتلسكوبات الهواة.'
		},
		fr: {
			title: 'Juice et Hubble observent la comète interstellaire 3I/Atlas',
			subtitle: 'Une sonde spatiale et un télescope fournissent des données uniques sur le mystérieux visiteur avant son approche la plus proche de la Terre',
			body: 'La sonde spatiale Juice, en route vers Jupiter, et le télescope spatial Hubble ont observé avec succès la comète interstellaire 3I/Atlas. Juice a utilisé cinq instruments, dont sa NavCam, pour capturer les queues de plasma et de poussière de la comète quelques jours seulement avant son périhélie. Hubble a fourni des images supplémentaires le 30 novembre. La comète, le troisième visiteur interstellaire confirmé après \'Oumuamua et Borisov, effectuera son approche la plus proche de la Terre le 19 décembre, passant à 273 millions de kilomètres, devenant visible avec des télescopes amateurs.'
		}
	},
    {
		id: 'news-003',
		type: 'news',
		category: 'local',
		image: 'assets2/images/news/tunisia-conference.jpg',
		date: '2025-12-05',
		en: {
			title: 'Tunisian Association of Young Astronomers Hosted Dr. Mayssa El Yazidi on Planetary Geology',
			subtitle: 'Conference on Mercury exploration and remote sensing applications successfully held in Tunis',
			body: 'On December 4, 2025, the Tunisian Association of Young Astronomers organized a significant conference presented by Dr. Mayssa El Yazidi, a postdoctoral researcher at the Institute of Radioastronomy (IRA), National Institute of Astrophysics (INAF) - Italy. The conference covered two main topics: "The exploration of Mercury, from Mariner 10 to BepiColombo" and "Remote sensing data and ArcGis application: From Earth to the planets". The event took place at the Khawarizmi conference hall (Mathematics Department), Faculty of Sciences of Tunis, University of Tunis El Manar, and was conducted in English. The conference was moderated by Feyda Srarfi and provided valuable insights into planetary geology and space technology applications for students and astronomy enthusiasts.'
		},
		ar: {
			title: 'الجمعية التونسية للشباب الفلكيين استضافت الدكتورة ميساء اليزيدي في ندوة حول جيولوجيا الكواكب',
			subtitle: 'عقدت ندوة ناجحة حول استكشاف عطارد وتطبيقات الاستشعار عن بعد في تونس',
			body: 'في 4 ديسمبر 2025، نظمت الجمعية التونسية للشباب الفلكيين ندوة هامة قدمتها الدكتورة ميساء اليزيدي، باحثة ما بعد الدكتوراه في معهد الراديو الفلكي (IRA)، المعهد الوطني للفيزياء الفلكية (INAF) - إيطاليا. تناولت الندوة موضوعين رئيسيين: "استكشاف كوكب عطارد، من مسبار مارينر 10 إلى بيبيكولومبو" و"بيانات الاستشعار عن بعد وتطبيق ArcGis: من الأرض إلى الكواكب". عقدت الندوة في قاعة مؤتمرات الخوارزمي (قسم الرياضيات)، كلية العلوم بتونس، جامعة تونس المنار، وقد قدمت باللغة الإنجليزية. أدارت الندوة فايدة الصرافي وقدمت رؤى قيمة حول جيولوجيا الكواكب وتطبيقات تكنولوجيا الفضاء للطلاب وهواة الفلك.'
		},
		fr: {
			title: 'L\'Association Tunisienne des Jeunes Astronomes a accueilli le Dr Mayssa El Yazidi pour une conférence sur la géologie planétaire',
			subtitle: 'Conférence sur l\'exploration de Mercure et les applications de télédétection tenue avec succès à Tunis',
			body: 'Le 4 décembre 2025, l\'Association Tunisienne des Jeunes Astronomes a organisé une conférence importante présentée par le Dr Mayssa El Yazidi, chercheuse postdoctorale à l\'Institut de Radioastronomie (IRA), Institut National d\'Astrophysique (INAF) - Italie. La conférence a porté sur deux sujets principaux : "L\'exploration de Mercure, de Mariner 10 à BepiColombo" et "Les données de télédétection et l\'application ArcGis : de la Terre aux planètes". L\'événement s\'est tenu à la salle de conférences Khawarizmi (Département de Mathématiques), Faculté des Sciences de Tunis, Université de Tunis El Manar, et a été présenté en anglais. La conférence a été modérée par Feyda Srarfi et a fourni des perspectives précieuses sur la géologie planétaire et les applications de la technologie spatiale pour les étudiants et les passionnés d\'astronomie.'
		}
	},
    {
		id: 'news-004',
		type: 'news',
		category: 'local',
		image: 'assets2/images/news/comet-lemmon-tail.jpg',
		date: '2025-11-10',
		en: {
			title: 'Astrophotographers Capture Comet Lemmon\'s Ion Tail in Stunning Detail',
			subtitle: 'Hafedh Driss and Makrem Akrout reveal chaotic beauty of comet\'s plasma structures',
			body: 'Astrophotographers Hafedh Driss and Makrem Akrout successfully captured Comet Lemmon\'s magnificent ion tail during its approach to perihelion. Using Twin RASA 8 systems equipped with ZWO ASI2600MM Duo cameras and Antlia RGB Pro filters at f/2, they documented the comet under favorable conditions as it entered the inner solar system. The resulting image reveals intense interactions between solar radiation, solar wind, and the comet\'s ionized gases, creating a spectacular ion tail rich in filaments and dynamic plasma waves shaped by the solar magnetic field. The green coma primarily originated from diatomic carbon (C₂) emissions, while the bluish tail traced carbon monoxide ions (CO⁺). As the comet approached its perihelion on November 8, 2025, the ion tail displayed strong brightness variations and turbulent structures driven by solar activity and outgassing from the nucleus. The image represents a significant achievement in comet photography, showcasing both technical expertise and artistic vision in capturing solar system phenomena.'
		},
		ar: {
			title: 'مصورو الفلك يوثقون ذيل المذنب ليمون الأيوني بتفاصيل مذهلة',
			subtitle: 'حافظ دريس ومكرم عكروت يكشفان الجمال الفوضوي للهياكل البلازمية في المذنب',
			body: 'تمكن مصورا الفلك حافظ دريس ومكرم عكروت من التقاط ذيل المذنب ليمون الأيوني المذهل خلال اقترابه من الحضيض الشمسي. باستخدام نظامي RASA 8 المزدوجة المجهزة بكاميرات ZWO ASI2600MM Duo ومرشحات Antlia RGB Pro عند فتحة f/2، وثقوا المذنب في ظروف مواتية بينما دخل النظام الشمسي الداخلي. تظهر الصورة الناتجة تفاعلات مكثفة بين الإشعاع الشمسي والرياح الشمسية والغازات المؤينة للمذنب، مما خلق ذيلاً أيونياً رائعاً غنياً بالخيوط وموجات البلازما الديناميكية المشكلة بواسطة المجال المغناطيسي الشمسي. نشأت الغيبوبة الخضراء بشكل أساسي من انبعاثات الكربون ثنائي الذرة (C₂)، بينما تتبع الذيل المزرق أيونات أول أكسيد الكربون (CO⁺). مع اقتراب المذنب من حضيضه في 8 نوفمبر 2025، أظهر الذيل الأيوني اختلافات قوية في السطوع وهياكل مضطربة مدفوعة بالنشاط الشمسي وانبعاثات الغازات من النواة. تمثل الصورة إنجازاً كبيراً في تصوير المذنبات، حيث تظهر الخبرة التقنية والرؤية الفنية في توثيق ظواهر النظام الشمسي.'
		},
		fr: {
			title: 'Des astrophotographes capturent la queue ionique de la comète Lemmon avec des détails époustouflants',
			subtitle: 'Hafedh Driss et Makrem Akrout révèlent la beauté chaotique des structures plasmatiques de la comète',
			body: 'Les astrophotographes Hafedh Driss et Makrem Akrout ont réussi à capturer la magnifique queue ionique de la comète Lemmon lors de son approche du périhélie. Utilisant des systèmes jumeaux RASA 8 équipés de caméras ZWO ASI2600MM Duo et de filtres Antlia RGB Pro à f/2, ils ont documenté la comète dans des conditions favorables alors qu\'elle entrait dans le système solaire interne. L\'image résultante révèle des interactions intenses entre le rayonnement solaire, le vent solaire et les gaz ionisés de la comète, créant une queue ionique spectaculaire riche en filaments et en ondes de plasma dynamiques façonnées par le champ magnétique solaire. La coma verte provenait principalement des émissions de carbone diatomique (C₂), tandis que la queue bleutée traçait les ions monoxyde de carbone (CO⁺). Alors que la comète approchait de son périhélie le 8 novembre 2025, la queue ionique a affiché de fortes variations de luminosité et des structures turbulentes entraînées par l\'activité solaire et les dégazages du noyau. L\'image représente une réalisation significative en photographie cométaire, montrant à la fois une expertise technique et une vision artistique dans la capture des phénomènes du système solaire.'
		}
	},
    {
		id: 'news-005',
		type: 'news',
		category: 'global',
		image: 'assets2/images/news/cosmic-filament.jpg',
		date: '2025-12-05',
		en: {
			title: 'Never seen before: Astronomers discover the largest rotating structure in the Universe and it defies our models',
			subtitle: 'Cosmic filament of galaxies rotating together challenges understanding of galaxy formation',
			body: 'An international team of astronomers led by the University of Oxford has discovered a chain of 14 galaxies within a cosmic filament rotating together, located 140 million light-years away. The filament, which is 50 million light-years long and contains over 280 galaxies, rotates at a speed of 110 km/s. This discovery, published in the Monthly Notices of the Royal Astronomical Society, challenges current models of galaxy formation and rotation in the early universe.'
		},
		ar: {
			title: 'شيء غير مسبوق: علماء الفلك يكتشفون أكبر بنية دوارة في الكون وهي تتحدى نماذجنا',
			subtitle: 'خيط كوني من المجرات يدور معاً يتحدى فهمنا لتشكل المجرات',
			body: 'اكتشف فريق دولي من علماء الفلك بقيادة جامعة أكسفورد سلسلة من 14 مجرة داخل خيط كوني تدور معاً، على بعد 140 مليون سنة ضوئية. يبلغ طول الخيط الكوني 50 مليون سنة ضوئية ويحتوي على أكثر من 280 مجرة، ويدور بسرعة 110 كم/ثانية. هذا الاكتشاف، الذي نُشر في مجلة Monthly Notices of the Royal Astronomical Society، يتحدى النماذج الحالية لتشكل ودوران المجرات في الكون المبكر.'
		},
		fr: {
			title: 'C\'est du jamais vu : des astronomes ont découvert la plus grande structure en rotation de l\'Univers et elle défie nos modèles',
			subtitle: 'Un filament cosmique de galaxies tournant ensemble remet en question notre compréhension de la formation des galaxies',
			body: 'Une équipe internationale d\'astronomes dirigée par l\'université d\'Oxford a découvert une chaîne de 14 galaxies au sein d\'un filament cosmique en rotation, situé à 140 millions d\'années-lumière. Le filament, qui s\'étend sur 50 millions d\'années-lumière et contient plus de 280 galaxies, tourne à une vitesse de 110 km/s. Cette découverte, publiée dans les Monthly Notices of the Royal Astronomical Society, remet en question les modèles actuels de formation et de rotation des galaxies dans l\'Univers primitif.'
		}
	},
    {
		id: 'news-006',
		type: 'news',
		category: 'local',
		image: 'assets2/images/news/astronomy-IAU.jpg',
		date: '2025-12-01',
		en: {
			title: 'Launch of First Astronomical Project for People with Disabilities in the Arab World',
			subtitle: 'Iraq, Syria, and Tunisia Coordinators under IAU supervision announced the "Astronomy for All" project',
			body: 'The astronomical coordinators of Iraq, Syria, and Tunisia, under the supervision of the Office of Astronomy for Development of the International Astronomical Union, announced the launch of the project: "Astronomy for All: Supporting and Empowering People with Disabilities in the Arab World." This was the first project of its kind in the Arab world, aiming to enhance astronomical inclusion and enable people with disabilities to access and effectively participate in space and astronomical sciences. The project worked on developing educational and guidance programs suitable for different groups, in addition to building a dedicated website for the project as a platform for communication, providing training materials, and announcing joint activities and events. The coordinators of Iraq, Syria, and Tunisia also collaborated in conducting workshops, launching supporting initiatives, and providing a suitable educational environment that contributed to integrating people with disabilities into the Arab and international astronomical community.'
		},
		ar: {
			title: 'انطلاق أول مشروع فلكي لخدمة ذوي الهمم في الوطن العربي',
			subtitle: 'منسقيات العراق وسوريا وتونس للفلك وبإشراف مكتب التوعية الفلكية في الاتحاد الفلكي الدولي أعلنت عن مشروع "الفلك للجميع"',
			body: 'سرّت منسقيات العراق وسوريا وتونس للفلك وبإشراف مكتب التوعية الفلكية في الاتحاد الفلكي الدولي، بالإعلان عن إطلاق مشروع: "الفلك للجميع: دعم وتمكين الأشخاص من ذوي الهمم في العالم العربي". كان هذا المشروع الأول من نوعه على مستوى الوطن العربي وهدف إلى تعزيز الشمول الفلكي وتمكين الأشخاص من ذوي الهمم من الوصول إلى علوم الفضاء والفلك والمشاركة فيها بفاعلية. عمل المشروع على تطوير برامج تعليمية وتوجيهية تتناسب مع مختلف الفئات، بالإضافة إلى بناء موقع إلكتروني مخصص للمشروع يكون منصة للتواصل، وتقديم المواد التدريبية، وإعلان الأنشطة والفعاليات المشتركة. كما تعاونت منسقيات العراق وسوريا وتونس في تنفيذ ورش العمل، وإطلاق المبادرات الداعمة، وتوفير بيئة تعليمية ملائمة ساهمت في دمج ذوي الهمم في المجتمع الفلكي العربي والدولي.'
		},
		fr: {
			title: 'Lancement du premier projet astronomique au service des personnes en situation de handicap dans le monde arabe',
			subtitle: 'Les coordinateurs astronomiques d\'Irak, de Syrie et de Tunisie sous la supervision de l\'Union astronomique internationale ont annoncé le projet "L\'astronomie pour tous"',
			body: 'Les coordinateurs astronomiques d\'Irak, de Syrie et de Tunisie, sous la supervision du Bureau de l\'astronomie pour le développement de l\'Union astronomique internationale, ont annoncé le lancement du projet : "L\'astronomie pour tous : soutien et autonomisation des personnes en situation de handicap dans le monde arabe". Ce projet a été le premier du genre dans le monde arabe et visait à renforcer l\'inclusion astronomique et à permettre aux personnes en situation de handicap d\'accéder et de participer efficacement aux sciences spatiales et astronomiques. Le projet a travaillé au développement de programmes éducatifs et d\'orientation adaptés à différents groupes, en plus de la construction d\'un site web dédié au projet comme plateforme de communication, fournissant du matériel de formation et annonçant les activités et événements conjoints. Les coordinateurs d\'Irak, de Syrie et de Tunisie ont également collaboré à la conduite d\'ateliers, au lancement d\'initiatives de soutien et à la fourniture d\'un environnement éducatif adapté qui a contribué à l\'intégration des personnes en situation de handicap dans la communauté astronomique arabe et internationale.'
		}
	},
    {
		id: 'news-007',
		type: 'news',
		category: 'local',
		image: 'assets2/images/news/cite-sciences-astronomy-evening.jpg',
		date: '2026-10-24',
		en: {
			title: 'Cité des Sciences in Tunis Hosts Astronomy Evening for World Space Week',
			subtitle: 'Free public event combines a lecture on space technologies with stargazing of the Moon and Saturn',
			body: 'On Saturday, October 24, 2026, the Cité des Sciences in Tunis organized an astronomy evening titled "Space in Our Daily Life: From Space Technologies to the Wonders of the Sky," held at the Ibn Khaldoun Amphitheater starting at 6:30 PM. Part of the World Space Week celebrations, the event opened with a lecture exploring how space technologies have become embedded in everyday life, from satellite navigation and communications to Earth observation and weather forecasting. The evening continued with an outdoor stargazing session, where astronomy enthusiasts used telescopes set up on site to observe the Moon, Saturn with its rings and principal moons, and the apparent close approach between the Moon and Saturn. The event was free and open to the public, attracting families, students, and amateur astronomers eager to discover the wonders of the night sky.'
		},
		ar: {
			title: 'مدينة العلوم بتونس تنظّم سهرة فلكية احتفاءً بالأسبوع العالمي للفضاء',
			subtitle: 'تظاهرة مجانية تجمع بين محاضرة حول تقنيات الفضاء ورصد القمر وكوكب زحل',
			body: 'نظّمت مدينة العلوم بتونس يوم السبت 24 أكتوبر 2026 سهرة فلكية بعنوان "الفضاء في حياتنا اليومية: من تقنيات الفضاء إلى عجائب السماء"، وذلك بقاعة ابن خلدون ابتداءً من الساعة السادسة والنصف مساءً. وتندرج هذه السهرة ضمن احتفالات الأسبوع العالمي للفضاء، حيث افتُتحت بمحاضرة تناولت كيفية اندماج تقنيات الفضاء في حياتنا اليومية، من أنظمة الملاحة عبر الأقمار الصناعية والاتصالات إلى رصد الأرض والتنبؤات الجوية. وتواصلت السهرة بورشة رصد فلكي في الهواء الطلق، حيث استخدم هواة الفلك التلسكوبات المثبّتة في الموقع لرصد القمر وكوكب زحل بحلقاته وأقماره الرئيسية، إضافة إلى الاقتران الظاهري بين القمر وزحل. وكانت السهرة مجانية ومفتوحة للعموم، واستقطبت عائلات وطلبة وهواة فلك متعطشين لاكتشاف عجائب سماء الليل.'
		},
		fr: {
			title: 'La Cité des Sciences de Tunis organise une soirée astronomique pour la Semaine Mondiale de l\'Espace',
			subtitle: 'Un événement public gratuit alliant une conférence sur les technologies spatiales à l\'observation de la Lune et de Saturne',
			body: 'Le samedi 24 octobre 2026, la Cité des Sciences de Tunis a organisé une soirée astronomique intitulée « L\'espace dans notre vie quotidienne : des technologies spatiales aux merveilles du ciel », tenue à l\'amphithéâtre Ibn Khaldoun à partir de 18h30. Inscrite dans le cadre des célébrations de la Semaine Mondiale de l\'Espace, la soirée s\'est ouverte par une conférence explorant la manière dont les technologies spatiales se sont intégrées à la vie quotidienne, de la navigation par satellite et des communications à l\'observation de la Terre et aux prévisions météorologiques. La soirée s\'est poursuivie par une séance d\'observation en plein air, où les passionnés d\'astronomie ont utilisé les télescopes installés sur place pour observer la Lune, Saturne avec ses anneaux et ses principaux satellites, ainsi que le rapprochement apparent entre la Lune et Saturne. L\'événement était gratuit et ouvert au public, attirant familles, étudiants et astronomes amateurs désireux de découvrir les merveilles du ciel nocturne.'
		}
	},
	{
		id: 'news-008',
		type: 'news',
		category: 'global',
		image: 'assets2/images/news/3i-atlas-jwst.jpg',
		date: '2026-10-31',
		en: {
			title: 'Interstellar Comet 3I/ATLAS May Contain 10-Billion-Year-Old Material',
			subtitle: 'JWST measurements reveal the comet holds the oldest known matter, formed long before the Sun existed',
			body: 'A new study published in Nature Astronomy has revealed that the interstellar comet 3I/ATLAS contains material that may have formed more than seven billion years before the Sun existed, potentially making it over ten billion years old. The research, led by scientists at NASA\'s Solar System Exploration Division, used the James Webb Space Telescope\'s infrared instruments to analyze the comet\'s chemical cocktail in late December 2025, when it was about 2.5 times as far from the Sun as Earth, passing through the asteroid belt between Mars and Jupiter.\n\nThe team focused on the comet\'s deuterium-to-hydrogen (D/H) ratio in methane. Deuterium is a heavier form of hydrogen, and its abundance relative to normal hydrogen acts as a chemical fingerprint, revealing the temperature and radiation conditions in the environment where the comet\'s frozen dust grains originally formed. The researchers found that 3I/ATLAS holds significantly more heavy methane than any body in our Solar System, and thirteen times more than comet 67P/Churyumov-Gerasimenko, the only other comet for which a secure D/H signature has been measured, thanks to the Rosetta spacecraft.\n\nSeparate observations with the Webb telescope\'s NIRSpec instrument and the ALMA radio telescope network in Chile confirmed exceptionally high deuterium levels, roughly 30 times higher than those seen in Solar System comets. The team also detected only traces of carbon-13 compared to lighter carbon-12. Because stellar systems become enriched with carbon-13 over time as generations of stars are born and die, this isotopic imbalance is a key marker of a very ancient origin. Our own Solar System, which formed 4.5 billion years ago, has much higher levels of carbon-13.\n\nBased on these isotopic measurements, the researchers estimate that 3I/ATLAS formed 10 to 12 billion years ago, during a period known as the Universe\'s "cosmic noon," when star formation was at its peak. Its parent system was likely nestled within a cold, dense cloud, and the abundance of heavy water indicates that the comet spent its early years in a deep freeze, preserving its primordial chemical composition. The findings suggest that 3I/ATLAS came from a primordial ancient planetary system on the outskirts of our Galaxy.\n\n3I/ATLAS was discovered in July 2025 by the NASA-funded ATLAS (Asteroid Terrestrial-impact Last Alert System) telescope network, becoming the third confirmed interstellar object after 1I/\'Oumuamua in 2017 and 2I/Borisov in 2019. Its hyperbolic orbit confirmed an interstellar origin. The comet made its closest approach to the Sun on 29 October 2025, and its closest approach to Earth in December 2025. It is now well past Jupiter on its way out of the Solar System, hurtling away at approximately 220,000 kilometers per hour. Hubble Space Telescope observations estimate its nucleus to be between 440 meters and 5.6 kilometers across. The research raises fundamental questions about whether the conditions conducive to life are rare or commonplace in our Galaxy, and comets like 3I/ATLAS are regarded as time capsules carrying material that has remained intact since their formation, providing direct evidence of the chemical processes at work in distant stellar systems during that distant era.'
		},
		ar: {
			title: 'المذنب بين النجوم 3I/أطلس قد يحتوي على مواد عمرها 10 مليارات سنة',
			subtitle: 'قياسات تلسكوب جيمس ويب تكشف أن المذنب يحمل أقدم مادة معروفة تشكّلت قبل وجود الشمس بفترة طويلة',
			body: 'كشفت دراسة جديدة نُشرت في مجلة Nature Astronomy أن المذنب بين النجوم 3I/أطلس يحتوي على مواد ربما تشكّلت قبل أكثر من سبعة مليارات سنة من وجود الشمس، مما قد يجعل عمرها يتجاوز عشرة مليارات سنة. واستخدم البحث، الذي قاده علماء في قسم استكشاف النظام الشمسي بوكالة ناسا، أدوات تلسكوب جيمس ويب الفضائي العاملة بالأشعة تحت الحمراء لتحليل المزيج الكيميائي للمذنب في أواخر ديسمبر 2025، عندما كان على مسافة تعادل نحو 2.5 مرة بُعد الأرض عن الشمس، عابراً حزام الكويكبات بين المريخ والمشتري.\n\nركّز الفريق على نسبة الديوتيريوم إلى الهيدروجين (D/H) في الميثان. والديوتيريوم هو شكل أثقل من الهيدروجين، ويعمل وفرة نسبة إلى الهيدروجين العادي كبصمة كيميائية تكشف عن درجة الحرارة وظروف الإشعاع في البيئة التي تشكّلت فيها حبيبات الغبار المتجمدة للمذنب. ووجد الباحثون أن 3I/أطلس يحتوي على كميات من الميثان الثقيل تفوق بكثير أي جرم في نظامنا الشمسي، وتزيد ثلاث عشرة مرة عن المذنب 67P/تشوريوموف-غيراسيمنكو، وهو المذنب الوحيد الآخر الذي تم قياس بصمة D/H مؤكدة له بفضل مركبة روزيتا.\n\nوأكدت عمليات رصد منفصلة باستخدام أداة NIRSpec في تلسكوب ويب وشبكة تلسكوب ألما الراديوي في تشيلي مستويات ديوتيريوم عالية استثنائياً، تبلغ نحو 30 مرة أعلى مما لوحظ في مذنبات النظام الشمسي. كما رصد الفريق آثاراً فقط من الكربون-13 مقارنة بالكربون-12 الأخف. ولأن الأنظمة النجمية تثرى بالكربون-13 مع مرور الوقت مع ولادة الأجيال المتعاقبة من النجوم وموتها، فإن هذا الخلل النظيري علامة رئيسية على أصل قديم جداً. ونظامنا الشمسي، الذي تشكّل قبل 4.5 مليار سنة، يحتوي على مستويات أعلى بكثير من الكربون-13.\n\nواستناداً إلى هذه القياسات النظيرية، يقدّر الباحثون أن 3I/أطلس تشكّل قبل 10 إلى 12 مليار سنة، خلال فترة تُعرف بـ"ظهر الكون" عندما كانت عملية تشكّل النجوم في ذروتها. وكان نظامه الأم على الأرجح محتضناً داخل سحابة باردة كثيفة، وتشير وفرة الماء الثقيل إلى أن المذنب قضى سنواته الأولى في حالة تجمد عميق، ما حفظ تركيبه الكيميائي البدائي. وتشير النتائج إلى أن 3I/أطلس جاء من نظام كوكبي قديم بدائي يقع على أطراف مجرتنا.\n\nاكتُشف 3I/أطلس في جوان 2025 بواسطة شبكة تلسكوبات أطلس (ATLAS) الممولة من ناسا، ليصبح ثالث جسم بين النجوم مؤكد بعد 1I/أومواموا في 2017 و2I/بوريسوف في 2019. وأكد مداره القطعي الزائدي أصله بين النجوم. وصل المذنب إلى أقرب نقطة من الشمس في 29 أكتوبر 2025، وإلى أقرب نقطة من الأرض في ديسمبر 2025. وهو الآن بعيد جداً بعد المشتري في طريقه للخروج من النظام الشمسي، مسرعاً بسرعة تقارب 220,000 كيلومتر في الساعة. وتشير أرصاد تلسكوب هابل الفضائي إلى أن قطر نواته يتراوح بين 440 متراً و5.6 كيلومتر. ويثير البحث أسئلة جوهرية حول ما إذا كانت الظروف المؤاتية للحياة نادرة أم شائعة في مجرتنا، ويُعتبر المذنب 3I/أطلس بمثابة كبسولة زمنية تحمل مواد ظلت سليمة منذ تشكّلها، مقدماً أدلة مباشرة على العمليات الكيميائية التي كانت جارية في أنظمة نجمية بعيدة خلال تلك الحقبة السحيقة.'
		},
		fr: {
			title: 'La comète interstellaire 3I/ATLAS pourrait contenir de la matière vieille de 10 milliards d\'années',
			subtitle: 'Les mesures du JWST révèlent que la comète renferme la matière la plus ancienne connue, formée bien avant l\'existence du Soleil',
			body: 'Une nouvelle étude publiée dans Nature Astronomy a révélé que la comète interstellaire 3I/ATLAS contient de la matière qui pourrait s\'être formée plus de sept milliards d\'années avant l\'existence du Soleil, ce qui la rendrait potentiellement âgée de plus de dix milliards d\'années. La recherche, dirigée par des scientifiques de la Division d\'exploration du système solaire de la NASA, a utilisé les instruments infrarouges du télescope spatial James Webb pour analyser le cocktail chimique de la comète fin décembre 2025, alors qu\'elle se trouvait à environ 2,5 fois la distance Terre-Soleil, traversant la ceinture d\'astéroïdes entre Mars et Jupiter.\n\nL\'équipe s\'est concentrée sur le rapport deutérium/hydrogène (D/H) dans le méthane. Le deutérium est une forme plus lourde de l\'hydrogène, et son abondance par rapport à l\'hydrogène normal agit comme une empreinte chimique, révélant la température et les conditions de rayonnement de l\'environnement où les grains de poussière gelés de la comète se sont formés à l\'origine. Les chercheurs ont découvert que 3I/ATLAS renferme nettement plus de méthane lourd que n\'importe quel corps de notre Système solaire, et treize fois plus que la comète 67P/Tchourioumov-Guérassimenko, la seule autre comète pour laquelle une signature D/H fiable a été mesurée, grâce à la sonde Rosetta.\n\nDes observations distinctes avec l\'instrument NIRSpec du télescope Webb et le réseau de radiotélescopes ALMA au Chili ont confirmé des niveaux de deutérium exceptionnellement élevés, environ 30 fois supérieurs à ceux observés dans les comètes du Système solaire. L\'équipe n\'a également détecté que des traces de carbone-13 par rapport au carbone-12 plus léger. Parce que les systèmes stellaires s\'enrichissent en carbone-13 au fil du temps, à mesure que des générations d\'étoiles naissent et meurent, ce déséquilibre isotopique est un marqueur clé d\'une origine très ancienne. Notre propre Système solaire, formé il y a 4,5 milliards d\'années, présente des niveaux de carbone-13 bien plus élevés.\n\nSur la base de ces mesures isotopiques, les chercheurs estiment que 3I/ATLAS s\'est formée il y a 10 à 12 milliards d\'années, pendant une période connue sous le nom de « midi cosmique » de l\'Univers, lorsque la formation d\'étoiles était à son apogée. Son système parent était probablement niché dans un nuage froid et dense, et l\'abondance d\'eau lourde indique que la comète a passé ses premières années dans un gel profond, préservant sa composition chimique primordiale. Les résultats suggèrent que 3I/ATLAS provient d\'un système planétaire ancien et primordial situé aux confins de notre Galaxie.\n\n3I/ATLAS a été découverte en juillet 2025 par le réseau de télescopes ATLAS (Asteroid Terrestrial-impact Last Alert System) financé par la NASA, devenant le troisième objet interstellaire confirmé après 1I/\'Oumuamua en 2017 et 2I/Borisov en 2019. Son orbite hyperbolique a confirmé une origine interstellaire. La comète a effectué son passage au plus près du Soleil le 29 octobre 2025, et son approche la plus proche de la Terre en décembre 2025. Elle se trouve désormais bien au-delà de Jupiter, sur sa trajectoire de sortie du Système solaire, filant à environ 220 000 kilomètres par heure. Les observations du télescope spatial Hubble estiment que son noyau mesure entre 440 mètres et 5,6 kilomètres de diamètre. Cette recherche soulève des questions fondamentales sur la rareté ou la banalité des conditions propices à la vie dans notre Galaxie, et des comètes comme 3I/ATLAS sont considérées comme des capsules temporelles transportant de la matière restée intacte depuis leur formation, offrant des preuves directes des processus chimiques à l\'œuvre dans des systèmes stellaires lointains à cette époque reculée.'
		}
	},
	{
		id: 'news-009',
		type: 'news',
		category: 'local',
		image: 'assets2/images/news/astronomy-importance-dalal-alala.jpg',
		date: '2026-11-07',
		en: {
			title: 'The Importance of Astronomy in Our Lives: Lecture by Dalal Alala',
			subtitle: 'Tunisian Association of Astronomy and Arab Union for Space and Astronomy Sciences host a joint hybrid conference on the role of astronomy in daily life',
			body: 'On Saturday, November 7, 2026, the Tunisian Association of Astronomy, in partnership with the Arab Union for Space and Astronomy Sciences, organized a lecture titled "The Importance of Astronomy in Our Lives," presented by astronomy trainer Dalal Alala. The meeting was held on the Arab Union\'s digital platform, with association members also attending in person at the Cité des Sciences in Tunis. The lecture highlighted five elements of our daily lives that are directly connected to astronomy: the clock (based on Earth\'s rotation), the calendar (based on the movements of the Earth and Moon), the seasons (resulting from Earth\'s axial tilt and orbit around the Sun), navigation (locating positions and directions via GPS satellites), and the phone camera (which benefits from imaging technologies and sensors developed through space research). This event is part of a series of lectures at the Arab level aimed at spreading astronomy culture among Arab youth.'
		},
		ar: {
			title: 'أهمية علم الفلك في حياتنا: محاضرة للمدربة دلال اللالا',
			subtitle: 'الجمعية التونسية لعلوم الفلك والاتحاد العربي لعلوم الفضاء والفلك ينظمان لقاءً مشتركاً حول دور الفلك في الحياة اليومية',
			body: 'نظمت الجمعية التونسية لعلوم الفلك بالشراكة مع الاتحاد العربي لعلوم الفضاء والفلك، يوم السبت 7 نوفمبر 2026، محاضرة بعنوان "أهمية علم الفلك في حياتنا" قدمتها المدربة الفلكية دلال اللالا. أقيم اللقاء على المنصة الرقمية للاتحاد العربي، مع حضور حضوري لأعضاء الجمعية بمدينة العلوم بتونس. وتناولت المحاضرة خمسة أشياء في حياتنا اليومية ترتبط بالفلك بشكل مباشر: الساعة (التي تعتمد على دوران الأرض)، والتقويم (المبني على حركة الأرض والقمر)، والفصول (الناتجة عن ميل محور الأرض ودورانها حول الشمس)، والملاحة (عبر تحديد المواقع والاتجاهات بأنظمة GPS)، وكاميرا الهاتف (التي تستفيد من تقنيات التصوير والحساسات المطورة في أبحاث الفضاء). ويندرج هذا اللقاء ضمن سلسلة من المحاضرات على المستوى العربي تهدف إلى نشر ثقافة علم الفلك بين الشباب العربي.'
		},
		fr: {
			title: 'L\'importance de l\'astronomie dans notre vie : conférence de Dalal Alala',
			subtitle: 'L\'Association Tunisienne d\'Astronomie et l\'Union Arabe des Sciences de l\'Espace et de l\'Astronomie organisent une conférence hybride sur le rôle de l\'astronomie au quotidien',
			body: 'Le samedi 7 novembre 2026, l\'Association Tunisienne d\'Astronomie, en partenariat avec l\'Union Arabe des Sciences de l\'Espace et de l\'Astronomie, a organisé une conférence intitulée « L\'importance de l\'astronomie dans notre vie », présentée par la formatrice en astronomie Dalal Alala. La rencontre s\'est tenue sur la plateforme numérique de l\'Union Arabe, avec une présence en personne pour les membres de l\'association à la Cité des Sciences de Tunis. La conférence a mis en lumière cinq éléments de notre vie quotidienne directement liés à l\'astronomie : l\'horloge (basée sur la rotation de la Terre), le calendrier (basé sur le mouvement de la Terre et de la Lune), les saisons (résultant de l\'inclinaison de l\'axe terrestre et de son orbite autour du Soleil), la navigation (localisation par GPS) et l\'appareil photo du téléphone (qui bénéficie des technologies d\'imagerie développées par la recherche spatiale). Cet événement s\'inscrit dans une série de conférences au niveau arabe visant à diffuser la culture astronomique auprès des jeunes arabes.'
		}
	},
	{
		id: 'news-010',
		type: 'news',
		category: 'global',
		image: 'assets2/images/news/lifeless-earth-model.jpg',
		date: '2026-11-10',
		en: {
			title: 'Scientists Create a Lifeless Earth Model to Help Find Alien Life',
			subtitle: 'New computer simulation of a "dead" Earth could help astronomers identify biosignatures on exoplanets',
			body: 'Astronomers at the University of Washington in Seattle, led by Samantha Gilbert-Janizek, have developed a holistic computer model that simulates Earth\'s core, mantle, crust, surface, and atmosphere while intentionally ignoring the impact of life. With over 6,000 exoplanets discovered so far, astrobiologists are searching for atmospheres that could support liquid water and host life. Since life shapes its environment—such as Earth\'s plants and animals balancing oxygen and CO2 levels—these chemical indicators are known as "biosignatures." By creating a baseline of what a lifeless Earth\'s atmosphere should look like, scientists can compare it with observations of exoplanets. If an exoplanet\'s atmosphere matches the lifeless model, it likely has no life. If it differs significantly, it may be interacting with life. "This model can help us see how habitable but non-living planets might mimic living planets," says Gilbert-Janizek. "When we interpret observations of an exoplanet\'s atmosphere, this tool will help us determine the probability that what we observe indicates life on the surface."'
		},
		ar: {
			title: 'علماء يصممون نموذجاً رقمياً لأرض خالية من الحياة للمساعدة في البحث عن حياة فضائية',
			subtitle: 'محاكاة حاسوبية جديدة لـ"أرض ميتة" قد تساعد الفلكيين في تحديد البصمات الحيوية على الكواكب الخارجية',
			body: 'طوّر علماء فلك في جامعة واشنطن بمدينة سياتل، بقيادة سامانثا جيلبرت-جانيزيك، نموذجاً حاسوبياً شاملاً يحاكي نواة الأرض ووشاحها وقشرتها وسطحها وغلافها الجوي، مع تجاهل تأثير الحياة عمداً. ومع اكتشاف أكثر من 6000 كوكب خارجي حتى الآن، يبحث علماء الأحياء الفلكية عن أغلفة جوية يمكن أن تدعم وجود الماء السائل والحياة. وبما أن الحياة تشكّل بيئتها - كما توازن النباتات والحيوانات على الأرض مستويات الأكسجين وثاني أكسيد الكربون - تُعرف هذه المؤشرات الكيميائية بـ"البصمات الحيوية". ومن خلال إنشاء خط أساس لما يجب أن يبدو عليه الغلاف الجوي للأرض الخالية من الحياة، يمكن للعلماء مقارنته مع عمليات رصد الكواكب الخارجية. فإذا تطابق الغلاف الجوي لكوكب خارجي مع النموذج الخالي من الحياة، فمن المحتمل ألا توجد حياة عليه. أما إذا اختلف بشكل كبير، فقد يكون تفاعله مع حياة ما. وتقول جيلبرت-جانيزيك: "يمكن لهذا النموذج أن يساعدنا في رؤية كيف يمكن للكواكب الصالحة للسكنى ولكن غير الحية أن تحاكي الكواكب الحية. عندما نفسر عمليات رصد الغلاف الجوي لكوكب خارجي، ستساعدنا هذه الأداة في تحديد احتمالية أن ما نرصده يشير إلى وجود حياة على سطحه".'
		},
		fr: {
			title: 'Des scientifiques créent une Terre sans vie pour aider à trouver la vie extraterrestre',
			subtitle: 'Une nouvelle simulation informatique d\'une Terre "morte" pourrait aider les astronomes à identifier les biosignatures sur les exoplanètes',
			body: 'Des astronomes de l\'Université de Washington à Seattle, dirigés par Samantha Gilbert-Janizek, ont développé un modèle informatique holistique qui simule le noyau, le manteau, la croûte, la surface et l\'atmosphère de la Terre tout en ignorant intentionnellement l\'impact de la vie. Avec plus de 6 000 exoplanètes découvertes à ce jour, les astrobiologistes recherchent des atmosphères susceptibles d\'abriter de l\'eau liquide et de la vie. Puisque la vie façonne son environnement — comme les plantes et les animaux terrestres qui équilibrent les niveaux d\'oxygène et de CO2 — ces indicateurs chimiques sont appelés "biosignatures". En créant une base de référence de ce à quoi devrait ressembler l\'atmosphère d\'une Terre sans vie, les scientifiques peuvent la comparer aux observations des exoplanètes. Si l\'atmosphère d\'une exoplanète correspond au modèle sans vie, il est probable qu\'elle n\'abrite pas de vie. Si elle diffère considérablement, elle pourrait interagir avec la vie. « Ce modèle peut nous aider à voir comment des planètes habitables mais non vivantes pourraient imiter des planètes vivantes », explique Gilbert-Janizek. « Lorsque nous interprétons les observations de l\'atmosphère d\'une exoplanète, cet outil nous aidera à déterminer la probabilité que ce que nous observons indique la présence de vie à la surface. »'
		}
	},
    // Events (updated with Tunisian dates)
    {
		id: 'event-001',
		type: 'event',
		category: 'global',
		image: 'assets2/images/events/december-solstice.jpg',
		date: '2025-12-21',
		en: {
			title: '2025 December Solstice',
			subtitle: 'The sun reaches its southernmost point, marking the shortest day in the Northern Hemisphere',
			body: 'The 2025 December solstice occurs on December 21 at 15:03 UTC. This astronomical event marks the sun\'s southernmost point in the sky, bringing the shortest day and longest night in the Northern Hemisphere (winter solstice) and the longest day in the Southern Hemisphere (summer solstice). At Stonehenge, thousands gather to witness the sunrise alignment with the Heel Stone, celebrating the symbolic "rebirth of the sun."'
		},
		ar: {
			title: 'الانقلاب الشتوي ديسمبر 2025',
			subtitle: 'الشمس تصل إلى أقصى نقطة جنوبية، معلنةً أقصر يوم في نصف الكرة الشمالي',
			body: 'يحدث الانقلاب الشتوي ديسمبر 2025 في 21 ديسمبر الساعة 15:03 بالتوقيت العالمي. يحدد هذا الحدث الفلكي وصول الشمس إلى أقصى نقطة جنوبية في السماء، مما يجلب أقصر يوم وأطول ليلة في نصف الكرة الشمالي (الانقلاب الشتوي) وأطول يوم في نصف الكرة الجنوبي (الانقلاب الصيفي). في ستونهنج، يتجمع الآلاف لمشاهدة محاذاة شروق الشمس مع حجر الكعب، للاحتفال بـ"ولادة الشمس" الرمزية.'
		},
		fr: {
			title: 'Solstice de décembre 2025',
			subtitle: 'Le Soleil atteint son point le plus méridional, marquant le jour le plus court dans l\'hémisphère Nord',
			body: 'Le solstice de décembre 2025 se produit le 21 décembre à 15:03 UTC. Cet événement astronomique marque le point le plus méridional du Soleil dans le ciel, apportant le jour le plus court et la nuit la plus longue dans l\'hémisphère Nord (solstice d\'hiver) et le jour le plus long dans l\'hémisphère Sud (solstice d\'été). À Stonehenge, des milliers de personnes se rassemblent pour observer l\'alignement du lever du soleil avec la Heel Stone, célébrant la "renaissance symbolique du soleil".'
		}
	},
    {
		id: 'event-002',
		type: 'event',
		category: 'local',
		image: 'assets2/images/events/tunisia-winter-sky.jpg',
		date: '2025-12-27',
		en: {
			title: 'Astronomy Activities: Stargazing Evening to Explore the Wonders of the Winter Sky',
			subtitle: 'Astronomy evening at the City of Science in Tunis',
			body: 'The City of Science in Tunis is organizing a stargazing evening dedicated to exploring the wonders of the winter sky, on Saturday, December 27, 2025, starting at 6:00 PM at the Ibn Khaldun Hall, City of Science, Tunis. Program content: Lecture: "Wonders of the Winter Sky", Astronomical observation workshops: Deepen your knowledge of the most beautiful targets that can be observed and monitored during the winter season. Astronomy enthusiasts, through telescopes set up on site, will be able to observe and monitor: The Moon, Saturn and its moons, Jupiter, the Orion Nebula. It is an astronomical evening that combines science and is open to all lovers of the beauty of the dark sky and the magic of the universe! Admission is free and open to all.'
		},
		ar: {
			title: 'أنشطة في علم الفلك: سهرة فلكية لاستكشاف عجائب سماء الشتاء',
			subtitle: 'سهرة فلكية في مدينة العلوم بتونس',
			body: 'تنظّم مدينة العلوم سهرة فلكيّة مخصّصة لاستكشاف عجائب سماء الشتاء، وذلك يوم السبت 27 ديسمبر 2025، ابتداءً من الساعة السادسة مساءً بقاعة ابن خلدون، مدينة العلوم بتونس. محتوى البرنامج: محاضرة: "عجائب السماء الشتويّة"، ورشات الرصد الفلكي: تجعلك تعمّق في أجمل الأهداف التي يمكن رصدها ومراقبتها خلال موسم الشتاء. سيتمكن هواة علم الفلك، عبر التلسكوبات المثبتة في الموقع، من رصد ومراقبة: القمر، كوكب زحل وأقماره، كوكب المشتري، سديم الجبار (سديم أوريون الرائع). هي سهرة فلكيّة تجمع بين العلم مفتوحة لجميع عشاق جمال ظلمة السماء وسحر الكون! الدخول حرّ ومجّاني.'
		},
		fr: {
			title: 'Activités d\'astronomie : Soirée d\'observation des étoiles pour explorer les merveilles du ciel d\'hiver',
			subtitle: 'Soirée d\'astronomie à la Cité des Sciences de Tunis',
			body: 'La Cité des Sciences de Tunis organise une soirée d\'observation des étoiles dédiée à l\'exploration des merveilles du ciel d\'hiver, le samedi 27 décembre 2025, à partir de 18h00 à la salle Ibn Khaldoun, Cité des Sciences, Tunis. Contenu du programme : Conférence : "Les merveilles du ciel d\'hiver", Ateliers d\'observation astronomique : Vous approfondirez les plus beaux objets à observer et suivre pendant la saison hivernale. Les passionnés d\'astronomie, à travers les télescopes installés sur place, pourront observer et surveiller : La Lune, Saturne et ses lunes, Jupiter, la nébuleuse d\'Orion. C\'est une soirée astronomique qui allie science et est ouverte à tous les amoureux de la beauté du ciel nocturne et de la magie de l\'univers ! L\'entrée est libre et gratuite pour tous.'
		}
	},
    {
		id: 'event-003',
		type: 'event',
		category: 'global',
		image: 'assets2/images/events/ursid-meteor.jpg',
		date: '2025-12-22',
		en: {
			title: 'Ursid Meteor Shower Peak',
			subtitle: 'Annual meteor shower from Comet 8P/Tuttle',
			body: 'The Ursid meteor shower peaks on December 22, 2025. Active from December 13-26, the Ursids produce about 5 meteors per hour under dark skies. This year, the new moon on December 20 will provide ideal viewing conditions.'
		},
		ar: {
			title: 'ذروة زخة شهب الدببة',
			subtitle: 'زخة شهب سنوية من المذنب 8P/Tuttle',
			body: 'تصل زخة شهب الدببة إلى ذروتها في 22 ديسمبر 2025. نشطة من 13 إلى 26 ديسمبر، تنتج شهب الدببة حوالي 5 شهب في الساعة تحت سماء مظلمة. هذا العام، سيقدم القمر الجديد في 20 ديسمبر ظروف مشاهدة مثالية.'
		},
		fr: {
			title: 'Pic de la pluie de météores des Ursides',
			subtitle: 'Pluie de météores annuelle de la comète 8P/Tuttle',
			body: 'La pluie de météores des Ursides atteint son pic le 22 décembre 2025. Active du 13 au 26 décembre, les Ursides produisent environ 5 météores par heure sous un ciel sombre. Cette année, la nouvelle lune du 20 décembre offrira des conditions d\'observation idéales.'
		}
	},
    {
		id: 'event-004',
		type: 'event',
		category: 'global',
		image: 'assets2/images/events/orionids-2026.jpg',
		date: '2026-10-21',
		en: {
			title: 'Orionid Meteor Shower Peak',
			subtitle: 'Fast, bright meteors from Halley\'s Comet light up the pre-dawn sky',
			body: 'The Orionid meteor shower reaches its peak on the night of October 21–22, 2026, as Earth passes through a stream of dust and debris left behind by Halley\'s Comet. Under ideal dark skies, observers can expect around 20 meteors per hour at peak activity, with the American Meteor Society noting that many are bright and leave persistent glowing trails lasting several seconds. The radiant lies in the constellation Orion, near its border with Gemini and close to the star Alhena (Gamma Geminorum), which rises around 10 PM and culminates before dawn. Because Halley\'s Comet orbits the Sun in the opposite direction to the major planets, its dust particles collide with Earth almost head-on at roughly 67 km/s, producing especially fast and energetic flashes. This year the Moon will be 70–80% illuminated and will brighten the sky during the first half of the night, so the best viewing window is in the hours before dawn, once the Moon has set and the radiant is highest. No telescope or binoculars are needed — just a clear sky away from city lights, and about 20–30 minutes for your eyes to adapt to the darkness. The Orionids are visible from both hemispheres and serve as an annual reminder of the famous comet, which is now slowly returning toward the Sun after its 2023 aphelion and will next reach perihelion in 2061.'
		},
		ar: {
			title: 'ذروة زخة شهب الجبار (أوريونيدس)',
			subtitle: 'شهب سريعة وساطعة من مذنب هالي تضيء سماء ما قبل الفجر',
			body: 'تصل زخة شهب الجبار إلى ذروتها في ليلة 21-22 أكتوبر 2026، عندما تعبر الأرض عبر سحابة من الغبار والحطام خلّفها مذنب هالي. وفي سماء مظلمة مثالية، يمكن للمراقبين توقع نحو 20 شهاباً في الساعة عند ذروة النشاط، وتشير الجمعية الأمريكية للشهب إلى أن كثيراً منها ساطع ويخلّف آثاراً مضيئة تدوم عدة ثوانٍ. تقع نقطة الإشعاع في كوكبة الجبار قرب حدودها مع كوكبة التوأمان وبالقرب من النجم الهنعة (غاما التوأمان)، الذي يشرق نحو الساعة العاشرة مساءً ويبلغ أعلى نقطة قبل الفجر. ولأن مذنب هالي يدور حول الشمس في اتجاه معاكس لدوران الكواكب الكبرى، فإن جزيئات غباره تصطدم بالأرض شبه وجهاً لوجه بسرعة تقارب 67 كيلومتراً في الثانية، مما ينتج ومضات سريعة وعالية الطاقة. هذا العام سيكون القمر مضيئاً بنسبة 70-80% وسيزيد من سطوع السماء خلال النصف الأول من الليل، لذا فإن أفضل نافذة للمراقبة هي الساعات التي تسبق الفجر بعد غروب القمر وعندما تكون نقطة الإشعاع في أعلى موضع لها. لا حاجة إلى تلسكوب أو منظار، بل إلى سماء صافية بعيداً عن أضواء المدن ونحو 20-30 دقيقة لتتكيف العين مع الظلام. وتُرى شهب الجبار من نصفي الكرة الأرضية، وتشكّل تذكيراً سنوياً بالمذنب الشهير الذي يعود الآن ببطء نحو الشمس بعد حضيضه الأوجي عام 2023 وسيبلغ الحضيض الشمسي مجدداً عام 2061.'
		},
		fr: {
			title: 'Pic de la pluie de météores des Orionides',
			subtitle: 'Des météores rapides et brillants issus de la comète de Halley illuminent le ciel avant l\'aube',
			body: 'La pluie de météores des Orionides atteint son pic dans la nuit du 21 au 22 octobre 2026, lorsque la Terre traverse un flux de poussière et de débris laissés par la comète de Halley. Sous un ciel sombre idéal, les observateurs peuvent s\'attendre à environ 20 météores par heure au maximum d\'activité, l\'American Meteor Society précisant que beaucoup sont brillants et laissent des traînées lumineuses persistantes durant plusieurs secondes. Le radiant se situe dans la constellation d\'Orion, près de sa frontière avec les Gémeaux et de l\'étoile Alhena (Gamma Geminorum), qui se lève vers 22 heures et culmine avant l\'aube. Parce que la comète de Halley orbite autour du Soleil dans le sens opposé à celui des planètes majeures, ses particules de poussière heurtent la Terre presque de front à environ 67 km/s, produisant des éclats particulièrement rapides et énergétiques. Cette année, la Lune sera éclairée à 70-80 % et éclaircira le ciel durant la première partie de la nuit ; la meilleure fenêtre d\'observation se situe donc dans les heures précédant l\'aube, une fois la Lune couchée et le radiant au plus haut. Aucun télescope ni jumelles ne sont nécessaires : il suffit d\'un ciel dégagé loin des lumières urbaines et de 20 à 30 minutes pour que les yeux s\'adaptent à l\'obscurité. Les Orionides sont visibles depuis les deux hémisphères et rappellent chaque année la célèbre comète, qui revient lentement vers le Soleil après son aphélie de 2023 et repassera son périhélie en 2061.'
		}
	},
    {
		id: 'event-005',
		type: 'event',
		category: 'global',
		image: 'assets2/images/events/mmx-launch.jpg',
		date: '2026-10-20',
		en: {
			title: 'JAXA Launches MMX Mission to Mars\' Moons',
			subtitle: 'Japan\'s Martian Moons eXploration spacecraft begins its journey to Phobos and Deimos',
			body: 'The Japan Aerospace Exploration Agency (JAXA) successfully launched the Martian Moons eXploration (MMX) spacecraft aboard H3 Launch Vehicle Flight No. 10 at 04:41:03 JST on October 20, 2026, from the Tanegashima Space Center. The H3 rocket flew as planned, and approximately 71 minutes and 13 seconds after liftoff, separation of the MMX spacecraft was confirmed and the probe was injected into its predetermined orbit. MMX is Japan\'s flagship sample-return mission to the Martian system, designed to study the two small moons Phobos and Deimos and to clarify their origin — whether they are captured asteroids or remnants of a giant impact with Mars. The spacecraft will conduct close observations of both moons, deploy a small rover onto Phobos, and collect surface samples before returning them to Earth, making it the first mission to bring back material from the Martian system. The launch marks a major milestone for planetary science and for JAXA\'s deep-space exploration program, and the mission is expected to yield insights into the formation and evolution of terrestrial planets and the delivery of water and organic material to the inner Solar System.'
		},
		ar: {
			title: 'اليابان تطلق مهمة MMX إلى أقمار المريخ',
			subtitle: 'مركبة استكشاف أقمار المريخ اليابانية تبدأ رحلتها إلى فوبوس وديموس',
			body: 'أطلقت وكالة استكشاف الفضاء اليابانية (JAXA) بنجاح مركبة استكشاف أقمار المريخ (MMX) على متن صاروخ H3 في رحلته العاشرة عند الساعة 04:41:03 بتوقيت اليابان في 20 أكتوبر 2026 من مركز تانيغاشيما الفضائي. وعمل صاروخ H3 كما هو مخطط، وبعد نحو 71 دقيقة و13 ثانية من الإطلاق تأكد انفصال مركبة MMX وتم إدخالها في مدارها المحدد مسبقاً. وتُعد MMX مهمة اليابان الرائدة لإعادة العينات من نظام المريخ، وهي مصممة لدراسة القمرين الصغيرين فوبوس وديموس وتوضيح أصلهما: هل هما كويكبان تم أسرهما أم بقايا اصطدام هائل بالمريخ. وستجري المركبة عمليات رصد قريبة للقمرين، وستنزل مسباراً صغيراً على سطح فوبوس، وستجمع عينات من السطح قبل إعادتها إلى الأرض، لتكون أول مهمة تعيد مواد من نظام المريخ. ويشكّل الإطلاق علامة فارقة في علوم الكواكب وفي برنامج الاستكشاف الياباني للفضاء السحيق، ويُتوقع أن تقدّم المهمة رؤى حول تشكّل الكواكب الصخرية وتطورها ونقل المياه والمواد العضوية إلى النظام الشمسي الداخلي.'
		},
		fr: {
			title: 'Le Japon lance la mission MMX vers les lunes de Mars',
			subtitle: 'La sonde Martian Moons eXploration entame son voyage vers Phobos et Déimos',
			body: 'L\'Agence japonaise d\'exploration aérospatiale (JAXA) a lancé avec succès la sonde Martian Moons eXploration (MMX) à bord du lanceur H3 lors du vol n° 10, le 20 octobre 2026 à 04h41:03 JST, depuis le centre spatial de Tanegashima. La fusée H3 s\'est comportée comme prévu et, environ 71 minutes et 13 secondes après le décollage, la séparation de la sonde MMX a été confirmée et celle-ci a été injectée sur son orbite prédéterminée. MMX est la mission phare de retour d\'échantillons du Japon vers le système martien, conçue pour étudier les deux petites lunes Phobos et Déimos et clarifier leur origine — astéroïdes capturés ou vestiges d\'un impact géant avec Mars. La sonde effectuera des observations rapprochées des deux lunes, déposera un petit rover sur Phobos et collectera des échantillons de surface avant de les rapporter sur Terre, ce qui en fera la première mission à rapporter de la matière du système martien. Le lancement marque une étape majeure pour les sciences planétaires et pour le programme japonais d\'exploration de l\'espace lointain, et la mission devrait apporter des éclairages sur la formation et l\'évolution des planètes telluriques ainsi que sur l\'apport d\'eau et de matière organique au Système solaire interne.'
		}
	},
    {
		id: 'event-006',
		type: 'event',
		category: 'global',
		image: 'assets2/images/events/world-space-week-2026.jpg',
		date: '2026-10-04',
		en: {
			title: 'World Space Week 2026',
			subtitle: 'Global celebration of space science and technology under the theme "Rocket Revolution"',
			body: 'World Space Week 2026 runs from Sunday, October 4, to Saturday, October 10, celebrating international achievements in space science and technology. Started in 1999 by the United Nations, the annual weeklong event is coordinated by the non-profit World Space Week Association and features thousands of space-related STEM events hosted by governments, space agencies, universities, schools, and aerospace companies around the world. This year\'s theme, "Rocket Revolution," highlights the dramatic surge in rocket launches and the widening access to space. The 2026 edition comes at a particularly remarkable moment: humans ventured toward the Moon for the first time in half a century with the Artemis mission, and SpaceX\'s Starship reached orbit for the first time after three years of testing. In 2025, some 50,000 events were hosted across 102 countries, and organizers expect another record-breaking year. Activities range from public stargazing nights, planetarium shows, and school competitions to rocket-model workshops, industry conferences, and live launch viewings. World Space Week remains the largest public space event on Earth, designed to inspire the next generation of scientists and engineers and to demonstrate the practical benefits of space technology to society.'
		},
		ar: {
			title: 'الأسبوع العالمي للفضاء 2026',
			subtitle: 'احتفال عالمي بعلوم وتقنيات الفضاء تحت شعار "ثورة الصواريخ"',
			body: 'يُقام الأسبوع العالمي للفضاء 2026 من الأحد 4 أكتوبر إلى السبت 10 أكتوبر، احتفاءً بالإنجازات الدولية في علوم وتقنيات الفضاء. وقد أطلقته الأمم المتحدة عام 1999، وينسّقه الاتحاد غير الربحي للأسبوع العالمي للفضاء، ويتضمّن آلاف الفعاليات العلمية والتقنية المتعلقة بالفضاء تنظمها الحكومات ووكالات الفضاء والجامعات والمدارس وشركات الطيران والفضاء حول العالم. ويُسلّط شعار هذا العام "ثورة الصواريخ" الضوء على الزيادة الهائلة في عمليات إطلاق الصواريخ وتوسّع الوصول إلى الفضاء. وتأتي نسخة 2026 في لحظة استثنائية: فقد اتجه البشر نحو القمر لأول مرة منذ نصف قرن ضمن مهمة أرتميس، ووصل صاروخ ستارشيب التابع لسبيس إكس إلى المدار لأول مرة بعد ثلاث سنوات من الاختبارات. وفي 2025 استُضيف نحو 50,000 فعالية في 102 دولة، ويتوقع المنظمون عاماً قياسياً آخر. وتتنوع الأنشطة بين ليالي الرصد الفلكي العام وعروض القباب الفلكية والمسابقات المدرسية وورش نماذج الصواريخ والمؤتمرات الصناعية ومتابعة عمليات الإطلاق المباشرة. ويبقى الأسبوع العالمي للفضاء أكبر حدث فضائي عام على وجه الأرض، ويهدف إلى إلهام الجيل القادم من العلماء والمهندسين وإبراز الفوائد العملية لتقنيات الفضاء للمجتمع.'
		},
		fr: {
			title: 'Semaine Mondiale de l\'Espace 2026',
			subtitle: 'Célébration mondiale des sciences et technologies spatiales sous le thème de la « révolution des fusées »',
			body: 'La Semaine Mondiale de l\'Espace 2026 se déroule du dimanche 4 octobre au samedi 10 octobre, célébrant les réalisations internationales en sciences et technologies spatiales. Lancé en 1999 par les Nations Unies, cet événement annuel d\'une semaine est coordonné par l\'association à but non lucratif World Space Week Association et comprend des milliers d\'événements STEM liés à l\'espace organisés par des gouvernements, des agences spatiales, des universités, des écoles et des entreprises aérospatiales du monde entier. Le thème de cette année, « Révolution des fusées », met en lumière la forte augmentation des lancements de fusées et l\'élargissement de l\'accès à l\'espace. L\'édition 2026 intervient à un moment particulièrement remarquable : l\'humanité s\'est dirigée vers la Lune pour la première fois en un demi-siècle avec la mission Artemis, et le Starship de SpaceX a atteint l\'orbite pour la première fois après trois ans d\'essais. En 2025, quelque 50 000 événements ont été organisés dans 102 pays, et les organisateurs s\'attendent à une nouvelle année record. Les activités vont des soirées d\'observation publiques aux spectacles de planétarium, concours scolaires, ateliers de modèles réduits de fusées, conférences industrielles et retransmissions de lancements en direct. La Semaine Mondiale de l\'Espace reste le plus grand événement spatial public au monde, conçu pour inspirer la prochaine génération de scientifiques et d\'ingénieurs et pour démontrer les bénéfices concrets des technologies spatiales pour la société.'
		}
	},
    {
		id: 'event-007',
		type: 'event',
		category: 'local',
		image: 'assets2/images/events/icass-tunis-2026.jpg',
		date: '2026-10-25',
		en: {
			title: 'International Conference on Astronomy and Space Sciences (ICASS 2026) in Tunis',
			subtitle: 'Researchers and engineers gather in the Tunisian capital to discuss spacecraft, satellites, and space exploration',
			body: 'The International Conference on Astronomy and Space Sciences (ICASS 2026) will be held in Tunis, Tunisia, on October 25–26, 2026. Organized by the World Academy of Science, Engineering and Technology (WASET), the conference brings together researchers, academics, and industry professionals from around the world to present and discuss the latest advances in astronomy and space sciences. The scientific program covers a broad range of topics, including spacecraft and instrument design, satellite systems, rocket propulsion and solid rocket propulsion, cryogenic engineering, thermal management, aeromechanics, computational fluid dynamics, plasma physics, adaptive and nonlinear control, unmanned aerial vehicles, and space exploration technologies. ICASS is part of WASET\'s international conference series, which is held in multiple cities each year, and the Tunis edition offers a regional platform for North African and international scientists to exchange ideas, build partnerships, and showcase research. The event includes keynote lectures, technical paper sessions, and networking opportunities, and is open to researchers, engineers, students, and representatives of space agencies and aerospace companies. For Tunisia, hosting the conference reinforces the country\'s growing role in astronomy and space science education and its connections to the global research community.'
		},
		ar: {
			title: 'المؤتمر الدولي لعلم الفلك وعلوم الفضاء (ICASS 2026) بتونس',
			subtitle: 'باحثون ومهندسون يجتمعون في العاصمة التونسية لمناقشة المركبات الفضائية والأقمار الصناعية واستكشاف الفضاء',
			body: 'يُعقد المؤتمر الدولي لعلم الفلك وعلوم الفضاء (ICASS 2026) في تونس العاصمة يومي 25 و26 أكتوبر 2026. وينظّمه الاتحاد العالمي للعلوم والهندسة والتكنولوجيا (WASET)، ويجمع باحثين وأكاديميين ومهنيين من القطاع الصناعي من مختلف أنحاء العالم لعرض ومناقشة أحدث التطورات في علم الفلك وعلوم الفضاء. ويغطي البرنامج العلمي طيفاً واسعاً من الموضوعات، منها تصميم المركبات الفضائية والأجهزة العلمية، وأنظمة الأقمار الصناعية، ودفع الصواريخ والدفع الصلب، والهندسة المبرّدة، والإدارة الحرارية، وميكانيكا الطيران، وديناميكا الموائع الحسابية، وفيزياء البلازما، والتحكم التكيفي وغير الخطي، والطائرات دون طيار، وتقنيات استكشاف الفضاء. ويُعد ICASS جزءاً من سلسلة المؤتمرات الدولية التي ينظمها WASET في عدة مدن سنوياً، وتمثّل نسخة تونس منصة إقليمية للعلماء من شمال أفريقيا والعالم لتبادل الأفكار وبناء الشراكات وعرض الأبحاث. ويتضمن الحدث محاضرات رئيسية وجلسات أوراق تقنية وفرصاً للتواصل، وهو مفتوح للباحثين والمهندسين والطلبة وممثلي وكالات الفضاء وشركات الطيران والفضاء. ويُعزّز استضافة تونس للمؤتمر دور البلاد المتنامي في تعليم علم الفلك وعلوم الفضاء وصلاتها بالمجتمع البحثي العالمي.'
		},
		fr: {
			title: 'Conférence Internationale d\'Astronomie et des Sciences Spatiales (ICASS 2026) à Tunis',
			subtitle: 'Chercheurs et ingénieurs réunis dans la capitale tunisienne pour discuter des vaisseaux spatiaux, satellites et de l\'exploration spatiale',
			body: 'La Conférence Internationale d\'Astronomie et des Sciences Spatiales (ICASS 2026) se tiendra à Tunis, en Tunisie, les 25 et 26 octobre 2026. Organisée par la World Academy of Science, Engineering and Technology (WASET), elle réunit des chercheurs, universitaires et professionnels de l\'industrie du monde entier pour présenter et discuter des dernières avancées en astronomie et en sciences spatiales. Le programme scientifique couvre un large éventail de sujets, notamment la conception de vaisseaux spatiaux et d\'instruments, les systèmes satellitaires, la propulsion de fusées et la propulsion à propergol solide, l\'ingénierie cryogénique, la gestion thermique, l\'aéromécanique, la dynamique des fluides numérique, la physique des plasmas, le contrôle adaptatif et non linéaire, les véhicules aériens sans pilote et les technologies d\'exploration spatiale. L\'ICASS fait partie de la série de conférences internationales de la WASET, organisée chaque année dans plusieurs villes, et l\'édition de Tunis offre une plateforme régionale aux scientifiques d\'Afrique du Nord et du monde entier pour échanger des idées, nouer des partenariats et présenter leurs recherches. L\'événement comprend des conférences plénières, des sessions techniques et des opportunités de réseautage, et est ouvert aux chercheurs, ingénieurs, étudiants et représentants d\'agences spatiales et d\'entreprises aérospatiales. Pour la Tunisie, accueillir cette conférence renforce le rôle croissant du pays dans l\'enseignement de l\'astronomie et des sciences spatiales ainsi que ses liens avec la communauté scientifique mondiale.'
		}
	},
    {
		id: 'event-008',
		type: 'event',
		category: 'local',
		image: 'assets2/images/events/nuit-des-idees-sfax-2026.jpg',
		date: '2026-10-05',
		en: {
			title: '“La Nuit des Idées” in Sfax: Conference on Space Exploration',
			subtitle: 'A public lecture explores the human curiosity, the universe, and physics behind space exploration',
			body: 'As part of the 2026 edition of “La Nuit des Idées,” held across Tunis, Sousse, and Sfax on Monday, October 5, 2026, the Maison de France in Sfax hosted a conference titled “Space Exploration: Between Human Curiosity, the Universe, and Physics” at 6:00 PM. The talk was delivered by Amine Guesmi, vice president of the Tunisian Association of Astronomy, and examined the scientific, philosophical, and human dimensions of our drive to explore space. The event was organised by the Institut Français de Tunisie (IFT) under the overarching theme “Opening the Way,” and formed part of a nationwide programme of debates, lectures, and cultural events. While the Sfax session focused specifically on space, the broader Nuit des Idées programme also featured discussions on quantum technology in Sousse and youth engagement with science and innovation in Tunis. The conference offered the Tunisian public a free and accessible opportunity to engage with contemporary space science and to connect local astronomy enthusiasm with global conversations about exploration.'
		},
		ar: {
			title: '«ليلة الأفكار» بصفاقس: محاضرة حول استكشاف الفضاء',
			subtitle: 'محاضرة عامة تستكشف الفضول البشري والكون والفيزياء وراء استكشاف الفضاء',
			body: 'في إطار نسخة 2026 من «ليلة الأفكار»، التي أُقيمت في تونس وسوسة وصفاقس يوم الاثنين 5 أكتوبر 2026، استضافت دار فرنسا بصفاقس محاضرة بعنوان «استكشاف الفضاء: بين الفضول البشري والكون والفيزياء» عند الساعة السادسة مساءً. قدّمها أمين قاسمي، نائب رئيس الجمعية التونسية لعلم الفلك، وتناولت الأبعاد العلمية والفلسفية والإنسانية لدافعنا نحو استكشاف الفضاء. نظّم الحدث المعهد الفرنسي بتونس تحت شعار «فتح الطريق»، وكان جزءاً من برنامج وطني من النقاشات والمحاضرات والفعاليات الثقافية. وبينما ركّزت جلسة صفاقس على الفضاء تحديداً، تضمّن برنامج ليلة الأفكار الأوسع نقاشات حول تكنولوجيا الكم في سوسة ومشاركة الشباب في العلوم والابتكار في تونس. أتاحت المحاضرة للجمهور التونسي فرصة مجانية وسهلة للتفاعل مع علوم الفضاء المعاصرة وربط الحماس الفلكي المحلي بالنقاشات العالمية حول الاستكشاف.'
		},
		fr: {
			title: '« La Nuit des Idées » à Sfax : conférence sur l\'exploration spatiale',
			subtitle: 'Une conférence publique explore la curiosité humaine, l\'univers et la physique derrière l\'exploration spatiale',
			body: 'Dans le cadre de l\'édition 2026 de « La Nuit des Idées », organisée à Tunis, Sousse et Sfax le lundi 5 octobre 2026, la Maison de France à Sfax a accueilli à 18h00 une conférence intitulée « L\'exploration spatiale : entre la curiosité humaine, l\'univers et la physique ». Présentée par Amine Guesmi, vice-président de l\'Association Tunisienne d\'Astronomie, elle a examiné les dimensions scientifiques, philosophiques et humaines de notre désir d\'explorer l\'espace. L\'événement était organisé par l\'Institut Français de Tunisie (IFT) sous le thème général « Ouvrir la voie », et s\'inscrivait dans un programme national de débats, de conférences et d\'événements culturels. Si la session de Sfax portait spécifiquement sur l\'espace, le programme plus large de la Nuit des Idées comprenait également des discussions sur la technologie quantique à Sousse et sur l\'engagement des jeunes dans la science et l\'innovation à Tunis. La conférence a offert au public tunisien une opportunité gratuite et accessible de s\'engager dans la science spatiale contemporaine et de relier l\'enthousiasme astronomique local aux conversations mondiales sur l\'exploration.'
		}
	},
    {
		id: 'event-009',
		type: 'event',
		category: 'global',
		image: 'assets2/images/events/taurids-2026.jpg',
		date: '2026-11-04',
		en: {
			title: 'Southern Taurids Meteor Shower Peak',
			subtitle: 'Slow, vivid fireballs from Comet 2P/Encke light up the November sky',
			body: 'The Southern Taurids meteor shower peaks overnight on November 4–5, 2026. This mild shower produces about five meteors per hour but is known for its slow, vivid fireballs. This year, the Moon is only about 22% illuminated during the peak, providing generally favourable viewing conditions and reducing light interference. The radiant lies in the constellation Taurus, which is highest after midnight. The Taurids are debris from Comet 2P/Encke and are active from September through December. No telescope is required — just a dark sky and patience.'
		},
		ar: {
			title: 'ذروة زخة شهب الثور الجنوبية',
			subtitle: 'كرات نارية بطيئة وساطعة من المذنب 2P/إنكه تضيء سماء نوفمبر',
			body: 'تبلغ شهب الثور الجنوبية ذروتها ليلة 4-5 نوفمبر 2026. هذه الزخة المعتدلة تنتج نحو خمس شهب في الساعة لكنها تشتهر بكراتها النارية البطيئة والساطعة. هذا العام يكون القمر مضيئاً بنحو 22% فقط خلال الذروة، مما يوفر ظروف رصد مواتية عموماً ويقلل من التداخل الضوئي. تقع نقطة الإشعاع في كوكبة الثور التي تبلغ أعلى نقطة بعد منتصف الليل. وشهب الثور هي حطام المذنب 2P/إنكه وتنشط من سبتمبر إلى ديسمبر. لا حاجة إلى تلسكوب، بل إلى سماء مظلمة وصبر.'
		},
		fr: {
			title: 'Pic de la pluie de météores des Taurides du Sud',
			subtitle: 'Des bolides lents et brillants issus de la comète 2P/Encke illuminent le ciel de novembre',
			body: 'La pluie de météores des Taurides du Sud culmine dans la nuit du 4 au 5 novembre 2026. Cette pluie modérée produit environ cinq météores par heure mais est connue pour ses bolides lents et brillants. Cette année, la Lune n\'est éclairée qu\'à environ 22 % au moment du pic, offrant des conditions d\'observation généralement favorables et réduisant les interférences lumineuses. Le radiant se situe dans la constellation du Taureau, au plus haut après minuit. Les Taurides proviennent de la comète 2P/Encke et sont actives de septembre à décembre. Aucun télescope n\'est nécessaire : un ciel sombre et de la patience suffisent.'
		}
	},
    {
		id: 'event-010',
		type: 'event',
		category: 'global',
		image: 'assets2/images/events/leonids-2026.jpg',
		date: '2026-11-17',
		en: {
			title: 'Leonid Meteor Shower Peak',
			subtitle: 'Fast meteors from Comet Tempel-Tuttle peak overnight on November 17–18',
			body: 'The Leonid meteor shower peaks overnight on November 17–18, 2026, producing up to about 15 meteors per hour under dark skies. The shower is active from about November 6 to 30 and is famous for its fast, bright meteors, which strike the atmosphere at around 71 km/s and often leave persistent glowing trails. The radiant lies in the constellation Leo, near the “Sickle” asterism, and rises around midnight, so the best viewing window is after midnight and before dawn. In 2026 the peak occurs around 23:45 GMT on November 17, with the Moon about 55% illuminated — a first-quarter Moon that will wash out some of the fainter meteors but still allow brighter ones to stand out. Viewing is best from a dark location away from city lights, with no equipment needed beyond warm clothing and about 20–30 minutes for your eyes to adapt. The Leonids are debris from Comet 55P/Tempel-Tuttle, which returns to the inner Solar System every 33 years; the shower is usually modest, but historically it has produced spectacular meteor storms.'
		},
		ar: {
			title: 'ذروة زخة شهب الأسديات (ليونيدس)',
			subtitle: 'شهب سريعة من المذنب تمبل-تاتل تبلغ ذروتها ليلة 17-18 نوفمبر',
			body: 'تبلغ زخة شهب الأسديات ذروتها ليلة 17-18 نوفمبر 2026، لتنتج نحو 15 شهاباً في الساعة تحت سماء مظلمة. وتنشط الزخة من حوالي 6 إلى 30 نوفمبر وتشتهر بشهبها السريعة والساطعة التي تضرب الغلاف الجوي بسرعة تقارب 71 كيلومتراً في الثانية وغالباً ما تخلّف آثاراً مضيئة تدوم. تقع نقطة الإشعاع في كوكبة الأسد قرب تجمّع "المنجل"، وتشرق نحو منتصف الليل، لذا فإن أفضل نافذة للمراقبة هي بعد منتصف الليل وقبل الفجر. في 2026 تحدث الذروة نحو الساعة 23:45 بتوقيت غرينتش في 17 نوفمبر، ويكون القمر مضيئاً بنحو 55% — قمر التربيع الأول الذي سيحجب بعض الشهب الخافتة لكنه سيسمح للشهب الأكثر سطوعاً بالظهور. يُفضّل الرصد من موقع مظلم بعيد عن أضواء المدن، دون حاجة إلى معدات سوى ملابس دافئة ونحو 20-30 دقيقة لتتكيف العين. وشهب الأسديات هي حطام المذنب 55P/تمبل-تاتل الذي يعود إلى النظام الشمسي الداخلي كل 33 سنة؛ والزخة عادةً متواضعة لكنها أنتجت تاريخياً عواصف شهب مذهلة.'
		},
		fr: {
			title: 'Pic de la pluie de météores des Léonides',
			subtitle: 'Des météores rapides issus de la comète Tempel-Tuttle culminent dans la nuit du 17 au 18 novembre',
			body: 'La pluie de météores des Léonides culmine dans la nuit du 17 au 18 novembre 2026, produisant jusqu\'à environ 15 météores par heure sous un ciel sombre. La pluie est active du 6 au 30 novembre environ et est célèbre pour ses météores rapides et brillants, qui frappent l\'atmosphère à environ 71 km/s et laissent souvent des traînées lumineuses persistantes. Le radiant se situe dans la constellation du Lion, près de l\'astérisme de la « Faucille », et se lève vers minuit ; la meilleure fenêtre d\'observation se situe donc après minuit et avant l\'aube. En 2026, le pic se produit vers 23h45 GMT le 17 novembre, avec la Lune éclairée à environ 55 % — un premier quartier qui effacera certains météores faibles mais laissera ressortir les plus brillants. L\'observation est meilleure depuis un site sombre loin des lumières urbaines, sans autre équipement que des vêtements chauds et 20 à 30 minutes pour adapter les yeux. Les Léonides proviennent de la comète 55P/Tempel-Tuttle, qui revient dans le Système solaire interne tous les 33 ans ; la pluie est généralement modeste, mais elle a historiquement produit de spectaculaires tempêtes de météores.'
		}
	},
    {
		id: 'event-011',
		type: 'event',
		category: 'global',
		image: 'assets2/images/events/beaver-supermoon-2026.jpg',
		date: '2026-11-24',
		en: {
			title: 'Beaver Supermoon: First Supermoon Since January',
			subtitle: 'The full Moon of November 24 appears up to 30% brighter and 14% larger at perigee',
			body: 'The full Beaver Moon on November 24, 2026, is the first supermoon since January 2026 and the second of three supermoons in the year. Peak illumination occurs at 14:53 UTC (9:53 a.m. EST), when the lunar disk sits opposite the Sun and is fully lit. Because the Moon reaches perigee — its closest point to Earth in its orbit — around the same time, it appears up to about 30% brighter and 14% larger than a typical full Moon. The Moon rises in the northeast before sunset on November 24 and sets in the southwest before sunrise, so it will be visible for most of the night. The name “Beaver Moon” comes from traditional North American naming, associated with beavers building their winter dams. No special equipment is needed to enjoy the supermoon, though binoculars or a small telescope will reveal lunar craters and maria in detail. The event is visible worldwide, weather permitting, and is one of the most accessible astronomical sights of the month.'
		},
		ar: {
			title: 'قمر القندس العملاق: أول قمر عملاق منذ جانفي',
			subtitle: 'بدر 24 نوفمبر يبدو أكثر سطوعاً بنسبة تصل إلى 30% وأكبر بنسبة 14% عند الحضيض',
			body: 'بدر "قمر القندس" في 24 نوفمبر 2026 هو أول قمر عملاق منذ جانفي 2026 والثاني من ثلاثة أقمار عملاقة في العام. تحدث ذروة الإضاءة عند الساعة 14:53 بالتوقيت العالمي (9:53 صباحاً بتوقيت شرق الولايات المتحدة)، عندما يكون القرص القمري مقابل الشمس ومضيئاً بالكامل. ولأن القمر يصل إلى الحضيض — أقرب نقطة إلى الأرض في مداره — في التوقيت نفسه تقريباً، فإنه يبدو أكثر سطوعاً بنحو 30% وأكبر بنحو 14% من البدر العادي. يشرق القمر في الشمال الشرقي قبل غروب الشمس في 24 نوفمبر ويغرب في الجنوب الغربي قبل شروق الشمس، لذا سيكون مرئياً معظم الليل. ويعود اسم "قمر القندس" إلى التسمية التقليدية في أمريكا الشمالية المرتبطة ببناء القنادس لسدودها الشتوية. لا حاجة إلى معدات خاصة للاستمتاع بالقمر العملاق، لكن المنظار أو التلسكوب الصغير سيكشف تفاصيل الفوهات والبحار القمرية. ويُرى الحدث في جميع أنحاء العالم إذا سمح الطقس، وهو من أسهل المشاهد الفلكية لهذا الشهر.'
		},
		fr: {
			title: 'Superlune du Castor : première superlune depuis janvier',
			subtitle: 'La pleine Lune du 24 novembre apparaît jusqu\'à 30 % plus brillante et 14 % plus grande au périgée',
			body: 'La pleine Lune du Castor, le 24 novembre 2026, est la première superlune depuis janvier 2026 et la deuxième de trois superlunes de l\'année. L\'illumination maximale se produit à 14h53 UTC (9h53 EST), lorsque le disque lunaire se trouve à l\'opposé du Soleil et est entièrement éclairé. Parce que la Lune atteint le périgée — son point le plus proche de la Terre sur son orbite — à peu près au même moment, elle apparaît jusqu\'à environ 30 % plus brillante et 14 % plus grande qu\'une pleine Lune typique. La Lune se lève au nord-est avant le coucher du Soleil le 24 novembre et se couche au sud-ouest avant le lever du Soleil, elle sera donc visible pendant la majeure partie de la nuit. Le nom « Lune du Castor » vient de la nomenclature traditionnelle nord-américaine, associée aux castors construisant leurs barrages d\'hiver. Aucun équipement spécial n\'est nécessaire pour profiter de la superlune, même si des jumelles ou un petit télescope révéleront les cratères et les mers lunaires. L\'événement est visible dans le monde entier, si le temps le permet, et constitue l\'un des spectacles astronomiques les plus accessibles du mois.'
		}
	},
    {
		id: 'event-012',
		type: 'event',
		category: 'local',
		image: 'assets2/images/events/discovery-day-cst-2026.jpg',
		date: '2026-11-22',
		en: {
			title: 'Discovery Day at Cité des Sciences in Tunis',
			subtitle: 'A free science day with astronomy activities, experiments, and workshops under the theme “Science for All”',
			body: 'The Cité des Sciences in Tunis is organising a “Discovery Day” on Saturday, November 22, 2026, under the theme “Science for All.” The event is designed to bring the public closer to science through interactive and educational activities that combine adventure and knowledge. Participants will have the opportunity to watch engaging scientific experiments and discover everyday natural phenomena. The programme includes workshops and practical experiments in physics, chemistry, and mathematics, encouraging scientific curiosity among young people. The Universe Pavilion and the planetarium are part of the Cité des Sciences’ permanent spaces, and the day typically includes astronomy-themed activities, including shows and observing sessions when conditions allow. The event is open to the public, and the Cité des Sciences is located on Boulevard Mohamed Bouazizi in Tunis. The Discovery Day is part of the centre’s broader 2026 programme, which includes 15 astronomy evenings and three star nights throughout the year.'
		},
		ar: {
			title: 'يوم الاستكشافات بمدينة العلوم بتونس',
			subtitle: 'يوم علمي مجاني يتضمن أنشطة فلكية وتجارب وورشات تحت شعار "العلوم متاحة للجميع"',
			body: 'تنظّم مدينة العلوم بتونس "يوم الاستكشافات" يوم السبت 22 نوفمبر 2026 تحت شعار "العلوم متاحة للجميع". ويهدف الحدث إلى تقريب الجمهور من عالم العلوم عبر أنشطة تفاعلية وتعليمية تجمع بين المغامرة والمعرفة. سيحظى المشاركون بفرصة مشاهدة تجارب علمية ممتعة واكتشاف الظواهر الطبيعية اليومية. ويشمل البرنامج ورشات وتجارب عملية في الفيزياء والكيمياء والرياضيات، لتشجيع الفضول العلمي لدى الناشئة. ويُعدّ جناح الكون والقبة الفلكية من الفضاءات الدائمة بمدينة العلوم، ويتضمن اليوم عادةً أنشطة ذات طابع فلكي، بما في ذلك عروض وحصص رصد عندما تسمح الظروف. والحدث مفتوح للعموم، وتقع مدينة العلوم في شارع محمد البوعزيزي بتونس. ويأتي يوم الاستكشافات ضمن برنامج المدينة الأوسع لعام 2026، الذي يشمل 15 سهرة فلكية وثلاث ليالٍ للنجوم على امتداد السنة.'
		},
		fr: {
			title: 'Journée de la découverte à la Cité des Sciences de Tunis',
			subtitle: 'Une journée scientifique gratuite avec activités astronomiques, expériences et ateliers sous le thème « La science pour tous »',
			body: 'La Cité des Sciences de Tunis organise une « Journée de la découverte » le samedi 22 novembre 2026, sous le thème « La science pour tous ». L\'événement vise à rapprocher le public de la science par des activités interactives et éducatives alliant aventure et connaissance. Les participants pourront assister à des expériences scientifiques captivantes et découvrir les phénomènes naturels du quotidien. Le programme comprend des ateliers et des expériences pratiques en physique, chimie et mathématiques, pour encourager la curiosité scientifique des jeunes. Le Pavillon de l\'Univers et le planétarium font partie des espaces permanents de la Cité des Sciences, et la journée comprend généralement des activités à thème astronomique, notamment des spectacles et des séances d\'observation lorsque les conditions le permettent. L\'événement est ouvert au public, et la Cité des Sciences se situe sur le boulevard Mohamed Bouazizi à Tunis. La Journée de la découverte s\'inscrit dans le programme 2026 plus large du centre, qui comprend 15 soirées astronomiques et trois nuits des étoiles tout au long de l\'année.'
		}
	},
    {
		id: 'event-013',
		type: 'event',
		category: 'local',
		image: 'assets2/images/events/tataouine-november-2026.jpg',
		date: '2026-11-01',
		en: {
			title: 'Tataouine Science City Branch: November School-Holiday Astronomy Programme',
			subtitle: 'Workshops, planetarium shows, and astronomy activities at the Tataouine branch throughout the November school holidays',
			body: 'The Tataouine branch of the Cité des Sciences in Tunis is running a dedicated school-holiday programme during November 2026, with workshops and science and astronomy activities for students and families. The branch has been equipped with a new digital planetarium — a permanent dome about 7 metres in diameter with 35 seats — offering astronomy shows in French, Arabic, and English. The programme includes astronomy workshops covering the solar system, planetary motions, lunar phases, and astronomical phenomena, alongside hands-on science activities. The Tataouine branch has become a regional hub for astronomy and space technology outreach, and its location in southern Tunisia offers some of the country’s darkest skies. The November programme is part of the Cité des Sciences’ national 2026 programme, which includes 15 astronomy evenings and three star nights across its headquarters and branches. The branch is located at the University Campus of Tataouine, Cité Mahrajene, and is open to school groups and the general public. Visitors are advised to check the official Cité des Sciences programme for exact dates and times.'
		},
		ar: {
			title: 'فرع مدينة العلوم بتطاوين: برنامج العطلة المدرسية لشهر نوفمبر الفلكي',
			subtitle: 'ورشات وعروض قبة فلكية وأنشطة فلكية بفرع تطاوين طوال عطلة نوفمبر المدرسية',
			body: 'ينظّم فرع مدينة العلوم بتطاوين برنامجاً مخصّصاً للعطلة المدرسية خلال نوفمبر 2026، يتضمن ورشات وأنشطة علمية وفلكية للتلاميذ والعائلات. وزُوّد الفرع بقبة فلكية رقمية جديدة — قبة دائمة يبلغ قطرها نحو 7 أمتار وتتسع لـ35 مقعداً — تقدّم عروضاً فلكية بالفرنسية والعربية والإنجليزية. ويشمل البرنامج ورشات فلكية تغطي النظام الشمسي وحركات الكواكب وأطوار القمر والظواهر الفلكية، إلى جانب أنشطة علمية تطبيقية. وأصبح فرع تطاوين مركزاً إقليمياً لنشر علم الفلك وتكنولوجيا الفضاء، ويوفر موقعه في جنوب تونس بعضاً من أظلم سماء البلاد. ويأتي برنامج نوفمبر ضمن البرنامج الوطني لمدينة العلوم لعام 2026، الذي يشمل 15 سهرة فلكية وثلاث ليالٍ للنجوم في مقرها وفروعها. ويقع الفرع في الحرم الجامعي بتطاوين، المدينة المهاجرين، وهو مفتوح للمجموعات المدرسية والعموم. ويُنصح الزوار بالتحقق من البرنامج الرسمي لمدينة العلوم لمعرفة التواريخ والأوقات الدقيقة.'
		},
		fr: {
			title: 'Branche de la Cité des Sciences de Tataouine : programme astronomique des vacances scolaires de novembre',
			subtitle: 'Ateliers, spectacles de planétarium et activités astronomiques à la branche de Tataouine pendant les vacances scolaires de novembre',
			body: 'La branche de Tataouine de la Cité des Sciences de Tunis propose un programme dédié aux vacances scolaires en novembre 2026, avec des ateliers et des activités scientifiques et astronomiques pour les élèves et les familles. La branche a été équipée d\'un nouveau planétarium numérique — un dôme permanent d\'environ 7 mètres de diamètre avec 35 places — offrant des spectacles astronomiques en français, arabe et anglais. Le programme comprend des ateliers d\'astronomie couvrant le système solaire, les mouvements planétaires, les phases lunaires et les phénomènes astronomiques, ainsi que des activités scientifiques pratiques. La branche de Tataouine est devenue un pôle régional de vulgarisation de l\'astronomie et des technologies spatiales, et sa situation dans le sud de la Tunisie offre certains des ciels les plus sombres du pays. Le programme de novembre s\'inscrit dans le programme national 2026 de la Cité des Sciences, qui comprend 15 soirées astronomiques et trois nuits des étoiles dans son siège et ses branches. La branche est située sur le campus universitaire de Tataouine, Cité Mahrajene, et est ouverte aux groupes scolaires et au grand public. Il est conseillé aux visiteurs de consulter le programme officiel de la Cité des Sciences pour les dates et horaires exacts.'
		}
	},
	{
		id: 'event-014',
		type: 'event',
		category: 'local',
		image: 'assets2/images/events/astroenit-night-stars-2026.jpg',
		date: '2026-11-13',
		en: {
			title: 'Nuit sous les étoiles with AstroENIT Club',
			subtitle: 'A full evening of astronomy, games, and stargazing at the National Engineering School of Tunis',
			body: 'AstroENIT Club invites you to an unforgettable night dedicated to astronomy, friendship, and fun on Friday, November 13, 2026, at the National Engineering School of Tunis (ENIT), starting at 5:00 PM until the early hours of the morning. The event features a rich program including a gathering, a university restaurant dinner, telescope initiation, and observations of Venus and Saturn. Later, participants will enjoy a presentation on stars, a telescope test, team games, an astronomy quiz, and an astro treasure hunt, followed by observations of Jupiter and Mars with a coffee break. The night continues with a brainstorming session for future activities and fun games. Entry is 10 DT, and registration is required via an online form. Whether you are a curious beginner or a passionate stargazer, everyone is welcome.'
		},
		ar: {
			title: 'ليلة تحت النجوم مع نادي AstroENIT',
			subtitle: 'سهرة فلكية حافلة بالأنشطة والألعاب ورصد النجوم بالمدرسة الوطنية للمهندسين بتونس',
			body: 'يدعوكم نادي AstroENIT لقضاء ليلة لا تُنسى مخصصة لعلم الفلك والصداقة والمرح يوم الجمعة 13 نوفمبر 2026 بالمدرسة الوطنية للمهندسين بتونس، انطلاقاً من الساعة الخامسة مساءً وحتى ساعات الصباح الأولى. يتضمن الحدث برنامجاً غنياً يشمل تجمعاً في المقر، وعشاءً في المطعم الجامعي، وتدريباً على استخدام التلسكوب ورصد كوكبي الزهرة وزحل. لاحقاً، سيستمتع المشاركون بعرض حول النجوم، واختبار للتلسكوب، وألعاب جماعية، ومسابقة فلكية، ومطاردة كنز فلكية، يليها رصد لكوكبي المشتري والمريخ مع استراحة قهوة. وتتواصل الليلة مع جلسة عصف ذهني للأنشطة المستقبلية وألعاب ترفيهية. رسم الدخول 10 دنانير، والتسجيل مطلوب عبر استمارة إلكترونية. سواء كنت مبتدئاً فضولياً أو هاوياً شغوفاً برصد النجوم، فمرحباً بك.'
		},
		fr: {
			title: 'Nuit sous les étoiles avec le Club AstroENIT',
			subtitle: 'Une soirée complète d\'astronomie, de jeux et d\'observation à l\'École Nationale d\'Ingénieurs de Tunis',
			body: 'Le Club AstroENIT vous invite à une nuit inoubliable dédiée à l\'astronomie, à l\'amitié et au plaisir le vendredi 13 novembre 2026 à l\'École Nationale d\'Ingénieurs de Tunis (ENIT), à partir de 17h00 jusqu\'aux petites heures du matin. L\'événement propose un programme riche comprenant un rassemblement, un dîner au restaurant universitaire, une initiation au matériel télescopique et l\'observation de Vénus et Saturne. Plus tard, les participants profiteront d\'une présentation sur les étoiles, d\'un test de télescope, de jeux d\'équipe, d\'un quiz astronomique et d\'une chasse au trésor astro, suivis d\'observations de Jupiter et Mars avec une pause-café. La nuit se poursuit avec une session de brainstorming pour les futures activités et des jeux amusants. L\'entrée est de 10 DT et l\'inscription est obligatoire via un formulaire en ligne. Que vous soyez un débutant curieux ou un passionné d\'étoiles, tout le monde est le bienvenu.'
		}
	},
    {
		id: 'event-015',
		type: 'event',
		category: 'local',
		image: 'assets2/images/events/hamma-science-festival-2026.jpg',
		date: '2026-11-13',
		en: {
			title: 'El Hamma Science Festival 2026',
			subtitle: 'Three days of science, robotics, and astronomy in El Hamma',
			body: 'The city of El Hamma is hosting the "El Hamma Science Festival 2026" from November 13 to 15, 2026, at the Mohamed Ali Youth House. Organized in partnership with the Cité des Sciences in Tunis and the Youth and Science Association of El Hamma, and supported by the El Hamma Municipality, the festival features a variety of scientific and technological activities for children and youth. Highlights include a stargazing evening, planetarium sessions, interactive science workshops, a robotics and innovative projects exhibition, an interactive math exhibition, workshops on 3D printing and artificial intelligence, and a smart robot car race. The event involves various scientific associations, including robotics clubs from ENIG and INSAT, aiming to spread scientific culture, encourage innovation, and discover young scientific talents. The participation fee is 1 DT.'
		},
		ar: {
			title: 'مهرجان العلوم بالحامة 2026',
			subtitle: 'ثلاثة أيام من العلوم والروبوتيك والفلك في مدينة الحامة',
			body: 'تحتضن مدينة الحامة "مهرجان العلوم بالحامة 2026" أيام 13 و14 و15 نوفمبر 2026 بدار الشباب محمد علي. ينظم المهرجان بالشراكة مع مدينة العلوم بتونس وجمعية الشبان والعلم بالحامة وبدعم من بلدية الحامة، ويتضمن باقة من الأنشطة العلمية والتكنولوجية للأطفال والشباب. تشمل الفعاليات سهرة فلكية لرصد النجوم والكواكب، وجلسات بالقبة الفلكية، وورشات علمية وتجارب تفاعلية، ومعرضاً للروبوتات والمشاريع المبتكرة، ومعرضاً تفاعلياً للرياضيات، وورشات في الطباعة ثلاثية الأبعاد والذكاء الاصطناعي وتطبيقاته، وسباقاً لسيارات الروبوتات الذكية. يشارك في التظاهرة عدد من الجمعيات العلمية ونوادي الروبوتيك من المدرسة الوطنية للمهندسين بقابس والمعهد الوطني للعلوم التطبيقية والتكنولوجية بتونس. يهدف المهرجان إلى نشر الثقافة العلمية وتقريب العلوم الحديثة من الناشئة وتشجيع الابتكار واكتشاف المواهب. رسم المشاركة 1 دينار.'
		},
		fr: {
			title: 'Festival des Sciences d\'El Hamma 2026',
			subtitle: 'Trois jours de sciences, de robotique et d\'astronomie à El Hamma',
			body: 'La ville d\'El Hamma accueille le "Festival des Sciences d\'El Hamma 2026" du 13 au 15 novembre 2026 à la Maison des Jeunes Mohamed Ali. Organisé en partenariat avec la Cité des Sciences de Tunis et l\'Association Jeunesse et Science d\'El Hamma, et soutenu par la municipalité d\'El Hamma, le festival propose diverses activités scientifiques et technologiques pour les enfants et les jeunes. Au programme : une soirée d\'observation des étoiles, des séances de planétarium, des ateliers scientifiques interactifs, une exposition de robots et de projets innovants, une exposition interactive de mathématiques, des ateliers sur l\'impression 3D et l\'intelligence artificielle, ainsi qu\'une course de voitures robots intelligentes. L\'événement implique diverses associations scientifiques, dont les clubs de robotique de l\'ENIG et de l\'INSAT, visant à diffuser la culture scientifique, encourager l\'innovation et découvrir les jeunes talents scientifiques. Les frais de participation sont de 1 DT.'
		}
	},
    {
		id: 'event-016',
		type: 'event',
		category: 'global',
		image: 'assets2/images/events/four-galaxy-challenge-2026.jpg',
		date: '2026-11-10',
		en: {
			title: 'Four-Galaxy Challenge: LMC, SMC, Milky Way & M31',
			subtitle: 'Observe four magnificent galaxies in a single night',
			body: 'From November 6–12, 2026, stargazers have the opportunity to take on the "Four-Galaxy Challenge." This involves observing the Large Magellanic Cloud (LMC), the Small Magellanic Cloud (SMC), our own Milky Way, and the Andromeda Galaxy (M31) all within the same night. The best viewing window is around November 8–10, shortly after sunset. All four are visible to the naked eye under dark skies, though binoculars will greatly enhance the view.'
		},
		ar: {
			title: 'تحدي المجرات الأربع: سحابتا ماجلان ودرب التبانة ومجرة أندروميدا',
			subtitle: 'رصد أربع مجرات رائعة في ليلة واحدة',
			body: 'من 6 إلى 12 نوفمبر 2026، تتاح لهواة الفلك فرصة خوض "تحدي المجرات الأربع". يتضمن ذلك رصد سحابة ماجلان الكبرى، وسحابة ماجلان الصغرى، ومجرتنا درب التبانة، ومجرة أندروميدا (M31) في نفس الليلة. أفضل نافذة للرصد هي حوالي 8-10 نوفمبر، بعد غروب الشمس بقليل. جميعها مرئية بالعين المجردة تحت سماء مظلمة، على الرغم من أن المناظير ستعزز الرؤية بشكل كبير.'
		},
		fr: {
			title: 'Le défi des quatre galaxies : LMC, SMC, Voie lactée et M31',
			subtitle: 'Observez quatre magnifiques galaxies en une seule nuit',
			body: 'Du 6 au 12 novembre 2026, les astronomes amateurs ont l\'opportunité de relever le "Défi des quatre galaxies". Cela implique d\'observer le Grand Nuage de Magellan (LMC), le Petit Nuage de Magellan (SMC), notre propre Voie lactée et la galaxie d\'Andromède (M31) au cours de la même nuit. La meilleure fenêtre d\'observation se situe autour du 8 au 10 novembre, peu après le coucher du soleil. Toutes les quatre sont visibles à l\'œil nu sous un ciel sombre, bien que des jumelles améliorent considérablement la vue.'
		}
	},
    {
		id: 'event-017',
		type: 'event',
		category: 'global',
		image: 'assets2/images/events/moon-antares-2026.jpg',
		date: '2026-11-10',
		en: {
			title: 'Moon near Antares',
			subtitle: 'The crescent Moon passes close to the red supergiant star',
			body: 'On the evenings of November 10–11, 2026, the Moon will be visible very close to Antares, the brightest star in the constellation Scorpius. Antares is a red supergiant often called the "heart of the scorpion." The pairing will be best viewed after sunset with the naked eye.'
		},
		ar: {
			title: 'القمر بالقرب من قلب العقرب',
			subtitle: 'القمر يمر بالقرب من النجم العملاق الأحمر',
			body: 'في أمسيات 10-11 نوفمبر 2026، سيكون القمر مرئياً قريباً جداً من قلب العقرب، ألمع نجم في كوكبة العقرب. قلب العقرب هو عملاق أحمر يُطلق عليه غالباً "قلب العقرب". أفضل وقت لمشاهدة الاقتران هو بعد غروب الشمس بالعين المجردة.'
		},
		fr: {
			title: 'La Lune près d\'Antarès',
			subtitle: 'Le croissant de Lune passe près de l\'étoile supergéante rouge',
			body: 'Les soirs des 10 et 11 novembre 2026, la Lune sera visible très près d\'Antarès, l\'étoile la plus brillante de la constellation du Scorpion. Antarès est une supergéante rouge souvent appelée le "cœur du scorpion". Le couple sera mieux observé après le coucher du soleil à l\'œil nu.'
		}
	},
    {
		id: 'event-018',
		type: 'event',
		category: 'global',
		image: 'assets2/images/events/lunar-occultation-antares-2026.jfif',
		date: '2026-11-11',
		en: {
			title: 'Lunar Occultation of Antares',
			subtitle: 'The Moon briefly hides the bright star Antares from view',
			body: 'On November 11, 2026, the Moon will pass directly in front of the bright star Antares, an event known as a lunar occultation. Depending on your location, this may occur during the daytime or evening. Binoculars or a telescope are highly recommended to watch the star disappear behind the dark limb of the Moon and reappear on the other side.'
		},
		ar: {
			title: 'احتجاب القمر لقلب العقرب',
			subtitle: 'القمر يحجب النجم الساطع قلب العقرب لفترة وجيزة',
			body: 'في 11 نوفمبر 2026، سيمر القمر مباشرة أمام النجم الساطع قلب العقرب، وهو حدث يُعرف بالاحتجاب القمري. اعتماداً على موقعك، قد يحدث هذا خلال النهار أو في المساء. يُنصح بشدة باستخدام المنظار أو التلسكوب لمشاهدة النجم وهو يختفي خلف الحافة المظلمة للقمر ثم يظهر مرة أخرى على الجانب الآخر.'
		},
		fr: {
			title: 'Occultation lunaire d\'Antarès',
			subtitle: 'La Lune cache brièvement l\'étoile brillante Antarès',
			body: 'Le 11 novembre 2026, la Lune passera directement devant l\'étoile brillante Antarès, un événement connu sous le nom d\'occultation lunaire. Selon votre emplacement, cela peut se produire pendant la journée ou le soir. Des jumelles ou un télescope sont fortement recommandés pour regarder l\'étoile disparaître derrière le limbe sombre de la Lune et réapparaître de l\'autre côté.'
		}
	},
    {
		id: 'event-019',
		type: 'event',
		category: 'global',
		image: 'assets2/images/events/taurids-2026.jpg',
		date: '2026-11-11',
		en: {
			title: 'Northern Taurids Meteor Shower Peak',
			subtitle: 'Slow, bright fireballs light up the late-night sky',
			body: 'The Northern Taurids meteor shower reaches its peak on the night of November 11–12, 2026. While this shower produces a modest number of meteors per hour, it is famous for producing slow, vivid fireballs. The radiant lies in the constellation Taurus, which is highest after midnight, and it is visible from the northern and southern hemispheres. The Taurids are debris from Comet 2P/Encke. The best time to watch is late at night, and no special equipment is needed—just find a dark spot and look up.'
		},
		ar: {
			title: 'ذروة زخة شهب الثور الشمالية',
			subtitle: 'كرات نارية بطيئة وساطعة تضيء سماء الليل المتأخر',
			body: 'تصل زخة شهب الثور الشمالية إلى ذروتها ليلة 11-12 نوفمبر 2026. على الرغم من أن هذه الزخة تنتج عدداً متواضعاً من الشهب في الساعة، إلا أنها تشتهر بإنتاج كرات نارية بطيئة وساطعة. تقع نقطة الإشعاع في كوكبة الثور التي تبلغ أعلى نقطة بعد منتصف الليل، وتُرى من نصفي الكرة الأرضية الشمالي والجنوبي. وشهب الثور هي حطام المذنب 2P/إنكه. أفضل وقت للمشاهدة هو في وقت متأخر من الليل، ولا حاجة إلى معدات خاصة — فقط ابحث عن مكان مظلم وانظر إلى الأعلى.'
		},
		fr: {
			title: 'Pic de la pluie de météores des Taurides du Nord',
			subtitle: 'Des bolides lents et brillants illuminent le ciel nocturne',
			body: 'La pluie de météores des Taurides du Nord atteint son pic dans la nuit du 11 au 12 novembre 2026. Bien que cette pluie produise un nombre modeste de météores par heure, elle est célèbre pour produire des bolides lents et éclatants. Le radiant se situe dans la constellation du Taureau, au plus haut après minuit, et est visible depuis les hémisphères nord et sud. Les Taurides proviennent de la comète 2P/Encke. Le meilleur moment pour observer est tard dans la nuit, et aucun équipement spécial n\'est nécessaire — trouvez simplement un endroit sombre et levez les yeux.'
		}
	},
    {
		id: 'event-020',
		type: 'event',
		category: 'global',
		image: 'assets2/images/events/moon-shaula-triangle-2026.jfif',
		date: '2026-11-12',
		en: {
			title: 'Moon, Shaula & Kaus Australis Form a Triangle',
			subtitle: 'A geometric asterism graces the evening sky',
			body: 'On November 12, 2026, after sunset, look towards the constellation Scorpius. The Moon will form a near-equilateral triangle with the bright stars Shaula and Kaus Australis. This celestial geometry is easily visible to the naked eye and makes for a great astrophotography subject.'
		},
		ar: {
			title: 'القمر والشولة وكاوس أوستراليس يشكلون مثلثاً',
			subtitle: 'تشكيل هندسي من النجوم يزين سماء المساء',
			body: 'في 12 نوفمبر 2026، بعد غروب الشمس، انظر نحو كوكبة العقرب. سيشكل القمر مثلثاً شبه متساوي الأضلاع مع النجمين الساطعين الشولة وكاوس أوستراليس. هذا التشكيل السماوي مرئي بسهولة بالعين المجردة ويشكل هدفاً رائعاً لتصوير الفلك.'
		},
		fr: {
			title: 'La Lune, Shaula et Kaus Australis forment un triangle',
			subtitle: 'Un astérisme géométrique orne le ciel du soir',
			body: 'Le 12 novembre 2026, après le coucher du soleil, regardez vers la constellation du Scorpion. La Lune formera un triangle presque équilatéral avec les étoiles brillantes Shaula et Kaus Australis. Cette géométrie céleste est facilement visible à l\'œil nu et constitue un excellent sujet d\'astrophotographie.'
		}
	},
    {
		id: 'event-021',
		type: 'event',
		category: 'global',
		image: 'assets2/images/events/4-planet-alignment-2026.jfif',
		date: '2026-11-13',
		en: {
			title: 'Mercury, Venus, Mars & Jupiter Alignment',
			subtitle: 'Four planets line up in the pre-dawn sky',
			body: 'From November 13–22, 2026, a spectacular alignment of four planets—Mercury, Venus, Mars, and Jupiter—will grace the morning sky. Around November 14, all four planets can be seen simultaneously with the naked eye from favorable northern locations with a clear, unobstructed horizon. Look east before sunrise to catch this beautiful planetary parade.'
		},
		ar: {
			title: 'اصطفاف عطارد والزهرة والمريخ والمشتري',
			subtitle: 'أربعة كواكب تصطف في سماء ما قبل الفجر',
			body: 'من 13 إلى 22 نوفمبر 2026، سيزين سماء الصباح اصطفاف مذهل لأربعة كواكب — عطارد والزهرة والمريخ والمشتري. حوالي 14 نوفمبر، يمكن رؤية الكواكب الأربعة جميعاً في وقت واحد بالعين المجردة من مواقع شمالية مواتية ذات أفق صافٍ وغير محجوب. انظر نحو الشرق قبل شروق الشمس لمشاهدة هذا العرض الكوكبي الجميل.'
		},
		fr: {
			title: 'Alignement de Mercure, Vénus, Mars et Jupiter',
			subtitle: 'Quatre planètes s\'alignent dans le ciel avant l\'aube',
			body: 'Du 13 au 22 novembre 2026, un alignement spectaculaire de quatre planètes — Mercure, Vénus, Mars et Jupiter — ornera le ciel matinal. Vers le 14 novembre, les quatre planètes pourront être vues simultanément à l\'œil nu depuis des sites nordiques favorables avec un horizon dégagé et dégagé. Regardez vers l\'est avant le lever du soleil pour admirer ce magnifique défilé planétaire.'
		}
	},
    {
		id: 'event-022',
		type: 'event',
		category: 'global',
		image: 'assets2/images/events/mars-regulus-triangle-2026.jpg',
		date: '2026-11-14',
		en: {
			title: 'Mars, Regulus & Algieba Form a Triangle',
			subtitle: 'The Red Planet joins the stars of Leo',
			body: 'On the mornings of November 14–15, 2026, before sunrise, the planet Mars will form an isosceles triangle with the bright stars Regulus and Algieba in the constellation Leo. This is a beautiful naked-eye sight for early risers, showcasing the distinct reddish hue of Mars against the bright stars of the Lion.'
		},
		ar: {
			title: 'المريخ وقلب الأسد والزبان يشكلون مثلثاً',
			subtitle: 'الكوكب الأحمر ينضم إلى نجوم كوكبة الأسد',
			body: 'في صباح 14-15 نوفمبر 2026، قبل شروق الشمس، سيشكل كوكب المريخ مثلثاً متساوي الساقين مع النجمين الساطعين قلب الأسد والزبان في كوكبة الأسد. هذا منظر جميل يُرى بالعين المجردة للمستيقظين مبكراً، ويُظهر اللون الأحمر المميز للمريخ مقابل النجوم الساطعة في كوكبة الأسد.'
		},
		fr: {
			title: 'Mars, Régulus et Algieba forment un triangle',
			subtitle: 'La planète rouge rejoint les étoiles du Lion',
			body: 'Les matins des 14 et 15 novembre 2026, avant le lever du soleil, la planète Mars formera un triangle isocèle avec les étoiles brillantes Régulus et Algieba dans la constellation du Lion. C\'est un beau spectacle visible à l\'œil nu pour les lève-tôt, mettant en valeur la teinte rougeâtre distincte de Mars face aux étoiles brillantes du Lion.'
		}
	}
];
