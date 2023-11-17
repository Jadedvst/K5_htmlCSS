let arr =[0,0,0,0,0,0,0,0,1];
let isShuffle=false;
document.addEventListener("DOMContentLoaded",()=>{
    const box = document.querySelectorAll(".box");
    const bt = document.querySelector("#bt1");

    bt.addEventListener("click",(e)=>{
        e.preventDefault();
        if(!isShuffle){
            arr=arr.sort(()=>Math.random()-0.5);
            /*배열 정렬
            -sort(): 알파벳 정렬
            -sort((a,b)=>a-b):숫자 오름차순
            -sort((a,b)=>b-a):숫자 내림차순
            */
            console.log(arr);
            isShuffle=true;
        }
    })

    box.forEach(box=>
        box.addEventListener("click",(e)=>{
            e.preventDefault();
            box.innerHTML="HEART";
        }))

    box.forEach(box=>
        box.addEventListener("contextmenu",(e)=>{
            e.preventDefault();
            box.innerHTML="FLAG";
        }))


})