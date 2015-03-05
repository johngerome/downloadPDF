;(function ( $, window, document, undefined ) {

    var pluginName = 'downloadPdf',
        defaults = {
          filename: 'size-chart-guide',
        };

    var Plugin = function( element, options ) {
        this.$element = $(element);

        this.settings  = $.extend( {}, defaults, options );
        this.init();
    };

    $.extend(Plugin.prototype, {
        init: function () {
          var self = this.$element;
          var _this = this;
          var pdfFilename = (self.data('filename')) ? self.data('filename') : this.settings.filename;

          self.on('click', '.js-download-pdf', function(e) {
              _this.hideElements([self, '.js-pdf-hide']);
              _this.savePdf(pdfFilename, function() {
                  _this.hideElements([self, '.js-pdf-hide'], false)});
          });
        },
        savePdf: function(pdfFilename, callback) {
          var pdf   = new jsPDF('p','pt','a4');
          var self  = this.$element;
          var _this = this;

          pdf.addHTML(self, 0, 0, function() {
              if (callback && typeof(callback) === 'function') {
                callback();
              }
              pdf.save(pdfFilename + '.pdf');
          });
        },
        hideElements: function (pdfHideElements, sDisplay) {
            if(typeof(sDisplay) === 'undefined') sDisplay = true;

            if(sDisplay == 'hide' || sDisplay === true) {
                for (i = 1; i <= pdfHideElements.length; i++) {
                    $(pdfHideElements[i]).hide();
                }
            }else if(sDisplay === false) {
                for (i = 1; i <= pdfHideElements.length; i++) {
                    $(pdfHideElements[i]).show();
                }
            }
        }
    });


    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[ pluginName ] = function ( options ) {
        return this.each(function() {
            if ( !$.data( this, "plugin_" + pluginName ) ) {
                $.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
            }
        });
    };

    $("[class='js-downloadpdf-container']").downloadPdf();

})( jQuery, window, document );