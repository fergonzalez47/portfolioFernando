document.addEventListener('DOMContentLoaded', function () {
    // Variables
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const dropdowns = document.querySelectorAll('.dropdown');
    const themeButtons = document.querySelectorAll('.theme-btn');
    const navIndicator = document.createElement('div');
    const header = document.querySelector('.header');
    const badge = document.querySelector('.badge');

    // Setup nav indicator
    navIndicator.classList.add('nav-indicator');
    navMenu.appendChild(navIndicator);

    // Set initial position of nav indicator to active link
    setIndicatorPosition(document.querySelector('.nav-link.active'));

    // Show notification badge after 2 seconds
    setTimeout(() => {
        badge.classList.add('show');
    }, 2000);

    // Mobile menu toggle
    menuToggle.addEventListener('click', function () {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');

        // Toggle hamburger animation
        const bars = document.querySelectorAll('.bar');
        if (menuToggle.classList.contains('active')) {
            bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
        } else {
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        }
    });

    // Mobile dropdown toggle
    if (window.innerWidth <= 768) {
        dropdowns.forEach(dropdown => {
            const dropdownLink = dropdown.querySelector('.nav-link');
            dropdownLink.addEventListener('click', function (e) {
                e.preventDefault();
                dropdown.classList.toggle('open');
            });
        });
    }

    // Navigation links hover effect
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function () {
            if (window.innerWidth > 768) {
                setIndicatorPosition(this);
            }
        });

        // link.addEventListener('click', function (e) {
        //     if (!this.parentElement.classList.contains('dropdown') || window.innerWidth <= 768) {
        //         e.preventDefault();
        //         navLinks.forEach(navLink => navLink.classList.remove('active'));
        //         this.classList.add('active');
        //         setIndicatorPosition(this);
        //     }
        // });

        // if (this.getAttribute('href').startsWith('#')) {
        //     e.preventDefault();
        //     const targetId = this.getAttribute('href').substring(1);
        //     const target = document.getElementById(targetId);
        //     if (target) {
        //         window.scrollTo({
        //             top: target.offsetTop - 180, // ajusta según altura del header
        //             behavior: 'smooth'
        //         });
        //     }
        //     navLinks.forEach(navLink => navLink.classList.remove('active'));
        //     this.classList.add('active');
        //     setIndicatorPosition(this);
        // }
        
    });

    // Reset indicator position when mouse leaves the nav menu
    navMenu.addEventListener('mouseleave', function () {
        if (window.innerWidth > 768) {
            const activeLink = document.querySelector('.nav-link.active');
            setIndicatorPosition(activeLink);
        }
    });

    // Color theme switcher
    themeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const theme = this.getAttribute('data-theme');
            changeColorTheme(theme);
        });
    });

    // Scroll effect for header
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.style.padding = '5px 0';
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
        } else {
            header.style.padding = '0';
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        }
    });

    // Window resize handler
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
            const bars = document.querySelectorAll('.bar');
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';

            // Reset dropdowns
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('open');
            });

            // Reset indicator position
            const activeLink = document.querySelector('.nav-link.active');
            setIndicatorPosition(activeLink);
        }
    });

    // Function to set nav indicator position
    function setIndicatorPosition(el) {
        if (!el || window.innerWidth <= 768) return;

        const width = el.offsetWidth;
        const left = el.offsetLeft;

        navIndicator.style.width = `${width}px`;
        navIndicator.style.left = `${left}px`;
    }

    // Function to change color theme
    function changeColorTheme(theme) {
        let primaryColor, secondaryColor;

        switch (theme) {
            case 'blue':
                
                primaryColor = '#4bc94b';
                secondaryColor = '#71faff';
                accentColor = '#4bc94b';
                break;
            case 'green':
                primaryColor = '#011f06';
                secondaryColor = '#63df73';
                accentColor = '#FFF8CB';
                break;
            case 'red':
                primaryColor = '#270302';
                secondaryColor = '#A70C0A';
                accentColor = '#F88E8C';
                break;
            default: // Default theme
            
                primaryColor = '#131b22';
                secondaryColor = '#4bc94b';
        }

        // Update CSS variables
        document.documentElement.style.setProperty('--primary-color', primaryColor);
        document.documentElement.style.setProperty('--secondary-color', secondaryColor);
        document.documentElement.style.setProperty('--accent-color', accentColor);

        // Update gradient elements
        const gradientElements = [
            '.logo-icon',
            '.nav-link::before',
            '.nav-indicator',
            '.badge',
            '.theme-btn.active'
        ];

        gradientElements.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(el => {
                el.style.background = `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`;
            });
        });

        // Update hover colors
        navLinks.forEach(link => {
            link.style.setProperty('--hover-color', primaryColor);
        });

        // Update active link color
        const activeLinks = document.querySelectorAll('.nav-link.active');
        activeLinks.forEach(link => {
            link.style.color = primaryColor;
        });
    }
});