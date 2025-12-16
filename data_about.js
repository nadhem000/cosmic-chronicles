// data_about.js - Data for About Page
const AN_about_data = {
    developer: {
        id: 'dev-001',
        name: 'Mejri Ziad',
        image: 'assets/images/about/ziad.jpg',
        role: 'Project Lead & Developer',
        skills: ['JavaScript', 'HTML/CSS', 'Astronomy', 'Data Visualization', 'UI/UX Design', 'Science Communication'],
        en: {
            name: 'Mejri Ziad',
            role: 'Project Lead & Developer',
            bio: 'Passionate astronomer and full-stack developer with over 5 years of experience in web development and 3 years in astronomy outreach. Created Cosmic Chronicles to make astronomy accessible to everyone, combining technical expertise with a love for celestial exploration. Leads the AstroMed Club and organizes stargazing events across Tunisia.',
            email: 'ziad@universe-chronicles.com',
            github: 'github.com/ziadmejri',
            linkedin: 'linkedin.com/in/ziadmejri'
        },
        fr: {
            name: 'Mejri Ziad',
            role: 'Chef de Projet & Développeur',
            bio: 'Astronome passionné et développeur full-stack avec plus de 5 ans d\'expérience en développement web et 3 ans en vulgarisation astronomique. A créé Cosmic Chronicles pour rendre l\'astronomie accessible à tous, combinant expertise technique et passion pour l\'exploration céleste. Dirige le Club AstroMed et organise des événements d\'observation des étoiles à travers la Tunisie.',
            email: 'ziad@universe-chronicles.com',
            github: 'github.com/ziadmejri',
            linkedin: 'linkedin.com/in/ziadmejri'
        },
        ar: {
            name: 'ماجري زياد',
            role: 'قائد المشروع والمطور',
            bio: 'عالم فلك شغوف ومطور Full-stack مع أكثر من 5 سنوات من الخبرة في تطوير الويب و3 سنوات في التوعية الفلكية. أنشأ Cosmic Chronicles لجعل علم الفلك في متناول الجميع، مزجاً بين الخبرة التقنية وحب استكشاف السماء. يقود نادي أسترو ميد وينظم أحداث مراقبة النجوم في جميع أنحاء تونس.',
            email: 'ziad@universe-chronicles.com',
            github: 'github.com/ziadmejri',
            linkedin: 'linkedin.com/in/ziadmejri'
        }
    },
    team: [
        {
            id: 'team-001',
            name: 'Sarah Chen',
            role: 'Astronomy Researcher',
            image: 'assets/images/about/sarah.jpg',
            icon: 'fa-star',
            en: {
                name: 'Sarah Chen',
                role: 'Astronomy Researcher',
                bio: 'PhD in Astrophysics with specialization in exoplanet detection. Responsible for verifying scientific accuracy of all astronomical content and keeping the team updated with latest research.'
            },
            fr: {
                name: 'Sarah Chen',
                role: 'Chercheuse en Astronomie',
                bio: 'Doctorat en astrophysique avec spécialisation en détection d\'exoplanètes. Responsable de vérifier l\'exactitude scientifique de tout le contenu astronomique et de tenir l\'équipe à jour avec les dernières recherches.'
            },
            ar: {
                name: 'سارة تشين',
                role: 'باحثة في علم الفلك',
                bio: 'دكتوراه في الفيزياء الفلكية مع تخصص في اكتشاف الكواكب الخارجية. مسؤولة عن التحقق من الدقة العلمية لجميع المحتويات الفلكية وإبقاء الفريق على اطلاع بأحدث الأبحاث.'
            }
        },
        {
            id: 'team-002',
            name: 'Ahmed Mansouri',
            role: 'Frontend Developer',
            image: 'assets/images/about/ahmed.jpg',
            icon: 'fa-code',
            en: {
                name: 'Ahmed Mansouri',
                role: 'Frontend Developer',
                bio: 'Specializes in creating responsive, accessible web interfaces. Passionate about making complex astronomical data understandable through intuitive visualizations.'
            },
            fr: {
                name: 'Ahmed Mansouri',
                role: 'Développeur Frontend',
                bio: 'Spécialisé dans la création d\'interfaces web réactives et accessibles. Passionné par la compréhension des données astronomiques complexes grâce à des visualisations intuitives.'
            },
            ar: {
                name: 'أحمد المنصوري',
                role: 'مطور واجهة المستخدم',
                bio: 'يتخصص في إنشاء واجهات ويب متجاوبة وسهلة الوصول. شغوف بجعل البيانات الفلكية المعقدة مفهومة من خلال التصورات البصرية البديهية.'
            }
        },
        {
            id: 'team-003',
            name: 'Lina Bouchard',
            role: 'Content Writer & Translator',
            image: 'assets/images/about/lina.jpg',
            icon: 'fa-language',
            en: {
                name: 'Lina Bouchard',
                role: 'Content Writer & Translator',
                bio: 'Science communicator with background in journalism and multilingual translation. Ensures all content is engaging, accurate, and accessible across all supported languages.'
            },
            fr: {
                name: 'Lina Bouchard',
                role: 'Rédactrice & Traductrice',
                bio: 'Communicatrice scientifique avec une formation en journalisme et en traduction multilingue. Veille à ce que tout le contenu soit engageant, précis et accessible dans toutes les langues prises en charge.'
            },
            ar: {
                name: 'لينا بوشار',
                role: 'كاتبة المحتوى والمترجمة',
                bio: 'متحدثة علمية بخلفية في الصحافة والترجمة متعددة اللغات. تضمن أن يكون جميع المحتوى جذاباً ودقيقاً ويمكن الوصول إليه في جميع اللغات المدعومة.'
            }
        },
        {
            id: 'team-004',
            name: 'Karim Jlassi',
            role: 'Data Analyst',
            image: 'assets/images/about/karim.jpg',
            icon: 'fa-chart-line',
            en: {
                name: 'Karim Jlassi',
                role: 'Data Analyst',
                bio: 'Processes and analyzes astronomical data from various sources. Creates interactive charts and simulations to help users understand complex cosmic phenomena.'
            },
            fr: {
                name: 'Karim Jlassi',
                role: 'Analyste de Données',
                bio: 'Traite et analyse les données astronomiques provenant de diverses sources. Crée des graphiques interactifs et des simulations pour aider les utilisateurs à comprendre les phénomènes cosmiques complexes.'
            },
            ar: {
                name: 'كريم الجلاصي',
                role: 'محلل البيانات',
                bio: 'يعالج ويحلل البيانات الفلكية من مصادر مختلفة. ينشئ مخططات ومحاكاة تفاعلية لمساعدة المستخدمين على فهم الظواهر الكونية المعقدة.'
            }
        }
    ],
    values: [
        {
            id: 'value-001',
            icon: 'fa-check-circle',
            en: {
                title: 'Scientific Accuracy',
                description: 'We prioritize factual, peer-reviewed information and collaborate with astronomers to ensure content accuracy.'
            },
            fr: {
                title: 'Exactitude Scientifique',
                description: 'Nous donnons la priorité aux informations factuelles et évaluées par des pairs et collaborons avec des astronomes pour garantir l\'exactitude du contenu.'
            },
            ar: {
                title: 'الدقة العلمية',
                description: 'نعطي الأولوية للمعلومات الواقعية التي تمت مراجعتها من قبل الزملاء ونتعاون مع علماء الفلك لضمان دقة المحتوى.'
            }
        },
        {
            id: 'value-002',
            icon: 'fa-universal-access',
            en: {
                title: 'Accessibility',
                description: 'We design our platforms to be usable by everyone, with multilingual support and responsive design.'
            },
            fr: {
                title: 'Accessibilité',
                description: 'Nous concevons nos plateformes pour qu\'elles soient utilisables par tous, avec un support multilingue et un design adaptatif.'
            },
            ar: {
                title: 'سهولة الوصول',
                description: 'نصمم منصاتنا لتكون قابلة للاستخدام من قبل الجميع، مع دعم متعدد اللغات وتصميم متجاوب.'
            }
        },
        {
            id: 'value-003',
            icon: 'fa-lightbulb',
            en: {
                title: 'Innovation',
                description: 'We continuously explore new technologies to enhance the astronomical learning experience.'
            },
            fr: {
                title: 'Innovation',
                description: 'Nous explorons continuellement de nouvelles technologies pour améliorer l\'expérience d\'apprentissage astronomique.'
            },
            ar: {
                title: 'الابتكار',
                description: 'نستكشف باستمرار التقنيات الجديدة لتعزيز تجربة التعلم الفلكية.'
            }
        },
        {
            id: 'value-004',
            icon: 'fa-users',
            en: {
                title: 'Community',
                description: 'We build communities where astronomy enthusiasts can connect, share knowledge, and collaborate.'
            },
            fr: {
                title: 'Communauté',
                description: 'Nous construisons des communautés où les passionnés d\'astronomie peuvent se connecter, partager des connaissances et collaborer.'
            },
            ar: {
                title: 'المجتمع',
                description: 'نبني مجتمعات حيث يمكن لهواة علم الفلك التواصل ومشاركة المعرفة والتعاون.'
            }
        }
    ]
};