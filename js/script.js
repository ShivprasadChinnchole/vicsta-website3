document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initJoinButtons();
    initSmoothScrolling();
    initScrollIndicator();
    initWorkingAnimations();
    initFinalTouchups();
});

function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    });
}

function initJoinButtons() {
    const joinButtons = document.querySelectorAll('a[href="#join"], .btn[href="#join"]');
    
    joinButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const joinSection = document.getElementById('join');
            if (joinSection) {
                const offsetTop = joinSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').substring(1);
            if (targetId === 'join') return;
            
            e.preventDefault();
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                if (targetId === 'about') {
                    setTimeout(() => {
                        triggerHODTyping();
                    }, 1000);
                }
            }
        });
    });
}

function initScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (scrollIndicator) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                scrollIndicator.style.opacity = '0';
            } else {
                scrollIndicator.style.opacity = '1';
            }
        });
        
        scrollIndicator.addEventListener('click', () => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}

function initWorkingAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                if (entry.target.classList.contains('achievement-card')) {
                    entry.target.style.transform = 'translateY(0) scale(1)';
                }
            }
        });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.section-header, .achievement-card, .join-visual, .hod-message');
    
    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease-out';
        
        if (element.classList.contains('achievement-card')) {
            element.style.transform = 'translateY(30px) scale(0.95)';
        }
        
        observer.observe(element);
    });

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                setTimeout(() => {
                    targetSection.classList.add('section-animate');
                    setTimeout(() => {
                        targetSection.classList.remove('section-animate');
                    }, 800);
                }, 500);
            }
        });
    });

    const achievementCards = document.querySelectorAll('.achievement-card');
    achievementCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px) scale(1.03)';
            card.style.boxShadow = '0 20px 40px rgba(102, 126, 234, 0.3)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = '';
        });
    });

    const floatingElements = document.querySelectorAll('.floating-element');
    floatingElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.5}s`;
    });
}

function initFinalTouchups() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);

    // Enhanced cursor effects for interactive elements
    const interactiveElements = document.querySelectorAll('button, .btn, .nav-link, .achievement-card, .footer-social-link, .hero-social-link');
    interactiveElements.forEach(element => {
        element.style.cursor = 'pointer';
        element.style.transition = 'all 0.3s ease';
    });

    // Subtle parallax effect for hero background
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroBackground = document.querySelector('.hero-background');
        if (heroBackground && scrolled < window.innerHeight) {
            heroBackground.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });

    // Professional button hover effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'translateY(-2px)';
            btn.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.4)';
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translateY(0)';
            btn.style.boxShadow = '';
        });
    });

    // Add professional typing effect to hero text (optional)
    const heroDescription = document.querySelector('.hero-description');
    if (heroDescription) {
        const originalText = heroDescription.textContent;
        heroDescription.textContent = '';
        
        setTimeout(() => {
            let i = 0;
            const typeWriter = () => {
                if (i < originalText.length) {
                    heroDescription.textContent += originalText.charAt(i);
                    i++;
                    setTimeout(typeWriter, 30);
                }
            };
            typeWriter();
        }, 1000);
    }

    // Add typing effect to HOD quote
    const hodQuote = document.querySelector('#hod-quote-text');
    if (hodQuote) {
        const originalQuoteText = hodQuote.textContent;
        
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const quoteObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hodQuote.classList.contains('typed')) {
                    hodQuote.classList.add('typed');
                    hodQuote.style.userSelect = 'none';
                    hodQuote.style.pointerEvents = 'none';
                    hodQuote.textContent = '';
                    
                    setTimeout(() => {
                        let i = 0;
                        const typeQuote = () => {
                            if (i < originalQuoteText.length) {
                                hodQuote.textContent += originalQuoteText.charAt(i);
                                i++;
                                setTimeout(typeQuote, 25);
                            } else {
                                hodQuote.style.userSelect = 'text';
                                hodQuote.style.pointerEvents = 'auto';
                            }
                        };
                        typeQuote();
                    }, 500);
                }
            });
        }, observerOptions);
        
        quoteObserver.observe(hodQuote);
    }

    window.triggerHODTyping = function() {
        const hodQuote = document.querySelector('#hod-quote-text');
        if (hodQuote && !hodQuote.classList.contains('typed')) {
            const originalQuoteText = "We firmly believe that our engineers will become valuable assets—not just to our institution and the organizations they join, but also to the nation. In addition to strong academic foundations, we equip our students with the skills needed to face real-world challenges through various value-added courses that boost their career prospects. Our state-of-the-art infrastructure, dedicated and experienced faculty, and strong emphasis on quality education foster meaningful interaction among students, parents, and staff. Furthermore, our proactive Training & Placement Cell plays a key role in securing a promising future for our students.";
            
            hodQuote.classList.add('typed');
            hodQuote.style.userSelect = 'none';
            hodQuote.style.pointerEvents = 'none';
            hodQuote.textContent = '';
            
            setTimeout(() => {
                let i = 0;
                const typeQuote = () => {
                    if (i < originalQuoteText.length) {
                        hodQuote.textContent += originalQuoteText.charAt(i);
                        i++;
                        setTimeout(typeQuote, 25);
                    } else {
                        hodQuote.style.userSelect = 'text';
                        hodQuote.style.pointerEvents = 'auto';
                    }
                };
                typeQuote();
            }, 500);
        }
    };

    const socialLinks = document.querySelectorAll('.hero-social-link, .footer-social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'scale(1.1) rotate(5deg)';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'scale(1) rotate(0deg)';
        });
    });

    const createScrollProgress = () => {
        const progressBar = document.createElement('div');
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
            z-index: 9999;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(progressBar);

        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            progressBar.style.width = scrollPercent + '%';
        });
    };
    
    createScrollProgress();
}
