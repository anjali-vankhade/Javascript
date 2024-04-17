let click_btn = document.querySelector("#changeMode");
let body =document.querySelector("body");
let currMode = "light";
click_btn.addEventListener("click", (ev) => {
    console.log("Button is clicked");
    if(currMode === "light"){
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove('light');
    } else {
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
})