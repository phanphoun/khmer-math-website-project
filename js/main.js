/**
 * Khmer Math Website - Main JavaScript
 * Handles all interactive features and functionality
 */

// DOM Elements
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const cardsGrid = document.querySelector('.cards-grid');
const navbar = document.querySelector('.navbar');
const backToTopBtn = document.createElement('button');

// Sample data for popular lessons (you can replace with your actual data)
const popularLessons = [
    {
        id: 1,
        title: 'លេខគណិតវិទ្យា',
        description: 'សិក្សាអំពីលេខគត់ លេខទសភាគ និងប្រភាគ',
        image: 'images/numbers.jpg',
        type: 'មេរៀន',
        duration: '30 នាទី',
        level: 'ថ្នាក់ទី១',
        rating: 4.8,
        students: 1245
    },
    {
        id: 2,
        title: 'សមីការដឺក្រេទី១',
        description: 'រៀនពីរបៀបដោះស្រាយសមីការដឺក្រេទី១',
        image: 'images/equations.jpg',
        type: 'លំហាត់',
        duration: '45 នាទី',
        level: 'ថ្នាក់ទី២',
        rating: 4.5,
        students: 987
    },
    {
        id: 3,
        title: 'ធរណីមាត្រ',
        description: 'សិក្សាអំពីរាងធរណីមាត្រមូលដ្ឋាន',
        image: 'images/geometry.jpg',
        type: 'មេរៀន',
        duration: '40 នាទី',
        level: 'ថ្នាក់ទី៣',
        rating: 4.9,
        students: 1567
    }
];

// ======================
// Mobile Navigation
// ======================
function initMobileMenu() {
    if (!menuToggle || !navMenu) return;
    
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    // Toggle mobile menu
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar') && navMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });
    
    // Close menu when clicking a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', () => closeMobileMenu());
    });
    
    // Close mobile menu function
    function closeMobileMenu() {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
}

// ======================
// Sticky Header
// ======================
function initStickyHeader() {
    if (!navbar) return;
    
    let lastScroll = 0;
    const headerHeight = navbar.offsetHeight;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            navbar.classList.remove('scrolled');
            return;
        }
        
        if (currentScroll > lastScroll && currentScroll > headerHeight) {
            // Scrolling down
            navbar.classList.add('scrolled-down');
            navbar.classList.remove('scrolled-up');
        } else {
            // Scrolling up
            navbar.classList.add('scrolled-up');
            navbar.classList.remove('scrolled-down');
        }
        
        navbar.classList.add('scrolled');
        lastScroll = currentScroll;
    });
}

// ======================
// Back to Top Button
// ======================
function initBackToTop() {
    // Create button if it doesn't exist
    if (!document.querySelector('.back-to-top')) {
        backToTopBtn.className = 'back-to-top';
        backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        backToTopBtn.setAttribute('aria-label', 'Back to top');
        document.body.appendChild(backToTopBtn);
    }
    
    // Show/hide button based on scroll position
    function toggleBackToTop() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    }
    
    // Scroll to top when clicked
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Listen for scroll events
    window.addEventListener('scroll', toggleBackToTop);
    toggleBackToTop();
}

// ======================
// Smooth Scrolling
// ======================
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Don't prevent default for empty hashes
            if (targetId === '#') return;
            
            e.preventDefault();
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Update URL without jumping
                history.pushState(null, null, targetId);
            }
        });
    });
}

