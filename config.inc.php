<?php

 /** 
 * MARKITUP
 *
 * @author gilbert.seilheimer@eilige-edv.de
 *
 * @package redaxo4
 * @version svn:$Id$
 */

// AddOn-MARKITUP

   //////////////////////////////////////////////////////////////////////////////////
   // CONFIG
   //////////////////////////////////////////////////////////////////////////////////

   // VARs
   $addon_name = "gs_markitup";

   // Sprachdateien anhaengen
   if(TRUE == $REX['REDAXO'])
   {
      $I18N->appendFile($REX['INCLUDE_PATH'].'/addons/'.$addon_name.'/lang/');
   }
         
   $REX['ADDON']['rxid'][$addon_name]          = '711';
   $REX['ADDON']['page'][$addon_name]          = "markitup";
   
   if(TRUE == $REX['REDAXO'])
   {
      $REX['ADDON']['name'][$addon_name]       = $I18N->msg("addon_name");
   }
   
   // Recht um das AddOn zu aendern
   $REX['ADDON']['perm'][$addon_name]          = 'markitup[1]';
   
   // Credits
   $REX['ADDON']['version'][$addon_name]       = '1.1.12';
   $REX['ADDON']['author'][$addon_name]       = 'Gilbert Seilheimer';
   $REX['ADDON']['supportpage'][$addon_name]    = 'forum.redaxo.org';
   
   // *************
   $REX['PERM'][] = 'markitup[1]';
   $REX['PERM'][] = 'markitup[2]';
   
   // Fuer die Benutzervewaltung
   $REX['EXTPERM'][] = 'markitup[3]';

   //////////////////////////////////////////////////////////////////////////////////
   // SUBPAGES
   //////////////////////////////////////////////////////////////////////////////////
   
   if(TRUE == $REX['REDAXO'])
   {
      $REX['ADDON'][$addon_name]['SUBPAGES'] = 
      array(
           array('readme', $I18N->msg('addon_subpage_readme')),
           array('modul', $I18N->msg('addon_subpage_modul'))
      );
   }
?>