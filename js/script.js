const translations = {
    en: {
        nav_about: "About",
        nav_stack: "Stack",
        nav_projects: "Projects",
        hero_title: "Toine GUMUS",
        hero_subtitle: "Programming, Electronics & Cybersecurity",
        hero_desc: "From soldering microcontrollers to analyzing oscilloscope signals, designing PCBs, and diving into cybersecurity in a fully self-hosted home lab. Bridging the gap between hardware and software.",
        hero_btn: "View Projects",
        contact_btn: "Contact",
        contact_title: "Get In Touch",
        stack_title: "Technologies I Use",
        projects_title: "Featured Builds",
        tag_hw: "Hardware",
        tag_electronics: "Electronics",
        tag_sysadmin: "SysAdmin",
        tag_cyber: "Cybersecurity",
        tag_sw: "Software",
        tag_signal: "Signal Analysis",
        tag_network: "Network",
        tag_python: "Python",
        tag_dashboard: "Dashboard",
        tag_storage: "Storage",
        p1_title: "Home Lab",
        p1_desc: "A scalable Raspberry Pi setup serving self-hosted applications and websites securely.",
        p2_title: "WiFi Pineapple DIY",
        p2_desc: "A DIY WiFi Pineapple built with a GL.iNet Shadow router for network auditing and penetration testing.",
        p3_title: "Bruce Device",
        p3_desc: "A custom pentesting hardware tool created using the open-source 'bruce' firmware for ESP32.",
        p4_title: "Encrypted NAS",
        p4_desc: "A custom Network Attached Storage utilizing 4 encrypted HDDs, accessible via a WebUI running on a Raspberry Pi.",
        p5_title: "DashboardPi",
        p5_desc: "A Flask-based (Python) dashboard displaying real-time metrics including Raspberry Pi temp, room temp, network traffic, and disk states.",
        p6_title: "Tennis Access",
        p6_desc: "A school project where I chose to develop an access control system featuring a website to generate QR codes, scanned by an external Python script using OpenCV to unlock a gate.",
        footer_text: "Portfolio - Toine GUMUS",
        video_credit: "Cinematic footage by <a href='https://instagram.com/toprakyapici' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>Toprak YAPICI</a>",
        stack_python: "Python",
        stack_c: "C",
        stack_cpp: "C++",
        stack_js: "JavaScript",
        stack_rpi: "Raspberry Pi",
        stack_linux: "Linux",
        stack_bash: "Bash",
        stack_arduino: "Arduino",
        stack_kicad: "PCB Design",
        stack_osc: "Oscilloscopes",
        stack_docker: "Docker",
        stack_3d: "3D Printing"
    },
    fr: {
        nav_about: "À propos",
        nav_stack: "Stack",
        nav_projects: "Projets",
        hero_title: "Toine GUMUS",
        hero_subtitle: "Programmation, Électronique & Cybersécurité",
        hero_desc: "De la soudure de microcontrôleurs à l'analyse de signaux sur oscilloscope, la conception de PCB, et l'exploration de la cybersécurité dans un home lab auto-hébergé. Faire le pont entre matériel et logiciel.",
        hero_btn: "Voir les Projets",
        contact_btn: "Contact",
        contact_title: "Me Contacter",
        stack_title: "Technologies Utilisées",
        projects_title: "Réalisations Principales",
        tag_hw: "Matériel",
        tag_electronics: "Électronique",
        tag_sysadmin: "SysAdmin",
        tag_cyber: "Cybersécurité",
        tag_sw: "Logiciel",
        tag_signal: "Analyse de Signal",
        tag_network: "Réseau",
        tag_python: "Python",
        tag_dashboard: "Tableau de bord",
        tag_storage: "Stockage",
        p1_title: "Home Lab",
        p1_desc: "Une installation Raspberry Pi évolutive hébergeant des applications sécurisées et des sites web.",
        p2_title: "WiFi Pineapple DIY",
        p2_desc: "Un WiFi Pineapple DIY fabriqué à partir d'un routeur GL.iNet Shadow pour l'audit réseau et les tests d'intrusion.",
        p3_title: "Appareil Bruce",
        p3_desc: "Outil matériel de pentest personnalisé créé avec le firmware open-source 'bruce' pour ESP32.",
        p4_title: "NAS Chiffré",
        p4_desc: "Un serveur de stockage en réseau (NAS) utilisant 4 disques durs chiffrés, accessible via une interface web sur un Raspberry Pi.",
        p5_title: "DashboardPi",
        p5_desc: "Un tableau de bord en Flask (Python) affichant des métriques en temps réel comme la température du Raspberry Pi, la température ambiante, le trafic réseau et l'état des disques.",
        p6_title: "Tennis Access",
        p6_desc: "Projet réalisé en classe : j'ai choisi de concevoir un système de contrôle d'accès avec un site web pour générer des QR codes, scannés par un script Python externe avec OpenCV pour ouvrir un portail.",
        footer_text: "Portfolio - Toine GUMUS",
        video_credit: "Images cinématiques par <a href='https://instagram.com/toprakyapici' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>Toprak YAPICI</a>",
        stack_python: "Python",
        stack_c: "C",
        stack_cpp: "C++",
        stack_js: "JavaScript",
        stack_rpi: "Raspberry Pi",
        stack_linux: "Linux",
        stack_bash: "Bash",
        stack_arduino: "Arduino",
        stack_kicad: "Conception PCB",
        stack_osc: "Oscilloscopes",
        stack_docker: "Docker",
        stack_3d: "Impression 3D"
    }
};

