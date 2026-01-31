import{S as v,a as L,i as c}from"./assets/vendor-P1Bz7PaC.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}})();const p=document.querySelector(".gallery"),f=document.querySelector(".loader"),y=document.querySelector(".load-more-button"),b=new v(".gallery a");function S(t){const e=t.map(({largeImageURL:o,webformatURL:i,tags:r,likes:a,views:l,comments:h,downloads:w})=>`<li class="gallery-item">
            <a class="gallery-link" href="${o}">
            <img class="gallery-image" src="${i}" alt="${r}" loading="lazy"> 
            </a>
            <div class="gallery-bottom-wrapper">
                <div class="gallery-inner-wrapper">
                    <p class="gallery-wrapper-title">Likes</p>
                    <p class="gallery-wrapper-value">${a}</p>
                    </div>
                    <div class="gallery-inner-wrapper">
                        <p class="gallery-wrapper-title">Views</p>
                        <p class="gallery-wrapper-value">${l}</p>
                        </div>
                        <div class="gallery-inner-wrapper">
                            <p class="gallery-wrapper-title">Comments</p>
                            <p class="gallery-wrapper-value">${h}</p>
                            </div>
                            <div class="gallery-inner-wrapper">
                                <p class="gallery-wrapper-title">Downloads</p>
                                <p class="gallery-wrapper-value">${w}</p>
                                </div>
                                </div>
                                </li>`).join("");p.insertAdjacentHTML("beforeend",e),b.refresh()}function q(){p.innerHTML=""}function P(){f.classList.remove("hiden")}function B(){f.classList.add("hiden")}function E(){y.classList.remove("hiden")}function n(){y.classList.add("hiden")}const M="https://pixabay.com/api/",$="54348256-4fe7e6271296be96900661c2d",m=15;async function A(t,e){const{data:o}=await L.get(M,{params:{key:$,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:m}});return o}const I=document.querySelector("form"),O=document.querySelector("input"),x=document.querySelector(".load-more-button");let s=1,u="",d=!1;I.addEventListener("submit",G);x.addEventListener("click",H);async function G(t){t.preventDefault();const e=O.value.trim();if(!e){c.info({message:"Введіть запит для пошуку зображень"});return}e!==u&&(u=e,s=1,d=!1,q(),n(),await g())}async function H(){s+=1,n(),await g()}async function g(){P();try{const t=await A(u,s),{hits:e,totalHits:o}=t;if(e.length===0){s===1&&c.warning({message:"За вашим запитом нічого не знайдено. Спробуйте інший запит."}),d=!0,n();return}S(e),s>1&&z(),m*s>=o?(d=!0,n(),c.info({message:"Ви дійшли до кінця результатів пошуку."})):E()}catch(t){console.error(t);let e="Щось пішло не так. Спробуйте ще раз пізніше.";if(t.response){const o=t.response.status;o===400?e="Некоректний запит":o===401||o===403?e="Помилка авторизації (перевірте API ключ)":o===429?e="Забагато запитів. Зачекайте трохи":o>=500&&(e="Проблема на стороні Pixabay")}else t.request&&(e="Немає відповіді від сервера. Перевірте інтернет-з’єднання.");c.error({message:e,timeout:4e3}),n()}finally{B()}}function z(){const t=document.querySelector(".gallery-item");if(!t)return;const{height:e}=t.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
