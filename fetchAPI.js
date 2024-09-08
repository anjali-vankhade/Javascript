let url = "https://cat-fact.herokuapp.com/facts";
let factPara = document.querySelector(".description");
let btn = document.querySelector('.dataBtn');

// const getFacts = async () => {
//     let response = await fetch(url);
//     console.log(response);
//     let data = await response.json();
//     console.log(data);
//     factPara.innerText = data[0].text;
// }


// using promise ----------
function getFacts (){
    fetch(url).then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data);
        factPara.innerText = data[1].text;
    })
}


btn.addEventListener("click", getFacts);