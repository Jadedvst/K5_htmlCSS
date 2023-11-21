//일일 박스 오피스 데이터 가져오기
const getBoxOffice = (dt,tbDiv,category) =>{
    let apikey ="f5eef3421c602c6cb7ea224104795888";
    // let tdt = "20221119";
    let url=`https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apikey}&targetDt=${dt}#mul`;
    if(category=="2")
        url+=`&multiMovieYn=Y`;
    else if(category=="3")
        url+=`&multiMovieYn=N`;
    
    let boxList;
    tbDiv.innerHTML="";
    let table=
        `<table>
            <tr>
                <th>순위</th>
                <th>영화명</th>
                <th>개봉일</th>
                <th>매출액</th>
                <th>관객수</th>
            </tr>`;
    //     <tr>
    //     <td>1</td>
    //     <td>2</td>
    //     <td>3</td>
    //     <td>4</td>
    //     <td>5</td>
    // </tr>
    //url 주소에 들어가서 data를 떙겨오는 API
    fetch(url) //if url is fulfilled then...
    //.then((resp)=> {return console.log(resp)})//resp확인

    //결과치를 json포맷으로=>Object로 인식후 key값으로 구분
    .then((resp)=> {return resp.json()})
    //key:boxOfficeResult라는 Object가 넘어옴
    .then((data)=> {
        boxList=data.boxOfficeResult.dailyBoxOfficeList;
       
        //각 key 와 값이 있는 Object 형태(==python의 Dㅑctionary 형태)
        let trs = boxList.map(m=>
            `<tr>
                <td class ="sp1">${m.rank}</td>
                <td class ="sp2">${m.movieNm}</td>
                <td class ="sp3">${m.openDt}</td>
                <td class ="sp4">${parseInt(m.salesAmt).toLocaleString('ko-KR')}</td>
                <td class ="sp5">${parseInt(m.audiCnt).toLocaleString('ko-KR')}</td>
            </tr>`
        )
        trs=trs.join('');
        table = table+ trs +`</table>`
        tbDiv.innerHTML = table;
        return console.log(boxList);
    })
}

// document.addEventListener("DOMContentLoaded",()=>{
//     const date = document.querySelector("#date");
//     let dateDt;
//     let tbtags=document.querySelector("#tbDiv");
//     let msg=document.querySelector("#msg");
//     let bt= document.querySelector("#d2bt");

//     // prevent today date
//     const yesterday = new Date();
//     yesterday.setDate(yesterday.getDate()-1);
//     date.max=yesterday.toISOString().split('T')[0]

//     date.addEventListener("change",(e)=>{
//         e.preventDefault();
       
//             // console.log(e.target.value);
//             console.log(date.value.replace(/[-]/g,""));
//             console.log(date.value.replaceAll("-",""));
//             dateDt=date.value.replace(/[-]/g,"");
//             getBoxOffice(dateDt,tbtags);
        
//     })

//     bt.addEventListener("click",(e)=>{
//         e.preventDefault();
//         const dateDt=inform.date.value.replace(/[-]/g,"");
//         console.log(dateDt);
//         console.log(inform.category.value);
        
//     })

// })

document.addEventListener("DOMContentLoaded",()=>{
    let tbtags=document.querySelector("#tbDiv");
    let bt= document.querySelector("#d2bt");

    bt.addEventListener("click",(e)=>{
        e.preventDefault();
        //form 값이 inform
        //그밑의 name: date, category
        const date=inform.date.value.replace(/[-]/g,"");
        const category = inform.category.value;
        if(date===""||date===undefined){
            alert("날짜를 선택해주세요");
        }
        else{
            console.log(date);
        console.log(category);
        getBoxOffice(date,tbtags,category);
        }
        
        
    })

})