const inputEl = document.querySelector(".engine");

const searcEl = document.querySelector(".btn");


searcEl.addEventListener("click",()=>{
    const input  = inputEl.value;
    if(input === "leo"){
        window.location.assign("https://krithicraj.github.io/movies.github.io/");
    }
    else{
        console.log("no movie");
    }
})
