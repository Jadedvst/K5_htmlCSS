document.addEventListener("DOMContentLoaded",()=>{
    // 배열 사용
    // const sps = document.querySelectorAll(".sp");
    // console.log(sps[0]);

    const sp0 = document.querySelector("#sp0");
    const sp1 = document.querySelector("#sp1");
    const sp2 = document.querySelector("#sp2");
    const reset = document.querySelector("#reset");
    console.log(sp0);
    console.log(sp1);
    let n=0;

    //버튼이 아니라도 click이벤트 설정 가능
    sp1.addEventListener("click",()=>{
        console.log(sp1.innerHTML);
        n=n+1;
        sp0.innerHTML =n;

    })
    //지역 변수 선언시 따로 적용
    sp2.addEventListener("click",()=>{
        let n=1;
        console.log(sp2.innerHTML);
        n=n-1;
        sp0.innerHTML =n;
    })

    reset.addEventListener("click",()=>{
        n=0;
        sp0.innerHTML =n;
    })
})