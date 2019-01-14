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

    _friends.default.buildFriendSearchBar();

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
    }); //append header row to table and table to container


    activeTasksTable.appendChild(activeTasksTableTitle);
    completedTasksTable.appendChild(completedTasksTableTitle);
    activeTasksHeaderRow.appendChild(activeTasksHeader);
    activeTasksHeaderRow.appendChild(activeTasksDueDateHeader);
    activeTasksTable.appendChild(activeTasksHeaderRow);
    tasksContainer.appendChild(activeTasksTable);
    completedTasksHeaderRow.appendChild(completedTasksHeader);
    completedTasksHeaderRow.appendChild(completedTasksDueDateHeader);
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
          let dueDate = `${dueDateArray[1]} ${dueDateArray[2]}, ${dueDateArray[3]}`;

          let taskDueDate = _domComponents.default.createDomElement({
            elementType: "p",
            cssClass: "taskDueDate",
            content: dueDate,
            attributes: {
              id: `taskDueDate_${task.id}`
            }
          }); //append -- order is important for checkbox and label to ensure box in on the left


          taskCheckbox.addEventListener("change", _tasksEventListeners.default.markTaskComplete);
          taskLabel.appendChild(taskCheckbox);
          taskLabel.appendChild(taskTitle);
          taskCell.appendChild(taskLabel);
          dueDateCell.appendChild(taskDueDate);
          taskRow.appendChild(taskCell);
          taskRow.appendChild(dueDateCell);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const tasksEventListeners = {
  createNewTask() {
    let taskTitle = document.getElementById("taskTitleInput").value;
    let dueDate = document.getElementById("taskDateInput").value;
    let userId = Number(sessionStorage.getItem("userId"));

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
  }

};
var _default = tasksEventListeners;
exports.default = _default;

},{"./nomadData":12,"./tasks":13}],15:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2Rhc2hib2FyZC5qcyIsIi4uL3NjcmlwdHMvZG9tQ29tcG9uZW50cy5qcyIsIi4uL3NjcmlwdHMvZG9tUmVuZGVyZXIuanMiLCIuLi9zY3JpcHRzL2V2ZW50TGlzdGVuZXJzLmpzIiwiLi4vc2NyaXB0cy9ldmVudFBhZ2VMaXN0ZW5lcnMuanMiLCIuLi9zY3JpcHRzL2V2ZW50cy5qcyIsIi4uL3NjcmlwdHMvZnJpZW5kcy5qcyIsIi4uL3NjcmlwdHMvZnJpZW5kc0V2ZW50c0xpc3RlbmVyLmpzIiwiLi4vc2NyaXB0cy9tZXNzYWdlcy5qcyIsIi4uL3NjcmlwdHMvbWVzc2FnZXNFdmVudExpc3RlbmVycy5qcyIsIi4uL3NjcmlwdHMvbmV3cy5qcyIsIi4uL3NjcmlwdHMvbm9tYWREYXRhLmpzIiwiLi4vc2NyaXB0cy90YXNrcy5qcyIsIi4uL3NjcmlwdHMvdGFza3NFdmVudExpc3RlbmVycy5qcyIsIi4uL3NjcmlwdHMvdGFza3NQb3B1cC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUNBQTs7OztBQUNBLE1BQU0sU0FBUyxHQUFHO0FBQ2hCLEVBQUEsY0FBYyxHQUFFO0FBQ2Q7QUFDQSxRQUFJLFFBQVEsR0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BQWhCO0FBcUNFLElBQUEsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhLElBQWIsQ0FBa0IsUUFBbEI7O0FBQ0EsNEJBQWUscUJBQWY7O0FBQ0EsSUFBQSxDQUFDLENBQUMsUUFBRCxDQUFELENBQVksS0FBWixDQUFrQix3QkFBZSxTQUFqQztBQUNBLElBQUEsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUIsS0FBckIsQ0FBMkIsd0JBQWUsZ0JBQTFDO0FBQ0EsSUFBQSxDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQixLQUFyQixDQUEyQixLQUFLLGNBQWhDLEVB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QkFBb0IsYUFBbEU7QUFDQSxJQUFBLFdBQVcsQ0FBQyxXQUFaLENBQXdCLGdCQUF4QjtBQUNBLElBQUEsV0FBVyxDQUFDLFdBQVosQ0FBd0IsY0FBeEI7QUFDQSxJQUFBLFdBQVcsQ0FBQyxXQUFaLENBQXdCLGNBQXhCO0FBQ0EsSUFBQSxXQUFXLENBQUMsV0FBWixDQUF3QixhQUF4QjtBQUNBLElBQUEsV0FBVyxDQUFDLFdBQVosQ0FBd0IsbUJBQXhCO0FBQ0EsSUFBQSxZQUFZLENBQUMsV0FBYixDQUF5QixXQUF6QjtBQUNBLElBQUEsY0FBYyxDQUFDLFdBQWYsQ0FBMkIsWUFBM0I7QUFDSDs7QUF0RWMsQ0FBbkI7ZUF5RWUsVSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCBldmVudExpc3RlbmVycyBmcm9tIFwiLi9ldmVudExpc3RlbmVyc1wiXG5jb25zdCBkYXNoYm9hcmQgPSB7XG4gIGJ1aWxkTG9naW5Gb3JtKCl7XG4gICAgLy91c2luZyBzdHJpbmcgaW50ZXJwb2xhdGlvbiB0byBjcmVhdGUgdGhlIGZvcm1cbiAgICBsZXQgZm9ybUhUTUwgPSBgXG4gICAgPGgxIGNsYXNzID0gXCJ0LWJvcmRlclwiPk5vbWFkczwvaDE+XG4gICAgICA8c2VjdGlvbiBjbGFzcyA9IFwiZm9ybVwiPlxuICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIiBjbGFzcyA9IHJlZ2lzdGVyRm9ybT5cbiAgICAgICAgICA8aW5wdXQgaWQgPSBcInJlZ1VzZXJOYW1lXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlciA9IFwiVXNlcm5hbWVcIiByZXF1aXJlZD5cbiAgICAgICAgICA8aW5wdXQgaWQgPSBcInJlZ0VtYWlsXCIgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXIgPSBcIkVtYWlsXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgPGlucHV0IGlkID0gXCJyZWdQYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyID0gXCJQYXNzd29yZFwiIHJlcXVpcmVkPlxuICAgICAgICAgIDxpbnB1dCBpZCA9IFwicmVnQ29uZmlybVBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXIgPSBcIkNvbmZpcm0gUGFzc3dvcmRcIiByZXF1aXJlZD5cbiAgICAgICAgICA8YnV0dG9uIGlkID0gXCJyZWdpc3RlckJ1dHRvblwiPkNyZWF0ZSBBY2NvdW50PC9idXR0b24+XG4gICAgICAgICAgPHAgY2xhc3MgPSBcIm1lc3NhZ2VcIj5BbHJlYWR5IGEgUmVnaXN0ZXJlZCBNZW1iZXI/IDxhIGhyZWYgPSBcIiNcIj5Mb2dJbiA8L2E+PC9wPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxmb3JtIGNsYXNzID0gXCJsb2dpbi1mb3JtXCI+XG4gICAgICAgICAgPGlucHV0IGlkID0gXCJ1c2VyTmFtZVZhbFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXIgPSBcIlVzZXJuYW1lXCI+XG4gICAgICAgICAgPGlucHV0IGlkID0gXCJwYXNzd29yZFZhbFwiIHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyID0gXCJQYXNzd29yZFwiPlxuICAgICAgICAgIDxidXR0b24gdHlwZSA9IFwiYnV0dG9uXCIgaWQgPSBcImxvZ0luXCI+TG9naW48L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGlkID0gXCJtb2RhbEJ1dHRvblwiPk5vbWFkcyBNaXNzaW9uPC9idXR0b24+XG4gICAgICAgICAgPHAgY2xhc3MgPSBcIm1lc3NhZ2VcIj5Eb24ndCBoYXZlIGFuIGFjY291bnQ/IDxhIGhyZWYgPSBcIiNcIj5SZWdpc3RlcjwvYT48L3A+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzZWN0aW9uIGlkPVwibm9tYWRNb2RhbFwiIGNsYXNzPVwibW9kYWxcIj5cbiAgICAgIDwhLS0gTW9kYWwgY29udGVudCAtLT5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2xvc2VcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgICAgPGgyPlRoZSBQdXJwb3NlIEJlaGluZCBOb21hZHM8L2gyPlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cbiAgICAgICAgICAgIDxoMz5UaGUgbWluZHMgYmVoaW5nIE5vbWFkczwvaDM+XG4gICAgICAgICAgICA8aW1nIGlkID0gXCJjcmVhdG9yc0ltYWdlXCIgc3JjID0gXCJpbWFnZXMvbm9tYWRDcmVhdG9ycy5qcGdcIiBhbHQgPSBcImFwcGxpY2F0aW9uIGNyZWF0b3JzXCI+XG4gICAgICAgICAgICA8cD5BcyBvdXRkb29yc21hbiwgZW52aXJvbm1lbnRhbGlzdCwgYW5kIGZpbG1tYWtlcnMgY29udGludWUgdG8gZ3Jvdy4gU28gZG8gdGhlIGFkdmVudHVyb3VzIHNwaXJpdHMgb2YgdGhvc2Ugd2hvIGVtYnJhY2UgY29uc2Npb3VzIGNvbnN1bWVyaXNtIGFuZCBzdXN0YWluYWJsZSBsaXZpbmcuIFRoZSBwdXJwb3NlIGlzIHRvIG1ha2UgYSBwb2ludCBvZiBwbHVnZ2luZyBpbnRvIG1vZGVybiBsaWZlIGFuZCBjb25uZWN0aW5nIHdpdGggeW91ciBmZWxsb3cgbm9tYWRzIGZyb20gYW55d2hlcmUgeW91IG1heSBiZS4gU2hhcmUgeW91ciBsb2NhdGlvbiwgTWVldCB1cCwgRXhjaGFuZ2Ugc3RvcmllcywgQ3JlYXRlIHJlbGF0aW9uc2hpcHMgd2l0aCBwZW9wbGUgd2hvIGhhdmUgc2ltaWxhciBpbnRlcmVzdCBhbmQgZW5oYW5jZSB5b3VyIHRyYXZlbGluZyBleHBlcmllbmNlIHdpdGggbm9tYWRzLjwvcD5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgICAgICAgIDxoMz5DcmVhdGVkIEJ5OiBEaXZpbmUgTWFkbmVzcyZjb3B5PC9oMz5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIGBcbiAgICAgICQoXCIjb3V0cHV0XCIpLmh0bWwoZm9ybUhUTUwpXG4gICAgICBldmVudExpc3RlbmVycy5tb2RhbERpc3BsYXlBbmltYXRpb24oKVxuICAgICAgJChcIiNsb2dJblwiKS5jbGljayhldmVudExpc3RlbmVycy51c2VyTG9naW4pXG4gICAgICAkKFwiI3JlZ2lzdGVyQnV0dG9uXCIpLmNsaWNrKGV2ZW50TGlzdGVuZXJzLnVzZXJSZWdpc3RyYXRpb24pXG4gICAgICAkKFwiI3JlZ2lzdGVyQnV0dG9uXCIpLmNsaWNrKHRoaXMuYnVpbGRMb2dpbkZvcm0pXG4gICAgICAvLyAkKFwiI3JlZ2lzdGVyQnV0dG9uXCIpLmNsaWNrKGV2ZW50TGlzdGVuZXJzLnVzZXJMb2dpbilcblxuICAgIH0sXG4gIGNyZWF0ZU5hdkJhcigpe1xuICAgIGxldCBuYXZIVE1MID0gYFxuICAgICAgPG5hdj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaSBpZCA9IFwibmV3c0xpbmtcIj48YSBjbGFzcyA9IFwiYWN0aXZlXCIgaHJlZiA9IFwiI1wiPkFydGljbGVzPC9hPjwvbGk+XG4gICAgICAgICAgPGxpIGlkID0gXCJldmVudExpbmtcIj48YSBocmVmID0gXCIjXCI+RXZlbnRzPC9hPjwvbGk+XG4gICAgICAgICAgPGxpIGlkID0gXCJ0YXNrc0xpbmtcIj48YSBocmVmID0gXCIjXCI+VGFza3M8L2E+PC9saT5cbiAgICAgICAgICA8bGkgaWQgPSBcImZyaWVuZHNMaW5rXCI+PGEgaHJlZiA9IFwiI1wiPkZyaWVuZHM8L2E+PC9saT5cbiAgICAgICAgICA8bGkgaWQgPSBcIm1lc3NhZ2VzTGlua1wiPjxhIGhyZWYgPSBcIiNcIj5NZXNzYWdlczwvYT48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcyA9IFwic2lnbk91dFwiIGlkID0gXCJsb2dvXCIgPjxhIGhyZWY9XCIjXCI+U2lnbiBPdXQ8L2E+PC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmF2PlxuICAgIGBcbiAgICBsZXQgbmF2QmFyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLW5hdlwiKVxuICAgIG5hdkJhckNvbnRhaW5lci5pbm5lckhUTUwgPSBuYXZIVE1MXG5cbiAgICAvKk5hdmlnYXRpb24gbGluayBldmVudCBsaXN0ZW5lcnMqL1xuICAgICQoXCIjbWVzc2FnZXNMaW5rXCIpLmNsaWNrKGV2ZW50TGlzdGVuZXJzLm1lc3NhZ2VzTmF2TGluaylcbiAgICAkKFwiI2V2ZW50TGlua1wiKS5jbGljayhldmVudExpc3RlbmVycy5ldmVudHNOYXZMaW5rKVxuICAgICQoXCIjZnJpZW5kc0xpbmtcIikuY2xpY2soZXZlbnRMaXN0ZW5lcnMuZnJpZW5kc05hdkxpbmspXG4gICAgJChcIiN0YXNrc0xpbmtcIikuY2xpY2soZXZlbnRMaXN0ZW5lcnMudGFza3NOYXZMaW5rKVxuICAgICQoXCIjbmV3c0xpbmtcIikuY2xpY2soZXZlbnRMaXN0ZW5lcnMubmV3c05hdkxpbmspXG5cbiAgICAvKmFmdGVyIHNpZ25vdXQgaXMgY2xpY2tlZCBzZXNzaW9uIHN0b3JhZ2UgaXMgY2xlYXJlZCBhbmQgdGhlIGxvZ0luL3JlZ2lzdGVyIGZvcm0gaXMgcHJlc2VudGVkIGZyb20gaGVyZVxuICAgIGFub3RoZXIgdXNlciBjYW4gbG9nIGluIGFuZCBzZXNzaW9uIHN0b3JhZ2Ugd2lsbCBraWNrIG9mZiBmb3IgdGhlIG5ldyBsb2dnZWQgaW4gdXNlciovXG4gICAgJChcIi5zaWduT3V0XCIpLmNsaWNrKGV2ZW50TGlzdGVuZXJzLm5vbWFkTmF2TGluaylcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBkYXNoYm9hcmQiLCJjb25zdCBkb21Db21wb25lbnRzID0ge1xuICBjcmVhdGVEb21FbGVtZW50KHsgZWxlbWVudFR5cGUsIGNvbnRlbnQgPSBudWxsLCBjc3NDbGFzcywgYXR0cmlidXRlcyA9IHt9IH0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50VHlwZSk7XG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgaWYgKGNzc0NsYXNzKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3MpO1xuICAgIH1cbiAgICBmb3IgKGxldCBrZXkgaW4gYXR0cmlidXRlcykge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUNvbXBvbmVudHMiLCJpbXBvcnQgZXZlbnRzIGZyb20gXCIuL2V2ZW50c1wiO1xuXG5pbXBvcnQgbm9tYWREYXRhIGZyb20gXCIuL25vbWFkRGF0YVwiO1xuaW1wb3J0IGZyaWVuZHMgZnJvbSBcIi4vZnJpZW5kc1wiO1xuaW1wb3J0IG5ld3MgZnJvbSBcIi4vbmV3c1wiXG5pbXBvcnQgbWVzc2FnZXMgZnJvbSBcIi4vbWVzc2FnZXNcIjtcbmltcG9ydCBkYXNoQm9hcmQgZnJvbSBcIi4vZGFzaGJvYXJkXCJcbi8vIGltcG9ydCBkb21Db21wb25lbnRzIGZyb20gXCIuL2RvbUNvbXBvbmVudHNcIjtcbmltcG9ydCBldmVudExpc3RlbmVycyBmcm9tIFwiLi9ldmVudExpc3RlbmVyc1wiO1xuXG4vL0JVSUxEUyBOQUlHQVRJT05CQVIvL1xuLy8gZG9tQ29tcG9uZW50cy5jcmVhdGVOYXZCYXIoKVxuZGFzaEJvYXJkLmJ1aWxkTG9naW5Gb3JtKClcbiQoXCJtb2RhbEJ1dHRvblwiKS5jbGljayhldmVudExpc3RlbmVycy5tb2RhbERpc3BsYXlBbmltYXRpb24pXG5cbi8vTkVXUyBTRUNUSU9OXG4vLyBuZXdzLnNhdmUoKTtcbi8vIG5ld3MuYWxsU2F2ZWQoKTtcbi8vIG5ld3MuZ2V0TmV3cygpO1xuXG4vLyBuZXdzLm5ld3NFbGVtZW50Q3JlYXRvcigpO1xuLy8gbmV3cy5uZXdzRWxlbWVudENyZWF0b3IoKTtcblxuIiwiaW1wb3J0IGRhc2hib2FyZCBmcm9tIFwiLi9kYXNoYm9hcmRcIlxuaW1wb3J0IGRvbUNvbXBvbmVudHMgZnJvbSBcIi4vZG9tQ29tcG9uZW50c1wiO1xuaW1wb3J0IG5vbWFkRGF0YSBmcm9tIFwiLi9ub21hZERhdGFcIjtcbmltcG9ydCBldmVudHMgZnJvbSBcIi4vZXZlbnRzXCI7XG5pbXBvcnQgbWVzc2FnZXMgZnJvbSBcIi4vbWVzc2FnZXNcIjtcbmltcG9ydCBmcmllbmRzIGZyb20gXCIuL2ZyaWVuZHNcIjtcbmltcG9ydCBuZXdzIGZyb20gXCIuL25ld3NcIjtcbmltcG9ydCB0YXNrcyBmcm9tIFwiLi90YXNrc1wiO1xuXG5jb25zdCBldmVudExpc3RlbmVycyA9IHtcbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIExPR0lOIEZPUk06IHVzZXIgZW50ZXJzIFVzZXJuYW1lIGFuZCBQYXNzd29yZC4gd2hlbiBVc2VyIGNsaWNrcyBsb2dpbiwgdGhlIGlucHV0IGZpZWxkIGFuZCBOT01BRFMgaGVhZGVyIGRpc2FwcGVhclxuICAgIGFuZCB0aGUgdXNlciB3aWxsIGJlIGRpc3BsYXllZCB0aGUgXCJEYXNoYm9hcmRcIiBhbmQgdGhlIG5hdmlnYXRpb24gYmFyLiBVcG9uIGxvZ2luLCBzZXNzaW9uU3RvcmFnZSBpcyBzdGFydGVkLiBJbiB0aGUgQ29uc29sZVxuICAgIHlvdSB3aWxsIGJlIGFibGUgdG8gc2VlIFdobyBpcyBsb2dnZWQgaW4gYW5kIHdoYXQgdGhlaXIgdXNlcklkIGlzLiBpZS4gMSwyLDMsNCBldGMuXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgIHVzZXJMb2dpbigpe1xuICAgICAgICBsZXQgbG9nSW5WYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VzZXJOYW1lVmFsXCIpLnZhbHVlXG4gICAgICAgIGxldCBwYXNzd29yZFZhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFzc3dvcmRWYWxcIikudmFsdWVcbiAgICAgICAgLy9nZXQgdG8gY29tcGFyZVxuICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG5cbiAgICAgICAgXCJkYXRhU2V0XCIgOiBcInVzZXJzXCIsXG4gICAgICAgIFwiZmV0Y2hUeXBlXCIgOiBcIkdFVFwiLFxuICAgICAgICBcImVtYmVkSXRlbVwiIDogXCI/X2VtYmVkPXVzZXJzXCJcblxuICAgIH0pLnRoZW4ocGFyc2VkVXNlcnMgPT4ge1xuXG4gICAgICAgIHBhcnNlZFVzZXJzLmZvckVhY2godXNlciA9PiB7XG4gICAgICAgICAgICAgIC8qSWYgbG9naW4gY3JlZGVudGlhbHMgbWF0Y2ggdGhvc2UgaW4gZGF0YWJhc2UuanNvbi4gV2Ugd2FudCB0aGUgdXNlciB0byBiZSBkaXNwbGF5ZWQgdGhlaXIgXCJkYXNoYm9hZFwiXG4gICAgICAgICAgICAgIGFuZCBuYXZpZ2F0aW9uIGJhci4gU28gd2UgbmVlZCB0byBzZXQgZGlzcGxheSB0byBub25lIGFuZCBpbnZva2UgdGhlIGZ1bmN0aW9uIC0gY3JlYXRlTmF2QmFyKCkqL1xuICAgICAgICAgICAgaWYobG9nSW5WYWwgPT09IHVzZXIudXNlck5hbWUgJiYgcGFzc3dvcmRWYWwgPT09IHVzZXIucGFzc3dvcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9oaWRlcyBOT01BRCBoZWFkaW5nXG4gICAgICAgICAgICAgICAgICAgICQoXCIudC1ib3JkZXJcIikuaGlkZSgpXG4gICAgICAgICAgICAgICAgICAgIC8vaGlkZXMgdGhlIGZvcm1cbiAgICAgICAgICAgICAgICAgICAgJChcIi5mb3JtXCIpLmhpZGUoKVxuICAgICAgICAgICAgICAgICAgICAvL2Rpc3BsYXlzIG5hdmlnYXRpbiBiYXJcbiAgICAgICAgICAgICAgICAgICAgZGFzaGJvYXJkLmNyZWF0ZU5hdkJhcigpXG4gICAgICAgICAgICAgICAgICAgIC8vc2Vzc2lvbiBzdG9yYWdlXG5cbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInVzZXJJZFwiLCB1c2VyLmlkKVxuICAgICAgICAgICAgICAgICAgICBsZXQgdXNlcklkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKVxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nIHZlcmlmeWluZyB0aGF0IGNyZWRlbnRpYWxzIG1hdGNoIGFuZCB1c2VyIGlzIGxvZ2dlZCBpblxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvZ2dlZCBpbiBhc1wiICsgXCIgXCIgKyB1c2VyLnVzZXJOYW1lKVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInlvdXIgdXNlciBJRCBpczogXCIgKyB1c2VySWQpXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBSRUdJU1RSQVRJT04gRk9STTogV2hlbiByZWdpc3RlcmluZyBmb3IgYW4gYWNjb3VudCB0aGUgdXNlciB3aWxsIGVudGVyIGRlc2lyZWQgdXNlcm5hbWUsIGVtYWlsLCBhbmQgcGFzc3dvcmRcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgdXNlclJlZ2lzdHJhdGlvbigpe1xuICAgICAgICBsZXQgcmVnVXNlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JlZ1VzZXJOYW1lXCIpLnZhbHVlXG4gICAgICAgIGxldCByZWdFbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVnRW1haWxcIikudmFsdWVcbiAgICAgICAgbGV0IHJlZ1Bhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZWdQYXNzd29yZFwiKS52YWx1ZVxuICAgICAgICAvLyBsZXQgcmVnQ29uZmlybVBhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZWdVc2VyTmFtZVwiKS52YWx1ZVxuXG4gICAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcblxuICAgICAgICAgICAgICAgIFwiZGF0YVNldFwiIDogXCJ1c2Vyc1wiLFxuICAgICAgICAgICAgICAgIFwiZmV0Y2hUeXBlXCIgOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidXNlck5hbWVcIjogcmVnVXNlck5hbWUsXG4gICAgICAgICAgICAgICAgICAgIFwiZW1haWxcIjogcmVnRW1haWwsXG4gICAgICAgICAgICAgICAgICAgIFwicGFzc3dvcmRcIjogcmVnUGFzc3dvcmRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS50aGVuKFxuICAgICAgICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xuICAgICAgICAgICAgICAgIFwiZGF0YVNldFwiIDogXCJ1c2Vyc1wiLFxuICAgICAgICAgICAgICAgIFwiZmV0Y2hUeXBlXCIgOiBcIkdFVFwiLFxuICAgICAgICAgICAgICAgIFwiZW1iZWRJdGVtXCIgOiBgP3VzZXJOYW1lPSR7cmVnVXNlck5hbWV9YFxuICAgICAgICAgICAgfSkudGhlbih1c2VyID0+e1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXIpXG4gICAgICAgICAgICAgICAgdXNlci5mb3JFYWNoKCB4ID0+e1xuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwidXNlcklkXCIsIHguaWQpXG5cbiAgICAgICAgICAgICAgICAvL2hpZGVzIE5PTUFEIGhlYWRpbmdcbiAgICAgICAgICAgICAgICAkKFwiLnQtYm9yZGVyXCIpLmhpZGUoKVxuICAgICAgICAgICAgICAgIC8vaGlkZXMgdGhlIGZvcm1cbiAgICAgICAgICAgICAgICAkKFwiLmZvcm1cIikuaGlkZSgpXG4gICAgICAgICAgICAgICAgLy9kaXNwbGF5cyBuYXZpZ2F0aW4gYmFyXG4gICAgICAgICAgICAgICAgZGFzaGJvYXJkLmNyZWF0ZU5hdkJhcigpXG4gICAgICAgICAgICAgICAgbGV0IHVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIilcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nIHZlcmlmeWluZyB0aGF0IGNyZWRlbnRpYWxzIG1hdGNoIGFuZCB1c2VyIGlzIGxvZ2dlZCBpblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibG9nZ2VkIGluIGFzXCIgKyBcIiBcIiArIHgudXNlck5hbWUpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ5b3VyIHVzZXIgSUQgaXM6IFwiICsgdXNlcklkKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgfSxcbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIE1PREFMOiB1c2VyIHdpbGwgY2xpY2sgdGhlIE5PTUFEIE1JU1NJT04gYnV0dG9uIGFuZCBhIG1vZGFsIHdpbGwgcG9wIHVwIGRlc2NyaWJpbmcgd2hhdCB0aGUgYXBwbGljYXRpb24gaXMgYWJvdXRcbiAgICBhbmQgd2hvIGl0IGlzIHRhaWxvcmVkIHRvd2FyZHNcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgbW9kYWxEaXNwbGF5QW5pbWF0aW9uKCl7XG4gICAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm9tYWRNb2RhbFwiKTtcblxuICAgICAgICAvLyB0YXJnZXQgbW9kYWwgdG8gb3BlbiBpdFxuICAgICAgICBsZXQgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbEJ1dHRvblwiKTtcblxuICAgICAgICAvLyBHZXQgdGhlIDxzcGFuPiBlbGVtZW50IHRoYXQgY2xvc2VzIHRoZSBtb2RhbFxuICAgICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjbG9zZVwiKVswXTtcbiAgICAgICAgLy8gV2hlbiB0aGUgdXNlciBjbGlja3MgdGhlIGJ1dHRvbiwgb3BlbiB0aGUgbW9kYWxcbiAgICAgICAgYnRuLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfVxuICAgICAgICAvLyBXaGVuIHRoZSB1c2VyIGNsaWNrcyBvbiA8c3Bhbj4gKHgpLCBjbG9zZSB0aGUgbW9kYWxcbiAgICAgICAgc3Bhbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgICAgICAvLyBXaGVuIHRoZSB1c2VyIGNsaWNrcyBhbnl3aGVyZSBvdXRzaWRlIG9mIHRoZSBtb2RhbCwgY2xvc2UgaXRcbiAgICAgICAgd2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PSBtb2RhbCkge1xuICAgICAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAkKFwiLm1lc3NhZ2UgYVwiKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAkKFwiZm9ybVwiKS5hbmltYXRlKHtoZWlnaHQ6IFwidG9nZ2xlXCIsIG9wYWNpdHk6IFwidG9nZ2xlXCJ9LCBcInNsb3dcIilcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgTkFWQkFSIExJIEVMSVNURU5FUlM6IFdoZW4gdXNlciBjbGlja3MgYW4gaXRlbSBpbiB0aGUgTkFWQkFSIHRoZSBjb250ZW50IGFzc29jaWF0ZWQgd2l0aCB0aGF0IHRhYiB3aWxsIHBvcHVsYXRlIHRoZSBET01cbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgbWVzc2FnZXNOYXZMaW5rKCl7XG4gICAgICAgIG1lc3NhZ2VzLmNyZWF0ZU1lc3NhZ2VCb2FyZCgpXG4gICAgICAgIGNvbnNvbGUubG9nKFwid29ya2luZ1wiKVxuICAgICAgICBmcmllbmRzLmJ1aWxkRnJpZW5kU2VhcmNoQmFyKClcblxuICAgIH0sXG4gICAgZXZlbnRzTmF2TGluaygpe1xuICAgICAgICAgICAgZXZlbnRzLnNob3dFdmVudEZvcm0oKVxuICAgICAgICAgICAgZnJpZW5kcy5idWlsZEZyaWVuZFNlYXJjaEJhcigpXG4gICAgICAgICAgICAvL2FwcGVuZFVzZXJFdmVudFxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJldmVudHMgY2xpY2tlZFwiKVxuICAgIH0sXG4gICAgZnJpZW5kc05hdkxpbmsoKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJmcmllbmRzIG5hdiBsaW5rIGNsaWNrZWRcIilcbiAgICAgICAgZnJpZW5kcy5kZWZpbmVDdXJyZW50VXNlcnNGcmllbmRzKCk7XG4gICAgICAgIGZyaWVuZHMuaW5pdGlhbGl6ZVBvdGVudGlhbEZyaWVuZHMoKTtcblxuICAgIH0sXG4gICAgbmV3c05hdkxpbmsoKXtcbiAgICAgICAgLy9ORVdTIFNFQ1RJT05cbiAgICAgICAgbmV3cy5zYXZlKCk7XG4gICAgICAgIG5ld3MuYWxsU2F2ZWQoKTtcbiAgICAgICAgbmV3cy5nZXROZXdzKCk7XG4gICAgICAgIG5ld3MubmV3c0VsZW1lbnRDcmVhdG9yKCk7XG4gICAgICAgIGZyaWVuZHMuYnVpbGRGcmllbmRTZWFyY2hCYXIoKVxuICAgICAgICBjb25zb2xlLmxvZyhcIm5ld3MgbGluayBjbGlja2VkXCIpXG4gICAgfSxcbiAgICB0YXNrc05hdkxpbmsoKXtcbiAgICAgICAgdGFza3MuY3JlYXRlVGFza1RhYmxlcygpXG4gICAgICAgIGZyaWVuZHMuYnVpbGRGcmllbmRTZWFyY2hCYXIoKVxuICAgIH0sXG4gICAgbm9tYWROYXZMaW5rKCl7XG4gICAgICAgIGRhc2hib2FyZC5idWlsZExvZ2luRm9ybSgpXG4gICAgICAgICQoXCJuYXZcIikuaGlkZSgpXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLmNsZWFyKClcbiAgICAgICAgZnJpZW5kcy5idWlsZEZyaWVuZFNlYXJjaEJhcigpXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2lnbmVkIG91dFwiKVxuICAgIH0sXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIEVORCBPRiBOQVZJR0FUSU9OIEVWRU5UTElTVEVORVJTXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuICAgIGZyaWVuZHNEZWxldGVGcmllbmQgKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQpO1xuXG4gICAgfSxcbiAgICBoYW5kbGVFdmVudFNhdmVCdXR0b24oKSB7XG4gICAgICAgIGNvbnN0IG5hbWVJbnB1dHRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXZlbnROYW1lXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBkYXRlSW5wdXR0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2V2ZW50RGF0ZVwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgdGltZUlucHV0dGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNldmVudFRpbWVcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uSW5wdXR0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2V2ZW50TG9jYXRpb25cIikudmFsdWU7XG5cbiAgICAgICAgY29uc3QgZXZlbnRPYmplY3QgPSB7XG4gICAgICAgICAgICBldmVudE5hbWU6IG5hbWVJbnB1dHRlZCxcbiAgICAgICAgICAgIGV2ZW50RGF0ZTogZGF0ZUlucHV0dGVkLFxuICAgICAgICAgICAgZXZlbnRUaW1lOiB0aW1lSW5wdXR0ZWQsXG4gICAgICAgICAgICBldmVudExvY2F0aW9uOiBsb2NhdGlvbklucHV0dGVkXG4gICAgICAgIH07XG5cblxuICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICAgICAgICBkYXRhU2V0OiBcImV2ZW50c1wiLFxuICAgICAgICAgICAgZmV0Y2hUeXBlOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGRhdGFCYXNlT2JqZWN0OiB7XG4gICAgICAgICAgICAgICAgdXNlcklkOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpLFxuICAgICAgICAgICAgICAgIGV2ZW50TmFtZTogZXZlbnRPYmplY3QuZXZlbnROYW1lLFxuICAgICAgICAgICAgICAgIGV2ZW50RGF0ZTogZXZlbnRPYmplY3QuZXZlbnREYXRlLFxuICAgICAgICAgICAgICAgIGV2ZW50VGltZTogZXZlbnRPYmplY3QuZXZlbnRUaW1lLFxuICAgICAgICAgICAgICAgIGV2ZW50TG9jYXRpb246IGV2ZW50T2JqZWN0LmV2ZW50TG9jYXRpb25cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oICgpID0+IHtcbiAgICAgICAgICAgIGV2ZW50cy5hcHBlbmRVc2VyRXZlbnRzKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGhhbmRsZUV2ZW50RGVsZXRlQnV0dG9uKCkge1xuICAgICAgICBjb25zdCBpZFRvRGVsZXRlID0gZXZlbnQudGFyZ2V0LmlkLnNwbGl0KFwiLS1cIilbMV07XG4gICAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcbiAgICAgICAgICAgIGRlbGV0ZUlkOiBpZFRvRGVsZXRlLFxuICAgICAgICAgICAgZGF0YVNldDogXCJldmVudHNcIixcbiAgICAgICAgICAgIGZldGNoVHlwZTogXCJERUxFVEVcIixcbiAgICAgICAgICAgIGRhdGFCYXNlT2JqZWN0OiB7XG4gICAgICAgICAgICAgICAgdXNlcklkOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKCAoKSA9PiB7XG4gICAgICAgICAgICBldmVudHMuYXBwZW5kVXNlckV2ZW50cygpO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBoYW5kbGVFdmVudEVkaXRCdXR0b24oKSB7XG4gICAgICAgIGNvbnN0IGlkVG9FZGl0ID0gZXZlbnQudGFyZ2V0LmlkLnNwbGl0KFwiLS1cIilbMV07XG4gICAgICAgIC8vIGNvbnN0IGV2ZW50T2JqZWN0ID1cbiAgICAgICAgZG9tQ29tcG9uZW50cy5jcmVhdGVFdmVudEVkaXRJbnB1dChpZFRvRWRpdCwgKVxuICAgIH0sXG4gICAgaGFuZGxlRXZlbnRVcGRhdGVCdXR0b24oKSB7XG5cbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBldmVudExpc3RlbmVycztcbiIsImltcG9ydCBub21hZERhdGEgZnJvbSBcIi4vbm9tYWREYXRhXCI7XG5pbXBvcnQgZXZlbnRzIGZyb20gXCIuL2V2ZW50c1wiO1xuLy8gaW1wb3J0IGRvbUNvbXBvbmVudHMgZnJvbSBcIi4vZG9tQ29tcG9uZW50c1wiO1xuXG5jb25zdCBldmVudFBhZ2VMaXN0ZW5lcnMgPSB7XG4gICAgaGFuZGxlU2hvd0J1dHRvbigpIHtcbiAgICAgICAgY29uc3Qgb3V0cHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvdXRwdXRcIik7XG4gICAgICAgIGNvbnN0IHNob3dCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Nob3dGb3JtXCIpO1xuICAgICAgICBvdXRwdXQucmVtb3ZlQ2hpbGQoc2hvd0J1dHRvbik7XG4gICAgICAgIGNvbnN0IGV2ZW50Rm9ybSA9IGV2ZW50cy5jcmVhdGVFdmVudElucHV0KCk7XG4gICAgICAgIG91dHB1dC5pbnNlcnRCZWZvcmUoZXZlbnRGb3JtLCBvdXRwdXQuZmlyc3RDaGlsZCk7XG4gICAgfSxcbiAgICBoYW5kbGVTYXZlQnV0dG9uKCkge1xuICAgICAgICBjb25zdCBuYW1lSW5wdXR0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2V2ZW50TmFtZVwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZGF0ZUlucHV0dGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNldmVudERhdGVcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IHRpbWVJbnB1dHRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXZlbnRUaW1lXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBsb2NhdGlvbklucHV0dGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNldmVudExvY2F0aW9uXCIpLnZhbHVlO1xuXG4gICAgICAgIGlmIChuYW1lSW5wdXR0ZWQgPT09IFwiXCIgfHwgZGF0ZUlucHV0dGVkID09PSBcIlwiIHx8IHRpbWVJbnB1dHRlZCA9PT0gXCJcIiB8fCBsb2NhdGlvbklucHV0dGVkID09PSBcIlwiKSB7XG4gICAgICAgICAgICBhbGVydChcIlBsZWFzZSBpbnB1dCBpbmZvcm1hdGlvbiBpbiBhbGwgZmllbGRzXCIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICAgICAgICAgICAgZGF0YVNldDogXCJldmVudHNcIixcbiAgICAgICAgICAgICAgICBmZXRjaFR5cGU6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgIGRhdGFCYXNlT2JqZWN0OiB7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZDogTnVtYmVyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIikpLFxuICAgICAgICAgICAgICAgICAgICBldmVudE5hbWU6IG5hbWVJbnB1dHRlZCxcbiAgICAgICAgICAgICAgICAgICAgZXZlbnREYXRlOiBkYXRlSW5wdXR0ZWQsXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50VGltZTogdGltZUlucHV0dGVkLFxuICAgICAgICAgICAgICAgICAgICBldmVudExvY2F0aW9uOiBsb2NhdGlvbklucHV0dGVkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnRzLmFwcGVuZFVzZXJBbmRGcmllbmRFdmVudHMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH0sXG4gICAgaGFuZGxlSGlkZUJ1dHRvbigpIHtcbiAgICAgICAgY29uc3Qgb3V0cHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvdXRwdXRcIik7XG4gICAgICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmV2ZW50SW5wdXRcIik7XG4gICAgICAgIG91dHB1dC5yZW1vdmVDaGlsZChmb3JtQ29udGFpbmVyKTtcbiAgICAgICAgZXZlbnRzLmFkZFNob3dCdXR0b24oKTtcbiAgICB9LFxuICAgIGhhbmRsZURlbGV0ZUJ1dHRvbigpIHtcbiAgICAgICAgY29uc3QgaWRUb0RlbGV0ZSA9IGV2ZW50LnRhcmdldC5pZC5zcGxpdChcIi0tXCIpWzFdO1xuICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICAgICAgICBkZWxldGVJZDogaWRUb0RlbGV0ZSxcbiAgICAgICAgICAgIGRhdGFTZXQ6IFwiZXZlbnRzXCIsXG4gICAgICAgICAgICBmZXRjaFR5cGU6IFwiREVMRVRFXCIsXG4gICAgICAgICAgICBkYXRhQmFzZU9iamVjdDoge1xuICAgICAgICAgICAgICAgIHVzZXJJZDogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAudGhlbiggKCkgPT4ge1xuICAgICAgICAgICAgZXZlbnRzLmFwcGVuZFVzZXJBbmRGcmllbmRFdmVudHMoKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBoYW5kbGVFZGl0QnV0dG9uKCkge1xuICAgICAgICBjb25zdCBpZFRvRWRpdCA9IGV2ZW50LnRhcmdldC5pZC5zcGxpdChcIi0tXCIpWzFdO1xuICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICAgICAgICBkYXRhU2V0OiBcImV2ZW50c1wiLFxuICAgICAgICAgICAgZmV0Y2hUeXBlOiBcIkdFVFwiLFxuICAgICAgICAgICAgZGF0YUJhc2VPYmplY3Q6IHtcbiAgICAgICAgICAgIHVzZXJJZDogTnVtYmVyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIikpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVtYmVkSXRlbTogYC8ke2lkVG9FZGl0fWBcbi8vIEFib3ZlIGlzIGEgYml0IG9mIGEgaGFja3kgc29sdXRpb24gaW4gb3JkZXIgdG8gZ2V0IGEgc3BlY2lmaWMgZXZlbnQuIE1heWJlIG5lZWQgdG8gYWRkIHNwZWNpZmljIGdldCBmdW5jdGlvbiB0byBub21hZERhdGFcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ocGFyc2VkUmVzcG9uc2UgPT4ge1xuICAgICAgICBldmVudHMuY3JlYXRlRXZlbnRFZGl0SW5wdXQoaWRUb0VkaXQsIHBhcnNlZFJlc3BvbnNlKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBoYW5kbGVVcGRhdGVCdXR0b24oKSB7XG4gICAgICAgIGNvbnN0IGVkaXRlZElkID0gZXZlbnQudGFyZ2V0LmlkLnNwbGl0KFwiLS1cIilbMV07XG5cbiAgICAgICAgY29uc3QgZWRpdGVkTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNlZGl0TmFtZS0tJHtlZGl0ZWRJZH1gKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZWRpdGVkRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNlZGl0RGF0ZS0tJHtlZGl0ZWRJZH1gKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZWRpdGVkVGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNlZGl0VGltZS0tJHtlZGl0ZWRJZH1gKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZWRpdGVkTG9jYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZWRpdExvY2F0aW9uLS0ke2VkaXRlZElkfWApLnZhbHVlO1xuXG4gICAgICAgIGlmIChlZGl0ZWROYW1lID09PSBcIlwiIHx8IGVkaXRlZERhdGUgPT09IFwiXCIgfHwgZWRpdGVkVGltZSA9PT0gXCJcIiB8fCBlZGl0ZWRMb2NhdGlvbiA9PT0gXCJcIikge1xuICAgICAgICAgICAgYWxlcnQoXCJQbGVhc2UgZG8gbm90IGxlYXZlIGVkaXQgZmllbGRzIGJsYW5rXCIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICAgICAgICAgICAgcHV0SWQ6IGVkaXRlZElkLFxuICAgICAgICAgICAgICAgIGRhdGFTZXQ6IFwiZXZlbnRzXCIsXG4gICAgICAgICAgICAgICAgZmV0Y2hUeXBlOiBcIlBVVFwiLFxuICAgICAgICAgICAgICAgIGRhdGFCYXNlT2JqZWN0OiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBlZGl0ZWRJZCxcbiAgICAgICAgICAgICAgICAgICAgdXNlcklkOiBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSksXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50TmFtZTogZWRpdGVkTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZXZlbnREYXRlOiBlZGl0ZWREYXRlLFxuICAgICAgICAgICAgICAgICAgICBldmVudFRpbWU6IGVkaXRlZFRpbWUsXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50TG9jYXRpb246IGVkaXRlZExvY2F0aW9uXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnRzLmFwcGVuZFVzZXJBbmRGcmllbmRFdmVudHMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZXZlbnRQYWdlTGlzdGVuZXJzOyIsIi8vIEF1dGhvcjogQ29sZSBCcnlhbnQgLyBQdXJwb3NlOlxuXG5pbXBvcnQgbm9tYWREYXRhIGZyb20gXCIuL25vbWFkRGF0YVwiO1xuaW1wb3J0IGRvbUNvbXBvbmVudHMgZnJvbSBcIi4vZG9tQ29tcG9uZW50c1wiO1xuaW1wb3J0IGV2ZW50UGFnZUxpc3RlbmVycyBmcm9tIFwiLi9ldmVudFBhZ2VMaXN0ZW5lcnNcIjtcblxuXG4vL2NyZWF0ZUV2ZW50SW5wdXQgYW5kIGNyZWF0ZUV2ZW50SXRlbSB3aWxsIGJlIGFkZGVkIHRvIHRoaXMgb2JqZWN0LiBzbyBkb21idWlsZGVyLlxuY29uc3QgZXZlbnRzID0ge1xuICBzaG93RXZlbnRGb3JtICgpIHtcbiAgICAkKFwiI291dHB1dFwiKS5lbXB0eSgpXG4gICAgY29uc3Qgb3V0cHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvdXRwdXRcIik7XG4gICAgY29uc3QgZXZlbnRzRm9ybSA9IHRoaXMuY3JlYXRlRXZlbnRJbnB1dCgpO1xuICAgIG91dHB1dC5hcHBlbmRDaGlsZChldmVudHNGb3JtKVxuICAgIGNvbnN0IGV2ZW50TG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIilcbiAgICBldmVudExvZy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImV2ZW50TG9nXCIpO1xuICAgIG91dHB1dC5hcHBlbmRDaGlsZChldmVudExvZyk7XG4gIH0sXG4gIGFkZFNob3dCdXR0b24oKSB7XG4gICAgY29uc3Qgb3V0cHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvdXRwdXRcIik7XG4gICAgY29uc3Qgc2hvd0J1dHRvbiA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiYnV0dG9uXCIsIGNvbnRlbnQ6IFwiQ3JlYXRlIGEgTmV3IEV2ZW50XCIsIGF0dHJpYnV0ZXM6IHt0eXBlOiBcImJ1dHRvblwiLCBpZDogXCJzaG93Rm9ybVwifX0pO1xuICAgIHNob3dCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50UGFnZUxpc3RlbmVycy5oYW5kbGVTaG93QnV0dG9uKTtcbiAgICBvdXRwdXQuaW5zZXJ0QmVmb3JlKHNob3dCdXR0b24sIG91dHB1dC5maXJzdENoaWxkKTtcbiAgfSxcbiAgYXBwZW5kVXNlckFuZEZyaWVuZEV2ZW50cygpIHtcbiAgICBjb25zdCBldmVudExvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXZlbnRMb2dcIik7XG4gICAgY29uc3QgZXZlbnRIb2xkZXIgPSBbXTtcbiAgICBjb25zdCB1c2VySG9sZGVyID0gW051bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpKV07XG4gICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xuICAgICAgZGF0YVNldDogXCJmcmllbmRzXCIsXG4gICAgICBmZXRjaFR5cGU6IFwiR0VUXCIsXG4gICAgICBkYXRhQmFzZU9iamVjdDogXCJcIixcbiAgICAgIGVtYmVkSXRlbTogXCI/X2VtYmVkPWV2ZW50c1wiXG4gICAgfSlcbiAgICAudGhlbihwYXJzZWRSZXNwb25zZSA9PiB7XG4gICAgICBwYXJzZWRSZXNwb25zZS5mb3JFYWNoKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYocmVzcG9uc2UudXNlcklkID09PSBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSkpIHtcbiAgICAgICAgICB1c2VySG9sZGVyLnB1c2gocmVzcG9uc2Uub3RoZXJGcmllbmRJZCk7XG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICAgdXNlckhvbGRlci5mb3JFYWNoKHVzZXJJZCA9PiB7XG4gICAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcbiAgICAgICAgICBkYXRhU2V0OiBcImV2ZW50c1wiLFxuICAgICAgICAgIGZldGNoVHlwZTogXCJHRVRcIixcbiAgICAgICAgICBkYXRhQmFzZU9iamVjdDogXCJcIixcbiAgICAgICAgICBlbWJlZEl0ZW06IGA/X3VzZXJJZD0ke3VzZXJJZH1gXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHBhcnNlZFJlc3BvbnNlID0+IHtcbiAgICAgICAgICBwYXJzZWRSZXNwb25zZS5mb3JFYWNoKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS51c2VySWQgPT09IHVzZXJJZCkge1xuICAgICAgICAgICAgICBldmVudEhvbGRlci5wdXNoKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29uc3Qgc29ydGVkRXZlbnRzID0gZXZlbnRIb2xkZXIuc29ydCggKGEsIGIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShhLmV2ZW50RGF0ZSkgLSBuZXcgRGF0ZShiLmV2ZW50RGF0ZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29uc3QgZG9jdUZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgICAgc29ydGVkRXZlbnRzLmZvckVhY2goZXZlbnQgPT4ge1xuICAgICAgICAgICAgd2hpbGUgKGV2ZW50TG9nLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgZXZlbnRMb2cucmVtb3ZlQ2hpbGQoZXZlbnRMb2cuZmlyc3RDaGlsZClcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBldmVudEl0ZW0gPSB0aGlzLmNyZWF0ZUV2ZW50SXRlbShldmVudCk7XG4gICAgICAgICAgICBkb2N1RnJhZy5hcHBlbmRDaGlsZChldmVudEl0ZW0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGV2ZW50TG9nLmFwcGVuZENoaWxkKGRvY3VGcmFnKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcbiAgY3JlYXRlRXZlbnRJbnB1dCgpIHtcblxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI291dHB1dFwiKVxuICAgIGNvbnN0IGZvcm1IZWFkZXIgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImgyXCIsIGNvbnRlbnQ6IFwiQWRkIGEgTmV3IEV2ZW50OlwifSk7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtSGVhZGVyKTtcbiAgICBjb25zdCBldmVudEZvcm0gPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImZvcm1cIiwgYXR0cmlidXRlczoge2NsYXNzOiBcImV2ZW50SW5wdXRcIn19KTtcbiAgICBjb25zdCBuYW1lRmllbGRzZXQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImZpZWxkc2V0XCJ9KTtcbiAgICBjb25zdCBuYW1lTGFiZWwgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImxhYmVsXCIsIGNvbnRlbnQ6IFwiRXZlbnQgTmFtZTpcIiwgYXR0cmlidXRlczoge2ZvcjogXCJldmVudE5hbWVcIn19KTtcbiAgICBjb25zdCBuYW1lSW5wdXQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImlucHV0XCIsIGF0dHJpYnV0ZXM6IHt0eXBlOiBcInRleHRcIiwgbmFtZTogXCJldmVudE5hbWVcIiwgaWQ6IFwiZXZlbnROYW1lXCJ9fSk7XG4gICAgbmFtZUZpZWxkc2V0LmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XG4gICAgbmFtZUZpZWxkc2V0LmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG5cbiAgICBjb25zdCBkYXRlRmllbGRzZXQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImZpZWxkc2V0XCJ9KTtcbiAgICBjb25zdCBkYXRlTGFiZWwgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImxhYmVsXCIsIGNvbnRlbnQ6IFwiRXZlbnQgRGF0ZTpcIiwgYXR0cmlidXRlczoge2ZvcjogXCJldmVudERhdGVcIn19KTtcbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImlucHV0XCIsIGF0dHJpYnV0ZXM6IHt0eXBlOiBcImRhdGVcIiwgbmFtZTogXCJldmVudERhdGVcIiwgaWQ6IFwiZXZlbnREYXRlXCJ9fSk7XG4gICAgZGF0ZUZpZWxkc2V0LmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gICAgZGF0ZUZpZWxkc2V0LmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG5cbiAgICBjb25zdCB0aW1lRmllbGRzZXQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImZpZWxkc2V0XCJ9KTtcbiAgICBjb25zdCB0aW1lTGFiZWwgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImxhYmVsXCIsIGNvbnRlbnQ6IFwiRXZlbnQgVGltZTpcIiwgYXR0cmlidXRlczoge2ZvcjogXCJldmVudFRpbWVcIn19KTtcbiAgICBjb25zdCB0aW1lSW5wdXQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImlucHV0XCIsIGF0dHJpYnV0ZXM6IHt0eXBlOiBcInRpbWVcIiwgbmFtZTogXCJldmVudFRpbWVcIiwgaWQ6IFwiZXZlbnRUaW1lXCJ9fSk7XG4gICAgdGltZUZpZWxkc2V0LmFwcGVuZENoaWxkKHRpbWVMYWJlbCk7XG4gICAgdGltZUZpZWxkc2V0LmFwcGVuZENoaWxkKHRpbWVJbnB1dCk7XG5cbiAgICBjb25zdCBsb2NhdGlvbkZpZWxkc2V0ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJmaWVsZHNldFwifSk7XG4gICAgY29uc3QgbG9jYXRpb25MYWJlbCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwibGFiZWxcIiwgY29udGVudDogXCJFbnRlciBMb2NhdGlvbjpcIiwgYXR0cmlidXRlczoge2ZvcjogXCJldmVudExvY2F0aW9uXCJ9fSk7XG4gICAgY29uc3QgbG9jYXRpb25JbnB1dCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiaW5wdXRcIiwgYXR0cmlidXRlczoge3R5cGU6IFwidGV4dFwiLCBuYW1lOiBcImV2ZW50TG9jYXRpb25cIiwgaWQ6IFwiZXZlbnRMb2NhdGlvblwifX0pO1xuICAgIGxvY2F0aW9uRmllbGRzZXQuYXBwZW5kQ2hpbGQobG9jYXRpb25MYWJlbCk7XG4gICAgbG9jYXRpb25GaWVsZHNldC5hcHBlbmRDaGlsZChsb2NhdGlvbklucHV0KTtcblxuICAgIGNvbnN0IHNhdmVCdXR0b24gPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImJ1dHRvblwiLCBjb250ZW50OiBcIlNhdmVcIiwgYXR0cmlidXRlczoge3R5cGU6IFwiYnV0dG9uXCIsIGlkOiBcInNhdmVFdmVudFwifX0pO1xuICAgIHNhdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50UGFnZUxpc3RlbmVycy5oYW5kbGVTYXZlQnV0dG9uKTtcblxuICAgIGNvbnN0IGhpZGVCdXR0b24gPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImJ1dHRvblwiLCBjb250ZW50OiBcIkhpZGUgRXZlbnQgSW5wdXRcIiwgYXR0cmlidXRlczoge3R5cGU6IFwiYnV0dG9uXCIsIGlkOiBcImhpZGVFdmVudFwifX0pO1xuICAgIGhpZGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50UGFnZUxpc3RlbmVycy5oYW5kbGVIaWRlQnV0dG9uKTtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGV2ZW50Rm9ybSlcbiAgICBldmVudEZvcm0uYXBwZW5kQ2hpbGQobmFtZUZpZWxkc2V0KTtcbiAgICBldmVudEZvcm0uYXBwZW5kQ2hpbGQoZGF0ZUZpZWxkc2V0KTtcbiAgICBldmVudEZvcm0uYXBwZW5kQ2hpbGQodGltZUZpZWxkc2V0KTtcbiAgICBldmVudEZvcm0uYXBwZW5kQ2hpbGQobG9jYXRpb25GaWVsZHNldCk7XG4gICAgZXZlbnRGb3JtLmFwcGVuZENoaWxkKHNhdmVCdXR0b24pO1xuICAgIGV2ZW50Rm9ybS5hcHBlbmRDaGlsZChoaWRlQnV0dG9uKTtcbiAgICAvLyBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGV2ZW50Rm9ybSlcbiAgICByZXR1cm4gZXZlbnRGb3JtO1xuICB9LFxuICBjcmVhdGVFdmVudEl0ZW0gKGV2ZW50T2JqZWN0KSB7XG4gICAgY29uc3QgZXZlbnRJdGVtID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJhcnRpY2xlXCIsIGF0dHJpYnV0ZXM6IHtjbGFzczogXCJldmVudEl0ZW1cIiwgaWQ6IGBldmVudEl0ZW0tLSR7ZXZlbnRPYmplY3QuaWR9YH19KTtcbiAgICBjb25zdCBldmVudEhlYWRlciA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiaDJcIiwgY29udGVudDogZXZlbnRPYmplY3QuZXZlbnROYW1lfSk7XG5cbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZXZlbnRPYmplY3QuZXZlbnREYXRlKTtcbiAgICBjb25zdCBkYXRpZnkgPSAoKSA9PiB7XG4gICAgICBjb25zdCBtb250aE5hbWVzID0gW1xuICAgICAgICBcIkphbnVhcnlcIixcbiAgICAgICAgXCJGZWJydWFyeVwiLFxuICAgICAgICBcIk1hcmNoXCIsXG4gICAgICAgIFwiQXByaWxcIixcbiAgICAgICAgXCJNYXlcIixcbiAgICAgICAgXCJKdW5lXCIsXG4gICAgICAgIFwiSnVseVwiLFxuICAgICAgICBcIkF1Z3VzdFwiLFxuICAgICAgICBcIlNlcHRlbWJlclwiLFxuICAgICAgICBcIk9jdG9iZXJcIixcbiAgICAgICAgXCJOb3ZlbWJlclwiLFxuICAgICAgICBcIkRlY2VtYmVyXCJcbiAgICAgIF07XG4gICAgICBjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKTtcbiAgICAgIGNvbnN0IG1vbnRoSW5kZXggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgcmV0dXJuIGAke21vbnRoTmFtZXNbbW9udGhJbmRleF19ICR7ZGF5fSwgJHt5ZWFyfWA7XG4gICAgfTtcblxuICAgIGNvbnN0IGxvbmdEYXRlID0gZGF0aWZ5KCk7XG5cbiAgICBjb25zdCBldmVudERhdGVUaW1lID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJwXCIsIGNvbnRlbnQ6IGBBdCAke2V2ZW50T2JqZWN0LmV2ZW50VGltZX0gb24gJHtsb25nRGF0ZX1gfSk7XG4gICAgY29uc3QgZXZlbnRMb2NhdGlvbiA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwicFwiLCBjb250ZW50OiBgTG9jYXRpb246ICR7ZXZlbnRPYmplY3QuZXZlbnRMb2NhdGlvbn1gfSk7XG5cbiAgICBldmVudEl0ZW0uYXBwZW5kQ2hpbGQoZXZlbnRIZWFkZXIpO1xuICAgIGV2ZW50SXRlbS5hcHBlbmRDaGlsZChldmVudERhdGVUaW1lKTtcbiAgICBldmVudEl0ZW0uYXBwZW5kQ2hpbGQoZXZlbnRMb2NhdGlvbik7XG5cbiAgICBpZiAoZXZlbnRPYmplY3QudXNlcklkID09PSBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSkpIHtcbiAgICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImJ1dHRvblwiLCBjb250ZW50OiBcIkVkaXRcIiwgYXR0cmlidXRlczoge3R5cGU6IFwiYnV0dG9uXCIsIGlkOiBgZWRpdEV2ZW50LS0ke2V2ZW50T2JqZWN0LmlkfWB9fSk7XG4gICAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudFBhZ2VMaXN0ZW5lcnMuaGFuZGxlRWRpdEJ1dHRvbik7XG4gICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImJ1dHRvblwiLCBjb250ZW50OiBcIkRlbGV0ZVwiLCBhdHRyaWJ1dGVzOiB7dHlwZTogXCJidXR0b25cIiwgaWQ6IGBkZWxldGVFdmVudC0tJHtldmVudE9iamVjdC5pZH1gfX0pO1xuICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudFBhZ2VMaXN0ZW5lcnMuaGFuZGxlRGVsZXRlQnV0dG9uKTtcbiAgICAgIGV2ZW50SXRlbS5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcbiAgICAgIGV2ZW50SXRlbS5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICAgIH07XG5cbiAgICByZXR1cm4gZXZlbnRJdGVtO1xuICB9LFxuICBjcmVhdGVFdmVudEVkaXRJbnB1dChjb250YWluZXJJZCwgZXZlbnRPYmplY3QpIHtcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJmb3JtXCIsIGF0dHJpYnVlczoge2NsYXNzOiBcImV2ZW50RWRpdFwifX0pO1xuICAgIGNvbnN0IGV2ZW50SGVhZGVyID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJoMlwiLCBjb250ZW50OiBldmVudE9iamVjdC5ldmVudE5hbWV9KTtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGV2ZW50SGVhZGVyKTtcblxuICAgIGNvbnN0IG5hbWVGaWVsZHNldCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiZmllbGRzZXRcIn0pO1xuICAgIGNvbnN0IG5hbWVMYWJlbCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwibGFiZWxcIiwgY29udGVudDogXCJFZGl0IE5hbWU6XCIsIGF0dHJpYnV0ZXM6IHtmb3I6IFwiZXZlbnROYW1lXCJ9fSk7XG4gICAgY29uc3QgbmFtZUlucHV0ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJpbnB1dFwiLCBhdHRyaWJ1dGVzOiB7dHlwZTogXCJ0ZXh0XCIsIG5hbWU6IFwiZXZlbnROYW1lXCIsIGlkOiBgZWRpdE5hbWUtLSR7Y29udGFpbmVySWR9YCwgdmFsdWU6IGV2ZW50T2JqZWN0LmV2ZW50TmFtZX19KTtcbiAgICBuYW1lRmllbGRzZXQuYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcbiAgICBuYW1lRmllbGRzZXQuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcblxuICAgIGNvbnN0IGRhdGVGaWVsZHNldCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiZmllbGRzZXRcIn0pO1xuICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwibGFiZWxcIiwgY29udGVudDogXCJFZGl0IERhdGU6XCIsIGF0dHJpYnV0ZXM6IHtmb3I6IFwiZXZlbnREYXRlXCJ9fSk7XG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJpbnB1dFwiLCBhdHRyaWJ1dGVzOiB7dHlwZTogXCJkYXRlXCIsIG5hbWU6IFwiZXZlbnREYXRlXCIsIGlkOiBgZWRpdERhdGUtLSR7Y29udGFpbmVySWR9YCwgdmFsdWU6IGV2ZW50T2JqZWN0LmV2ZW50RGF0ZX19KTtcbiAgICBkYXRlRmllbGRzZXQuYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcbiAgICBkYXRlRmllbGRzZXQuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcblxuICAgIGNvbnN0IHRpbWVGaWVsZHNldCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiZmllbGRzZXRcIn0pO1xuICAgIGNvbnN0IHRpbWVMYWJlbCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwibGFiZWxcIiwgY29udGVudDogXCJFZGl0IFRpbWU6XCIsIGF0dHJpYnV0ZXM6IHtmb3I6IFwiZXZlbnRUaW1lXCJ9fSk7XG4gICAgY29uc3QgdGltZUlucHV0ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJpbnB1dFwiLCBhdHRyaWJ1dGVzOiB7dHlwZTogXCJ0aW1lXCIsIG5hbWU6IFwiZXZlbnRUaW1lXCIsIGlkOiBgZWRpdFRpbWUtLSR7Y29udGFpbmVySWR9YCwgdmFsdWU6IGV2ZW50T2JqZWN0LmV2ZW50VGltZX19KTtcbiAgICB0aW1lRmllbGRzZXQuYXBwZW5kQ2hpbGQodGltZUxhYmVsKTtcbiAgICB0aW1lRmllbGRzZXQuYXBwZW5kQ2hpbGQodGltZUlucHV0KTtcblxuICAgIGNvbnN0IGxvY2F0aW9uRmllbGRzZXQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImZpZWxkc2V0XCJ9KTtcbiAgICBjb25zdCBsb2NhdGlvbkxhYmVsID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJsYWJlbFwiLCBjb250ZW50OiBcIkVkaXQgTG9jYXRpb246XCIsIGF0dHJpYnV0ZXM6IHtmb3I6IFwiZXZlbnRMb2NhdGlvblwifX0pO1xuICAgIGNvbnN0IGxvY2F0aW9uSW5wdXQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImlucHV0XCIsIGF0dHJpYnV0ZXM6IHt0eXBlOiBcInRleHRcIiwgbmFtZTogXCJldmVudExvY2F0aW9uXCIsIGlkOiBgZWRpdExvY2F0aW9uLS0ke2NvbnRhaW5lcklkfWAsIHZhbHVlOiBldmVudE9iamVjdC5ldmVudExvY2F0aW9ufX0pO1xuICAgIGxvY2F0aW9uRmllbGRzZXQuYXBwZW5kQ2hpbGQobG9jYXRpb25MYWJlbCk7XG4gICAgbG9jYXRpb25GaWVsZHNldC5hcHBlbmRDaGlsZChsb2NhdGlvbklucHV0KTtcblxuICAgIGNvbnN0IHVwZGF0ZUJ1dHRvbiA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiYnV0dG9uXCIsIGNvbnRlbnQ6IFwiVXBkYXRlXCIsIGF0dHJpYnV0ZXM6IHt0eXBlOiBcImJ1dHRvblwiLCBpZDogYHN1Ym1pdEVkaXRzLS0ke2NvbnRhaW5lcklkfWB9fSk7XG4gICAgdXBkYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudFBhZ2VMaXN0ZW5lcnMuaGFuZGxlVXBkYXRlQnV0dG9uKTtcblxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQobmFtZUZpZWxkc2V0KTtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVGaWVsZHNldCk7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aW1lRmllbGRzZXQpO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQobG9jYXRpb25GaWVsZHNldCk7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZCh1cGRhdGVCdXR0b24pO1xuXG4gICAgbGV0IGN1cnJlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZXZlbnRJdGVtLS0ke2NvbnRhaW5lcklkfWApO1xuICAgIHdoaWxlIChjdXJyZW50Q29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGN1cnJlbnRDb250YWluZXIucmVtb3ZlQ2hpbGQoY3VycmVudENvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICB9O1xuICAgIGN1cnJlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG4gIH1cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgZXZlbnRzOyIsImltcG9ydCBub21hZERhdGEgZnJvbSBcIi4vbm9tYWREYXRhXCJcbmltcG9ydCBkb21Db21wb25lbnRzIGZyb20gXCIuL2RvbUNvbXBvbmVudHNcIjtcbmltcG9ydCBmcmllbmRzRXZlbnRzTGlzdGVuZXIgZnJvbSBcIi4vZnJpZW5kc0V2ZW50c0xpc3RlbmVyXCI7XG5cbmNvbnN0IGZyaWVuZHMgPSB7XG5cblxuICBkZWZpbmVDdXJyZW50VXNlcnNGcmllbmRzICgpIHtcbiAgICAkKFwiI291dHB1dFwiKS5lbXB0eSgpXG4gICAgY29uc3QgY3VycmVudFVzZXIgPSAxO1xuICAgIGxldCB1c2VySWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKTtcbiAgICAvLyBsZXQgY3VycmVudFVzZXIgPSBOdW1iZXIodXNlcklkKTtcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50VXNlciwgdXNlcklkKVxuICAgIGxldCBmcmllbmRIb2xkZXIgPSBbXTtcbi8vIFBVTEwgRlJPTSBGUklFTkRTIEpTT04tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbm5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcblwiZGF0YVNldFwiIDogXCJmcmllbmRzXCIsXG5cImZldGNoVHlwZVwiIDogXCJHRVRcIixcblwiZGF0YUJhc2VPYmplY3RcIiA6IFwiXCIsXG5cImVtYmVkSXRlbVwiIDogXCI/X2VtYmVkPWV2ZW50c1wifSlcbi50aGVuKGZyb21GcmllbmRzID0+IHtcbiAgLy8gY29uc29sZS5sb2coZnJvbUZyaWVuZHMpXG4gIGZyb21GcmllbmRzLmZvckVhY2goZnJpZW5kRGF0YSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coZnJpZW5kRGF0YSlcbiAgICBpZiAoZnJpZW5kRGF0YS51c2VySWQgPT09IGN1cnJlbnRVc2VyKSB7XG4gICAgICBmcmllbmRIb2xkZXIucHVzaChmcmllbmREYXRhLm90aGVyRnJpZW5kSWQpXG4gICAgfVxuICB9KVxuICBmcmllbmRIb2xkZXIuZm9yRWFjaChvZmZpY2lhbEZyaWVuZCA9PiB7XG4gICAgdGhpcy5sb2FkQ3VycmVudFVzZXJzRnJpZW5kcyhvZmZpY2lhbEZyaWVuZClcbiAgfSlcbn0pXG59LFxubG9hZEN1cnJlbnRVc2Vyc0ZyaWVuZHMgKGZyaWVuZCkge1xuICAvLyBQVUxMIEZST00gVVNFUlMgSlNPTiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBjb25zb2xlLmxvZyhmcmllbmQpXG4gICAgICBjb25zdCB0YXJnZXRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm91dHB1dFwiKVxuICAgICAgdGFyZ2V0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgIGVsZW1lbnRUeXBlOiBcInNlY3Rpb25cIixcbiAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgIGNsYXNzOiBcImZyaWVuZC1jb250YWluZXJcIixcbiAgICAgICAgICBpZDogYGZyaWVuZC0ke2ZyaWVuZH1gXG4gICAgICAgIH1cbiAgICAgIH0pKVxuICAgICAgY29uc3QgZnJpZW5kQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGZyaWVuZC0ke2ZyaWVuZH1gKVxuXG5cbiAgICAgIGxldCBmcmllbmREb21CdWlsZGVyID0gW107XG4gICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICBcImRhdGFTZXRcIiA6IFwidXNlcnNcIixcbiAgICAgIFwiZmV0Y2hUeXBlXCIgOiBcIkdFVFwiLFxuICAgICAgXCJkYXRhQmFzZU9iamVjdFwiIDogXCJcIixcbiAgICAgIFwiZW1iZWRJdGVtXCIgOiBcIj9fZW1iZWQ9ZXZlbnRzXCJ9KVxuICAgICAgLnRoZW4oZnJvbVVzZXJEYXRhID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZnJvbVVzZXJEYXRhKTtcbiAgICAgICAgZnJvbVVzZXJEYXRhLmZvckVhY2godXNlckluZm8gPT4ge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGZyaWVuZCwgdXNlckluZm8uaWQpXG4gICAgICAgICAgaWYgKHVzZXJJbmZvLmlkID09PSBmcmllbmQpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXJJbmZvLnVzZXJOYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IGZyaWVuZElkZW50aWZpZXIgPSB7XG4gICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImgyXCIsXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IHVzZXJJbmZvLnVzZXJOYW1lLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnJpZW5kRG9tQnVpbGRlci5wdXNoKGZyaWVuZElkZW50aWZpZXIpXG4gICAgICAgICAgICAvLyBQVUxMIEZST00gRVZFTlRTIEpTT04gLS0tLS0tXG4gICAgICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICAgICAgICAgICAgXCJkYXRhU2V0XCIgOiBcImV2ZW50c1wiLFxuICAgICAgICAgICAgXCJmZXRjaFR5cGVcIiA6IFwiR0VUXCIsXG4gICAgICAgICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiBcIlwiLFxuICAgICAgICAgICAgXCJlbWJlZEl0ZW1cIiA6IFwiP19lbWJlZD1ldmVudHNcIn0pXG4gICAgICAgICAgICAudGhlbihldmVudHMgPT4ge1xuICAgICAgICAgICAgICBldmVudHMuZm9yRWFjaChldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnVzZXJJZCA9PT0gZnJpZW5kKSB7XG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudC5ldmVudE5hbWUpO1xuICAgICAgICAgICAgICAgICAgY29uc3QgZXZlbnRIb2xkZXIgPSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcInBcIixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogYFlvdXIgZmVsbG93IG5vbWFkcyB1cGNvbWluZyBldmVudDogJHtldmVudC5ldmVudE5hbWV9IG9uICR7ZXZlbnQuZXZlbnREYXRlfWAsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZDogYGV2ZW50LSR7ZXZlbnQuaWR9YCxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgZnJpZW5kRG9tQnVpbGRlci5wdXNoKGV2ZW50SG9sZGVyKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyBQVUxMIEZST00gTkVXU0lURU1TIEpTT04gLS0tLS0tXG4gICAgICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICAgICAgICBcImRhdGFTZXRcIiA6IFwibmV3c2l0ZW1zXCIsXG4gICAgICAgICAgICBcImZldGNoVHlwZVwiIDogXCJHRVRcIixcbiAgICAgICAgICAgIFwiZGF0YUJhc2VPYmplY3RcIiA6IFwiXCIsXG4gICAgICAgICAgICBcImVtYmVkSXRlbVwiIDogXCI/X2VtYmVkPW5ld3NpdGVtc1wifSlcbiAgICAgICAgICAgIC50aGVuKG5ld3NTaGl6ID0+IHtcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobmV3c1NoaXopXG4gICAgICAgICAgICAgIG5ld3NTaGl6LmZvckVhY2godXNlclNwZWNpZmljQXJ0aWNsZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh1c2VyU3BlY2lmaWNBcnRpY2xlcy51c2VySWQgPT09IGZyaWVuZCkge1xuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codXNlclNwZWNpZmljQXJ0aWNsZXMudGl0bGUpXG4gICAgICAgICAgICAgICAgICBjb25zdCBhcnRpY2xlSG9sZGVyID0ge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJwXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHVzZXJTcGVjaWZpY0FydGljbGVzLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IGBhcnRpY2xlLSR7dXNlclNwZWNpZmljQXJ0aWNsZXMuaWR9YCxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgZnJpZW5kRG9tQnVpbGRlci5wdXNoKGFydGljbGVIb2xkZXIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhmcmllbmREb21CdWlsZGVyKVxuICAgICAgICAgICAgICBmcmllbmREb21CdWlsZGVyLmZvckVhY2gob2JqZWN0ID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvYmplY3QpO1xuICAgICAgICAgICAgICAgIGZyaWVuZENvbnRhaW5lci5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQob2JqZWN0KSlcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgY29uc3QgZGVsZXRlRnJpZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgICAgICAgICAgICBkZWxldGVGcmllbmQuY2xhc3NMaXN0LmFkZChgZGVsZXRlLWZyaWVuZC0ke2ZyaWVuZH1gKVxuICAgICAgICAgICAgICBkZWxldGVGcmllbmQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKVxuICAgICAgICAgICAgICBkZWxldGVGcmllbmQudGV4dENvbnRlbnQgPSBcIkRFTEVURVwiO1xuICAgICAgICAgICAgICBmcmllbmRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlRnJpZW5kKTtcbiAgICAgICAgICAgICAgZGVsZXRlRnJpZW5kLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZnJpZW5kc0V2ZW50c0xpc3RlbmVyLmZyaWVuZHNEZWxldGVGcmllbmQoKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuXG4gIH0sXG4gIGluaXRpYWxpemVQb3RlbnRpYWxGcmllbmRzICgpIHtcbiAgICBsZXQgdXNlcklkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyk7XG4gICAgbGV0IGN1cnJlbnRVc2VyID0gTnVtYmVyKHVzZXJJZCk7XG4gICAgLy8gY29uc29sZS5sb2coXCJmcmllbmRzIFBhZ2UgdXNlciBpZCBpcy1cIixjdXJyZW50VXNlcik7XG5cbiAgICBjb25zdCB0YXJnZXRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm91dHB1dFwiKTtcbiAgICBjb25zdCBmaW5kTmV3RnJpZW5kQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgbGV0IGZyaWVuZHNJSGF2ZSA9IFtdO1xuICAgIGZpbmROZXdGcmllbmRDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmdXR1cmUtZnJpZW5kc1wiKTtcbiAgICB0YXJnZXRDb250YWluZXIuYXBwZW5kQ2hpbGQoZmluZE5ld0ZyaWVuZENvbnRhaW5lcik7XG5cbiAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICBcImRhdGFTZXRcIiA6IFwiZnJpZW5kc1wiLFxuICAgICAgXCJmZXRjaFR5cGVcIiA6IFwiR0VUXCIsXG4gICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiBcIlwiLFxuICAgICAgXCJlbWJlZEl0ZW1cIiA6IFwiP19lbWJlZD1mcmllbmRzXCJcbiAgICB9KVxuICAgIC50aGVuKGZyb21GcmllbmRzID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGZyb21GcmllbmRzKVxuICAgICAgZnJvbUZyaWVuZHMuZm9yRWFjaChmcmllbmREYXRhID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZnJpZW5kRGF0YSlcbiAgICAgICAgaWYgKGZyaWVuZERhdGEudXNlcklkID09PSBjdXJyZW50VXNlcikge1xuICAgICAgICAgIGZyaWVuZHNJSGF2ZS5wdXNoKGZyaWVuZERhdGEub3RoZXJGcmllbmRJZClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC8vIGNvbnNvbGUubG9nKGZyaWVuZHNJSGF2ZSlcblxuICAgICAgICB0aGlzLnNob3dVc2VyUG90ZW50aWFsRnJpZW5kcyhmcmllbmRzSUhhdmUpXG4gICAgfSlcbiAgfSxcbiAgc2hvd1VzZXJQb3RlbnRpYWxGcmllbmRzIChmcmllbmQpIHtcbiAgICBsZXQgdXNlcklkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyk7XG4gICAgbGV0IGN1cnJlbnRVc2VyID0gTnVtYmVyKHVzZXJJZCk7XG4gICAgLy8gY29uc29sZS5sb2coZnJpZW5kKVxuICAgIGxldCBhbGxUaGVVc2VycyA9IFtdXG4gICAgZnJpZW5kLnB1c2goY3VycmVudFVzZXIpXG4gICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xuICAgICAgXCJkYXRhU2V0XCIgOiBcInVzZXJzXCIsXG4gICAgICBcImZldGNoVHlwZVwiIDogXCJHRVRcIixcbiAgICAgIFwiZGF0YUJhc2VPYmplY3RcIiA6IFwiXCIsXG4gICAgICBcImVtYmVkSXRlbVwiIDogXCI/X2VtYmVkPXVzZXJzXCJcbiAgICB9KVxuICAgIC50aGVuKGFsbFVzZXJzID0+IHtcbiAgICAgIGFsbFVzZXJzLmZvckVhY2godXNlciA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXIuaWQpXG4gICAgICAgIGFsbFRoZVVzZXJzLnB1c2godXNlci5pZClcbiAgICAgIH0pXG4gICAgICBjb25zb2xlLmxvZyhcImV2ZXJ5b25lXCIsYWxsVGhlVXNlcnMsIFwidXNlciBhbmQgZnJpZW5kc1wiLGZyaWVuZClcbiAgICAgIGxldCBub3RDdXJyZW50RnJpZW5kID0gdGhpcy5kaWZmZXJlbmNlT2YyQXJyYXlzKGFsbFRoZVVzZXJzLCBmcmllbmQpXG4gICAgICBub3RDdXJyZW50RnJpZW5kLmZvckVhY2gobm9GcmllbmRPZk1pbmUgPT4ge1xuICAgICAgICB0aGlzLnByaW50UG90ZW50aWFsRnJpZW5kc1RvQnJvd3Nlcihub0ZyaWVuZE9mTWluZSlcblxuICAgICAgfSlcbiAgICB9KVxuICB9LFxuICAgZGlmZmVyZW5jZU9mMkFycmF5cyAoYXJyYXkxLCBhcnJheTIpIHtcbiAgICB2YXIgdGVtcCA9IFtdO1xuICAgIGFycmF5MSA9IGFycmF5MS50b1N0cmluZygpLnNwbGl0KCcsJykubWFwKE51bWJlcik7XG4gICAgYXJyYXkyID0gYXJyYXkyLnRvU3RyaW5nKCkuc3BsaXQoJywnKS5tYXAoTnVtYmVyKTtcblxuICAgIGZvciAodmFyIGkgaW4gYXJyYXkxKSB7XG4gICAgaWYoYXJyYXkyLmluZGV4T2YoYXJyYXkxW2ldKSA9PT0gLTEpIHRlbXAucHVzaChhcnJheTFbaV0pO1xuICAgIH1cbiAgICBmb3IoaSBpbiBhcnJheTIpIHtcbiAgICBpZihhcnJheTEuaW5kZXhPZihhcnJheTJbaV0pID09PSAtMSkgdGVtcC5wdXNoKGFycmF5MltpXSk7XG4gICAgfVxuICAgIHJldHVybiB0ZW1wLnNvcnQoKGEsYikgPT4gYS1iKTtcbiAgICB9LFxuICAgIHByaW50UG90ZW50aWFsRnJpZW5kc1RvQnJvd3NlciAobm90QUZyaWVuZCkge1xuICAgICAgLy8gY29uc29sZS5sb2cobm90QUZyaWVuZClcbiAgICAgIGNvbnN0IHRhcmdldFNlY3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZ1dHVyZS1mcmllbmRzXCIpO1xuICAgICAgdGFyZ2V0U2VjdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICBlbGVtZW50VHlwZTogXCJkaXZcIixcbiAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgIGlkOiBgcG90ZW50aWFsRnJpZW5kLSR7bm90QUZyaWVuZH1gXG4gICAgICAgIH1cbiAgICAgIH0pKVxuXG4gICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICAgIFwiZGF0YVNldFwiIDogXCJ1c2Vyc1wiLFxuICAgICAgICBcImZldGNoVHlwZVwiIDogXCJHRVRcIixcbiAgICAgICAgXCJkYXRhQmFzZU9iamVjdFwiIDogXCJcIixcbiAgICAgICAgXCJlbWJlZEl0ZW1cIiA6IFwiP19lbWJlZD11c2Vyc1wiXG4gICAgICB9KVxuICAgICAgLnRoZW4odXNlcnNJbmZvID0+IHtcbiAgICAgICAgdXNlcnNJbmZvLmZvckVhY2godXNlciA9PiB7XG4gICAgICAgICAgaWYgKHVzZXIuaWQgPT09IG5vdEFGcmllbmQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXIuaWQsIFwiaXMgbm8gZnJpZW5kXCIpXG4gICAgICAgICAgICBjb25zdCBwb3RlbnRpYWxGcmllbmRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcG90ZW50aWFsRnJpZW5kLSR7bm90QUZyaWVuZH1gKVxuICAgICAgICAgICAgcG90ZW50aWFsRnJpZW5kQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnaDInLFxuICAgICAgICAgICAgICBjb250ZW50OiB1c2VyLnVzZXJOYW1lLFxuICAgICAgICAgICAgICBjc3NDbGFzczogYHBvdGVudGlhbC1mcmllbmQtJHt1c2VyLmlkfWBcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgcG90ZW50aWFsRnJpZW5kQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICBjb250ZW50OiBcIkFkZCBGcmllbmRcIixcbiAgICAgICAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgICAgICAgIGlkOiBgYWRkLWZyaWVuZC1idXR0b24tJHt1c2VyLmlkfWAsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIGNvbnN0IGZvckFkZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBhZGQtZnJpZW5kLWJ1dHRvbi0ke3VzZXIuaWR9YCk7XG4gICAgICAgICAgICBmb3JBZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgZnJpZW5kc0V2ZW50c0xpc3RlbmVyLmZyaWVuZHNBZGRGcmllbmQoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgLy8gY29uc29sZS5sb2cobm90QUZyaWVuZClcbiAgICB9LFxuICAgIGZyaWVuZFNvcnRGcm9tTWVzc2FnZXNTZWN0aW9uIChhcnJheU9mRnJpZW5kcywgZnJpZW5kVG9BZGQsIGZyaWVuZFRvQWRkTmFtZSkge1xuICAgICAgbGV0IHVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xuICAgICAgbGV0IGN1cnJlbnRVc2VyID0gTnVtYmVyKHVzZXJJZCk7XG4gICAgICBhcnJheU9mRnJpZW5kcy5wdXNoKGN1cnJlbnRVc2VyKVxuICAgICAgbGV0IGFycmF5T2ZVc2VycyA9IFtdXG4gICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICAgIFwiZGF0YVNldFwiIDogXCJ1c2Vyc1wiLFxuICAgICAgICBcImZldGNoVHlwZVwiIDogXCJHRVRcIixcbiAgICAgICAgXCJkYXRhQmFzZU9iamVjdFwiIDogXCJcIixcbiAgICAgICAgXCJlbWJlZEl0ZW1cIiA6IFwiP19lbWJlZD1ldmVudHNcIn0pXG4gICAgICAgIC50aGVuKHVzZXJzID0+IHtcbiAgICAgICAgICB1c2Vycy5mb3JFYWNoKHVzZXIgPT4ge1xuICAgICAgICAgICAgYXJyYXlPZlVzZXJzLnB1c2godXNlci5pZClcbiAgICAgICAgICB9KVxuICAgICAgICAgIGxldCBub3RGcmllbmRzTGlzdCA9IHRoaXMuY29tcGFyZU1lc3NhZ2VGcmllbmRBcnJheXMoYXJyYXlPZlVzZXJzLCBhcnJheU9mRnJpZW5kcylcbiAgICAgICAgICB0aGlzLm1lc3NlbmdlckFkZGZyaWVuZEZpbmFsZShub3RGcmllbmRzTGlzdCwgZnJpZW5kVG9BZGQsIGZyaWVuZFRvQWRkTmFtZSlcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIGNvbXBhcmVNZXNzYWdlRnJpZW5kQXJyYXlzIChhcnJheTEsIGFycmF5Mikge1xuICAgICAgdmFyIHRlbXAgPSBbXTtcbiAgICAgIGFycmF5MSA9IGFycmF5MS50b1N0cmluZygpLnNwbGl0KCcsJykubWFwKE51bWJlcik7XG4gICAgICBhcnJheTIgPSBhcnJheTIudG9TdHJpbmcoKS5zcGxpdCgnLCcpLm1hcChOdW1iZXIpO1xuXG4gICAgICBmb3IgKHZhciBpIGluIGFycmF5MSkge1xuICAgICAgaWYoYXJyYXkyLmluZGV4T2YoYXJyYXkxW2ldKSA9PT0gLTEpIHRlbXAucHVzaChhcnJheTFbaV0pO1xuICAgICAgfVxuICAgICAgZm9yKGkgaW4gYXJyYXkyKSB7XG4gICAgICBpZihhcnJheTEuaW5kZXhPZihhcnJheTJbaV0pID09PSAtMSkgdGVtcC5wdXNoKGFycmF5MltpXSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGVtcC5zb3J0KChhLGIpID0+IGEtYik7XG4gICAgfSxcbiAgICBtZXNzZW5nZXJBZGRmcmllbmRGaW5hbGUgKG5vdGZyaWVuZHMsIHdhbnRlZEZyaWVuZCwgZnJpZW5kVG9BZGROYW1lKSB7XG4gICAgICBjb25zb2xlLmxvZyhub3RmcmllbmRzLCBOdW1iZXIod2FudGVkRnJpZW5kKSlcbiAgICAgIGNvbnN0IGZpbmFsRnJpZW5kID0gbm90ZnJpZW5kcy5maWx0ZXIoZnJpZW5kc1RoYXRBcmVudCA9PiBmcmllbmRzVGhhdEFyZW50ID09PSBOdW1iZXIod2FudGVkRnJpZW5kKSlcbiAgICAgIC8vIGNvbnNvbGUubG9nKGZpbmFsRnJpZW5kWzBdLCBOdW1iZXIod2FudGVkRnJpZW5kKSlcbiAgICAgIGlmIChmaW5hbEZyaWVuZFswXSA9PT0gTnVtYmVyKHdhbnRlZEZyaWVuZCkpIHtcbiAgICAgICAgaWYgKGZyaWVuZFRvQWRkTmFtZSA9PT0gXCJtb2RhbFwiKSB7XG4gICAgICAgICAgZnJpZW5kc0V2ZW50c0xpc3RlbmVyLnNlYXJjaEJhckFkZEZyaWVuZFRvSnNvbihmaW5hbEZyaWVuZClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLm1vZGFsUXVlc3Rpb25haXJlT2ZGcmllbmRzaGlwVmFsaWRpdHkod2FudGVkRnJpZW5kLGZyaWVuZFRvQWRkTmFtZSlcbiAgICAgICAgfS8vIGFsZXJ0KGBZb3UndmUgYWRkZWQgYSBmZWxsb3cgTm9tYWQgJHtmcmllbmRUb0FkZE5hbWV9IHlvdXIgZnJpZW5kIGxpc3RgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoXCJVaC4uLi4gWW91IGNhbid0IGZyaWVuZCB0aGVyZSAoaXQncyB5b3Ugb3Igc29tZW9uZSB3aG8ncyBhbHJlYWR5IGEgZnJpZW5kKS5cIilcbiAgICAgIH1cbiAgICB9LFxuICAgIG1vZGFsUXVlc3Rpb25haXJlT2ZGcmllbmRzaGlwVmFsaWRpdHkgKHdhbnRlZEZyaWVuZCwgZnJpZW5kVG9BZGROYW1lKSB7XG5cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3V0cHV0XCIpLmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgIGVsZW1lbnRUeXBlOiBcInNlY3Rpb25cIixcbiAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgIGlkOiBcIm1vZGFsLWNvbnRhaW5lclwiXG4gICAgICAgIH1cbiAgICAgIH0pKVxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC1jb250YWluZXJcIikuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgZWxlbWVudFR5cGU6IFwiZGl2XCIsXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICBpZDogXCJmcmllbmRzX19iYWNrZHJvcFwiXG4gICAgICAgIH1cbiAgICAgIH0pKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtY29udGFpbmVyXCIpLmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImRpdlwiLFxuICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgaWQ6IFwiZnJpZW5kc19fbW9kYWxcIlxuICAgICAgICB9XG4gICAgICB9KSlcbiAgICAgIGNvbnN0IG1vZGFsUGFyZW50VGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmcmllbmRzX19tb2RhbFwiKTtcbiAgICAgIG1vZGFsUGFyZW50VGFyZ2V0LmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImgxXCIsXG4gICAgICAgIGNvbnRlbnQ6IGBZb3Ugc3VyZSB5b3Ugd2FudCAke2ZyaWVuZFRvQWRkTmFtZX0gYXMgYSBmcmllbmQ/YCxcbiAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgIGlkOiBcImZyaWVuZHNfX2NvbnRlbnRcIlxuICAgICAgICB9XG4gICAgICB9KSlcbiAgICAgIG1vZGFsUGFyZW50VGFyZ2V0LmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgIGVsZW1lbnRUeXBlOiBcInBcIixcbiAgICAgICAgY29udGVudDogXCJJIG1lYW4gcmVhbGx5Li4uLlwiLFxuICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgaHJlZjogXCIjXCIsXG4gICAgICAgICAgaWQ6IFwiZnJpZW5kc19fY2xvc2VcIlxuICAgICAgICB9XG4gICAgICB9KSlcbiAgICAgIG1vZGFsUGFyZW50VGFyZ2V0LmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImJ1dHRvblwiLFxuICAgICAgICBjb250ZW50OiBcIkRvbid0IEZyaWVuZFwiLFxuICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgaWQ6IFwiZG9udEZyaWVuZFwiLFxuICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCJcbiAgICAgICAgfVxuICAgICAgfSkpXG4gICAgICBtb2RhbFBhcmVudFRhcmdldC5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICBlbGVtZW50VHlwZTogXCJidXR0b25cIixcbiAgICAgICAgY29udGVudDogYFllcywgbWFrZSAke2ZyaWVuZFRvQWRkTmFtZX0gYSBGcmllbmRgLFxuICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgaWQ6IFwiZnJpZW5kSXRVcFwiLFxuICAgICAgICAgIG5hbWU6IHdhbnRlZEZyaWVuZCxcbiAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiXG4gICAgICAgIH1cbiAgICAgIH0pKVxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkb250RnJpZW5kXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7ZnJpZW5kc0V2ZW50c0xpc3RlbmVyLmNsb3NlTWVzc2FnZU1vZGFsKClcbiAgICAgIH0pXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZyaWVuZEl0VXBcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZnJpZW5kc0V2ZW50c0xpc3RlbmVyLmNsb3NlTWVzc2FnZU1vZGFsKClcbiAgICAgIH0pXG4gICAgICB0aGlzLm9wZW5GcmllbmRNb2RhbCgpXG4gICAgfSxcbiAgICBvcGVuRnJpZW5kTW9kYWwgKCkge1xuICAgICAgbGV0IGJhY2tkcm9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmcmllbmRzX19iYWNrZHJvcFwiKTtcbiAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnJpZW5kc19fbW9kYWxcIik7XG4gICAgICBiYWNrZHJvcC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9LFxuICAgIGJ1aWxkRnJpZW5kU2VhcmNoQmFyICgpIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3V0cHV0XCIpLmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImRpdlwiLFxuICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgaWQ6IFwiZnJpZW5kLXNlYXJjaC1ib3hcIlxuICAgICAgICB9XG4gICAgICB9KSlcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnJpZW5kLXNlYXJjaC1ib3hcIikuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgZWxlbWVudFR5cGU6IFwiaW5wdXRcIixcbiAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgIGlkOiBcImZyaWVuZC1zZWFyY2gtaW5wdXRcIixcbiAgICAgICAgICBjbGFzczogXCJzZWFyY2gtdHh0XCIsXG4gICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgICBwbGFjZWhvbGRlcjogXCJTZWFyY2ggRm9yIEZyaWVuZHNcIlxuICAgICAgICB9XG4gICAgICB9KSlcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnJpZW5kLXNlYXJjaC1ib3hcIikuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgZWxlbWVudFR5cGU6IFwiYVwiLFxuICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgY2xhc3M6IFwiZnJpZW5kLXNlYXJjaC1idG5cIixcbiAgICAgICAgICBocmVmOiBcIiNcIixcbiAgICAgICAgICBpZDogXCJmcmllbmQtaWNvbi1hbmNob3JcIlxuICAgICAgICB9XG4gICAgICB9KSlcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnJpZW5kLWljb24tYW5jaG9yXCIpLmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImlcIixcbiAgICAgICAgY3NzQ2xhc3M6IFwiZmFzXCJcbiAgICAgIH0pKVxuICAgICAgbGV0IHNlYXJjaEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhc1wiKTtcbiAgICAgIHNlYXJjaEljb24uY2xhc3NMaXN0LmFkZChcImZhLXNlYXJjaFwiKTtcblxuICAgICAgY29uc3QgdXNlcnNTZWFyY2hGcmllbmRJbnB1dEVudGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmcmllbmQtc2VhcmNoLWlucHV0XCIpO1xuICAgICAgdXNlcnNTZWFyY2hGcmllbmRJbnB1dEVudGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCBrZXlQcmVzc0V2ZW50ID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZXZlbnQua2V5KVxuICAgICAgICBpZiAoa2V5UHJlc3NFdmVudC5jaGFyQ29kZSA9PT0gMTMpIHtcbiAgICAgICAgICBsZXQgdXNlcklucHV0RW50ZXIgPSBrZXlQcmVzc0V2ZW50LnRhcmdldC52YWx1ZTtcblxuICAgICAgICAgIGZyaWVuZHNFdmVudHNMaXN0ZW5lci5zZWFyY2hJbnB1dE1hZ2ljKHVzZXJJbnB1dEVudGVyKTtcbiAgICAgICAgICB1c2Vyc1NlYXJjaEZyaWVuZElucHV0RW50ZXIudmFsdWUgPSBcIlwiO1xuXG4gICAgICAgIH1cbiAgICAgIH0pXG5cblxuICAgICAgY29uc3QgdXNlcnNTZWFyY2hGcmllbmRJbnB1dENsaWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmcmllbmQtaWNvbi1hbmNob3JcIik7XG4gICAgICB1c2Vyc1NlYXJjaEZyaWVuZElucHV0Q2xpY2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgbGV0IHVzZXJJbnB1dENsaWNrID0gdXNlcnNTZWFyY2hGcmllbmRJbnB1dEVudGVyLnZhbHVlXG4gICAgICAgIGZyaWVuZHNFdmVudHNMaXN0ZW5lci5zZWFyY2hJbnB1dE1hZ2ljKHVzZXJJbnB1dENsaWNrKTtcbiAgICAgICAgdXNlcnNTZWFyY2hGcmllbmRJbnB1dEVudGVyLnZhbHVlID0gXCJcIjtcblxuICAgICAgfSlcbiAgICB9LFxuICAgIHNlYXJjaFJlc3VsdERpc3BsYXllZCAoZnJpZW5kU2VhcmNoUmVzdWx0RGlzcGxheWVkKSB7XG4gICAgICBjb25zb2xlLmxvZyhcInlvXCIpXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm91dHB1dFwiKS5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICBlbGVtZW50VHlwZTogXCJzZWN0aW9uXCIsXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICBpZDogXCJtb2RhbC1jb250YWluZXJcIlxuICAgICAgICB9XG4gICAgICB9KSlcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtY29udGFpbmVyXCIpLmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImRpdlwiLFxuICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgaWQ6IFwiZnJpZW5kc19fYmFja2Ryb3BcIlxuICAgICAgICB9XG4gICAgICB9KSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsLWNvbnRhaW5lclwiKS5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICBlbGVtZW50VHlwZTogXCJkaXZcIixcbiAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgIGlkOiBcImZyaWVuZHNfX21vZGFsXCJcbiAgICAgICAgfVxuICAgICAgfSkpXG4gICAgICBjb25zdCBtb2RhbFBhcmVudFRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnJpZW5kc19fbW9kYWxcIik7XG4gICAgICBtb2RhbFBhcmVudFRhcmdldC5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICBlbGVtZW50VHlwZTogXCJoMVwiLFxuICAgICAgICBjb250ZW50OiBgV291bGQgeW91IGxpa2UgdG8gYmUgZnJpZW5kcyB3aXRoICR7ZnJpZW5kU2VhcmNoUmVzdWx0RGlzcGxheWVkLnVzZXJOYW1lfT9gLFxuICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgaWQ6IFwiZnJpZW5kc19fY29udGVudFwiXG4gICAgICAgIH1cbiAgICAgIH0pKVxuICAgICAgbW9kYWxQYXJlbnRUYXJnZXQuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgZWxlbWVudFR5cGU6IFwicFwiLFxuICAgICAgICBjb250ZW50OiBgSSBtZWFuICR7ZnJpZW5kU2VhcmNoUmVzdWx0RGlzcGxheWVkLnVzZXJOYW1lfSBpcyBwcmV0dHkgY29vbC4uLmAsXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICBocmVmOiBcIiNcIixcbiAgICAgICAgICBpZDogXCJmcmllbmRzX19jbG9zZVwiXG4gICAgICAgIH1cbiAgICAgIH0pKVxuICAgICAgbW9kYWxQYXJlbnRUYXJnZXQuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgZWxlbWVudFR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgIGNvbnRlbnQ6IFwiRG9uJ3QgRnJpZW5kXCIsXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICBpZDogXCJkb250RnJpZW5kXCIsXG4gICAgICAgICAgdHlwZTogXCJidXR0b25cIlxuICAgICAgICB9XG4gICAgICB9KSlcbiAgICAgIG1vZGFsUGFyZW50VGFyZ2V0LmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImJ1dHRvblwiLFxuICAgICAgICBjb250ZW50OiBgWWVzLCBtYWtlICR7ZnJpZW5kU2VhcmNoUmVzdWx0RGlzcGxheWVkLnVzZXJOYW1lfSBhIEZyaWVuZGAsXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICBpZDogXCJmcmllbmRJdFVwLXNlYXJjaE1vZGFsXCIsXG4gICAgICAgICAgdHlwZTogXCJidXR0b25cIlxuICAgICAgICB9XG4gICAgICB9KSlcblxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkb250RnJpZW5kXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7ZnJpZW5kc0V2ZW50c0xpc3RlbmVyLmNsb3NlTWVzc2FnZU1vZGFsKClcbiAgICAgIH0pXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZyaWVuZEl0VXAtc2VhcmNoTW9kYWxcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZnJpZW5kc0V2ZW50c0xpc3RlbmVyLnNlYXJjaEJhckZyaWVuZGluZyhmcmllbmRTZWFyY2hSZXN1bHREaXNwbGF5ZWQuaWQpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLm9wZW5GcmllbmRNb2RhbCgpXG4gICAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZyaWVuZHNcblxuLy8gY29uc3QgdGVzdGVyID0gW1xuLy8gICB7XG4vLyAgICAgZWxlbWVudFR5cGU6IFwiaDJcIixcbi8vICAgICBjb250ZW50OiBcImpha2UgYmFubm9uXCJcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGVsZW1lbnRUeXBlOiBcInBcIixcbi8vICAgICBjb250ZW50OiBcIlBvb2wgUGFydHkgM3BtXCJcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGVsZW1lbnRUeXBlOiBcInBcIixcbi8vICAgICBjb250ZW50OiBcImNoZWNrIG91dCB0aGlzIG5ld3MgYXJ0aWNsZVwiXG4vLyAgIH1cbi8vIF0iLCJpbXBvcnQgZnJpZW5kcyBmcm9tIFwiLi9mcmllbmRzXCJcbmltcG9ydCBtZXNzYWdlcyBmcm9tIFwiLi9tZXNzYWdlc1wiXG5pbXBvcnQgbm9tYWREYXRhIGZyb20gXCIuL25vbWFkRGF0YVwiO1xuXG5jb25zdCBmcmllbmRzRXZlbnRzTGlzdGVuZXIgPSB7XG4gIGZyaWVuZHNEZWxldGVGcmllbmQgKCkge1xuICAgIGNvbnN0IGZyaWVuZFRvRGVsZXRlID0gKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QudmFsdWUpLnNwbGl0KFwiLVwiKVsyXTtcbiAgICBsZXQgdXNlcklkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKTtcbiAgICBsZXQgY3VycmVudFVzZXIgPSB1c2VySWQ7XG4gICAgY29uc29sZS5sb2coZnJpZW5kVG9EZWxldGUsIGN1cnJlbnRVc2VyKTtcbiAgICBsZXQgZmluYWxOdW1iZXJTZW5kRm9yRGVsZXRlID0gMFxuXG4gICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xuICAgICAgXCJkYXRhU2V0XCIgOiBcImZyaWVuZHNcIixcbiAgICAgIFwiZmV0Y2hUeXBlXCIgOiBcIkdFVFwiLFxuICAgICAgXCJkYXRhQmFzZU9iamVjdFwiIDogXCJcIixcbiAgICAgIFwiZW1iZWRJdGVtXCIgOiBcIj9fZW1iZWQ9ZnJpZW5kc1wiXG4gICAgfSlcbiAgICAudGhlbihkZXN0cm95RnJpZW5kc0hlYXJ0ID0+IHtcbiAgICAgIGRlc3Ryb3lGcmllbmRzSGVhcnQuZm9yRWFjaChnb29kYnllRnJpZW5kID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZ29vZGJ5ZUZyaWVuZC51c2VySWQsIE51bWJlcihjdXJyZW50VXNlcikpXG4gICAgICAgIGlmIChnb29kYnllRnJpZW5kLm90aGVyRnJpZW5kSWQgPT09IE51bWJlcihmcmllbmRUb0RlbGV0ZSkgJiYgZ29vZGJ5ZUZyaWVuZC51c2VySWQgPT09IE51bWJlcihjdXJyZW50VXNlcikpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGVhY2VPdXRcIixnb29kYnllRnJpZW5kLmlkKTtcbiAgICAgICAgICAgIGZpbmFsTnVtYmVyU2VuZEZvckRlbGV0ZSA9IGdvb2RieWVGcmllbmQuaWQ7XG5cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIGxldCBnb29kQnllU2VhcmNoUmVzdWx0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBmcmllbmQtJHtmcmllbmRUb0RlbGV0ZX1gKTtcbiAgICAgIGdvb2RCeWVTZWFyY2hSZXN1bHRzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZ29vZEJ5ZVNlYXJjaFJlc3VsdHMpO1xuXG4gICAgICBjb25zb2xlLmxvZyhmaW5hbE51bWJlclNlbmRGb3JEZWxldGUpXG4gICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICAgIFwiZGVsZXRlSWRcIiA6IGZpbmFsTnVtYmVyU2VuZEZvckRlbGV0ZSxcbiAgICAgICAgXCJkYXRhU2V0XCIgOiBcImZyaWVuZHNcIixcbiAgICAgICAgXCJmZXRjaFR5cGVcIiA6IFwiREVMRVRFXCIsXG4gICAgICAgIFwiZGF0YUJhc2VPYmplY3RcIiA6IHtcbiAgICAgICAgICBcInVzZXJJZFwiOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfSxcbiAgZnJpZW5kc0FkZEZyaWVuZCAoKSB7XG4gICAgbGV0IHVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIik7XG4gICAgbGV0IGN1cnJlbnRVc2VyID0gTnVtYmVyKHVzZXJJZCk7XG5cblxuICAgIGNvbnN0IGZyaWVuZFRvQmVBZGRlZCA9IChldmVudC50YXJnZXQuaWQpLnNwbGl0KFwiLVwiKVszXTtcbiAgICBjb25zb2xlLmxvZyhgdXNlciR7Y3VycmVudFVzZXJ9YCxgQWRkaW5nIEZyaWVuZCR7ZnJpZW5kVG9CZUFkZGVkfWApXG5cbiAgICBsZXQgZ29vZEJ5ZU5vbkZyaWVuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwb3RlbnRpYWxGcmllbmQtJHtmcmllbmRUb0JlQWRkZWR9YCk7XG4gICAgZ29vZEJ5ZU5vbkZyaWVuZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGdvb2RCeWVOb25GcmllbmQpO1xuICAgIGFsZXJ0KGAke2V2ZW50LnRhcmdldC5wcmV2aW91c1NpYmxpbmcuaW5uZXJUZXh0fSBpcyBub3cgeW91ciBmcmllbmQhYCk7XG5cbiAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICBcImRhdGFTZXRcIiA6IFwiZnJpZW5kc1wiLFxuICAgICAgXCJmZXRjaFR5cGVcIiA6IFwiUE9TVFwiLFxuICAgICAgXCJkYXRhQmFzZU9iamVjdFwiIDoge1xuICAgICAgICBcInVzZXJJZFwiOiBjdXJyZW50VXNlcixcbiAgICAgICAgXCJvdGhlckZyaWVuZElkXCI6IE51bWJlcihmcmllbmRUb0JlQWRkZWQpLFxuICAgICAgfVxuICAgIH0pXG4gIH0sXG4gIHNoaXogKCkge1xuICAgIGNvbnN0IGZyaWVuZFRvQmVBZGRlZCA9IGV2ZW50LnRhcmdldC5hdHRyaWJ1dGVzLm5hbWUudmFsdWU7XG4gICAgY29uc3QgZnJpZW5kVG9CZUFkZGVkSGFzQU5hbWUgPSBldmVudC50YXJnZXQudGV4dENvbnRlbnQuc3BsaXQoXCI6XCIpWzBdXG4gICAgbGV0IGZyaWVuZHNJSGF2ZSA9IFtdXG4gICAgbGV0IHVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xuICAgIGxldCBjdXJyZW50VXNlciA9IE51bWJlcih1c2VySWQpO1xuICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcbiAgICAgIFwiZGF0YVNldFwiIDogXCJmcmllbmRzXCIsXG4gICAgICBcImZldGNoVHlwZVwiIDogXCJHRVRcIixcbiAgICAgIFwiZGF0YUJhc2VPYmplY3RcIiA6IFwiXCIsXG4gICAgICBcImVtYmVkSXRlbVwiIDogXCI/X2VtYmVkPWZyaWVuZHNcIlxuICAgIH0pXG4gICAgLnRoZW4oZnJvbUZyaWVuZHMgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coZnJvbUZyaWVuZHMpXG4gICAgICBmcm9tRnJpZW5kcy5mb3JFYWNoKGZyaWVuZERhdGEgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhmcmllbmREYXRhKVxuICAgICAgICBpZiAoZnJpZW5kRGF0YS51c2VySWQgPT09IGN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgZnJpZW5kc0lIYXZlLnB1c2goZnJpZW5kRGF0YS5vdGhlckZyaWVuZElkKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLy8gY29uc29sZS5sb2coZnJpZW5kc0lIYXZlKVxuICAgICAgZnJpZW5kcy5mcmllbmRTb3J0RnJvbU1lc3NhZ2VzU2VjdGlvbihmcmllbmRzSUhhdmUsIGZyaWVuZFRvQmVBZGRlZCwgZnJpZW5kVG9CZUFkZGVkSGFzQU5hbWUpXG4gICAgfSlcbiAgfSxcbiAgY2xvc2VNZXNzYWdlTW9kYWwoKSB7XG4gICAgbGV0IHVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xuICAgIGxldCBjdXJyZW50VXNlciA9IE51bWJlcih1c2VySWQpO1xuXG4gICAgaWYgKGV2ZW50LnRhcmdldC5pZCA9PT0gXCJkb250RnJpZW5kXCIpIHtcbiAgICAgIGxldCBnb29kQnllU2VhcmNoUmVzdWx0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtY29udGFpbmVyXCIpO1xuICAgICAgZ29vZEJ5ZVNlYXJjaFJlc3VsdHMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChnb29kQnllU2VhcmNoUmVzdWx0cyk7XG4gICAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuaWQgPT09IFwiZnJpZW5kSXRVcFwiKSB7XG4gICAgICBsZXQgZ29vZEJ5ZVNlYXJjaFJlc3VsdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsLWNvbnRhaW5lclwiKTtcbiAgICAgIGdvb2RCeWVTZWFyY2hSZXN1bHRzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZ29vZEJ5ZVNlYXJjaFJlc3VsdHMpO1xuICAgICAgbGV0IGZyaWVuZFRvYmUgPSBldmVudC50YXJnZXQuYXR0cmlidXRlcy5uYW1lLnZhbHVlO1xuICAgICAgY29uc29sZS5sb2coZnJpZW5kVG9iZSlcbiAgICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xuICAgICAgICAgIFwiZGF0YVNldFwiIDogXCJmcmllbmRzXCIsXG4gICAgICAgICAgXCJmZXRjaFR5cGVcIiA6IFwiUE9TVFwiLFxuICAgICAgICAgIFwiZGF0YUJhc2VPYmplY3RcIiA6IHtcbiAgICAgICAgICAgIFwidXNlcklkXCI6IGN1cnJlbnRVc2VyLFxuICAgICAgICAgICAgXCJvdGhlckZyaWVuZElkXCI6IE51bWJlcihmcmllbmRUb2JlKSxcbiAgICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgfVxuICB9LFxuICBzZWFyY2hJbnB1dE1hZ2ljICh1c2VySW5wdXQpIHtcbiAgICBsZXQgdXNlcklkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyk7XG4gICAgbGV0IGN1cnJlbnRVc2VyID0gTnVtYmVyKHVzZXJJZCk7XG4gICAgLy8gY29uc29sZS5sb2codXNlcklucHV0KVxuICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcbiAgICAgIFwiZGF0YVNldFwiIDogXCJ1c2Vyc1wiLFxuICAgICAgXCJmZXRjaFR5cGVcIiA6IFwiR0VUXCIsXG4gICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiBcIlwiLFxuICAgICAgXCJlbWJlZEl0ZW1cIiA6IFwiP19lbWJlZD11c2Vyc1wiXG4gICAgfSlcbiAgICAudGhlbih1c2VycyA9PiB7XG4gICAgICBjb25zdCBmb3VuZFVzZXJzID0gdXNlcnMuZmluZCh1c2VyID0+IHVzZXIudXNlck5hbWUuaW5jbHVkZXModXNlcklucHV0KSk7XG4gICAgICBjb25zb2xlLmxvZyhmb3VuZFVzZXJzLmlkLCBjdXJyZW50VXNlcilcbiAgICAgIGlmIChmb3VuZFVzZXJzLmlkID09PSBjdXJyZW50VXNlcikge1xuICAgICAgICBhbGVydChcIkNhbid0IGZyaWVuZCB5b3Vyc2VsZlwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZyaWVuZHMuc2VhcmNoUmVzdWx0RGlzcGxheWVkKGZvdW5kVXNlcnMpO1xuICAgICAgfVxuICAgIH0pXG4gIH0sXG4gIHNlYXJjaEJhckZyaWVuZGluZyAoZnJpZW5kVG9CZUZyb21TZWFyY2hJZCkge1xuICAgIGNvbnN0IGRlZmluZWRBc0Zyb21TZWFyY2hNb2RhbCA9IFwibW9kYWxcIlxuICAgIGxldCBmcmllbmRzSUhhdmUgPSBbXVxuICAgIGxldCB1c2VySWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKTtcbiAgICBsZXQgY3VycmVudFVzZXIgPSBOdW1iZXIodXNlcklkKTtcbiAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICBcImRhdGFTZXRcIiA6IFwiZnJpZW5kc1wiLFxuICAgICAgXCJmZXRjaFR5cGVcIiA6IFwiR0VUXCIsXG4gICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiBcIlwiLFxuICAgICAgXCJlbWJlZEl0ZW1cIiA6IFwiP19lbWJlZD1mcmllbmRzXCJcbiAgICB9KVxuICAgIC50aGVuKGZyb21GcmllbmRzID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGZyb21GcmllbmRzKVxuICAgICAgZnJvbUZyaWVuZHMuZm9yRWFjaChmcmllbmREYXRhID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZnJpZW5kRGF0YSlcbiAgICAgICAgaWYgKGZyaWVuZERhdGEudXNlcklkID09PSBjdXJyZW50VXNlcikge1xuICAgICAgICAgIGZyaWVuZHNJSGF2ZS5wdXNoKGZyaWVuZERhdGEub3RoZXJGcmllbmRJZClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC8vIGNvbnNvbGUubG9nKGZyaWVuZHNJSGF2ZSlcbiAgICAgIGZyaWVuZHMuZnJpZW5kU29ydEZyb21NZXNzYWdlc1NlY3Rpb24oZnJpZW5kc0lIYXZlLCBmcmllbmRUb0JlRnJvbVNlYXJjaElkLCBkZWZpbmVkQXNGcm9tU2VhcmNoTW9kYWwpXG4gICAgfSlcbiAgfSxcbiAgc2VhcmNoQmFyQWRkRnJpZW5kVG9Kc29uIChmcmllbmRUb0JlKSB7XG4gICAgbGV0IHVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xuICAgIGxldCBjdXJyZW50VXNlciA9IE51bWJlcih1c2VySWQpO1xuXG4gICAgbGV0IGdvb2RCeWVTZWFyY2hSZXN1bHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC1jb250YWluZXJcIik7XG4gICAgZ29vZEJ5ZVNlYXJjaFJlc3VsdHMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChnb29kQnllU2VhcmNoUmVzdWx0cyk7XG5cbiAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICBcImRhdGFTZXRcIiA6IFwiZnJpZW5kc1wiLFxuICAgICAgXCJmZXRjaFR5cGVcIiA6IFwiUE9TVFwiLFxuICAgICAgXCJkYXRhQmFzZU9iamVjdFwiIDoge1xuICAgICAgICBcInVzZXJJZFwiOiBjdXJyZW50VXNlcixcbiAgICAgICAgXCJvdGhlckZyaWVuZElkXCI6IE51bWJlcihmcmllbmRUb0JlKSxcbiAgICAgIH1cbiAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmcmllbmRzRXZlbnRzTGlzdGVuZXIiLCJpbXBvcnQgbm9tYWREYXRhIGZyb20gXCIuL25vbWFkRGF0YVwiO1xuaW1wb3J0IGRvbUNvbXBvbmVudHMgZnJvbSBcIi4vZG9tQ29tcG9uZW50c1wiO1xuaW1wb3J0IG1lc3NhZ2VzRXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vbWVzc2FnZXNFdmVudExpc3RlbmVyc1wiO1xuaW1wb3J0IGZyaWVuZHNFdmVudHNMaXN0ZW5lciBmcm9tIFwiLi9mcmllbmRzRXZlbnRzTGlzdGVuZXIuanNcIjtcblxuY29uc3QgbWVzc2FnZXMgPSB7XG5cbiAgICBjcmVhdGVNZXNzYWdlQm9hcmQoKSB7XG4gICAgICAgICQoXCIjb3V0cHV0XCIpLmVtcHR5KClcblxuICAgICAgICBsZXQgb3V0cHV0QXJ0aWNsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3V0cHV0XCIpXG5cbiAgICAgICAgLy9jcmVhdGUgZGlzcGxheSBjb250YWluZXJcbiAgICAgICAgbGV0IG1lc3NhZ2VzQ29udGFpbmVyID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJzZWN0aW9uXCIsXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwibWVzc2FnZXNDb250YWluZXJcIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgaWQgOiBcIm1lc3NhZ2VzQ29udGFpbmVyXCJcbiAgICAgICAgICAgIH19KTtcblxuICAgICAgICAvL2NyZWF0ZSBtZXNzYWdlIGlucHV0IGZpZWxkXG4gICAgICAgIGxldCBtZXNzYWdlSW5wdXQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImlucHV0XCIsXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwibWVzc2FnZUlucHV0XCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgIGlkIDogXCJtZXNzYWdlSW5wdXRcIixcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJFbnRlciBNZXNzYWdlIEhlcmVcIlxuICAgICAgICAgICAgfX0pO1xuXG4gICAgICAgIC8vY3JlYXRlIHN1Ym1pdCBidXR0b24gZm9yIGlucHV0IGZpZWxkXG4gICAgICAgIGxldCBtZXNzYWdlU3VibWl0QnV0dG9uID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJidXR0b25cIixcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJtZXNzYWdlU3VibWl0QnV0dG9uXCIsXG4gICAgICAgICAgICBjb250ZW50IDogXCJTdWJtaXRcIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgaWQgOiBcIm1lc3NhZ2VTdWJtaXRCdXR0b25cIixcbiAgICAgICAgICAgICAgICB0eXBlIDogXCJidXR0b25cIlxuICAgICAgICAgICAgfX0pO1xuXG4gICAgICAgIG1lc3NhZ2VTdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1lc3NhZ2VzRXZlbnRMaXN0ZW5lcnMucG9zdE5ld01lc3NhZ2UsIHtvbmNlOiB0cnVlfSk7XG4gICAgICAgIG1lc3NhZ2VzQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VJbnB1dCk7XG4gICAgICAgIG1lc3NhZ2VzQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VTdWJtaXRCdXR0b24pO1xuICAgICAgICBvdXRwdXRBcnRpY2xlLmFwcGVuZENoaWxkKG1lc3NhZ2VzQ29udGFpbmVyKTtcblxuICAgICAgICAgICAgdGhpcy5nZXRNZXNzYWdlcygpXG4gICAgfSxcblxuICAgIGdldE1lc3NhZ2VzKCkge1xuXG4gICAgICAgIC8vR0VUIGZldGNoICYgLnRoZW4gdG8gYnVpbGQgb2JqZWN0KHMpIGZvciBjcmVhdGVEb21FbGVtZW50KCkgdXNpbmcgX2V4cGFuZCB0byBkaXNwbGF5IFVOOiBtZXNzYWdlXG4gICAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcblxuICAgICAgICAgICAgICAgIGRhdGFTZXQgOiBcIm1lc3NhZ2VzXCIsXG4gICAgICAgICAgICAgICAgZmV0Y2hUeXBlIDogXCJHRVRcIixcbiAgICAgICAgICAgICAgICBlbWJlZEl0ZW0gOiBcIj9fZXhwYW5kPXVzZXJcIlxuXG4gICAgICAgIH0pLnRoZW4obWVzc2FnZXMgPT4ge1xuXG4gICAgICAgICAgICBsZXQgbWVzc2FnZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVzc2FnZXNDb250YWluZXJcIik7XG4gICAgICAgICAgICBsZXQgbWVzc2FnZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZXNzYWdlSW5wdXRcIik7XG5cbiAgICAgICAgICAgIC8vc29ydCBtZXNzYWdlcyBieSB0aW1lU3RhbXBcbiAgICAgICAgICAgIG1lc3NhZ2VzLnNvcnQoZnVuY3Rpb24oYSxiKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoYS50aW1lU3RhbXApIC0gbmV3IERhdGUoYi50aW1lU3RhbXApO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vYnVpbGQgRE9NIENvbXBvbmVudCBmb3IgZWFjaCBtZXNzYWdlIGFuZCBhcHBlbmRcbiAgICAgICAgICAgIG1lc3NhZ2VzLmZvckVhY2gobWVzc2FnZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSlcbiAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZVRleHQgPSBtZXNzYWdlLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgbGV0IHVzZXJOYW1lID0gbWVzc2FnZS51c2VyLnVzZXJOYW1lO1xuICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlSWQgPSBtZXNzYWdlLmlkO1xuICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlVGltZVN0YW1wID0gbWVzc2FnZS50aW1lU3RhbXA7XG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2VVc2VyID0gYCR7bWVzc2FnZS51c2VySWR9YDtcbiAgICAgICAgICAgICAgICBsZXQgbG9nZ2VkSW5Vc2VyID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKTtcblxuICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlRWxlbWVudCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgIC8vIEFERCBMSU5LIEhFUkVcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImgzXCIsXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzIDogXCJtZXNzYWdlVXNlck5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCA6IGAke3VzZXJOYW1lfTpgLFxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGBtZXNzYWdlJHttZXNzYWdlSWR9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgOiBwYXJzZUludChtZXNzYWdlVXNlcilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG5cblxuICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlRWxlbWVudDIgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwicFwiLFxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcyA6IFwibWVzc2FnZVRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCA6IGAke21lc3NhZ2VUZXh0fWAsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogbWVzc2FnZUlkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlVXNlciA9PT0gbG9nZ2VkSW5Vc2VyKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2VFZGl0QnV0dG9uID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgOiBcIm1lc3NhZ2VFZGl0QnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50IDogXCJFZGl0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBgbWVzc2FnZUVkaXRCdXR0b25fJHttZXNzYWdlSWR9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBtZXNzYWdlVGltZVN0YW1wLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgOiBcImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtZXNzYWdlc0V2ZW50TGlzdGVuZXJzLmVkaXRNZXNzYWdlLCB7b25jZTogdHJ1ZX0pXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbGVtZW50LmFwcGVuZENoaWxkKG1lc3NhZ2VFbGVtZW50MilcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsZW1lbnQuYXBwZW5kQ2hpbGQobWVzc2FnZUVkaXRCdXR0b24pXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VDb250YWluZXIuaW5zZXJ0QmVmb3JlKG1lc3NhZ2VFbGVtZW50LCBtZXNzYWdlSW5wdXQpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWxlbWVudC5hcHBlbmRDaGlsZChtZXNzYWdlRWxlbWVudDIpXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VDb250YWluZXIuaW5zZXJ0QmVmb3JlKG1lc3NhZ2VFbGVtZW50LCBtZXNzYWdlSW5wdXQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1lc3NhZ2VFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmcmllbmRzRXZlbnRzTGlzdGVuZXIuc2hpeilcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lc3NhZ2VzO1xuIiwiaW1wb3J0IG5vbWFkRGF0YSBmcm9tIFwiLi9ub21hZERhdGFcIjtcbmltcG9ydCBkb21Db21wb25lbnRzIGZyb20gXCIuL2RvbUNvbXBvbmVudHNcIjtcbmltcG9ydCBtZXNzYWdlcyBmcm9tIFwiLi9tZXNzYWdlc1wiO1xuLy8gaW1wb3J0IGZyaWVuZHNFdmVudExpc3RlbmVycyBmcm9tIFwiLi9mcmllbmRzRXZlbnRMaXN0ZW5lcnMuanNcIjtcblxuY29uc3QgbWVzc2FnZXNFdmVudExpc3RlbmVycyA9IHtcblxuICAgIHBvc3ROZXdNZXNzYWdlKCkge1xuXG4gICAgICAgIGxldCBtZXNzYWdlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lc3NhZ2VJbnB1dFwiKS52YWx1ZTtcbiAgICAgICAgbGV0IHRpbWVTdGFtcCA9IG5ldyBEYXRlKCk7XG5cbiAgICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xuXG4gICAgICAgICAgICBkYXRhU2V0IDogXCJtZXNzYWdlc1wiLFxuICAgICAgICAgICAgZmV0Y2hUeXBlIDogXCJQT1NUXCIsXG4gICAgICAgICAgICBkYXRhQmFzZU9iamVjdCA6IHtcbiAgICAgICAgICAgICAgICB1c2VySWQgOiBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSksXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA6IG1lc3NhZ2VJbnB1dCwvLy52YWx1ZSxcbiAgICAgICAgICAgICAgICB0aW1lU3RhbXAgOiB0aW1lU3RhbXBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbihzaGl0ID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNoaXQpXG4gICAgICAgICAgICAkKFwiI291dHB1dFwiKS5lbXB0eSgpO1xuICAgICAgICAgICAgbWVzc2FnZXMuY3JlYXRlTWVzc2FnZUJvYXJkKCk7XG4gICAgICAgIH0pXG4gICAgfSxcblxuICAgIGVkaXRNZXNzYWdlKCkge1xuICAgICAgICBsZXQgbnVtYmVyID0gZXZlbnQuY3VycmVudFRhcmdldC5pZDtcbiAgICAgICAgbGV0IG1lc3NhZ2VBcnJheSA9IG51bWJlci5zcGxpdChcIl9cIik7XG4gICAgICAgIGxldCBtZXNzYWdlSWQgPSBtZXNzYWdlQXJyYXlbMV07XG5cbiAgICAgICAgbGV0IG1lc3NhZ2VUb0VkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHttZXNzYWdlSWR9YCk7XG4gICAgICAgIGxldCBtZXNzYWdlVGV4dCA9IG1lc3NhZ2VUb0VkaXQuaW5uZXJIVE1MO1xuICAgICAgICBsZXQgbWVzc2FnZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBtZXNzYWdlJHttZXNzYWdlSWR9YCk7XG4gICAgICAgIGxldCBtZXNzYWdlVGltZVN0YW1wID0gZXZlbnQuY3VycmVudFRhcmdldC5uYW1lO1xuXG4gICAgICAgIGxldCBtZXNzYWdlRWRpdEZvcm0gPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQgKHtcblxuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImZvcm1cIixcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJtZXNzYWdlRWRpdEZvcm1cIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgaWQgOiBcIm1lc3NhZ2VFZGl0Rm9ybVwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBtZXNzYWdlRWRpdEZpZWxkc2V0ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcblxuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImZpZWxkc2V0XCIsXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwibWVzc2FnZUVkaXRGaWVsZHNldFwiLFxuICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICBpZCA6IFwibWVzc2FnZUVkaXRGaWVsZHNldFwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBtZXNzYWdlRWRpdElucHV0ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcblxuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImlucHV0XCIsXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwibWVzc2FnZUVkaXRJbnB1dFwiLFxuICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICBpZCA6IGBtZXNzYWdlRWRpdElucHV0XyR7bWVzc2FnZUlkfWAsXG4gICAgICAgICAgICAgICAgdmFsdWUgOiBgJHttZXNzYWdlVGV4dH1gXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBtZXNzYWdlRWRpdFN1Ym1pdEJ1dHRvbiA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG5cbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJidXR0b25cIixcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJtZXNzYWdlRWRpdFN1Ym1pdEJ1dHRvblwiLFxuICAgICAgICAgICAgY29udGVudCA6IFwiU3VibWl0XCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgIGlkIDogYG1lc3NhZ2VFZGl0U3VibWl0QnV0dG9uXyR7bWVzc2FnZUlkfWAsXG4gICAgICAgICAgICAgICAgbmFtZTogbWVzc2FnZVRpbWVTdGFtcCxcbiAgICAgICAgICAgICAgICB0eXBlIDogXCJidXR0b25cIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgbWVzc2FnZUVkaXRTdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1lc3NhZ2VzRXZlbnRMaXN0ZW5lcnMuaGFuZGxlRWRpdFN1Ym1pdEJ1dHRvbilcbiAgICAgICAgbWVzc2FnZUVkaXRGaWVsZHNldC5hcHBlbmRDaGlsZChtZXNzYWdlRWRpdElucHV0KVxuICAgICAgICBtZXNzYWdlRWRpdEZpZWxkc2V0LmFwcGVuZENoaWxkKG1lc3NhZ2VFZGl0U3VibWl0QnV0dG9uKVxuICAgICAgICBtZXNzYWdlRWRpdEZvcm0uYXBwZW5kQ2hpbGQobWVzc2FnZUVkaXRGaWVsZHNldClcbiAgICAgICAgbWVzc2FnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlRWRpdEZvcm0pXG5cbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSxcblxuICAgIGhhbmRsZUVkaXRTdWJtaXRCdXR0b24oKSB7XG4gICAgICAgIGxldCBudW1iZXIgPSBldmVudC5jdXJyZW50VGFyZ2V0LmlkO1xuICAgICAgICBsZXQgbWVzc2FnZUFycmF5ID0gbnVtYmVyLnNwbGl0KFwiX1wiKTtcbiAgICAgICAgbGV0IG1lc3NhZ2VJZCA9IG1lc3NhZ2VBcnJheVsxXTtcbiAgICAgICAgbGV0IG1lc3NhZ2VUaW1lU3RhbXAgPSBgJHtldmVudC5jdXJyZW50VGFyZ2V0Lm5hbWV9YDtcbiAgICAgICAgbGV0IG1lc3NhZ2VFZGl0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbWVzc2FnZUVkaXRJbnB1dF8ke21lc3NhZ2VJZH1gKTtcblxuICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG5cbiAgICAgICAgICAgIHB1dElkIDogbWVzc2FnZUlkLFxuICAgICAgICAgICAgZGF0YVNldCA6IFwibWVzc2FnZXNcIixcbiAgICAgICAgICAgIGZldGNoVHlwZSA6IFwiUFVUXCIsXG4gICAgICAgICAgICBkYXRhQmFzZU9iamVjdCA6IHtcbiAgICAgICAgICAgICAgICB1c2VySWQgOiBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSksXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogYCR7bWVzc2FnZUVkaXRJbnB1dC52YWx1ZX1gLFxuICAgICAgICAgICAgICAgIHRpbWVTdGFtcDogYCR7bWVzc2FnZVRpbWVTdGFtcH1gXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4oc2hpdCA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzaGl0KVxuICAgICAgICAgICAgJChcIiNvdXRwdXRcIikuZW1wdHkoKTtcbiAgICAgICAgICAgIG1lc3NhZ2VzLmNyZWF0ZU1lc3NhZ2VCb2FyZCgpO1xuICAgICAgICB9KVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IG1lc3NhZ2VzRXZlbnRMaXN0ZW5lcnM7IiwiaW1wb3J0IG5vbWFkRGF0YSBmcm9tIFwiLi9ub21hZERhdGFcIjtcbmltcG9ydCBkb21Db21wb25lbnRzIGZyb20gXCIuL2RvbUNvbXBvbmVudHNcIjtcbi8vcHVsbCBmcm9tIGFwaSB0aGVuIGRpc3BsYXkgdG8gZG9tLlxuLy8gY3JlYXRlIHNhdmUgYnV0dG9uIHNlbmQgc2F2ZWQgYXJ0aWNsZXMgdG8gSnNvblxuLy8gY3JlYXRlIGJ1dHRvbiB0byBwdWxsIGFsbCBzYXZlZCBtYXRlcmlhbHMgaW4ganNvbi5cbi8vIGRlbGV0ZSBtZXRob2QgZm9yIGFydGljbGVzXG5jb25zdCBuZXdzID0ge1xuXG4gICAgZ2V0TmV3cygpe1xuICAgICAgICAvL3B1bGwgdGhlbiBzZW5kIHB1bGxlZCBkYXRhIHRvIGRvbVxuICAgICAgICByZXR1cm4gZmV0Y2goXCJodHRwOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cy8xXCIpXG4gICAgICAgICAgICAudGhlbihuZXdzSXRlbXMgPT4gbmV3c0l0ZW1zLmpzb24oKSlcbiAgICB9LFxuICAgIHNhdmUoKSB7XG4gICAgICAgIC8vVGhpcyBpcyBmdW5jdGlvbmluZyBhbmQgd3JpdGluZyB0byBKU09OLlxuICAgICAgICB0aGlzLmdldE5ld3MoKS50aGVuKHBvc3QgPT57XG4gICAgICAgIGNvbnN0IG5ld3NPYmplY3QgPSB7XG4gICAgICAgICAgICAgICAgXCJkYXRhU2V0XCIgOiBcIm5ld3NJdGVtc1wiLFxuICAgICAgICAgICAgICAgIFwiZmV0Y2hUeXBlXCIgOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidXNlcklkXCI6IDEsXG4gICAgICAgICAgICAgICAgICAgIFwidXJsXCI6IGAke3Bvc3QudGl0bGV9YCxcbiAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBgJHtwb3N0LmJvZHl9YCxcbiAgICAgICAgICAgICAgICAgICAgXCJzeW5vcHNpc1wiOiBcImJsYWggYmxhaCBibGFoXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2codGVzdG5ld3NPYmopO1xuICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YShuZXdzT2JqZWN0KTtcbiAgICB9KVxuICAgIH0sXG5cbiAgICBhbGxTYXZlZCgpe1xuICAgIC8vIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHRlc3RuZXdzT2JqKVxuICAgIH0sXG5cbiAgICBkZWxldGVEQigpe1xuXG5cbiAgICB9LFxuXG4gICAgbmV3c0VsZW1lbnRDcmVhdG9yKCl7XG4gICAgICAgICQoXCIjb3V0cHV0XCIpLmVtcHR5KClcbiAgICAgICAgY29uc3QgbmV3c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3V0cHV0XCIpXG4gICAgICAgIGxldCBuZXdzQ3JlYXRvcktleSA9IHtcbiAgICAgICAgICAgIFwiZGF0YVNldFwiIDogXCJuZXdzSXRlbXNcIixcbiAgICAgICAgICAgIFwiZmV0Y2hUeXBlXCIgOiBcIkdFVFwiLFxuICAgICAgICAgICAgXCJkYXRhQmFzZU9iamVjdFwiIDogXCJcIixcbiAgICAgICAgICAgIFwiZW1iZWRJdGVtXCIgOiBcIj9fZW1iZWQ9bmV3c0l0ZW1zXCJcbiAgICAgICAgfVxuICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YShuZXdzQ3JlYXRvcktleSlcbiAgICAgICAgLnRoZW4gKGRiR3JhYnMgPT4ge1xuICAgICAgICAgICAgZGJHcmFicy5mb3JFYWNoKGRiR3JhYiA9PiAge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRiR3JhYik7XG4gICAgICAgICAgICAgICAgbmV3c0NvbnRhaW5lci5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJTQVZFIEJJVENIXCIsXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzOiBcIm5ld3NTYXZlQnV0dG9uXCJcbiAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgICBuZXdzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImgyXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGRiR3JhYi50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3M6IFwibmV3c1RpdGxlXCJcbiAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgICBuZXdzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcInBcIixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogZGJHcmFiLnN5bm9wc2lzLFxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzczogXCJuZXdzQm9keVwiXG4gICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgbmV3c0NvbnRhaW5lci5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGRiR3JhYi51cmwsXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzOiBcIm5ld3NVUkxcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlczp7XG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmOmAke2RiR3JhYi51cmx9YFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkpXG5cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfSlcblxuICAgICAgICAvLyBjb25zdCBOZXdzVGVzdCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudChcImgyXCIsdGVzdFBhc3MsXCJ0ZXN0T2JqXCIsbnVsbCk7XG4gICAgICAgIC8vb3V0cHV0LmFwcGVuZENoaWxkKE5ld3NUZXN0KTtcblxuXG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgbmV3cyIsImltcG9ydCBldmVudExpc3RlbmVycyBmcm9tIFwiLi9ldmVudExpc3RlbmVyc1wiO1xuY29uc3Qgbm9tYWREYXRhID0ge1xuXG4gICAgY29ubmVjdFRvRGF0YShmZXRjaE9iamVjdCkge1xuXG4gICAgICAgIGxldCBkYXRhU2V0ID0gZmV0Y2hPYmplY3QuZGF0YVNldDtcbiAgICAgICAgbGV0IGVtYmVkSXRlbSA9IGZldGNoT2JqZWN0LmVtYmVkSXRlbTtcbiAgICAgICAgbGV0IGZldGNoVHlwZSA9IGZldGNoT2JqZWN0LmZldGNoVHlwZTtcbiAgICAgICAgbGV0IGRhdGFCYXNlT2JqZWN0ID0gZmV0Y2hPYmplY3QuZGF0YUJhc2VPYmplY3Q7XG4gICAgICAgIGxldCBwdXRJZCA9IGZldGNoT2JqZWN0LnB1dElkO1xuICAgICAgICBsZXQgZGVsZXRlSWQgPSBmZXRjaE9iamVjdC5kZWxldGVJZDtcblxuICAgICAgICBpZiAoZmV0Y2hUeXBlID09IFwiR0VUXCIpIHtcblxuICAgICAgICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC8ke2RhdGFTZXR9JHtlbWJlZEl0ZW19YClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkgLy8gcGFyc2VzIHJlc3BvbnNlIHRvIEpTT05cblxuICAgICAgICB9IGVsc2UgaWYgKGZldGNoVHlwZSA9PT0gXCJQT1NUXCIpe1xuXG4gICAgICAgIC8vIERlZmF1bHQgb3B0aW9ucyBhcmUgbWFya2VkIHdpdGggKlxuICAgICAgICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC8ke2RhdGFTZXR9YCwge1xuICAgICAgICAgICAgbWV0aG9kOiBgJHtmZXRjaFR5cGV9YCwgLy8gKkdFVCwgUE9TVCwgUFVULCBERUxFVEUsIGV0Yy5cbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcbiAgICAgICAgICAgICAgICAvLyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIHJlZmVycmVyOiBcIm5vLXJlZmVycmVyXCIsIC8vIG5vLXJlZmVycmVyLCAqY2xpZW50XG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhQmFzZU9iamVjdCksIC8vIGJvZHkgZGF0YSB0eXBlIG11c3QgbWF0Y2ggXCJDb250ZW50LVR5cGVcIiBoZWFkZXJcbiAgICAgICAgfSlcblxuICAgICAgICB9IGVsc2UgaWYoZmV0Y2hUeXBlID09PSBcIlBVVFwiKXtcbiAgICAgICAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODgvJHtkYXRhU2V0fS8ke3B1dElkfWAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogYCR7ZmV0Y2hUeXBlfWAsIC8vICpHRVQsIFBPU1QsIFBVVCwgREVMRVRFLCBldGMuXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXG4gICAgICAgICAgICAgICAgLy8gXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyByZWZlcnJlcjogXCJuby1yZWZlcnJlclwiLCAvLyBuby1yZWZlcnJlciwgKmNsaWVudFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YUJhc2VPYmplY3QpLCAvLyBib2R5IGRhdGEgdHlwZSBtdXN0IG1hdGNoIFwiQ29udGVudC1UeXBlXCIgaGVhZGVyXG4gICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSBpZiAoZmV0Y2hUeXBlID09PSBcIkRFTEVURVwiKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDg4LyR7ZGF0YVNldH0vJHtkZWxldGVJZH1gLCB7XG4gICAgICAgICAgICBtZXRob2Q6IGAke2ZldGNoVHlwZX1gLCAvLyAqR0VULCBQT1NULCBQVVQsIERFTEVURSwgZXRjLlxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxuICAgICAgICAgICAgICAgIC8vIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gcmVmZXJyZXI6IFwibm8tcmVmZXJyZXJcIiwgLy8gbm8tcmVmZXJyZXIsICpjbGllbnRcbiAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nIChcIllPVSBTQ1JFV0VEIElUIFVQXCIpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5vbWFkRGF0YSIsImltcG9ydCBub21hZERhdGEgZnJvbSBcIi4vbm9tYWREYXRhXCI7XG5pbXBvcnQgZG9tQ29tcG9uZW50cyBmcm9tIFwiLi9kb21Db21wb25lbnRzXCI7XG5pbXBvcnQgdGFza3NFdmVudExpc3RlbmVycyBmcm9tIFwiLi90YXNrc0V2ZW50TGlzdGVuZXJzXCI7XG5pbXBvcnQgdGFza3NQb3B1cCBmcm9tIFwiLi90YXNrc1BvcHVwXCI7XG4vLyBpbXBvcnQgZXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vZXZlbnRMaXN0ZW5lcnNcIlxuXG5jb25zdCB0YXNrcyA9IHtcblxuICAgIGNyZWF0ZVRhc2tUYWJsZXMoKSB7XG4gICAgICAgICQoXCIjb3V0cHV0XCIpLmVtcHR5KClcblxuICAgICAgICBsZXQgb3V0cHV0QXJ0aWNsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3V0cHV0XCIpXG5cbiAgICAgICAgLy9jcmVhdGUgZGlzcGxheSBjb250YWluZXJcbiAgICAgICAgbGV0IHRhc2tzQ29udGFpbmVyID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJzZWN0aW9uXCIsXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwidGFza3NDb250YWluZXJcIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgaWQgOiBcInRhc2tzQ29udGFpbmVyXCJcbiAgICAgICAgICAgIH19KTtcblxuICAgICAgICAvL2NyZWF0ZSB0YXNrcyB0YWJsZXNcbiAgICAgICAgbGV0IGFjdGl2ZVRhc2tzVGFibGUgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcInRhYmxlXCIsXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwiYWN0aXZlVGFza3NUYWJsZVwiLFxuICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICBpZCA6IFwiYWN0aXZlVGFza3NUYWJsZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBhY3RpdmVUYXNrc1RhYmxlVGl0bGUgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImNhcHRpb25cIixcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJhY3RpdmVUYXNrc1RhYmxlVGl0bGVcIixcbiAgICAgICAgICAgIGNvbnRlbnQgOiBcIkFDVElWRSBUQVNLU1wiXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBjb21wbGV0ZWRUYXNrc1RhYmxlID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJ0YWJsZVwiLFxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcImNvbXBsZXRlZFRhc2tzVGFibGVcIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgaWQgOiBcImNvbXBsZXRlZFRhc2tzVGFibGVcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgY29tcGxldGVkVGFza3NUYWJsZVRpdGxlID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJjYXB0aW9uXCIsXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwiY29tcGxldGVkVGFza3NUYWJsZVRpdGxlXCIsXG4gICAgICAgICAgICBjb250ZW50IDogXCJDT01QTEVURUQgVEFTS1NcIlxuICAgICAgICB9KVxuXG4gICAgICAgIC8vY3JlYXRlIHJvdyB3aXRoIGNvbHVtbiBoZWFkZXJzXG4gICAgICAgIGxldCBhY3RpdmVUYXNrc0hlYWRlclJvdyA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwidHJcIixcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJhY3RpdmVUYXNrc0hlYWRlclJvd1wiLFxuICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICBpZCA6IFwiYWN0aXZlVGFza3NIZWFkZXJSb3dcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgY29tcGxldGVkVGFza3NIZWFkZXJSb3cgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcInRyXCIsXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwiY29tcGxldGVkVGFza3NIZWFkZXJSb3dcIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgaWQgOiBcImNvbXBsZXRlZFRhc2tzSGVhZGVyUm93XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9jcmVhdGUgY29sdW1uIGhlYWRlcnNcbiAgICAgICAgbGV0IGFjdGl2ZVRhc2tzSGVhZGVyID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJ0aFwiLFxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcImFjdGl2ZVRhc2tzSGVhZGVyXCIsXG4gICAgICAgICAgICBjb250ZW50OiBcIlRhc2tcIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgaWQgOiBcImFjdGl2ZVRhc2tzSGVhZGVyXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGFjdGl2ZVRhc2tzRHVlRGF0ZUhlYWRlciA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwidGhcIixcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJhY3RpdmVUYXNrc0R1ZURhdGVIZWFkZXJcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiRHVlIERhdGVcIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgaWQgOiBcImFjdGl2ZVRhc2tzRHVlRGF0ZUhlYWRlclwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBjb21wbGV0ZWRUYXNrc0hlYWRlciA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwidGhcIixcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJjb21wbGV0ZWRUYXNrc0hlYWRlclwiLFxuICAgICAgICAgICAgY29udGVudDogXCJUYXNrXCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgIGlkIDogXCJjb21wbGV0ZWRUYXNrc0hlYWRlclwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBjb21wbGV0ZWRUYXNrc0R1ZURhdGVIZWFkZXIgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcInRoXCIsXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwiY29tcGxldGVkVGFza3NEdWVEYXRlSGVhZGVyXCIsXG4gICAgICAgICAgICBjb250ZW50OiBcIkR1ZSBEYXRlXCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgIGlkIDogXCJjb21wbGV0ZWRUYXNrc0R1ZURhdGVIZWFkZXJcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy9jcmVhdGUgYnV0dG9uIHRvIG1ha2UgbmV3IHRhc2tzXG4gICAgICAgIGxldCBjcmVhdGVUYXNrQnV0dG9uID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJidXR0b25cIixcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJjcmVhdGVUYXNrQnV0dG9uXCIsXG4gICAgICAgICAgICBjb250ZW50IDogXCJDcmVhdGUgTmV3IFRhc2tcIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgaWQgOiBcImNyZWF0ZVRhc2tCdXR0b25cIixcbiAgICAgICAgICAgICAgICB0eXBlIDogXCJidXR0b25cIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvL2FwcGVuZCBoZWFkZXIgcm93IHRvIHRhYmxlIGFuZCB0YWJsZSB0byBjb250YWluZXJcbiAgICAgICAgYWN0aXZlVGFza3NUYWJsZS5hcHBlbmRDaGlsZChhY3RpdmVUYXNrc1RhYmxlVGl0bGUpO1xuICAgICAgICBjb21wbGV0ZWRUYXNrc1RhYmxlLmFwcGVuZENoaWxkKGNvbXBsZXRlZFRhc2tzVGFibGVUaXRsZSk7XG4gICAgICAgIGFjdGl2ZVRhc2tzSGVhZGVyUm93LmFwcGVuZENoaWxkKGFjdGl2ZVRhc2tzSGVhZGVyKVxuICAgICAgICBhY3RpdmVUYXNrc0hlYWRlclJvdy5hcHBlbmRDaGlsZChhY3RpdmVUYXNrc0R1ZURhdGVIZWFkZXIpO1xuICAgICAgICBhY3RpdmVUYXNrc1RhYmxlLmFwcGVuZENoaWxkKGFjdGl2ZVRhc2tzSGVhZGVyUm93KTtcbiAgICAgICAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aXZlVGFza3NUYWJsZSk7XG4gICAgICAgIGNvbXBsZXRlZFRhc2tzSGVhZGVyUm93LmFwcGVuZENoaWxkKGNvbXBsZXRlZFRhc2tzSGVhZGVyKVxuICAgICAgICBjb21wbGV0ZWRUYXNrc0hlYWRlclJvdy5hcHBlbmRDaGlsZChjb21wbGV0ZWRUYXNrc0R1ZURhdGVIZWFkZXIpO1xuICAgICAgICBjb21wbGV0ZWRUYXNrc1RhYmxlLmFwcGVuZENoaWxkKGNvbXBsZXRlZFRhc2tzSGVhZGVyUm93KTtcbiAgICAgICAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQoY29tcGxldGVkVGFza3NUYWJsZSk7XG4gICAgICAgIGNyZWF0ZVRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRhc2tzUG9wdXAuY3JlYXRlTmV3VGFza0Zvcm0pO1xuICAgICAgICB0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVUYXNrQnV0dG9uKTtcbiAgICAgICAgb3V0cHV0QXJ0aWNsZS5hcHBlbmRDaGlsZCh0YXNrc0NvbnRhaW5lcik7XG5cbiAgICAgICAgdGhpcy5nZXRUYXNrcygpO1xuICAgIH0sXG5cbiAgICBnZXRUYXNrcygpIHtcblxuICAgICAgICBsZXQgY3VycmVudFVzZXIgPSBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSk7XG5cbiAgICAgICAgLy9wb3B1bGF0ZSB0YXNrc1xuICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG5cbiAgICAgICAgICAgIGRhdGFTZXQgOiBcInRhc2tzXCIsXG4gICAgICAgICAgICBmZXRjaFR5cGUgOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW1iZWRJdGVtIDogXCI/X2VtYmVkPXVzZXJzXCJcblxuICAgICAgICB9KS50aGVuKHRhc2tzID0+IHtcblxuICAgICAgICAgICAgdGFza3Muc29ydChmdW5jdGlvbihhLGIpe1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShhLmV4cGVjdGVkQ29tcGxldGlvbkRhdGUpIC0gbmV3IERhdGUoYi5leHBlY3RlZENvbXBsZXRpb25EYXRlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuXG4gICAgICAgICAgICAgICAgaWYgKHRhc2sudXNlcklkID09PSBjdXJyZW50VXNlcikge1xuXG4gICAgICAgICAgICAgICAgbGV0IHN0YXR1cyA9IHRhc2suY29tcGxldGU7XG4gICAgICAgICAgICAgICAgbGV0IGFjdGl2ZVRhc2tzVGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjdGl2ZVRhc2tzVGFibGVcIik7XG4gICAgICAgICAgICAgICAgbGV0IGNvbXBsZXRlZFRhc2tzVGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbXBsZXRlZFRhc2tzVGFibGVcIik7XG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIGEgbmV3IHRhYmxlIHJvdyBmb3IgZWFjaCB0YXNrXG4gICAgICAgICAgICAgICAgbGV0IHRhc2tSb3cgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgOiBcInRhc2tUYWJsZVJvd1wiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQgOiBgdGFza1RhYmxlUm93XyR7dGFzay5pZH1gXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgLy9jcmVhdGUgY2VsbHMgdG8gaG9sZCB0YXNrIGFuZCBkdWUgZGF0ZVxuICAgICAgICAgICAgICAgIGxldCB0YXNrQ2VsbCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcyA6IFwidGFza0NlbGxcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkIDogYHRhc2tDZWxsXyR7dGFzay5pZH1gXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgbGV0IGR1ZURhdGVDZWxsID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzIDogXCJkdWVEYXRlQ2VsbFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQgOiBgZHVlRGF0ZUNlbGxfJHt0YXNrLmlkfWBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAvL2NyZWF0ZSB0YXNrIGNoZWNrYm94IGFuZCB0aXRsZVxuICAgICAgICAgICAgICAgIGxldCB0YXNrTGFiZWwgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgOiBcInRhc2tMYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQgOiBgdGFza0xhYmVsXyR7dGFzay5pZH1gXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC8vY3JlYXRlIHRhc2sgdGl0bGVcbiAgICAgICAgICAgICAgICBsZXQgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYCR7dGFzay50YXNrfWApO1xuXG4gICAgICAgICAgICAgICAgLy9jcmVhdGUgdGFzayBjaGVja2JveFxuICAgICAgICAgICAgICAgIGxldCB0YXNrQ2hlY2tib3ggPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgOiBcInRhc2tDaGVja2JveFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQgOiBgdGFza0NoZWNrYm94XyR7dGFzay5pZH1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA6IFwiY2hlY2tib3hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlIDogYCR7dGFzay50YXNrfWBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLy9jcmVhdGUgdGFzayBkdXRlIGRhdGVcbiAgICAgICAgICAgICAgICBsZXQgZHVlRGF0ZUFycmF5ID0gbmV3IERhdGUodGFzay5leHBlY3RlZENvbXBsZXRpb25EYXRlKS50b0RhdGVTdHJpbmcoKS5zcGxpdChcIiBcIilcbiAgICAgICAgICAgICAgICBsZXQgZHVlRGF0ZSA9IGAke2R1ZURhdGVBcnJheVsxXX0gJHtkdWVEYXRlQXJyYXlbMl19LCAke2R1ZURhdGVBcnJheVszXX1gXG5cbiAgICAgICAgICAgICAgICBsZXQgdGFza0R1ZURhdGUgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwicFwiLFxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcyA6IFwidGFza0R1ZURhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCA6IGR1ZURhdGUsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZCA6IGB0YXNrRHVlRGF0ZV8ke3Rhc2suaWR9YFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAvL2FwcGVuZCAtLSBvcmRlciBpcyBpbXBvcnRhbnQgZm9yIGNoZWNrYm94IGFuZCBsYWJlbCB0byBlbnN1cmUgYm94IGluIG9uIHRoZSBsZWZ0XG4gICAgICAgICAgICAgICAgdGFza0NoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgdGFza3NFdmVudExpc3RlbmVycy5tYXJrVGFza0NvbXBsZXRlKVxuICAgICAgICAgICAgICAgIHRhc2tMYWJlbC5hcHBlbmRDaGlsZCh0YXNrQ2hlY2tib3gpO1xuICAgICAgICAgICAgICAgIHRhc2tMYWJlbC5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICAgICAgICAgICAgICAgIHRhc2tDZWxsLmFwcGVuZENoaWxkKHRhc2tMYWJlbCk7XG4gICAgICAgICAgICAgICAgZHVlRGF0ZUNlbGwuYXBwZW5kQ2hpbGQodGFza0R1ZURhdGUpO1xuICAgICAgICAgICAgICAgIHRhc2tSb3cuYXBwZW5kQ2hpbGQodGFza0NlbGwpO1xuICAgICAgICAgICAgICAgIHRhc2tSb3cuYXBwZW5kQ2hpbGQoZHVlRGF0ZUNlbGwpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cykge1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZFRhc2tzVGFibGUuYXBwZW5kQ2hpbGQodGFza1Jvdyk7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tDaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIFwiXCIpXG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmVUYXNrc1RhYmxlLmFwcGVuZENoaWxkKHRhc2tSb3cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19KTtcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRhc2tzO1xuIiwiaW1wb3J0IG5vbWFkRGF0YSBmcm9tIFwiLi9ub21hZERhdGFcIjtcbmltcG9ydCB0YXNrcyBmcm9tIFwiLi90YXNrc1wiO1xuXG5jb25zdCB0YXNrc0V2ZW50TGlzdGVuZXJzID0ge1xuXG4gICAgY3JlYXRlTmV3VGFzaygpIHtcblxuICAgICAgICBsZXQgdGFza1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrVGl0bGVJbnB1dFwiKS52YWx1ZTtcbiAgICAgICAgbGV0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tEYXRlSW5wdXRcIikudmFsdWU7XG4gICAgICAgIGxldCB1c2VySWQgPSBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSk7XG5cbiAgICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xuXG4gICAgICAgICAgICBkYXRhU2V0IDogXCJ0YXNrc1wiLFxuICAgICAgICAgICAgZmV0Y2hUeXBlIDogXCJQT1NUXCIsXG4gICAgICAgICAgICBkYXRhQmFzZU9iamVjdCA6IHtcbiAgICAgICAgICAgICAgICB1c2VySWQgOiB1c2VySWQsXG4gICAgICAgICAgICAgICAgdGFzayA6IHRhc2tUaXRsZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZENvbXBsZXRpb25EYXRlIDogZHVlRGF0ZSxcbiAgICAgICAgICAgICAgICBjb21wbGV0ZSA6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihzaGl0ID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNoaXQpXG4gICAgICAgICAgICAkKFwiI291dHB1dFwiKS5lbXB0eSgpXG4gICAgICAgICAgICB0YXNrcy5jcmVhdGVUYXNrVGFibGVzKClcbiAgICAgICAgfSlcbiAgICB9LFxuXG4gICAgbWFya1Rhc2tDb21wbGV0ZSgpIHtcbiAgICAgICAgbGV0IHRhc2tUb0VkaXRJZCA9IGV2ZW50LnRhcmdldC5pZC5zcGxpdChcIl9cIilbMV07XG5cbiAgICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xuXG4gICAgICAgICAgICBkYXRhU2V0IDogXCJ0YXNrc1wiLFxuICAgICAgICAgICAgZmV0Y2hUeXBlIDogXCJHRVRcIixcbiAgICAgICAgICAgIGVtYmVkSXRlbSA6IGA/JmlkPSR7dGFza1RvRWRpdElkfWBcbiAgICAgICAgfSkudGhlbihwYXJzZWRUYXNrcyA9PiB7XG5cblxuICAgICAgICAgICAgbGV0IHRhc2tJZCA9IHBhcnNlZFRhc2tzWzBdLmlkO1xuICAgICAgICAgICAgbGV0IHVzZXJJZCA9IHBhcnNlZFRhc2tzWzBdLnVzZXJJZDtcbiAgICAgICAgICAgIGxldCB0YXNrID0gcGFyc2VkVGFza3NbMF0udGFzaztcbiAgICAgICAgICAgIGxldCBleHBlY3RlZENvbXBsZXRpb25EYXRlID0gcGFyc2VkVGFza3NbMF0uZXhwZWN0ZWRDb21wbGV0aW9uRGF0ZTtcbiAgICAgICAgICAgIGxldCBjb21wbGV0ZSA9IHBhcnNlZFRhc2tzWzBdLmNvbXBsZXRlO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrSWQsIHVzZXJJZCwgdGFzaywgZXhwZWN0ZWRDb21wbGV0aW9uRGF0ZSwgY29tcGxldGUpXG5cbiAgICAgICAgICAgIGlmIChjb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgIGNvbXBsZXRlID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICAgICAgICAgICAgcHV0SWQgOiB0YXNrVG9FZGl0SWQsXG4gICAgICAgICAgICAgICAgZGF0YVNldCA6IFwidGFza3NcIixcbiAgICAgICAgICAgICAgICBmZXRjaFR5cGUgOiBcIlBVVFwiLFxuICAgICAgICAgICAgICAgIGRhdGFCYXNlT2JqZWN0IDoge1xuICAgICAgICAgICAgICAgICAgICBpZDogdGFza0lkLFxuICAgICAgICAgICAgICAgICAgICB1c2VySWQgOiB1c2VySWQsXG4gICAgICAgICAgICAgICAgICAgIHRhc2sgOiB0YXNrLFxuICAgICAgICAgICAgICAgICAgICBleHBlY3RlZENvbXBsZXRpb25EYXRlOiBleHBlY3RlZENvbXBsZXRpb25EYXRlLFxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogY29tcGxldGVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS50aGVuKHNoaXQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNoaXQpXG4gICAgICAgICAgICAgICAgJChcIiNvdXRwdXRcIikuZW1wdHkoKVxuICAgICAgICAgICAgICAgIHRhc2tzLmNyZWF0ZVRhc2tUYWJsZXMoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCB0YXNrc0V2ZW50TGlzdGVuZXJzOyIsImltcG9ydCBkb21Db21wb25lbnRzIGZyb20gXCIuL2RvbUNvbXBvbmVudHNcIjtcbmltcG9ydCB0YXNrc0V2ZW50TGlzdGVuZXJzIGZyb20gXCIuL3Rhc2tzRXZlbnRMaXN0ZW5lcnNcIjtcblxuY29uc3QgdGFza3NQb3B1cCA9IHtcblxuICAgIGNyZWF0ZU5ld1Rhc2tGb3JtKCkge1xuICAgICAgICBsZXQgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tzQ29udGFpbmVyXCIpO1xuICAgICAgICBsZXQgdGFza1BvcHVwRGl2ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJkaXZcIixcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJ0YXNrUG9wdXBEaXZcIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgaWQgOiBcInRhc2tQb3B1cERpdlwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBuZXdUYXNrRm9ybSA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwiZGl2XCIsXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwibmV3VGFza0Zvcm1cIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgaWQgOiBcIm5ld1Rhc2tGb3JtXCIsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBuZXdUYXNrRm9ybVRpdGxlID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJoMlwiLFxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcIm5ld1Rhc2tGb3JtVGl0bGVcIixcbiAgICAgICAgICAgIGNvbnRlbnQgOiBcIkNyZWF0ZSBBIE5ldyBUYXNrXCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgIGlkIDogXCJuZXdUYXNrRm9ybVRpdGxlXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGhvcml6b250YWxMaW5lID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50ICh7XG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwiaHJcIlxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgdGFza1RpdGxlSW5wdXQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQgKHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJpbnB1dFwiLFxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcInRhc2tUaXRsZUlucHV0XCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgIGlkIDogXCJ0YXNrVGl0bGVJbnB1dFwiLFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyIDogXCJFbnRlciBuZXcgdGFzayB0aXRsZVwiLFxuICAgICAgICAgICAgICAgIHR5cGUgOiBcInRleHRcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgdGFza0RhdGVJbnB1dCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCAoe1xuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImlucHV0XCIsXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwidGFza0RhdGVJbnB1dFwiLFxuICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICBpZCA6IFwidGFza0RhdGVJbnB1dFwiLFxuICAgICAgICAgICAgICAgIHR5cGUgOiBcImRhdGVcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgc3VibWl0TmV3VGFza0J1dHRvbiA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCAoe1xuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcInN1Ym1pdE5ld1Rhc2tCdXR0b25cIixcbiAgICAgICAgICAgIGNvbnRlbnQgOiBcIlN1Ym1pdFwiLFxuICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICBpZCA6IFwic3VibWl0TmV3VGFza0J1dHRvblwiLFxuICAgICAgICAgICAgICAgIHR5cGUgOiBcImJ1dHRvblwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHN1Ym1pdE5ld1Rhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRhc2tzRXZlbnRMaXN0ZW5lcnMuY3JlYXRlTmV3VGFzaylcbiAgICAgICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQobmV3VGFza0Zvcm1UaXRsZSk7XG4gICAgICAgIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKGhvcml6b250YWxMaW5lKTtcbiAgICAgICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza1RpdGxlSW5wdXQpO1xuICAgICAgICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrRGF0ZUlucHV0KTtcbiAgICAgICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQoc3VibWl0TmV3VGFza0J1dHRvbik7XG4gICAgICAgIHRhc2tQb3B1cERpdi5hcHBlbmRDaGlsZChuZXdUYXNrRm9ybSk7XG4gICAgICAgIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tQb3B1cERpdik7XG4gICAgfVxuXG59XG5leHBvcnQgZGVmYXVsdCB0YXNrc1BvcHVwOyJdfQ==
