document.addEventListener("DOMContentLoaded",()=>{//임의로 노드를 더할수 있다
// 콜백 함수(빈 함수). 이벤트를 감지 그후 함수 실행
    const bt1 = document.createElement("button");
    const bt1Text = document.createTextNode("버튼3을 눌러주세요")  ;
    bt1.appendChild(bt1Text);
    bt1.setAttribute("id","bt3");//버튼 속성

    const bt2 = document.createElement("button");
    const bt2Text = document.createTextNode("버튼4을 눌러주세요")  ;
    // const bt2Color = document.createEvent(div: "")
    bt2.appendChild(bt2Text);
    bt2.setAttribute("id","bt4");//버튼 속성

    document.querySelector("#btDiv2").append(bt1);
    document.querySelector("#btDiv2").append(bt2);

    //--버튼 이벤트 달기--//
    document.getElementById('bt3').addEventListener("click",()=>{
        hello(3);
        

    });
    bt2.addEventListener("click",()=>{
        hello(4);
    });
    

});



const hello = (n) => { //화살표 함수
    // swtich (n){
    //     case 1,2:
    //         document.querySelector('#msgDiv2').innerHTML
    //         = "<h2>Hello!버튼" + n+"</h2>";

    // }

    // if (n<3){
    // document.getElementsByClassName("clmsg")[0].innerHTML
    //  = "<h2>Hello!버튼" + n+"</h2>";
    // }else{
    //     document.querySelector("#msgDiv2").innerHTML
    //     = "<h2>Hello!버튼" + n+"</h2>";
    // }
    

//-----백틱(`)----//
// 백틱 사이에는 변수를 ${}를 통해 넣을 수 있음
    let cnt = 0;
    //삼항연산
    //if (n<=2) cnt = 1;
    // else cnt =2;
    n <=2 ? cnt = 1:cnt =2;
    console.log("cnt",cnt);
    document.querySelector(`#msgDiv${cnt}`).innerHTML
    = "<h2>Hello!버튼" + n+"</h2>";

}
