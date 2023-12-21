var welcomeMessage = document.getElementById("welcomeMessage");
var userName = "William Syaputra";
welcomeMessage.textContent = "Hi " + userName + ", Welcome to the Website";

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slideImg");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }

  
function submit(){ 
    const date = new Date();
    var name=document.getElementById("name").value; 
    var birthdate=document.getElementById("birthdate").value; 
    var gender=document.querySelector('input[name="gender"]:checked').value;
    var message=document.getElementById("message").value;

    var 
    time      ="<strong >Current Time : </strong> "+date;
    name      ="<strong>Nama : </strong>"+name;
    birthdate ="<strong >Tanggal Lahir : </strong>"+birthdate;
    gender    ="<strong>Jenis Kelamin : </strong>"+gender;
    message   ="<strong>Pesan : </strong>"+message;
    
    document.getElementById("waktu")    .innerHTML = time;
    document.getElementById("nama")     .innerHTML = name;
    document.getElementById("lahir")    .innerHTML = birthdate;
    document.getElementById("kelamin")  .innerHTML = gender;
    document.getElementById("pesan")    .innerHTML = message;
}
