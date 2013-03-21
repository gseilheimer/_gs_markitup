/**
 * User: Gilbert
 * Date: 21.03.13
 * Time: 11:57
 */
   jQuery(function($)
   {
   // Add markItUp! to your textarea in one line
      $('#markItUp').markItUp(mySettings);

   // And you can add/remove markItUp! whenever you want
      $('.toggle').click(function() {
         if ($("#markItUp.markItUpEditor").length === 1) {
            $("#markItUp").markItUpRemove();
            $("span", this).text("get markItUp! back");
         } else {
            $('#markItUp').markItUp(mySettings);
            $("span", this).text("remove markItUp!");
         }
         return false;
      });
   });