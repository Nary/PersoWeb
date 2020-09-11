
$(document).ready(function () {
    $("#BurgerMenu").click(function () {
        $("#NavMenu").toggleClass("NoDisplay");
    });
    
})

function show_hide(s1,s2) {
    var toHide = document.getElementById(s1)
    var toShow = document.getElementById(s2)
    toHide.classList.toggle("info_hide");
    toHide.classList.toggle("windowBody");
    toShow.classList.toggle("info_hide");
    toShow.classList.toggle("windowBody");
}

$(function() {
    /**
    * "Smooth scrolling" vers anchor
    **/
    $("a[href*='#']:not([href='#'])").click(function() {
        if (
            location.hostname == this.hostname
            && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
        ) {
            var anchor = $(this.hash);
            anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
            if ( anchor.length ) {
                $("html, body").animate( { scrollTop: anchor.offset().top }, 'slow');
            }
        }
    });
});

