(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _eventListeners = _interopRequireDefault(require("./eventListeners"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const dashboard = {
  buildLoginForm() {
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
          <button type = "button" id = "logIn">Login</button>
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
            <h3>The minds behing Nomads</h3>
            <img id = "creatorsImage" src = "images/nomadCreators.jpg" alt = "application creators">
            <p>As outdoorsman, environmentalist, and filmmakers continue to grow. So do the adventurous spirits of those who embrace conscious consumerism and sustainable living. The purpose is to make a point of plugging into modern life and connecting with your fellow nomads from anywhere you may be. Share your location, Meet up, Exchange stories, Create relationships with people who have similar interest and enhance your traveling experience with nomads.</p>
          </section>
          <section class="modal-footer">
            <h3>Created By: Divine Madness&copy</h3>
          </section>
        </section>
      </section>
      `;
    $("#output").html(formHTML);

    _eventListeners.default.modalDisplayAnimation();

    $("#logIn").click(_eventListeners.default.userLogin);
    $("#registerButton").click(_eventListeners.default.userRegistration);
    $("#registerButton").click(this.buildLoginForm); // $("#registerButton").click(eventListeners.userLogin)
  },

  createNavBar() {
    let navHTML = `
      <nav>
        <ul>
          <li id = "newsLink"><a class = "active" href = "#">Articles</a></li>
          <li id = "eventLink"><a href = "#">Events</a></li>
          <li id = "tasksLink"><a href = "#">Tasks</a></li>
          <li id = "friendsLink"><a href = "#">Friends</a></li>
          <li id = "messagesLink"><a href = "#">Messages</a></li>
          <li class = "signOut" id = "logo" ><a href="#">Sign Out</a></li>
        </ul>
      </nav>
    `;
    let navBarContainer = document.querySelector("#main-nav");
    navBarContainer.innerHTML = navHTML;
    /*Navigation link event listeners*/

    $("#messagesLink").click(_eventListeners.default.messagesNavLink);
    $("#eventLink").click(_eventListeners.default.eventsNavLink);
    $("#friendsLink").click(_eventListeners.default.friendsNavLink);
    $("#tasksLink").click(_eventListeners.default.tasksNavLink);
    $("#newsLink").click(_eventListeners.default.newsNavLink);
    /*after signout is clicked session storage is cleared and the logIn/register form is presented from here
    another user can log in and session storage will kick off for the new logged in user*/

    $(".signOut").click(_eventListeners.default.nomadNavLink);
  }

};
var _default = dashboard;
exports.default = _default;

},{"./eventListeners":4}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const domComponents = {
  createDomElement({
    elementType,
    content = null,
    cssClass,
    attributes = {}
  }) {
    const element = document.createElement(elementType);
    element.textContent = content;

    if (cssClass) {
      element.classList.add(cssClass);
    }

    for (let key in attributes) {
      element.setAttribute(key, attributes[key]);
    }

    return element;
  }

};
var _default = domComponents;
exports.default = _default;

},{}],3:[function(require,module,exports){
"use strict";

var _events = _interopRequireDefault(require("./events"));

var _nomadData = _interopRequireDefault(require("./nomadData"));

var _friends = _interopRequireDefault(require("./friends"));

var _news = _interopRequireDefault(require("./news"));

var _messages = _interopRequireDefault(require("./messages"));

var _dashboard = _interopRequireDefault(require("./dashboard"));

var _eventListeners = _interopRequireDefault(require("./eventListeners"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import domComponents from "./domComponents";
//BUILDS NAIGATIONBAR//
// domComponents.createNavBar()
_dashboard.default.buildLoginForm();

$("modalButton").click(_eventListeners.default.modalDisplayAnimation); //NEWS SECTION
// news.save();
// news.allSaved();
// news.getNews();
// news.newsElementCreator();
// news.newsElementCreator();

},{"./dashboard":1,"./eventListeners":4,"./events":6,"./friends":7,"./messages":9,"./news":11,"./nomadData":12}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dashboard = _interopRequireDefault(require("./dashboard"));

var _domComponents = _interopRequireDefault(require("./domComponents"));

var _nomadData = _interopRequireDefault(require("./nomadData"));

var _events = _interopRequireDefault(require("./events"));

var _messages = _interopRequireDefault(require("./messages"));

var _friends = _interopRequireDefault(require("./friends"));

var _news = _interopRequireDefault(require("./news"));

var _tasks = _interopRequireDefault(require("./tasks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const eventListeners = {
  /*===============================================================================================================
  LOGIN FORM: user enters Username and Password. when User clicks login, the input field and NOMADS header disappear
  and the user will be displayed the "Dashboard" and the navigation bar. Upon login, sessionStorage is started. In the Console
  you will be able to see Who is logged in and what their userId is. ie. 1,2,3,4 etc.
  =================================================================================================================*/
  userLogin() {
    let logInVal = document.querySelector("#userNameVal").value;
    let passwordVal = document.querySelector("#passwordVal").value; //get to compare

    _nomadData.default.connectToData({
      "dataSet": "users",
      "fetchType": "GET",
      "embedItem": "?_embed=users"
    }).then(parsedUsers => {
      parsedUsers.forEach(user => {
        /*If login credentials match those in database.json. We want the user to be displayed their "dashboad"
        and navigation bar. So we need to set display to none and invoke the function - createNavBar()*/
        if (logInVal === user.userName && passwordVal === user.password) {
          //hides NOMAD heading
          $(".t-border").hide(); //hides the form

          $(".form").hide(); //displays navigatin bar

          _dashboard.default.createNavBar(); //session storage


          sessionStorage.setItem("userId", user.id);
          let userId = sessionStorage.getItem("userId"); //console.log verifying that credentials match and user is logged in

          console.log("logged in as" + " " + user.userName);
          console.log("your user ID is: " + userId);
        }
      });
    });
  },

  /*===============================================================================================================
  REGISTRATION FORM: When registering for an account the user will enter desired username, email, and password
  =================================================================================================================*/
  userRegistration() {
    let regUserName = document.querySelector("#regUserName").value;
    let regEmail = document.querySelector("#regEmail").value;
    let regPassword = document.querySelector("#regPassword").value; // let regConfirmPassword = document.querySelector("#regUserName").value

    _nomadData.default.connectToData({
      "dataSet": "users",
      "fetchType": "POST",
      "dataBaseObject": {
        "userName": regUserName,
        "email": regEmail,
        "password": regPassword
      }
    }).then(_nomadData.default.connectToData({
      "dataSet": "users",
      "fetchType": "GET",
      "embedItem": `?userName=${regUserName}`
    }).then(user => {
      console.log(user);
      user.forEach(x => {
        sessionStorage.setItem("userId", x.id); //hides NOMAD heading

        $(".t-border").hide(); //hides the form

        $(".form").hide(); //displays navigatin bar

        _dashboard.default.createNavBar();

        let userId = sessionStorage.getItem("userId"); //console.log verifying that credentials match and user is logged in

        console.log("logged in as" + " " + x.userName);
        console.log("your user ID is: " + userId);
      });
    }));
  },

  /*===============================================================================================================
  MODAL: user will click the NOMAD MISSION button and a modal will pop up describing what the application is about
  and who it is tailored towards
  =================================================================================================================*/
  modalDisplayAnimation() {
    let modal = document.getElementById("nomadModal"); // target modal to open it

    let btn = document.getElementById("modalButton"); // Get the <span> element that closes the modal

    let span = document.getElementsByClassName("close")[0]; // When the user clicks the button, open the modal

    btn.onclick = function () {
      modal.style.display = "block";
    }; // When the user clicks on <span> (x), close the modal


    span.onclick = function () {
      modal.style.display = "none";
    }; // When the user clicks anywhere outside of the modal, close it


    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };

    $(".message a").click(function () {
      $("form").animate({
        height: "toggle",
        opacity: "toggle"
      }, "slow");
    });
  },

  /*===============================================================================================================
  NAVBAR LI ELISTENERS: When user clicks an item in the NAVBAR the content associated with that tab will populate the DOM
  =================================================================================================================*/
  messagesNavLink() {
    _messages.default.createMessageBoard();

    console.log("working");

    _friends.default.buildFriendSearchBar();
  },

  eventsNavLink() {
    _events.default.showEventForm();

    _events.default.appendUserAndFriendEvents(); //appendUserEvent


    console.log("events clicked");
  },

  friendsNavLink() {
    console.log("friends nav link clicked");

    _friends.default.defineCurrentUsersFriends();

    _friends.default.initializePotentialFriends();
  },

  newsNavLink() {
    //NEWS SECTION
    _news.default.save();

    _news.default.allSaved();

    _news.default.getNews();

    _news.default.newsElementCreator();

    _friends.default.buildFriendSearchBar();

    console.log("news link clicked");
  },

  tasksNavLink() {
    _tasks.default.createTaskTables();

    _friends.default.buildFriendSearchBar();
  },

  nomadNavLink() {
    _dashboard.default.buildLoginForm();

    $("nav").hide();
    sessionStorage.clear();
    console.log("signed out");
  },

  /*========================================================================================================
  END OF NAVIGATION EVENTLISTENERS
  =========================================================================================================*/
  friendsDeleteFriend() {
    console.log(event.target);
  }

};
var _default = eventListeners;
exports.default = _default;

},{"./dashboard":1,"./domComponents":2,"./events":6,"./friends":7,"./messages":9,"./news":11,"./nomadData":12,"./tasks":13}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nomadData = _interopRequireDefault(require("./nomadData"));

var _events = _interopRequireDefault(require("./events"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import domComponents from "./domComponents";
const eventPageListeners = {
  handleShowButton() {
    const output = document.querySelector("#eventsContainer");
    const showButton = document.querySelector("#showForm");
    eventsContainer.removeChild(showButton);

    const eventForm = _events.default.createEventInput();

    eventsContainer.insertBefore(eventForm, eventsContainer.firstChild);
  },

  handleSaveButton() {
    const nameInputted = document.querySelector("#eventName").value;
    const dateInputted = document.querySelector("#eventDate").value;
    const timeInputted = document.querySelector("#eventTime").value;
    const locationInputted = document.querySelector("#eventLocation").value;

    if (nameInputted === "" || dateInputted === "" || timeInputted === "" || locationInputted === "") {
      alert("Please input information in all fields");
    } else {
      _nomadData.default.connectToData({
        dataSet: "events",
        fetchType: "POST",
        dataBaseObject: {
          userId: Number(sessionStorage.getItem("userId")),
          eventName: nameInputted,
          eventDate: dateInputted,
          eventTime: timeInputted,
          eventLocation: locationInputted
        }
      }).then(() => {
        _events.default.appendUserAndFriendEvents();
      });
    }

    ;
  },

  handleHideButton() {
    const eventsContainer = document.querySelector("#eventsContainer");
    const formContainer = document.querySelector(".eventInput");
    eventsContainer.removeChild(formContainer);

    _events.default.addShowButton();
  },

  handleDeleteButton() {
    const idToDelete = event.target.id.split("--")[1];

    _nomadData.default.connectToData({
      deleteId: idToDelete,
      dataSet: "events",
      fetchType: "DELETE",
      dataBaseObject: {
        userId: sessionStorage.getItem("userId")
      }
    }).then(() => {
      _events.default.appendUserAndFriendEvents();
    });
  },

  handleEditButton() {
    const idToEdit = event.target.id.split("--")[1];

    _nomadData.default.connectToData({
      dataSet: "events",
      fetchType: "GET",
      dataBaseObject: {
        userId: Number(sessionStorage.getItem("userId"))
      },
      embedItem: `/${idToEdit}` // Above is a bit of a hacky solution in order to get a specific event. Maybe need to add specific get function to nomadData

    }).then(parsedResponse => {
      _events.default.createEventEditInput(idToEdit, parsedResponse);
    });
  },

  handleUpdateButton() {
    const editedId = event.target.id.split("--")[1];
    const editedName = document.querySelector(`#editName--${editedId}`).value;
    const editedDate = document.querySelector(`#editDate--${editedId}`).value;
    const editedTime = document.querySelector(`#editTime--${editedId}`).value;
    const editedLocation = document.querySelector(`#editLocation--${editedId}`).value;

    if (editedName === "" || editedDate === "" || editedTime === "" || editedLocation === "") {
      alert("Please do not leave edit fields blank");
    } else {
      _nomadData.default.connectToData({
        putId: editedId,
        dataSet: "events",
        fetchType: "PUT",
        dataBaseObject: {
          id: editedId,
          userId: Number(sessionStorage.getItem("userId")),
          eventName: editedName,
          eventDate: editedDate,
          eventTime: editedTime,
          eventLocation: editedLocation
        }
      }).then(() => {
        _events.default.appendUserAndFriendEvents();
      });
    }
  }

};
var _default = eventPageListeners;
exports.default = _default;

},{"./events":6,"./nomadData":12}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nomadData = _interopRequireDefault(require("./nomadData"));

var _domComponents = _interopRequireDefault(require("./domComponents"));

var _eventPageListeners = _interopRequireDefault(require("./eventPageListeners"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Author: Cole Bryant / Purpose:
//createEventInput and createEventItem will be added to this object. so dombuilder.
const events = {
  showEventForm() {
    const output = document.querySelector("#output");

    while (output.firstChild) {
      output.removeChild(output.firstChild);
    }

    const eventsContainer = document.createElement("article");
    eventsContainer.setAttribute("id", "eventsContainer");
    output.appendChild(eventsContainer);
    const eventsForm = this.createEventInput();
    eventsContainer.appendChild(eventsForm);
    const eventLog = document.createElement("article");
    eventLog.setAttribute("id", "eventLog");
    eventsContainer.appendChild(eventLog);
  },

  addShowButton() {
    const eventsContainer = document.querySelector("#eventsContainer");

    const showButton = _domComponents.default.createDomElement({
      elementType: "button",
      content: "Create a New Event",
      attributes: {
        type: "button",
        id: "showForm"
      }
    });

    showButton.addEventListener("click", _eventPageListeners.default.handleShowButton);
    eventsContainer.insertBefore(showButton, eventsContainer.firstChild);
  },

  appendUserAndFriendEvents() {
    const eventLog = document.querySelector("#eventLog");
    const eventHolder = [];
    const userHolder = [Number(sessionStorage.getItem("userId"))];

    _nomadData.default.connectToData({
      dataSet: "friends",
      fetchType: "GET",
      dataBaseObject: "",
      embedItem: "?_embed=events"
    }).then(parsedResponse => {
      parsedResponse.forEach(response => {
        if (response.userId === Number(sessionStorage.getItem("userId"))) {
          userHolder.push(response.otherFriendId);
        }

        ;
      });
      userHolder.forEach(userId => {
        _nomadData.default.connectToData({
          dataSet: "events",
          fetchType: "GET",
          dataBaseObject: "",
          embedItem: `?_userId=${userId}`
        }).then(parsedResponse => {
          parsedResponse.forEach(response => {
            if (response.userId === userId) {
              eventHolder.push(response);
            }

            ;
          });
          const sortedEvents = eventHolder.sort((a, b) => {
            return new Date(a.eventDate) - new Date(b.eventDate);
          });
          const docuFrag = document.createDocumentFragment();
          sortedEvents.forEach(event => {
            while (eventLog.firstChild) {
              eventLog.removeChild(eventLog.firstChild);
            }

            ;
            const eventItem = this.createEventItem(event);
            docuFrag.appendChild(eventItem);
          });
          eventLog.appendChild(docuFrag);
        });
      });
    });
  },

  createEventInput() {
    const eventsContainer = document.querySelector("#eventsContainer");

    const eventForm = _domComponents.default.createDomElement({
      elementType: "form",
      attributes: {
        class: "eventInput"
      }
    });

    eventsContainer.appendChild(eventForm);

    const formHeader = _domComponents.default.createDomElement({
      elementType: "h2",
      content: "Add a New Event:"
    });

    eventForm.appendChild(formHeader);

    const nameFieldset = _domComponents.default.createDomElement({
      elementType: "fieldset"
    });

    const nameLabel = _domComponents.default.createDomElement({
      elementType: "label",
      content: "Event Name:",
      attributes: {
        for: "eventName"
      }
    });

    const nameInput = _domComponents.default.createDomElement({
      elementType: "input",
      attributes: {
        type: "text",
        name: "eventName",
        id: "eventName"
      }
    });

    nameFieldset.appendChild(nameLabel);
    nameFieldset.appendChild(nameInput);

    const dateFieldset = _domComponents.default.createDomElement({
      elementType: "fieldset"
    });

    const dateLabel = _domComponents.default.createDomElement({
      elementType: "label",
      content: "Event Date:",
      attributes: {
        for: "eventDate"
      }
    });

    const dateInput = _domComponents.default.createDomElement({
      elementType: "input",
      attributes: {
        type: "date",
        name: "eventDate",
        id: "eventDate"
      }
    });

    dateFieldset.appendChild(dateLabel);
    dateFieldset.appendChild(dateInput);

    const timeFieldset = _domComponents.default.createDomElement({
      elementType: "fieldset"
    });

    const timeLabel = _domComponents.default.createDomElement({
      elementType: "label",
      content: "Event Time:",
      attributes: {
        for: "eventTime"
      }
    });

    const timeInput = _domComponents.default.createDomElement({
      elementType: "input",
      attributes: {
        type: "time",
        name: "eventTime",
        id: "eventTime"
      }
    });

    timeFieldset.appendChild(timeLabel);
    timeFieldset.appendChild(timeInput);

    const locationFieldset = _domComponents.default.createDomElement({
      elementType: "fieldset"
    });

    const locationLabel = _domComponents.default.createDomElement({
      elementType: "label",
      content: "Event Location:",
      attributes: {
        for: "eventLocation"
      }
    });

    const locationInput = _domComponents.default.createDomElement({
      elementType: "input",
      attributes: {
        type: "text",
        name: "eventLocation",
        id: "eventLocation"
      }
    });

    locationFieldset.appendChild(locationLabel);
    locationFieldset.appendChild(locationInput);

    const saveButton = _domComponents.default.createDomElement({
      elementType: "button",
      content: "Save",
      attributes: {
        type: "button",
        id: "saveEvent"
      }
    });

    saveButton.addEventListener("click", _eventPageListeners.default.handleSaveButton);

    const hideButton = _domComponents.default.createDomElement({
      elementType: "button",
      content: "Hide Event Input",
      attributes: {
        type: "button",
        id: "hideEvent"
      }
    });

    hideButton.addEventListener("click", _eventPageListeners.default.handleHideButton);
    eventForm.appendChild(nameFieldset);
    eventForm.appendChild(dateFieldset);
    eventForm.appendChild(timeFieldset);
    eventForm.appendChild(locationFieldset);
    eventForm.appendChild(saveButton);
    eventForm.appendChild(hideButton);
    return eventForm;
  },

  createEventItem(eventObject) {
    const eventItem = _domComponents.default.createDomElement({
      elementType: "article",
      attributes: {
        class: "eventItem",
        id: `eventItem--${eventObject.id}`
      }
    });

    const eventHeader = _domComponents.default.createDomElement({
      elementType: "h2",
      content: eventObject.eventName
    });

    const date = new Date(eventObject.eventDate);

    const datify = () => {
      const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      const day = date.getDate();
      const monthIndex = date.getMonth();
      const year = date.getFullYear();
      return `${monthNames[monthIndex]} ${day}, ${year}`;
    };

    const longDate = datify();

    const eventDateTime = _domComponents.default.createDomElement({
      elementType: "p",
      content: `At ${eventObject.eventTime} on ${longDate}`
    });

    const eventLocation = _domComponents.default.createDomElement({
      elementType: "p",
      content: `Location: ${eventObject.eventLocation}`
    });

    eventItem.appendChild(eventHeader);
    eventItem.appendChild(eventDateTime);
    eventItem.appendChild(eventLocation);

    if (eventObject.userId === Number(sessionStorage.getItem("userId"))) {
      const editButton = _domComponents.default.createDomElement({
        elementType: "button",
        content: "Edit",
        attributes: {
          type: "button",
          id: `editEvent--${eventObject.id}`
        }
      });

      editButton.addEventListener("click", _eventPageListeners.default.handleEditButton);

      const deleteButton = _domComponents.default.createDomElement({
        elementType: "button",
        content: "Delete",
        attributes: {
          type: "button",
          id: `deleteEvent--${eventObject.id}`
        }
      });

      deleteButton.addEventListener("click", _eventPageListeners.default.handleDeleteButton);
      eventItem.appendChild(editButton);
      eventItem.appendChild(deleteButton);
    } else {
      _nomadData.default.connectToData({
        dataSet: "users",
        fetchType: "GET",
        embedItem: `/${eventObject.userId}`
      }).then(parsedResponse => {
        const eventUser = _domComponents.default.createDomElement({
          elementType: "p",
          content: `Event Created By: ${parsedResponse.userName}`
        });

        eventItem.appendChild(eventUser);
      });
    }

    ;
    return eventItem;
  },

  createEventEditInput(containerId, eventObject) {
    const formContainer = _domComponents.default.createDomElement({
      elementType: "form",
      attributes: {
        class: "eventEdit"
      }
    });

    const eventHeader = _domComponents.default.createDomElement({
      elementType: "h2",
      content: eventObject.eventName
    });

    formContainer.appendChild(eventHeader);

    const nameFieldset = _domComponents.default.createDomElement({
      elementType: "fieldset"
    });

    const nameLabel = _domComponents.default.createDomElement({
      elementType: "label",
      content: "Edit Name:",
      attributes: {
        for: "eventName"
      }
    });

    const nameInput = _domComponents.default.createDomElement({
      elementType: "input",
      attributes: {
        type: "text",
        name: "eventName",
        id: `editName--${containerId}`,
        value: eventObject.eventName
      }
    });

    nameFieldset.appendChild(nameLabel);
    nameFieldset.appendChild(nameInput);

    const dateFieldset = _domComponents.default.createDomElement({
      elementType: "fieldset"
    });

    const dateLabel = _domComponents.default.createDomElement({
      elementType: "label",
      content: "Edit Date:",
      attributes: {
        for: "eventDate"
      }
    });

    const dateInput = _domComponents.default.createDomElement({
      elementType: "input",
      attributes: {
        type: "date",
        name: "eventDate",
        id: `editDate--${containerId}`,
        value: eventObject.eventDate
      }
    });

    dateFieldset.appendChild(dateLabel);
    dateFieldset.appendChild(dateInput);

    const timeFieldset = _domComponents.default.createDomElement({
      elementType: "fieldset"
    });

    const timeLabel = _domComponents.default.createDomElement({
      elementType: "label",
      content: "Edit Time:",
      attributes: {
        for: "eventTime"
      }
    });

    const timeInput = _domComponents.default.createDomElement({
      elementType: "input",
      attributes: {
        type: "time",
        name: "eventTime",
        id: `editTime--${containerId}`,
        value: eventObject.eventTime
      }
    });

    timeFieldset.appendChild(timeLabel);
    timeFieldset.appendChild(timeInput);

    const locationFieldset = _domComponents.default.createDomElement({
      elementType: "fieldset"
    });

    const locationLabel = _domComponents.default.createDomElement({
      elementType: "label",
      content: "Edit Location:",
      attributes: {
        for: "eventLocation"
      }
    });

    const locationInput = _domComponents.default.createDomElement({
      elementType: "input",
      attributes: {
        type: "text",
        name: "eventLocation",
        id: `editLocation--${containerId}`,
        value: eventObject.eventLocation
      }
    });

    locationFieldset.appendChild(locationLabel);
    locationFieldset.appendChild(locationInput);

    const updateButton = _domComponents.default.createDomElement({
      elementType: "button",
      content: "Update",
      attributes: {
        type: "button",
        id: `submitEdits--${containerId}`
      }
    });

    updateButton.addEventListener("click", _eventPageListeners.default.handleUpdateButton);
    formContainer.appendChild(nameFieldset);
    formContainer.appendChild(dateFieldset);
    formContainer.appendChild(timeFieldset);
    formContainer.appendChild(locationFieldset);
    formContainer.appendChild(updateButton);
    let currentContainer = document.querySelector(`#eventItem--${containerId}`);

    while (currentContainer.firstChild) {
      currentContainer.removeChild(currentContainer.firstChild);
    }

    ;
    currentContainer.appendChild(formContainer);
  }

};
var _default = events;
exports.default = _default;

},{"./domComponents":2,"./eventPageListeners":5,"./nomadData":12}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nomadData = _interopRequireDefault(require("./nomadData"));

var _domComponents = _interopRequireDefault(require("./domComponents"));

var _friendsEventsListener = _interopRequireDefault(require("./friendsEventsListener"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const friends = {
  defineCurrentUsersFriends() {
    $("#output").empty();
    const currentUser = 1;
    let userId = sessionStorage.getItem('userId'); // let currentUser = Number(userId);

    console.log(currentUser, userId);
    let friendHolder = []; // PULL FROM FRIENDS JSON-------------------------

    _nomadData.default.connectToData({
      "dataSet": "friends",
      "fetchType": "GET",
      "dataBaseObject": "",
      "embedItem": "?_embed=events"
    }).then(fromFriends => {
      // console.log(fromFriends)
      fromFriends.forEach(friendData => {
        // console.log(friendData)
        if (friendData.userId === currentUser) {
          friendHolder.push(friendData.otherFriendId);
        }
      });
      friendHolder.forEach(officialFriend => {
        this.loadCurrentUsersFriends(officialFriend);
      });
    });
  },

  loadCurrentUsersFriends(friend) {
    // PULL FROM USERS JSON -----------------------
    // console.log(friend)
    const targetContainer = document.getElementById("output");
    targetContainer.appendChild(_domComponents.default.createDomElement({
      elementType: "section",
      attributes: {
        class: "friend-container",
        id: `friend-${friend}`
      }
    }));
    const friendContainer = document.getElementById(`friend-${friend}`);
    let friendDomBuilder = [];

    _nomadData.default.connectToData({
      "dataSet": "users",
      "fetchType": "GET",
      "dataBaseObject": "",
      "embedItem": "?_embed=events"
    }).then(fromUserData => {
      // console.log(fromUserData);
      fromUserData.forEach(userInfo => {
        // console.log(friend, userInfo.id)
        if (userInfo.id === friend) {
          // console.log(userInfo.userName);
          const friendIdentifier = {
            elementType: "h2",
            content: userInfo.userName
          };
          friendDomBuilder.push(friendIdentifier); // PULL FROM EVENTS JSON ------

          _nomadData.default.connectToData({
            "dataSet": "events",
            "fetchType": "GET",
            "dataBaseObject": "",
            "embedItem": "?_embed=events"
          }).then(events => {
            events.forEach(event => {
              if (event.userId === friend) {
                // console.log(event.eventName);
                const eventHolder = {
                  elementType: "p",
                  content: `Your fellow nomads upcoming event: ${event.eventName} on ${event.eventDate}`,
                  attributes: {
                    id: `event-${event.id}`
                  }
                };
                friendDomBuilder.push(eventHolder);
              }
            });
          }); // PULL FROM NEWSITEMS JSON ------


          _nomadData.default.connectToData({
            "dataSet": "newsitems",
            "fetchType": "GET",
            "dataBaseObject": "",
            "embedItem": "?_embed=newsitems"
          }).then(newsShiz => {
            // console.log(newsShiz)
            newsShiz.forEach(userSpecificArticles => {
              if (userSpecificArticles.userId === friend) {
                // console.log(userSpecificArticles.title)
                const articleHolder = {
                  elementType: "p",
                  content: userSpecificArticles.title,
                  attributes: {
                    id: `article-${userSpecificArticles.id}`
                  }
                };
                friendDomBuilder.push(articleHolder);
              }
            }); // console.log(friendDomBuilder)

            friendDomBuilder.forEach(object => {
              // console.log(object);
              friendContainer.appendChild(_domComponents.default.createDomElement(object));
            });
            const deleteFriend = document.createElement("button");
            deleteFriend.classList.add(`delete-friend-${friend}`);
            deleteFriend.setAttribute("type", "button");
            deleteFriend.textContent = "DELETE";
            friendContainer.appendChild(deleteFriend);
            deleteFriend.addEventListener("click", () => {
              _friendsEventsListener.default.friendsDeleteFriend();
            });
          });
        }
      });
    });
  },

  initializePotentialFriends() {
    let userId = sessionStorage.getItem('userId');
    let currentUser = Number(userId); // console.log("friends Page user id is-",currentUser);

    const targetContainer = document.getElementById("output");
    const findNewFriendContainer = document.createElement("section");
    let friendsIHave = [];
    findNewFriendContainer.setAttribute("id", "future-friends");
    targetContainer.appendChild(findNewFriendContainer);

    _nomadData.default.connectToData({
      "dataSet": "friends",
      "fetchType": "GET",
      "dataBaseObject": "",
      "embedItem": "?_embed=friends"
    }).then(fromFriends => {
      // console.log(fromFriends)
      fromFriends.forEach(friendData => {
        // console.log(friendData)
        if (friendData.userId === currentUser) {
          friendsIHave.push(friendData.otherFriendId);
        }
      }); // console.log(friendsIHave)

      this.showUserPotentialFriends(friendsIHave);
    });
  },

  showUserPotentialFriends(friend) {
    let userId = sessionStorage.getItem('userId');
    let currentUser = Number(userId); // console.log(friend)

    let allTheUsers = [];
    friend.push(currentUser);

    _nomadData.default.connectToData({
      "dataSet": "users",
      "fetchType": "GET",
      "dataBaseObject": "",
      "embedItem": "?_embed=users"
    }).then(allUsers => {
      allUsers.forEach(user => {
        // console.log(user.id)
        allTheUsers.push(user.id);
      });
      console.log("everyone", allTheUsers, "user and friends", friend);
      let notCurrentFriend = this.differenceOf2Arrays(allTheUsers, friend);
      notCurrentFriend.forEach(noFriendOfMine => {
        this.printPotentialFriendsToBrowser(noFriendOfMine);
      });
    });
  },

  differenceOf2Arrays(array1, array2) {
    var temp = [];
    array1 = array1.toString().split(',').map(Number);
    array2 = array2.toString().split(',').map(Number);

    for (var i in array1) {
      if (array2.indexOf(array1[i]) === -1) temp.push(array1[i]);
    }

    for (i in array2) {
      if (array1.indexOf(array2[i]) === -1) temp.push(array2[i]);
    }

    return temp.sort((a, b) => a - b);
  },

  printPotentialFriendsToBrowser(notAFriend) {
    // console.log(notAFriend)
    const targetSectionContainer = document.getElementById("future-friends");
    targetSectionContainer.appendChild(_domComponents.default.createDomElement({
      elementType: "div",
      attributes: {
        id: `potentialFriend-${notAFriend}`
      }
    }));

    _nomadData.default.connectToData({
      "dataSet": "users",
      "fetchType": "GET",
      "dataBaseObject": "",
      "embedItem": "?_embed=users"
    }).then(usersInfo => {
      usersInfo.forEach(user => {
        if (user.id === notAFriend) {
          console.log(user.id, "is no friend");
          const potentialFriendContainer = document.getElementById(`potentialFriend-${notAFriend}`);
          potentialFriendContainer.appendChild(_domComponents.default.createDomElement({
            elementType: 'h2',
            content: user.userName,
            cssClass: `potential-friend-${user.id}`
          }));
          potentialFriendContainer.appendChild(_domComponents.default.createDomElement({
            elementType: "button",
            content: "Add Friend",
            attributes: {
              id: `add-friend-button-${user.id}`,
              type: "button"
            }
          }));
          const forAddButton = document.getElementById(`add-friend-button-${user.id}`);
          forAddButton.addEventListener("click", () => {
            _friendsEventsListener.default.friendsAddFriend();
          });
        }
      });
    }); // console.log(notAFriend)

  },

  friendSortFromMessagesSection(arrayOfFriends, friendToAdd, friendToAddName) {
    let userId = sessionStorage.getItem('userId');
    let currentUser = Number(userId);
    arrayOfFriends.push(currentUser);
    let arrayOfUsers = [];

    _nomadData.default.connectToData({
      "dataSet": "users",
      "fetchType": "GET",
      "dataBaseObject": "",
      "embedItem": "?_embed=events"
    }).then(users => {
      users.forEach(user => {
        arrayOfUsers.push(user.id);
      });
      let notFriendsList = this.compareMessageFriendArrays(arrayOfUsers, arrayOfFriends);
      this.messengerAddfriendFinale(notFriendsList, friendToAdd, friendToAddName);
    });
  },

  compareMessageFriendArrays(array1, array2) {
    var temp = [];
    array1 = array1.toString().split(',').map(Number);
    array2 = array2.toString().split(',').map(Number);

    for (var i in array1) {
      if (array2.indexOf(array1[i]) === -1) temp.push(array1[i]);
    }

    for (i in array2) {
      if (array1.indexOf(array2[i]) === -1) temp.push(array2[i]);
    }

    return temp.sort((a, b) => a - b);
  },

  messengerAddfriendFinale(notfriends, wantedFriend, friendToAddName) {
    console.log(notfriends, Number(wantedFriend));
    const finalFriend = notfriends.filter(friendsThatArent => friendsThatArent === Number(wantedFriend)); // console.log(finalFriend[0], Number(wantedFriend))

    if (finalFriend[0] === Number(wantedFriend)) {
      if (friendToAddName === "modal") {
        _friendsEventsListener.default.searchBarAddFriendToJson(finalFriend);
      } else {
        this.modalQuestionaireOfFriendshipValidity(wantedFriend, friendToAddName);
      } // alert(`You've added a fellow Nomad ${friendToAddName} your friend list`)

    } else {
      alert("Uh.... You can't friend there (it's you or someone who's already a friend).");
    }
  },

  modalQuestionaireOfFriendshipValidity(wantedFriend, friendToAddName) {
    document.getElementById("output").appendChild(_domComponents.default.createDomElement({
      elementType: "section",
      attributes: {
        id: "modal-container"
      }
    }));
    document.getElementById("modal-container").appendChild(_domComponents.default.createDomElement({
      elementType: "div",
      attributes: {
        id: "friends__backdrop"
      }
    }));
    document.getElementById("modal-container").appendChild(_domComponents.default.createDomElement({
      elementType: "div",
      attributes: {
        id: "friends__modal"
      }
    }));
    const modalParentTarget = document.getElementById("friends__modal");
    modalParentTarget.appendChild(_domComponents.default.createDomElement({
      elementType: "h1",
      content: `You sure you want ${friendToAddName} as a friend?`,
      attributes: {
        id: "friends__content"
      }
    }));
    modalParentTarget.appendChild(_domComponents.default.createDomElement({
      elementType: "p",
      content: "I mean really....",
      attributes: {
        href: "#",
        id: "friends__close"
      }
    }));
    modalParentTarget.appendChild(_domComponents.default.createDomElement({
      elementType: "button",
      content: "Don't Friend",
      attributes: {
        id: "dontFriend",
        type: "button"
      }
    }));
    modalParentTarget.appendChild(_domComponents.default.createDomElement({
      elementType: "button",
      content: `Yes, make ${friendToAddName} a Friend`,
      attributes: {
        id: "friendItUp",
        name: wantedFriend,
        type: "button"
      }
    }));
    document.getElementById("dontFriend").addEventListener("click", () => {
      _friendsEventsListener.default.closeMessageModal();
    });
    document.getElementById("friendItUp").addEventListener("click", () => {
      _friendsEventsListener.default.closeMessageModal();
    });
    this.openFriendModal();
  },

  openFriendModal() {
    let backdrop = document.getElementById("friends__backdrop");
    let modal = document.getElementById("friends__modal");
    backdrop.style.display = "block";
    modal.style.display = "block";
  },

  buildFriendSearchBar() {
    document.getElementById("output").appendChild(_domComponents.default.createDomElement({
      elementType: "div",
      attributes: {
        id: "friend-search-box"
      }
    }));
    document.getElementById("friend-search-box").appendChild(_domComponents.default.createDomElement({
      elementType: "input",
      attributes: {
        id: "friend-search-input",
        class: "search-txt",
        type: "text",
        name: "",
        placeholder: "Search For Friends"
      }
    }));
    document.getElementById("friend-search-box").appendChild(_domComponents.default.createDomElement({
      elementType: "a",
      attributes: {
        class: "friend-search-btn",
        href: "#",
        id: "friend-icon-anchor"
      }
    }));
    document.getElementById("friend-icon-anchor").appendChild(_domComponents.default.createDomElement({
      elementType: "i",
      cssClass: "fas"
    }));
    let searchIcon = document.querySelector(".fas");
    searchIcon.classList.add("fa-search");
    const usersSearchFriendInputEnter = document.getElementById("friend-search-input");
    usersSearchFriendInputEnter.addEventListener("keypress", keyPressEvent => {
      // console.log(event.key)
      if (keyPressEvent.charCode === 13) {
        let userInputEnter = keyPressEvent.target.value;

        _friendsEventsListener.default.searchInputMagic(userInputEnter);

        usersSearchFriendInputEnter.value = "";
      }
    });
    const usersSearchFriendInputClick = document.getElementById("friend-icon-anchor");
    usersSearchFriendInputClick.addEventListener("click", () => {
      let userInputClick = usersSearchFriendInputEnter.value;

      _friendsEventsListener.default.searchInputMagic(userInputClick);

      usersSearchFriendInputEnter.value = "";
    });
  },

  searchResultDisplayed(friendSearchResultDisplayed) {
    console.log("yo");
    document.getElementById("output").appendChild(_domComponents.default.createDomElement({
      elementType: "section",
      attributes: {
        id: "modal-container"
      }
    }));
    document.getElementById("modal-container").appendChild(_domComponents.default.createDomElement({
      elementType: "div",
      attributes: {
        id: "friends__backdrop"
      }
    }));
    document.getElementById("modal-container").appendChild(_domComponents.default.createDomElement({
      elementType: "div",
      attributes: {
        id: "friends__modal"
      }
    }));
    const modalParentTarget = document.getElementById("friends__modal");
    modalParentTarget.appendChild(_domComponents.default.createDomElement({
      elementType: "h1",
      content: `Would you like to be friends with ${friendSearchResultDisplayed.userName}?`,
      attributes: {
        id: "friends__content"
      }
    }));
    modalParentTarget.appendChild(_domComponents.default.createDomElement({
      elementType: "p",
      content: `I mean ${friendSearchResultDisplayed.userName} is pretty cool...`,
      attributes: {
        href: "#",
        id: "friends__close"
      }
    }));
    modalParentTarget.appendChild(_domComponents.default.createDomElement({
      elementType: "button",
      content: "Don't Friend",
      attributes: {
        id: "dontFriend",
        type: "button"
      }
    }));
    modalParentTarget.appendChild(_domComponents.default.createDomElement({
      elementType: "button",
      content: `Yes, make ${friendSearchResultDisplayed.userName} a Friend`,
      attributes: {
        id: "friendItUp-searchModal",
        type: "button"
      }
    }));
    document.getElementById("dontFriend").addEventListener("click", () => {
      _friendsEventsListener.default.closeMessageModal();
    });
    document.getElementById("friendItUp-searchModal").addEventListener("click", () => {
      _friendsEventsListener.default.searchBarFriending(friendSearchResultDisplayed.id);
    });
    this.openFriendModal();
  }

};
var _default = friends; // const tester = [
//   {
//     elementType: "h2",
//     content: "jake bannon"
//   },
//   {
//     elementType: "p",
//     content: "Pool Party 3pm"
//   },
//   {
//     elementType: "p",
//     content: "check out this news article"
//   }
// ]

exports.default = _default;

},{"./domComponents":2,"./friendsEventsListener":8,"./nomadData":12}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _friends = _interopRequireDefault(require("./friends"));

var _messages = _interopRequireDefault(require("./messages"));

var _nomadData = _interopRequireDefault(require("./nomadData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const friendsEventsListener = {
  friendsDeleteFriend() {
    const friendToDelete = event.target.classList.value.split("-")[2];
    let userId = sessionStorage.getItem("userId");
    let currentUser = userId;
    console.log(friendToDelete, currentUser);
    let finalNumberSendForDelete = 0;

    _nomadData.default.connectToData({
      "dataSet": "friends",
      "fetchType": "GET",
      "dataBaseObject": "",
      "embedItem": "?_embed=friends"
    }).then(destroyFriendsHeart => {
      destroyFriendsHeart.forEach(goodbyeFriend => {
        console.log(goodbyeFriend.userId, Number(currentUser));

        if (goodbyeFriend.otherFriendId === Number(friendToDelete) && goodbyeFriend.userId === Number(currentUser)) {
          console.log("PeaceOut", goodbyeFriend.id);
          finalNumberSendForDelete = goodbyeFriend.id;
        }
      });
      let goodByeSearchResults = document.getElementById(`friend-${friendToDelete}`);
      goodByeSearchResults.parentNode.removeChild(goodByeSearchResults);
      console.log(finalNumberSendForDelete);

      _nomadData.default.connectToData({
        "deleteId": finalNumberSendForDelete,
        "dataSet": "friends",
        "fetchType": "DELETE",
        "dataBaseObject": {
          "userId": sessionStorage.getItem("userId")
        }
      });
    });
  },

  friendsAddFriend() {
    let userId = sessionStorage.getItem("userId");
    let currentUser = Number(userId);
    const friendToBeAdded = event.target.id.split("-")[3];
    console.log(`user${currentUser}`, `Adding Friend${friendToBeAdded}`);
    let goodByeNonFriend = document.getElementById(`potentialFriend-${friendToBeAdded}`);
    goodByeNonFriend.parentNode.removeChild(goodByeNonFriend);
    alert(`${event.target.previousSibling.innerText} is now your friend!`);

    _nomadData.default.connectToData({
      "dataSet": "friends",
      "fetchType": "POST",
      "dataBaseObject": {
        "userId": currentUser,
        "otherFriendId": Number(friendToBeAdded)
      }
    });
  },

  shiz() {
    const friendToBeAdded = event.target.attributes.name.value;
    const friendToBeAddedHasAName = event.target.textContent.split(":")[0];
    let friendsIHave = [];
    let userId = sessionStorage.getItem('userId');
    let currentUser = Number(userId);

    _nomadData.default.connectToData({
      "dataSet": "friends",
      "fetchType": "GET",
      "dataBaseObject": "",
      "embedItem": "?_embed=friends"
    }).then(fromFriends => {
      // console.log(fromFriends)
      fromFriends.forEach(friendData => {
        // console.log(friendData)
        if (friendData.userId === currentUser) {
          friendsIHave.push(friendData.otherFriendId);
        }
      }); // console.log(friendsIHave)

      _friends.default.friendSortFromMessagesSection(friendsIHave, friendToBeAdded, friendToBeAddedHasAName);
    });
  },

  closeMessageModal() {
    let userId = sessionStorage.getItem('userId');
    let currentUser = Number(userId);

    if (event.target.id === "dontFriend") {
      let goodByeSearchResults = document.getElementById("modal-container");
      goodByeSearchResults.parentNode.removeChild(goodByeSearchResults);
    } else if (event.target.id === "friendItUp") {
      let goodByeSearchResults = document.getElementById("modal-container");
      goodByeSearchResults.parentNode.removeChild(goodByeSearchResults);
      let friendTobe = event.target.attributes.name.value;
      console.log(friendTobe);

      _nomadData.default.connectToData({
        "dataSet": "friends",
        "fetchType": "POST",
        "dataBaseObject": {
          "userId": currentUser,
          "otherFriendId": Number(friendTobe)
        }
      });
    }
  },

  searchInputMagic(userInput) {
    let userId = sessionStorage.getItem('userId');
    let currentUser = Number(userId); // console.log(userInput)

    _nomadData.default.connectToData({
      "dataSet": "users",
      "fetchType": "GET",
      "dataBaseObject": "",
      "embedItem": "?_embed=users"
    }).then(users => {
      const foundUsers = users.find(user => user.userName.includes(userInput));
      console.log(foundUsers.id, currentUser);

      if (foundUsers.id === currentUser) {
        alert("Can't friend yourself");
      } else {
        _friends.default.searchResultDisplayed(foundUsers);
      }
    });
  },

  searchBarFriending(friendToBeFromSearchId) {
    const definedAsFromSearchModal = "modal";
    let friendsIHave = [];
    let userId = sessionStorage.getItem('userId');
    let currentUser = Number(userId);

    _nomadData.default.connectToData({
      "dataSet": "friends",
      "fetchType": "GET",
      "dataBaseObject": "",
      "embedItem": "?_embed=friends"
    }).then(fromFriends => {
      // console.log(fromFriends)
      fromFriends.forEach(friendData => {
        // console.log(friendData)
        if (friendData.userId === currentUser) {
          friendsIHave.push(friendData.otherFriendId);
        }
      }); // console.log(friendsIHave)

      _friends.default.friendSortFromMessagesSection(friendsIHave, friendToBeFromSearchId, definedAsFromSearchModal);
    });
  },

  searchBarAddFriendToJson(friendToBe) {
    let userId = sessionStorage.getItem('userId');
    let currentUser = Number(userId);
    let goodByeSearchResults = document.getElementById("modal-container");
    goodByeSearchResults.parentNode.removeChild(goodByeSearchResults);

    _nomadData.default.connectToData({
      "dataSet": "friends",
      "fetchType": "POST",
      "dataBaseObject": {
        "userId": currentUser,
        "otherFriendId": Number(friendToBe)
      }
    });
  }

};
var _default = friendsEventsListener;
exports.default = _default;

},{"./friends":7,"./messages":9,"./nomadData":12}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nomadData = _interopRequireDefault(require("./nomadData"));

var _domComponents = _interopRequireDefault(require("./domComponents"));

var _messagesEventListeners = _interopRequireDefault(require("./messagesEventListeners"));

var _friendsEventsListener = _interopRequireDefault(require("./friendsEventsListener.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const messages = {
  createMessageBoard() {
    $("#output").empty();
    let outputArticle = document.getElementById("output"); //create display container

    let messagesContainer = _domComponents.default.createDomElement({
      elementType: "section",
      cssClass: "messagesContainer",
      attributes: {
        id: "messagesContainer"
      }
    }); //create message input field


    let messageInput = _domComponents.default.createDomElement({
      elementType: "input",
      cssClass: "messageInput",
      attributes: {
        id: "messageInput",
        placeholder: "Enter Message Here"
      }
    }); //create submit button for input field


    let messageSubmitButton = _domComponents.default.createDomElement({
      elementType: "button",
      cssClass: "messageSubmitButton",
      content: "Submit",
      attributes: {
        id: "messageSubmitButton",
        type: "button"
      }
    });

    messageSubmitButton.addEventListener("click", _messagesEventListeners.default.postNewMessage, {
      once: true
    });
    messagesContainer.appendChild(messageInput);
    messagesContainer.appendChild(messageSubmitButton);
    outputArticle.appendChild(messagesContainer);
    this.getMessages();
  },

  getMessages() {
    //GET fetch & .then to build object(s) for createDomElement() using _expand to display UN: message
    _nomadData.default.connectToData({
      dataSet: "messages",
      fetchType: "GET",
      embedItem: "?_expand=user"
    }).then(messages => {
      let messageContainer = document.getElementById("messagesContainer");
      let messageInput = document.getElementById("messageInput"); //sort messages by timeStamp

      messages.sort(function (a, b) {
        return new Date(a.timeStamp) - new Date(b.timeStamp);
      }); //build DOM Component for each message and append

      messages.forEach(message => {
        console.log(message);
        let messageText = message.message;
        let userName = message.user.userName;
        let messageId = message.id;
        let messageTimeStamp = message.timeStamp;
        let messageUser = `${message.userId}`;
        let loggedInUser = sessionStorage.getItem("userId");

        let messageElement = _domComponents.default.createDomElement({
          // ADD LINK HERE
          elementType: "h3",
          cssClass: "messageUserName",
          content: `${userName}:`,
          attributes: {
            id: `message${messageId}`,
            name: parseInt(messageUser)
          }
        });

        let messageElement2 = _domComponents.default.createDomElement({
          elementType: "p",
          cssClass: "messageText",
          content: `${messageText}`,
          attributes: {
            id: messageId
          }
        });

        if (messageUser === loggedInUser) {
          let messageEditButton = _domComponents.default.createDomElement({
            elementType: "button",
            cssClass: "messageEditButton",
            content: "Edit",
            attributes: {
              id: `messageEditButton_${messageId}`,
              name: messageTimeStamp,
              type: "button"
            }
          });

          messageEditButton.addEventListener("click", _messagesEventListeners.default.editMessage, {
            once: true
          });
          messageElement.appendChild(messageElement2);
          messageElement.appendChild(messageEditButton);
          messageContainer.insertBefore(messageElement, messageInput);
        } else {
          messageElement.appendChild(messageElement2);
          messageContainer.insertBefore(messageElement, messageInput);
        }

        messageElement.addEventListener("click", _friendsEventsListener.default.shiz);
      });
    });
  }

};
var _default = messages;
exports.default = _default;

},{"./domComponents":2,"./friendsEventsListener.js":8,"./messagesEventListeners":10,"./nomadData":12}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nomadData = _interopRequireDefault(require("./nomadData"));

var _domComponents = _interopRequireDefault(require("./domComponents"));

var _messages = _interopRequireDefault(require("./messages"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import friendsEventListeners from "./friendsEventListeners.js";
const messagesEventListeners = {
  postNewMessage() {
    let messageInput = document.getElementById("messageInput").value;
    let timeStamp = new Date();

    _nomadData.default.connectToData({
      dataSet: "messages",
      fetchType: "POST",
      dataBaseObject: {
        userId: Number(sessionStorage.getItem("userId")),
        message: messageInput,
        //.value,
        timeStamp: timeStamp
      }
    }).then(shit => {
      console.log(shit);
      $("#output").empty();

      _messages.default.createMessageBoard();
    });
  },

  editMessage() {
    let number = event.currentTarget.id;
    let messageArray = number.split("_");
    let messageId = messageArray[1];
    let messageToEdit = document.getElementById(`${messageId}`);
    let messageText = messageToEdit.innerHTML;
    let messageContainer = document.getElementById(`message${messageId}`);
    let messageTimeStamp = event.currentTarget.name;

    let messageEditForm = _domComponents.default.createDomElement({
      elementType: "form",
      cssClass: "messageEditForm",
      attributes: {
        id: "messageEditForm"
      }
    });

    let messageEditFieldset = _domComponents.default.createDomElement({
      elementType: "fieldset",
      cssClass: "messageEditFieldset",
      attributes: {
        id: "messageEditFieldset"
      }
    });

    let messageEditInput = _domComponents.default.createDomElement({
      elementType: "input",
      cssClass: "messageEditInput",
      attributes: {
        id: `messageEditInput_${messageId}`,
        value: `${messageText}`
      }
    });

    let messageEditSubmitButton = _domComponents.default.createDomElement({
      elementType: "button",
      cssClass: "messageEditSubmitButton",
      content: "Submit",
      attributes: {
        id: `messageEditSubmitButton_${messageId}`,
        name: messageTimeStamp,
        type: "button"
      }
    });

    messageEditSubmitButton.addEventListener("click", messagesEventListeners.handleEditSubmitButton);
    messageEditFieldset.appendChild(messageEditInput);
    messageEditFieldset.appendChild(messageEditSubmitButton);
    messageEditForm.appendChild(messageEditFieldset);
    messageContainer.appendChild(messageEditForm);
    event.stopPropagation();
  },

  handleEditSubmitButton() {
    let number = event.currentTarget.id;
    let messageArray = number.split("_");
    let messageId = messageArray[1];
    let messageTimeStamp = `${event.currentTarget.name}`;
    let messageEditInput = document.getElementById(`messageEditInput_${messageId}`);

    _nomadData.default.connectToData({
      putId: messageId,
      dataSet: "messages",
      fetchType: "PUT",
      dataBaseObject: {
        userId: Number(sessionStorage.getItem("userId")),
        message: `${messageEditInput.value}`,
        timeStamp: `${messageTimeStamp}`
      }
    }).then(shit => {
      console.log(shit);
      $("#output").empty();

      _messages.default.createMessageBoard();
    });
  }

};
var _default = messagesEventListeners;
exports.default = _default;

},{"./domComponents":2,"./messages":9,"./nomadData":12}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nomadData = _interopRequireDefault(require("./nomadData"));

var _domComponents = _interopRequireDefault(require("./domComponents"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//pull from api then display to dom.
// create save button send saved articles to Json
// create button to pull all saved materials in json.
// delete method for articles
const news = {
  getNews() {
    //pull then send pulled data to dom
    return fetch("http://jsonplaceholder.typicode.com/posts/1").then(newsItems => newsItems.json());
  },

  save() {
    //This is functioning and writing to JSON.
    this.getNews().then(post => {
      const newsObject = {
        "dataSet": "newsItems",
        "fetchType": "POST",
        "dataBaseObject": {
          "userId": 1,
          "url": `${post.title}`,
          "title": `${post.body}`,
          "synopsis": "blah blah blah"
        } // console.log(testnewsObj);

      };

      _nomadData.default.connectToData(newsObject);
    });
  },

  allSaved() {// nomadData.connectToData(testnewsObj)
  },

  deleteDB() {},

  newsElementCreator() {
    $("#output").empty();
    const newsContainer = document.querySelector("#output");
    let newsCreatorKey = {
      "dataSet": "newsItems",
      "fetchType": "GET",
      "dataBaseObject": "",
      "embedItem": "?_embed=newsItems"
    };

    _nomadData.default.connectToData(newsCreatorKey).then(dbGrabs => {
      dbGrabs.forEach(dbGrab => {
        // console.log(dbGrab);
        newsContainer.appendChild(_domComponents.default.createDomElement({
          elementType: "button",
          content: "SAVE BITCH",
          cssClass: "newsSaveButton"
        }));
        newsContainer.appendChild(_domComponents.default.createDomElement({
          elementType: "h2",
          content: dbGrab.title,
          cssClass: "newsTitle"
        }));
        newsContainer.appendChild(_domComponents.default.createDomElement({
          elementType: "p",
          content: dbGrab.synopsis,
          cssClass: "newsBody"
        }));
        newsContainer.appendChild(_domComponents.default.createDomElement({
          elementType: "a",
          content: dbGrab.url,
          cssClass: "newsURL",
          attributes: {
            href: `${dbGrab.url}`
          }
        }));
      });
    }); // const NewsTest = domComponents.createDomElement("h2",testPass,"testObj",null);
    //output.appendChild(NewsTest);

  }

};
var _default = news;
exports.default = _default;

},{"./domComponents":2,"./nomadData":12}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _eventListeners = _interopRequireDefault(require("./eventListeners"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const nomadData = {
  connectToData(fetchObject) {
    let dataSet = fetchObject.dataSet;
    let embedItem = fetchObject.embedItem;
    let fetchType = fetchObject.fetchType;
    let dataBaseObject = fetchObject.dataBaseObject;
    let putId = fetchObject.putId;
    let deleteId = fetchObject.deleteId;

    if (fetchType == "GET") {
      return fetch(`http://localhost:8088/${dataSet}${embedItem}`).then(response => response.json()); // parses response to JSON
    } else if (fetchType === "POST") {
      // Default options are marked with *
      return fetch(`http://localhost:8088/${dataSet}`, {
        method: `${fetchType}`,
        // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json; charset=utf-8" // "Content-Type": "application/x-www-form-urlencoded",

        },
        // referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(dataBaseObject) // body data type must match "Content-Type" header

      });
    } else if (fetchType === "PUT") {
      return fetch(`http://localhost:8088/${dataSet}/${putId}`, {
        method: `${fetchType}`,
        // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json; charset=utf-8" // "Content-Type": "application/x-www-form-urlencoded",

        },
        // referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(dataBaseObject) // body data type must match "Content-Type" header

      });
    } else if (fetchType === "DELETE") {
      return fetch(`http://localhost:8088/${dataSet}/${deleteId}`, {
        method: `${fetchType}`,
        // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json; charset=utf-8" // "Content-Type": "application/x-www-form-urlencoded",

        } // referrer: "no-referrer", // no-referrer, *client

      });
    } else {
      console.log("YOU SCREWED IT UP");
    }
  }

};
var _default = nomadData;
exports.default = _default;

},{"./eventListeners":4}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nomadData = _interopRequireDefault(require("./nomadData"));

var _domComponents = _interopRequireDefault(require("./domComponents"));

var _tasksEventListeners = _interopRequireDefault(require("./tasksEventListeners"));

var _tasksPopup = _interopRequireDefault(require("./tasksPopup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import eventListeners from "./eventListeners"
const tasks = {
  createTaskTables() {
    $("#output").empty();
    let outputArticle = document.getElementById("output"); //create display container

    let tasksContainer = _domComponents.default.createDomElement({
      elementType: "section",
      cssClass: "tasksContainer",
      attributes: {
        id: "tasksContainer"
      }
    }); //create tasks tables


    let activeTasksTable = _domComponents.default.createDomElement({
      elementType: "table",
      cssClass: "activeTasksTable",
      attributes: {
        id: "activeTasksTable"
      }
    });

    let activeTasksTableTitle = _domComponents.default.createDomElement({
      elementType: "caption",
      cssClass: "activeTasksTableTitle",
      content: "ACTIVE TASKS"
    });

    let completedTasksTable = _domComponents.default.createDomElement({
      elementType: "table",
      cssClass: "completedTasksTable",
      attributes: {
        id: "completedTasksTable"
      }
    });

    let completedTasksTableTitle = _domComponents.default.createDomElement({
      elementType: "caption",
      cssClass: "completedTasksTableTitle",
      content: "COMPLETED TASKS"
    }); //create row with column headers


    let activeTasksHeaderRow = _domComponents.default.createDomElement({
      elementType: "tr",
      cssClass: "activeTasksHeaderRow",
      attributes: {
        id: "activeTasksHeaderRow"
      }
    });

    let completedTasksHeaderRow = _domComponents.default.createDomElement({
      elementType: "tr",
      cssClass: "completedTasksHeaderRow",
      attributes: {
        id: "completedTasksHeaderRow"
      }
    }); //create column headers


    let activeTasksHeader = _domComponents.default.createDomElement({
      elementType: "th",
      cssClass: "activeTasksHeader",
      content: "Task",
      attributes: {
        id: "activeTasksHeader"
      }
    });

    let activeTasksDueDateHeader = _domComponents.default.createDomElement({
      elementType: "th",
      cssClass: "activeTasksDueDateHeader",
      content: "Due Date",
      attributes: {
        id: "activeTasksDueDateHeader"
      }
    });

    let activeTasksEdit = _domComponents.default.createDomElement({
      elementType: "th",
      cssClass: "activeTasksEdit",
      content: "",
      attributes: {
        id: "activeTasksEdit"
      }
    });

    let completedTasksHeader = _domComponents.default.createDomElement({
      elementType: "th",
      cssClass: "completedTasksHeader",
      content: "Task",
      attributes: {
        id: "completedTasksHeader"
      }
    });

    let completedTasksDueDateHeader = _domComponents.default.createDomElement({
      elementType: "th",
      cssClass: "completedTasksDueDateHeader",
      content: "Due Date",
      attributes: {
        id: "completedTasksDueDateHeader"
      }
    }); //create button to make new tasks


    let createTaskButton = _domComponents.default.createDomElement({
      elementType: "button",
      cssClass: "createTaskButton",
      content: "Create New Task",
      attributes: {
        id: "createTaskButton",
        type: "button"
      }
    });

    let completedTasksEdit = _domComponents.default.createDomElement({
      elementType: "th",
      cssClass: "completedTasksEdit",
      content: "",
      attributes: {
        id: "completedTasksEdit"
      }
    }); //append header row to table and table to container


    activeTasksTable.appendChild(activeTasksTableTitle);
    completedTasksTable.appendChild(completedTasksTableTitle);
    activeTasksHeaderRow.appendChild(activeTasksHeader);
    activeTasksHeaderRow.appendChild(activeTasksDueDateHeader);
    activeTasksHeaderRow.appendChild(activeTasksEdit);
    activeTasksTable.appendChild(activeTasksHeaderRow);
    tasksContainer.appendChild(activeTasksTable);
    completedTasksHeaderRow.appendChild(completedTasksHeader);
    completedTasksHeaderRow.appendChild(completedTasksDueDateHeader);
    completedTasksHeaderRow.appendChild(completedTasksEdit);
    completedTasksTable.appendChild(completedTasksHeaderRow);
    tasksContainer.appendChild(completedTasksTable);
    createTaskButton.addEventListener("click", _tasksPopup.default.createNewTaskForm);
    tasksContainer.appendChild(createTaskButton);
    outputArticle.appendChild(tasksContainer);
    this.getTasks();
  },

  getTasks() {
    let currentUser = Number(sessionStorage.getItem("userId")); //populate tasks

    _nomadData.default.connectToData({
      dataSet: "tasks",
      fetchType: "GET",
      embedItem: "?_embed=users"
    }).then(tasks => {
      tasks.sort(function (a, b) {
        return new Date(a.expectedCompletionDate) - new Date(b.expectedCompletionDate);
      });
      tasks.forEach(task => {
        if (task.userId === currentUser) {
          let status = task.complete;
          let activeTasksTable = document.getElementById("activeTasksTable");
          let completedTasksTable = document.getElementById("completedTasksTable"); // create a new table row for each task

          let taskRow = _domComponents.default.createDomElement({
            elementType: "tr",
            cssClass: "taskTableRow",
            attributes: {
              id: `taskTableRow_${task.id}`
            }
          }); //create cells to hold task and due date


          let taskCell = _domComponents.default.createDomElement({
            elementType: "td",
            cssClass: "taskCell",
            attributes: {
              id: `taskCell_${task.id}`
            }
          });

          let dueDateCell = _domComponents.default.createDomElement({
            elementType: "td",
            cssClass: "dueDateCell",
            attributes: {
              id: `dueDateCell_${task.id}`
            }
          });

          let taskEditCell = _domComponents.default.createDomElement({
            elementType: "td",
            cssClass: "taskEditCell",
            attributes: {
              id: `taskEditCell_${task.id}`
            }
          });

          let taskEditButton = _domComponents.default.createDomElement({
            elementType: "button",
            cssClass: "taskEditButton",
            content: "Edit",
            attributes: {
              id: `taskEditButton_${task.id}`,
              type: "button"
            }
          }); //create task checkbox and title


          let taskLabel = _domComponents.default.createDomElement({
            elementType: "label",
            cssClass: "taskLabel",
            attributes: {
              id: `taskLabel_${task.id}`
            }
          }); //create task title


          let taskTitle = document.createTextNode(`${task.task}`); //create task checkbox

          let taskCheckbox = _domComponents.default.createDomElement({
            elementType: "input",
            cssClass: "taskCheckbox",
            attributes: {
              id: `taskCheckbox_${task.id}`,
              type: "checkbox",
              value: `${task.task}`
            }
          }); //create task dute date


          let dueDateArray = new Date(task.expectedCompletionDate).toDateString().split(" ");
          let dueDate = `${dueDateArray[1]} ${dueDateArray[2]} ${dueDateArray[3]}`;

          let taskDueDate = _domComponents.default.createDomElement({
            elementType: "p",
            cssClass: "taskDueDate",
            content: dueDate,
            attributes: {
              id: `taskDueDate_${task.id}`
            }
          }); //append -- order is important for checkbox and label to ensure box in on the left


          taskCheckbox.addEventListener("change", _tasksEventListeners.default.markTaskComplete);
          taskEditButton.addEventListener("click", _tasksEventListeners.default.taskEditButton);
          taskLabel.appendChild(taskCheckbox);
          taskLabel.appendChild(taskTitle);
          taskCell.appendChild(taskLabel);
          dueDateCell.appendChild(taskDueDate);
          taskEditCell.appendChild(taskEditButton);
          taskRow.appendChild(taskCell);
          taskRow.appendChild(dueDateCell);
          taskRow.appendChild(taskEditCell);

          if (status) {
            completedTasksTable.appendChild(taskRow);
            taskCheckbox.setAttribute("checked", "");
          } else {
            activeTasksTable.appendChild(taskRow);
          }
        }
      });
    });
  }

};
var _default = tasks;
exports.default = _default;

},{"./domComponents":2,"./nomadData":12,"./tasksEventListeners":14,"./tasksPopup":15}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nomadData = _interopRequireDefault(require("./nomadData"));

var _tasks = _interopRequireDefault(require("./tasks"));

var _domComponents = _interopRequireDefault(require("./domComponents"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const tasksEventListeners = {
  createNewTask() {
    let taskTitle = document.getElementById("taskTitleInput").value;
    let dueDateFieldValiue = document.getElementById("taskDateInput").value;
    let userId = Number(sessionStorage.getItem('userId'));
    let dueDateArray = dueDateFieldValiue.split("-");
    let dueDate = `${dueDateArray[1]} ${dueDateArray[2]} ${dueDateArray[0]}`;

    _nomadData.default.connectToData({
      dataSet: "tasks",
      fetchType: "POST",
      dataBaseObject: {
        userId: userId,
        task: taskTitle,
        expectedCompletionDate: dueDate,
        complete: false
      }
    }).then(response => response.json()).then(shit => {
      console.log(shit);
      $("#output").empty();

      _tasks.default.createTaskTables();
    });
  },

  markTaskComplete() {
    let taskToEditId = event.target.id.split("_")[1];

    _nomadData.default.connectToData({
      dataSet: "tasks",
      fetchType: "GET",
      embedItem: `?&id=${taskToEditId}`
    }).then(parsedTasks => {
      let taskId = parsedTasks[0].id;
      let userId = parsedTasks[0].userId;
      let task = parsedTasks[0].task;
      let expectedCompletionDate = parsedTasks[0].expectedCompletionDate;
      let complete = parsedTasks[0].complete;
      console.log(taskId, userId, task, expectedCompletionDate, complete);

      if (complete) {
        complete = false;
      } else {
        complete = true;
      }

      _nomadData.default.connectToData({
        putId: taskToEditId,
        dataSet: "tasks",
        fetchType: "PUT",
        dataBaseObject: {
          id: taskId,
          userId: userId,
          task: task,
          expectedCompletionDate: expectedCompletionDate,
          complete: complete
        }
      }).then(shit => {
        console.log(shit);
        $("#output").empty();

        _tasks.default.createTaskTables();
      });
    });
  },

  taskEditButton() {
    let number = event.currentTarget.id;
    let taskArray = number.split("_");
    let taskId = taskArray[1];
    let taskCellToEmpty = document.getElementById(`taskCell_${taskId}`);
    let taskLableToRemove = document.getElementById(`taskLabel_${taskId}`);
    let dueDateCellToEmpty = document.getElementById(`dueDateCell_${taskId}`);
    let dueDateToRemove = document.getElementById(`taskDueDate_${taskId}`);
    let taskEditCellToEmpty = document.getElementById(`taskEditCell_${taskId}`);
    let taskEditButtonToRemove = document.getElementById(`taskEditButton_${taskId}`);
    let taskToEditText = taskLableToRemove.innerText;
    console.log(taskToEditText);

    let taskToEditTitle = _domComponents.default.createDomElement({
      elementType: "input",
      cssClass: "taskToEditTitle",
      attributes: {
        id: `taskToEditTitle_${taskId}`,
        value: `${taskToEditText}`
      }
    });

    let taskDueDateToEdit = _domComponents.default.createDomElement({
      elementType: "input",
      cssClass: "taskDueDateToEdit",
      attributes: {
        id: `taskDueDateToEdit_${taskId}`,
        type: "date"
      }
    });

    let editedTaskSubmitButton = _domComponents.default.createDomElement({
      elementType: "button",
      cssClass: "editedTaskSubmitButton",
      content: "Sumbit",
      attributes: {
        id: `editedTaskSubmitButton_${number}`,
        type: "button"
      }
    });

    taskCellToEmpty.removeChild(taskLableToRemove);
    taskCellToEmpty.appendChild(taskToEditTitle);
    dueDateCellToEmpty.removeChild(dueDateToRemove);
    dueDateCellToEmpty.appendChild(taskDueDateToEdit);
    taskEditCellToEmpty.removeChild(taskEditButtonToRemove);
    taskEditCellToEmpty.appendChild(editedTaskSubmitButton);
    editedTaskSubmitButton.addEventListener("click", tasksEventListeners.saveTaskEdit);
  },

  saveTaskEdit() {
    let taskNumber = event.currentTarget.id;
    let taskArray = taskNumber.split("_");
    let taskId = taskArray[2];
    let taskEditInput = document.getElementById(`taskToEditTitle_${taskId}`).value;
    let taskEditDate = document.getElementById(`taskDueDateToEdit_${taskId}`).value;
    let dueDateArray = taskEditDate.split("-");
    let dueDate = `${dueDateArray[1]} ${dueDateArray[2]} ${dueDateArray[0]}`;

    _nomadData.default.connectToData({
      putId: taskId,
      dataSet: "tasks",
      fetchType: "PUT",
      dataBaseObject: {
        userId: Number(sessionStorage.getItem("userId")),
        task: taskEditInput,
        expectedCompletionDate: dueDate,
        complete: false
      }
    }).then(shit => {
      console.log(shit);
      $("#output").empty();

      _tasks.default.createTaskTables();
    });
  }

};
var _default = tasksEventListeners;
exports.default = _default;

},{"./domComponents":2,"./nomadData":12,"./tasks":13}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _domComponents = _interopRequireDefault(require("./domComponents"));

var _tasksEventListeners = _interopRequireDefault(require("./tasksEventListeners"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const tasksPopup = {
  createNewTaskForm() {
    let tasksContainer = document.getElementById("tasksContainer");

    let taskPopupDiv = _domComponents.default.createDomElement({
      elementType: "div",
      cssClass: "taskPopupDiv",
      attributes: {
        id: "taskPopupDiv"
      }
    });

    let newTaskForm = _domComponents.default.createDomElement({
      elementType: "div",
      cssClass: "newTaskForm",
      attributes: {
        id: "newTaskForm"
      }
    });

    let newTaskFormTitle = _domComponents.default.createDomElement({
      elementType: "h2",
      cssClass: "newTaskFormTitle",
      content: "Create A New Task",
      attributes: {
        id: "newTaskFormTitle"
      }
    });

    let horizontalLine = _domComponents.default.createDomElement({
      elementType: "hr"
    });

    let taskTitleInput = _domComponents.default.createDomElement({
      elementType: "input",
      cssClass: "taskTitleInput",
      attributes: {
        id: "taskTitleInput",
        placeholder: "Enter new task title",
        type: "text"
      }
    });

    let taskDateInput = _domComponents.default.createDomElement({
      elementType: "input",
      cssClass: "taskDateInput",
      attributes: {
        id: "taskDateInput",
        type: "date"
      }
    });

    let submitNewTaskButton = _domComponents.default.createDomElement({
      elementType: "button",
      cssClass: "submitNewTaskButton",
      content: "Submit",
      attributes: {
        id: "submitNewTaskButton",
        type: "button"
      }
    });

    submitNewTaskButton.addEventListener("click", _tasksEventListeners.default.createNewTask);
    newTaskForm.appendChild(newTaskFormTitle);
    newTaskForm.appendChild(horizontalLine);
    newTaskForm.appendChild(taskTitleInput);
    newTaskForm.appendChild(taskDateInput);
    newTaskForm.appendChild(submitNewTaskButton);
    taskPopupDiv.appendChild(newTaskForm);
    tasksContainer.appendChild(taskPopupDiv);
  }

};
var _default = tasksPopup;
exports.default = _default;

},{"./domComponents":2,"./tasksEventListeners":14}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2Rhc2hib2FyZC5qcyIsIi4uL3NjcmlwdHMvZG9tQ29tcG9uZW50cy5qcyIsIi4uL3NjcmlwdHMvZG9tUmVuZGVyZXIuanMiLCIuLi9zY3JpcHRzL2V2ZW50TGlzdGVuZXJzLmpzIiwiLi4vc2NyaXB0cy9ldmVudFBhZ2VMaXN0ZW5lcnMuanMiLCIuLi9zY3JpcHRzL2V2ZW50cy5qcyIsIi4uL3NjcmlwdHMvZnJpZW5kcy5qcyIsIi4uL3NjcmlwdHMvZnJpZW5kc0V2ZW50c0xpc3RlbmVyLmpzIiwiLi4vc2NyaXB0cy9tZXNzYWdlcy5qcyIsIi4uL3NjcmlwdHMvbWVzc2FnZXNFdmVudExpc3RlbmVycy5qcyIsIi4uL3NjcmlwdHMvbmV3cy5qcyIsIi4uL3NjcmlwdHMvbm9tYWREYXRhLmpzIiwiLi4vc2NyaXB0cy90YXNrcy5qcyIsIi4uL3NjcmlwdHMvdGFza3NFdmVudExpc3RlbmVycy5qcyIsIi4uL3NjcmlwdHMvdGFza3NQb3B1cC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUNBQTs7OztBQUNBLE1BQU0sU0FBUyxHQUFHO0FBQ2hCLEVBQUEsY0FBYyxHQUFFO0FBQ2Q7QUFDQSxRQUFJLFFBQVEsR0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BQWhCO0FBcUNFLElBQUEsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhLElBQWIsQ0FBa0IsUUFBbEI7O0FBQ0EsNEJBQWUscUJBQWY7O0FBQ0EsSUFBQSxDQUFDLENBQUMsUUFBRCxDQUFELENBQVksS0FBWixDQUFrQix3QkFBZSxTQUFqQztBQUNBLElBQUEsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUIsS0FBckIsQ0FBMkIsd0JBQWUsZ0JBQTFDO0FBQ0EsSUFBQSxDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQixLQUFyQixDQUEyQixLQUFLLGNBQWhDLEVB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RUFBRyxxQkFESTtBQUVULFFBQUEsSUFBSSxFQUFHO0FBRkU7QUFKeUMsS0FBaEMsQ0FBMUI7O0FBVUEsSUFBQSxtQkFBbUIsQ0FBQyxnQkFBcEIsQ0FBcUMsT0FBckMsRUFBOEMsNkJBQW9CLGFBQWxFO0FBQ0EsSUFBQSxXQUFXLENBQUMsV0FBWixDQUF3QixnQkFBeEI7QUFDQSxJQUFBLFdBQVcsQ0FBQyxXQUFaLENBQXdCLGNBQXhCO0FBQ0EsSUFBQSxXQUFXLENBQUMsV0FBWixDQUF3QixjQUF4QjtBQUNBLElBQUEsV0FBVyxDQUFDLFdBQVosQ0FBd0IsYUFBeEI7QUFDQSxJQUFBLFdBQVcsQ0FBQyxXQUFaLENBQXdCLG1CQUF4QjtBQUNBLElBQUEsWUFBWSxDQUFDLFdBQWIsQ0FBeUIsV0FBekI7QUFDQSxJQUFBLGNBQWMsQ0FBQyxXQUFmLENBQTJCLFlBQTNCO0FBQ0g7O0FBdEVjLENBQW5CO2VBeUVlLFUiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgZXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vZXZlbnRMaXN0ZW5lcnNcIlxyXG5jb25zdCBkYXNoYm9hcmQgPSB7XHJcbiAgYnVpbGRMb2dpbkZvcm0oKXtcclxuICAgIC8vdXNpbmcgc3RyaW5nIGludGVycG9sYXRpb24gdG8gY3JlYXRlIHRoZSBmb3JtXHJcbiAgICBsZXQgZm9ybUhUTUwgPSBgXHJcbiAgICA8aDEgY2xhc3MgPSBcInQtYm9yZGVyXCI+Tm9tYWRzPC9oMT5cclxuICAgICAgPHNlY3Rpb24gY2xhc3MgPSBcImZvcm1cIj5cclxuICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIiBjbGFzcyA9IHJlZ2lzdGVyRm9ybT5cclxuICAgICAgICAgIDxpbnB1dCBpZCA9IFwicmVnVXNlck5hbWVcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyID0gXCJVc2VybmFtZVwiIHJlcXVpcmVkPlxyXG4gICAgICAgICAgPGlucHV0IGlkID0gXCJyZWdFbWFpbFwiIHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyID0gXCJFbWFpbFwiIHJlcXVpcmVkPlxyXG4gICAgICAgICAgPGlucHV0IGlkID0gXCJyZWdQYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyID0gXCJQYXNzd29yZFwiIHJlcXVpcmVkPlxyXG4gICAgICAgICAgPGlucHV0IGlkID0gXCJyZWdDb25maXJtUGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlciA9IFwiQ29uZmlybSBQYXNzd29yZFwiIHJlcXVpcmVkPlxyXG4gICAgICAgICAgPGJ1dHRvbiBpZCA9IFwicmVnaXN0ZXJCdXR0b25cIj5DcmVhdGUgQWNjb3VudDwvYnV0dG9uPlxyXG4gICAgICAgICAgPHAgY2xhc3MgPSBcIm1lc3NhZ2VcIj5BbHJlYWR5IGEgUmVnaXN0ZXJlZCBNZW1iZXI/IDxhIGhyZWYgPSBcIiNcIj5Mb2dJbiA8L2E+PC9wPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8Zm9ybSBjbGFzcyA9IFwibG9naW4tZm9ybVwiPlxyXG4gICAgICAgICAgPGlucHV0IGlkID0gXCJ1c2VyTmFtZVZhbFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXIgPSBcIlVzZXJuYW1lXCI+XHJcbiAgICAgICAgICA8aW5wdXQgaWQgPSBcInBhc3N3b3JkVmFsXCIgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXIgPSBcIlBhc3N3b3JkXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGUgPSBcImJ1dHRvblwiIGlkID0gXCJsb2dJblwiPkxvZ2luPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIGlkID0gXCJtb2RhbEJ1dHRvblwiPk5vbWFkcyBNaXNzaW9uPC9idXR0b24+XHJcbiAgICAgICAgICA8cCBjbGFzcyA9IFwibWVzc2FnZVwiPkRvbid0IGhhdmUgYW4gYWNjb3VudD8gPGEgaHJlZiA9IFwiI1wiPlJlZ2lzdGVyPC9hPjwvcD5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPHNlY3Rpb24gaWQ9XCJub21hZE1vZGFsXCIgY2xhc3M9XCJtb2RhbFwiPlxyXG4gICAgICA8IS0tIE1vZGFsIGNvbnRlbnQgLS0+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNsb3NlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgPGgyPlRoZSBQdXJwb3NlIEJlaGluZCBOb21hZHM8L2gyPlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgIDxoMz5UaGUgbWluZHMgYmVoaW5nIE5vbWFkczwvaDM+XHJcbiAgICAgICAgICAgIDxpbWcgaWQgPSBcImNyZWF0b3JzSW1hZ2VcIiBzcmMgPSBcImltYWdlcy9ub21hZENyZWF0b3JzLmpwZ1wiIGFsdCA9IFwiYXBwbGljYXRpb24gY3JlYXRvcnNcIj5cclxuICAgICAgICAgICAgPHA+QXMgb3V0ZG9vcnNtYW4sIGVudmlyb25tZW50YWxpc3QsIGFuZCBmaWxtbWFrZXJzIGNvbnRpbnVlIHRvIGdyb3cuIFNvIGRvIHRoZSBhZHZlbnR1cm91cyBzcGlyaXRzIG9mIHRob3NlIHdobyBlbWJyYWNlIGNvbnNjaW91cyBjb25zdW1lcmlzbSBhbmQgc3VzdGFpbmFibGUgbGl2aW5nLiBUaGUgcHVycG9zZSBpcyB0byBtYWtlIGEgcG9pbnQgb2YgcGx1Z2dpbmcgaW50byBtb2Rlcm4gbGlmZSBhbmQgY29ubmVjdGluZyB3aXRoIHlvdXIgZmVsbG93IG5vbWFkcyBmcm9tIGFueXdoZXJlIHlvdSBtYXkgYmUuIFNoYXJlIHlvdXIgbG9jYXRpb24sIE1lZXQgdXAsIEV4Y2hhbmdlIHN0b3JpZXMsIENyZWF0ZSByZWxhdGlvbnNoaXBzIHdpdGggcGVvcGxlIHdobyBoYXZlIHNpbWlsYXIgaW50ZXJlc3QgYW5kIGVuaGFuY2UgeW91ciB0cmF2ZWxpbmcgZXhwZXJpZW5jZSB3aXRoIG5vbWFkcy48L3A+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICA8aDM+Q3JlYXRlZCBCeTogRGl2aW5lIE1hZG5lc3MmY29weTwvaDM+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIGBcclxuICAgICAgJChcIiNvdXRwdXRcIikuaHRtbChmb3JtSFRNTClcclxuICAgICAgZXZlbnRMaXN0ZW5lcnMubW9kYWxEaXNwbGF5QW5pbWF0aW9uKClcclxuICAgICAgJChcIiNsb2dJblwiKS5jbGljayhldmVudExpc3RlbmVycy51c2VyTG9naW4pXHJcbiAgICAgICQoXCIjcmVnaXN0ZXJCdXR0b25cIikuY2xpY2soZXZlbnRMaXN0ZW5lcnMudXNlclJlZ2lzdHJhdGlvbilcclxuICAgICAgJChcIiNyZWdpc3RlckJ1dHRvblwiKS5jbGljayh0aGlzLmJ1aWxkTG9naW5Gb3JtKVxyXG4gICAgICAvLyAkKFwiI3JlZ2lzdGVyQnV0dG9uXCIpLmNsaWNrKGV2ZW50TGlzdGVuZXJzLnVzZXJMb2dpbilcclxuXHJcbiAgICB9LFxyXG4gIGNyZWF0ZU5hdkJhcigpe1xyXG4gICAgbGV0IG5hdkhUTUwgPSBgXHJcbiAgICAgIDxuYXY+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgPGxpIGlkID0gXCJuZXdzTGlua1wiPjxhIGNsYXNzID0gXCJhY3RpdmVcIiBocmVmID0gXCIjXCI+QXJ0aWNsZXM8L2E+PC9saT5cclxuICAgICAgICAgIDxsaSBpZCA9IFwiZXZlbnRMaW5rXCI+PGEgaHJlZiA9IFwiI1wiPkV2ZW50czwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpIGlkID0gXCJ0YXNrc0xpbmtcIj48YSBocmVmID0gXCIjXCI+VGFza3M8L2E+PC9saT5cclxuICAgICAgICAgIDxsaSBpZCA9IFwiZnJpZW5kc0xpbmtcIj48YSBocmVmID0gXCIjXCI+RnJpZW5kczwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpIGlkID0gXCJtZXNzYWdlc0xpbmtcIj48YSBocmVmID0gXCIjXCI+TWVzc2FnZXM8L2E+PC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzcyA9IFwic2lnbk91dFwiIGlkID0gXCJsb2dvXCIgPjxhIGhyZWY9XCIjXCI+U2lnbiBPdXQ8L2E+PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L25hdj5cclxuICAgIGBcclxuICAgIGxldCBuYXZCYXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4tbmF2XCIpXHJcbiAgICBuYXZCYXJDb250YWluZXIuaW5uZXJIVE1MID0gbmF2SFRNTFxyXG5cclxuICAgIC8qTmF2aWdhdGlvbiBsaW5rIGV2ZW50IGxpc3RlbmVycyovXHJcbiAgICAkKFwiI21lc3NhZ2VzTGlua1wiKS5jbGljayhldmVudExpc3RlbmVycy5tZXNzYWdlc05hdkxpbmspXHJcbiAgICAkKFwiI2V2ZW50TGlua1wiKS5jbGljayhldmVudExpc3RlbmVycy5ldmVudHNOYXZMaW5rKVxyXG4gICAgJChcIiNmcmllbmRzTGlua1wiKS5jbGljayhldmVudExpc3RlbmVycy5mcmllbmRzTmF2TGluaylcclxuICAgICQoXCIjdGFza3NMaW5rXCIpLmNsaWNrKGV2ZW50TGlzdGVuZXJzLnRhc2tzTmF2TGluaylcclxuICAgICQoXCIjbmV3c0xpbmtcIikuY2xpY2soZXZlbnRMaXN0ZW5lcnMubmV3c05hdkxpbmspXHJcblxyXG4gICAgLyphZnRlciBzaWdub3V0IGlzIGNsaWNrZWQgc2Vzc2lvbiBzdG9yYWdlIGlzIGNsZWFyZWQgYW5kIHRoZSBsb2dJbi9yZWdpc3RlciBmb3JtIGlzIHByZXNlbnRlZCBmcm9tIGhlcmVcclxuICAgIGFub3RoZXIgdXNlciBjYW4gbG9nIGluIGFuZCBzZXNzaW9uIHN0b3JhZ2Ugd2lsbCBraWNrIG9mZiBmb3IgdGhlIG5ldyBsb2dnZWQgaW4gdXNlciovXHJcbiAgICAkKFwiLnNpZ25PdXRcIikuY2xpY2soZXZlbnRMaXN0ZW5lcnMubm9tYWROYXZMaW5rKVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGRhc2hib2FyZCIsImNvbnN0IGRvbUNvbXBvbmVudHMgPSB7XHJcbiAgY3JlYXRlRG9tRWxlbWVudCh7IGVsZW1lbnRUeXBlLCBjb250ZW50ID0gbnVsbCwgY3NzQ2xhc3MsIGF0dHJpYnV0ZXMgPSB7fSB9KSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50VHlwZSk7XHJcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudDtcclxuICAgIGlmIChjc3NDbGFzcykge1xyXG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3MpO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQga2V5IGluIGF0dHJpYnV0ZXMpIHtcclxuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZG9tQ29tcG9uZW50cyIsImltcG9ydCBldmVudHMgZnJvbSBcIi4vZXZlbnRzXCI7XHJcblxyXG5pbXBvcnQgbm9tYWREYXRhIGZyb20gXCIuL25vbWFkRGF0YVwiO1xyXG5pbXBvcnQgZnJpZW5kcyBmcm9tIFwiLi9mcmllbmRzXCI7XHJcbmltcG9ydCBuZXdzIGZyb20gXCIuL25ld3NcIlxyXG5pbXBvcnQgbWVzc2FnZXMgZnJvbSBcIi4vbWVzc2FnZXNcIjtcclxuaW1wb3J0IGRhc2hCb2FyZCBmcm9tIFwiLi9kYXNoYm9hcmRcIlxyXG4vLyBpbXBvcnQgZG9tQ29tcG9uZW50cyBmcm9tIFwiLi9kb21Db21wb25lbnRzXCI7XHJcbmltcG9ydCBldmVudExpc3RlbmVycyBmcm9tIFwiLi9ldmVudExpc3RlbmVyc1wiO1xyXG5cclxuLy9CVUlMRFMgTkFJR0FUSU9OQkFSLy9cclxuLy8gZG9tQ29tcG9uZW50cy5jcmVhdGVOYXZCYXIoKVxyXG5kYXNoQm9hcmQuYnVpbGRMb2dpbkZvcm0oKVxyXG4kKFwibW9kYWxCdXR0b25cIikuY2xpY2soZXZlbnRMaXN0ZW5lcnMubW9kYWxEaXNwbGF5QW5pbWF0aW9uKVxyXG5cclxuLy9ORVdTIFNFQ1RJT05cclxuLy8gbmV3cy5zYXZlKCk7XHJcbi8vIG5ld3MuYWxsU2F2ZWQoKTtcclxuLy8gbmV3cy5nZXROZXdzKCk7XHJcblxyXG4vLyBuZXdzLm5ld3NFbGVtZW50Q3JlYXRvcigpO1xyXG4vLyBuZXdzLm5ld3NFbGVtZW50Q3JlYXRvcigpO1xyXG5cclxuIiwiaW1wb3J0IGRhc2hib2FyZCBmcm9tIFwiLi9kYXNoYm9hcmRcIlxyXG5pbXBvcnQgZG9tQ29tcG9uZW50cyBmcm9tIFwiLi9kb21Db21wb25lbnRzXCI7XHJcbmltcG9ydCBub21hZERhdGEgZnJvbSBcIi4vbm9tYWREYXRhXCI7XHJcbmltcG9ydCBldmVudHMgZnJvbSBcIi4vZXZlbnRzXCI7XHJcbmltcG9ydCBtZXNzYWdlcyBmcm9tIFwiLi9tZXNzYWdlc1wiO1xyXG5pbXBvcnQgZnJpZW5kcyBmcm9tIFwiLi9mcmllbmRzXCI7XHJcbmltcG9ydCBuZXdzIGZyb20gXCIuL25ld3NcIjtcclxuaW1wb3J0IHRhc2tzIGZyb20gXCIuL3Rhc2tzXCI7XHJcblxyXG5jb25zdCBldmVudExpc3RlbmVycyA9IHtcclxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBMT0dJTiBGT1JNOiB1c2VyIGVudGVycyBVc2VybmFtZSBhbmQgUGFzc3dvcmQuIHdoZW4gVXNlciBjbGlja3MgbG9naW4sIHRoZSBpbnB1dCBmaWVsZCBhbmQgTk9NQURTIGhlYWRlciBkaXNhcHBlYXJcclxuICAgIGFuZCB0aGUgdXNlciB3aWxsIGJlIGRpc3BsYXllZCB0aGUgXCJEYXNoYm9hcmRcIiBhbmQgdGhlIG5hdmlnYXRpb24gYmFyLiBVcG9uIGxvZ2luLCBzZXNzaW9uU3RvcmFnZSBpcyBzdGFydGVkLiBJbiB0aGUgQ29uc29sZVxyXG4gICAgeW91IHdpbGwgYmUgYWJsZSB0byBzZWUgV2hvIGlzIGxvZ2dlZCBpbiBhbmQgd2hhdCB0aGVpciB1c2VySWQgaXMuIGllLiAxLDIsMyw0IGV0Yy5cclxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICAgIHVzZXJMb2dpbigpe1xyXG4gICAgICAgIGxldCBsb2dJblZhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdXNlck5hbWVWYWxcIikudmFsdWVcclxuICAgICAgICBsZXQgcGFzc3dvcmRWYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bhc3N3b3JkVmFsXCIpLnZhbHVlXHJcbiAgICAgICAgLy9nZXQgdG8gY29tcGFyZVxyXG4gICAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcclxuXHJcbiAgICAgICAgXCJkYXRhU2V0XCIgOiBcInVzZXJzXCIsXHJcbiAgICAgICAgXCJmZXRjaFR5cGVcIiA6IFwiR0VUXCIsXHJcbiAgICAgICAgXCJlbWJlZEl0ZW1cIiA6IFwiP19lbWJlZD11c2Vyc1wiXHJcblxyXG4gICAgfSkudGhlbihwYXJzZWRVc2VycyA9PiB7XHJcblxyXG4gICAgICAgIHBhcnNlZFVzZXJzLmZvckVhY2godXNlciA9PiB7XHJcbiAgICAgICAgICAgICAgLypJZiBsb2dpbiBjcmVkZW50aWFscyBtYXRjaCB0aG9zZSBpbiBkYXRhYmFzZS5qc29uLiBXZSB3YW50IHRoZSB1c2VyIHRvIGJlIGRpc3BsYXllZCB0aGVpciBcImRhc2hib2FkXCJcclxuICAgICAgICAgICAgICBhbmQgbmF2aWdhdGlvbiBiYXIuIFNvIHdlIG5lZWQgdG8gc2V0IGRpc3BsYXkgdG8gbm9uZSBhbmQgaW52b2tlIHRoZSBmdW5jdGlvbiAtIGNyZWF0ZU5hdkJhcigpKi9cclxuICAgICAgICAgICAgaWYobG9nSW5WYWwgPT09IHVzZXIudXNlck5hbWUgJiYgcGFzc3dvcmRWYWwgPT09IHVzZXIucGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL2hpZGVzIE5PTUFEIGhlYWRpbmdcclxuICAgICAgICAgICAgICAgICAgICAkKFwiLnQtYm9yZGVyXCIpLmhpZGUoKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vaGlkZXMgdGhlIGZvcm1cclxuICAgICAgICAgICAgICAgICAgICAkKFwiLmZvcm1cIikuaGlkZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgLy9kaXNwbGF5cyBuYXZpZ2F0aW4gYmFyXHJcbiAgICAgICAgICAgICAgICAgICAgZGFzaGJvYXJkLmNyZWF0ZU5hdkJhcigpXHJcbiAgICAgICAgICAgICAgICAgICAgLy9zZXNzaW9uIHN0b3JhZ2VcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInVzZXJJZFwiLCB1c2VyLmlkKVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB1c2VySWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyB2ZXJpZnlpbmcgdGhhdCBjcmVkZW50aWFscyBtYXRjaCBhbmQgdXNlciBpcyBsb2dnZWQgaW5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvZ2dlZCBpbiBhc1wiICsgXCIgXCIgKyB1c2VyLnVzZXJOYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwieW91ciB1c2VyIElEIGlzOiBcIiArIHVzZXJJZClcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgUkVHSVNUUkFUSU9OIEZPUk06IFdoZW4gcmVnaXN0ZXJpbmcgZm9yIGFuIGFjY291bnQgdGhlIHVzZXIgd2lsbCBlbnRlciBkZXNpcmVkIHVzZXJuYW1lLCBlbWFpbCwgYW5kIHBhc3N3b3JkXHJcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgICB1c2VyUmVnaXN0cmF0aW9uKCl7XHJcbiAgICAgICAgbGV0IHJlZ1VzZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZWdVc2VyTmFtZVwiKS52YWx1ZVxyXG4gICAgICAgIGxldCByZWdFbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVnRW1haWxcIikudmFsdWVcclxuICAgICAgICBsZXQgcmVnUGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JlZ1Bhc3N3b3JkXCIpLnZhbHVlXHJcbiAgICAgICAgLy8gbGV0IHJlZ0NvbmZpcm1QYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVnVXNlck5hbWVcIikudmFsdWVcclxuXHJcbiAgICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xyXG5cclxuICAgICAgICAgICAgICAgIFwiZGF0YVNldFwiIDogXCJ1c2Vyc1wiLFxyXG4gICAgICAgICAgICAgICAgXCJmZXRjaFR5cGVcIiA6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgXCJkYXRhQmFzZU9iamVjdFwiIDoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwidXNlck5hbWVcIjogcmVnVXNlck5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJlbWFpbFwiOiByZWdFbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICBcInBhc3N3b3JkXCI6IHJlZ1Bhc3N3b3JkXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLnRoZW4oXHJcbiAgICAgICAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcclxuICAgICAgICAgICAgICAgIFwiZGF0YVNldFwiIDogXCJ1c2Vyc1wiLFxyXG4gICAgICAgICAgICAgICAgXCJmZXRjaFR5cGVcIiA6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgICAgICBcImVtYmVkSXRlbVwiIDogYD91c2VyTmFtZT0ke3JlZ1VzZXJOYW1lfWBcclxuICAgICAgICAgICAgfSkudGhlbih1c2VyID0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codXNlcilcclxuICAgICAgICAgICAgICAgIHVzZXIuZm9yRWFjaCggeCA9PntcclxuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwidXNlcklkXCIsIHguaWQpXHJcblxyXG4gICAgICAgICAgICAgICAgLy9oaWRlcyBOT01BRCBoZWFkaW5nXHJcbiAgICAgICAgICAgICAgICAkKFwiLnQtYm9yZGVyXCIpLmhpZGUoKVxyXG4gICAgICAgICAgICAgICAgLy9oaWRlcyB0aGUgZm9ybVxyXG4gICAgICAgICAgICAgICAgJChcIi5mb3JtXCIpLmhpZGUoKVxyXG4gICAgICAgICAgICAgICAgLy9kaXNwbGF5cyBuYXZpZ2F0aW4gYmFyXHJcbiAgICAgICAgICAgICAgICBkYXNoYm9hcmQuY3JlYXRlTmF2QmFyKClcclxuICAgICAgICAgICAgICAgIGxldCB1c2VySWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpXHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nIHZlcmlmeWluZyB0aGF0IGNyZWRlbnRpYWxzIG1hdGNoIGFuZCB1c2VyIGlzIGxvZ2dlZCBpblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb2dnZWQgaW4gYXNcIiArIFwiIFwiICsgeC51c2VyTmFtZSlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwieW91ciB1c2VyIElEIGlzOiBcIiArIHVzZXJJZClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgIH0sXHJcbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgTU9EQUw6IHVzZXIgd2lsbCBjbGljayB0aGUgTk9NQUQgTUlTU0lPTiBidXR0b24gYW5kIGEgbW9kYWwgd2lsbCBwb3AgdXAgZGVzY3JpYmluZyB3aGF0IHRoZSBhcHBsaWNhdGlvbiBpcyBhYm91dFxyXG4gICAgYW5kIHdobyBpdCBpcyB0YWlsb3JlZCB0b3dhcmRzXHJcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgICBtb2RhbERpc3BsYXlBbmltYXRpb24oKXtcclxuICAgICAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vbWFkTW9kYWxcIik7XHJcblxyXG4gICAgICAgIC8vIHRhcmdldCBtb2RhbCB0byBvcGVuIGl0XHJcbiAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxCdXR0b25cIik7XHJcblxyXG4gICAgICAgIC8vIEdldCB0aGUgPHNwYW4+IGVsZW1lbnQgdGhhdCBjbG9zZXMgdGhlIG1vZGFsXHJcbiAgICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2VcIilbMF07XHJcbiAgICAgICAgLy8gV2hlbiB0aGUgdXNlciBjbGlja3MgdGhlIGJ1dHRvbiwgb3BlbiB0aGUgbW9kYWxcclxuICAgICAgICBidG4ub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIDxzcGFuPiAoeCksIGNsb3NlIHRoZSBtb2RhbFxyXG4gICAgICAgIHNwYW4ub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gV2hlbiB0aGUgdXNlciBjbGlja3MgYW55d2hlcmUgb3V0c2lkZSBvZiB0aGUgbW9kYWwsIGNsb3NlIGl0XHJcbiAgICAgICAgd2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09IG1vZGFsKSB7XHJcbiAgICAgICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJChcIi5tZXNzYWdlIGFcIikuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAkKFwiZm9ybVwiKS5hbmltYXRlKHtoZWlnaHQ6IFwidG9nZ2xlXCIsIG9wYWNpdHk6IFwidG9nZ2xlXCJ9LCBcInNsb3dcIilcclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBOQVZCQVIgTEkgRUxJU1RFTkVSUzogV2hlbiB1c2VyIGNsaWNrcyBhbiBpdGVtIGluIHRoZSBOQVZCQVIgdGhlIGNvbnRlbnQgYXNzb2NpYXRlZCB3aXRoIHRoYXQgdGFiIHdpbGwgcG9wdWxhdGUgdGhlIERPTVxyXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gICAgbWVzc2FnZXNOYXZMaW5rKCl7XHJcbiAgICAgICAgbWVzc2FnZXMuY3JlYXRlTWVzc2FnZUJvYXJkKClcclxuICAgICAgICBjb25zb2xlLmxvZyhcIndvcmtpbmdcIilcclxuICAgICAgICBmcmllbmRzLmJ1aWxkRnJpZW5kU2VhcmNoQmFyKClcclxuXHJcbiAgICB9LFxyXG4gICAgZXZlbnRzTmF2TGluaygpe1xyXG4gICAgICAgICAgICBldmVudHMuc2hvd0V2ZW50Rm9ybSgpXHJcbiAgICAgICAgICAgIGV2ZW50cy5hcHBlbmRVc2VyQW5kRnJpZW5kRXZlbnRzKCk7XHJcbiAgICAgICAgICAgIC8vYXBwZW5kVXNlckV2ZW50XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXZlbnRzIGNsaWNrZWRcIilcclxuICAgIH0sXHJcbiAgICBmcmllbmRzTmF2TGluaygpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZnJpZW5kcyBuYXYgbGluayBjbGlja2VkXCIpXHJcbiAgICAgICAgZnJpZW5kcy5kZWZpbmVDdXJyZW50VXNlcnNGcmllbmRzKCk7XHJcbiAgICAgICAgZnJpZW5kcy5pbml0aWFsaXplUG90ZW50aWFsRnJpZW5kcygpO1xyXG5cclxuICAgIH0sXHJcbiAgICBuZXdzTmF2TGluaygpe1xyXG4gICAgICAgIC8vTkVXUyBTRUNUSU9OXHJcbiAgICAgICAgbmV3cy5zYXZlKCk7XHJcbiAgICAgICAgbmV3cy5hbGxTYXZlZCgpO1xyXG4gICAgICAgIG5ld3MuZ2V0TmV3cygpO1xyXG4gICAgICAgIG5ld3MubmV3c0VsZW1lbnRDcmVhdG9yKCk7XHJcbiAgICAgICAgZnJpZW5kcy5idWlsZEZyaWVuZFNlYXJjaEJhcigpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJuZXdzIGxpbmsgY2xpY2tlZFwiKVxyXG4gICAgfSxcclxuICAgIHRhc2tzTmF2TGluaygpe1xyXG4gICAgICAgIHRhc2tzLmNyZWF0ZVRhc2tUYWJsZXMoKVxyXG4gICAgICAgIGZyaWVuZHMuYnVpbGRGcmllbmRTZWFyY2hCYXIoKVxyXG4gICAgfSxcclxuICAgIG5vbWFkTmF2TGluaygpe1xyXG4gICAgICAgIGRhc2hib2FyZC5idWlsZExvZ2luRm9ybSgpXHJcbiAgICAgICAgJChcIm5hdlwiKS5oaWRlKClcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5jbGVhcigpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzaWduZWQgb3V0XCIpXHJcbiAgICB9LFxyXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgRU5EIE9GIE5BVklHQVRJT04gRVZFTlRMSVNURU5FUlNcclxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG4gICAgZnJpZW5kc0RlbGV0ZUZyaWVuZCAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0KTtcclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBldmVudExpc3RlbmVycztcclxuIiwiaW1wb3J0IG5vbWFkRGF0YSBmcm9tIFwiLi9ub21hZERhdGFcIjtcclxuaW1wb3J0IGV2ZW50cyBmcm9tIFwiLi9ldmVudHNcIjtcclxuLy8gaW1wb3J0IGRvbUNvbXBvbmVudHMgZnJvbSBcIi4vZG9tQ29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgZXZlbnRQYWdlTGlzdGVuZXJzID0ge1xyXG4gICAgaGFuZGxlU2hvd0J1dHRvbigpIHtcclxuICAgICAgICBjb25zdCBvdXRwdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2V2ZW50c0NvbnRhaW5lclwiKTtcclxuICAgICAgICBjb25zdCBzaG93QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaG93Rm9ybVwiKTtcclxuICAgICAgICBldmVudHNDb250YWluZXIucmVtb3ZlQ2hpbGQoc2hvd0J1dHRvbik7XHJcbiAgICAgICAgY29uc3QgZXZlbnRGb3JtID0gZXZlbnRzLmNyZWF0ZUV2ZW50SW5wdXQoKTtcclxuICAgICAgICBldmVudHNDb250YWluZXIuaW5zZXJ0QmVmb3JlKGV2ZW50Rm9ybSwgZXZlbnRzQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xyXG4gICAgfSxcclxuICAgIGhhbmRsZVNhdmVCdXR0b24oKSB7XHJcbiAgICAgICAgY29uc3QgbmFtZUlucHV0dGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNldmVudE5hbWVcIikudmFsdWU7XHJcbiAgICAgICAgY29uc3QgZGF0ZUlucHV0dGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNldmVudERhdGVcIikudmFsdWU7XHJcbiAgICAgICAgY29uc3QgdGltZUlucHV0dGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNldmVudFRpbWVcIikudmFsdWU7XHJcbiAgICAgICAgY29uc3QgbG9jYXRpb25JbnB1dHRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXZlbnRMb2NhdGlvblwiKS52YWx1ZTtcclxuXHJcbiAgICAgICAgaWYgKG5hbWVJbnB1dHRlZCA9PT0gXCJcIiB8fCBkYXRlSW5wdXR0ZWQgPT09IFwiXCIgfHwgdGltZUlucHV0dGVkID09PSBcIlwiIHx8IGxvY2F0aW9uSW5wdXR0ZWQgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJQbGVhc2UgaW5wdXQgaW5mb3JtYXRpb24gaW4gYWxsIGZpZWxkc1wiKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcclxuICAgICAgICAgICAgICAgIGRhdGFTZXQ6IFwiZXZlbnRzXCIsXHJcbiAgICAgICAgICAgICAgICBmZXRjaFR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YUJhc2VPYmplY3Q6IHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpKSxcclxuICAgICAgICAgICAgICAgICAgICBldmVudE5hbWU6IG5hbWVJbnB1dHRlZCxcclxuICAgICAgICAgICAgICAgICAgICBldmVudERhdGU6IGRhdGVJbnB1dHRlZCxcclxuICAgICAgICAgICAgICAgICAgICBldmVudFRpbWU6IHRpbWVJbnB1dHRlZCxcclxuICAgICAgICAgICAgICAgICAgICBldmVudExvY2F0aW9uOiBsb2NhdGlvbklucHV0dGVkXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBldmVudHMuYXBwZW5kVXNlckFuZEZyaWVuZEV2ZW50cygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIGhhbmRsZUhpZGVCdXR0b24oKSB7XHJcbiAgICAgICAgY29uc3QgZXZlbnRzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNldmVudHNDb250YWluZXJcIik7XHJcbiAgICAgICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXZlbnRJbnB1dFwiKTtcclxuICAgICAgICBldmVudHNDb250YWluZXIucmVtb3ZlQ2hpbGQoZm9ybUNvbnRhaW5lcik7XHJcbiAgICAgICAgZXZlbnRzLmFkZFNob3dCdXR0b24oKTtcclxuICAgIH0sXHJcbiAgICBoYW5kbGVEZWxldGVCdXR0b24oKSB7XHJcbiAgICAgICAgY29uc3QgaWRUb0RlbGV0ZSA9IGV2ZW50LnRhcmdldC5pZC5zcGxpdChcIi0tXCIpWzFdO1xyXG4gICAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcclxuICAgICAgICAgICAgZGVsZXRlSWQ6IGlkVG9EZWxldGUsXHJcbiAgICAgICAgICAgIGRhdGFTZXQ6IFwiZXZlbnRzXCIsXHJcbiAgICAgICAgICAgIGZldGNoVHlwZTogXCJERUxFVEVcIixcclxuICAgICAgICAgICAgZGF0YUJhc2VPYmplY3Q6IHtcclxuICAgICAgICAgICAgICAgIHVzZXJJZDogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbiggKCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudHMuYXBwZW5kVXNlckFuZEZyaWVuZEV2ZW50cygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGhhbmRsZUVkaXRCdXR0b24oKSB7XHJcbiAgICAgICAgY29uc3QgaWRUb0VkaXQgPSBldmVudC50YXJnZXQuaWQuc3BsaXQoXCItLVwiKVsxXTtcclxuICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XHJcbiAgICAgICAgICAgIGRhdGFTZXQ6IFwiZXZlbnRzXCIsXHJcbiAgICAgICAgICAgIGZldGNoVHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgZGF0YUJhc2VPYmplY3Q6IHtcclxuICAgICAgICAgICAgdXNlcklkOiBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVtYmVkSXRlbTogYC8ke2lkVG9FZGl0fWBcclxuLy8gQWJvdmUgaXMgYSBiaXQgb2YgYSBoYWNreSBzb2x1dGlvbiBpbiBvcmRlciB0byBnZXQgYSBzcGVjaWZpYyBldmVudC4gTWF5YmUgbmVlZCB0byBhZGQgc3BlY2lmaWMgZ2V0IGZ1bmN0aW9uIHRvIG5vbWFkRGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocGFyc2VkUmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGV2ZW50cy5jcmVhdGVFdmVudEVkaXRJbnB1dChpZFRvRWRpdCwgcGFyc2VkUmVzcG9uc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGhhbmRsZVVwZGF0ZUJ1dHRvbigpIHtcclxuICAgICAgICBjb25zdCBlZGl0ZWRJZCA9IGV2ZW50LnRhcmdldC5pZC5zcGxpdChcIi0tXCIpWzFdO1xyXG5cclxuICAgICAgICBjb25zdCBlZGl0ZWROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2VkaXROYW1lLS0ke2VkaXRlZElkfWApLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGVkaXRlZERhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZWRpdERhdGUtLSR7ZWRpdGVkSWR9YCkudmFsdWU7XHJcbiAgICAgICAgY29uc3QgZWRpdGVkVGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNlZGl0VGltZS0tJHtlZGl0ZWRJZH1gKS52YWx1ZTtcclxuICAgICAgICBjb25zdCBlZGl0ZWRMb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNlZGl0TG9jYXRpb24tLSR7ZWRpdGVkSWR9YCkudmFsdWU7XHJcblxyXG4gICAgICAgIGlmIChlZGl0ZWROYW1lID09PSBcIlwiIHx8IGVkaXRlZERhdGUgPT09IFwiXCIgfHwgZWRpdGVkVGltZSA9PT0gXCJcIiB8fCBlZGl0ZWRMb2NhdGlvbiA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICBhbGVydChcIlBsZWFzZSBkbyBub3QgbGVhdmUgZWRpdCBmaWVsZHMgYmxhbmtcIilcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XHJcbiAgICAgICAgICAgICAgICBwdXRJZDogZWRpdGVkSWQsXHJcbiAgICAgICAgICAgICAgICBkYXRhU2V0OiBcImV2ZW50c1wiLFxyXG4gICAgICAgICAgICAgICAgZmV0Y2hUeXBlOiBcIlBVVFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YUJhc2VPYmplY3Q6IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogZWRpdGVkSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcklkOiBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSksXHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnROYW1lOiBlZGl0ZWROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50RGF0ZTogZWRpdGVkRGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBldmVudFRpbWU6IGVkaXRlZFRpbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRMb2NhdGlvbjogZWRpdGVkTG9jYXRpb25cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGV2ZW50cy5hcHBlbmRVc2VyQW5kRnJpZW5kRXZlbnRzKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGV2ZW50UGFnZUxpc3RlbmVyczsiLCIvLyBBdXRob3I6IENvbGUgQnJ5YW50IC8gUHVycG9zZTpcclxuXHJcbmltcG9ydCBub21hZERhdGEgZnJvbSBcIi4vbm9tYWREYXRhXCI7XHJcbmltcG9ydCBkb21Db21wb25lbnRzIGZyb20gXCIuL2RvbUNvbXBvbmVudHNcIjtcclxuaW1wb3J0IGV2ZW50UGFnZUxpc3RlbmVycyBmcm9tIFwiLi9ldmVudFBhZ2VMaXN0ZW5lcnNcIjtcclxuXHJcblxyXG4vL2NyZWF0ZUV2ZW50SW5wdXQgYW5kIGNyZWF0ZUV2ZW50SXRlbSB3aWxsIGJlIGFkZGVkIHRvIHRoaXMgb2JqZWN0LiBzbyBkb21idWlsZGVyLlxyXG5jb25zdCBldmVudHMgPSB7XHJcbiAgc2hvd0V2ZW50Rm9ybSAoKSB7XHJcbiAgICBjb25zdCBvdXRwdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI291dHB1dFwiKTtcclxuICAgIHdoaWxlIChvdXRwdXQuZmlyc3RDaGlsZCkge1xyXG4gICAgICBvdXRwdXQucmVtb3ZlQ2hpbGQob3V0cHV0LmZpcnN0Q2hpbGQpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZXZlbnRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIik7XHJcbiAgICBldmVudHNDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJldmVudHNDb250YWluZXJcIik7XHJcbiAgICBvdXRwdXQuYXBwZW5kQ2hpbGQoZXZlbnRzQ29udGFpbmVyKTtcclxuICAgIGNvbnN0IGV2ZW50c0Zvcm0gPSB0aGlzLmNyZWF0ZUV2ZW50SW5wdXQoKTtcclxuICAgIGV2ZW50c0NvbnRhaW5lci5hcHBlbmRDaGlsZChldmVudHNGb3JtKVxyXG4gICAgY29uc3QgZXZlbnRMb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKTtcclxuICAgIGV2ZW50TG9nLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZXZlbnRMb2dcIik7XHJcbiAgICBldmVudHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZXZlbnRMb2cpO1xyXG4gIH0sXHJcbiAgYWRkU2hvd0J1dHRvbigpIHtcclxuICAgIGNvbnN0IGV2ZW50c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXZlbnRzQ29udGFpbmVyXCIpO1xyXG4gICAgY29uc3Qgc2hvd0J1dHRvbiA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiYnV0dG9uXCIsIGNvbnRlbnQ6IFwiQ3JlYXRlIGEgTmV3IEV2ZW50XCIsIGF0dHJpYnV0ZXM6IHt0eXBlOiBcImJ1dHRvblwiLCBpZDogXCJzaG93Rm9ybVwifX0pO1xyXG4gICAgc2hvd0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnRQYWdlTGlzdGVuZXJzLmhhbmRsZVNob3dCdXR0b24pO1xyXG4gICAgZXZlbnRzQ29udGFpbmVyLmluc2VydEJlZm9yZShzaG93QnV0dG9uLCBldmVudHNDb250YWluZXIuZmlyc3RDaGlsZCk7XHJcbiAgfSxcclxuICBhcHBlbmRVc2VyQW5kRnJpZW5kRXZlbnRzKCkge1xyXG4gICAgY29uc3QgZXZlbnRMb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2V2ZW50TG9nXCIpO1xyXG4gICAgY29uc3QgZXZlbnRIb2xkZXIgPSBbXTtcclxuICAgIGNvbnN0IHVzZXJIb2xkZXIgPSBbTnVtYmVyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIikpXTtcclxuICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcclxuICAgICAgZGF0YVNldDogXCJmcmllbmRzXCIsXHJcbiAgICAgIGZldGNoVHlwZTogXCJHRVRcIixcclxuICAgICAgZGF0YUJhc2VPYmplY3Q6IFwiXCIsXHJcbiAgICAgIGVtYmVkSXRlbTogXCI/X2VtYmVkPWV2ZW50c1wiXHJcbiAgICB9KVxyXG4gICAgLnRoZW4ocGFyc2VkUmVzcG9uc2UgPT4ge1xyXG4gICAgICBwYXJzZWRSZXNwb25zZS5mb3JFYWNoKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBpZihyZXNwb25zZS51c2VySWQgPT09IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpKSkge1xyXG4gICAgICAgICAgdXNlckhvbGRlci5wdXNoKHJlc3BvbnNlLm90aGVyRnJpZW5kSWQpO1xyXG4gICAgICAgIH07XHJcbiAgICAgIH0pXHJcbiAgICAgIHVzZXJIb2xkZXIuZm9yRWFjaCh1c2VySWQgPT4ge1xyXG4gICAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcclxuICAgICAgICAgIGRhdGFTZXQ6IFwiZXZlbnRzXCIsXHJcbiAgICAgICAgICBmZXRjaFR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICBkYXRhQmFzZU9iamVjdDogXCJcIixcclxuICAgICAgICAgIGVtYmVkSXRlbTogYD9fdXNlcklkPSR7dXNlcklkfWBcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHBhcnNlZFJlc3BvbnNlID0+IHtcclxuICAgICAgICAgIHBhcnNlZFJlc3BvbnNlLmZvckVhY2gocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UudXNlcklkID09PSB1c2VySWQpIHtcclxuICAgICAgICAgICAgICBldmVudEhvbGRlci5wdXNoKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgY29uc3Qgc29ydGVkRXZlbnRzID0gZXZlbnRIb2xkZXIuc29ydCggKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGEuZXZlbnREYXRlKSAtIG5ldyBEYXRlKGIuZXZlbnREYXRlKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgY29uc3QgZG9jdUZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgICAgICBzb3J0ZWRFdmVudHMuZm9yRWFjaChldmVudCA9PiB7XHJcbiAgICAgICAgICAgIHdoaWxlIChldmVudExvZy5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgICAgICAgZXZlbnRMb2cucmVtb3ZlQ2hpbGQoZXZlbnRMb2cuZmlyc3RDaGlsZClcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc3QgZXZlbnRJdGVtID0gdGhpcy5jcmVhdGVFdmVudEl0ZW0oZXZlbnQpO1xyXG4gICAgICAgICAgICBkb2N1RnJhZy5hcHBlbmRDaGlsZChldmVudEl0ZW0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBldmVudExvZy5hcHBlbmRDaGlsZChkb2N1RnJhZyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBjcmVhdGVFdmVudElucHV0KCkge1xyXG4gICAgY29uc3QgZXZlbnRzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNldmVudHNDb250YWluZXJcIik7XHJcblxyXG4gICAgY29uc3QgZXZlbnRGb3JtID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJmb3JtXCIsIGF0dHJpYnV0ZXM6IHtjbGFzczogXCJldmVudElucHV0XCJ9fSk7XHJcbiAgICBldmVudHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZXZlbnRGb3JtKVxyXG4gICAgY29uc3QgZm9ybUhlYWRlciA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiaDJcIiwgY29udGVudDogXCJBZGQgYSBOZXcgRXZlbnQ6XCJ9KTtcclxuICAgIGV2ZW50Rm9ybS5hcHBlbmRDaGlsZChmb3JtSGVhZGVyKTtcclxuXHJcbiAgICBjb25zdCBuYW1lRmllbGRzZXQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImZpZWxkc2V0XCJ9KTtcclxuICAgIGNvbnN0IG5hbWVMYWJlbCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwibGFiZWxcIiwgY29udGVudDogXCJFdmVudCBOYW1lOlwiLCBhdHRyaWJ1dGVzOiB7Zm9yOiBcImV2ZW50TmFtZVwifX0pO1xyXG4gICAgY29uc3QgbmFtZUlucHV0ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJpbnB1dFwiLCBhdHRyaWJ1dGVzOiB7dHlwZTogXCJ0ZXh0XCIsIG5hbWU6IFwiZXZlbnROYW1lXCIsIGlkOiBcImV2ZW50TmFtZVwifX0pO1xyXG4gICAgbmFtZUZpZWxkc2V0LmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XHJcbiAgICBuYW1lRmllbGRzZXQuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcclxuXHJcbiAgICBjb25zdCBkYXRlRmllbGRzZXQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImZpZWxkc2V0XCJ9KTtcclxuICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwibGFiZWxcIiwgY29udGVudDogXCJFdmVudCBEYXRlOlwiLCBhdHRyaWJ1dGVzOiB7Zm9yOiBcImV2ZW50RGF0ZVwifX0pO1xyXG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJpbnB1dFwiLCBhdHRyaWJ1dGVzOiB7dHlwZTogXCJkYXRlXCIsIG5hbWU6IFwiZXZlbnREYXRlXCIsIGlkOiBcImV2ZW50RGF0ZVwifX0pO1xyXG4gICAgZGF0ZUZpZWxkc2V0LmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XHJcbiAgICBkYXRlRmllbGRzZXQuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcclxuXHJcbiAgICBjb25zdCB0aW1lRmllbGRzZXQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImZpZWxkc2V0XCJ9KTtcclxuICAgIGNvbnN0IHRpbWVMYWJlbCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwibGFiZWxcIiwgY29udGVudDogXCJFdmVudCBUaW1lOlwiLCBhdHRyaWJ1dGVzOiB7Zm9yOiBcImV2ZW50VGltZVwifX0pO1xyXG4gICAgY29uc3QgdGltZUlucHV0ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJpbnB1dFwiLCBhdHRyaWJ1dGVzOiB7dHlwZTogXCJ0aW1lXCIsIG5hbWU6IFwiZXZlbnRUaW1lXCIsIGlkOiBcImV2ZW50VGltZVwifX0pO1xyXG4gICAgdGltZUZpZWxkc2V0LmFwcGVuZENoaWxkKHRpbWVMYWJlbCk7XHJcbiAgICB0aW1lRmllbGRzZXQuYXBwZW5kQ2hpbGQodGltZUlucHV0KTtcclxuXHJcbiAgICBjb25zdCBsb2NhdGlvbkZpZWxkc2V0ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJmaWVsZHNldFwifSk7XHJcbiAgICBjb25zdCBsb2NhdGlvbkxhYmVsID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJsYWJlbFwiLCBjb250ZW50OiBcIkV2ZW50IExvY2F0aW9uOlwiLCBhdHRyaWJ1dGVzOiB7Zm9yOiBcImV2ZW50TG9jYXRpb25cIn19KTtcclxuICAgIGNvbnN0IGxvY2F0aW9uSW5wdXQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImlucHV0XCIsIGF0dHJpYnV0ZXM6IHt0eXBlOiBcInRleHRcIiwgbmFtZTogXCJldmVudExvY2F0aW9uXCIsIGlkOiBcImV2ZW50TG9jYXRpb25cIn19KTtcclxuICAgIGxvY2F0aW9uRmllbGRzZXQuYXBwZW5kQ2hpbGQobG9jYXRpb25MYWJlbCk7XHJcbiAgICBsb2NhdGlvbkZpZWxkc2V0LmFwcGVuZENoaWxkKGxvY2F0aW9uSW5wdXQpO1xyXG5cclxuICAgIGNvbnN0IHNhdmVCdXR0b24gPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImJ1dHRvblwiLCBjb250ZW50OiBcIlNhdmVcIiwgYXR0cmlidXRlczoge3R5cGU6IFwiYnV0dG9uXCIsIGlkOiBcInNhdmVFdmVudFwifX0pO1xyXG4gICAgc2F2ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnRQYWdlTGlzdGVuZXJzLmhhbmRsZVNhdmVCdXR0b24pO1xyXG5cclxuICAgIGNvbnN0IGhpZGVCdXR0b24gPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImJ1dHRvblwiLCBjb250ZW50OiBcIkhpZGUgRXZlbnQgSW5wdXRcIiwgYXR0cmlidXRlczoge3R5cGU6IFwiYnV0dG9uXCIsIGlkOiBcImhpZGVFdmVudFwifX0pO1xyXG4gICAgaGlkZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnRQYWdlTGlzdGVuZXJzLmhhbmRsZUhpZGVCdXR0b24pO1xyXG5cclxuICAgIGV2ZW50Rm9ybS5hcHBlbmRDaGlsZChuYW1lRmllbGRzZXQpO1xyXG4gICAgZXZlbnRGb3JtLmFwcGVuZENoaWxkKGRhdGVGaWVsZHNldCk7XHJcbiAgICBldmVudEZvcm0uYXBwZW5kQ2hpbGQodGltZUZpZWxkc2V0KTtcclxuICAgIGV2ZW50Rm9ybS5hcHBlbmRDaGlsZChsb2NhdGlvbkZpZWxkc2V0KTtcclxuICAgIGV2ZW50Rm9ybS5hcHBlbmRDaGlsZChzYXZlQnV0dG9uKTtcclxuICAgIGV2ZW50Rm9ybS5hcHBlbmRDaGlsZChoaWRlQnV0dG9uKTtcclxuXHJcbiAgICByZXR1cm4gZXZlbnRGb3JtO1xyXG4gIH0sXHJcbiAgY3JlYXRlRXZlbnRJdGVtIChldmVudE9iamVjdCkge1xyXG4gICAgY29uc3QgZXZlbnRJdGVtID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJhcnRpY2xlXCIsIGF0dHJpYnV0ZXM6IHtjbGFzczogXCJldmVudEl0ZW1cIiwgaWQ6IGBldmVudEl0ZW0tLSR7ZXZlbnRPYmplY3QuaWR9YH19KTtcclxuICAgIGNvbnN0IGV2ZW50SGVhZGVyID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJoMlwiLCBjb250ZW50OiBldmVudE9iamVjdC5ldmVudE5hbWV9KTtcclxuXHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZXZlbnRPYmplY3QuZXZlbnREYXRlKTtcclxuICAgIGNvbnN0IGRhdGlmeSA9ICgpID0+IHtcclxuICAgICAgY29uc3QgbW9udGhOYW1lcyA9IFtcclxuICAgICAgICBcIkphbnVhcnlcIixcclxuICAgICAgICBcIkZlYnJ1YXJ5XCIsXHJcbiAgICAgICAgXCJNYXJjaFwiLFxyXG4gICAgICAgIFwiQXByaWxcIixcclxuICAgICAgICBcIk1heVwiLFxyXG4gICAgICAgIFwiSnVuZVwiLFxyXG4gICAgICAgIFwiSnVseVwiLFxyXG4gICAgICAgIFwiQXVndXN0XCIsXHJcbiAgICAgICAgXCJTZXB0ZW1iZXJcIixcclxuICAgICAgICBcIk9jdG9iZXJcIixcclxuICAgICAgICBcIk5vdmVtYmVyXCIsXHJcbiAgICAgICAgXCJEZWNlbWJlclwiXHJcbiAgICAgIF07XHJcbiAgICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgICBjb25zdCBtb250aEluZGV4ID0gZGF0ZS5nZXRNb250aCgpO1xyXG4gICAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICByZXR1cm4gYCR7bW9udGhOYW1lc1ttb250aEluZGV4XX0gJHtkYXl9LCAke3llYXJ9YDtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbG9uZ0RhdGUgPSBkYXRpZnkoKTtcclxuXHJcbiAgICBjb25zdCBldmVudERhdGVUaW1lID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJwXCIsIGNvbnRlbnQ6IGBBdCAke2V2ZW50T2JqZWN0LmV2ZW50VGltZX0gb24gJHtsb25nRGF0ZX1gfSk7XHJcbiAgICBjb25zdCBldmVudExvY2F0aW9uID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJwXCIsIGNvbnRlbnQ6IGBMb2NhdGlvbjogJHtldmVudE9iamVjdC5ldmVudExvY2F0aW9ufWB9KTtcclxuXHJcbiAgICBldmVudEl0ZW0uYXBwZW5kQ2hpbGQoZXZlbnRIZWFkZXIpO1xyXG4gICAgZXZlbnRJdGVtLmFwcGVuZENoaWxkKGV2ZW50RGF0ZVRpbWUpO1xyXG4gICAgZXZlbnRJdGVtLmFwcGVuZENoaWxkKGV2ZW50TG9jYXRpb24pO1xyXG5cclxuICAgIGlmIChldmVudE9iamVjdC51c2VySWQgPT09IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpKSkge1xyXG4gICAgICBjb25zdCBlZGl0QnV0dG9uID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJidXR0b25cIiwgY29udGVudDogXCJFZGl0XCIsIGF0dHJpYnV0ZXM6IHt0eXBlOiBcImJ1dHRvblwiLCBpZDogYGVkaXRFdmVudC0tJHtldmVudE9iamVjdC5pZH1gfX0pO1xyXG4gICAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudFBhZ2VMaXN0ZW5lcnMuaGFuZGxlRWRpdEJ1dHRvbik7XHJcbiAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiYnV0dG9uXCIsIGNvbnRlbnQ6IFwiRGVsZXRlXCIsIGF0dHJpYnV0ZXM6IHt0eXBlOiBcImJ1dHRvblwiLCBpZDogYGRlbGV0ZUV2ZW50LS0ke2V2ZW50T2JqZWN0LmlkfWB9fSk7XHJcbiAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnRQYWdlTGlzdGVuZXJzLmhhbmRsZURlbGV0ZUJ1dHRvbik7XHJcbiAgICAgIGV2ZW50SXRlbS5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcclxuICAgICAgZXZlbnRJdGVtLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XHJcbiAgICAgICAgZGF0YVNldDogXCJ1c2Vyc1wiLFxyXG4gICAgICAgIGZldGNoVHlwZTogXCJHRVRcIixcclxuICAgICAgICBlbWJlZEl0ZW06IGAvJHtldmVudE9iamVjdC51c2VySWR9YFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocGFyc2VkUmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnN0IGV2ZW50VXNlciA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwicFwiLCBjb250ZW50OiBgRXZlbnQgQ3JlYXRlZCBCeTogJHtwYXJzZWRSZXNwb25zZS51c2VyTmFtZX1gfSk7XHJcbiAgICAgICAgZXZlbnRJdGVtLmFwcGVuZENoaWxkKGV2ZW50VXNlcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBldmVudEl0ZW07XHJcbiAgfSxcclxuICBjcmVhdGVFdmVudEVkaXRJbnB1dChjb250YWluZXJJZCwgZXZlbnRPYmplY3QpIHtcclxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImZvcm1cIiwgYXR0cmlidXRlczoge2NsYXNzOiBcImV2ZW50RWRpdFwifX0pO1xyXG4gICAgY29uc3QgZXZlbnRIZWFkZXIgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImgyXCIsIGNvbnRlbnQ6IGV2ZW50T2JqZWN0LmV2ZW50TmFtZX0pO1xyXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChldmVudEhlYWRlcik7XHJcblxyXG4gICAgY29uc3QgbmFtZUZpZWxkc2V0ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJmaWVsZHNldFwifSk7XHJcbiAgICBjb25zdCBuYW1lTGFiZWwgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImxhYmVsXCIsIGNvbnRlbnQ6IFwiRWRpdCBOYW1lOlwiLCBhdHRyaWJ1dGVzOiB7Zm9yOiBcImV2ZW50TmFtZVwifX0pO1xyXG4gICAgY29uc3QgbmFtZUlucHV0ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJpbnB1dFwiLCBhdHRyaWJ1dGVzOiB7dHlwZTogXCJ0ZXh0XCIsIG5hbWU6IFwiZXZlbnROYW1lXCIsIGlkOiBgZWRpdE5hbWUtLSR7Y29udGFpbmVySWR9YCwgdmFsdWU6IGV2ZW50T2JqZWN0LmV2ZW50TmFtZX19KTtcclxuICAgIG5hbWVGaWVsZHNldC5hcHBlbmRDaGlsZChuYW1lTGFiZWwpO1xyXG4gICAgbmFtZUZpZWxkc2V0LmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XHJcblxyXG4gICAgY29uc3QgZGF0ZUZpZWxkc2V0ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJmaWVsZHNldFwifSk7XHJcbiAgICBjb25zdCBkYXRlTGFiZWwgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImxhYmVsXCIsIGNvbnRlbnQ6IFwiRWRpdCBEYXRlOlwiLCBhdHRyaWJ1dGVzOiB7Zm9yOiBcImV2ZW50RGF0ZVwifX0pO1xyXG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJpbnB1dFwiLCBhdHRyaWJ1dGVzOiB7dHlwZTogXCJkYXRlXCIsIG5hbWU6IFwiZXZlbnREYXRlXCIsIGlkOiBgZWRpdERhdGUtLSR7Y29udGFpbmVySWR9YCwgdmFsdWU6IGV2ZW50T2JqZWN0LmV2ZW50RGF0ZX19KTtcclxuICAgIGRhdGVGaWVsZHNldC5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xyXG4gICAgZGF0ZUZpZWxkc2V0LmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XHJcblxyXG4gICAgY29uc3QgdGltZUZpZWxkc2V0ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJmaWVsZHNldFwifSk7XHJcbiAgICBjb25zdCB0aW1lTGFiZWwgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImxhYmVsXCIsIGNvbnRlbnQ6IFwiRWRpdCBUaW1lOlwiLCBhdHRyaWJ1dGVzOiB7Zm9yOiBcImV2ZW50VGltZVwifX0pO1xyXG4gICAgY29uc3QgdGltZUlucHV0ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJpbnB1dFwiLCBhdHRyaWJ1dGVzOiB7dHlwZTogXCJ0aW1lXCIsIG5hbWU6IFwiZXZlbnRUaW1lXCIsIGlkOiBgZWRpdFRpbWUtLSR7Y29udGFpbmVySWR9YCwgdmFsdWU6IGV2ZW50T2JqZWN0LmV2ZW50VGltZX19KTtcclxuICAgIHRpbWVGaWVsZHNldC5hcHBlbmRDaGlsZCh0aW1lTGFiZWwpO1xyXG4gICAgdGltZUZpZWxkc2V0LmFwcGVuZENoaWxkKHRpbWVJbnB1dCk7XHJcblxyXG4gICAgY29uc3QgbG9jYXRpb25GaWVsZHNldCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiZmllbGRzZXRcIn0pO1xyXG4gICAgY29uc3QgbG9jYXRpb25MYWJlbCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwibGFiZWxcIiwgY29udGVudDogXCJFZGl0IExvY2F0aW9uOlwiLCBhdHRyaWJ1dGVzOiB7Zm9yOiBcImV2ZW50TG9jYXRpb25cIn19KTtcclxuICAgIGNvbnN0IGxvY2F0aW9uSW5wdXQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImlucHV0XCIsIGF0dHJpYnV0ZXM6IHt0eXBlOiBcInRleHRcIiwgbmFtZTogXCJldmVudExvY2F0aW9uXCIsIGlkOiBgZWRpdExvY2F0aW9uLS0ke2NvbnRhaW5lcklkfWAsIHZhbHVlOiBldmVudE9iamVjdC5ldmVudExvY2F0aW9ufX0pO1xyXG4gICAgbG9jYXRpb25GaWVsZHNldC5hcHBlbmRDaGlsZChsb2NhdGlvbkxhYmVsKTtcclxuICAgIGxvY2F0aW9uRmllbGRzZXQuYXBwZW5kQ2hpbGQobG9jYXRpb25JbnB1dCk7XHJcblxyXG4gICAgY29uc3QgdXBkYXRlQnV0dG9uID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJidXR0b25cIiwgY29udGVudDogXCJVcGRhdGVcIiwgYXR0cmlidXRlczoge3R5cGU6IFwiYnV0dG9uXCIsIGlkOiBgc3VibWl0RWRpdHMtLSR7Y29udGFpbmVySWR9YH19KTtcclxuICAgIHVwZGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnRQYWdlTGlzdGVuZXJzLmhhbmRsZVVwZGF0ZUJ1dHRvbik7XHJcblxyXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lRmllbGRzZXQpO1xyXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlRmllbGRzZXQpO1xyXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aW1lRmllbGRzZXQpO1xyXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2NhdGlvbkZpZWxkc2V0KTtcclxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodXBkYXRlQnV0dG9uKTtcclxuXHJcbiAgICBsZXQgY3VycmVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNldmVudEl0ZW0tLSR7Y29udGFpbmVySWR9YCk7XHJcbiAgICB3aGlsZSAoY3VycmVudENvbnRhaW5lci5maXJzdENoaWxkKSB7XHJcbiAgICAgIGN1cnJlbnRDb250YWluZXIucmVtb3ZlQ2hpbGQoY3VycmVudENvbnRhaW5lci5maXJzdENoaWxkKTtcclxuICAgIH07XHJcbiAgICBjdXJyZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xyXG4gIH1cclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBldmVudHM7IiwiaW1wb3J0IG5vbWFkRGF0YSBmcm9tIFwiLi9ub21hZERhdGFcIlxyXG5pbXBvcnQgZG9tQ29tcG9uZW50cyBmcm9tIFwiLi9kb21Db21wb25lbnRzXCI7XHJcbmltcG9ydCBmcmllbmRzRXZlbnRzTGlzdGVuZXIgZnJvbSBcIi4vZnJpZW5kc0V2ZW50c0xpc3RlbmVyXCI7XHJcblxyXG5jb25zdCBmcmllbmRzID0ge1xyXG5cclxuXHJcbiAgZGVmaW5lQ3VycmVudFVzZXJzRnJpZW5kcyAoKSB7XHJcbiAgICAkKFwiI291dHB1dFwiKS5lbXB0eSgpXHJcbiAgICBjb25zdCBjdXJyZW50VXNlciA9IDE7XHJcbiAgICBsZXQgdXNlcklkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyk7XHJcbiAgICAvLyBsZXQgY3VycmVudFVzZXIgPSBOdW1iZXIodXNlcklkKTtcclxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRVc2VyLCB1c2VySWQpXHJcbiAgICBsZXQgZnJpZW5kSG9sZGVyID0gW107XHJcbi8vIFBVTEwgRlJPTSBGUklFTkRTIEpTT04tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5ub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XHJcblwiZGF0YVNldFwiIDogXCJmcmllbmRzXCIsXHJcblwiZmV0Y2hUeXBlXCIgOiBcIkdFVFwiLFxyXG5cImRhdGFCYXNlT2JqZWN0XCIgOiBcIlwiLFxyXG5cImVtYmVkSXRlbVwiIDogXCI/X2VtYmVkPWV2ZW50c1wifSlcclxuLnRoZW4oZnJvbUZyaWVuZHMgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKGZyb21GcmllbmRzKVxyXG4gIGZyb21GcmllbmRzLmZvckVhY2goZnJpZW5kRGF0YSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhmcmllbmREYXRhKVxyXG4gICAgaWYgKGZyaWVuZERhdGEudXNlcklkID09PSBjdXJyZW50VXNlcikge1xyXG4gICAgICBmcmllbmRIb2xkZXIucHVzaChmcmllbmREYXRhLm90aGVyRnJpZW5kSWQpXHJcbiAgICB9XHJcbiAgfSlcclxuICBmcmllbmRIb2xkZXIuZm9yRWFjaChvZmZpY2lhbEZyaWVuZCA9PiB7XHJcbiAgICB0aGlzLmxvYWRDdXJyZW50VXNlcnNGcmllbmRzKG9mZmljaWFsRnJpZW5kKVxyXG4gIH0pXHJcbn0pXHJcbn0sXHJcbmxvYWRDdXJyZW50VXNlcnNGcmllbmRzIChmcmllbmQpIHtcclxuICAvLyBQVUxMIEZST00gVVNFUlMgSlNPTiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIC8vIGNvbnNvbGUubG9nKGZyaWVuZClcclxuICAgICAgY29uc3QgdGFyZ2V0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdXRwdXRcIilcclxuICAgICAgdGFyZ2V0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XHJcbiAgICAgICAgZWxlbWVudFR5cGU6IFwic2VjdGlvblwiLFxyXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgICAgIGNsYXNzOiBcImZyaWVuZC1jb250YWluZXJcIixcclxuICAgICAgICAgIGlkOiBgZnJpZW5kLSR7ZnJpZW5kfWBcclxuICAgICAgICB9XHJcbiAgICAgIH0pKVxyXG4gICAgICBjb25zdCBmcmllbmRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZnJpZW5kLSR7ZnJpZW5kfWApXHJcblxyXG5cclxuICAgICAgbGV0IGZyaWVuZERvbUJ1aWxkZXIgPSBbXTtcclxuICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xyXG4gICAgICBcImRhdGFTZXRcIiA6IFwidXNlcnNcIixcclxuICAgICAgXCJmZXRjaFR5cGVcIiA6IFwiR0VUXCIsXHJcbiAgICAgIFwiZGF0YUJhc2VPYmplY3RcIiA6IFwiXCIsXHJcbiAgICAgIFwiZW1iZWRJdGVtXCIgOiBcIj9fZW1iZWQ9ZXZlbnRzXCJ9KVxyXG4gICAgICAudGhlbihmcm9tVXNlckRhdGEgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGZyb21Vc2VyRGF0YSk7XHJcbiAgICAgICAgZnJvbVVzZXJEYXRhLmZvckVhY2godXNlckluZm8gPT4ge1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coZnJpZW5kLCB1c2VySW5mby5pZClcclxuICAgICAgICAgIGlmICh1c2VySW5mby5pZCA9PT0gZnJpZW5kKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXJJbmZvLnVzZXJOYW1lKTtcclxuICAgICAgICAgICAgY29uc3QgZnJpZW5kSWRlbnRpZmllciA9IHtcclxuICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJoMlwiLFxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IHVzZXJJbmZvLnVzZXJOYW1lLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZyaWVuZERvbUJ1aWxkZXIucHVzaChmcmllbmRJZGVudGlmaWVyKVxyXG4gICAgICAgICAgICAvLyBQVUxMIEZST00gRVZFTlRTIEpTT04gLS0tLS0tXHJcbiAgICAgICAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcclxuICAgICAgICAgICAgICAgIFwiZGF0YVNldFwiIDogXCJldmVudHNcIixcclxuICAgICAgICAgICAgXCJmZXRjaFR5cGVcIiA6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIFwiZGF0YUJhc2VPYmplY3RcIiA6IFwiXCIsXHJcbiAgICAgICAgICAgIFwiZW1iZWRJdGVtXCIgOiBcIj9fZW1iZWQ9ZXZlbnRzXCJ9KVxyXG4gICAgICAgICAgICAudGhlbihldmVudHMgPT4ge1xyXG4gICAgICAgICAgICAgIGV2ZW50cy5mb3JFYWNoKGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChldmVudC51c2VySWQgPT09IGZyaWVuZCkge1xyXG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudC5ldmVudE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBldmVudEhvbGRlciA9IHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogYFlvdXIgZmVsbG93IG5vbWFkcyB1cGNvbWluZyBldmVudDogJHtldmVudC5ldmVudE5hbWV9IG9uICR7ZXZlbnQuZXZlbnREYXRlfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IGBldmVudC0ke2V2ZW50LmlkfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGZyaWVuZERvbUJ1aWxkZXIucHVzaChldmVudEhvbGRlcilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAvLyBQVUxMIEZST00gTkVXU0lURU1TIEpTT04gLS0tLS0tXHJcbiAgICAgICAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcclxuICAgICAgICAgICAgXCJkYXRhU2V0XCIgOiBcIm5ld3NpdGVtc1wiLFxyXG4gICAgICAgICAgICBcImZldGNoVHlwZVwiIDogXCJHRVRcIixcclxuICAgICAgICAgICAgXCJkYXRhQmFzZU9iamVjdFwiIDogXCJcIixcclxuICAgICAgICAgICAgXCJlbWJlZEl0ZW1cIiA6IFwiP19lbWJlZD1uZXdzaXRlbXNcIn0pXHJcbiAgICAgICAgICAgIC50aGVuKG5ld3NTaGl6ID0+IHtcclxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhuZXdzU2hpeilcclxuICAgICAgICAgICAgICBuZXdzU2hpei5mb3JFYWNoKHVzZXJTcGVjaWZpY0FydGljbGVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh1c2VyU3BlY2lmaWNBcnRpY2xlcy51c2VySWQgPT09IGZyaWVuZCkge1xyXG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh1c2VyU3BlY2lmaWNBcnRpY2xlcy50aXRsZSlcclxuICAgICAgICAgICAgICAgICAgY29uc3QgYXJ0aWNsZUhvbGRlciA9IHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogdXNlclNwZWNpZmljQXJ0aWNsZXMudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IGBhcnRpY2xlLSR7dXNlclNwZWNpZmljQXJ0aWNsZXMuaWR9YCxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgZnJpZW5kRG9tQnVpbGRlci5wdXNoKGFydGljbGVIb2xkZXIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhmcmllbmREb21CdWlsZGVyKVxyXG4gICAgICAgICAgICAgIGZyaWVuZERvbUJ1aWxkZXIuZm9yRWFjaChvYmplY3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cob2JqZWN0KTtcclxuICAgICAgICAgICAgICAgIGZyaWVuZENvbnRhaW5lci5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQob2JqZWN0KSlcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUZyaWVuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuICAgICAgICAgICAgICBkZWxldGVGcmllbmQuY2xhc3NMaXN0LmFkZChgZGVsZXRlLWZyaWVuZC0ke2ZyaWVuZH1gKVxyXG4gICAgICAgICAgICAgIGRlbGV0ZUZyaWVuZC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpXHJcbiAgICAgICAgICAgICAgZGVsZXRlRnJpZW5kLnRleHRDb250ZW50ID0gXCJERUxFVEVcIjtcclxuICAgICAgICAgICAgICBmcmllbmRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlRnJpZW5kKTtcclxuICAgICAgICAgICAgICBkZWxldGVGcmllbmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGZyaWVuZHNFdmVudHNMaXN0ZW5lci5mcmllbmRzRGVsZXRlRnJpZW5kKClcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcblxyXG4gIH0sXHJcbiAgaW5pdGlhbGl6ZVBvdGVudGlhbEZyaWVuZHMgKCkge1xyXG4gICAgbGV0IHVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xyXG4gICAgbGV0IGN1cnJlbnRVc2VyID0gTnVtYmVyKHVzZXJJZCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcImZyaWVuZHMgUGFnZSB1c2VyIGlkIGlzLVwiLGN1cnJlbnRVc2VyKTtcclxuXHJcbiAgICBjb25zdCB0YXJnZXRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm91dHB1dFwiKTtcclxuICAgIGNvbnN0IGZpbmROZXdGcmllbmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuICAgIGxldCBmcmllbmRzSUhhdmUgPSBbXTtcclxuICAgIGZpbmROZXdGcmllbmRDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmdXR1cmUtZnJpZW5kc1wiKTtcclxuICAgIHRhcmdldENvbnRhaW5lci5hcHBlbmRDaGlsZChmaW5kTmV3RnJpZW5kQ29udGFpbmVyKTtcclxuXHJcbiAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XHJcbiAgICAgIFwiZGF0YVNldFwiIDogXCJmcmllbmRzXCIsXHJcbiAgICAgIFwiZmV0Y2hUeXBlXCIgOiBcIkdFVFwiLFxyXG4gICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiBcIlwiLFxyXG4gICAgICBcImVtYmVkSXRlbVwiIDogXCI/X2VtYmVkPWZyaWVuZHNcIlxyXG4gICAgfSlcclxuICAgIC50aGVuKGZyb21GcmllbmRzID0+IHtcclxuICAgICAgLy8gY29uc29sZS5sb2coZnJvbUZyaWVuZHMpXHJcbiAgICAgIGZyb21GcmllbmRzLmZvckVhY2goZnJpZW5kRGF0YSA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZnJpZW5kRGF0YSlcclxuICAgICAgICBpZiAoZnJpZW5kRGF0YS51c2VySWQgPT09IGN1cnJlbnRVc2VyKSB7XHJcbiAgICAgICAgICBmcmllbmRzSUhhdmUucHVzaChmcmllbmREYXRhLm90aGVyRnJpZW5kSWQpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAvLyBjb25zb2xlLmxvZyhmcmllbmRzSUhhdmUpXHJcblxyXG4gICAgICAgIHRoaXMuc2hvd1VzZXJQb3RlbnRpYWxGcmllbmRzKGZyaWVuZHNJSGF2ZSlcclxuICAgIH0pXHJcbiAgfSxcclxuICBzaG93VXNlclBvdGVudGlhbEZyaWVuZHMgKGZyaWVuZCkge1xyXG4gICAgbGV0IHVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xyXG4gICAgbGV0IGN1cnJlbnRVc2VyID0gTnVtYmVyKHVzZXJJZCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhmcmllbmQpXHJcbiAgICBsZXQgYWxsVGhlVXNlcnMgPSBbXVxyXG4gICAgZnJpZW5kLnB1c2goY3VycmVudFVzZXIpXHJcbiAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XHJcbiAgICAgIFwiZGF0YVNldFwiIDogXCJ1c2Vyc1wiLFxyXG4gICAgICBcImZldGNoVHlwZVwiIDogXCJHRVRcIixcclxuICAgICAgXCJkYXRhQmFzZU9iamVjdFwiIDogXCJcIixcclxuICAgICAgXCJlbWJlZEl0ZW1cIiA6IFwiP19lbWJlZD11c2Vyc1wiXHJcbiAgICB9KVxyXG4gICAgLnRoZW4oYWxsVXNlcnMgPT4ge1xyXG4gICAgICBhbGxVc2Vycy5mb3JFYWNoKHVzZXIgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXIuaWQpXHJcbiAgICAgICAgYWxsVGhlVXNlcnMucHVzaCh1c2VyLmlkKVxyXG4gICAgICB9KVxyXG4gICAgICBjb25zb2xlLmxvZyhcImV2ZXJ5b25lXCIsYWxsVGhlVXNlcnMsIFwidXNlciBhbmQgZnJpZW5kc1wiLGZyaWVuZClcclxuICAgICAgbGV0IG5vdEN1cnJlbnRGcmllbmQgPSB0aGlzLmRpZmZlcmVuY2VPZjJBcnJheXMoYWxsVGhlVXNlcnMsIGZyaWVuZClcclxuICAgICAgbm90Q3VycmVudEZyaWVuZC5mb3JFYWNoKG5vRnJpZW5kT2ZNaW5lID0+IHtcclxuICAgICAgICB0aGlzLnByaW50UG90ZW50aWFsRnJpZW5kc1RvQnJvd3Nlcihub0ZyaWVuZE9mTWluZSlcclxuXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgIGRpZmZlcmVuY2VPZjJBcnJheXMgKGFycmF5MSwgYXJyYXkyKSB7XHJcbiAgICB2YXIgdGVtcCA9IFtdO1xyXG4gICAgYXJyYXkxID0gYXJyYXkxLnRvU3RyaW5nKCkuc3BsaXQoJywnKS5tYXAoTnVtYmVyKTtcclxuICAgIGFycmF5MiA9IGFycmF5Mi50b1N0cmluZygpLnNwbGl0KCcsJykubWFwKE51bWJlcik7XHJcblxyXG4gICAgZm9yICh2YXIgaSBpbiBhcnJheTEpIHtcclxuICAgIGlmKGFycmF5Mi5pbmRleE9mKGFycmF5MVtpXSkgPT09IC0xKSB0ZW1wLnB1c2goYXJyYXkxW2ldKTtcclxuICAgIH1cclxuICAgIGZvcihpIGluIGFycmF5Mikge1xyXG4gICAgaWYoYXJyYXkxLmluZGV4T2YoYXJyYXkyW2ldKSA9PT0gLTEpIHRlbXAucHVzaChhcnJheTJbaV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRlbXAuc29ydCgoYSxiKSA9PiBhLWIpO1xyXG4gICAgfSxcclxuICAgIHByaW50UG90ZW50aWFsRnJpZW5kc1RvQnJvd3NlciAobm90QUZyaWVuZCkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhub3RBRnJpZW5kKVxyXG4gICAgICBjb25zdCB0YXJnZXRTZWN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmdXR1cmUtZnJpZW5kc1wiKTtcclxuICAgICAgdGFyZ2V0U2VjdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xyXG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImRpdlwiLFxyXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgICAgIGlkOiBgcG90ZW50aWFsRnJpZW5kLSR7bm90QUZyaWVuZH1gXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSlcclxuXHJcbiAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcclxuICAgICAgICBcImRhdGFTZXRcIiA6IFwidXNlcnNcIixcclxuICAgICAgICBcImZldGNoVHlwZVwiIDogXCJHRVRcIixcclxuICAgICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiBcIlwiLFxyXG4gICAgICAgIFwiZW1iZWRJdGVtXCIgOiBcIj9fZW1iZWQ9dXNlcnNcIlxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbih1c2Vyc0luZm8gPT4ge1xyXG4gICAgICAgIHVzZXJzSW5mby5mb3JFYWNoKHVzZXIgPT4ge1xyXG4gICAgICAgICAgaWYgKHVzZXIuaWQgPT09IG5vdEFGcmllbmQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codXNlci5pZCwgXCJpcyBubyBmcmllbmRcIilcclxuICAgICAgICAgICAgY29uc3QgcG90ZW50aWFsRnJpZW5kQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHBvdGVudGlhbEZyaWVuZC0ke25vdEFGcmllbmR9YClcclxuICAgICAgICAgICAgcG90ZW50aWFsRnJpZW5kQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XHJcbiAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdoMicsXHJcbiAgICAgICAgICAgICAgY29udGVudDogdXNlci51c2VyTmFtZSxcclxuICAgICAgICAgICAgICBjc3NDbGFzczogYHBvdGVudGlhbC1mcmllbmQtJHt1c2VyLmlkfWBcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgIHBvdGVudGlhbEZyaWVuZENvbnRhaW5lci5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xyXG4gICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImJ1dHRvblwiLFxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IFwiQWRkIEZyaWVuZFwiLFxyXG4gICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgICAgICAgICAgIGlkOiBgYWRkLWZyaWVuZC1idXR0b24tJHt1c2VyLmlkfWAsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgY29uc3QgZm9yQWRkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGFkZC1mcmllbmQtYnV0dG9uLSR7dXNlci5pZH1gKTtcclxuICAgICAgICAgICAgZm9yQWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgZnJpZW5kc0V2ZW50c0xpc3RlbmVyLmZyaWVuZHNBZGRGcmllbmQoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKG5vdEFGcmllbmQpXHJcbiAgICB9LFxyXG4gICAgZnJpZW5kU29ydEZyb21NZXNzYWdlc1NlY3Rpb24gKGFycmF5T2ZGcmllbmRzLCBmcmllbmRUb0FkZCwgZnJpZW5kVG9BZGROYW1lKSB7XHJcbiAgICAgIGxldCB1c2VySWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKTtcclxuICAgICAgbGV0IGN1cnJlbnRVc2VyID0gTnVtYmVyKHVzZXJJZCk7XHJcbiAgICAgIGFycmF5T2ZGcmllbmRzLnB1c2goY3VycmVudFVzZXIpXHJcbiAgICAgIGxldCBhcnJheU9mVXNlcnMgPSBbXVxyXG4gICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XHJcbiAgICAgICAgXCJkYXRhU2V0XCIgOiBcInVzZXJzXCIsXHJcbiAgICAgICAgXCJmZXRjaFR5cGVcIiA6IFwiR0VUXCIsXHJcbiAgICAgICAgXCJkYXRhQmFzZU9iamVjdFwiIDogXCJcIixcclxuICAgICAgICBcImVtYmVkSXRlbVwiIDogXCI/X2VtYmVkPWV2ZW50c1wifSlcclxuICAgICAgICAudGhlbih1c2VycyA9PiB7XHJcbiAgICAgICAgICB1c2Vycy5mb3JFYWNoKHVzZXIgPT4ge1xyXG4gICAgICAgICAgICBhcnJheU9mVXNlcnMucHVzaCh1c2VyLmlkKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIGxldCBub3RGcmllbmRzTGlzdCA9IHRoaXMuY29tcGFyZU1lc3NhZ2VGcmllbmRBcnJheXMoYXJyYXlPZlVzZXJzLCBhcnJheU9mRnJpZW5kcylcclxuICAgICAgICAgIHRoaXMubWVzc2VuZ2VyQWRkZnJpZW5kRmluYWxlKG5vdEZyaWVuZHNMaXN0LCBmcmllbmRUb0FkZCwgZnJpZW5kVG9BZGROYW1lKVxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgY29tcGFyZU1lc3NhZ2VGcmllbmRBcnJheXMgKGFycmF5MSwgYXJyYXkyKSB7XHJcbiAgICAgIHZhciB0ZW1wID0gW107XHJcbiAgICAgIGFycmF5MSA9IGFycmF5MS50b1N0cmluZygpLnNwbGl0KCcsJykubWFwKE51bWJlcik7XHJcbiAgICAgIGFycmF5MiA9IGFycmF5Mi50b1N0cmluZygpLnNwbGl0KCcsJykubWFwKE51bWJlcik7XHJcblxyXG4gICAgICBmb3IgKHZhciBpIGluIGFycmF5MSkge1xyXG4gICAgICBpZihhcnJheTIuaW5kZXhPZihhcnJheTFbaV0pID09PSAtMSkgdGVtcC5wdXNoKGFycmF5MVtpXSk7XHJcbiAgICAgIH1cclxuICAgICAgZm9yKGkgaW4gYXJyYXkyKSB7XHJcbiAgICAgIGlmKGFycmF5MS5pbmRleE9mKGFycmF5MltpXSkgPT09IC0xKSB0ZW1wLnB1c2goYXJyYXkyW2ldKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdGVtcC5zb3J0KChhLGIpID0+IGEtYik7XHJcbiAgICB9LFxyXG4gICAgbWVzc2VuZ2VyQWRkZnJpZW5kRmluYWxlIChub3RmcmllbmRzLCB3YW50ZWRGcmllbmQsIGZyaWVuZFRvQWRkTmFtZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhub3RmcmllbmRzLCBOdW1iZXIod2FudGVkRnJpZW5kKSlcclxuICAgICAgY29uc3QgZmluYWxGcmllbmQgPSBub3RmcmllbmRzLmZpbHRlcihmcmllbmRzVGhhdEFyZW50ID0+IGZyaWVuZHNUaGF0QXJlbnQgPT09IE51bWJlcih3YW50ZWRGcmllbmQpKVxyXG4gICAgICAvLyBjb25zb2xlLmxvZyhmaW5hbEZyaWVuZFswXSwgTnVtYmVyKHdhbnRlZEZyaWVuZCkpXHJcbiAgICAgIGlmIChmaW5hbEZyaWVuZFswXSA9PT0gTnVtYmVyKHdhbnRlZEZyaWVuZCkpIHtcclxuICAgICAgICBpZiAoZnJpZW5kVG9BZGROYW1lID09PSBcIm1vZGFsXCIpIHtcclxuICAgICAgICAgIGZyaWVuZHNFdmVudHNMaXN0ZW5lci5zZWFyY2hCYXJBZGRGcmllbmRUb0pzb24oZmluYWxGcmllbmQpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMubW9kYWxRdWVzdGlvbmFpcmVPZkZyaWVuZHNoaXBWYWxpZGl0eSh3YW50ZWRGcmllbmQsZnJpZW5kVG9BZGROYW1lKVxyXG4gICAgICAgIH0vLyBhbGVydChgWW91J3ZlIGFkZGVkIGEgZmVsbG93IE5vbWFkICR7ZnJpZW5kVG9BZGROYW1lfSB5b3VyIGZyaWVuZCBsaXN0YClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhbGVydChcIlVoLi4uLiBZb3UgY2FuJ3QgZnJpZW5kIHRoZXJlIChpdCdzIHlvdSBvciBzb21lb25lIHdobydzIGFscmVhZHkgYSBmcmllbmQpLlwiKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbW9kYWxRdWVzdGlvbmFpcmVPZkZyaWVuZHNoaXBWYWxpZGl0eSAod2FudGVkRnJpZW5kLCBmcmllbmRUb0FkZE5hbWUpIHtcclxuXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3V0cHV0XCIpLmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XHJcbiAgICAgICAgZWxlbWVudFR5cGU6IFwic2VjdGlvblwiLFxyXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgICAgIGlkOiBcIm1vZGFsLWNvbnRhaW5lclwiXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSlcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC1jb250YWluZXJcIikuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcclxuICAgICAgICBlbGVtZW50VHlwZTogXCJkaXZcIixcclxuICAgICAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgICAgICBpZDogXCJmcmllbmRzX19iYWNrZHJvcFwiXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSk7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtY29udGFpbmVyXCIpLmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XHJcbiAgICAgICAgZWxlbWVudFR5cGU6IFwiZGl2XCIsXHJcbiAgICAgICAgYXR0cmlidXRlczoge1xyXG4gICAgICAgICAgaWQ6IFwiZnJpZW5kc19fbW9kYWxcIlxyXG4gICAgICAgIH1cclxuICAgICAgfSkpXHJcbiAgICAgIGNvbnN0IG1vZGFsUGFyZW50VGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmcmllbmRzX19tb2RhbFwiKTtcclxuICAgICAgbW9kYWxQYXJlbnRUYXJnZXQuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcclxuICAgICAgICBlbGVtZW50VHlwZTogXCJoMVwiLFxyXG4gICAgICAgIGNvbnRlbnQ6IGBZb3Ugc3VyZSB5b3Ugd2FudCAke2ZyaWVuZFRvQWRkTmFtZX0gYXMgYSBmcmllbmQ/YCxcclxuICAgICAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgICAgICBpZDogXCJmcmllbmRzX19jb250ZW50XCJcclxuICAgICAgICB9XHJcbiAgICAgIH0pKVxyXG4gICAgICBtb2RhbFBhcmVudFRhcmdldC5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xyXG4gICAgICAgIGVsZW1lbnRUeXBlOiBcInBcIixcclxuICAgICAgICBjb250ZW50OiBcIkkgbWVhbiByZWFsbHkuLi4uXCIsXHJcbiAgICAgICAgYXR0cmlidXRlczoge1xyXG4gICAgICAgICAgaHJlZjogXCIjXCIsXHJcbiAgICAgICAgICBpZDogXCJmcmllbmRzX19jbG9zZVwiXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSlcclxuICAgICAgbW9kYWxQYXJlbnRUYXJnZXQuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcclxuICAgICAgICBlbGVtZW50VHlwZTogXCJidXR0b25cIixcclxuICAgICAgICBjb250ZW50OiBcIkRvbid0IEZyaWVuZFwiLFxyXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgICAgIGlkOiBcImRvbnRGcmllbmRcIixcclxuICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCJcclxuICAgICAgICB9XHJcbiAgICAgIH0pKVxyXG4gICAgICBtb2RhbFBhcmVudFRhcmdldC5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xyXG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImJ1dHRvblwiLFxyXG4gICAgICAgIGNvbnRlbnQ6IGBZZXMsIG1ha2UgJHtmcmllbmRUb0FkZE5hbWV9IGEgRnJpZW5kYCxcclxuICAgICAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgICAgICBpZDogXCJmcmllbmRJdFVwXCIsXHJcbiAgICAgICAgICBuYW1lOiB3YW50ZWRGcmllbmQsXHJcbiAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSlcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkb250RnJpZW5kXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7ZnJpZW5kc0V2ZW50c0xpc3RlbmVyLmNsb3NlTWVzc2FnZU1vZGFsKClcclxuICAgICAgfSlcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmcmllbmRJdFVwXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgZnJpZW5kc0V2ZW50c0xpc3RlbmVyLmNsb3NlTWVzc2FnZU1vZGFsKClcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5vcGVuRnJpZW5kTW9kYWwoKVxyXG4gICAgfSxcclxuICAgIG9wZW5GcmllbmRNb2RhbCAoKSB7XHJcbiAgICAgIGxldCBiYWNrZHJvcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnJpZW5kc19fYmFja2Ryb3BcIik7XHJcbiAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnJpZW5kc19fbW9kYWxcIik7XHJcbiAgICAgIGJhY2tkcm9wLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICB9LFxyXG4gICAgYnVpbGRGcmllbmRTZWFyY2hCYXIgKCkge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm91dHB1dFwiKS5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xyXG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImRpdlwiLFxyXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgICAgIGlkOiBcImZyaWVuZC1zZWFyY2gtYm94XCJcclxuICAgICAgICB9XHJcbiAgICAgIH0pKVxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZyaWVuZC1zZWFyY2gtYm94XCIpLmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XHJcbiAgICAgICAgZWxlbWVudFR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgICAgICBpZDogXCJmcmllbmQtc2VhcmNoLWlucHV0XCIsXHJcbiAgICAgICAgICBjbGFzczogXCJzZWFyY2gtdHh0XCIsXHJcbiAgICAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcjogXCJTZWFyY2ggRm9yIEZyaWVuZHNcIlxyXG4gICAgICAgIH1cclxuICAgICAgfSkpXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnJpZW5kLXNlYXJjaC1ib3hcIikuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcclxuICAgICAgICBlbGVtZW50VHlwZTogXCJhXCIsXHJcbiAgICAgICAgYXR0cmlidXRlczoge1xyXG4gICAgICAgICAgY2xhc3M6IFwiZnJpZW5kLXNlYXJjaC1idG5cIixcclxuICAgICAgICAgIGhyZWY6IFwiI1wiLFxyXG4gICAgICAgICAgaWQ6IFwiZnJpZW5kLWljb24tYW5jaG9yXCJcclxuICAgICAgICB9XHJcbiAgICAgIH0pKVxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZyaWVuZC1pY29uLWFuY2hvclwiKS5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xyXG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImlcIixcclxuICAgICAgICBjc3NDbGFzczogXCJmYXNcIlxyXG4gICAgICB9KSlcclxuICAgICAgbGV0IHNlYXJjaEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhc1wiKTtcclxuICAgICAgc2VhcmNoSWNvbi5jbGFzc0xpc3QuYWRkKFwiZmEtc2VhcmNoXCIpO1xyXG5cclxuICAgICAgY29uc3QgdXNlcnNTZWFyY2hGcmllbmRJbnB1dEVudGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmcmllbmQtc2VhcmNoLWlucHV0XCIpO1xyXG4gICAgICB1c2Vyc1NlYXJjaEZyaWVuZElucHV0RW50ZXIuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIGtleVByZXNzRXZlbnQgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50LmtleSlcclxuICAgICAgICBpZiAoa2V5UHJlc3NFdmVudC5jaGFyQ29kZSA9PT0gMTMpIHtcclxuICAgICAgICAgIGxldCB1c2VySW5wdXRFbnRlciA9IGtleVByZXNzRXZlbnQudGFyZ2V0LnZhbHVlO1xyXG5cclxuICAgICAgICAgIGZyaWVuZHNFdmVudHNMaXN0ZW5lci5zZWFyY2hJbnB1dE1hZ2ljKHVzZXJJbnB1dEVudGVyKTtcclxuICAgICAgICAgIHVzZXJzU2VhcmNoRnJpZW5kSW5wdXRFbnRlci52YWx1ZSA9IFwiXCI7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcblxyXG4gICAgICBjb25zdCB1c2Vyc1NlYXJjaEZyaWVuZElucHV0Q2xpY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZyaWVuZC1pY29uLWFuY2hvclwiKTtcclxuICAgICAgdXNlcnNTZWFyY2hGcmllbmRJbnB1dENsaWNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHVzZXJJbnB1dENsaWNrID0gdXNlcnNTZWFyY2hGcmllbmRJbnB1dEVudGVyLnZhbHVlXHJcbiAgICAgICAgZnJpZW5kc0V2ZW50c0xpc3RlbmVyLnNlYXJjaElucHV0TWFnaWModXNlcklucHV0Q2xpY2spO1xyXG4gICAgICAgIHVzZXJzU2VhcmNoRnJpZW5kSW5wdXRFbnRlci52YWx1ZSA9IFwiXCI7XHJcblxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIHNlYXJjaFJlc3VsdERpc3BsYXllZCAoZnJpZW5kU2VhcmNoUmVzdWx0RGlzcGxheWVkKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwieW9cIilcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdXRwdXRcIikuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcclxuICAgICAgICBlbGVtZW50VHlwZTogXCJzZWN0aW9uXCIsXHJcbiAgICAgICAgYXR0cmlidXRlczoge1xyXG4gICAgICAgICAgaWQ6IFwibW9kYWwtY29udGFpbmVyXCJcclxuICAgICAgICB9XHJcbiAgICAgIH0pKVxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsLWNvbnRhaW5lclwiKS5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xyXG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImRpdlwiLFxyXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgICAgIGlkOiBcImZyaWVuZHNfX2JhY2tkcm9wXCJcclxuICAgICAgICB9XHJcbiAgICAgIH0pKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC1jb250YWluZXJcIikuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcclxuICAgICAgICBlbGVtZW50VHlwZTogXCJkaXZcIixcclxuICAgICAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgICAgICBpZDogXCJmcmllbmRzX19tb2RhbFwiXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSlcclxuICAgICAgY29uc3QgbW9kYWxQYXJlbnRUYXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZyaWVuZHNfX21vZGFsXCIpO1xyXG4gICAgICBtb2RhbFBhcmVudFRhcmdldC5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xyXG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImgxXCIsXHJcbiAgICAgICAgY29udGVudDogYFdvdWxkIHlvdSBsaWtlIHRvIGJlIGZyaWVuZHMgd2l0aCAke2ZyaWVuZFNlYXJjaFJlc3VsdERpc3BsYXllZC51c2VyTmFtZX0/YCxcclxuICAgICAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgICAgICBpZDogXCJmcmllbmRzX19jb250ZW50XCJcclxuICAgICAgICB9XHJcbiAgICAgIH0pKVxyXG4gICAgICBtb2RhbFBhcmVudFRhcmdldC5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xyXG4gICAgICAgIGVsZW1lbnRUeXBlOiBcInBcIixcclxuICAgICAgICBjb250ZW50OiBgSSBtZWFuICR7ZnJpZW5kU2VhcmNoUmVzdWx0RGlzcGxheWVkLnVzZXJOYW1lfSBpcyBwcmV0dHkgY29vbC4uLmAsXHJcbiAgICAgICAgYXR0cmlidXRlczoge1xyXG4gICAgICAgICAgaHJlZjogXCIjXCIsXHJcbiAgICAgICAgICBpZDogXCJmcmllbmRzX19jbG9zZVwiXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSlcclxuICAgICAgbW9kYWxQYXJlbnRUYXJnZXQuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcclxuICAgICAgICBlbGVtZW50VHlwZTogXCJidXR0b25cIixcclxuICAgICAgICBjb250ZW50OiBcIkRvbid0IEZyaWVuZFwiLFxyXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgICAgIGlkOiBcImRvbnRGcmllbmRcIixcclxuICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCJcclxuICAgICAgICB9XHJcbiAgICAgIH0pKVxyXG4gICAgICBtb2RhbFBhcmVudFRhcmdldC5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xyXG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImJ1dHRvblwiLFxyXG4gICAgICAgIGNvbnRlbnQ6IGBZZXMsIG1ha2UgJHtmcmllbmRTZWFyY2hSZXN1bHREaXNwbGF5ZWQudXNlck5hbWV9IGEgRnJpZW5kYCxcclxuICAgICAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgICAgICBpZDogXCJmcmllbmRJdFVwLXNlYXJjaE1vZGFsXCIsXHJcbiAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSlcclxuXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZG9udEZyaWVuZFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge2ZyaWVuZHNFdmVudHNMaXN0ZW5lci5jbG9zZU1lc3NhZ2VNb2RhbCgpXHJcbiAgICAgIH0pXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnJpZW5kSXRVcC1zZWFyY2hNb2RhbFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGZyaWVuZHNFdmVudHNMaXN0ZW5lci5zZWFyY2hCYXJGcmllbmRpbmcoZnJpZW5kU2VhcmNoUmVzdWx0RGlzcGxheWVkLmlkKVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgdGhpcy5vcGVuRnJpZW5kTW9kYWwoKVxyXG4gICAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZyaWVuZHNcclxuXHJcbi8vIGNvbnN0IHRlc3RlciA9IFtcclxuLy8gICB7XHJcbi8vICAgICBlbGVtZW50VHlwZTogXCJoMlwiLFxyXG4vLyAgICAgY29udGVudDogXCJqYWtlIGJhbm5vblwiXHJcbi8vICAgfSxcclxuLy8gICB7XHJcbi8vICAgICBlbGVtZW50VHlwZTogXCJwXCIsXHJcbi8vICAgICBjb250ZW50OiBcIlBvb2wgUGFydHkgM3BtXCJcclxuLy8gICB9LFxyXG4vLyAgIHtcclxuLy8gICAgIGVsZW1lbnRUeXBlOiBcInBcIixcclxuLy8gICAgIGNvbnRlbnQ6IFwiY2hlY2sgb3V0IHRoaXMgbmV3cyBhcnRpY2xlXCJcclxuLy8gICB9XHJcbi8vIF0iLCJpbXBvcnQgZnJpZW5kcyBmcm9tIFwiLi9mcmllbmRzXCJcclxuaW1wb3J0IG1lc3NhZ2VzIGZyb20gXCIuL21lc3NhZ2VzXCJcclxuaW1wb3J0IG5vbWFkRGF0YSBmcm9tIFwiLi9ub21hZERhdGFcIjtcclxuXHJcbmNvbnN0IGZyaWVuZHNFdmVudHNMaXN0ZW5lciA9IHtcclxuICBmcmllbmRzRGVsZXRlRnJpZW5kICgpIHtcclxuICAgIGNvbnN0IGZyaWVuZFRvRGVsZXRlID0gKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QudmFsdWUpLnNwbGl0KFwiLVwiKVsyXTtcclxuICAgIGxldCB1c2VySWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpO1xyXG4gICAgbGV0IGN1cnJlbnRVc2VyID0gdXNlcklkO1xyXG4gICAgY29uc29sZS5sb2coZnJpZW5kVG9EZWxldGUsIGN1cnJlbnRVc2VyKTtcclxuICAgIGxldCBmaW5hbE51bWJlclNlbmRGb3JEZWxldGUgPSAwXHJcblxyXG4gICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xyXG4gICAgICBcImRhdGFTZXRcIiA6IFwiZnJpZW5kc1wiLFxyXG4gICAgICBcImZldGNoVHlwZVwiIDogXCJHRVRcIixcclxuICAgICAgXCJkYXRhQmFzZU9iamVjdFwiIDogXCJcIixcclxuICAgICAgXCJlbWJlZEl0ZW1cIiA6IFwiP19lbWJlZD1mcmllbmRzXCJcclxuICAgIH0pXHJcbiAgICAudGhlbihkZXN0cm95RnJpZW5kc0hlYXJ0ID0+IHtcclxuICAgICAgZGVzdHJveUZyaWVuZHNIZWFydC5mb3JFYWNoKGdvb2RieWVGcmllbmQgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGdvb2RieWVGcmllbmQudXNlcklkLCBOdW1iZXIoY3VycmVudFVzZXIpKVxyXG4gICAgICAgIGlmIChnb29kYnllRnJpZW5kLm90aGVyRnJpZW5kSWQgPT09IE51bWJlcihmcmllbmRUb0RlbGV0ZSkgJiYgZ29vZGJ5ZUZyaWVuZC51c2VySWQgPT09IE51bWJlcihjdXJyZW50VXNlcikpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQZWFjZU91dFwiLGdvb2RieWVGcmllbmQuaWQpO1xyXG4gICAgICAgICAgICBmaW5hbE51bWJlclNlbmRGb3JEZWxldGUgPSBnb29kYnllRnJpZW5kLmlkO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIGxldCBnb29kQnllU2VhcmNoUmVzdWx0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBmcmllbmQtJHtmcmllbmRUb0RlbGV0ZX1gKTtcclxuICAgICAgZ29vZEJ5ZVNlYXJjaFJlc3VsdHMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChnb29kQnllU2VhcmNoUmVzdWx0cyk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhmaW5hbE51bWJlclNlbmRGb3JEZWxldGUpXHJcbiAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcclxuICAgICAgICBcImRlbGV0ZUlkXCIgOiBmaW5hbE51bWJlclNlbmRGb3JEZWxldGUsXHJcbiAgICAgICAgXCJkYXRhU2V0XCIgOiBcImZyaWVuZHNcIixcclxuICAgICAgICBcImZldGNoVHlwZVwiIDogXCJERUxFVEVcIixcclxuICAgICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiB7XHJcbiAgICAgICAgICBcInVzZXJJZFwiOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9LFxyXG4gIGZyaWVuZHNBZGRGcmllbmQgKCkge1xyXG4gICAgbGV0IHVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIik7XHJcbiAgICBsZXQgY3VycmVudFVzZXIgPSBOdW1iZXIodXNlcklkKTtcclxuXHJcblxyXG4gICAgY29uc3QgZnJpZW5kVG9CZUFkZGVkID0gKGV2ZW50LnRhcmdldC5pZCkuc3BsaXQoXCItXCIpWzNdO1xyXG4gICAgY29uc29sZS5sb2coYHVzZXIke2N1cnJlbnRVc2VyfWAsYEFkZGluZyBGcmllbmQke2ZyaWVuZFRvQmVBZGRlZH1gKVxyXG5cclxuICAgIGxldCBnb29kQnllTm9uRnJpZW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHBvdGVudGlhbEZyaWVuZC0ke2ZyaWVuZFRvQmVBZGRlZH1gKTtcclxuICAgIGdvb2RCeWVOb25GcmllbmQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChnb29kQnllTm9uRnJpZW5kKTtcclxuICAgIGFsZXJ0KGAke2V2ZW50LnRhcmdldC5wcmV2aW91c1NpYmxpbmcuaW5uZXJUZXh0fSBpcyBub3cgeW91ciBmcmllbmQhYCk7XHJcblxyXG4gICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xyXG4gICAgICBcImRhdGFTZXRcIiA6IFwiZnJpZW5kc1wiLFxyXG4gICAgICBcImZldGNoVHlwZVwiIDogXCJQT1NUXCIsXHJcbiAgICAgIFwiZGF0YUJhc2VPYmplY3RcIiA6IHtcclxuICAgICAgICBcInVzZXJJZFwiOiBjdXJyZW50VXNlcixcclxuICAgICAgICBcIm90aGVyRnJpZW5kSWRcIjogTnVtYmVyKGZyaWVuZFRvQmVBZGRlZCksXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSxcclxuICBzaGl6ICgpIHtcclxuICAgIGNvbnN0IGZyaWVuZFRvQmVBZGRlZCA9IGV2ZW50LnRhcmdldC5hdHRyaWJ1dGVzLm5hbWUudmFsdWU7XHJcbiAgICBjb25zdCBmcmllbmRUb0JlQWRkZWRIYXNBTmFtZSA9IGV2ZW50LnRhcmdldC50ZXh0Q29udGVudC5zcGxpdChcIjpcIilbMF1cclxuICAgIGxldCBmcmllbmRzSUhhdmUgPSBbXVxyXG4gICAgbGV0IHVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xyXG4gICAgbGV0IGN1cnJlbnRVc2VyID0gTnVtYmVyKHVzZXJJZCk7XHJcbiAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XHJcbiAgICAgIFwiZGF0YVNldFwiIDogXCJmcmllbmRzXCIsXHJcbiAgICAgIFwiZmV0Y2hUeXBlXCIgOiBcIkdFVFwiLFxyXG4gICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiBcIlwiLFxyXG4gICAgICBcImVtYmVkSXRlbVwiIDogXCI/X2VtYmVkPWZyaWVuZHNcIlxyXG4gICAgfSlcclxuICAgIC50aGVuKGZyb21GcmllbmRzID0+IHtcclxuICAgICAgLy8gY29uc29sZS5sb2coZnJvbUZyaWVuZHMpXHJcbiAgICAgIGZyb21GcmllbmRzLmZvckVhY2goZnJpZW5kRGF0YSA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZnJpZW5kRGF0YSlcclxuICAgICAgICBpZiAoZnJpZW5kRGF0YS51c2VySWQgPT09IGN1cnJlbnRVc2VyKSB7XHJcbiAgICAgICAgICBmcmllbmRzSUhhdmUucHVzaChmcmllbmREYXRhLm90aGVyRnJpZW5kSWQpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAvLyBjb25zb2xlLmxvZyhmcmllbmRzSUhhdmUpXHJcbiAgICAgIGZyaWVuZHMuZnJpZW5kU29ydEZyb21NZXNzYWdlc1NlY3Rpb24oZnJpZW5kc0lIYXZlLCBmcmllbmRUb0JlQWRkZWQsIGZyaWVuZFRvQmVBZGRlZEhhc0FOYW1lKVxyXG4gICAgfSlcclxuICB9LFxyXG4gIGNsb3NlTWVzc2FnZU1vZGFsKCkge1xyXG4gICAgbGV0IHVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xyXG4gICAgbGV0IGN1cnJlbnRVc2VyID0gTnVtYmVyKHVzZXJJZCk7XHJcblxyXG4gICAgaWYgKGV2ZW50LnRhcmdldC5pZCA9PT0gXCJkb250RnJpZW5kXCIpIHtcclxuICAgICAgbGV0IGdvb2RCeWVTZWFyY2hSZXN1bHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC1jb250YWluZXJcIik7XHJcbiAgICAgIGdvb2RCeWVTZWFyY2hSZXN1bHRzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZ29vZEJ5ZVNlYXJjaFJlc3VsdHMpO1xyXG4gICAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuaWQgPT09IFwiZnJpZW5kSXRVcFwiKSB7XHJcbiAgICAgIGxldCBnb29kQnllU2VhcmNoUmVzdWx0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtY29udGFpbmVyXCIpO1xyXG4gICAgICBnb29kQnllU2VhcmNoUmVzdWx0cy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGdvb2RCeWVTZWFyY2hSZXN1bHRzKTtcclxuICAgICAgbGV0IGZyaWVuZFRvYmUgPSBldmVudC50YXJnZXQuYXR0cmlidXRlcy5uYW1lLnZhbHVlO1xyXG4gICAgICBjb25zb2xlLmxvZyhmcmllbmRUb2JlKVxyXG4gICAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcclxuICAgICAgICAgIFwiZGF0YVNldFwiIDogXCJmcmllbmRzXCIsXHJcbiAgICAgICAgICBcImZldGNoVHlwZVwiIDogXCJQT1NUXCIsXHJcbiAgICAgICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiB7XHJcbiAgICAgICAgICAgIFwidXNlcklkXCI6IGN1cnJlbnRVc2VyLFxyXG4gICAgICAgICAgICBcIm90aGVyRnJpZW5kSWRcIjogTnVtYmVyKGZyaWVuZFRvYmUpLFxyXG4gICAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgIH1cclxuICB9LFxyXG4gIHNlYXJjaElucHV0TWFnaWMgKHVzZXJJbnB1dCkge1xyXG4gICAgbGV0IHVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xyXG4gICAgbGV0IGN1cnJlbnRVc2VyID0gTnVtYmVyKHVzZXJJZCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh1c2VySW5wdXQpXHJcbiAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XHJcbiAgICAgIFwiZGF0YVNldFwiIDogXCJ1c2Vyc1wiLFxyXG4gICAgICBcImZldGNoVHlwZVwiIDogXCJHRVRcIixcclxuICAgICAgXCJkYXRhQmFzZU9iamVjdFwiIDogXCJcIixcclxuICAgICAgXCJlbWJlZEl0ZW1cIiA6IFwiP19lbWJlZD11c2Vyc1wiXHJcbiAgICB9KVxyXG4gICAgLnRoZW4odXNlcnMgPT4ge1xyXG4gICAgICBjb25zdCBmb3VuZFVzZXJzID0gdXNlcnMuZmluZCh1c2VyID0+IHVzZXIudXNlck5hbWUuaW5jbHVkZXModXNlcklucHV0KSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGZvdW5kVXNlcnMuaWQsIGN1cnJlbnRVc2VyKVxyXG4gICAgICBpZiAoZm91bmRVc2Vycy5pZCA9PT0gY3VycmVudFVzZXIpIHtcclxuICAgICAgICBhbGVydChcIkNhbid0IGZyaWVuZCB5b3Vyc2VsZlwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBmcmllbmRzLnNlYXJjaFJlc3VsdERpc3BsYXllZChmb3VuZFVzZXJzKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9LFxyXG4gIHNlYXJjaEJhckZyaWVuZGluZyAoZnJpZW5kVG9CZUZyb21TZWFyY2hJZCkge1xyXG4gICAgY29uc3QgZGVmaW5lZEFzRnJvbVNlYXJjaE1vZGFsID0gXCJtb2RhbFwiXHJcbiAgICBsZXQgZnJpZW5kc0lIYXZlID0gW11cclxuICAgIGxldCB1c2VySWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKTtcclxuICAgIGxldCBjdXJyZW50VXNlciA9IE51bWJlcih1c2VySWQpO1xyXG4gICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xyXG4gICAgICBcImRhdGFTZXRcIiA6IFwiZnJpZW5kc1wiLFxyXG4gICAgICBcImZldGNoVHlwZVwiIDogXCJHRVRcIixcclxuICAgICAgXCJkYXRhQmFzZU9iamVjdFwiIDogXCJcIixcclxuICAgICAgXCJlbWJlZEl0ZW1cIiA6IFwiP19lbWJlZD1mcmllbmRzXCJcclxuICAgIH0pXHJcbiAgICAudGhlbihmcm9tRnJpZW5kcyA9PiB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGZyb21GcmllbmRzKVxyXG4gICAgICBmcm9tRnJpZW5kcy5mb3JFYWNoKGZyaWVuZERhdGEgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGZyaWVuZERhdGEpXHJcbiAgICAgICAgaWYgKGZyaWVuZERhdGEudXNlcklkID09PSBjdXJyZW50VXNlcikge1xyXG4gICAgICAgICAgZnJpZW5kc0lIYXZlLnB1c2goZnJpZW5kRGF0YS5vdGhlckZyaWVuZElkKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLy8gY29uc29sZS5sb2coZnJpZW5kc0lIYXZlKVxyXG4gICAgICBmcmllbmRzLmZyaWVuZFNvcnRGcm9tTWVzc2FnZXNTZWN0aW9uKGZyaWVuZHNJSGF2ZSwgZnJpZW5kVG9CZUZyb21TZWFyY2hJZCwgZGVmaW5lZEFzRnJvbVNlYXJjaE1vZGFsKVxyXG4gICAgfSlcclxuICB9LFxyXG4gIHNlYXJjaEJhckFkZEZyaWVuZFRvSnNvbiAoZnJpZW5kVG9CZSkge1xyXG4gICAgbGV0IHVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xyXG4gICAgbGV0IGN1cnJlbnRVc2VyID0gTnVtYmVyKHVzZXJJZCk7XHJcblxyXG4gICAgbGV0IGdvb2RCeWVTZWFyY2hSZXN1bHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC1jb250YWluZXJcIik7XHJcbiAgICBnb29kQnllU2VhcmNoUmVzdWx0cy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGdvb2RCeWVTZWFyY2hSZXN1bHRzKTtcclxuXHJcbiAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XHJcbiAgICAgIFwiZGF0YVNldFwiIDogXCJmcmllbmRzXCIsXHJcbiAgICAgIFwiZmV0Y2hUeXBlXCIgOiBcIlBPU1RcIixcclxuICAgICAgXCJkYXRhQmFzZU9iamVjdFwiIDoge1xyXG4gICAgICAgIFwidXNlcklkXCI6IGN1cnJlbnRVc2VyLFxyXG4gICAgICAgIFwib3RoZXJGcmllbmRJZFwiOiBOdW1iZXIoZnJpZW5kVG9CZSksXHJcbiAgICAgIH1cclxuICB9KVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnJpZW5kc0V2ZW50c0xpc3RlbmVyIiwiaW1wb3J0IG5vbWFkRGF0YSBmcm9tIFwiLi9ub21hZERhdGFcIjtcclxuaW1wb3J0IGRvbUNvbXBvbmVudHMgZnJvbSBcIi4vZG9tQ29tcG9uZW50c1wiO1xyXG5pbXBvcnQgbWVzc2FnZXNFdmVudExpc3RlbmVycyBmcm9tIFwiLi9tZXNzYWdlc0V2ZW50TGlzdGVuZXJzXCI7XHJcbmltcG9ydCBmcmllbmRzRXZlbnRzTGlzdGVuZXIgZnJvbSBcIi4vZnJpZW5kc0V2ZW50c0xpc3RlbmVyLmpzXCI7XHJcblxyXG5jb25zdCBtZXNzYWdlcyA9IHtcclxuXHJcbiAgICBjcmVhdGVNZXNzYWdlQm9hcmQoKSB7XHJcbiAgICAgICAgJChcIiNvdXRwdXRcIikuZW1wdHkoKVxyXG5cclxuICAgICAgICBsZXQgb3V0cHV0QXJ0aWNsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3V0cHV0XCIpXHJcblxyXG4gICAgICAgIC8vY3JlYXRlIGRpc3BsYXkgY29udGFpbmVyXHJcbiAgICAgICAgbGV0IG1lc3NhZ2VzQ29udGFpbmVyID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcclxuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcInNlY3Rpb25cIixcclxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcIm1lc3NhZ2VzQ29udGFpbmVyXCIsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XHJcbiAgICAgICAgICAgICAgICBpZCA6IFwibWVzc2FnZXNDb250YWluZXJcIlxyXG4gICAgICAgICAgICB9fSk7XHJcblxyXG4gICAgICAgIC8vY3JlYXRlIG1lc3NhZ2UgaW5wdXQgZmllbGRcclxuICAgICAgICBsZXQgbWVzc2FnZUlucHV0ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcclxuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImlucHV0XCIsXHJcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJtZXNzYWdlSW5wdXRcIixcclxuICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcclxuICAgICAgICAgICAgICAgIGlkIDogXCJtZXNzYWdlSW5wdXRcIixcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkVudGVyIE1lc3NhZ2UgSGVyZVwiXHJcbiAgICAgICAgICAgIH19KTtcclxuXHJcbiAgICAgICAgLy9jcmVhdGUgc3VibWl0IGJ1dHRvbiBmb3IgaW5wdXQgZmllbGRcclxuICAgICAgICBsZXQgbWVzc2FnZVN1Ym1pdEJ1dHRvbiA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJidXR0b25cIixcclxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcIm1lc3NhZ2VTdWJtaXRCdXR0b25cIixcclxuICAgICAgICAgICAgY29udGVudCA6IFwiU3VibWl0XCIsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XHJcbiAgICAgICAgICAgICAgICBpZCA6IFwibWVzc2FnZVN1Ym1pdEJ1dHRvblwiLFxyXG4gICAgICAgICAgICAgICAgdHlwZSA6IFwiYnV0dG9uXCJcclxuICAgICAgICAgICAgfX0pO1xyXG5cclxuICAgICAgICBtZXNzYWdlU3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtZXNzYWdlc0V2ZW50TGlzdGVuZXJzLnBvc3ROZXdNZXNzYWdlLCB7b25jZTogdHJ1ZX0pO1xyXG4gICAgICAgIG1lc3NhZ2VzQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VJbnB1dCk7XHJcbiAgICAgICAgbWVzc2FnZXNDb250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZVN1Ym1pdEJ1dHRvbik7XHJcbiAgICAgICAgb3V0cHV0QXJ0aWNsZS5hcHBlbmRDaGlsZChtZXNzYWdlc0NvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdldE1lc3NhZ2VzKClcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0TWVzc2FnZXMoKSB7XHJcblxyXG4gICAgICAgIC8vR0VUIGZldGNoICYgLnRoZW4gdG8gYnVpbGQgb2JqZWN0KHMpIGZvciBjcmVhdGVEb21FbGVtZW50KCkgdXNpbmcgX2V4cGFuZCB0byBkaXNwbGF5IFVOOiBtZXNzYWdlXHJcbiAgICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xyXG5cclxuICAgICAgICAgICAgICAgIGRhdGFTZXQgOiBcIm1lc3NhZ2VzXCIsXHJcbiAgICAgICAgICAgICAgICBmZXRjaFR5cGUgOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICAgICAgZW1iZWRJdGVtIDogXCI/X2V4cGFuZD11c2VyXCJcclxuXHJcbiAgICAgICAgfSkudGhlbihtZXNzYWdlcyA9PiB7XHJcblxyXG4gICAgICAgICAgICBsZXQgbWVzc2FnZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVzc2FnZXNDb250YWluZXJcIik7XHJcbiAgICAgICAgICAgIGxldCBtZXNzYWdlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lc3NhZ2VJbnB1dFwiKTtcclxuXHJcbiAgICAgICAgICAgIC8vc29ydCBtZXNzYWdlcyBieSB0aW1lU3RhbXBcclxuICAgICAgICAgICAgbWVzc2FnZXMuc29ydChmdW5jdGlvbihhLGIpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGEudGltZVN0YW1wKSAtIG5ldyBEYXRlKGIudGltZVN0YW1wKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvL2J1aWxkIERPTSBDb21wb25lbnQgZm9yIGVhY2ggbWVzc2FnZSBhbmQgYXBwZW5kXHJcbiAgICAgICAgICAgIG1lc3NhZ2VzLmZvckVhY2gobWVzc2FnZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKVxyXG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2VUZXh0ID0gbWVzc2FnZS5tZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgbGV0IHVzZXJOYW1lID0gbWVzc2FnZS51c2VyLnVzZXJOYW1lO1xyXG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2VJZCA9IG1lc3NhZ2UuaWQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZVRpbWVTdGFtcCA9IG1lc3NhZ2UudGltZVN0YW1wO1xyXG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2VVc2VyID0gYCR7bWVzc2FnZS51c2VySWR9YDtcclxuICAgICAgICAgICAgICAgIGxldCBsb2dnZWRJblVzZXIgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlRWxlbWVudCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQUREIExJTksgSEVSRVxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJoM1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzIDogXCJtZXNzYWdlVXNlck5hbWVcIixcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50IDogYCR7dXNlck5hbWV9OmAsXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGBtZXNzYWdlJHttZXNzYWdlSWR9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA6IHBhcnNlSW50KG1lc3NhZ2VVc2VyKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlRWxlbWVudDIgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgOiBcIm1lc3NhZ2VUZXh0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCA6IGAke21lc3NhZ2VUZXh0fWAsXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG1lc3NhZ2VJZFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZVVzZXIgPT09IGxvZ2dlZEluVXNlcikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZUVkaXRCdXR0b24gPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImJ1dHRvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcyA6IFwibWVzc2FnZUVkaXRCdXR0b25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudCA6IFwiRWRpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGBtZXNzYWdlRWRpdEJ1dHRvbl8ke21lc3NhZ2VJZH1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbWVzc2FnZVRpbWVTdGFtcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgOiBcImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtZXNzYWdlc0V2ZW50TGlzdGVuZXJzLmVkaXRNZXNzYWdlLCB7b25jZTogdHJ1ZX0pXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsZW1lbnQuYXBwZW5kQ2hpbGQobWVzc2FnZUVsZW1lbnQyKVxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbGVtZW50LmFwcGVuZENoaWxkKG1lc3NhZ2VFZGl0QnV0dG9uKVxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VDb250YWluZXIuaW5zZXJ0QmVmb3JlKG1lc3NhZ2VFbGVtZW50LCBtZXNzYWdlSW5wdXQpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWxlbWVudC5hcHBlbmRDaGlsZChtZXNzYWdlRWxlbWVudDIpXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUNvbnRhaW5lci5pbnNlcnRCZWZvcmUobWVzc2FnZUVsZW1lbnQsIG1lc3NhZ2VJbnB1dClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmcmllbmRzRXZlbnRzTGlzdGVuZXIuc2hpeilcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lc3NhZ2VzO1xyXG4iLCJpbXBvcnQgbm9tYWREYXRhIGZyb20gXCIuL25vbWFkRGF0YVwiO1xyXG5pbXBvcnQgZG9tQ29tcG9uZW50cyBmcm9tIFwiLi9kb21Db21wb25lbnRzXCI7XHJcbmltcG9ydCBtZXNzYWdlcyBmcm9tIFwiLi9tZXNzYWdlc1wiO1xyXG4vLyBpbXBvcnQgZnJpZW5kc0V2ZW50TGlzdGVuZXJzIGZyb20gXCIuL2ZyaWVuZHNFdmVudExpc3RlbmVycy5qc1wiO1xyXG5cclxuY29uc3QgbWVzc2FnZXNFdmVudExpc3RlbmVycyA9IHtcclxuXHJcbiAgICBwb3N0TmV3TWVzc2FnZSgpIHtcclxuXHJcbiAgICAgICAgbGV0IG1lc3NhZ2VJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVzc2FnZUlucHV0XCIpLnZhbHVlO1xyXG4gICAgICAgIGxldCB0aW1lU3RhbXAgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XHJcblxyXG4gICAgICAgICAgICBkYXRhU2V0IDogXCJtZXNzYWdlc1wiLFxyXG4gICAgICAgICAgICBmZXRjaFR5cGUgOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgZGF0YUJhc2VPYmplY3QgOiB7XHJcbiAgICAgICAgICAgICAgICB1c2VySWQgOiBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSksXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlIDogbWVzc2FnZUlucHV0LC8vLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgdGltZVN0YW1wIDogdGltZVN0YW1wXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS50aGVuKHNoaXQgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzaGl0KVxyXG4gICAgICAgICAgICAkKFwiI291dHB1dFwiKS5lbXB0eSgpO1xyXG4gICAgICAgICAgICBtZXNzYWdlcy5jcmVhdGVNZXNzYWdlQm9hcmQoKTtcclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuXHJcbiAgICBlZGl0TWVzc2FnZSgpIHtcclxuICAgICAgICBsZXQgbnVtYmVyID0gZXZlbnQuY3VycmVudFRhcmdldC5pZDtcclxuICAgICAgICBsZXQgbWVzc2FnZUFycmF5ID0gbnVtYmVyLnNwbGl0KFwiX1wiKTtcclxuICAgICAgICBsZXQgbWVzc2FnZUlkID0gbWVzc2FnZUFycmF5WzFdO1xyXG5cclxuICAgICAgICBsZXQgbWVzc2FnZVRvRWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke21lc3NhZ2VJZH1gKTtcclxuICAgICAgICBsZXQgbWVzc2FnZVRleHQgPSBtZXNzYWdlVG9FZGl0LmlubmVySFRNTDtcclxuICAgICAgICBsZXQgbWVzc2FnZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBtZXNzYWdlJHttZXNzYWdlSWR9YCk7XHJcbiAgICAgICAgbGV0IG1lc3NhZ2VUaW1lU3RhbXAgPSBldmVudC5jdXJyZW50VGFyZ2V0Lm5hbWU7XHJcblxyXG4gICAgICAgIGxldCBtZXNzYWdlRWRpdEZvcm0gPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQgKHtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJmb3JtXCIsXHJcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJtZXNzYWdlRWRpdEZvcm1cIixcclxuICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcclxuICAgICAgICAgICAgICAgIGlkIDogXCJtZXNzYWdlRWRpdEZvcm1cIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBtZXNzYWdlRWRpdEZpZWxkc2V0ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJmaWVsZHNldFwiLFxyXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwibWVzc2FnZUVkaXRGaWVsZHNldFwiLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xyXG4gICAgICAgICAgICAgICAgaWQgOiBcIm1lc3NhZ2VFZGl0RmllbGRzZXRcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBtZXNzYWdlRWRpdElucHV0ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJpbnB1dFwiLFxyXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwibWVzc2FnZUVkaXRJbnB1dFwiLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xyXG4gICAgICAgICAgICAgICAgaWQgOiBgbWVzc2FnZUVkaXRJbnB1dF8ke21lc3NhZ2VJZH1gLFxyXG4gICAgICAgICAgICAgICAgdmFsdWUgOiBgJHttZXNzYWdlVGV4dH1gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IG1lc3NhZ2VFZGl0U3VibWl0QnV0dG9uID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJidXR0b25cIixcclxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcIm1lc3NhZ2VFZGl0U3VibWl0QnV0dG9uXCIsXHJcbiAgICAgICAgICAgIGNvbnRlbnQgOiBcIlN1Ym1pdFwiLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xyXG4gICAgICAgICAgICAgICAgaWQgOiBgbWVzc2FnZUVkaXRTdWJtaXRCdXR0b25fJHttZXNzYWdlSWR9YCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IG1lc3NhZ2VUaW1lU3RhbXAsXHJcbiAgICAgICAgICAgICAgICB0eXBlIDogXCJidXR0b25cIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbWVzc2FnZUVkaXRTdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1lc3NhZ2VzRXZlbnRMaXN0ZW5lcnMuaGFuZGxlRWRpdFN1Ym1pdEJ1dHRvbilcclxuICAgICAgICBtZXNzYWdlRWRpdEZpZWxkc2V0LmFwcGVuZENoaWxkKG1lc3NhZ2VFZGl0SW5wdXQpXHJcbiAgICAgICAgbWVzc2FnZUVkaXRGaWVsZHNldC5hcHBlbmRDaGlsZChtZXNzYWdlRWRpdFN1Ym1pdEJ1dHRvbilcclxuICAgICAgICBtZXNzYWdlRWRpdEZvcm0uYXBwZW5kQ2hpbGQobWVzc2FnZUVkaXRGaWVsZHNldClcclxuICAgICAgICBtZXNzYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VFZGl0Rm9ybSlcclxuXHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGhhbmRsZUVkaXRTdWJtaXRCdXR0b24oKSB7XHJcbiAgICAgICAgbGV0IG51bWJlciA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQ7XHJcbiAgICAgICAgbGV0IG1lc3NhZ2VBcnJheSA9IG51bWJlci5zcGxpdChcIl9cIik7XHJcbiAgICAgICAgbGV0IG1lc3NhZ2VJZCA9IG1lc3NhZ2VBcnJheVsxXTtcclxuICAgICAgICBsZXQgbWVzc2FnZVRpbWVTdGFtcCA9IGAke2V2ZW50LmN1cnJlbnRUYXJnZXQubmFtZX1gO1xyXG4gICAgICAgIGxldCBtZXNzYWdlRWRpdElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG1lc3NhZ2VFZGl0SW5wdXRfJHttZXNzYWdlSWR9YCk7XHJcblxyXG4gICAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcclxuXHJcbiAgICAgICAgICAgIHB1dElkIDogbWVzc2FnZUlkLFxyXG4gICAgICAgICAgICBkYXRhU2V0IDogXCJtZXNzYWdlc1wiLFxyXG4gICAgICAgICAgICBmZXRjaFR5cGUgOiBcIlBVVFwiLFxyXG4gICAgICAgICAgICBkYXRhQmFzZU9iamVjdCA6IHtcclxuICAgICAgICAgICAgICAgIHVzZXJJZCA6IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpKSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGAke21lc3NhZ2VFZGl0SW5wdXQudmFsdWV9YCxcclxuICAgICAgICAgICAgICAgIHRpbWVTdGFtcDogYCR7bWVzc2FnZVRpbWVTdGFtcH1gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS50aGVuKHNoaXQgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzaGl0KVxyXG4gICAgICAgICAgICAkKFwiI291dHB1dFwiKS5lbXB0eSgpO1xyXG4gICAgICAgICAgICBtZXNzYWdlcy5jcmVhdGVNZXNzYWdlQm9hcmQoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG1lc3NhZ2VzRXZlbnRMaXN0ZW5lcnM7IiwiaW1wb3J0IG5vbWFkRGF0YSBmcm9tIFwiLi9ub21hZERhdGFcIjtcclxuaW1wb3J0IGRvbUNvbXBvbmVudHMgZnJvbSBcIi4vZG9tQ29tcG9uZW50c1wiO1xyXG4vL3B1bGwgZnJvbSBhcGkgdGhlbiBkaXNwbGF5IHRvIGRvbS5cclxuLy8gY3JlYXRlIHNhdmUgYnV0dG9uIHNlbmQgc2F2ZWQgYXJ0aWNsZXMgdG8gSnNvblxyXG4vLyBjcmVhdGUgYnV0dG9uIHRvIHB1bGwgYWxsIHNhdmVkIG1hdGVyaWFscyBpbiBqc29uLlxyXG4vLyBkZWxldGUgbWV0aG9kIGZvciBhcnRpY2xlc1xyXG5jb25zdCBuZXdzID0ge1xyXG5cclxuICAgIGdldE5ld3MoKXtcclxuICAgICAgICAvL3B1bGwgdGhlbiBzZW5kIHB1bGxlZCBkYXRhIHRvIGRvbVxyXG4gICAgICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzLzFcIilcclxuICAgICAgICAgICAgLnRoZW4obmV3c0l0ZW1zID0+IG5ld3NJdGVtcy5qc29uKCkpXHJcbiAgICB9LFxyXG4gICAgc2F2ZSgpIHtcclxuICAgICAgICAvL1RoaXMgaXMgZnVuY3Rpb25pbmcgYW5kIHdyaXRpbmcgdG8gSlNPTi5cclxuICAgICAgICB0aGlzLmdldE5ld3MoKS50aGVuKHBvc3QgPT57XHJcbiAgICAgICAgY29uc3QgbmV3c09iamVjdCA9IHtcclxuICAgICAgICAgICAgICAgIFwiZGF0YVNldFwiIDogXCJuZXdzSXRlbXNcIixcclxuICAgICAgICAgICAgICAgIFwiZmV0Y2hUeXBlXCIgOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIFwiZGF0YUJhc2VPYmplY3RcIiA6IHtcclxuICAgICAgICAgICAgICAgICAgICBcInVzZXJJZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidXJsXCI6IGAke3Bvc3QudGl0bGV9YCxcclxuICAgICAgICAgICAgICAgICAgICBcInRpdGxlXCI6IGAke3Bvc3QuYm9keX1gLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3lub3BzaXNcIjogXCJibGFoIGJsYWggYmxhaFwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRlc3RuZXdzT2JqKTtcclxuICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YShuZXdzT2JqZWN0KTtcclxuICAgIH0pXHJcbiAgICB9LFxyXG5cclxuICAgIGFsbFNhdmVkKCl7XHJcbiAgICAvLyBub21hZERhdGEuY29ubmVjdFRvRGF0YSh0ZXN0bmV3c09iailcclxuICAgIH0sXHJcblxyXG4gICAgZGVsZXRlREIoKXtcclxuXHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBuZXdzRWxlbWVudENyZWF0b3IoKXtcclxuICAgICAgICAkKFwiI291dHB1dFwiKS5lbXB0eSgpXHJcbiAgICAgICAgY29uc3QgbmV3c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3V0cHV0XCIpXHJcbiAgICAgICAgbGV0IG5ld3NDcmVhdG9yS2V5ID0ge1xyXG4gICAgICAgICAgICBcImRhdGFTZXRcIiA6IFwibmV3c0l0ZW1zXCIsXHJcbiAgICAgICAgICAgIFwiZmV0Y2hUeXBlXCIgOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiBcIlwiLFxyXG4gICAgICAgICAgICBcImVtYmVkSXRlbVwiIDogXCI/X2VtYmVkPW5ld3NJdGVtc1wiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKG5ld3NDcmVhdG9yS2V5KVxyXG4gICAgICAgIC50aGVuIChkYkdyYWJzID0+IHtcclxuICAgICAgICAgICAgZGJHcmFicy5mb3JFYWNoKGRiR3JhYiA9PiAge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGJHcmFiKTtcclxuICAgICAgICAgICAgICAgIG5ld3NDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJidXR0b25cIixcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlNBVkUgQklUQ0hcIixcclxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzczogXCJuZXdzU2F2ZUJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgICAgIG5ld3NDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJoMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGRiR3JhYi50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzczogXCJuZXdzVGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgICAgICBuZXdzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwicFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGRiR3JhYi5zeW5vcHNpcyxcclxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzczogXCJuZXdzQm9keVwiXHJcbiAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgICAgIG5ld3NDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogZGJHcmFiLnVybCxcclxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzczogXCJuZXdzVVJMXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlczp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6YCR7ZGJHcmFiLnVybH1gXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSkpXHJcblxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLyBjb25zdCBOZXdzVGVzdCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudChcImgyXCIsdGVzdFBhc3MsXCJ0ZXN0T2JqXCIsbnVsbCk7XHJcbiAgICAgICAgLy9vdXRwdXQuYXBwZW5kQ2hpbGQoTmV3c1Rlc3QpO1xyXG5cclxuXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgbmV3cyIsImltcG9ydCBldmVudExpc3RlbmVycyBmcm9tIFwiLi9ldmVudExpc3RlbmVyc1wiO1xyXG5jb25zdCBub21hZERhdGEgPSB7XHJcblxyXG4gICAgY29ubmVjdFRvRGF0YShmZXRjaE9iamVjdCkge1xyXG5cclxuICAgICAgICBsZXQgZGF0YVNldCA9IGZldGNoT2JqZWN0LmRhdGFTZXQ7XHJcbiAgICAgICAgbGV0IGVtYmVkSXRlbSA9IGZldGNoT2JqZWN0LmVtYmVkSXRlbTtcclxuICAgICAgICBsZXQgZmV0Y2hUeXBlID0gZmV0Y2hPYmplY3QuZmV0Y2hUeXBlO1xyXG4gICAgICAgIGxldCBkYXRhQmFzZU9iamVjdCA9IGZldGNoT2JqZWN0LmRhdGFCYXNlT2JqZWN0O1xyXG4gICAgICAgIGxldCBwdXRJZCA9IGZldGNoT2JqZWN0LnB1dElkO1xyXG4gICAgICAgIGxldCBkZWxldGVJZCA9IGZldGNoT2JqZWN0LmRlbGV0ZUlkO1xyXG5cclxuICAgICAgICBpZiAoZmV0Y2hUeXBlID09IFwiR0VUXCIpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODgvJHtkYXRhU2V0fSR7ZW1iZWRJdGVtfWApXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkgLy8gcGFyc2VzIHJlc3BvbnNlIHRvIEpTT05cclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChmZXRjaFR5cGUgPT09IFwiUE9TVFwiKXtcclxuXHJcbiAgICAgICAgLy8gRGVmYXVsdCBvcHRpb25zIGFyZSBtYXJrZWQgd2l0aCAqXHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODgvJHtkYXRhU2V0fWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBgJHtmZXRjaFR5cGV9YCwgLy8gKkdFVCwgUE9TVCwgUFVULCBERUxFVEUsIGV0Yy5cclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgICAgICAvLyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyByZWZlcnJlcjogXCJuby1yZWZlcnJlclwiLCAvLyBuby1yZWZlcnJlciwgKmNsaWVudFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhQmFzZU9iamVjdCksIC8vIGJvZHkgZGF0YSB0eXBlIG11c3QgbWF0Y2ggXCJDb250ZW50LVR5cGVcIiBoZWFkZXJcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB9IGVsc2UgaWYoZmV0Y2hUeXBlID09PSBcIlBVVFwiKXtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC8ke2RhdGFTZXR9LyR7cHV0SWR9YCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IGAke2ZldGNoVHlwZX1gLCAvLyAqR0VULCBQT1NULCBQVVQsIERFTEVURSwgZXRjLlxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgICAgIC8vIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vIHJlZmVycmVyOiBcIm5vLXJlZmVycmVyXCIsIC8vIG5vLXJlZmVycmVyLCAqY2xpZW50XHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGFCYXNlT2JqZWN0KSwgLy8gYm9keSBkYXRhIHR5cGUgbXVzdCBtYXRjaCBcIkNvbnRlbnQtVHlwZVwiIGhlYWRlclxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIGlmIChmZXRjaFR5cGUgPT09IFwiREVMRVRFXCIpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC8ke2RhdGFTZXR9LyR7ZGVsZXRlSWR9YCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IGAke2ZldGNoVHlwZX1gLCAvLyAqR0VULCBQT1NULCBQVVQsIERFTEVURSwgZXRjLlxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgICAgIC8vIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vIHJlZmVycmVyOiBcIm5vLXJlZmVycmVyXCIsIC8vIG5vLXJlZmVycmVyLCAqY2xpZW50XHJcbiAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyAoXCJZT1UgU0NSRVdFRCBJVCBVUFwiKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbm9tYWREYXRhIiwiaW1wb3J0IG5vbWFkRGF0YSBmcm9tIFwiLi9ub21hZERhdGFcIjtcclxuaW1wb3J0IGRvbUNvbXBvbmVudHMgZnJvbSBcIi4vZG9tQ29tcG9uZW50c1wiO1xyXG5pbXBvcnQgdGFza3NFdmVudExpc3RlbmVycyBmcm9tIFwiLi90YXNrc0V2ZW50TGlzdGVuZXJzXCI7XHJcbmltcG9ydCB0YXNrc1BvcHVwIGZyb20gXCIuL3Rhc2tzUG9wdXBcIjtcclxuLy8gaW1wb3J0IGV2ZW50TGlzdGVuZXJzIGZyb20gXCIuL2V2ZW50TGlzdGVuZXJzXCJcclxuXHJcbmNvbnN0IHRhc2tzID0ge1xyXG5cclxuICAgIGNyZWF0ZVRhc2tUYWJsZXMoKSB7XHJcbiAgICAgICAgJChcIiNvdXRwdXRcIikuZW1wdHkoKVxyXG5cclxuICAgICAgICBsZXQgb3V0cHV0QXJ0aWNsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3V0cHV0XCIpXHJcblxyXG4gICAgICAgIC8vY3JlYXRlIGRpc3BsYXkgY29udGFpbmVyXHJcbiAgICAgICAgbGV0IHRhc2tzQ29udGFpbmVyID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcclxuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcInNlY3Rpb25cIixcclxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcInRhc2tzQ29udGFpbmVyXCIsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XHJcbiAgICAgICAgICAgICAgICBpZCA6IFwidGFza3NDb250YWluZXJcIlxyXG4gICAgICAgICAgICB9fSk7XHJcblxyXG4gICAgICAgIC8vY3JlYXRlIHRhc2tzIHRhYmxlc1xyXG4gICAgICAgIGxldCBhY3RpdmVUYXNrc1RhYmxlID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcclxuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcInRhYmxlXCIsXHJcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJhY3RpdmVUYXNrc1RhYmxlXCIsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XHJcbiAgICAgICAgICAgICAgICBpZCA6IFwiYWN0aXZlVGFza3NUYWJsZVwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IGFjdGl2ZVRhc2tzVGFibGVUaXRsZSA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJjYXB0aW9uXCIsXHJcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJhY3RpdmVUYXNrc1RhYmxlVGl0bGVcIixcclxuICAgICAgICAgICAgY29udGVudCA6IFwiQUNUSVZFIFRBU0tTXCJcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IGNvbXBsZXRlZFRhc2tzVGFibGUgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xyXG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwidGFibGVcIixcclxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcImNvbXBsZXRlZFRhc2tzVGFibGVcIixcclxuICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcclxuICAgICAgICAgICAgICAgIGlkIDogXCJjb21wbGV0ZWRUYXNrc1RhYmxlXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgY29tcGxldGVkVGFza3NUYWJsZVRpdGxlID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcclxuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImNhcHRpb25cIixcclxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcImNvbXBsZXRlZFRhc2tzVGFibGVUaXRsZVwiLFxyXG4gICAgICAgICAgICBjb250ZW50IDogXCJDT01QTEVURUQgVEFTS1NcIlxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vY3JlYXRlIHJvdyB3aXRoIGNvbHVtbiBoZWFkZXJzXHJcbiAgICAgICAgbGV0IGFjdGl2ZVRhc2tzSGVhZGVyUm93ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcclxuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcInRyXCIsXHJcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJhY3RpdmVUYXNrc0hlYWRlclJvd1wiLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xyXG4gICAgICAgICAgICAgICAgaWQgOiBcImFjdGl2ZVRhc2tzSGVhZGVyUm93XCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgY29tcGxldGVkVGFza3NIZWFkZXJSb3cgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xyXG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwidHJcIixcclxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcImNvbXBsZXRlZFRhc2tzSGVhZGVyUm93XCIsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XHJcbiAgICAgICAgICAgICAgICBpZCA6IFwiY29tcGxldGVkVGFza3NIZWFkZXJSb3dcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vY3JlYXRlIGNvbHVtbiBoZWFkZXJzXHJcbiAgICAgICAgbGV0IGFjdGl2ZVRhc2tzSGVhZGVyID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcclxuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcInRoXCIsXHJcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJhY3RpdmVUYXNrc0hlYWRlclwiLFxyXG4gICAgICAgICAgICBjb250ZW50OiBcIlRhc2tcIixcclxuICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcclxuICAgICAgICAgICAgICAgIGlkIDogXCJhY3RpdmVUYXNrc0hlYWRlclwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IGFjdGl2ZVRhc2tzRHVlRGF0ZUhlYWRlciA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJ0aFwiLFxyXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwiYWN0aXZlVGFza3NEdWVEYXRlSGVhZGVyXCIsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiRHVlIERhdGVcIixcclxuICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcclxuICAgICAgICAgICAgICAgIGlkIDogXCJhY3RpdmVUYXNrc0R1ZURhdGVIZWFkZXJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IGFjdGl2ZVRhc2tzRWRpdCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJ0aFwiLFxyXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwiYWN0aXZlVGFza3NFZGl0XCIsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCIsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XHJcbiAgICAgICAgICAgICAgICBpZCA6IFwiYWN0aXZlVGFza3NFZGl0XCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgY29tcGxldGVkVGFza3NIZWFkZXIgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xyXG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwidGhcIixcclxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcImNvbXBsZXRlZFRhc2tzSGVhZGVyXCIsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiVGFza1wiLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xyXG4gICAgICAgICAgICAgICAgaWQgOiBcImNvbXBsZXRlZFRhc2tzSGVhZGVyXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgY29tcGxldGVkVGFza3NEdWVEYXRlSGVhZGVyID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcclxuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcInRoXCIsXHJcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJjb21wbGV0ZWRUYXNrc0R1ZURhdGVIZWFkZXJcIixcclxuICAgICAgICAgICAgY29udGVudDogXCJEdWUgRGF0ZVwiLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xyXG4gICAgICAgICAgICAgICAgaWQgOiBcImNvbXBsZXRlZFRhc2tzRHVlRGF0ZUhlYWRlclwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvL2NyZWF0ZSBidXR0b24gdG8gbWFrZSBuZXcgdGFza3NcclxuICAgICAgICBsZXQgY3JlYXRlVGFza0J1dHRvbiA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJidXR0b25cIixcclxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcImNyZWF0ZVRhc2tCdXR0b25cIixcclxuICAgICAgICAgICAgY29udGVudCA6IFwiQ3JlYXRlIE5ldyBUYXNrXCIsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XHJcbiAgICAgICAgICAgICAgICBpZCA6IFwiY3JlYXRlVGFza0J1dHRvblwiLFxyXG4gICAgICAgICAgICAgICAgdHlwZSA6IFwiYnV0dG9uXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCBjb21wbGV0ZWRUYXNrc0VkaXQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xyXG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwidGhcIixcclxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcImNvbXBsZXRlZFRhc2tzRWRpdFwiLFxyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xyXG4gICAgICAgICAgICAgICAgaWQgOiBcImNvbXBsZXRlZFRhc2tzRWRpdFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy9hcHBlbmQgaGVhZGVyIHJvdyB0byB0YWJsZSBhbmQgdGFibGUgdG8gY29udGFpbmVyXHJcbiAgICAgICAgYWN0aXZlVGFza3NUYWJsZS5hcHBlbmRDaGlsZChhY3RpdmVUYXNrc1RhYmxlVGl0bGUpO1xyXG4gICAgICAgIGNvbXBsZXRlZFRhc2tzVGFibGUuYXBwZW5kQ2hpbGQoY29tcGxldGVkVGFza3NUYWJsZVRpdGxlKTtcclxuICAgICAgICBhY3RpdmVUYXNrc0hlYWRlclJvdy5hcHBlbmRDaGlsZChhY3RpdmVUYXNrc0hlYWRlcilcclxuICAgICAgICBhY3RpdmVUYXNrc0hlYWRlclJvdy5hcHBlbmRDaGlsZChhY3RpdmVUYXNrc0R1ZURhdGVIZWFkZXIpO1xyXG4gICAgICAgIGFjdGl2ZVRhc2tzSGVhZGVyUm93LmFwcGVuZENoaWxkKGFjdGl2ZVRhc2tzRWRpdCk7XHJcbiAgICAgICAgYWN0aXZlVGFza3NUYWJsZS5hcHBlbmRDaGlsZChhY3RpdmVUYXNrc0hlYWRlclJvdyk7XHJcbiAgICAgICAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aXZlVGFza3NUYWJsZSk7XHJcbiAgICAgICAgY29tcGxldGVkVGFza3NIZWFkZXJSb3cuYXBwZW5kQ2hpbGQoY29tcGxldGVkVGFza3NIZWFkZXIpXHJcbiAgICAgICAgY29tcGxldGVkVGFza3NIZWFkZXJSb3cuYXBwZW5kQ2hpbGQoY29tcGxldGVkVGFza3NEdWVEYXRlSGVhZGVyKTtcclxuICAgICAgICBjb21wbGV0ZWRUYXNrc0hlYWRlclJvdy5hcHBlbmRDaGlsZChjb21wbGV0ZWRUYXNrc0VkaXQpO1xyXG4gICAgICAgIGNvbXBsZXRlZFRhc2tzVGFibGUuYXBwZW5kQ2hpbGQoY29tcGxldGVkVGFza3NIZWFkZXJSb3cpO1xyXG4gICAgICAgIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbXBsZXRlZFRhc2tzVGFibGUpO1xyXG4gICAgICAgIGNyZWF0ZVRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRhc2tzUG9wdXAuY3JlYXRlTmV3VGFza0Zvcm0pO1xyXG4gICAgICAgIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tCdXR0b24pO1xyXG4gICAgICAgIG91dHB1dEFydGljbGUuYXBwZW5kQ2hpbGQodGFza3NDb250YWluZXIpO1xyXG5cclxuICAgICAgICB0aGlzLmdldFRhc2tzKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGdldFRhc2tzKCkge1xyXG5cclxuICAgICAgICBsZXQgY3VycmVudFVzZXIgPSBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSk7XHJcblxyXG4gICAgICAgIC8vcG9wdWxhdGUgdGFza3NcclxuICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XHJcblxyXG4gICAgICAgICAgICBkYXRhU2V0IDogXCJ0YXNrc1wiLFxyXG4gICAgICAgICAgICBmZXRjaFR5cGUgOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICBlbWJlZEl0ZW0gOiBcIj9fZW1iZWQ9dXNlcnNcIlxyXG5cclxuICAgICAgICB9KS50aGVuKHRhc2tzID0+IHtcclxuXHJcbiAgICAgICAgICAgIHRhc2tzLnNvcnQoZnVuY3Rpb24oYSxiKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShhLmV4cGVjdGVkQ29tcGxldGlvbkRhdGUpIC0gbmV3IERhdGUoYi5leHBlY3RlZENvbXBsZXRpb25EYXRlKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0YXNrLnVzZXJJZCA9PT0gY3VycmVudFVzZXIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgc3RhdHVzID0gdGFzay5jb21wbGV0ZTtcclxuICAgICAgICAgICAgICAgIGxldCBhY3RpdmVUYXNrc1RhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY3RpdmVUYXNrc1RhYmxlXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbXBsZXRlZFRhc2tzVGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbXBsZXRlZFRhc2tzVGFibGVcIik7XHJcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgYSBuZXcgdGFibGUgcm93IGZvciBlYWNoIHRhc2tcclxuICAgICAgICAgICAgICAgIGxldCB0YXNrUm93ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwidHJcIixcclxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcyA6IFwidGFza1RhYmxlUm93XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQgOiBgdGFza1RhYmxlUm93XyR7dGFzay5pZH1gXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAvL2NyZWF0ZSBjZWxscyB0byBob2xkIHRhc2sgYW5kIGR1ZSBkYXRlXHJcbiAgICAgICAgICAgICAgICBsZXQgdGFza0NlbGwgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJ0ZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzIDogXCJ0YXNrQ2VsbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkIDogYHRhc2tDZWxsXyR7dGFzay5pZH1gXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZHVlRGF0ZUNlbGwgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJ0ZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzIDogXCJkdWVEYXRlQ2VsbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkIDogYGR1ZURhdGVDZWxsXyR7dGFzay5pZH1gXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdGFza0VkaXRDZWxsID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwidGRcIixcclxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcyA6IFwidGFza0VkaXRDZWxsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQgOiBgdGFza0VkaXRDZWxsXyR7dGFzay5pZH1gXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdGFza0VkaXRCdXR0b24gPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJidXR0b25cIixcclxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcyA6IFwidGFza0VkaXRCdXR0b25cIixcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50IDogXCJFZGl0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQgOiBgdGFza0VkaXRCdXR0b25fJHt0YXNrLmlkfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgOiBcImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAvL2NyZWF0ZSB0YXNrIGNoZWNrYm94IGFuZCB0aXRsZVxyXG4gICAgICAgICAgICAgICAgbGV0IHRhc2tMYWJlbCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImxhYmVsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgOiBcInRhc2tMYWJlbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkIDogYHRhc2tMYWJlbF8ke3Rhc2suaWR9YFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAvL2NyZWF0ZSB0YXNrIHRpdGxlXHJcbiAgICAgICAgICAgICAgICBsZXQgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYCR7dGFzay50YXNrfWApO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vY3JlYXRlIHRhc2sgY2hlY2tib3hcclxuICAgICAgICAgICAgICAgIGxldCB0YXNrQ2hlY2tib3ggPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJpbnB1dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzIDogXCJ0YXNrQ2hlY2tib3hcIixcclxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZCA6IGB0YXNrQ2hlY2tib3hfJHt0YXNrLmlkfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgOiBcImNoZWNrYm94XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlIDogYCR7dGFzay50YXNrfWBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLy9jcmVhdGUgdGFzayBkdXRlIGRhdGVcclxuICAgICAgICAgICAgICAgIGxldCBkdWVEYXRlQXJyYXkgPSBuZXcgRGF0ZSh0YXNrLmV4cGVjdGVkQ29tcGxldGlvbkRhdGUpLnRvRGF0ZVN0cmluZygpLnNwbGl0KFwiIFwiKVxyXG4gICAgICAgICAgICAgICAgbGV0IGR1ZURhdGUgPSBgJHtkdWVEYXRlQXJyYXlbMV19ICR7ZHVlRGF0ZUFycmF5WzJdfSAke2R1ZURhdGVBcnJheVszXX1gXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCB0YXNrRHVlRGF0ZSA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcInBcIixcclxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcyA6IFwidGFza0R1ZURhdGVcIixcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50IDogZHVlRGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZCA6IGB0YXNrRHVlRGF0ZV8ke3Rhc2suaWR9YFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgLy9hcHBlbmQgLS0gb3JkZXIgaXMgaW1wb3J0YW50IGZvciBjaGVja2JveCBhbmQgbGFiZWwgdG8gZW5zdXJlIGJveCBpbiBvbiB0aGUgbGVmdFxyXG4gICAgICAgICAgICAgICAgdGFza0NoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgdGFza3NFdmVudExpc3RlbmVycy5tYXJrVGFza0NvbXBsZXRlKVxyXG4gICAgICAgICAgICAgICAgdGFza0VkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRhc2tzRXZlbnRMaXN0ZW5lcnMudGFza0VkaXRCdXR0b24pXHJcbiAgICAgICAgICAgICAgICB0YXNrTGFiZWwuYXBwZW5kQ2hpbGQodGFza0NoZWNrYm94KTtcclxuICAgICAgICAgICAgICAgIHRhc2tMYWJlbC5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgdGFza0NlbGwuYXBwZW5kQ2hpbGQodGFza0xhYmVsKTtcclxuICAgICAgICAgICAgICAgIGR1ZURhdGVDZWxsLmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlKTtcclxuICAgICAgICAgICAgICAgIHRhc2tFZGl0Q2VsbC5hcHBlbmRDaGlsZCh0YXNrRWRpdEJ1dHRvbik7XHJcbiAgICAgICAgICAgICAgICB0YXNrUm93LmFwcGVuZENoaWxkKHRhc2tDZWxsKTtcclxuICAgICAgICAgICAgICAgIHRhc2tSb3cuYXBwZW5kQ2hpbGQoZHVlRGF0ZUNlbGwpO1xyXG4gICAgICAgICAgICAgICAgdGFza1Jvdy5hcHBlbmRDaGlsZCh0YXNrRWRpdENlbGwpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkVGFza3NUYWJsZS5hcHBlbmRDaGlsZCh0YXNrUm93KTtcclxuICAgICAgICAgICAgICAgICAgICB0YXNrQ2hlY2tib3guc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLCBcIlwiKVxyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlVGFza3NUYWJsZS5hcHBlbmRDaGlsZCh0YXNrUm93KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRhc2tzO1xyXG4iLCJpbXBvcnQgbm9tYWREYXRhIGZyb20gXCIuL25vbWFkRGF0YVwiO1xyXG5pbXBvcnQgdGFza3MgZnJvbSBcIi4vdGFza3NcIjtcclxuaW1wb3J0IGRvbUNvbXBvbmVudHMgZnJvbSBcIi4vZG9tQ29tcG9uZW50c1wiXHJcblxyXG5jb25zdCB0YXNrc0V2ZW50TGlzdGVuZXJzID0ge1xyXG5cclxuICAgIGNyZWF0ZU5ld1Rhc2soKSB7XHJcblxyXG4gICAgICAgIGxldCB0YXNrVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tUaXRsZUlucHV0XCIpLnZhbHVlO1xyXG4gICAgICAgIGxldCBkdWVEYXRlRmllbGRWYWxpdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tEYXRlSW5wdXRcIikudmFsdWU7XHJcbiAgICAgICAgbGV0IHVzZXJJZCA9IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKSk7XHJcblxyXG4gICAgICAgIGxldCBkdWVEYXRlQXJyYXkgPSBkdWVEYXRlRmllbGRWYWxpdWUuc3BsaXQoXCItXCIpXHJcbiAgICAgICAgbGV0IGR1ZURhdGUgPSBgJHtkdWVEYXRlQXJyYXlbMV19ICR7ZHVlRGF0ZUFycmF5WzJdfSAke2R1ZURhdGVBcnJheVswXX1gO1xyXG5cclxuICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XHJcblxyXG4gICAgICAgICAgICBkYXRhU2V0IDogXCJ0YXNrc1wiLFxyXG4gICAgICAgICAgICBmZXRjaFR5cGUgOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgZGF0YUJhc2VPYmplY3QgOiB7XHJcbiAgICAgICAgICAgICAgICB1c2VySWQgOiB1c2VySWQsXHJcbiAgICAgICAgICAgICAgICB0YXNrIDogdGFza1RpdGxlLFxyXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWRDb21wbGV0aW9uRGF0ZSA6IGR1ZURhdGUsXHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZSA6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbihzaGl0ID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc2hpdClcclxuICAgICAgICAgICAgJChcIiNvdXRwdXRcIikuZW1wdHkoKVxyXG4gICAgICAgICAgICB0YXNrcy5jcmVhdGVUYXNrVGFibGVzKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcblxyXG4gICAgbWFya1Rhc2tDb21wbGV0ZSgpIHtcclxuICAgICAgICBsZXQgdGFza1RvRWRpdElkID0gZXZlbnQudGFyZ2V0LmlkLnNwbGl0KFwiX1wiKVsxXTtcclxuXHJcbiAgICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xyXG5cclxuICAgICAgICAgICAgZGF0YVNldCA6IFwidGFza3NcIixcclxuICAgICAgICAgICAgZmV0Y2hUeXBlIDogXCJHRVRcIixcclxuICAgICAgICAgICAgZW1iZWRJdGVtIDogYD8maWQ9JHt0YXNrVG9FZGl0SWR9YFxyXG4gICAgICAgIH0pLnRoZW4ocGFyc2VkVGFza3MgPT4ge1xyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCB0YXNrSWQgPSBwYXJzZWRUYXNrc1swXS5pZDtcclxuICAgICAgICAgICAgbGV0IHVzZXJJZCA9IHBhcnNlZFRhc2tzWzBdLnVzZXJJZDtcclxuICAgICAgICAgICAgbGV0IHRhc2sgPSBwYXJzZWRUYXNrc1swXS50YXNrO1xyXG4gICAgICAgICAgICBsZXQgZXhwZWN0ZWRDb21wbGV0aW9uRGF0ZSA9IHBhcnNlZFRhc2tzWzBdLmV4cGVjdGVkQ29tcGxldGlvbkRhdGU7XHJcbiAgICAgICAgICAgIGxldCBjb21wbGV0ZSA9IHBhcnNlZFRhc2tzWzBdLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2codGFza0lkLCB1c2VySWQsIHRhc2ssIGV4cGVjdGVkQ29tcGxldGlvbkRhdGUsIGNvbXBsZXRlKVxyXG5cclxuICAgICAgICAgICAgaWYgKGNvbXBsZXRlKSB7XHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29tcGxldGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xyXG4gICAgICAgICAgICAgICAgcHV0SWQgOiB0YXNrVG9FZGl0SWQsXHJcbiAgICAgICAgICAgICAgICBkYXRhU2V0IDogXCJ0YXNrc1wiLFxyXG4gICAgICAgICAgICAgICAgZmV0Y2hUeXBlIDogXCJQVVRcIixcclxuICAgICAgICAgICAgICAgIGRhdGFCYXNlT2JqZWN0IDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB0YXNrSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcklkIDogdXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgIHRhc2sgOiB0YXNrLFxyXG4gICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkQ29tcGxldGlvbkRhdGU6IGV4cGVjdGVkQ29tcGxldGlvbkRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGNvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLnRoZW4oc2hpdCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzaGl0KVxyXG4gICAgICAgICAgICAgICAgJChcIiNvdXRwdXRcIikuZW1wdHkoKVxyXG4gICAgICAgICAgICAgICAgdGFza3MuY3JlYXRlVGFza1RhYmxlcygpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcblxyXG4gICAgdGFza0VkaXRCdXR0b24oKSB7XHJcblxyXG4gICAgICAgIGxldCBudW1iZXIgPSBldmVudC5jdXJyZW50VGFyZ2V0LmlkO1xyXG4gICAgICAgIGxldCB0YXNrQXJyYXkgPSBudW1iZXIuc3BsaXQoXCJfXCIpO1xyXG4gICAgICAgIGxldCB0YXNrSWQgPSB0YXNrQXJyYXlbMV07XHJcblxyXG4gICAgICAgIGxldCB0YXNrQ2VsbFRvRW1wdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdGFza0NlbGxfJHt0YXNrSWR9YCk7XHJcbiAgICAgICAgbGV0IHRhc2tMYWJsZVRvUmVtb3ZlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRhc2tMYWJlbF8ke3Rhc2tJZH1gKTtcclxuICAgICAgICBsZXQgZHVlRGF0ZUNlbGxUb0VtcHR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGR1ZURhdGVDZWxsXyR7dGFza0lkfWApO1xyXG4gICAgICAgIGxldCBkdWVEYXRlVG9SZW1vdmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdGFza0R1ZURhdGVfJHt0YXNrSWR9YCk7XHJcbiAgICAgICAgbGV0IHRhc2tFZGl0Q2VsbFRvRW1wdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdGFza0VkaXRDZWxsXyR7dGFza0lkfWApO1xyXG4gICAgICAgIGxldCB0YXNrRWRpdEJ1dHRvblRvUmVtb3ZlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRhc2tFZGl0QnV0dG9uXyR7dGFza0lkfWApO1xyXG5cclxuICAgICAgICBsZXQgdGFza1RvRWRpdFRleHQgPSB0YXNrTGFibGVUb1JlbW92ZS5pbm5lclRleHQ7XHJcbiAgICAgICAgY29uc29sZS5sb2codGFza1RvRWRpdFRleHQpXHJcblxyXG4gICAgICAgIGxldCB0YXNrVG9FZGl0VGl0bGUgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xyXG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwiaW5wdXRcIixcclxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcInRhc2tUb0VkaXRUaXRsZVwiLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xyXG4gICAgICAgICAgICAgICAgaWQgOiBgdGFza1RvRWRpdFRpdGxlXyR7dGFza0lkfWAsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA6IGAke3Rhc2tUb0VkaXRUZXh0fWBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGxldCB0YXNrRHVlRGF0ZVRvRWRpdCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJpbnB1dFwiLFxyXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwidGFza0R1ZURhdGVUb0VkaXRcIixcclxuICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcclxuICAgICAgICAgICAgICAgIGlkIDogYHRhc2tEdWVEYXRlVG9FZGl0XyR7dGFza0lkfWAsXHJcbiAgICAgICAgICAgICAgICB0eXBlIDogXCJkYXRlXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGxldCBlZGl0ZWRUYXNrU3VibWl0QnV0dG9uID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcclxuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImJ1dHRvblwiLFxyXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwiZWRpdGVkVGFza1N1Ym1pdEJ1dHRvblwiLFxyXG4gICAgICAgICAgICBjb250ZW50IDogXCJTdW1iaXRcIixcclxuICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcclxuICAgICAgICAgICAgICAgIGlkIDogYGVkaXRlZFRhc2tTdWJtaXRCdXR0b25fJHtudW1iZXJ9YCxcclxuICAgICAgICAgICAgICAgIHR5cGUgOiBcImJ1dHRvblwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0YXNrQ2VsbFRvRW1wdHkucmVtb3ZlQ2hpbGQodGFza0xhYmxlVG9SZW1vdmUpO1xyXG4gICAgICAgIHRhc2tDZWxsVG9FbXB0eS5hcHBlbmRDaGlsZCh0YXNrVG9FZGl0VGl0bGUpXHJcbiAgICAgICAgZHVlRGF0ZUNlbGxUb0VtcHR5LnJlbW92ZUNoaWxkKGR1ZURhdGVUb1JlbW92ZSk7XHJcbiAgICAgICAgZHVlRGF0ZUNlbGxUb0VtcHR5LmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlVG9FZGl0KTtcclxuICAgICAgICB0YXNrRWRpdENlbGxUb0VtcHR5LnJlbW92ZUNoaWxkKHRhc2tFZGl0QnV0dG9uVG9SZW1vdmUpO1xyXG4gICAgICAgIHRhc2tFZGl0Q2VsbFRvRW1wdHkuYXBwZW5kQ2hpbGQoZWRpdGVkVGFza1N1Ym1pdEJ1dHRvbik7XHJcbiAgICAgICAgZWRpdGVkVGFza1N1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGFza3NFdmVudExpc3RlbmVycy5zYXZlVGFza0VkaXQpXHJcblxyXG4gICAgfSxcclxuICAgIHNhdmVUYXNrRWRpdCgpIHtcclxuICAgICAgICBsZXQgdGFza051bWJlciA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQ7XHJcbiAgICAgICAgbGV0IHRhc2tBcnJheSA9IHRhc2tOdW1iZXIuc3BsaXQoXCJfXCIpO1xyXG4gICAgICAgIGxldCB0YXNrSWQgPSB0YXNrQXJyYXlbMl07XHJcbiAgICAgICAgbGV0IHRhc2tFZGl0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdGFza1RvRWRpdFRpdGxlXyR7dGFza0lkfWApLnZhbHVlO1xyXG4gICAgICAgIGxldCB0YXNrRWRpdERhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdGFza0R1ZURhdGVUb0VkaXRfJHt0YXNrSWR9YCkudmFsdWU7XHJcblxyXG4gICAgICAgIGxldCBkdWVEYXRlQXJyYXkgPSB0YXNrRWRpdERhdGUuc3BsaXQoXCItXCIpXHJcbiAgICAgICAgbGV0IGR1ZURhdGUgPSBgJHtkdWVEYXRlQXJyYXlbMV19ICR7ZHVlRGF0ZUFycmF5WzJdfSAke2R1ZURhdGVBcnJheVswXX1gO1xyXG5cclxuXHJcbiAgICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xyXG5cclxuICAgICAgICAgICAgcHV0SWQgOiB0YXNrSWQsXHJcbiAgICAgICAgICAgIGRhdGFTZXQgOiBcInRhc2tzXCIsXHJcbiAgICAgICAgICAgIGZldGNoVHlwZSA6IFwiUFVUXCIsXHJcbiAgICAgICAgICAgIGRhdGFCYXNlT2JqZWN0IDoge1xyXG4gICAgICAgICAgICAgICAgdXNlcklkIDogTnVtYmVyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIikpLFxyXG4gICAgICAgICAgICAgICAgdGFzazogdGFza0VkaXRJbnB1dCxcclxuICAgICAgICAgICAgICAgIGV4cGVjdGVkQ29tcGxldGlvbkRhdGU6IGR1ZURhdGUsXHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZSA6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS50aGVuKHNoaXQgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzaGl0KVxyXG4gICAgICAgICAgICAkKFwiI291dHB1dFwiKS5lbXB0eSgpO1xyXG4gICAgICAgICAgICB0YXNrcy5jcmVhdGVUYXNrVGFibGVzKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCB0YXNrc0V2ZW50TGlzdGVuZXJzOyIsImltcG9ydCBkb21Db21wb25lbnRzIGZyb20gXCIuL2RvbUNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHRhc2tzRXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vdGFza3NFdmVudExpc3RlbmVyc1wiO1xyXG5cclxuY29uc3QgdGFza3NQb3B1cCA9IHtcclxuXHJcbiAgICBjcmVhdGVOZXdUYXNrRm9ybSgpIHtcclxuICAgICAgICBsZXQgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tzQ29udGFpbmVyXCIpO1xyXG4gICAgICAgIGxldCB0YXNrUG9wdXBEaXYgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xyXG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwiZGl2XCIsXHJcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJ0YXNrUG9wdXBEaXZcIixcclxuICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcclxuICAgICAgICAgICAgICAgIGlkIDogXCJ0YXNrUG9wdXBEaXZcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBuZXdUYXNrRm9ybSA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJkaXZcIixcclxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcIm5ld1Rhc2tGb3JtXCIsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XHJcbiAgICAgICAgICAgICAgICBpZCA6IFwibmV3VGFza0Zvcm1cIixcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgbmV3VGFza0Zvcm1UaXRsZSA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJoMlwiLFxyXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwibmV3VGFza0Zvcm1UaXRsZVwiLFxyXG4gICAgICAgICAgICBjb250ZW50IDogXCJDcmVhdGUgQSBOZXcgVGFza1wiLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xyXG4gICAgICAgICAgICAgICAgaWQgOiBcIm5ld1Rhc2tGb3JtVGl0bGVcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBob3Jpem9udGFsTGluZSA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCAoe1xyXG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwiaHJcIlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgdGFza1RpdGxlSW5wdXQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQgKHtcclxuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImlucHV0XCIsXHJcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJ0YXNrVGl0bGVJbnB1dFwiLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xyXG4gICAgICAgICAgICAgICAgaWQgOiBcInRhc2tUaXRsZUlucHV0XCIsXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciA6IFwiRW50ZXIgbmV3IHRhc2sgdGl0bGVcIixcclxuICAgICAgICAgICAgICAgIHR5cGUgOiBcInRleHRcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCB0YXNrRGF0ZUlucHV0ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50ICh7XHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJpbnB1dFwiLFxyXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwidGFza0RhdGVJbnB1dFwiLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xyXG4gICAgICAgICAgICAgICAgaWQgOiBcInRhc2tEYXRlSW5wdXRcIixcclxuICAgICAgICAgICAgICAgIHR5cGUgOiBcImRhdGVcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBzdWJtaXROZXdUYXNrQnV0dG9uID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50ICh7XHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJidXR0b25cIixcclxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcInN1Ym1pdE5ld1Rhc2tCdXR0b25cIixcclxuICAgICAgICAgICAgY29udGVudCA6IFwiU3VibWl0XCIsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XHJcbiAgICAgICAgICAgICAgICBpZCA6IFwic3VibWl0TmV3VGFza0J1dHRvblwiLFxyXG4gICAgICAgICAgICAgICAgdHlwZSA6IFwiYnV0dG9uXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzdWJtaXROZXdUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0YXNrc0V2ZW50TGlzdGVuZXJzLmNyZWF0ZU5ld1Rhc2spXHJcbiAgICAgICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQobmV3VGFza0Zvcm1UaXRsZSk7XHJcbiAgICAgICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQoaG9yaXpvbnRhbExpbmUpO1xyXG4gICAgICAgIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tUaXRsZUlucHV0KTtcclxuICAgICAgICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrRGF0ZUlucHV0KTtcclxuICAgICAgICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZChzdWJtaXROZXdUYXNrQnV0dG9uKTtcclxuICAgICAgICB0YXNrUG9wdXBEaXYuYXBwZW5kQ2hpbGQobmV3VGFza0Zvcm0pO1xyXG4gICAgICAgIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tQb3B1cERpdik7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHRhc2tzUG9wdXA7Il19
