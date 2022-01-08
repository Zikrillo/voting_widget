"use strict";
let score = 2;
let score_1 = 1;
let per = document.querySelector(".per");
let per_s = document.querySelector(".per_s");
let coloumn = document.querySelectorAll(".coloumn")[0];
let coloumn_s = document.querySelectorAll(".coloumn")[1];


coloumn.addEventListener('click', ()=>{
    score++;
    per.style.width = `${Math.round(score/(score + score_1)*100)}%`;
    per_s.style.width = `${100-Math.round(score/(score + score_1)*100)}%`;
});


coloumn_s.addEventListener('click', ()=>{
    score_1++;
    per.style.width = `${Math.round(score/(score + score_1)*100)}%`;
    per_s.style.width = `${100-Math.round(score/(score + score_1)*100)}%`
});


