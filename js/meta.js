var viewPortTag=document.createElement('meta');
viewPortTag.id="viewport";
viewPortTag.name = "viewport";
viewPortTag.content = "width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;";
top.contentDocument.getElementsByTagName('head')[0].appendChild(viewPortTag);