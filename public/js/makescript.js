const divhumanedit=document.getElementById("humanprofileedit"),divanimaledit=document.getElementById("animalprofileedit");function HumanProfileEdit(){divhumanedit.style.display="block",divanimaledit.style.display="none"}function AnimalProfileEdit(){divhumanedit.style.display="none",divanimaledit.style.display="block"}HumanProfileEdit();const loadFile=function(e){document.getElementById("previewphoto").src=URL.createObjectURL(e.target.files[0])};document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("country");fetch("https://restcountries.com/v2/all").then((e=>e.json())).then((t=>{let n="";t.forEach((e=>{n+=`<option>${e.name}</option>`})),e.innerHTML=n})).catch((e=>{console.log(e)}))}));