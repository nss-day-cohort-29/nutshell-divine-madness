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

    _friends.default.buildFriendSearchBar(); //appendUserEvent


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
  },

  handleEventSaveButton() {
    const nameInputted = document.querySelector("#eventName").value;
    const dateInputted = document.querySelector("#eventDate").value;
    const timeInputted = document.querySelector("#eventTime").value;
    const locationInputted = document.querySelector("#eventLocation").value;
    const eventObject = {
      eventName: nameInputted,
      eventDate: dateInputted,
      eventTime: timeInputted,
      eventLocation: locationInputted
    };

    _nomadData.default.connectToData({
      dataSet: "events",
      fetchType: "POST",
      dataBaseObject: {
        userId: sessionStorage.getItem("userId"),
        eventName: eventObject.eventName,
        eventDate: eventObject.eventDate,
        eventTime: eventObject.eventTime,
        eventLocation: eventObject.eventLocation
      }
    }).then(() => {
      _events.default.appendUserEvents();
    });
  },

  handleEventDeleteButton() {
    const idToDelete = event.target.id.split("--")[1];

    _nomadData.default.connectToData({
      deleteId: idToDelete,
      dataSet: "events",
      fetchType: "DELETE",
      dataBaseObject: {
        userId: sessionStorage.getItem("userId")
      }
    }).then(() => {
      _events.default.appendUserEvents();
    });
  },

  handleEventEditButton() {
    const idToEdit = event.target.id.split("--")[1]; // const eventObject =

    _domComponents.default.createEventEditInput(idToEdit);
  },

  handleEventUpdateButton() {}

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
    const output = document.querySelector("#output");
    const showButton = document.querySelector("#showForm");
    output.removeChild(showButton);

    const eventForm = _events.default.createEventInput();

    output.insertBefore(eventForm, output.firstChild);
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
    const output = document.querySelector("#output");
    const formContainer = document.querySelector(".eventInput");
    output.removeChild(formContainer);

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
    $("#output").empty();
    const output = document.querySelector("#output");
    const eventsForm = this.createEventInput();
    output.appendChild(eventsForm);
    const eventLog = document.createElement("article");
    eventLog.setAttribute("id", "eventLog");
    output.appendChild(eventLog);
  },

  addShowButton() {
    const output = document.querySelector("#output");

    const showButton = _domComponents.default.createDomElement({
      elementType: "button",
      content: "Create a New Event",
      attributes: {
        type: "button",
        id: "showForm"
      }
    });

    showButton.addEventListener("click", _eventPageListeners.default.handleShowButton);
    output.insertBefore(showButton, output.firstChild);
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
    const formContainer = document.querySelector("#output");

    const formHeader = _domComponents.default.createDomElement({
      elementType: "h2",
      content: "Add a New Event:"
    });

    formContainer.appendChild(formHeader);

    const eventForm = _domComponents.default.createDomElement({
      elementType: "form",
      attributes: {
        class: "eventInput"
      }
    });

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
      content: "Enter Location:",
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
    formContainer.appendChild(eventForm);
    eventForm.appendChild(nameFieldset);
    eventForm.appendChild(dateFieldset);
    eventForm.appendChild(timeFieldset);
    eventForm.appendChild(locationFieldset);
    eventForm.appendChild(saveButton);
    eventForm.appendChild(hideButton); // formContainer.appendChild(eventForm)

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
    }

    ;
    return eventItem;
  },

  createEventEditInput(containerId, eventObject) {
    const formContainer = _domComponents.default.createDomElement({
      elementType: "form",
      attribues: {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2Rhc2hib2FyZC5qcyIsIi4uL3NjcmlwdHMvZG9tQ29tcG9uZW50cy5qcyIsIi4uL3NjcmlwdHMvZG9tUmVuZGVyZXIuanMiLCIuLi9zY3JpcHRzL2V2ZW50TGlzdGVuZXJzLmpzIiwiLi4vc2NyaXB0cy9ldmVudFBhZ2VMaXN0ZW5lcnMuanMiLCIuLi9zY3JpcHRzL2V2ZW50cy5qcyIsIi4uL3NjcmlwdHMvZnJpZW5kcy5qcyIsIi4uL3NjcmlwdHMvZnJpZW5kc0V2ZW50c0xpc3RlbmVyLmpzIiwiLi4vc2NyaXB0cy9tZXNzYWdlcy5qcyIsIi4uL3NjcmlwdHMvbWVzc2FnZXNFdmVudExpc3RlbmVycy5qcyIsIi4uL3NjcmlwdHMvbmV3cy5qcyIsIi4uL3NjcmlwdHMvbm9tYWREYXRhLmpzIiwiLi4vc2NyaXB0cy90YXNrcy5qcyIsIi4uL3NjcmlwdHMvdGFza3NFdmVudExpc3RlbmVycy5qcyIsIi4uL3NjcmlwdHMvdGFza3NQb3B1cC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUNBQTs7OztBQUNBLE1BQU0sU0FBUyxHQUFHO0FBQ2hCLEVBQUEsY0FBYyxHQUFFO0FBQ2Q7QUFDQSxRQUFJLFFBQVEsR0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BQWhCO0FBcUNFLElBQUEsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhLElBQWIsQ0FBa0IsUUFBbEI7O0FBQ0EsNEJBQWUscUJBQWY7O0FBQ0EsSUFBQSxDQUFDLENBQUMsUUFBRCxDQUFELENBQVksS0FBWixDQUFrQix3QkFBZSxTQUFqQztBQUNBLElBQUEsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUIsS0FBckIsQ0FBMkIsd0JBQWUsZ0JBQTFDO0FBQ0EsSUFBQSxDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQixLQUFyQixDQUEyQixLQUFLLGNBQWhDLEVB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QWxFO0FBQ0EsSUFBQSxXQUFXLENBQUMsV0FBWixDQUF3QixnQkFBeEI7QUFDQSxJQUFBLFdBQVcsQ0FBQyxXQUFaLENBQXdCLGNBQXhCO0FBQ0EsSUFBQSxXQUFXLENBQUMsV0FBWixDQUF3QixjQUF4QjtBQUNBLElBQUEsV0FBVyxDQUFDLFdBQVosQ0FBd0IsYUFBeEI7QUFDQSxJQUFBLFdBQVcsQ0FBQyxXQUFaLENBQXdCLG1CQUF4QjtBQUNBLElBQUEsWUFBWSxDQUFDLFdBQWIsQ0FBeUIsV0FBekI7QUFDQSxJQUFBLGNBQWMsQ0FBQyxXQUFmLENBQTJCLFlBQTNCO0FBQ0g7O0FBdEVjLENBQW5CO2VBeUVlLFUiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgZXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vZXZlbnRMaXN0ZW5lcnNcIlxuY29uc3QgZGFzaGJvYXJkID0ge1xuICBidWlsZExvZ2luRm9ybSgpe1xuICAgIC8vdXNpbmcgc3RyaW5nIGludGVycG9sYXRpb24gdG8gY3JlYXRlIHRoZSBmb3JtXG4gICAgbGV0IGZvcm1IVE1MID0gYFxuICAgIDxoMSBjbGFzcyA9IFwidC1ib3JkZXJcIj5Ob21hZHM8L2gxPlxuICAgICAgPHNlY3Rpb24gY2xhc3MgPSBcImZvcm1cIj5cbiAgICAgICAgPGZvcm0gYWN0aW9uPVwiXCIgY2xhc3MgPSByZWdpc3RlckZvcm0+XG4gICAgICAgICAgPGlucHV0IGlkID0gXCJyZWdVc2VyTmFtZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXIgPSBcIlVzZXJuYW1lXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgPGlucHV0IGlkID0gXCJyZWdFbWFpbFwiIHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyID0gXCJFbWFpbFwiIHJlcXVpcmVkPlxuICAgICAgICAgIDxpbnB1dCBpZCA9IFwicmVnUGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlciA9IFwiUGFzc3dvcmRcIiByZXF1aXJlZD5cbiAgICAgICAgICA8aW5wdXQgaWQgPSBcInJlZ0NvbmZpcm1QYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyID0gXCJDb25maXJtIFBhc3N3b3JkXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgPGJ1dHRvbiBpZCA9IFwicmVnaXN0ZXJCdXR0b25cIj5DcmVhdGUgQWNjb3VudDwvYnV0dG9uPlxuICAgICAgICAgIDxwIGNsYXNzID0gXCJtZXNzYWdlXCI+QWxyZWFkeSBhIFJlZ2lzdGVyZWQgTWVtYmVyPyA8YSBocmVmID0gXCIjXCI+TG9nSW4gPC9hPjwvcD5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8Zm9ybSBjbGFzcyA9IFwibG9naW4tZm9ybVwiPlxuICAgICAgICAgIDxpbnB1dCBpZCA9IFwidXNlck5hbWVWYWxcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyID0gXCJVc2VybmFtZVwiPlxuICAgICAgICAgIDxpbnB1dCBpZCA9IFwicGFzc3dvcmRWYWxcIiB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlciA9IFwiUGFzc3dvcmRcIj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGUgPSBcImJ1dHRvblwiIGlkID0gXCJsb2dJblwiPkxvZ2luPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBpZCA9IFwibW9kYWxCdXR0b25cIj5Ob21hZHMgTWlzc2lvbjwvYnV0dG9uPlxuICAgICAgICAgIDxwIGNsYXNzID0gXCJtZXNzYWdlXCI+RG9uJ3QgaGF2ZSBhbiBhY2NvdW50PyA8YSBocmVmID0gXCIjXCI+UmVnaXN0ZXI8L2E+PC9wPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiBpZD1cIm5vbWFkTW9kYWxcIiBjbGFzcz1cIm1vZGFsXCI+XG4gICAgICA8IS0tIE1vZGFsIGNvbnRlbnQgLS0+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNsb3NlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICAgIDxoMj5UaGUgUHVycG9zZSBCZWhpbmQgTm9tYWRzPC9oMj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICA8aDM+VGhlIG1pbmRzIGJlaGluZyBOb21hZHM8L2gzPlxuICAgICAgICAgICAgPGltZyBpZCA9IFwiY3JlYXRvcnNJbWFnZVwiIHNyYyA9IFwiaW1hZ2VzL25vbWFkQ3JlYXRvcnMuanBnXCIgYWx0ID0gXCJhcHBsaWNhdGlvbiBjcmVhdG9yc1wiPlxuICAgICAgICAgICAgPHA+QXMgb3V0ZG9vcnNtYW4sIGVudmlyb25tZW50YWxpc3QsIGFuZCBmaWxtbWFrZXJzIGNvbnRpbnVlIHRvIGdyb3cuIFNvIGRvIHRoZSBhZHZlbnR1cm91cyBzcGlyaXRzIG9mIHRob3NlIHdobyBlbWJyYWNlIGNvbnNjaW91cyBjb25zdW1lcmlzbSBhbmQgc3VzdGFpbmFibGUgbGl2aW5nLiBUaGUgcHVycG9zZSBpcyB0byBtYWtlIGEgcG9pbnQgb2YgcGx1Z2dpbmcgaW50byBtb2Rlcm4gbGlmZSBhbmQgY29ubmVjdGluZyB3aXRoIHlvdXIgZmVsbG93IG5vbWFkcyBmcm9tIGFueXdoZXJlIHlvdSBtYXkgYmUuIFNoYXJlIHlvdXIgbG9jYXRpb24sIE1lZXQgdXAsIEV4Y2hhbmdlIHN0b3JpZXMsIENyZWF0ZSByZWxhdGlvbnNoaXBzIHdpdGggcGVvcGxlIHdobyBoYXZlIHNpbWlsYXIgaW50ZXJlc3QgYW5kIGVuaGFuY2UgeW91ciB0cmF2ZWxpbmcgZXhwZXJpZW5jZSB3aXRoIG5vbWFkcy48L3A+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgICAgICAgICA8aDM+Q3JlYXRlZCBCeTogRGl2aW5lIE1hZG5lc3MmY29weTwvaDM+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICBgXG4gICAgICAkKFwiI291dHB1dFwiKS5odG1sKGZvcm1IVE1MKVxuICAgICAgZXZlbnRMaXN0ZW5lcnMubW9kYWxEaXNwbGF5QW5pbWF0aW9uKClcbiAgICAgICQoXCIjbG9nSW5cIikuY2xpY2soZXZlbnRMaXN0ZW5lcnMudXNlckxvZ2luKVxuICAgICAgJChcIiNyZWdpc3RlckJ1dHRvblwiKS5jbGljayhldmVudExpc3RlbmVycy51c2VyUmVnaXN0cmF0aW9uKVxuICAgICAgJChcIiNyZWdpc3RlckJ1dHRvblwiKS5jbGljayh0aGlzLmJ1aWxkTG9naW5Gb3JtKVxuICAgICAgLy8gJChcIiNyZWdpc3RlckJ1dHRvblwiKS5jbGljayhldmVudExpc3RlbmVycy51c2VyTG9naW4pXG5cbiAgICB9LFxuICBjcmVhdGVOYXZCYXIoKXtcbiAgICBsZXQgbmF2SFRNTCA9IGBcbiAgICAgIDxuYXY+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGkgaWQgPSBcIm5ld3NMaW5rXCI+PGEgY2xhc3MgPSBcImFjdGl2ZVwiIGhyZWYgPSBcIiNcIj5BcnRpY2xlczwvYT48L2xpPlxuICAgICAgICAgIDxsaSBpZCA9IFwiZXZlbnRMaW5rXCI+PGEgaHJlZiA9IFwiI1wiPkV2ZW50czwvYT48L2xpPlxuICAgICAgICAgIDxsaSBpZCA9IFwidGFza3NMaW5rXCI+PGEgaHJlZiA9IFwiI1wiPlRhc2tzPC9hPjwvbGk+XG4gICAgICAgICAgPGxpIGlkID0gXCJmcmllbmRzTGlua1wiPjxhIGhyZWYgPSBcIiNcIj5GcmllbmRzPC9hPjwvbGk+XG4gICAgICAgICAgPGxpIGlkID0gXCJtZXNzYWdlc0xpbmtcIj48YSBocmVmID0gXCIjXCI+TWVzc2FnZXM8L2E+PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3MgPSBcInNpZ25PdXRcIiBpZCA9IFwibG9nb1wiID48YSBocmVmPVwiI1wiPlNpZ24gT3V0PC9hPjwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L25hdj5cbiAgICBgXG4gICAgbGV0IG5hdkJhckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi1uYXZcIilcbiAgICBuYXZCYXJDb250YWluZXIuaW5uZXJIVE1MID0gbmF2SFRNTFxuXG4gICAgLypOYXZpZ2F0aW9uIGxpbmsgZXZlbnQgbGlzdGVuZXJzKi9cbiAgICAkKFwiI21lc3NhZ2VzTGlua1wiKS5jbGljayhldmVudExpc3RlbmVycy5tZXNzYWdlc05hdkxpbmspXG4gICAgJChcIiNldmVudExpbmtcIikuY2xpY2soZXZlbnRMaXN0ZW5lcnMuZXZlbnRzTmF2TGluaylcbiAgICAkKFwiI2ZyaWVuZHNMaW5rXCIpLmNsaWNrKGV2ZW50TGlzdGVuZXJzLmZyaWVuZHNOYXZMaW5rKVxuICAgICQoXCIjdGFza3NMaW5rXCIpLmNsaWNrKGV2ZW50TGlzdGVuZXJzLnRhc2tzTmF2TGluaylcbiAgICAkKFwiI25ld3NMaW5rXCIpLmNsaWNrKGV2ZW50TGlzdGVuZXJzLm5ld3NOYXZMaW5rKVxuXG4gICAgLyphZnRlciBzaWdub3V0IGlzIGNsaWNrZWQgc2Vzc2lvbiBzdG9yYWdlIGlzIGNsZWFyZWQgYW5kIHRoZSBsb2dJbi9yZWdpc3RlciBmb3JtIGlzIHByZXNlbnRlZCBmcm9tIGhlcmVcbiAgICBhbm90aGVyIHVzZXIgY2FuIGxvZyBpbiBhbmQgc2Vzc2lvbiBzdG9yYWdlIHdpbGwga2ljayBvZmYgZm9yIHRoZSBuZXcgbG9nZ2VkIGluIHVzZXIqL1xuICAgICQoXCIuc2lnbk91dFwiKS5jbGljayhldmVudExpc3RlbmVycy5ub21hZE5hdkxpbmspXG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgZGFzaGJvYXJkIiwiY29uc3QgZG9tQ29tcG9uZW50cyA9IHtcbiAgY3JlYXRlRG9tRWxlbWVudCh7IGVsZW1lbnRUeXBlLCBjb250ZW50ID0gbnVsbCwgY3NzQ2xhc3MsIGF0dHJpYnV0ZXMgPSB7fSB9KSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudFR5cGUpO1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgIGlmIChjc3NDbGFzcykge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzKTtcbiAgICB9XG4gICAgZm9yIChsZXQga2V5IGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBkb21Db21wb25lbnRzIiwiaW1wb3J0IGV2ZW50cyBmcm9tIFwiLi9ldmVudHNcIjtcblxuaW1wb3J0IG5vbWFkRGF0YSBmcm9tIFwiLi9ub21hZERhdGFcIjtcbmltcG9ydCBmcmllbmRzIGZyb20gXCIuL2ZyaWVuZHNcIjtcbmltcG9ydCBuZXdzIGZyb20gXCIuL25ld3NcIlxuaW1wb3J0IG1lc3NhZ2VzIGZyb20gXCIuL21lc3NhZ2VzXCI7XG5pbXBvcnQgZGFzaEJvYXJkIGZyb20gXCIuL2Rhc2hib2FyZFwiXG4vLyBpbXBvcnQgZG9tQ29tcG9uZW50cyBmcm9tIFwiLi9kb21Db21wb25lbnRzXCI7XG5pbXBvcnQgZXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vZXZlbnRMaXN0ZW5lcnNcIjtcblxuLy9CVUlMRFMgTkFJR0FUSU9OQkFSLy9cbi8vIGRvbUNvbXBvbmVudHMuY3JlYXRlTmF2QmFyKClcbmRhc2hCb2FyZC5idWlsZExvZ2luRm9ybSgpXG4kKFwibW9kYWxCdXR0b25cIikuY2xpY2soZXZlbnRMaXN0ZW5lcnMubW9kYWxEaXNwbGF5QW5pbWF0aW9uKVxuXG4vL05FV1MgU0VDVElPTlxuLy8gbmV3cy5zYXZlKCk7XG4vLyBuZXdzLmFsbFNhdmVkKCk7XG4vLyBuZXdzLmdldE5ld3MoKTtcblxuLy8gbmV3cy5uZXdzRWxlbWVudENyZWF0b3IoKTtcbi8vIG5ld3MubmV3c0VsZW1lbnRDcmVhdG9yKCk7XG5cbiIsImltcG9ydCBkYXNoYm9hcmQgZnJvbSBcIi4vZGFzaGJvYXJkXCJcbmltcG9ydCBkb21Db21wb25lbnRzIGZyb20gXCIuL2RvbUNvbXBvbmVudHNcIjtcbmltcG9ydCBub21hZERhdGEgZnJvbSBcIi4vbm9tYWREYXRhXCI7XG5pbXBvcnQgZXZlbnRzIGZyb20gXCIuL2V2ZW50c1wiO1xuaW1wb3J0IG1lc3NhZ2VzIGZyb20gXCIuL21lc3NhZ2VzXCI7XG5pbXBvcnQgZnJpZW5kcyBmcm9tIFwiLi9mcmllbmRzXCI7XG5pbXBvcnQgbmV3cyBmcm9tIFwiLi9uZXdzXCI7XG5pbXBvcnQgdGFza3MgZnJvbSBcIi4vdGFza3NcIjtcblxuY29uc3QgZXZlbnRMaXN0ZW5lcnMgPSB7XG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBMT0dJTiBGT1JNOiB1c2VyIGVudGVycyBVc2VybmFtZSBhbmQgUGFzc3dvcmQuIHdoZW4gVXNlciBjbGlja3MgbG9naW4sIHRoZSBpbnB1dCBmaWVsZCBhbmQgTk9NQURTIGhlYWRlciBkaXNhcHBlYXJcbiAgICBhbmQgdGhlIHVzZXIgd2lsbCBiZSBkaXNwbGF5ZWQgdGhlIFwiRGFzaGJvYXJkXCIgYW5kIHRoZSBuYXZpZ2F0aW9uIGJhci4gVXBvbiBsb2dpbiwgc2Vzc2lvblN0b3JhZ2UgaXMgc3RhcnRlZC4gSW4gdGhlIENvbnNvbGVcbiAgICB5b3Ugd2lsbCBiZSBhYmxlIHRvIHNlZSBXaG8gaXMgbG9nZ2VkIGluIGFuZCB3aGF0IHRoZWlyIHVzZXJJZCBpcy4gaWUuIDEsMiwzLDQgZXRjLlxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICB1c2VyTG9naW4oKXtcbiAgICAgICAgbGV0IGxvZ0luVmFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN1c2VyTmFtZVZhbFwiKS52YWx1ZVxuICAgICAgICBsZXQgcGFzc3dvcmRWYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bhc3N3b3JkVmFsXCIpLnZhbHVlXG4gICAgICAgIC8vZ2V0IHRvIGNvbXBhcmVcbiAgICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xuXG4gICAgICAgIFwiZGF0YVNldFwiIDogXCJ1c2Vyc1wiLFxuICAgICAgICBcImZldGNoVHlwZVwiIDogXCJHRVRcIixcbiAgICAgICAgXCJlbWJlZEl0ZW1cIiA6IFwiP19lbWJlZD11c2Vyc1wiXG5cbiAgICB9KS50aGVuKHBhcnNlZFVzZXJzID0+IHtcblxuICAgICAgICBwYXJzZWRVc2Vycy5mb3JFYWNoKHVzZXIgPT4ge1xuICAgICAgICAgICAgICAvKklmIGxvZ2luIGNyZWRlbnRpYWxzIG1hdGNoIHRob3NlIGluIGRhdGFiYXNlLmpzb24uIFdlIHdhbnQgdGhlIHVzZXIgdG8gYmUgZGlzcGxheWVkIHRoZWlyIFwiZGFzaGJvYWRcIlxuICAgICAgICAgICAgICBhbmQgbmF2aWdhdGlvbiBiYXIuIFNvIHdlIG5lZWQgdG8gc2V0IGRpc3BsYXkgdG8gbm9uZSBhbmQgaW52b2tlIHRoZSBmdW5jdGlvbiAtIGNyZWF0ZU5hdkJhcigpKi9cbiAgICAgICAgICAgIGlmKGxvZ0luVmFsID09PSB1c2VyLnVzZXJOYW1lICYmIHBhc3N3b3JkVmFsID09PSB1c2VyLnBhc3N3b3JkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vaGlkZXMgTk9NQUQgaGVhZGluZ1xuICAgICAgICAgICAgICAgICAgICAkKFwiLnQtYm9yZGVyXCIpLmhpZGUoKVxuICAgICAgICAgICAgICAgICAgICAvL2hpZGVzIHRoZSBmb3JtXG4gICAgICAgICAgICAgICAgICAgICQoXCIuZm9ybVwiKS5oaWRlKClcbiAgICAgICAgICAgICAgICAgICAgLy9kaXNwbGF5cyBuYXZpZ2F0aW4gYmFyXG4gICAgICAgICAgICAgICAgICAgIGRhc2hib2FyZC5jcmVhdGVOYXZCYXIoKVxuICAgICAgICAgICAgICAgICAgICAvL3Nlc3Npb24gc3RvcmFnZVxuXG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJ1c2VySWRcIiwgdXNlci5pZClcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIilcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyB2ZXJpZnlpbmcgdGhhdCBjcmVkZW50aWFscyBtYXRjaCBhbmQgdXNlciBpcyBsb2dnZWQgaW5cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb2dnZWQgaW4gYXNcIiArIFwiIFwiICsgdXNlci51c2VyTmFtZSlcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ5b3VyIHVzZXIgSUQgaXM6IFwiICsgdXNlcklkKVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgUkVHSVNUUkFUSU9OIEZPUk06IFdoZW4gcmVnaXN0ZXJpbmcgZm9yIGFuIGFjY291bnQgdGhlIHVzZXIgd2lsbCBlbnRlciBkZXNpcmVkIHVzZXJuYW1lLCBlbWFpbCwgYW5kIHBhc3N3b3JkXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgIHVzZXJSZWdpc3RyYXRpb24oKXtcbiAgICAgICAgbGV0IHJlZ1VzZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZWdVc2VyTmFtZVwiKS52YWx1ZVxuICAgICAgICBsZXQgcmVnRW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JlZ0VtYWlsXCIpLnZhbHVlXG4gICAgICAgIGxldCByZWdQYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVnUGFzc3dvcmRcIikudmFsdWVcbiAgICAgICAgLy8gbGV0IHJlZ0NvbmZpcm1QYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVnVXNlck5hbWVcIikudmFsdWVcblxuICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG5cbiAgICAgICAgICAgICAgICBcImRhdGFTZXRcIiA6IFwidXNlcnNcIixcbiAgICAgICAgICAgICAgICBcImZldGNoVHlwZVwiIDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgXCJkYXRhQmFzZU9iamVjdFwiIDoge1xuICAgICAgICAgICAgICAgICAgICBcInVzZXJOYW1lXCI6IHJlZ1VzZXJOYW1lLFxuICAgICAgICAgICAgICAgICAgICBcImVtYWlsXCI6IHJlZ0VtYWlsLFxuICAgICAgICAgICAgICAgICAgICBcInBhc3N3b3JkXCI6IHJlZ1Bhc3N3b3JkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkudGhlbihcbiAgICAgICAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcbiAgICAgICAgICAgICAgICBcImRhdGFTZXRcIiA6IFwidXNlcnNcIixcbiAgICAgICAgICAgICAgICBcImZldGNoVHlwZVwiIDogXCJHRVRcIixcbiAgICAgICAgICAgICAgICBcImVtYmVkSXRlbVwiIDogYD91c2VyTmFtZT0ke3JlZ1VzZXJOYW1lfWBcbiAgICAgICAgICAgIH0pLnRoZW4odXNlciA9PntcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyKVxuICAgICAgICAgICAgICAgIHVzZXIuZm9yRWFjaCggeCA9PntcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInVzZXJJZFwiLCB4LmlkKVxuXG4gICAgICAgICAgICAgICAgLy9oaWRlcyBOT01BRCBoZWFkaW5nXG4gICAgICAgICAgICAgICAgJChcIi50LWJvcmRlclwiKS5oaWRlKClcbiAgICAgICAgICAgICAgICAvL2hpZGVzIHRoZSBmb3JtXG4gICAgICAgICAgICAgICAgJChcIi5mb3JtXCIpLmhpZGUoKVxuICAgICAgICAgICAgICAgIC8vZGlzcGxheXMgbmF2aWdhdGluIGJhclxuICAgICAgICAgICAgICAgIGRhc2hib2FyZC5jcmVhdGVOYXZCYXIoKVxuICAgICAgICAgICAgICAgIGxldCB1c2VySWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyB2ZXJpZnlpbmcgdGhhdCBjcmVkZW50aWFscyBtYXRjaCBhbmQgdXNlciBpcyBsb2dnZWQgaW5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvZ2dlZCBpbiBhc1wiICsgXCIgXCIgKyB4LnVzZXJOYW1lKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwieW91ciB1c2VyIElEIGlzOiBcIiArIHVzZXJJZClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSkpXG4gICAgICAgIH0sXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBNT0RBTDogdXNlciB3aWxsIGNsaWNrIHRoZSBOT01BRCBNSVNTSU9OIGJ1dHRvbiBhbmQgYSBtb2RhbCB3aWxsIHBvcCB1cCBkZXNjcmliaW5nIHdoYXQgdGhlIGFwcGxpY2F0aW9uIGlzIGFib3V0XG4gICAgYW5kIHdobyBpdCBpcyB0YWlsb3JlZCB0b3dhcmRzXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgIG1vZGFsRGlzcGxheUFuaW1hdGlvbigpe1xuICAgICAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vbWFkTW9kYWxcIik7XG5cbiAgICAgICAgLy8gdGFyZ2V0IG1vZGFsIHRvIG9wZW4gaXRcbiAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxCdXR0b25cIik7XG5cbiAgICAgICAgLy8gR2V0IHRoZSA8c3Bhbj4gZWxlbWVudCB0aGF0IGNsb3NlcyB0aGUgbW9kYWxcbiAgICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2VcIilbMF07XG4gICAgICAgIC8vIFdoZW4gdGhlIHVzZXIgY2xpY2tzIHRoZSBidXR0b24sIG9wZW4gdGhlIG1vZGFsXG4gICAgICAgIGJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gV2hlbiB0aGUgdXNlciBjbGlja3Mgb24gPHNwYW4+ICh4KSwgY2xvc2UgdGhlIG1vZGFsXG4gICAgICAgIHNwYW4ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gV2hlbiB0aGUgdXNlciBjbGlja3MgYW55d2hlcmUgb3V0c2lkZSBvZiB0aGUgbW9kYWwsIGNsb3NlIGl0XG4gICAgICAgIHdpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQgPT0gbW9kYWwpIHtcbiAgICAgICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJChcIi5tZXNzYWdlIGFcIikuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgJChcImZvcm1cIikuYW5pbWF0ZSh7aGVpZ2h0OiBcInRvZ2dsZVwiLCBvcGFjaXR5OiBcInRvZ2dsZVwifSwgXCJzbG93XCIpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIE5BVkJBUiBMSSBFTElTVEVORVJTOiBXaGVuIHVzZXIgY2xpY2tzIGFuIGl0ZW0gaW4gdGhlIE5BVkJBUiB0aGUgY29udGVudCBhc3NvY2lhdGVkIHdpdGggdGhhdCB0YWIgd2lsbCBwb3B1bGF0ZSB0aGUgRE9NXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgIG1lc3NhZ2VzTmF2TGluaygpe1xuICAgICAgICBtZXNzYWdlcy5jcmVhdGVNZXNzYWdlQm9hcmQoKVxuICAgICAgICBjb25zb2xlLmxvZyhcIndvcmtpbmdcIilcbiAgICAgICAgZnJpZW5kcy5idWlsZEZyaWVuZFNlYXJjaEJhcigpXG5cbiAgICB9LFxuICAgIGV2ZW50c05hdkxpbmsoKXtcbiAgICAgICAgICAgIGV2ZW50cy5zaG93RXZlbnRGb3JtKClcbiAgICAgICAgICAgIGZyaWVuZHMuYnVpbGRGcmllbmRTZWFyY2hCYXIoKVxuICAgICAgICAgICAgLy9hcHBlbmRVc2VyRXZlbnRcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXZlbnRzIGNsaWNrZWRcIilcbiAgICB9LFxuICAgIGZyaWVuZHNOYXZMaW5rKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZnJpZW5kcyBuYXYgbGluayBjbGlja2VkXCIpXG4gICAgICAgIGZyaWVuZHMuZGVmaW5lQ3VycmVudFVzZXJzRnJpZW5kcygpO1xuICAgICAgICBmcmllbmRzLmluaXRpYWxpemVQb3RlbnRpYWxGcmllbmRzKCk7XG5cbiAgICB9LFxuICAgIG5ld3NOYXZMaW5rKCl7XG4gICAgICAgIC8vTkVXUyBTRUNUSU9OXG4gICAgICAgIG5ld3Muc2F2ZSgpO1xuICAgICAgICBuZXdzLmFsbFNhdmVkKCk7XG4gICAgICAgIG5ld3MuZ2V0TmV3cygpO1xuICAgICAgICBuZXdzLm5ld3NFbGVtZW50Q3JlYXRvcigpO1xuICAgICAgICBmcmllbmRzLmJ1aWxkRnJpZW5kU2VhcmNoQmFyKClcbiAgICAgICAgY29uc29sZS5sb2coXCJuZXdzIGxpbmsgY2xpY2tlZFwiKVxuICAgIH0sXG4gICAgdGFza3NOYXZMaW5rKCl7XG4gICAgICAgIHRhc2tzLmNyZWF0ZVRhc2tUYWJsZXMoKVxuICAgICAgICBmcmllbmRzLmJ1aWxkRnJpZW5kU2VhcmNoQmFyKClcbiAgICB9LFxuICAgIG5vbWFkTmF2TGluaygpe1xuICAgICAgICBkYXNoYm9hcmQuYnVpbGRMb2dpbkZvcm0oKVxuICAgICAgICAkKFwibmF2XCIpLmhpZGUoKVxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5jbGVhcigpXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2lnbmVkIG91dFwiKVxuICAgIH0sXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIEVORCBPRiBOQVZJR0FUSU9OIEVWRU5UTElTVEVORVJTXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuICAgIGZyaWVuZHNEZWxldGVGcmllbmQgKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQpO1xuXG4gICAgfSxcbiAgICBoYW5kbGVFdmVudFNhdmVCdXR0b24oKSB7XG4gICAgICAgIGNvbnN0IG5hbWVJbnB1dHRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXZlbnROYW1lXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBkYXRlSW5wdXR0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2V2ZW50RGF0ZVwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgdGltZUlucHV0dGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNldmVudFRpbWVcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uSW5wdXR0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2V2ZW50TG9jYXRpb25cIikudmFsdWU7XG5cbiAgICAgICAgY29uc3QgZXZlbnRPYmplY3QgPSB7XG4gICAgICAgICAgICBldmVudE5hbWU6IG5hbWVJbnB1dHRlZCxcbiAgICAgICAgICAgIGV2ZW50RGF0ZTogZGF0ZUlucHV0dGVkLFxuICAgICAgICAgICAgZXZlbnRUaW1lOiB0aW1lSW5wdXR0ZWQsXG4gICAgICAgICAgICBldmVudExvY2F0aW9uOiBsb2NhdGlvbklucHV0dGVkXG4gICAgICAgIH07XG5cblxuICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICAgICAgICBkYXRhU2V0OiBcImV2ZW50c1wiLFxuICAgICAgICAgICAgZmV0Y2hUeXBlOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGRhdGFCYXNlT2JqZWN0OiB7XG4gICAgICAgICAgICAgICAgdXNlcklkOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpLFxuICAgICAgICAgICAgICAgIGV2ZW50TmFtZTogZXZlbnRPYmplY3QuZXZlbnROYW1lLFxuICAgICAgICAgICAgICAgIGV2ZW50RGF0ZTogZXZlbnRPYmplY3QuZXZlbnREYXRlLFxuICAgICAgICAgICAgICAgIGV2ZW50VGltZTogZXZlbnRPYmplY3QuZXZlbnRUaW1lLFxuICAgICAgICAgICAgICAgIGV2ZW50TG9jYXRpb246IGV2ZW50T2JqZWN0LmV2ZW50TG9jYXRpb25cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oICgpID0+IHtcbiAgICAgICAgICAgIGV2ZW50cy5hcHBlbmRVc2VyRXZlbnRzKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGhhbmRsZUV2ZW50RGVsZXRlQnV0dG9uKCkge1xuICAgICAgICBjb25zdCBpZFRvRGVsZXRlID0gZXZlbnQudGFyZ2V0LmlkLnNwbGl0KFwiLS1cIilbMV07XG4gICAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcbiAgICAgICAgICAgIGRlbGV0ZUlkOiBpZFRvRGVsZXRlLFxuICAgICAgICAgICAgZGF0YVNldDogXCJldmVudHNcIixcbiAgICAgICAgICAgIGZldGNoVHlwZTogXCJERUxFVEVcIixcbiAgICAgICAgICAgIGRhdGFCYXNlT2JqZWN0OiB7XG4gICAgICAgICAgICAgICAgdXNlcklkOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKCAoKSA9PiB7XG4gICAgICAgICAgICBldmVudHMuYXBwZW5kVXNlckV2ZW50cygpO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBoYW5kbGVFdmVudEVkaXRCdXR0b24oKSB7XG4gICAgICAgIGNvbnN0IGlkVG9FZGl0ID0gZXZlbnQudGFyZ2V0LmlkLnNwbGl0KFwiLS1cIilbMV07XG4gICAgICAgIC8vIGNvbnN0IGV2ZW50T2JqZWN0ID1cbiAgICAgICAgZG9tQ29tcG9uZW50cy5jcmVhdGVFdmVudEVkaXRJbnB1dChpZFRvRWRpdCwgKVxuICAgIH0sXG4gICAgaGFuZGxlRXZlbnRVcGRhdGVCdXR0b24oKSB7XG5cbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBldmVudExpc3RlbmVycztcbiIsImltcG9ydCBub21hZERhdGEgZnJvbSBcIi4vbm9tYWREYXRhXCI7XG5pbXBvcnQgZXZlbnRzIGZyb20gXCIuL2V2ZW50c1wiO1xuLy8gaW1wb3J0IGRvbUNvbXBvbmVudHMgZnJvbSBcIi4vZG9tQ29tcG9uZW50c1wiO1xuXG5jb25zdCBldmVudFBhZ2VMaXN0ZW5lcnMgPSB7XG4gICAgaGFuZGxlU2hvd0J1dHRvbigpIHtcbiAgICAgICAgY29uc3Qgb3V0cHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvdXRwdXRcIik7XG4gICAgICAgIGNvbnN0IHNob3dCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Nob3dGb3JtXCIpO1xuICAgICAgICBvdXRwdXQucmVtb3ZlQ2hpbGQoc2hvd0J1dHRvbik7XG4gICAgICAgIGNvbnN0IGV2ZW50Rm9ybSA9IGV2ZW50cy5jcmVhdGVFdmVudElucHV0KCk7XG4gICAgICAgIG91dHB1dC5pbnNlcnRCZWZvcmUoZXZlbnRGb3JtLCBvdXRwdXQuZmlyc3RDaGlsZCk7XG4gICAgfSxcbiAgICBoYW5kbGVTYXZlQnV0dG9uKCkge1xuICAgICAgICBjb25zdCBuYW1lSW5wdXR0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2V2ZW50TmFtZVwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZGF0ZUlucHV0dGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNldmVudERhdGVcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IHRpbWVJbnB1dHRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXZlbnRUaW1lXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBsb2NhdGlvbklucHV0dGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNldmVudExvY2F0aW9uXCIpLnZhbHVlO1xuXG4gICAgICAgIGlmIChuYW1lSW5wdXR0ZWQgPT09IFwiXCIgfHwgZGF0ZUlucHV0dGVkID09PSBcIlwiIHx8IHRpbWVJbnB1dHRlZCA9PT0gXCJcIiB8fCBsb2NhdGlvbklucHV0dGVkID09PSBcIlwiKSB7XG4gICAgICAgICAgICBhbGVydChcIlBsZWFzZSBpbnB1dCBpbmZvcm1hdGlvbiBpbiBhbGwgZmllbGRzXCIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICAgICAgICAgICAgZGF0YVNldDogXCJldmVudHNcIixcbiAgICAgICAgICAgICAgICBmZXRjaFR5cGU6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgIGRhdGFCYXNlT2JqZWN0OiB7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZDogTnVtYmVyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIikpLFxuICAgICAgICAgICAgICAgICAgICBldmVudE5hbWU6IG5hbWVJbnB1dHRlZCxcbiAgICAgICAgICAgICAgICAgICAgZXZlbnREYXRlOiBkYXRlSW5wdXR0ZWQsXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50VGltZTogdGltZUlucHV0dGVkLFxuICAgICAgICAgICAgICAgICAgICBldmVudExvY2F0aW9uOiBsb2NhdGlvbklucHV0dGVkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnRzLmFwcGVuZFVzZXJBbmRGcmllbmRFdmVudHMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH0sXG4gICAgaGFuZGxlSGlkZUJ1dHRvbigpIHtcbiAgICAgICAgY29uc3Qgb3V0cHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvdXRwdXRcIik7XG4gICAgICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmV2ZW50SW5wdXRcIik7XG4gICAgICAgIG91dHB1dC5yZW1vdmVDaGlsZChmb3JtQ29udGFpbmVyKTtcbiAgICAgICAgZXZlbnRzLmFkZFNob3dCdXR0b24oKTtcbiAgICB9LFxuICAgIGhhbmRsZURlbGV0ZUJ1dHRvbigpIHtcbiAgICAgICAgY29uc3QgaWRUb0RlbGV0ZSA9IGV2ZW50LnRhcmdldC5pZC5zcGxpdChcIi0tXCIpWzFdO1xuICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICAgICAgICBkZWxldGVJZDogaWRUb0RlbGV0ZSxcbiAgICAgICAgICAgIGRhdGFTZXQ6IFwiZXZlbnRzXCIsXG4gICAgICAgICAgICBmZXRjaFR5cGU6IFwiREVMRVRFXCIsXG4gICAgICAgICAgICBkYXRhQmFzZU9iamVjdDoge1xuICAgICAgICAgICAgICAgIHVzZXJJZDogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAudGhlbiggKCkgPT4ge1xuICAgICAgICAgICAgZXZlbnRzLmFwcGVuZFVzZXJBbmRGcmllbmRFdmVudHMoKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBoYW5kbGVFZGl0QnV0dG9uKCkge1xuICAgICAgICBjb25zdCBpZFRvRWRpdCA9IGV2ZW50LnRhcmdldC5pZC5zcGxpdChcIi0tXCIpWzFdO1xuICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICAgICAgICBkYXRhU2V0OiBcImV2ZW50c1wiLFxuICAgICAgICAgICAgZmV0Y2hUeXBlOiBcIkdFVFwiLFxuICAgICAgICAgICAgZGF0YUJhc2VPYmplY3Q6IHtcbiAgICAgICAgICAgIHVzZXJJZDogTnVtYmVyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIikpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVtYmVkSXRlbTogYC8ke2lkVG9FZGl0fWBcbi8vIEFib3ZlIGlzIGEgYml0IG9mIGEgaGFja3kgc29sdXRpb24gaW4gb3JkZXIgdG8gZ2V0IGEgc3BlY2lmaWMgZXZlbnQuIE1heWJlIG5lZWQgdG8gYWRkIHNwZWNpZmljIGdldCBmdW5jdGlvbiB0byBub21hZERhdGFcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ocGFyc2VkUmVzcG9uc2UgPT4ge1xuICAgICAgICBldmVudHMuY3JlYXRlRXZlbnRFZGl0SW5wdXQoaWRUb0VkaXQsIHBhcnNlZFJlc3BvbnNlKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBoYW5kbGVVcGRhdGVCdXR0b24oKSB7XG4gICAgICAgIGNvbnN0IGVkaXRlZElkID0gZXZlbnQudGFyZ2V0LmlkLnNwbGl0KFwiLS1cIilbMV07XG5cbiAgICAgICAgY29uc3QgZWRpdGVkTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNlZGl0TmFtZS0tJHtlZGl0ZWRJZH1gKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZWRpdGVkRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNlZGl0RGF0ZS0tJHtlZGl0ZWRJZH1gKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZWRpdGVkVGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNlZGl0VGltZS0tJHtlZGl0ZWRJZH1gKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZWRpdGVkTG9jYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZWRpdExvY2F0aW9uLS0ke2VkaXRlZElkfWApLnZhbHVlO1xuXG4gICAgICAgIGlmIChlZGl0ZWROYW1lID09PSBcIlwiIHx8IGVkaXRlZERhdGUgPT09IFwiXCIgfHwgZWRpdGVkVGltZSA9PT0gXCJcIiB8fCBlZGl0ZWRMb2NhdGlvbiA9PT0gXCJcIikge1xuICAgICAgICAgICAgYWxlcnQoXCJQbGVhc2UgZG8gbm90IGxlYXZlIGVkaXQgZmllbGRzIGJsYW5rXCIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICAgICAgICAgICAgcHV0SWQ6IGVkaXRlZElkLFxuICAgICAgICAgICAgICAgIGRhdGFTZXQ6IFwiZXZlbnRzXCIsXG4gICAgICAgICAgICAgICAgZmV0Y2hUeXBlOiBcIlBVVFwiLFxuICAgICAgICAgICAgICAgIGRhdGFCYXNlT2JqZWN0OiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBlZGl0ZWRJZCxcbiAgICAgICAgICAgICAgICAgICAgdXNlcklkOiBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSksXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50TmFtZTogZWRpdGVkTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZXZlbnREYXRlOiBlZGl0ZWREYXRlLFxuICAgICAgICAgICAgICAgICAgICBldmVudFRpbWU6IGVkaXRlZFRpbWUsXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50TG9jYXRpb246IGVkaXRlZExvY2F0aW9uXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnRzLmFwcGVuZFVzZXJBbmRGcmllbmRFdmVudHMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZXZlbnRQYWdlTGlzdGVuZXJzOyIsIi8vIEF1dGhvcjogQ29sZSBCcnlhbnQgLyBQdXJwb3NlOlxuXG5pbXBvcnQgbm9tYWREYXRhIGZyb20gXCIuL25vbWFkRGF0YVwiO1xuaW1wb3J0IGRvbUNvbXBvbmVudHMgZnJvbSBcIi4vZG9tQ29tcG9uZW50c1wiO1xuaW1wb3J0IGV2ZW50UGFnZUxpc3RlbmVycyBmcm9tIFwiLi9ldmVudFBhZ2VMaXN0ZW5lcnNcIjtcblxuXG4vL2NyZWF0ZUV2ZW50SW5wdXQgYW5kIGNyZWF0ZUV2ZW50SXRlbSB3aWxsIGJlIGFkZGVkIHRvIHRoaXMgb2JqZWN0LiBzbyBkb21idWlsZGVyLlxuY29uc3QgZXZlbnRzID0ge1xuICBzaG93RXZlbnRGb3JtICgpIHtcbiAgICAkKFwiI291dHB1dFwiKS5lbXB0eSgpXG4gICAgY29uc3Qgb3V0cHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvdXRwdXRcIik7XG4gICAgY29uc3QgZXZlbnRzRm9ybSA9IHRoaXMuY3JlYXRlRXZlbnRJbnB1dCgpO1xuICAgIG91dHB1dC5hcHBlbmRDaGlsZChldmVudHNGb3JtKVxuICAgIGNvbnN0IGV2ZW50TG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIilcbiAgICBldmVudExvZy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImV2ZW50TG9nXCIpO1xuICAgIG91dHB1dC5hcHBlbmRDaGlsZChldmVudExvZyk7XG4gIH0sXG4gIGFkZFNob3dCdXR0b24oKSB7XG4gICAgY29uc3Qgb3V0cHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvdXRwdXRcIik7XG4gICAgY29uc3Qgc2hvd0J1dHRvbiA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiYnV0dG9uXCIsIGNvbnRlbnQ6IFwiQ3JlYXRlIGEgTmV3IEV2ZW50XCIsIGF0dHJpYnV0ZXM6IHt0eXBlOiBcImJ1dHRvblwiLCBpZDogXCJzaG93Rm9ybVwifX0pO1xuICAgIHNob3dCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50UGFnZUxpc3RlbmVycy5oYW5kbGVTaG93QnV0dG9uKTtcbiAgICBvdXRwdXQuaW5zZXJ0QmVmb3JlKHNob3dCdXR0b24sIG91dHB1dC5maXJzdENoaWxkKTtcbiAgfSxcbiAgYXBwZW5kVXNlckFuZEZyaWVuZEV2ZW50cygpIHtcbiAgICBjb25zdCBldmVudExvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXZlbnRMb2dcIik7XG4gICAgY29uc3QgZXZlbnRIb2xkZXIgPSBbXTtcbiAgICBjb25zdCB1c2VySG9sZGVyID0gW051bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpKV07XG4gICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xuICAgICAgZGF0YVNldDogXCJmcmllbmRzXCIsXG4gICAgICBmZXRjaFR5cGU6IFwiR0VUXCIsXG4gICAgICBkYXRhQmFzZU9iamVjdDogXCJcIixcbiAgICAgIGVtYmVkSXRlbTogXCI/X2VtYmVkPWV2ZW50c1wiXG4gICAgfSlcbiAgICAudGhlbihwYXJzZWRSZXNwb25zZSA9PiB7XG4gICAgICBwYXJzZWRSZXNwb25zZS5mb3JFYWNoKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYocmVzcG9uc2UudXNlcklkID09PSBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSkpIHtcbiAgICAgICAgICB1c2VySG9sZGVyLnB1c2gocmVzcG9uc2Uub3RoZXJGcmllbmRJZCk7XG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICAgdXNlckhvbGRlci5mb3JFYWNoKHVzZXJJZCA9PiB7XG4gICAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcbiAgICAgICAgICBkYXRhU2V0OiBcImV2ZW50c1wiLFxuICAgICAgICAgIGZldGNoVHlwZTogXCJHRVRcIixcbiAgICAgICAgICBkYXRhQmFzZU9iamVjdDogXCJcIixcbiAgICAgICAgICBlbWJlZEl0ZW06IGA/X3VzZXJJZD0ke3VzZXJJZH1gXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHBhcnNlZFJlc3BvbnNlID0+IHtcbiAgICAgICAgICBwYXJzZWRSZXNwb25zZS5mb3JFYWNoKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS51c2VySWQgPT09IHVzZXJJZCkge1xuICAgICAgICAgICAgICBldmVudEhvbGRlci5wdXNoKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29uc3Qgc29ydGVkRXZlbnRzID0gZXZlbnRIb2xkZXIuc29ydCggKGEsIGIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShhLmV2ZW50RGF0ZSkgLSBuZXcgRGF0ZShiLmV2ZW50RGF0ZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29uc3QgZG9jdUZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgICAgc29ydGVkRXZlbnRzLmZvckVhY2goZXZlbnQgPT4ge1xuICAgICAgICAgICAgd2hpbGUgKGV2ZW50TG9nLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgZXZlbnRMb2cucmVtb3ZlQ2hpbGQoZXZlbnRMb2cuZmlyc3RDaGlsZClcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBldmVudEl0ZW0gPSB0aGlzLmNyZWF0ZUV2ZW50SXRlbShldmVudCk7XG4gICAgICAgICAgICBkb2N1RnJhZy5hcHBlbmRDaGlsZChldmVudEl0ZW0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGV2ZW50TG9nLmFwcGVuZENoaWxkKGRvY3VGcmFnKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcbiAgY3JlYXRlRXZlbnRJbnB1dCgpIHtcblxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI291dHB1dFwiKVxuICAgIGNvbnN0IGZvcm1IZWFkZXIgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImgyXCIsIGNvbnRlbnQ6IFwiQWRkIGEgTmV3IEV2ZW50OlwifSk7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtSGVhZGVyKTtcbiAgICBjb25zdCBldmVudEZvcm0gPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImZvcm1cIiwgYXR0cmlidXRlczoge2NsYXNzOiBcImV2ZW50SW5wdXRcIn19KTtcbiAgICBjb25zdCBuYW1lRmllbGRzZXQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImZpZWxkc2V0XCJ9KTtcbiAgICBjb25zdCBuYW1lTGFiZWwgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImxhYmVsXCIsIGNvbnRlbnQ6IFwiRXZlbnQgTmFtZTpcIiwgYXR0cmlidXRlczoge2ZvcjogXCJldmVudE5hbWVcIn19KTtcbiAgICBjb25zdCBuYW1lSW5wdXQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImlucHV0XCIsIGF0dHJpYnV0ZXM6IHt0eXBlOiBcInRleHRcIiwgbmFtZTogXCJldmVudE5hbWVcIiwgaWQ6IFwiZXZlbnROYW1lXCJ9fSk7XG4gICAgbmFtZUZpZWxkc2V0LmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XG4gICAgbmFtZUZpZWxkc2V0LmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG5cbiAgICBjb25zdCBkYXRlRmllbGRzZXQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImZpZWxkc2V0XCJ9KTtcbiAgICBjb25zdCBkYXRlTGFiZWwgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImxhYmVsXCIsIGNvbnRlbnQ6IFwiRXZlbnQgRGF0ZTpcIiwgYXR0cmlidXRlczoge2ZvcjogXCJldmVudERhdGVcIn19KTtcbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImlucHV0XCIsIGF0dHJpYnV0ZXM6IHt0eXBlOiBcImRhdGVcIiwgbmFtZTogXCJldmVudERhdGVcIiwgaWQ6IFwiZXZlbnREYXRlXCJ9fSk7XG4gICAgZGF0ZUZpZWxkc2V0LmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gICAgZGF0ZUZpZWxkc2V0LmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG5cbiAgICBjb25zdCB0aW1lRmllbGRzZXQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImZpZWxkc2V0XCJ9KTtcbiAgICBjb25zdCB0aW1lTGFiZWwgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImxhYmVsXCIsIGNvbnRlbnQ6IFwiRXZlbnQgVGltZTpcIiwgYXR0cmlidXRlczoge2ZvcjogXCJldmVudFRpbWVcIn19KTtcbiAgICBjb25zdCB0aW1lSW5wdXQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImlucHV0XCIsIGF0dHJpYnV0ZXM6IHt0eXBlOiBcInRpbWVcIiwgbmFtZTogXCJldmVudFRpbWVcIiwgaWQ6IFwiZXZlbnRUaW1lXCJ9fSk7XG4gICAgdGltZUZpZWxkc2V0LmFwcGVuZENoaWxkKHRpbWVMYWJlbCk7XG4gICAgdGltZUZpZWxkc2V0LmFwcGVuZENoaWxkKHRpbWVJbnB1dCk7XG5cbiAgICBjb25zdCBsb2NhdGlvbkZpZWxkc2V0ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJmaWVsZHNldFwifSk7XG4gICAgY29uc3QgbG9jYXRpb25MYWJlbCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwibGFiZWxcIiwgY29udGVudDogXCJFbnRlciBMb2NhdGlvbjpcIiwgYXR0cmlidXRlczoge2ZvcjogXCJldmVudExvY2F0aW9uXCJ9fSk7XG4gICAgY29uc3QgbG9jYXRpb25JbnB1dCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiaW5wdXRcIiwgYXR0cmlidXRlczoge3R5cGU6IFwidGV4dFwiLCBuYW1lOiBcImV2ZW50TG9jYXRpb25cIiwgaWQ6IFwiZXZlbnRMb2NhdGlvblwifX0pO1xuICAgIGxvY2F0aW9uRmllbGRzZXQuYXBwZW5kQ2hpbGQobG9jYXRpb25MYWJlbCk7XG4gICAgbG9jYXRpb25GaWVsZHNldC5hcHBlbmRDaGlsZChsb2NhdGlvbklucHV0KTtcblxuICAgIGNvbnN0IHNhdmVCdXR0b24gPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImJ1dHRvblwiLCBjb250ZW50OiBcIlNhdmVcIiwgYXR0cmlidXRlczoge3R5cGU6IFwiYnV0dG9uXCIsIGlkOiBcInNhdmVFdmVudFwifX0pO1xuICAgIHNhdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50UGFnZUxpc3RlbmVycy5oYW5kbGVTYXZlQnV0dG9uKTtcblxuICAgIGNvbnN0IGhpZGVCdXR0b24gPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImJ1dHRvblwiLCBjb250ZW50OiBcIkhpZGUgRXZlbnQgSW5wdXRcIiwgYXR0cmlidXRlczoge3R5cGU6IFwiYnV0dG9uXCIsIGlkOiBcImhpZGVFdmVudFwifX0pO1xuICAgIGhpZGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50UGFnZUxpc3RlbmVycy5oYW5kbGVIaWRlQnV0dG9uKTtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGV2ZW50Rm9ybSlcbiAgICBldmVudEZvcm0uYXBwZW5kQ2hpbGQobmFtZUZpZWxkc2V0KTtcbiAgICBldmVudEZvcm0uYXBwZW5kQ2hpbGQoZGF0ZUZpZWxkc2V0KTtcbiAgICBldmVudEZvcm0uYXBwZW5kQ2hpbGQodGltZUZpZWxkc2V0KTtcbiAgICBldmVudEZvcm0uYXBwZW5kQ2hpbGQobG9jYXRpb25GaWVsZHNldCk7XG4gICAgZXZlbnRGb3JtLmFwcGVuZENoaWxkKHNhdmVCdXR0b24pO1xuICAgIGV2ZW50Rm9ybS5hcHBlbmRDaGlsZChoaWRlQnV0dG9uKTtcbiAgICAvLyBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGV2ZW50Rm9ybSlcbiAgICByZXR1cm4gZXZlbnRGb3JtO1xuICB9LFxuICBjcmVhdGVFdmVudEl0ZW0gKGV2ZW50T2JqZWN0KSB7XG4gICAgY29uc3QgZXZlbnRJdGVtID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJhcnRpY2xlXCIsIGF0dHJpYnV0ZXM6IHtjbGFzczogXCJldmVudEl0ZW1cIiwgaWQ6IGBldmVudEl0ZW0tLSR7ZXZlbnRPYmplY3QuaWR9YH19KTtcbiAgICBjb25zdCBldmVudEhlYWRlciA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiaDJcIiwgY29udGVudDogZXZlbnRPYmplY3QuZXZlbnROYW1lfSk7XG5cbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZXZlbnRPYmplY3QuZXZlbnREYXRlKTtcbiAgICBjb25zdCBkYXRpZnkgPSAoKSA9PiB7XG4gICAgICBjb25zdCBtb250aE5hbWVzID0gW1xuICAgICAgICBcIkphbnVhcnlcIixcbiAgICAgICAgXCJGZWJydWFyeVwiLFxuICAgICAgICBcIk1hcmNoXCIsXG4gICAgICAgIFwiQXByaWxcIixcbiAgICAgICAgXCJNYXlcIixcbiAgICAgICAgXCJKdW5lXCIsXG4gICAgICAgIFwiSnVseVwiLFxuICAgICAgICBcIkF1Z3VzdFwiLFxuICAgICAgICBcIlNlcHRlbWJlclwiLFxuICAgICAgICBcIk9jdG9iZXJcIixcbiAgICAgICAgXCJOb3ZlbWJlclwiLFxuICAgICAgICBcIkRlY2VtYmVyXCJcbiAgICAgIF07XG4gICAgICBjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKTtcbiAgICAgIGNvbnN0IG1vbnRoSW5kZXggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgcmV0dXJuIGAke21vbnRoTmFtZXNbbW9udGhJbmRleF19ICR7ZGF5fSwgJHt5ZWFyfWA7XG4gICAgfTtcblxuICAgIGNvbnN0IGxvbmdEYXRlID0gZGF0aWZ5KCk7XG5cbiAgICBjb25zdCBldmVudERhdGVUaW1lID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJwXCIsIGNvbnRlbnQ6IGBBdCAke2V2ZW50T2JqZWN0LmV2ZW50VGltZX0gb24gJHtsb25nRGF0ZX1gfSk7XG4gICAgY29uc3QgZXZlbnRMb2NhdGlvbiA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwicFwiLCBjb250ZW50OiBgTG9jYXRpb246ICR7ZXZlbnRPYmplY3QuZXZlbnRMb2NhdGlvbn1gfSk7XG5cbiAgICBldmVudEl0ZW0uYXBwZW5kQ2hpbGQoZXZlbnRIZWFkZXIpO1xuICAgIGV2ZW50SXRlbS5hcHBlbmRDaGlsZChldmVudERhdGVUaW1lKTtcbiAgICBldmVudEl0ZW0uYXBwZW5kQ2hpbGQoZXZlbnRMb2NhdGlvbik7XG5cbiAgICBpZiAoZXZlbnRPYmplY3QudXNlcklkID09PSBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSkpIHtcbiAgICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImJ1dHRvblwiLCBjb250ZW50OiBcIkVkaXRcIiwgYXR0cmlidXRlczoge3R5cGU6IFwiYnV0dG9uXCIsIGlkOiBgZWRpdEV2ZW50LS0ke2V2ZW50T2JqZWN0LmlkfWB9fSk7XG4gICAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudFBhZ2VMaXN0ZW5lcnMuaGFuZGxlRWRpdEJ1dHRvbik7XG4gICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImJ1dHRvblwiLCBjb250ZW50OiBcIkRlbGV0ZVwiLCBhdHRyaWJ1dGVzOiB7dHlwZTogXCJidXR0b25cIiwgaWQ6IGBkZWxldGVFdmVudC0tJHtldmVudE9iamVjdC5pZH1gfX0pO1xuICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudFBhZ2VMaXN0ZW5lcnMuaGFuZGxlRGVsZXRlQnV0dG9uKTtcbiAgICAgIGV2ZW50SXRlbS5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcbiAgICAgIGV2ZW50SXRlbS5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICAgIH07XG5cbiAgICByZXR1cm4gZXZlbnRJdGVtO1xuICB9LFxuICBjcmVhdGVFdmVudEVkaXRJbnB1dChjb250YWluZXJJZCwgZXZlbnRPYmplY3QpIHtcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJmb3JtXCIsIGF0dHJpYnVlczoge2NsYXNzOiBcImV2ZW50RWRpdFwifX0pO1xuICAgIGNvbnN0IGV2ZW50SGVhZGVyID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJoMlwiLCBjb250ZW50OiBldmVudE9iamVjdC5ldmVudE5hbWV9KTtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGV2ZW50SGVhZGVyKTtcblxuICAgIGNvbnN0IG5hbWVGaWVsZHNldCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiZmllbGRzZXRcIn0pO1xuICAgIGNvbnN0IG5hbWVMYWJlbCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwibGFiZWxcIiwgY29udGVudDogXCJFZGl0IE5hbWU6XCIsIGF0dHJpYnV0ZXM6IHtmb3I6IFwiZXZlbnROYW1lXCJ9fSk7XG4gICAgY29uc3QgbmFtZUlucHV0ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJpbnB1dFwiLCBhdHRyaWJ1dGVzOiB7dHlwZTogXCJ0ZXh0XCIsIG5hbWU6IFwiZXZlbnROYW1lXCIsIGlkOiBgZWRpdE5hbWUtLSR7Y29udGFpbmVySWR9YCwgdmFsdWU6IGV2ZW50T2JqZWN0LmV2ZW50TmFtZX19KTtcbiAgICBuYW1lRmllbGRzZXQuYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcbiAgICBuYW1lRmllbGRzZXQuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcblxuICAgIGNvbnN0IGRhdGVGaWVsZHNldCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiZmllbGRzZXRcIn0pO1xuICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwibGFiZWxcIiwgY29udGVudDogXCJFZGl0IERhdGU6XCIsIGF0dHJpYnV0ZXM6IHtmb3I6IFwiZXZlbnREYXRlXCJ9fSk7XG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJpbnB1dFwiLCBhdHRyaWJ1dGVzOiB7dHlwZTogXCJkYXRlXCIsIG5hbWU6IFwiZXZlbnREYXRlXCIsIGlkOiBgZWRpdERhdGUtLSR7Y29udGFpbmVySWR9YCwgdmFsdWU6IGV2ZW50T2JqZWN0LmV2ZW50RGF0ZX19KTtcbiAgICBkYXRlRmllbGRzZXQuYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcbiAgICBkYXRlRmllbGRzZXQuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcblxuICAgIGNvbnN0IHRpbWVGaWVsZHNldCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiZmllbGRzZXRcIn0pO1xuICAgIGNvbnN0IHRpbWVMYWJlbCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwibGFiZWxcIiwgY29udGVudDogXCJFZGl0IFRpbWU6XCIsIGF0dHJpYnV0ZXM6IHtmb3I6IFwiZXZlbnRUaW1lXCJ9fSk7XG4gICAgY29uc3QgdGltZUlucHV0ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJpbnB1dFwiLCBhdHRyaWJ1dGVzOiB7dHlwZTogXCJ0aW1lXCIsIG5hbWU6IFwiZXZlbnRUaW1lXCIsIGlkOiBgZWRpdFRpbWUtLSR7Y29udGFpbmVySWR9YCwgdmFsdWU6IGV2ZW50T2JqZWN0LmV2ZW50VGltZX19KTtcbiAgICB0aW1lRmllbGRzZXQuYXBwZW5kQ2hpbGQodGltZUxhYmVsKTtcbiAgICB0aW1lRmllbGRzZXQuYXBwZW5kQ2hpbGQodGltZUlucHV0KTtcblxuICAgIGNvbnN0IGxvY2F0aW9uRmllbGRzZXQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImZpZWxkc2V0XCJ9KTtcbiAgICBjb25zdCBsb2NhdGlvbkxhYmVsID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJsYWJlbFwiLCBjb250ZW50OiBcIkVkaXQgTG9jYXRpb246XCIsIGF0dHJpYnV0ZXM6IHtmb3I6IFwiZXZlbnRMb2NhdGlvblwifX0pO1xuICAgIGNvbnN0IGxvY2F0aW9uSW5wdXQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImlucHV0XCIsIGF0dHJpYnV0ZXM6IHt0eXBlOiBcInRleHRcIiwgbmFtZTogXCJldmVudExvY2F0aW9uXCIsIGlkOiBgZWRpdExvY2F0aW9uLS0ke2NvbnRhaW5lcklkfWAsIHZhbHVlOiBldmVudE9iamVjdC5ldmVudExvY2F0aW9ufX0pO1xuICAgIGxvY2F0aW9uRmllbGRzZXQuYXBwZW5kQ2hpbGQobG9jYXRpb25MYWJlbCk7XG4gICAgbG9jYXRpb25GaWVsZHNldC5hcHBlbmRDaGlsZChsb2NhdGlvbklucHV0KTtcblxuICAgIGNvbnN0IHVwZGF0ZUJ1dHRvbiA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiYnV0dG9uXCIsIGNvbnRlbnQ6IFwiVXBkYXRlXCIsIGF0dHJpYnV0ZXM6IHt0eXBlOiBcImJ1dHRvblwiLCBpZDogYHN1Ym1pdEVkaXRzLS0ke2NvbnRhaW5lcklkfWB9fSk7XG4gICAgdXBkYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudFBhZ2VMaXN0ZW5lcnMuaGFuZGxlVXBkYXRlQnV0dG9uKTtcblxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQobmFtZUZpZWxkc2V0KTtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVGaWVsZHNldCk7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aW1lRmllbGRzZXQpO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQobG9jYXRpb25GaWVsZHNldCk7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZCh1cGRhdGVCdXR0b24pO1xuXG4gICAgbGV0IGN1cnJlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZXZlbnRJdGVtLS0ke2NvbnRhaW5lcklkfWApO1xuICAgIHdoaWxlIChjdXJyZW50Q29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGN1cnJlbnRDb250YWluZXIucmVtb3ZlQ2hpbGQoY3VycmVudENvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICB9O1xuICAgIGN1cnJlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG4gIH1cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgZXZlbnRzOyIsImltcG9ydCBub21hZERhdGEgZnJvbSBcIi4vbm9tYWREYXRhXCJcbmltcG9ydCBkb21Db21wb25lbnRzIGZyb20gXCIuL2RvbUNvbXBvbmVudHNcIjtcbmltcG9ydCBmcmllbmRzRXZlbnRzTGlzdGVuZXIgZnJvbSBcIi4vZnJpZW5kc0V2ZW50c0xpc3RlbmVyXCI7XG5cbmNvbnN0IGZyaWVuZHMgPSB7XG5cblxuICBkZWZpbmVDdXJyZW50VXNlcnNGcmllbmRzICgpIHtcbiAgICAkKFwiI291dHB1dFwiKS5lbXB0eSgpXG4gICAgY29uc3QgY3VycmVudFVzZXIgPSAxO1xuICAgIGxldCB1c2VySWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKTtcbiAgICAvLyBsZXQgY3VycmVudFVzZXIgPSBOdW1iZXIodXNlcklkKTtcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50VXNlciwgdXNlcklkKVxuICAgIGxldCBmcmllbmRIb2xkZXIgPSBbXTtcbi8vIFBVTEwgRlJPTSBGUklFTkRTIEpTT04tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbm5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcblwiZGF0YVNldFwiIDogXCJmcmllbmRzXCIsXG5cImZldGNoVHlwZVwiIDogXCJHRVRcIixcblwiZGF0YUJhc2VPYmplY3RcIiA6IFwiXCIsXG5cImVtYmVkSXRlbVwiIDogXCI/X2VtYmVkPWV2ZW50c1wifSlcbi50aGVuKGZyb21GcmllbmRzID0+IHtcbiAgLy8gY29uc29sZS5sb2coZnJvbUZyaWVuZHMpXG4gIGZyb21GcmllbmRzLmZvckVhY2goZnJpZW5kRGF0YSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coZnJpZW5kRGF0YSlcbiAgICBpZiAoZnJpZW5kRGF0YS51c2VySWQgPT09IGN1cnJlbnRVc2VyKSB7XG4gICAgICBmcmllbmRIb2xkZXIucHVzaChmcmllbmREYXRhLm90aGVyRnJpZW5kSWQpXG4gICAgfVxuICB9KVxuICBmcmllbmRIb2xkZXIuZm9yRWFjaChvZmZpY2lhbEZyaWVuZCA9PiB7XG4gICAgdGhpcy5sb2FkQ3VycmVudFVzZXJzRnJpZW5kcyhvZmZpY2lhbEZyaWVuZClcbiAgfSlcbn0pXG59LFxubG9hZEN1cnJlbnRVc2Vyc0ZyaWVuZHMgKGZyaWVuZCkge1xuICAvLyBQVUxMIEZST00gVVNFUlMgSlNPTiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBjb25zb2xlLmxvZyhmcmllbmQpXG4gICAgICBjb25zdCB0YXJnZXRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm91dHB1dFwiKVxuICAgICAgdGFyZ2V0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgIGVsZW1lbnRUeXBlOiBcInNlY3Rpb25cIixcbiAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgIGNsYXNzOiBcImZyaWVuZC1jb250YWluZXJcIixcbiAgICAgICAgICBpZDogYGZyaWVuZC0ke2ZyaWVuZH1gXG4gICAgICAgIH1cbiAgICAgIH0pKVxuICAgICAgY29uc3QgZnJpZW5kQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGZyaWVuZC0ke2ZyaWVuZH1gKVxuXG5cbiAgICAgIGxldCBmcmllbmREb21CdWlsZGVyID0gW107XG4gICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICBcImRhdGFTZXRcIiA6IFwidXNlcnNcIixcbiAgICAgIFwiZmV0Y2hUeXBlXCIgOiBcIkdFVFwiLFxuICAgICAgXCJkYXRhQmFzZU9iamVjdFwiIDogXCJcIixcbiAgICAgIFwiZW1iZWRJdGVtXCIgOiBcIj9fZW1iZWQ9ZXZlbnRzXCJ9KVxuICAgICAgLnRoZW4oZnJvbVVzZXJEYXRhID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZnJvbVVzZXJEYXRhKTtcbiAgICAgICAgZnJvbVVzZXJEYXRhLmZvckVhY2godXNlckluZm8gPT4ge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGZyaWVuZCwgdXNlckluZm8uaWQpXG4gICAgICAgICAgaWYgKHVzZXJJbmZvLmlkID09PSBmcmllbmQpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXJJbmZvLnVzZXJOYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IGZyaWVuZElkZW50aWZpZXIgPSB7XG4gICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImgyXCIsXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IHVzZXJJbmZvLnVzZXJOYW1lLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnJpZW5kRG9tQnVpbGRlci5wdXNoKGZyaWVuZElkZW50aWZpZXIpXG4gICAgICAgICAgICAvLyBQVUxMIEZST00gRVZFTlRTIEpTT04gLS0tLS0tXG4gICAgICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICAgICAgICAgICAgXCJkYXRhU2V0XCIgOiBcImV2ZW50c1wiLFxuICAgICAgICAgICAgXCJmZXRjaFR5cGVcIiA6IFwiR0VUXCIsXG4gICAgICAgICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiBcIlwiLFxuICAgICAgICAgICAgXCJlbWJlZEl0ZW1cIiA6IFwiP19lbWJlZD1ldmVudHNcIn0pXG4gICAgICAgICAgICAudGhlbihldmVudHMgPT4ge1xuICAgICAgICAgICAgICBldmVudHMuZm9yRWFjaChldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnVzZXJJZCA9PT0gZnJpZW5kKSB7XG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudC5ldmVudE5hbWUpO1xuICAgICAgICAgICAgICAgICAgY29uc3QgZXZlbnRIb2xkZXIgPSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcInBcIixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogYFlvdXIgZmVsbG93IG5vbWFkcyB1cGNvbWluZyBldmVudDogJHtldmVudC5ldmVudE5hbWV9IG9uICR7ZXZlbnQuZXZlbnREYXRlfWAsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZDogYGV2ZW50LSR7ZXZlbnQuaWR9YCxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgZnJpZW5kRG9tQnVpbGRlci5wdXNoKGV2ZW50SG9sZGVyKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyBQVUxMIEZST00gTkVXU0lURU1TIEpTT04gLS0tLS0tXG4gICAgICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICAgICAgICBcImRhdGFTZXRcIiA6IFwibmV3c2l0ZW1zXCIsXG4gICAgICAgICAgICBcImZldGNoVHlwZVwiIDogXCJHRVRcIixcbiAgICAgICAgICAgIFwiZGF0YUJhc2VPYmplY3RcIiA6IFwiXCIsXG4gICAgICAgICAgICBcImVtYmVkSXRlbVwiIDogXCI/X2VtYmVkPW5ld3NpdGVtc1wifSlcbiAgICAgICAgICAgIC50aGVuKG5ld3NTaGl6ID0+IHtcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobmV3c1NoaXopXG4gICAgICAgICAgICAgIG5ld3NTaGl6LmZvckVhY2godXNlclNwZWNpZmljQXJ0aWNsZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh1c2VyU3BlY2lmaWNBcnRpY2xlcy51c2VySWQgPT09IGZyaWVuZCkge1xuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codXNlclNwZWNpZmljQXJ0aWNsZXMudGl0bGUpXG4gICAgICAgICAgICAgICAgICBjb25zdCBhcnRpY2xlSG9sZGVyID0ge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJwXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHVzZXJTcGVjaWZpY0FydGljbGVzLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IGBhcnRpY2xlLSR7dXNlclNwZWNpZmljQXJ0aWNsZXMuaWR9YCxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgZnJpZW5kRG9tQnVpbGRlci5wdXNoKGFydGljbGVIb2xkZXIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhmcmllbmREb21CdWlsZGVyKVxuICAgICAgICAgICAgICBmcmllbmREb21CdWlsZGVyLmZvckVhY2gob2JqZWN0ID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvYmplY3QpO1xuICAgICAgICAgICAgICAgIGZyaWVuZENvbnRhaW5lci5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQob2JqZWN0KSlcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgY29uc3QgZGVsZXRlRnJpZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgICAgICAgICAgICBkZWxldGVGcmllbmQuY2xhc3NMaXN0LmFkZChgZGVsZXRlLWZyaWVuZC0ke2ZyaWVuZH1gKVxuICAgICAgICAgICAgICBkZWxldGVGcmllbmQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKVxuICAgICAgICAgICAgICBkZWxldGVGcmllbmQudGV4dENvbnRlbnQgPSBcIkRFTEVURVwiO1xuICAgICAgICAgICAgICBmcmllbmRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlRnJpZW5kKTtcbiAgICAgICAgICAgICAgZGVsZXRlRnJpZW5kLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZnJpZW5kc0V2ZW50c0xpc3RlbmVyLmZyaWVuZHNEZWxldGVGcmllbmQoKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuXG4gIH0sXG4gIGluaXRpYWxpemVQb3RlbnRpYWxGcmllbmRzICgpIHtcbiAgICBsZXQgdXNlcklkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyk7XG4gICAgbGV0IGN1cnJlbnRVc2VyID0gTnVtYmVyKHVzZXJJZCk7XG4gICAgLy8gY29uc29sZS5sb2coXCJmcmllbmRzIFBhZ2UgdXNlciBpZCBpcy1cIixjdXJyZW50VXNlcik7XG5cbiAgICBjb25zdCB0YXJnZXRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm91dHB1dFwiKTtcbiAgICBjb25zdCBmaW5kTmV3RnJpZW5kQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgbGV0IGZyaWVuZHNJSGF2ZSA9IFtdO1xuICAgIGZpbmROZXdGcmllbmRDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmdXR1cmUtZnJpZW5kc1wiKTtcbiAgICB0YXJnZXRDb250YWluZXIuYXBwZW5kQ2hpbGQoZmluZE5ld0ZyaWVuZENvbnRhaW5lcik7XG5cbiAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICBcImRhdGFTZXRcIiA6IFwiZnJpZW5kc1wiLFxuICAgICAgXCJmZXRjaFR5cGVcIiA6IFwiR0VUXCIsXG4gICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiBcIlwiLFxuICAgICAgXCJlbWJlZEl0ZW1cIiA6IFwiP19lbWJlZD1mcmllbmRzXCJcbiAgICB9KVxuICAgIC50aGVuKGZyb21GcmllbmRzID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGZyb21GcmllbmRzKVxuICAgICAgZnJvbUZyaWVuZHMuZm9yRWFjaChmcmllbmREYXRhID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZnJpZW5kRGF0YSlcbiAgICAgICAgaWYgKGZyaWVuZERhdGEudXNlcklkID09PSBjdXJyZW50VXNlcikge1xuICAgICAgICAgIGZyaWVuZHNJSGF2ZS5wdXNoKGZyaWVuZERhdGEub3RoZXJGcmllbmRJZClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC8vIGNvbnNvbGUubG9nKGZyaWVuZHNJSGF2ZSlcblxuICAgICAgICB0aGlzLnNob3dVc2VyUG90ZW50aWFsRnJpZW5kcyhmcmllbmRzSUhhdmUpXG4gICAgfSlcbiAgfSxcbiAgc2hvd1VzZXJQb3RlbnRpYWxGcmllbmRzIChmcmllbmQpIHtcbiAgICBsZXQgdXNlcklkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyk7XG4gICAgbGV0IGN1cnJlbnRVc2VyID0gTnVtYmVyKHVzZXJJZCk7XG4gICAgLy8gY29uc29sZS5sb2coZnJpZW5kKVxuICAgIGxldCBhbGxUaGVVc2VycyA9IFtdXG4gICAgZnJpZW5kLnB1c2goY3VycmVudFVzZXIpXG4gICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xuICAgICAgXCJkYXRhU2V0XCIgOiBcInVzZXJzXCIsXG4gICAgICBcImZldGNoVHlwZVwiIDogXCJHRVRcIixcbiAgICAgIFwiZGF0YUJhc2VPYmplY3RcIiA6IFwiXCIsXG4gICAgICBcImVtYmVkSXRlbVwiIDogXCI/X2VtYmVkPXVzZXJzXCJcbiAgICB9KVxuICAgIC50aGVuKGFsbFVzZXJzID0+IHtcbiAgICAgIGFsbFVzZXJzLmZvckVhY2godXNlciA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXIuaWQpXG4gICAgICAgIGFsbFRoZVVzZXJzLnB1c2godXNlci5pZClcbiAgICAgIH0pXG4gICAgICBjb25zb2xlLmxvZyhcImV2ZXJ5b25lXCIsYWxsVGhlVXNlcnMsIFwidXNlciBhbmQgZnJpZW5kc1wiLGZyaWVuZClcbiAgICAgIGxldCBub3RDdXJyZW50RnJpZW5kID0gdGhpcy5kaWZmZXJlbmNlT2YyQXJyYXlzKGFsbFRoZVVzZXJzLCBmcmllbmQpXG4gICAgICBub3RDdXJyZW50RnJpZW5kLmZvckVhY2gobm9GcmllbmRPZk1pbmUgPT4ge1xuICAgICAgICB0aGlzLnByaW50UG90ZW50aWFsRnJpZW5kc1RvQnJvd3Nlcihub0ZyaWVuZE9mTWluZSlcblxuICAgICAgfSlcbiAgICB9KVxuICB9LFxuICAgZGlmZmVyZW5jZU9mMkFycmF5cyAoYXJyYXkxLCBhcnJheTIpIHtcbiAgICB2YXIgdGVtcCA9IFtdO1xuICAgIGFycmF5MSA9IGFycmF5MS50b1N0cmluZygpLnNwbGl0KCcsJykubWFwKE51bWJlcik7XG4gICAgYXJyYXkyID0gYXJyYXkyLnRvU3RyaW5nKCkuc3BsaXQoJywnKS5tYXAoTnVtYmVyKTtcblxuICAgIGZvciAodmFyIGkgaW4gYXJyYXkxKSB7XG4gICAgaWYoYXJyYXkyLmluZGV4T2YoYXJyYXkxW2ldKSA9PT0gLTEpIHRlbXAucHVzaChhcnJheTFbaV0pO1xuICAgIH1cbiAgICBmb3IoaSBpbiBhcnJheTIpIHtcbiAgICBpZihhcnJheTEuaW5kZXhPZihhcnJheTJbaV0pID09PSAtMSkgdGVtcC5wdXNoKGFycmF5MltpXSk7XG4gICAgfVxuICAgIHJldHVybiB0ZW1wLnNvcnQoKGEsYikgPT4gYS1iKTtcbiAgICB9LFxuICAgIHByaW50UG90ZW50aWFsRnJpZW5kc1RvQnJvd3NlciAobm90QUZyaWVuZCkge1xuICAgICAgLy8gY29uc29sZS5sb2cobm90QUZyaWVuZClcbiAgICAgIGNvbnN0IHRhcmdldFNlY3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZ1dHVyZS1mcmllbmRzXCIpO1xuICAgICAgdGFyZ2V0U2VjdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICBlbGVtZW50VHlwZTogXCJkaXZcIixcbiAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgIGlkOiBgcG90ZW50aWFsRnJpZW5kLSR7bm90QUZyaWVuZH1gXG4gICAgICAgIH1cbiAgICAgIH0pKVxuXG4gICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICAgIFwiZGF0YVNldFwiIDogXCJ1c2Vyc1wiLFxuICAgICAgICBcImZldGNoVHlwZVwiIDogXCJHRVRcIixcbiAgICAgICAgXCJkYXRhQmFzZU9iamVjdFwiIDogXCJcIixcbiAgICAgICAgXCJlbWJlZEl0ZW1cIiA6IFwiP19lbWJlZD11c2Vyc1wiXG4gICAgICB9KVxuICAgICAgLnRoZW4odXNlcnNJbmZvID0+IHtcbiAgICAgICAgdXNlcnNJbmZvLmZvckVhY2godXNlciA9PiB7XG4gICAgICAgICAgaWYgKHVzZXIuaWQgPT09IG5vdEFGcmllbmQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXIuaWQsIFwiaXMgbm8gZnJpZW5kXCIpXG4gICAgICAgICAgICBjb25zdCBwb3RlbnRpYWxGcmllbmRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcG90ZW50aWFsRnJpZW5kLSR7bm90QUZyaWVuZH1gKVxuICAgICAgICAgICAgcG90ZW50aWFsRnJpZW5kQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnaDInLFxuICAgICAgICAgICAgICBjb250ZW50OiB1c2VyLnVzZXJOYW1lLFxuICAgICAgICAgICAgICBjc3NDbGFzczogYHBvdGVudGlhbC1mcmllbmQtJHt1c2VyLmlkfWBcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgcG90ZW50aWFsRnJpZW5kQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICBjb250ZW50OiBcIkFkZCBGcmllbmRcIixcbiAgICAgICAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgICAgICAgIGlkOiBgYWRkLWZyaWVuZC1idXR0b24tJHt1c2VyLmlkfWAsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIGNvbnN0IGZvckFkZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBhZGQtZnJpZW5kLWJ1dHRvbi0ke3VzZXIuaWR9YCk7XG4gICAgICAgICAgICBmb3JBZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgZnJpZW5kc0V2ZW50c0xpc3RlbmVyLmZyaWVuZHNBZGRGcmllbmQoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgLy8gY29uc29sZS5sb2cobm90QUZyaWVuZClcbiAgICB9LFxuICAgIGZyaWVuZFNvcnRGcm9tTWVzc2FnZXNTZWN0aW9uIChhcnJheU9mRnJpZW5kcywgZnJpZW5kVG9BZGQsIGZyaWVuZFRvQWRkTmFtZSkge1xuICAgICAgbGV0IHVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xuICAgICAgbGV0IGN1cnJlbnRVc2VyID0gTnVtYmVyKHVzZXJJZCk7XG4gICAgICBhcnJheU9mRnJpZW5kcy5wdXNoKGN1cnJlbnRVc2VyKVxuICAgICAgbGV0IGFycmF5T2ZVc2VycyA9IFtdXG4gICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICAgIFwiZGF0YVNldFwiIDogXCJ1c2Vyc1wiLFxuICAgICAgICBcImZldGNoVHlwZVwiIDogXCJHRVRcIixcbiAgICAgICAgXCJkYXRhQmFzZU9iamVjdFwiIDogXCJcIixcbiAgICAgICAgXCJlbWJlZEl0ZW1cIiA6IFwiP19lbWJlZD1ldmVudHNcIn0pXG4gICAgICAgIC50aGVuKHVzZXJzID0+IHtcbiAgICAgICAgICB1c2Vycy5mb3JFYWNoKHVzZXIgPT4ge1xuICAgICAgICAgICAgYXJyYXlPZlVzZXJzLnB1c2godXNlci5pZClcbiAgICAgICAgICB9KVxuICAgICAgICAgIGxldCBub3RGcmllbmRzTGlzdCA9IHRoaXMuY29tcGFyZU1lc3NhZ2VGcmllbmRBcnJheXMoYXJyYXlPZlVzZXJzLCBhcnJheU9mRnJpZW5kcylcbiAgICAgICAgICB0aGlzLm1lc3NlbmdlckFkZGZyaWVuZEZpbmFsZShub3RGcmllbmRzTGlzdCwgZnJpZW5kVG9BZGQsIGZyaWVuZFRvQWRkTmFtZSlcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIGNvbXBhcmVNZXNzYWdlRnJpZW5kQXJyYXlzIChhcnJheTEsIGFycmF5Mikge1xuICAgICAgdmFyIHRlbXAgPSBbXTtcbiAgICAgIGFycmF5MSA9IGFycmF5MS50b1N0cmluZygpLnNwbGl0KCcsJykubWFwKE51bWJlcik7XG4gICAgICBhcnJheTIgPSBhcnJheTIudG9TdHJpbmcoKS5zcGxpdCgnLCcpLm1hcChOdW1iZXIpO1xuXG4gICAgICBmb3IgKHZhciBpIGluIGFycmF5MSkge1xuICAgICAgaWYoYXJyYXkyLmluZGV4T2YoYXJyYXkxW2ldKSA9PT0gLTEpIHRlbXAucHVzaChhcnJheTFbaV0pO1xuICAgICAgfVxuICAgICAgZm9yKGkgaW4gYXJyYXkyKSB7XG4gICAgICBpZihhcnJheTEuaW5kZXhPZihhcnJheTJbaV0pID09PSAtMSkgdGVtcC5wdXNoKGFycmF5MltpXSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGVtcC5zb3J0KChhLGIpID0+IGEtYik7XG4gICAgfSxcbiAgICBtZXNzZW5nZXJBZGRmcmllbmRGaW5hbGUgKG5vdGZyaWVuZHMsIHdhbnRlZEZyaWVuZCwgZnJpZW5kVG9BZGROYW1lKSB7XG4gICAgICBjb25zb2xlLmxvZyhub3RmcmllbmRzLCBOdW1iZXIod2FudGVkRnJpZW5kKSlcbiAgICAgIGNvbnN0IGZpbmFsRnJpZW5kID0gbm90ZnJpZW5kcy5maWx0ZXIoZnJpZW5kc1RoYXRBcmVudCA9PiBmcmllbmRzVGhhdEFyZW50ID09PSBOdW1iZXIod2FudGVkRnJpZW5kKSlcbiAgICAgIC8vIGNvbnNvbGUubG9nKGZpbmFsRnJpZW5kWzBdLCBOdW1iZXIod2FudGVkRnJpZW5kKSlcbiAgICAgIGlmIChmaW5hbEZyaWVuZFswXSA9PT0gTnVtYmVyKHdhbnRlZEZyaWVuZCkpIHtcbiAgICAgICAgaWYgKGZyaWVuZFRvQWRkTmFtZSA9PT0gXCJtb2RhbFwiKSB7XG4gICAgICAgICAgZnJpZW5kc0V2ZW50c0xpc3RlbmVyLnNlYXJjaEJhckFkZEZyaWVuZFRvSnNvbihmaW5hbEZyaWVuZClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLm1vZGFsUXVlc3Rpb25haXJlT2ZGcmllbmRzaGlwVmFsaWRpdHkod2FudGVkRnJpZW5kLGZyaWVuZFRvQWRkTmFtZSlcbiAgICAgICAgfS8vIGFsZXJ0KGBZb3UndmUgYWRkZWQgYSBmZWxsb3cgTm9tYWQgJHtmcmllbmRUb0FkZE5hbWV9IHlvdXIgZnJpZW5kIGxpc3RgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoXCJVaC4uLi4gWW91IGNhbid0IGZyaWVuZCB0aGVyZSAoaXQncyB5b3Ugb3Igc29tZW9uZSB3aG8ncyBhbHJlYWR5IGEgZnJpZW5kKS5cIilcbiAgICAgIH1cbiAgICB9LFxuICAgIG1vZGFsUXVlc3Rpb25haXJlT2ZGcmllbmRzaGlwVmFsaWRpdHkgKHdhbnRlZEZyaWVuZCwgZnJpZW5kVG9BZGROYW1lKSB7XG5cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3V0cHV0XCIpLmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgIGVsZW1lbnRUeXBlOiBcInNlY3Rpb25cIixcbiAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgIGlkOiBcIm1vZGFsLWNvbnRhaW5lclwiXG4gICAgICAgIH1cbiAgICAgIH0pKVxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC1jb250YWluZXJcIikuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgZWxlbWVudFR5cGU6IFwiZGl2XCIsXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICBpZDogXCJmcmllbmRzX19iYWNrZHJvcFwiXG4gICAgICAgIH1cbiAgICAgIH0pKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtY29udGFpbmVyXCIpLmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImRpdlwiLFxuICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgaWQ6IFwiZnJpZW5kc19fbW9kYWxcIlxuICAgICAgICB9XG4gICAgICB9KSlcbiAgICAgIGNvbnN0IG1vZGFsUGFyZW50VGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmcmllbmRzX19tb2RhbFwiKTtcbiAgICAgIG1vZGFsUGFyZW50VGFyZ2V0LmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImgxXCIsXG4gICAgICAgIGNvbnRlbnQ6IGBZb3Ugc3VyZSB5b3Ugd2FudCAke2ZyaWVuZFRvQWRkTmFtZX0gYXMgYSBmcmllbmQ/YCxcbiAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgIGlkOiBcImZyaWVuZHNfX2NvbnRlbnRcIlxuICAgICAgICB9XG4gICAgICB9KSlcbiAgICAgIG1vZGFsUGFyZW50VGFyZ2V0LmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgIGVsZW1lbnRUeXBlOiBcInBcIixcbiAgICAgICAgY29udGVudDogXCJJIG1lYW4gcmVhbGx5Li4uLlwiLFxuICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgaHJlZjogXCIjXCIsXG4gICAgICAgICAgaWQ6IFwiZnJpZW5kc19fY2xvc2VcIlxuICAgICAgICB9XG4gICAgICB9KSlcbiAgICAgIG1vZGFsUGFyZW50VGFyZ2V0LmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImJ1dHRvblwiLFxuICAgICAgICBjb250ZW50OiBcIkRvbid0IEZyaWVuZFwiLFxuICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgaWQ6IFwiZG9udEZyaWVuZFwiLFxuICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCJcbiAgICAgICAgfVxuICAgICAgfSkpXG4gICAgICBtb2RhbFBhcmVudFRhcmdldC5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICBlbGVtZW50VHlwZTogXCJidXR0b25cIixcbiAgICAgICAgY29udGVudDogYFllcywgbWFrZSAke2ZyaWVuZFRvQWRkTmFtZX0gYSBGcmllbmRgLFxuICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgaWQ6IFwiZnJpZW5kSXRVcFwiLFxuICAgICAgICAgIG5hbWU6IHdhbnRlZEZyaWVuZCxcbiAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiXG4gICAgICAgIH1cbiAgICAgIH0pKVxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkb250RnJpZW5kXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7ZnJpZW5kc0V2ZW50c0xpc3RlbmVyLmNsb3NlTWVzc2FnZU1vZGFsKClcbiAgICAgIH0pXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZyaWVuZEl0VXBcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZnJpZW5kc0V2ZW50c0xpc3RlbmVyLmNsb3NlTWVzc2FnZU1vZGFsKClcbiAgICAgIH0pXG4gICAgICB0aGlzLm9wZW5GcmllbmRNb2RhbCgpXG4gICAgfSxcbiAgICBvcGVuRnJpZW5kTW9kYWwgKCkge1xuICAgICAgbGV0IGJhY2tkcm9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmcmllbmRzX19iYWNrZHJvcFwiKTtcbiAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnJpZW5kc19fbW9kYWxcIik7XG4gICAgICBiYWNrZHJvcC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9LFxuICAgIGJ1aWxkRnJpZW5kU2VhcmNoQmFyICgpIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3V0cHV0XCIpLmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImRpdlwiLFxuICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgaWQ6IFwiZnJpZW5kLXNlYXJjaC1ib3hcIlxuICAgICAgICB9XG4gICAgICB9KSlcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnJpZW5kLXNlYXJjaC1ib3hcIikuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgZWxlbWVudFR5cGU6IFwiaW5wdXRcIixcbiAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgIGlkOiBcImZyaWVuZC1zZWFyY2gtaW5wdXRcIixcbiAgICAgICAgICBjbGFzczogXCJzZWFyY2gtdHh0XCIsXG4gICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgICBwbGFjZWhvbGRlcjogXCJTZWFyY2ggRm9yIEZyaWVuZHNcIlxuICAgICAgICB9XG4gICAgICB9KSlcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnJpZW5kLXNlYXJjaC1ib3hcIikuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgZWxlbWVudFR5cGU6IFwiYVwiLFxuICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgY2xhc3M6IFwiZnJpZW5kLXNlYXJjaC1idG5cIixcbiAgICAgICAgICBocmVmOiBcIiNcIixcbiAgICAgICAgICBpZDogXCJmcmllbmQtaWNvbi1hbmNob3JcIlxuICAgICAgICB9XG4gICAgICB9KSlcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnJpZW5kLWljb24tYW5jaG9yXCIpLmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImlcIixcbiAgICAgICAgY3NzQ2xhc3M6IFwiZmFzXCJcbiAgICAgIH0pKVxuICAgICAgbGV0IHNlYXJjaEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhc1wiKTtcbiAgICAgIHNlYXJjaEljb24uY2xhc3NMaXN0LmFkZChcImZhLXNlYXJjaFwiKTtcblxuICAgICAgY29uc3QgdXNlcnNTZWFyY2hGcmllbmRJbnB1dEVudGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmcmllbmQtc2VhcmNoLWlucHV0XCIpO1xuICAgICAgdXNlcnNTZWFyY2hGcmllbmRJbnB1dEVudGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCBrZXlQcmVzc0V2ZW50ID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZXZlbnQua2V5KVxuICAgICAgICBpZiAoa2V5UHJlc3NFdmVudC5jaGFyQ29kZSA9PT0gMTMpIHtcbiAgICAgICAgICBsZXQgdXNlcklucHV0RW50ZXIgPSBrZXlQcmVzc0V2ZW50LnRhcmdldC52YWx1ZTtcblxuICAgICAgICAgIGZyaWVuZHNFdmVudHNMaXN0ZW5lci5zZWFyY2hJbnB1dE1hZ2ljKHVzZXJJbnB1dEVudGVyKTtcbiAgICAgICAgICB1c2Vyc1NlYXJjaEZyaWVuZElucHV0RW50ZXIudmFsdWUgPSBcIlwiO1xuXG4gICAgICAgIH1cbiAgICAgIH0pXG5cblxuICAgICAgY29uc3QgdXNlcnNTZWFyY2hGcmllbmRJbnB1dENsaWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmcmllbmQtaWNvbi1hbmNob3JcIik7XG4gICAgICB1c2Vyc1NlYXJjaEZyaWVuZElucHV0Q2xpY2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgbGV0IHVzZXJJbnB1dENsaWNrID0gdXNlcnNTZWFyY2hGcmllbmRJbnB1dEVudGVyLnZhbHVlXG4gICAgICAgIGZyaWVuZHNFdmVudHNMaXN0ZW5lci5zZWFyY2hJbnB1dE1hZ2ljKHVzZXJJbnB1dENsaWNrKTtcbiAgICAgICAgdXNlcnNTZWFyY2hGcmllbmRJbnB1dEVudGVyLnZhbHVlID0gXCJcIjtcblxuICAgICAgfSlcbiAgICB9LFxuICAgIHNlYXJjaFJlc3VsdERpc3BsYXllZCAoZnJpZW5kU2VhcmNoUmVzdWx0RGlzcGxheWVkKSB7XG4gICAgICBjb25zb2xlLmxvZyhcInlvXCIpXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm91dHB1dFwiKS5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICBlbGVtZW50VHlwZTogXCJzZWN0aW9uXCIsXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICBpZDogXCJtb2RhbC1jb250YWluZXJcIlxuICAgICAgICB9XG4gICAgICB9KSlcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtY29udGFpbmVyXCIpLmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImRpdlwiLFxuICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgaWQ6IFwiZnJpZW5kc19fYmFja2Ryb3BcIlxuICAgICAgICB9XG4gICAgICB9KSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsLWNvbnRhaW5lclwiKS5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICBlbGVtZW50VHlwZTogXCJkaXZcIixcbiAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgIGlkOiBcImZyaWVuZHNfX21vZGFsXCJcbiAgICAgICAgfVxuICAgICAgfSkpXG4gICAgICBjb25zdCBtb2RhbFBhcmVudFRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnJpZW5kc19fbW9kYWxcIik7XG4gICAgICBtb2RhbFBhcmVudFRhcmdldC5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICBlbGVtZW50VHlwZTogXCJoMVwiLFxuICAgICAgICBjb250ZW50OiBgV291bGQgeW91IGxpa2UgdG8gYmUgZnJpZW5kcyB3aXRoICR7ZnJpZW5kU2VhcmNoUmVzdWx0RGlzcGxheWVkLnVzZXJOYW1lfT9gLFxuICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgaWQ6IFwiZnJpZW5kc19fY29udGVudFwiXG4gICAgICAgIH1cbiAgICAgIH0pKVxuICAgICAgbW9kYWxQYXJlbnRUYXJnZXQuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgZWxlbWVudFR5cGU6IFwicFwiLFxuICAgICAgICBjb250ZW50OiBgSSBtZWFuICR7ZnJpZW5kU2VhcmNoUmVzdWx0RGlzcGxheWVkLnVzZXJOYW1lfSBpcyBwcmV0dHkgY29vbC4uLmAsXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICBocmVmOiBcIiNcIixcbiAgICAgICAgICBpZDogXCJmcmllbmRzX19jbG9zZVwiXG4gICAgICAgIH1cbiAgICAgIH0pKVxuICAgICAgbW9kYWxQYXJlbnRUYXJnZXQuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgZWxlbWVudFR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgIGNvbnRlbnQ6IFwiRG9uJ3QgRnJpZW5kXCIsXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICBpZDogXCJkb250RnJpZW5kXCIsXG4gICAgICAgICAgdHlwZTogXCJidXR0b25cIlxuICAgICAgICB9XG4gICAgICB9KSlcbiAgICAgIG1vZGFsUGFyZW50VGFyZ2V0LmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImJ1dHRvblwiLFxuICAgICAgICBjb250ZW50OiBgWWVzLCBtYWtlICR7ZnJpZW5kU2VhcmNoUmVzdWx0RGlzcGxheWVkLnVzZXJOYW1lfSBhIEZyaWVuZGAsXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICBpZDogXCJmcmllbmRJdFVwLXNlYXJjaE1vZGFsXCIsXG4gICAgICAgICAgdHlwZTogXCJidXR0b25cIlxuICAgICAgICB9XG4gICAgICB9KSlcblxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkb250RnJpZW5kXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7ZnJpZW5kc0V2ZW50c0xpc3RlbmVyLmNsb3NlTWVzc2FnZU1vZGFsKClcbiAgICAgIH0pXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZyaWVuZEl0VXAtc2VhcmNoTW9kYWxcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZnJpZW5kc0V2ZW50c0xpc3RlbmVyLnNlYXJjaEJhckZyaWVuZGluZyhmcmllbmRTZWFyY2hSZXN1bHREaXNwbGF5ZWQuaWQpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLm9wZW5GcmllbmRNb2RhbCgpXG4gICAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZyaWVuZHNcblxuLy8gY29uc3QgdGVzdGVyID0gW1xuLy8gICB7XG4vLyAgICAgZWxlbWVudFR5cGU6IFwiaDJcIixcbi8vICAgICBjb250ZW50OiBcImpha2UgYmFubm9uXCJcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGVsZW1lbnRUeXBlOiBcInBcIixcbi8vICAgICBjb250ZW50OiBcIlBvb2wgUGFydHkgM3BtXCJcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGVsZW1lbnRUeXBlOiBcInBcIixcbi8vICAgICBjb250ZW50OiBcImNoZWNrIG91dCB0aGlzIG5ld3MgYXJ0aWNsZVwiXG4vLyAgIH1cbi8vIF0iLCJpbXBvcnQgZnJpZW5kcyBmcm9tIFwiLi9mcmllbmRzXCJcbmltcG9ydCBtZXNzYWdlcyBmcm9tIFwiLi9tZXNzYWdlc1wiXG5pbXBvcnQgbm9tYWREYXRhIGZyb20gXCIuL25vbWFkRGF0YVwiO1xuXG5jb25zdCBmcmllbmRzRXZlbnRzTGlzdGVuZXIgPSB7XG4gIGZyaWVuZHNEZWxldGVGcmllbmQgKCkge1xuICAgIGNvbnN0IGZyaWVuZFRvRGVsZXRlID0gKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QudmFsdWUpLnNwbGl0KFwiLVwiKVsyXTtcbiAgICBsZXQgdXNlcklkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKTtcbiAgICBsZXQgY3VycmVudFVzZXIgPSB1c2VySWQ7XG4gICAgY29uc29sZS5sb2coZnJpZW5kVG9EZWxldGUsIGN1cnJlbnRVc2VyKTtcbiAgICBsZXQgZmluYWxOdW1iZXJTZW5kRm9yRGVsZXRlID0gMFxuXG4gICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xuICAgICAgXCJkYXRhU2V0XCIgOiBcImZyaWVuZHNcIixcbiAgICAgIFwiZmV0Y2hUeXBlXCIgOiBcIkdFVFwiLFxuICAgICAgXCJkYXRhQmFzZU9iamVjdFwiIDogXCJcIixcbiAgICAgIFwiZW1iZWRJdGVtXCIgOiBcIj9fZW1iZWQ9ZnJpZW5kc1wiXG4gICAgfSlcbiAgICAudGhlbihkZXN0cm95RnJpZW5kc0hlYXJ0ID0+IHtcbiAgICAgIGRlc3Ryb3lGcmllbmRzSGVhcnQuZm9yRWFjaChnb29kYnllRnJpZW5kID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZ29vZGJ5ZUZyaWVuZC51c2VySWQsIE51bWJlcihjdXJyZW50VXNlcikpXG4gICAgICAgIGlmIChnb29kYnllRnJpZW5kLm90aGVyRnJpZW5kSWQgPT09IE51bWJlcihmcmllbmRUb0RlbGV0ZSkgJiYgZ29vZGJ5ZUZyaWVuZC51c2VySWQgPT09IE51bWJlcihjdXJyZW50VXNlcikpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGVhY2VPdXRcIixnb29kYnllRnJpZW5kLmlkKTtcbiAgICAgICAgICAgIGZpbmFsTnVtYmVyU2VuZEZvckRlbGV0ZSA9IGdvb2RieWVGcmllbmQuaWQ7XG5cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIGxldCBnb29kQnllU2VhcmNoUmVzdWx0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBmcmllbmQtJHtmcmllbmRUb0RlbGV0ZX1gKTtcbiAgICAgIGdvb2RCeWVTZWFyY2hSZXN1bHRzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZ29vZEJ5ZVNlYXJjaFJlc3VsdHMpO1xuXG4gICAgICBjb25zb2xlLmxvZyhmaW5hbE51bWJlclNlbmRGb3JEZWxldGUpXG4gICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICAgIFwiZGVsZXRlSWRcIiA6IGZpbmFsTnVtYmVyU2VuZEZvckRlbGV0ZSxcbiAgICAgICAgXCJkYXRhU2V0XCIgOiBcImZyaWVuZHNcIixcbiAgICAgICAgXCJmZXRjaFR5cGVcIiA6IFwiREVMRVRFXCIsXG4gICAgICAgIFwiZGF0YUJhc2VPYmplY3RcIiA6IHtcbiAgICAgICAgICBcInVzZXJJZFwiOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfSxcbiAgZnJpZW5kc0FkZEZyaWVuZCAoKSB7XG4gICAgbGV0IHVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIik7XG4gICAgbGV0IGN1cnJlbnRVc2VyID0gTnVtYmVyKHVzZXJJZCk7XG5cblxuICAgIGNvbnN0IGZyaWVuZFRvQmVBZGRlZCA9IChldmVudC50YXJnZXQuaWQpLnNwbGl0KFwiLVwiKVszXTtcbiAgICBjb25zb2xlLmxvZyhgdXNlciR7Y3VycmVudFVzZXJ9YCxgQWRkaW5nIEZyaWVuZCR7ZnJpZW5kVG9CZUFkZGVkfWApXG5cbiAgICBsZXQgZ29vZEJ5ZU5vbkZyaWVuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwb3RlbnRpYWxGcmllbmQtJHtmcmllbmRUb0JlQWRkZWR9YCk7XG4gICAgZ29vZEJ5ZU5vbkZyaWVuZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGdvb2RCeWVOb25GcmllbmQpO1xuICAgIGFsZXJ0KGAke2V2ZW50LnRhcmdldC5wcmV2aW91c1NpYmxpbmcuaW5uZXJUZXh0fSBpcyBub3cgeW91ciBmcmllbmQhYCk7XG5cbiAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICBcImRhdGFTZXRcIiA6IFwiZnJpZW5kc1wiLFxuICAgICAgXCJmZXRjaFR5cGVcIiA6IFwiUE9TVFwiLFxuICAgICAgXCJkYXRhQmFzZU9iamVjdFwiIDoge1xuICAgICAgICBcInVzZXJJZFwiOiBjdXJyZW50VXNlcixcbiAgICAgICAgXCJvdGhlckZyaWVuZElkXCI6IE51bWJlcihmcmllbmRUb0JlQWRkZWQpLFxuICAgICAgfVxuICAgIH0pXG4gIH0sXG4gIHNoaXogKCkge1xuICAgIGNvbnN0IGZyaWVuZFRvQmVBZGRlZCA9IGV2ZW50LnRhcmdldC5hdHRyaWJ1dGVzLm5hbWUudmFsdWU7XG4gICAgY29uc3QgZnJpZW5kVG9CZUFkZGVkSGFzQU5hbWUgPSBldmVudC50YXJnZXQudGV4dENvbnRlbnQuc3BsaXQoXCI6XCIpWzBdXG4gICAgbGV0IGZyaWVuZHNJSGF2ZSA9IFtdXG4gICAgbGV0IHVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xuICAgIGxldCBjdXJyZW50VXNlciA9IE51bWJlcih1c2VySWQpO1xuICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcbiAgICAgIFwiZGF0YVNldFwiIDogXCJmcmllbmRzXCIsXG4gICAgICBcImZldGNoVHlwZVwiIDogXCJHRVRcIixcbiAgICAgIFwiZGF0YUJhc2VPYmplY3RcIiA6IFwiXCIsXG4gICAgICBcImVtYmVkSXRlbVwiIDogXCI/X2VtYmVkPWZyaWVuZHNcIlxuICAgIH0pXG4gICAgLnRoZW4oZnJvbUZyaWVuZHMgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coZnJvbUZyaWVuZHMpXG4gICAgICBmcm9tRnJpZW5kcy5mb3JFYWNoKGZyaWVuZERhdGEgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhmcmllbmREYXRhKVxuICAgICAgICBpZiAoZnJpZW5kRGF0YS51c2VySWQgPT09IGN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgZnJpZW5kc0lIYXZlLnB1c2goZnJpZW5kRGF0YS5vdGhlckZyaWVuZElkKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLy8gY29uc29sZS5sb2coZnJpZW5kc0lIYXZlKVxuICAgICAgZnJpZW5kcy5mcmllbmRTb3J0RnJvbU1lc3NhZ2VzU2VjdGlvbihmcmllbmRzSUhhdmUsIGZyaWVuZFRvQmVBZGRlZCwgZnJpZW5kVG9CZUFkZGVkSGFzQU5hbWUpXG4gICAgfSlcbiAgfSxcbiAgY2xvc2VNZXNzYWdlTW9kYWwoKSB7XG4gICAgbGV0IHVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xuICAgIGxldCBjdXJyZW50VXNlciA9IE51bWJlcih1c2VySWQpO1xuXG4gICAgaWYgKGV2ZW50LnRhcmdldC5pZCA9PT0gXCJkb250RnJpZW5kXCIpIHtcbiAgICAgIGxldCBnb29kQnllU2VhcmNoUmVzdWx0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtY29udGFpbmVyXCIpO1xuICAgICAgZ29vZEJ5ZVNlYXJjaFJlc3VsdHMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChnb29kQnllU2VhcmNoUmVzdWx0cyk7XG4gICAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuaWQgPT09IFwiZnJpZW5kSXRVcFwiKSB7XG4gICAgICBsZXQgZ29vZEJ5ZVNlYXJjaFJlc3VsdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsLWNvbnRhaW5lclwiKTtcbiAgICAgIGdvb2RCeWVTZWFyY2hSZXN1bHRzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZ29vZEJ5ZVNlYXJjaFJlc3VsdHMpO1xuICAgICAgbGV0IGZyaWVuZFRvYmUgPSBldmVudC50YXJnZXQuYXR0cmlidXRlcy5uYW1lLnZhbHVlO1xuICAgICAgY29uc29sZS5sb2coZnJpZW5kVG9iZSlcbiAgICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xuICAgICAgICAgIFwiZGF0YVNldFwiIDogXCJmcmllbmRzXCIsXG4gICAgICAgICAgXCJmZXRjaFR5cGVcIiA6IFwiUE9TVFwiLFxuICAgICAgICAgIFwiZGF0YUJhc2VPYmplY3RcIiA6IHtcbiAgICAgICAgICAgIFwidXNlcklkXCI6IGN1cnJlbnRVc2VyLFxuICAgICAgICAgICAgXCJvdGhlckZyaWVuZElkXCI6IE51bWJlcihmcmllbmRUb2JlKSxcbiAgICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgfVxuICB9LFxuICBzZWFyY2hJbnB1dE1hZ2ljICh1c2VySW5wdXQpIHtcbiAgICBsZXQgdXNlcklkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyk7XG4gICAgbGV0IGN1cnJlbnRVc2VyID0gTnVtYmVyKHVzZXJJZCk7XG4gICAgLy8gY29uc29sZS5sb2codXNlcklucHV0KVxuICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcbiAgICAgIFwiZGF0YVNldFwiIDogXCJ1c2Vyc1wiLFxuICAgICAgXCJmZXRjaFR5cGVcIiA6IFwiR0VUXCIsXG4gICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiBcIlwiLFxuICAgICAgXCJlbWJlZEl0ZW1cIiA6IFwiP19lbWJlZD11c2Vyc1wiXG4gICAgfSlcbiAgICAudGhlbih1c2VycyA9PiB7XG4gICAgICBjb25zdCBmb3VuZFVzZXJzID0gdXNlcnMuZmluZCh1c2VyID0+IHVzZXIudXNlck5hbWUuaW5jbHVkZXModXNlcklucHV0KSk7XG4gICAgICBjb25zb2xlLmxvZyhmb3VuZFVzZXJzLmlkLCBjdXJyZW50VXNlcilcbiAgICAgIGlmIChmb3VuZFVzZXJzLmlkID09PSBjdXJyZW50VXNlcikge1xuICAgICAgICBhbGVydChcIkNhbid0IGZyaWVuZCB5b3Vyc2VsZlwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZyaWVuZHMuc2VhcmNoUmVzdWx0RGlzcGxheWVkKGZvdW5kVXNlcnMpO1xuICAgICAgfVxuICAgIH0pXG4gIH0sXG4gIHNlYXJjaEJhckZyaWVuZGluZyAoZnJpZW5kVG9CZUZyb21TZWFyY2hJZCkge1xuICAgIGNvbnN0IGRlZmluZWRBc0Zyb21TZWFyY2hNb2RhbCA9IFwibW9kYWxcIlxuICAgIGxldCBmcmllbmRzSUhhdmUgPSBbXVxuICAgIGxldCB1c2VySWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKTtcbiAgICBsZXQgY3VycmVudFVzZXIgPSBOdW1iZXIodXNlcklkKTtcbiAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICBcImRhdGFTZXRcIiA6IFwiZnJpZW5kc1wiLFxuICAgICAgXCJmZXRjaFR5cGVcIiA6IFwiR0VUXCIsXG4gICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiBcIlwiLFxuICAgICAgXCJlbWJlZEl0ZW1cIiA6IFwiP19lbWJlZD1mcmllbmRzXCJcbiAgICB9KVxuICAgIC50aGVuKGZyb21GcmllbmRzID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGZyb21GcmllbmRzKVxuICAgICAgZnJvbUZyaWVuZHMuZm9yRWFjaChmcmllbmREYXRhID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZnJpZW5kRGF0YSlcbiAgICAgICAgaWYgKGZyaWVuZERhdGEudXNlcklkID09PSBjdXJyZW50VXNlcikge1xuICAgICAgICAgIGZyaWVuZHNJSGF2ZS5wdXNoKGZyaWVuZERhdGEub3RoZXJGcmllbmRJZClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC8vIGNvbnNvbGUubG9nKGZyaWVuZHNJSGF2ZSlcbiAgICAgIGZyaWVuZHMuZnJpZW5kU29ydEZyb21NZXNzYWdlc1NlY3Rpb24oZnJpZW5kc0lIYXZlLCBmcmllbmRUb0JlRnJvbVNlYXJjaElkLCBkZWZpbmVkQXNGcm9tU2VhcmNoTW9kYWwpXG4gICAgfSlcbiAgfSxcbiAgc2VhcmNoQmFyQWRkRnJpZW5kVG9Kc29uIChmcmllbmRUb0JlKSB7XG4gICAgbGV0IHVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xuICAgIGxldCBjdXJyZW50VXNlciA9IE51bWJlcih1c2VySWQpO1xuXG4gICAgbGV0IGdvb2RCeWVTZWFyY2hSZXN1bHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC1jb250YWluZXJcIik7XG4gICAgZ29vZEJ5ZVNlYXJjaFJlc3VsdHMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChnb29kQnllU2VhcmNoUmVzdWx0cyk7XG5cbiAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICBcImRhdGFTZXRcIiA6IFwiZnJpZW5kc1wiLFxuICAgICAgXCJmZXRjaFR5cGVcIiA6IFwiUE9TVFwiLFxuICAgICAgXCJkYXRhQmFzZU9iamVjdFwiIDoge1xuICAgICAgICBcInVzZXJJZFwiOiBjdXJyZW50VXNlcixcbiAgICAgICAgXCJvdGhlckZyaWVuZElkXCI6IE51bWJlcihmcmllbmRUb0JlKSxcbiAgICAgIH1cbiAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmcmllbmRzRXZlbnRzTGlzdGVuZXIiLCJpbXBvcnQgbm9tYWREYXRhIGZyb20gXCIuL25vbWFkRGF0YVwiO1xuaW1wb3J0IGRvbUNvbXBvbmVudHMgZnJvbSBcIi4vZG9tQ29tcG9uZW50c1wiO1xuaW1wb3J0IG1lc3NhZ2VzRXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vbWVzc2FnZXNFdmVudExpc3RlbmVyc1wiO1xuaW1wb3J0IGZyaWVuZHNFdmVudHNMaXN0ZW5lciBmcm9tIFwiLi9mcmllbmRzRXZlbnRzTGlzdGVuZXIuanNcIjtcblxuY29uc3QgbWVzc2FnZXMgPSB7XG5cbiAgICBjcmVhdGVNZXNzYWdlQm9hcmQoKSB7XG4gICAgICAgICQoXCIjb3V0cHV0XCIpLmVtcHR5KClcblxuICAgICAgICBsZXQgb3V0cHV0QXJ0aWNsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3V0cHV0XCIpXG5cbiAgICAgICAgLy9jcmVhdGUgZGlzcGxheSBjb250YWluZXJcbiAgICAgICAgbGV0IG1lc3NhZ2VzQ29udGFpbmVyID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJzZWN0aW9uXCIsXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwibWVzc2FnZXNDb250YWluZXJcIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgaWQgOiBcIm1lc3NhZ2VzQ29udGFpbmVyXCJcbiAgICAgICAgICAgIH19KTtcblxuICAgICAgICAvL2NyZWF0ZSBtZXNzYWdlIGlucHV0IGZpZWxkXG4gICAgICAgIGxldCBtZXNzYWdlSW5wdXQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImlucHV0XCIsXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwibWVzc2FnZUlucHV0XCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgIGlkIDogXCJtZXNzYWdlSW5wdXRcIixcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJFbnRlciBNZXNzYWdlIEhlcmVcIlxuICAgICAgICAgICAgfX0pO1xuXG4gICAgICAgIC8vY3JlYXRlIHN1Ym1pdCBidXR0b24gZm9yIGlucHV0IGZpZWxkXG4gICAgICAgIGxldCBtZXNzYWdlU3VibWl0QnV0dG9uID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJidXR0b25cIixcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJtZXNzYWdlU3VibWl0QnV0dG9uXCIsXG4gICAgICAgICAgICBjb250ZW50IDogXCJTdWJtaXRcIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgaWQgOiBcIm1lc3NhZ2VTdWJtaXRCdXR0b25cIixcbiAgICAgICAgICAgICAgICB0eXBlIDogXCJidXR0b25cIlxuICAgICAgICAgICAgfX0pO1xuXG4gICAgICAgIG1lc3NhZ2VTdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1lc3NhZ2VzRXZlbnRMaXN0ZW5lcnMucG9zdE5ld01lc3NhZ2UsIHtvbmNlOiB0cnVlfSk7XG4gICAgICAgIG1lc3NhZ2VzQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VJbnB1dCk7XG4gICAgICAgIG1lc3NhZ2VzQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VTdWJtaXRCdXR0b24pO1xuICAgICAgICBvdXRwdXRBcnRpY2xlLmFwcGVuZENoaWxkKG1lc3NhZ2VzQ29udGFpbmVyKTtcblxuICAgICAgICAgICAgdGhpcy5nZXRNZXNzYWdlcygpXG4gICAgfSxcblxuICAgIGdldE1lc3NhZ2VzKCkge1xuXG4gICAgICAgIC8vR0VUIGZldGNoICYgLnRoZW4gdG8gYnVpbGQgb2JqZWN0KHMpIGZvciBjcmVhdGVEb21FbGVtZW50KCkgdXNpbmcgX2V4cGFuZCB0byBkaXNwbGF5IFVOOiBtZXNzYWdlXG4gICAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcblxuICAgICAgICAgICAgICAgIGRhdGFTZXQgOiBcIm1lc3NhZ2VzXCIsXG4gICAgICAgICAgICAgICAgZmV0Y2hUeXBlIDogXCJHRVRcIixcbiAgICAgICAgICAgICAgICBlbWJlZEl0ZW0gOiBcIj9fZXhwYW5kPXVzZXJcIlxuXG4gICAgICAgIH0pLnRoZW4obWVzc2FnZXMgPT4ge1xuXG4gICAgICAgICAgICBsZXQgbWVzc2FnZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVzc2FnZXNDb250YWluZXJcIik7XG4gICAgICAgICAgICBsZXQgbWVzc2FnZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZXNzYWdlSW5wdXRcIik7XG5cbiAgICAgICAgICAgIC8vc29ydCBtZXNzYWdlcyBieSB0aW1lU3RhbXBcbiAgICAgICAgICAgIG1lc3NhZ2VzLnNvcnQoZnVuY3Rpb24oYSxiKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoYS50aW1lU3RhbXApIC0gbmV3IERhdGUoYi50aW1lU3RhbXApO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vYnVpbGQgRE9NIENvbXBvbmVudCBmb3IgZWFjaCBtZXNzYWdlIGFuZCBhcHBlbmRcbiAgICAgICAgICAgIG1lc3NhZ2VzLmZvckVhY2gobWVzc2FnZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSlcbiAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZVRleHQgPSBtZXNzYWdlLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgbGV0IHVzZXJOYW1lID0gbWVzc2FnZS51c2VyLnVzZXJOYW1lO1xuICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlSWQgPSBtZXNzYWdlLmlkO1xuICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlVGltZVN0YW1wID0gbWVzc2FnZS50aW1lU3RhbXA7XG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2VVc2VyID0gYCR7bWVzc2FnZS51c2VySWR9YDtcbiAgICAgICAgICAgICAgICBsZXQgbG9nZ2VkSW5Vc2VyID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKTtcblxuICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlRWxlbWVudCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgIC8vIEFERCBMSU5LIEhFUkVcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImgzXCIsXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzIDogXCJtZXNzYWdlVXNlck5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCA6IGAke3VzZXJOYW1lfTpgLFxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGBtZXNzYWdlJHttZXNzYWdlSWR9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgOiBwYXJzZUludChtZXNzYWdlVXNlcilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG5cblxuICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlRWxlbWVudDIgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwicFwiLFxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcyA6IFwibWVzc2FnZVRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCA6IGAke21lc3NhZ2VUZXh0fWAsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogbWVzc2FnZUlkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlVXNlciA9PT0gbG9nZ2VkSW5Vc2VyKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2VFZGl0QnV0dG9uID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgOiBcIm1lc3NhZ2VFZGl0QnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50IDogXCJFZGl0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBgbWVzc2FnZUVkaXRCdXR0b25fJHttZXNzYWdlSWR9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBtZXNzYWdlVGltZVN0YW1wLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgOiBcImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtZXNzYWdlc0V2ZW50TGlzdGVuZXJzLmVkaXRNZXNzYWdlLCB7b25jZTogdHJ1ZX0pXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbGVtZW50LmFwcGVuZENoaWxkKG1lc3NhZ2VFbGVtZW50MilcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsZW1lbnQuYXBwZW5kQ2hpbGQobWVzc2FnZUVkaXRCdXR0b24pXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VDb250YWluZXIuaW5zZXJ0QmVmb3JlKG1lc3NhZ2VFbGVtZW50LCBtZXNzYWdlSW5wdXQpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWxlbWVudC5hcHBlbmRDaGlsZChtZXNzYWdlRWxlbWVudDIpXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VDb250YWluZXIuaW5zZXJ0QmVmb3JlKG1lc3NhZ2VFbGVtZW50LCBtZXNzYWdlSW5wdXQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1lc3NhZ2VFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmcmllbmRzRXZlbnRzTGlzdGVuZXIuc2hpeilcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lc3NhZ2VzO1xuIiwiaW1wb3J0IG5vbWFkRGF0YSBmcm9tIFwiLi9ub21hZERhdGFcIjtcbmltcG9ydCBkb21Db21wb25lbnRzIGZyb20gXCIuL2RvbUNvbXBvbmVudHNcIjtcbmltcG9ydCBtZXNzYWdlcyBmcm9tIFwiLi9tZXNzYWdlc1wiO1xuLy8gaW1wb3J0IGZyaWVuZHNFdmVudExpc3RlbmVycyBmcm9tIFwiLi9mcmllbmRzRXZlbnRMaXN0ZW5lcnMuanNcIjtcblxuY29uc3QgbWVzc2FnZXNFdmVudExpc3RlbmVycyA9IHtcblxuICAgIHBvc3ROZXdNZXNzYWdlKCkge1xuXG4gICAgICAgIGxldCBtZXNzYWdlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lc3NhZ2VJbnB1dFwiKS52YWx1ZTtcbiAgICAgICAgbGV0IHRpbWVTdGFtcCA9IG5ldyBEYXRlKCk7XG5cbiAgICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xuXG4gICAgICAgICAgICBkYXRhU2V0IDogXCJtZXNzYWdlc1wiLFxuICAgICAgICAgICAgZmV0Y2hUeXBlIDogXCJQT1NUXCIsXG4gICAgICAgICAgICBkYXRhQmFzZU9iamVjdCA6IHtcbiAgICAgICAgICAgICAgICB1c2VySWQgOiBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSksXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA6IG1lc3NhZ2VJbnB1dCwvLy52YWx1ZSxcbiAgICAgICAgICAgICAgICB0aW1lU3RhbXAgOiB0aW1lU3RhbXBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbihzaGl0ID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNoaXQpXG4gICAgICAgICAgICAkKFwiI291dHB1dFwiKS5lbXB0eSgpO1xuICAgICAgICAgICAgbWVzc2FnZXMuY3JlYXRlTWVzc2FnZUJvYXJkKCk7XG4gICAgICAgIH0pXG4gICAgfSxcblxuICAgIGVkaXRNZXNzYWdlKCkge1xuICAgICAgICBsZXQgbnVtYmVyID0gZXZlbnQuY3VycmVudFRhcmdldC5pZDtcbiAgICAgICAgbGV0IG1lc3NhZ2VBcnJheSA9IG51bWJlci5zcGxpdChcIl9cIik7XG4gICAgICAgIGxldCBtZXNzYWdlSWQgPSBtZXNzYWdlQXJyYXlbMV07XG5cbiAgICAgICAgbGV0IG1lc3NhZ2VUb0VkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHttZXNzYWdlSWR9YCk7XG4gICAgICAgIGxldCBtZXNzYWdlVGV4dCA9IG1lc3NhZ2VUb0VkaXQuaW5uZXJIVE1MO1xuICAgICAgICBsZXQgbWVzc2FnZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBtZXNzYWdlJHttZXNzYWdlSWR9YCk7XG4gICAgICAgIGxldCBtZXNzYWdlVGltZVN0YW1wID0gZXZlbnQuY3VycmVudFRhcmdldC5uYW1lO1xuXG4gICAgICAgIGxldCBtZXNzYWdlRWRpdEZvcm0gPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQgKHtcblxuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImZvcm1cIixcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJtZXNzYWdlRWRpdEZvcm1cIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgaWQgOiBcIm1lc3NhZ2VFZGl0Rm9ybVwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBtZXNzYWdlRWRpdEZpZWxkc2V0ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcblxuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImZpZWxkc2V0XCIsXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwibWVzc2FnZUVkaXRGaWVsZHNldFwiLFxuICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICBpZCA6IFwibWVzc2FnZUVkaXRGaWVsZHNldFwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBtZXNzYWdlRWRpdElucHV0ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcblxuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImlucHV0XCIsXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwibWVzc2FnZUVkaXRJbnB1dFwiLFxuICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICBpZCA6IGBtZXNzYWdlRWRpdElucHV0XyR7bWVzc2FnZUlkfWAsXG4gICAgICAgICAgICAgICAgdmFsdWUgOiBgJHttZXNzYWdlVGV4dH1gXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBtZXNzYWdlRWRpdFN1Ym1pdEJ1dHRvbiA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG5cbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJidXR0b25cIixcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJtZXNzYWdlRWRpdFN1Ym1pdEJ1dHRvblwiLFxuICAgICAgICAgICAgY29udGVudCA6IFwiU3VibWl0XCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgIGlkIDogYG1lc3NhZ2VFZGl0U3VibWl0QnV0dG9uXyR7bWVzc2FnZUlkfWAsXG4gICAgICAgICAgICAgICAgbmFtZTogbWVzc2FnZVRpbWVTdGFtcCxcbiAgICAgICAgICAgICAgICB0eXBlIDogXCJidXR0b25cIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgbWVzc2FnZUVkaXRTdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1lc3NhZ2VzRXZlbnRMaXN0ZW5lcnMuaGFuZGxlRWRpdFN1Ym1pdEJ1dHRvbilcbiAgICAgICAgbWVzc2FnZUVkaXRGaWVsZHNldC5hcHBlbmRDaGlsZChtZXNzYWdlRWRpdElucHV0KVxuICAgICAgICBtZXNzYWdlRWRpdEZpZWxkc2V0LmFwcGVuZENoaWxkKG1lc3NhZ2VFZGl0U3VibWl0QnV0dG9uKVxuICAgICAgICBtZXNzYWdlRWRpdEZvcm0uYXBwZW5kQ2hpbGQobWVzc2FnZUVkaXRGaWVsZHNldClcbiAgICAgICAgbWVzc2FnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlRWRpdEZvcm0pXG5cbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSxcblxuICAgIGhhbmRsZUVkaXRTdWJtaXRCdXR0b24oKSB7XG4gICAgICAgIGxldCBudW1iZXIgPSBldmVudC5jdXJyZW50VGFyZ2V0LmlkO1xuICAgICAgICBsZXQgbWVzc2FnZUFycmF5ID0gbnVtYmVyLnNwbGl0KFwiX1wiKTtcbiAgICAgICAgbGV0IG1lc3NhZ2VJZCA9IG1lc3NhZ2VBcnJheVsxXTtcbiAgICAgICAgbGV0IG1lc3NhZ2VUaW1lU3RhbXAgPSBgJHtldmVudC5jdXJyZW50VGFyZ2V0Lm5hbWV9YDtcbiAgICAgICAgbGV0IG1lc3NhZ2VFZGl0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbWVzc2FnZUVkaXRJbnB1dF8ke21lc3NhZ2VJZH1gKTtcblxuICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG5cbiAgICAgICAgICAgIHB1dElkIDogbWVzc2FnZUlkLFxuICAgICAgICAgICAgZGF0YVNldCA6IFwibWVzc2FnZXNcIixcbiAgICAgICAgICAgIGZldGNoVHlwZSA6IFwiUFVUXCIsXG4gICAgICAgICAgICBkYXRhQmFzZU9iamVjdCA6IHtcbiAgICAgICAgICAgICAgICB1c2VySWQgOiBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSksXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogYCR7bWVzc2FnZUVkaXRJbnB1dC52YWx1ZX1gLFxuICAgICAgICAgICAgICAgIHRpbWVTdGFtcDogYCR7bWVzc2FnZVRpbWVTdGFtcH1gXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4oc2hpdCA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzaGl0KVxuICAgICAgICAgICAgJChcIiNvdXRwdXRcIikuZW1wdHkoKTtcbiAgICAgICAgICAgIG1lc3NhZ2VzLmNyZWF0ZU1lc3NhZ2VCb2FyZCgpO1xuICAgICAgICB9KVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IG1lc3NhZ2VzRXZlbnRMaXN0ZW5lcnM7IiwiaW1wb3J0IG5vbWFkRGF0YSBmcm9tIFwiLi9ub21hZERhdGFcIjtcbmltcG9ydCBkb21Db21wb25lbnRzIGZyb20gXCIuL2RvbUNvbXBvbmVudHNcIjtcbi8vcHVsbCBmcm9tIGFwaSB0aGVuIGRpc3BsYXkgdG8gZG9tLlxuLy8gY3JlYXRlIHNhdmUgYnV0dG9uIHNlbmQgc2F2ZWQgYXJ0aWNsZXMgdG8gSnNvblxuLy8gY3JlYXRlIGJ1dHRvbiB0byBwdWxsIGFsbCBzYXZlZCBtYXRlcmlhbHMgaW4ganNvbi5cbi8vIGRlbGV0ZSBtZXRob2QgZm9yIGFydGljbGVzXG5jb25zdCBuZXdzID0ge1xuXG4gICAgZ2V0TmV3cygpe1xuICAgICAgICAvL3B1bGwgdGhlbiBzZW5kIHB1bGxlZCBkYXRhIHRvIGRvbVxuICAgICAgICByZXR1cm4gZmV0Y2goXCJodHRwOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cy8xXCIpXG4gICAgICAgICAgICAudGhlbihuZXdzSXRlbXMgPT4gbmV3c0l0ZW1zLmpzb24oKSlcbiAgICB9LFxuICAgIHNhdmUoKSB7XG4gICAgICAgIC8vVGhpcyBpcyBmdW5jdGlvbmluZyBhbmQgd3JpdGluZyB0byBKU09OLlxuICAgICAgICB0aGlzLmdldE5ld3MoKS50aGVuKHBvc3QgPT57XG4gICAgICAgIGNvbnN0IG5ld3NPYmplY3QgPSB7XG4gICAgICAgICAgICAgICAgXCJkYXRhU2V0XCIgOiBcIm5ld3NJdGVtc1wiLFxuICAgICAgICAgICAgICAgIFwiZmV0Y2hUeXBlXCIgOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidXNlcklkXCI6IDEsXG4gICAgICAgICAgICAgICAgICAgIFwidXJsXCI6IGAke3Bvc3QudGl0bGV9YCxcbiAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBgJHtwb3N0LmJvZHl9YCxcbiAgICAgICAgICAgICAgICAgICAgXCJzeW5vcHNpc1wiOiBcImJsYWggYmxhaCBibGFoXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2codGVzdG5ld3NPYmopO1xuICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YShuZXdzT2JqZWN0KTtcbiAgICB9KVxuICAgIH0sXG5cbiAgICBhbGxTYXZlZCgpe1xuICAgIC8vIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHRlc3RuZXdzT2JqKVxuICAgIH0sXG5cbiAgICBkZWxldGVEQigpe1xuXG5cbiAgICB9LFxuXG4gICAgbmV3c0VsZW1lbnRDcmVhdG9yKCl7XG4gICAgICAgICQoXCIjb3V0cHV0XCIpLmVtcHR5KClcbiAgICAgICAgY29uc3QgbmV3c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3V0cHV0XCIpXG4gICAgICAgIGxldCBuZXdzQ3JlYXRvcktleSA9IHtcbiAgICAgICAgICAgIFwiZGF0YVNldFwiIDogXCJuZXdzSXRlbXNcIixcbiAgICAgICAgICAgIFwiZmV0Y2hUeXBlXCIgOiBcIkdFVFwiLFxuICAgICAgICAgICAgXCJkYXRhQmFzZU9iamVjdFwiIDogXCJcIixcbiAgICAgICAgICAgIFwiZW1iZWRJdGVtXCIgOiBcIj9fZW1iZWQ9bmV3c0l0ZW1zXCJcbiAgICAgICAgfVxuICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YShuZXdzQ3JlYXRvcktleSlcbiAgICAgICAgLnRoZW4gKGRiR3JhYnMgPT4ge1xuICAgICAgICAgICAgZGJHcmFicy5mb3JFYWNoKGRiR3JhYiA9PiAge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRiR3JhYik7XG4gICAgICAgICAgICAgICAgbmV3c0NvbnRhaW5lci5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJTQVZFIEJJVENIXCIsXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzOiBcIm5ld3NTYXZlQnV0dG9uXCJcbiAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgICBuZXdzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImgyXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGRiR3JhYi50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3M6IFwibmV3c1RpdGxlXCJcbiAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgICBuZXdzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcInBcIixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogZGJHcmFiLnN5bm9wc2lzLFxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzczogXCJuZXdzQm9keVwiXG4gICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgbmV3c0NvbnRhaW5lci5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGRiR3JhYi51cmwsXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzOiBcIm5ld3NVUkxcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlczp7XG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmOmAke2RiR3JhYi51cmx9YFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkpXG5cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfSlcblxuICAgICAgICAvLyBjb25zdCBOZXdzVGVzdCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudChcImgyXCIsdGVzdFBhc3MsXCJ0ZXN0T2JqXCIsbnVsbCk7XG4gICAgICAgIC8vb3V0cHV0LmFwcGVuZENoaWxkKE5ld3NUZXN0KTtcblxuXG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgbmV3cyIsImltcG9ydCBldmVudExpc3RlbmVycyBmcm9tIFwiLi9ldmVudExpc3RlbmVyc1wiO1xuY29uc3Qgbm9tYWREYXRhID0ge1xuXG4gICAgY29ubmVjdFRvRGF0YShmZXRjaE9iamVjdCkge1xuXG4gICAgICAgIGxldCBkYXRhU2V0ID0gZmV0Y2hPYmplY3QuZGF0YVNldDtcbiAgICAgICAgbGV0IGVtYmVkSXRlbSA9IGZldGNoT2JqZWN0LmVtYmVkSXRlbTtcbiAgICAgICAgbGV0IGZldGNoVHlwZSA9IGZldGNoT2JqZWN0LmZldGNoVHlwZTtcbiAgICAgICAgbGV0IGRhdGFCYXNlT2JqZWN0ID0gZmV0Y2hPYmplY3QuZGF0YUJhc2VPYmplY3Q7XG4gICAgICAgIGxldCBwdXRJZCA9IGZldGNoT2JqZWN0LnB1dElkO1xuICAgICAgICBsZXQgZGVsZXRlSWQgPSBmZXRjaE9iamVjdC5kZWxldGVJZDtcblxuICAgICAgICBpZiAoZmV0Y2hUeXBlID09IFwiR0VUXCIpIHtcblxuICAgICAgICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC8ke2RhdGFTZXR9JHtlbWJlZEl0ZW19YClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkgLy8gcGFyc2VzIHJlc3BvbnNlIHRvIEpTT05cblxuICAgICAgICB9IGVsc2UgaWYgKGZldGNoVHlwZSA9PT0gXCJQT1NUXCIpe1xuXG4gICAgICAgIC8vIERlZmF1bHQgb3B0aW9ucyBhcmUgbWFya2VkIHdpdGggKlxuICAgICAgICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC8ke2RhdGFTZXR9YCwge1xuICAgICAgICAgICAgbWV0aG9kOiBgJHtmZXRjaFR5cGV9YCwgLy8gKkdFVCwgUE9TVCwgUFVULCBERUxFVEUsIGV0Yy5cbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcbiAgICAgICAgICAgICAgICAvLyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIHJlZmVycmVyOiBcIm5vLXJlZmVycmVyXCIsIC8vIG5vLXJlZmVycmVyLCAqY2xpZW50XG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhQmFzZU9iamVjdCksIC8vIGJvZHkgZGF0YSB0eXBlIG11c3QgbWF0Y2ggXCJDb250ZW50LVR5cGVcIiBoZWFkZXJcbiAgICAgICAgfSlcblxuICAgICAgICB9IGVsc2UgaWYoZmV0Y2hUeXBlID09PSBcIlBVVFwiKXtcbiAgICAgICAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODgvJHtkYXRhU2V0fS8ke3B1dElkfWAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogYCR7ZmV0Y2hUeXBlfWAsIC8vICpHRVQsIFBPU1QsIFBVVCwgREVMRVRFLCBldGMuXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXG4gICAgICAgICAgICAgICAgLy8gXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyByZWZlcnJlcjogXCJuby1yZWZlcnJlclwiLCAvLyBuby1yZWZlcnJlciwgKmNsaWVudFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YUJhc2VPYmplY3QpLCAvLyBib2R5IGRhdGEgdHlwZSBtdXN0IG1hdGNoIFwiQ29udGVudC1UeXBlXCIgaGVhZGVyXG4gICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSBpZiAoZmV0Y2hUeXBlID09PSBcIkRFTEVURVwiKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDg4LyR7ZGF0YVNldH0vJHtkZWxldGVJZH1gLCB7XG4gICAgICAgICAgICBtZXRob2Q6IGAke2ZldGNoVHlwZX1gLCAvLyAqR0VULCBQT1NULCBQVVQsIERFTEVURSwgZXRjLlxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxuICAgICAgICAgICAgICAgIC8vIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gcmVmZXJyZXI6IFwibm8tcmVmZXJyZXJcIiwgLy8gbm8tcmVmZXJyZXIsICpjbGllbnRcbiAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nIChcIllPVSBTQ1JFV0VEIElUIFVQXCIpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5vbWFkRGF0YSIsImltcG9ydCBub21hZERhdGEgZnJvbSBcIi4vbm9tYWREYXRhXCI7XG5pbXBvcnQgZG9tQ29tcG9uZW50cyBmcm9tIFwiLi9kb21Db21wb25lbnRzXCI7XG5pbXBvcnQgdGFza3NFdmVudExpc3RlbmVycyBmcm9tIFwiLi90YXNrc0V2ZW50TGlzdGVuZXJzXCI7XG5pbXBvcnQgdGFza3NQb3B1cCBmcm9tIFwiLi90YXNrc1BvcHVwXCI7XG4vLyBpbXBvcnQgZXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vZXZlbnRMaXN0ZW5lcnNcIlxuXG5jb25zdCB0YXNrcyA9IHtcblxuICAgIGNyZWF0ZVRhc2tUYWJsZXMoKSB7XG4gICAgICAgICQoXCIjb3V0cHV0XCIpLmVtcHR5KClcblxuICAgICAgICBsZXQgb3V0cHV0QXJ0aWNsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3V0cHV0XCIpXG5cbiAgICAgICAgLy9jcmVhdGUgZGlzcGxheSBjb250YWluZXJcbiAgICAgICAgbGV0IHRhc2tzQ29udGFpbmVyID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJzZWN0aW9uXCIsXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwidGFza3NDb250YWluZXJcIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgaWQgOiBcInRhc2tzQ29udGFpbmVyXCJcbiAgICAgICAgICAgIH19KTtcblxuICAgICAgICAvL2NyZWF0ZSB0YXNrcyB0YWJsZXNcbiAgICAgICAgbGV0IGFjdGl2ZVRhc2tzVGFibGUgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcInRhYmxlXCIsXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwiYWN0aXZlVGFza3NUYWJsZVwiLFxuICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICBpZCA6IFwiYWN0aXZlVGFza3NUYWJsZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBhY3RpdmVUYXNrc1RhYmxlVGl0bGUgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImNhcHRpb25cIixcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJhY3RpdmVUYXNrc1RhYmxlVGl0bGVcIixcbiAgICAgICAgICAgIGNvbnRlbnQgOiBcIkFDVElWRSBUQVNLU1wiXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBjb21wbGV0ZWRUYXNrc1RhYmxlID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJ0YWJsZVwiLFxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcImNvbXBsZXRlZFRhc2tzVGFibGVcIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgaWQgOiBcImNvbXBsZXRlZFRhc2tzVGFibGVcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgY29tcGxldGVkVGFza3NUYWJsZVRpdGxlID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJjYXB0aW9uXCIsXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwiY29tcGxldGVkVGFza3NUYWJsZVRpdGxlXCIsXG4gICAgICAgICAgICBjb250ZW50IDogXCJDT01QTEVURUQgVEFTS1NcIlxuICAgICAgICB9KVxuXG4gICAgICAgIC8vY3JlYXRlIHJvdyB3aXRoIGNvbHVtbiBoZWFkZXJzXG4gICAgICAgIGxldCBhY3RpdmVUYXNrc0hlYWRlclJvdyA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwidHJcIixcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJhY3RpdmVUYXNrc0hlYWRlclJvd1wiLFxuICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICBpZCA6IFwiYWN0aXZlVGFza3NIZWFkZXJSb3dcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgY29tcGxldGVkVGFza3NIZWFkZXJSb3cgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcInRyXCIsXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwiY29tcGxldGVkVGFza3NIZWFkZXJSb3dcIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgaWQgOiBcImNvbXBsZXRlZFRhc2tzSGVhZGVyUm93XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9jcmVhdGUgY29sdW1uIGhlYWRlcnNcbiAgICAgICAgbGV0IGFjdGl2ZVRhc2tzSGVhZGVyID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJ0aFwiLFxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcImFjdGl2ZVRhc2tzSGVhZGVyXCIsXG4gICAgICAgICAgICBjb250ZW50OiBcIlRhc2tcIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgaWQgOiBcImFjdGl2ZVRhc2tzSGVhZGVyXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGFjdGl2ZVRhc2tzRHVlRGF0ZUhlYWRlciA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwidGhcIixcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJhY3RpdmVUYXNrc0R1ZURhdGVIZWFkZXJcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiRHVlIERhdGVcIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgaWQgOiBcImFjdGl2ZVRhc2tzRHVlRGF0ZUhlYWRlclwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgYWN0aXZlVGFza3NFZGl0ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJ0aFwiLFxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcImFjdGl2ZVRhc2tzRWRpdFwiLFxuICAgICAgICAgICAgY29udGVudDogXCJcIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgaWQgOiBcImFjdGl2ZVRhc2tzRWRpdFwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBjb21wbGV0ZWRUYXNrc0hlYWRlciA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwidGhcIixcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJjb21wbGV0ZWRUYXNrc0hlYWRlclwiLFxuICAgICAgICAgICAgY29udGVudDogXCJUYXNrXCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgIGlkIDogXCJjb21wbGV0ZWRUYXNrc0hlYWRlclwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBjb21wbGV0ZWRUYXNrc0R1ZURhdGVIZWFkZXIgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcInRoXCIsXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwiY29tcGxldGVkVGFza3NEdWVEYXRlSGVhZGVyXCIsXG4gICAgICAgICAgICBjb250ZW50OiBcIkR1ZSBEYXRlXCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgIGlkIDogXCJjb21wbGV0ZWRUYXNrc0R1ZURhdGVIZWFkZXJcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy9jcmVhdGUgYnV0dG9uIHRvIG1ha2UgbmV3IHRhc2tzXG4gICAgICAgIGxldCBjcmVhdGVUYXNrQnV0dG9uID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJidXR0b25cIixcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJjcmVhdGVUYXNrQnV0dG9uXCIsXG4gICAgICAgICAgICBjb250ZW50IDogXCJDcmVhdGUgTmV3IFRhc2tcIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgaWQgOiBcImNyZWF0ZVRhc2tCdXR0b25cIixcbiAgICAgICAgICAgICAgICB0eXBlIDogXCJidXR0b25cIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgbGV0IGNvbXBsZXRlZFRhc2tzRWRpdCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwidGhcIixcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJjb21wbGV0ZWRUYXNrc0VkaXRcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgIGlkIDogXCJjb21wbGV0ZWRUYXNrc0VkaXRcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvL2FwcGVuZCBoZWFkZXIgcm93IHRvIHRhYmxlIGFuZCB0YWJsZSB0byBjb250YWluZXJcbiAgICAgICAgYWN0aXZlVGFza3NUYWJsZS5hcHBlbmRDaGlsZChhY3RpdmVUYXNrc1RhYmxlVGl0bGUpO1xuICAgICAgICBjb21wbGV0ZWRUYXNrc1RhYmxlLmFwcGVuZENoaWxkKGNvbXBsZXRlZFRhc2tzVGFibGVUaXRsZSk7XG4gICAgICAgIGFjdGl2ZVRhc2tzSGVhZGVyUm93LmFwcGVuZENoaWxkKGFjdGl2ZVRhc2tzSGVhZGVyKVxuICAgICAgICBhY3RpdmVUYXNrc0hlYWRlclJvdy5hcHBlbmRDaGlsZChhY3RpdmVUYXNrc0R1ZURhdGVIZWFkZXIpO1xuICAgICAgICBhY3RpdmVUYXNrc0hlYWRlclJvdy5hcHBlbmRDaGlsZChhY3RpdmVUYXNrc0VkaXQpO1xuICAgICAgICBhY3RpdmVUYXNrc1RhYmxlLmFwcGVuZENoaWxkKGFjdGl2ZVRhc2tzSGVhZGVyUm93KTtcbiAgICAgICAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aXZlVGFza3NUYWJsZSk7XG4gICAgICAgIGNvbXBsZXRlZFRhc2tzSGVhZGVyUm93LmFwcGVuZENoaWxkKGNvbXBsZXRlZFRhc2tzSGVhZGVyKVxuICAgICAgICBjb21wbGV0ZWRUYXNrc0hlYWRlclJvdy5hcHBlbmRDaGlsZChjb21wbGV0ZWRUYXNrc0R1ZURhdGVIZWFkZXIpO1xuICAgICAgICBjb21wbGV0ZWRUYXNrc0hlYWRlclJvdy5hcHBlbmRDaGlsZChjb21wbGV0ZWRUYXNrc0VkaXQpO1xuICAgICAgICBjb21wbGV0ZWRUYXNrc1RhYmxlLmFwcGVuZENoaWxkKGNvbXBsZXRlZFRhc2tzSGVhZGVyUm93KTtcbiAgICAgICAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQoY29tcGxldGVkVGFza3NUYWJsZSk7XG4gICAgICAgIGNyZWF0ZVRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRhc2tzUG9wdXAuY3JlYXRlTmV3VGFza0Zvcm0pO1xuICAgICAgICB0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVUYXNrQnV0dG9uKTtcbiAgICAgICAgb3V0cHV0QXJ0aWNsZS5hcHBlbmRDaGlsZCh0YXNrc0NvbnRhaW5lcik7XG5cbiAgICAgICAgdGhpcy5nZXRUYXNrcygpO1xuICAgIH0sXG5cbiAgICBnZXRUYXNrcygpIHtcblxuICAgICAgICBsZXQgY3VycmVudFVzZXIgPSBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSk7XG5cbiAgICAgICAgLy9wb3B1bGF0ZSB0YXNrc1xuICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG5cbiAgICAgICAgICAgIGRhdGFTZXQgOiBcInRhc2tzXCIsXG4gICAgICAgICAgICBmZXRjaFR5cGUgOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW1iZWRJdGVtIDogXCI/X2VtYmVkPXVzZXJzXCJcblxuICAgICAgICB9KS50aGVuKHRhc2tzID0+IHtcblxuICAgICAgICAgICAgdGFza3Muc29ydChmdW5jdGlvbihhLGIpe1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShhLmV4cGVjdGVkQ29tcGxldGlvbkRhdGUpIC0gbmV3IERhdGUoYi5leHBlY3RlZENvbXBsZXRpb25EYXRlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuXG4gICAgICAgICAgICAgICAgaWYgKHRhc2sudXNlcklkID09PSBjdXJyZW50VXNlcikge1xuXG4gICAgICAgICAgICAgICAgbGV0IHN0YXR1cyA9IHRhc2suY29tcGxldGU7XG4gICAgICAgICAgICAgICAgbGV0IGFjdGl2ZVRhc2tzVGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjdGl2ZVRhc2tzVGFibGVcIik7XG4gICAgICAgICAgICAgICAgbGV0IGNvbXBsZXRlZFRhc2tzVGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbXBsZXRlZFRhc2tzVGFibGVcIik7XG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIGEgbmV3IHRhYmxlIHJvdyBmb3IgZWFjaCB0YXNrXG4gICAgICAgICAgICAgICAgbGV0IHRhc2tSb3cgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgOiBcInRhc2tUYWJsZVJvd1wiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQgOiBgdGFza1RhYmxlUm93XyR7dGFzay5pZH1gXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgLy9jcmVhdGUgY2VsbHMgdG8gaG9sZCB0YXNrIGFuZCBkdWUgZGF0ZVxuICAgICAgICAgICAgICAgIGxldCB0YXNrQ2VsbCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcyA6IFwidGFza0NlbGxcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkIDogYHRhc2tDZWxsXyR7dGFzay5pZH1gXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgbGV0IGR1ZURhdGVDZWxsID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzIDogXCJkdWVEYXRlQ2VsbFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQgOiBgZHVlRGF0ZUNlbGxfJHt0YXNrLmlkfWBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBsZXQgdGFza0VkaXRDZWxsID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzIDogXCJ0YXNrRWRpdENlbGxcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkIDogYHRhc2tFZGl0Q2VsbF8ke3Rhc2suaWR9YFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIGxldCB0YXNrRWRpdEJ1dHRvbiA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgOiBcInRhc2tFZGl0QnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgOiBcIkVkaXRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkIDogYHRhc2tFZGl0QnV0dG9uXyR7dGFzay5pZH1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA6IFwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAvL2NyZWF0ZSB0YXNrIGNoZWNrYm94IGFuZCB0aXRsZVxuICAgICAgICAgICAgICAgIGxldCB0YXNrTGFiZWwgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgOiBcInRhc2tMYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQgOiBgdGFza0xhYmVsXyR7dGFzay5pZH1gXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC8vY3JlYXRlIHRhc2sgdGl0bGVcbiAgICAgICAgICAgICAgICBsZXQgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYCR7dGFzay50YXNrfWApO1xuXG4gICAgICAgICAgICAgICAgLy9jcmVhdGUgdGFzayBjaGVja2JveFxuICAgICAgICAgICAgICAgIGxldCB0YXNrQ2hlY2tib3ggPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgOiBcInRhc2tDaGVja2JveFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQgOiBgdGFza0NoZWNrYm94XyR7dGFzay5pZH1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA6IFwiY2hlY2tib3hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlIDogYCR7dGFzay50YXNrfWBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLy9jcmVhdGUgdGFzayBkdXRlIGRhdGVcbiAgICAgICAgICAgICAgICBsZXQgZHVlRGF0ZUFycmF5ID0gbmV3IERhdGUodGFzay5leHBlY3RlZENvbXBsZXRpb25EYXRlKS50b0RhdGVTdHJpbmcoKS5zcGxpdChcIiBcIilcbiAgICAgICAgICAgICAgICBsZXQgZHVlRGF0ZSA9IGAke2R1ZURhdGVBcnJheVsxXX0gJHtkdWVEYXRlQXJyYXlbMl19ICR7ZHVlRGF0ZUFycmF5WzNdfWBcblxuXG4gICAgICAgICAgICAgICAgbGV0IHRhc2tEdWVEYXRlID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcInBcIixcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgOiBcInRhc2tEdWVEYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgOiBkdWVEYXRlLFxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQgOiBgdGFza0R1ZURhdGVfJHt0YXNrLmlkfWBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAvL2FwcGVuZCAtLSBvcmRlciBpcyBpbXBvcnRhbnQgZm9yIGNoZWNrYm94IGFuZCBsYWJlbCB0byBlbnN1cmUgYm94IGluIG9uIHRoZSBsZWZ0XG4gICAgICAgICAgICAgICAgdGFza0NoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgdGFza3NFdmVudExpc3RlbmVycy5tYXJrVGFza0NvbXBsZXRlKVxuICAgICAgICAgICAgICAgIHRhc2tFZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0YXNrc0V2ZW50TGlzdGVuZXJzLnRhc2tFZGl0QnV0dG9uKVxuICAgICAgICAgICAgICAgIHRhc2tMYWJlbC5hcHBlbmRDaGlsZCh0YXNrQ2hlY2tib3gpO1xuICAgICAgICAgICAgICAgIHRhc2tMYWJlbC5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICAgICAgICAgICAgICAgIHRhc2tDZWxsLmFwcGVuZENoaWxkKHRhc2tMYWJlbCk7XG4gICAgICAgICAgICAgICAgZHVlRGF0ZUNlbGwuYXBwZW5kQ2hpbGQodGFza0R1ZURhdGUpO1xuICAgICAgICAgICAgICAgIHRhc2tFZGl0Q2VsbC5hcHBlbmRDaGlsZCh0YXNrRWRpdEJ1dHRvbik7XG4gICAgICAgICAgICAgICAgdGFza1Jvdy5hcHBlbmRDaGlsZCh0YXNrQ2VsbCk7XG4gICAgICAgICAgICAgICAgdGFza1Jvdy5hcHBlbmRDaGlsZChkdWVEYXRlQ2VsbCk7XG4gICAgICAgICAgICAgICAgdGFza1Jvdy5hcHBlbmRDaGlsZCh0YXNrRWRpdENlbGwpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cykge1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZFRhc2tzVGFibGUuYXBwZW5kQ2hpbGQodGFza1Jvdyk7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tDaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIFwiXCIpXG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmVUYXNrc1RhYmxlLmFwcGVuZENoaWxkKHRhc2tSb3cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19KTtcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRhc2tzO1xuIiwiaW1wb3J0IG5vbWFkRGF0YSBmcm9tIFwiLi9ub21hZERhdGFcIjtcbmltcG9ydCB0YXNrcyBmcm9tIFwiLi90YXNrc1wiO1xuaW1wb3J0IGRvbUNvbXBvbmVudHMgZnJvbSBcIi4vZG9tQ29tcG9uZW50c1wiXG5cbmNvbnN0IHRhc2tzRXZlbnRMaXN0ZW5lcnMgPSB7XG5cbiAgICBjcmVhdGVOZXdUYXNrKCkge1xuXG4gICAgICAgIGxldCB0YXNrVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tUaXRsZUlucHV0XCIpLnZhbHVlO1xuICAgICAgICBsZXQgZHVlRGF0ZUZpZWxkVmFsaXVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrRGF0ZUlucHV0XCIpLnZhbHVlO1xuICAgICAgICBsZXQgdXNlcklkID0gTnVtYmVyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpKTtcblxuICAgICAgICBsZXQgZHVlRGF0ZUFycmF5ID0gZHVlRGF0ZUZpZWxkVmFsaXVlLnNwbGl0KFwiLVwiKVxuICAgICAgICBsZXQgZHVlRGF0ZSA9IGAke2R1ZURhdGVBcnJheVsxXX0gJHtkdWVEYXRlQXJyYXlbMl19ICR7ZHVlRGF0ZUFycmF5WzBdfWA7XG5cbiAgICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xuXG4gICAgICAgICAgICBkYXRhU2V0IDogXCJ0YXNrc1wiLFxuICAgICAgICAgICAgZmV0Y2hUeXBlIDogXCJQT1NUXCIsXG4gICAgICAgICAgICBkYXRhQmFzZU9iamVjdCA6IHtcbiAgICAgICAgICAgICAgICB1c2VySWQgOiB1c2VySWQsXG4gICAgICAgICAgICAgICAgdGFzayA6IHRhc2tUaXRsZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZENvbXBsZXRpb25EYXRlIDogZHVlRGF0ZSxcbiAgICAgICAgICAgICAgICBjb21wbGV0ZSA6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihzaGl0ID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNoaXQpXG4gICAgICAgICAgICAkKFwiI291dHB1dFwiKS5lbXB0eSgpXG4gICAgICAgICAgICB0YXNrcy5jcmVhdGVUYXNrVGFibGVzKCk7XG4gICAgICAgIH0pXG4gICAgfSxcblxuICAgIG1hcmtUYXNrQ29tcGxldGUoKSB7XG4gICAgICAgIGxldCB0YXNrVG9FZGl0SWQgPSBldmVudC50YXJnZXQuaWQuc3BsaXQoXCJfXCIpWzFdO1xuXG4gICAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcblxuICAgICAgICAgICAgZGF0YVNldCA6IFwidGFza3NcIixcbiAgICAgICAgICAgIGZldGNoVHlwZSA6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbWJlZEl0ZW0gOiBgPyZpZD0ke3Rhc2tUb0VkaXRJZH1gXG4gICAgICAgIH0pLnRoZW4ocGFyc2VkVGFza3MgPT4ge1xuXG5cbiAgICAgICAgICAgIGxldCB0YXNrSWQgPSBwYXJzZWRUYXNrc1swXS5pZDtcbiAgICAgICAgICAgIGxldCB1c2VySWQgPSBwYXJzZWRUYXNrc1swXS51c2VySWQ7XG4gICAgICAgICAgICBsZXQgdGFzayA9IHBhcnNlZFRhc2tzWzBdLnRhc2s7XG4gICAgICAgICAgICBsZXQgZXhwZWN0ZWRDb21wbGV0aW9uRGF0ZSA9IHBhcnNlZFRhc2tzWzBdLmV4cGVjdGVkQ29tcGxldGlvbkRhdGU7XG4gICAgICAgICAgICBsZXQgY29tcGxldGUgPSBwYXJzZWRUYXNrc1swXS5jb21wbGV0ZTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2codGFza0lkLCB1c2VySWQsIHRhc2ssIGV4cGVjdGVkQ29tcGxldGlvbkRhdGUsIGNvbXBsZXRlKVxuXG4gICAgICAgICAgICBpZiAoY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICBjb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb21wbGV0ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xuICAgICAgICAgICAgICAgIHB1dElkIDogdGFza1RvRWRpdElkLFxuICAgICAgICAgICAgICAgIGRhdGFTZXQgOiBcInRhc2tzXCIsXG4gICAgICAgICAgICAgICAgZmV0Y2hUeXBlIDogXCJQVVRcIixcbiAgICAgICAgICAgICAgICBkYXRhQmFzZU9iamVjdCA6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHRhc2tJZCxcbiAgICAgICAgICAgICAgICAgICAgdXNlcklkIDogdXNlcklkLFxuICAgICAgICAgICAgICAgICAgICB0YXNrIDogdGFzayxcbiAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWRDb21wbGV0aW9uRGF0ZTogZXhwZWN0ZWRDb21wbGV0aW9uRGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGNvbXBsZXRlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkudGhlbihzaGl0ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzaGl0KVxuICAgICAgICAgICAgICAgICQoXCIjb3V0cHV0XCIpLmVtcHR5KClcbiAgICAgICAgICAgICAgICB0YXNrcy5jcmVhdGVUYXNrVGFibGVzKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfSxcblxuICAgIHRhc2tFZGl0QnV0dG9uKCkge1xuXG4gICAgICAgIGxldCBudW1iZXIgPSBldmVudC5jdXJyZW50VGFyZ2V0LmlkO1xuICAgICAgICBsZXQgdGFza0FycmF5ID0gbnVtYmVyLnNwbGl0KFwiX1wiKTtcbiAgICAgICAgbGV0IHRhc2tJZCA9IHRhc2tBcnJheVsxXTtcblxuICAgICAgICBsZXQgdGFza0NlbGxUb0VtcHR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRhc2tDZWxsXyR7dGFza0lkfWApO1xuICAgICAgICBsZXQgdGFza0xhYmxlVG9SZW1vdmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdGFza0xhYmVsXyR7dGFza0lkfWApO1xuICAgICAgICBsZXQgZHVlRGF0ZUNlbGxUb0VtcHR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGR1ZURhdGVDZWxsXyR7dGFza0lkfWApO1xuICAgICAgICBsZXQgZHVlRGF0ZVRvUmVtb3ZlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRhc2tEdWVEYXRlXyR7dGFza0lkfWApO1xuICAgICAgICBsZXQgdGFza0VkaXRDZWxsVG9FbXB0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB0YXNrRWRpdENlbGxfJHt0YXNrSWR9YCk7XG4gICAgICAgIGxldCB0YXNrRWRpdEJ1dHRvblRvUmVtb3ZlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRhc2tFZGl0QnV0dG9uXyR7dGFza0lkfWApO1xuXG4gICAgICAgIGxldCB0YXNrVG9FZGl0VGV4dCA9IHRhc2tMYWJsZVRvUmVtb3ZlLmlubmVyVGV4dDtcbiAgICAgICAgY29uc29sZS5sb2codGFza1RvRWRpdFRleHQpXG5cbiAgICAgICAgbGV0IHRhc2tUb0VkaXRUaXRsZSA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwiaW5wdXRcIixcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJ0YXNrVG9FZGl0VGl0bGVcIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgaWQgOiBgdGFza1RvRWRpdFRpdGxlXyR7dGFza0lkfWAsXG4gICAgICAgICAgICAgICAgdmFsdWUgOiBgJHt0YXNrVG9FZGl0VGV4dH1gXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgbGV0IHRhc2tEdWVEYXRlVG9FZGl0ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJpbnB1dFwiLFxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcInRhc2tEdWVEYXRlVG9FZGl0XCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgIGlkIDogYHRhc2tEdWVEYXRlVG9FZGl0XyR7dGFza0lkfWAsXG4gICAgICAgICAgICAgICAgdHlwZSA6IFwiZGF0ZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgbGV0IGVkaXRlZFRhc2tTdWJtaXRCdXR0b24gPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcImVkaXRlZFRhc2tTdWJtaXRCdXR0b25cIixcbiAgICAgICAgICAgIGNvbnRlbnQgOiBcIlN1bWJpdFwiLFxuICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICBpZCA6IGBlZGl0ZWRUYXNrU3VibWl0QnV0dG9uXyR7bnVtYmVyfWAsXG4gICAgICAgICAgICAgICAgdHlwZSA6IFwiYnV0dG9uXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICB0YXNrQ2VsbFRvRW1wdHkucmVtb3ZlQ2hpbGQodGFza0xhYmxlVG9SZW1vdmUpO1xuICAgICAgICB0YXNrQ2VsbFRvRW1wdHkuYXBwZW5kQ2hpbGQodGFza1RvRWRpdFRpdGxlKVxuICAgICAgICBkdWVEYXRlQ2VsbFRvRW1wdHkucmVtb3ZlQ2hpbGQoZHVlRGF0ZVRvUmVtb3ZlKTtcbiAgICAgICAgZHVlRGF0ZUNlbGxUb0VtcHR5LmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlVG9FZGl0KTtcbiAgICAgICAgdGFza0VkaXRDZWxsVG9FbXB0eS5yZW1vdmVDaGlsZCh0YXNrRWRpdEJ1dHRvblRvUmVtb3ZlKTtcbiAgICAgICAgdGFza0VkaXRDZWxsVG9FbXB0eS5hcHBlbmRDaGlsZChlZGl0ZWRUYXNrU3VibWl0QnV0dG9uKTtcbiAgICAgICAgZWRpdGVkVGFza1N1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGFza3NFdmVudExpc3RlbmVycy5zYXZlVGFza0VkaXQpXG5cbiAgICB9LFxuICAgIHNhdmVUYXNrRWRpdCgpIHtcbiAgICAgICAgbGV0IHRhc2tOdW1iZXIgPSBldmVudC5jdXJyZW50VGFyZ2V0LmlkO1xuICAgICAgICBsZXQgdGFza0FycmF5ID0gdGFza051bWJlci5zcGxpdChcIl9cIik7XG4gICAgICAgIGxldCB0YXNrSWQgPSB0YXNrQXJyYXlbMl07XG4gICAgICAgIGxldCB0YXNrRWRpdElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRhc2tUb0VkaXRUaXRsZV8ke3Rhc2tJZH1gKS52YWx1ZTtcbiAgICAgICAgbGV0IHRhc2tFZGl0RGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB0YXNrRHVlRGF0ZVRvRWRpdF8ke3Rhc2tJZH1gKS52YWx1ZTtcblxuICAgICAgICBsZXQgZHVlRGF0ZUFycmF5ID0gdGFza0VkaXREYXRlLnNwbGl0KFwiLVwiKVxuICAgICAgICBsZXQgZHVlRGF0ZSA9IGAke2R1ZURhdGVBcnJheVsxXX0gJHtkdWVEYXRlQXJyYXlbMl19ICR7ZHVlRGF0ZUFycmF5WzBdfWA7XG5cblxuICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG5cbiAgICAgICAgICAgIHB1dElkIDogdGFza0lkLFxuICAgICAgICAgICAgZGF0YVNldCA6IFwidGFza3NcIixcbiAgICAgICAgICAgIGZldGNoVHlwZSA6IFwiUFVUXCIsXG4gICAgICAgICAgICBkYXRhQmFzZU9iamVjdCA6IHtcbiAgICAgICAgICAgICAgICB1c2VySWQgOiBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSksXG4gICAgICAgICAgICAgICAgdGFzazogdGFza0VkaXRJbnB1dCxcbiAgICAgICAgICAgICAgICBleHBlY3RlZENvbXBsZXRpb25EYXRlOiBkdWVEYXRlLFxuICAgICAgICAgICAgICAgIGNvbXBsZXRlIDogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbihzaGl0ID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNoaXQpXG4gICAgICAgICAgICAkKFwiI291dHB1dFwiKS5lbXB0eSgpO1xuICAgICAgICAgICAgdGFza3MuY3JlYXRlVGFza1RhYmxlcygpO1xuICAgICAgICB9KVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IHRhc2tzRXZlbnRMaXN0ZW5lcnM7IiwiaW1wb3J0IGRvbUNvbXBvbmVudHMgZnJvbSBcIi4vZG9tQ29tcG9uZW50c1wiO1xuaW1wb3J0IHRhc2tzRXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vdGFza3NFdmVudExpc3RlbmVyc1wiO1xuXG5jb25zdCB0YXNrc1BvcHVwID0ge1xuXG4gICAgY3JlYXRlTmV3VGFza0Zvcm0oKSB7XG4gICAgICAgIGxldCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza3NDb250YWluZXJcIik7XG4gICAgICAgIGxldCB0YXNrUG9wdXBEaXYgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImRpdlwiLFxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcInRhc2tQb3B1cERpdlwiLFxuICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICBpZCA6IFwidGFza1BvcHVwRGl2XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IG5ld1Rhc2tGb3JtID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJkaXZcIixcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJuZXdUYXNrRm9ybVwiLFxuICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICBpZCA6IFwibmV3VGFza0Zvcm1cIixcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IG5ld1Rhc2tGb3JtVGl0bGUgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImgyXCIsXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwibmV3VGFza0Zvcm1UaXRsZVwiLFxuICAgICAgICAgICAgY29udGVudCA6IFwiQ3JlYXRlIEEgTmV3IFRhc2tcIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgaWQgOiBcIm5ld1Rhc2tGb3JtVGl0bGVcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgaG9yaXpvbnRhbExpbmUgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQgKHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJoclwiXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCB0YXNrVGl0bGVJbnB1dCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCAoe1xuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImlucHV0XCIsXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwidGFza1RpdGxlSW5wdXRcIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgaWQgOiBcInRhc2tUaXRsZUlucHV0XCIsXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgOiBcIkVudGVyIG5ldyB0YXNrIHRpdGxlXCIsXG4gICAgICAgICAgICAgICAgdHlwZSA6IFwidGV4dFwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCB0YXNrRGF0ZUlucHV0ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50ICh7XG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwiaW5wdXRcIixcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJ0YXNrRGF0ZUlucHV0XCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgIGlkIDogXCJ0YXNrRGF0ZUlucHV0XCIsXG4gICAgICAgICAgICAgICAgdHlwZSA6IFwiZGF0ZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBzdWJtaXROZXdUYXNrQnV0dG9uID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50ICh7XG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwic3VibWl0TmV3VGFza0J1dHRvblwiLFxuICAgICAgICAgICAgY29udGVudCA6IFwiU3VibWl0XCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgIGlkIDogXCJzdWJtaXROZXdUYXNrQnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgdHlwZSA6IFwiYnV0dG9uXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgc3VibWl0TmV3VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGFza3NFdmVudExpc3RlbmVycy5jcmVhdGVOZXdUYXNrKVxuICAgICAgICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZChuZXdUYXNrRm9ybVRpdGxlKTtcbiAgICAgICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQoaG9yaXpvbnRhbExpbmUpO1xuICAgICAgICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrVGl0bGVJbnB1dCk7XG4gICAgICAgIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tEYXRlSW5wdXQpO1xuICAgICAgICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZChzdWJtaXROZXdUYXNrQnV0dG9uKTtcbiAgICAgICAgdGFza1BvcHVwRGl2LmFwcGVuZENoaWxkKG5ld1Rhc2tGb3JtKTtcbiAgICAgICAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1BvcHVwRGl2KTtcbiAgICB9XG5cbn1cbmV4cG9ydCBkZWZhdWx0IHRhc2tzUG9wdXA7Il19
