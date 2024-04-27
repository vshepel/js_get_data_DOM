var e=document.querySelectorAll(".population"),o=document.querySelector(".total-population"),t=document.querySelector(".average-population"),n=0,r=0,a=0;e.forEach(function(e){var o=Number(e.innerText.replace(/[^0-9.]/g,""));isNaN(o)||(n++,r+=o)}),a=r/n,o.innerText=r.toLocaleString("en-US"),t.innerText=a.toLocaleString("en-US");
//# sourceMappingURL=index.e5b1a63b.js.map
