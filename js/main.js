/* Nav */
document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector('.burger-menu');
  const navMenu = document.querySelector('.navmenu');
  const navOverlay = document.querySelector('.nav-overlay');

  function toggleMenu() {
    navMenu.classList.toggle('active');
    navOverlay.classList.toggle('active');
  }

  burgerMenu.addEventListener('click', toggleMenu);

  document.querySelectorAll('.navlink').forEach(link => {
    link.addEventListener('click', function () {
      navMenu.classList.remove('active');
      navOverlay.classList.remove('active');
    });
  });

  navOverlay.addEventListener('click', function () {
    navMenu.classList.remove('active');
    navOverlay.classList.remove('active');
  });
});
/* Cookie */
document.addEventListener('DOMContentLoaded', function () {
  // Function to create a cookie
  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }

  // Function to get a cookie
  function getCookie(name) {
    const cname = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(cname) === 0) {
        return c.substring(cname.length, c.length);
      }
    }
    return "";
  }

  // Check if the user has already accepted cookies
  if (getCookie("cookies_accepted") !== "true") {
    document.getElementById('cookie-banner').style.display = 'block';
  }

  // Handle the accept button click
  document.getElementById('accept-cookies').addEventListener('click', function () {
    setCookie("cookies_accepted", "cookie", 365);
    document.getElementById('cookie-banner').style.display = 'none';
  });

  // Handle the decline button click
  document.getElementById('decline').addEventListener('click', function () {
    document.getElementById('cookie-banner').style.display = 'none';
  });

});

/* Footer Subscription */ 
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form-footer-subscription');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const emailField = document.getElementById('email');

    if (emailField.checkValidity()) {
      // Handle the form submission here, e.g., send the data to a server
      console.log('Form submitted with email:', emailField.value);
      
      // Redirect to the "thank you" page
      window.location.href = 'thankyou.html';
      
      // Reset the form
      form.reset();
    } else {
      // Display an error message if the email is invalid
      alert('Please enter a valid email address.');
    }
  });
});


