// Author: Max McKinney
// Version: 1.0
// Description: Fades the page from a given color to show the content and fades out to the given color.
// Requires: jQuery

(function ( $ ) {

    $.fn.mPageTransition = function(options) {

        // Grab the settings
        var settings = $.extend({
            color: "#ffc107",
            fadeOutTime: 300,
            fadeInTime: 300
        }, options)

        // Get the body reference and get the original background color as we will be changing that during the transition
        var body = $('body');
        var originalBackgroundColor = $(body).css("background-color");

        // Due to the css the body is initially hidden so we will fade it in. This prevents and "flickering" from occuring
        $(body).css('visibility','visible').hide().fadeIn(settings.fadeInTime);

        // Intercept all link clicks to fade page out
        $("a").click(function(e) {
            // Get the original link location and stop it from occuring
            var link = this;
            e.preventDefault();

            // First fade body content away, fade the background color to the defined custom color. Once it has fade in, fade it away and then follow the link href
            $(body).animate({
                "background-color": settings.color,
                "opacity": 0
            }, settings.fadeInTime, function() {
                // Fade background color back to orginal and once finished follow link
                $(body).animate({"background-color": originalBackgroundColor}, settings.fadeOutTime, function() {
                    var href = $(link).attr("href");
                    location.href=href;
                })
            });

        });

    };

}( jQuery ));
