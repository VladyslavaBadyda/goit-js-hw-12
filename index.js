import{S as w,a as L,i as c}from"./assets/vendor-P1Bz7PaC.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const u=document.querySelector(".gallery"),p=document.querySelector(".loader"),f=document.querySelector(".load-more-button"),v=new w(".gallery a");function b(o){const t=o.map(({largeImageURL:a,webformatURL:n,tags:e,likes:r,views:s,comments:g,downloads:h})=>`<li class="gallery-item">
            <a class="gallery-link" href="${a}">
            <img class="gallery-image" src="${n}" alt="${e}" loading="lazy"> 
            </a>
            <div class="gallery-bottom-wrapper">
                <div class="gallery-inner-wrapper">
                    <p class="gallery-wrapper-title">Likes</p>
                    <p class="gallery-wrapper-value">${r}</p>
                    </div>
                    <div class="gallery-inner-wrapper">
                        <p class="gallery-wrapper-title">Views</p>
                        <p class="gallery-wrapper-value">${s}</p>
                        </div>
                        <div class="gallery-inner-wrapper">
                            <p class="gallery-wrapper-title">Comments</p>
                            <p class="gallery-wrapper-value">${g}</p>
                            </div>
                            <div class="gallery-inner-wrapper">
                                <p class="gallery-wrapper-title">Downloads</p>
                                <p class="gallery-wrapper-value">${h}</p>
                                </div>
                                </div>
                                </li>`).join("");u.insertAdjacentHTML("beforeend",t),v.refresh()}function S(){u.innerHTML=""}function q(){p.classList.remove("hiden")}function B(){p.classList.add("hiden")}function H(){f.classList.remove("hiden")}function i(){f.classList.add("hiden")}const M="https://pixabay.com/api/",P="54348256-4fe7e6271296be96900661c2d",y=15;async function $(o,t){const{data:a}=await L.get(M,{params:{key:P,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:y}});return a}const E=document.querySelector("form"),O=document.querySelector("input"),A=document.querySelector(".load-more-button");let l=1,d="";E.addEventListener("submit",I);A.addEventListener("click",x);async function I(o){o.preventDefault();const t=O.value.trim();if(!t){c.info({message:"Введіть запит для пошуку зображень"});return}if(t===d){c.info({message:"Такий самий запит уже виконано",timeout:2200});return}d=t,l=1,totalHits=0,S(),i(),await m()}async function x(){l+=1,i(),await m()}async function m(){q();try{const o=await $(d,l),{hits:t,totalHits:a}=o;if(l===1&&(totalHits=a),t.length===0){l===1&&c.warning({message:"За вашим запитом нічого не знайдено. Спробуйте інший запит."}),i();return}b(t),l>1&&G(),y*l>=totalHits?(i(),totalHits>0&&c.info({message:"Ви переглянули всі доступні зображення",timeout:4e3})):H()}catch{i()}finally{B()}}function G(){const o=document.querySelector(".gallery-item");if(!o)return;const{height:t}=o.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
