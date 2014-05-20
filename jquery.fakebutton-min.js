/*
    Library by Daniel Cohen Gindi (danielgindi@gmail.com) 054-5655765 
    MIT License!
    Version: 2014-02-18
*/
(function(b){b.fn.fakebutton=function(c){!1!==c&&(!0===c&&(c=0),this.each(function(){-1===this.tabIndex&&(this.tabIndex=c)}));this.on("keydown.fakebutton",function(a){a.target!==this||13!==a.which&&32!==a.which||(a.preventDefault(),b(this).addClass("active"))}).on("keyup.fakebutton",function(a){a.target!==this||13!==a.which&&32!==a.which||(a.preventDefault(),b(this).removeClass("active").click())}).on("touchstart.fakebutton",function(){b(this).addClass("active")}).on("touchend.fakebutton",function(){b(this).removeClass("active")}).on("touchcancel.fakebutton",
function(){b(this).removeClass("active")});return this};b.fn.unfakebutton=function(){b(this).off(".fakebutton");return this}})(jQuery);
