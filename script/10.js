const handleSelChange=(s1,u1,s2,u2,t1,t2)=>{
    u1.innerHTML=s1.value;
    if(s1.value == '') s2.value = '';
    else if(s1.value == '℃') s2.value = '℉';
    else s2.value='℃';
    u2.innerHTML=s2.value;
    //txt초기화
    t1.value='';
    t1.focus();//커서 이동
    t2.value='';
}

document.addEventListener("DOMContentLoaded",()=>{
    const sel1 = document.querySelector("#sel1");
    const sel2 = document.querySelector("#sel2");

    const num1 = document.querySelector('#num1');
    const num2 = document.querySelector('#num2');

    const unit1 = document.querySelector('#unit1');
    const unit2 = document.querySelector('#unit2');

    //select Box 제어
    sel1.addEventListener("change",()=>{
        handleSelChange(sel1,unit1,sel2,unit2,num1,num2);
    })
    sel2.addEventListener("change",()=>{
        handleSelChange(sel2,unit2,sel1,unit1,num1,num2);
    })

        // sel2.addEventListener("change",(e)=>{
    //     console.log(e.target.value);
    //     unit2.innerHTML=e.target.value;
    //     //value가 문자열을 지닐시 밑의 경우 불필요
        
    //     if(e.target.value == '') sel1.value = '';
    //     else if(e.target.value == '℃')sel1.value = '℉';
    //     else sel1.value='℃';
    //     unit1.innerHTML=sel1.value;
    // })

    //number Box 제어
    num1.addEventListener("change",()=>{
        if (sel1.value == '℃'){
            num2.value = ((parseInt(num1.value)*9/5)+32).toFixed(2);
        }
    })
    num2.addEventListener("change",()=>{
        if (sel2.value == '℉'){
            num1.value = ((parseInt(num2.value)-32)/9*5).toFixed(2);
        }
    })

  

});