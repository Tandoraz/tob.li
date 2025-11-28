import './style.css'
import 'bootstrap';
import "font-awesome/css/font-awesome.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function navigateTo(section) {
  document.querySelector('html, body').animate({scrollTop: $('#' + section).offset().top - 60 }, 'slow');
}

function checkNavStyle() {
 if (window.innerWidth > 600) {
   document.querySelector('ul.nav-main').removeClass('nav-expanded');
 }
}

function sendMail(data) {
  var formData = {};
  data.forEach(function(input) {
    formData[input.name] = input.value;
  });
  window.location.href = "mailto:buergi.tobias@gmail.com"
      + "&subject=" + escape(formData.name)
      + "&body=" + escape(formData.message);
  document.getElementById("mailForm").reset();
}

function calcAge() {
  var birthday = {
    day: 8,
    month: 4,
    year: 1998
  };
  var now = new Date();
  var age = now.getFullYear() - birthday.year;
  if (now.getMonth() < birthday.month || (now.getMonth() + 1 === birthday.month && now.getDate() < birthday.day)) {
    age--;
  }
  document.getElementById("age").innerHTML = age;
}

window.addEventListener("resize", checkNavStyle);

  calcAge();
  $('body').scrollspy({ target: '#nav' , offset: 60});

  document.querySelector('nav li a').click( function(e) {
    e.preventDefault();
  });

document.querySelector('ul.nav-burger li').click(function() {
  document.querySelector('ul.nav-main').toggleClass('nav-expanded');
});

  document.querySelector('a#backToTop').click(function(e) {
    navigateTo('header');
    e.preventDefault();
  });

  document.querySelector('li.nav-item a').click(function() {
    navigateTo($(this).attr('section-target'))
  });

  document.querySelector( "form#mailForm" ).submit(function( event ) {
    sendMail($(this).serializeArray());
    event.preventDefault();
  });
