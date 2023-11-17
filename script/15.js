let arr =[0,0,0,0,0,
          0,0,0,0,0,
          0,0,0,0,0,
          0,0,1,1,1,
          1,1,1,1,1];
let isShuffle=false;

document.addEventListener("DOMContentLoaded",()=>{
    const box = document.querySelectorAll(".box");
    const bt = document.querySelector("#bt1");
    const reset = document.querySelector("#reset");
    reset.style.display = "none";
    bt.style.display = "block";
    bt.addEventListener("click",(e)=>{
        e.preventDefault();
        if(!isShuffle){
            arr=arr.sort(()=>Math.random()-0.5);
            /*배열 정렬
            -sort(): 알파벳 정렬
            -sort((a,b)=>a-b):숫자 오름차순
            -sort((a,b)=>b-a):숫자 내림차순
            */
            reset.style.display = "block";
            bt.style.display = "none";
            console.log(arr);
            isShuffle=true;
            
        }
    })

    box.forEach((box,idx)=>
        box.addEventListener("click",(e)=>{
            e.preventDefault();
            if(isShuffle){
                let tags="";
                console.log(arr[idx]);
                if(arr[idx]==0)
                    tags= `<img src="../img/bomb/hart.png"
                            width="100%" height="100%"
                            id = "box${idx+1}img"/>`;
                else tags=`<img src="../img/bomb/boom.png"
                            width="100%" height="100%"
                            id = "box${idx+1}img"/>`

                box.innerHTML=tags;
            }
        }))

    box.forEach(box=>
        box.addEventListener("contextmenu",(e)=>{
            e.preventDefault();
            box.innerHTML="FLAG";
        }))


})