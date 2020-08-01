"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}define(["jquery","utils"],function(c,e){console.log("script initialized !");var u={body:"body",imageFileMap:"#imageFile",imageFileCover:"#imageFileCover",coverImage:".js-booksImageCover > img",userInfo:{userName:'.inputField[name="userName"]',dateOfBirth:'.inputField[name="dateOfBirth"]',timeOfBirth:'.inputField[name="timeOfBirth"]',stateOfBirth:'.inputField[name="stateOfBirth"]',countryOfBirth:'.inputField[name="countryOfBirth"]',signStar:'.inputField[name="signStar"]',ascendent:'.inputField[name="ascendent"]',moon:'.inputField[name="moon"]',imageFile:'.inputField[name="imageFile"]'},userInfoSpot:{userShortIntroduction:".userShortIntroduction",userName:".userName",dateOfBirth:".dateOfBirth",timeOfBirth:".timeOfBirth",stateOfBirth:".stateOfBirth",countryOfBirth:".countryOfBirth",signStartShortDescription:".signStartShortDescription",reportImage:".reportImage .reportImageImg"}};return function(e){this.options=Object.assign({},u,e),this.setOptions=function(e){return this.options=Object.assign({},this.options,e),this}.bind(this);function g(e){return i.querySelector(e)}function p(e,t,n,s,o,r,a){(a=i.createElement(e)).classList.add(n),a.id=s,a.appendChild(i.createTextNode(r)),null==o?g("."+t).appendChild(a):setTimeout(function(){g(o+t).appendChild(a)},1e3)}function f(e,t){var n,s,o;return!0===t&&!0===e?(o=[],(s=[]).push(x.first.options[x.first.link.selectedIndex].text),s.push(x.second.options[x.second.link.selectedIndex].text),s.push(x.third.options[x.third.link.selectedIndex].text),o.push(x.first.link.selectedIndex),o.push(x.second.link.selectedIndex),o.push(x.third.link.selectedIndex),{element1:s,element2:o}):(elems=[],n.push(x.first.options[x.first.link.selectedIndex].text),n.push(x.second.options[x.second.link.selectedIndex].text),n.push(x.third.options[x.third.link.selectedIndex].text),elems)}function s(e,t){var n="";switch(e.toLowerCase()){case"sol":n=0===t.element2[1]?"<strong>Sol na ":"<strong>Sol em ";break;case"lua":n=0===t.element2[1]?"<strong><strong>Lua na ":"<strong>Lua em ";break;case"ascendente":n=0===t.element2[1]?"<strong>Ascendente na ":"<strong>Ascendente ";break;case"mercúrio":n=0===t.element2[1]?"<strong>Mercúrio na ":"<strong>Mercúrio em ";break;case"vênus":n=0===t.element2[1]?"<strong>Vênus na ":"<strong>Vênus em ";break;case"marte":n=0===t.element2[1]?"<strong>Marte na ":"<strong>Marte em ";break;case"júpter":n=0===t.element2[1]?"<strong>Júpter na ":"<strong>Júpter em ";break;case"saturno":n=0===t.element2[1]?"<strong>Saturno na ":"<strong>Saturno em ";break;case"urano":n=0===t.element2[1]?"<strong>Urano na ":"<strong>Urano em ";break;case"netuno":n=0===t.element2[1]?"<strong>Netuno na ":"<strong>Netuno em ";break;case"plutão":n=0===t.element2[1]?"<strong>Plutão na ":"<strong>Plutão em ";break;case"nodos lunares":n=0===t.element2[1]?"<strong>Nodos Lunares na ":function(e){var t="";switch(e.element2[1]){case 1:t="<strong>Nodo Sul em "+e.element1[1]+" / Nodo Norte em Libra";break;case 2:t="<strong>Nodo Sul em "+e.element1[1]+" / Nodo Norte em Escorpião";break;case 3:t="<strong>Nodo Sul em "+e.element1[1]+" / Nodo Norte em Sagitário";break;case 4:t="<strong>Nodo Sul em "+e.element1[1]+" / Nodo Norte em Capricórnio";break;case 5:t="<strong>Nodo Sul em "+e.element1[1]+" / Nodo Norte em Aquário";break;case 6:t="<strong>Nodo Sul em "+e.element1[1]+" / Nodo Norte em Peixes";break;case 7:t="<strong>Nodo Sul em "+e.element1[1]+" / Nodo Norte em Áries";break;case 8:t="<strong>Nodo Sul em "+e.element1[1]+" / Nodo Norte em Touro";break;case 9:t="<strong>Nodo Sul em "+e.element1[1]+" / Nodo Norte em Gêmoes";break;case 10:t="<strong>Nodo Sul em "+e.element1[1]+" / Nodo Norte em Câncer";break;case 11:t="<strong>Nodo Sul em "+e.element1[1]+" / Nodo Norte em Leão";break;case 12:t="<strong>Nodo Sul em "+e.element1[1]+" / Nodo Norte em Virgem";break;default:t="empty"}return t}(t);break;case"parte da fortuna":n=0===t.element2[1]?"<strong>Parte da Fortuna na ":"<strong>Parte da Fortuna em ";break;case"quíron":n=0===t.element2[1]?"<strong>Quíron na ":"<strong>Quíron em ";break;case"juno":n=0===t.element2[1]?"<strong>Juno na ":"<strong>Juno em ";break;case"mercúrio retrógado":n=0===t.element2[1]?"<strong>Mercúrio Retrógado na ":"<strong>Mercúrio Retrógado em ";break;case"vênus retrógado":n=0===t.element2[1]?"<strong>Vênus Retrógado na ":"<strong>Vênus Retrógado em ";break;case"marte retrógado":n=0===t.element2[1]?"<strong>Marte Retrógado na ":"<strong>Marte Retrógado em ";break;case"júpter retrógado":n=0===t.element2[1]?"<strong>Júpter Retrógado na ":"<strong>Júpter Retrógado em ";break;case"saturno retrógado":n=0===t.element2[1]?"<strong>Saturno Retrógado na ":"<strong>Saturno Retrógado em ";break;case"urano retrógado":n=0===t.element2[1]?"<strong>Urano Retrógado na ":"<strong>Urano Retrógado em ";break;case"netuno retrógado":n=0===t.element2[1]?"<strong>Netuno Retrógado na ":"<strong>Netuno Retrógado em ";break;case"plutão retrógado":n=0===t.element2[1]?"<strong>Plutão Retrógado na ":"<strong>Plutão Retrógado em ";break;case"quíron retrógado":n=0===t.element2[1]?"<strong>Quíron Retrógado na ":"<strong>Quíron Retrógado em ";break;case"juno retrógado":n=0===t.element2[1]?"<strong>Juno Retrógado na ":"<strong>Juno Retrógado em ";break;default:n="empty"}return n}function h(e){var t=f(!0,!0),n="";for(r in data.planets)if((n=data.planets[r].title.replace(l,""))==e)return 0!==t.element2[0]&&0===t.element2[1]?b.push(s(n,t)+" "+t.element1[2]):0!==t.element2[0]&&0===t.element2[2]&&b.push(s(n,t)+" "+t.element1[1]),b;for(r in data.signos)if(data.signos[r].title.replace(l,"")==e){if(b.push(data.signos[r].text[t.element2[0]-1]),1===t.element2[0])for(a=0;a<data.signos[r].levels.length;a++)k.push(data.signos[r].levels[a]);else 12===t.element2[0]?I=data.signos[r].nodosLunares:13===t.element2[0]?I=data.defaultText.parteFortuna:14===t.element2[0]?I=data.defaultText.quironCurador:15===t.element2[0]?I=data.defaultText.junosCasasSignos:k.push("");return b}for(r in data.casas)if(data.casas[r].title.replace(l,"")==e)return b.push(data.casas[r].text[t.element2[0]-1]),I="",k.push(""),b;return b}function t(){var e,t,n=[],s=v,o="trashcan-"+v,r="textBlockWrapper-"+v,a="textBlockWrapperId-"+v,i="contentSpot-"+v,l=0!=x.second.link.selectedIndex?x.first.options[x.first.link.selectedIndex].text+" em "+x.second.options[x.second.link.selectedIndex].text:x.first.options[x.first.link.selectedIndex].text+" em "+x.third.options[x.third.link.selectedIndex].text,d='<div class="card card-'+v+'"><div class="card-header card-header-'+v+'" id="heading-'+v+'"><h5 class="mb-0"><button class="btn btn-link" data-toggle="collapse" data-target="#collapse-'+v+'" aria-expanded="true" aria-controls="collapse'+v+'">'+l+'</button><span class="fas fa-times-circle trashcan '+o+'" data-parent-card="card-'+v+'"></span></h5></div><div id="collapse-'+v+'" class="collapse show" aria-labelledby="heading-'+v+'" data-parent="#accordion"><div id="contentSpot-'+v+'" class="contentSpot contentSpot-'+v+' card-body col-12" data-parent-card="card-'+v+'"></div></div></div>',c=f(!0,!0);if(n.push(x.first.options[x.first.link.selectedIndex].text),n.push(x.second.options[x.second.link.selectedIndex].text),n.push(x.third.options[x.third.link.selectedIndex].text),t=n,0!==c.element2[0]&&0!==c.element2[1]||0!==c.element2[0]&&0!==c.element2[2]){g("#accordion").innerHTML+=d,p("div",i,r,a,null,"");g(".trashcan-"+v);v++}else S("contentSpot");k=[],e=function(e){b=[];return(e=e||[]).length?(e.forEach(h),b):void 0}(t);for(var u=0;u<t.length;u++){if(0===x.first.link.selectedIndex)return;if(0!==x.first.link.selectedIndex&&0===x.second.link.selectedIndex&&0===x.third.link.selectedIndex)return;if(0!==x.first.link.selectedIndex&&0!==x.second.link.selectedIndex||0!==x.third.link.selectedIndex){if(12!==x.first.link.selectedIndex&&13!==x.first.link.selectedIndex&&14!==x.first.link.selectedIndex&&15!==x.first.link.selectedIndex||(p("p",r,"arrayKlassNodos","arrayId",null,"nodosFortuna"),g(".textBlockWrapper-"+s).querySelector(".arrayKlassNodos").innerHTML=I),p("p",r,"arrayKlass-title","arrayId",null,"title created"),p("p",r,"arrayKlass","arrayId",null,"block created"),g(".textBlockWrapper-"+s).querySelector(".arrayKlass-title").innerHTML=e[0],g(".textBlockWrapper-"+s).querySelector(".arrayKlass").innerHTML=e[1],1!==x.first.link.selectedIndex)return;for(var m=0;m<k.length;m++)p("p",r,"levelsClass","levelsId-"+m,null,m),g(".textBlockWrapper-"+s).querySelector("#levelsId-"+m).innerHTML=k[m];return}}}function n(e,t){var n="";for(r in e)n=e[r].title.replace(l,""),p("option","listOfItems-"+t,"optionClass","optionId",null,n)}var i=document,o=i.body||i.bodyElement,r=(window,g(".contentSpot"),""),b=[],I="",a=0,k=[],l=new RegExp("</strong>","gmi"),v=0,d=(g("#contentSpot"),g("#submitBtn")),x={first:{link:g(".listOfItems-1"),options:g(".listOfItems-1").options,index:1},second:{link:g(".listOfItems-2"),options:g(".listOfItems-2").options,index:2},third:{link:g(".listOfItems-3"),options:g(".listOfItems-3").options,index:3}},S=function(e){var t,n=i.getElementsByClassName(e),s="",o="";if(n||n.length)for(s=n.length,t=0;t<s;t++)4<=n[t].childNodes[0].childNodes[1].innerHTML.length?console.log("%c didn't remove it: ","font-size: 12px; color: darkred;",n[t].children[t].children):(o="."+n[t].getAttribute("data-parent-card"),g(o).remove())};this.injectFixedContent=function(){c(".fixedContentSpot").html(" "),c(".reportSummary").html(" "),c.each(data.fixedTexts,function(e,t){c(t).each(function(e,t){t.info?c(".reportSummary").html(c(".reportSummary").html()+t.info):c.each(t,function(e,t){c(".fixedContentSpot").html(c(".fixedContentSpot").html()+t)}.bind(this))})}.bind(this))}.bind(this),this.previewImage=function(e){if(null!=e&&null!=e&&""!=e){console.log("Preview image",e),console.log("Preview image",e.target);var t=new FileReader,n="imageFileCover"==c(e.target).prop("id");console.log("currentTarget",n),t.onload=function(){console.log("reader.onload"),n?c(this.options.coverImage).attr("src",t.result):c(this.options.userInfoSpot.reportImage).attr("src",t.result)}.bind(this),t.readAsDataURL(e.target.files[0])}}.bind(this),this.cleanReportSpot=function(){c(this.options.userInfoSpot.userName).html(" "),c(this.options.userInfoSpot.dateOfBirth).html(" "),c(this.options.userInfoSpot.timeOfBirth).html(" "),c(this.options.userInfoSpot.stateOfBirth).html(" "),c(this.options.userInfoSpot.countryOfBirth).html(" "),c(this.options.userInfoSpot.signStartShortDescription).html(" ")}.bind(this),this.getUserInfo=function(){return[c(this.options.userInfo.userName).val(),"Nasceu ".concat(c(this.options.userInfo.dateOfBirth).val()," "),"às ".concat(c(this.options.userInfo.timeOfBirth).val().split(":").join("h")," "),"em ".concat(c(this.options.userInfo.stateOfBirth).val()," | "),"".concat(c(this.options.userInfo.countryOfBirth).val(),"."),"Seu signo é ".concat(c(this.options.userInfo.signStar).val(),", seu Ascendente é ").concat(c(this.options.userInfo.ascendent).val()," e sua Lua é em ").concat(c(this.options.userInfo.moon).val())]}.bind(this),this.insertUserInfo=function(e,t){this.cleanReportSpot();var n=this.getUserInfo();if(console.log("userInfo",n),c(".userName").html(n[0]),c(".dateOfBirth").html(n[1]),c(".timeOfBirth").html(n[2]),c(".stateOfBirth").html(n[3]),c(".countryOfBirth").html(n[4]),c(".signStartShortDescription").html(n[5]),console.log("typeof callbackFunc",_typeof(e)),"function"==typeof e){if(""===t)return;e(t)}}.bind(this),this.togglePanel=function(){c("body").on("click",".toggle-icon",function(e){if(c(e.target).parents(".mainPanel").length)return console.log("!$(ev.target).parents('.mainPanel').hasClass('active')",c(e.target).parents(".mainPanel").hasClass("active")),c(e.target).parents(".mainPanel").hasClass("active")?(console.log("$(ev.target).parents('.mainPanel').hasClass('active')",c(e.target).parents(".mainPanel").hasClass("active")),c(".mainPanel").removeClass("active")):c(".mainPanel").addClass("active")}.bind(this))}.bind(this),this.showMessage=function(e){if(console.log("this.showMessage",e),null!=e&&""!==e){if(console.log("this.showMessage",c(e.target).parent()),c(".inserted-successfully").length)c(".inserted-successfully").fadeIn();else{c(e.target).parent().append('<div class="message-success inserted-successfully bg-success text-white p-4">Informações inseridas com sucesso</div>')}setTimeout(this.hideMessage,2e3)}}.bind(this),this.hideMessage=function(){c(".inserted-successfully").fadeOut()}.bind(this),this.init=function(){n(data.planets,1),n(data.signos,2),n(data.casas,3),g(".listOfItems-2").setAttribute("disabled",!0),g(".listOfItems-3").setAttribute("disabled",!0),d.addEventListener("click",t),this.injectFixedContent(),this.togglePanel(),g(".listOfItems-1").addEventListener("change",function(e){switch(e.target.selectedIndex){case 0:g("#resetForm").click(),g(".listOfItems-2").setAttribute("disabled",!0),g(".listOfItems-3").setAttribute("disabled",!0);break;case 3:g(".listOfItems-3").selectedIndex=0,g(".listOfItems-2").removeAttribute("disabled",!0),g(".listOfItems-3").setAttribute("disabled",!0);break;default:g(".listOfItems-2").selectedIndex=0,g(".listOfItems-3").selectedIndex=0,g(".listOfItems-2").removeAttribute("disabled"),g(".listOfItems-3").removeAttribute("disabled")}}),g(".listOfItems-2").addEventListener("change",function(e){return 0!==e.target.selectedIndex?g(".listOfItems-3").setAttribute("disabled",!0):0===e.target.selectedIndex?g(".listOfItems-3").removeAttribute("disabled"):void 0}),g(".listOfItems-3").addEventListener("change",function(e){return 0!==e.target.selectedIndex?g(".listOfItems-2").setAttribute("disabled",!0):0===e.target.selectedIndex?g(".listOfItems-2").removeAttribute("disabled"):void 0}),g("#insertIntoLayout").addEventListener("click",function(e){console.log("Text Inserted"),this.insertUserInfo(this.showMessage,e)}.bind(this)),g('input[type="reset"]').addEventListener("click",function(e){g(".listOfItems-2").setAttribute("disabled",!0),g(".listOfItems-3").setAttribute("disabled",!0)}),c(this.options.body).on("change",this.options.imageFileCover,this.previewImage),c(this.options.body).on("change",this.options.imageFileMap,this.previewImage),o.addEventListener("click",function(e){if(e.target.classList.contains("trashcan")){var t,n,s="."+e.target.getAttribute("data-parent-card");return t=e.target,void(""===(n=s)||null==n?t.parentNode.remove():g(n).remove())}}),setInterval(function(){S("contentSpot")},6e4)}.bind(this)}});