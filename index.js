import{a as p,S as y,i as n}from"./assets/vendor--6n4cVRZ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const d="54674722-b145bb2552402daa868c731d8",f=async o=>(await p.get("https://pixabay.com/api/",{params:{key:d,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data,u=document.querySelector(".gallery"),g=new y(".gallery a",{overlay:!0,nav:!0,captionDelay:250}),h=o=>{const t=o.map(s=>`<li class="gallery-item">
      <a class="gallery-link" href="${s.largeImageURL}">
        <img
          class="gallery-image"
          src="${s.webformatURL}"
          alt="${s.tags}"
        />
      </a>
      <ul class="gallery-image-metainfo">
        <li class="metainfo-item">
            <p>Likes</p>
            <span>${s.likes}</span>
        </li>
        <li class="metainfo-item">
            <p>Views</p>
            <span>${s.views}</span>
        </li>
        <li class="metainfo-item">
            <p>Comments</p>
            <span>${s.comments}</span>
        </li>
        <li class="metainfo-item">
            <p>Downloads</p>
            <span>${s.downloads}</span>
        </li>
      </ul>
    </li>`).join("");u.insertAdjacentHTML("beforeend",t),g.refresh()},w=()=>{u.innerHTML=""},m=document.querySelector(".loader"),L=()=>{m.style.display="block"},l=()=>{m.style.display="none"},b=document.querySelector(".form"),c=document.querySelector("input");b.addEventListener("submit",async o=>{if(o.preventDefault(),w(),c.value.trim()===""){n.show({title:"Error",message:"Search form is empty!"});return}L();try{const t=await f(c.value);if(l(),t.totalHits===0){n.show({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"});return}h(t.hits)}catch(t){l(),n.show({title:"Error",message:"Something went wrong. Please try again!"}),console.error(t)}});
//# sourceMappingURL=index.js.map
