let title = document.querySelector("#title");
let container = document.querySelector(".container");
let destination = document.querySelector(".destination");

title.addEventListener("click", function() {
    let heading = document.createElement("h1");
    let input = document.createElement("input");
    input.style.height = "30px";
    input.style.width = "1000px";
    input.style.border = "solid black";
    input.style.textAlign = "top";
    input.placeholder = "enter your headings";
    container.appendChild(input);
    let submit = document.createElement("button");
    submit.classList.add("button_border");
    submit.innerText = "SUBMIT";
    container.appendChild(submit);
    submit.addEventListener("click", function() {
        heading.innerText = input.value;
        destination.appendChild(heading);
        input.remove();
        submit.remove();
    })
});


let body = document.querySelector(".body");
body.addEventListener("click", function() {
    body.style.zIndex = "1";
    let p = document.createElement("p");
    let input = document.createElement("input");
    input.style.height = "100px";
    input.style.width = "1000px";
    input.style.border = "solid black";
    input.style.textAlign = "top";
    input.placeholder = "enter your paragraph";
    container.appendChild(input);
    let submit = document.createElement("button");
    submit.innerText = "SUBMIT";
    submit.classList.add("button_border");
    container.appendChild(submit);
    submit.addEventListener("click", function() {
        p.innerText = input.value;
        p.style.textAlign = "left";
        destination.appendChild(p);
        input.remove();
        submit.remove();
    })
});



let img = document.querySelector(".img");
img.addEventListener("click", function() {
    let input = document.createElement("input");
    input.style.height = "30px";
    input.style.width = "1000px";
    input.style.border = "solid black";
    input.style.textAlign = "top";
    input.placeholder = "enter your Image url";
    container.appendChild(input);
    let submit = document.createElement("button");
    submit.innerText = "SUBMIT";
    submit.classList.add("button_border");
    container.appendChild(submit);
    submit.addEventListener("click", function() {
        let image = document.createElement("img");
        image.style.height = "100px";
        image.style.width = "100px";
        image.src = input.value;
        destination.appendChild(image);
        console.log(image);
        input.remove();
        submit.remove();
    })
});


let vid = document.querySelector(".video");
vid.addEventListener("click", function() {
    let video = document.createElement("video");
    let input = document.createElement("input");
    input.style.height = "30px";
    input.style.width = "1000px";
    input.style.border = "solid black";
    input.style.textAlign = "top";
    input.placeholder = "enter your VIDEO link";
    container.appendChild(input);
    let submit = document.createElement("button");
    submit.innerText = "SUBMIT";
    submit.classList.add("button_border");
    container.appendChild(submit);
    submit.addEventListener("click", function() {
        video.src = input.value;
        video.controls = true;
        video.muted = false;
        video.height = 240; 
        video.width = 320; 
        destination.appendChild(video);
        input.remove();
        submit.remove(); 
    })
});

let write = document.querySelector(".write");
let photo = document.querySelector("#content");
let ok = document.querySelector(".finalSub");
ok.innerText = "Final Submit";
ok.addEventListener("click", function() {
    let re = document.querySelector(".takeInp");
    re.remove();
    destination.classList.add("center");
    write.remove();
    photo.remove();
})
var close = document.querySelector(".close");
let box = document.querySelector(".takeInp")
close.addEventListener("click", function() {
    console.log("ds");
    box.style.marginLeft = "420px";
})