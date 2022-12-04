var arr = [
    "images/download.jpg",
    "images/download1.jpg",
    "images/download2.jpg",
    "images/download3.jpg",
]
var firstImage = 0;
var lastImage = arr.length -1;
var currentImage = 0;

var nxtBtn = document.getElementById("next")

function nextbtn(){
    var tagName = document.getElementById("image")
    currentImage++;
    if(currentImage >= lastImage){
        currentImage = 3;
    }
    tagName.src = arr[currentImage]
}

var previBtn = document.getElementById("prev")

function prevbtn(){
    var tagName = document.getElementById("image")
    currentImage--;
    if(currentImage <= firstImage){
        currentImage = 0;
    }
    tagName.src = arr[currentImage]
}