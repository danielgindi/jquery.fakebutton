/*
    Library by Daniel Cohen Gindi (danielgindi@gmail.com) 054-5655765 
    MIT License!
    Version: 2014-02-18
*/
(function(b){function e(){d=!0}var d=!1;b.fn.fakebutton=function(c){!1!==c&&(!0===c&&(c=0),this.each(function(){-1===this.tabIndex&&(this.tabIndex=c)}));this.on("keydown.fakebutton",function(a){var c=b(this);a.target!==this||13!==a.which&&32!==a.which||(a.preventDefault(),c.addClass("active").on("keyup.fakebutton",function(a){c.off("keyup.fakebutton");a.target!==this||13!==a.which&&32!==a.which||(a.preventDefault(),b(this).removeClass("active").click())}))}).on("touchstart.fakebutton",function(){var a=
b(this);d=!1;b(window).on("scroll",e);a.addClass("active").on("touchend.fakebutton",function(){a.removeClass("active").off("touchend.fakebutton").off("touchcancel.fakebutton");b(window).off("scroll");d||a.click()}).on("touchcancel.fakebutton",function(){a.removeClass("active").off("touchend.fakebutton").off("touchcancel.fakebutton");b(window).off("scroll")})});return this};b.fn.unfakebutton=function(){b(this).off(".fakebutton");return this}})(jQuery);