// ======================
// Active Navigation Link
// ======================
function setActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    
    function updateActiveLink() {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLink?.classList.add('active');
            } else {
                navLink?.classList.remove('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();
}

// ======================
// Load Popular Lessons
// ======================
function loadPopularLessons() {
    if (!cardsGrid) return;
    
    cardsGrid.innerHTML = popularLessons.map(lesson => `
        <div class="card animate-on-scroll" data-aos="fade-up" data-aos-delay="${lesson.id * 100}">
            <div class="card-image">
                <img src="${lesson.image}" alt="${lesson.title}" loading="lazy">
                <span class="card-level">${lesson.level}</span>
                <div class="card-overlay">
                    <a href="lesson-detail.html?id=${lesson.id}" class="btn btn-primary">ចាប់ផ្តើមរៀន</a>
                </div>
            </div>
            <div class="card-content">
                <div class="card-header">
                    <span class="badge">${lesson.type}</span>
                    <div class="card-rating">
                        <i class="fas fa-star"></i> ${lesson.rating}
                        <span>(${lesson.students.toLocaleString()})</span>
                    </div>
                </div>
                <h3><a href="lesson-detail.html?id=${lesson.id}">${lesson.title}</a></h3>
                <p>${lesson.description}</p>
                <div class="card-meta">
                    <span><i class="far fa-clock"></i> ${lesson.duration}</span>
                    <a href="lesson-detail.html?id=${lesson.id}" class="btn btn-outline btn-sm">អានបន្ត <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    `).join('');
}

// ======================
// Animations on Scroll
// ======================
function initScrollAnimations() {
    // Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }
    
    // Fallback animation for elements with animate-on-scroll class
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    function checkIfInView() {
        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('animate');
            }
        });
    }
    
    window.addEventListener('scroll', checkIfInView);
    checkIfInView();
}

// ======================
// Form Validation
// ======================
function initFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        
        // Add validation classes on input
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                if (input.value.trim() !== '') {
                    input.classList.remove('error');
                    const errorMsg = input.nextElementSibling;
                    if (errorMsg && errorMsg.classList.contains('error-message')) {
                        errorMsg.remove();
                    }
                }
            });
        });
        
        // Form submission
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;
            
            // Validate required fields
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add('error');
                    
                    // Add error message if not exists
                    if (!input.nextElementSibling || !input.nextElementSibling.classList.contains('error-message')) {
                        const errorMsg = document.createElement('div');
                        errorMsg.className = 'error-message';
                        errorMsg.textContent = 'សូមបំពេញព័ត៌មានផ្នែកនេះ';
                        input.parentNode.insertBefore(errorMsg, input.nextSibling);
                    }
                }
                
                // Email validation
                if (input.type === 'email' && !isValidEmail(input.value.trim())) {
                    isValid = false;
                    input.classList.add('error');
                    
                    const errorMsg = document.createElement('div');
                    errorMsg.className = 'error-message';
                    errorMsg.textContent = 'សូមបញ្ចូលអ៊ីម៉ែលដែលត្រឹមត្រូវ';
                    
                    if (input.nextElementSibling && input.nextElementSibling.classList.contains('error-message')) {
                        input.nextElementSibling.replaceWith(errorMsg);
                    } else {
                        input.parentNode.insertBefore(errorMsg, input.nextSibling);
                    }
                }
            });
            
            // If form is valid, submit it
            if (isValid) {
                const submitBtn = form.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerHTML;
                
                // Show loading state
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<span class="loading"></span> កំពុងដំណើរការ...';
                
                // Simulate form submission
                setTimeout(() => {
                    // Reset form
                    form.reset();
                    
                    // Show success message
                    const successMsg = document.createElement('div');
                    successMsg.className = 'success-message';
                    successMsg.innerHTML = '<i class="fas fa-check-circle"></i> សារបានផ្ញើដោយជោគជ័យ! យើងនឹងឆ្លើយតបអ្នកឆាប់ៗនេះ។';
                    
                    // Insert success message
                    if (form.nextElementSibling) {
                        form.parentNode.insertBefore(successMsg, form.nextSibling);
                    } else {
                        form.parentNode.appendChild(successMsg);
                    }
                    
                    // Scroll to success message
                    successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    
                    // Reset button after delay
                    setTimeout(() => {
                        submitBtn.disabled = false;
                        submitBtn.innerHTML = originalText;
                        successMsg.remove();
                    }, 5000);
                }, 1500);
            }
        });
    });
    
    // Email validation helper
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
}

// ======================
// Initialize Lazy Loading
// ======================
function initLazyLoading() {
    if ('loading' in HTMLImageElement.prototype) {
        // Native lazy loading is supported
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        lazyImages.forEach(img => {
            if (img.dataset.src) {
                img.src = img.dataset.src;
            }
        });
    } else {
        // Fallback for browsers that don't support native lazy loading
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                        }
                        observer.unobserve(img);
                    }
                });
            });
            
            lazyImages.forEach(img => {
                imageObserver.observe(img);
            });
        }
    }
}

