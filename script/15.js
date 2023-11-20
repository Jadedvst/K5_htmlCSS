let arr =[0,0,0,0,0,
          0,0,0,0,0,
          0,0,0,0,0,
          0,0,1,1,1,
          1,1,1,1,1];
let isShuffle=false;
const sHide=(s,h)=>{
    h.style.display="none";
    s.style.display="block";
}

document.addEventListener("DOMContentLoaded",()=>{
    const boxes = document.querySelectorAll(".box");
    const bt = document.querySelector("#bt1");
    const reset = document.querySelector("#reset");
    sHide(bt,reset);
    bt.addEventListener("click",(e)=>{
        e.preventDefault();
        if(!isShuffle){
            arr=arr.sort(()=>Math.random()-0.5);
            /*배열 정렬
            -sort(): 알파벳 정렬
            -sort((a,b)=>a-b):숫자 오름차순
            -sort((a,b)=>b-a):숫자 내림차순
            */
            sHide(reset,bt);
            console.log(arr);
            isShuffle=true;
            
        }
    })

    boxes.forEach((box,idx)=>
        box.addEventListener("click",(e)=>{
            e.preventDefault();
            if(!isShuffle){
                alert("폭탄을 배치해주세요!")
            }
            else{
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

    boxes.forEach(box=>
        box.addEventListener("contextmenu",(e)=>{
            e.preventDefault();
            box.innerHTML="FLAG";
        }))


})