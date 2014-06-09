/*
    Library by Daniel Cohen Gindi (danielgindi@gmail.com) 054-5655765 
    MIT License!
    Version: 2014-02-18
*/
(function(a){var e=!1,f=function(){e=!0};a.fn.fakebutton=function(d){!1!==d&&(!0===d&&(d=0),this.each(function(){-1===this.tabIndex&&(this.tabIndex=d)}));this.on("keydown.fakebutton",function(b){var c=a(this);b.target!==this||13!==b.which&&32!==b.which||(b.preventDefault(),c.addClass("active").on("keyup.fakebutton",function(a){a.target!==this||13!==a.which&&32!==a.which||(a.preventDefault(),c.removeClass("active").off("keyup.fakebutton").click())}))}).on("touchstart.fakebutton",function(b){var c=
a(this);e=!1;a(window).on("scroll",f);c.addClass("active").on("touchend.fakebutton",function(b){c.removeClass("active").off("touchend.fakebutton").off("touchcancel.fakebutton");a(window).off("scroll");e||c.click()}).on("touchcancel.fakebutton",function(b){c.removeClass("active").off("touchend.fakebutton").off("touchcancel.fakebutton");a(window).off("scroll")})});return this};a.fn.unfakebutton=function(){a(this).off(".fakebutton");return this}})(jQuery);
