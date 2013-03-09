#*********************************************
#
# INSTALLATION
#
# Autor: 	G.Seilheimer
# Company:	contic.de
# Version: 	1.1.14
# Update:	2013-03-09
# CMS:		Redaxo 4.5
#
#*********************************************


#*********************************************
#
# insert values into rex_template
#
#*********************************************

INSERT IGNORE INTO `%TABLE_PREFIX%template` (`id`, `label`, `name`, `content`, `active`, `createuser`, `updateuser`, `createdate`, `updatedate`, `attributes`, `revision`) 
VALUES (711, '', 'gs : markitup (jquery)', '<!-- CSS of the MARK-IT-UP-Textarea -->\r\n<link rel="stylesheet" type="text/css" href="../files/addons/gs_markitup/skins/style.css" />\r\n\r\n<!-- CSS of the MARK-IT-UP -->\r\n<link rel="stylesheet" type="text/css" href="../files/addons/gs_markitup/sets/style.css" />\r\n\r\n<!-- SETTINGS of the MARK-IT-UP-Code -->\r\n<script type="text/javascript" src="../files/addons/gs_markitup/sets/set.js"></script>\r\n<script type="text/javascript" src="../files/addons/gs_markitup/jquery.markitup.js"></script>\r\n\r\n<!-- JAVASCRIPT to activate the MARK-IT-UP-Code -->\r\n<script type="text/javascript">\r\n\r\njQuery(function($)\r\n{\r\n// Add markItUp! to your textarea in one line\r\n   $(\'#markItUp\').markItUp(mySettings);\r\n\r\n// And you can add/remove markItUp! whenever you want\r\n   $(\'.toggle\').click(function() {\r\n   if ($("#markItUp.markItUpEditor").length === 1) {\r\n      $("#markItUp").markItUpRemove();\r\n      $("span", this).text("get markItUp! back");\r\n   } else {\r\n      $(\'#markItUp\').markItUp(mySettings);\r\n      $("span", this).text("remove markItUp!");\r\n   }\r\n   return false;\r\n   });\r\n});\r\n\r\n</script>', 0, 'gseilheimer', 'gseilheimer', 1291155881, 1291155881, 'a:3:{s:10:"categories";a:1:{s:3:"all";s:1:"1";}s:5:"ctype";a:0:{}s:7:"modules";a:1:{i:1;a:1:{s:3:"all";s:1:"1";}}}', 0);


#*********************************************
#
# alter values into rex_template
#
#*********************************************

ALTER TABLE `%TABLE_PREFIX%template` AUTO_INCREMENT=20;