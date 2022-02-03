$(document).ready(function(){
    
    $(".testimony-slider").slick({
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 3,
        centerPadding: "60px",
        prevArrow: ".testimony__btn-prev",
        nextArrow: ".testimony__btn-next",  
        responsive:[
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: "40px",
              slidesToShow: 1
            }
          },
          {
          breakpoint: 500,
            settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "40px",
            slidesToShow: 1
          }
        }
      ]
      }); 
    });
 
                // MODAL
var modal = document.getElementById("myModal");
var btn = document.getElementById("modalBtn");
var span = document.querySelector(".close");

btn.onclick = function() {       

   modal.style.display = "block";
}
    span.onclick = function() {
    modal.style.display = "none";
}

    window.onclick = function(event) {
        // console.log(event);
        // console.log(event.target);
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

$("#submit-btn").click(() => {       

  console.log("Name " + document.querySelector("input#name").value);
  console.log("Age " + document.querySelector("input#age").value);
  modal.style.display = "none";
})

            // PARALLAX
$('#parallaxHere').parallax({imageSrc: './img/parallax.jpg'});

            // BACK TO TOP

var btnBackToTop = document.getElementById('backToTopBtn');

window.onscroll = function() {scrollFunction()};

function scrollFunction(event) {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      btnBackToTop.style.display = "block";
    } else {
      btnBackToTop.style.display = "none";
    }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  btnBackToTop.onclick = function() {topFunction()};
  
  function topFunction(event) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  
  