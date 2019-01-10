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
            <input id = "regUserName" type="text" placeholder = "Username" required>
            <input id = "regEmail" type="email" placeholder = "Email" required>
            <input id = "regPassword" type="password" placeholder = "Password" required>
            <input id = "regConfirmPassword" type="password" placeholder = "Confirm Password" required>
            <button id = "registerButton">Create Account</button>
            <p class = "message">Already a Registered Member? <a href = "#">LogIn </a></p>
          </form>
          <form class = "login-form">
            <input id = "userNameVal" type="text" placeholder = "Username">
            <input id = "passwordVal" type="password" placeholder = "Password">
            <button id = "logIn">Login</button>
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
        $("#logIn").click(eventListeners.userLogin)
        $("#logIn").click(eventListeners.loadDashboard)

        $("#registerButton").click(eventListeners.userRegistration)

      }
  }
  createEventInput() {
    const formContainer = this.createDomElement({elementType: "form", attribues: {class: "eventInput"}});
    const formHeader = this.createDomElement({elementType: "h1", content: "Add a New Event:"});
    formContainer.appendChild(formHeader);

    const nameFieldset = this.createDomElement({elementType: "fieldset"});
    const nameLabel = this.createDomElement({elementType: "label", content: "Event Name:", attributes: {for: "eventName"}});
    const nameInput = this.createDomElement({elementType: "input", attributes: {type: "text", name: "eventName", id: "eventName"}});
    nameFieldset.appendChild(nameLabel);
    nameFieldset.appendChild(nameInput);

    const dateFieldset = this.createDomElement({elementType: "fieldset"});
    const dateLabel = this.createDomElement({elementType: "label", content: "Event Date:", attributes: {for: "eventDate"}});
    const dateInput = this.createDomElement({elementType: "input", attributes: {type: "date", name: "eventDate", id: "eventDate"}});
    dateFieldset.appendChild(dateLabel);
    dateFieldset.appendChild(dateInput);

    const timeFieldset = this.createDomElement({elementType: "fieldset"});
    const timeLabel = this.createDomElement({elementType: "label", content: "Event Time:", attributes: {for: "eventTime"}});
    const timeInput = this.createDomElement({elementType: "input", attributes: {type: "time", name: "eventTime", id: "eventTime"}});
    timeFieldset.appendChild(timeLabel);
    timeFieldset.appendChild(timeInput);

    const locationFieldset = this.createDomElement({elementType: "fieldset"});
    const locationLabel = this.createDomElement({elementType: "label", content: "Enter Location:", attributes: {for: "eventLocation"}});
    const locationInput = this.createDomElement({elementType: "input", attributes: {type: "text", name: "eventLocation", id: "eventLocation"}});
    locationFieldset.appendChild(locationLabel);
    locationFieldset.appendChild(locationInput);

    const saveButton = this.createDomElement({elementType: "button", content: "Save", attributes: {type: "button", id: "saveEvent"}});

    formContainer.appendChild(nameFieldset);
    formContainer.appendChild(dateFieldset);
    formContainer.appendChild(timeFieldset);
    formContainer.appendChild(locationFieldset);
    formContainer.appendChild(saveButton);

    return formContainer;
  },
  createEventItem (eventObject) {
    const eventItem = this.createDomElement({elementType: "article", attributes: {class: "eventItem"}});
    const eventHeader = this.createDomElement({elementType: "h2", content: eventObject.eventName});
    const eventDateTime = this.createDomElement({elementType: "p", content: `At ${eventObject.eventTime} on ${eventObject.eventDate}`});
    const eventLocation = this.createDomElement({elementType: "p", content: `Location: ${eventObject.eventLocation}`});
    const editButton = this.createDomElement({elementType: "button", content: "Edit", attributes: {type: "button", id: `editEvent--${eventObject.id}`}});
    editButton.addEventListener("click", eventListeners.handleEventEditButton);
    const deleteButton = this.createDomElement({elementType: "button", content: "Delete", attributes: {type: "button", id: `deleteEvent--${eventObject.id}`}});
    deleteButton.addEventListener("click", eventListeners.handleEventDeleteButton);

    eventItem.appendChild(eventHeader);
    eventItem.appendChild(eventDateTime);
    eventItem.appendChild(eventLocation);
    eventItem.appendChild(editButton);
    eventItem.appendChild(deleteButton);

    return eventItem;
  },
  createEventEditInput(containerId, eventObject) {
    const formContainer = this.createDomElement({elementType: "form", attribues: {class: "eventEdit"}});

    const nameFieldset = this.createDomElement({elementType: "fieldset"});
    const nameLabel = this.createDomElement({elementType: "label", content: "Edit Name:", attributes: {for: "eventName"}});
    const nameInput = this.createDomElement({elementType: "input", attributes: {type: "text", name: "eventName", value: eventObject.eventName}});
    nameFieldset.appendChild(nameLabel);
    nameFieldset.appendChild(nameInput);

    const dateFieldset = this.createDomElement({elementType: "fieldset"});
    const dateLabel = this.createDomElement({elementType: "label", content: "Edit Date:", attributes: {for: "eventDate"}});
    const dateInput = this.createDomElement({elementType: "input", attributes: {type: "date", name: "eventDate", value: eventObject.eventDate}});
    dateFieldset.appendChild(dateLabel);
    dateFieldset.appendChild(dateInput);

    const timeFieldset = this.createDomElement({elementType: "fieldset"});
    const timeLabel = this.createDomElement({elementType: "label", content: "Edit Time:", attributes: {for: "eventTime"}});
    const timeInput = this.createDomElement({elementType: "input", attributes: {type: "time", name: "eventTime", value: eventObject.eventTime}});
    timeFieldset.appendChild(timeLabel);
    timeFieldset.appendChild(timeInput);

    const locationFieldset = this.createDomElement({elementType: "fieldset"});
    const locationLabel = this.createDomElement({elementType: "label", content: "Edit Location:", attributes: {for: "eventLocation"}});
    const locationInput = this.createDomElement({elementType: "input", attributes: {type: "text", name: "eventLocation", value: eventObject.eventLocation}});
    locationFieldset.appendChild(locationLabel);
    locationFieldset.appendChild(locationInput);

    const updateButton = this.createDomElement({elementType: "button", content: "Update", attributes: {type: "button", id: "submitEdits"}});
    // updateButton.addEventListener("click", eventListeners.handleEventUpdateButton);

    formContainer.appendChild(nameFieldset);
    formContainer.appendChild(dateFieldset);
    formContainer.appendChild(timeFieldset);
    formContainer.appendChild(locationFieldset);
    formContainer.appendChild(submitButton);

    let currentContainer = document.querySelector(`#${containerId}`);
    while (currentContainer.firstChild) {
      currentContainer.removeChild(currentContainer.firstChild);
    };

    return formContainer;
  }
}

export default domComponents