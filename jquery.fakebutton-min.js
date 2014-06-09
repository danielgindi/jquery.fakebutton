/*
    Library by Daniel Cohen Gindi (danielgindi@gmail.com) 054-5655765 
    MIT License!
    Version: 2014-02-18
*/
(function(b){b.fn.fakebutton=function(c){!1!==c&&(!0===c&&(c=0),this.each(function(){-1===this.tabIndex&&(this.tabIndex=c)}));this.on("keydown.fakebutton",function(d){var e=b(this);d.target!==this||13!==d.which&&32!==d.which||(d.preventDefault(),e.addClass("active").on("keyup.fakebutton",function(b){b.target!==this||13!==b.which&&32!==b.which||(b.preventDefault(),e.removeClass("active").off("keyup.fakebutton").click())}))}).on("touchstart.fakebutton",function(d){function e(){f.removeClass("active").off("touchmove.fakebutton").off("touchend.fakebutton").off("touchcancel.fakebutton");
b(window).off("scroll.fakebutton",c)}function c(){h=!0}var f=b(this),h=!1,k=d.originalEvent.changedTouches[0].identifier,g=!0;b(window).on("scroll.fakebutton",c);f.addClass("active").on("touchmove.fakebutton",function(a){a:{a=a.originalEvent.changedTouches;for(var c=0;c<a.length;c++)if(a[c].identifier===k){a=a[c];break a}a=null}a&&(g=(a=document.elementFromPoint(a.pageX,a.pageY))&&(this===a||b.contains(this,a)),f.toggleClass("active",g))}).on("touchend.fakebutton",function(a){e();!g||h||a.isDefaultPrevented()||
(f.click(),a.preventDefault())}).on("touchcancel.fakebutton",e)});return this};b.fn.unfakebutton=function(){b(this).off(".fakebutton");return this}})(jQuery);
