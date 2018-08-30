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

        var obj         = this;
        var $element    = $(element);

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
                    window.open(this.href, '_blank');

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
