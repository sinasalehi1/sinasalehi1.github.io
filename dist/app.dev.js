"use strict";

/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */

/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */
window.addEventListener('DOMContentLoaded', function (event) {
  particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#A3A3A3"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#CDCDCD",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  });
});
$(document).scroll(function (e) {
  if ($(window).scrollTop() >= 100) {
    $('.headerNav').removeClass("reveal");
    $('#logo').removeClass("revealL");
    $('.headerNav').addClass("hidden");
    $('#logo').addClass("hiddenL");
  } else {
    $('.headerNav').removeClass("hidden");
    $('#logo').removeClass("hiddenL");
    $('.headerNav').addClass("reveal");
    $('#logo').addClass("revealL");
  }
});
$(document).ready(function () {
  $('#nav-icon3').click(function () {
    $(this).toggleClass('open');
    $('.hamburgerM').toggleClass('MenuToggled');
    $('#nav-icon3').toggleClass('HmToggled');
  });
}); // Changing text

var text1 = "Iman Salehihikouei received his PhD in engineering with an emphasis in resilient infrastructure systems from the University of Georgia. At UMCES, he works as a postdoctoral research scientist on a NASA-funded research project titled “Effectiveness and monitoring of large-scale carbon-loss mitigation activities in Indonesia’s peatlands”.";
var text2 = "Iman’s research focuses on ecosystem responses to changing climate, fire disturbances, and management practices, as well as the subsequent consequences for water and carbon cycles. He integrates remote sensing imagery and other geospatial data, via eco-hydrological models, to study the processes and feedbacks associated with ecosystem dynamics.";
var text3 = "His studies cover coastal wetlands and tropical peatlands, with a particular focus on Indonesian peatlands. The primary goal of his research is to develop improved ecosystem monitoring capabilities and provide data-driven information support for more effective resource management, mitigation, and adaptation decisions.";
var index = 1;
var nindex = 2;
$('.arDb').on('click', function () {
  console.log("text".concat(index), "ntext".concat(nindex));
  $('.t1').fadeOut('slow', function () {
    $('.t1').html(eval("text".concat(index)));
  });
  $('.t2').fadeOut('slow', function () {
    $('.t2').html(eval("text".concat(nindex)));
  });
  $('.t1').fadeIn('slow', function () {});
  $('.t2').fadeIn('slow', function () {});
  index += 1;
  nindex += 1;

  if (index > 3) {
    index = 1;
  }

  if (nindex > 3) {
    nindex = 1;
  }
});
$('.accordion').accordion({
  heightStyle: "fill"
});
$(document).ready(function () {
  var myCarousel = document.getElementById('myCarousel');
});
console.log('Hi');