<?php

/**
 * MARKITUP
 *
 * @author gilbert.seilheimer[at]contic[dot]de Gilbert Seilheimer
 * @author <a href="http://www.contic.de">www.contic.de</a>
 *
 * @package redaxo4
 * @version svn:$Id$
 */
/**
 * MarkitUp Lib
 * @link https://github.com/markitup/1.x
 * @version 1.1.4
 */

// AddOn-MARKITUP

	//////////////////////////////////////////////////////////////////////////////////
	// CONFIG
	//////////////////////////////////////////////////////////////////////////////////

   // GET PARAMS
   ////////////////////////////////////////////////////////////////////////////////
   $page 	   = rex_request('page', 'string');
   $subpage 	= rex_request('subpage', 'string');
   #$func    	= rex_request('func', 'string');
   #$oid     	= rex_request('oid', 'int');
   
   //////////////////////////////////////////////////////////////////////////////////
   // SUBPAGES
   //////////////////////////////////////////////////////////////////////////////////
   
   // REX BACKEND LAYOUT TOP
   //////////////////////////////////////////////////////////////////////////////
   
   require $REX['INCLUDE_PATH'] . '/layout/top.php';
   
   echo '<div id="rex-addon-output">';
   
   // TITLE & SUBPAGE NAVIGATION
   //////////////////////////////////////////////////////////////////////////////
   
   rex_title("MarkItUp",$REX['ADDON'][$page]['SUBPAGES']);
   
   // JS SCRIPT FÜR LINKS IN POPUP
   ////////////////////////////////////////////////////////////////////////////////
   
   #echo "";
   
   // INCLUDE REQUESTED SUBPAGE
   //////////////////////////////////////////////////////////////////////////////
   
   if($subpage != "")
   {
      switch($subpage)
      {
         case 'modul':
         {
            break;
         }
         case 'readme':
         {
            break;
         }
         default:
         {
            $subpage = "index";
         }
      }
      require $REX["INCLUDE_PATH"]."/addons/$page/pages/$subpage.inc.php";
   }
   else
   {
      echo '<h2 class="rex-hl2">'.$I18N->msg($page."_subpage_index").'</h2>';
      
      echo '<div class="rex-addon-content">';
         echo '<p class="rex-code">';
         echo '<code><span style="color: #000000">';

         echo $I18N->msg($page.'_subpage_index_txt_01') . "<br />";
         echo $I18N->msg($page.'_subpage_index_txt_01_01') . "<br />";
         echo $I18N->msg($page.'_subpage_index_txt_01_02') . "<br />";

         echo '</span></code>';
         echo '</p>';
      echo '</div>';
   }
   
   // REX BACKEND LAYOUT BOTTOM
   //////////////////////////////////////////////////////////////////////////////
   
   echo '</div>';
   
   require $REX['INCLUDE_PATH'] . "/layout/bottom.php";

?>