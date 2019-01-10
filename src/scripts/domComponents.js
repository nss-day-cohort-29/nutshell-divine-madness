import eventListeners from "./eventListeners";

const domComponents = {
  createDomElement({ elementType, content = null, cssClass, attributes = {} }) {
    const element = document.createElement(elementType);
    element.textContent = content;

    if (cssClass) {
      element.classList.add(cssClass);
    }

    for (let key in attributes) {
      element.setAttribute(key, attributes[key]);
    }
    return element;
  },
  createNavBar(){
    let navHTML = ` 
      <nav>
        <ul>
          <li><a class = "active" href = "#">Articles</a></li>
          <li><a href = "#">Events</a></li>
          <li><a href = "#">Tasks</a></li>
          <li><a href = "#">Friends</a></li>
          <li><a href = "#">Messages</a></li>
          <li id = "logo" ><a href="#about">Nomads</a></li>
        </ul>
      </nav>
    `
    let navBarContainer = document.querySelector("#main-nav")
    navBarContainer.innerHTML = navHTML
    },
    buildLoginForm(){
      //using string interpolation to create the form
      let formHTML = `
      <h1 class = "t-border">Nomads</h1>
        <section class = "form">
          <form action="" class = registerForm>
            <input type="text" placeholder = "Name" required>
            <input type="email" placeholder = "Email" required>
            <input type="text" placeholder = "Username" required>
            <input type="password" placeholder = "Password" required>
            <input type="password" placeholder = "Confirm Password" required>
            <button>Create Account</button>
            <p class = "message">Already a Registered Member? <a href = "#">LogIn </a></p>
          </form>
          <form class = "login-form">
            <input type="text" placeholder = "Username">
            <input type="password" placeholder = "Password">
            <button>Login</button>
            <button id = "modalButton">Nomads Mission</button>
            <p class = "message">Don't have an account? <a href = "#">Register</a></p>
          </form>
        </section>
        <section id="nomadModal" class="modal">
        <!-- Modal content -->
          <section class="modal-content">
            <section class="modal-header">
              <span class="close">&times;</span>
              <h2>The Purpose Behind Nomads</h2>
            </section>
            <section class="modal-body">
              <p>As outdoorsman, environmentalist, and filmmakers continue to grow. So do the adventurous spirits of those who embrace conscious consumerism and sustainable living. The purpose is to make a point of plugging into modern life and connecting with your fellow nomads from anywhere you may be. Share your location, Meet up, Exchange stories, Create relationships with people who have similar interest and enhance your traveling experience with nomads. What are you waiting for? 
            </section>
            <section class="modal-footer">
              <h3>Created By: Divine Madness&copy</h3>
            </section>
          </section>
        </section>
        `
        $("#output").html(formHTML)
        eventListeners.modalDisplayAnimation()
        //this will target the output article container
        // let logInPage = document.querySelector("#output")
        // logInPage.innerHTML = formHTML
        // $(".login-page").html(formHTML)
        /*applying toggleInputForms event listener to register link on bottom of log
        in form and on the login link of the register page*/
        // eventListeners.toggleInputForms()
        
      }
  }

export default domComponents