/**
 * jquery.tumblertags 0.1. tumbler inspired tag editor
 *
 * Copyright (c) 2009 Christof Haemmerle (reco@nex9.com)
 *
 * Released under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * >> Basically you can do anything you want but leave this header as is <<
 *
 */

(function ($) {
  
  $.fn.tumblertags = function () {
    return this.each(function () {
      var $tagEditor = $(this);
      var $tagContainer = $(this).find('.tags-container');
      var $inputField = $tagContainer.find('input')
  
      // conlick focus input field
      $tagContainer.click(function(){
        $inputField.focus();
        $(this).addClass('focus');
      });
      
      // remove the focus when input blur is fired
      $inputField.blur(function(){
        $tagContainer.removeClass('focus');
      });
      
      // when pressing the returnkey, wraping the text of input field in a span and prepend it to the input field.
      $inputField.keyup(function(e, keyCode){
        keyCode = keyCode || e.keyCode;
        if (keyCode == 8 && $inputField.val() == '') {
          $tagContainer.find('span:last').remove();
        };
        if (keyCode == 13 && $inputField.val() != '') {
          $newTag = $('<span class="tag">' + $inputField.val() + '<a href="#" title="remove tag">x</a></span>');
          $inputField.val('');
          $newTag.insertBefore($inputField).find('a').click(function() {
            $(this).parent().remove();
          });
          return false; // if contained in a form hitting return would submit the form, we want to avoid that.
        };
      });
      
    });
  };

})(jQuery);