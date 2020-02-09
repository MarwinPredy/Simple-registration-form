// Instancie la lib AOS au chargement de la page

document.addEventListener("DOMContentLoaded", function () {

  AOS.init();

});

// Montre/Cache le mdp au clique sur l'oeil

function Showpass() {
  var pass = document.getElementById("pass");
  var show = document.getElementById("show");
  var hide = document.getElementById("hide");
  if (pass.type === "password") {
    pass.type = "text";
    show.style.display = "none";
    hide.style.display = "block"
  } else if (pass.type === "text") {
    pass.type = "password";
    hide.style.display = "none";
    show.style.display = "block";
  }
}

// Montre/Cache la confirmation du mdp au clique sur l'oeil

function Showpassconf() {
  var passconf = document.getElementById("passconf");
  var showconf = document.getElementById("showconf");
  var hideconf = document.getElementById("hideconf");
  if (passconf.type === "password") {
    passconf.type = "text";
    showconf.style.display = "none";
    hideconf.style.display = "block"
  } else if (passconf.type === "text") {
    passconf.type = "password";
    hideconf.style.display = "none";
    showconf.style.display = "block";
  }
}

// Fait sauter le bitmap au chargement de la page

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}
// Check si la value des inputs est null quand l'input perd le focus.

$(document).ready(function () {
  document.querySelectorAll('.selectInput').forEach(function (input) {
    input.addEventListener('focusout', function () {
      if (this.value === '') {
        this.style.borderBottom = '1px solid red';
      } else {
        this.style.borderBottom = '1px solid green';
      }
    })
  });
  document.querySelectorAll('select').forEach(function (input) {
    input.addEventListener('focusout', function () {
      if (this.value === '') {
        this.style.borderBottom = '1px solid red';
      } else {
        this.style.borderBottom = '1px solid green';
      }
    })
  });

  // Verification quand le form est submit

  $('#accountForm').submit(function () {

    // Check si les deux input mdp sont les memes, si le gender a été choisi et si les CGU sont check

    var pass = $('#pass').val();
    var passconf = $('#passconf').val();
    if (pass == passconf) {
      if (!$("input[name='gender']:checked").val()) {
        alert('Veuillez selectionner votre civilité');
        return false;
      } else {
        if ($('#CGU').is(":checked")) {
          return true;
        } else {
          alert('Veuillez accepter les conditions générales');
          return false;
        }
      }
    } else {
      $('#passconf').css('border-bottom', '1px solid red');
      alert('Mot de passe invalide');
      return false;
    }
  });  

  $('#email').focusout(function() {
    var sEmail = $('#email').val();
    if (validateEmail(sEmail)) {
      $('#email').css('border-bottom', '1px solid green');
    }
    else {
    $('#email').css('border-bottom', '1px solid red');
    alert("Email invalide")
    }
    });
    function validateEmail(sEmail) {
    var filter = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    if (filter.test(sEmail)) {
    console.log("yes")
    return true;
    }
    else {
    console.log("no")
    return false;
    }}
});
