const scroll = new LocomotiveScroll({
    el: document.querySelector('#main_container'),
    smooth: true
});

// corresponding img shown after hover on element container

var elementContainer = document.querySelector("#element-container");
var fixedImage = document.querySelector("#fixed-image");

elementContainer.addEventListener("mouseenter",function(){ // ye event listener mouse hover hote hi image dikhayega
    fixedImage.style.display = "block";
})

elementContainer.addEventListener("mouseleave",function(){ // ye event listener hover element-container na hone par image nhi dikhayega
    fixedImage.style.display = "none";
})


// for indiviual element

var elementAll = document.querySelectorAll("#elem")

elementAll.forEach(function(e){
    e.addEventListener("mouseenter" , function(){
        var image = e.getAttribute("data-image")
        fixedImage.style.backgroundImage = `url(${image})`
    })
})


