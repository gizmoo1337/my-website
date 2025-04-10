const buttonel = document.getElementById("mybutton")
const inputTextEl = document.getElementById("mytext")
const Body = document.getElementById("body")
const textt = document.getElementById("sometext")
let Hasanimplayed = false

buttonel.addEventListener("click", buttonC)



function buttonC() {
    console.log(Hasanimplayed)
    let inputvalue = inputTextEl.value;
    console.log(inputvalue)
     inputTextEl.value = ""
     Body.classList.remove("backgroundChange", "backgroundReChange");
     
    void Body.offsetWidth; 
    if (!Hasanimplayed) {
        Body.classList.add("backgroundChange");
        textt.textContent = inputvalue;
        Hasanimplayed = true;
    } else {
        Body.classList.add("backgroundReChange");
        textt.textContent = inputvalue;
        Hasanimplayed = false;
    }
   
}