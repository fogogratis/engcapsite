document.querySelectorAll('nav a').forEach(a=>{
  a.addEventListener('click',()=>document.querySelector('.nav').classList.remove('open'));
});
