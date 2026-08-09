// Nandhan Varma — Personal Portfolio
// Mobile navigation, theme toggle, typed effect, and scroll-reveal animation.
// The initial dark/light class is applied synchronously by a small inline script
// in <head> (to avoid a flash of the wrong theme); this file handles the
// interactive toggle, icon state, and everything else afterwards.
(function () {
    "use strict";

    var prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    /* Theme toggle */
    var themeToggleBtn = document.getElementById("theme-toggle");
    var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
    var themeToggleLightIcon = document.getElementById(
        "theme-toggle-light-icon"
    );

    function syncThemeIcons(isDark) {
        themeToggleDarkIcon.classList.toggle("hidden", isDark);
        themeToggleLightIcon.classList.toggle("hidden", !isDark);
        themeToggleBtn.setAttribute("aria-pressed", String(isDark));
    }

    syncThemeIcons(document.documentElement.classList.contains("dark"));

    themeToggleBtn.addEventListener("click", function () {
        var isDark = !document.documentElement.classList.contains("dark");
        document.documentElement.classList.toggle("dark", isDark);
        localStorage.setItem("color-theme", isDark ? "dark" : "light");
        syncThemeIcons(isDark);
    });

    /* Mobile navigation */
    var navToggleBtn = document.getElementById("nav-toggle");
    var mobileNav = document.getElementById("mobile-nav");
    var navOpenIcon = document.getElementById("nav-open-icon");
    var navCloseIcon = document.getElementById("nav-close-icon");

    function setNavOpen(isOpen) {
        mobileNav.classList.toggle("hidden", !isOpen);
        navOpenIcon.classList.toggle("hidden", isOpen);
        navCloseIcon.classList.toggle("hidden", !isOpen);
        navToggleBtn.setAttribute("aria-expanded", String(isOpen));
    }

    navToggleBtn.addEventListener("click", function () {
        setNavOpen(mobileNav.classList.contains("hidden"));
    });

    mobileNav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            setNavOpen(false);
        });
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && !mobileNav.classList.contains("hidden")) {
            setNavOpen(false);
            navToggleBtn.focus();
        }
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth >= 768 && !mobileNav.classList.contains("hidden")) {
            setNavOpen(false);
        }
    });

    /* Typing effect in the hero (static fallback when reduced motion is preferred) */
    var typingStrings = [
        "Software Developer",
        "Gen AI Developer",
        "ML Enthusiast",
    ];
    var typingTarget = document.getElementById("typing-effect");

    if (typingTarget) {
        if (prefersReducedMotion || typeof Typed === "undefined") {
            typingTarget.textContent = typingStrings[0];
        } else {
            new Typed("#typing-effect", {
                strings: typingStrings,
                typeSpeed: 50,
                backSpeed: 30,
                loop: true,
                backDelay: 2000,
            });
        }
    }

    /* Scroll-reveal animation */
    var revealElements = document.querySelectorAll(".reveal");

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
        revealElements.forEach(function (el) {
            el.classList.add("visible");
        });
    } else {
        var observer = new IntersectionObserver(
            function (entries, obs) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        obs.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        revealElements.forEach(function (el) {
            observer.observe(el);
        });
    }

    /* Footer year */
    var yearEl = document.getElementById("current-year");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
})();
