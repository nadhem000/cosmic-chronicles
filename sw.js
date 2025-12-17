/**
 * Service Worker for Cosmic Chronicles
 * Handles caching, offline functionality, and push notifications
 */

const CACHE_NAME = 'universe-chronicles-v1.0.2';
const CACHE_ASSETS = [
    // Core pages
    '/',
    '/index.html',
    '/AN_news.html',
    '/AN_missions.html',
    '/AN_gallery.html',
    '/AN_explore.html',
    '/AN_about.html',
    
    // Core assets
    '/main.css',
    '/data.js',
    '/data_processing.js',
    '/data_explore.js',
    '/data_gallery.js',
    '/data_about.js',
    '/translation.js',
    '/pwa-main.js',
    
    // Manifest
    '/manifest.json',
    
    // Icons
    '/assets/icons/icon-72x72.png',
    '/assets/icons/icon-96x96.png',
    '/assets/icons/icon-128x128.png',
    '/assets/icons/icon-152x152.png',
    '/assets/icons/icon-192x192.png',
    '/assets/icons/icon-384x384.png',
    '/assets/icons/icon-512x512.png',
    
    // Font Awesome (CDN)
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/webfonts/fa-solid-900.woff2',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/webfonts/fa-brands-400.woff2',
    
    // Fallback offline page
    '/offline.html'
];

const DYNAMIC_CACHE = 'universe-chronicles-dynamic-v2';
const API_CACHE = 'universe-chronicles-api-v2';

// Skip waiting and claim clients immediately
self.addEventListener('install', event => {
    console.log('[Service Worker] Installing...');
    
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('[Service Worker] Caching core assets');
                return cache.addAll(CACHE_ASSETS);
            })
            .then(() => {
                console.log('[Service Worker] Install completed');
                return self.skipWaiting();
            })
            .catch(error => {
                console.error('[Service Worker] Install failed:', error);
            })
    );
});

