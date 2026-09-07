(function () {
    const N8N_WEBHOOK_URL = 'https://tu-webhook-n8n.com/i18n';
    const LANG_STORAGE_KEY = 'portfolio-lang';

    const MOCK_EN = {
        'page-title': 'Home',
        'nav-home': 'Home',
        'nav-experience': 'Experience',
        'nav-education': 'Education',
        'nav-certificates': 'Certificates',
        'nav-projects': 'Projects',
        'nav-contact': 'Contact',
        'nav-translate': 'Translate',
        'nav-lang-en': 'English',
        'nav-lang-es': 'Spanish',
        'hero-title': 'Hi, I am',
        'hero-bio': 'I am a Systems and Computer Networks Engineering student. Throughout my path I have built a strong passion for end-to-end solutions, from web and mobile interfaces to robust backend architectures, working on projects that demand agile methods and complex problem solving.',
        'btn-cv': 'My CV',
        'title-my': 'My',
        'title-edu': 'Education',
        'title-exp': 'Experience',
        'title-experience': 'Experience',
        'title-journey': 'Journey',
        'title-certificates': 'Certificates',
        'title-badges': '& Badges',
        'title-projects': 'Projects',
        'title-contact': 'Contact',
        'title-contact-me': 'me',
        'exp-tools': 'Tools & Agile',
        'contact-placeholder-name': 'Full name',
        'contact-placeholder-email': 'Email address',
        'contact-placeholder-phone': 'Phone number',
        'contact-placeholder-subject': 'Email subject',
        'contact-placeholder-message': 'Write a message',
        'btn-send': 'Send',
        'btn-view-project': 'View Project',
        'btn-in-progress': 'In Progress',
        'edu-1-desc': 'Foundations in logic, mathematics and administrative principles for structured thinking.',
        'edu-2-desc': 'Comprehensive training in software engineering, network architecture, databases and algorithmic problem solving.',
        'edu-3-desc': 'Intensive bootcamp focused on modern web technologies, interface design and collaborative working methods.',
        'edu-4-desc': 'Systems architecture and development of the ALTRATO app with agile frameworks.',
        'project-innovation-title': 'Innovation 3D',
        'project-innovation-desc': 'A web app built to offer 3D printing services such as prototyping and small-to-medium production runs, with a calculator so you can shape your design as you like. It includes advanced customization tools and cost estimation.',
        'project-innovation-stack': 'This site was built with Python and Flask, a Python framework for creating web apps quickly with minimal code. MySQL stores the 3D designs. The UI uses HTML, Bootstrap and a touch of CSS.',
        'project-localwonder-title': 'Local Wonder SV',
        'project-localwonder-desc': 'A web app for beauty salons to offer products and services in a simple way, so clients can see everything a salon provides.',
        'project-localwonder-stack': 'This site was built with PHP and MySQL to store salon, user, product and appointment data. The UI uses HTML, Bootstrap and a touch of CSS.',
        'project-arca-title': 'Arca Acces',
        'project-arca-desc': 'An online store that offers a wide range of products, with a focus on phone accessories and a simple, intuitive shopping experience.',
        'project-arca-stack': 'This site was built with PHP and Laravel, an open-source PHP framework. MySQL stores products and purchase records. The UI uses HTML, Bootstrap and a touch of CSS.',
        'project-legal-title': 'Legal Chronocli',
        'project-legal-desc': 'A web app for complete legal document management and hearing scheduling, with a strong focus on security, confidentiality and data protection.',
        'project-bibliotech-title': 'Bibliotech',
        'project-bibliotech-desc': 'Bibliotech is a complete system for managing library resources. It lets you administer books, authors and categories, and run advanced searches in an efficient, organized way.',
        'project-hitspoke-title': 'HitsPoke',
        'project-hitspoke-desc': 'An online store for Pokémon fans, offering exclusive products from the Pokémon universe. From action figures to cards, HitsPoke is a destination for collectors and enthusiasts.',
        'project-hitspoke-stack': 'Screenshot gallery of the HitsPoke e-commerce store.',
        'project-altrato-title': 'ALTRATO',
        'project-altrato-desc': '',
        'project-altrato-stack': '',
        'project-servicell-title': 'Servicell',
        'project-servicell-desc': 'A web app for managing inventory in a small phone-repair and accessories business. It tracks stock and finances so the owner has a clear view of the economic situation.',
        'project-servicell-shot-1': 'Sign in',
        'project-servicell-shot-2': 'Statistics dashboard',
        'project-servicell-shot-2-1': 'Repair and warranty charts',
        'project-servicell-shot-3': 'Inventory categories',
        'project-servicell-shot-4': 'Repair center',
        'project-servicell-shot-5': 'Inventory by category',
        'project-servicell-shot-5-1': 'Sale confirmation',
        'project-servicell-shot-6': 'Lost items',
        'project-servicell-shot-7': 'Product inventory',
        'project-servicell-shot-8': 'Product details form',
        'project-servicell-shot-9': 'Warranty panel',
        'project-servicell-shot-10': 'Add-warranty form',
        'project-innovation-shot-home': 'Home page',
        'project-innovation-shot-models': '3D models section',
        'project-innovation-shot-materials': 'Materials section',
        'project-innovation-shot-contact': 'Contact section',
        'project-innovation-shot-calculator': '3D design price calculator',
        'project-innovation-shot-admin': '3D model administration',
        'project-innovation-shot-login': 'Admin login',
        'project-localwonder-shot-salons': 'Salon catalog home',
        'project-localwonder-shot-profile': 'Salon profile',
        'project-localwonder-shot-services': 'Salon services',
        'project-localwonder-shot-salon-products': 'Salon products',
        'project-localwonder-shot-products': 'All-salon product catalog',
        'project-localwonder-shot-product-detail': 'Product details',
        'project-localwonder-shot-courses': 'Beauty courses catalog',
        'project-localwonder-shot-login-salon': 'Salon login',
        'project-localwonder-shot-login-user': 'User login',
        'project-localwonder-shot-welcome': 'Welcome notification after salon login',
        'project-localwonder-shot-appointments': 'Reserved appointments table',
        'project-localwonder-shot-manage-services': 'Salon service management',
        'project-localwonder-shot-manage-products': 'Salon product management',
        'project-localwonder-shot-chat': 'Chat between users and salons',
        'project-arca-shot-catalog': 'Product catalog home',
        'project-arca-shot-cart': 'Shopping cart',
        'project-arca-shot-login': 'Sign in',
        'project-arca-shot-payment': 'Payment options',
        'project-arca-shot-admin': 'Product administration',
        'project-arca-shot-orders': 'User purchase list',
        'project-legal-shot-login': 'Sign in',
        'project-legal-shot-calendar': 'Interactive calendar',
        'project-legal-shot-hearing': 'Scheduled hearing',
        'project-legal-shot-task': 'Scheduled task',
        'project-legal-shot-docs': 'Document management',
        'project-legal-shot-sentences': 'Sentence document management',
        'project-legal-shot-sentence-form': 'Sentence form',
        'project-legal-shot-hearings': 'Hearing scheduling',
        'project-legal-shot-hearing-form': 'Hearing form',
        'project-legal-shot-tasks': 'Tasks section',
        'project-legal-shot-task-form': 'Task form',
        'project-hitspoke-shot-login': 'Login',
        'project-hitspoke-shot-register': 'Register',
        'project-hitspoke-shot-catalog': 'Main catalog',
        'project-hitspoke-shot-product': 'Product details',
        'project-hitspoke-shot-comments': 'Product comments',
        'project-hitspoke-shot-admin': 'Administration',
        'project-bibliotech-shot-1': 'Home and quick actions',
        'project-bibliotech-shot-2': 'System statistics and features',
        'project-bibliotech-shot-3': 'Book management',
        'project-bibliotech-shot-4': 'Add-book form',
        'project-bibliotech-shot-4-1': 'Book authors, categories and description',
        'project-bibliotech-shot-5': 'Advanced book search',
        'project-bibliotech-shot-6': 'Author management',
        'project-bibliotech-shot-7': 'Category management',
        'project-bibliotech-shot-8': 'Full book catalog'
    };

    const defaultNodes = [];
    let currentDictionary = null;

    function isFormField(element) {
        return element.tagName === 'INPUT' || element.tagName === 'TEXTAREA';
    }

    function captureDefaults() {
        defaultNodes.length = 0;
        document.querySelectorAll('[data-i18n]').forEach(function (element) {
            defaultNodes.push({
                element: element,
                isField: isFormField(element),
                value: isFormField(element) ? element.placeholder : element.textContent
            });
        });
    }

    function applyDictionary(dictionary) {
        if (!dictionary || typeof dictionary !== 'object') {
            return;
        }

        document.querySelectorAll('[data-i18n]').forEach(function (element) {
            const key = element.getAttribute('data-i18n');
            if (!Object.prototype.hasOwnProperty.call(dictionary, key)) {
                return;
            }

            const value = dictionary[key];
            if (isFormField(element)) {
                element.placeholder = value;
            } else {
                element.textContent = value;
            }
        });
    }

    function restoreDefaults() {
        currentDictionary = null;
        defaultNodes.forEach(function (node) {
            if (node.isField) {
                node.element.placeholder = node.value;
            } else {
                node.element.textContent = node.value;
            }
        });
        document.documentElement.lang = 'es';
    }

    function notifyLanguageChange() {
        document.dispatchEvent(new CustomEvent('portfolio:langchange'));
    }

    async function updateLanguage(lang) {
        if (lang === 'espanol') {
            restoreDefaults();
            localStorage.setItem(LANG_STORAGE_KEY, 'espanol');
            notifyLanguageChange();
            return;
        }

        if (lang !== 'ingles') {
            return;
        }

        let dictionary;

        try {
            const response = await fetch(N8N_WEBHOOK_URL);

            if (!response.ok) {
                throw new Error('Webhook n8n no disponible (' + response.status + ')');
            }

            dictionary = await response.json();
        } catch (error) {
            console.warn('n8n webhook unavailable, using local mock.', error);
            dictionary = MOCK_EN;
        }

        currentDictionary = dictionary;
        applyDictionary(dictionary);
        document.documentElement.lang = 'en';
        localStorage.setItem(LANG_STORAGE_KEY, 'ingles');
        notifyLanguageChange();
    }

    function init() {
        const langSelect = document.getElementById('miSelect');
        if (!langSelect) {
            return;
        }

        captureDefaults();

        langSelect.addEventListener('change', function (event) {
            updateLanguage(event.target.value);
        });

        const savedLang = localStorage.getItem(LANG_STORAGE_KEY);
        if (savedLang === 'ingles' || savedLang === 'espanol') {
            langSelect.value = savedLang;
            updateLanguage(savedLang);
        }
    }

    window.portfolioI18n = {
        applyDictionary: applyDictionary,
        getDictionary: function () {
            return currentDictionary;
        }
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
