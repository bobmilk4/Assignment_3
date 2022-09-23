      /*code for navigation bar disapearing in @media mode */
      var navLinks = document.getElementById("navLinks");
      function showMenu(){
          navLinks.style.right = "0";
      }
      function hideMenu(){
          navLinks.style.right = "-200px";
      }
      // nav bar dissapears apon sroll
      var prevScrollpos = window.pageYOffset;
      window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
          if (prevScrollpos != currentScrollPos) {
              navLinks.style.right = "-200px";
    } else {
      navLinks.style.right = "0px";
    }
    prevScrollpos = currentScrollPos;
  }


/* code for form.html.*/
const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      Login = document.querySelector(".login-link");

// show/hide password function on form.html
      pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
          pwFields.forEach(pwField =>{
            if(pwField.type ==="password"){
              pwField.type = "text";

              pwShowHide.forEach(icon =>{
                icon.classList.replace("uil-eye-slash", "uil-eye");
              })
            }else{
              pwField.type = "password";

              pwShowHide.forEach(icon =>{
                icon.classList.replace("uil-eye", "uil-eye-slash");
              })
            }
          })
        })
      })
// event listener to change containers on form.html
      signUp.addEventListener("click", ( )=>{
        container.classList.add("active");
      });
      Login.addEventListener("click", ( )=>{
        container.classList.remove("active");
      });

//Vue.js script for gender options in form.html
      new Vue({
        el: "#app",
        data: {
          selected: undefined,
        }
      });


    