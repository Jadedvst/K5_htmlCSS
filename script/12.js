document.addEventListener("DOMContentLoaded",()=>{
    const btf = document.querySelectorAll(".btf");
    const btd = document.querySelectorAll(".btd");
    const btc = document.querySelectorAll(".btc");
    const txt1 = document.querySelector("#txt1");
    const btr = document.querySelector("#btr");

    //ArrayMethod
    let arr =[];
    //ObjectMethod
    const emoji = {'레몬':'🍋','초밥':'🍣','녹차':'🍵','수박':'🍉',
                   '오렌지':'🍊','라멘':'🍜','맥주':'🍺','멜론':'🍈',
                  }

    btf.forEach(bt=> 
        bt.addEventListener("click",(e)=>{
            e.preventDefault();

            // let emoji;//window+.
            // switch (bt.innerHTML){
            //     case '레몬':emoji='🍋';break;
            //     case '초밥':emoji='🍣';break;
            //     case '녹차':emoji='🍵';break;
            //     case '수박':emoji='🍉';break; 
            // }
          
            //앞추가arr.unshift(emoji);
            //뒤추가
            // arr.push(emoji);
            arr.push(emoji[bt.innerHTML.trim()]);
            console.log(arr);
            txt1.value = arr.join(" ");
        })
           
    );
    // 삭제처리
    btd.forEach(bt=> 
        bt.addEventListener("click",(e)=>{
            e.preventDefault();
            // arr= arr.filter((item)=>{
            //     let key = bt.innerHTML.replace("제외","");
            //     return item != emoji[key];
            //     })
            arr= arr.filter((item)=>item != emoji[bt.innerHTML.replace("제외","")]);
            
            txt1.value = arr.join(" ");
        })
           
    );
    //바꾸기
    btc.forEach(bt=> 
        bt.addEventListener("click",(e)=>{
            e.preventDefault();
            let key = bt.innerHTML;
            key=key.split("⇒");
            console.log([key[0]],[key[1]]);
           
            arr= arr.map((item)=>
                item == emoji[key[0]]?
                emoji[key[1]]:item);
            txt1.value = arr.join(" ");
        })
           
    );

    btr.addEventListener("click",()=>{
        arr=[];
        txt1.value="";
    })
       
})