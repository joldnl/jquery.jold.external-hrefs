/*!
 * JOLD jQuery External Links 1.0.0
 *
 * Copyright (c) 2018 JOLD Interactive; Jurgen Oldenburg <info@jold.nl>
 *
 * A jQuery plugin that opens all extrnal links (not the same domain) in a new tab.
 * See README.md for usage
 *
 * Licences: BSD-3-Clause
 * https://opensource.org/licenses/BSD-3-Clause
 */
(function($){

    var JoldExternalHrefs = function( element, options ) {

        var $element    = $(element);
        var hostname    = window.location.host;

        /**
         * Pick up the options passed to the plugin
         */
        var settings = $.extend({
            param: 'defaultValue'
        }, options || {});


        $element.each(function() {

            /** Get the current hostname */
            var a = new RegExp('/' + window.location.host + '/');

            /** Check if the href attribute of the link has a different hostname than the current site */
            if( !a.test(this.href) ) {

                $(this).on('click', function(event) {

                    event.preventDefault();
                    event.stopPropagation();

                    /** Create an url object for the link */
                    url = new URL(this.href);

                    /**
                     * Check if the links is a http protocol link
                     * otherwise just open all other link protocols (tel, mailto)
                     */
                    if (url.protocol == 'http:' || url.protocol == 'https:') {
                        window.open(this.href, '_blank');
                    } else {
                        window.location.replace(this.href);
                    }

                });
            }

        });

    };


    $.fn.joldExternalHrefs = function( options ) {

        var element = $(this);

        // Return early if this element already has a plugin instance
        if (element.data('joldExternalHrefs')) return element.data('joldExternalHrefs');

        // pass options to plugin constructor
        var joldExternalHrefs = new JoldExternalHrefs( this, options );

        // Store plugin object in this element's data
        element.data('joldExternalHrefs', joldExternalHrefs);

        return joldExternalHrefs;

    };

})(jQuery);
