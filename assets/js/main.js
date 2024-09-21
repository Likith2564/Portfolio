/*===== MENU SHOW =====*/
const showMenu = ( toggleId, navId ) => {
    const toggle = document.getElementById( toggleId ),
      nav = document.getElementById( navId );
  
    if ( toggle && nav ) {
      toggle.addEventListener( "click", () => {
        nav.classList.toggle( "show" );
      } );
    }
  };
  showMenu( "nav-toggle", "nav-menu" );
  
  /*===== ACTIVE AND REMOVE MENU =====*/
  const navLinks = document.querySelectorAll( ".nav-link" );
  const sections = document.querySelectorAll( ".section" );
  
  window.addEventListener( "scroll", () => {
    let current = '';
    sections.forEach( section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if ( scrollY >= sectionTop - 390 ) {
        current = section.getAttribute( 'id' );
      }
    } )
  
    navLinks.forEach( link => {
      link.classList.remove( 'active' );
      if ( link.classList.contains( current ) ) {
        link.classList.add( 'active' );
      }
    } )
  } )
  
  // function linkAction() {
  //   /*Active link*/
  //   navLinks.forEach((n) => n.classList.remove("active"));
  //   this.classList.add("active");
  
  //   /*Remove menu mobile*/
  const navMenu = document.getElementById( "nav-menu" );
  //   navMenu.classList.remove("show");
  // }
  navLinks.forEach( ( n ) => n.addEventListener( "click", () => { navMenu.classList.remove( "show" ) } ) );
  
  /*===== COPY Email =====*/
  const copy = document.getElementById( "copy" );
  copy.addEventListener( "click", () => {
    navigator.clipboard.writeText( "likithraj8899@gmail.com" );
    copy.innerHTML = "copied";
    setTimeout( () => {
      copy.innerHTML = null;
    }, 1000 );
  } );
  
  /*===== SCROLL REVEAL ANIMATION =====*/
  const sr = ScrollReveal( {
    origin: "top",
    distance: "80px",
    duration: 800,
    reset: true,
  } );
  
  /*SCROLL HOME*/
  sr.reveal( ".home-title", {} );
  sr.reveal( ".button", { delay: 200 } );
  sr.reveal( ".home-img", { delay: 400 } );
  sr.reveal( ".home-social-icon", { interval: 200 } );
  
  /*SCROLL ABOUT*/
  sr.reveal( ".about-img", {} );
  sr.reveal( ".about-subtitle", { delay: 400 } );
  sr.reveal( ".about-text", { delay: 400 } );
  
  /*SCROLL SKILLS*/
  sr.reveal( ".skills-subtitle", {} );
  sr.reveal( ".skills-text", {} );
  sr.reveal( ".skills-data", { interval: 100 } );
  // sr.reveal(".skills-img", { delay: 600 });
  
  /*SCROLL projects*/
  sr.reveal( ".project-img", { interval: 200 } );
  
  /*SCROLL CONTACT*/
  // sr.reveal(".contact-input", { interval: 200 });
  // const themeIcon = document.getElementById('theme-icon');
  // const body = document.body;
  
  // themeIcon.addEventListener('click', function () {
  //   body.classList.toggle('dark-theme');
    
  //   // Toggle between sun and moon icons
  //   if (body.classList.contains('dark-theme')) {
  //     themeIcon.classList.replace('bx-sun', 'bx-moon');
  //   } else {
  //     themeIcon.classList.replace('bx-moon', 'bx-sun');
  //   }
  // });

  






  const themeIcon = document.getElementById('theme-icon');
const body = document.body;

themeIcon.addEventListener('click', function () {
  // Toggle dark theme class on body
  body.classList.toggle('dark-theme');
  
  // Check if the dark theme is active and toggle the bulb icon
  if (body.classList.contains('dark-theme')) {
    themeIcon.classList.replace('bx-sun', 'bx-moon'); // Change to moon icon for dark theme
  } else {
    themeIcon.classList.replace('bx-moon', 'bx-sun'); // Change to sun icon for light theme
  }
});












document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission behavior

  // Grab the form values
  const name = event.target.name.value.trim();
  const email = event.target.email.value.trim();
  const phone = event.target.phone.value.trim();
  const company = event.target.company.value.trim();
  const message = event.target.message.value.trim();

  // Validate form data (add any custom validation here if needed)
  if (!name || !email || !phone || !message) {
    document.getElementById("form-message").textContent = "Please fill out all required fields.";
    document.getElementById("form-message").style.display = "block";
    return;
  }

  // Clear previous error messages
  document.getElementById("form-message").style.display = "none";

  // You can send the form data to a backend or service like Formspree here
  // Example:
  // axios.post('your-endpoint', { name, email, phone, company, message }).then(response => {
  //   console.log(response);
  // });

  // Simulate form submission success
  document.getElementById("form-message").textContent = "Your message has been sent successfully!";
  document.getElementById("form-message").style.display = "block";
  document.getElementById("form-message").style.color = "green";

  // Clear form after submission
  event.target.reset();
});



