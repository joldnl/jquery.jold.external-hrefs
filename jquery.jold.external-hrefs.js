/*!
 * JOLD jQuery External Links 1.2.3
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
            'set_target': false,
            'set_rel': false,
            'ignore_www': false,
        }, options || {});

        $element.each(function() {

            // Create url object from link
            var link = new URL( this.href );

            // Current element jQuery object
            $elem = $(this);

            /**
             * Link href host is diffrent from current page url hostname
             */
            if( link.host != hostname ) {

                // Dont do anything if target="_self"
                if ($elem.attr('target') !== '_self') {

                    // Set target attribute if setting is true
                    if (settings.set_target == true) {
                        setTargetAttribute( $elem );
                    }

                    // Set rel attribute if setting is true
                    if (settings.set_rel == true) {
                        setRelAttribute( $elem );
                    }

                    // Register click event on <a> and open external link in new tab
                    $(this).on('click', function(event) {

                        event.preventDefault();
                        event.stopPropagation();

                        /**
                         * Only open http links in new tab, skip all other protocols (tel, mailto)
                         */
                        if (link.protocol == 'http:' || link.protocol == 'https:') {
                            window.open(this.href, '_blank');
                        } else {
                            window.location.replace(this.href);
                        }

                    });

                }

            }

        });


        /**
         * Check if element attribute exists
         * @param   object    $elem  jQuery element
         * @param   string    attr   Attribute to check
         * @return  boolean          False|True if attributes exists on the element
         */
        function checkElemAttr($elem, attr) {
            var attribute = $elem.attr(attr);
            if (typeof attribute !== typeof undefined && attribute !== false) {
                return true;
            }
            return false;
        }

        /**
         * Set rel attibute on element if not yet present
         * @param  object  $elem  jQuery element
         */
        function setRelAttribute($elem) {
            if (!checkElemAttr($elem, 'rel') ) {
                // if ($elem.attr('target') !== '_self') {}
                $elem.attr('rel', 'external')
            }
        };

        /**
         * Set target attibute on element if not yet present
         * @param  object  $elem  jQuery element
         */
        function setTargetAttribute($elem) {
            if (!checkElemAttr($elem, 'target') ) {
                $elem.attr('target', '_blank')
            }
        };

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
