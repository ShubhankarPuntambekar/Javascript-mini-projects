const prev = document.querySelector(".btnPrev");
const next = document.querySelector(".btnNext");
const imgList = document.querySelectorAll(".img");

let index =  0;
let interval = null;

firstSlide();


function slideShow(currIndex){

    if(imgList.length <= currIndex){
        currIndex = 0;
        index = currIndex;
    }
    else if(currIndex < 0)
    {
        currIndex = imgList.length -1;
        index = currIndex;
    }
    
    imgList.forEach(img =>{
        img.classList.remove("displayThis");
    })

    imgList[currIndex].classList.add("displayThis");
}

function firstSlide(){
   
    imgList[index].classList.add("displayThis");
    interval = setInterval(nex,2900);
    
}

function previous(){
    clearInterval(interval);
    index--;
    slideShow(index);
}

function nex(){
    index++;
    slideShow(index);
    
}

document.addEventListener('click',e=>{
    const element = e.target;
    if(element.className === "btnPrev"){
        previous();
    }
    else if(element.className === "btnNext"){
        nex();
    }
});