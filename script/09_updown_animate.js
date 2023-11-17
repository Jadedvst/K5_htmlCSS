const divShow = (d1,d2, isRandom) => {
//d1,d2값을 받는다

    // let isRandom = true
    // if (!isRandom) divShow(btDiv1, btDiv2)
    if (isRandom){
        d2.style.display = "block"
        d1.style.display = "none"
    }else{
        d1.style.display = "block"
        d2.style.display = "none"
    }
}

document.addEventListener("DOMContentLoaded", ()=>{
    //변수
    let randomNum
    let userNum

    //랜덤 영역
    const btDiv1 = document.getElementById("btDiv1")
    const bt1 = document.getElementById("bt1")

    //입력 영역
    const btDiv2 = document.getElementById("btDiv2")
    const bt2 = document.getElementById("bt2")
    const txt = document.getElementById("txt")
    // const mainImg = document.querySelector("#mainImg")
    
    const showImg = (x) =>{
        const mainImg = document.querySelector("#mainImg")
        const msg = document.querySelector("#sec3 h1")
        mainImg.setAttribute("src",`../img/updown/${x}.png`)
        console.log(x)
        msg.innerHTML = x+"!";
    }

    //Slide count
    // count slides = slider.querySelectorAll('')
    const slider = document.querySelector(".clmain")
    const slides = slider.querySelectorAll("#sec2Div img")
    const slideCount = slides.length;
    let activeSlide = 0;

    //To change the images dynamically every 3 sec
    setInterval(()=>{
        slides[activeSlide].classList.remove('active')
    })
    //랜덤 flag
    divShow(btDiv1, btDiv2, false)

    //입력수
    txt.addEventListener("change",(e)=>{
        console.log(e.target.value);
        //userNum은 문자열이므로 정수로 변환해야함
        //input value의 type은 전부 문자열(새로나온 몇몇제외)
        userNum=parseInt(e.target.value)
    })

    //버튼 처리
    bt1.addEventListener("click",(event)=>{
        //버튼을 눌러서 자기 자신을 부르는것을 방지
        event.preventDefault()
        showImg("what")

        //랜덤변수 생성
        randomNum = Math.floor(Math.random()*100)+1;
        console.log("bt1",randomNum)

        //입력 영역
        divShow(btDiv1, btDiv2, true)

    })

    
   
    bt2.addEventListener("click",(e)=>{
        e.preventDefault()
        bigImage.animate({opacity: .1 }, function() { 

            $(this).attr('src', imageArray[imageIndex]) 
      
        });

        if (userNum=== randomNum){
            // mainImg.setAttribute("src","../img/updown/good.png")
            showImg("good")
            // msg.innerHtml("딩동댕!")
            divShow(btDiv1, btDiv2, false)
            txt.value='';

        }else if(userNum>randomNum){
            showImg("down")
        }else{
            showImg("up")
        }
        console.log("bt2")
        
    })
    //또 하나의 방법으로는 action을 bt2 event 밖에서 선언후
    //bt2내에서 action값을 매번 지정한다.
    //bt2에 변수 action에 대한 showImg 함수 선언
    //특수한 케이스 good 에 대한 세부사항을 추가할 수도 있다
     //let action;
     //showImg(action)
        //if (action==='good')
        //  divShow(btDiv1, btDiv2,false)
        //  txt.value='';
})