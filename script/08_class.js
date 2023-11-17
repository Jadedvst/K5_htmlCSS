//버튼 처리
//method(변수a,b,...)
const handleBtClick = (comImg,userImg,num, msg) => {
    //1.컴퓨터 랜덤수 생성
    const com = Math.floor(Math.random()*6+1);
    console.log("com: ",com,"user: ",user);

    //2.주사위 이미지 변경
    comImg.setAttribute("src",`../img/dice/${com}.png`)
    userImg.setAttribute("src",`../img/dice/${num}.png`)
    //3.결과만들기
    // if(num===com){//data 값 까지 같을시
    //     msg.innerHTML="<p>비김!</p>"
    // }else if(num>com){
    //     msg.innerHTML="<p>승:)</p>"
    // }else msg.innerHTML="<p>패..</p>"

    //홀짝?
    const msg2 = document.querySelector("#sec3>h2");
    if(com%2===0){
        msg.innerHTML="<p>짝!</p>"
        if(num%2===0){
            msg2.innerHTML="<p>딩동댕!</p>"
        }
        if(num%2===1){
            msg2.innerHTML="<p>땡!</p>"
        }
    }
    if(com%2===1){
        msg.innerHTML="<p>홀!</p>"
        if(num%2===1){
            msg2.innerHTML="<p>딩동댕!</p>"
        }
        if(num%2===0){
            msg2.innerHTML="<p>땡!</p>"
        }

    }
}



document.addEventListener("DOMContentLoaded",()=>{
//구성요소 찾기
    const comImg = document.querySelector("#com");
    const userImg = document.querySelector("#user");

    const bts = document.querySelectorAll("#btDiv2>button");
  //All select 시 NodeList(배열) 생성
  //console.log(bts);//확인용 sysout과 비슷
    const msg = document.querySelector("#sec3>h1");
    msg.innerHTML="<p>안녕하세요!</p>"//innerHTML은 tag까지
  
  //for문------//

    for(let bt of bts){
        bt.addEventListener("click",()=>{
            const num= parseInt(bt.getAttribute("id").slice(-1));
            handleBtClick(comImg,userImg,num, msg);//다시 적을 필요없이 데리고 오기
            console.log(bt.getAttribute("id").slice(-1));
        })
    }
 
  console.log(bts);

  


})