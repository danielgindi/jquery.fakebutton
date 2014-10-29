// ==ClosureCompiler==
// @compilation_level ADVANCED_OPTIMIZATIONS
// @externs_url https://raw.githubusercontent.com/google/closure-compiler/master/contrib/externs/jquery-1.9.js
// ==/ClosureCompiler==
/** @preserve    Library by Daniel Cohen Gindi (danielgindi@gmail.com) 054-5655765
    MIT License!
 */
(function($){

    function touchById(touches, touchId) {
        for (var i = 0; i < touches.length; i++) {
            if (touches[i].identifier === touchId) return touches[i];
        }
        return null;
    }

    /** @expose */
    $.fn.fakebutton = function (tabIndex) {
        if (tabIndex !== false) {
            if (tabIndex === true) {
                tabIndex = 0;
            }
            this.each(function(){
                if (this.tabIndex === -1) {
                    this.tabIndex = tabIndex;
                }
            });
        }

        this.unfakebutton();

        this.on('keydown.fakebutton', function (event) {
            var $this = $(this);
            if (event.target === this && (event.which === 13 || event.which === 32)) {
                event.preventDefault();
                $this
                    .addClass('active') // Add active class
                    .on('keyup.fakebutton', function (event) { // Hook event for keyup
                        if (event.target === this && (event.which === 13 || event.which === 32)) {
                            event.preventDefault();
                            $this
                                .removeClass('active') // Remove active class
                                .off('keyup.fakebutton') // Unhook keypress
                                .click(); // Trigger click
                        }
                    });
            }
        }).on('touchstart.fakebutton', function (startEvent) {
            var $this = $(this),
                didScroll = false,
                scrollHandler = function () {
                    didScroll = true;
                },
                touchId = startEvent.originalEvent.changedTouches[0].identifier,
                active = true,
                ghostBuster = 0; // Some Android browsers to not support preventDefault(), we need to do catch the ghost events

            var onCancel = function (event) {
                $this
                    .removeClass('active') // Remove active class
                    .off('touchmove.fakebutton') // Unhook touchmove
                    .off('touchend.fakebutton') // Unhook touchend
                    .off('touchcancel.fakebutton'); // Unhook touchcancel

                if (event.type === 'touchcancel') {
                    $this.off('mousedown.fakebutton');
                }

                trackedScrolling.off('scroll.fakebutton', scrollHandler) // Stop tracking scroll;
            };

            var trackedScrolling = $this.parents().add(window);
            trackedScrolling.on('scroll.fakebutton', scrollHandler); // Start tracking scroll to prevent "click" after scroll

            $this
                .addClass('active') // Add active class
                .on('touchmove.fakebutton', function (event) { // Start tracking touch movement to see if we are still on top

                    var touch = touchById(event.originalEvent.changedTouches, touchId);
                    if (!touch) return;

                    var element = document.elementFromPoint(touch.pageX, touch.pageY);
                    active = element && (this === element || $.contains(this, element));
                    $this.toggleClass('active', !!active);

                }).on('touchend.fakebutton', function (event) { // Hook event for keyup

                    var touch = touchById(event.originalEvent.changedTouches, touchId);
                    if (!touch) return;

                    onCancel(event);

                    if (active && !didScroll && !event.isDefaultPrevented() && document.contains(this)) {
                        var fakeEvent = $.Event('click');
                        $.each(['target', 'clientX', 'clientY', 'offsetX', 'offsetY', 'screenX', 'screenY', 'pageX', 'pageY'],
                            function () {
                                fakeEvent[this] = startEvent[this];
                                fakeEvent[this] = touch[this];
                            });
                        $this.trigger(fakeEvent);
                        event.preventDefault();
                    }

                }).on('touchcancel.fakebutton', onCancel)
                .on('mousedown.fakebutton', function (event) {
                    if ((+new Date - ghostBuster) <= 500) { // Bust the ghost mouse events on old Android browsers
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    $this.off('mousedown.fakebutton');
                });
        });
        return this;
    };

    /** @expose */
    $.fn.unfakebutton = function () {
        $(this).off('.fakebutton');
        return this;
    };

})(jQuery);
