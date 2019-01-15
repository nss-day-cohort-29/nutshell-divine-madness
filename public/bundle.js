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

          _nomadData.default.connectToData({
            "dataSet": "users",
            "fetchType": "GET",
            "dataBaseObject": "",
            "embedItem": "?_embed=users"
          }).then(users => {
            users.forEach(user => {
              if (user.id === Number(userId)) {
                const targetContainer = document.getElementById("output");
                targetContainer.appendChild(_domComponents.default.createDomElement({
                  elementType: "div",
                  content: `welcome ${user.userName}`,
                  cssClass: "welcome-user"
                }));
              }
            });
          });
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
    const targetContainer = document.getElementById("output");
    targetContainer.appendChild(_domComponents.default.createDomElement({
      elementType: "section",
      attributes: {
        id: "allFriendContainer"
      }
    }));
    const allFriendContainer = document.getElementById("allFriendContainer");
    allFriendContainer.appendChild(_domComponents.default.createDomElement({
      elementType: "h2",
      content: "friends:",
      cssClass: "friendTag"
    }));
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
    const allFriendContainer = document.getElementById("allFriendContainer");
    allFriendContainer.appendChild(_domComponents.default.createDomElement({
      elementType: "article",
      attributes: {
        class: "friend-container",
        id: `friend-${friend}`
      }
    }));
    const friendContainer = document.getElementById(`friend-${friend}`); // GET A BOX HERE THAT CONTAINS VISUAL OF FRIENDS

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
                  content: `EVENT: ${event.eventName} on ${event.eventDate}`,
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
                  content: `ARTICLE: ${userSpecificArticles.title}`,
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
    const findNewFriendTag = document.createElement("h5");
    findNewFriendContainer.appendChild(findNewFriendTag);
    findNewFriendTag.classList.add("friendToBe");
    findNewFriendTag.textContent = "friend to be:";

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
              type: "button",
              class: "add-friend-button"
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
    if (event.target.attributes.name.value === "undefined") {
      console.log("shziball");
    }

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

        let messageDiv = _domComponents.default.createDomElement({
          elementType: "div",
          cssClass: "messageDiv",
          attributes: {
            id: "messageDiv"
          }
        });

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
          messageDiv.appendChild(messageElement);
          messageElement.appendChild(messageElement2);
          messageDiv.appendChild(messageEditButton);
          messageContainer.insertBefore(messageDiv, messageInput);
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
    let messageDiv = document.getElementById("messageDiv");

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
    messageDiv.appendChild(messageEditForm);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2Rhc2hib2FyZC5qcyIsIi4uL3NjcmlwdHMvZG9tQ29tcG9uZW50cy5qcyIsIi4uL3NjcmlwdHMvZG9tUmVuZGVyZXIuanMiLCIuLi9zY3JpcHRzL2V2ZW50TGlzdGVuZXJzLmpzIiwiLi4vc2NyaXB0cy9ldmVudFBhZ2VMaXN0ZW5lcnMuanMiLCIuLi9zY3JpcHRzL2V2ZW50cy5qcyIsIi4uL3NjcmlwdHMvZnJpZW5kcy5qcyIsIi4uL3NjcmlwdHMvZnJpZW5kc0V2ZW50c0xpc3RlbmVyLmpzIiwiLi4vc2NyaXB0cy9tZXNzYWdlcy5qcyIsIi4uL3NjcmlwdHMvbWVzc2FnZXNFdmVudExpc3RlbmVycy5qcyIsIi4uL3NjcmlwdHMvbmV3cy5qcyIsIi4uL3NjcmlwdHMvbm9tYWREYXRhLmpzIiwiLi4vc2NyaXB0cy90YXNrcy5qcyIsIi4uL3NjcmlwdHMvdGFza3NFdmVudExpc3RlbmVycy5qcyIsIi4uL3NjcmlwdHMvdGFza3NQb3B1cC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUNBQTs7OztBQUNBLE1BQU0sU0FBUyxHQUFHO0FBQ2hCLEVBQUEsY0FBYyxHQUFFO0FBQ2Q7QUFDQSxRQUFJLFFBQVEsR0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BQWhCO0FBcUNFLElBQUEsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhLElBQWIsQ0FBa0IsUUFBbEI7O0FBQ0EsNEJBQWUscUJBQWY7O0FBQ0EsSUFBQSxDQUFDLENBQUMsUUFBRCxDQUFELENBQVksS0FBWixDQUFrQix3QkFBZSxTQUFqQztBQUNBLElBQUEsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUIsS0FBckIsQ0FBMkIsd0JBQWUsZ0JBQTFDO0FBQ0EsSUFBQSxDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQixLQUFyQixDQUEyQixLQUFLLGNBQWhDLEVB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Iiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCBldmVudExpc3RlbmVycyBmcm9tIFwiLi9ldmVudExpc3RlbmVyc1wiXG5jb25zdCBkYXNoYm9hcmQgPSB7XG4gIGJ1aWxkTG9naW5Gb3JtKCl7XG4gICAgLy91c2luZyBzdHJpbmcgaW50ZXJwb2xhdGlvbiB0byBjcmVhdGUgdGhlIGZvcm1cbiAgICBsZXQgZm9ybUhUTUwgPSBgXG4gICAgPGgxIGNsYXNzID0gXCJ0LWJvcmRlclwiPk5vbWFkczwvaDE+XG4gICAgICA8c2VjdGlvbiBjbGFzcyA9IFwiZm9ybVwiPlxuICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIiBjbGFzcyA9IHJlZ2lzdGVyRm9ybT5cbiAgICAgICAgICA8aW5wdXQgaWQgPSBcInJlZ1VzZXJOYW1lXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlciA9IFwiVXNlcm5hbWVcIiByZXF1aXJlZD5cbiAgICAgICAgICA8aW5wdXQgaWQgPSBcInJlZ0VtYWlsXCIgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXIgPSBcIkVtYWlsXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgPGlucHV0IGlkID0gXCJyZWdQYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyID0gXCJQYXNzd29yZFwiIHJlcXVpcmVkPlxuICAgICAgICAgIDxpbnB1dCBpZCA9IFwicmVnQ29uZmlybVBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXIgPSBcIkNvbmZpcm0gUGFzc3dvcmRcIiByZXF1aXJlZD5cbiAgICAgICAgICA8YnV0dG9uIGlkID0gXCJyZWdpc3RlckJ1dHRvblwiPkNyZWF0ZSBBY2NvdW50PC9idXR0b24+XG4gICAgICAgICAgPHAgY2xhc3MgPSBcIm1lc3NhZ2VcIj5BbHJlYWR5IGEgUmVnaXN0ZXJlZCBNZW1iZXI/IDxhIGhyZWYgPSBcIiNcIj5Mb2dJbiA8L2E+PC9wPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxmb3JtIGNsYXNzID0gXCJsb2dpbi1mb3JtXCI+XG4gICAgICAgICAgPGlucHV0IGlkID0gXCJ1c2VyTmFtZVZhbFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXIgPSBcIlVzZXJuYW1lXCI+XG4gICAgICAgICAgPGlucHV0IGlkID0gXCJwYXNzd29yZFZhbFwiIHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyID0gXCJQYXNzd29yZFwiPlxuICAgICAgICAgIDxidXR0b24gdHlwZSA9IFwiYnV0dG9uXCIgaWQgPSBcImxvZ0luXCI+TG9naW48L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGlkID0gXCJtb2RhbEJ1dHRvblwiPk5vbWFkcyBNaXNzaW9uPC9idXR0b24+XG4gICAgICAgICAgPHAgY2xhc3MgPSBcIm1lc3NhZ2VcIj5Eb24ndCBoYXZlIGFuIGFjY291bnQ/IDxhIGhyZWYgPSBcIiNcIj5SZWdpc3RlcjwvYT48L3A+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzZWN0aW9uIGlkPVwibm9tYWRNb2RhbFwiIGNsYXNzPVwibW9kYWxcIj5cbiAgICAgIDwhLS0gTW9kYWwgY29udGVudCAtLT5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2xvc2VcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgICAgPGgyPlRoZSBQdXJwb3NlIEJlaGluZCBOb21hZHM8L2gyPlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cbiAgICAgICAgICAgIDxoMz5UaGUgbWluZHMgYmVoaW5nIE5vbWFkczwvaDM+XG4gICAgICAgICAgICA8aW1nIGlkID0gXCJjcmVhdG9yc0ltYWdlXCIgc3JjID0gXCJpbWFnZXMvbm9tYWRDcmVhdG9ycy5qcGdcIiBhbHQgPSBcImFwcGxpY2F0aW9uIGNyZWF0b3JzXCI+XG4gICAgICAgICAgICA8cD5BcyBvdXRkb29yc21hbiwgZW52aXJvbm1lbnRhbGlzdCwgYW5kIGZpbG1tYWtlcnMgY29udGludWUgdG8gZ3Jvdy4gU28gZG8gdGhlIGFkdmVudHVyb3VzIHNwaXJpdHMgb2YgdGhvc2Ugd2hvIGVtYnJhY2UgY29uc2Npb3VzIGNvbnN1bWVyaXNtIGFuZCBzdXN0YWluYWJsZSBsaXZpbmcuIFRoZSBwdXJwb3NlIGlzIHRvIG1ha2UgYSBwb2ludCBvZiBwbHVnZ2luZyBpbnRvIG1vZGVybiBsaWZlIGFuZCBjb25uZWN0aW5nIHdpdGggeW91ciBmZWxsb3cgbm9tYWRzIGZyb20gYW55d2hlcmUgeW91IG1heSBiZS4gU2hhcmUgeW91ciBsb2NhdGlvbiwgTWVldCB1cCwgRXhjaGFuZ2Ugc3RvcmllcywgQ3JlYXRlIHJlbGF0aW9uc2hpcHMgd2l0aCBwZW9wbGUgd2hvIGhhdmUgc2ltaWxhciBpbnRlcmVzdCBhbmQgZW5oYW5jZSB5b3VyIHRyYXZlbGluZyBleHBlcmllbmNlIHdpdGggbm9tYWRzLjwvcD5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgICAgICAgIDxoMz5DcmVhdGVkIEJ5OiBEaXZpbmUgTWFkbmVzcyZjb3B5PC9oMz5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIGBcbiAgICAgICQoXCIjb3V0cHV0XCIpLmh0bWwoZm9ybUhUTUwpXG4gICAgICBldmVudExpc3RlbmVycy5tb2RhbERpc3BsYXlBbmltYXRpb24oKVxuICAgICAgJChcIiNsb2dJblwiKS5jbGljayhldmVudExpc3RlbmVycy51c2VyTG9naW4pXG4gICAgICAkKFwiI3JlZ2lzdGVyQnV0dG9uXCIpLmNsaWNrKGV2ZW50TGlzdGVuZXJzLnVzZXJSZWdpc3RyYXRpb24pXG4gICAgICAkKFwiI3JlZ2lzdGVyQnV0dG9uXCIpLmNsaWNrKHRoaXMuYnVpbGRMb2dpbkZvcm0pXG4gICAgICAvLyAkKFwiI3JlZ2lzdGVyQnV0dG9uXCIpLmNsaWNrKGV2ZW50TGlzdGVuZXJzLnVzZXJMb2dpbilcblxuICAgIH0sXG4gIGNyZWF0ZU5hdkJhcigpe1xuICAgIGxldCBuYXZIVE1MID0gYFxuICAgICAgPG5hdj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaSBpZCA9IFwibmV3c0xpbmtcIj48YSBjbGFzcyA9IFwiYWN0aXZlXCIgaHJlZiA9IFwiI1wiPkFydGljbGVzPC9hPjwvbGk+XG4gICAgICAgICAgPGxpIGlkID0gXCJldmVudExpbmtcIj48YSBocmVmID0gXCIjXCI+RXZlbnRzPC9hPjwvbGk+XG4gICAgICAgICAgPGxpIGlkID0gXCJ0YXNrc0xpbmtcIj48YSBocmVmID0gXCIjXCI+VGFza3M8L2E+PC9saT5cbiAgICAgICAgICA8bGkgaWQgPSBcImZyaWVuZHNMaW5rXCI+PGEgaHJlZiA9IFwiI1wiPkZyaWVuZHM8L2E+PC9saT5cbiAgICAgICAgICA8bGkgaWQgPSBcIm1lc3NhZ2VzTGlua1wiPjxhIGhyZWYgPSBcIiNcIj5NZXNzYWdlczwvYT48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcyA9IFwic2lnbk91dFwiIGlkID0gXCJsb2dvXCIgPjxhIGhyZWY9XCIjXCI+U2lnbiBPdXQ8L2E+PC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmF2PlxuICAgIGBcbiAgICBsZXQgbmF2QmFyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLW5hdlwiKVxuICAgIG5hdkJhckNvbnRhaW5lci5pbm5lckhUTUwgPSBuYXZIVE1MXG5cbiAgICAvKk5hdmlnYXRpb24gbGluayBldmVudCBsaXN0ZW5lcnMqL1xuICAgICQoXCIjbWVzc2FnZXNMaW5rXCIpLmNsaWNrKGV2ZW50TGlzdGVuZXJzLm1lc3NhZ2VzTmF2TGluaylcbiAgICAkKFwiI2V2ZW50TGlua1wiKS5jbGljayhldmVudExpc3RlbmVycy5ldmVudHNOYXZMaW5rKVxuICAgICQoXCIjZnJpZW5kc0xpbmtcIikuY2xpY2soZXZlbnRMaXN0ZW5lcnMuZnJpZW5kc05hdkxpbmspXG4gICAgJChcIiN0YXNrc0xpbmtcIikuY2xpY2soZXZlbnRMaXN0ZW5lcnMudGFza3NOYXZMaW5rKVxuICAgICQoXCIjbmV3c0xpbmtcIikuY2xpY2soZXZlbnRMaXN0ZW5lcnMubmV3c05hdkxpbmspXG5cbiAgICAvKmFmdGVyIHNpZ25vdXQgaXMgY2xpY2tlZCBzZXNzaW9uIHN0b3JhZ2UgaXMgY2xlYXJlZCBhbmQgdGhlIGxvZ0luL3JlZ2lzdGVyIGZvcm0gaXMgcHJlc2VudGVkIGZyb20gaGVyZVxuICAgIGFub3RoZXIgdXNlciBjYW4gbG9nIGluIGFuZCBzZXNzaW9uIHN0b3JhZ2Ugd2lsbCBraWNrIG9mZiBmb3IgdGhlIG5ldyBsb2dnZWQgaW4gdXNlciovXG4gICAgJChcIi5zaWduT3V0XCIpLmNsaWNrKGV2ZW50TGlzdGVuZXJzLm5vbWFkTmF2TGluaylcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBkYXNoYm9hcmQiLCJjb25zdCBkb21Db21wb25lbnRzID0ge1xuICBjcmVhdGVEb21FbGVtZW50KHsgZWxlbWVudFR5cGUsIGNvbnRlbnQgPSBudWxsLCBjc3NDbGFzcywgYXR0cmlidXRlcyA9IHt9IH0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50VHlwZSk7XG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgaWYgKGNzc0NsYXNzKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3MpO1xuICAgIH1cbiAgICBmb3IgKGxldCBrZXkgaW4gYXR0cmlidXRlcykge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUNvbXBvbmVudHMiLCJpbXBvcnQgZXZlbnRzIGZyb20gXCIuL2V2ZW50c1wiO1xuXG5pbXBvcnQgbm9tYWREYXRhIGZyb20gXCIuL25vbWFkRGF0YVwiO1xuaW1wb3J0IGZyaWVuZHMgZnJvbSBcIi4vZnJpZW5kc1wiO1xuaW1wb3J0IG5ld3MgZnJvbSBcIi4vbmV3c1wiXG5pbXBvcnQgbWVzc2FnZXMgZnJvbSBcIi4vbWVzc2FnZXNcIjtcbmltcG9ydCBkYXNoQm9hcmQgZnJvbSBcIi4vZGFzaGJvYXJkXCJcbi8vIGltcG9ydCBkb21Db21wb25lbnRzIGZyb20gXCIuL2RvbUNvbXBvbmVudHNcIjtcbmltcG9ydCBldmVudExpc3RlbmVycyBmcm9tIFwiLi9ldmVudExpc3RlbmVyc1wiO1xuXG4vL0JVSUxEUyBOQUlHQVRJT05CQVIvL1xuLy8gZG9tQ29tcG9uZW50cy5jcmVhdGVOYXZCYXIoKVxuZGFzaEJvYXJkLmJ1aWxkTG9naW5Gb3JtKClcbiQoXCJtb2RhbEJ1dHRvblwiKS5jbGljayhldmVudExpc3RlbmVycy5tb2RhbERpc3BsYXlBbmltYXRpb24pXG5cbi8vTkVXUyBTRUNUSU9OXG4vLyBuZXdzLnNhdmUoKTtcbi8vIG5ld3MuYWxsU2F2ZWQoKTtcbi8vIG5ld3MuZ2V0TmV3cygpO1xuXG4vLyBuZXdzLm5ld3NFbGVtZW50Q3JlYXRvcigpO1xuLy8gbmV3cy5uZXdzRWxlbWVudENyZWF0b3IoKTtcblxuIiwiaW1wb3J0IGRhc2hib2FyZCBmcm9tIFwiLi9kYXNoYm9hcmRcIlxuaW1wb3J0IGRvbUNvbXBvbmVudHMgZnJvbSBcIi4vZG9tQ29tcG9uZW50c1wiO1xuaW1wb3J0IG5vbWFkRGF0YSBmcm9tIFwiLi9ub21hZERhdGFcIjtcbmltcG9ydCBldmVudHMgZnJvbSBcIi4vZXZlbnRzXCI7XG5pbXBvcnQgbWVzc2FnZXMgZnJvbSBcIi4vbWVzc2FnZXNcIjtcbmltcG9ydCBmcmllbmRzIGZyb20gXCIuL2ZyaWVuZHNcIjtcbmltcG9ydCBuZXdzIGZyb20gXCIuL25ld3NcIjtcbmltcG9ydCB0YXNrcyBmcm9tIFwiLi90YXNrc1wiO1xuXG5jb25zdCBldmVudExpc3RlbmVycyA9IHtcbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIExPR0lOIEZPUk06IHVzZXIgZW50ZXJzIFVzZXJuYW1lIGFuZCBQYXNzd29yZC4gd2hlbiBVc2VyIGNsaWNrcyBsb2dpbiwgdGhlIGlucHV0IGZpZWxkIGFuZCBOT01BRFMgaGVhZGVyIGRpc2FwcGVhclxuICAgIGFuZCB0aGUgdXNlciB3aWxsIGJlIGRpc3BsYXllZCB0aGUgXCJEYXNoYm9hcmRcIiBhbmQgdGhlIG5hdmlnYXRpb24gYmFyLiBVcG9uIGxvZ2luLCBzZXNzaW9uU3RvcmFnZSBpcyBzdGFydGVkLiBJbiB0aGUgQ29uc29sZVxuICAgIHlvdSB3aWxsIGJlIGFibGUgdG8gc2VlIFdobyBpcyBsb2dnZWQgaW4gYW5kIHdoYXQgdGhlaXIgdXNlcklkIGlzLiBpZS4gMSwyLDMsNCBldGMuXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgIHVzZXJMb2dpbigpe1xuICAgICAgICBsZXQgbG9nSW5WYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VzZXJOYW1lVmFsXCIpLnZhbHVlXG4gICAgICAgIGxldCBwYXNzd29yZFZhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFzc3dvcmRWYWxcIikudmFsdWVcbiAgICAgICAgLy9nZXQgdG8gY29tcGFyZVxuICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG5cbiAgICAgICAgXCJkYXRhU2V0XCIgOiBcInVzZXJzXCIsXG4gICAgICAgIFwiZmV0Y2hUeXBlXCIgOiBcIkdFVFwiLFxuICAgICAgICBcImVtYmVkSXRlbVwiIDogXCI/X2VtYmVkPXVzZXJzXCJcblxuICAgIH0pLnRoZW4ocGFyc2VkVXNlcnMgPT4ge1xuXG4gICAgICAgIHBhcnNlZFVzZXJzLmZvckVhY2godXNlciA9PiB7XG4gICAgICAgICAgICAgIC8qSWYgbG9naW4gY3JlZGVudGlhbHMgbWF0Y2ggdGhvc2UgaW4gZGF0YWJhc2UuanNvbi4gV2Ugd2FudCB0aGUgdXNlciB0byBiZSBkaXNwbGF5ZWQgdGhlaXIgXCJkYXNoYm9hZFwiXG4gICAgICAgICAgICAgIGFuZCBuYXZpZ2F0aW9uIGJhci4gU28gd2UgbmVlZCB0byBzZXQgZGlzcGxheSB0byBub25lIGFuZCBpbnZva2UgdGhlIGZ1bmN0aW9uIC0gY3JlYXRlTmF2QmFyKCkqL1xuICAgICAgICAgICAgaWYobG9nSW5WYWwgPT09IHVzZXIudXNlck5hbWUgJiYgcGFzc3dvcmRWYWwgPT09IHVzZXIucGFzc3dvcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9oaWRlcyBOT01BRCBoZWFkaW5nXG4gICAgICAgICAgICAgICAgICAgICQoXCIudC1ib3JkZXJcIikuaGlkZSgpXG4gICAgICAgICAgICAgICAgICAgIC8vaGlkZXMgdGhlIGZvcm1cbiAgICAgICAgICAgICAgICAgICAgJChcIi5mb3JtXCIpLmhpZGUoKVxuICAgICAgICAgICAgICAgICAgICAvL2Rpc3BsYXlzIG5hdmlnYXRpbiBiYXJcbiAgICAgICAgICAgICAgICAgICAgZGFzaGJvYXJkLmNyZWF0ZU5hdkJhcigpXG4gICAgICAgICAgICAgICAgICAgIC8vc2Vzc2lvbiBzdG9yYWdlXG5cbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInVzZXJJZFwiLCB1c2VyLmlkKVxuICAgICAgICAgICAgICAgICAgICBsZXQgdXNlcklkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKVxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nIHZlcmlmeWluZyB0aGF0IGNyZWRlbnRpYWxzIG1hdGNoIGFuZCB1c2VyIGlzIGxvZ2dlZCBpblxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvZ2dlZCBpbiBhc1wiICsgXCIgXCIgKyB1c2VyLnVzZXJOYW1lKVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInlvdXIgdXNlciBJRCBpczogXCIgKyB1c2VySWQpXG5cbiAgICAgICAgICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICAgICAgICAgICAgICAgIFwiZGF0YVNldFwiIDogXCJ1c2Vyc1wiLFxuICAgICAgICAgICAgICAgICAgICBcImZldGNoVHlwZVwiIDogXCJHRVRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRhQmFzZU9iamVjdFwiIDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJlbWJlZEl0ZW1cIiA6IFwiP19lbWJlZD11c2Vyc1wiXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbih1c2VycyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJzLmZvckVhY2godXNlciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodXNlci5pZCA9PT0gTnVtYmVyKHVzZXJJZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm91dHB1dFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldENvbnRhaW5lci5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogYHdlbGNvbWUgJHt1c2VyLnVzZXJOYW1lfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzOiBcIndlbGNvbWUtdXNlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgUkVHSVNUUkFUSU9OIEZPUk06IFdoZW4gcmVnaXN0ZXJpbmcgZm9yIGFuIGFjY291bnQgdGhlIHVzZXIgd2lsbCBlbnRlciBkZXNpcmVkIHVzZXJuYW1lLCBlbWFpbCwgYW5kIHBhc3N3b3JkXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgIHVzZXJSZWdpc3RyYXRpb24oKXtcbiAgICAgICAgbGV0IHJlZ1VzZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZWdVc2VyTmFtZVwiKS52YWx1ZVxuICAgICAgICBsZXQgcmVnRW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JlZ0VtYWlsXCIpLnZhbHVlXG4gICAgICAgIGxldCByZWdQYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVnUGFzc3dvcmRcIikudmFsdWVcbiAgICAgICAgLy8gbGV0IHJlZ0NvbmZpcm1QYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVnVXNlck5hbWVcIikudmFsdWVcblxuICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG5cbiAgICAgICAgICAgICAgICBcImRhdGFTZXRcIiA6IFwidXNlcnNcIixcbiAgICAgICAgICAgICAgICBcImZldGNoVHlwZVwiIDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgXCJkYXRhQmFzZU9iamVjdFwiIDoge1xuICAgICAgICAgICAgICAgICAgICBcInVzZXJOYW1lXCI6IHJlZ1VzZXJOYW1lLFxuICAgICAgICAgICAgICAgICAgICBcImVtYWlsXCI6IHJlZ0VtYWlsLFxuICAgICAgICAgICAgICAgICAgICBcInBhc3N3b3JkXCI6IHJlZ1Bhc3N3b3JkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkudGhlbihcbiAgICAgICAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcbiAgICAgICAgICAgICAgICBcImRhdGFTZXRcIiA6IFwidXNlcnNcIixcbiAgICAgICAgICAgICAgICBcImZldGNoVHlwZVwiIDogXCJHRVRcIixcbiAgICAgICAgICAgICAgICBcImVtYmVkSXRlbVwiIDogYD91c2VyTmFtZT0ke3JlZ1VzZXJOYW1lfWBcbiAgICAgICAgICAgIH0pLnRoZW4odXNlciA9PntcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyKVxuICAgICAgICAgICAgICAgIHVzZXIuZm9yRWFjaCggeCA9PntcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInVzZXJJZFwiLCB4LmlkKVxuXG4gICAgICAgICAgICAgICAgLy9oaWRlcyBOT01BRCBoZWFkaW5nXG4gICAgICAgICAgICAgICAgJChcIi50LWJvcmRlclwiKS5oaWRlKClcbiAgICAgICAgICAgICAgICAvL2hpZGVzIHRoZSBmb3JtXG4gICAgICAgICAgICAgICAgJChcIi5mb3JtXCIpLmhpZGUoKVxuICAgICAgICAgICAgICAgIC8vZGlzcGxheXMgbmF2aWdhdGluIGJhclxuICAgICAgICAgICAgICAgIGRhc2hib2FyZC5jcmVhdGVOYXZCYXIoKVxuICAgICAgICAgICAgICAgIGxldCB1c2VySWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyB2ZXJpZnlpbmcgdGhhdCBjcmVkZW50aWFscyBtYXRjaCBhbmQgdXNlciBpcyBsb2dnZWQgaW5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvZ2dlZCBpbiBhc1wiICsgXCIgXCIgKyB4LnVzZXJOYW1lKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwieW91ciB1c2VyIElEIGlzOiBcIiArIHVzZXJJZClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSkpXG4gICAgICAgIH0sXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBNT0RBTDogdXNlciB3aWxsIGNsaWNrIHRoZSBOT01BRCBNSVNTSU9OIGJ1dHRvbiBhbmQgYSBtb2RhbCB3aWxsIHBvcCB1cCBkZXNjcmliaW5nIHdoYXQgdGhlIGFwcGxpY2F0aW9uIGlzIGFib3V0XG4gICAgYW5kIHdobyBpdCBpcyB0YWlsb3JlZCB0b3dhcmRzXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgIG1vZGFsRGlzcGxheUFuaW1hdGlvbigpe1xuICAgICAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vbWFkTW9kYWxcIik7XG5cbiAgICAgICAgLy8gdGFyZ2V0IG1vZGFsIHRvIG9wZW4gaXRcbiAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxCdXR0b25cIik7XG5cbiAgICAgICAgLy8gR2V0IHRoZSA8c3Bhbj4gZWxlbWVudCB0aGF0IGNsb3NlcyB0aGUgbW9kYWxcbiAgICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2VcIilbMF07XG4gICAgICAgIC8vIFdoZW4gdGhlIHVzZXIgY2xpY2tzIHRoZSBidXR0b24sIG9wZW4gdGhlIG1vZGFsXG4gICAgICAgIGJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gV2hlbiB0aGUgdXNlciBjbGlja3Mgb24gPHNwYW4+ICh4KSwgY2xvc2UgdGhlIG1vZGFsXG4gICAgICAgIHNwYW4ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gV2hlbiB0aGUgdXNlciBjbGlja3MgYW55d2hlcmUgb3V0c2lkZSBvZiB0aGUgbW9kYWwsIGNsb3NlIGl0XG4gICAgICAgIHdpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQgPT0gbW9kYWwpIHtcbiAgICAgICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJChcIi5tZXNzYWdlIGFcIikuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgJChcImZvcm1cIikuYW5pbWF0ZSh7aGVpZ2h0OiBcInRvZ2dsZVwiLCBvcGFjaXR5OiBcInRvZ2dsZVwifSwgXCJzbG93XCIpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIE5BVkJBUiBMSSBFTElTVEVORVJTOiBXaGVuIHVzZXIgY2xpY2tzIGFuIGl0ZW0gaW4gdGhlIE5BVkJBUiB0aGUgY29udGVudCBhc3NvY2lhdGVkIHdpdGggdGhhdCB0YWIgd2lsbCBwb3B1bGF0ZSB0aGUgRE9NXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgIG1lc3NhZ2VzTmF2TGluaygpe1xuICAgICAgICBtZXNzYWdlcy5jcmVhdGVNZXNzYWdlQm9hcmQoKVxuICAgICAgICBjb25zb2xlLmxvZyhcIndvcmtpbmdcIilcbiAgICAgICAgZnJpZW5kcy5idWlsZEZyaWVuZFNlYXJjaEJhcigpXG5cbiAgICB9LFxuICAgIGV2ZW50c05hdkxpbmsoKXtcbiAgICAgICAgICAgIGV2ZW50cy5zaG93RXZlbnRGb3JtKClcbiAgICAgICAgICAgIGZyaWVuZHMuYnVpbGRGcmllbmRTZWFyY2hCYXIoKVxuICAgICAgICAgICAgLy9hcHBlbmRVc2VyRXZlbnRcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXZlbnRzIGNsaWNrZWRcIilcbiAgICB9LFxuICAgIGZyaWVuZHNOYXZMaW5rKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZnJpZW5kcyBuYXYgbGluayBjbGlja2VkXCIpXG4gICAgICAgIGZyaWVuZHMuZGVmaW5lQ3VycmVudFVzZXJzRnJpZW5kcygpO1xuICAgICAgICBmcmllbmRzLmluaXRpYWxpemVQb3RlbnRpYWxGcmllbmRzKCk7XG5cbiAgICB9LFxuICAgIG5ld3NOYXZMaW5rKCl7XG4gICAgICAgIC8vTkVXUyBTRUNUSU9OXG4gICAgICAgIG5ld3Muc2F2ZSgpO1xuICAgICAgICBuZXdzLmFsbFNhdmVkKCk7XG4gICAgICAgIG5ld3MuZ2V0TmV3cygpO1xuICAgICAgICBuZXdzLm5ld3NFbGVtZW50Q3JlYXRvcigpO1xuICAgICAgICBmcmllbmRzLmJ1aWxkRnJpZW5kU2VhcmNoQmFyKClcbiAgICAgICAgY29uc29sZS5sb2coXCJuZXdzIGxpbmsgY2xpY2tlZFwiKVxuICAgIH0sXG4gICAgdGFza3NOYXZMaW5rKCl7XG4gICAgICAgIHRhc2tzLmNyZWF0ZVRhc2tUYWJsZXMoKVxuICAgICAgICBmcmllbmRzLmJ1aWxkRnJpZW5kU2VhcmNoQmFyKClcbiAgICB9LFxuICAgIG5vbWFkTmF2TGluaygpe1xuICAgICAgICBkYXNoYm9hcmQuYnVpbGRMb2dpbkZvcm0oKVxuICAgICAgICAkKFwibmF2XCIpLmhpZGUoKVxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5jbGVhcigpXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2lnbmVkIG91dFwiKVxuICAgIH0sXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIEVORCBPRiBOQVZJR0FUSU9OIEVWRU5UTElTVEVORVJTXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuICAgIGZyaWVuZHNEZWxldGVGcmllbmQgKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQpO1xuXG4gICAgfSxcbiAgICBoYW5kbGVFdmVudFNhdmVCdXR0b24oKSB7XG4gICAgICAgIGNvbnN0IG5hbWVJbnB1dHRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXZlbnROYW1lXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBkYXRlSW5wdXR0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2V2ZW50RGF0ZVwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgdGltZUlucHV0dGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNldmVudFRpbWVcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uSW5wdXR0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2V2ZW50TG9jYXRpb25cIikudmFsdWU7XG5cbiAgICAgICAgY29uc3QgZXZlbnRPYmplY3QgPSB7XG4gICAgICAgICAgICBldmVudE5hbWU6IG5hbWVJbnB1dHRlZCxcbiAgICAgICAgICAgIGV2ZW50RGF0ZTogZGF0ZUlucHV0dGVkLFxuICAgICAgICAgICAgZXZlbnRUaW1lOiB0aW1lSW5wdXR0ZWQsXG4gICAgICAgICAgICBldmVudExvY2F0aW9uOiBsb2NhdGlvbklucHV0dGVkXG4gICAgICAgIH07XG5cblxuICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICAgICAgICBkYXRhU2V0OiBcImV2ZW50c1wiLFxuICAgICAgICAgICAgZmV0Y2hUeXBlOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGRhdGFCYXNlT2JqZWN0OiB7XG4gICAgICAgICAgICAgICAgdXNlcklkOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpLFxuICAgICAgICAgICAgICAgIGV2ZW50TmFtZTogZXZlbnRPYmplY3QuZXZlbnROYW1lLFxuICAgICAgICAgICAgICAgIGV2ZW50RGF0ZTogZXZlbnRPYmplY3QuZXZlbnREYXRlLFxuICAgICAgICAgICAgICAgIGV2ZW50VGltZTogZXZlbnRPYmplY3QuZXZlbnRUaW1lLFxuICAgICAgICAgICAgICAgIGV2ZW50TG9jYXRpb246IGV2ZW50T2JqZWN0LmV2ZW50TG9jYXRpb25cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oICgpID0+IHtcbiAgICAgICAgICAgIGV2ZW50cy5hcHBlbmRVc2VyRXZlbnRzKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGhhbmRsZUV2ZW50RGVsZXRlQnV0dG9uKCkge1xuICAgICAgICBjb25zdCBpZFRvRGVsZXRlID0gZXZlbnQudGFyZ2V0LmlkLnNwbGl0KFwiLS1cIilbMV07XG4gICAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcbiAgICAgICAgICAgIGRlbGV0ZUlkOiBpZFRvRGVsZXRlLFxuICAgICAgICAgICAgZGF0YVNldDogXCJldmVudHNcIixcbiAgICAgICAgICAgIGZldGNoVHlwZTogXCJERUxFVEVcIixcbiAgICAgICAgICAgIGRhdGFCYXNlT2JqZWN0OiB7XG4gICAgICAgICAgICAgICAgdXNlcklkOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKCAoKSA9PiB7XG4gICAgICAgICAgICBldmVudHMuYXBwZW5kVXNlckV2ZW50cygpO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBoYW5kbGVFdmVudEVkaXRCdXR0b24oKSB7XG4gICAgICAgIGNvbnN0IGlkVG9FZGl0ID0gZXZlbnQudGFyZ2V0LmlkLnNwbGl0KFwiLS1cIilbMV07XG4gICAgICAgIC8vIGNvbnN0IGV2ZW50T2JqZWN0ID1cbiAgICAgICAgZG9tQ29tcG9uZW50cy5jcmVhdGVFdmVudEVkaXRJbnB1dChpZFRvRWRpdCwgKVxuICAgIH0sXG4gICAgaGFuZGxlRXZlbnRVcGRhdGVCdXR0b24oKSB7XG5cbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBldmVudExpc3RlbmVycztcbiIsImltcG9ydCBub21hZERhdGEgZnJvbSBcIi4vbm9tYWREYXRhXCI7XG5pbXBvcnQgZXZlbnRzIGZyb20gXCIuL2V2ZW50c1wiO1xuLy8gaW1wb3J0IGRvbUNvbXBvbmVudHMgZnJvbSBcIi4vZG9tQ29tcG9uZW50c1wiO1xuXG5jb25zdCBldmVudFBhZ2VMaXN0ZW5lcnMgPSB7XG4gICAgaGFuZGxlU2hvd0J1dHRvbigpIHtcbiAgICAgICAgY29uc3Qgb3V0cHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvdXRwdXRcIik7XG4gICAgICAgIGNvbnN0IHNob3dCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Nob3dGb3JtXCIpO1xuICAgICAgICBvdXRwdXQucmVtb3ZlQ2hpbGQoc2hvd0J1dHRvbik7XG4gICAgICAgIGNvbnN0IGV2ZW50Rm9ybSA9IGV2ZW50cy5jcmVhdGVFdmVudElucHV0KCk7XG4gICAgICAgIG91dHB1dC5pbnNlcnRCZWZvcmUoZXZlbnRGb3JtLCBvdXRwdXQuZmlyc3RDaGlsZCk7XG4gICAgfSxcbiAgICBoYW5kbGVTYXZlQnV0dG9uKCkge1xuICAgICAgICBjb25zdCBuYW1lSW5wdXR0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2V2ZW50TmFtZVwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZGF0ZUlucHV0dGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNldmVudERhdGVcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IHRpbWVJbnB1dHRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXZlbnRUaW1lXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBsb2NhdGlvbklucHV0dGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNldmVudExvY2F0aW9uXCIpLnZhbHVlO1xuXG4gICAgICAgIGlmIChuYW1lSW5wdXR0ZWQgPT09IFwiXCIgfHwgZGF0ZUlucHV0dGVkID09PSBcIlwiIHx8IHRpbWVJbnB1dHRlZCA9PT0gXCJcIiB8fCBsb2NhdGlvbklucHV0dGVkID09PSBcIlwiKSB7XG4gICAgICAgICAgICBhbGVydChcIlBsZWFzZSBpbnB1dCBpbmZvcm1hdGlvbiBpbiBhbGwgZmllbGRzXCIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICAgICAgICAgICAgZGF0YVNldDogXCJldmVudHNcIixcbiAgICAgICAgICAgICAgICBmZXRjaFR5cGU6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgIGRhdGFCYXNlT2JqZWN0OiB7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZDogTnVtYmVyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIikpLFxuICAgICAgICAgICAgICAgICAgICBldmVudE5hbWU6IG5hbWVJbnB1dHRlZCxcbiAgICAgICAgICAgICAgICAgICAgZXZlbnREYXRlOiBkYXRlSW5wdXR0ZWQsXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50VGltZTogdGltZUlucHV0dGVkLFxuICAgICAgICAgICAgICAgICAgICBldmVudExvY2F0aW9uOiBsb2NhdGlvbklucHV0dGVkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnRzLmFwcGVuZFVzZXJBbmRGcmllbmRFdmVudHMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH0sXG4gICAgaGFuZGxlSGlkZUJ1dHRvbigpIHtcbiAgICAgICAgY29uc3Qgb3V0cHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvdXRwdXRcIik7XG4gICAgICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmV2ZW50SW5wdXRcIik7XG4gICAgICAgIG91dHB1dC5yZW1vdmVDaGlsZChmb3JtQ29udGFpbmVyKTtcbiAgICAgICAgZXZlbnRzLmFkZFNob3dCdXR0b24oKTtcbiAgICB9LFxuICAgIGhhbmRsZURlbGV0ZUJ1dHRvbigpIHtcbiAgICAgICAgY29uc3QgaWRUb0RlbGV0ZSA9IGV2ZW50LnRhcmdldC5pZC5zcGxpdChcIi0tXCIpWzFdO1xuICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICAgICAgICBkZWxldGVJZDogaWRUb0RlbGV0ZSxcbiAgICAgICAgICAgIGRhdGFTZXQ6IFwiZXZlbnRzXCIsXG4gICAgICAgICAgICBmZXRjaFR5cGU6IFwiREVMRVRFXCIsXG4gICAgICAgICAgICBkYXRhQmFzZU9iamVjdDoge1xuICAgICAgICAgICAgICAgIHVzZXJJZDogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAudGhlbiggKCkgPT4ge1xuICAgICAgICAgICAgZXZlbnRzLmFwcGVuZFVzZXJBbmRGcmllbmRFdmVudHMoKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBoYW5kbGVFZGl0QnV0dG9uKCkge1xuICAgICAgICBjb25zdCBpZFRvRWRpdCA9IGV2ZW50LnRhcmdldC5pZC5zcGxpdChcIi0tXCIpWzFdO1xuICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICAgICAgICBkYXRhU2V0OiBcImV2ZW50c1wiLFxuICAgICAgICAgICAgZmV0Y2hUeXBlOiBcIkdFVFwiLFxuICAgICAgICAgICAgZGF0YUJhc2VPYmplY3Q6IHtcbiAgICAgICAgICAgIHVzZXJJZDogTnVtYmVyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIikpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVtYmVkSXRlbTogYC8ke2lkVG9FZGl0fWBcbi8vIEFib3ZlIGlzIGEgYml0IG9mIGEgaGFja3kgc29sdXRpb24gaW4gb3JkZXIgdG8gZ2V0IGEgc3BlY2lmaWMgZXZlbnQuIE1heWJlIG5lZWQgdG8gYWRkIHNwZWNpZmljIGdldCBmdW5jdGlvbiB0byBub21hZERhdGFcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ocGFyc2VkUmVzcG9uc2UgPT4ge1xuICAgICAgICBldmVudHMuY3JlYXRlRXZlbnRFZGl0SW5wdXQoaWRUb0VkaXQsIHBhcnNlZFJlc3BvbnNlKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBoYW5kbGVVcGRhdGVCdXR0b24oKSB7XG4gICAgICAgIGNvbnN0IGVkaXRlZElkID0gZXZlbnQudGFyZ2V0LmlkLnNwbGl0KFwiLS1cIilbMV07XG5cbiAgICAgICAgY29uc3QgZWRpdGVkTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNlZGl0TmFtZS0tJHtlZGl0ZWRJZH1gKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZWRpdGVkRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNlZGl0RGF0ZS0tJHtlZGl0ZWRJZH1gKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZWRpdGVkVGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNlZGl0VGltZS0tJHtlZGl0ZWRJZH1gKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZWRpdGVkTG9jYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZWRpdExvY2F0aW9uLS0ke2VkaXRlZElkfWApLnZhbHVlO1xuXG4gICAgICAgIGlmIChlZGl0ZWROYW1lID09PSBcIlwiIHx8IGVkaXRlZERhdGUgPT09IFwiXCIgfHwgZWRpdGVkVGltZSA9PT0gXCJcIiB8fCBlZGl0ZWRMb2NhdGlvbiA9PT0gXCJcIikge1xuICAgICAgICAgICAgYWxlcnQoXCJQbGVhc2UgZG8gbm90IGxlYXZlIGVkaXQgZmllbGRzIGJsYW5rXCIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICAgICAgICAgICAgcHV0SWQ6IGVkaXRlZElkLFxuICAgICAgICAgICAgICAgIGRhdGFTZXQ6IFwiZXZlbnRzXCIsXG4gICAgICAgICAgICAgICAgZmV0Y2hUeXBlOiBcIlBVVFwiLFxuICAgICAgICAgICAgICAgIGRhdGFCYXNlT2JqZWN0OiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBlZGl0ZWRJZCxcbiAgICAgICAgICAgICAgICAgICAgdXNlcklkOiBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSksXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50TmFtZTogZWRpdGVkTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZXZlbnREYXRlOiBlZGl0ZWREYXRlLFxuICAgICAgICAgICAgICAgICAgICBldmVudFRpbWU6IGVkaXRlZFRpbWUsXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50TG9jYXRpb246IGVkaXRlZExvY2F0aW9uXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnRzLmFwcGVuZFVzZXJBbmRGcmllbmRFdmVudHMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZXZlbnRQYWdlTGlzdGVuZXJzOyIsIi8vIEF1dGhvcjogQ29sZSBCcnlhbnQgLyBQdXJwb3NlOlxuXG5pbXBvcnQgbm9tYWREYXRhIGZyb20gXCIuL25vbWFkRGF0YVwiO1xuaW1wb3J0IGRvbUNvbXBvbmVudHMgZnJvbSBcIi4vZG9tQ29tcG9uZW50c1wiO1xuaW1wb3J0IGV2ZW50UGFnZUxpc3RlbmVycyBmcm9tIFwiLi9ldmVudFBhZ2VMaXN0ZW5lcnNcIjtcblxuXG4vL2NyZWF0ZUV2ZW50SW5wdXQgYW5kIGNyZWF0ZUV2ZW50SXRlbSB3aWxsIGJlIGFkZGVkIHRvIHRoaXMgb2JqZWN0LiBzbyBkb21idWlsZGVyLlxuY29uc3QgZXZlbnRzID0ge1xuICBzaG93RXZlbnRGb3JtICgpIHtcbiAgICAkKFwiI291dHB1dFwiKS5lbXB0eSgpXG4gICAgY29uc3Qgb3V0cHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvdXRwdXRcIik7XG4gICAgY29uc3QgZXZlbnRzRm9ybSA9IHRoaXMuY3JlYXRlRXZlbnRJbnB1dCgpO1xuICAgIG91dHB1dC5hcHBlbmRDaGlsZChldmVudHNGb3JtKVxuICAgIGNvbnN0IGV2ZW50TG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIilcbiAgICBldmVudExvZy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImV2ZW50TG9nXCIpO1xuICAgIG91dHB1dC5hcHBlbmRDaGlsZChldmVudExvZyk7XG4gIH0sXG4gIGFkZFNob3dCdXR0b24oKSB7XG4gICAgY29uc3Qgb3V0cHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvdXRwdXRcIik7XG4gICAgY29uc3Qgc2hvd0J1dHRvbiA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiYnV0dG9uXCIsIGNvbnRlbnQ6IFwiQ3JlYXRlIGEgTmV3IEV2ZW50XCIsIGF0dHJpYnV0ZXM6IHt0eXBlOiBcImJ1dHRvblwiLCBpZDogXCJzaG93Rm9ybVwifX0pO1xuICAgIHNob3dCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50UGFnZUxpc3RlbmVycy5oYW5kbGVTaG93QnV0dG9uKTtcbiAgICBvdXRwdXQuaW5zZXJ0QmVmb3JlKHNob3dCdXR0b24sIG91dHB1dC5maXJzdENoaWxkKTtcbiAgfSxcbiAgYXBwZW5kVXNlckFuZEZyaWVuZEV2ZW50cygpIHtcbiAgICBjb25zdCBldmVudExvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXZlbnRMb2dcIik7XG4gICAgY29uc3QgZXZlbnRIb2xkZXIgPSBbXTtcbiAgICBjb25zdCB1c2VySG9sZGVyID0gW051bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpKV07XG4gICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xuICAgICAgZGF0YVNldDogXCJmcmllbmRzXCIsXG4gICAgICBmZXRjaFR5cGU6IFwiR0VUXCIsXG4gICAgICBkYXRhQmFzZU9iamVjdDogXCJcIixcbiAgICAgIGVtYmVkSXRlbTogXCI/X2VtYmVkPWV2ZW50c1wiXG4gICAgfSlcbiAgICAudGhlbihwYXJzZWRSZXNwb25zZSA9PiB7XG4gICAgICBwYXJzZWRSZXNwb25zZS5mb3JFYWNoKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYocmVzcG9uc2UudXNlcklkID09PSBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSkpIHtcbiAgICAgICAgICB1c2VySG9sZGVyLnB1c2gocmVzcG9uc2Uub3RoZXJGcmllbmRJZCk7XG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICAgdXNlckhvbGRlci5mb3JFYWNoKHVzZXJJZCA9PiB7XG4gICAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcbiAgICAgICAgICBkYXRhU2V0OiBcImV2ZW50c1wiLFxuICAgICAgICAgIGZldGNoVHlwZTogXCJHRVRcIixcbiAgICAgICAgICBkYXRhQmFzZU9iamVjdDogXCJcIixcbiAgICAgICAgICBlbWJlZEl0ZW06IGA/X3VzZXJJZD0ke3VzZXJJZH1gXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHBhcnNlZFJlc3BvbnNlID0+IHtcbiAgICAgICAgICBwYXJzZWRSZXNwb25zZS5mb3JFYWNoKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS51c2VySWQgPT09IHVzZXJJZCkge1xuICAgICAgICAgICAgICBldmVudEhvbGRlci5wdXNoKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29uc3Qgc29ydGVkRXZlbnRzID0gZXZlbnRIb2xkZXIuc29ydCggKGEsIGIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShhLmV2ZW50RGF0ZSkgLSBuZXcgRGF0ZShiLmV2ZW50RGF0ZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29uc3QgZG9jdUZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgICAgc29ydGVkRXZlbnRzLmZvckVhY2goZXZlbnQgPT4ge1xuICAgICAgICAgICAgd2hpbGUgKGV2ZW50TG9nLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgZXZlbnRMb2cucmVtb3ZlQ2hpbGQoZXZlbnRMb2cuZmlyc3RDaGlsZClcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBldmVudEl0ZW0gPSB0aGlzLmNyZWF0ZUV2ZW50SXRlbShldmVudCk7XG4gICAgICAgICAgICBkb2N1RnJhZy5hcHBlbmRDaGlsZChldmVudEl0ZW0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGV2ZW50TG9nLmFwcGVuZENoaWxkKGRvY3VGcmFnKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcbiAgY3JlYXRlRXZlbnRJbnB1dCgpIHtcblxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI291dHB1dFwiKVxuICAgIGNvbnN0IGZvcm1IZWFkZXIgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImgyXCIsIGNvbnRlbnQ6IFwiQWRkIGEgTmV3IEV2ZW50OlwifSk7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtSGVhZGVyKTtcbiAgICBjb25zdCBldmVudEZvcm0gPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImZvcm1cIiwgYXR0cmlidXRlczoge2NsYXNzOiBcImV2ZW50SW5wdXRcIn19KTtcbiAgICBjb25zdCBuYW1lRmllbGRzZXQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImZpZWxkc2V0XCJ9KTtcbiAgICBjb25zdCBuYW1lTGFiZWwgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImxhYmVsXCIsIGNvbnRlbnQ6IFwiRXZlbnQgTmFtZTpcIiwgYXR0cmlidXRlczoge2ZvcjogXCJldmVudE5hbWVcIn19KTtcbiAgICBjb25zdCBuYW1lSW5wdXQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImlucHV0XCIsIGF0dHJpYnV0ZXM6IHt0eXBlOiBcInRleHRcIiwgbmFtZTogXCJldmVudE5hbWVcIiwgaWQ6IFwiZXZlbnROYW1lXCJ9fSk7XG4gICAgbmFtZUZpZWxkc2V0LmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XG4gICAgbmFtZUZpZWxkc2V0LmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG5cbiAgICBjb25zdCBkYXRlRmllbGRzZXQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImZpZWxkc2V0XCJ9KTtcbiAgICBjb25zdCBkYXRlTGFiZWwgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImxhYmVsXCIsIGNvbnRlbnQ6IFwiRXZlbnQgRGF0ZTpcIiwgYXR0cmlidXRlczoge2ZvcjogXCJldmVudERhdGVcIn19KTtcbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImlucHV0XCIsIGF0dHJpYnV0ZXM6IHt0eXBlOiBcImRhdGVcIiwgbmFtZTogXCJldmVudERhdGVcIiwgaWQ6IFwiZXZlbnREYXRlXCJ9fSk7XG4gICAgZGF0ZUZpZWxkc2V0LmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gICAgZGF0ZUZpZWxkc2V0LmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG5cbiAgICBjb25zdCB0aW1lRmllbGRzZXQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImZpZWxkc2V0XCJ9KTtcbiAgICBjb25zdCB0aW1lTGFiZWwgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImxhYmVsXCIsIGNvbnRlbnQ6IFwiRXZlbnQgVGltZTpcIiwgYXR0cmlidXRlczoge2ZvcjogXCJldmVudFRpbWVcIn19KTtcbiAgICBjb25zdCB0aW1lSW5wdXQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImlucHV0XCIsIGF0dHJpYnV0ZXM6IHt0eXBlOiBcInRpbWVcIiwgbmFtZTogXCJldmVudFRpbWVcIiwgaWQ6IFwiZXZlbnRUaW1lXCJ9fSk7XG4gICAgdGltZUZpZWxkc2V0LmFwcGVuZENoaWxkKHRpbWVMYWJlbCk7XG4gICAgdGltZUZpZWxkc2V0LmFwcGVuZENoaWxkKHRpbWVJbnB1dCk7XG5cbiAgICBjb25zdCBsb2NhdGlvbkZpZWxkc2V0ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJmaWVsZHNldFwifSk7XG4gICAgY29uc3QgbG9jYXRpb25MYWJlbCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwibGFiZWxcIiwgY29udGVudDogXCJFbnRlciBMb2NhdGlvbjpcIiwgYXR0cmlidXRlczoge2ZvcjogXCJldmVudExvY2F0aW9uXCJ9fSk7XG4gICAgY29uc3QgbG9jYXRpb25JbnB1dCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiaW5wdXRcIiwgYXR0cmlidXRlczoge3R5cGU6IFwidGV4dFwiLCBuYW1lOiBcImV2ZW50TG9jYXRpb25cIiwgaWQ6IFwiZXZlbnRMb2NhdGlvblwifX0pO1xuICAgIGxvY2F0aW9uRmllbGRzZXQuYXBwZW5kQ2hpbGQobG9jYXRpb25MYWJlbCk7XG4gICAgbG9jYXRpb25GaWVsZHNldC5hcHBlbmRDaGlsZChsb2NhdGlvbklucHV0KTtcblxuICAgIGNvbnN0IHNhdmVCdXR0b24gPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImJ1dHRvblwiLCBjb250ZW50OiBcIlNhdmVcIiwgYXR0cmlidXRlczoge3R5cGU6IFwiYnV0dG9uXCIsIGlkOiBcInNhdmVFdmVudFwifX0pO1xuICAgIHNhdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50UGFnZUxpc3RlbmVycy5oYW5kbGVTYXZlQnV0dG9uKTtcblxuICAgIGNvbnN0IGhpZGVCdXR0b24gPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImJ1dHRvblwiLCBjb250ZW50OiBcIkhpZGUgRXZlbnQgSW5wdXRcIiwgYXR0cmlidXRlczoge3R5cGU6IFwiYnV0dG9uXCIsIGlkOiBcImhpZGVFdmVudFwifX0pO1xuICAgIGhpZGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50UGFnZUxpc3RlbmVycy5oYW5kbGVIaWRlQnV0dG9uKTtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGV2ZW50Rm9ybSlcbiAgICBldmVudEZvcm0uYXBwZW5kQ2hpbGQobmFtZUZpZWxkc2V0KTtcbiAgICBldmVudEZvcm0uYXBwZW5kQ2hpbGQoZGF0ZUZpZWxkc2V0KTtcbiAgICBldmVudEZvcm0uYXBwZW5kQ2hpbGQodGltZUZpZWxkc2V0KTtcbiAgICBldmVudEZvcm0uYXBwZW5kQ2hpbGQobG9jYXRpb25GaWVsZHNldCk7XG4gICAgZXZlbnRGb3JtLmFwcGVuZENoaWxkKHNhdmVCdXR0b24pO1xuICAgIGV2ZW50Rm9ybS5hcHBlbmRDaGlsZChoaWRlQnV0dG9uKTtcbiAgICAvLyBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGV2ZW50Rm9ybSlcbiAgICByZXR1cm4gZXZlbnRGb3JtO1xuICB9LFxuICBjcmVhdGVFdmVudEl0ZW0gKGV2ZW50T2JqZWN0KSB7XG4gICAgY29uc3QgZXZlbnRJdGVtID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJhcnRpY2xlXCIsIGF0dHJpYnV0ZXM6IHtjbGFzczogXCJldmVudEl0ZW1cIiwgaWQ6IGBldmVudEl0ZW0tLSR7ZXZlbnRPYmplY3QuaWR9YH19KTtcbiAgICBjb25zdCBldmVudEhlYWRlciA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiaDJcIiwgY29udGVudDogZXZlbnRPYmplY3QuZXZlbnROYW1lfSk7XG5cbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZXZlbnRPYmplY3QuZXZlbnREYXRlKTtcbiAgICBjb25zdCBkYXRpZnkgPSAoKSA9PiB7XG4gICAgICBjb25zdCBtb250aE5hbWVzID0gW1xuICAgICAgICBcIkphbnVhcnlcIixcbiAgICAgICAgXCJGZWJydWFyeVwiLFxuICAgICAgICBcIk1hcmNoXCIsXG4gICAgICAgIFwiQXByaWxcIixcbiAgICAgICAgXCJNYXlcIixcbiAgICAgICAgXCJKdW5lXCIsXG4gICAgICAgIFwiSnVseVwiLFxuICAgICAgICBcIkF1Z3VzdFwiLFxuICAgICAgICBcIlNlcHRlbWJlclwiLFxuICAgICAgICBcIk9jdG9iZXJcIixcbiAgICAgICAgXCJOb3ZlbWJlclwiLFxuICAgICAgICBcIkRlY2VtYmVyXCJcbiAgICAgIF07XG4gICAgICBjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKTtcbiAgICAgIGNvbnN0IG1vbnRoSW5kZXggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgcmV0dXJuIGAke21vbnRoTmFtZXNbbW9udGhJbmRleF19ICR7ZGF5fSwgJHt5ZWFyfWA7XG4gICAgfTtcblxuICAgIGNvbnN0IGxvbmdEYXRlID0gZGF0aWZ5KCk7XG5cbiAgICBjb25zdCBldmVudERhdGVUaW1lID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJwXCIsIGNvbnRlbnQ6IGBBdCAke2V2ZW50T2JqZWN0LmV2ZW50VGltZX0gb24gJHtsb25nRGF0ZX1gfSk7XG4gICAgY29uc3QgZXZlbnRMb2NhdGlvbiA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwicFwiLCBjb250ZW50OiBgTG9jYXRpb246ICR7ZXZlbnRPYmplY3QuZXZlbnRMb2NhdGlvbn1gfSk7XG5cbiAgICBldmVudEl0ZW0uYXBwZW5kQ2hpbGQoZXZlbnRIZWFkZXIpO1xuICAgIGV2ZW50SXRlbS5hcHBlbmRDaGlsZChldmVudERhdGVUaW1lKTtcbiAgICBldmVudEl0ZW0uYXBwZW5kQ2hpbGQoZXZlbnRMb2NhdGlvbik7XG5cbiAgICBpZiAoZXZlbnRPYmplY3QudXNlcklkID09PSBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSkpIHtcbiAgICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImJ1dHRvblwiLCBjb250ZW50OiBcIkVkaXRcIiwgYXR0cmlidXRlczoge3R5cGU6IFwiYnV0dG9uXCIsIGlkOiBgZWRpdEV2ZW50LS0ke2V2ZW50T2JqZWN0LmlkfWB9fSk7XG4gICAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudFBhZ2VMaXN0ZW5lcnMuaGFuZGxlRWRpdEJ1dHRvbik7XG4gICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImJ1dHRvblwiLCBjb250ZW50OiBcIkRlbGV0ZVwiLCBhdHRyaWJ1dGVzOiB7dHlwZTogXCJidXR0b25cIiwgaWQ6IGBkZWxldGVFdmVudC0tJHtldmVudE9iamVjdC5pZH1gfX0pO1xuICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudFBhZ2VMaXN0ZW5lcnMuaGFuZGxlRGVsZXRlQnV0dG9uKTtcbiAgICAgIGV2ZW50SXRlbS5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcbiAgICAgIGV2ZW50SXRlbS5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICAgIH07XG5cbiAgICByZXR1cm4gZXZlbnRJdGVtO1xuICB9LFxuICBjcmVhdGVFdmVudEVkaXRJbnB1dChjb250YWluZXJJZCwgZXZlbnRPYmplY3QpIHtcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJmb3JtXCIsIGF0dHJpYnVlczoge2NsYXNzOiBcImV2ZW50RWRpdFwifX0pO1xuICAgIGNvbnN0IGV2ZW50SGVhZGVyID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJoMlwiLCBjb250ZW50OiBldmVudE9iamVjdC5ldmVudE5hbWV9KTtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGV2ZW50SGVhZGVyKTtcblxuICAgIGNvbnN0IG5hbWVGaWVsZHNldCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiZmllbGRzZXRcIn0pO1xuICAgIGNvbnN0IG5hbWVMYWJlbCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwibGFiZWxcIiwgY29udGVudDogXCJFZGl0IE5hbWU6XCIsIGF0dHJpYnV0ZXM6IHtmb3I6IFwiZXZlbnROYW1lXCJ9fSk7XG4gICAgY29uc3QgbmFtZUlucHV0ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJpbnB1dFwiLCBhdHRyaWJ1dGVzOiB7dHlwZTogXCJ0ZXh0XCIsIG5hbWU6IFwiZXZlbnROYW1lXCIsIGlkOiBgZWRpdE5hbWUtLSR7Y29udGFpbmVySWR9YCwgdmFsdWU6IGV2ZW50T2JqZWN0LmV2ZW50TmFtZX19KTtcbiAgICBuYW1lRmllbGRzZXQuYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcbiAgICBuYW1lRmllbGRzZXQuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcblxuICAgIGNvbnN0IGRhdGVGaWVsZHNldCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiZmllbGRzZXRcIn0pO1xuICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwibGFiZWxcIiwgY29udGVudDogXCJFZGl0IERhdGU6XCIsIGF0dHJpYnV0ZXM6IHtmb3I6IFwiZXZlbnREYXRlXCJ9fSk7XG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJpbnB1dFwiLCBhdHRyaWJ1dGVzOiB7dHlwZTogXCJkYXRlXCIsIG5hbWU6IFwiZXZlbnREYXRlXCIsIGlkOiBgZWRpdERhdGUtLSR7Y29udGFpbmVySWR9YCwgdmFsdWU6IGV2ZW50T2JqZWN0LmV2ZW50RGF0ZX19KTtcbiAgICBkYXRlRmllbGRzZXQuYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcbiAgICBkYXRlRmllbGRzZXQuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcblxuICAgIGNvbnN0IHRpbWVGaWVsZHNldCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiZmllbGRzZXRcIn0pO1xuICAgIGNvbnN0IHRpbWVMYWJlbCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwibGFiZWxcIiwgY29udGVudDogXCJFZGl0IFRpbWU6XCIsIGF0dHJpYnV0ZXM6IHtmb3I6IFwiZXZlbnRUaW1lXCJ9fSk7XG4gICAgY29uc3QgdGltZUlucHV0ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJpbnB1dFwiLCBhdHRyaWJ1dGVzOiB7dHlwZTogXCJ0aW1lXCIsIG5hbWU6IFwiZXZlbnRUaW1lXCIsIGlkOiBgZWRpdFRpbWUtLSR7Y29udGFpbmVySWR9YCwgdmFsdWU6IGV2ZW50T2JqZWN0LmV2ZW50VGltZX19KTtcbiAgICB0aW1lRmllbGRzZXQuYXBwZW5kQ2hpbGQodGltZUxhYmVsKTtcbiAgICB0aW1lRmllbGRzZXQuYXBwZW5kQ2hpbGQodGltZUlucHV0KTtcblxuICAgIGNvbnN0IGxvY2F0aW9uRmllbGRzZXQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImZpZWxkc2V0XCJ9KTtcbiAgICBjb25zdCBsb2NhdGlvbkxhYmVsID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJsYWJlbFwiLCBjb250ZW50OiBcIkVkaXQgTG9jYXRpb246XCIsIGF0dHJpYnV0ZXM6IHtmb3I6IFwiZXZlbnRMb2NhdGlvblwifX0pO1xuICAgIGNvbnN0IGxvY2F0aW9uSW5wdXQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImlucHV0XCIsIGF0dHJpYnV0ZXM6IHt0eXBlOiBcInRleHRcIiwgbmFtZTogXCJldmVudExvY2F0aW9uXCIsIGlkOiBgZWRpdExvY2F0aW9uLS0ke2NvbnRhaW5lcklkfWAsIHZhbHVlOiBldmVudE9iamVjdC5ldmVudExvY2F0aW9ufX0pO1xuICAgIGxvY2F0aW9uRmllbGRzZXQuYXBwZW5kQ2hpbGQobG9jYXRpb25MYWJlbCk7XG4gICAgbG9jYXRpb25GaWVsZHNldC5hcHBlbmRDaGlsZChsb2NhdGlvbklucHV0KTtcblxuICAgIGNvbnN0IHVwZGF0ZUJ1dHRvbiA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiYnV0dG9uXCIsIGNvbnRlbnQ6IFwiVXBkYXRlXCIsIGF0dHJpYnV0ZXM6IHt0eXBlOiBcImJ1dHRvblwiLCBpZDogYHN1Ym1pdEVkaXRzLS0ke2NvbnRhaW5lcklkfWB9fSk7XG4gICAgdXBkYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudFBhZ2VMaXN0ZW5lcnMuaGFuZGxlVXBkYXRlQnV0dG9uKTtcblxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQobmFtZUZpZWxkc2V0KTtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVGaWVsZHNldCk7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aW1lRmllbGRzZXQpO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQobG9jYXRpb25GaWVsZHNldCk7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZCh1cGRhdGVCdXR0b24pO1xuXG4gICAgbGV0IGN1cnJlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZXZlbnRJdGVtLS0ke2NvbnRhaW5lcklkfWApO1xuICAgIHdoaWxlIChjdXJyZW50Q29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGN1cnJlbnRDb250YWluZXIucmVtb3ZlQ2hpbGQoY3VycmVudENvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICB9O1xuICAgIGN1cnJlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG4gIH1cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgZXZlbnRzOyIsImltcG9ydCBub21hZERhdGEgZnJvbSBcIi4vbm9tYWREYXRhXCJcbmltcG9ydCBkb21Db21wb25lbnRzIGZyb20gXCIuL2RvbUNvbXBvbmVudHNcIjtcbmltcG9ydCBmcmllbmRzRXZlbnRzTGlzdGVuZXIgZnJvbSBcIi4vZnJpZW5kc0V2ZW50c0xpc3RlbmVyXCI7XG5cbmNvbnN0IGZyaWVuZHMgPSB7XG5cblxuICBkZWZpbmVDdXJyZW50VXNlcnNGcmllbmRzICgpIHtcbiAgICAkKFwiI291dHB1dFwiKS5lbXB0eSgpXG4gICAgY29uc3QgY3VycmVudFVzZXIgPSAxO1xuICAgIGxldCB1c2VySWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKTtcbiAgICAvLyBsZXQgY3VycmVudFVzZXIgPSBOdW1iZXIodXNlcklkKTtcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50VXNlciwgdXNlcklkKVxuICAgIGNvbnN0IHRhcmdldENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3V0cHV0XCIpXG4gICAgdGFyZ2V0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICBlbGVtZW50VHlwZTogXCJzZWN0aW9uXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGlkOiBcImFsbEZyaWVuZENvbnRhaW5lclwiLFxuICAgICAgfVxuICAgIH0pKVxuICAgIGNvbnN0IGFsbEZyaWVuZENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxsRnJpZW5kQ29udGFpbmVyXCIpO1xuICAgIGFsbEZyaWVuZENvbnRhaW5lci5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgZWxlbWVudFR5cGU6IFwiaDJcIixcbiAgICAgIGNvbnRlbnQ6IFwiZnJpZW5kczpcIixcbiAgICAgIGNzc0NsYXNzOiBcImZyaWVuZFRhZ1wiXG4gICAgfSkpXG5cbiAgICBsZXQgZnJpZW5kSG9sZGVyID0gW107XG5cbi8vIFBVTEwgRlJPTSBGUklFTkRTIEpTT04tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbm5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcblwiZGF0YVNldFwiIDogXCJmcmllbmRzXCIsXG5cImZldGNoVHlwZVwiIDogXCJHRVRcIixcblwiZGF0YUJhc2VPYmplY3RcIiA6IFwiXCIsXG5cImVtYmVkSXRlbVwiIDogXCI/X2VtYmVkPWV2ZW50c1wifSlcbi50aGVuKGZyb21GcmllbmRzID0+IHtcbiAgLy8gY29uc29sZS5sb2coZnJvbUZyaWVuZHMpXG4gIGZyb21GcmllbmRzLmZvckVhY2goZnJpZW5kRGF0YSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coZnJpZW5kRGF0YSlcbiAgICBpZiAoZnJpZW5kRGF0YS51c2VySWQgPT09IGN1cnJlbnRVc2VyKSB7XG4gICAgICBmcmllbmRIb2xkZXIucHVzaChmcmllbmREYXRhLm90aGVyRnJpZW5kSWQpXG4gICAgfVxuICB9KVxuICBmcmllbmRIb2xkZXIuZm9yRWFjaChvZmZpY2lhbEZyaWVuZCA9PiB7XG4gICAgdGhpcy5sb2FkQ3VycmVudFVzZXJzRnJpZW5kcyhvZmZpY2lhbEZyaWVuZClcbiAgfSlcbn0pXG59LFxubG9hZEN1cnJlbnRVc2Vyc0ZyaWVuZHMgKGZyaWVuZCkge1xuICAvLyBQVUxMIEZST00gVVNFUlMgSlNPTiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBjb25zb2xlLmxvZyhmcmllbmQpXG4gICAgICBjb25zdCBhbGxGcmllbmRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsbEZyaWVuZENvbnRhaW5lclwiKVxuICAgICAgYWxsRnJpZW5kQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImFydGljbGVcIixcbiAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgIGNsYXNzOiBcImZyaWVuZC1jb250YWluZXJcIixcbiAgICAgICAgICBpZDogYGZyaWVuZC0ke2ZyaWVuZH1gXG4gICAgICAgIH1cbiAgICAgIH0pKVxuICAgICAgY29uc3QgZnJpZW5kQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGZyaWVuZC0ke2ZyaWVuZH1gKVxuICAgIC8vIEdFVCBBIEJPWCBIRVJFIFRIQVQgQ09OVEFJTlMgVklTVUFMIE9GIEZSSUVORFNcblxuICAgICAgbGV0IGZyaWVuZERvbUJ1aWxkZXIgPSBbXTtcbiAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcbiAgICAgIFwiZGF0YVNldFwiIDogXCJ1c2Vyc1wiLFxuICAgICAgXCJmZXRjaFR5cGVcIiA6IFwiR0VUXCIsXG4gICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiBcIlwiLFxuICAgICAgXCJlbWJlZEl0ZW1cIiA6IFwiP19lbWJlZD1ldmVudHNcIn0pXG4gICAgICAudGhlbihmcm9tVXNlckRhdGEgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhmcm9tVXNlckRhdGEpO1xuICAgICAgICBmcm9tVXNlckRhdGEuZm9yRWFjaCh1c2VySW5mbyA9PiB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coZnJpZW5kLCB1c2VySW5mby5pZClcbiAgICAgICAgICBpZiAodXNlckluZm8uaWQgPT09IGZyaWVuZCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codXNlckluZm8udXNlck5hbWUpO1xuICAgICAgICAgICAgY29uc3QgZnJpZW5kSWRlbnRpZmllciA9IHtcbiAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiaDJcIixcbiAgICAgICAgICAgICAgY29udGVudDogdXNlckluZm8udXNlck5hbWUsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmcmllbmREb21CdWlsZGVyLnB1c2goZnJpZW5kSWRlbnRpZmllcilcbiAgICAgICAgICAgIC8vIFBVTEwgRlJPTSBFVkVOVFMgSlNPTiAtLS0tLS1cbiAgICAgICAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcbiAgICAgICAgICAgICAgICBcImRhdGFTZXRcIiA6IFwiZXZlbnRzXCIsXG4gICAgICAgICAgICBcImZldGNoVHlwZVwiIDogXCJHRVRcIixcbiAgICAgICAgICAgIFwiZGF0YUJhc2VPYmplY3RcIiA6IFwiXCIsXG4gICAgICAgICAgICBcImVtYmVkSXRlbVwiIDogXCI/X2VtYmVkPWV2ZW50c1wifSlcbiAgICAgICAgICAgIC50aGVuKGV2ZW50cyA9PiB7XG4gICAgICAgICAgICAgIGV2ZW50cy5mb3JFYWNoKGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQudXNlcklkID09PSBmcmllbmQpIHtcbiAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50LmV2ZW50TmFtZSk7XG4gICAgICAgICAgICAgICAgICBjb25zdCBldmVudEhvbGRlciA9IHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwicFwiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBgRVZFTlQ6ICR7ZXZlbnQuZXZlbnROYW1lfSBvbiAke2V2ZW50LmV2ZW50RGF0ZX1gLFxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IGBldmVudC0ke2V2ZW50LmlkfWAsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGZyaWVuZERvbUJ1aWxkZXIucHVzaChldmVudEhvbGRlcilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy8gUFVMTCBGUk9NIE5FV1NJVEVNUyBKU09OIC0tLS0tLVxuICAgICAgICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xuICAgICAgICAgICAgXCJkYXRhU2V0XCIgOiBcIm5ld3NpdGVtc1wiLFxuICAgICAgICAgICAgXCJmZXRjaFR5cGVcIiA6IFwiR0VUXCIsXG4gICAgICAgICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiBcIlwiLFxuICAgICAgICAgICAgXCJlbWJlZEl0ZW1cIiA6IFwiP19lbWJlZD1uZXdzaXRlbXNcIn0pXG4gICAgICAgICAgICAudGhlbihuZXdzU2hpeiA9PiB7XG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG5ld3NTaGl6KVxuICAgICAgICAgICAgICBuZXdzU2hpei5mb3JFYWNoKHVzZXJTcGVjaWZpY0FydGljbGVzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodXNlclNwZWNpZmljQXJ0aWNsZXMudXNlcklkID09PSBmcmllbmQpIHtcbiAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXJTcGVjaWZpY0FydGljbGVzLnRpdGxlKVxuICAgICAgICAgICAgICAgICAgY29uc3QgYXJ0aWNsZUhvbGRlciA9IHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwicFwiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBgQVJUSUNMRTogJHt1c2VyU3BlY2lmaWNBcnRpY2xlcy50aXRsZX1gLFxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IGBhcnRpY2xlLSR7dXNlclNwZWNpZmljQXJ0aWNsZXMuaWR9YCxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgZnJpZW5kRG9tQnVpbGRlci5wdXNoKGFydGljbGVIb2xkZXIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhmcmllbmREb21CdWlsZGVyKVxuICAgICAgICAgICAgICBmcmllbmREb21CdWlsZGVyLmZvckVhY2gob2JqZWN0ID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvYmplY3QpO1xuICAgICAgICAgICAgICAgIGZyaWVuZENvbnRhaW5lci5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQob2JqZWN0KSlcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgY29uc3QgZGVsZXRlRnJpZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgICAgICAgICAgICBkZWxldGVGcmllbmQuY2xhc3NMaXN0LmFkZChgZGVsZXRlLWZyaWVuZC0ke2ZyaWVuZH1gKVxuICAgICAgICAgICAgICBkZWxldGVGcmllbmQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKVxuICAgICAgICAgICAgICBkZWxldGVGcmllbmQudGV4dENvbnRlbnQgPSBcIkRFTEVURVwiO1xuICAgICAgICAgICAgICBmcmllbmRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlRnJpZW5kKTtcbiAgICAgICAgICAgICAgZGVsZXRlRnJpZW5kLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZnJpZW5kc0V2ZW50c0xpc3RlbmVyLmZyaWVuZHNEZWxldGVGcmllbmQoKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuXG4gIH0sXG4gIGluaXRpYWxpemVQb3RlbnRpYWxGcmllbmRzICgpIHtcbiAgICBsZXQgdXNlcklkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyk7XG4gICAgbGV0IGN1cnJlbnRVc2VyID0gTnVtYmVyKHVzZXJJZCk7XG4gICAgLy8gY29uc29sZS5sb2coXCJmcmllbmRzIFBhZ2UgdXNlciBpZCBpcy1cIixjdXJyZW50VXNlcik7XG5cbiAgICBjb25zdCB0YXJnZXRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm91dHB1dFwiKTtcbiAgICBjb25zdCBmaW5kTmV3RnJpZW5kQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgbGV0IGZyaWVuZHNJSGF2ZSA9IFtdO1xuICAgIGZpbmROZXdGcmllbmRDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmdXR1cmUtZnJpZW5kc1wiKTtcbiAgICB0YXJnZXRDb250YWluZXIuYXBwZW5kQ2hpbGQoZmluZE5ld0ZyaWVuZENvbnRhaW5lcik7XG4gICAgY29uc3QgZmluZE5ld0ZyaWVuZFRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcbiAgICBmaW5kTmV3RnJpZW5kQ29udGFpbmVyLmFwcGVuZENoaWxkKGZpbmROZXdGcmllbmRUYWcpO1xuICAgIGZpbmROZXdGcmllbmRUYWcuY2xhc3NMaXN0LmFkZChcImZyaWVuZFRvQmVcIik7XG4gICAgZmluZE5ld0ZyaWVuZFRhZy50ZXh0Q29udGVudCA9IFwiZnJpZW5kIHRvIGJlOlwiXG5cbiAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICBcImRhdGFTZXRcIiA6IFwiZnJpZW5kc1wiLFxuICAgICAgXCJmZXRjaFR5cGVcIiA6IFwiR0VUXCIsXG4gICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiBcIlwiLFxuICAgICAgXCJlbWJlZEl0ZW1cIiA6IFwiP19lbWJlZD1mcmllbmRzXCJcbiAgICB9KVxuICAgIC50aGVuKGZyb21GcmllbmRzID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGZyb21GcmllbmRzKVxuICAgICAgZnJvbUZyaWVuZHMuZm9yRWFjaChmcmllbmREYXRhID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZnJpZW5kRGF0YSlcbiAgICAgICAgaWYgKGZyaWVuZERhdGEudXNlcklkID09PSBjdXJyZW50VXNlcikge1xuICAgICAgICAgIGZyaWVuZHNJSGF2ZS5wdXNoKGZyaWVuZERhdGEub3RoZXJGcmllbmRJZClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC8vIGNvbnNvbGUubG9nKGZyaWVuZHNJSGF2ZSlcblxuICAgICAgICB0aGlzLnNob3dVc2VyUG90ZW50aWFsRnJpZW5kcyhmcmllbmRzSUhhdmUpXG4gICAgfSlcbiAgfSxcbiAgc2hvd1VzZXJQb3RlbnRpYWxGcmllbmRzIChmcmllbmQpIHtcbiAgICBsZXQgdXNlcklkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyk7XG4gICAgbGV0IGN1cnJlbnRVc2VyID0gTnVtYmVyKHVzZXJJZCk7XG4gICAgLy8gY29uc29sZS5sb2coZnJpZW5kKVxuICAgIGxldCBhbGxUaGVVc2VycyA9IFtdXG4gICAgZnJpZW5kLnB1c2goY3VycmVudFVzZXIpXG4gICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xuICAgICAgXCJkYXRhU2V0XCIgOiBcInVzZXJzXCIsXG4gICAgICBcImZldGNoVHlwZVwiIDogXCJHRVRcIixcbiAgICAgIFwiZGF0YUJhc2VPYmplY3RcIiA6IFwiXCIsXG4gICAgICBcImVtYmVkSXRlbVwiIDogXCI/X2VtYmVkPXVzZXJzXCJcbiAgICB9KVxuICAgIC50aGVuKGFsbFVzZXJzID0+IHtcbiAgICAgIGFsbFVzZXJzLmZvckVhY2godXNlciA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXIuaWQpXG4gICAgICAgIGFsbFRoZVVzZXJzLnB1c2godXNlci5pZClcbiAgICAgIH0pXG4gICAgICBjb25zb2xlLmxvZyhcImV2ZXJ5b25lXCIsYWxsVGhlVXNlcnMsIFwidXNlciBhbmQgZnJpZW5kc1wiLGZyaWVuZClcbiAgICAgIGxldCBub3RDdXJyZW50RnJpZW5kID0gdGhpcy5kaWZmZXJlbmNlT2YyQXJyYXlzKGFsbFRoZVVzZXJzLCBmcmllbmQpXG4gICAgICBub3RDdXJyZW50RnJpZW5kLmZvckVhY2gobm9GcmllbmRPZk1pbmUgPT4ge1xuICAgICAgICB0aGlzLnByaW50UG90ZW50aWFsRnJpZW5kc1RvQnJvd3Nlcihub0ZyaWVuZE9mTWluZSlcblxuICAgICAgfSlcbiAgICB9KVxuICB9LFxuICAgZGlmZmVyZW5jZU9mMkFycmF5cyAoYXJyYXkxLCBhcnJheTIpIHtcbiAgICB2YXIgdGVtcCA9IFtdO1xuICAgIGFycmF5MSA9IGFycmF5MS50b1N0cmluZygpLnNwbGl0KCcsJykubWFwKE51bWJlcik7XG4gICAgYXJyYXkyID0gYXJyYXkyLnRvU3RyaW5nKCkuc3BsaXQoJywnKS5tYXAoTnVtYmVyKTtcblxuICAgIGZvciAodmFyIGkgaW4gYXJyYXkxKSB7XG4gICAgaWYoYXJyYXkyLmluZGV4T2YoYXJyYXkxW2ldKSA9PT0gLTEpIHRlbXAucHVzaChhcnJheTFbaV0pO1xuICAgIH1cbiAgICBmb3IoaSBpbiBhcnJheTIpIHtcbiAgICBpZihhcnJheTEuaW5kZXhPZihhcnJheTJbaV0pID09PSAtMSkgdGVtcC5wdXNoKGFycmF5MltpXSk7XG4gICAgfVxuICAgIHJldHVybiB0ZW1wLnNvcnQoKGEsYikgPT4gYS1iKTtcbiAgICB9LFxuICAgIHByaW50UG90ZW50aWFsRnJpZW5kc1RvQnJvd3NlciAobm90QUZyaWVuZCkge1xuICAgICAgLy8gY29uc29sZS5sb2cobm90QUZyaWVuZClcbiAgICAgIGNvbnN0IHRhcmdldFNlY3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZ1dHVyZS1mcmllbmRzXCIpO1xuICAgICAgdGFyZ2V0U2VjdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICBlbGVtZW50VHlwZTogXCJkaXZcIixcbiAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgIGlkOiBgcG90ZW50aWFsRnJpZW5kLSR7bm90QUZyaWVuZH1gXG4gICAgICAgIH1cbiAgICAgIH0pKVxuXG4gICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICAgIFwiZGF0YVNldFwiIDogXCJ1c2Vyc1wiLFxuICAgICAgICBcImZldGNoVHlwZVwiIDogXCJHRVRcIixcbiAgICAgICAgXCJkYXRhQmFzZU9iamVjdFwiIDogXCJcIixcbiAgICAgICAgXCJlbWJlZEl0ZW1cIiA6IFwiP19lbWJlZD11c2Vyc1wiXG4gICAgICB9KVxuICAgICAgLnRoZW4odXNlcnNJbmZvID0+IHtcbiAgICAgICAgdXNlcnNJbmZvLmZvckVhY2godXNlciA9PiB7XG4gICAgICAgICAgaWYgKHVzZXIuaWQgPT09IG5vdEFGcmllbmQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXIuaWQsIFwiaXMgbm8gZnJpZW5kXCIpXG4gICAgICAgICAgICBjb25zdCBwb3RlbnRpYWxGcmllbmRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcG90ZW50aWFsRnJpZW5kLSR7bm90QUZyaWVuZH1gKVxuICAgICAgICAgICAgcG90ZW50aWFsRnJpZW5kQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnaDInLFxuICAgICAgICAgICAgICBjb250ZW50OiB1c2VyLnVzZXJOYW1lLFxuICAgICAgICAgICAgICBjc3NDbGFzczogYHBvdGVudGlhbC1mcmllbmQtJHt1c2VyLmlkfWBcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgcG90ZW50aWFsRnJpZW5kQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICBjb250ZW50OiBcIkFkZCBGcmllbmRcIixcbiAgICAgICAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgICAgICAgIGlkOiBgYWRkLWZyaWVuZC1idXR0b24tJHt1c2VyLmlkfWAsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICBjbGFzczogXCJhZGQtZnJpZW5kLWJ1dHRvblwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgY29uc3QgZm9yQWRkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGFkZC1mcmllbmQtYnV0dG9uLSR7dXNlci5pZH1gKTtcbiAgICAgICAgICAgIGZvckFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICBmcmllbmRzRXZlbnRzTGlzdGVuZXIuZnJpZW5kc0FkZEZyaWVuZCgpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICAvLyBjb25zb2xlLmxvZyhub3RBRnJpZW5kKVxuICAgIH0sXG4gICAgZnJpZW5kU29ydEZyb21NZXNzYWdlc1NlY3Rpb24gKGFycmF5T2ZGcmllbmRzLCBmcmllbmRUb0FkZCwgZnJpZW5kVG9BZGROYW1lKSB7XG4gICAgICBsZXQgdXNlcklkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyk7XG4gICAgICBsZXQgY3VycmVudFVzZXIgPSBOdW1iZXIodXNlcklkKTtcbiAgICAgIGFycmF5T2ZGcmllbmRzLnB1c2goY3VycmVudFVzZXIpXG4gICAgICBsZXQgYXJyYXlPZlVzZXJzID0gW11cbiAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcbiAgICAgICAgXCJkYXRhU2V0XCIgOiBcInVzZXJzXCIsXG4gICAgICAgIFwiZmV0Y2hUeXBlXCIgOiBcIkdFVFwiLFxuICAgICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiBcIlwiLFxuICAgICAgICBcImVtYmVkSXRlbVwiIDogXCI/X2VtYmVkPWV2ZW50c1wifSlcbiAgICAgICAgLnRoZW4odXNlcnMgPT4ge1xuICAgICAgICAgIHVzZXJzLmZvckVhY2godXNlciA9PiB7XG4gICAgICAgICAgICBhcnJheU9mVXNlcnMucHVzaCh1c2VyLmlkKVxuICAgICAgICAgIH0pXG4gICAgICAgICAgbGV0IG5vdEZyaWVuZHNMaXN0ID0gdGhpcy5jb21wYXJlTWVzc2FnZUZyaWVuZEFycmF5cyhhcnJheU9mVXNlcnMsIGFycmF5T2ZGcmllbmRzKVxuICAgICAgICAgIHRoaXMubWVzc2VuZ2VyQWRkZnJpZW5kRmluYWxlKG5vdEZyaWVuZHNMaXN0LCBmcmllbmRUb0FkZCwgZnJpZW5kVG9BZGROYW1lKVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgY29tcGFyZU1lc3NhZ2VGcmllbmRBcnJheXMgKGFycmF5MSwgYXJyYXkyKSB7XG4gICAgICB2YXIgdGVtcCA9IFtdO1xuICAgICAgYXJyYXkxID0gYXJyYXkxLnRvU3RyaW5nKCkuc3BsaXQoJywnKS5tYXAoTnVtYmVyKTtcbiAgICAgIGFycmF5MiA9IGFycmF5Mi50b1N0cmluZygpLnNwbGl0KCcsJykubWFwKE51bWJlcik7XG5cbiAgICAgIGZvciAodmFyIGkgaW4gYXJyYXkxKSB7XG4gICAgICBpZihhcnJheTIuaW5kZXhPZihhcnJheTFbaV0pID09PSAtMSkgdGVtcC5wdXNoKGFycmF5MVtpXSk7XG4gICAgICB9XG4gICAgICBmb3IoaSBpbiBhcnJheTIpIHtcbiAgICAgIGlmKGFycmF5MS5pbmRleE9mKGFycmF5MltpXSkgPT09IC0xKSB0ZW1wLnB1c2goYXJyYXkyW2ldKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0ZW1wLnNvcnQoKGEsYikgPT4gYS1iKTtcbiAgICB9LFxuICAgIG1lc3NlbmdlckFkZGZyaWVuZEZpbmFsZSAobm90ZnJpZW5kcywgd2FudGVkRnJpZW5kLCBmcmllbmRUb0FkZE5hbWUpIHtcbiAgICAgIGNvbnNvbGUubG9nKG5vdGZyaWVuZHMsIE51bWJlcih3YW50ZWRGcmllbmQpKVxuICAgICAgY29uc3QgZmluYWxGcmllbmQgPSBub3RmcmllbmRzLmZpbHRlcihmcmllbmRzVGhhdEFyZW50ID0+IGZyaWVuZHNUaGF0QXJlbnQgPT09IE51bWJlcih3YW50ZWRGcmllbmQpKVxuICAgICAgLy8gY29uc29sZS5sb2coZmluYWxGcmllbmRbMF0sIE51bWJlcih3YW50ZWRGcmllbmQpKVxuICAgICAgaWYgKGZpbmFsRnJpZW5kWzBdID09PSBOdW1iZXIod2FudGVkRnJpZW5kKSkge1xuICAgICAgICBpZiAoZnJpZW5kVG9BZGROYW1lID09PSBcIm1vZGFsXCIpIHtcbiAgICAgICAgICBmcmllbmRzRXZlbnRzTGlzdGVuZXIuc2VhcmNoQmFyQWRkRnJpZW5kVG9Kc29uKGZpbmFsRnJpZW5kKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubW9kYWxRdWVzdGlvbmFpcmVPZkZyaWVuZHNoaXBWYWxpZGl0eSh3YW50ZWRGcmllbmQsZnJpZW5kVG9BZGROYW1lKVxuICAgICAgICB9Ly8gYWxlcnQoYFlvdSd2ZSBhZGRlZCBhIGZlbGxvdyBOb21hZCAke2ZyaWVuZFRvQWRkTmFtZX0geW91ciBmcmllbmQgbGlzdGApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydChcIlVoLi4uLiBZb3UgY2FuJ3QgZnJpZW5kIHRoZXJlIChpdCdzIHlvdSBvciBzb21lb25lIHdobydzIGFscmVhZHkgYSBmcmllbmQpLlwiKVxuICAgICAgfVxuICAgIH0sXG4gICAgbW9kYWxRdWVzdGlvbmFpcmVPZkZyaWVuZHNoaXBWYWxpZGl0eSAod2FudGVkRnJpZW5kLCBmcmllbmRUb0FkZE5hbWUpIHtcblxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdXRwdXRcIikuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgZWxlbWVudFR5cGU6IFwic2VjdGlvblwiLFxuICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgaWQ6IFwibW9kYWwtY29udGFpbmVyXCJcbiAgICAgICAgfVxuICAgICAgfSkpXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsLWNvbnRhaW5lclwiKS5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICBlbGVtZW50VHlwZTogXCJkaXZcIixcbiAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgIGlkOiBcImZyaWVuZHNfX2JhY2tkcm9wXCJcbiAgICAgICAgfVxuICAgICAgfSkpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC1jb250YWluZXJcIikuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgZWxlbWVudFR5cGU6IFwiZGl2XCIsXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICBpZDogXCJmcmllbmRzX19tb2RhbFwiXG4gICAgICAgIH1cbiAgICAgIH0pKVxuICAgICAgY29uc3QgbW9kYWxQYXJlbnRUYXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZyaWVuZHNfX21vZGFsXCIpO1xuICAgICAgbW9kYWxQYXJlbnRUYXJnZXQuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgZWxlbWVudFR5cGU6IFwiaDFcIixcbiAgICAgICAgY29udGVudDogYFlvdSBzdXJlIHlvdSB3YW50ICR7ZnJpZW5kVG9BZGROYW1lfSBhcyBhIGZyaWVuZD9gLFxuICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgaWQ6IFwiZnJpZW5kc19fY29udGVudFwiXG4gICAgICAgIH1cbiAgICAgIH0pKVxuICAgICAgbW9kYWxQYXJlbnRUYXJnZXQuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgZWxlbWVudFR5cGU6IFwicFwiLFxuICAgICAgICBjb250ZW50OiBcIkkgbWVhbiByZWFsbHkuLi4uXCIsXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICBocmVmOiBcIiNcIixcbiAgICAgICAgICBpZDogXCJmcmllbmRzX19jbG9zZVwiXG4gICAgICAgIH1cbiAgICAgIH0pKVxuICAgICAgbW9kYWxQYXJlbnRUYXJnZXQuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgZWxlbWVudFR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgIGNvbnRlbnQ6IFwiRG9uJ3QgRnJpZW5kXCIsXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICBpZDogXCJkb250RnJpZW5kXCIsXG4gICAgICAgICAgdHlwZTogXCJidXR0b25cIlxuICAgICAgICB9XG4gICAgICB9KSlcbiAgICAgIG1vZGFsUGFyZW50VGFyZ2V0LmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImJ1dHRvblwiLFxuICAgICAgICBjb250ZW50OiBgWWVzLCBtYWtlICR7ZnJpZW5kVG9BZGROYW1lfSBhIEZyaWVuZGAsXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICBpZDogXCJmcmllbmRJdFVwXCIsXG4gICAgICAgICAgbmFtZTogd2FudGVkRnJpZW5kLFxuICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCJcbiAgICAgICAgfVxuICAgICAgfSkpXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRvbnRGcmllbmRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtmcmllbmRzRXZlbnRzTGlzdGVuZXIuY2xvc2VNZXNzYWdlTW9kYWwoKVxuICAgICAgfSlcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnJpZW5kSXRVcFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBmcmllbmRzRXZlbnRzTGlzdGVuZXIuY2xvc2VNZXNzYWdlTW9kYWwoKVxuICAgICAgfSlcbiAgICAgIHRoaXMub3BlbkZyaWVuZE1vZGFsKClcbiAgICB9LFxuICAgIG9wZW5GcmllbmRNb2RhbCAoKSB7XG4gICAgICBsZXQgYmFja2Ryb3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZyaWVuZHNfX2JhY2tkcm9wXCIpO1xuICAgICAgbGV0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmcmllbmRzX19tb2RhbFwiKTtcbiAgICAgIGJhY2tkcm9wLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH0sXG4gICAgYnVpbGRGcmllbmRTZWFyY2hCYXIgKCkge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdXRwdXRcIikuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgZWxlbWVudFR5cGU6IFwiZGl2XCIsXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICBpZDogXCJmcmllbmQtc2VhcmNoLWJveFwiXG4gICAgICAgIH1cbiAgICAgIH0pKVxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmcmllbmQtc2VhcmNoLWJveFwiKS5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICBlbGVtZW50VHlwZTogXCJpbnB1dFwiLFxuICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgaWQ6IFwiZnJpZW5kLXNlYXJjaC1pbnB1dFwiLFxuICAgICAgICAgIGNsYXNzOiBcInNlYXJjaC10eHRcIixcbiAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlNlYXJjaCBGb3IgRnJpZW5kc1wiXG4gICAgICAgIH1cbiAgICAgIH0pKVxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmcmllbmQtc2VhcmNoLWJveFwiKS5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICBlbGVtZW50VHlwZTogXCJhXCIsXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICBjbGFzczogXCJmcmllbmQtc2VhcmNoLWJ0blwiLFxuICAgICAgICAgIGhyZWY6IFwiI1wiLFxuICAgICAgICAgIGlkOiBcImZyaWVuZC1pY29uLWFuY2hvclwiXG4gICAgICAgIH1cbiAgICAgIH0pKVxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmcmllbmQtaWNvbi1hbmNob3JcIikuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgZWxlbWVudFR5cGU6IFwiaVwiLFxuICAgICAgICBjc3NDbGFzczogXCJmYXNcIlxuICAgICAgfSkpXG4gICAgICBsZXQgc2VhcmNoSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmFzXCIpO1xuICAgICAgc2VhcmNoSWNvbi5jbGFzc0xpc3QuYWRkKFwiZmEtc2VhcmNoXCIpO1xuXG4gICAgICBjb25zdCB1c2Vyc1NlYXJjaEZyaWVuZElucHV0RW50ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZyaWVuZC1zZWFyY2gtaW5wdXRcIik7XG4gICAgICB1c2Vyc1NlYXJjaEZyaWVuZElucHV0RW50ZXIuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIGtleVByZXNzRXZlbnQgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudC5rZXkpXG4gICAgICAgIGlmIChrZXlQcmVzc0V2ZW50LmNoYXJDb2RlID09PSAxMykge1xuICAgICAgICAgIGxldCB1c2VySW5wdXRFbnRlciA9IGtleVByZXNzRXZlbnQudGFyZ2V0LnZhbHVlO1xuXG4gICAgICAgICAgZnJpZW5kc0V2ZW50c0xpc3RlbmVyLnNlYXJjaElucHV0TWFnaWModXNlcklucHV0RW50ZXIpO1xuICAgICAgICAgIHVzZXJzU2VhcmNoRnJpZW5kSW5wdXRFbnRlci52YWx1ZSA9IFwiXCI7XG5cbiAgICAgICAgfVxuICAgICAgfSlcblxuXG4gICAgICBjb25zdCB1c2Vyc1NlYXJjaEZyaWVuZElucHV0Q2xpY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZyaWVuZC1pY29uLWFuY2hvclwiKTtcbiAgICAgIHVzZXJzU2VhcmNoRnJpZW5kSW5wdXRDbGljay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBsZXQgdXNlcklucHV0Q2xpY2sgPSB1c2Vyc1NlYXJjaEZyaWVuZElucHV0RW50ZXIudmFsdWVcbiAgICAgICAgZnJpZW5kc0V2ZW50c0xpc3RlbmVyLnNlYXJjaElucHV0TWFnaWModXNlcklucHV0Q2xpY2spO1xuICAgICAgICB1c2Vyc1NlYXJjaEZyaWVuZElucHV0RW50ZXIudmFsdWUgPSBcIlwiO1xuXG4gICAgICB9KVxuICAgIH0sXG4gICAgc2VhcmNoUmVzdWx0RGlzcGxheWVkIChmcmllbmRTZWFyY2hSZXN1bHREaXNwbGF5ZWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwieW9cIilcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3V0cHV0XCIpLmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgIGVsZW1lbnRUeXBlOiBcInNlY3Rpb25cIixcbiAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgIGlkOiBcIm1vZGFsLWNvbnRhaW5lclwiXG4gICAgICAgIH1cbiAgICAgIH0pKVxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC1jb250YWluZXJcIikuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgZWxlbWVudFR5cGU6IFwiZGl2XCIsXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICBpZDogXCJmcmllbmRzX19iYWNrZHJvcFwiXG4gICAgICAgIH1cbiAgICAgIH0pKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtY29udGFpbmVyXCIpLmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImRpdlwiLFxuICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgaWQ6IFwiZnJpZW5kc19fbW9kYWxcIlxuICAgICAgICB9XG4gICAgICB9KSlcbiAgICAgIGNvbnN0IG1vZGFsUGFyZW50VGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmcmllbmRzX19tb2RhbFwiKTtcbiAgICAgIG1vZGFsUGFyZW50VGFyZ2V0LmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImgxXCIsXG4gICAgICAgIGNvbnRlbnQ6IGBXb3VsZCB5b3UgbGlrZSB0byBiZSBmcmllbmRzIHdpdGggJHtmcmllbmRTZWFyY2hSZXN1bHREaXNwbGF5ZWQudXNlck5hbWV9P2AsXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICBpZDogXCJmcmllbmRzX19jb250ZW50XCJcbiAgICAgICAgfVxuICAgICAgfSkpXG4gICAgICBtb2RhbFBhcmVudFRhcmdldC5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICBlbGVtZW50VHlwZTogXCJwXCIsXG4gICAgICAgIGNvbnRlbnQ6IGBJIG1lYW4gJHtmcmllbmRTZWFyY2hSZXN1bHREaXNwbGF5ZWQudXNlck5hbWV9IGlzIHByZXR0eSBjb29sLi4uYCxcbiAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgIGhyZWY6IFwiI1wiLFxuICAgICAgICAgIGlkOiBcImZyaWVuZHNfX2Nsb3NlXCJcbiAgICAgICAgfVxuICAgICAgfSkpXG4gICAgICBtb2RhbFBhcmVudFRhcmdldC5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICBlbGVtZW50VHlwZTogXCJidXR0b25cIixcbiAgICAgICAgY29udGVudDogXCJEb24ndCBGcmllbmRcIixcbiAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgIGlkOiBcImRvbnRGcmllbmRcIixcbiAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiXG4gICAgICAgIH1cbiAgICAgIH0pKVxuICAgICAgbW9kYWxQYXJlbnRUYXJnZXQuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgZWxlbWVudFR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgIGNvbnRlbnQ6IGBZZXMsIG1ha2UgJHtmcmllbmRTZWFyY2hSZXN1bHREaXNwbGF5ZWQudXNlck5hbWV9IGEgRnJpZW5kYCxcbiAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgIGlkOiBcImZyaWVuZEl0VXAtc2VhcmNoTW9kYWxcIixcbiAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiXG4gICAgICAgIH1cbiAgICAgIH0pKVxuXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRvbnRGcmllbmRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtmcmllbmRzRXZlbnRzTGlzdGVuZXIuY2xvc2VNZXNzYWdlTW9kYWwoKVxuICAgICAgfSlcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnJpZW5kSXRVcC1zZWFyY2hNb2RhbFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBmcmllbmRzRXZlbnRzTGlzdGVuZXIuc2VhcmNoQmFyRnJpZW5kaW5nKGZyaWVuZFNlYXJjaFJlc3VsdERpc3BsYXllZC5pZClcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMub3BlbkZyaWVuZE1vZGFsKClcbiAgICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnJpZW5kc1xuXG4vLyBjb25zdCB0ZXN0ZXIgPSBbXG4vLyAgIHtcbi8vICAgICBlbGVtZW50VHlwZTogXCJoMlwiLFxuLy8gICAgIGNvbnRlbnQ6IFwiamFrZSBiYW5ub25cIlxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgZWxlbWVudFR5cGU6IFwicFwiLFxuLy8gICAgIGNvbnRlbnQ6IFwiUG9vbCBQYXJ0eSAzcG1cIlxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgZWxlbWVudFR5cGU6IFwicFwiLFxuLy8gICAgIGNvbnRlbnQ6IFwiY2hlY2sgb3V0IHRoaXMgbmV3cyBhcnRpY2xlXCJcbi8vICAgfVxuLy8gXSIsImltcG9ydCBmcmllbmRzIGZyb20gXCIuL2ZyaWVuZHNcIlxuaW1wb3J0IG1lc3NhZ2VzIGZyb20gXCIuL21lc3NhZ2VzXCJcbmltcG9ydCBub21hZERhdGEgZnJvbSBcIi4vbm9tYWREYXRhXCI7XG5cbmNvbnN0IGZyaWVuZHNFdmVudHNMaXN0ZW5lciA9IHtcbiAgZnJpZW5kc0RlbGV0ZUZyaWVuZCAoKSB7XG4gICAgY29uc3QgZnJpZW5kVG9EZWxldGUgPSAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC52YWx1ZSkuc3BsaXQoXCItXCIpWzJdO1xuICAgIGxldCB1c2VySWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpO1xuICAgIGxldCBjdXJyZW50VXNlciA9IHVzZXJJZDtcbiAgICBjb25zb2xlLmxvZyhmcmllbmRUb0RlbGV0ZSwgY3VycmVudFVzZXIpO1xuICAgIGxldCBmaW5hbE51bWJlclNlbmRGb3JEZWxldGUgPSAwXG5cbiAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICBcImRhdGFTZXRcIiA6IFwiZnJpZW5kc1wiLFxuICAgICAgXCJmZXRjaFR5cGVcIiA6IFwiR0VUXCIsXG4gICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiBcIlwiLFxuICAgICAgXCJlbWJlZEl0ZW1cIiA6IFwiP19lbWJlZD1mcmllbmRzXCJcbiAgICB9KVxuICAgIC50aGVuKGRlc3Ryb3lGcmllbmRzSGVhcnQgPT4ge1xuICAgICAgZGVzdHJveUZyaWVuZHNIZWFydC5mb3JFYWNoKGdvb2RieWVGcmllbmQgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhnb29kYnllRnJpZW5kLnVzZXJJZCwgTnVtYmVyKGN1cnJlbnRVc2VyKSlcbiAgICAgICAgaWYgKGdvb2RieWVGcmllbmQub3RoZXJGcmllbmRJZCA9PT0gTnVtYmVyKGZyaWVuZFRvRGVsZXRlKSAmJiBnb29kYnllRnJpZW5kLnVzZXJJZCA9PT0gTnVtYmVyKGN1cnJlbnRVc2VyKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQZWFjZU91dFwiLGdvb2RieWVGcmllbmQuaWQpO1xuICAgICAgICAgICAgZmluYWxOdW1iZXJTZW5kRm9yRGVsZXRlID0gZ29vZGJ5ZUZyaWVuZC5pZDtcblxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgbGV0IGdvb2RCeWVTZWFyY2hSZXN1bHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGZyaWVuZC0ke2ZyaWVuZFRvRGVsZXRlfWApO1xuICAgICAgZ29vZEJ5ZVNlYXJjaFJlc3VsdHMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChnb29kQnllU2VhcmNoUmVzdWx0cyk7XG5cbiAgICAgIGNvbnNvbGUubG9nKGZpbmFsTnVtYmVyU2VuZEZvckRlbGV0ZSlcbiAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcbiAgICAgICAgXCJkZWxldGVJZFwiIDogZmluYWxOdW1iZXJTZW5kRm9yRGVsZXRlLFxuICAgICAgICBcImRhdGFTZXRcIiA6IFwiZnJpZW5kc1wiLFxuICAgICAgICBcImZldGNoVHlwZVwiIDogXCJERUxFVEVcIixcbiAgICAgICAgXCJkYXRhQmFzZU9iamVjdFwiIDoge1xuICAgICAgICAgIFwidXNlcklkXCI6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuXG4gIH0sXG4gIGZyaWVuZHNBZGRGcmllbmQgKCkge1xuICAgIGxldCB1c2VySWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpO1xuICAgIGxldCBjdXJyZW50VXNlciA9IE51bWJlcih1c2VySWQpO1xuXG5cbiAgICBjb25zdCBmcmllbmRUb0JlQWRkZWQgPSAoZXZlbnQudGFyZ2V0LmlkKS5zcGxpdChcIi1cIilbM107XG4gICAgY29uc29sZS5sb2coYHVzZXIke2N1cnJlbnRVc2VyfWAsYEFkZGluZyBGcmllbmQke2ZyaWVuZFRvQmVBZGRlZH1gKVxuXG4gICAgbGV0IGdvb2RCeWVOb25GcmllbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcG90ZW50aWFsRnJpZW5kLSR7ZnJpZW5kVG9CZUFkZGVkfWApO1xuICAgIGdvb2RCeWVOb25GcmllbmQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChnb29kQnllTm9uRnJpZW5kKTtcbiAgICBhbGVydChgJHtldmVudC50YXJnZXQucHJldmlvdXNTaWJsaW5nLmlubmVyVGV4dH0gaXMgbm93IHlvdXIgZnJpZW5kIWApO1xuXG4gICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xuICAgICAgXCJkYXRhU2V0XCIgOiBcImZyaWVuZHNcIixcbiAgICAgIFwiZmV0Y2hUeXBlXCIgOiBcIlBPU1RcIixcbiAgICAgIFwiZGF0YUJhc2VPYmplY3RcIiA6IHtcbiAgICAgICAgXCJ1c2VySWRcIjogY3VycmVudFVzZXIsXG4gICAgICAgIFwib3RoZXJGcmllbmRJZFwiOiBOdW1iZXIoZnJpZW5kVG9CZUFkZGVkKSxcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuICBzaGl6ICgpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmF0dHJpYnV0ZXMubmFtZS52YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgY29uc29sZS5sb2coXCJzaHppYmFsbFwiKVxuICAgIH1cbiAgICBjb25zdCBmcmllbmRUb0JlQWRkZWQgPSBldmVudC50YXJnZXQuYXR0cmlidXRlcy5uYW1lLnZhbHVlO1xuICAgIGNvbnN0IGZyaWVuZFRvQmVBZGRlZEhhc0FOYW1lID0gZXZlbnQudGFyZ2V0LnRleHRDb250ZW50LnNwbGl0KFwiOlwiKVswXVxuICAgIGxldCBmcmllbmRzSUhhdmUgPSBbXVxuICAgIGxldCB1c2VySWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKTtcbiAgICBsZXQgY3VycmVudFVzZXIgPSBOdW1iZXIodXNlcklkKTtcbiAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICBcImRhdGFTZXRcIiA6IFwiZnJpZW5kc1wiLFxuICAgICAgXCJmZXRjaFR5cGVcIiA6IFwiR0VUXCIsXG4gICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiBcIlwiLFxuICAgICAgXCJlbWJlZEl0ZW1cIiA6IFwiP19lbWJlZD1mcmllbmRzXCJcbiAgICB9KVxuICAgIC50aGVuKGZyb21GcmllbmRzID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGZyb21GcmllbmRzKVxuICAgICAgZnJvbUZyaWVuZHMuZm9yRWFjaChmcmllbmREYXRhID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZnJpZW5kRGF0YSlcbiAgICAgICAgaWYgKGZyaWVuZERhdGEudXNlcklkID09PSBjdXJyZW50VXNlcikge1xuICAgICAgICAgIGZyaWVuZHNJSGF2ZS5wdXNoKGZyaWVuZERhdGEub3RoZXJGcmllbmRJZClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC8vIGNvbnNvbGUubG9nKGZyaWVuZHNJSGF2ZSlcbiAgICAgIGZyaWVuZHMuZnJpZW5kU29ydEZyb21NZXNzYWdlc1NlY3Rpb24oZnJpZW5kc0lIYXZlLCBmcmllbmRUb0JlQWRkZWQsIGZyaWVuZFRvQmVBZGRlZEhhc0FOYW1lKVxuICAgIH0pXG4gIH0sXG4gIGNsb3NlTWVzc2FnZU1vZGFsKCkge1xuICAgIGxldCB1c2VySWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKTtcbiAgICBsZXQgY3VycmVudFVzZXIgPSBOdW1iZXIodXNlcklkKTtcblxuICAgIGlmIChldmVudC50YXJnZXQuaWQgPT09IFwiZG9udEZyaWVuZFwiKSB7XG4gICAgICBsZXQgZ29vZEJ5ZVNlYXJjaFJlc3VsdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsLWNvbnRhaW5lclwiKTtcbiAgICAgIGdvb2RCeWVTZWFyY2hSZXN1bHRzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZ29vZEJ5ZVNlYXJjaFJlc3VsdHMpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmlkID09PSBcImZyaWVuZEl0VXBcIikge1xuICAgICAgbGV0IGdvb2RCeWVTZWFyY2hSZXN1bHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC1jb250YWluZXJcIik7XG4gICAgICBnb29kQnllU2VhcmNoUmVzdWx0cy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGdvb2RCeWVTZWFyY2hSZXN1bHRzKTtcbiAgICAgIGxldCBmcmllbmRUb2JlID0gZXZlbnQudGFyZ2V0LmF0dHJpYnV0ZXMubmFtZS52YWx1ZTtcbiAgICAgIGNvbnNvbGUubG9nKGZyaWVuZFRvYmUpXG4gICAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcbiAgICAgICAgICBcImRhdGFTZXRcIiA6IFwiZnJpZW5kc1wiLFxuICAgICAgICAgIFwiZmV0Y2hUeXBlXCIgOiBcIlBPU1RcIixcbiAgICAgICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiB7XG4gICAgICAgICAgICBcInVzZXJJZFwiOiBjdXJyZW50VXNlcixcbiAgICAgICAgICAgIFwib3RoZXJGcmllbmRJZFwiOiBOdW1iZXIoZnJpZW5kVG9iZSksXG4gICAgICAgICAgfVxuICAgICAgfSlcblxuICAgIH1cbiAgfSxcbiAgc2VhcmNoSW5wdXRNYWdpYyAodXNlcklucHV0KSB7XG4gICAgbGV0IHVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xuICAgIGxldCBjdXJyZW50VXNlciA9IE51bWJlcih1c2VySWQpO1xuICAgIC8vIGNvbnNvbGUubG9nKHVzZXJJbnB1dClcbiAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICBcImRhdGFTZXRcIiA6IFwidXNlcnNcIixcbiAgICAgIFwiZmV0Y2hUeXBlXCIgOiBcIkdFVFwiLFxuICAgICAgXCJkYXRhQmFzZU9iamVjdFwiIDogXCJcIixcbiAgICAgIFwiZW1iZWRJdGVtXCIgOiBcIj9fZW1iZWQ9dXNlcnNcIlxuICAgIH0pXG4gICAgLnRoZW4odXNlcnMgPT4ge1xuICAgICAgY29uc3QgZm91bmRVc2VycyA9IHVzZXJzLmZpbmQodXNlciA9PiB1c2VyLnVzZXJOYW1lLmluY2x1ZGVzKHVzZXJJbnB1dCkpO1xuICAgICAgY29uc29sZS5sb2coZm91bmRVc2Vycy5pZCwgY3VycmVudFVzZXIpXG4gICAgICBpZiAoZm91bmRVc2Vycy5pZCA9PT0gY3VycmVudFVzZXIpIHtcbiAgICAgICAgYWxlcnQoXCJDYW4ndCBmcmllbmQgeW91cnNlbGZcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmcmllbmRzLnNlYXJjaFJlc3VsdERpc3BsYXllZChmb3VuZFVzZXJzKTtcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuICBzZWFyY2hCYXJGcmllbmRpbmcgKGZyaWVuZFRvQmVGcm9tU2VhcmNoSWQpIHtcbiAgICBjb25zdCBkZWZpbmVkQXNGcm9tU2VhcmNoTW9kYWwgPSBcIm1vZGFsXCJcbiAgICBsZXQgZnJpZW5kc0lIYXZlID0gW11cbiAgICBsZXQgdXNlcklkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyk7XG4gICAgbGV0IGN1cnJlbnRVc2VyID0gTnVtYmVyKHVzZXJJZCk7XG4gICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xuICAgICAgXCJkYXRhU2V0XCIgOiBcImZyaWVuZHNcIixcbiAgICAgIFwiZmV0Y2hUeXBlXCIgOiBcIkdFVFwiLFxuICAgICAgXCJkYXRhQmFzZU9iamVjdFwiIDogXCJcIixcbiAgICAgIFwiZW1iZWRJdGVtXCIgOiBcIj9fZW1iZWQ9ZnJpZW5kc1wiXG4gICAgfSlcbiAgICAudGhlbihmcm9tRnJpZW5kcyA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhmcm9tRnJpZW5kcylcbiAgICAgIGZyb21GcmllbmRzLmZvckVhY2goZnJpZW5kRGF0YSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGZyaWVuZERhdGEpXG4gICAgICAgIGlmIChmcmllbmREYXRhLnVzZXJJZCA9PT0gY3VycmVudFVzZXIpIHtcbiAgICAgICAgICBmcmllbmRzSUhhdmUucHVzaChmcmllbmREYXRhLm90aGVyRnJpZW5kSWQpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAvLyBjb25zb2xlLmxvZyhmcmllbmRzSUhhdmUpXG4gICAgICBmcmllbmRzLmZyaWVuZFNvcnRGcm9tTWVzc2FnZXNTZWN0aW9uKGZyaWVuZHNJSGF2ZSwgZnJpZW5kVG9CZUZyb21TZWFyY2hJZCwgZGVmaW5lZEFzRnJvbVNlYXJjaE1vZGFsKVxuICAgIH0pXG4gIH0sXG4gIHNlYXJjaEJhckFkZEZyaWVuZFRvSnNvbiAoZnJpZW5kVG9CZSkge1xuICAgIGxldCB1c2VySWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKTtcbiAgICBsZXQgY3VycmVudFVzZXIgPSBOdW1iZXIodXNlcklkKTtcblxuICAgIGxldCBnb29kQnllU2VhcmNoUmVzdWx0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtY29udGFpbmVyXCIpO1xuICAgIGdvb2RCeWVTZWFyY2hSZXN1bHRzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZ29vZEJ5ZVNlYXJjaFJlc3VsdHMpO1xuXG4gICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xuICAgICAgXCJkYXRhU2V0XCIgOiBcImZyaWVuZHNcIixcbiAgICAgIFwiZmV0Y2hUeXBlXCIgOiBcIlBPU1RcIixcbiAgICAgIFwiZGF0YUJhc2VPYmplY3RcIiA6IHtcbiAgICAgICAgXCJ1c2VySWRcIjogY3VycmVudFVzZXIsXG4gICAgICAgIFwib3RoZXJGcmllbmRJZFwiOiBOdW1iZXIoZnJpZW5kVG9CZSksXG4gICAgICB9XG4gIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnJpZW5kc0V2ZW50c0xpc3RlbmVyIiwiaW1wb3J0IG5vbWFkRGF0YSBmcm9tIFwiLi9ub21hZERhdGFcIjtcbmltcG9ydCBkb21Db21wb25lbnRzIGZyb20gXCIuL2RvbUNvbXBvbmVudHNcIjtcbmltcG9ydCBtZXNzYWdlc0V2ZW50TGlzdGVuZXJzIGZyb20gXCIuL21lc3NhZ2VzRXZlbnRMaXN0ZW5lcnNcIjtcbmltcG9ydCBmcmllbmRzRXZlbnRzTGlzdGVuZXIgZnJvbSBcIi4vZnJpZW5kc0V2ZW50c0xpc3RlbmVyLmpzXCI7XG5cbmNvbnN0IG1lc3NhZ2VzID0ge1xuXG4gICAgY3JlYXRlTWVzc2FnZUJvYXJkKCkge1xuICAgICAgICAkKFwiI291dHB1dFwiKS5lbXB0eSgpXG5cbiAgICAgICAgbGV0IG91dHB1dEFydGljbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm91dHB1dFwiKVxuXG4gICAgICAgIC8vY3JlYXRlIGRpc3BsYXkgY29udGFpbmVyXG4gICAgICAgIGxldCBtZXNzYWdlc0NvbnRhaW5lciA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwic2VjdGlvblwiLFxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcIm1lc3NhZ2VzQ29udGFpbmVyXCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgIGlkIDogXCJtZXNzYWdlc0NvbnRhaW5lclwiXG4gICAgICAgICAgICB9fSk7XG5cbiAgICAgICAgLy9jcmVhdGUgbWVzc2FnZSBpbnB1dCBmaWVsZFxuICAgICAgICBsZXQgbWVzc2FnZUlucHV0ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJpbnB1dFwiLFxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcIm1lc3NhZ2VJbnB1dFwiLFxuICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICBpZCA6IFwibWVzc2FnZUlucHV0XCIsXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiRW50ZXIgTWVzc2FnZSBIZXJlXCJcbiAgICAgICAgICAgIH19KTtcblxuICAgICAgICAvL2NyZWF0ZSBzdWJtaXQgYnV0dG9uIGZvciBpbnB1dCBmaWVsZFxuICAgICAgICBsZXQgbWVzc2FnZVN1Ym1pdEJ1dHRvbiA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwibWVzc2FnZVN1Ym1pdEJ1dHRvblwiLFxuICAgICAgICAgICAgY29udGVudCA6IFwiU3VibWl0XCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgIGlkIDogXCJtZXNzYWdlU3VibWl0QnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgdHlwZSA6IFwiYnV0dG9uXCJcbiAgICAgICAgICAgIH19KTtcblxuICAgICAgICBtZXNzYWdlU3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtZXNzYWdlc0V2ZW50TGlzdGVuZXJzLnBvc3ROZXdNZXNzYWdlLCB7b25jZTogdHJ1ZX0pO1xuICAgICAgICBtZXNzYWdlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlSW5wdXQpO1xuICAgICAgICBtZXNzYWdlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlU3VibWl0QnV0dG9uKTtcbiAgICAgICAgb3V0cHV0QXJ0aWNsZS5hcHBlbmRDaGlsZChtZXNzYWdlc0NvbnRhaW5lcik7XG5cbiAgICAgICAgICAgIHRoaXMuZ2V0TWVzc2FnZXMoKVxuICAgIH0sXG5cbiAgICBnZXRNZXNzYWdlcygpIHtcblxuICAgICAgICAvL0dFVCBmZXRjaCAmIC50aGVuIHRvIGJ1aWxkIG9iamVjdChzKSBmb3IgY3JlYXRlRG9tRWxlbWVudCgpIHVzaW5nIF9leHBhbmQgdG8gZGlzcGxheSBVTjogbWVzc2FnZVxuICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG5cbiAgICAgICAgICAgICAgICBkYXRhU2V0IDogXCJtZXNzYWdlc1wiLFxuICAgICAgICAgICAgICAgIGZldGNoVHlwZSA6IFwiR0VUXCIsXG4gICAgICAgICAgICAgICAgZW1iZWRJdGVtIDogXCI/X2V4cGFuZD11c2VyXCJcblxuICAgICAgICB9KS50aGVuKG1lc3NhZ2VzID0+IHtcblxuICAgICAgICAgICAgbGV0IG1lc3NhZ2VDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lc3NhZ2VzQ29udGFpbmVyXCIpO1xuICAgICAgICAgICAgbGV0IG1lc3NhZ2VJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVzc2FnZUlucHV0XCIpO1xuXG4gICAgICAgICAgICAvL3NvcnQgbWVzc2FnZXMgYnkgdGltZVN0YW1wXG4gICAgICAgICAgICBtZXNzYWdlcy5zb3J0KGZ1bmN0aW9uKGEsYil7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGEudGltZVN0YW1wKSAtIG5ldyBEYXRlKGIudGltZVN0YW1wKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvL2J1aWxkIERPTSBDb21wb25lbnQgZm9yIGVhY2ggbWVzc2FnZSBhbmQgYXBwZW5kXG4gICAgICAgICAgICBtZXNzYWdlcy5mb3JFYWNoKG1lc3NhZ2UgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2VUZXh0ID0gbWVzc2FnZS5tZXNzYWdlO1xuICAgICAgICAgICAgICAgIGxldCB1c2VyTmFtZSA9IG1lc3NhZ2UudXNlci51c2VyTmFtZTtcbiAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZUlkID0gbWVzc2FnZS5pZDtcbiAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZVRpbWVTdGFtcCA9IG1lc3NhZ2UudGltZVN0YW1wO1xuICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlVXNlciA9IGAke21lc3NhZ2UudXNlcklkfWA7XG4gICAgICAgICAgICAgICAgbGV0IGxvZ2dlZEluVXNlciA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIik7XG5cbiAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZURpdiA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgOiBcIm1lc3NhZ2VEaXZcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkIDogXCJtZXNzYWdlRGl2XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZUVsZW1lbnQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAvLyBBREQgTElOSyBIRVJFXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJoM1wiLFxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcyA6IFwibWVzc2FnZVVzZXJOYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgOiBgJHt1c2VyTmFtZX06YCxcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBgbWVzc2FnZSR7bWVzc2FnZUlkfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lIDogcGFyc2VJbnQobWVzc2FnZVVzZXIpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2VFbGVtZW50MiA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJwXCIsXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzIDogXCJtZXNzYWdlVGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50IDogYCR7bWVzc2FnZVRleHR9YCxcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBtZXNzYWdlSWRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2VVc2VyID09PSBsb2dnZWRJblVzZXIpIHtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZUVkaXRCdXR0b24gPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcyA6IFwibWVzc2FnZUVkaXRCdXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgOiBcIkVkaXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGBtZXNzYWdlRWRpdEJ1dHRvbl8ke21lc3NhZ2VJZH1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG1lc3NhZ2VUaW1lU3RhbXAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA6IFwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1lc3NhZ2VzRXZlbnRMaXN0ZW5lcnMuZWRpdE1lc3NhZ2UsIHtvbmNlOiB0cnVlfSlcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZURpdi5hcHBlbmRDaGlsZChtZXNzYWdlRWxlbWVudClcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsZW1lbnQuYXBwZW5kQ2hpbGQobWVzc2FnZUVsZW1lbnQyKVxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRGl2LmFwcGVuZENoaWxkKG1lc3NhZ2VFZGl0QnV0dG9uKVxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlQ29udGFpbmVyLmluc2VydEJlZm9yZShtZXNzYWdlRGl2LCBtZXNzYWdlSW5wdXQpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWxlbWVudC5hcHBlbmRDaGlsZChtZXNzYWdlRWxlbWVudDIpXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VDb250YWluZXIuaW5zZXJ0QmVmb3JlKG1lc3NhZ2VFbGVtZW50LCBtZXNzYWdlSW5wdXQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1lc3NhZ2VFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmcmllbmRzRXZlbnRzTGlzdGVuZXIuc2hpeilcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lc3NhZ2VzO1xuIiwiaW1wb3J0IG5vbWFkRGF0YSBmcm9tIFwiLi9ub21hZERhdGFcIjtcbmltcG9ydCBkb21Db21wb25lbnRzIGZyb20gXCIuL2RvbUNvbXBvbmVudHNcIjtcbmltcG9ydCBtZXNzYWdlcyBmcm9tIFwiLi9tZXNzYWdlc1wiO1xuLy8gaW1wb3J0IGZyaWVuZHNFdmVudExpc3RlbmVycyBmcm9tIFwiLi9mcmllbmRzRXZlbnRMaXN0ZW5lcnMuanNcIjtcblxuY29uc3QgbWVzc2FnZXNFdmVudExpc3RlbmVycyA9IHtcblxuICAgIHBvc3ROZXdNZXNzYWdlKCkge1xuXG4gICAgICAgIGxldCBtZXNzYWdlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lc3NhZ2VJbnB1dFwiKS52YWx1ZTtcbiAgICAgICAgbGV0IHRpbWVTdGFtcCA9IG5ldyBEYXRlKCk7XG5cbiAgICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xuXG4gICAgICAgICAgICBkYXRhU2V0IDogXCJtZXNzYWdlc1wiLFxuICAgICAgICAgICAgZmV0Y2hUeXBlIDogXCJQT1NUXCIsXG4gICAgICAgICAgICBkYXRhQmFzZU9iamVjdCA6IHtcbiAgICAgICAgICAgICAgICB1c2VySWQgOiBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSksXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA6IG1lc3NhZ2VJbnB1dCwvLy52YWx1ZSxcbiAgICAgICAgICAgICAgICB0aW1lU3RhbXAgOiB0aW1lU3RhbXBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbihzaGl0ID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNoaXQpXG4gICAgICAgICAgICAkKFwiI291dHB1dFwiKS5lbXB0eSgpO1xuICAgICAgICAgICAgbWVzc2FnZXMuY3JlYXRlTWVzc2FnZUJvYXJkKCk7XG4gICAgICAgIH0pXG4gICAgfSxcblxuICAgIGVkaXRNZXNzYWdlKCkge1xuICAgICAgICBsZXQgbnVtYmVyID0gZXZlbnQuY3VycmVudFRhcmdldC5pZDtcbiAgICAgICAgbGV0IG1lc3NhZ2VBcnJheSA9IG51bWJlci5zcGxpdChcIl9cIik7XG4gICAgICAgIGxldCBtZXNzYWdlSWQgPSBtZXNzYWdlQXJyYXlbMV07XG5cbiAgICAgICAgbGV0IG1lc3NhZ2VUb0VkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHttZXNzYWdlSWR9YCk7XG4gICAgICAgIGxldCBtZXNzYWdlVGV4dCA9IG1lc3NhZ2VUb0VkaXQuaW5uZXJIVE1MO1xuICAgICAgICBsZXQgbWVzc2FnZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBtZXNzYWdlJHttZXNzYWdlSWR9YCk7XG4gICAgICAgIGxldCBtZXNzYWdlVGltZVN0YW1wID0gZXZlbnQuY3VycmVudFRhcmdldC5uYW1lO1xuXG4gICAgICAgIGxldCBtZXNzYWdlRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZXNzYWdlRGl2XCIpXG5cbiAgICAgICAgbGV0IG1lc3NhZ2VFZGl0Rm9ybSA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCAoe1xuXG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwiZm9ybVwiLFxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcIm1lc3NhZ2VFZGl0Rm9ybVwiLFxuICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICBpZCA6IFwibWVzc2FnZUVkaXRGb3JtXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IG1lc3NhZ2VFZGl0RmllbGRzZXQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuXG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwiZmllbGRzZXRcIixcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJtZXNzYWdlRWRpdEZpZWxkc2V0XCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgIGlkIDogXCJtZXNzYWdlRWRpdEZpZWxkc2V0XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IG1lc3NhZ2VFZGl0SW5wdXQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuXG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwiaW5wdXRcIixcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJtZXNzYWdlRWRpdElucHV0XCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgIGlkIDogYG1lc3NhZ2VFZGl0SW5wdXRfJHttZXNzYWdlSWR9YCxcbiAgICAgICAgICAgICAgICB2YWx1ZSA6IGAke21lc3NhZ2VUZXh0fWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IG1lc3NhZ2VFZGl0U3VibWl0QnV0dG9uID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcblxuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcIm1lc3NhZ2VFZGl0U3VibWl0QnV0dG9uXCIsXG4gICAgICAgICAgICBjb250ZW50IDogXCJTdWJtaXRcIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgaWQgOiBgbWVzc2FnZUVkaXRTdWJtaXRCdXR0b25fJHttZXNzYWdlSWR9YCxcbiAgICAgICAgICAgICAgICBuYW1lOiBtZXNzYWdlVGltZVN0YW1wLFxuICAgICAgICAgICAgICAgIHR5cGUgOiBcImJ1dHRvblwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBtZXNzYWdlRWRpdFN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbWVzc2FnZXNFdmVudExpc3RlbmVycy5oYW5kbGVFZGl0U3VibWl0QnV0dG9uKVxuICAgICAgICBtZXNzYWdlRWRpdEZpZWxkc2V0LmFwcGVuZENoaWxkKG1lc3NhZ2VFZGl0SW5wdXQpXG4gICAgICAgIG1lc3NhZ2VFZGl0RmllbGRzZXQuYXBwZW5kQ2hpbGQobWVzc2FnZUVkaXRTdWJtaXRCdXR0b24pXG4gICAgICAgIG1lc3NhZ2VFZGl0Rm9ybS5hcHBlbmRDaGlsZChtZXNzYWdlRWRpdEZpZWxkc2V0KVxuICAgICAgICBtZXNzYWdlRGl2LmFwcGVuZENoaWxkKG1lc3NhZ2VFZGl0Rm9ybSlcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblxuICAgIH0sXG5cbiAgICBoYW5kbGVFZGl0U3VibWl0QnV0dG9uKCkge1xuICAgICAgICBsZXQgbnVtYmVyID0gZXZlbnQuY3VycmVudFRhcmdldC5pZDtcbiAgICAgICAgbGV0IG1lc3NhZ2VBcnJheSA9IG51bWJlci5zcGxpdChcIl9cIik7XG4gICAgICAgIGxldCBtZXNzYWdlSWQgPSBtZXNzYWdlQXJyYXlbMV07XG4gICAgICAgIGxldCBtZXNzYWdlVGltZVN0YW1wID0gYCR7ZXZlbnQuY3VycmVudFRhcmdldC5uYW1lfWA7XG4gICAgICAgIGxldCBtZXNzYWdlRWRpdElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG1lc3NhZ2VFZGl0SW5wdXRfJHttZXNzYWdlSWR9YCk7XG5cbiAgICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xuXG4gICAgICAgICAgICBwdXRJZCA6IG1lc3NhZ2VJZCxcbiAgICAgICAgICAgIGRhdGFTZXQgOiBcIm1lc3NhZ2VzXCIsXG4gICAgICAgICAgICBmZXRjaFR5cGUgOiBcIlBVVFwiLFxuICAgICAgICAgICAgZGF0YUJhc2VPYmplY3QgOiB7XG4gICAgICAgICAgICAgICAgdXNlcklkIDogTnVtYmVyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIikpLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGAke21lc3NhZ2VFZGl0SW5wdXQudmFsdWV9YCxcbiAgICAgICAgICAgICAgICB0aW1lU3RhbXA6IGAke21lc3NhZ2VUaW1lU3RhbXB9YFxuICAgICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKHNoaXQgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coc2hpdClcbiAgICAgICAgICAgICQoXCIjb3V0cHV0XCIpLmVtcHR5KCk7XG4gICAgICAgICAgICBtZXNzYWdlcy5jcmVhdGVNZXNzYWdlQm9hcmQoKTtcbiAgICAgICAgfSlcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBtZXNzYWdlc0V2ZW50TGlzdGVuZXJzOyIsImltcG9ydCBub21hZERhdGEgZnJvbSBcIi4vbm9tYWREYXRhXCI7XG5pbXBvcnQgZG9tQ29tcG9uZW50cyBmcm9tIFwiLi9kb21Db21wb25lbnRzXCI7XG4vL3B1bGwgZnJvbSBhcGkgdGhlbiBkaXNwbGF5IHRvIGRvbS5cbi8vIGNyZWF0ZSBzYXZlIGJ1dHRvbiBzZW5kIHNhdmVkIGFydGljbGVzIHRvIEpzb25cbi8vIGNyZWF0ZSBidXR0b24gdG8gcHVsbCBhbGwgc2F2ZWQgbWF0ZXJpYWxzIGluIGpzb24uXG4vLyBkZWxldGUgbWV0aG9kIGZvciBhcnRpY2xlc1xuY29uc3QgbmV3cyA9IHtcblxuICAgIGdldE5ld3MoKXtcbiAgICAgICAgLy9wdWxsIHRoZW4gc2VuZCBwdWxsZWQgZGF0YSB0byBkb21cbiAgICAgICAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMvMVwiKVxuICAgICAgICAgICAgLnRoZW4obmV3c0l0ZW1zID0+IG5ld3NJdGVtcy5qc29uKCkpXG4gICAgfSxcbiAgICBzYXZlKCkge1xuICAgICAgICAvL1RoaXMgaXMgZnVuY3Rpb25pbmcgYW5kIHdyaXRpbmcgdG8gSlNPTi5cbiAgICAgICAgdGhpcy5nZXROZXdzKCkudGhlbihwb3N0ID0+e1xuICAgICAgICBjb25zdCBuZXdzT2JqZWN0ID0ge1xuICAgICAgICAgICAgICAgIFwiZGF0YVNldFwiIDogXCJuZXdzSXRlbXNcIixcbiAgICAgICAgICAgICAgICBcImZldGNoVHlwZVwiIDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgXCJkYXRhQmFzZU9iamVjdFwiIDoge1xuICAgICAgICAgICAgICAgICAgICBcInVzZXJJZFwiOiAxLFxuICAgICAgICAgICAgICAgICAgICBcInVybFwiOiBgJHtwb3N0LnRpdGxlfWAsXG4gICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjogYCR7cG9zdC5ib2R5fWAsXG4gICAgICAgICAgICAgICAgICAgIFwic3lub3BzaXNcIjogXCJibGFoIGJsYWggYmxhaFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRlc3RuZXdzT2JqKTtcbiAgICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEobmV3c09iamVjdCk7XG4gICAgfSlcbiAgICB9LFxuXG4gICAgYWxsU2F2ZWQoKXtcbiAgICAvLyBub21hZERhdGEuY29ubmVjdFRvRGF0YSh0ZXN0bmV3c09iailcbiAgICB9LFxuXG4gICAgZGVsZXRlREIoKXtcblxuXG4gICAgfSxcblxuICAgIG5ld3NFbGVtZW50Q3JlYXRvcigpe1xuICAgICAgICAkKFwiI291dHB1dFwiKS5lbXB0eSgpXG4gICAgICAgIGNvbnN0IG5ld3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI291dHB1dFwiKVxuICAgICAgICBsZXQgbmV3c0NyZWF0b3JLZXkgPSB7XG4gICAgICAgICAgICBcImRhdGFTZXRcIiA6IFwibmV3c0l0ZW1zXCIsXG4gICAgICAgICAgICBcImZldGNoVHlwZVwiIDogXCJHRVRcIixcbiAgICAgICAgICAgIFwiZGF0YUJhc2VPYmplY3RcIiA6IFwiXCIsXG4gICAgICAgICAgICBcImVtYmVkSXRlbVwiIDogXCI/X2VtYmVkPW5ld3NJdGVtc1wiXG4gICAgICAgIH1cbiAgICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEobmV3c0NyZWF0b3JLZXkpXG4gICAgICAgIC50aGVuIChkYkdyYWJzID0+IHtcbiAgICAgICAgICAgIGRiR3JhYnMuZm9yRWFjaChkYkdyYWIgPT4gIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYkdyYWIpO1xuICAgICAgICAgICAgICAgIG5ld3NDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiU0FWRSBCSVRDSFwiLFxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzczogXCJuZXdzU2F2ZUJ1dHRvblwiXG4gICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgbmV3c0NvbnRhaW5lci5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJoMlwiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBkYkdyYWIudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzOiBcIm5ld3NUaXRsZVwiXG4gICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgbmV3c0NvbnRhaW5lci5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJwXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGRiR3JhYi5zeW5vcHNpcyxcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3M6IFwibmV3c0JvZHlcIlxuICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICAgIG5ld3NDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBkYkdyYWIudXJsLFxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzczogXCJuZXdzVVJMXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6e1xuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjpgJHtkYkdyYWIudXJsfWBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pKVxuXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gY29uc3QgTmV3c1Rlc3QgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoXCJoMlwiLHRlc3RQYXNzLFwidGVzdE9ialwiLG51bGwpO1xuICAgICAgICAvL291dHB1dC5hcHBlbmRDaGlsZChOZXdzVGVzdCk7XG5cblxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IG5ld3MiLCJpbXBvcnQgZXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vZXZlbnRMaXN0ZW5lcnNcIjtcbmNvbnN0IG5vbWFkRGF0YSA9IHtcblxuICAgIGNvbm5lY3RUb0RhdGEoZmV0Y2hPYmplY3QpIHtcblxuICAgICAgICBsZXQgZGF0YVNldCA9IGZldGNoT2JqZWN0LmRhdGFTZXQ7XG4gICAgICAgIGxldCBlbWJlZEl0ZW0gPSBmZXRjaE9iamVjdC5lbWJlZEl0ZW07XG4gICAgICAgIGxldCBmZXRjaFR5cGUgPSBmZXRjaE9iamVjdC5mZXRjaFR5cGU7XG4gICAgICAgIGxldCBkYXRhQmFzZU9iamVjdCA9IGZldGNoT2JqZWN0LmRhdGFCYXNlT2JqZWN0O1xuICAgICAgICBsZXQgcHV0SWQgPSBmZXRjaE9iamVjdC5wdXRJZDtcbiAgICAgICAgbGV0IGRlbGV0ZUlkID0gZmV0Y2hPYmplY3QuZGVsZXRlSWQ7XG5cbiAgICAgICAgaWYgKGZldGNoVHlwZSA9PSBcIkdFVFwiKSB7XG5cbiAgICAgICAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODgvJHtkYXRhU2V0fSR7ZW1iZWRJdGVtfWApXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpIC8vIHBhcnNlcyByZXNwb25zZSB0byBKU09OXG5cbiAgICAgICAgfSBlbHNlIGlmIChmZXRjaFR5cGUgPT09IFwiUE9TVFwiKXtcblxuICAgICAgICAvLyBEZWZhdWx0IG9wdGlvbnMgYXJlIG1hcmtlZCB3aXRoICpcbiAgICAgICAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODgvJHtkYXRhU2V0fWAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogYCR7ZmV0Y2hUeXBlfWAsIC8vICpHRVQsIFBPU1QsIFBVVCwgREVMRVRFLCBldGMuXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXG4gICAgICAgICAgICAgICAgLy8gXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyByZWZlcnJlcjogXCJuby1yZWZlcnJlclwiLCAvLyBuby1yZWZlcnJlciwgKmNsaWVudFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YUJhc2VPYmplY3QpLCAvLyBib2R5IGRhdGEgdHlwZSBtdXN0IG1hdGNoIFwiQ29udGVudC1UeXBlXCIgaGVhZGVyXG4gICAgICAgIH0pXG5cbiAgICAgICAgfSBlbHNlIGlmKGZldGNoVHlwZSA9PT0gXCJQVVRcIil7XG4gICAgICAgIHJldHVybiBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDg4LyR7ZGF0YVNldH0vJHtwdXRJZH1gLCB7XG4gICAgICAgICAgICBtZXRob2Q6IGAke2ZldGNoVHlwZX1gLCAvLyAqR0VULCBQT1NULCBQVVQsIERFTEVURSwgZXRjLlxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxuICAgICAgICAgICAgICAgIC8vIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gcmVmZXJyZXI6IFwibm8tcmVmZXJyZXJcIiwgLy8gbm8tcmVmZXJyZXIsICpjbGllbnRcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGFCYXNlT2JqZWN0KSwgLy8gYm9keSBkYXRhIHR5cGUgbXVzdCBtYXRjaCBcIkNvbnRlbnQtVHlwZVwiIGhlYWRlclxuICAgICAgICB9KVxuICAgICAgICB9IGVsc2UgaWYgKGZldGNoVHlwZSA9PT0gXCJERUxFVEVcIikge1xuICAgICAgICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC8ke2RhdGFTZXR9LyR7ZGVsZXRlSWR9YCwge1xuICAgICAgICAgICAgbWV0aG9kOiBgJHtmZXRjaFR5cGV9YCwgLy8gKkdFVCwgUE9TVCwgUFVULCBERUxFVEUsIGV0Yy5cbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcbiAgICAgICAgICAgICAgICAvLyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIHJlZmVycmVyOiBcIm5vLXJlZmVycmVyXCIsIC8vIG5vLXJlZmVycmVyLCAqY2xpZW50XG4gICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyAoXCJZT1UgU0NSRVdFRCBJVCBVUFwiKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBub21hZERhdGEiLCJpbXBvcnQgbm9tYWREYXRhIGZyb20gXCIuL25vbWFkRGF0YVwiO1xuaW1wb3J0IGRvbUNvbXBvbmVudHMgZnJvbSBcIi4vZG9tQ29tcG9uZW50c1wiO1xuaW1wb3J0IHRhc2tzRXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vdGFza3NFdmVudExpc3RlbmVyc1wiO1xuaW1wb3J0IHRhc2tzUG9wdXAgZnJvbSBcIi4vdGFza3NQb3B1cFwiO1xuLy8gaW1wb3J0IGV2ZW50TGlzdGVuZXJzIGZyb20gXCIuL2V2ZW50TGlzdGVuZXJzXCJcblxuY29uc3QgdGFza3MgPSB7XG5cbiAgICBjcmVhdGVUYXNrVGFibGVzKCkge1xuICAgICAgICAkKFwiI291dHB1dFwiKS5lbXB0eSgpXG5cbiAgICAgICAgbGV0IG91dHB1dEFydGljbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm91dHB1dFwiKVxuXG4gICAgICAgIC8vY3JlYXRlIGRpc3BsYXkgY29udGFpbmVyXG4gICAgICAgIGxldCB0YXNrc0NvbnRhaW5lciA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwic2VjdGlvblwiLFxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcInRhc2tzQ29udGFpbmVyXCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgIGlkIDogXCJ0YXNrc0NvbnRhaW5lclwiXG4gICAgICAgICAgICB9fSk7XG5cbiAgICAgICAgLy9jcmVhdGUgdGFza3MgdGFibGVzXG4gICAgICAgIGxldCBhY3RpdmVUYXNrc1RhYmxlID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJ0YWJsZVwiLFxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcImFjdGl2ZVRhc2tzVGFibGVcIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgaWQgOiBcImFjdGl2ZVRhc2tzVGFibGVcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgYWN0aXZlVGFza3NUYWJsZVRpdGxlID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJjYXB0aW9uXCIsXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwiYWN0aXZlVGFza3NUYWJsZVRpdGxlXCIsXG4gICAgICAgICAgICBjb250ZW50IDogXCJBQ1RJVkUgVEFTS1NcIlxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgY29tcGxldGVkVGFza3NUYWJsZSA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwidGFibGVcIixcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJjb21wbGV0ZWRUYXNrc1RhYmxlXCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgIGlkIDogXCJjb21wbGV0ZWRUYXNrc1RhYmxlXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGNvbXBsZXRlZFRhc2tzVGFibGVUaXRsZSA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwiY2FwdGlvblwiLFxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcImNvbXBsZXRlZFRhc2tzVGFibGVUaXRsZVwiLFxuICAgICAgICAgICAgY29udGVudCA6IFwiQ09NUExFVEVEIFRBU0tTXCJcbiAgICAgICAgfSlcblxuICAgICAgICAvL2NyZWF0ZSByb3cgd2l0aCBjb2x1bW4gaGVhZGVyc1xuICAgICAgICBsZXQgYWN0aXZlVGFza3NIZWFkZXJSb3cgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcInRyXCIsXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwiYWN0aXZlVGFza3NIZWFkZXJSb3dcIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgaWQgOiBcImFjdGl2ZVRhc2tzSGVhZGVyUm93XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGNvbXBsZXRlZFRhc2tzSGVhZGVyUm93ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJ0clwiLFxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcImNvbXBsZXRlZFRhc2tzSGVhZGVyUm93XCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgIGlkIDogXCJjb21wbGV0ZWRUYXNrc0hlYWRlclJvd1wiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vY3JlYXRlIGNvbHVtbiBoZWFkZXJzXG4gICAgICAgIGxldCBhY3RpdmVUYXNrc0hlYWRlciA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwidGhcIixcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJhY3RpdmVUYXNrc0hlYWRlclwiLFxuICAgICAgICAgICAgY29udGVudDogXCJUYXNrXCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgIGlkIDogXCJhY3RpdmVUYXNrc0hlYWRlclwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBhY3RpdmVUYXNrc0R1ZURhdGVIZWFkZXIgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcInRoXCIsXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwiYWN0aXZlVGFza3NEdWVEYXRlSGVhZGVyXCIsXG4gICAgICAgICAgICBjb250ZW50OiBcIkR1ZSBEYXRlXCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgIGlkIDogXCJhY3RpdmVUYXNrc0R1ZURhdGVIZWFkZXJcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgbGV0IGFjdGl2ZVRhc2tzRWRpdCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwidGhcIixcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJhY3RpdmVUYXNrc0VkaXRcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgIGlkIDogXCJhY3RpdmVUYXNrc0VkaXRcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgY29tcGxldGVkVGFza3NIZWFkZXIgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcInRoXCIsXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwiY29tcGxldGVkVGFza3NIZWFkZXJcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiVGFza1wiLFxuICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICBpZCA6IFwiY29tcGxldGVkVGFza3NIZWFkZXJcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgY29tcGxldGVkVGFza3NEdWVEYXRlSGVhZGVyID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJ0aFwiLFxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcImNvbXBsZXRlZFRhc2tzRHVlRGF0ZUhlYWRlclwiLFxuICAgICAgICAgICAgY29udGVudDogXCJEdWUgRGF0ZVwiLFxuICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICBpZCA6IFwiY29tcGxldGVkVGFza3NEdWVEYXRlSGVhZGVyXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vY3JlYXRlIGJ1dHRvbiB0byBtYWtlIG5ldyB0YXNrc1xuICAgICAgICBsZXQgY3JlYXRlVGFza0J1dHRvbiA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwiY3JlYXRlVGFza0J1dHRvblwiLFxuICAgICAgICAgICAgY29udGVudCA6IFwiQ3JlYXRlIE5ldyBUYXNrXCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgIGlkIDogXCJjcmVhdGVUYXNrQnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgdHlwZSA6IFwiYnV0dG9uXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBjb21wbGV0ZWRUYXNrc0VkaXQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcInRoXCIsXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwiY29tcGxldGVkVGFza3NFZGl0XCIsXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiLFxuICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICBpZCA6IFwiY29tcGxldGVkVGFza3NFZGl0XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9hcHBlbmQgaGVhZGVyIHJvdyB0byB0YWJsZSBhbmQgdGFibGUgdG8gY29udGFpbmVyXG4gICAgICAgIGFjdGl2ZVRhc2tzVGFibGUuYXBwZW5kQ2hpbGQoYWN0aXZlVGFza3NUYWJsZVRpdGxlKTtcbiAgICAgICAgY29tcGxldGVkVGFza3NUYWJsZS5hcHBlbmRDaGlsZChjb21wbGV0ZWRUYXNrc1RhYmxlVGl0bGUpO1xuICAgICAgICBhY3RpdmVUYXNrc0hlYWRlclJvdy5hcHBlbmRDaGlsZChhY3RpdmVUYXNrc0hlYWRlcilcbiAgICAgICAgYWN0aXZlVGFza3NIZWFkZXJSb3cuYXBwZW5kQ2hpbGQoYWN0aXZlVGFza3NEdWVEYXRlSGVhZGVyKTtcbiAgICAgICAgYWN0aXZlVGFza3NIZWFkZXJSb3cuYXBwZW5kQ2hpbGQoYWN0aXZlVGFza3NFZGl0KTtcbiAgICAgICAgYWN0aXZlVGFza3NUYWJsZS5hcHBlbmRDaGlsZChhY3RpdmVUYXNrc0hlYWRlclJvdyk7XG4gICAgICAgIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKGFjdGl2ZVRhc2tzVGFibGUpO1xuICAgICAgICBjb21wbGV0ZWRUYXNrc0hlYWRlclJvdy5hcHBlbmRDaGlsZChjb21wbGV0ZWRUYXNrc0hlYWRlcilcbiAgICAgICAgY29tcGxldGVkVGFza3NIZWFkZXJSb3cuYXBwZW5kQ2hpbGQoY29tcGxldGVkVGFza3NEdWVEYXRlSGVhZGVyKTtcbiAgICAgICAgY29tcGxldGVkVGFza3NIZWFkZXJSb3cuYXBwZW5kQ2hpbGQoY29tcGxldGVkVGFza3NFZGl0KTtcbiAgICAgICAgY29tcGxldGVkVGFza3NUYWJsZS5hcHBlbmRDaGlsZChjb21wbGV0ZWRUYXNrc0hlYWRlclJvdyk7XG4gICAgICAgIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbXBsZXRlZFRhc2tzVGFibGUpO1xuICAgICAgICBjcmVhdGVUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0YXNrc1BvcHVwLmNyZWF0ZU5ld1Rhc2tGb3JtKTtcbiAgICAgICAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVGFza0J1dHRvbik7XG4gICAgICAgIG91dHB1dEFydGljbGUuYXBwZW5kQ2hpbGQodGFza3NDb250YWluZXIpO1xuXG4gICAgICAgIHRoaXMuZ2V0VGFza3MoKTtcbiAgICB9LFxuXG4gICAgZ2V0VGFza3MoKSB7XG5cbiAgICAgICAgbGV0IGN1cnJlbnRVc2VyID0gTnVtYmVyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIikpO1xuXG4gICAgICAgIC8vcG9wdWxhdGUgdGFza3NcbiAgICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xuXG4gICAgICAgICAgICBkYXRhU2V0IDogXCJ0YXNrc1wiLFxuICAgICAgICAgICAgZmV0Y2hUeXBlIDogXCJHRVRcIixcbiAgICAgICAgICAgIGVtYmVkSXRlbSA6IFwiP19lbWJlZD11c2Vyc1wiXG5cbiAgICAgICAgfSkudGhlbih0YXNrcyA9PiB7XG5cbiAgICAgICAgICAgIHRhc2tzLnNvcnQoZnVuY3Rpb24oYSxiKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoYS5leHBlY3RlZENvbXBsZXRpb25EYXRlKSAtIG5ldyBEYXRlKGIuZXhwZWN0ZWRDb21wbGV0aW9uRGF0ZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGFza3MuZm9yRWFjaCh0YXNrID0+IHtcblxuICAgICAgICAgICAgICAgIGlmICh0YXNrLnVzZXJJZCA9PT0gY3VycmVudFVzZXIpIHtcblxuICAgICAgICAgICAgICAgIGxldCBzdGF0dXMgPSB0YXNrLmNvbXBsZXRlO1xuICAgICAgICAgICAgICAgIGxldCBhY3RpdmVUYXNrc1RhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY3RpdmVUYXNrc1RhYmxlXCIpO1xuICAgICAgICAgICAgICAgIGxldCBjb21wbGV0ZWRUYXNrc1RhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb21wbGV0ZWRUYXNrc1RhYmxlXCIpO1xuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBhIG5ldyB0YWJsZSByb3cgZm9yIGVhY2ggdGFza1xuICAgICAgICAgICAgICAgIGxldCB0YXNrUm93ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzIDogXCJ0YXNrVGFibGVSb3dcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkIDogYHRhc2tUYWJsZVJvd18ke3Rhc2suaWR9YFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIC8vY3JlYXRlIGNlbGxzIHRvIGhvbGQgdGFzayBhbmQgZHVlIGRhdGVcbiAgICAgICAgICAgICAgICBsZXQgdGFza0NlbGwgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgOiBcInRhc2tDZWxsXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZCA6IGB0YXNrQ2VsbF8ke3Rhc2suaWR9YFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIGxldCBkdWVEYXRlQ2VsbCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcyA6IFwiZHVlRGF0ZUNlbGxcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkIDogYGR1ZURhdGVDZWxsXyR7dGFzay5pZH1gXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgbGV0IHRhc2tFZGl0Q2VsbCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcyA6IFwidGFza0VkaXRDZWxsXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZCA6IGB0YXNrRWRpdENlbGxfJHt0YXNrLmlkfWBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBsZXQgdGFza0VkaXRCdXR0b24gPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzIDogXCJ0YXNrRWRpdEJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50IDogXCJFZGl0XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZCA6IGB0YXNrRWRpdEJ1dHRvbl8ke3Rhc2suaWR9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgOiBcImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgLy9jcmVhdGUgdGFzayBjaGVja2JveCBhbmQgdGl0bGVcbiAgICAgICAgICAgICAgICBsZXQgdGFza0xhYmVsID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzIDogXCJ0YXNrTGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkIDogYHRhc2tMYWJlbF8ke3Rhc2suaWR9YFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAvL2NyZWF0ZSB0YXNrIHRpdGxlXG4gICAgICAgICAgICAgICAgbGV0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGAke3Rhc2sudGFza31gKTtcblxuICAgICAgICAgICAgICAgIC8vY3JlYXRlIHRhc2sgY2hlY2tib3hcbiAgICAgICAgICAgICAgICBsZXQgdGFza0NoZWNrYm94ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzIDogXCJ0YXNrQ2hlY2tib3hcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkIDogYHRhc2tDaGVja2JveF8ke3Rhc2suaWR9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgOiBcImNoZWNrYm94XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA6IGAke3Rhc2sudGFza31gXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC8vY3JlYXRlIHRhc2sgZHV0ZSBkYXRlXG4gICAgICAgICAgICAgICAgbGV0IGR1ZURhdGVBcnJheSA9IG5ldyBEYXRlKHRhc2suZXhwZWN0ZWRDb21wbGV0aW9uRGF0ZSkudG9EYXRlU3RyaW5nKCkuc3BsaXQoXCIgXCIpXG4gICAgICAgICAgICAgICAgbGV0IGR1ZURhdGUgPSBgJHtkdWVEYXRlQXJyYXlbMV19ICR7ZHVlRGF0ZUFycmF5WzJdfSAke2R1ZURhdGVBcnJheVszXX1gXG5cblxuICAgICAgICAgICAgICAgIGxldCB0YXNrRHVlRGF0ZSA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJwXCIsXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzIDogXCJ0YXNrRHVlRGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50IDogZHVlRGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkIDogYHRhc2tEdWVEYXRlXyR7dGFzay5pZH1gXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgLy9hcHBlbmQgLS0gb3JkZXIgaXMgaW1wb3J0YW50IGZvciBjaGVja2JveCBhbmQgbGFiZWwgdG8gZW5zdXJlIGJveCBpbiBvbiB0aGUgbGVmdFxuICAgICAgICAgICAgICAgIHRhc2tDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHRhc2tzRXZlbnRMaXN0ZW5lcnMubWFya1Rhc2tDb21wbGV0ZSlcbiAgICAgICAgICAgICAgICB0YXNrRWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGFza3NFdmVudExpc3RlbmVycy50YXNrRWRpdEJ1dHRvbilcbiAgICAgICAgICAgICAgICB0YXNrTGFiZWwuYXBwZW5kQ2hpbGQodGFza0NoZWNrYm94KTtcbiAgICAgICAgICAgICAgICB0YXNrTGFiZWwuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgICAgICAgICAgICAgICB0YXNrQ2VsbC5hcHBlbmRDaGlsZCh0YXNrTGFiZWwpO1xuICAgICAgICAgICAgICAgIGR1ZURhdGVDZWxsLmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlKTtcbiAgICAgICAgICAgICAgICB0YXNrRWRpdENlbGwuYXBwZW5kQ2hpbGQodGFza0VkaXRCdXR0b24pO1xuICAgICAgICAgICAgICAgIHRhc2tSb3cuYXBwZW5kQ2hpbGQodGFza0NlbGwpO1xuICAgICAgICAgICAgICAgIHRhc2tSb3cuYXBwZW5kQ2hpbGQoZHVlRGF0ZUNlbGwpO1xuICAgICAgICAgICAgICAgIHRhc2tSb3cuYXBwZW5kQ2hpbGQodGFza0VkaXRDZWxsKTtcblxuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMpIHtcblxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWRUYXNrc1RhYmxlLmFwcGVuZENoaWxkKHRhc2tSb3cpO1xuICAgICAgICAgICAgICAgICAgICB0YXNrQ2hlY2tib3guc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLCBcIlwiKVxuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlVGFza3NUYWJsZS5hcHBlbmRDaGlsZCh0YXNrUm93KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fSk7XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB0YXNrcztcbiIsImltcG9ydCBub21hZERhdGEgZnJvbSBcIi4vbm9tYWREYXRhXCI7XG5pbXBvcnQgdGFza3MgZnJvbSBcIi4vdGFza3NcIjtcbmltcG9ydCBkb21Db21wb25lbnRzIGZyb20gXCIuL2RvbUNvbXBvbmVudHNcIlxuXG5jb25zdCB0YXNrc0V2ZW50TGlzdGVuZXJzID0ge1xuXG4gICAgY3JlYXRlTmV3VGFzaygpIHtcblxuICAgICAgICBsZXQgdGFza1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrVGl0bGVJbnB1dFwiKS52YWx1ZTtcbiAgICAgICAgbGV0IGR1ZURhdGVGaWVsZFZhbGl1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0RhdGVJbnB1dFwiKS52YWx1ZTtcbiAgICAgICAgbGV0IHVzZXJJZCA9IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKSk7XG5cbiAgICAgICAgbGV0IGR1ZURhdGVBcnJheSA9IGR1ZURhdGVGaWVsZFZhbGl1ZS5zcGxpdChcIi1cIilcbiAgICAgICAgbGV0IGR1ZURhdGUgPSBgJHtkdWVEYXRlQXJyYXlbMV19ICR7ZHVlRGF0ZUFycmF5WzJdfSAke2R1ZURhdGVBcnJheVswXX1gO1xuXG4gICAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcblxuICAgICAgICAgICAgZGF0YVNldCA6IFwidGFza3NcIixcbiAgICAgICAgICAgIGZldGNoVHlwZSA6IFwiUE9TVFwiLFxuICAgICAgICAgICAgZGF0YUJhc2VPYmplY3QgOiB7XG4gICAgICAgICAgICAgICAgdXNlcklkIDogdXNlcklkLFxuICAgICAgICAgICAgICAgIHRhc2sgOiB0YXNrVGl0bGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWRDb21wbGV0aW9uRGF0ZSA6IGR1ZURhdGUsXG4gICAgICAgICAgICAgICAgY29tcGxldGUgOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oc2hpdCA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzaGl0KVxuICAgICAgICAgICAgJChcIiNvdXRwdXRcIikuZW1wdHkoKVxuICAgICAgICAgICAgdGFza3MuY3JlYXRlVGFza1RhYmxlcygpO1xuICAgICAgICB9KVxuICAgIH0sXG5cbiAgICBtYXJrVGFza0NvbXBsZXRlKCkge1xuICAgICAgICBsZXQgdGFza1RvRWRpdElkID0gZXZlbnQudGFyZ2V0LmlkLnNwbGl0KFwiX1wiKVsxXTtcblxuICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG5cbiAgICAgICAgICAgIGRhdGFTZXQgOiBcInRhc2tzXCIsXG4gICAgICAgICAgICBmZXRjaFR5cGUgOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW1iZWRJdGVtIDogYD8maWQ9JHt0YXNrVG9FZGl0SWR9YFxuICAgICAgICB9KS50aGVuKHBhcnNlZFRhc2tzID0+IHtcblxuXG4gICAgICAgICAgICBsZXQgdGFza0lkID0gcGFyc2VkVGFza3NbMF0uaWQ7XG4gICAgICAgICAgICBsZXQgdXNlcklkID0gcGFyc2VkVGFza3NbMF0udXNlcklkO1xuICAgICAgICAgICAgbGV0IHRhc2sgPSBwYXJzZWRUYXNrc1swXS50YXNrO1xuICAgICAgICAgICAgbGV0IGV4cGVjdGVkQ29tcGxldGlvbkRhdGUgPSBwYXJzZWRUYXNrc1swXS5leHBlY3RlZENvbXBsZXRpb25EYXRlO1xuICAgICAgICAgICAgbGV0IGNvbXBsZXRlID0gcGFyc2VkVGFza3NbMF0uY29tcGxldGU7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2tJZCwgdXNlcklkLCB0YXNrLCBleHBlY3RlZENvbXBsZXRpb25EYXRlLCBjb21wbGV0ZSlcblxuICAgICAgICAgICAgaWYgKGNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgY29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29tcGxldGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcbiAgICAgICAgICAgICAgICBwdXRJZCA6IHRhc2tUb0VkaXRJZCxcbiAgICAgICAgICAgICAgICBkYXRhU2V0IDogXCJ0YXNrc1wiLFxuICAgICAgICAgICAgICAgIGZldGNoVHlwZSA6IFwiUFVUXCIsXG4gICAgICAgICAgICAgICAgZGF0YUJhc2VPYmplY3QgOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiB0YXNrSWQsXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZCA6IHVzZXJJZCxcbiAgICAgICAgICAgICAgICAgICAgdGFzayA6IHRhc2ssXG4gICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkQ29tcGxldGlvbkRhdGU6IGV4cGVjdGVkQ29tcGxldGlvbkRhdGUsXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBjb21wbGV0ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLnRoZW4oc2hpdCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2hpdClcbiAgICAgICAgICAgICAgICAkKFwiI291dHB1dFwiKS5lbXB0eSgpXG4gICAgICAgICAgICAgICAgdGFza3MuY3JlYXRlVGFza1RhYmxlcygpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH0sXG5cbiAgICB0YXNrRWRpdEJ1dHRvbigpIHtcblxuICAgICAgICBsZXQgbnVtYmVyID0gZXZlbnQuY3VycmVudFRhcmdldC5pZDtcbiAgICAgICAgbGV0IHRhc2tBcnJheSA9IG51bWJlci5zcGxpdChcIl9cIik7XG4gICAgICAgIGxldCB0YXNrSWQgPSB0YXNrQXJyYXlbMV07XG5cbiAgICAgICAgbGV0IHRhc2tDZWxsVG9FbXB0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB0YXNrQ2VsbF8ke3Rhc2tJZH1gKTtcbiAgICAgICAgbGV0IHRhc2tMYWJsZVRvUmVtb3ZlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRhc2tMYWJlbF8ke3Rhc2tJZH1gKTtcbiAgICAgICAgbGV0IGR1ZURhdGVDZWxsVG9FbXB0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkdWVEYXRlQ2VsbF8ke3Rhc2tJZH1gKTtcbiAgICAgICAgbGV0IGR1ZURhdGVUb1JlbW92ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB0YXNrRHVlRGF0ZV8ke3Rhc2tJZH1gKTtcbiAgICAgICAgbGV0IHRhc2tFZGl0Q2VsbFRvRW1wdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdGFza0VkaXRDZWxsXyR7dGFza0lkfWApO1xuICAgICAgICBsZXQgdGFza0VkaXRCdXR0b25Ub1JlbW92ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB0YXNrRWRpdEJ1dHRvbl8ke3Rhc2tJZH1gKTtcblxuICAgICAgICBsZXQgdGFza1RvRWRpdFRleHQgPSB0YXNrTGFibGVUb1JlbW92ZS5pbm5lclRleHQ7XG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tUb0VkaXRUZXh0KVxuXG4gICAgICAgIGxldCB0YXNrVG9FZGl0VGl0bGUgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImlucHV0XCIsXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwidGFza1RvRWRpdFRpdGxlXCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgIGlkIDogYHRhc2tUb0VkaXRUaXRsZV8ke3Rhc2tJZH1gLFxuICAgICAgICAgICAgICAgIHZhbHVlIDogYCR7dGFza1RvRWRpdFRleHR9YFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGxldCB0YXNrRHVlRGF0ZVRvRWRpdCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwiaW5wdXRcIixcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJ0YXNrRHVlRGF0ZVRvRWRpdFwiLFxuICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICBpZCA6IGB0YXNrRHVlRGF0ZVRvRWRpdF8ke3Rhc2tJZH1gLFxuICAgICAgICAgICAgICAgIHR5cGUgOiBcImRhdGVcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGxldCBlZGl0ZWRUYXNrU3VibWl0QnV0dG9uID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJidXR0b25cIixcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJlZGl0ZWRUYXNrU3VibWl0QnV0dG9uXCIsXG4gICAgICAgICAgICBjb250ZW50IDogXCJTdW1iaXRcIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgaWQgOiBgZWRpdGVkVGFza1N1Ym1pdEJ1dHRvbl8ke251bWJlcn1gLFxuICAgICAgICAgICAgICAgIHR5cGUgOiBcImJ1dHRvblwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGFza0NlbGxUb0VtcHR5LnJlbW92ZUNoaWxkKHRhc2tMYWJsZVRvUmVtb3ZlKTtcbiAgICAgICAgdGFza0NlbGxUb0VtcHR5LmFwcGVuZENoaWxkKHRhc2tUb0VkaXRUaXRsZSlcbiAgICAgICAgZHVlRGF0ZUNlbGxUb0VtcHR5LnJlbW92ZUNoaWxkKGR1ZURhdGVUb1JlbW92ZSk7XG4gICAgICAgIGR1ZURhdGVDZWxsVG9FbXB0eS5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZVRvRWRpdCk7XG4gICAgICAgIHRhc2tFZGl0Q2VsbFRvRW1wdHkucmVtb3ZlQ2hpbGQodGFza0VkaXRCdXR0b25Ub1JlbW92ZSk7XG4gICAgICAgIHRhc2tFZGl0Q2VsbFRvRW1wdHkuYXBwZW5kQ2hpbGQoZWRpdGVkVGFza1N1Ym1pdEJ1dHRvbik7XG4gICAgICAgIGVkaXRlZFRhc2tTdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRhc2tzRXZlbnRMaXN0ZW5lcnMuc2F2ZVRhc2tFZGl0KVxuXG4gICAgfSxcbiAgICBzYXZlVGFza0VkaXQoKSB7XG4gICAgICAgIGxldCB0YXNrTnVtYmVyID0gZXZlbnQuY3VycmVudFRhcmdldC5pZDtcbiAgICAgICAgbGV0IHRhc2tBcnJheSA9IHRhc2tOdW1iZXIuc3BsaXQoXCJfXCIpO1xuICAgICAgICBsZXQgdGFza0lkID0gdGFza0FycmF5WzJdO1xuICAgICAgICBsZXQgdGFza0VkaXRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB0YXNrVG9FZGl0VGl0bGVfJHt0YXNrSWR9YCkudmFsdWU7XG4gICAgICAgIGxldCB0YXNrRWRpdERhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdGFza0R1ZURhdGVUb0VkaXRfJHt0YXNrSWR9YCkudmFsdWU7XG5cbiAgICAgICAgbGV0IGR1ZURhdGVBcnJheSA9IHRhc2tFZGl0RGF0ZS5zcGxpdChcIi1cIilcbiAgICAgICAgbGV0IGR1ZURhdGUgPSBgJHtkdWVEYXRlQXJyYXlbMV19ICR7ZHVlRGF0ZUFycmF5WzJdfSAke2R1ZURhdGVBcnJheVswXX1gO1xuXG5cbiAgICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xuXG4gICAgICAgICAgICBwdXRJZCA6IHRhc2tJZCxcbiAgICAgICAgICAgIGRhdGFTZXQgOiBcInRhc2tzXCIsXG4gICAgICAgICAgICBmZXRjaFR5cGUgOiBcIlBVVFwiLFxuICAgICAgICAgICAgZGF0YUJhc2VPYmplY3QgOiB7XG4gICAgICAgICAgICAgICAgdXNlcklkIDogTnVtYmVyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIikpLFxuICAgICAgICAgICAgICAgIHRhc2s6IHRhc2tFZGl0SW5wdXQsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWRDb21wbGV0aW9uRGF0ZTogZHVlRGF0ZSxcbiAgICAgICAgICAgICAgICBjb21wbGV0ZSA6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4oc2hpdCA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzaGl0KVxuICAgICAgICAgICAgJChcIiNvdXRwdXRcIikuZW1wdHkoKTtcbiAgICAgICAgICAgIHRhc2tzLmNyZWF0ZVRhc2tUYWJsZXMoKTtcbiAgICAgICAgfSlcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCB0YXNrc0V2ZW50TGlzdGVuZXJzOyIsImltcG9ydCBkb21Db21wb25lbnRzIGZyb20gXCIuL2RvbUNvbXBvbmVudHNcIjtcbmltcG9ydCB0YXNrc0V2ZW50TGlzdGVuZXJzIGZyb20gXCIuL3Rhc2tzRXZlbnRMaXN0ZW5lcnNcIjtcblxuY29uc3QgdGFza3NQb3B1cCA9IHtcblxuICAgIGNyZWF0ZU5ld1Rhc2tGb3JtKCkge1xuICAgICAgICBsZXQgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tzQ29udGFpbmVyXCIpO1xuICAgICAgICBsZXQgdGFza1BvcHVwRGl2ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJkaXZcIixcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJ0YXNrUG9wdXBEaXZcIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgaWQgOiBcInRhc2tQb3B1cERpdlwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBuZXdUYXNrRm9ybSA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwiZGl2XCIsXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwibmV3VGFza0Zvcm1cIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgaWQgOiBcIm5ld1Rhc2tGb3JtXCIsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBuZXdUYXNrRm9ybVRpdGxlID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJoMlwiLFxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcIm5ld1Rhc2tGb3JtVGl0bGVcIixcbiAgICAgICAgICAgIGNvbnRlbnQgOiBcIkNyZWF0ZSBBIE5ldyBUYXNrXCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgIGlkIDogXCJuZXdUYXNrRm9ybVRpdGxlXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGhvcml6b250YWxMaW5lID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50ICh7XG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwiaHJcIlxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgdGFza1RpdGxlSW5wdXQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQgKHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJpbnB1dFwiLFxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcInRhc2tUaXRsZUlucHV0XCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgIGlkIDogXCJ0YXNrVGl0bGVJbnB1dFwiLFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyIDogXCJFbnRlciBuZXcgdGFzayB0aXRsZVwiLFxuICAgICAgICAgICAgICAgIHR5cGUgOiBcInRleHRcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgdGFza0RhdGVJbnB1dCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCAoe1xuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImlucHV0XCIsXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwidGFza0RhdGVJbnB1dFwiLFxuICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICBpZCA6IFwidGFza0RhdGVJbnB1dFwiLFxuICAgICAgICAgICAgICAgIHR5cGUgOiBcImRhdGVcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgc3VibWl0TmV3VGFza0J1dHRvbiA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCAoe1xuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcInN1Ym1pdE5ld1Rhc2tCdXR0b25cIixcbiAgICAgICAgICAgIGNvbnRlbnQgOiBcIlN1Ym1pdFwiLFxuICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICBpZCA6IFwic3VibWl0TmV3VGFza0J1dHRvblwiLFxuICAgICAgICAgICAgICAgIHR5cGUgOiBcImJ1dHRvblwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHN1Ym1pdE5ld1Rhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRhc2tzRXZlbnRMaXN0ZW5lcnMuY3JlYXRlTmV3VGFzaylcbiAgICAgICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQobmV3VGFza0Zvcm1UaXRsZSk7XG4gICAgICAgIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKGhvcml6b250YWxMaW5lKTtcbiAgICAgICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza1RpdGxlSW5wdXQpO1xuICAgICAgICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrRGF0ZUlucHV0KTtcbiAgICAgICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQoc3VibWl0TmV3VGFza0J1dHRvbik7XG4gICAgICAgIHRhc2tQb3B1cERpdi5hcHBlbmRDaGlsZChuZXdUYXNrRm9ybSk7XG4gICAgICAgIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tQb3B1cERpdik7XG4gICAgfVxuXG59XG5leHBvcnQgZGVmYXVsdCB0YXNrc1BvcHVwOyJdfQ==
