
const btn =document.querySelector(".menu-btn")
btn.addEventListener("click",() =>{
    btn.classList.toggle("clicked")
})
// 當按鈕被點擊時，新加上一個class；若點擊時新的class出現過就把它去除
        
const nav =document.querySelector("nav")
nav.addEventListener("click",(e)=>{
    if(e.target.tagName ==="A") {
        btn.classList.remove("clicked")
    }
})
// 當點擊nav裡的物件時，抵達目的地且移除click

const topBtn = document.querySelector("#top")
document.addEventListener("scroll", () =>{
    if(window.scrollY >0){
        topBtn.classList.remove("hide")
    } else{
        topBtn.classList.add("hide")
    }
})
// 選回到頂端的按鈕，並監聽所有滾動的行為。若滾動到頂部按鈕消失；若不在頂部，按鈕出現。