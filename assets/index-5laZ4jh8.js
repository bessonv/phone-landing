(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function u(){let n=!1;const o=document.querySelector("#read"),r=document.querySelector("#read-text");o.addEventListener("click",()=>{r.classList.toggle("footer__text_hidden"),n=!n,o.innerHTML=n?"Read less":"Read more"})}function d(){const n=document.querySelector("#open-menu"),o=document.querySelector("#close-menu"),r=document.querySelector("#menu");n.addEventListener("click",()=>{document.body.classList.toggle("fixed"),r.classList.toggle("menu_closed")}),o.addEventListener("click",()=>{document.body.classList.toggle("fixed"),r.classList.toggle("menu_closed")})}document.addEventListener("DOMContentLoaded",()=>{u(),d()});
