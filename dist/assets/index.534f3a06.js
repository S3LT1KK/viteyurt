const a=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}};a();MicroModal.init({disableScroll:!0});const r=document.querySelector(".menu__icon"),l=document.querySelector(".menu__body");r&&r.addEventListener("click",function(i){document.body.classList.toggle("_lock"),r.classList.toggle("_active"),l.classList.toggle("_active")});document.querySelectorAll("li").forEach(function(i){i.addEventListener("click",function(n){document.body.classList.remove("_lock"),r.classList.toggle("_active"),l.classList.toggle("_active")})});new Swiper(".slider__bl",{direction:"horizontal",loop:!0,slidesPerView:1,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});new Swiper(".swiper",{direction:"horizontal",loop:!0,slidesPerView:3,slidesPerColumn:2,spaceBetween:"5%",autoplay:{delay:5e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});const u=()=>{document.querySelectorAll(".characteristics__item").forEach(n=>{const c=n.querySelector(".characteristics__title"),o=n.querySelector(".characteristics__description");c.addEventListener("click",()=>{o.classList.contains("open")?o.style.height="":o.style.height=o.scrollHeight+"px",c.classList.toggle("active"),o.classList.toggle("open")})})};u();
