// data.js - Updated with categories and Tunisian data
const AN_data = [
    // Global News
    {
        id: 'news-001',
        type: 'news',
        category: 'global',
        image: 'assets/images/news/james-webb.jpg',
        date: '2023-12-15',
        en: {
            title: 'James Webb Telescope Discovers Ancient Galaxies',
            subtitle: 'Revolutionary findings reshape our understanding of the early universe',
            body: 'The James Webb Space Telescope has identified galaxies that formed just 400 million years after the Big Bang, reshaping our understanding of the early universe. These discoveries challenge existing models of galaxy formation.'
        },
        ar: {
            title: 'تلسكوب جيمس ويب يكتشف مجرات قديمة',
            subtitle: 'نتائج ثورية تعيد تشكيل فهمنا للكون المبكر',
            body: 'حدد تلسكوب جيمس ويب الفضائي مجرات تشكلت بعد 400 مليون سنة فقط من الانفجار العظيم، مما يعيد تشكيل فهمنا للكون المبكر. تتحدى هذه الاكتشافات النماذج الحالية لتشكل المجرات.'
        },
        fr: {
            title: 'Le télescope James Webb découvre des galaxies anciennes',
            subtitle: 'Des découvertes révolutionnaires redéfinissent notre compréhension de l\'univers primitif',
            body: 'Le télescope spatial James Webb a identifié des galaxies qui se sont formées seulement 400 millions d\'années après le Big Bang, remodelant notre compréhension de l\'univers primitif. Ces découvertes remettent en question les modèles existants de formation des galaxies.'
        }
    },
    {
        id: 'news-002',
        type: 'news',
        category: 'global',
        image: 'assets/images/news/mars-rover.jpg',
        date: '2023-12-12',
        en: {
            title: 'Mars Rover Finds Evidence of Ancient Water',
            subtitle: 'Perseverance discovers compelling evidence of Martian water flow',
            body: 'NASA\'s Perseverance rover has discovered compelling evidence that Mars once had flowing water, increasing the possibility of past microbial life. The findings were made in the Jezero Crater, an ancient lakebed.'
        },
        ar: {
            title: 'مركبة المريخ تجد أدلة على وجود ماء قديم',
            subtitle: 'المثابرة تكتشف أدلة مقنعة على تدفق الماء على المريخ',
            body: 'اكتشفت مركبة ناسا المثابرة أدلة مقنعة على أن المريخ كان به ماء متدفق ذات يوم، مما يزيد من إمكانية وجود حياة ميكروبية سابقة. تمت الاكتشافات في فوهة جيزيرو، وهي بحيرة قديمة.'
        },
        fr: {
            title: 'Le rover martien trouve des preuves d\'eau ancienne',
            subtitle: 'Perseverance découvre des preuves convaincantes d\'écoulement d\'eau sur Mars',
            body: 'Le rover Perseverance de la NASA a découvert des preuves convaincantes que Mars avait autrefois de l\'eau qui coulait, augmentant la possibilité d\'une vie microbienne passée. Les découvertes ont été faites dans le cratère Jezero, un ancien lit de lac.'
        }
    },
    // Tunisian Local News
    {
        id: 'news-003',
        type: 'news',
        category: 'local',
        image: 'assets/images/news/tunisia-astronomy.jpg',
        date: '2023-12-10',
        en: {
            title: 'Tunisian Astronomers Discover New Exoplanet',
            subtitle: 'Tunis National Observatory makes breakthrough discovery',
            body: 'A team of Tunisian astronomers at the Tunis National Observatory has discovered a new exoplanet orbiting a star 150 light-years away. The discovery was made using data from the Gaia space telescope and ground-based observations.'
        },
        ar: {
            title: 'علماء الفلك التونسيون يكتشفون كوكباً خارجياً جديداً',
            subtitle: 'مرصد تونس الوطني يحقق اكتشافاً هاماً',
            body: 'اكتشف فريق من علماء الفلك التونسيين في المرصد الوطني بتونس كوكباً خارجياً جديداً يدور حول نجم يبعد 150 سنة ضوئية. تم الاكتشاف باستخدام بيانات من تلسكوب غايا الفضائي والملاحظات الأرضية.'
        },
        fr: {
            title: 'Des astronomes tunisiens découvrent une nouvelle exoplanète',
            subtitle: 'L\'Observatoire National de Tunis fait une découverte majeure',
            body: 'Une équipe d\'astronomes tunisiens de l\'Observatoire National de Tunis a découvert une nouvelle exoplanète en orbite autour d\'une étoile à 150 années-lumière. La découverte a été faite en utilisant les données du télescope spatial Gaia et des observations au sol.'
        }
    },
    {
        id: 'news-004',
        type: 'news',
        category: 'local',
        image: 'assets/images/news/tunisia-space.jpg',
        date: '2023-12-08',
        en: {
            title: 'Tunisia Launches Space Research Initiative',
            subtitle: 'Government allocates 50 million dinars for space technology development',
            body: 'The Tunisian government has announced a new space research initiative with a budget of 50 million Tunisian dinars. The program will focus on satellite technology, space weather monitoring, and training young scientists in astrophysics.'
        },
        ar: {
            title: 'تونس تطلق مبادرة جديدة لأبحاث الفضاء',
            subtitle: 'الحكومة تخصص 50 مليون دينار لتطوير تكنولوجيا الفضاء',
            body: 'أعلنت الحكومة التونسية عن مبادرة جديدة لأبحاث الفضاء بميزانية قدرها 50 مليون دينار تونسي. سيركز البرنامج على تكنولوجيا الأقمار الصناعية ومراقبة الطقس الفضائي وتدريب العلماء الشباب في مجال الفيزياء الفلكية.'
        },
        fr: {
            title: 'La Tunisie lance une initiative de recherche spatiale',
            subtitle: 'Le gouvernement alloue 50 millions de dinars pour le développement des technologies spatiales',
            body: 'Le gouvernement tunisien a annoncé une nouvelle initiative de recherche spatiale avec un budget de 50 millions de dinars tunisiens. Le programme se concentrera sur la technologie satellitaire, la surveillance de la météorologie spatiale et la formation des jeunes scientifiques en astrophysique.'
        }
    },
    {
        id: 'news-005',
        type: 'news',
        category: 'global',
        image: 'assets/images/news/solar-flare.jpg',
        date: '2023-12-05',
        en: {
            title: 'Solar Flare Causes Spectacular Auroras',
            subtitle: 'Massive solar eruption creates stunning light displays',
            body: 'A massive solar flare erupted from the Sun\'s surface, creating stunning auroral displays visible at lower latitudes than usual. The event was classified as an X-class flare, the most intense category.'
        },
        ar: {
            title: 'انفجار شمسي يسبب أضواء قطبية مذهلة',
            subtitle: 'انفجار شمسي هائل يخلق عروض ضوئية مذهلة',
            body: 'اندلع انفجار شمسي هائل من سطح الشمس، مما خلق عروضاً مذهلة للشفق القطبي مرئية عند خطوط عرض أقل من المعتاد. تم تصنيف الحدث على أنه انفجار من الفئة X، وهي الفئة الأكثر كثافة.'
        },
        fr: {
            title: 'Une éruption solaire provoque des aurores spectaculaires',
            subtitle: 'Une éruption solaire massive crée des spectacles lumineux époustouflants',
            body: 'Une éruption solaire massive a éclaté à la surface du Soleil, créant des aurores éblouissantes visibles à des latitudes plus basses que d\'habitude. L\'événement a été classé comme une éruption de classe X, la catégorie la plus intense.'
        }
    },
    {
        id: 'news-006',
        type: 'news',
        category: 'local',
        image: 'assets/images/news/tunisia-stargazing.jpg',
        date: '2023-12-03',
        en: {
            title: 'Tunisian Desert Becomes Stargazing Destination',
            subtitle: 'Sahara region attracts international astronomy tourists',
            body: 'The Tunisian Sahara desert is becoming a popular destination for international stargazers and astronomy enthusiasts. The region offers exceptionally clear skies with minimal light pollution, making it ideal for astronomical observations.'
        },
        ar: {
            title: 'الصحراء التونسية تصبح وجهة لمحبي مراقبة النجوم',
            subtitle: 'منطقة الصحراء تجذب السياح الفلكيين الدوليين',
            body: 'أصبحت الصحراء التونسية وجهة شعبية لمحبي مراقبة النجوم وهواة الفلك من جميع أنحاء العالم. توفر المنطقة سماءً صافية استثنائية مع الحد الأدنى من التلوث الضوئي، مما يجعلها مثالية للملاحظات الفلكية.'
        },
        fr: {
            title: 'Le désert tunisien devient une destination d\'observation des étoiles',
            subtitle: 'La région du Sahara attire les touristes astronomes internationaux',
            body: 'Le désert du Sahara tunisien devient une destination prisée des observateurs d\'étoiles et des passionnés d\'astronomie du monde entier. La région offre des cieux exceptionnellement clairs avec une pollution lumineuse minimale, idéaux pour les observations astronomiques.'
        }
    },
    // Events (updated with Tunisian dates)
    {
        id: 'event-001',
        type: 'event',
        category: 'global',
        image: 'assets/images/events/perseid-meteor.jpg',
        date: '2023-12-20',
        en: {
            title: 'Perseid Meteor Shower Peak',
            subtitle: 'Annual meteor shower at its most spectacular',
            body: 'The annual Perseid meteor shower will reach its peak, with up to 100 meteors per hour visible in dark skies. Best viewing will be after midnight local time.'
        },
        ar: {
            title: 'ذروة زخة شهب البرشاويات',
            subtitle: 'زخة الشهب السنوية في أكثر حالاتها إثارة',
            body: 'ستصل زخة شهب البرشاويات السنوية إلى ذروتها، مع ما يصل إلى 100 نيزك في الساعة مرئية في السماء المظلمة. سيكون أفضل وقت للمشاهدة بعد منتصف الليل بالتوقيت المحلي.'
        },
        fr: {
            title: 'Pic de la pluie de météores des Perséides',
            subtitle: 'La pluie de météores annuelle à son plus spectaculaire',
            body: 'La pluie de météores annuelle des Perséides atteindra son pic, avec jusqu\'à 100 météores par heure visibles dans les cieux sombres. La meilleure observation sera après minuit heure locale.'
        }
    },
    {
        id: 'event-002',
        type: 'event',
        category: 'local',
        image: 'assets/images/events/tunisia-event.jpg',
        date: '2023-12-25',
        en: {
            title: 'Tunisia Astronomy Festival 2023',
            subtitle: 'Annual astronomy festival in Tunis',
            body: 'The 5th Annual Tunisia Astronomy Festival will be held in Tunis, featuring telescope workshops, stargazing sessions, and lectures by international astronomers. Free admission for all.'
        },
        ar: {
            title: 'مهرجان تونس للفلك 2023',
            subtitle: 'المهرجان السنوي للفلك في تونس',
            body: 'سيُعقد مهرجان تونس للفلك السنوي الخامس في تونس، ويضم ورش عمل حول التلسكوبات وجلسات مراقبة النجوم ومحاضرات لعلماء الفلك الدوليين. الدخول مجاني للجميع.'
        },
        fr: {
            title: 'Festival d\'Astronomie de Tunisie 2023',
            subtitle: 'Festival annuel d\'astronomie à Tunis',
            body: 'Le 5ème Festival Annuel d\'Astronomie de Tunisie se tiendra à Tunis, avec des ateliers de télescopes, des séances d\'observation des étoiles et des conférences par des astronomes internationaux. Entrée gratuite pour tous.'
        }
    },
    {
        id: 'event-003',
        type: 'event',
        category: 'local',
        image: 'assets/images/events/tunisia-workshop.jpg',
        date: '2024-01-15',
        en: {
            title: 'Space Technology Workshop - Sfax',
            subtitle: 'Hands-on workshop for students and researchers',
            body: 'A 3-day workshop on space technology applications will be held at the University of Sfax. The workshop will cover satellite data analysis, remote sensing, and GIS applications for environmental monitoring.'
        },
        ar: {
            title: 'ورشة عمل تكنولوجيا الفضاء - صفاقس',
            subtitle: 'ورشة عملية للطلاب والباحثين',
            body: 'ستعقد ورشة عمل مدتها 3 أيام حول تطبيقات تكنولوجيا الفضاء في جامعة صفاقس. ستغطي الورشة تحليل بيانات الأقمار الصناعية والاستشعار عن بعد وتطبيقات نظم المعلومات الجغرافية لرصد البيئة.'
        },
        fr: {
            title: 'Atelier Technologie Spatiale - Sfax',
            subtitle: 'Atelier pratique pour étudiants et chercheurs',
            body: 'Un atelier de 3 jours sur les applications de la technologie spatiale se tiendra à l\'Université de Sfax. L\'atelier couvrira l\'analyse des données satellitaires, la télédétection et les applications SIG pour la surveillance environnementale.'
        }
    }
];