// ======================
// Initialize Theme Toggle
// ======================
function initThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    
    if (!themeToggle) return;
    
    // Check for saved user preference, if any, on load
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Toggle theme on button click
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Update button icon
        const icon = themeToggle.querySelector('i');
        if (icon) {
            icon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    });
    
    // Set initial icon
    const icon = themeToggle.querySelector('i');
    if (icon) {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        icon.className = currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
}

// ======================
// Initialize Tooltips
// ======================
function initTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = element.getAttribute('data-tooltip');
        document.body.appendChild(tooltip);
        
        const updateTooltipPosition = (e) => {
            const x = e.clientX + 10;
            const y = e.clientY + 10;
            
            tooltip.style.left = `${x}px`;
            tooltip.style.top = `${y}px`;
        };
        
        element.addEventListener('mouseenter', (e) => {
            tooltip.classList.add('show');
            updateTooltipPosition(e);
        });
        
        element.addEventListener('mousemove', updateTooltipPosition);
        
        element.addEventListener('mouseleave', () => {
            tooltip.classList.remove('show');
        });
    });
}

// ======================
// Initialize Modals
// ======================
function initModals() {
    // Open modal
    document.querySelectorAll('[data-modal]').forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            
            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Close modal
    document.querySelectorAll('.modal-close, .modal-overlay').forEach(element => {
        element.addEventListener('click', () => {
            const modal = element.closest('.modal');
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
    
    // Close on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal.active').forEach(modal => {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            });
        }
    });
}

// ======================
// Initialize Tabs
// ======================
function initTabs() {
    document.querySelectorAll('.tabs').forEach(tabContainer => {
        const tabs = tabContainer.querySelectorAll('.tab-button');
        const tabContents = tabContainer.querySelectorAll('.tab-content');
        
        tabs.forEach((tab, index) => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs and contents
                tabs.forEach(t => t.classList.remove('active'));
                tabContents.forEach(c => c.classList.remove('active'));
                
                // Add active class to clicked tab and corresponding content
                tab.classList.add('active');
                tabContents[index].classList.add('active');
            });
        });
        
        // Activate first tab by default
        if (tabs.length > 0) {
            tabs[0].click();
        }
    });
}

// ======================
// Initialize Accordions
// ======================
function initAccordions() {
    document.querySelectorAll('.accordion-item').forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        header.addEventListener('click', () => {
            const isOpen = item.classList.contains('active');
            
            // Close all accordions
            document.querySelectorAll('.accordion-item').forEach(accItem => {
                accItem.classList.remove('active');
                const content = accItem.querySelector('.accordion-content');
                if (content) {
                    content.style.maxHeight = null;
                }
            });
            
            // Toggle current accordion if it wasn't open
            if (!isOpen) {
                item.classList.add('active');
                const content = item.querySelector('.accordion-content');
                if (content) {
                    content.style.maxHeight = content.scrollHeight + 'px';
                }
            }
        });
    });
}