// Activate and clean up old caches
self.addEventListener('activate', event => {
    console.log('[Service Worker] Activating...');
    
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    // Delete old caches
                    if (cacheName !== CACHE_NAME && 
                        cacheName !== DYNAMIC_CACHE && 
                        cacheName !== API_CACHE &&
                        cacheName.startsWith('universe-chronicles-')) {
                        console.log('[Service Worker] Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
        .then(() => {
            console.log('[Service Worker] Activation completed');
            return self.clients.claim();
        })
    );
});

// Fetch event with cache strategies
self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);
    
    // Skip cross-origin requests
    if (url.origin !== self.location.origin) {
        // For CDN resources, use cache-first
        if (url.hostname === 'cdnjs.cloudflare.com') {
            event.respondWith(
                caches.match(event.request)
                    .then(cachedResponse => {
                        if (cachedResponse) {
                            return cachedResponse;
                        }
                        
                        return fetch(event.request)
                            .then(response => {
                                // Don't cache if not successful
                                if (!response || response.status !== 200) {
                                    return response;
                                }
                                
                                // Clone the response
                                const responseToCache = response.clone();
                                
                                caches.open(DYNAMIC_CACHE)
                                    .then(cache => {
                                        cache.put(event.request, responseToCache);
                                    });
                                
                                return response;
                            });
                    })
            );
        }
        return;
    }
    
    // Different strategies for different types of requests
    if (event.request.method === 'GET') {
        // HTML pages - Network First
        if (event.request.headers.get('accept').includes('text/html')) {
            event.respondWith(
                fetch(event.request)
                    .then(response => {
                        // Clone the response
                        const responseClone = response.clone();
                        
                        caches.open(DYNAMIC_CACHE)
                            .then(cache => {
                                cache.put(event.request, responseClone);
                            });
                        
                        return response;
                    })
                    .catch(() => {
                        // Network failed, try cache
                        return caches.match(event.request)
                            .then(cachedResponse => {
                                if (cachedResponse) {
                                    return cachedResponse;
                                }
                                
                                // Return offline page for HTML requests
                                return caches.match('/offline.html');
                            });
                    })
            );
        }
        // CSS, JS, JSON - Cache First
        else if (event.request.url.match(/\.(css|js|json)$/)) {
            event.respondWith(
                caches.match(event.request)
                    .then(cachedResponse => {
                        if (cachedResponse) {
                            // Update cache in background
                            fetch(event.request)
                                .then(response => {
                                    if (response && response.status === 200) {
                                        const responseClone = response.clone();
                                        caches.open(DYNAMIC_CACHE)
                                            .then(cache => {
                                                cache.put(event.request, responseClone);
                                            });
                                    }
                                })
                                .catch(() => {
                                    // Ignore fetch errors for background updates
                                });
                            
                            return cachedResponse;
                        }
                        
                        return fetch(event.request)
                            .then(response => {
                                if (response && response.status === 200) {
                                    const responseClone = response.clone();
                                    caches.open(DYNAMIC_CACHE)
                                        .then(cache => {
                                            cache.put(event.request, responseClone);
                                        });
                                }
                                return response;
                            })
                            .catch(error => {
                                console.error('Failed to fetch:', error);
                                throw error;
                            });
                    })
            );
        }
        // Images - Cache First with update
        else if (event.request.url.match(/\.(png|jpg|jpeg|gif|svg|webp)$/)) {
            event.respondWith(
                caches.match(event.request)
                    .then(cachedResponse => {
                        // Return cached image immediately
                        if (cachedResponse) {
                            // Update cache in background
                            fetch(event.request)
                                .then(response => {
                                    if (response && response.status === 200) {
                                        const responseClone = response.clone();
                                        caches.open(DYNAMIC_CACHE)
                                            .then(cache => {
                                                cache.put(event.request, responseClone);
                                            });
                                    }
                                })
                                .catch(() => {
                                    // Ignore fetch errors
                                });
                            
                            return cachedResponse;
                        }
                        
                        // Not in cache, fetch from network
                        return fetch(event.request)
                            .then(response => {
                                if (response && response.status === 200) {
                                    const responseClone = response.clone();
                                    caches.open(DYNAMIC_CACHE)
                                        .then(cache => {
                                            cache.put(event.request, responseClone);
                                        });
                                }
                                return response;
                            })
                            .catch(error => {
                                console.error('Failed to fetch image:', error);
                                // Return placeholder image for failed image loads
                                return caches.match('/assets/icons/icon-96x96.png');
                            });
                    })
            );
        }
        // API requests - Network First
        else if (event.request.url.includes('/api/')) {
            event.respondWith(
                fetch(event.request)
                    .then(response => {
                        // Clone the response
                        const responseClone = response.clone();
                        
                        caches.open(API_CACHE)
                            .then(cache => {
                                cache.put(event.request, responseClone);
                            });
                        
                        return response;
                    })
                    .catch(() => {
                        // Try cache if network fails
                        return caches.match(event.request);
                    })
            );
        }
        // Default - Network First
        else {
            event.respondWith(
                fetch(event.request)
                    .then(response => {
                        if (response && response.status === 200) {
                            const responseClone = response.clone();
                            caches.open(DYNAMIC_CACHE)
                                .then(cache => {
                                    cache.put(event.request, responseClone);
                                });
                        }
                        return response;
                    })
                    .catch(() => {
                        return caches.match(event.request);
                    })
            );
        }
    }
});

// Background sync for failed requests
self.addEventListener('sync', event => {
    console.log('[Service Worker] Background sync:', event.tag);
    
    if (event.tag === 'sync-news') {
        event.waitUntil(
            syncNews()
                .then(() => {
                    console.log('[Service Worker] News sync completed');
                })
                .catch(error => {
                    console.error('[Service Worker] News sync failed:', error);
                })
        );
    }
});

// Push notification event
self.addEventListener('push', event => {
    console.log('[Service Worker] Push received:', event);
    
    let data = {
        title: 'Cosmic Chronicles',
        body: 'New astronomy update available!',
        icon: '/assets/icons/icon-96x96.png',
        badge: '/assets/icons/icon-96x96.png',
        tag: 'cosmic-update'
    };
    
    if (event.data) {
        try {
            data = event.data.json();
        } catch (error) {
            console.error('[Service Worker] Error parsing push data:', error);
        }
    }
    
    const options = {
        body: data.body,
        icon: data.icon || '/assets/icons/icon-96x96.png',
        badge: data.badge || '/assets/icons/icon-96x96.png',
        tag: data.tag || 'cosmic-update',
        data: data.data || {},
        actions: data.actions || [
            {
                action: 'view',
                title: 'View'
            },
            {
                action: 'dismiss',
                title: 'Dismiss'
            }
        ],
        requireInteraction: data.requireInteraction || false,
        vibrate: data.vibrate || [200, 100, 200],
        timestamp: data.timestamp || Date.now()
    };
    
    event.waitUntil(
        self.registration.showNotification(data.title, options)
    );
});

