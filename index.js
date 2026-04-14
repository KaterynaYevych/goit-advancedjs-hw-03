import{a as u,S as p,i as n}from"./assets/vendor-D3Q8GMQW.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=r(e);fetch(e.href,a)}})();const m="21579968-57157616dd1d75172f384a8c7",g="https://pixabay.com/api/";function y(t){return u.get(g,{params:{key:m,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>s.data)}const l=document.querySelector("#gallery"),c=document.querySelector("#loader"),h=new p(".gallery a",{captionsData:"alt",captionDelay:250});function v(t){const s=t.map(({webformatURL:r,largeImageURL:o,tags:e,likes:a,views:i,comments:d,downloads:f})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${o}">
          <img
            class="gallery-image"
            src="${r}"
            alt="${e}"
            loading="lazy"
          />
          <div class="card-info">
            <div class="card-info-item">
              <span class="card-info-label">Likes</span>
              <span class="card-info-value">${a}</span>
            </div>
            <div class="card-info-item">
              <span class="card-info-label">Views</span>
              <span class="card-info-value">${i}</span>
            </div>
            <div class="card-info-item">
              <span class="card-info-label">Comments</span>
              <span class="card-info-value">${d}</span>
            </div>
            <div class="card-info-item">
              <span class="card-info-label">Downloads</span>
              <span class="card-info-value">${f}</span>
            </div>
          </div>
        </a>
      </li>`).join("");l.insertAdjacentHTML("beforeend",s),h.refresh()}function L(){l.innerHTML=""}function b(){c.classList.add("is-visible")}function S(){c.classList.remove("is-visible")}const $=document.querySelector(".form");$.addEventListener("submit",t=>{t.preventDefault();const s=t.target.elements["search-text"].value.trim();s&&(L(),b(),y(s).then(r=>{if(r.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}v(r.hits)}).catch(r=>{n.error({message:`Something went wrong: ${r.message}`,position:"topRight"})}).finally(()=>{S()}))});
//# sourceMappingURL=index.js.map
