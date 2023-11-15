

document.addEventListener("DOMContentLoaded",()=>{
    const bt1 = document.querySelector('#bt1');
    const bt2 = document.querySelector('#bt2');
    const bt3 = document.querySelector('#bt3');

    const txt1 = document.querySelector("#txt1");
    const txt2 = document.querySelector("#txt2");

    //회문처리
    bt1.addEventListener("click",(e)=>{
        e.preventDefault();
        let result = '';
        // result=txt1.value.slice(-1,0);
        // console.log(result);
        for(let i=txt1.value.length-1; i>=0 ; i--){
                result = result + txt1.value[i];
        }
               
        console.log(txt1.value.replace(/[0-9]/g,""));
        if(result == txt1.value.replace(/[0-9]/g,""))txt2.value = `${result.replace([0-9],"")}: 회문입니다.`;
        else txt2.value =`${result.replace(/[0-9]/g,"")}: 회문이 아닙니다.`;
        // if(result == txt1.value)txt2.innerHTML = '회문입니다.';
        // else txt2.innerHTML ='회문이 아닙니다.';
    })
    bt2.addEventListener("click",(e)=>{ 
        e.preventDefault();
        let result=0;
        for(let txt of txt1.value){
            if(!isNaN(txt))
                result += parseInt(txt);
        }

        txt2.value=result;
        console.log(result);
    })


})