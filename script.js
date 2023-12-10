const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", ()=> {
question.innerHTML = "YO TAMBIEN TE AMOOOO"
gif.src = "https://media.tenor.com/1-tAS0fxw7YAAAAi/puuung-hug.gif"
});

noBtn.addEventListener("mouseover", ()=> {
    const noBtnRec = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.innerHeight

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px" ;
    noBtn.style.top = randomY + "px" ;

} )