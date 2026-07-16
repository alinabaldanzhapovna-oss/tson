/* ==========================================
   TSON ATELIER
   Premium JavaScript
========================================== */

// Плавное появление блоков
const animatedItems = document.querySelectorAll(
".service-card,.gallery-item,.review-card,.advantage,.photo,.contact-form,.hero-text"
);

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("fade-up");

}

});

},{
threshold:.15
});

animatedItems.forEach(item=>observer.observe(item));

/* ========================================== */
/* Плавый скролл */
/* ========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/* ========================================== */
/* Navbar */
/* ========================================== */

const nav=document.querySelector("nav");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

nav.style.padding="16px 8%";

nav.style.background="rgba(255,255,255,.85)";

nav.style.boxShadow="0 10px 30px rgba(0,0,0,.08)";

}else{

nav.style.padding="25px 8%";

nav.style.background="rgba(255,255,255,.45)";

nav.style.boxShadow="none";

}

});

/* ========================================== */
/* Кнопка наверх */
/* ========================================== */

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.className="topButton";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.classList.add("show");

}else{

topBtn.classList.remove("show");

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

/* ========================================== */
/* Hover карточек */
/* ========================================== */

document.querySelectorAll(".service-card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.background=

`radial-gradient(circle at ${x}px ${y}px,
rgba(255,255,255,.95),
rgba(248,236,239,.8))`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="rgba(255,255,255,.65)";

});

});

/* ========================================== */
/* Loader */
/* ========================================== */

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});

/* ========================================== */
/* Эффект на фото */
/* ========================================== */

document.querySelectorAll(".gallery-item img").forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.transform="scale(1.08)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});

/* ========================================== */
/* Контактная форма */
/* ========================================== */

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Спасибо! Ваша заявка отправлена.");

form.reset();

});

}
.topButton{

position:fixed;

right:35px;

bottom:35px;

width:56px;

height:56px;

border:none;

border-radius:50%;

background:#111;

color:white;

font-size:22px;

cursor:pointer;

opacity:0;

transform:translateY(20px);

transition:.35s;

box-shadow:0 10px 30px rgba(0,0,0,.15);

z-index:999;

}

.topButton:hover{

background:#c7a46c;

}

.topButton.show{

opacity:1;

transform:translateY(0);

}

// Прокрутка вверх по клику на логотип (дополнительно)
const logoLink = document.querySelector('.logo a') || document.querySelector('.logo');
if (logoLink) {
  logoLink.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
