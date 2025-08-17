// for smooth scrolling
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main_container'),
//     smooth: true
// });

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

// black box logic

var Design = document.querySelector("#Design");
var Project = document.querySelector("#Project");
var Execution = document.querySelector("#Execution");
var desc = document.querySelector("#desc");
var image = document.querySelector("#page4-img");

// for Design Option
Design.addEventListener("click" , function(){
    desc.textContent = "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.";
    var add = Design.getAttribute("data-img");
    image.setAttribute("src", `${add}`);

    Design.style.right = "2vw";
    Design.style.color = "#EFEAE3";

    Project.style.right = "0vw";
    Project.style.color = "#504A45";

    Execution.style.right = "0vw";
    Execution.style.color = "#504A45";
    
})

// for Design Project
Project.addEventListener("click" , function(){
    desc.textContent = "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need."
    var add = Project.getAttribute("data-img");
    image.setAttribute("src", `${add}`);

    Project.style.right = "2vw";
    Project.style.color = "#EFEAE3";

    Design.style.right = "0vw";
    Design.style.color = "#504A45";

    Execution.style.right = "0vw";
    Execution.style.color = "#504A45";
    
})

// just check
// for Design Execution
Execution.addEventListener("click" , function(){
    desc.textContent = "We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience."
    var add = Execution.getAttribute("data-img");
    image.setAttribute("src", `${add}`);

    Execution.style.right = "2vw";
    Execution.style.color = "#EFEAE3";

    Project.style.right = "0vw";
    Project.style.color = "#504A45";

    Design.style.right = "0vw";
    Design.style.color = "#504A45";
    
})

// menu toggle 
const list = document.querySelector('ul');
    // list.addEventListener("click" , () => {
    //   if(list.classList.contains("active")){
    //      list.classList.remove("active")
    //   }else{
    //     list.classList.add("active")
    //   }
    // })
var menu = document.querySelector("#menu h4");
var fullScreen = document.querySelector("#full-screen");
var flag = 0;
    menu.addEventListener("click" , function () {

        // full screen
        if(flag == 0){
            fullScreen.style.top = 0;
            flag = 1;
        }else{
            fullScreen.style.top = "-100%";
            flag = 0;
        }

        // hamburger
        if(list.classList.contains("active")){
            list.classList.remove("active")
        }else{
            list.classList.add("active")
        }
    })



// swiper js for sliding
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 50
  });
