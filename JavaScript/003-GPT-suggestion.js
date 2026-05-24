// GPT建議還可以做的
const btnAddition = document.querySelector(".btn-addition")
const btnSubtrastion = document.querySelector(".btn-subtrastion")
var content = document.querySelector(".content")
var contentNumber = content.value
let number = 0
let h2 = document.querySelector("h2")
let h2OriginText = h2.textContent
// 加上長按連續加減功能
// mousedown => 開始
// setInterval => 持續加減
// mouseup/mouseleave => 停止
// 手機要加上touchstart/touchtend
btnAddition.addEventListener("mousedown",()=>{
    contentNumber = contentNumber + 1;
    // 當回到正常數字時h2回歸原本樣式
    h2.textContent = h2OriginText
    return  contentNumber 
    // = number
})

btnAddition.addEventListener("touchstart",()=>{
    number += 1;
    // 當回到正常數字時h2回歸原本樣式
    h2.textContent = h2OriginText
    return  content.value = number
})

btnSubtrastion.addEventListener("click",()=>{
    if (number == 0) {
        // 當減到負數時回傳以下
        return h2.textContent = "不能再減了"
    }else{
        number-=1
        return content.value = number
    }
})