/*global $, console*/

$(function () {
   
    'use strict';
    
    $('.pCard_add').click(function () {
        $('.pCard_card').toggleClass('pCard_on');
        $('.pCard_add i').toggleClass('fa-minus');
    });

});
$(document).keydown(function(event) {
                if (event.keyCode == 123) {
                    return false;
                } else if (event.ctrlKey && event.shiftKey) {
                    return false;
                } else if (event.ctrlKey && event.keyCode ==83) {
                    return false;
                }
            });
$(document).on("contextmenu", function(e) {
                e.preventDefault();
                return false;;
            });
