/*!
 * Copyright 2015, All Rights Reserved.
 *
 * Code licensed under the MIT License:
 * http://vitorbritto.mit-license.org/
 *
 * Author: Vitor Britto <code@vitorbritto.com.br>
 */


 (function(window, document, undefined) {

     'use strict';

     var ioHash = (function() {

         var extract = extract || {};

         // EXTRACT METHOD
         extract.hash = function(url) {

             return url.substring(url.indexOf('#') + 1);

         };

         // INITIALIZE MODULE
         return {
             parse: extract.hash
         };

     })();

     // Global
     window.ioHash = ioHash;

 })(window, document);
