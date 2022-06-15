const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click',() => {
        //toggle nav
        nav.classList.toggle('nav-active');


        //animate links
        navLinks.forEach((link, index) =>{
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        //burger animation
        burger.classList.toggle('toggle');
        


    });
}

navSlide();

 
var slideIndex = {val: 1}; 
var recSlideIndex = {val: 1}; 
var highSlideIndex = {val: 1};

var flag = false;

//alert(highSlideIndex[0]);

/*function changeSlide(n){
    showSlides(slideIndex.val += n, "mySlides", "dot", slideIndex);
    showSlides(highSlideIndex.val += n, "highlight", "highDots", highSlideIndex);
    //alert(highSlideIndex);
}*/

function changeSlide(n, indexVal, name, dotName, index){
    showSlides(indexVal.val += n, name, dotName, index);
}

showSlides(highSlideIndex.val, "highlight", "highDots", highSlideIndex);
showSlides(slideIndex.val, "mySlides", "dot", slideIndex);

setInterval(function() {changeSlide(1, highSlideIndex, "highlight", "highDots", highSlideIndex)}, 5000);
setInterval(function() {changeSlide(1, slideIndex, "mySlides", "dot", slideIndex)}, 4000);

showSlides(recSlideIndex.val, "recGame", "recDots", recSlideIndex);


// Controles do carousel
function plusSlidesHigh(n) {
    showSlides(highSlideIndex.val += n, "highlight", "highDots", highSlideIndex);
}

function plusSlidesRec(n){
    showSlides(recSlideIndex.val += n, "recGame", "recDots", recSlideIndex);
}


function showSlides(n, name, dotName, index) {
    //alert(index );

    var i;
    var slides = document.getElementsByClassName(name);
    var dots = document.getElementsByClassName(dotName);
    if (n > slides.length) { index.val = 1 }
    if (n < 1) { index.val = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" activeSt", "");
    }

    if(name == "recGame"){
        slides[index.val - 1].style.display = "flex";
    }
    else{
        slides[index.val - 1].style.display = "block";
    }
    
    dots[index.val - 1].className += " activeSt";
}

var saleDiv = document.querySelector('.sale1');
var saleContent = document.querySelector('.saleContent');
var expand = document.querySelector('.expand');

var show = false;
var hasShowed = 0;
var reset = false;


//Checar o tamanho da tela
/*$(window).on("mousemove", function() {
    if ($(window).width() <= 1200){
        flag = true;
    } else {
        flag = false;
    }
})*/

document.addEventListener('mousemove', function(){
    if ($(window).width() <= 1000){
        flag = true;
    } else {
        flag = false;
    }

    //alert(flag);
});


saleDiv.addEventListener('transitionend', () =>{
        if(flag == false){
            if(reset == false && show == false && hasShowed == 0){
                //saleContent.style.opacity = 'block';
                saleContent.style.display = 'flex';
                saleContent.classList.toggle('fade');

                show = true;
                hasShowed = 1;
            }

            else if(reset == true){
                
                show = false;
                reset = false;
            }
        }
    });


    saleDiv.addEventListener('mouseenter', () =>{
        //
        //saleContent.style.display = 'block';
        if(flag == false){
            saleContent.style.display = 'flex';
            saleContent.style.transition = 'opacity 0.5s ease-in-out';
            
            if(show == false && hasShowed == 1){
                hasShowed = 0;
                reset = false;
            }
        }
        
    });

    saleDiv.addEventListener('mouseleave', () =>{
        //saleContent.style.display = 'none';
        if(flag == false){
            saleContent.style.display = 'none';
            saleContent.style.transition = 'opacity 0.2s ease-in-out';
            saleContent.classList.toggle('fade');
            show = false;
            reset = true;
        }
    });

