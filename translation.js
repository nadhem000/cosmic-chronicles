// translation.js - Updated with dynamic notifications and Tunisian context
const AN_translations = {
    en: {
        'An.index.title': 'Cosmic Chronicles',
        'An.index.language': 'Language:',
        'An.index.theme': 'Theme:',
        'An.index.home': 'Home',
        'An.index.news': 'News',
        'An.index.missions': 'Missions',
    'An.index.explore': 'Explore Astronomy',
        'An.index.gallery': 'Gallery',
        'An.index.about': 'About',
        'An.index.heroTitle': 'Exploring the Universe',
        'An.index.heroText': 'Latest discoveries, missions, and cosmic events from across the universe',
        'An.index.exploreBtn': 'Explore News',
        'An.index.featuredNews': 'Featured News',
        'An.index.allNews': 'All News',
        'An.index.globalNews': 'Global News',
        'An.index.localNews': 'Tunisia News',
        'An.index.readMore': 'Read More',
        'An.index.upcomingEvents': 'Upcoming Events',
        'An.index.aboutUs': 'About Us',
        'An.index.aboutText': 'Cosmic Chronicles brings you the latest news and discoveries from the world of astronomy and space exploration.',
        'An.index.quickLinks': 'Quick Links',
'An.index.developer': 'Developer',
'An.index.legal': 'Legal',
'An.index.privacyPolicy': 'Privacy Policy',
'An.index.termsOfUse': 'Terms of Use',
        'An.index.notifications': 'Notifications',
        'An.index.markAllRead': 'Mark all as read',
        'An.index.noNotifications': 'No new notifications',
        'An.index.timeAgo': '2 hours ago'
    },
    fr: {
        'An.index.title': 'Chroniques Cosmiques',
        'An.index.language': 'Langue:',
        'An.index.theme': 'Thème:',
        'An.index.home': 'Accueil',
        'An.index.news': 'Actualités',
        'An.index.missions': 'Missions',
    'An.index.explore': 'Explorer l\'Astronomie',
        'An.index.gallery': 'Galerie',
        'An.index.about': 'À propos',
        'An.index.heroTitle': 'Explorer l\'Univers',
        'An.index.heroText': 'Dernières découvertes, missions et événements cosmiques de l\'univers entier',
        'An.index.exploreBtn': 'Explorer les actualités',
        'An.index.featuredNews': 'Actualités en vedette',
        'An.index.allNews': 'Toutes les actualités',
        'An.index.globalNews': 'Actualités Mondiales',
        'An.index.localNews': 'Actualités Tunisie',
        'An.index.readMore': 'Lire la suite',
        'An.index.upcomingEvents': 'Événements à venir',
        'An.index.aboutUs': 'À propos de nous',
        'An.index.aboutText': 'Chroniques Cosmiques vous apporte les dernières nouvelles et découvertes du monde de l\'astronomie et de l\'exploration spatiale.',
        'An.index.quickLinks': 'Liens rapides',
'An.index.developer': 'Développeur',
'An.index.legal': 'Légal',
'An.index.privacyPolicy': 'Politique de confidentialité',
'An.index.termsOfUse': 'Conditions d\'utilisation',
        'An.index.notifications': 'Notifications',
        'An.index.markAllRead': 'Tout marquer comme lu',
        'An.index.noNotifications': 'Aucune nouvelle notification',
        'An.index.timeAgo': 'Il y a 2 heures'
    },
    ar: {
        'An.index.title': 'السجلات الكونية',
        'An.index.language': 'اللغة:',
        'An.index.theme': 'المظهر:',
        'An.index.home': 'الرئيسية',
        'An.index.news': 'الأخبار',
    'An.index.explore': 'استكشف علم الفلك',
        'An.index.missions': 'البعثات',
        'An.index.gallery': 'المعرض',
        'An.index.about': 'حول',
        'An.index.heroTitle': 'استكشاف الكون',
        'An.index.heroText': 'أحدث الاكتشافات والمهام والأحداث الكونية من جميع أنحاء الكون',
        'An.index.exploreBtn': 'استكشف الأخبار',
        'An.index.featuredNews': 'أبرز الأخبار',
        'An.index.allNews': 'جميع الأخبار',
        'An.index.globalNews': 'الأخبار العالمية',
        'An.index.localNews': 'أخبار تونس',
        'An.index.readMore': 'اقرأ المزيد',
        'An.index.upcomingEvents': 'الأحداث القادمة',
        'An.index.aboutUs': 'معلومات عنا',
        'An.index.aboutText': 'تقدم لك السجلات الكونية آخر الأخبار والاكتشافات من عالم الفلك واستكشاف الفضاء.',
        'An.index.quickLinks': 'روابط سريعة',
'An.index.developer': 'المطور',
'An.index.legal': 'قانوني',
'An.index.privacyPolicy': 'سياسة الخصوصية',
'An.index.termsOfUse': 'شروط الاستخدام',
        'An.index.notifications': 'الإشعارات',
        'An.index.markAllRead': 'تحديد الكل كمقروء',
        'An.index.noNotifications': 'لا توجد إشعارات جديدة',
        'An.index.timeAgo': 'قبل ساعتين'
    }
};

