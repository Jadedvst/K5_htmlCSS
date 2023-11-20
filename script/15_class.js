/* 
1.폭탄 섞기
 - 배열이용 -> 배열에 1이 있는 위치가 폭탄위치
 - 1위치 셔플 구현
 - isShuffle flag변수 활용

 2.박스 클릭 처리
 - isShuffle? 클릭 허용
 - 이미 이미지가 있으면 다시 표기 필요 없음
 - 폭탄 이미지 나오면 게임끝 다시 폭탄 섞기 버튼 활성화, 전체 초기화
 - 하트 이미지가 나오면 현재 몇개의 하트인지 확인
 - 하트 갯수를 다 채울시 모든 박스에 하트
*/ 
const sHide=(s,h)=>{
    h.style.display="none";
    s.style.display="block";
}
// 리셋 버튼 없을시 섞는 걸 눌렀을시
const init=(boxes,msg)=>{
    msg.innerHTML="";
    boxes.forEach(box=>{
        box.innerHTML=box.getAttribute("id").slice(-1);
    cnt =0;
    })
}
let arr =[0,0,0,0,0,0,0,0,1];
let isShuffle=false;
let cnt=0;
document.addEventListener("DOMContentLoaded",()=>{
    //Nodelist
    const boxes = document.querySelectorAll(".box");
    const bt = document.querySelector("#bt1");
    const reset = document.querySelector("#reset");
    const msg = document.querySelector('#msg');
    // sHide(bt,reset);
    console.log(boxes);
    // let boxesArr = Array.from(boxes);
    // let b = boxes.map(m=> '<span>0</span>');
    // console.log(b);
    
    
    bt.addEventListener("click",(e)=>{
        e.preventDefault();
        if(!isShuffle){
            init(boxes,msg);
            arr=arr.sort(()=>Math.random()-0.5);
            /*배열 정렬
            -sort(): 알파벳 정렬
            -sort((a,b)=>a-b):숫자 오름차순
            -sort((a,b)=>b-a):숫자 내림차순
            */
            console.log(arr);
            isShuffle=true;
            // sHide(reset,bt);
            msg.innerHTML="";
        }
    })

    boxes.forEach((box,idx)=>
        box.addEventListener("click",(e)=>{
            e.preventDefault();
          
            if(!isShuffle){
                msg.innerHTML="폭탄을 배치해주세요!";
                // alert("폭탄을 섞어주세요!");
                return;
            }
            if(isNaN(box.innerHTML)){
                //중복 클릭 방지
                //함수이기떄문에 return시 끝
                return;
            }
            //박스 기준 배열 첨자 구하기
            console.log(arr[idx]);
            //let idx = console.log(box.getAttribute("id").slice(-1));
            // box.innerHTML=arr[idx]==1?"BOMB":"HEART";
            
            if(arr[idx]===0){
                box.innerHTML= `<img src="../img/bomb/hart.png"
                id = "box${idx+1}img"/>`;
                cnt++;
                if(cnt==8){
                    //특정 id값의 node 호출
                    document.querySelector(`#box${arr.indexOf(1)+1}`).innerHTML
                    =`<img src="../img/bomb/hart.png" id = "box${idx+1}img"/>`;
                    isShuffle=false;
                    msg.innerHTML="성공!";
                }
                console.log("cnt=",cnt);
            }
            else{
                box.innerHTML=`<img src="../img/bomb/boom.png"
                                id = "box${idx+1}img"/>`;
                document.querySelectorAll(`.box`).forEach(item=>item.innerHTML
                    =`<img src="../img/bomb/boom.png" id = "box${idx+1}img"/>`)
                isShuffle=false;
                msg.innerHTML="실패!"
                
            }
          
        }))

    boxes.forEach(box=>
        box.addEventListener("contextmenu",(e)=>{
            e.preventDefault();
            box.innerHTML="FLAG";
        }))


})