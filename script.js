// let e= document.querySelector(".change");
// let q = document.querySelector(".button")

// q.addEventListener("click",()=>{
//     if(e.classList.contains("before"))
//     {
//         e.src = "home-images/image2.png";
//         e.classList.replace("before","after");
//         q.textContent="Back";
//     }
//     else{
//         e.src = "home-images/image1.png";
//         e.classList.replace("after","before");
//         q.textContent="Design it";
//     }
// })

let e = document.querySelector(".change");
let q = document.querySelector(".button");

q.addEventListener("click", () => {
    e.classList.add("fade-out");

    setTimeout(() => {
        if (e.classList.contains("before")) {
            e.src = "home-images/image2.png";
            e.classList.replace("before", "after");
            q.textContent = "See before";
        } else {
            e.src = "home-images/image1.png";
            e.classList.replace("after", "before");
            q.textContent = "Tap to renovate";
        }
        e.classList.remove("fade-out");
    }, 500);
});



var modal = document.getElementById("myModal");


var btn = document.querySelector(".living");


var span = document.getElementsByClassName("closee")[0];


btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() { 
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


var modal1 = document.getElementById("myModal1");

var btn1 = document.querySelector(".dining");
var span1 = document.getElementsByClassName("close1")[0];
btn1.onclick = function() {
    modal1.style.display = "block";
}
span1.onclick = function() { 
    modal1.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal1.style.display = "none";
    }
}

var modal2 = document.getElementById("myModal2");

var btn2 = document.querySelector(".bed");
var span2 = document.getElementsByClassName("close2")[0];

btn2.onclick = function() {
    modal2.style.display = "block";
}

span2.onclick = function() { 
    modal2.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal2.style.display = "none";
    }
}
