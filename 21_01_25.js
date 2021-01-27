const title = document.querySelector("#title");

// title.style.color = "red";

// function handle(){
//     title.style.color= "blue";
// }

// // title.addEventListener("click", handle);
// // handleResize()라고 적으면 바로 호출된다.

// // 같다면 ===
// const age = prompt("how old are you");
// if (age <= 25){
//     title.innerHTML = "oh! fuck";
// }
// else{
//     title.innerHTML = "oh so young";
// }

const CLICK_CLASS = "clicked";

function handleClick(){
    title.classList.toggle(CLICK_CLASS);
}

function init(){
    title.addEventListener("click",handleClick);
}
init();