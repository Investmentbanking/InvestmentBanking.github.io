const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const iconLink = document.querySelector('.intro__img');

let mybutton = document.getElementById("myBtn");
var soundButton = document.getElementById("soundButton");

var myAudio = document.getElementById("myAudio");




navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

function playMusic(){
  var music = new Audio('click.mp3');
  music.play();
}

function togglePlay(){
  if (myAudio.paused) {
    myAudio.play();
    soundButton.innerHTML= "Sound ON";
    // soundButton.style.color = "#FFFFFF";

  } else {
    myAudio.pause();
    soundButton.innerHTML= "Sound OFF";
    // soundButton.style.color = "#FFFFFF";
  }
    //return myAudio.paused ? myAudio.play() : myAudio.pause();
}


/* For animating the intro text */

    var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
    TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
    };
  
    window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };


  // For the scroll button 

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 500 && document.body.scrollTop< 800|| document.documentElement.scrollTop > 500 && document.documentElement.scrollTop < 800) {
      mybutton.style.display = "block";
    } else if (document.body.scrollTop > 1200 && document.body.scrollTop< 1900|| document.documentElement.scrollTop > 1200 && document.documentElement.scrollTop < 1900) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  // Create div upon click

  // document.getElementById("cert-item-id").onclick = function() {
  //   var div = document.createElement('div');
  //   div.style.background = "black";
  // }

  const dialog = document.getElementById("cert-dialog");
  const dialogImage = document.getElementById("cert-dialog-image");
  const closeButton = document.getElementById("cert-button");

  document.querySelectorAll(".cert-image").forEach((image) => {
    image.addEventListener("click", () => {
      console.log("start");
      dialogImage.src = image.src;
      dialog.showModal();
      console.log("im here");
      document.body.style.overflow = "hidden";
    });
  });

  closeButton.addEventListener("click", () => {
    dialog.close();
    document.body.style.overflow = "auto";
  });


  