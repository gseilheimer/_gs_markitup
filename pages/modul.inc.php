<?php

 /** 
 * MARKITUP
 *
 * @author gilbert.seilheimer@contic.de
 *
 * @package redaxo4
 * @version svn:$Id$
 */

// AddOn-MARKITUP
 
	//////////////////////////////////////////////////////////////////////////////////
	// CONFIG
	//////////////////////////////////////////////////////////////////////////////////

	$msg = "Erfolgreich geladen...";
	
	if ($msg != '')
	{
		echo rex_info($msg);
	}

	// Sprachdateien anhaengen
	if(TRUE == $REX['REDAXO'])
	{
		$I18N->appendFile($REX['INCLUDE_PATH'].'/addons/'.$addon_name.'/lang/');
	}	
		
	//////////////////////////////////////////////////////////////////////////////////
	// SUBPAGE
	//////////////////////////////////////////////////////////////////////////////////
?>

<div class="rex-addon-output">
	<h2 class="rex-hl2"><?php echo $I18N->msg('addon_subpage_modul_txt_01'); ?></h2>

	<div class="rex-addon-content">
		<p class="rex-code">
		<code><span style="color: #000000"> 
		<?php 
			echo $I18N->msg('addon_subpage_modul_txt_01_01') . "<br />";
			echo $I18N->msg('addon_subpage_modul_txt_01_02') . "<br />";			
		?>
		</span></code>
		</p>
	</div>	
</div>
