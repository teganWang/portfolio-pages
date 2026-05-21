const btnAddition = document.querySelector(".btn-addition")
const btnSubtrastion = document.querySelector(".btn-subtrastion")
let content = document.querySelector(".content")
let number = 0
let h2 = document.querySelector("h2")
let h2OriginText = h2.textContent
// 先宣告一個變數，把h2原本的文字儲存起來

btnAddition.addEventListener("click",()=>{
    number += 1;
    // 當回到正常數字時h2回歸原本樣式
    h2.textContent = h2OriginText
    return  content.value = number
})
console.log(number);

btnSubtrastion.addEventListener("click",()=>{
    if (number == 0) {
        // 當減到負數時回傳以下
        return h2.textContent = "不能再減了"
    }else{
        number-=1
        return content.value = number
    }
})
// 這樣既可以在減到負數時提醒使用者，也可以在不是負數時恢復原本文字。

// ChatGPT建議這樣寫，讓使用者用input參與進程式裡

// btnAddition.addEventListener("click", () => {
//     let value = Number(content.value);
//     value += 1;
//     content.value = value;

//     h2.textContent = originalText;
// });

// btnSubtrastion.addEventListener("click", () => {
//     let value = Number(content.value);

//     if (value === 0) {
//         h2.textContent = "不能再減了";
//         return;
//     }

//     value -= 1;
//     content.value = value;
// });