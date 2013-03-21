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

   // VARs
   $page = "gs_markitup";
   $page_root = $REX['INCLUDE_PATH'].'/addons/'.$page.'/';

   // VARs - ADDON
   $REX['ADDON']['name'][$page]          = 'MarkitUp';
   $REX['ADDON']['rxid'][$page]          = '711';
   $REX['ADDON']['page'][$page]          = $page;
   $REX['ADDON']['version'][$page]       = '1.0.5';
   $REX['ADDON']['author'][$page]        = 'Gilbert Seilheimer';
   $REX['ADDON']['supportpage'][$page]   = 'forum.redaxo.org';
   $REX['ADDON']['perm'][$page]          = $page.'[]';
   $REX['PERM'][]                        = $page.'[]';

   if($REX['REDAXO'] && $REX['USER'])
   {
      //////////////////////////////////////////////////////////////////////////////////
      // SUBPAGES
      //////////////////////////////////////////////////////////////////////////////////

      // Sprachdateien anhaengen
      $I18N->appendFile($REX['INCLUDE_PATH'].'/addons/'.$page.'/lang/');

      $REX['ADDON'][$page]['SUBPAGES'] =
         //        subpage,    label,                                  perm,   params, attributes
         array(
             array('',       $I18N->msg($page.'_subpage_index'),      '',     '',     ''),
             array('readme', $I18N->msg($page.'_subpage_readme'),     '',     '',     ''),
             array('modul',  $I18N->msg($page.'_subpage_modul'),     '',     '',     ''),
         );

      //////////////////////////////////////////////////////////////////////////////////
      // INCLUDES
      //////////////////////////////////////////////////////////////////////////////////
      #require_once $addon_root.'functions/function.a1056_commons.inc.php';


      //////////////////////////////////////////////////////////////////////////////////
      // FUNCTIONS
      //////////////////////////////////////////////////////////////////////////////////

      function gs_markitup_header( $params )
      {
         global $REX;

         if( TRUE == $REX["REDAXO"] )
         {
            $params['subject'] .= "\n  ".'<!-- GS:MARKITUP-START -->';
            $params['subject'] .= "\n  ".'<link rel="stylesheet" type="text/css" href="../files/addons/gs_markitup/skins/style.css" media="screen, projection, print" />';
            $params['subject'] .= "\n  ".'<link rel="stylesheet" type="text/css" href="../files/addons/gs_markitup/sets/style.css" media="screen, projection, print" />';
            $params['subject'] .= "\n  ".'<script type="text/javascript" src="../files/addons/gs_markitup/sets/set.js"></script>';
            $params['subject'] .= "\n  ".'<script type="text/javascript" src="../files/addons/gs_markitup/jquery.markitup.js"></script>';
            $params['subject'] .= "\n  ".'<script type="text/javascript" src="../files/addons/gs_markitup/jquery.markitup.init.js"></script>';
            $params['subject'] .= "\n  ".'<!-- GS:MARKITUP-ENDE -->';
         }
         return $params['subject'];
      }

      rex_register_extension('PAGE_HEADER', 'gs_markitup_header');
   }

?>