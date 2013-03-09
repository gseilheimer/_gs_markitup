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
?>

<h3>Funktionen:</h3>
<p>
	Addon zum Ausgaben von TEXTILE-MarkUp in Verbindung mit dem Addon TEXTILE.
</p>

<br />
<h3>Benutzung:</h3>
<p>
	Das Standard-Textile-Modul wird einfach durch das mit MarkItUp ersetzt...<br />
	Damit die Werte nicht verloren gehen ist in diesem zugehoerigen Modul eventuell noch der REX_VALUE[XY] anzupassen.
</p>

<br />
<h3>Anpassungen: SET.JS</h3>
<p>
	.\addons\gs_markitup\files\sets\set.js<br />
	Hier werden die Bedienelemente definiert.<br />
	<br />
	<em>Codebeispiel:</em><br />
	Suchen Sie nach der folgenden Zeile...<br />
	mySettings = {<br />
		...<br />
		markupSet:<br /> 
		[<br />
			{name:'Heading 1', className:'h1', key:'1', openWith:'\nh1(!(([![Class]!]))!). ', placeHolder:'Ihr Titel hier...'},<br />
			{...}<br />
		]<br />
	}<br />
</p>


<br />
<h3>Anpassungen: STYLE.CSS</h3>
<p>
	.\addons\gs_markitup\files\sets\style.css<br />
	Hier werden die Grafigen definiert.<br />
	<br />
	<em>Codebeispiel:</em><br />
	Suchen Sie nach der folgenden Zeile...<br />
	.markItUp .h1 a {<br />
		background-image:url(images/h1.png);<br />
	}<br />
</p>


<br />
<h3>Weitere Info zum Orginal:</h3>
<p>
	Ausfuehrliche Beschreibungen und Moeglichkeiten des Orginals von Jay Salvat finden Sie auf seiner Website:<br />
	<a href="http://markitup.jaysalvat.com/documentation/">Link zum Autor von MarkItUp</a>
</p>
