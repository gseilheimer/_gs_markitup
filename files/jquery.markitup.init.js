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

      // resize markitup editor
      $('.resize-large').click(function() {
         $('#markItUp').animate( { height:'750px' } );
         return false;
      });

      $('.resize-small').click(function() {
         $('#markItUp').animate( { height:'320px' } );
         return false;
      });


      // Add functionality for markItUp!DIV
      $(".toggle_container").hide();
      $("h2.trigger:first").addClass("active");
      $(".toggle_container:first").slideToggle("slow,");

      $("h2.trigger").toggle(function(){
         $(this).addClass("active");
      }, function () {
         $(this).removeClass("active");
      });

      $("h2.trigger").click(function(){
         $(this).next(".toggle_container").slideToggle("slow,");
      });
   });