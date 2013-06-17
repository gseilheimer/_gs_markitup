// -------------------------------------------------------------------
// markItUp!
// -------------------------------------------------------------------
// Copyright (C) 2008 Jay Salvat
// http://markitup.jaysalvat.com/
// -------------------------------------------------------------------
// Textile tags example
// http://en.wikipedia.org/wiki/Textile_(markup_language)
// http://www.textism.com/
// -------------------------------------------------------------------
// Feel free to add more tags
// -------------------------------------------------------------------

function insertImage(src, desc) {
   img = src.replace(/files\//, "");
   //jQuery.markItUp({ replaceWith:"!index.php?rex_resize=[![Image Width]!]w__"+ img +"!"});
   //jQuery.markItUp({ replaceWith: '![![FancyBoxStyle:!:(fancyboxStyleInlineSpecial fancybox.iframe)]!]{float: [![Align:!:left|right]!]; padding: 0.5em 1em;}index.php?rex_img_type=fancybox_resize_[![Size:!:150|250|350|600]!]&rex_img_file=' + img + '(' + desc + ')!'});
   jQuery.markItUp({ replaceWith: '!{float: [![Align:!:left|right]!]; padding: 0.5em 1em;}index.php?rex_img_type=fancybox_resize_[![Size:!:150|250|350|600]!]&rex_img_file=' + img + '(' + desc + ')!'});
}

function insertLink(url, desc) {
   jQuery.markItUp({openWith: '"[![FancyBoxStyle_INLINE:!:(fancyboxStyleInlineDefault fancybox.iframe)]!]' + desc, closeWith: '":' + url});
}

function markitup_getURLParam(strParamName) {
   var strReturn = "";
   var strHref = window.location.href;
   if (strHref.indexOf("?") > -1) {
      var strQueryString = strHref.substr(strHref.indexOf("?")).toLowerCase();
      var aQueryString = strQueryString.split("&");
      for (var iParam = 0; iParam < aQueryString.length; iParam++) {
         if (aQueryString[iParam].indexOf(strParamName.toLowerCase() + "=") > -1) {
            var aParam = aQueryString[iParam].split("=");
            strReturn = aParam[1];
            break;
         }
      }
   }
   return unescape(strReturn);
}

mySettings = {
   previewParserPath: '', // path to your Textile parser
   onShiftEnter: {keepDefault: false, replaceWith: '<br />\n'},
   markupSet: [
      {name: 'Heading 1', className: 'h1', key: '1', openWith: '\nh1(!(([![Class]!]))!). ', placeHolder: 'Ihr Titel hier...'},
      {name: 'Heading 2', className: 'h2', key: '2', openWith: '\nh2(!(([![Class]!]))!). ', placeHolder: 'Ihr Titel hier...'},
      {name: 'Heading 3', className: 'h3', key: '3', openWith: '\nh3(!(([![Class]!]))!). ', placeHolder: 'Ihr Titel hier...'},
      {name: 'Heading 4', className: 'h4', key: '4', openWith: '\nh4(!(([![Class]!]))!). ', placeHolder: 'Ihr Titel hier...'},
      {name: 'Heading 5', className: 'h5', key: '5', openWith: '\nh5(!(([![Class]!]))!). ', placeHolder: 'Ihr Titel hier...'},
      {name: 'Heading 6', className: 'h6', key: '6', openWith: '\nh6(!(([![Class]!]))!). ', placeHolder: 'Ihr Titel hier...'},
      {separator: '---------------'},
      {name: 'Bold', key: 'B', className: 'bold', closeWith: '*', openWith: '*'},
      {name: 'Italic', key: 'I', className: 'italic', closeWith: '_', openWith: '_'},
      {name: 'Underline', key: 'U', className: 'underline', openWith: '%{text-decoration:underline}', closeWith: '%'},
      {name: 'Stroke through', key: 'S', className: 'stroke', closeWith: '-', openWith: '-'},
      {name: 'Insertion', className: 'insert', closeWith: '+', openWith: '+'},
      {separator: '---------------'},
      {name: 'Bulleted list', className: 'list-bullet', openWith: '(!(* |!|*)!)'},
      {name: 'Numeric list', className: 'list-numeric', openWith: '(!(# |!|#)!)'},
      {separator: '---------------'},
      {name: 'Superscript', className: 'superscript', closeWith: '^', openWith: '^'},
      {name: 'Subscript', className: 'subscript', closeWith: '~', openWith: '~'},
      {separator: '---------------'},
      {name: 'Citation', className: 'citation', closeWith: '??', openWith: '??'},
      {name: 'Quotes', className: 'quote', openWith: '@', closeWith: '@', dropMenu: [
         {name: 'Quotes Block', className: 'quotes', openWith: 'bq(!(([![Class]!]))!). '}
      ]},
      {name: 'Code', className: 'code', openWith: '@', closeWith: '@', dropMenu: [
         {name: 'Code Block', className: 'code_block', openWith: 'bc(!(([![Class]!]))!). '}
      ]},
      {separator: '---------------'},
      {name: 'Align', className: 'align', dropMenu: [
         {name: 'align left', className: 'align-left', openWith: 'p<.(!(([![Class]!]))!). '},
         {name: 'align right', className: 'align-right', openWith: 'p>.(!(([![Class]!]))!). '},
         {name: 'align center', className: 'align-centered', openWith: 'p=.(!(([![Class]!]))!). '},
         {name: 'align  justified', className: 'align-justified', openWith: 'p<>.(!(([![Class]!]))!). '}
      ]},
      {separator: '---------------' },
      {name: 'Colors', className: "colors", dropMenu: [
         {name: 'Yellow', openWith: '%{color:yellow}', closeWith: '%', className: "col1-1" },
         {name: 'Orange', openWith: '%{color:orange}', closeWith: '%', className: "col1-2" },
         {name: 'Red', openWith: '%{color:red}', closeWith: '%', className: "col1-3" },
         {name: 'Blue', openWith: '%{color:blue}', closeWith: '%', className: "col2-1" },
         {name: 'Purple', openWith: '%{color:purple}', closeWith: '%', className: "col2-2" },
         {name: 'Green', openWith: '%{color:green}', closeWith: '%', className: "col2-3" },
         {name: 'White', openWith: '%{color:white}', closeWith: '%', className: "col3-1" },
         {name: 'Gray', openWith: '%{color:gray}', closeWith: '%', className: "col3-2" },
         {name: 'Black', openWith: '%{color:black}', closeWith: '%', className: "col3-3" }
      ]},
      {name: 'Font Size', key: 'F', openWith: '%{font-size=[![Text size in em]!em]}', closeWith: '%', className: "fonts", dropMenu: [
         {name: 'Big', openWith: '%{font-size:1.5em}', closeWith: '%' },
         {name: 'Normal', openWith: '%{font-size:1.2em}', closeWith: '%' },
         {name: 'Small', openWith: '%{font-size:0.9em}', closeWith: '%' }
      ]},
      {separator: '---------------'},
      {name: 'Media', className: 'media', dropMenu: [
         {name: 'Image (Default)', className: 'image',
            beforeInsert: function (h) {
               openMediaPool('TINYIMG');
            }
         },
         {name: 'Image (FancyBox)', className: 'image',
            openWith: '"(fancyboxStyleInlineDefault) ',
            closeWith: '":files/+img+',
            beforeInsert: function (h) {
               openMediaPool('TINYIMG');
            }
         },
         {name: 'Video (Default)', className: 'video',
            beforeInsert: function (h) {
               openMediaPool('TINY');
            },
            openBlockWith: 'notextile. <video id="video_1" class="video-js vjs-default-skin" controls  preload="auto" width="480" height="320" poster="my_video_poster.png" data-setup="{}">',
            openWith: '<source src="my_video.mp4" type="video/mp4">',
            closeWith: '',
            closeBlockWith: '</video>',
            multiline: true
         }
      ]},
      {separator: '---------------'},
      {name: 'Links', className: 'link', dropMenu: [
         {name: 'Link intern Pop-Up', className: 'link-intern',
            beforeInsert: function (h) {
               openLinkMap('TINY', '&clang=' + markitup_getURLParam('clang') + '&category_id=' + markitup_getURLParam('article_id'));
            }
         },
         {name: 'Link intern', className: 'link-intern',
            beforeInsert: function (h) {
               openLinkMap('TINY', '&clang=' + markitup_getURLParam('clang') + '&category_id=' + markitup_getURLParam('article_id'));
            }
         },
         {name: 'Link media', className: 'link-media',
            beforeInsert: function (h) {
               openMediaPool('TINY');
            }
         },
         {name: 'Link extern', className: 'link-extern', openWith: '"', closeWith: '([![Title]!])":[![Link:!:http://]!]', placeHolder: 'Ihr Text zum LINK hier...'},
         {name: 'Link mail-to', className: 'link-mailto', openWith: '"', closeWith: '([![Title]!])":[![Link:!:mailto:]!]', placeHolder: 'Ihre E-Mailadresse hier...'}
      ]},
      {separator: '---------------'},
      {name: 'Content Features', className: 'content-features', dropMenu: [
         {name: 'Tabs', className: 'tabs', openWith: '\nnotextile. <div id="tabs" class="tabs" title="[![Title]!]">\n\n', closeWith: '\nnotextile. </div>\n\n', placeHolder: 'Ihr Inhalt im TAB...\n'},
         {name: 'Accordion Headline', className: 'accordion-headline', openWith: '\nh3(bar#accordion). ', placeHolder: 'Ihr Titel hier...'},
         {name: 'Accordion Content', className: 'accordion-content', openWith: '\nnotextile. <div id="accordion" class="content">\n\n', closeWith: '\nnotextile. </div>\n\n', placeHolder: 'Ihr Inhalt im TAB...\n'}
      ]},
      {separator: '---------------'},
      {name: 'Editor (size)', className: 'resize', dropMenu: [
         {name: 'Editor (smaller)', className: 'resize-small' },
         {name: 'Editor (larger)', className: 'resize-large' }
      ]},
      {separator: '---------------'},
      {name: 'Table', className: 'table', placeHolder: "Inhalt der Zelle...",
         replaceWith: function (h) {
            cols = prompt("Wie viele Spalten?");
            rows = prompt("Wie viele Reihen?");
            html = "";
            for (r = 0; r < rows; r++) {
               for (c = 0; c < cols; c++) {
                  html += "| " + (h.placeHolder + " " || "");
               }
               html += "|\n";
            }
            return html;
         }, dropMenu: [

         {name: 'Table (thead)', className: 'table-th', placeHolder: "Titel...",
            replaceWith: function (h) {
               cols = prompt("Wie viele Spalten?");
               rows = 1;
               html = "";
               for (r = 0; r < rows; r++) {

                  html += "|^(header).\n";

                  for (c = 0; c < cols; c++) {
                     html += "|_. " + c + ". " + (h.placeHolder + " " || "");
                  }

                  html += "|\n";
               }
               return html;
            }
         },
         {name: 'Table (tr/td)', className: 'table-td', placeHolder: "Inhalt der Zelle...",
            replaceWith: function (h) {
               cols = prompt("Wie viele Spalten?");
               rows = prompt("Wie viele Reihen?");
               html = "";
               for (r = 0; r < rows; r++) {
                  html += "|-(body).\n";
                  for (c = 0; c < cols; c++) {
                     html += "| " + (h.placeHolder + " " || "");
                  }
                  html += "|\n";
               }
               return html;
            }
         },
         {name: 'Table (tfooter)', className: 'table-ft', placeHolder: "Inhalt des Footers...",
            replaceWith: function (h) {
               cols = 1;
               cols_tab = prompt("Wie viele Spalten besteht die Tabelle?");
               html = "";

               for (c = 0; c < cols; c++) {
                  html += "|~(footer).\n";
                  html += "|\\=" + cols_tab + ". " + (h.placeHolder + " " || "");
               }
               html += "|\n";

               return html;
            }
         }
      ]}
   ]
}