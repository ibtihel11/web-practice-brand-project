let Index = 0;
showAuto();

function showAuto() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    Index++;
    if (Index > slides.length) {Index = 1}    
    slides[Index-1].style.display = "block";  
    setTimeout(showAuto, 3000);
}