// Notification Manager with dynamic functionality
const AN_notificationManager = {
    // Get notifications from data
    getNotifications: function(language, limit = 5) {
        // Check if we have saved notifications in localStorage
        const savedNotifications = localStorage.getItem(`AN_notifications_${language}`);
        if (savedNotifications) {
            const parsed = JSON.parse(savedNotifications);
            // Check if we need to update with new news items
            const shouldUpdate = this.shouldUpdateNotifications(parsed);
            if (!shouldUpdate) {
                return parsed;
            }
        }
        
        // Generate new notifications from latest news items
        const newsData = AN_data
            .filter(item => item.type === 'news')
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, limit);
        
        const notifications = newsData.map(item => {
            const content = item[language] || item.en;
            return {
                id: item.id,
                title: content.title,
                date: item.date,
                read: false,
                type: 'news',
                category: item.category,
                image: item.image
            };
        });
        
        // Save to localStorage
        localStorage.setItem(`AN_notifications_${language}`, JSON.stringify(notifications));
        
        return notifications;
    },
    
    // Check if notifications need updating (based on date)
    shouldUpdateNotifications: function(notifications) {
        if (!notifications || notifications.length === 0) return true;
        
        // Check if any notification is older than 1 day
        const oneDayAgo = new Date();
        oneDayAgo.setDate(oneDayAgo.getDate() - 1);
        
        return notifications.some(n => new Date(n.date) > oneDayAgo);
    },
    
    // Get unread notifications count
    getUnreadCount: function(language) {
        const notifications = this.getNotifications(language);
        return notifications.filter(n => !n.read).length;
    },
    
    // Mark notification as read
    markAsRead: function(notificationId, language) {
        const notifications = this.getNotifications(language);
        const notificationIndex = notifications.findIndex(n => n.id === notificationId);
        
        if (notificationIndex !== -1) {
            notifications[notificationIndex].read = true;
            localStorage.setItem(`AN_notifications_${language}`, JSON.stringify(notifications));
            return true;
        }
        return false;
    },
    
    // Mark all as read
    markAllAsRead: function(language) {
        const notifications = this.getNotifications(language);
        notifications.forEach(n => n.read = true);
        localStorage.setItem(`AN_notifications_${language}`, JSON.stringify(notifications));
    },
    
    // Get notification time ago text
    getTimeAgo: function(dateString, language) {
        const date = new Date(dateString);
        const now = new Date();
        const diffMs = now - date;
        const diffMins = Math.floor(diffMs / 60000);
        const diffHours = Math.floor(diffMs / 3600000);
        const diffDays = Math.floor(diffMs / 86400000);
        
        if (diffMins < 60) {
            return `${diffMins} minute${diffMins !== 1 ? 's' : ''} ago`;
        } else if (diffHours < 24) {
            return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
        } else if (diffDays < 7) {
            return `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;
        } else {
            return AN_formatDate(dateString, language);
        }
    }
};

// Function to render notifications dynamically
function AN_renderNotifications(language) {
    const notificationList = document.getElementById('AN-notification-list');
    const notificationBadge = document.getElementById('AN-notification-badge');
    
    if (!notificationList || !notificationBadge) return;
    
    // Clear existing notifications
    notificationList.innerHTML = '';
    
    // Get notifications from manager
    const notifications = AN_notificationManager.getNotifications(language);
    
    // Update badge with unread count
    const unreadCount = notifications.filter(n => !n.read).length;
    notificationBadge.textContent = unreadCount;
    notificationBadge.style.display = unreadCount > 0 ? 'flex' : 'none';
    
    // If no notifications
    if (notifications.length === 0) {
        const noNotifications = document.createElement('div');
        noNotifications.className = 'AN-no-notifications';
        noNotifications.textContent = AN_translations[language]['An.index.noNotifications'];
        notificationList.appendChild(noNotifications);
        return;
    }
    
    // Render each notification
    notifications.forEach(notification => {
        const notificationItem = document.createElement('div');
        notificationItem.className = `AN-notification-item ${notification.read ? 'AN-notification-read' : ''}`;
        notificationItem.setAttribute('data-id', notification.id);
        
        // Choose icon based on category
        let icon = 'fas fa-globe';
        if (notification.category === 'local') {
            icon = 'fas fa-flag';
        } else if (notification.type === 'news') {
            icon = 'fas fa-newspaper';
        }
        
        notificationItem.innerHTML = `
            <div class="AN-notification-icon">
                <i class="${icon}"></i>
            </div>
            <div class="AN-notification-content">
                <p>${notification.title}</p>
                <span class="AN-notification-time">${AN_notificationManager.getTimeAgo(notification.date, language)}</span>
            </div>
            ${!notification.read ? '<div class="AN-notification-unread-dot"></div>' : ''}
        `;
        
        // Add click event to mark as read
        notificationItem.addEventListener('click', function(e) {
            e.stopPropagation();
            const notificationId = this.getAttribute('data-id');
            AN_markNotificationAsRead(notificationId, language);
        });
        
        notificationList.appendChild(notificationItem);
    });
    
    // Add "Mark all as read" button
    if (notifications.length > 0 && unreadCount > 0) {
        const markAllBtn = document.createElement('button');
        markAllBtn.className = 'AN-mark-all-read-btn';
        markAllBtn.setAttribute('data-i18n', 'An.index.markAllRead');
        markAllBtn.textContent = AN_translations[language]['An.index.markAllRead'];
        markAllBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            AN_notificationManager.markAllAsRead(language);
            AN_renderNotifications(language);
        });
        
        const markAllContainer = document.createElement('div');
        markAllContainer.className = 'AN-notification-footer';
        markAllContainer.appendChild(markAllBtn);
        
        notificationList.appendChild(markAllContainer);
    }
}

// Function to mark a single notification as read
function AN_markNotificationAsRead(notificationId, language) {
    // Update in manager
    AN_notificationManager.markAsRead(notificationId, language);
    
    // Update UI
    const notificationItem = document.querySelector(`.AN-notification-item[data-id="${notificationId}"]`);
    if (notificationItem) {
        notificationItem.classList.add('AN-notification-read');
        const unreadDot = notificationItem.querySelector('.AN-notification-unread-dot');
        if (unreadDot) {
            unreadDot.remove();
        }
        
        // Update badge count
        const badge = document.getElementById('AN-notification-badge');
        let currentCount = parseInt(badge.textContent) || 0;
        if (currentCount > 0) {
            currentCount--;
            badge.textContent = currentCount;
            badge.style.display = currentCount > 0 ? 'flex' : 'none';
        }
    }
}

// Function to render news cards by category
function AN_renderNews(language, category = 'all') {
    const newsContainer = document.getElementById('AN-news-container');
    if (!newsContainer) return;
    
    // Clear existing content
    newsContainer.innerHTML = '';
    
    // Get news data by category
    const newsData = category === 'all' 
        ? AN_data.filter(item => item.type === 'news')
        : AN_data.filter(item => item.type === 'news' && item.category === category);
    
    // If no news found, show message
    if (newsData.length === 0) {
        newsContainer.innerHTML = `<div class="AN-no-news">No news available for this category.</div>`;
        return;
    }
    
    // Render news cards
    newsData.forEach(item => {
        const newsCard = document.createElement('article');
        newsCard.className = 'AN-news-card';
        newsCard.setAttribute('data-id', item.id);
        newsCard.setAttribute('data-category', item.category || 'global');
        
        // Determine which placeholder class to use based on item ID or category
        let placeholderClass = 'AN-james-webb';
        if (item.category === 'local') {
            placeholderClass = item.id === 'news-003' ? 'AN-mars-rover' : 'AN-solar-flare';
        } else {
            if (item.id === 'news-002') placeholderClass = 'AN-mars-rover';
            if (item.id === 'news-005') placeholderClass = 'AN-solar-flare';
        }
        
        const content = item[language] || item.en;
        
        newsCard.innerHTML = `
    <div class="AN-news-image">
        <div class="AN-image-placeholder ${placeholderClass}">
            ${item.image ? `<img src="${item.image}" alt="${content.title}" style="width:100%;height:100%;object-fit:cover;">` : ''}
        </div>
        <div class="AN-news-badge ${item.category === 'local' ? 'AN-local-badge' : 'AN-global-badge'}">
            ${item.category === 'local' ? 'TN' : '🌍'}
        </div>
    </div>
    <div class="AN-news-content">
        <h3 class="AN-news-title">${content.title}</h3>
        <p class="AN-news-excerpt">${content.body.substring(0, 150)}${content.body.length > 150 ? '...' : ''}</p>
        <div class="AN-news-meta">
            <span class="AN-news-date">${AN_formatDate(item.date, language)}</span>
            <a href="#" class="AN-read-more" data-i18n="An.index.readMore">${AN_translations[language]['An.index.readMore']}</a>
        </div>
    </div>
`;
        
        newsContainer.appendChild(newsCard);
    });
}

// Add this CSS for badges in main.css
const badgeStyles = `
    .AN-news-badge {
        position: absolute;
        top: 10px;
        right: 10px;
        background-color: var(--AN-primary-color);
        color: white;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 12px;
        font-weight: bold;
    }
    
    .AN-local-badge {
        background-color: #e74c3c;
    }
    
    .AN-global-badge {
        background-color: #2ecc71;
    }
    
    .AN-news-image {
        position: relative;
    }
`;

// Add badge styles to document
if (document.head) {
    const style = document.createElement('style');
    style.textContent = badgeStyles;
    document.head.appendChild(style);
}

// Function to render events
function AN_renderEvents(language) {
    const eventsContainer = document.getElementById('AN-events-container');
    if (!eventsContainer) return;
    
    // Clear existing content
    eventsContainer.innerHTML = '';
    
    // Get events data
    const eventsData = AN_getDataByType('event');
    
    // Render events
    eventsData.forEach(item => {
        const content = item[language] || item.en;
        
        const eventItem = document.createElement('div');
        eventItem.className = 'AN-event-item';
        eventItem.setAttribute('data-id', item.id);
        
        eventItem.innerHTML = `
            <div class="AN-event-date">
                <span class="AN-event-day">${AN_getDay(item.date)}</span>
                <span class="AN-event-month">${AN_getMonthName(item.date, language)}</span>
            </div>
            <div class="AN-event-details">
                <h3 class="AN-event-title">${content.title}</h3>
                <p class="AN-event-description">${content.body}</p>
            </div>
        `;
        
        eventsContainer.appendChild(eventItem);
    });
}

// Function to apply translations
function AN_applyTranslations(language) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (AN_translations[language] && AN_translations[language][key]) {
            element.textContent = AN_translations[language][key];
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = language;
    
    // Update RTL for Arabic
    if (language === 'ar') {
        document.body.classList.add('AN-rtl');
        document.body.dir = 'rtl';
    } else {
        document.body.classList.remove('AN-rtl');
        document.body.dir = 'ltr';
    }
    
    // Save language preference to localStorage
    localStorage.setItem('AN-language-preference', language);
    
    // Get current category
    const activeCategory = document.querySelector('.AN-category-active')?.getAttribute('data-category') || 'all';
    
    // Render dynamic content with new language
    AN_renderNews(language, activeCategory);
    AN_renderEvents(language);
    AN_renderNotifications(language);
}

// Initialize with saved or default language
document.addEventListener('DOMContentLoaded', function() {
    // Get saved language preference or use default
    const savedLanguage = localStorage.getItem('AN-language-preference') || 'en';
    
    // Apply translations first
    AN_applyTranslations(savedLanguage);
    
    // Handle language change
    const languageSelect = document.getElementById('AN-language-select');
    if (languageSelect) {
        languageSelect.value = savedLanguage;
        languageSelect.addEventListener('change', function() {
            AN_applyTranslations(this.value);
        });
    }
    
    // Handle category button clicks
    const categoryButtons = document.querySelectorAll('.AN-category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('AN-category-active'));
            // Add active class to clicked button
            this.classList.add('AN-category-active');
            
            // Get the category
            const category = this.getAttribute('data-category');
            const language = languageSelect ? languageSelect.value : 'en';
            
            // Render news for selected category
            AN_renderNews(language, category);
        });
    });
    
    // Add RTL styles for Arabic
    const style = document.createElement('style');
    style.textContent = `
        .AN-rtl .AN-section-title:after {
            left: auto;
            right: 0;
        }
        
        .AN-rtl .AN-nav-link:after {
            left: auto;
            right: 0;
        }
        
        .AN-rtl .AN-nav-list {
            padding-right: 0;
        }
        
        .AN-rtl .AN-control-group {
            flex-direction: row-reverse;
        }
        
        .AN-rtl .AN-event-date {
            order: 2;
        }
        
        .AN-rtl .AN-event-details {
            order: 1;
        }
        
        .AN-rtl .AN-header-content {
            direction: rtl;
        }
        
        .AN-rtl .AN-logo-section {
            justify-content: flex-end;
        }
        
        .AN-rtl .AN-options-card {
            justify-content: flex-start;
        }
        
        .AN-rtl .AN-hero {
            flex-direction: row-reverse;
        }
        
        .AN-rtl .AN-news-badge {
            right: auto;
            left: 10px;
        }
        
        .AN-rtl .AN-news-categories {
            direction: rtl;
        }
        
        .AN-rtl .AN-notification-unread-dot {
            right: auto;
            left: 10px;
        }
        
        .AN-rtl .AN-notification-item {
            direction: rtl;
        }
        
        @media (max-width: 768px) {
            .AN-rtl .AN-event-date {
                flex-direction: row-reverse;
            }
            .AN-rtl .AN-hero {
                flex-direction: column-reverse;
            }
        }
    `;
    document.head.appendChild(style);
});