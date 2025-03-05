/*===========my links===============*/
document.querySelectorAll('#my-link').addEventListener("touchstart",function(){
  window.location.href="https://erza00.github.io/interior-web/","https://erza00.github.io/adventigo-web/","https://erza00.github.io/grill-web/";
})

/*=============== Show Menu ================= */
const navMenu = document.getElementById('nav-menu');
navToggle = document.getElementById('nav-toggle');
navClose = document.getElementById('nav-close');


/* show menu */
if(navToggle) {
  navToggle.addEventListener('click', ()=> {
    navMenu.classList.add('show-menu')
  } )
}

/* hide menu */ 

if(navClose) {
  navClose.addEventListener('click', ()=> {
    navMenu.classList.remove('show-menu')
  } )
}



/*=============== Active Link ================= */
const navLink = document.querySelectorAll('nav__link');

function activeLink(){
  navLink.forEach((a)=> a.classList.remove('active-link'));
  this.classList.add('active-link');
}

navLink.forEach((a) => a.addEventListener('click', activeLink));

/*=============== Background Header ================= */
function scrollHeader(){
const header = document.getElementById('header');

if(this.scrollY >= 50) header.classList.add('scroll-header');
else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);


/*=============== Testimonials Swiper =============== */

      var testiSwiper = new Swiper(".testimonial__container", {
        cssMode: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
        },
        mousewheel: true,
        keyboard: true,
      });


/*=============== Contact Form ====================*/
const contactForm = document.getElementById('contact-form'),
contactName = document.getElementById('contact-name'),
contactEmail = document.getElementById('contact-email'),
Message = document.getElementById('message'),
contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
e.preventDefault();

//Check if the field has a value
if(contactName.value === "" || contactEmail.value === "" ||  Message.value === ""){
  //add and remove color 
  contactMessage.classList.remove('color-light');
  contactMessage.classList.add('color-dark');
  //show message
  contactMessage.textContent = "Write all the input fields"
}else{
  emailjs.sendForm("service_h1uxnbs","template_66zsdi5","#contact-form", "c_25bUpDvSAada_nO").then(()=> {
    //show message and add color
    contactMessage.classList.add('color-light');
    contactMessage.textContent = "Message sent";

    //remove message after 5 seconds
    setTimeout(()=> {
      contactMessage.textContent = "";
    },5000);
  },
  (error) => {
    alert("OOPS! SOMETHING WENT WRONG...",error)
  }
);
//clear input fields
contactName.value = "";
contactEmail.value = "";
Message.value = "";
}
}



contactForm.addEventListener('submit',sendEmail); 
    
