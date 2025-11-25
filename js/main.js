/**
 * NGC Marine - Main JavaScript
 * Navigation and Interactive Components
 * Based on Flender flyout navigation system
 */

(function($) {
    'use strict';

    // Wait for DOM to be ready
    $(document).ready(function() {

        // ========================================
        // FLYOUT NAVIGATION (MEGA MENU)
        // ========================================

        var $flyoutTriggers = $('.js-toggle-flyout-navigation');
        var $flyoutWrappers = $('.fl-header__flyout--wrapper');
        var $backgroundMask = $('.fl-background-mask--flyout');
        var activeFlyout = null;
        var closeTimeout = null;

        // Toggle flyout on click
        $flyoutTriggers.on('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            var $trigger = $(this);
            var flyoutId = $trigger.data('navigation');
            var $flyout = $('#' + flyoutId);

            // If clicking the same trigger, close it
            if (activeFlyout === flyoutId) {
                closeFlyout();
                return;
            }

            // Close any open flyout first
            if (activeFlyout) {
                closeFlyout();
            }

            // Open the clicked flyout
            openFlyout($flyout, flyoutId);
        });

        // REMOVED: Hover behavior - now click-only

        // Open flyout function
        function openFlyout($flyout, flyoutId) {
            if (!$flyout.length) return;

            $flyout.addClass('active');
            activeFlyout = flyoutId;

            // Add solid background to navbar when menu opens
            $('.fl-header').addClass('menu-open');

            // REMOVED: active state on nav items - no blue highlight needed
        }

        // Close flyout function
        function closeFlyout() {
            $flyoutWrappers.removeClass('active');
            activeFlyout = null;

            // Remove solid background from navbar when menu closes
            $('.fl-header').removeClass('menu-open');

            // REMOVED: removing active state - not needed
        }

        // Close on ESC key
        $(document).on('keydown', function(e) {
            if (e.key === 'Escape' || e.keyCode === 27) {
                closeFlyout();
            }
        });

        // Close flyout when clicking outside
        $(document).on('click', function(e) {
            if (activeFlyout && !$(e.target).closest('.fl-header__flyout--wrapper, .js-toggle-flyout-navigation').length) {
                closeFlyout();
            }
        });

        // ========================================
        // RIGHT SIDE NAVIGATION
        // ========================================

        var $rightSideTriggers = $('.js-toggle-right-side-navigation');
        var $rightSideWrappers = $('.fl-right-side-navigation--wrapper');
        var $backgroundMaskRightSide = $('.fl-background-mask--right-side');
        var activeRightSide = null;

        $rightSideTriggers.on('click', function(e) {
            e.preventDefault();
            var navigationId = $(this).data('navigation');
            var $navigation = $('#' + navigationId);

            if (activeRightSide === navigationId) {
                closeRightSide();
                return;
            }

            if (activeRightSide) {
                closeRightSide();
            }

            openRightSide($navigation, navigationId);
        });

        function openRightSide($navigation, navigationId) {
            if (!$navigation.length) return;

            $navigation.addClass('active').css({
                'transform': 'translateX(0)',
                'opacity': '1'
            });
            $backgroundMaskRightSide.addClass('active');
            activeRightSide = navigationId;
        }

        function closeRightSide() {
            $rightSideWrappers.removeClass('active').css({
                'transform': 'translateX(100%)',
                'opacity': '0'
            });
            $backgroundMaskRightSide.removeClass('active');
            activeRightSide = null;
        }

        $backgroundMaskRightSide.on('click', function() {
            closeRightSide();
        });

        // Close buttons
        $('.fl-right-side-navigation--close').on('click', function(e) {
            e.preventDefault();
            closeRightSide();
        });

        // ========================================
        // MOBILE NAVIGATION TOGGLE
        // ========================================

        var $mobileToggle = $('.js-toggle-sm-navigation');
        var $mobileNav = $('.navigation__overflow');

        $mobileToggle.on('click', function(e) {
            e.preventDefault();
            $mobileNav.toggleClass('active');
            $backgroundMask.toggleClass('active');
        });

        // ========================================
        // NAVBAR SCROLL EFFECT - FLENDER STYLE
        // Transparent at top, solid when scrolling
        // ========================================

        var $header = $('.fl-header');
        var headerHeight = $header.outerHeight();
        var scrollThreshold = 50; // Pixels to scroll before changing

        $(window).on('scroll', function() {
            var scrollTop = $(window).scrollTop();

            if (scrollTop > scrollThreshold) {
                // Scrolled down - add solid background
                $header.addClass('scrolled');
            } else {
                // At top - remove solid background (transparent)
                $header.removeClass('scrolled');
            }
        });

        // ========================================
        // SMOOTH SCROLL FOR ANCHOR LINKS
        // ========================================

        $('a[href^="#"]').on('click', function(e) {
            var target = $(this).attr('href');

            // Ignore navigation toggles and empty hashes
            if (target === '#' || $(this).hasClass('js-toggle-flyout-navigation') ||
                $(this).hasClass('js-toggle-right-side-navigation')) {
                return;
            }

            if ($(target).length) {
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: $(target).offset().top - headerHeight
                }, 600);
            }
        });

        // ========================================
        // LAZY LOAD IMAGES
        // ========================================

        function lazyLoadImages() {
            var lazyImages = document.querySelectorAll('img[data-src]');

            if ('IntersectionObserver' in window) {
                var imageObserver = new IntersectionObserver(function(entries, observer) {
                    entries.forEach(function(entry) {
                        if (entry.isIntersecting) {
                            var img = entry.target;
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                            imageObserver.unobserve(img);
                        }
                    });
                });

                lazyImages.forEach(function(img) {
                    imageObserver.observe(img);
                });
            } else {
                // Fallback for older browsers
                lazyImages.forEach(function(img) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                });
            }
        }

        lazyLoadImages();

        // ========================================
        // RESPONSIVE NAVIGATION
        // ========================================

        function handleResponsiveNav() {
            var windowWidth = $(window).width();

            if (windowWidth <= 991) {
                // Mobile: Click-based navigation
                $flyoutTriggers.off('mouseenter mouseleave');
                $flyoutWrappers.off('mouseenter mouseleave');
            } else {
                // Desktop: Hover-based navigation (already set up above)
            }
        }

        $(window).on('resize', debounce(handleResponsiveNav, 250));
        handleResponsiveNav();

        // ========================================
        // UTILITY: DEBOUNCE FUNCTION
        // ========================================

        function debounce(func, wait) {
            var timeout;
            return function() {
                var context = this;
                var args = arguments;
                clearTimeout(timeout);
                timeout = setTimeout(function() {
                    func.apply(context, args);
                }, wait);
            };
        }

        // ========================================
        // FADE IN ANIMATIONS ON SCROLL
        // ========================================

        function checkFadeIn() {
            $('.fade-in-up').each(function() {
                var elementTop = $(this).offset().top;
                var elementBottom = elementTop + $(this).outerHeight();
                var viewportTop = $(window).scrollTop();
                var viewportBottom = viewportTop + $(window).height();

                if (elementBottom > viewportTop && elementTop < viewportBottom) {
                    $(this).addClass('visible');
                }
            });
        }

        $(window).on('scroll', debounce(checkFadeIn, 100));
        checkFadeIn();

        // ========================================
        // FORM HANDLING (IF NEEDED)
        // ========================================

        $('form').on('submit', function(e) {
            // Add form validation or AJAX submission here if needed
            // e.preventDefault();
        });

        // ========================================
        // CONSOLE MESSAGE
        // ========================================

        console.log('%c NGC Marine Website ', 'background: #00224B; color: #fff; padding: 10px 20px; font-size: 16px; font-weight: bold;');
        console.log('%c Powered by Flender-inspired architecture ', 'color: #227dc6; font-size: 12px;');

    }); // End document ready

})(jQuery);