// ======================
// Initialize Counters
// ======================
function initCounters() {
    const counters = document.querySelectorAll('.counter');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute('data-target');
                const duration = 2000; // 2 seconds
                const step = target / (duration / 16); // 60fps
                let current = 0;
                
                const updateCounter = () => {
                    current += step;
                    
                    if (current < target) {
                        counter.textContent = Math.ceil(current).toLocaleString();
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target.toLocaleString();
                    }
                };
                
                updateCounter();
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

// ======================
// Initialize Carousels
// ======================
function initCarousels() {
    document.querySelectorAll('.carousel').forEach(carousel => {
        const track = carousel.querySelector('.carousel-track');
        const items = carousel.querySelectorAll('.carousel-item');
        const prevBtn = carousel.querySelector('.carousel-prev');
        const nextBtn = carousel.querySelector('.carousel-next');
        const dotsContainer = carousel.querySelector('.carousel-dots');
        
        if (!track || items.length === 0) return;
        
        let currentIndex = 0;
        const itemWidth = items[0].offsetWidth;
        const itemsToShow = Math.min(3, items.length);
        
        // Create dots if they don't exist
        if (dotsContainer && !dotsContainer.hasChildNodes()) {
            for (let i = 0; i < Math.ceil(items.length / itemsToShow); i++) {
                const dot = document.createElement('button');
                dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
                dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
                dot.addEventListener('click', () => goToSlide(i));
                dotsContainer.appendChild(dot);
            }
        }
        
        const dots = carousel.querySelectorAll('.carousel-dot');
        
        function updateCarousel() {
            const offset = -currentIndex * (itemWidth + 20); // 20px gap
            track.style.transform = `translateX(${offset}px)`;
            
            // Update active dot
            if (dots.length) {
                const activeDotIndex = Math.floor(currentIndex / itemsToShow);
                dots.forEach((dot, index) => {
                    dot.classList.toggle('active', index === activeDotIndex);
                });
            }
            
            // Disable/enable navigation buttons
            if (prevBtn) {
                prevBtn.disabled = currentIndex === 0;
            }
            
            if (nextBtn) {
                nextBtn.disabled = currentIndex >= items.length - itemsToShow;
            }
        }
        
        function goToSlide(index) {
            currentIndex = Math.max(0, Math.min(index * itemsToShow, items.length - itemsToShow));
            updateCarousel();
        }
        
        // Event listeners for navigation buttons
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                currentIndex = Math.max(0, currentIndex - 1);
                updateCarousel();
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                currentIndex = Math.min(items.length - itemsToShow, currentIndex + 1);
                updateCarousel();
            });
        }
        
        // Initialize carousel
        updateCarousel();
        
        // Handle window resize
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                updateCarousel();
            }, 250);
        });
    });
}

// ======================
// Error Handling
// ======================
function handleError(error, context = '') {
    console.error(`Error${context ? ' in ' + context : ''}:`, error);
    // You could also show a user-friendly error message here
}

// ======================
// Initialize All Features with Error Handling
// ======================
function initializeApp() {
    try {
        // Initialize core features
        const initializers = [
            { name: 'Mobile Menu', fn: initMobileMenu },
            { name: 'Sticky Header', fn: initStickyHeader },
            { name: 'Back to Top', fn: initBackToTop },
            { name: 'Smooth Scrolling', fn: initSmoothScrolling },
            { name: 'Active Nav Link', fn: setActiveNavLink },
            { name: 'Popular Lessons', fn: loadPopularLessons },
            { name: 'Scroll Animations', fn: initScrollAnimations },
            { name: 'Form Validation', fn: initFormValidation },
            { name: 'Lazy Loading', fn: initLazyLoading },
            { name: 'Theme Toggle', fn: initThemeToggle }
        ];

        // Run all initializers with error handling
        initializers.forEach(({ name, fn }) => {
            try {
                if (typeof fn === 'function') {
                    fn();
                }
            } catch (error) {
                handleError(error, name);
            }
        });

        // Initialize additional features if elements exist
        const conditionalInitializers = [
            { selector: '[data-tooltip]', fn: initTooltips },
            { selector: '[data-modal]', fn: initModals },
            { selector: '.tabs', fn: initTabs },
            { selector: '.accordion-item', fn: initAccordions },
            { selector: '.counter', fn: initCounters },
            { selector: '.carousel', fn: initCarousels }
        ];

        conditionalInitializers.forEach(({ selector, fn }) => {
            try {
                if (document.querySelector(selector) && typeof fn === 'function') {
                    fn();
                }
            } catch (error) {
                handleError(error, `Initializing ${selector}`);
            }
        });

        // Add loaded class to body when page is fully loaded
        if (document.readyState === 'loading') {
            window.addEventListener('load', () => {
                document.body.classList.add('loaded');
            });
        } else {
            document.body.classList.add('loaded');
        }
    } catch (error) {
        handleError(error, 'App Initialization');
    }
}

// Initialize the app when the DOM is fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    // DOMContentLoaded has already fired
    setTimeout(initializeApp, 0);
}