document.addEventListener('DOMContentLoaded', () => {


    const heroVideo = document.querySelector('.hero-video');
    if (heroVideo) {
        heroVideo.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play().catch(e => console.log("Hero video autoplay prevented:", e));
        }, false);
    }

    const tracks = document.querySelectorAll('.carousel-track');
    tracks.forEach(track => {

        const items = Array.from(track.children);
        items.forEach(item => {
            const clone = item.cloneNode(true);
            clone.setAttribute('aria-hidden', 'true');
            track.appendChild(clone);
        });


        track.addEventListener('mouseenter', () => {
            track.getAnimations().forEach(anim => anim.playbackRate = 0.2);
        });
        track.addEventListener('mouseleave', () => {
            track.getAnimations().forEach(anim => anim.playbackRate = 1);
        });
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' 
    };

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    document.querySelectorAll('a.nav-link[href^="#"], a.btn[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });



    const navbar = document.querySelector('.navbar');
    const scrollThreshold = 50;

    function updateNavbar() {
        if (window.scrollY > scrollThreshold) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', updateNavbar, { passive: true });
    document.querySelectorAll('.nav-link, .btn').forEach(el => {
        el.addEventListener('click', () => navbar.classList.add('scrolled'));
    });
    updateNavbar();


    const langBtn = document.getElementById('lang-btn');
    const i18nElements = document.querySelectorAll('[data-i18n]');

    function setLanguage(lang) {
        i18nElements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });


        if (lang === 'en') {
            langBtn.textContent = 'FR';
            langBtn.setAttribute('data-lang', 'en'); 
        } else {
            langBtn.textContent = 'EN';
            langBtn.setAttribute('data-lang', 'fr');
        }
    }

    if (langBtn) {
        langBtn.addEventListener('click', () => {
            const currentLang = langBtn.getAttribute('data-lang');

            const newLang = (currentLang === 'en') ? 'fr' : 'en';
            setLanguage(newLang);
        });
    }


    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinksList = document.querySelectorAll('.nav-link');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        navLinksList.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        

        if (langBtn) {
            langBtn.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        }
    }


    document.querySelectorAll('.project-card').forEach(card => {
        const video = card.querySelector('.hover-video-container video');
        if (video) {
            card.addEventListener('mouseenter', () => {
                video.play().catch(e => console.log("Autoplay prevented:", e));
            });
            card.addEventListener('mouseleave', () => {
                video.pause();
                video.currentTime = 0;
            });
        }
    });


    const mediaModal = document.getElementById('media-modal');
    const modalImage = document.getElementById('modal-image');
    const modalVideo = document.getElementById('modal-video');
    const modalClose = document.getElementById('modal-close');

    function openMediaModal(src, isVideo) {
        if (isVideo) {
            modalVideo.src = src;
            modalVideo.style.display = 'block';
            modalImage.style.display = 'none';
            modalVideo.play().catch(e => console.log("Modal play prevented:", e));
        } else {
            modalImage.src = src;
            modalImage.style.display = 'block';
            modalVideo.style.display = 'none';
        }
        mediaModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMediaModal() {
        mediaModal.classList.remove('active');
        document.body.style.overflow = '';
        modalVideo.pause();
        modalVideo.src = '';
        modalImage.src = '';
    }

    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', (e) => {

            const video = card.querySelector('video.hover-media');
            const img = card.querySelector('img');

            if (video) {
                openMediaModal(video.getAttribute('src'), true);
            } else if (img) {
                openMediaModal(img.getAttribute('src'), false);
            }
        });
    });

    if (modalClose) {
        modalClose.addEventListener('click', closeMediaModal);
    }

    if (mediaModal) {
        mediaModal.addEventListener('click', (e) => {
            if (e.target === mediaModal) {
                closeMediaModal();
            }
        });
    }


    const contactBtn = document.getElementById('contact-btn');
    const contactModal = document.getElementById('contact-modal');
    const contactClose = document.getElementById('contact-close');

    function openContactModal() {
        contactModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeContactModal() {
        contactModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (contactBtn) {
        contactBtn.addEventListener('click', openContactModal);
    }
    
    if (contactClose) {
        contactClose.addEventListener('click', closeContactModal);
    }

    if (contactModal) {
        contactModal.addEventListener('click', (e) => {
            if (e.target === contactModal) {
                closeContactModal();
            }
        });
    }


    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (mediaModal && mediaModal.classList.contains('active')) {
                closeMediaModal();
            }
            if (contactModal && contactModal.classList.contains('active')) {
                closeContactModal();
            }
        }
    });
});
