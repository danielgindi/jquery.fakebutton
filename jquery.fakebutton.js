// ==ClosureCompiler==
// @compilation_level ADVANCED_OPTIMIZATIONS
// @externs_url https://closure-compiler.googlecode.com/git/contrib/externs/jquery-1.9.js
// ==/ClosureCompiler==
/** @preserve    Library by Daniel Cohen Gindi (danielgindi@gmail.com) 054-5655765 
    MIT License!
    Version: 2014-02-18
*/
(function($){
    
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
        this.on('keydown.fakebutton', function (event) {
            if (event.target === this && (event.which === 13 || event.which === 32)) {
                event.preventDefault();
                $(this).addClass('active');
            }
        }).on('keyup.fakebutton', function (event) {
            if (event.target === this && (event.which === 13 || event.which === 32)) {
                event.preventDefault();
                $(this).removeClass('active').click();
            }
        }).on('touchstart.fakebutton', function (event) {
            $(this).addClass('active');
        }).on('touchend.fakebutton', function (event) {
            $(this).removeClass('active');
        }).on('touchcancel.fakebutton', function (event) {
            $(this).removeClass('active');
        });
        return this;
    };
    
    /** @expose */
    $.fn.unfakebutton = function () {
        $(this).off('.fakebutton');
        return this;
    };

})(jQuery);