// Notification click event
self.addEventListener('notificationclick', event => {
    console.log('[Service Worker] Notification click:', event.notification.tag);
    
    event.notification.close();
    
    const urlToOpen = event.notification.data?.url || '/';
    
    event.waitUntil(
        clients.matchAll({
            type: 'window',
            includeUncontrolled: true
        })
        .then(clientList => {
            // Check if there's already a window/tab open with the target URL
            for (const client of clientList) {
                if (client.url === urlToOpen && 'focus' in client) {
                    return client.focus();
                }
            }
            
            // If not, open a new window/tab
            if (clients.openWindow) {
                return clients.openWindow(urlToOpen);
            }
        })
    );
});

// Notification close event
self.addEventListener('notificationclose', event => {
    console.log('[Service Worker] Notification closed:', event.notification.tag);
});

// Message event for communication with pages
self.addEventListener('message', event => {
    console.log('[Service Worker] Message received:', event.data);
    
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
    
    if (event.data && event.data.type === 'CACHE_NEWS') {
        event.waitUntil(
            cacheNewsData(event.data.news)
        );
    }
    
    if (event.data && event.data.type === 'GET_CACHE_INFO') {
        event.ports[0].postMessage({
            type: 'CACHE_INFO',
            cacheNames: Array.from(caches.keys())
        });
    }
});

// Periodic background sync (if supported)
if (self.registration && self.registration.periodicSync) {
    self.registration.periodicSync.register('news-update', {
        minInterval: 6 * 60 * 60 * 1000 // 6 hours
    }).catch(error => {
        console.error('[Service Worker] Periodic sync registration failed:', error);
    });
}

// Helper functions
async function syncNews() {
    try {
        const response = await fetch('/api/latest-news');
        if (response.ok) {
            const news = await response.json();
            await cacheNewsData(news);
            
            // Show notification for new news
            self.registration.showNotification('Cosmic Chronicles', {
                body: `New ${news.length} astronomy articles available`,
                icon: '/assets/icons/icon-96x96.png',
                tag: 'news-update'
            });
        }
    } catch (error) {
        console.error('[Service Worker] Sync news error:', error);
        throw error;
    }
}

async function cacheNewsData(news) {
    const cache = await caches.open(API_CACHE);
    
    // Cache each news item
    for (const item of news) {
        const url = `/api/news/${item.id}`;
        const response = new Response(JSON.stringify(item), {
            headers: { 'Content-Type': 'application/json' }
        });
        
        await cache.put(url, response);
    }
    
    // Cache the news list
    const listResponse = new Response(JSON.stringify(news), {
        headers: { 'Content-Type': 'application/json' }
    });
    
    await cache.put('/api/latest-news', listResponse);
}

// Background fetch for large files
self.addEventListener('backgroundfetchsuccess', event => {
    console.log('[Service Worker] Background fetch succeeded:', event.registration.id);
    
    event.updateUI({ title: 'Download complete' });
});

self.addEventListener('backgroundfetchfail', event => {
    console.log('[Service Worker] Background fetch failed:', event.registration.id);
    
    event.updateUI({ title: 'Download failed' });
});

// Precache important pages on first load
self.addEventListener('message', async (event) => {
    if (event.data.type === 'PRECACHE_PAGES') {
        const cache = await caches.open(CACHE_NAME);
        const pages = [
            '/AN_news.html',
            '/AN_gallery.html',
            '/AN_explore.html'
        ];
        
        for (const page of pages) {
            try {
                await cache.add(page);
            } catch (error) {
                console.warn(`[Service Worker] Failed to precache ${page}:`, error);
            }
        }
        
        event.ports[0].postMessage({ type: 'PRECACHE_COMPLETE' });
    }
});

console.log('[Service Worker] Loaded successfully');