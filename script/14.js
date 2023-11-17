document.addEventListener("DOMContentLoaded",()=>{
    const lotto =document.querySelector("#d2>button");
    const d1 = document.querySelector("#d1");
    const sp = document.querySelectorAll(".sp");

    lotto.addEventListener("click",(e)=>{
        e.preventDefault();
        //배열 초기화
        let arr=[];
        // arr.length=0;

        //중복 금지//filter처럼 원하는 값만 배출하려고 할시 while
        while (arr.length<7){
            let n = Math.floor(Math.random()*45) + 1;//1에서 46까지의 랜덤수
            if(!arr.includes(n)) arr.push(n);
        }
        console.log(arr);
       
        let tags="";

        //client webbrowser에서 작동, server와 관련없게 작동
        //CSR: client side rendering
        tags=arr.map((it,idx)=>
            idx == 5
            ?`<span id="sp${Math.floor(parseInt(it)/10)}" class="sp">${it}</span>
            <span id="spp" class="sp">+</span>`
            :`<span id="sp${Math.floor(parseInt(it)/10)}" class="sp">${it}</span>`
            );

        console.log(lotto.innerHTML);
        d1.innerHTML=tags.join("");
    })
    
})