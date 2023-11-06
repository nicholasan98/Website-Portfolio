(function (c) {
    c.LIRenderCustomBadge = function () {
        var badge = document.querySelector('.custom-linkedin-badge');
        if (badge) {
            // Your custom logic to initialize the LinkedIn badge
            var dataLocale = badge.getAttribute('data-locale');
            var dataSize = badge.getAttribute('data-size');
            var dataTheme = badge.getAttribute('data-theme');
            var dataType = badge.getAttribute('data-type');
            var dataVanity = badge.getAttribute('data-vanity');
            var dataVersion = badge.getAttribute('data-version');
            
            // Build the URL and create the script element as needed
            // ...

            // Ensure the badge is only rendered once
            if (!badge.getAttribute('data-rendered')) {
                // Mark the badge as rendered to avoid duplication
                badge.setAttribute('data-rendered', true);

                // Insert the script for the badge
                var script = document.createElement('script');
                script.src = badgeUrl; // Define the badge URL
                document.body.appendChild(script);
            }
        }
    };

    if (document.readyState === 'complete') {
        c.LIRenderCustomBadge();
    } else {
        c.addEventListener('load', c.LIRenderCustomBadge, false);
    }
})(window);
