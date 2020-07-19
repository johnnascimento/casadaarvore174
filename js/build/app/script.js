"use strict";define(["jquery"],function(e){console.log("script initialized !");var c={body:"body"};return function(e){this.options=Object.assign({},c,e),this.setOptions=function(e){return this.options=Object.assign({},this.options,e),this}.bind(this);function g(e){return l.querySelector(e)}function p(e,t,n,r,s,o,a){(a=l.createElement(e)).classList.add(n),a.id=r,a.appendChild(l.createTextNode(o)),null==s?g("."+t).appendChild(a):setTimeout(function(){g(s+t).appendChild(a)},1e3)}function f(e,t){var n,r,s;return!0===t&&!0===e?(s=[],(r=[]).push(v.first.options[v.first.link.selectedIndex].text),r.push(v.second.options[v.second.link.selectedIndex].text),r.push(v.third.options[v.third.link.selectedIndex].text),s.push(v.first.link.selectedIndex),s.push(v.second.link.selectedIndex),s.push(v.third.link.selectedIndex),{element1:r,element2:s}):(elems=[],n.push(v.first.options[v.first.link.selectedIndex].text),n.push(v.second.options[v.second.link.selectedIndex].text),n.push(v.third.options[v.third.link.selectedIndex].text),elems)}function r(e,t){var n="";switch(e.toLowerCase()){case"sol":n=0===t.element2[1]?"<strong>Sol na ":"<strong>Sol em ";break;case"lua":n=0===t.element2[1]?"<strong><strong>Lua na ":"<strong>Lua em ";break;case"ascendente":n=0===t.element2[1]?"<strong>Ascendente na ":"<strong>Ascendente ";break;case"mercúrio":n=0===t.element2[1]?"<strong>Mercúrio na ":"<strong>Mercúrio em ";break;case"vênus":n=0===t.element2[1]?"<strong>Vênus na ":"<strong>Vênus em ";break;case"marte":n=0===t.element2[1]?"<strong>Marte na ":"<strong>Marte em ";break;case"júpter":n=0===t.element2[1]?"<strong>Júpter na ":"<strong>Júpter em ";break;case"saturno":n=0===t.element2[1]?"<strong>Saturno na ":"<strong>Saturno em ";break;case"urano":n=0===t.element2[1]?"<strong>Urano na ":"<strong>Urano em ";break;case"netuno":n=0===t.element2[1]?"<strong>Netuno na ":"<strong>Netuno em ";break;case"plutão":n=0===t.element2[1]?"<strong>Plutão na ":"<strong>Plutão em ";break;case"nodos lunares":n=0===t.element2[1]?"<strong>Nodos Lunares na ":function(e){var t="";switch(e.element2[1]){case 1:t="<strong>Nodo Sul em "+e.element1[1]+" / Nodo Norte em Libra";break;case 2:t="<strong>Nodo Sul em "+e.element1[1]+" / Nodo Norte em Escorpião";break;case 3:t="<strong>Nodo Sul em "+e.element1[1]+" / Nodo Norte em Sagitário";break;case 4:t="<strong>Nodo Sul em "+e.element1[1]+" / Nodo Norte em Capricórnio";break;case 5:t="<strong>Nodo Sul em "+e.element1[1]+" / Nodo Norte em Aquário";break;case 6:t="<strong>Nodo Sul em "+e.element1[1]+" / Nodo Norte em Peixes";break;case 7:t="<strong>Nodo Sul em "+e.element1[1]+" / Nodo Norte em Áries";break;case 8:t="<strong>Nodo Sul em "+e.element1[1]+" / Nodo Norte em Touro";break;case 9:t="<strong>Nodo Sul em "+e.element1[1]+" / Nodo Norte em Gêmoes";break;case 10:t="<strong>Nodo Sul em "+e.element1[1]+" / Nodo Norte em Câncer";break;case 11:t="<strong>Nodo Sul em "+e.element1[1]+" / Nodo Norte em Leão";break;case 12:t="<strong>Nodo Sul em "+e.element1[1]+" / Nodo Norte em Virgem";break;default:t="empty"}return t}(t);break;case"parte da fortuna":n=0===t.element2[1]?"<strong>Parte da Fortuna na ":"<strong>Parte da Fortuna em ";break;case"quíron":n=0===t.element2[1]?"<strong>Quíron na ":"<strong>Quíron em ";break;case"juno":n=0===t.element2[1]?"<strong>Juno na ":"<strong>Juno em ";break;case"mercúrio retrógado":n=0===t.element2[1]?"<strong>Mercúrio Retrógado na ":"<strong>Mercúrio Retrógado em ";break;case"vênus retrógado":n=0===t.element2[1]?"<strong>Vênus Retrógado na ":"<strong>Vênus Retrógado em ";break;case"marte retrógado":n=0===t.element2[1]?"<strong>Marte Retrógado na ":"<strong>Marte Retrógado em ";break;case"júpter retrógado":n=0===t.element2[1]?"<strong>Júpter Retrógado na ":"<strong>Júpter Retrógado em ";break;case"saturno retrógado":n=0===t.element2[1]?"<strong>Saturno Retrógado na ":"<strong>Saturno Retrógado em ";break;case"urano retrógado":n=0===t.element2[1]?"<strong>Urano Retrógado na ":"<strong>Urano Retrógado em ";break;case"netuno retrógado":n=0===t.element2[1]?"<strong>Netuno Retrógado na ":"<strong>Netuno Retrógado em ";break;case"plutão retrógado":n=0===t.element2[1]?"<strong>Plutão Retrógado na ":"<strong>Plutão Retrógado em ";break;case"quíron retrógado":n=0===t.element2[1]?"<strong>Quíron Retrógado na ":"<strong>Quíron Retrógado em ";break;case"juno retrógado":n=0===t.element2[1]?"<strong>Juno Retrógado na ":"<strong>Juno Retrógado em ";break;default:n="empty"}return n}function b(e){var t=f(!0,!0),n="";for(o in data.planets)if((n=data.planets[o].title.replace(d,""))==e)return 0!==t.element2[0]&&0===t.element2[1]?k.push(r(n,t)+" "+t.element1[2]):0!==t.element2[0]&&0===t.element2[2]&&k.push(r(n,t)+" "+t.element1[1]),k;for(o in data.signos)if(data.signos[o].title.replace(d,"")==e){if(k.push(data.signos[o].text[t.element2[0]-1]),1===t.element2[0])for(a=0;a<data.signos[o].levels.length;a++)h.push(data.signos[o].levels[a]);else 12===t.element2[0]?I=data.signos[o].nodosLunares:13===t.element2[0]?I=data.defaultText.parteFortuna:14===t.element2[0]?I=data.defaultText.quironCurador:15===t.element2[0]?I=data.defaultText.junosCasasSignos:h.push("");return k}for(o in data.casas)if(data.casas[o].title.replace(d,"")==e)return k.push(data.casas[o].text[t.element2[0]-1]),I="",h.push(""),k;return k}function t(){var e,t,n=[],r=x,s="trashcan-"+x,o="textBlockWrapper-"+x,a="textBlockWrapperId-"+x,l="contentSpot-"+x,d=0!=v.second.link.selectedIndex?v.first.options[v.first.link.selectedIndex].text+" em "+v.second.options[v.second.link.selectedIndex].text:v.first.options[v.first.link.selectedIndex].text+" em "+v.third.options[v.third.link.selectedIndex].text,i='<div class="card card-'+x+'"><div class="card-header card-header-'+x+'" id="heading-'+x+'"><h5 class="mb-0"><button class="btn btn-link" data-toggle="collapse" data-target="#collapse-'+x+'" aria-expanded="true" aria-controls="collapse'+x+'">'+d+'</button><span class="fas fa-times-circle trashcan '+s+'" data-parent-card="card-'+x+'"></span></h5></div><div id="collapse-'+x+'" class="collapse show" aria-labelledby="heading-'+x+'" data-parent="#accordion"><div id="contentSpot-'+x+'" class="contentSpot contentSpot-'+x+' card-body col-12" data-parent-card="card-'+x+'"></div></div></div>',c=f(!0,!0);if(n.push(v.first.options[v.first.link.selectedIndex].text),n.push(v.second.options[v.second.link.selectedIndex].text),n.push(v.third.options[v.third.link.selectedIndex].text),t=n,0!==c.element2[0]&&0!==c.element2[1]||0!==c.element2[0]&&0!==c.element2[2]){g("#accordion").innerHTML+=i,p("div",l,o,a,null,"");g(".trashcan-"+x);x++}else N("contentSpot");h=[],e=function(e){k=[];return(e=e||[]).length?(e.forEach(b),k):void 0}(t);for(var u=0;u<t.length;u++){if(0===v.first.link.selectedIndex)return;if(0!==v.first.link.selectedIndex&&0===v.second.link.selectedIndex&&0===v.third.link.selectedIndex)return;if(0!==v.first.link.selectedIndex&&0!==v.second.link.selectedIndex||0!==v.third.link.selectedIndex){if(12!==v.first.link.selectedIndex&&13!==v.first.link.selectedIndex&&14!==v.first.link.selectedIndex&&15!==v.first.link.selectedIndex||(p("p",o,"arrayKlassNodos","arrayId",null,"nodosFortuna"),g(".textBlockWrapper-"+r).querySelector(".arrayKlassNodos").innerHTML=I),p("p",o,"arrayKlass-title","arrayId",null,"title created"),p("p",o,"arrayKlass","arrayId",null,"block created"),g(".textBlockWrapper-"+r).querySelector(".arrayKlass-title").innerHTML=e[0],g(".textBlockWrapper-"+r).querySelector(".arrayKlass").innerHTML=e[1],1!==v.first.link.selectedIndex)return;for(var m=0;m<h.length;m++)p("p",o,"levelsClass","levelsId-"+m,null,m),g(".textBlockWrapper-"+r).querySelector("#levelsId-"+m).innerHTML=h[m];return}}}function n(e,t){var n="";for(o in e)n=e[o].title.replace(d,""),p("option","listOfItems-"+t,"optionClass","optionId",null,n)}var l=document,s=l.body||l.bodyElement,o=(window,g(".contentSpot"),""),k=[],I="",a=0,h=[],d=new RegExp("</strong>","gmi"),x=0,i=(g("#contentSpot"),g("#submitBtn")),v={first:{link:g(".listOfItems-1"),options:g(".listOfItems-1").options,index:1},second:{link:g(".listOfItems-2"),options:g(".listOfItems-2").options,index:2},third:{link:g(".listOfItems-3"),options:g(".listOfItems-3").options,index:3}},N=function(e){var t,n=l.getElementsByClassName(e),r="",s="";if(n||n.length)for(r=n.length,t=0;t<r;t++)4<=n[t].childNodes[0].childNodes[1].innerHTML.length?console.log("%c didn't remove it: ","font-size: 12px; color: darkred;",n[t].children[t].children):(s="."+n[t].getAttribute("data-parent-card"),g(s).remove())};this.init=function(){n(data.planets,1),n(data.signos,2),n(data.casas,3),g(".listOfItems-2").setAttribute("disabled",!0),g(".listOfItems-3").setAttribute("disabled",!0),i.addEventListener("click",t),g(".listOfItems-1").addEventListener("change",function(e){switch(e.target.selectedIndex){case 0:g("#resetForm").click(),g(".listOfItems-2").setAttribute("disabled",!0),g(".listOfItems-3").setAttribute("disabled",!0);break;case 3:g(".listOfItems-3").selectedIndex=0,g(".listOfItems-2").removeAttribute("disabled",!0),g(".listOfItems-3").setAttribute("disabled",!0);break;default:g(".listOfItems-2").selectedIndex=0,g(".listOfItems-3").selectedIndex=0,g(".listOfItems-2").removeAttribute("disabled"),g(".listOfItems-3").removeAttribute("disabled")}}),g(".listOfItems-2").addEventListener("change",function(e){return 0!==e.target.selectedIndex?g(".listOfItems-3").setAttribute("disabled",!0):0===e.target.selectedIndex?g(".listOfItems-3").removeAttribute("disabled"):void 0}),g(".listOfItems-3").addEventListener("change",function(e){return 0!==e.target.selectedIndex?g(".listOfItems-2").setAttribute("disabled",!0):0===e.target.selectedIndex?g(".listOfItems-2").removeAttribute("disabled"):void 0}),g('input[type="reset"]').addEventListener("click",function(e){g(".listOfItems-2").setAttribute("disabled",!0),g(".listOfItems-3").setAttribute("disabled",!0)}),s.addEventListener("click",function(e){if(e.target.classList.contains("trashcan")){var t,n,r="."+e.target.getAttribute("data-parent-card");return t=e.target,void(""===(n=r)||null==n?t.parentNode.remove():g(n).remove())}}),setInterval(function(){N("contentSpot")},6e4)}}});