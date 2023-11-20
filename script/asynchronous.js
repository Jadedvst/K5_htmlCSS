const funA = () => {
    console.log("A");
    //동기 처리
    funB();
    //비동기 처리: 따로 작용 C는 여전히 실행된다
    setTimeout(()=>{funB();},3000);//1000ms 후 콜백호출
    console.log("C");
    console.log("D");
}

const funB = () => {
    console.log("B");
}

document.addEventListener("DOMContentLoaded",()=>{
    funA();
})