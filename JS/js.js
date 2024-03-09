


function ShowHome() { 
    document.getElementById("homediv").style.display = "block";
    document.getElementById("aboutmediv").style.display = "none";
    document.getElementById("aboutmediv").style.display = "none";
    document.getElementById("contactdiv").style.display = "none";
}


function ShowAboutMe() {
    document.getElementById("homediv").style.display = "none";
    document.getElementById("aboutmediv").style.display = "block";
    document.getElementById("projectsdiv").style.display = "none";
    document.getElementById("contactdiv").style.display = "none";
}


function ShowProjects() {
    document.getElementById("homediv").style.display = "none";
    document.getElementById("aboutmediv").style.display = "none";
    document.getElementById("projectsdiv").style.display = "block";
    document.getElementById("contactdiv").style.display = "none";
}


function ShowContact() {
    document.getElementById("homediv").style.display = "none";
    document.getElementById("aboutmediv").style.display = "none";
    document.getElementById("projectsdiv").style.display = "none";
    document.getElementById("contactdiv").style.display = "block";
}



function sendMail() {
    var link = "mailto:rohjt001@mymail.unisa.edu.au"
             + "?cc=" + encodeURIComponent(document.getElementById('formemail').value)
             + "&subject=" + encodeURIComponent(document.getElementById('formsubject').value)
             + "&body=" + encodeURIComponent(document.getElementById('formmessage').value)
    ;
    window.location.href = link;
}


/* slideshow attempt

used some code from w3schools, but can't get the slideshow to appear correctly on page open


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  slides[slideIndex-1].style.display = "block";  
}


*/