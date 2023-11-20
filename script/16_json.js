//일일 박스 오피스 데이터 가져오기
const getBoxOffice = () =>{
    let url="https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20231119#mul";
    let boxList;

    //url 주소에 들어가서 data를 떙겨오는 API
    fetch(url) //if url is fulfilled then...
    //.then((resp)=> {return console.log(resp)})//resp확인

    //결과치를 json포맷으로=>Object로 인식후 key값으로 구분
    .then((resp)=> {return resp.json()})
    //key:boxOfficeResult라는 Object가 넘어옴
    .then((data)=> {
        boxList=data.boxOfficeResult.dailyBoxOfficeList;
        return console.log(boxList);
    })
}

document.addEventListener("DOMContentLoaded",()=>{
    getBoxOffice();
})