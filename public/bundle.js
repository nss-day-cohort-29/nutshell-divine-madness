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
      }).then(() => {
        $("#output").empty();

        _friends.default.defineCurrentUsersFriends();

        _friends.default.initializePotentialFriends();
      });
    });
  },

  friendsAddFriend() {
    let userId = sessionStorage.getItem("userId");
    let currentUser = Number(userId);
    const friendToBeAdded = event.target.id.split("-")[3];
    console.log(`user${currentUser}`, `Adding Friend${friendToBeAdded}`);
    let goodByeNonFriend = document.getElementById(`potentialFriend-${friendToBeAdded}`);
    goodByeNonFriend.parentNode.removeChild(goodByeNonFriend); // alert(`${event.target.previousSibling.innerText} is now your friend!`);

    _nomadData.default.connectToData({
      "dataSet": "friends",
      "fetchType": "POST",
      "dataBaseObject": {
        "userId": currentUser,
        "otherFriendId": Number(friendToBeAdded)
      }
    }).then(() => {
      $("#output").empty();

      _friends.default.defineCurrentUsersFriends();

      _friends.default.initializePotentialFriends();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2Rhc2hib2FyZC5qcyIsIi4uL3NjcmlwdHMvZG9tQ29tcG9uZW50cy5qcyIsIi4uL3NjcmlwdHMvZG9tUmVuZGVyZXIuanMiLCIuLi9zY3JpcHRzL2V2ZW50TGlzdGVuZXJzLmpzIiwiLi4vc2NyaXB0cy9ldmVudFBhZ2VMaXN0ZW5lcnMuanMiLCIuLi9zY3JpcHRzL2V2ZW50cy5qcyIsIi4uL3NjcmlwdHMvZnJpZW5kcy5qcyIsIi4uL3NjcmlwdHMvZnJpZW5kc0V2ZW50c0xpc3RlbmVyLmpzIiwiLi4vc2NyaXB0cy9tZXNzYWdlcy5qcyIsIi4uL3NjcmlwdHMvbWVzc2FnZXNFdmVudExpc3RlbmVycy5qcyIsIi4uL3NjcmlwdHMvbmV3cy5qcyIsIi4uL3NjcmlwdHMvbm9tYWREYXRhLmpzIiwiLi4vc2NyaXB0cy90YXNrcy5qcyIsIi4uL3NjcmlwdHMvdGFza3NFdmVudExpc3RlbmVycy5qcyIsIi4uL3NjcmlwdHMvdGFza3NQb3B1cC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUNBQTs7OztBQUNBLE1BQU0sU0FBUyxHQUFHO0FBQ2hCLEVBQUEsY0FBYyxHQUFFO0FBQ2Q7QUFDQSxRQUFJLFFBQVEsR0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BQWhCO0FBcUNFLElBQUEsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhLElBQWIsQ0FBa0IsUUFBbEI7O0FBQ0EsNEJBQWUscUJBQWY7O0FBQ0EsSUFBQSxDQUFDLENBQUMsUUFBRCxDQUFELENBQVksS0FBWixDQUFrQix3QkFBZSxTQUFqQztBQUNBLElBQUEsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUIsS0FBckIsQ0FBMkIsd0JBQWUsZ0JBQTFDO0FBQ0EsSUFBQSxDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQixLQUFyQixDQUEyQixLQUFLLGNBQWhDLEVB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LENBQXdCLG1CQUF4QjtBQUNBLElBQUEsWUFBWSxDQUFDLFdBQWIsQ0FBeUIsV0FBekI7QUFDQSxJQUFBLGNBQWMsQ0FBQyxXQUFmLENBQTJCLFlBQTNCO0FBQ0g7O0FBdEVjLENBQW5CO2VBeUVlLFUiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgZXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vZXZlbnRMaXN0ZW5lcnNcIlxuY29uc3QgZGFzaGJvYXJkID0ge1xuICBidWlsZExvZ2luRm9ybSgpe1xuICAgIC8vdXNpbmcgc3RyaW5nIGludGVycG9sYXRpb24gdG8gY3JlYXRlIHRoZSBmb3JtXG4gICAgbGV0IGZvcm1IVE1MID0gYFxuICAgIDxoMSBjbGFzcyA9IFwidC1ib3JkZXJcIj5Ob21hZHM8L2gxPlxuICAgICAgPHNlY3Rpb24gY2xhc3MgPSBcImZvcm1cIj5cbiAgICAgICAgPGZvcm0gYWN0aW9uPVwiXCIgY2xhc3MgPSByZWdpc3RlckZvcm0+XG4gICAgICAgICAgPGlucHV0IGlkID0gXCJyZWdVc2VyTmFtZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXIgPSBcIlVzZXJuYW1lXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgPGlucHV0IGlkID0gXCJyZWdFbWFpbFwiIHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyID0gXCJFbWFpbFwiIHJlcXVpcmVkPlxuICAgICAgICAgIDxpbnB1dCBpZCA9IFwicmVnUGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlciA9IFwiUGFzc3dvcmRcIiByZXF1aXJlZD5cbiAgICAgICAgICA8aW5wdXQgaWQgPSBcInJlZ0NvbmZpcm1QYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyID0gXCJDb25maXJtIFBhc3N3b3JkXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgPGJ1dHRvbiBpZCA9IFwicmVnaXN0ZXJCdXR0b25cIj5DcmVhdGUgQWNjb3VudDwvYnV0dG9uPlxuICAgICAgICAgIDxwIGNsYXNzID0gXCJtZXNzYWdlXCI+QWxyZWFkeSBhIFJlZ2lzdGVyZWQgTWVtYmVyPyA8YSBocmVmID0gXCIjXCI+TG9nSW4gPC9hPjwvcD5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8Zm9ybSBjbGFzcyA9IFwibG9naW4tZm9ybVwiPlxuICAgICAgICAgIDxpbnB1dCBpZCA9IFwidXNlck5hbWVWYWxcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyID0gXCJVc2VybmFtZVwiPlxuICAgICAgICAgIDxpbnB1dCBpZCA9IFwicGFzc3dvcmRWYWxcIiB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlciA9IFwiUGFzc3dvcmRcIj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGUgPSBcImJ1dHRvblwiIGlkID0gXCJsb2dJblwiPkxvZ2luPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBpZCA9IFwibW9kYWxCdXR0b25cIj5Ob21hZHMgTWlzc2lvbjwvYnV0dG9uPlxuICAgICAgICAgIDxwIGNsYXNzID0gXCJtZXNzYWdlXCI+RG9uJ3QgaGF2ZSBhbiBhY2NvdW50PyA8YSBocmVmID0gXCIjXCI+UmVnaXN0ZXI8L2E+PC9wPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiBpZD1cIm5vbWFkTW9kYWxcIiBjbGFzcz1cIm1vZGFsXCI+XG4gICAgICA8IS0tIE1vZGFsIGNvbnRlbnQgLS0+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNsb3NlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICAgIDxoMj5UaGUgUHVycG9zZSBCZWhpbmQgTm9tYWRzPC9oMj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICA8aDM+VGhlIG1pbmRzIGJlaGluZyBOb21hZHM8L2gzPlxuICAgICAgICAgICAgPGltZyBpZCA9IFwiY3JlYXRvcnNJbWFnZVwiIHNyYyA9IFwiaW1hZ2VzL25vbWFkQ3JlYXRvcnMuanBnXCIgYWx0ID0gXCJhcHBsaWNhdGlvbiBjcmVhdG9yc1wiPlxuICAgICAgICAgICAgPHA+QXMgb3V0ZG9vcnNtYW4sIGVudmlyb25tZW50YWxpc3QsIGFuZCBmaWxtbWFrZXJzIGNvbnRpbnVlIHRvIGdyb3cuIFNvIGRvIHRoZSBhZHZlbnR1cm91cyBzcGlyaXRzIG9mIHRob3NlIHdobyBlbWJyYWNlIGNvbnNjaW91cyBjb25zdW1lcmlzbSBhbmQgc3VzdGFpbmFibGUgbGl2aW5nLiBUaGUgcHVycG9zZSBpcyB0byBtYWtlIGEgcG9pbnQgb2YgcGx1Z2dpbmcgaW50byBtb2Rlcm4gbGlmZSBhbmQgY29ubmVjdGluZyB3aXRoIHlvdXIgZmVsbG93IG5vbWFkcyBmcm9tIGFueXdoZXJlIHlvdSBtYXkgYmUuIFNoYXJlIHlvdXIgbG9jYXRpb24sIE1lZXQgdXAsIEV4Y2hhbmdlIHN0b3JpZXMsIENyZWF0ZSByZWxhdGlvbnNoaXBzIHdpdGggcGVvcGxlIHdobyBoYXZlIHNpbWlsYXIgaW50ZXJlc3QgYW5kIGVuaGFuY2UgeW91ciB0cmF2ZWxpbmcgZXhwZXJpZW5jZSB3aXRoIG5vbWFkcy48L3A+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgICAgICAgICA8aDM+Q3JlYXRlZCBCeTogRGl2aW5lIE1hZG5lc3MmY29weTwvaDM+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICBgXG4gICAgICAkKFwiI291dHB1dFwiKS5odG1sKGZvcm1IVE1MKVxuICAgICAgZXZlbnRMaXN0ZW5lcnMubW9kYWxEaXNwbGF5QW5pbWF0aW9uKClcbiAgICAgICQoXCIjbG9nSW5cIikuY2xpY2soZXZlbnRMaXN0ZW5lcnMudXNlckxvZ2luKVxuICAgICAgJChcIiNyZWdpc3RlckJ1dHRvblwiKS5jbGljayhldmVudExpc3RlbmVycy51c2VyUmVnaXN0cmF0aW9uKVxuICAgICAgJChcIiNyZWdpc3RlckJ1dHRvblwiKS5jbGljayh0aGlzLmJ1aWxkTG9naW5Gb3JtKVxuICAgICAgLy8gJChcIiNyZWdpc3RlckJ1dHRvblwiKS5jbGljayhldmVudExpc3RlbmVycy51c2VyTG9naW4pXG5cbiAgICB9LFxuICBjcmVhdGVOYXZCYXIoKXtcbiAgICBsZXQgbmF2SFRNTCA9IGBcbiAgICAgIDxuYXY+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGkgaWQgPSBcIm5ld3NMaW5rXCI+PGEgY2xhc3MgPSBcImFjdGl2ZVwiIGhyZWYgPSBcIiNcIj5BcnRpY2xlczwvYT48L2xpPlxuICAgICAgICAgIDxsaSBpZCA9IFwiZXZlbnRMaW5rXCI+PGEgaHJlZiA9IFwiI1wiPkV2ZW50czwvYT48L2xpPlxuICAgICAgICAgIDxsaSBpZCA9IFwidGFza3NMaW5rXCI+PGEgaHJlZiA9IFwiI1wiPlRhc2tzPC9hPjwvbGk+XG4gICAgICAgICAgPGxpIGlkID0gXCJmcmllbmRzTGlua1wiPjxhIGhyZWYgPSBcIiNcIj5GcmllbmRzPC9hPjwvbGk+XG4gICAgICAgICAgPGxpIGlkID0gXCJtZXNzYWdlc0xpbmtcIj48YSBocmVmID0gXCIjXCI+TWVzc2FnZXM8L2E+PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3MgPSBcInNpZ25PdXRcIiBpZCA9IFwibG9nb1wiID48YSBocmVmPVwiI1wiPlNpZ24gT3V0PC9hPjwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L25hdj5cbiAgICBgXG4gICAgbGV0IG5hdkJhckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi1uYXZcIilcbiAgICBuYXZCYXJDb250YWluZXIuaW5uZXJIVE1MID0gbmF2SFRNTFxuXG4gICAgLypOYXZpZ2F0aW9uIGxpbmsgZXZlbnQgbGlzdGVuZXJzKi9cbiAgICAkKFwiI21lc3NhZ2VzTGlua1wiKS5jbGljayhldmVudExpc3RlbmVycy5tZXNzYWdlc05hdkxpbmspXG4gICAgJChcIiNldmVudExpbmtcIikuY2xpY2soZXZlbnRMaXN0ZW5lcnMuZXZlbnRzTmF2TGluaylcbiAgICAkKFwiI2ZyaWVuZHNMaW5rXCIpLmNsaWNrKGV2ZW50TGlzdGVuZXJzLmZyaWVuZHNOYXZMaW5rKVxuICAgICQoXCIjdGFza3NMaW5rXCIpLmNsaWNrKGV2ZW50TGlzdGVuZXJzLnRhc2tzTmF2TGluaylcbiAgICAkKFwiI25ld3NMaW5rXCIpLmNsaWNrKGV2ZW50TGlzdGVuZXJzLm5ld3NOYXZMaW5rKVxuXG4gICAgLyphZnRlciBzaWdub3V0IGlzIGNsaWNrZWQgc2Vzc2lvbiBzdG9yYWdlIGlzIGNsZWFyZWQgYW5kIHRoZSBsb2dJbi9yZWdpc3RlciBmb3JtIGlzIHByZXNlbnRlZCBmcm9tIGhlcmVcbiAgICBhbm90aGVyIHVzZXIgY2FuIGxvZyBpbiBhbmQgc2Vzc2lvbiBzdG9yYWdlIHdpbGwga2ljayBvZmYgZm9yIHRoZSBuZXcgbG9nZ2VkIGluIHVzZXIqL1xuICAgICQoXCIuc2lnbk91dFwiKS5jbGljayhldmVudExpc3RlbmVycy5ub21hZE5hdkxpbmspXG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgZGFzaGJvYXJkIiwiY29uc3QgZG9tQ29tcG9uZW50cyA9IHtcbiAgY3JlYXRlRG9tRWxlbWVudCh7IGVsZW1lbnRUeXBlLCBjb250ZW50ID0gbnVsbCwgY3NzQ2xhc3MsIGF0dHJpYnV0ZXMgPSB7fSB9KSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudFR5cGUpO1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgIGlmIChjc3NDbGFzcykge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzKTtcbiAgICB9XG4gICAgZm9yIChsZXQga2V5IGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBkb21Db21wb25lbnRzIiwiaW1wb3J0IGV2ZW50cyBmcm9tIFwiLi9ldmVudHNcIjtcblxuaW1wb3J0IG5vbWFkRGF0YSBmcm9tIFwiLi9ub21hZERhdGFcIjtcbmltcG9ydCBmcmllbmRzIGZyb20gXCIuL2ZyaWVuZHNcIjtcbmltcG9ydCBuZXdzIGZyb20gXCIuL25ld3NcIlxuaW1wb3J0IG1lc3NhZ2VzIGZyb20gXCIuL21lc3NhZ2VzXCI7XG5pbXBvcnQgZGFzaEJvYXJkIGZyb20gXCIuL2Rhc2hib2FyZFwiXG4vLyBpbXBvcnQgZG9tQ29tcG9uZW50cyBmcm9tIFwiLi9kb21Db21wb25lbnRzXCI7XG5pbXBvcnQgZXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vZXZlbnRMaXN0ZW5lcnNcIjtcblxuLy9CVUlMRFMgTkFJR0FUSU9OQkFSLy9cbi8vIGRvbUNvbXBvbmVudHMuY3JlYXRlTmF2QmFyKClcbmRhc2hCb2FyZC5idWlsZExvZ2luRm9ybSgpXG4kKFwibW9kYWxCdXR0b25cIikuY2xpY2soZXZlbnRMaXN0ZW5lcnMubW9kYWxEaXNwbGF5QW5pbWF0aW9uKVxuXG4vL05FV1MgU0VDVElPTlxuLy8gbmV3cy5zYXZlKCk7XG4vLyBuZXdzLmFsbFNhdmVkKCk7XG4vLyBuZXdzLmdldE5ld3MoKTtcblxuLy8gbmV3cy5uZXdzRWxlbWVudENyZWF0b3IoKTtcbi8vIG5ld3MubmV3c0VsZW1lbnRDcmVhdG9yKCk7XG5cbiIsImltcG9ydCBkYXNoYm9hcmQgZnJvbSBcIi4vZGFzaGJvYXJkXCJcbmltcG9ydCBkb21Db21wb25lbnRzIGZyb20gXCIuL2RvbUNvbXBvbmVudHNcIjtcbmltcG9ydCBub21hZERhdGEgZnJvbSBcIi4vbm9tYWREYXRhXCI7XG5pbXBvcnQgZXZlbnRzIGZyb20gXCIuL2V2ZW50c1wiO1xuaW1wb3J0IG1lc3NhZ2VzIGZyb20gXCIuL21lc3NhZ2VzXCI7XG5pbXBvcnQgZnJpZW5kcyBmcm9tIFwiLi9mcmllbmRzXCI7XG5pbXBvcnQgbmV3cyBmcm9tIFwiLi9uZXdzXCI7XG5pbXBvcnQgdGFza3MgZnJvbSBcIi4vdGFza3NcIjtcblxuY29uc3QgZXZlbnRMaXN0ZW5lcnMgPSB7XG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBMT0dJTiBGT1JNOiB1c2VyIGVudGVycyBVc2VybmFtZSBhbmQgUGFzc3dvcmQuIHdoZW4gVXNlciBjbGlja3MgbG9naW4sIHRoZSBpbnB1dCBmaWVsZCBhbmQgTk9NQURTIGhlYWRlciBkaXNhcHBlYXJcbiAgICBhbmQgdGhlIHVzZXIgd2lsbCBiZSBkaXNwbGF5ZWQgdGhlIFwiRGFzaGJvYXJkXCIgYW5kIHRoZSBuYXZpZ2F0aW9uIGJhci4gVXBvbiBsb2dpbiwgc2Vzc2lvblN0b3JhZ2UgaXMgc3RhcnRlZC4gSW4gdGhlIENvbnNvbGVcbiAgICB5b3Ugd2lsbCBiZSBhYmxlIHRvIHNlZSBXaG8gaXMgbG9nZ2VkIGluIGFuZCB3aGF0IHRoZWlyIHVzZXJJZCBpcy4gaWUuIDEsMiwzLDQgZXRjLlxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICB1c2VyTG9naW4oKXtcbiAgICAgICAgbGV0IGxvZ0luVmFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN1c2VyTmFtZVZhbFwiKS52YWx1ZVxuICAgICAgICBsZXQgcGFzc3dvcmRWYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bhc3N3b3JkVmFsXCIpLnZhbHVlXG4gICAgICAgIC8vZ2V0IHRvIGNvbXBhcmVcbiAgICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xuXG4gICAgICAgIFwiZGF0YVNldFwiIDogXCJ1c2Vyc1wiLFxuICAgICAgICBcImZldGNoVHlwZVwiIDogXCJHRVRcIixcbiAgICAgICAgXCJlbWJlZEl0ZW1cIiA6IFwiP19lbWJlZD11c2Vyc1wiXG5cbiAgICB9KS50aGVuKHBhcnNlZFVzZXJzID0+IHtcblxuICAgICAgICBwYXJzZWRVc2Vycy5mb3JFYWNoKHVzZXIgPT4ge1xuICAgICAgICAgICAgICAvKklmIGxvZ2luIGNyZWRlbnRpYWxzIG1hdGNoIHRob3NlIGluIGRhdGFiYXNlLmpzb24uIFdlIHdhbnQgdGhlIHVzZXIgdG8gYmUgZGlzcGxheWVkIHRoZWlyIFwiZGFzaGJvYWRcIlxuICAgICAgICAgICAgICBhbmQgbmF2aWdhdGlvbiBiYXIuIFNvIHdlIG5lZWQgdG8gc2V0IGRpc3BsYXkgdG8gbm9uZSBhbmQgaW52b2tlIHRoZSBmdW5jdGlvbiAtIGNyZWF0ZU5hdkJhcigpKi9cbiAgICAgICAgICAgIGlmKGxvZ0luVmFsID09PSB1c2VyLnVzZXJOYW1lICYmIHBhc3N3b3JkVmFsID09PSB1c2VyLnBhc3N3b3JkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vaGlkZXMgTk9NQUQgaGVhZGluZ1xuICAgICAgICAgICAgICAgICAgICAkKFwiLnQtYm9yZGVyXCIpLmhpZGUoKVxuICAgICAgICAgICAgICAgICAgICAvL2hpZGVzIHRoZSBmb3JtXG4gICAgICAgICAgICAgICAgICAgICQoXCIuZm9ybVwiKS5oaWRlKClcbiAgICAgICAgICAgICAgICAgICAgLy9kaXNwbGF5cyBuYXZpZ2F0aW4gYmFyXG4gICAgICAgICAgICAgICAgICAgIGRhc2hib2FyZC5jcmVhdGVOYXZCYXIoKVxuICAgICAgICAgICAgICAgICAgICAvL3Nlc3Npb24gc3RvcmFnZVxuXG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJ1c2VySWRcIiwgdXNlci5pZClcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIilcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyB2ZXJpZnlpbmcgdGhhdCBjcmVkZW50aWFscyBtYXRjaCBhbmQgdXNlciBpcyBsb2dnZWQgaW5cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb2dnZWQgaW4gYXNcIiArIFwiIFwiICsgdXNlci51c2VyTmFtZSlcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ5b3VyIHVzZXIgSUQgaXM6IFwiICsgdXNlcklkKVxuXG4gICAgICAgICAgICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xuICAgICAgICAgICAgICAgICAgICBcImRhdGFTZXRcIiA6IFwidXNlcnNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJmZXRjaFR5cGVcIiA6IFwiR0VUXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0YUJhc2VPYmplY3RcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZW1iZWRJdGVtXCIgOiBcIj9fZW1iZWQ9dXNlcnNcIlxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4odXNlcnMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB1c2Vycy5mb3JFYWNoKHVzZXIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVzZXIuaWQgPT09IE51bWJlcih1c2VySWQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdXRwdXRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGB3ZWxjb21lICR7dXNlci51c2VyTmFtZX1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjc3NDbGFzczogXCJ3ZWxjb21lLXVzZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIFJFR0lTVFJBVElPTiBGT1JNOiBXaGVuIHJlZ2lzdGVyaW5nIGZvciBhbiBhY2NvdW50IHRoZSB1c2VyIHdpbGwgZW50ZXIgZGVzaXJlZCB1c2VybmFtZSwgZW1haWwsIGFuZCBwYXNzd29yZFxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICB1c2VyUmVnaXN0cmF0aW9uKCl7XG4gICAgICAgIGxldCByZWdVc2VyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVnVXNlck5hbWVcIikudmFsdWVcbiAgICAgICAgbGV0IHJlZ0VtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZWdFbWFpbFwiKS52YWx1ZVxuICAgICAgICBsZXQgcmVnUGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JlZ1Bhc3N3b3JkXCIpLnZhbHVlXG4gICAgICAgIC8vIGxldCByZWdDb25maXJtUGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JlZ1VzZXJOYW1lXCIpLnZhbHVlXG5cbiAgICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xuXG4gICAgICAgICAgICAgICAgXCJkYXRhU2V0XCIgOiBcInVzZXJzXCIsXG4gICAgICAgICAgICAgICAgXCJmZXRjaFR5cGVcIiA6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgIFwiZGF0YUJhc2VPYmplY3RcIiA6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ1c2VyTmFtZVwiOiByZWdVc2VyTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgXCJlbWFpbFwiOiByZWdFbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgXCJwYXNzd29yZFwiOiByZWdQYXNzd29yZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLnRoZW4oXG4gICAgICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICAgICAgICAgICAgXCJkYXRhU2V0XCIgOiBcInVzZXJzXCIsXG4gICAgICAgICAgICAgICAgXCJmZXRjaFR5cGVcIiA6IFwiR0VUXCIsXG4gICAgICAgICAgICAgICAgXCJlbWJlZEl0ZW1cIiA6IGA/dXNlck5hbWU9JHtyZWdVc2VyTmFtZX1gXG4gICAgICAgICAgICB9KS50aGVuKHVzZXIgPT57XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codXNlcilcbiAgICAgICAgICAgICAgICB1c2VyLmZvckVhY2goIHggPT57XG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJ1c2VySWRcIiwgeC5pZClcblxuICAgICAgICAgICAgICAgIC8vaGlkZXMgTk9NQUQgaGVhZGluZ1xuICAgICAgICAgICAgICAgICQoXCIudC1ib3JkZXJcIikuaGlkZSgpXG4gICAgICAgICAgICAgICAgLy9oaWRlcyB0aGUgZm9ybVxuICAgICAgICAgICAgICAgICQoXCIuZm9ybVwiKS5oaWRlKClcbiAgICAgICAgICAgICAgICAvL2Rpc3BsYXlzIG5hdmlnYXRpbiBiYXJcbiAgICAgICAgICAgICAgICBkYXNoYm9hcmQuY3JlYXRlTmF2QmFyKClcbiAgICAgICAgICAgICAgICBsZXQgdXNlcklkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKVxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cgdmVyaWZ5aW5nIHRoYXQgY3JlZGVudGlhbHMgbWF0Y2ggYW5kIHVzZXIgaXMgbG9nZ2VkIGluXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb2dnZWQgaW4gYXNcIiArIFwiIFwiICsgeC51c2VyTmFtZSlcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInlvdXIgdXNlciBJRCBpczogXCIgKyB1c2VySWQpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pKVxuICAgICAgICB9LFxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgTU9EQUw6IHVzZXIgd2lsbCBjbGljayB0aGUgTk9NQUQgTUlTU0lPTiBidXR0b24gYW5kIGEgbW9kYWwgd2lsbCBwb3AgdXAgZGVzY3JpYmluZyB3aGF0IHRoZSBhcHBsaWNhdGlvbiBpcyBhYm91dFxuICAgIGFuZCB3aG8gaXQgaXMgdGFpbG9yZWQgdG93YXJkc1xuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICBtb2RhbERpc3BsYXlBbmltYXRpb24oKXtcbiAgICAgICAgbGV0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub21hZE1vZGFsXCIpO1xuXG4gICAgICAgIC8vIHRhcmdldCBtb2RhbCB0byBvcGVuIGl0XG4gICAgICAgIGxldCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsQnV0dG9uXCIpO1xuXG4gICAgICAgIC8vIEdldCB0aGUgPHNwYW4+IGVsZW1lbnQgdGhhdCBjbG9zZXMgdGhlIG1vZGFsXG4gICAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNsb3NlXCIpWzBdO1xuICAgICAgICAvLyBXaGVuIHRoZSB1c2VyIGNsaWNrcyB0aGUgYnV0dG9uLCBvcGVuIHRoZSBtb2RhbFxuICAgICAgICBidG4ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICB9XG4gICAgICAgIC8vIFdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIDxzcGFuPiAoeCksIGNsb3NlIHRoZSBtb2RhbFxuICAgICAgICBzcGFuLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgICAgIC8vIFdoZW4gdGhlIHVzZXIgY2xpY2tzIGFueXdoZXJlIG91dHNpZGUgb2YgdGhlIG1vZGFsLCBjbG9zZSBpdFxuICAgICAgICB3aW5kb3cub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09IG1vZGFsKSB7XG4gICAgICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICQoXCIubWVzc2FnZSBhXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICQoXCJmb3JtXCIpLmFuaW1hdGUoe2hlaWdodDogXCJ0b2dnbGVcIiwgb3BhY2l0eTogXCJ0b2dnbGVcIn0sIFwic2xvd1wiKVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBOQVZCQVIgTEkgRUxJU1RFTkVSUzogV2hlbiB1c2VyIGNsaWNrcyBhbiBpdGVtIGluIHRoZSBOQVZCQVIgdGhlIGNvbnRlbnQgYXNzb2NpYXRlZCB3aXRoIHRoYXQgdGFiIHdpbGwgcG9wdWxhdGUgdGhlIERPTVxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICBtZXNzYWdlc05hdkxpbmsoKXtcbiAgICAgICAgbWVzc2FnZXMuY3JlYXRlTWVzc2FnZUJvYXJkKClcbiAgICAgICAgY29uc29sZS5sb2coXCJ3b3JraW5nXCIpXG4gICAgICAgIGZyaWVuZHMuYnVpbGRGcmllbmRTZWFyY2hCYXIoKVxuXG4gICAgfSxcbiAgICBldmVudHNOYXZMaW5rKCl7XG4gICAgICAgICAgICBldmVudHMuc2hvd0V2ZW50Rm9ybSgpXG4gICAgICAgICAgICBmcmllbmRzLmJ1aWxkRnJpZW5kU2VhcmNoQmFyKClcbiAgICAgICAgICAgIC8vYXBwZW5kVXNlckV2ZW50XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImV2ZW50cyBjbGlja2VkXCIpXG4gICAgfSxcbiAgICBmcmllbmRzTmF2TGluaygpe1xuICAgICAgICBjb25zb2xlLmxvZyhcImZyaWVuZHMgbmF2IGxpbmsgY2xpY2tlZFwiKVxuICAgICAgICBmcmllbmRzLmRlZmluZUN1cnJlbnRVc2Vyc0ZyaWVuZHMoKTtcbiAgICAgICAgZnJpZW5kcy5pbml0aWFsaXplUG90ZW50aWFsRnJpZW5kcygpO1xuXG4gICAgfSxcbiAgICBuZXdzTmF2TGluaygpe1xuICAgICAgICAvL05FV1MgU0VDVElPTlxuICAgICAgICBuZXdzLnNhdmUoKTtcbiAgICAgICAgbmV3cy5hbGxTYXZlZCgpO1xuICAgICAgICBuZXdzLmdldE5ld3MoKTtcbiAgICAgICAgbmV3cy5uZXdzRWxlbWVudENyZWF0b3IoKTtcbiAgICAgICAgZnJpZW5kcy5idWlsZEZyaWVuZFNlYXJjaEJhcigpXG4gICAgICAgIGNvbnNvbGUubG9nKFwibmV3cyBsaW5rIGNsaWNrZWRcIilcbiAgICB9LFxuICAgIHRhc2tzTmF2TGluaygpe1xuICAgICAgICB0YXNrcy5jcmVhdGVUYXNrVGFibGVzKClcbiAgICAgICAgZnJpZW5kcy5idWlsZEZyaWVuZFNlYXJjaEJhcigpXG4gICAgfSxcbiAgICBub21hZE5hdkxpbmsoKXtcbiAgICAgICAgZGFzaGJvYXJkLmJ1aWxkTG9naW5Gb3JtKClcbiAgICAgICAgJChcIm5hdlwiKS5oaWRlKClcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2UuY2xlYXIoKVxuICAgICAgICBjb25zb2xlLmxvZyhcInNpZ25lZCBvdXRcIilcbiAgICB9LFxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBFTkQgT0YgTkFWSUdBVElPTiBFVkVOVExJU1RFTkVSU1xuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiAgICBmcmllbmRzRGVsZXRlRnJpZW5kICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0KTtcblxuICAgIH0sXG4gICAgaGFuZGxlRXZlbnRTYXZlQnV0dG9uKCkge1xuICAgICAgICBjb25zdCBuYW1lSW5wdXR0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2V2ZW50TmFtZVwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZGF0ZUlucHV0dGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNldmVudERhdGVcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IHRpbWVJbnB1dHRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXZlbnRUaW1lXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBsb2NhdGlvbklucHV0dGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNldmVudExvY2F0aW9uXCIpLnZhbHVlO1xuXG4gICAgICAgIGNvbnN0IGV2ZW50T2JqZWN0ID0ge1xuICAgICAgICAgICAgZXZlbnROYW1lOiBuYW1lSW5wdXR0ZWQsXG4gICAgICAgICAgICBldmVudERhdGU6IGRhdGVJbnB1dHRlZCxcbiAgICAgICAgICAgIGV2ZW50VGltZTogdGltZUlucHV0dGVkLFxuICAgICAgICAgICAgZXZlbnRMb2NhdGlvbjogbG9jYXRpb25JbnB1dHRlZFxuICAgICAgICB9O1xuXG5cbiAgICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xuICAgICAgICAgICAgZGF0YVNldDogXCJldmVudHNcIixcbiAgICAgICAgICAgIGZldGNoVHlwZTogXCJQT1NUXCIsXG4gICAgICAgICAgICBkYXRhQmFzZU9iamVjdDoge1xuICAgICAgICAgICAgICAgIHVzZXJJZDogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSxcbiAgICAgICAgICAgICAgICBldmVudE5hbWU6IGV2ZW50T2JqZWN0LmV2ZW50TmFtZSxcbiAgICAgICAgICAgICAgICBldmVudERhdGU6IGV2ZW50T2JqZWN0LmV2ZW50RGF0ZSxcbiAgICAgICAgICAgICAgICBldmVudFRpbWU6IGV2ZW50T2JqZWN0LmV2ZW50VGltZSxcbiAgICAgICAgICAgICAgICBldmVudExvY2F0aW9uOiBldmVudE9iamVjdC5ldmVudExvY2F0aW9uXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKCAoKSA9PiB7XG4gICAgICAgICAgICBldmVudHMuYXBwZW5kVXNlckV2ZW50cygpO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBoYW5kbGVFdmVudERlbGV0ZUJ1dHRvbigpIHtcbiAgICAgICAgY29uc3QgaWRUb0RlbGV0ZSA9IGV2ZW50LnRhcmdldC5pZC5zcGxpdChcIi0tXCIpWzFdO1xuICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICAgICAgICBkZWxldGVJZDogaWRUb0RlbGV0ZSxcbiAgICAgICAgICAgIGRhdGFTZXQ6IFwiZXZlbnRzXCIsXG4gICAgICAgICAgICBmZXRjaFR5cGU6IFwiREVMRVRFXCIsXG4gICAgICAgICAgICBkYXRhQmFzZU9iamVjdDoge1xuICAgICAgICAgICAgICAgIHVzZXJJZDogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAudGhlbiggKCkgPT4ge1xuICAgICAgICAgICAgZXZlbnRzLmFwcGVuZFVzZXJFdmVudHMoKTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgaGFuZGxlRXZlbnRFZGl0QnV0dG9uKCkge1xuICAgICAgICBjb25zdCBpZFRvRWRpdCA9IGV2ZW50LnRhcmdldC5pZC5zcGxpdChcIi0tXCIpWzFdO1xuICAgICAgICAvLyBjb25zdCBldmVudE9iamVjdCA9XG4gICAgICAgIGRvbUNvbXBvbmVudHMuY3JlYXRlRXZlbnRFZGl0SW5wdXQoaWRUb0VkaXQsIClcbiAgICB9LFxuICAgIGhhbmRsZUV2ZW50VXBkYXRlQnV0dG9uKCkge1xuXG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZXZlbnRMaXN0ZW5lcnM7XG4iLCJpbXBvcnQgbm9tYWREYXRhIGZyb20gXCIuL25vbWFkRGF0YVwiO1xuaW1wb3J0IGV2ZW50cyBmcm9tIFwiLi9ldmVudHNcIjtcbi8vIGltcG9ydCBkb21Db21wb25lbnRzIGZyb20gXCIuL2RvbUNvbXBvbmVudHNcIjtcblxuY29uc3QgZXZlbnRQYWdlTGlzdGVuZXJzID0ge1xuICAgIGhhbmRsZVNob3dCdXR0b24oKSB7XG4gICAgICAgIGNvbnN0IG91dHB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3V0cHV0XCIpO1xuICAgICAgICBjb25zdCBzaG93QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaG93Rm9ybVwiKTtcbiAgICAgICAgb3V0cHV0LnJlbW92ZUNoaWxkKHNob3dCdXR0b24pO1xuICAgICAgICBjb25zdCBldmVudEZvcm0gPSBldmVudHMuY3JlYXRlRXZlbnRJbnB1dCgpO1xuICAgICAgICBvdXRwdXQuaW5zZXJ0QmVmb3JlKGV2ZW50Rm9ybSwgb3V0cHV0LmZpcnN0Q2hpbGQpO1xuICAgIH0sXG4gICAgaGFuZGxlU2F2ZUJ1dHRvbigpIHtcbiAgICAgICAgY29uc3QgbmFtZUlucHV0dGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNldmVudE5hbWVcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IGRhdGVJbnB1dHRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXZlbnREYXRlXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCB0aW1lSW5wdXR0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2V2ZW50VGltZVwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgbG9jYXRpb25JbnB1dHRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXZlbnRMb2NhdGlvblwiKS52YWx1ZTtcblxuICAgICAgICBpZiAobmFtZUlucHV0dGVkID09PSBcIlwiIHx8IGRhdGVJbnB1dHRlZCA9PT0gXCJcIiB8fCB0aW1lSW5wdXR0ZWQgPT09IFwiXCIgfHwgbG9jYXRpb25JbnB1dHRlZCA9PT0gXCJcIikge1xuICAgICAgICAgICAgYWxlcnQoXCJQbGVhc2UgaW5wdXQgaW5mb3JtYXRpb24gaW4gYWxsIGZpZWxkc1wiKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xuICAgICAgICAgICAgICAgIGRhdGFTZXQ6IFwiZXZlbnRzXCIsXG4gICAgICAgICAgICAgICAgZmV0Y2hUeXBlOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICBkYXRhQmFzZU9iamVjdDoge1xuICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpKSxcbiAgICAgICAgICAgICAgICAgICAgZXZlbnROYW1lOiBuYW1lSW5wdXR0ZWQsXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50RGF0ZTogZGF0ZUlucHV0dGVkLFxuICAgICAgICAgICAgICAgICAgICBldmVudFRpbWU6IHRpbWVJbnB1dHRlZCxcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRMb2NhdGlvbjogbG9jYXRpb25JbnB1dHRlZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbiggKCkgPT4ge1xuICAgICAgICAgICAgICAgIGV2ZW50cy5hcHBlbmRVc2VyQW5kRnJpZW5kRXZlbnRzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGhhbmRsZUhpZGVCdXR0b24oKSB7XG4gICAgICAgIGNvbnN0IG91dHB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3V0cHV0XCIpO1xuICAgICAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ldmVudElucHV0XCIpO1xuICAgICAgICBvdXRwdXQucmVtb3ZlQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG4gICAgICAgIGV2ZW50cy5hZGRTaG93QnV0dG9uKCk7XG4gICAgfSxcbiAgICBoYW5kbGVEZWxldGVCdXR0b24oKSB7XG4gICAgICAgIGNvbnN0IGlkVG9EZWxldGUgPSBldmVudC50YXJnZXQuaWQuc3BsaXQoXCItLVwiKVsxXTtcbiAgICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xuICAgICAgICAgICAgZGVsZXRlSWQ6IGlkVG9EZWxldGUsXG4gICAgICAgICAgICBkYXRhU2V0OiBcImV2ZW50c1wiLFxuICAgICAgICAgICAgZmV0Y2hUeXBlOiBcIkRFTEVURVwiLFxuICAgICAgICAgICAgZGF0YUJhc2VPYmplY3Q6IHtcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oICgpID0+IHtcbiAgICAgICAgICAgIGV2ZW50cy5hcHBlbmRVc2VyQW5kRnJpZW5kRXZlbnRzKCk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgaGFuZGxlRWRpdEJ1dHRvbigpIHtcbiAgICAgICAgY29uc3QgaWRUb0VkaXQgPSBldmVudC50YXJnZXQuaWQuc3BsaXQoXCItLVwiKVsxXTtcbiAgICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xuICAgICAgICAgICAgZGF0YVNldDogXCJldmVudHNcIixcbiAgICAgICAgICAgIGZldGNoVHlwZTogXCJHRVRcIixcbiAgICAgICAgICAgIGRhdGFCYXNlT2JqZWN0OiB7XG4gICAgICAgICAgICB1c2VySWQ6IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbWJlZEl0ZW06IGAvJHtpZFRvRWRpdH1gXG4vLyBBYm92ZSBpcyBhIGJpdCBvZiBhIGhhY2t5IHNvbHV0aW9uIGluIG9yZGVyIHRvIGdldCBhIHNwZWNpZmljIGV2ZW50LiBNYXliZSBuZWVkIHRvIGFkZCBzcGVjaWZpYyBnZXQgZnVuY3Rpb24gdG8gbm9tYWREYXRhXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHBhcnNlZFJlc3BvbnNlID0+IHtcbiAgICAgICAgZXZlbnRzLmNyZWF0ZUV2ZW50RWRpdElucHV0KGlkVG9FZGl0LCBwYXJzZWRSZXNwb25zZSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgaGFuZGxlVXBkYXRlQnV0dG9uKCkge1xuICAgICAgICBjb25zdCBlZGl0ZWRJZCA9IGV2ZW50LnRhcmdldC5pZC5zcGxpdChcIi0tXCIpWzFdO1xuXG4gICAgICAgIGNvbnN0IGVkaXRlZE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZWRpdE5hbWUtLSR7ZWRpdGVkSWR9YCkudmFsdWU7XG4gICAgICAgIGNvbnN0IGVkaXRlZERhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZWRpdERhdGUtLSR7ZWRpdGVkSWR9YCkudmFsdWU7XG4gICAgICAgIGNvbnN0IGVkaXRlZFRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZWRpdFRpbWUtLSR7ZWRpdGVkSWR9YCkudmFsdWU7XG4gICAgICAgIGNvbnN0IGVkaXRlZExvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2VkaXRMb2NhdGlvbi0tJHtlZGl0ZWRJZH1gKS52YWx1ZTtcblxuICAgICAgICBpZiAoZWRpdGVkTmFtZSA9PT0gXCJcIiB8fCBlZGl0ZWREYXRlID09PSBcIlwiIHx8IGVkaXRlZFRpbWUgPT09IFwiXCIgfHwgZWRpdGVkTG9jYXRpb24gPT09IFwiXCIpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiUGxlYXNlIGRvIG5vdCBsZWF2ZSBlZGl0IGZpZWxkcyBibGFua1wiKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xuICAgICAgICAgICAgICAgIHB1dElkOiBlZGl0ZWRJZCxcbiAgICAgICAgICAgICAgICBkYXRhU2V0OiBcImV2ZW50c1wiLFxuICAgICAgICAgICAgICAgIGZldGNoVHlwZTogXCJQVVRcIixcbiAgICAgICAgICAgICAgICBkYXRhQmFzZU9iamVjdDoge1xuICAgICAgICAgICAgICAgICAgICBpZDogZWRpdGVkSWQsXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZDogTnVtYmVyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIikpLFxuICAgICAgICAgICAgICAgICAgICBldmVudE5hbWU6IGVkaXRlZE5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50RGF0ZTogZWRpdGVkRGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRUaW1lOiBlZGl0ZWRUaW1lLFxuICAgICAgICAgICAgICAgICAgICBldmVudExvY2F0aW9uOiBlZGl0ZWRMb2NhdGlvblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbiggKCkgPT4ge1xuICAgICAgICAgICAgICAgIGV2ZW50cy5hcHBlbmRVc2VyQW5kRnJpZW5kRXZlbnRzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGV2ZW50UGFnZUxpc3RlbmVyczsiLCIvLyBBdXRob3I6IENvbGUgQnJ5YW50IC8gUHVycG9zZTpcblxuaW1wb3J0IG5vbWFkRGF0YSBmcm9tIFwiLi9ub21hZERhdGFcIjtcbmltcG9ydCBkb21Db21wb25lbnRzIGZyb20gXCIuL2RvbUNvbXBvbmVudHNcIjtcbmltcG9ydCBldmVudFBhZ2VMaXN0ZW5lcnMgZnJvbSBcIi4vZXZlbnRQYWdlTGlzdGVuZXJzXCI7XG5cblxuLy9jcmVhdGVFdmVudElucHV0IGFuZCBjcmVhdGVFdmVudEl0ZW0gd2lsbCBiZSBhZGRlZCB0byB0aGlzIG9iamVjdC4gc28gZG9tYnVpbGRlci5cbmNvbnN0IGV2ZW50cyA9IHtcbiAgc2hvd0V2ZW50Rm9ybSAoKSB7XG4gICAgJChcIiNvdXRwdXRcIikuZW1wdHkoKVxuICAgIGNvbnN0IG91dHB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3V0cHV0XCIpO1xuICAgIGNvbnN0IGV2ZW50c0Zvcm0gPSB0aGlzLmNyZWF0ZUV2ZW50SW5wdXQoKTtcbiAgICBvdXRwdXQuYXBwZW5kQ2hpbGQoZXZlbnRzRm9ybSlcbiAgICBjb25zdCBldmVudExvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIpXG4gICAgZXZlbnRMb2cuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJldmVudExvZ1wiKTtcbiAgICBvdXRwdXQuYXBwZW5kQ2hpbGQoZXZlbnRMb2cpO1xuICB9LFxuICBhZGRTaG93QnV0dG9uKCkge1xuICAgIGNvbnN0IG91dHB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3V0cHV0XCIpO1xuICAgIGNvbnN0IHNob3dCdXR0b24gPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImJ1dHRvblwiLCBjb250ZW50OiBcIkNyZWF0ZSBhIE5ldyBFdmVudFwiLCBhdHRyaWJ1dGVzOiB7dHlwZTogXCJidXR0b25cIiwgaWQ6IFwic2hvd0Zvcm1cIn19KTtcbiAgICBzaG93QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudFBhZ2VMaXN0ZW5lcnMuaGFuZGxlU2hvd0J1dHRvbik7XG4gICAgb3V0cHV0Lmluc2VydEJlZm9yZShzaG93QnV0dG9uLCBvdXRwdXQuZmlyc3RDaGlsZCk7XG4gIH0sXG4gIGFwcGVuZFVzZXJBbmRGcmllbmRFdmVudHMoKSB7XG4gICAgY29uc3QgZXZlbnRMb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2V2ZW50TG9nXCIpO1xuICAgIGNvbnN0IGV2ZW50SG9sZGVyID0gW107XG4gICAgY29uc3QgdXNlckhvbGRlciA9IFtOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSldO1xuICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcbiAgICAgIGRhdGFTZXQ6IFwiZnJpZW5kc1wiLFxuICAgICAgZmV0Y2hUeXBlOiBcIkdFVFwiLFxuICAgICAgZGF0YUJhc2VPYmplY3Q6IFwiXCIsXG4gICAgICBlbWJlZEl0ZW06IFwiP19lbWJlZD1ldmVudHNcIlxuICAgIH0pXG4gICAgLnRoZW4ocGFyc2VkUmVzcG9uc2UgPT4ge1xuICAgICAgcGFyc2VkUmVzcG9uc2UuZm9yRWFjaChyZXNwb25zZSA9PiB7XG4gICAgICAgIGlmKHJlc3BvbnNlLnVzZXJJZCA9PT0gTnVtYmVyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIikpKSB7XG4gICAgICAgICAgdXNlckhvbGRlci5wdXNoKHJlc3BvbnNlLm90aGVyRnJpZW5kSWQpO1xuICAgICAgICB9O1xuICAgICAgfSlcbiAgICAgIHVzZXJIb2xkZXIuZm9yRWFjaCh1c2VySWQgPT4ge1xuICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICAgICAgZGF0YVNldDogXCJldmVudHNcIixcbiAgICAgICAgICBmZXRjaFR5cGU6IFwiR0VUXCIsXG4gICAgICAgICAgZGF0YUJhc2VPYmplY3Q6IFwiXCIsXG4gICAgICAgICAgZW1iZWRJdGVtOiBgP191c2VySWQ9JHt1c2VySWR9YFxuICAgICAgICB9KVxuICAgICAgICAudGhlbihwYXJzZWRSZXNwb25zZSA9PiB7XG4gICAgICAgICAgcGFyc2VkUmVzcG9uc2UuZm9yRWFjaChyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UudXNlcklkID09PSB1c2VySWQpIHtcbiAgICAgICAgICAgICAgZXZlbnRIb2xkZXIucHVzaChyZXNwb25zZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbnN0IHNvcnRlZEV2ZW50cyA9IGV2ZW50SG9sZGVyLnNvcnQoIChhLCBiKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoYS5ldmVudERhdGUpIC0gbmV3IERhdGUoYi5ldmVudERhdGUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbnN0IGRvY3VGcmFnID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICAgIHNvcnRlZEV2ZW50cy5mb3JFYWNoKGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHdoaWxlIChldmVudExvZy5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgIGV2ZW50TG9nLnJlbW92ZUNoaWxkKGV2ZW50TG9nLmZpcnN0Q2hpbGQpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgZXZlbnRJdGVtID0gdGhpcy5jcmVhdGVFdmVudEl0ZW0oZXZlbnQpO1xuICAgICAgICAgICAgZG9jdUZyYWcuYXBwZW5kQ2hpbGQoZXZlbnRJdGVtKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBldmVudExvZy5hcHBlbmRDaGlsZChkb2N1RnJhZyk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG4gIGNyZWF0ZUV2ZW50SW5wdXQoKSB7XG5cbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvdXRwdXRcIilcbiAgICBjb25zdCBmb3JtSGVhZGVyID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJoMlwiLCBjb250ZW50OiBcIkFkZCBhIE5ldyBFdmVudDpcIn0pO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUhlYWRlcik7XG4gICAgY29uc3QgZXZlbnRGb3JtID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJmb3JtXCIsIGF0dHJpYnV0ZXM6IHtjbGFzczogXCJldmVudElucHV0XCJ9fSk7XG4gICAgY29uc3QgbmFtZUZpZWxkc2V0ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJmaWVsZHNldFwifSk7XG4gICAgY29uc3QgbmFtZUxhYmVsID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJsYWJlbFwiLCBjb250ZW50OiBcIkV2ZW50IE5hbWU6XCIsIGF0dHJpYnV0ZXM6IHtmb3I6IFwiZXZlbnROYW1lXCJ9fSk7XG4gICAgY29uc3QgbmFtZUlucHV0ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJpbnB1dFwiLCBhdHRyaWJ1dGVzOiB7dHlwZTogXCJ0ZXh0XCIsIG5hbWU6IFwiZXZlbnROYW1lXCIsIGlkOiBcImV2ZW50TmFtZVwifX0pO1xuICAgIG5hbWVGaWVsZHNldC5hcHBlbmRDaGlsZChuYW1lTGFiZWwpO1xuICAgIG5hbWVGaWVsZHNldC5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xuXG4gICAgY29uc3QgZGF0ZUZpZWxkc2V0ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJmaWVsZHNldFwifSk7XG4gICAgY29uc3QgZGF0ZUxhYmVsID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJsYWJlbFwiLCBjb250ZW50OiBcIkV2ZW50IERhdGU6XCIsIGF0dHJpYnV0ZXM6IHtmb3I6IFwiZXZlbnREYXRlXCJ9fSk7XG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJpbnB1dFwiLCBhdHRyaWJ1dGVzOiB7dHlwZTogXCJkYXRlXCIsIG5hbWU6IFwiZXZlbnREYXRlXCIsIGlkOiBcImV2ZW50RGF0ZVwifX0pO1xuICAgIGRhdGVGaWVsZHNldC5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuICAgIGRhdGVGaWVsZHNldC5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuXG4gICAgY29uc3QgdGltZUZpZWxkc2V0ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJmaWVsZHNldFwifSk7XG4gICAgY29uc3QgdGltZUxhYmVsID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJsYWJlbFwiLCBjb250ZW50OiBcIkV2ZW50IFRpbWU6XCIsIGF0dHJpYnV0ZXM6IHtmb3I6IFwiZXZlbnRUaW1lXCJ9fSk7XG4gICAgY29uc3QgdGltZUlucHV0ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJpbnB1dFwiLCBhdHRyaWJ1dGVzOiB7dHlwZTogXCJ0aW1lXCIsIG5hbWU6IFwiZXZlbnRUaW1lXCIsIGlkOiBcImV2ZW50VGltZVwifX0pO1xuICAgIHRpbWVGaWVsZHNldC5hcHBlbmRDaGlsZCh0aW1lTGFiZWwpO1xuICAgIHRpbWVGaWVsZHNldC5hcHBlbmRDaGlsZCh0aW1lSW5wdXQpO1xuXG4gICAgY29uc3QgbG9jYXRpb25GaWVsZHNldCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiZmllbGRzZXRcIn0pO1xuICAgIGNvbnN0IGxvY2F0aW9uTGFiZWwgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImxhYmVsXCIsIGNvbnRlbnQ6IFwiRW50ZXIgTG9jYXRpb246XCIsIGF0dHJpYnV0ZXM6IHtmb3I6IFwiZXZlbnRMb2NhdGlvblwifX0pO1xuICAgIGNvbnN0IGxvY2F0aW9uSW5wdXQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImlucHV0XCIsIGF0dHJpYnV0ZXM6IHt0eXBlOiBcInRleHRcIiwgbmFtZTogXCJldmVudExvY2F0aW9uXCIsIGlkOiBcImV2ZW50TG9jYXRpb25cIn19KTtcbiAgICBsb2NhdGlvbkZpZWxkc2V0LmFwcGVuZENoaWxkKGxvY2F0aW9uTGFiZWwpO1xuICAgIGxvY2F0aW9uRmllbGRzZXQuYXBwZW5kQ2hpbGQobG9jYXRpb25JbnB1dCk7XG5cbiAgICBjb25zdCBzYXZlQnV0dG9uID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJidXR0b25cIiwgY29udGVudDogXCJTYXZlXCIsIGF0dHJpYnV0ZXM6IHt0eXBlOiBcImJ1dHRvblwiLCBpZDogXCJzYXZlRXZlbnRcIn19KTtcbiAgICBzYXZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudFBhZ2VMaXN0ZW5lcnMuaGFuZGxlU2F2ZUJ1dHRvbik7XG5cbiAgICBjb25zdCBoaWRlQnV0dG9uID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJidXR0b25cIiwgY29udGVudDogXCJIaWRlIEV2ZW50IElucHV0XCIsIGF0dHJpYnV0ZXM6IHt0eXBlOiBcImJ1dHRvblwiLCBpZDogXCJoaWRlRXZlbnRcIn19KTtcbiAgICBoaWRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudFBhZ2VMaXN0ZW5lcnMuaGFuZGxlSGlkZUJ1dHRvbik7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChldmVudEZvcm0pXG4gICAgZXZlbnRGb3JtLmFwcGVuZENoaWxkKG5hbWVGaWVsZHNldCk7XG4gICAgZXZlbnRGb3JtLmFwcGVuZENoaWxkKGRhdGVGaWVsZHNldCk7XG4gICAgZXZlbnRGb3JtLmFwcGVuZENoaWxkKHRpbWVGaWVsZHNldCk7XG4gICAgZXZlbnRGb3JtLmFwcGVuZENoaWxkKGxvY2F0aW9uRmllbGRzZXQpO1xuICAgIGV2ZW50Rm9ybS5hcHBlbmRDaGlsZChzYXZlQnV0dG9uKTtcbiAgICBldmVudEZvcm0uYXBwZW5kQ2hpbGQoaGlkZUJ1dHRvbik7XG4gICAgLy8gZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChldmVudEZvcm0pXG4gICAgcmV0dXJuIGV2ZW50Rm9ybTtcbiAgfSxcbiAgY3JlYXRlRXZlbnRJdGVtIChldmVudE9iamVjdCkge1xuICAgIGNvbnN0IGV2ZW50SXRlbSA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiYXJ0aWNsZVwiLCBhdHRyaWJ1dGVzOiB7Y2xhc3M6IFwiZXZlbnRJdGVtXCIsIGlkOiBgZXZlbnRJdGVtLS0ke2V2ZW50T2JqZWN0LmlkfWB9fSk7XG4gICAgY29uc3QgZXZlbnRIZWFkZXIgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImgyXCIsIGNvbnRlbnQ6IGV2ZW50T2JqZWN0LmV2ZW50TmFtZX0pO1xuXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGV2ZW50T2JqZWN0LmV2ZW50RGF0ZSk7XG4gICAgY29uc3QgZGF0aWZ5ID0gKCkgPT4ge1xuICAgICAgY29uc3QgbW9udGhOYW1lcyA9IFtcbiAgICAgICAgXCJKYW51YXJ5XCIsXG4gICAgICAgIFwiRmVicnVhcnlcIixcbiAgICAgICAgXCJNYXJjaFwiLFxuICAgICAgICBcIkFwcmlsXCIsXG4gICAgICAgIFwiTWF5XCIsXG4gICAgICAgIFwiSnVuZVwiLFxuICAgICAgICBcIkp1bHlcIixcbiAgICAgICAgXCJBdWd1c3RcIixcbiAgICAgICAgXCJTZXB0ZW1iZXJcIixcbiAgICAgICAgXCJPY3RvYmVyXCIsXG4gICAgICAgIFwiTm92ZW1iZXJcIixcbiAgICAgICAgXCJEZWNlbWJlclwiXG4gICAgICBdO1xuICAgICAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgICBjb25zdCBtb250aEluZGV4ID0gZGF0ZS5nZXRNb250aCgpO1xuICAgICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgIHJldHVybiBgJHttb250aE5hbWVzW21vbnRoSW5kZXhdfSAke2RheX0sICR7eWVhcn1gO1xuICAgIH07XG5cbiAgICBjb25zdCBsb25nRGF0ZSA9IGRhdGlmeSgpO1xuXG4gICAgY29uc3QgZXZlbnREYXRlVGltZSA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwicFwiLCBjb250ZW50OiBgQXQgJHtldmVudE9iamVjdC5ldmVudFRpbWV9IG9uICR7bG9uZ0RhdGV9YH0pO1xuICAgIGNvbnN0IGV2ZW50TG9jYXRpb24gPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcInBcIiwgY29udGVudDogYExvY2F0aW9uOiAke2V2ZW50T2JqZWN0LmV2ZW50TG9jYXRpb259YH0pO1xuXG4gICAgZXZlbnRJdGVtLmFwcGVuZENoaWxkKGV2ZW50SGVhZGVyKTtcbiAgICBldmVudEl0ZW0uYXBwZW5kQ2hpbGQoZXZlbnREYXRlVGltZSk7XG4gICAgZXZlbnRJdGVtLmFwcGVuZENoaWxkKGV2ZW50TG9jYXRpb24pO1xuXG4gICAgaWYgKGV2ZW50T2JqZWN0LnVzZXJJZCA9PT0gTnVtYmVyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIikpKSB7XG4gICAgICBjb25zdCBlZGl0QnV0dG9uID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJidXR0b25cIiwgY29udGVudDogXCJFZGl0XCIsIGF0dHJpYnV0ZXM6IHt0eXBlOiBcImJ1dHRvblwiLCBpZDogYGVkaXRFdmVudC0tJHtldmVudE9iamVjdC5pZH1gfX0pO1xuICAgICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnRQYWdlTGlzdGVuZXJzLmhhbmRsZUVkaXRCdXR0b24pO1xuICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJidXR0b25cIiwgY29udGVudDogXCJEZWxldGVcIiwgYXR0cmlidXRlczoge3R5cGU6IFwiYnV0dG9uXCIsIGlkOiBgZGVsZXRlRXZlbnQtLSR7ZXZlbnRPYmplY3QuaWR9YH19KTtcbiAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnRQYWdlTGlzdGVuZXJzLmhhbmRsZURlbGV0ZUJ1dHRvbik7XG4gICAgICBldmVudEl0ZW0uYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XG4gICAgICBldmVudEl0ZW0uYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGV2ZW50SXRlbTtcbiAgfSxcbiAgY3JlYXRlRXZlbnRFZGl0SW5wdXQoY29udGFpbmVySWQsIGV2ZW50T2JqZWN0KSB7XG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiZm9ybVwiLCBhdHRyaWJ1ZXM6IHtjbGFzczogXCJldmVudEVkaXRcIn19KTtcbiAgICBjb25zdCBldmVudEhlYWRlciA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiaDJcIiwgY29udGVudDogZXZlbnRPYmplY3QuZXZlbnROYW1lfSk7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChldmVudEhlYWRlcik7XG5cbiAgICBjb25zdCBuYW1lRmllbGRzZXQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImZpZWxkc2V0XCJ9KTtcbiAgICBjb25zdCBuYW1lTGFiZWwgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImxhYmVsXCIsIGNvbnRlbnQ6IFwiRWRpdCBOYW1lOlwiLCBhdHRyaWJ1dGVzOiB7Zm9yOiBcImV2ZW50TmFtZVwifX0pO1xuICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiaW5wdXRcIiwgYXR0cmlidXRlczoge3R5cGU6IFwidGV4dFwiLCBuYW1lOiBcImV2ZW50TmFtZVwiLCBpZDogYGVkaXROYW1lLS0ke2NvbnRhaW5lcklkfWAsIHZhbHVlOiBldmVudE9iamVjdC5ldmVudE5hbWV9fSk7XG4gICAgbmFtZUZpZWxkc2V0LmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XG4gICAgbmFtZUZpZWxkc2V0LmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG5cbiAgICBjb25zdCBkYXRlRmllbGRzZXQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImZpZWxkc2V0XCJ9KTtcbiAgICBjb25zdCBkYXRlTGFiZWwgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImxhYmVsXCIsIGNvbnRlbnQ6IFwiRWRpdCBEYXRlOlwiLCBhdHRyaWJ1dGVzOiB7Zm9yOiBcImV2ZW50RGF0ZVwifX0pO1xuICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiaW5wdXRcIiwgYXR0cmlidXRlczoge3R5cGU6IFwiZGF0ZVwiLCBuYW1lOiBcImV2ZW50RGF0ZVwiLCBpZDogYGVkaXREYXRlLS0ke2NvbnRhaW5lcklkfWAsIHZhbHVlOiBldmVudE9iamVjdC5ldmVudERhdGV9fSk7XG4gICAgZGF0ZUZpZWxkc2V0LmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gICAgZGF0ZUZpZWxkc2V0LmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG5cbiAgICBjb25zdCB0aW1lRmllbGRzZXQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImZpZWxkc2V0XCJ9KTtcbiAgICBjb25zdCB0aW1lTGFiZWwgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImxhYmVsXCIsIGNvbnRlbnQ6IFwiRWRpdCBUaW1lOlwiLCBhdHRyaWJ1dGVzOiB7Zm9yOiBcImV2ZW50VGltZVwifX0pO1xuICAgIGNvbnN0IHRpbWVJbnB1dCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiaW5wdXRcIiwgYXR0cmlidXRlczoge3R5cGU6IFwidGltZVwiLCBuYW1lOiBcImV2ZW50VGltZVwiLCBpZDogYGVkaXRUaW1lLS0ke2NvbnRhaW5lcklkfWAsIHZhbHVlOiBldmVudE9iamVjdC5ldmVudFRpbWV9fSk7XG4gICAgdGltZUZpZWxkc2V0LmFwcGVuZENoaWxkKHRpbWVMYWJlbCk7XG4gICAgdGltZUZpZWxkc2V0LmFwcGVuZENoaWxkKHRpbWVJbnB1dCk7XG5cbiAgICBjb25zdCBsb2NhdGlvbkZpZWxkc2V0ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJmaWVsZHNldFwifSk7XG4gICAgY29uc3QgbG9jYXRpb25MYWJlbCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwibGFiZWxcIiwgY29udGVudDogXCJFZGl0IExvY2F0aW9uOlwiLCBhdHRyaWJ1dGVzOiB7Zm9yOiBcImV2ZW50TG9jYXRpb25cIn19KTtcbiAgICBjb25zdCBsb2NhdGlvbklucHV0ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJpbnB1dFwiLCBhdHRyaWJ1dGVzOiB7dHlwZTogXCJ0ZXh0XCIsIG5hbWU6IFwiZXZlbnRMb2NhdGlvblwiLCBpZDogYGVkaXRMb2NhdGlvbi0tJHtjb250YWluZXJJZH1gLCB2YWx1ZTogZXZlbnRPYmplY3QuZXZlbnRMb2NhdGlvbn19KTtcbiAgICBsb2NhdGlvbkZpZWxkc2V0LmFwcGVuZENoaWxkKGxvY2F0aW9uTGFiZWwpO1xuICAgIGxvY2F0aW9uRmllbGRzZXQuYXBwZW5kQ2hpbGQobG9jYXRpb25JbnB1dCk7XG5cbiAgICBjb25zdCB1cGRhdGVCdXR0b24gPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImJ1dHRvblwiLCBjb250ZW50OiBcIlVwZGF0ZVwiLCBhdHRyaWJ1dGVzOiB7dHlwZTogXCJidXR0b25cIiwgaWQ6IGBzdWJtaXRFZGl0cy0tJHtjb250YWluZXJJZH1gfX0pO1xuICAgIHVwZGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnRQYWdlTGlzdGVuZXJzLmhhbmRsZVVwZGF0ZUJ1dHRvbik7XG5cbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWVGaWVsZHNldCk7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlRmllbGRzZXQpO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodGltZUZpZWxkc2V0KTtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uRmllbGRzZXQpO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodXBkYXRlQnV0dG9uKTtcblxuICAgIGxldCBjdXJyZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2V2ZW50SXRlbS0tJHtjb250YWluZXJJZH1gKTtcbiAgICB3aGlsZSAoY3VycmVudENvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgICBjdXJyZW50Q29udGFpbmVyLnJlbW92ZUNoaWxkKGN1cnJlbnRDb250YWluZXIuZmlyc3RDaGlsZCk7XG4gICAgfTtcbiAgICBjdXJyZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xuICB9XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGV2ZW50czsiLCJpbXBvcnQgbm9tYWREYXRhIGZyb20gXCIuL25vbWFkRGF0YVwiXG5pbXBvcnQgZG9tQ29tcG9uZW50cyBmcm9tIFwiLi9kb21Db21wb25lbnRzXCI7XG5pbXBvcnQgZnJpZW5kc0V2ZW50c0xpc3RlbmVyIGZyb20gXCIuL2ZyaWVuZHNFdmVudHNMaXN0ZW5lclwiO1xuXG5jb25zdCBmcmllbmRzID0ge1xuXG5cbiAgZGVmaW5lQ3VycmVudFVzZXJzRnJpZW5kcyAoKSB7XG4gICAgJChcIiNvdXRwdXRcIikuZW1wdHkoKVxuICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gMTtcbiAgICBsZXQgdXNlcklkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyk7XG4gICAgLy8gbGV0IGN1cnJlbnRVc2VyID0gTnVtYmVyKHVzZXJJZCk7XG4gICAgY29uc29sZS5sb2coY3VycmVudFVzZXIsIHVzZXJJZClcbiAgICBjb25zdCB0YXJnZXRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm91dHB1dFwiKVxuICAgIHRhcmdldENvbnRhaW5lci5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgZWxlbWVudFR5cGU6IFwic2VjdGlvblwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBpZDogXCJhbGxGcmllbmRDb250YWluZXJcIixcbiAgICAgIH1cbiAgICB9KSlcbiAgICBjb25zdCBhbGxGcmllbmRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsbEZyaWVuZENvbnRhaW5lclwiKTtcbiAgICBhbGxGcmllbmRDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgIGVsZW1lbnRUeXBlOiBcImgyXCIsXG4gICAgICBjb250ZW50OiBcImZyaWVuZHM6XCIsXG4gICAgICBjc3NDbGFzczogXCJmcmllbmRUYWdcIlxuICAgIH0pKVxuXG4gICAgbGV0IGZyaWVuZEhvbGRlciA9IFtdO1xuXG4vLyBQVUxMIEZST00gRlJJRU5EUyBKU09OLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5ub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG5cImRhdGFTZXRcIiA6IFwiZnJpZW5kc1wiLFxuXCJmZXRjaFR5cGVcIiA6IFwiR0VUXCIsXG5cImRhdGFCYXNlT2JqZWN0XCIgOiBcIlwiLFxuXCJlbWJlZEl0ZW1cIiA6IFwiP19lbWJlZD1ldmVudHNcIn0pXG4udGhlbihmcm9tRnJpZW5kcyA9PiB7XG4gIC8vIGNvbnNvbGUubG9nKGZyb21GcmllbmRzKVxuICBmcm9tRnJpZW5kcy5mb3JFYWNoKGZyaWVuZERhdGEgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGZyaWVuZERhdGEpXG4gICAgaWYgKGZyaWVuZERhdGEudXNlcklkID09PSBjdXJyZW50VXNlcikge1xuICAgICAgZnJpZW5kSG9sZGVyLnB1c2goZnJpZW5kRGF0YS5vdGhlckZyaWVuZElkKVxuICAgIH1cbiAgfSlcbiAgZnJpZW5kSG9sZGVyLmZvckVhY2gob2ZmaWNpYWxGcmllbmQgPT4ge1xuICAgIHRoaXMubG9hZEN1cnJlbnRVc2Vyc0ZyaWVuZHMob2ZmaWNpYWxGcmllbmQpXG4gIH0pXG59KVxufSxcbmxvYWRDdXJyZW50VXNlcnNGcmllbmRzIChmcmllbmQpIHtcbiAgLy8gUFVMTCBGUk9NIFVTRVJTIEpTT04gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gY29uc29sZS5sb2coZnJpZW5kKVxuICAgICAgY29uc3QgYWxsRnJpZW5kQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGxGcmllbmRDb250YWluZXJcIilcbiAgICAgIGFsbEZyaWVuZENvbnRhaW5lci5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICBlbGVtZW50VHlwZTogXCJhcnRpY2xlXCIsXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICBjbGFzczogXCJmcmllbmQtY29udGFpbmVyXCIsXG4gICAgICAgICAgaWQ6IGBmcmllbmQtJHtmcmllbmR9YFxuICAgICAgICB9XG4gICAgICB9KSlcbiAgICAgIGNvbnN0IGZyaWVuZENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBmcmllbmQtJHtmcmllbmR9YClcbiAgICAvLyBHRVQgQSBCT1ggSEVSRSBUSEFUIENPTlRBSU5TIFZJU1VBTCBPRiBGUklFTkRTXG5cbiAgICAgIGxldCBmcmllbmREb21CdWlsZGVyID0gW107XG4gICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICBcImRhdGFTZXRcIiA6IFwidXNlcnNcIixcbiAgICAgIFwiZmV0Y2hUeXBlXCIgOiBcIkdFVFwiLFxuICAgICAgXCJkYXRhQmFzZU9iamVjdFwiIDogXCJcIixcbiAgICAgIFwiZW1iZWRJdGVtXCIgOiBcIj9fZW1iZWQ9ZXZlbnRzXCJ9KVxuICAgICAgLnRoZW4oZnJvbVVzZXJEYXRhID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZnJvbVVzZXJEYXRhKTtcbiAgICAgICAgZnJvbVVzZXJEYXRhLmZvckVhY2godXNlckluZm8gPT4ge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGZyaWVuZCwgdXNlckluZm8uaWQpXG4gICAgICAgICAgaWYgKHVzZXJJbmZvLmlkID09PSBmcmllbmQpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXJJbmZvLnVzZXJOYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IGZyaWVuZElkZW50aWZpZXIgPSB7XG4gICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImgyXCIsXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IHVzZXJJbmZvLnVzZXJOYW1lLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnJpZW5kRG9tQnVpbGRlci5wdXNoKGZyaWVuZElkZW50aWZpZXIpXG4gICAgICAgICAgICAvLyBQVUxMIEZST00gRVZFTlRTIEpTT04gLS0tLS0tXG4gICAgICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICAgICAgICAgICAgXCJkYXRhU2V0XCIgOiBcImV2ZW50c1wiLFxuICAgICAgICAgICAgXCJmZXRjaFR5cGVcIiA6IFwiR0VUXCIsXG4gICAgICAgICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiBcIlwiLFxuICAgICAgICAgICAgXCJlbWJlZEl0ZW1cIiA6IFwiP19lbWJlZD1ldmVudHNcIn0pXG4gICAgICAgICAgICAudGhlbihldmVudHMgPT4ge1xuICAgICAgICAgICAgICBldmVudHMuZm9yRWFjaChldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnVzZXJJZCA9PT0gZnJpZW5kKSB7XG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudC5ldmVudE5hbWUpO1xuICAgICAgICAgICAgICAgICAgY29uc3QgZXZlbnRIb2xkZXIgPSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcInBcIixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogYEVWRU5UOiAke2V2ZW50LmV2ZW50TmFtZX0gb24gJHtldmVudC5ldmVudERhdGV9YCxcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgICAgICAgICAgICAgIGlkOiBgZXZlbnQtJHtldmVudC5pZH1gLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBmcmllbmREb21CdWlsZGVyLnB1c2goZXZlbnRIb2xkZXIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vIFBVTEwgRlJPTSBORVdTSVRFTVMgSlNPTiAtLS0tLS1cbiAgICAgICAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcbiAgICAgICAgICAgIFwiZGF0YVNldFwiIDogXCJuZXdzaXRlbXNcIixcbiAgICAgICAgICAgIFwiZmV0Y2hUeXBlXCIgOiBcIkdFVFwiLFxuICAgICAgICAgICAgXCJkYXRhQmFzZU9iamVjdFwiIDogXCJcIixcbiAgICAgICAgICAgIFwiZW1iZWRJdGVtXCIgOiBcIj9fZW1iZWQ9bmV3c2l0ZW1zXCJ9KVxuICAgICAgICAgICAgLnRoZW4obmV3c1NoaXogPT4ge1xuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhuZXdzU2hpeilcbiAgICAgICAgICAgICAgbmV3c1NoaXouZm9yRWFjaCh1c2VyU3BlY2lmaWNBcnRpY2xlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXJTcGVjaWZpY0FydGljbGVzLnVzZXJJZCA9PT0gZnJpZW5kKSB7XG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh1c2VyU3BlY2lmaWNBcnRpY2xlcy50aXRsZSlcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGFydGljbGVIb2xkZXIgPSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcInBcIixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogYEFSVElDTEU6ICR7dXNlclNwZWNpZmljQXJ0aWNsZXMudGl0bGV9YCxcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgICAgICAgICAgICAgIGlkOiBgYXJ0aWNsZS0ke3VzZXJTcGVjaWZpY0FydGljbGVzLmlkfWAsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGZyaWVuZERvbUJ1aWxkZXIucHVzaChhcnRpY2xlSG9sZGVyKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZnJpZW5kRG9tQnVpbGRlcilcbiAgICAgICAgICAgICAgZnJpZW5kRG9tQnVpbGRlci5mb3JFYWNoKG9iamVjdCA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cob2JqZWN0KTtcbiAgICAgICAgICAgICAgICBmcmllbmRDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KG9iamVjdCkpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUZyaWVuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICAgICAgICAgICAgZGVsZXRlRnJpZW5kLmNsYXNzTGlzdC5hZGQoYGRlbGV0ZS1mcmllbmQtJHtmcmllbmR9YClcbiAgICAgICAgICAgICAgZGVsZXRlRnJpZW5kLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIilcbiAgICAgICAgICAgICAgZGVsZXRlRnJpZW5kLnRleHRDb250ZW50ID0gXCJERUxFVEVcIjtcbiAgICAgICAgICAgICAgZnJpZW5kQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZUZyaWVuZCk7XG4gICAgICAgICAgICAgIGRlbGV0ZUZyaWVuZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGZyaWVuZHNFdmVudHNMaXN0ZW5lci5mcmllbmRzRGVsZXRlRnJpZW5kKClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcblxuICB9LFxuICBpbml0aWFsaXplUG90ZW50aWFsRnJpZW5kcyAoKSB7XG4gICAgbGV0IHVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xuICAgIGxldCBjdXJyZW50VXNlciA9IE51bWJlcih1c2VySWQpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwiZnJpZW5kcyBQYWdlIHVzZXIgaWQgaXMtXCIsY3VycmVudFVzZXIpO1xuXG4gICAgY29uc3QgdGFyZ2V0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdXRwdXRcIik7XG4gICAgY29uc3QgZmluZE5ld0ZyaWVuZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgIGxldCBmcmllbmRzSUhhdmUgPSBbXTtcbiAgICBmaW5kTmV3RnJpZW5kQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZnV0dXJlLWZyaWVuZHNcIik7XG4gICAgdGFyZ2V0Q29udGFpbmVyLmFwcGVuZENoaWxkKGZpbmROZXdGcmllbmRDb250YWluZXIpO1xuICAgIGNvbnN0IGZpbmROZXdGcmllbmRUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIik7XG4gICAgZmluZE5ld0ZyaWVuZENvbnRhaW5lci5hcHBlbmRDaGlsZChmaW5kTmV3RnJpZW5kVGFnKTtcbiAgICBmaW5kTmV3RnJpZW5kVGFnLmNsYXNzTGlzdC5hZGQoXCJmcmllbmRUb0JlXCIpO1xuICAgIGZpbmROZXdGcmllbmRUYWcudGV4dENvbnRlbnQgPSBcImZyaWVuZCB0byBiZTpcIlxuXG4gICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xuICAgICAgXCJkYXRhU2V0XCIgOiBcImZyaWVuZHNcIixcbiAgICAgIFwiZmV0Y2hUeXBlXCIgOiBcIkdFVFwiLFxuICAgICAgXCJkYXRhQmFzZU9iamVjdFwiIDogXCJcIixcbiAgICAgIFwiZW1iZWRJdGVtXCIgOiBcIj9fZW1iZWQ9ZnJpZW5kc1wiXG4gICAgfSlcbiAgICAudGhlbihmcm9tRnJpZW5kcyA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhmcm9tRnJpZW5kcylcbiAgICAgIGZyb21GcmllbmRzLmZvckVhY2goZnJpZW5kRGF0YSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGZyaWVuZERhdGEpXG4gICAgICAgIGlmIChmcmllbmREYXRhLnVzZXJJZCA9PT0gY3VycmVudFVzZXIpIHtcbiAgICAgICAgICBmcmllbmRzSUhhdmUucHVzaChmcmllbmREYXRhLm90aGVyRnJpZW5kSWQpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAvLyBjb25zb2xlLmxvZyhmcmllbmRzSUhhdmUpXG5cbiAgICAgICAgdGhpcy5zaG93VXNlclBvdGVudGlhbEZyaWVuZHMoZnJpZW5kc0lIYXZlKVxuICAgIH0pXG4gIH0sXG4gIHNob3dVc2VyUG90ZW50aWFsRnJpZW5kcyAoZnJpZW5kKSB7XG4gICAgbGV0IHVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xuICAgIGxldCBjdXJyZW50VXNlciA9IE51bWJlcih1c2VySWQpO1xuICAgIC8vIGNvbnNvbGUubG9nKGZyaWVuZClcbiAgICBsZXQgYWxsVGhlVXNlcnMgPSBbXVxuICAgIGZyaWVuZC5wdXNoKGN1cnJlbnRVc2VyKVxuICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcbiAgICAgIFwiZGF0YVNldFwiIDogXCJ1c2Vyc1wiLFxuICAgICAgXCJmZXRjaFR5cGVcIiA6IFwiR0VUXCIsXG4gICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiBcIlwiLFxuICAgICAgXCJlbWJlZEl0ZW1cIiA6IFwiP19lbWJlZD11c2Vyc1wiXG4gICAgfSlcbiAgICAudGhlbihhbGxVc2VycyA9PiB7XG4gICAgICBhbGxVc2Vycy5mb3JFYWNoKHVzZXIgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh1c2VyLmlkKVxuICAgICAgICBhbGxUaGVVc2Vycy5wdXNoKHVzZXIuaWQpXG4gICAgICB9KVxuICAgICAgY29uc29sZS5sb2coXCJldmVyeW9uZVwiLGFsbFRoZVVzZXJzLCBcInVzZXIgYW5kIGZyaWVuZHNcIixmcmllbmQpXG4gICAgICBsZXQgbm90Q3VycmVudEZyaWVuZCA9IHRoaXMuZGlmZmVyZW5jZU9mMkFycmF5cyhhbGxUaGVVc2VycywgZnJpZW5kKVxuICAgICAgbm90Q3VycmVudEZyaWVuZC5mb3JFYWNoKG5vRnJpZW5kT2ZNaW5lID0+IHtcbiAgICAgICAgdGhpcy5wcmludFBvdGVudGlhbEZyaWVuZHNUb0Jyb3dzZXIobm9GcmllbmRPZk1pbmUpXG5cbiAgICAgIH0pXG4gICAgfSlcbiAgfSxcbiAgIGRpZmZlcmVuY2VPZjJBcnJheXMgKGFycmF5MSwgYXJyYXkyKSB7XG4gICAgdmFyIHRlbXAgPSBbXTtcbiAgICBhcnJheTEgPSBhcnJheTEudG9TdHJpbmcoKS5zcGxpdCgnLCcpLm1hcChOdW1iZXIpO1xuICAgIGFycmF5MiA9IGFycmF5Mi50b1N0cmluZygpLnNwbGl0KCcsJykubWFwKE51bWJlcik7XG5cbiAgICBmb3IgKHZhciBpIGluIGFycmF5MSkge1xuICAgIGlmKGFycmF5Mi5pbmRleE9mKGFycmF5MVtpXSkgPT09IC0xKSB0ZW1wLnB1c2goYXJyYXkxW2ldKTtcbiAgICB9XG4gICAgZm9yKGkgaW4gYXJyYXkyKSB7XG4gICAgaWYoYXJyYXkxLmluZGV4T2YoYXJyYXkyW2ldKSA9PT0gLTEpIHRlbXAucHVzaChhcnJheTJbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gdGVtcC5zb3J0KChhLGIpID0+IGEtYik7XG4gICAgfSxcbiAgICBwcmludFBvdGVudGlhbEZyaWVuZHNUb0Jyb3dzZXIgKG5vdEFGcmllbmQpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKG5vdEFGcmllbmQpXG4gICAgICBjb25zdCB0YXJnZXRTZWN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmdXR1cmUtZnJpZW5kc1wiKTtcbiAgICAgIHRhcmdldFNlY3Rpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgZWxlbWVudFR5cGU6IFwiZGl2XCIsXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICBpZDogYHBvdGVudGlhbEZyaWVuZC0ke25vdEFGcmllbmR9YFxuICAgICAgICB9XG4gICAgICB9KSlcblxuICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xuICAgICAgICBcImRhdGFTZXRcIiA6IFwidXNlcnNcIixcbiAgICAgICAgXCJmZXRjaFR5cGVcIiA6IFwiR0VUXCIsXG4gICAgICAgIFwiZGF0YUJhc2VPYmplY3RcIiA6IFwiXCIsXG4gICAgICAgIFwiZW1iZWRJdGVtXCIgOiBcIj9fZW1iZWQ9dXNlcnNcIlxuICAgICAgfSlcbiAgICAgIC50aGVuKHVzZXJzSW5mbyA9PiB7XG4gICAgICAgIHVzZXJzSW5mby5mb3JFYWNoKHVzZXIgPT4ge1xuICAgICAgICAgIGlmICh1c2VyLmlkID09PSBub3RBRnJpZW5kKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyLmlkLCBcImlzIG5vIGZyaWVuZFwiKVxuICAgICAgICAgICAgY29uc3QgcG90ZW50aWFsRnJpZW5kQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHBvdGVudGlhbEZyaWVuZC0ke25vdEFGcmllbmR9YClcbiAgICAgICAgICAgIHBvdGVudGlhbEZyaWVuZENvbnRhaW5lci5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2gyJyxcbiAgICAgICAgICAgICAgY29udGVudDogdXNlci51c2VyTmFtZSxcbiAgICAgICAgICAgICAgY3NzQ2xhc3M6IGBwb3RlbnRpYWwtZnJpZW5kLSR7dXNlci5pZH1gXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIHBvdGVudGlhbEZyaWVuZENvbnRhaW5lci5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgY29udGVudDogXCJBZGQgRnJpZW5kXCIsXG4gICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICAgICAgICBpZDogYGFkZC1mcmllbmQtYnV0dG9uLSR7dXNlci5pZH1gLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgY2xhc3M6IFwiYWRkLWZyaWVuZC1idXR0b25cIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIGNvbnN0IGZvckFkZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBhZGQtZnJpZW5kLWJ1dHRvbi0ke3VzZXIuaWR9YCk7XG4gICAgICAgICAgICBmb3JBZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgZnJpZW5kc0V2ZW50c0xpc3RlbmVyLmZyaWVuZHNBZGRGcmllbmQoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgLy8gY29uc29sZS5sb2cobm90QUZyaWVuZClcbiAgICB9LFxuICAgIGZyaWVuZFNvcnRGcm9tTWVzc2FnZXNTZWN0aW9uIChhcnJheU9mRnJpZW5kcywgZnJpZW5kVG9BZGQsIGZyaWVuZFRvQWRkTmFtZSkge1xuICAgICAgbGV0IHVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xuICAgICAgbGV0IGN1cnJlbnRVc2VyID0gTnVtYmVyKHVzZXJJZCk7XG4gICAgICBhcnJheU9mRnJpZW5kcy5wdXNoKGN1cnJlbnRVc2VyKVxuICAgICAgbGV0IGFycmF5T2ZVc2VycyA9IFtdXG4gICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICAgIFwiZGF0YVNldFwiIDogXCJ1c2Vyc1wiLFxuICAgICAgICBcImZldGNoVHlwZVwiIDogXCJHRVRcIixcbiAgICAgICAgXCJkYXRhQmFzZU9iamVjdFwiIDogXCJcIixcbiAgICAgICAgXCJlbWJlZEl0ZW1cIiA6IFwiP19lbWJlZD1ldmVudHNcIn0pXG4gICAgICAgIC50aGVuKHVzZXJzID0+IHtcbiAgICAgICAgICB1c2Vycy5mb3JFYWNoKHVzZXIgPT4ge1xuICAgICAgICAgICAgYXJyYXlPZlVzZXJzLnB1c2godXNlci5pZClcbiAgICAgICAgICB9KVxuICAgICAgICAgIGxldCBub3RGcmllbmRzTGlzdCA9IHRoaXMuY29tcGFyZU1lc3NhZ2VGcmllbmRBcnJheXMoYXJyYXlPZlVzZXJzLCBhcnJheU9mRnJpZW5kcylcbiAgICAgICAgICB0aGlzLm1lc3NlbmdlckFkZGZyaWVuZEZpbmFsZShub3RGcmllbmRzTGlzdCwgZnJpZW5kVG9BZGQsIGZyaWVuZFRvQWRkTmFtZSlcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIGNvbXBhcmVNZXNzYWdlRnJpZW5kQXJyYXlzIChhcnJheTEsIGFycmF5Mikge1xuICAgICAgdmFyIHRlbXAgPSBbXTtcbiAgICAgIGFycmF5MSA9IGFycmF5MS50b1N0cmluZygpLnNwbGl0KCcsJykubWFwKE51bWJlcik7XG4gICAgICBhcnJheTIgPSBhcnJheTIudG9TdHJpbmcoKS5zcGxpdCgnLCcpLm1hcChOdW1iZXIpO1xuXG4gICAgICBmb3IgKHZhciBpIGluIGFycmF5MSkge1xuICAgICAgaWYoYXJyYXkyLmluZGV4T2YoYXJyYXkxW2ldKSA9PT0gLTEpIHRlbXAucHVzaChhcnJheTFbaV0pO1xuICAgICAgfVxuICAgICAgZm9yKGkgaW4gYXJyYXkyKSB7XG4gICAgICBpZihhcnJheTEuaW5kZXhPZihhcnJheTJbaV0pID09PSAtMSkgdGVtcC5wdXNoKGFycmF5MltpXSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGVtcC5zb3J0KChhLGIpID0+IGEtYik7XG4gICAgfSxcbiAgICBtZXNzZW5nZXJBZGRmcmllbmRGaW5hbGUgKG5vdGZyaWVuZHMsIHdhbnRlZEZyaWVuZCwgZnJpZW5kVG9BZGROYW1lKSB7XG4gICAgICBjb25zb2xlLmxvZyhub3RmcmllbmRzLCBOdW1iZXIod2FudGVkRnJpZW5kKSlcbiAgICAgIGNvbnN0IGZpbmFsRnJpZW5kID0gbm90ZnJpZW5kcy5maWx0ZXIoZnJpZW5kc1RoYXRBcmVudCA9PiBmcmllbmRzVGhhdEFyZW50ID09PSBOdW1iZXIod2FudGVkRnJpZW5kKSlcbiAgICAgIC8vIGNvbnNvbGUubG9nKGZpbmFsRnJpZW5kWzBdLCBOdW1iZXIod2FudGVkRnJpZW5kKSlcbiAgICAgIGlmIChmaW5hbEZyaWVuZFswXSA9PT0gTnVtYmVyKHdhbnRlZEZyaWVuZCkpIHtcbiAgICAgICAgaWYgKGZyaWVuZFRvQWRkTmFtZSA9PT0gXCJtb2RhbFwiKSB7XG4gICAgICAgICAgZnJpZW5kc0V2ZW50c0xpc3RlbmVyLnNlYXJjaEJhckFkZEZyaWVuZFRvSnNvbihmaW5hbEZyaWVuZClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLm1vZGFsUXVlc3Rpb25haXJlT2ZGcmllbmRzaGlwVmFsaWRpdHkod2FudGVkRnJpZW5kLGZyaWVuZFRvQWRkTmFtZSlcbiAgICAgICAgfS8vIGFsZXJ0KGBZb3UndmUgYWRkZWQgYSBmZWxsb3cgTm9tYWQgJHtmcmllbmRUb0FkZE5hbWV9IHlvdXIgZnJpZW5kIGxpc3RgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoXCJVaC4uLi4gWW91IGNhbid0IGZyaWVuZCB0aGVyZSAoaXQncyB5b3Ugb3Igc29tZW9uZSB3aG8ncyBhbHJlYWR5IGEgZnJpZW5kKS5cIilcbiAgICAgIH1cbiAgICB9LFxuICAgIG1vZGFsUXVlc3Rpb25haXJlT2ZGcmllbmRzaGlwVmFsaWRpdHkgKHdhbnRlZEZyaWVuZCwgZnJpZW5kVG9BZGROYW1lKSB7XG5cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3V0cHV0XCIpLmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgIGVsZW1lbnRUeXBlOiBcInNlY3Rpb25cIixcbiAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgIGlkOiBcIm1vZGFsLWNvbnRhaW5lclwiXG4gICAgICAgIH1cbiAgICAgIH0pKVxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC1jb250YWluZXJcIikuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgZWxlbWVudFR5cGU6IFwiZGl2XCIsXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICBpZDogXCJmcmllbmRzX19iYWNrZHJvcFwiXG4gICAgICAgIH1cbiAgICAgIH0pKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtY29udGFpbmVyXCIpLmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImRpdlwiLFxuICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgaWQ6IFwiZnJpZW5kc19fbW9kYWxcIlxuICAgICAgICB9XG4gICAgICB9KSlcbiAgICAgIGNvbnN0IG1vZGFsUGFyZW50VGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmcmllbmRzX19tb2RhbFwiKTtcbiAgICAgIG1vZGFsUGFyZW50VGFyZ2V0LmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImgxXCIsXG4gICAgICAgIGNvbnRlbnQ6IGBZb3Ugc3VyZSB5b3Ugd2FudCAke2ZyaWVuZFRvQWRkTmFtZX0gYXMgYSBmcmllbmQ/YCxcbiAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgIGlkOiBcImZyaWVuZHNfX2NvbnRlbnRcIlxuICAgICAgICB9XG4gICAgICB9KSlcbiAgICAgIG1vZGFsUGFyZW50VGFyZ2V0LmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgIGVsZW1lbnRUeXBlOiBcInBcIixcbiAgICAgICAgY29udGVudDogXCJJIG1lYW4gcmVhbGx5Li4uLlwiLFxuICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgaHJlZjogXCIjXCIsXG4gICAgICAgICAgaWQ6IFwiZnJpZW5kc19fY2xvc2VcIlxuICAgICAgICB9XG4gICAgICB9KSlcbiAgICAgIG1vZGFsUGFyZW50VGFyZ2V0LmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImJ1dHRvblwiLFxuICAgICAgICBjb250ZW50OiBcIkRvbid0IEZyaWVuZFwiLFxuICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgaWQ6IFwiZG9udEZyaWVuZFwiLFxuICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCJcbiAgICAgICAgfVxuICAgICAgfSkpXG4gICAgICBtb2RhbFBhcmVudFRhcmdldC5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICBlbGVtZW50VHlwZTogXCJidXR0b25cIixcbiAgICAgICAgY29udGVudDogYFllcywgbWFrZSAke2ZyaWVuZFRvQWRkTmFtZX0gYSBGcmllbmRgLFxuICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgaWQ6IFwiZnJpZW5kSXRVcFwiLFxuICAgICAgICAgIG5hbWU6IHdhbnRlZEZyaWVuZCxcbiAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiXG4gICAgICAgIH1cbiAgICAgIH0pKVxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkb250RnJpZW5kXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7ZnJpZW5kc0V2ZW50c0xpc3RlbmVyLmNsb3NlTWVzc2FnZU1vZGFsKClcbiAgICAgIH0pXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZyaWVuZEl0VXBcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZnJpZW5kc0V2ZW50c0xpc3RlbmVyLmNsb3NlTWVzc2FnZU1vZGFsKClcbiAgICAgIH0pXG4gICAgICB0aGlzLm9wZW5GcmllbmRNb2RhbCgpXG4gICAgfSxcbiAgICBvcGVuRnJpZW5kTW9kYWwgKCkge1xuICAgICAgbGV0IGJhY2tkcm9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmcmllbmRzX19iYWNrZHJvcFwiKTtcbiAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnJpZW5kc19fbW9kYWxcIik7XG4gICAgICBiYWNrZHJvcC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9LFxuICAgIGJ1aWxkRnJpZW5kU2VhcmNoQmFyICgpIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3V0cHV0XCIpLmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImRpdlwiLFxuICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgaWQ6IFwiZnJpZW5kLXNlYXJjaC1ib3hcIlxuICAgICAgICB9XG4gICAgICB9KSlcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnJpZW5kLXNlYXJjaC1ib3hcIikuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgZWxlbWVudFR5cGU6IFwiaW5wdXRcIixcbiAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgIGlkOiBcImZyaWVuZC1zZWFyY2gtaW5wdXRcIixcbiAgICAgICAgICBjbGFzczogXCJzZWFyY2gtdHh0XCIsXG4gICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgICBwbGFjZWhvbGRlcjogXCJTZWFyY2ggRm9yIEZyaWVuZHNcIlxuICAgICAgICB9XG4gICAgICB9KSlcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnJpZW5kLXNlYXJjaC1ib3hcIikuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgZWxlbWVudFR5cGU6IFwiYVwiLFxuICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgY2xhc3M6IFwiZnJpZW5kLXNlYXJjaC1idG5cIixcbiAgICAgICAgICBocmVmOiBcIiNcIixcbiAgICAgICAgICBpZDogXCJmcmllbmQtaWNvbi1hbmNob3JcIlxuICAgICAgICB9XG4gICAgICB9KSlcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnJpZW5kLWljb24tYW5jaG9yXCIpLmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImlcIixcbiAgICAgICAgY3NzQ2xhc3M6IFwiZmFzXCJcbiAgICAgIH0pKVxuICAgICAgbGV0IHNlYXJjaEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhc1wiKTtcbiAgICAgIHNlYXJjaEljb24uY2xhc3NMaXN0LmFkZChcImZhLXNlYXJjaFwiKTtcblxuICAgICAgY29uc3QgdXNlcnNTZWFyY2hGcmllbmRJbnB1dEVudGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmcmllbmQtc2VhcmNoLWlucHV0XCIpO1xuICAgICAgdXNlcnNTZWFyY2hGcmllbmRJbnB1dEVudGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCBrZXlQcmVzc0V2ZW50ID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZXZlbnQua2V5KVxuICAgICAgICBpZiAoa2V5UHJlc3NFdmVudC5jaGFyQ29kZSA9PT0gMTMpIHtcbiAgICAgICAgICBsZXQgdXNlcklucHV0RW50ZXIgPSBrZXlQcmVzc0V2ZW50LnRhcmdldC52YWx1ZTtcblxuICAgICAgICAgIGZyaWVuZHNFdmVudHNMaXN0ZW5lci5zZWFyY2hJbnB1dE1hZ2ljKHVzZXJJbnB1dEVudGVyKTtcbiAgICAgICAgICB1c2Vyc1NlYXJjaEZyaWVuZElucHV0RW50ZXIudmFsdWUgPSBcIlwiO1xuXG4gICAgICAgIH1cbiAgICAgIH0pXG5cblxuICAgICAgY29uc3QgdXNlcnNTZWFyY2hGcmllbmRJbnB1dENsaWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmcmllbmQtaWNvbi1hbmNob3JcIik7XG4gICAgICB1c2Vyc1NlYXJjaEZyaWVuZElucHV0Q2xpY2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgbGV0IHVzZXJJbnB1dENsaWNrID0gdXNlcnNTZWFyY2hGcmllbmRJbnB1dEVudGVyLnZhbHVlXG4gICAgICAgIGZyaWVuZHNFdmVudHNMaXN0ZW5lci5zZWFyY2hJbnB1dE1hZ2ljKHVzZXJJbnB1dENsaWNrKTtcbiAgICAgICAgdXNlcnNTZWFyY2hGcmllbmRJbnB1dEVudGVyLnZhbHVlID0gXCJcIjtcblxuICAgICAgfSlcbiAgICB9LFxuICAgIHNlYXJjaFJlc3VsdERpc3BsYXllZCAoZnJpZW5kU2VhcmNoUmVzdWx0RGlzcGxheWVkKSB7XG4gICAgICBjb25zb2xlLmxvZyhcInlvXCIpXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm91dHB1dFwiKS5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICBlbGVtZW50VHlwZTogXCJzZWN0aW9uXCIsXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICBpZDogXCJtb2RhbC1jb250YWluZXJcIlxuICAgICAgICB9XG4gICAgICB9KSlcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtY29udGFpbmVyXCIpLmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImRpdlwiLFxuICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgaWQ6IFwiZnJpZW5kc19fYmFja2Ryb3BcIlxuICAgICAgICB9XG4gICAgICB9KSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsLWNvbnRhaW5lclwiKS5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICBlbGVtZW50VHlwZTogXCJkaXZcIixcbiAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgIGlkOiBcImZyaWVuZHNfX21vZGFsXCJcbiAgICAgICAgfVxuICAgICAgfSkpXG4gICAgICBjb25zdCBtb2RhbFBhcmVudFRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnJpZW5kc19fbW9kYWxcIik7XG4gICAgICBtb2RhbFBhcmVudFRhcmdldC5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICBlbGVtZW50VHlwZTogXCJoMVwiLFxuICAgICAgICBjb250ZW50OiBgV291bGQgeW91IGxpa2UgdG8gYmUgZnJpZW5kcyB3aXRoICR7ZnJpZW5kU2VhcmNoUmVzdWx0RGlzcGxheWVkLnVzZXJOYW1lfT9gLFxuICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgaWQ6IFwiZnJpZW5kc19fY29udGVudFwiXG4gICAgICAgIH1cbiAgICAgIH0pKVxuICAgICAgbW9kYWxQYXJlbnRUYXJnZXQuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgZWxlbWVudFR5cGU6IFwicFwiLFxuICAgICAgICBjb250ZW50OiBgSSBtZWFuICR7ZnJpZW5kU2VhcmNoUmVzdWx0RGlzcGxheWVkLnVzZXJOYW1lfSBpcyBwcmV0dHkgY29vbC4uLmAsXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICBocmVmOiBcIiNcIixcbiAgICAgICAgICBpZDogXCJmcmllbmRzX19jbG9zZVwiXG4gICAgICAgIH1cbiAgICAgIH0pKVxuICAgICAgbW9kYWxQYXJlbnRUYXJnZXQuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgZWxlbWVudFR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgIGNvbnRlbnQ6IFwiRG9uJ3QgRnJpZW5kXCIsXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICBpZDogXCJkb250RnJpZW5kXCIsXG4gICAgICAgICAgdHlwZTogXCJidXR0b25cIlxuICAgICAgICB9XG4gICAgICB9KSlcbiAgICAgIG1vZGFsUGFyZW50VGFyZ2V0LmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImJ1dHRvblwiLFxuICAgICAgICBjb250ZW50OiBgWWVzLCBtYWtlICR7ZnJpZW5kU2VhcmNoUmVzdWx0RGlzcGxheWVkLnVzZXJOYW1lfSBhIEZyaWVuZGAsXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICBpZDogXCJmcmllbmRJdFVwLXNlYXJjaE1vZGFsXCIsXG4gICAgICAgICAgdHlwZTogXCJidXR0b25cIlxuICAgICAgICB9XG4gICAgICB9KSlcblxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkb250RnJpZW5kXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7ZnJpZW5kc0V2ZW50c0xpc3RlbmVyLmNsb3NlTWVzc2FnZU1vZGFsKClcbiAgICAgIH0pXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZyaWVuZEl0VXAtc2VhcmNoTW9kYWxcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZnJpZW5kc0V2ZW50c0xpc3RlbmVyLnNlYXJjaEJhckZyaWVuZGluZyhmcmllbmRTZWFyY2hSZXN1bHREaXNwbGF5ZWQuaWQpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLm9wZW5GcmllbmRNb2RhbCgpXG4gICAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZyaWVuZHNcblxuLy8gY29uc3QgdGVzdGVyID0gW1xuLy8gICB7XG4vLyAgICAgZWxlbWVudFR5cGU6IFwiaDJcIixcbi8vICAgICBjb250ZW50OiBcImpha2UgYmFubm9uXCJcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGVsZW1lbnRUeXBlOiBcInBcIixcbi8vICAgICBjb250ZW50OiBcIlBvb2wgUGFydHkgM3BtXCJcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGVsZW1lbnRUeXBlOiBcInBcIixcbi8vICAgICBjb250ZW50OiBcImNoZWNrIG91dCB0aGlzIG5ld3MgYXJ0aWNsZVwiXG4vLyAgIH1cbi8vIF0iLCJpbXBvcnQgZnJpZW5kcyBmcm9tIFwiLi9mcmllbmRzXCJcbmltcG9ydCBtZXNzYWdlcyBmcm9tIFwiLi9tZXNzYWdlc1wiXG5pbXBvcnQgbm9tYWREYXRhIGZyb20gXCIuL25vbWFkRGF0YVwiO1xuXG5jb25zdCBmcmllbmRzRXZlbnRzTGlzdGVuZXIgPSB7XG4gIGZyaWVuZHNEZWxldGVGcmllbmQgKCkge1xuICAgIGNvbnN0IGZyaWVuZFRvRGVsZXRlID0gKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QudmFsdWUpLnNwbGl0KFwiLVwiKVsyXTtcbiAgICBsZXQgdXNlcklkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKTtcbiAgICBsZXQgY3VycmVudFVzZXIgPSB1c2VySWQ7XG4gICAgY29uc29sZS5sb2coZnJpZW5kVG9EZWxldGUsIGN1cnJlbnRVc2VyKTtcbiAgICBsZXQgZmluYWxOdW1iZXJTZW5kRm9yRGVsZXRlID0gMFxuXG4gICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xuICAgICAgXCJkYXRhU2V0XCIgOiBcImZyaWVuZHNcIixcbiAgICAgIFwiZmV0Y2hUeXBlXCIgOiBcIkdFVFwiLFxuICAgICAgXCJkYXRhQmFzZU9iamVjdFwiIDogXCJcIixcbiAgICAgIFwiZW1iZWRJdGVtXCIgOiBcIj9fZW1iZWQ9ZnJpZW5kc1wiXG4gICAgfSlcbiAgICAudGhlbihkZXN0cm95RnJpZW5kc0hlYXJ0ID0+IHtcbiAgICAgIGRlc3Ryb3lGcmllbmRzSGVhcnQuZm9yRWFjaChnb29kYnllRnJpZW5kID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZ29vZGJ5ZUZyaWVuZC51c2VySWQsIE51bWJlcihjdXJyZW50VXNlcikpXG4gICAgICAgIGlmIChnb29kYnllRnJpZW5kLm90aGVyRnJpZW5kSWQgPT09IE51bWJlcihmcmllbmRUb0RlbGV0ZSkgJiYgZ29vZGJ5ZUZyaWVuZC51c2VySWQgPT09IE51bWJlcihjdXJyZW50VXNlcikpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGVhY2VPdXRcIixnb29kYnllRnJpZW5kLmlkKTtcbiAgICAgICAgICAgIGZpbmFsTnVtYmVyU2VuZEZvckRlbGV0ZSA9IGdvb2RieWVGcmllbmQuaWQ7XG5cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIGxldCBnb29kQnllU2VhcmNoUmVzdWx0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBmcmllbmQtJHtmcmllbmRUb0RlbGV0ZX1gKTtcbiAgICAgIGdvb2RCeWVTZWFyY2hSZXN1bHRzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZ29vZEJ5ZVNlYXJjaFJlc3VsdHMpO1xuXG4gICAgICBjb25zb2xlLmxvZyhmaW5hbE51bWJlclNlbmRGb3JEZWxldGUpXG4gICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICAgIFwiZGVsZXRlSWRcIiA6IGZpbmFsTnVtYmVyU2VuZEZvckRlbGV0ZSxcbiAgICAgICAgXCJkYXRhU2V0XCIgOiBcImZyaWVuZHNcIixcbiAgICAgICAgXCJmZXRjaFR5cGVcIiA6IFwiREVMRVRFXCIsXG4gICAgICAgIFwiZGF0YUJhc2VPYmplY3RcIiA6IHtcbiAgICAgICAgICBcInVzZXJJZFwiOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpXG4gICAgICAgIH1cbiAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAkKFwiI291dHB1dFwiKS5lbXB0eSgpO1xuICAgICAgICBmcmllbmRzLmRlZmluZUN1cnJlbnRVc2Vyc0ZyaWVuZHMoKTtcbiAgICAgICAgZnJpZW5kcy5pbml0aWFsaXplUG90ZW50aWFsRnJpZW5kcygpO1xuICAgICAgfSlcbiAgICB9KVxuXG4gIH0sXG4gIGZyaWVuZHNBZGRGcmllbmQgKCkge1xuICAgIGxldCB1c2VySWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpO1xuICAgIGxldCBjdXJyZW50VXNlciA9IE51bWJlcih1c2VySWQpO1xuXG5cbiAgICBjb25zdCBmcmllbmRUb0JlQWRkZWQgPSAoZXZlbnQudGFyZ2V0LmlkKS5zcGxpdChcIi1cIilbM107XG4gICAgY29uc29sZS5sb2coYHVzZXIke2N1cnJlbnRVc2VyfWAsYEFkZGluZyBGcmllbmQke2ZyaWVuZFRvQmVBZGRlZH1gKVxuXG4gICAgbGV0IGdvb2RCeWVOb25GcmllbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcG90ZW50aWFsRnJpZW5kLSR7ZnJpZW5kVG9CZUFkZGVkfWApO1xuICAgIGdvb2RCeWVOb25GcmllbmQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChnb29kQnllTm9uRnJpZW5kKTtcbiAgICAvLyBhbGVydChgJHtldmVudC50YXJnZXQucHJldmlvdXNTaWJsaW5nLmlubmVyVGV4dH0gaXMgbm93IHlvdXIgZnJpZW5kIWApO1xuXG4gICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xuICAgICAgXCJkYXRhU2V0XCIgOiBcImZyaWVuZHNcIixcbiAgICAgIFwiZmV0Y2hUeXBlXCIgOiBcIlBPU1RcIixcbiAgICAgIFwiZGF0YUJhc2VPYmplY3RcIiA6IHtcbiAgICAgICAgXCJ1c2VySWRcIjogY3VycmVudFVzZXIsXG4gICAgICAgIFwib3RoZXJGcmllbmRJZFwiOiBOdW1iZXIoZnJpZW5kVG9CZUFkZGVkKSxcbiAgICAgIH1cbiAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICQoXCIjb3V0cHV0XCIpLmVtcHR5KCk7XG4gICAgICBmcmllbmRzLmRlZmluZUN1cnJlbnRVc2Vyc0ZyaWVuZHMoKTtcbiAgICAgIGZyaWVuZHMuaW5pdGlhbGl6ZVBvdGVudGlhbEZyaWVuZHMoKTtcbiAgICB9KVxuICB9LFxuICBzaGl6ICgpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmF0dHJpYnV0ZXMubmFtZS52YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgY29uc29sZS5sb2coXCJzaHppYmFsbFwiKVxuICAgIH1cbiAgICBjb25zdCBmcmllbmRUb0JlQWRkZWQgPSBldmVudC50YXJnZXQuYXR0cmlidXRlcy5uYW1lLnZhbHVlO1xuICAgIGNvbnN0IGZyaWVuZFRvQmVBZGRlZEhhc0FOYW1lID0gZXZlbnQudGFyZ2V0LnRleHRDb250ZW50LnNwbGl0KFwiOlwiKVswXVxuICAgIGxldCBmcmllbmRzSUhhdmUgPSBbXVxuICAgIGxldCB1c2VySWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKTtcbiAgICBsZXQgY3VycmVudFVzZXIgPSBOdW1iZXIodXNlcklkKTtcbiAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICBcImRhdGFTZXRcIiA6IFwiZnJpZW5kc1wiLFxuICAgICAgXCJmZXRjaFR5cGVcIiA6IFwiR0VUXCIsXG4gICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiBcIlwiLFxuICAgICAgXCJlbWJlZEl0ZW1cIiA6IFwiP19lbWJlZD1mcmllbmRzXCJcbiAgICB9KVxuICAgIC50aGVuKGZyb21GcmllbmRzID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGZyb21GcmllbmRzKVxuICAgICAgZnJvbUZyaWVuZHMuZm9yRWFjaChmcmllbmREYXRhID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZnJpZW5kRGF0YSlcbiAgICAgICAgaWYgKGZyaWVuZERhdGEudXNlcklkID09PSBjdXJyZW50VXNlcikge1xuICAgICAgICAgIGZyaWVuZHNJSGF2ZS5wdXNoKGZyaWVuZERhdGEub3RoZXJGcmllbmRJZClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC8vIGNvbnNvbGUubG9nKGZyaWVuZHNJSGF2ZSlcbiAgICAgIGZyaWVuZHMuZnJpZW5kU29ydEZyb21NZXNzYWdlc1NlY3Rpb24oZnJpZW5kc0lIYXZlLCBmcmllbmRUb0JlQWRkZWQsIGZyaWVuZFRvQmVBZGRlZEhhc0FOYW1lKVxuICAgIH0pXG4gIH0sXG4gIGNsb3NlTWVzc2FnZU1vZGFsKCkge1xuICAgIGxldCB1c2VySWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKTtcbiAgICBsZXQgY3VycmVudFVzZXIgPSBOdW1iZXIodXNlcklkKTtcblxuICAgIGlmIChldmVudC50YXJnZXQuaWQgPT09IFwiZG9udEZyaWVuZFwiKSB7XG4gICAgICBsZXQgZ29vZEJ5ZVNlYXJjaFJlc3VsdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsLWNvbnRhaW5lclwiKTtcbiAgICAgIGdvb2RCeWVTZWFyY2hSZXN1bHRzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZ29vZEJ5ZVNlYXJjaFJlc3VsdHMpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmlkID09PSBcImZyaWVuZEl0VXBcIikge1xuICAgICAgbGV0IGdvb2RCeWVTZWFyY2hSZXN1bHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC1jb250YWluZXJcIik7XG4gICAgICBnb29kQnllU2VhcmNoUmVzdWx0cy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGdvb2RCeWVTZWFyY2hSZXN1bHRzKTtcbiAgICAgIGxldCBmcmllbmRUb2JlID0gZXZlbnQudGFyZ2V0LmF0dHJpYnV0ZXMubmFtZS52YWx1ZTtcbiAgICAgIGNvbnNvbGUubG9nKGZyaWVuZFRvYmUpXG4gICAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcbiAgICAgICAgICBcImRhdGFTZXRcIiA6IFwiZnJpZW5kc1wiLFxuICAgICAgICAgIFwiZmV0Y2hUeXBlXCIgOiBcIlBPU1RcIixcbiAgICAgICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiB7XG4gICAgICAgICAgICBcInVzZXJJZFwiOiBjdXJyZW50VXNlcixcbiAgICAgICAgICAgIFwib3RoZXJGcmllbmRJZFwiOiBOdW1iZXIoZnJpZW5kVG9iZSksXG4gICAgICAgICAgfVxuICAgICAgfSlcblxuICAgIH1cbiAgfSxcbiAgc2VhcmNoSW5wdXRNYWdpYyAodXNlcklucHV0KSB7XG4gICAgbGV0IHVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xuICAgIGxldCBjdXJyZW50VXNlciA9IE51bWJlcih1c2VySWQpO1xuICAgIC8vIGNvbnNvbGUubG9nKHVzZXJJbnB1dClcbiAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICBcImRhdGFTZXRcIiA6IFwidXNlcnNcIixcbiAgICAgIFwiZmV0Y2hUeXBlXCIgOiBcIkdFVFwiLFxuICAgICAgXCJkYXRhQmFzZU9iamVjdFwiIDogXCJcIixcbiAgICAgIFwiZW1iZWRJdGVtXCIgOiBcIj9fZW1iZWQ9dXNlcnNcIlxuICAgIH0pXG4gICAgLnRoZW4odXNlcnMgPT4ge1xuICAgICAgY29uc3QgZm91bmRVc2VycyA9IHVzZXJzLmZpbmQodXNlciA9PiB1c2VyLnVzZXJOYW1lLmluY2x1ZGVzKHVzZXJJbnB1dCkpO1xuICAgICAgY29uc29sZS5sb2coZm91bmRVc2Vycy5pZCwgY3VycmVudFVzZXIpXG4gICAgICBpZiAoZm91bmRVc2Vycy5pZCA9PT0gY3VycmVudFVzZXIpIHtcbiAgICAgICAgYWxlcnQoXCJDYW4ndCBmcmllbmQgeW91cnNlbGZcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmcmllbmRzLnNlYXJjaFJlc3VsdERpc3BsYXllZChmb3VuZFVzZXJzKTtcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuICBzZWFyY2hCYXJGcmllbmRpbmcgKGZyaWVuZFRvQmVGcm9tU2VhcmNoSWQpIHtcbiAgICBjb25zdCBkZWZpbmVkQXNGcm9tU2VhcmNoTW9kYWwgPSBcIm1vZGFsXCJcbiAgICBsZXQgZnJpZW5kc0lIYXZlID0gW11cbiAgICBsZXQgdXNlcklkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyk7XG4gICAgbGV0IGN1cnJlbnRVc2VyID0gTnVtYmVyKHVzZXJJZCk7XG4gICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xuICAgICAgXCJkYXRhU2V0XCIgOiBcImZyaWVuZHNcIixcbiAgICAgIFwiZmV0Y2hUeXBlXCIgOiBcIkdFVFwiLFxuICAgICAgXCJkYXRhQmFzZU9iamVjdFwiIDogXCJcIixcbiAgICAgIFwiZW1iZWRJdGVtXCIgOiBcIj9fZW1iZWQ9ZnJpZW5kc1wiXG4gICAgfSlcbiAgICAudGhlbihmcm9tRnJpZW5kcyA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhmcm9tRnJpZW5kcylcbiAgICAgIGZyb21GcmllbmRzLmZvckVhY2goZnJpZW5kRGF0YSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGZyaWVuZERhdGEpXG4gICAgICAgIGlmIChmcmllbmREYXRhLnVzZXJJZCA9PT0gY3VycmVudFVzZXIpIHtcbiAgICAgICAgICBmcmllbmRzSUhhdmUucHVzaChmcmllbmREYXRhLm90aGVyRnJpZW5kSWQpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAvLyBjb25zb2xlLmxvZyhmcmllbmRzSUhhdmUpXG4gICAgICBmcmllbmRzLmZyaWVuZFNvcnRGcm9tTWVzc2FnZXNTZWN0aW9uKGZyaWVuZHNJSGF2ZSwgZnJpZW5kVG9CZUZyb21TZWFyY2hJZCwgZGVmaW5lZEFzRnJvbVNlYXJjaE1vZGFsKVxuICAgIH0pXG4gIH0sXG4gIHNlYXJjaEJhckFkZEZyaWVuZFRvSnNvbiAoZnJpZW5kVG9CZSkge1xuICAgIGxldCB1c2VySWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKTtcbiAgICBsZXQgY3VycmVudFVzZXIgPSBOdW1iZXIodXNlcklkKTtcblxuICAgIGxldCBnb29kQnllU2VhcmNoUmVzdWx0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtY29udGFpbmVyXCIpO1xuICAgIGdvb2RCeWVTZWFyY2hSZXN1bHRzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZ29vZEJ5ZVNlYXJjaFJlc3VsdHMpO1xuXG4gICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xuICAgICAgXCJkYXRhU2V0XCIgOiBcImZyaWVuZHNcIixcbiAgICAgIFwiZmV0Y2hUeXBlXCIgOiBcIlBPU1RcIixcbiAgICAgIFwiZGF0YUJhc2VPYmplY3RcIiA6IHtcbiAgICAgICAgXCJ1c2VySWRcIjogY3VycmVudFVzZXIsXG4gICAgICAgIFwib3RoZXJGcmllbmRJZFwiOiBOdW1iZXIoZnJpZW5kVG9CZSksXG4gICAgICB9XG4gIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnJpZW5kc0V2ZW50c0xpc3RlbmVyIiwiaW1wb3J0IG5vbWFkRGF0YSBmcm9tIFwiLi9ub21hZERhdGFcIjtcbmltcG9ydCBkb21Db21wb25lbnRzIGZyb20gXCIuL2RvbUNvbXBvbmVudHNcIjtcbmltcG9ydCBtZXNzYWdlc0V2ZW50TGlzdGVuZXJzIGZyb20gXCIuL21lc3NhZ2VzRXZlbnRMaXN0ZW5lcnNcIjtcbmltcG9ydCBmcmllbmRzRXZlbnRzTGlzdGVuZXIgZnJvbSBcIi4vZnJpZW5kc0V2ZW50c0xpc3RlbmVyLmpzXCI7XG5cbmNvbnN0IG1lc3NhZ2VzID0ge1xuXG4gICAgY3JlYXRlTWVzc2FnZUJvYXJkKCkge1xuICAgICAgICAkKFwiI291dHB1dFwiKS5lbXB0eSgpXG5cbiAgICAgICAgbGV0IG91dHB1dEFydGljbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm91dHB1dFwiKVxuXG4gICAgICAgIC8vY3JlYXRlIGRpc3BsYXkgY29udGFpbmVyXG4gICAgICAgIGxldCBtZXNzYWdlc0NvbnRhaW5lciA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwic2VjdGlvblwiLFxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcIm1lc3NhZ2VzQ29udGFpbmVyXCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgIGlkIDogXCJtZXNzYWdlc0NvbnRhaW5lclwiXG4gICAgICAgICAgICB9fSk7XG5cbiAgICAgICAgLy9jcmVhdGUgbWVzc2FnZSBpbnB1dCBmaWVsZFxuICAgICAgICBsZXQgbWVzc2FnZUlucHV0ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJpbnB1dFwiLFxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcIm1lc3NhZ2VJbnB1dFwiLFxuICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICBpZCA6IFwibWVzc2FnZUlucHV0XCIsXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiRW50ZXIgTWVzc2FnZSBIZXJlXCJcbiAgICAgICAgICAgIH19KTtcblxuICAgICAgICAvL2NyZWF0ZSBzdWJtaXQgYnV0dG9uIGZvciBpbnB1dCBmaWVsZFxuICAgICAgICBsZXQgbWVzc2FnZVN1Ym1pdEJ1dHRvbiA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwibWVzc2FnZVN1Ym1pdEJ1dHRvblwiLFxuICAgICAgICAgICAgY29udGVudCA6IFwiU3VibWl0XCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgIGlkIDogXCJtZXNzYWdlU3VibWl0QnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgdHlwZSA6IFwiYnV0dG9uXCJcbiAgICAgICAgICAgIH19KTtcblxuICAgICAgICBtZXNzYWdlU3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtZXNzYWdlc0V2ZW50TGlzdGVuZXJzLnBvc3ROZXdNZXNzYWdlLCB7b25jZTogdHJ1ZX0pO1xuICAgICAgICBtZXNzYWdlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlSW5wdXQpO1xuICAgICAgICBtZXNzYWdlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlU3VibWl0QnV0dG9uKTtcbiAgICAgICAgb3V0cHV0QXJ0aWNsZS5hcHBlbmRDaGlsZChtZXNzYWdlc0NvbnRhaW5lcik7XG5cbiAgICAgICAgICAgIHRoaXMuZ2V0TWVzc2FnZXMoKVxuICAgIH0sXG5cbiAgICBnZXRNZXNzYWdlcygpIHtcblxuICAgICAgICAvL0dFVCBmZXRjaCAmIC50aGVuIHRvIGJ1aWxkIG9iamVjdChzKSBmb3IgY3JlYXRlRG9tRWxlbWVudCgpIHVzaW5nIF9leHBhbmQgdG8gZGlzcGxheSBVTjogbWVzc2FnZVxuICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG5cbiAgICAgICAgICAgICAgICBkYXRhU2V0IDogXCJtZXNzYWdlc1wiLFxuICAgICAgICAgICAgICAgIGZldGNoVHlwZSA6IFwiR0VUXCIsXG4gICAgICAgICAgICAgICAgZW1iZWRJdGVtIDogXCI/X2V4cGFuZD11c2VyXCJcblxuICAgICAgICB9KS50aGVuKG1lc3NhZ2VzID0+IHtcblxuICAgICAgICAgICAgbGV0IG1lc3NhZ2VDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lc3NhZ2VzQ29udGFpbmVyXCIpO1xuICAgICAgICAgICAgbGV0IG1lc3NhZ2VJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVzc2FnZUlucHV0XCIpO1xuXG4gICAgICAgICAgICAvL3NvcnQgbWVzc2FnZXMgYnkgdGltZVN0YW1wXG4gICAgICAgICAgICBtZXNzYWdlcy5zb3J0KGZ1bmN0aW9uKGEsYil7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGEudGltZVN0YW1wKSAtIG5ldyBEYXRlKGIudGltZVN0YW1wKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvL2J1aWxkIERPTSBDb21wb25lbnQgZm9yIGVhY2ggbWVzc2FnZSBhbmQgYXBwZW5kXG4gICAgICAgICAgICBtZXNzYWdlcy5mb3JFYWNoKG1lc3NhZ2UgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2VUZXh0ID0gbWVzc2FnZS5tZXNzYWdlO1xuICAgICAgICAgICAgICAgIGxldCB1c2VyTmFtZSA9IG1lc3NhZ2UudXNlci51c2VyTmFtZTtcbiAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZUlkID0gbWVzc2FnZS5pZDtcbiAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZVRpbWVTdGFtcCA9IG1lc3NhZ2UudGltZVN0YW1wO1xuICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlVXNlciA9IGAke21lc3NhZ2UudXNlcklkfWA7XG4gICAgICAgICAgICAgICAgbGV0IGxvZ2dlZEluVXNlciA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIik7XG5cbiAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZURpdiA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgOiBcIm1lc3NhZ2VEaXZcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkIDogXCJtZXNzYWdlRGl2XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZUVsZW1lbnQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAvLyBBREQgTElOSyBIRVJFXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJoM1wiLFxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcyA6IFwibWVzc2FnZVVzZXJOYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgOiBgJHt1c2VyTmFtZX06YCxcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBgbWVzc2FnZSR7bWVzc2FnZUlkfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lIDogcGFyc2VJbnQobWVzc2FnZVVzZXIpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2VFbGVtZW50MiA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJwXCIsXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzIDogXCJtZXNzYWdlVGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50IDogYCR7bWVzc2FnZVRleHR9YCxcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBtZXNzYWdlSWRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2VVc2VyID09PSBsb2dnZWRJblVzZXIpIHtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZUVkaXRCdXR0b24gPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcyA6IFwibWVzc2FnZUVkaXRCdXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgOiBcIkVkaXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGBtZXNzYWdlRWRpdEJ1dHRvbl8ke21lc3NhZ2VJZH1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG1lc3NhZ2VUaW1lU3RhbXAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA6IFwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1lc3NhZ2VzRXZlbnRMaXN0ZW5lcnMuZWRpdE1lc3NhZ2UsIHtvbmNlOiB0cnVlfSlcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZURpdi5hcHBlbmRDaGlsZChtZXNzYWdlRWxlbWVudClcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsZW1lbnQuYXBwZW5kQ2hpbGQobWVzc2FnZUVsZW1lbnQyKVxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRGl2LmFwcGVuZENoaWxkKG1lc3NhZ2VFZGl0QnV0dG9uKVxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlQ29udGFpbmVyLmluc2VydEJlZm9yZShtZXNzYWdlRGl2LCBtZXNzYWdlSW5wdXQpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWxlbWVudC5hcHBlbmRDaGlsZChtZXNzYWdlRWxlbWVudDIpXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VDb250YWluZXIuaW5zZXJ0QmVmb3JlKG1lc3NhZ2VFbGVtZW50LCBtZXNzYWdlSW5wdXQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1lc3NhZ2VFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmcmllbmRzRXZlbnRzTGlzdGVuZXIuc2hpeilcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lc3NhZ2VzO1xuIiwiaW1wb3J0IG5vbWFkRGF0YSBmcm9tIFwiLi9ub21hZERhdGFcIjtcbmltcG9ydCBkb21Db21wb25lbnRzIGZyb20gXCIuL2RvbUNvbXBvbmVudHNcIjtcbmltcG9ydCBtZXNzYWdlcyBmcm9tIFwiLi9tZXNzYWdlc1wiO1xuLy8gaW1wb3J0IGZyaWVuZHNFdmVudExpc3RlbmVycyBmcm9tIFwiLi9mcmllbmRzRXZlbnRMaXN0ZW5lcnMuanNcIjtcblxuY29uc3QgbWVzc2FnZXNFdmVudExpc3RlbmVycyA9IHtcblxuICAgIHBvc3ROZXdNZXNzYWdlKCkge1xuXG4gICAgICAgIGxldCBtZXNzYWdlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lc3NhZ2VJbnB1dFwiKS52YWx1ZTtcbiAgICAgICAgbGV0IHRpbWVTdGFtcCA9IG5ldyBEYXRlKCk7XG5cbiAgICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xuXG4gICAgICAgICAgICBkYXRhU2V0IDogXCJtZXNzYWdlc1wiLFxuICAgICAgICAgICAgZmV0Y2hUeXBlIDogXCJQT1NUXCIsXG4gICAgICAgICAgICBkYXRhQmFzZU9iamVjdCA6IHtcbiAgICAgICAgICAgICAgICB1c2VySWQgOiBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSksXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA6IG1lc3NhZ2VJbnB1dCwvLy52YWx1ZSxcbiAgICAgICAgICAgICAgICB0aW1lU3RhbXAgOiB0aW1lU3RhbXBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbihzaGl0ID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNoaXQpXG4gICAgICAgICAgICAkKFwiI291dHB1dFwiKS5lbXB0eSgpO1xuICAgICAgICAgICAgbWVzc2FnZXMuY3JlYXRlTWVzc2FnZUJvYXJkKCk7XG4gICAgICAgIH0pXG4gICAgfSxcblxuICAgIGVkaXRNZXNzYWdlKCkge1xuICAgICAgICBsZXQgbnVtYmVyID0gZXZlbnQuY3VycmVudFRhcmdldC5pZDtcbiAgICAgICAgbGV0IG1lc3NhZ2VBcnJheSA9IG51bWJlci5zcGxpdChcIl9cIik7XG4gICAgICAgIGxldCBtZXNzYWdlSWQgPSBtZXNzYWdlQXJyYXlbMV07XG5cbiAgICAgICAgbGV0IG1lc3NhZ2VUb0VkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHttZXNzYWdlSWR9YCk7XG4gICAgICAgIGxldCBtZXNzYWdlVGV4dCA9IG1lc3NhZ2VUb0VkaXQuaW5uZXJIVE1MO1xuICAgICAgICBsZXQgbWVzc2FnZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBtZXNzYWdlJHttZXNzYWdlSWR9YCk7XG4gICAgICAgIGxldCBtZXNzYWdlVGltZVN0YW1wID0gZXZlbnQuY3VycmVudFRhcmdldC5uYW1lO1xuXG4gICAgICAgIGxldCBtZXNzYWdlRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZXNzYWdlRGl2XCIpXG5cbiAgICAgICAgbGV0IG1lc3NhZ2VFZGl0Rm9ybSA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCAoe1xuXG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwiZm9ybVwiLFxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcIm1lc3NhZ2VFZGl0Rm9ybVwiLFxuICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICBpZCA6IFwibWVzc2FnZUVkaXRGb3JtXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IG1lc3NhZ2VFZGl0RmllbGRzZXQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuXG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwiZmllbGRzZXRcIixcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJtZXNzYWdlRWRpdEZpZWxkc2V0XCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgIGlkIDogXCJtZXNzYWdlRWRpdEZpZWxkc2V0XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IG1lc3NhZ2VFZGl0SW5wdXQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuXG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwiaW5wdXRcIixcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJtZXNzYWdlRWRpdElucHV0XCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgIGlkIDogYG1lc3NhZ2VFZGl0SW5wdXRfJHttZXNzYWdlSWR9YCxcbiAgICAgICAgICAgICAgICB2YWx1ZSA6IGAke21lc3NhZ2VUZXh0fWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IG1lc3NhZ2VFZGl0U3VibWl0QnV0dG9uID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcblxuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcIm1lc3NhZ2VFZGl0U3VibWl0QnV0dG9uXCIsXG4gICAgICAgICAgICBjb250ZW50IDogXCJTdWJtaXRcIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgaWQgOiBgbWVzc2FnZUVkaXRTdWJtaXRCdXR0b25fJHttZXNzYWdlSWR9YCxcbiAgICAgICAgICAgICAgICBuYW1lOiBtZXNzYWdlVGltZVN0YW1wLFxuICAgICAgICAgICAgICAgIHR5cGUgOiBcImJ1dHRvblwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBtZXNzYWdlRWRpdFN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbWVzc2FnZXNFdmVudExpc3RlbmVycy5oYW5kbGVFZGl0U3VibWl0QnV0dG9uKVxuICAgICAgICBtZXNzYWdlRWRpdEZpZWxkc2V0LmFwcGVuZENoaWxkKG1lc3NhZ2VFZGl0SW5wdXQpXG4gICAgICAgIG1lc3NhZ2VFZGl0RmllbGRzZXQuYXBwZW5kQ2hpbGQobWVzc2FnZUVkaXRTdWJtaXRCdXR0b24pXG4gICAgICAgIG1lc3NhZ2VFZGl0Rm9ybS5hcHBlbmRDaGlsZChtZXNzYWdlRWRpdEZpZWxkc2V0KVxuICAgICAgICBtZXNzYWdlRGl2LmFwcGVuZENoaWxkKG1lc3NhZ2VFZGl0Rm9ybSlcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblxuICAgIH0sXG5cbiAgICBoYW5kbGVFZGl0U3VibWl0QnV0dG9uKCkge1xuICAgICAgICBsZXQgbnVtYmVyID0gZXZlbnQuY3VycmVudFRhcmdldC5pZDtcbiAgICAgICAgbGV0IG1lc3NhZ2VBcnJheSA9IG51bWJlci5zcGxpdChcIl9cIik7XG4gICAgICAgIGxldCBtZXNzYWdlSWQgPSBtZXNzYWdlQXJyYXlbMV07XG4gICAgICAgIGxldCBtZXNzYWdlVGltZVN0YW1wID0gYCR7ZXZlbnQuY3VycmVudFRhcmdldC5uYW1lfWA7XG4gICAgICAgIGxldCBtZXNzYWdlRWRpdElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG1lc3NhZ2VFZGl0SW5wdXRfJHttZXNzYWdlSWR9YCk7XG5cbiAgICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xuXG4gICAgICAgICAgICBwdXRJZCA6IG1lc3NhZ2VJZCxcbiAgICAgICAgICAgIGRhdGFTZXQgOiBcIm1lc3NhZ2VzXCIsXG4gICAgICAgICAgICBmZXRjaFR5cGUgOiBcIlBVVFwiLFxuICAgICAgICAgICAgZGF0YUJhc2VPYmplY3QgOiB7XG4gICAgICAgICAgICAgICAgdXNlcklkIDogTnVtYmVyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIikpLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGAke21lc3NhZ2VFZGl0SW5wdXQudmFsdWV9YCxcbiAgICAgICAgICAgICAgICB0aW1lU3RhbXA6IGAke21lc3NhZ2VUaW1lU3RhbXB9YFxuICAgICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKHNoaXQgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coc2hpdClcbiAgICAgICAgICAgICQoXCIjb3V0cHV0XCIpLmVtcHR5KCk7XG4gICAgICAgICAgICBtZXNzYWdlcy5jcmVhdGVNZXNzYWdlQm9hcmQoKTtcbiAgICAgICAgfSlcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBtZXNzYWdlc0V2ZW50TGlzdGVuZXJzOyIsImltcG9ydCBub21hZERhdGEgZnJvbSBcIi4vbm9tYWREYXRhXCI7XG5pbXBvcnQgZG9tQ29tcG9uZW50cyBmcm9tIFwiLi9kb21Db21wb25lbnRzXCI7XG4vL3B1bGwgZnJvbSBhcGkgdGhlbiBkaXNwbGF5IHRvIGRvbS5cbi8vIGNyZWF0ZSBzYXZlIGJ1dHRvbiBzZW5kIHNhdmVkIGFydGljbGVzIHRvIEpzb25cbi8vIGNyZWF0ZSBidXR0b24gdG8gcHVsbCBhbGwgc2F2ZWQgbWF0ZXJpYWxzIGluIGpzb24uXG4vLyBkZWxldGUgbWV0aG9kIGZvciBhcnRpY2xlc1xuY29uc3QgbmV3cyA9IHtcblxuICAgIGdldE5ld3MoKXtcbiAgICAgICAgLy9wdWxsIHRoZW4gc2VuZCBwdWxsZWQgZGF0YSB0byBkb21cbiAgICAgICAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMvMVwiKVxuICAgICAgICAgICAgLnRoZW4obmV3c0l0ZW1zID0+IG5ld3NJdGVtcy5qc29uKCkpXG4gICAgfSxcbiAgICBzYXZlKCkge1xuICAgICAgICAvL1RoaXMgaXMgZnVuY3Rpb25pbmcgYW5kIHdyaXRpbmcgdG8gSlNPTi5cbiAgICAgICAgdGhpcy5nZXROZXdzKCkudGhlbihwb3N0ID0+e1xuICAgICAgICBjb25zdCBuZXdzT2JqZWN0ID0ge1xuICAgICAgICAgICAgICAgIFwiZGF0YVNldFwiIDogXCJuZXdzSXRlbXNcIixcbiAgICAgICAgICAgICAgICBcImZldGNoVHlwZVwiIDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgXCJkYXRhQmFzZU9iamVjdFwiIDoge1xuICAgICAgICAgICAgICAgICAgICBcInVzZXJJZFwiOiAxLFxuICAgICAgICAgICAgICAgICAgICBcInVybFwiOiBgJHtwb3N0LnRpdGxlfWAsXG4gICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjogYCR7cG9zdC5ib2R5fWAsXG4gICAgICAgICAgICAgICAgICAgIFwic3lub3BzaXNcIjogXCJibGFoIGJsYWggYmxhaFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRlc3RuZXdzT2JqKTtcbiAgICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEobmV3c09iamVjdCk7XG4gICAgfSlcbiAgICB9LFxuXG4gICAgYWxsU2F2ZWQoKXtcbiAgICAvLyBub21hZERhdGEuY29ubmVjdFRvRGF0YSh0ZXN0bmV3c09iailcbiAgICB9LFxuXG4gICAgZGVsZXRlREIoKXtcblxuXG4gICAgfSxcblxuICAgIG5ld3NFbGVtZW50Q3JlYXRvcigpe1xuICAgICAgICAkKFwiI291dHB1dFwiKS5lbXB0eSgpXG4gICAgICAgIGNvbnN0IG5ld3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI291dHB1dFwiKVxuICAgICAgICBsZXQgbmV3c0NyZWF0b3JLZXkgPSB7XG4gICAgICAgICAgICBcImRhdGFTZXRcIiA6IFwibmV3c0l0ZW1zXCIsXG4gICAgICAgICAgICBcImZldGNoVHlwZVwiIDogXCJHRVRcIixcbiAgICAgICAgICAgIFwiZGF0YUJhc2VPYmplY3RcIiA6IFwiXCIsXG4gICAgICAgICAgICBcImVtYmVkSXRlbVwiIDogXCI/X2VtYmVkPW5ld3NJdGVtc1wiXG4gICAgICAgIH1cbiAgICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEobmV3c0NyZWF0b3JLZXkpXG4gICAgICAgIC50aGVuIChkYkdyYWJzID0+IHtcbiAgICAgICAgICAgIGRiR3JhYnMuZm9yRWFjaChkYkdyYWIgPT4gIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYkdyYWIpO1xuICAgICAgICAgICAgICAgIG5ld3NDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiU0FWRSBCSVRDSFwiLFxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzczogXCJuZXdzU2F2ZUJ1dHRvblwiXG4gICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgbmV3c0NvbnRhaW5lci5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJoMlwiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBkYkdyYWIudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzOiBcIm5ld3NUaXRsZVwiXG4gICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgbmV3c0NvbnRhaW5lci5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJwXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGRiR3JhYi5zeW5vcHNpcyxcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3M6IFwibmV3c0JvZHlcIlxuICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICAgIG5ld3NDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBkYkdyYWIudXJsLFxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzczogXCJuZXdzVVJMXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6e1xuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjpgJHtkYkdyYWIudXJsfWBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pKVxuXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gY29uc3QgTmV3c1Rlc3QgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoXCJoMlwiLHRlc3RQYXNzLFwidGVzdE9ialwiLG51bGwpO1xuICAgICAgICAvL291dHB1dC5hcHBlbmRDaGlsZChOZXdzVGVzdCk7XG5cblxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IG5ld3MiLCJpbXBvcnQgZXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vZXZlbnRMaXN0ZW5lcnNcIjtcbmNvbnN0IG5vbWFkRGF0YSA9IHtcblxuICAgIGNvbm5lY3RUb0RhdGEoZmV0Y2hPYmplY3QpIHtcblxuICAgICAgICBsZXQgZGF0YVNldCA9IGZldGNoT2JqZWN0LmRhdGFTZXQ7XG4gICAgICAgIGxldCBlbWJlZEl0ZW0gPSBmZXRjaE9iamVjdC5lbWJlZEl0ZW07XG4gICAgICAgIGxldCBmZXRjaFR5cGUgPSBmZXRjaE9iamVjdC5mZXRjaFR5cGU7XG4gICAgICAgIGxldCBkYXRhQmFzZU9iamVjdCA9IGZldGNoT2JqZWN0LmRhdGFCYXNlT2JqZWN0O1xuICAgICAgICBsZXQgcHV0SWQgPSBmZXRjaE9iamVjdC5wdXRJZDtcbiAgICAgICAgbGV0IGRlbGV0ZUlkID0gZmV0Y2hPYmplY3QuZGVsZXRlSWQ7XG5cbiAgICAgICAgaWYgKGZldGNoVHlwZSA9PSBcIkdFVFwiKSB7XG5cbiAgICAgICAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODgvJHtkYXRhU2V0fSR7ZW1iZWRJdGVtfWApXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpIC8vIHBhcnNlcyByZXNwb25zZSB0byBKU09OXG5cbiAgICAgICAgfSBlbHNlIGlmIChmZXRjaFR5cGUgPT09IFwiUE9TVFwiKXtcblxuICAgICAgICAvLyBEZWZhdWx0IG9wdGlvbnMgYXJlIG1hcmtlZCB3aXRoICpcbiAgICAgICAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODgvJHtkYXRhU2V0fWAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogYCR7ZmV0Y2hUeXBlfWAsIC8vICpHRVQsIFBPU1QsIFBVVCwgREVMRVRFLCBldGMuXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXG4gICAgICAgICAgICAgICAgLy8gXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyByZWZlcnJlcjogXCJuby1yZWZlcnJlclwiLCAvLyBuby1yZWZlcnJlciwgKmNsaWVudFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YUJhc2VPYmplY3QpLCAvLyBib2R5IGRhdGEgdHlwZSBtdXN0IG1hdGNoIFwiQ29udGVudC1UeXBlXCIgaGVhZGVyXG4gICAgICAgIH0pXG5cbiAgICAgICAgfSBlbHNlIGlmKGZldGNoVHlwZSA9PT0gXCJQVVRcIil7XG4gICAgICAgIHJldHVybiBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDg4LyR7ZGF0YVNldH0vJHtwdXRJZH1gLCB7XG4gICAgICAgICAgICBtZXRob2Q6IGAke2ZldGNoVHlwZX1gLCAvLyAqR0VULCBQT1NULCBQVVQsIERFTEVURSwgZXRjLlxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxuICAgICAgICAgICAgICAgIC8vIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gcmVmZXJyZXI6IFwibm8tcmVmZXJyZXJcIiwgLy8gbm8tcmVmZXJyZXIsICpjbGllbnRcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGFCYXNlT2JqZWN0KSwgLy8gYm9keSBkYXRhIHR5cGUgbXVzdCBtYXRjaCBcIkNvbnRlbnQtVHlwZVwiIGhlYWRlclxuICAgICAgICB9KVxuICAgICAgICB9IGVsc2UgaWYgKGZldGNoVHlwZSA9PT0gXCJERUxFVEVcIikge1xuICAgICAgICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC8ke2RhdGFTZXR9LyR7ZGVsZXRlSWR9YCwge1xuICAgICAgICAgICAgbWV0aG9kOiBgJHtmZXRjaFR5cGV9YCwgLy8gKkdFVCwgUE9TVCwgUFVULCBERUxFVEUsIGV0Yy5cbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcbiAgICAgICAgICAgICAgICAvLyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIHJlZmVycmVyOiBcIm5vLXJlZmVycmVyXCIsIC8vIG5vLXJlZmVycmVyLCAqY2xpZW50XG4gICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyAoXCJZT1UgU0NSRVdFRCBJVCBVUFwiKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBub21hZERhdGEiLCJpbXBvcnQgbm9tYWREYXRhIGZyb20gXCIuL25vbWFkRGF0YVwiO1xuaW1wb3J0IGRvbUNvbXBvbmVudHMgZnJvbSBcIi4vZG9tQ29tcG9uZW50c1wiO1xuaW1wb3J0IHRhc2tzRXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vdGFza3NFdmVudExpc3RlbmVyc1wiO1xuaW1wb3J0IHRhc2tzUG9wdXAgZnJvbSBcIi4vdGFza3NQb3B1cFwiO1xuLy8gaW1wb3J0IGV2ZW50TGlzdGVuZXJzIGZyb20gXCIuL2V2ZW50TGlzdGVuZXJzXCJcblxuY29uc3QgdGFza3MgPSB7XG5cbiAgICBjcmVhdGVUYXNrVGFibGVzKCkge1xuICAgICAgICAkKFwiI291dHB1dFwiKS5lbXB0eSgpXG5cbiAgICAgICAgbGV0IG91dHB1dEFydGljbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm91dHB1dFwiKVxuXG4gICAgICAgIC8vY3JlYXRlIGRpc3BsYXkgY29udGFpbmVyXG4gICAgICAgIGxldCB0YXNrc0NvbnRhaW5lciA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwic2VjdGlvblwiLFxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcInRhc2tzQ29udGFpbmVyXCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgIGlkIDogXCJ0YXNrc0NvbnRhaW5lclwiXG4gICAgICAgICAgICB9fSk7XG5cbiAgICAgICAgLy9jcmVhdGUgdGFza3MgdGFibGVzXG4gICAgICAgIGxldCBhY3RpdmVUYXNrc1RhYmxlID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJ0YWJsZVwiLFxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcImFjdGl2ZVRhc2tzVGFibGVcIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgaWQgOiBcImFjdGl2ZVRhc2tzVGFibGVcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgYWN0aXZlVGFza3NUYWJsZVRpdGxlID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJjYXB0aW9uXCIsXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwiYWN0aXZlVGFza3NUYWJsZVRpdGxlXCIsXG4gICAgICAgICAgICBjb250ZW50IDogXCJBQ1RJVkUgVEFTS1NcIlxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgY29tcGxldGVkVGFza3NUYWJsZSA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwidGFibGVcIixcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJjb21wbGV0ZWRUYXNrc1RhYmxlXCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgIGlkIDogXCJjb21wbGV0ZWRUYXNrc1RhYmxlXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGNvbXBsZXRlZFRhc2tzVGFibGVUaXRsZSA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwiY2FwdGlvblwiLFxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcImNvbXBsZXRlZFRhc2tzVGFibGVUaXRsZVwiLFxuICAgICAgICAgICAgY29udGVudCA6IFwiQ09NUExFVEVEIFRBU0tTXCJcbiAgICAgICAgfSlcblxuICAgICAgICAvL2NyZWF0ZSByb3cgd2l0aCBjb2x1bW4gaGVhZGVyc1xuICAgICAgICBsZXQgYWN0aXZlVGFza3NIZWFkZXJSb3cgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcInRyXCIsXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwiYWN0aXZlVGFza3NIZWFkZXJSb3dcIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgaWQgOiBcImFjdGl2ZVRhc2tzSGVhZGVyUm93XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGNvbXBsZXRlZFRhc2tzSGVhZGVyUm93ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJ0clwiLFxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcImNvbXBsZXRlZFRhc2tzSGVhZGVyUm93XCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgIGlkIDogXCJjb21wbGV0ZWRUYXNrc0hlYWRlclJvd1wiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vY3JlYXRlIGNvbHVtbiBoZWFkZXJzXG4gICAgICAgIGxldCBhY3RpdmVUYXNrc0hlYWRlciA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwidGhcIixcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJhY3RpdmVUYXNrc0hlYWRlclwiLFxuICAgICAgICAgICAgY29udGVudDogXCJUYXNrXCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgIGlkIDogXCJhY3RpdmVUYXNrc0hlYWRlclwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBhY3RpdmVUYXNrc0R1ZURhdGVIZWFkZXIgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcInRoXCIsXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwiYWN0aXZlVGFza3NEdWVEYXRlSGVhZGVyXCIsXG4gICAgICAgICAgICBjb250ZW50OiBcIkR1ZSBEYXRlXCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgIGlkIDogXCJhY3RpdmVUYXNrc0R1ZURhdGVIZWFkZXJcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgbGV0IGFjdGl2ZVRhc2tzRWRpdCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwidGhcIixcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJhY3RpdmVUYXNrc0VkaXRcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgIGlkIDogXCJhY3RpdmVUYXNrc0VkaXRcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgY29tcGxldGVkVGFza3NIZWFkZXIgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcInRoXCIsXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwiY29tcGxldGVkVGFza3NIZWFkZXJcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiVGFza1wiLFxuICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICBpZCA6IFwiY29tcGxldGVkVGFza3NIZWFkZXJcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgY29tcGxldGVkVGFza3NEdWVEYXRlSGVhZGVyID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJ0aFwiLFxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcImNvbXBsZXRlZFRhc2tzRHVlRGF0ZUhlYWRlclwiLFxuICAgICAgICAgICAgY29udGVudDogXCJEdWUgRGF0ZVwiLFxuICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICBpZCA6IFwiY29tcGxldGVkVGFza3NEdWVEYXRlSGVhZGVyXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vY3JlYXRlIGJ1dHRvbiB0byBtYWtlIG5ldyB0YXNrc1xuICAgICAgICBsZXQgY3JlYXRlVGFza0J1dHRvbiA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwiY3JlYXRlVGFza0J1dHRvblwiLFxuICAgICAgICAgICAgY29udGVudCA6IFwiQ3JlYXRlIE5ldyBUYXNrXCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgIGlkIDogXCJjcmVhdGVUYXNrQnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgdHlwZSA6IFwiYnV0dG9uXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBjb21wbGV0ZWRUYXNrc0VkaXQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcInRoXCIsXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwiY29tcGxldGVkVGFza3NFZGl0XCIsXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiLFxuICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICBpZCA6IFwiY29tcGxldGVkVGFza3NFZGl0XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9hcHBlbmQgaGVhZGVyIHJvdyB0byB0YWJsZSBhbmQgdGFibGUgdG8gY29udGFpbmVyXG4gICAgICAgIGFjdGl2ZVRhc2tzVGFibGUuYXBwZW5kQ2hpbGQoYWN0aXZlVGFza3NUYWJsZVRpdGxlKTtcbiAgICAgICAgY29tcGxldGVkVGFza3NUYWJsZS5hcHBlbmRDaGlsZChjb21wbGV0ZWRUYXNrc1RhYmxlVGl0bGUpO1xuICAgICAgICBhY3RpdmVUYXNrc0hlYWRlclJvdy5hcHBlbmRDaGlsZChhY3RpdmVUYXNrc0hlYWRlcilcbiAgICAgICAgYWN0aXZlVGFza3NIZWFkZXJSb3cuYXBwZW5kQ2hpbGQoYWN0aXZlVGFza3NEdWVEYXRlSGVhZGVyKTtcbiAgICAgICAgYWN0aXZlVGFza3NIZWFkZXJSb3cuYXBwZW5kQ2hpbGQoYWN0aXZlVGFza3NFZGl0KTtcbiAgICAgICAgYWN0aXZlVGFza3NUYWJsZS5hcHBlbmRDaGlsZChhY3RpdmVUYXNrc0hlYWRlclJvdyk7XG4gICAgICAgIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKGFjdGl2ZVRhc2tzVGFibGUpO1xuICAgICAgICBjb21wbGV0ZWRUYXNrc0hlYWRlclJvdy5hcHBlbmRDaGlsZChjb21wbGV0ZWRUYXNrc0hlYWRlcilcbiAgICAgICAgY29tcGxldGVkVGFza3NIZWFkZXJSb3cuYXBwZW5kQ2hpbGQoY29tcGxldGVkVGFza3NEdWVEYXRlSGVhZGVyKTtcbiAgICAgICAgY29tcGxldGVkVGFza3NIZWFkZXJSb3cuYXBwZW5kQ2hpbGQoY29tcGxldGVkVGFza3NFZGl0KTtcbiAgICAgICAgY29tcGxldGVkVGFza3NUYWJsZS5hcHBlbmRDaGlsZChjb21wbGV0ZWRUYXNrc0hlYWRlclJvdyk7XG4gICAgICAgIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbXBsZXRlZFRhc2tzVGFibGUpO1xuICAgICAgICBjcmVhdGVUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0YXNrc1BvcHVwLmNyZWF0ZU5ld1Rhc2tGb3JtKTtcbiAgICAgICAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVGFza0J1dHRvbik7XG4gICAgICAgIG91dHB1dEFydGljbGUuYXBwZW5kQ2hpbGQodGFza3NDb250YWluZXIpO1xuXG4gICAgICAgIHRoaXMuZ2V0VGFza3MoKTtcbiAgICB9LFxuXG4gICAgZ2V0VGFza3MoKSB7XG5cbiAgICAgICAgbGV0IGN1cnJlbnRVc2VyID0gTnVtYmVyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIikpO1xuXG4gICAgICAgIC8vcG9wdWxhdGUgdGFza3NcbiAgICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xuXG4gICAgICAgICAgICBkYXRhU2V0IDogXCJ0YXNrc1wiLFxuICAgICAgICAgICAgZmV0Y2hUeXBlIDogXCJHRVRcIixcbiAgICAgICAgICAgIGVtYmVkSXRlbSA6IFwiP19lbWJlZD11c2Vyc1wiXG5cbiAgICAgICAgfSkudGhlbih0YXNrcyA9PiB7XG5cbiAgICAgICAgICAgIHRhc2tzLnNvcnQoZnVuY3Rpb24oYSxiKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoYS5leHBlY3RlZENvbXBsZXRpb25EYXRlKSAtIG5ldyBEYXRlKGIuZXhwZWN0ZWRDb21wbGV0aW9uRGF0ZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGFza3MuZm9yRWFjaCh0YXNrID0+IHtcblxuICAgICAgICAgICAgICAgIGlmICh0YXNrLnVzZXJJZCA9PT0gY3VycmVudFVzZXIpIHtcblxuICAgICAgICAgICAgICAgIGxldCBzdGF0dXMgPSB0YXNrLmNvbXBsZXRlO1xuICAgICAgICAgICAgICAgIGxldCBhY3RpdmVUYXNrc1RhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY3RpdmVUYXNrc1RhYmxlXCIpO1xuICAgICAgICAgICAgICAgIGxldCBjb21wbGV0ZWRUYXNrc1RhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb21wbGV0ZWRUYXNrc1RhYmxlXCIpO1xuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBhIG5ldyB0YWJsZSByb3cgZm9yIGVhY2ggdGFza1xuICAgICAgICAgICAgICAgIGxldCB0YXNrUm93ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzIDogXCJ0YXNrVGFibGVSb3dcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkIDogYHRhc2tUYWJsZVJvd18ke3Rhc2suaWR9YFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIC8vY3JlYXRlIGNlbGxzIHRvIGhvbGQgdGFzayBhbmQgZHVlIGRhdGVcbiAgICAgICAgICAgICAgICBsZXQgdGFza0NlbGwgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgOiBcInRhc2tDZWxsXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZCA6IGB0YXNrQ2VsbF8ke3Rhc2suaWR9YFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIGxldCBkdWVEYXRlQ2VsbCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcyA6IFwiZHVlRGF0ZUNlbGxcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkIDogYGR1ZURhdGVDZWxsXyR7dGFzay5pZH1gXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgbGV0IHRhc2tFZGl0Q2VsbCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcyA6IFwidGFza0VkaXRDZWxsXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZCA6IGB0YXNrRWRpdENlbGxfJHt0YXNrLmlkfWBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBsZXQgdGFza0VkaXRCdXR0b24gPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzIDogXCJ0YXNrRWRpdEJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50IDogXCJFZGl0XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZCA6IGB0YXNrRWRpdEJ1dHRvbl8ke3Rhc2suaWR9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgOiBcImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgLy9jcmVhdGUgdGFzayBjaGVja2JveCBhbmQgdGl0bGVcbiAgICAgICAgICAgICAgICBsZXQgdGFza0xhYmVsID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzIDogXCJ0YXNrTGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkIDogYHRhc2tMYWJlbF8ke3Rhc2suaWR9YFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAvL2NyZWF0ZSB0YXNrIHRpdGxlXG4gICAgICAgICAgICAgICAgbGV0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGAke3Rhc2sudGFza31gKTtcblxuICAgICAgICAgICAgICAgIC8vY3JlYXRlIHRhc2sgY2hlY2tib3hcbiAgICAgICAgICAgICAgICBsZXQgdGFza0NoZWNrYm94ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzIDogXCJ0YXNrQ2hlY2tib3hcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkIDogYHRhc2tDaGVja2JveF8ke3Rhc2suaWR9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgOiBcImNoZWNrYm94XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA6IGAke3Rhc2sudGFza31gXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC8vY3JlYXRlIHRhc2sgZHV0ZSBkYXRlXG4gICAgICAgICAgICAgICAgbGV0IGR1ZURhdGVBcnJheSA9IG5ldyBEYXRlKHRhc2suZXhwZWN0ZWRDb21wbGV0aW9uRGF0ZSkudG9EYXRlU3RyaW5nKCkuc3BsaXQoXCIgXCIpXG4gICAgICAgICAgICAgICAgbGV0IGR1ZURhdGUgPSBgJHtkdWVEYXRlQXJyYXlbMV19ICR7ZHVlRGF0ZUFycmF5WzJdfSAke2R1ZURhdGVBcnJheVszXX1gXG5cblxuICAgICAgICAgICAgICAgIGxldCB0YXNrRHVlRGF0ZSA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJwXCIsXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzIDogXCJ0YXNrRHVlRGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50IDogZHVlRGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkIDogYHRhc2tEdWVEYXRlXyR7dGFzay5pZH1gXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgLy9hcHBlbmQgLS0gb3JkZXIgaXMgaW1wb3J0YW50IGZvciBjaGVja2JveCBhbmQgbGFiZWwgdG8gZW5zdXJlIGJveCBpbiBvbiB0aGUgbGVmdFxuICAgICAgICAgICAgICAgIHRhc2tDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHRhc2tzRXZlbnRMaXN0ZW5lcnMubWFya1Rhc2tDb21wbGV0ZSlcbiAgICAgICAgICAgICAgICB0YXNrRWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGFza3NFdmVudExpc3RlbmVycy50YXNrRWRpdEJ1dHRvbilcbiAgICAgICAgICAgICAgICB0YXNrTGFiZWwuYXBwZW5kQ2hpbGQodGFza0NoZWNrYm94KTtcbiAgICAgICAgICAgICAgICB0YXNrTGFiZWwuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgICAgICAgICAgICAgICB0YXNrQ2VsbC5hcHBlbmRDaGlsZCh0YXNrTGFiZWwpO1xuICAgICAgICAgICAgICAgIGR1ZURhdGVDZWxsLmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlKTtcbiAgICAgICAgICAgICAgICB0YXNrRWRpdENlbGwuYXBwZW5kQ2hpbGQodGFza0VkaXRCdXR0b24pO1xuICAgICAgICAgICAgICAgIHRhc2tSb3cuYXBwZW5kQ2hpbGQodGFza0NlbGwpO1xuICAgICAgICAgICAgICAgIHRhc2tSb3cuYXBwZW5kQ2hpbGQoZHVlRGF0ZUNlbGwpO1xuICAgICAgICAgICAgICAgIHRhc2tSb3cuYXBwZW5kQ2hpbGQodGFza0VkaXRDZWxsKTtcblxuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMpIHtcblxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWRUYXNrc1RhYmxlLmFwcGVuZENoaWxkKHRhc2tSb3cpO1xuICAgICAgICAgICAgICAgICAgICB0YXNrQ2hlY2tib3guc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLCBcIlwiKVxuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlVGFza3NUYWJsZS5hcHBlbmRDaGlsZCh0YXNrUm93KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fSk7XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB0YXNrcztcbiIsImltcG9ydCBub21hZERhdGEgZnJvbSBcIi4vbm9tYWREYXRhXCI7XG5pbXBvcnQgdGFza3MgZnJvbSBcIi4vdGFza3NcIjtcbmltcG9ydCBkb21Db21wb25lbnRzIGZyb20gXCIuL2RvbUNvbXBvbmVudHNcIlxuXG5jb25zdCB0YXNrc0V2ZW50TGlzdGVuZXJzID0ge1xuXG4gICAgY3JlYXRlTmV3VGFzaygpIHtcblxuICAgICAgICBsZXQgdGFza1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrVGl0bGVJbnB1dFwiKS52YWx1ZTtcbiAgICAgICAgbGV0IGR1ZURhdGVGaWVsZFZhbGl1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0RhdGVJbnB1dFwiKS52YWx1ZTtcbiAgICAgICAgbGV0IHVzZXJJZCA9IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKSk7XG5cbiAgICAgICAgbGV0IGR1ZURhdGVBcnJheSA9IGR1ZURhdGVGaWVsZFZhbGl1ZS5zcGxpdChcIi1cIilcbiAgICAgICAgbGV0IGR1ZURhdGUgPSBgJHtkdWVEYXRlQXJyYXlbMV19ICR7ZHVlRGF0ZUFycmF5WzJdfSAke2R1ZURhdGVBcnJheVswXX1gO1xuXG4gICAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcblxuICAgICAgICAgICAgZGF0YVNldCA6IFwidGFza3NcIixcbiAgICAgICAgICAgIGZldGNoVHlwZSA6IFwiUE9TVFwiLFxuICAgICAgICAgICAgZGF0YUJhc2VPYmplY3QgOiB7XG4gICAgICAgICAgICAgICAgdXNlcklkIDogdXNlcklkLFxuICAgICAgICAgICAgICAgIHRhc2sgOiB0YXNrVGl0bGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWRDb21wbGV0aW9uRGF0ZSA6IGR1ZURhdGUsXG4gICAgICAgICAgICAgICAgY29tcGxldGUgOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oc2hpdCA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzaGl0KVxuICAgICAgICAgICAgJChcIiNvdXRwdXRcIikuZW1wdHkoKVxuICAgICAgICAgICAgdGFza3MuY3JlYXRlVGFza1RhYmxlcygpO1xuICAgICAgICB9KVxuICAgIH0sXG5cbiAgICBtYXJrVGFza0NvbXBsZXRlKCkge1xuICAgICAgICBsZXQgdGFza1RvRWRpdElkID0gZXZlbnQudGFyZ2V0LmlkLnNwbGl0KFwiX1wiKVsxXTtcblxuICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG5cbiAgICAgICAgICAgIGRhdGFTZXQgOiBcInRhc2tzXCIsXG4gICAgICAgICAgICBmZXRjaFR5cGUgOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW1iZWRJdGVtIDogYD8maWQ9JHt0YXNrVG9FZGl0SWR9YFxuICAgICAgICB9KS50aGVuKHBhcnNlZFRhc2tzID0+IHtcblxuXG4gICAgICAgICAgICBsZXQgdGFza0lkID0gcGFyc2VkVGFza3NbMF0uaWQ7XG4gICAgICAgICAgICBsZXQgdXNlcklkID0gcGFyc2VkVGFza3NbMF0udXNlcklkO1xuICAgICAgICAgICAgbGV0IHRhc2sgPSBwYXJzZWRUYXNrc1swXS50YXNrO1xuICAgICAgICAgICAgbGV0IGV4cGVjdGVkQ29tcGxldGlvbkRhdGUgPSBwYXJzZWRUYXNrc1swXS5leHBlY3RlZENvbXBsZXRpb25EYXRlO1xuICAgICAgICAgICAgbGV0IGNvbXBsZXRlID0gcGFyc2VkVGFza3NbMF0uY29tcGxldGU7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2tJZCwgdXNlcklkLCB0YXNrLCBleHBlY3RlZENvbXBsZXRpb25EYXRlLCBjb21wbGV0ZSlcblxuICAgICAgICAgICAgaWYgKGNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgY29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29tcGxldGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcbiAgICAgICAgICAgICAgICBwdXRJZCA6IHRhc2tUb0VkaXRJZCxcbiAgICAgICAgICAgICAgICBkYXRhU2V0IDogXCJ0YXNrc1wiLFxuICAgICAgICAgICAgICAgIGZldGNoVHlwZSA6IFwiUFVUXCIsXG4gICAgICAgICAgICAgICAgZGF0YUJhc2VPYmplY3QgOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiB0YXNrSWQsXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZCA6IHVzZXJJZCxcbiAgICAgICAgICAgICAgICAgICAgdGFzayA6IHRhc2ssXG4gICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkQ29tcGxldGlvbkRhdGU6IGV4cGVjdGVkQ29tcGxldGlvbkRhdGUsXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBjb21wbGV0ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLnRoZW4oc2hpdCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2hpdClcbiAgICAgICAgICAgICAgICAkKFwiI291dHB1dFwiKS5lbXB0eSgpXG4gICAgICAgICAgICAgICAgdGFza3MuY3JlYXRlVGFza1RhYmxlcygpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH0sXG5cbiAgICB0YXNrRWRpdEJ1dHRvbigpIHtcblxuICAgICAgICBsZXQgbnVtYmVyID0gZXZlbnQuY3VycmVudFRhcmdldC5pZDtcbiAgICAgICAgbGV0IHRhc2tBcnJheSA9IG51bWJlci5zcGxpdChcIl9cIik7XG4gICAgICAgIGxldCB0YXNrSWQgPSB0YXNrQXJyYXlbMV07XG5cbiAgICAgICAgbGV0IHRhc2tDZWxsVG9FbXB0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB0YXNrQ2VsbF8ke3Rhc2tJZH1gKTtcbiAgICAgICAgbGV0IHRhc2tMYWJsZVRvUmVtb3ZlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRhc2tMYWJlbF8ke3Rhc2tJZH1gKTtcbiAgICAgICAgbGV0IGR1ZURhdGVDZWxsVG9FbXB0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkdWVEYXRlQ2VsbF8ke3Rhc2tJZH1gKTtcbiAgICAgICAgbGV0IGR1ZURhdGVUb1JlbW92ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB0YXNrRHVlRGF0ZV8ke3Rhc2tJZH1gKTtcbiAgICAgICAgbGV0IHRhc2tFZGl0Q2VsbFRvRW1wdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdGFza0VkaXRDZWxsXyR7dGFza0lkfWApO1xuICAgICAgICBsZXQgdGFza0VkaXRCdXR0b25Ub1JlbW92ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB0YXNrRWRpdEJ1dHRvbl8ke3Rhc2tJZH1gKTtcblxuICAgICAgICBsZXQgdGFza1RvRWRpdFRleHQgPSB0YXNrTGFibGVUb1JlbW92ZS5pbm5lclRleHQ7XG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tUb0VkaXRUZXh0KVxuXG4gICAgICAgIGxldCB0YXNrVG9FZGl0VGl0bGUgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImlucHV0XCIsXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwidGFza1RvRWRpdFRpdGxlXCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgIGlkIDogYHRhc2tUb0VkaXRUaXRsZV8ke3Rhc2tJZH1gLFxuICAgICAgICAgICAgICAgIHZhbHVlIDogYCR7dGFza1RvRWRpdFRleHR9YFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGxldCB0YXNrRHVlRGF0ZVRvRWRpdCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwiaW5wdXRcIixcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJ0YXNrRHVlRGF0ZVRvRWRpdFwiLFxuICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICBpZCA6IGB0YXNrRHVlRGF0ZVRvRWRpdF8ke3Rhc2tJZH1gLFxuICAgICAgICAgICAgICAgIHR5cGUgOiBcImRhdGVcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGxldCBlZGl0ZWRUYXNrU3VibWl0QnV0dG9uID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJidXR0b25cIixcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJlZGl0ZWRUYXNrU3VibWl0QnV0dG9uXCIsXG4gICAgICAgICAgICBjb250ZW50IDogXCJTdW1iaXRcIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgaWQgOiBgZWRpdGVkVGFza1N1Ym1pdEJ1dHRvbl8ke251bWJlcn1gLFxuICAgICAgICAgICAgICAgIHR5cGUgOiBcImJ1dHRvblwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGFza0NlbGxUb0VtcHR5LnJlbW92ZUNoaWxkKHRhc2tMYWJsZVRvUmVtb3ZlKTtcbiAgICAgICAgdGFza0NlbGxUb0VtcHR5LmFwcGVuZENoaWxkKHRhc2tUb0VkaXRUaXRsZSlcbiAgICAgICAgZHVlRGF0ZUNlbGxUb0VtcHR5LnJlbW92ZUNoaWxkKGR1ZURhdGVUb1JlbW92ZSk7XG4gICAgICAgIGR1ZURhdGVDZWxsVG9FbXB0eS5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZVRvRWRpdCk7XG4gICAgICAgIHRhc2tFZGl0Q2VsbFRvRW1wdHkucmVtb3ZlQ2hpbGQodGFza0VkaXRCdXR0b25Ub1JlbW92ZSk7XG4gICAgICAgIHRhc2tFZGl0Q2VsbFRvRW1wdHkuYXBwZW5kQ2hpbGQoZWRpdGVkVGFza1N1Ym1pdEJ1dHRvbik7XG4gICAgICAgIGVkaXRlZFRhc2tTdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRhc2tzRXZlbnRMaXN0ZW5lcnMuc2F2ZVRhc2tFZGl0KVxuXG4gICAgfSxcbiAgICBzYXZlVGFza0VkaXQoKSB7XG4gICAgICAgIGxldCB0YXNrTnVtYmVyID0gZXZlbnQuY3VycmVudFRhcmdldC5pZDtcbiAgICAgICAgbGV0IHRhc2tBcnJheSA9IHRhc2tOdW1iZXIuc3BsaXQoXCJfXCIpO1xuICAgICAgICBsZXQgdGFza0lkID0gdGFza0FycmF5WzJdO1xuICAgICAgICBsZXQgdGFza0VkaXRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB0YXNrVG9FZGl0VGl0bGVfJHt0YXNrSWR9YCkudmFsdWU7XG4gICAgICAgIGxldCB0YXNrRWRpdERhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdGFza0R1ZURhdGVUb0VkaXRfJHt0YXNrSWR9YCkudmFsdWU7XG5cbiAgICAgICAgbGV0IGR1ZURhdGVBcnJheSA9IHRhc2tFZGl0RGF0ZS5zcGxpdChcIi1cIilcbiAgICAgICAgbGV0IGR1ZURhdGUgPSBgJHtkdWVEYXRlQXJyYXlbMV19ICR7ZHVlRGF0ZUFycmF5WzJdfSAke2R1ZURhdGVBcnJheVswXX1gO1xuXG5cbiAgICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xuXG4gICAgICAgICAgICBwdXRJZCA6IHRhc2tJZCxcbiAgICAgICAgICAgIGRhdGFTZXQgOiBcInRhc2tzXCIsXG4gICAgICAgICAgICBmZXRjaFR5cGUgOiBcIlBVVFwiLFxuICAgICAgICAgICAgZGF0YUJhc2VPYmplY3QgOiB7XG4gICAgICAgICAgICAgICAgdXNlcklkIDogTnVtYmVyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIikpLFxuICAgICAgICAgICAgICAgIHRhc2s6IHRhc2tFZGl0SW5wdXQsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWRDb21wbGV0aW9uRGF0ZTogZHVlRGF0ZSxcbiAgICAgICAgICAgICAgICBjb21wbGV0ZSA6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4oc2hpdCA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzaGl0KVxuICAgICAgICAgICAgJChcIiNvdXRwdXRcIikuZW1wdHkoKTtcbiAgICAgICAgICAgIHRhc2tzLmNyZWF0ZVRhc2tUYWJsZXMoKTtcbiAgICAgICAgfSlcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCB0YXNrc0V2ZW50TGlzdGVuZXJzOyIsImltcG9ydCBkb21Db21wb25lbnRzIGZyb20gXCIuL2RvbUNvbXBvbmVudHNcIjtcbmltcG9ydCB0YXNrc0V2ZW50TGlzdGVuZXJzIGZyb20gXCIuL3Rhc2tzRXZlbnRMaXN0ZW5lcnNcIjtcblxuY29uc3QgdGFza3NQb3B1cCA9IHtcblxuICAgIGNyZWF0ZU5ld1Rhc2tGb3JtKCkge1xuICAgICAgICBsZXQgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tzQ29udGFpbmVyXCIpO1xuICAgICAgICBsZXQgdGFza1BvcHVwRGl2ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJkaXZcIixcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJ0YXNrUG9wdXBEaXZcIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgaWQgOiBcInRhc2tQb3B1cERpdlwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBuZXdUYXNrRm9ybSA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwiZGl2XCIsXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwibmV3VGFza0Zvcm1cIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgaWQgOiBcIm5ld1Rhc2tGb3JtXCIsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBuZXdUYXNrRm9ybVRpdGxlID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJoMlwiLFxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcIm5ld1Rhc2tGb3JtVGl0bGVcIixcbiAgICAgICAgICAgIGNvbnRlbnQgOiBcIkNyZWF0ZSBBIE5ldyBUYXNrXCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgIGlkIDogXCJuZXdUYXNrRm9ybVRpdGxlXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGhvcml6b250YWxMaW5lID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50ICh7XG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwiaHJcIlxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgdGFza1RpdGxlSW5wdXQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQgKHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJpbnB1dFwiLFxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcInRhc2tUaXRsZUlucHV0XCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgIGlkIDogXCJ0YXNrVGl0bGVJbnB1dFwiLFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyIDogXCJFbnRlciBuZXcgdGFzayB0aXRsZVwiLFxuICAgICAgICAgICAgICAgIHR5cGUgOiBcInRleHRcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgdGFza0RhdGVJbnB1dCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCAoe1xuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImlucHV0XCIsXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwidGFza0RhdGVJbnB1dFwiLFxuICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICBpZCA6IFwidGFza0RhdGVJbnB1dFwiLFxuICAgICAgICAgICAgICAgIHR5cGUgOiBcImRhdGVcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgc3VibWl0TmV3VGFza0J1dHRvbiA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCAoe1xuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcInN1Ym1pdE5ld1Rhc2tCdXR0b25cIixcbiAgICAgICAgICAgIGNvbnRlbnQgOiBcIlN1Ym1pdFwiLFxuICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICBpZCA6IFwic3VibWl0TmV3VGFza0J1dHRvblwiLFxuICAgICAgICAgICAgICAgIHR5cGUgOiBcImJ1dHRvblwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHN1Ym1pdE5ld1Rhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRhc2tzRXZlbnRMaXN0ZW5lcnMuY3JlYXRlTmV3VGFzaylcbiAgICAgICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQobmV3VGFza0Zvcm1UaXRsZSk7XG4gICAgICAgIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKGhvcml6b250YWxMaW5lKTtcbiAgICAgICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza1RpdGxlSW5wdXQpO1xuICAgICAgICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrRGF0ZUlucHV0KTtcbiAgICAgICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQoc3VibWl0TmV3VGFza0J1dHRvbik7XG4gICAgICAgIHRhc2tQb3B1cERpdi5hcHBlbmRDaGlsZChuZXdUYXNrRm9ybSk7XG4gICAgICAgIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tQb3B1cERpdik7XG4gICAgfVxuXG59XG5leHBvcnQgZGVmYXVsdCB0YXNrc1BvcHVwOyJdfQ==
