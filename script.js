'use strict';
const close_modal= document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const overLay = document.querySelector(".overlay");
const show_modal= document.querySelectorAll(".show-modal");
 const hide_modal= function(){
    modal.classList.add("hidden");
    overLay.classList.add("hidden");
 };
const display_modal=function(){
    modal.classList.remove("hidden");
    overLay.classList.remove("hidden");
};
for(let i=0; i<show_modal.length;i++){

show_modal[i].addEventListener("click",display_modal)

}

close_modal.addEventListener("click", hide_modal)
overLay.addEventListener("click",hide_modal)

document.addEventListener("keydown",function(event){
if(event.key== 'Escape' && !modal.classList.contains("hidden")){
    hide_modal();
}   
});