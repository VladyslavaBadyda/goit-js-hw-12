import{S as L,a as v,i}from"./assets/vendor-P1Bz7PaC.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const p=document.querySelector(".gallery"),f=document.querySelector(".loader"),y=document.querySelector(".load-more-button"),b=new L(".gallery a");function S(r){const t=r.map(({largeImageURL:a,webformatURL:n,tags:e,likes:o,views:s,comments:h,downloads:w})=>`<li class="gallery-item">
            <a class="gallery-link" href="${a}">
            <img class="gallery-image" src="${n}" alt="${e}" loading="lazy"> 
            </a>
            <div class="gallery-bottom-wrapper">
                <div class="gallery-inner-wrapper">
                    <p class="gallery-wrapper-title">Likes</p>
                    <p class="gallery-wrapper-value">${o}</p>
                    </div>
                    <div class="gallery-inner-wrapper">
                        <p class="gallery-wrapper-title">Views</p>
                        <p class="gallery-wrapper-value">${s}</p>
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
                                </li>`).join("");p.insertAdjacentHTML("beforeend",t),b.refresh()}function q(){p.innerHTML=""}function B(){f.classList.remove("hiden")}function M(){f.classList.add("hiden")}function P(){y.classList.remove("hiden")}function c(){y.classList.add("hiden")}const $="https://pixabay.com/api/",E="54348256-4fe7e6271296be96900661c2d",m=15;async function O(r,t){const{data:a}=await v.get($,{params:{key:E,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:m}});return a}const A=document.querySelector("form"),H=document.querySelector("input"),I=document.querySelector(".load-more-button");let l=1,d="",u=0;A.addEventListener("submit",x);I.addEventListener("click",G);async function x(r){r.preventDefault();const t=H.value.trim();if(!t){i.info({message:"Введіть запит для пошуку зображень"});return}if(t===d){i.info({message:"Такий самий запит уже виконано",timeout:2200});return}d=t,l=1,u=0,q(),c(),await g()}async function G(){l+=1,c(),await g()}async function g(){B();try{const r=await O(d,l),{hits:t,totalHits:a}=r;if(l===1&&(u=a),t.length===0){l===1&&i.warning({message:"За вашим запитом нічого не знайдено. Спробуйте інший запит."}),c();return}S(t),l>1&&R(),m*l>=u?(c(),u>0&&i.info({message:"Ви переглянули всі доступні зображення",timeout:4e3})):P()}catch(r){console.error("Помилка завантаження зображень:",r),i.error({title:"Помилка",message:"Не вдалося завантажити зображення. Перевірте підключення або спробуйте пізніше.",timeout:5e3,position:"topRight"}),c()}finally{M()}}function R(){const r=document.querySelector(".gallery-item");if(!r)return;const{height:t}=r.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
