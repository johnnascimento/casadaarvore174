"use strict";define(["jquery","utils"],function(i,t){console.log("htmlToDoc initialized !",t);var o={body:"body",contentSpotWrapper:".contentSpotWrapper",printButton:"#printDocument"};return function(n){this.options=Object.assign({},o,n),this.setOptions=function(n){return this.options=Object.assign({},this.options,n),this}.bind(this),this.addSpinner=function(){return console.log("addSpinner was invoked, add is-loading class"),i(this.options.body).addClass("is-loading"),this}.bind(this),this.removeSpinner=function(){return console.log("removeSpinner was invoked, remove is-loading class"),i(this.options.body).removeClass("is-loading"),this}.bind(this),this.prepareContent=function(n){return window.print(),n(),console.log("prepareContent was invoked")}.bind(this),this.bindEvHanlders=function(){i(this.options.body).hasClass("is-loading")||(console.log("Body doesn't have is-loading, so apply it"),i(this.options.printButton).on("click",this.addSpinner)),i(this.options.printButton).on("click",t.debounce(function(n){console.log("click was called"),this.prepareContent(this.removeSpinner)}.bind(this),2e3))}.bind(this),this.init=function(){return console.log("htmlToDco initialized",this.options.contentSpotWrapper),this.bindEvHanlders(),this}.bind(this)}});