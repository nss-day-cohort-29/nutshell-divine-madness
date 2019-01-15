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
          <p class = "message">Already a Registered Member? <a href = "#">LogIn</a></p>
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

    $("#logIn").click(_eventListeners.default.userLogin); // $("#logIn").click(eventListeners.tasksNavLink)

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

},{"./dashboard":1,"./eventListeners":4,"./events":6,"./friends":7,"./messages":9,"./news":11,"./nomadData":13}],4:[function(require,module,exports){
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

var _newsListener = _interopRequireDefault(require("./newsListener"));

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
          let usersName = " ";

          _nomadData.default.connectToData({
            "dataSet": "users",
            "fetchType": "GET",
            "dataBaseObject": "",
            "embedItem": "?_embed=users"
          }).then(users => {
            users.forEach(user => {
              if (user.id === Number(userId)) {
                usersName = user.userName;
              }
            });
            let taskContainers = document.getElementById("#tasksContainer");
            const targetContainer = document.getElementById("output");

            let welcomeMessage = _domComponents.default.createDomElement({
              elementType: "h1",
              content: `welcome ${usersName}`,
              cssClass: "welcome-user"
            });

            targetContainer.insertBefore(welcomeMessage, taskContainers);
          });

          _tasks.default.createTaskTables();

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
                  elementType: "h1",
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
    _news.default.getAPINews(); // news.savedNewsElementsCreator();


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

},{"./dashboard":1,"./domComponents":2,"./events":6,"./friends":7,"./messages":9,"./news":11,"./newsListener":12,"./nomadData":13,"./tasks":14}],5:[function(require,module,exports){
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

},{"./events":6,"./nomadData":13}],6:[function(require,module,exports){
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

},{"./domComponents":2,"./eventPageListeners":5,"./nomadData":13}],7:[function(require,module,exports){
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
    let userId = sessionStorage.getItem('userId');
    let currentUser = Number(userId);
    console.log(currentUser, userId);
    const targetContainer = document.getElementById("output");

    const friendScrollContainer = _domComponents.default.createDomElement({
      elementType: "section",
      cssClass: "friendScrollContainer",
      attributes: {
        id: "friendScrollContainer"
      }
    });

    targetContainer.appendChild(friendScrollContainer);
    friendScrollContainer.appendChild(_domComponents.default.createDomElement({
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
    let userId = sessionStorage.getItem("userId");
    let currentUser = Number(userId); // console.log("friends Page user id is-",currentUser);

    const scrollTargetContainer = document.getElementById("friendScrollContainer");
    const findNewFriendContainer = document.createElement("section");
    let friendsIHave = [];
    findNewFriendContainer.setAttribute("id", "future-friends");
    scrollTargetContainer.appendChild(findNewFriendContainer);
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
    let userId = sessionStorage.getItem("userId");
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
    array1 = array1.toString().split(",").map(Number);
    array2 = array2.toString().split(",").map(Number);

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
            elementType: "h2",
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

},{"./domComponents":2,"./friendsEventsListener":8,"./nomadData":13}],8:[function(require,module,exports){
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

},{"./friends":7,"./messages":9,"./nomadData":13}],9:[function(require,module,exports){
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
            id: `messageDiv_${messageId}`
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

},{"./domComponents":2,"./friendsEventsListener.js":8,"./messagesEventListeners":10,"./nomadData":13}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nomadData = _interopRequireDefault(require("./nomadData"));

var _domComponents = _interopRequireDefault(require("./domComponents"));

var _messages = _interopRequireDefault(require("./messages"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import friendsEventsListener from "./friendsEventsListener.js";
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
    let messageDiv = document.getElementById(`messageDiv_${messageId}`);
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

},{"./domComponents":2,"./messages":9,"./nomadData":13}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nomadData = _interopRequireDefault(require("./nomadData"));

var _domComponents = _interopRequireDefault(require("./domComponents"));

var _newsListener = _interopRequireDefault(require("./newsListener"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const news = {
  getAPINews() {
    //clear when called.
    $("#output").empty(); //getAPINews will pull news from API then call createElement and append to output.
    //Create a header for incoming news.

    let articleCounter = 0;

    const newsContainer = _domComponents.default.createDomElement({
      elementType: "div",
      cssClass: "mainVein"
    });

    const targetValue = document.querySelector("#output"); //New container for scrolling.

    const newsHeader = _domComponents.default.createDomElement({
      elementType: "h1",
      content: "Current News",
      cssClass: "newsAPIHeader"
    });

    newsContainer.appendChild(newsHeader);
    targetValue.appendChild(newsContainer); //pull the data from the api and display it to the dom.

    let currentArticlesDiv = _domComponents.default.createDomElement({
      elementType: "div",
      cssClass: "currentArticlesDiv",
      attributes: {
        id: "currentArticlesDiv"
      }
    });

    return fetch("https://newsapi.org/v2/everything?q=vanlife&from=2019-01-05&sortBy=publishedAt&language=en&apiKey=9f5c509fe90044dc95a8a6963573284f").then(newsItems => newsItems.json()).then(displayData => {
      displayData.articles.forEach(dataGran => {
        let artURL = dataGran.url;
        let artTitle = dataGran.title;
        let artDesc = dataGran.description;
        let artImage = dataGran.urlToImage; //counter used to give unique identifier for tagging and grabbing.

        articleCounter++;
        sessionStorage.setItem(`article_${articleCounter}_title`, `${artTitle}`);
        sessionStorage.setItem(`article_${articleCounter}_url`, `${artURL}`);
        sessionStorage.setItem(`article_${articleCounter}_desc`, `${artDesc}`);
        sessionStorage.setItem(`article_${articleCounter}_image`, `${artImage}`); //add section container for all articles.

        const newsAPIArtContain = _domComponents.default.createDomElement({
          elementType: "article",
          cssClass: "newsAPIArticleContainer" // attribute: {
          //     style: "height:95vh; overflow: scroll; color:white;text-align:center;font-size:20px;overflow:auto; border-radius: 12px;"
          // }

        });

        const articleContainer = _domComponents.default.createDomElement({
          elementType: "section",
          cssClass: `newsAPIContainer_${articleCounter}`,
          attribute: {
            id: "apiSectionGrab",
            style: "border-radius: 12px;"
          }
        });

        newsAPIArtContain.appendChild(articleContainer);
        currentArticlesDiv.appendChild(newsAPIArtContain); //create fieldset for articles to be and then attach them to the sections above.

        const parentAPISection = _domComponents.default.createDomElement({
          elementType: "p",
          content: dataGran.title,
          cssClass: "apiData",
          attributes: {
            id: `article_${articleCounter}`,
            style: "color:white;text-align:center;font-size:20px;overflow:auto; border-radius: 12px;"
          }
        });

        parentAPISection.appendChild(_domComponents.default.createDomElement({
          elementType: "img",
          content: dataGran.urlToImage,
          cssClass: `apiImage`,
          attributes: {
            id: `apiImage_${articleCounter}`,
            src: `${dataGran.urlToImage}` // style: "width: 30%; height: 15%; border-radius: 12px;"

          }
        }));
        currentArticlesDiv.appendChild(parentAPISection); //creating button in order to attach to individual articles.

        const saveApiButton = _domComponents.default.createDomElement({
          elementType: "button",
          content: "Remember This",
          cssClass: "allButtons",
          attributes: {
            name: `${articleCounter}` //style: "  border: 0; line-height:2; width:9%; background:rgb(81, 78, 78); color:rgb( 191, 162, 44);line-height: 2; border-radius: 12px;"

          }
        }); //Eventlistener to send current data to savefunction.


        parentAPISection.appendChild(saveApiButton);
        saveApiButton.addEventListener("click", _newsListener.default.saveButtonListener);
      });
      newsContainer.appendChild(currentArticlesDiv); //calls the creator to make the SAVED ARTICLES Section

      news.savedNewsElementsCreator();
    });
  },

  // method displays friends news.
  getUserFriendsNews() {
    //create array and call to get user data.
    const friendHolder = [];
    let friendsContainer = document.querySelector(".article1");

    _nomadData.default.connectToData({
      dataSet: "users",
      fetchType: "GET",
      embedItem: "?_embed=friends"
    }).then(parsedResponse => {
      //for loop to run through array of user info.
      for (let i = 0; i < parsedResponse.length; i++) {
        const response = parsedResponse[i]; // if statement to ccmpare response id to session id inorder to see if the news article is the users or friend.

        if (response.id === Number(sessionStorage.getItem("userId"))) {
          // if not the user then lop through array and push id's.
          for (let j = 0; j < response.friends.length; j++) {
            const friends = response.friends[j];
            friendHolder.push(friends.otherFriendId);
          } // once friendholder array is loaded loop through again to compare agains pulled dataItems that have been fetched.


          friendHolder.forEach(friendId => {
            _nomadData.default.connectToData({
              dataSet: "newsItems",
              fetchType: "GET",
              embedItem: `?userId=${friendId}`
            }).then(parsedResponse => {
              console.log(friendsContainer);
              parsedResponse.forEach(response => {
                //call the function that builds DOM element for story and posts to DOM.  Be sure that function includes displaying a userName to dinstinguish user's stories from friends' stories.
                const articleSectionFriend = _domComponents.default.createDomElement({
                  elementType: "section",
                  cssClass: `newsArticleContainer--${response.id}`
                });

                const friendsHeader = _domComponents.default.createDomElement({
                  elementType: "h3",
                  content: `${response.title}`,
                  cssClass: "newsTitle"
                });

                const newsURL = _domComponents.default.createDomElement({
                  elementType: "a",
                  content: response.url,
                  cssClass: "newsURL",
                  attributes: {
                    href: `${response.url}`,
                    target: "blank"
                  }
                });

                articleSectionFriend.appendChild(friendsHeader);
                articleSectionFriend.appendChild(newsURL);
                friendsContainer.appendChild(articleSectionFriend);
              });
            });
          });
        }
      }
    });
  },

  savedNewsElementsCreator() {
    //Creates the header for the saved news articles.
    let mainContainer = document.querySelector(".mainVein");

    const mainSavedContainer = _domComponents.default.createDomElement({
      elementType: "article",
      cssClass: "article1",
      attribute: {
        style: "border-width: thin"
      }
    });

    mainContainer.appendChild(mainSavedContainer);

    const savedHeader = _domComponents.default.createDomElement({
      elementType: "h1",
      content: "Saved News",
      cssClass: "savedHeader",
      attribute: {
        id: "savedHeader"
      }
    });

    mainSavedContainer.appendChild(savedHeader);
    const saveRef = ""; //creates the object that is needed to use the createDomElement Factory.

    let newsCreatorKey = {
      "dataSet": "newsItems",
      "fetchType": "GET",
      "embedItem": `?_embed=${saveRef}` //Makes the call to the data factory to fetch/get data to put in the object.

    };

    _nomadData.default.connectToData(newsCreatorKey).then(dbGrabs => {
      dbGrabs.forEach(dbGrab => {
        const sectionSavedContainer = _domComponents.default.createDomElement({
          elementType: "section",
          cssClass: `newsArticleContainer--${dbGrab.id}`
        });

        const savedHeader = _domComponents.default.createDomElement({
          elementType: "h3",
          content: `${dbGrab.title}`,
          cssClass: "newsTitle"
        });

        const savedNewsURL = _domComponents.default.createDomElement({
          elementType: "a",
          content: dbGrab.url,
          cssClass: "newsURL",
          attributes: {
            href: `${dbGrab.url}`,
            target: "blank"
          }
        });

        const delButon = _domComponents.default.createDomElement({
          elementType: "button",
          content: "ADIOS",
          cssClass: "allButtons",
          attributes: {
            id: `newsDeleteButton--${dbGrab.id}`
          }
        }); //creating a button and pointing at the article to delete. Attached event listner.


        sectionSavedContainer.appendChild(savedHeader);
        sectionSavedContainer.appendChild(savedNewsURL);
        sectionSavedContainer.appendChild(delButon);
        delButon.addEventListener("click", _newsListener.default.deleteButtonListener);
        mainSavedContainer.appendChild(sectionSavedContainer);
        mainContainer.appendChild(mainSavedContainer);
      });
      news.getUserFriendsNews();
    });
  }

};
var _default = news;
exports.default = _default;

},{"./domComponents":2,"./newsListener":12,"./nomadData":13}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nomadData = _interopRequireDefault(require("./nomadData"));

var _domComponents = _interopRequireDefault(require("./domComponents"));

var _news = _interopRequireDefault(require("./news"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const newsListener = {
  saveButtonListener() {
    //This is functioning and writing to JSON. Need to attach this to the save button.
    const saveID = event.target.name;
    let article = document.getElementById(`article_${saveID}`);
    let artTitle = sessionStorage.getItem(`article_${saveID}_title`);
    let artDescription = sessionStorage.getItem(`article_${saveID}_desc`);
    let articleURL = sessionStorage.getItem(`article_${saveID}_url`);
    const newsObjectPost = {
      "dataSet": "newsItems",
      "fetchType": "POST",
      "dataBaseObject": {
        "userId": Number(sessionStorage.getItem('userId')),
        "url": `${articleURL}`,
        "title": `${artTitle}`,
        "synopsis": `${artDescription}`
      }
    };
    console.log(sessionStorage);

    _nomadData.default.connectToData(newsObjectPost).then(response => response.json).then(shit => {
      console.log(shit);
      $("#output").empty();

      _news.default.getAPINews();
    });
  },

  deleteButtonListener() {
    //To delete from saved news articles.
    const deleteID = event.target.id.split("--")[1];

    _nomadData.default.connectToData({
      deleteId: deleteID,
      dataSet: "newsItems",
      fetchType: "DELETE"
    }).then(() => {
      $(".article1").remove();

      _news.default.savedNewsElementsCreator();
    });
  }

};
var _default = newsListener;
exports.default = _default;

},{"./domComponents":2,"./news":11,"./nomadData":13}],13:[function(require,module,exports){
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

},{"./eventListeners":4}],14:[function(require,module,exports){
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
    $("#output").empty(); //need to get session storage before building tasks form upon logIn

    this.getTasks();
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

},{"./domComponents":2,"./nomadData":13,"./tasksEventListeners":15,"./tasksPopup":16}],15:[function(require,module,exports){
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

},{"./domComponents":2,"./nomadData":13,"./tasks":14}],16:[function(require,module,exports){
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

},{"./domComponents":2,"./tasksEventListeners":15}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2Rhc2hib2FyZC5qcyIsIi4uL3NjcmlwdHMvZG9tQ29tcG9uZW50cy5qcyIsIi4uL3NjcmlwdHMvZG9tUmVuZGVyZXIuanMiLCIuLi9zY3JpcHRzL2V2ZW50TGlzdGVuZXJzLmpzIiwiLi4vc2NyaXB0cy9ldmVudFBhZ2VMaXN0ZW5lcnMuanMiLCIuLi9zY3JpcHRzL2V2ZW50cy5qcyIsIi4uL3NjcmlwdHMvZnJpZW5kcy5qcyIsIi4uL3NjcmlwdHMvZnJpZW5kc0V2ZW50c0xpc3RlbmVyLmpzIiwiLi4vc2NyaXB0cy9tZXNzYWdlcy5qcyIsIi4uL3NjcmlwdHMvbWVzc2FnZXNFdmVudExpc3RlbmVycy5qcyIsIi4uL3NjcmlwdHMvbmV3cy5qcyIsIi4uL3NjcmlwdHMvbmV3c0xpc3RlbmVyLmpzIiwiLi4vc2NyaXB0cy9ub21hZERhdGEuanMiLCIuLi9zY3JpcHRzL3Rhc2tzLmpzIiwiLi4vc2NyaXB0cy90YXNrc0V2ZW50TGlzdGVuZXJzLmpzIiwiLi4vc2NyaXB0cy90YXNrc1BvcHVwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQ0FBOzs7O0FBQ0EsTUFBTSxTQUFTLEdBQUc7QUFDaEIsRUFBQSxjQUFjLEdBQUU7QUFDZDtBQUNBLFFBQUksUUFBUSxHQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FBaEI7QUFxQ0UsSUFBQSxDQUFDLENBQUMsU0FBRCxDQUFELENBQWEsSUFBYixDQUFrQixRQUFsQjs7QUFDQSw0QkFBZSxxQkFBZjs7QUFDQSxJQUFBLENBQUMsQ0FBQyxRQUFELENBQUQsQ0FBWSxLQUFaLENBQWtCLHdCQUFlLFNBQWpDLEVBekNZLENBMENaOztBQUNBLElBQUEsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUIsS0FBckIsQ0FBMkIsd0JBQWUsZ0JBQTFDO0FBQ0EsSUFBQSxDQUFDLENBQUMs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Ryx1QkFBYyxnQkFBZCxDQUFnQztBQUN0RCxNQUFBLFdBQVcsRUFBRyxRQUR3QztBQUV0RCxNQUFBLFFBQVEsRUFBRyxxQkFGMkM7QUFHdEQsTUFBQSxPQUFPLEVBQUcsUUFINEM7QUFJdEQsTUFBQSxVQUFVLEVBQUc7QUFDVCxRQUFBLEVBQUUsRUFBRyxxQkFESTtBQUVULFFBQUEsSUFBSSxFQUFHO0FBRkU7QUFKeUMsS0FBaEMsQ0FBMUI7O0FBVUEsSUFBQSxtQkFBbUIsQ0FBQyxnQkFBcEIsQ0FBcUMsT0FBckMsRUFBOEMsNkJBQW9CLGFBQWxFO0FBQ0EsSUFBQSxXQUFXLENBQUMsV0FBWixDQUF3QixnQkFBeEI7QUFDQSxJQUFBLFdBQVcsQ0FBQyxXQUFaLENBQXdCLGNBQXhCO0FBQ0EsSUFBQSxXQUFXLENBQUMsV0FBWixDQUF3QixjQUF4QjtBQUNBLElBQUEsV0FBVyxDQUFDLFdBQVosQ0FBd0IsYUFBeEI7QUFDQSxJQUFBLFdBQVcsQ0FBQyxXQUFaLENBQXdCLG1CQUF4QjtBQUNBLElBQUEsWUFBWSxDQUFDLFdBQWIsQ0FBeUIsV0FBekI7QUFDQSxJQUFBLGNBQWMsQ0FBQyxXQUFmLENBQTJCLFlBQTNCO0FBQ0g7O0FBdEVjLENBQW5CO2VBeUVlLFUiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgZXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vZXZlbnRMaXN0ZW5lcnNcIiBcbmNvbnN0IGRhc2hib2FyZCA9IHtcbiAgYnVpbGRMb2dpbkZvcm0oKXtcbiAgICAvL3VzaW5nIHN0cmluZyBpbnRlcnBvbGF0aW9uIHRvIGNyZWF0ZSB0aGUgZm9ybVxuICAgIGxldCBmb3JtSFRNTCA9IGBcbiAgICA8aDEgY2xhc3MgPSBcInQtYm9yZGVyXCI+Tm9tYWRzPC9oMT5cbiAgICAgIDxzZWN0aW9uIGNsYXNzID0gXCJmb3JtXCI+XG4gICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiIGNsYXNzID0gcmVnaXN0ZXJGb3JtPlxuICAgICAgICAgIDxpbnB1dCBpZCA9IFwicmVnVXNlck5hbWVcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyID0gXCJVc2VybmFtZVwiIHJlcXVpcmVkPlxuICAgICAgICAgIDxpbnB1dCBpZCA9IFwicmVnRW1haWxcIiB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlciA9IFwiRW1haWxcIiByZXF1aXJlZD5cbiAgICAgICAgICA8aW5wdXQgaWQgPSBcInJlZ1Bhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXIgPSBcIlBhc3N3b3JkXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgPGlucHV0IGlkID0gXCJyZWdDb25maXJtUGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlciA9IFwiQ29uZmlybSBQYXNzd29yZFwiIHJlcXVpcmVkPlxuICAgICAgICAgIDxidXR0b24gaWQgPSBcInJlZ2lzdGVyQnV0dG9uXCI+Q3JlYXRlIEFjY291bnQ8L2J1dHRvbj5cbiAgICAgICAgICA8cCBjbGFzcyA9IFwibWVzc2FnZVwiPkFscmVhZHkgYSBSZWdpc3RlcmVkIE1lbWJlcj8gPGEgaHJlZiA9IFwiI1wiPkxvZ0luPC9hPjwvcD5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8Zm9ybSBjbGFzcyA9IFwibG9naW4tZm9ybVwiPlxuICAgICAgICAgIDxpbnB1dCBpZCA9IFwidXNlck5hbWVWYWxcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyID0gXCJVc2VybmFtZVwiPlxuICAgICAgICAgIDxpbnB1dCBpZCA9IFwicGFzc3dvcmRWYWxcIiB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlciA9IFwiUGFzc3dvcmRcIj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGUgPSBcImJ1dHRvblwiIGlkID0gXCJsb2dJblwiPkxvZ2luPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBpZCA9IFwibW9kYWxCdXR0b25cIj5Ob21hZHMgTWlzc2lvbjwvYnV0dG9uPlxuICAgICAgICAgIDxwIGNsYXNzID0gXCJtZXNzYWdlXCI+RG9uJ3QgaGF2ZSBhbiBhY2NvdW50PyA8YSBocmVmID0gXCIjXCI+UmVnaXN0ZXI8L2E+PC9wPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiBpZD1cIm5vbWFkTW9kYWxcIiBjbGFzcz1cIm1vZGFsXCI+XG4gICAgICA8IS0tIE1vZGFsIGNvbnRlbnQgLS0+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNsb3NlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICAgIDxoMj5UaGUgUHVycG9zZSBCZWhpbmQgTm9tYWRzPC9oMj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICA8aDM+VGhlIG1pbmRzIGJlaGluZyBOb21hZHM8L2gzPlxuICAgICAgICAgICAgPGltZyBpZCA9IFwiY3JlYXRvcnNJbWFnZVwiIHNyYyA9IFwiaW1hZ2VzL25vbWFkQ3JlYXRvcnMuanBnXCIgYWx0ID0gXCJhcHBsaWNhdGlvbiBjcmVhdG9yc1wiPlxuICAgICAgICAgICAgPHA+QXMgb3V0ZG9vcnNtYW4sIGVudmlyb25tZW50YWxpc3QsIGFuZCBmaWxtbWFrZXJzIGNvbnRpbnVlIHRvIGdyb3cuIFNvIGRvIHRoZSBhZHZlbnR1cm91cyBzcGlyaXRzIG9mIHRob3NlIHdobyBlbWJyYWNlIGNvbnNjaW91cyBjb25zdW1lcmlzbSBhbmQgc3VzdGFpbmFibGUgbGl2aW5nLiBUaGUgcHVycG9zZSBpcyB0byBtYWtlIGEgcG9pbnQgb2YgcGx1Z2dpbmcgaW50byBtb2Rlcm4gbGlmZSBhbmQgY29ubmVjdGluZyB3aXRoIHlvdXIgZmVsbG93IG5vbWFkcyBmcm9tIGFueXdoZXJlIHlvdSBtYXkgYmUuIFNoYXJlIHlvdXIgbG9jYXRpb24sIE1lZXQgdXAsIEV4Y2hhbmdlIHN0b3JpZXMsIENyZWF0ZSByZWxhdGlvbnNoaXBzIHdpdGggcGVvcGxlIHdobyBoYXZlIHNpbWlsYXIgaW50ZXJlc3QgYW5kIGVuaGFuY2UgeW91ciB0cmF2ZWxpbmcgZXhwZXJpZW5jZSB3aXRoIG5vbWFkcy48L3A+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgICAgICAgICA8aDM+Q3JlYXRlZCBCeTogRGl2aW5lIE1hZG5lc3MmY29weTwvaDM+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICBgXG4gICAgICAkKFwiI291dHB1dFwiKS5odG1sKGZvcm1IVE1MKVxuICAgICAgZXZlbnRMaXN0ZW5lcnMubW9kYWxEaXNwbGF5QW5pbWF0aW9uKClcbiAgICAgICQoXCIjbG9nSW5cIikuY2xpY2soZXZlbnRMaXN0ZW5lcnMudXNlckxvZ2luKVxuICAgICAgLy8gJChcIiNsb2dJblwiKS5jbGljayhldmVudExpc3RlbmVycy50YXNrc05hdkxpbmspXG4gICAgICAkKFwiI3JlZ2lzdGVyQnV0dG9uXCIpLmNsaWNrKGV2ZW50TGlzdGVuZXJzLnVzZXJSZWdpc3RyYXRpb24pXG4gICAgICAkKFwiI3JlZ2lzdGVyQnV0dG9uXCIpLmNsaWNrKHRoaXMuYnVpbGRMb2dpbkZvcm0pXG4gICAgICAvLyAkKFwiI3JlZ2lzdGVyQnV0dG9uXCIpLmNsaWNrKGV2ZW50TGlzdGVuZXJzLnVzZXJMb2dpbilcblxuICAgIH0sXG4gIGNyZWF0ZU5hdkJhcigpe1xuICAgIGxldCBuYXZIVE1MID0gYFxuICAgICAgPG5hdj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaSBpZCA9IFwibmV3c0xpbmtcIj48YSBjbGFzcyA9IFwiYWN0aXZlXCIgaHJlZiA9IFwiI1wiPkFydGljbGVzPC9hPjwvbGk+XG4gICAgICAgICAgPGxpIGlkID0gXCJldmVudExpbmtcIj48YSBocmVmID0gXCIjXCI+RXZlbnRzPC9hPjwvbGk+XG4gICAgICAgICAgPGxpIGlkID0gXCJ0YXNrc0xpbmtcIj48YSBocmVmID0gXCIjXCI+VGFza3M8L2E+PC9saT5cbiAgICAgICAgICA8bGkgaWQgPSBcImZyaWVuZHNMaW5rXCI+PGEgaHJlZiA9IFwiI1wiPkZyaWVuZHM8L2E+PC9saT5cbiAgICAgICAgICA8bGkgaWQgPSBcIm1lc3NhZ2VzTGlua1wiPjxhIGhyZWYgPSBcIiNcIj5NZXNzYWdlczwvYT48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcyA9IFwic2lnbk91dFwiIGlkID0gXCJsb2dvXCIgPjxhIGhyZWY9XCIjXCI+U2lnbiBPdXQ8L2E+PC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmF2PlxuICAgIGBcbiAgICBsZXQgbmF2QmFyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLW5hdlwiKVxuICAgIG5hdkJhckNvbnRhaW5lci5pbm5lckhUTUwgPSBuYXZIVE1MXG5cbiAgICAvKk5hdmlnYXRpb24gbGluayBldmVudCBsaXN0ZW5lcnMqL1xuICAgICQoXCIjbWVzc2FnZXNMaW5rXCIpLmNsaWNrKGV2ZW50TGlzdGVuZXJzLm1lc3NhZ2VzTmF2TGluaylcbiAgICAkKFwiI2V2ZW50TGlua1wiKS5jbGljayhldmVudExpc3RlbmVycy5ldmVudHNOYXZMaW5rKVxuICAgICQoXCIjZnJpZW5kc0xpbmtcIikuY2xpY2soZXZlbnRMaXN0ZW5lcnMuZnJpZW5kc05hdkxpbmspXG4gICAgJChcIiN0YXNrc0xpbmtcIikuY2xpY2soZXZlbnRMaXN0ZW5lcnMudGFza3NOYXZMaW5rKVxuICAgICQoXCIjbmV3c0xpbmtcIikuY2xpY2soZXZlbnRMaXN0ZW5lcnMubmV3c05hdkxpbmspXG5cbiAgICAvKmFmdGVyIHNpZ25vdXQgaXMgY2xpY2tlZCBzZXNzaW9uIHN0b3JhZ2UgaXMgY2xlYXJlZCBhbmQgdGhlIGxvZ0luL3JlZ2lzdGVyIGZvcm0gaXMgcHJlc2VudGVkIGZyb20gaGVyZVxuICAgIGFub3RoZXIgdXNlciBjYW4gbG9nIGluIGFuZCBzZXNzaW9uIHN0b3JhZ2Ugd2lsbCBraWNrIG9mZiBmb3IgdGhlIG5ldyBsb2dnZWQgaW4gdXNlciovXG4gICAgJChcIi5zaWduT3V0XCIpLmNsaWNrKGV2ZW50TGlzdGVuZXJzLm5vbWFkTmF2TGluaylcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBkYXNoYm9hcmQiLCJjb25zdCBkb21Db21wb25lbnRzID0ge1xuICBjcmVhdGVEb21FbGVtZW50KHsgZWxlbWVudFR5cGUsIGNvbnRlbnQgPSBudWxsLCBjc3NDbGFzcywgYXR0cmlidXRlcyA9IHt9IH0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50VHlwZSk7XG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgaWYgKGNzc0NsYXNzKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3MpO1xuICAgIH1cbiAgICBmb3IgKGxldCBrZXkgaW4gYXR0cmlidXRlcykge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUNvbXBvbmVudHMiLCJcbmltcG9ydCBldmVudHMgZnJvbSBcIi4vZXZlbnRzXCI7XG5cbmltcG9ydCBub21hZERhdGEgZnJvbSBcIi4vbm9tYWREYXRhXCI7XG5pbXBvcnQgZnJpZW5kcyBmcm9tIFwiLi9mcmllbmRzXCI7XG5pbXBvcnQgbmV3cyBmcm9tIFwiLi9uZXdzXCJcbmltcG9ydCBtZXNzYWdlcyBmcm9tIFwiLi9tZXNzYWdlc1wiO1xuaW1wb3J0IGRhc2hCb2FyZCBmcm9tIFwiLi9kYXNoYm9hcmRcIlxuLy8gaW1wb3J0IGRvbUNvbXBvbmVudHMgZnJvbSBcIi4vZG9tQ29tcG9uZW50c1wiO1xuaW1wb3J0IGV2ZW50TGlzdGVuZXJzIGZyb20gXCIuL2V2ZW50TGlzdGVuZXJzXCI7XG5cbi8vQlVJTERTIE5BSUdBVElPTkJBUi8vXG4vLyBkb21Db21wb25lbnRzLmNyZWF0ZU5hdkJhcigpXG5kYXNoQm9hcmQuYnVpbGRMb2dpbkZvcm0oKVxuJChcIm1vZGFsQnV0dG9uXCIpLmNsaWNrKGV2ZW50TGlzdGVuZXJzLm1vZGFsRGlzcGxheUFuaW1hdGlvbilcblxuLy9ORVdTIFNFQ1RJT05cbi8vIG5ld3Muc2F2ZSgpO1xuLy8gbmV3cy5hbGxTYXZlZCgpO1xuLy8gbmV3cy5nZXROZXdzKCk7XG5cbi8vIG5ld3MubmV3c0VsZW1lbnRDcmVhdG9yKCk7XG4vLyBuZXdzLm5ld3NFbGVtZW50Q3JlYXRvcigpO1xuXG4iLCJpbXBvcnQgZGFzaGJvYXJkIGZyb20gXCIuL2Rhc2hib2FyZFwiXG5pbXBvcnQgZG9tQ29tcG9uZW50cyBmcm9tIFwiLi9kb21Db21wb25lbnRzXCI7XG5pbXBvcnQgbm9tYWREYXRhIGZyb20gXCIuL25vbWFkRGF0YVwiO1xuaW1wb3J0IGV2ZW50cyBmcm9tIFwiLi9ldmVudHNcIjtcbmltcG9ydCBtZXNzYWdlcyBmcm9tIFwiLi9tZXNzYWdlc1wiO1xuaW1wb3J0IGZyaWVuZHMgZnJvbSBcIi4vZnJpZW5kc1wiO1xuaW1wb3J0IG5ld3MgZnJvbSBcIi4vbmV3c1wiO1xuaW1wb3J0IHRhc2tzIGZyb20gXCIuL3Rhc2tzXCI7XG5pbXBvcnQgbmV3c0xpc3RlbmVyIGZyb20gXCIuL25ld3NMaXN0ZW5lclwiO1xuXG5jb25zdCBldmVudExpc3RlbmVycyA9IHtcbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIExPR0lOIEZPUk06IHVzZXIgZW50ZXJzIFVzZXJuYW1lIGFuZCBQYXNzd29yZC4gd2hlbiBVc2VyIGNsaWNrcyBsb2dpbiwgdGhlIGlucHV0IGZpZWxkIGFuZCBOT01BRFMgaGVhZGVyIGRpc2FwcGVhclxuICAgIGFuZCB0aGUgdXNlciB3aWxsIGJlIGRpc3BsYXllZCB0aGUgXCJEYXNoYm9hcmRcIiBhbmQgdGhlIG5hdmlnYXRpb24gYmFyLiBVcG9uIGxvZ2luLCBzZXNzaW9uU3RvcmFnZSBpcyBzdGFydGVkLiBJbiB0aGUgQ29uc29sZVxuICAgIHlvdSB3aWxsIGJlIGFibGUgdG8gc2VlIFdobyBpcyBsb2dnZWQgaW4gYW5kIHdoYXQgdGhlaXIgdXNlcklkIGlzLiBpZS4gMSwyLDMsNCBldGMuXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgIHVzZXJMb2dpbigpe1xuICAgICAgICBsZXQgbG9nSW5WYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VzZXJOYW1lVmFsXCIpLnZhbHVlXG4gICAgICAgIGxldCBwYXNzd29yZFZhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFzc3dvcmRWYWxcIikudmFsdWVcbiAgICAgICAgLy9nZXQgdG8gY29tcGFyZVxuICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG5cbiAgICAgICAgXCJkYXRhU2V0XCIgOiBcInVzZXJzXCIsXG4gICAgICAgIFwiZmV0Y2hUeXBlXCIgOiBcIkdFVFwiLFxuICAgICAgICBcImVtYmVkSXRlbVwiIDogXCI/X2VtYmVkPXVzZXJzXCJcblxuICAgIH0pLnRoZW4ocGFyc2VkVXNlcnMgPT4ge1xuXG4gICAgICAgIHBhcnNlZFVzZXJzLmZvckVhY2godXNlciA9PiB7XG4gICAgICAgICAgICAgIC8qSWYgbG9naW4gY3JlZGVudGlhbHMgbWF0Y2ggdGhvc2UgaW4gZGF0YWJhc2UuanNvbi4gV2Ugd2FudCB0aGUgdXNlciB0byBiZSBkaXNwbGF5ZWQgdGhlaXIgXCJkYXNoYm9hZFwiXG4gICAgICAgICAgICAgIGFuZCBuYXZpZ2F0aW9uIGJhci4gU28gd2UgbmVlZCB0byBzZXQgZGlzcGxheSB0byBub25lIGFuZCBpbnZva2UgdGhlIGZ1bmN0aW9uIC0gY3JlYXRlTmF2QmFyKCkqL1xuICAgICAgICAgICAgaWYobG9nSW5WYWwgPT09IHVzZXIudXNlck5hbWUgJiYgcGFzc3dvcmRWYWwgPT09IHVzZXIucGFzc3dvcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9oaWRlcyBOT01BRCBoZWFkaW5nXG4gICAgICAgICAgICAgICAgICAgICQoXCIudC1ib3JkZXJcIikuaGlkZSgpXG4gICAgICAgICAgICAgICAgICAgIC8vaGlkZXMgdGhlIGZvcm1cbiAgICAgICAgICAgICAgICAgICAgJChcIi5mb3JtXCIpLmhpZGUoKVxuICAgICAgICAgICAgICAgICAgICAvL2Rpc3BsYXlzIG5hdmlnYXRpbiBiYXJcbiAgICAgICAgICAgICAgICAgICAgZGFzaGJvYXJkLmNyZWF0ZU5hdkJhcigpXG4gICAgICAgICAgICAgICAgICAgIC8vc2Vzc2lvbiBzdG9yYWdlXG5cbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInVzZXJJZFwiLCB1c2VyLmlkKVxuICAgICAgICAgICAgICAgICAgICBsZXQgdXNlcklkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKVxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nIHZlcmlmeWluZyB0aGF0IGNyZWRlbnRpYWxzIG1hdGNoIGFuZCB1c2VyIGlzIGxvZ2dlZCBpblxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvZ2dlZCBpbiBhc1wiICsgXCIgXCIgKyB1c2VyLnVzZXJOYW1lKVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInlvdXIgdXNlciBJRCBpczogXCIgKyB1c2VySWQpXG4gICAgICAgICAgICAgICAgICAgIGxldCB1c2Vyc05hbWUgPSBcIiBcIlxuICAgICAgICAgICAgICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGFTZXRcIiA6IFwidXNlcnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZmV0Y2hUeXBlXCIgOiBcIkdFVFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhQmFzZU9iamVjdFwiIDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZW1iZWRJdGVtXCIgOiBcIj9fZW1iZWQ9dXNlcnNcIlxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHVzZXJzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJzLmZvckVhY2godXNlciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVzZXIuaWQgPT09IE51bWJlcih1c2VySWQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJzTmFtZSA9IHVzZXIudXNlck5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRhc2tDb250YWluZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCIjdGFza3NDb250YWluZXJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3V0cHV0XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgd2VsY29tZU1lc3NhZ2UgPSAoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJoMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGB3ZWxjb21lICR7dXNlcnNOYW1lfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3M6IFwid2VsY29tZS11c2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldENvbnRhaW5lci5pbnNlcnRCZWZvcmUod2VsY29tZU1lc3NhZ2UsIHRhc2tDb250YWluZXJzKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB0YXNrcy5jcmVhdGVUYXNrVGFibGVzKClcblxuICAgICAgICAgICAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRhU2V0XCIgOiBcInVzZXJzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZmV0Y2hUeXBlXCIgOiBcIkdFVFwiLFxuICAgICAgICAgICAgICAgICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBcImVtYmVkSXRlbVwiIDogXCI/X2VtYmVkPXVzZXJzXCJcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKHVzZXJzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdXNlcnMuZm9yRWFjaCh1c2VyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1c2VyLmlkID09PSBOdW1iZXIodXNlcklkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3V0cHV0XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImgxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGB3ZWxjb21lICR7dXNlci51c2VyTmFtZX1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjc3NDbGFzczogXCJ3ZWxjb21lLXVzZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIFJFR0lTVFJBVElPTiBGT1JNOiBXaGVuIHJlZ2lzdGVyaW5nIGZvciBhbiBhY2NvdW50IHRoZSB1c2VyIHdpbGwgZW50ZXIgZGVzaXJlZCB1c2VybmFtZSwgZW1haWwsIGFuZCBwYXNzd29yZFxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICB1c2VyUmVnaXN0cmF0aW9uKCl7XG4gICAgICAgIGxldCByZWdVc2VyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVnVXNlck5hbWVcIikudmFsdWVcbiAgICAgICAgbGV0IHJlZ0VtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZWdFbWFpbFwiKS52YWx1ZVxuICAgICAgICBsZXQgcmVnUGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JlZ1Bhc3N3b3JkXCIpLnZhbHVlXG4gICAgICAgIC8vIGxldCByZWdDb25maXJtUGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JlZ1VzZXJOYW1lXCIpLnZhbHVlXG5cbiAgICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xuXG4gICAgICAgICAgICAgICAgXCJkYXRhU2V0XCIgOiBcInVzZXJzXCIsXG4gICAgICAgICAgICAgICAgXCJmZXRjaFR5cGVcIiA6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgIFwiZGF0YUJhc2VPYmplY3RcIiA6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ1c2VyTmFtZVwiOiByZWdVc2VyTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgXCJlbWFpbFwiOiByZWdFbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgXCJwYXNzd29yZFwiOiByZWdQYXNzd29yZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLnRoZW4oXG4gICAgICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICAgICAgICAgICAgXCJkYXRhU2V0XCIgOiBcInVzZXJzXCIsXG4gICAgICAgICAgICAgICAgXCJmZXRjaFR5cGVcIiA6IFwiR0VUXCIsXG4gICAgICAgICAgICAgICAgXCJlbWJlZEl0ZW1cIiA6IGA/dXNlck5hbWU9JHtyZWdVc2VyTmFtZX1gXG4gICAgICAgICAgICB9KS50aGVuKHVzZXIgPT57XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codXNlcilcbiAgICAgICAgICAgICAgICB1c2VyLmZvckVhY2goIHggPT57XG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJ1c2VySWRcIiwgeC5pZClcblxuICAgICAgICAgICAgICAgIC8vaGlkZXMgTk9NQUQgaGVhZGluZ1xuICAgICAgICAgICAgICAgICQoXCIudC1ib3JkZXJcIikuaGlkZSgpXG4gICAgICAgICAgICAgICAgLy9oaWRlcyB0aGUgZm9ybVxuICAgICAgICAgICAgICAgICQoXCIuZm9ybVwiKS5oaWRlKClcbiAgICAgICAgICAgICAgICAvL2Rpc3BsYXlzIG5hdmlnYXRpbiBiYXJcbiAgICAgICAgICAgICAgICBkYXNoYm9hcmQuY3JlYXRlTmF2QmFyKClcbiAgICAgICAgICAgICAgICBsZXQgdXNlcklkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKVxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cgdmVyaWZ5aW5nIHRoYXQgY3JlZGVudGlhbHMgbWF0Y2ggYW5kIHVzZXIgaXMgbG9nZ2VkIGluXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb2dnZWQgaW4gYXNcIiArIFwiIFwiICsgeC51c2VyTmFtZSlcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInlvdXIgdXNlciBJRCBpczogXCIgKyB1c2VySWQpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pKVxuICAgICAgICB9LFxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgTU9EQUw6IHVzZXIgd2lsbCBjbGljayB0aGUgTk9NQUQgTUlTU0lPTiBidXR0b24gYW5kIGEgbW9kYWwgd2lsbCBwb3AgdXAgZGVzY3JpYmluZyB3aGF0IHRoZSBhcHBsaWNhdGlvbiBpcyBhYm91dFxuICAgIGFuZCB3aG8gaXQgaXMgdGFpbG9yZWQgdG93YXJkc1xuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICBtb2RhbERpc3BsYXlBbmltYXRpb24oKXtcbiAgICAgICAgbGV0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub21hZE1vZGFsXCIpO1xuXG4gICAgICAgIC8vIHRhcmdldCBtb2RhbCB0byBvcGVuIGl0XG4gICAgICAgIGxldCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsQnV0dG9uXCIpO1xuXG4gICAgICAgIC8vIEdldCB0aGUgPHNwYW4+IGVsZW1lbnQgdGhhdCBjbG9zZXMgdGhlIG1vZGFsXG4gICAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNsb3NlXCIpWzBdO1xuICAgICAgICAvLyBXaGVuIHRoZSB1c2VyIGNsaWNrcyB0aGUgYnV0dG9uLCBvcGVuIHRoZSBtb2RhbFxuICAgICAgICBidG4ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICB9XG4gICAgICAgIC8vIFdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIDxzcGFuPiAoeCksIGNsb3NlIHRoZSBtb2RhbFxuICAgICAgICBzcGFuLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgICAgIC8vIFdoZW4gdGhlIHVzZXIgY2xpY2tzIGFueXdoZXJlIG91dHNpZGUgb2YgdGhlIG1vZGFsLCBjbG9zZSBpdFxuICAgICAgICB3aW5kb3cub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09IG1vZGFsKSB7XG4gICAgICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICQoXCIubWVzc2FnZSBhXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICQoXCJmb3JtXCIpLmFuaW1hdGUoe2hlaWdodDogXCJ0b2dnbGVcIiwgb3BhY2l0eTogXCJ0b2dnbGVcIn0sIFwic2xvd1wiKVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBOQVZCQVIgTEkgRUxJU1RFTkVSUzogV2hlbiB1c2VyIGNsaWNrcyBhbiBpdGVtIGluIHRoZSBOQVZCQVIgdGhlIGNvbnRlbnQgYXNzb2NpYXRlZCB3aXRoIHRoYXQgdGFiIHdpbGwgcG9wdWxhdGUgdGhlIERPTVxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICBtZXNzYWdlc05hdkxpbmsoKXtcbiAgICAgICAgbWVzc2FnZXMuY3JlYXRlTWVzc2FnZUJvYXJkKClcbiAgICAgICAgY29uc29sZS5sb2coXCJ3b3JraW5nXCIpXG4gICAgICAgIGZyaWVuZHMuYnVpbGRGcmllbmRTZWFyY2hCYXIoKVxuXG4gICAgfSxcbiAgICBldmVudHNOYXZMaW5rKCl7XG4gICAgICAgICAgICBldmVudHMuc2hvd0V2ZW50Rm9ybSgpXG4gICAgICAgICAgICBldmVudHMuYXBwZW5kVXNlckFuZEZyaWVuZEV2ZW50cygpO1xuICAgICAgICAgICAgLy9hcHBlbmRVc2VyRXZlbnRcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXZlbnRzIGNsaWNrZWRcIilcbiAgICB9LFxuICAgIGZyaWVuZHNOYXZMaW5rKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZnJpZW5kcyBuYXYgbGluayBjbGlja2VkXCIpXG4gICAgICAgIGZyaWVuZHMuZGVmaW5lQ3VycmVudFVzZXJzRnJpZW5kcygpO1xuICAgICAgICBmcmllbmRzLmluaXRpYWxpemVQb3RlbnRpYWxGcmllbmRzKCk7XG5cbiAgICB9LFxuICAgIG5ld3NOYXZMaW5rKCl7XG4gICAgICAgIC8vTkVXUyBTRUNUSU9OXG4gICAgICAgIFxuICAgICAgICBuZXdzLmdldEFQSU5ld3MoKTtcbiAgICAgICAgLy8gbmV3cy5zYXZlZE5ld3NFbGVtZW50c0NyZWF0b3IoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJuZXdzIGxpbmsgY2xpY2tlZFwiKVxuICAgIH0sXG4gICAgdGFza3NOYXZMaW5rKCl7XG4gICAgICAgIHRhc2tzLmNyZWF0ZVRhc2tUYWJsZXMoKVxuICAgICAgICBmcmllbmRzLmJ1aWxkRnJpZW5kU2VhcmNoQmFyKClcbiAgICB9LFxuICAgIG5vbWFkTmF2TGluaygpe1xuICAgICAgICBkYXNoYm9hcmQuYnVpbGRMb2dpbkZvcm0oKVxuICAgICAgICAkKFwibmF2XCIpLmhpZGUoKVxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5jbGVhcigpXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2lnbmVkIG91dFwiKVxuICAgIH0sXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIEVORCBPRiBOQVZJR0FUSU9OIEVWRU5UTElTVEVORVJTXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuICAgIGZyaWVuZHNEZWxldGVGcmllbmQgKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQpO1xuXG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZXZlbnRMaXN0ZW5lcnM7XG4iLCJpbXBvcnQgbm9tYWREYXRhIGZyb20gXCIuL25vbWFkRGF0YVwiO1xuaW1wb3J0IGV2ZW50cyBmcm9tIFwiLi9ldmVudHNcIjtcbi8vIGltcG9ydCBkb21Db21wb25lbnRzIGZyb20gXCIuL2RvbUNvbXBvbmVudHNcIjtcblxuY29uc3QgZXZlbnRQYWdlTGlzdGVuZXJzID0ge1xuICAgIGhhbmRsZVNob3dCdXR0b24oKSB7XG4gICAgICAgIGNvbnN0IG91dHB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXZlbnRzQ29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCBzaG93QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaG93Rm9ybVwiKTtcbiAgICAgICAgZXZlbnRzQ29udGFpbmVyLnJlbW92ZUNoaWxkKHNob3dCdXR0b24pO1xuICAgICAgICBjb25zdCBldmVudEZvcm0gPSBldmVudHMuY3JlYXRlRXZlbnRJbnB1dCgpO1xuICAgICAgICBldmVudHNDb250YWluZXIuaW5zZXJ0QmVmb3JlKGV2ZW50Rm9ybSwgZXZlbnRzQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICAgIH0sXG4gICAgaGFuZGxlU2F2ZUJ1dHRvbigpIHtcbiAgICAgICAgY29uc3QgbmFtZUlucHV0dGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNldmVudE5hbWVcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IGRhdGVJbnB1dHRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXZlbnREYXRlXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCB0aW1lSW5wdXR0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2V2ZW50VGltZVwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgbG9jYXRpb25JbnB1dHRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXZlbnRMb2NhdGlvblwiKS52YWx1ZTtcblxuICAgICAgICBpZiAobmFtZUlucHV0dGVkID09PSBcIlwiIHx8IGRhdGVJbnB1dHRlZCA9PT0gXCJcIiB8fCB0aW1lSW5wdXR0ZWQgPT09IFwiXCIgfHwgbG9jYXRpb25JbnB1dHRlZCA9PT0gXCJcIikge1xuICAgICAgICAgICAgYWxlcnQoXCJQbGVhc2UgaW5wdXQgaW5mb3JtYXRpb24gaW4gYWxsIGZpZWxkc1wiKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xuICAgICAgICAgICAgICAgIGRhdGFTZXQ6IFwiZXZlbnRzXCIsXG4gICAgICAgICAgICAgICAgZmV0Y2hUeXBlOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICBkYXRhQmFzZU9iamVjdDoge1xuICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpKSxcbiAgICAgICAgICAgICAgICAgICAgZXZlbnROYW1lOiBuYW1lSW5wdXR0ZWQsXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50RGF0ZTogZGF0ZUlucHV0dGVkLFxuICAgICAgICAgICAgICAgICAgICBldmVudFRpbWU6IHRpbWVJbnB1dHRlZCxcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRMb2NhdGlvbjogbG9jYXRpb25JbnB1dHRlZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbiggKCkgPT4ge1xuICAgICAgICAgICAgICAgIGV2ZW50cy5hcHBlbmRVc2VyQW5kRnJpZW5kRXZlbnRzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGhhbmRsZUhpZGVCdXR0b24oKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXZlbnRzQ29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ldmVudElucHV0XCIpO1xuICAgICAgICBldmVudHNDb250YWluZXIucmVtb3ZlQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG4gICAgICAgIGV2ZW50cy5hZGRTaG93QnV0dG9uKCk7XG4gICAgfSxcbiAgICBoYW5kbGVEZWxldGVCdXR0b24oKSB7XG4gICAgICAgIGNvbnN0IGlkVG9EZWxldGUgPSBldmVudC50YXJnZXQuaWQuc3BsaXQoXCItLVwiKVsxXTtcbiAgICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xuICAgICAgICAgICAgZGVsZXRlSWQ6IGlkVG9EZWxldGUsXG4gICAgICAgICAgICBkYXRhU2V0OiBcImV2ZW50c1wiLFxuICAgICAgICAgICAgZmV0Y2hUeXBlOiBcIkRFTEVURVwiLFxuICAgICAgICAgICAgZGF0YUJhc2VPYmplY3Q6IHtcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oICgpID0+IHtcbiAgICAgICAgICAgIGV2ZW50cy5hcHBlbmRVc2VyQW5kRnJpZW5kRXZlbnRzKCk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgaGFuZGxlRWRpdEJ1dHRvbigpIHtcbiAgICAgICAgY29uc3QgaWRUb0VkaXQgPSBldmVudC50YXJnZXQuaWQuc3BsaXQoXCItLVwiKVsxXTtcbiAgICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xuICAgICAgICAgICAgZGF0YVNldDogXCJldmVudHNcIixcbiAgICAgICAgICAgIGZldGNoVHlwZTogXCJHRVRcIixcbiAgICAgICAgICAgIGRhdGFCYXNlT2JqZWN0OiB7XG4gICAgICAgICAgICB1c2VySWQ6IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbWJlZEl0ZW06IGAvJHtpZFRvRWRpdH1gXG4vLyBBYm92ZSBpcyBhIGJpdCBvZiBhIGhhY2t5IHNvbHV0aW9uIGluIG9yZGVyIHRvIGdldCBhIHNwZWNpZmljIGV2ZW50LiBNYXliZSBuZWVkIHRvIGFkZCBzcGVjaWZpYyBnZXQgZnVuY3Rpb24gdG8gbm9tYWREYXRhXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHBhcnNlZFJlc3BvbnNlID0+IHtcbiAgICAgICAgZXZlbnRzLmNyZWF0ZUV2ZW50RWRpdElucHV0KGlkVG9FZGl0LCBwYXJzZWRSZXNwb25zZSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgaGFuZGxlVXBkYXRlQnV0dG9uKCkge1xuICAgICAgICBjb25zdCBlZGl0ZWRJZCA9IGV2ZW50LnRhcmdldC5pZC5zcGxpdChcIi0tXCIpWzFdO1xuXG4gICAgICAgIGNvbnN0IGVkaXRlZE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZWRpdE5hbWUtLSR7ZWRpdGVkSWR9YCkudmFsdWU7XG4gICAgICAgIGNvbnN0IGVkaXRlZERhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZWRpdERhdGUtLSR7ZWRpdGVkSWR9YCkudmFsdWU7XG4gICAgICAgIGNvbnN0IGVkaXRlZFRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZWRpdFRpbWUtLSR7ZWRpdGVkSWR9YCkudmFsdWU7XG4gICAgICAgIGNvbnN0IGVkaXRlZExvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2VkaXRMb2NhdGlvbi0tJHtlZGl0ZWRJZH1gKS52YWx1ZTtcblxuICAgICAgICBpZiAoZWRpdGVkTmFtZSA9PT0gXCJcIiB8fCBlZGl0ZWREYXRlID09PSBcIlwiIHx8IGVkaXRlZFRpbWUgPT09IFwiXCIgfHwgZWRpdGVkTG9jYXRpb24gPT09IFwiXCIpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiUGxlYXNlIGRvIG5vdCBsZWF2ZSBlZGl0IGZpZWxkcyBibGFua1wiKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xuICAgICAgICAgICAgICAgIHB1dElkOiBlZGl0ZWRJZCxcbiAgICAgICAgICAgICAgICBkYXRhU2V0OiBcImV2ZW50c1wiLFxuICAgICAgICAgICAgICAgIGZldGNoVHlwZTogXCJQVVRcIixcbiAgICAgICAgICAgICAgICBkYXRhQmFzZU9iamVjdDoge1xuICAgICAgICAgICAgICAgICAgICBpZDogZWRpdGVkSWQsXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZDogTnVtYmVyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIikpLFxuICAgICAgICAgICAgICAgICAgICBldmVudE5hbWU6IGVkaXRlZE5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50RGF0ZTogZWRpdGVkRGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRUaW1lOiBlZGl0ZWRUaW1lLFxuICAgICAgICAgICAgICAgICAgICBldmVudExvY2F0aW9uOiBlZGl0ZWRMb2NhdGlvblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbiggKCkgPT4ge1xuICAgICAgICAgICAgICAgIGV2ZW50cy5hcHBlbmRVc2VyQW5kRnJpZW5kRXZlbnRzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGV2ZW50UGFnZUxpc3RlbmVyczsiLCIvLyBBdXRob3I6IENvbGUgQnJ5YW50IC8gUHVycG9zZTpcblxuaW1wb3J0IG5vbWFkRGF0YSBmcm9tIFwiLi9ub21hZERhdGFcIjtcbmltcG9ydCBkb21Db21wb25lbnRzIGZyb20gXCIuL2RvbUNvbXBvbmVudHNcIjtcbmltcG9ydCBldmVudFBhZ2VMaXN0ZW5lcnMgZnJvbSBcIi4vZXZlbnRQYWdlTGlzdGVuZXJzXCI7XG5cblxuLy9jcmVhdGVFdmVudElucHV0IGFuZCBjcmVhdGVFdmVudEl0ZW0gd2lsbCBiZSBhZGRlZCB0byB0aGlzIG9iamVjdC4gc28gZG9tYnVpbGRlci5cbmNvbnN0IGV2ZW50cyA9IHtcbiAgc2hvd0V2ZW50Rm9ybSAoKSB7XG4gICAgY29uc3Qgb3V0cHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvdXRwdXRcIik7XG4gICAgd2hpbGUgKG91dHB1dC5maXJzdENoaWxkKSB7XG4gICAgICBvdXRwdXQucmVtb3ZlQ2hpbGQob3V0cHV0LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBjb25zdCBldmVudHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKTtcbiAgICBldmVudHNDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJldmVudHNDb250YWluZXJcIik7XG4gICAgb3V0cHV0LmFwcGVuZENoaWxkKGV2ZW50c0NvbnRhaW5lcik7XG4gICAgY29uc3QgZXZlbnRzRm9ybSA9IHRoaXMuY3JlYXRlRXZlbnRJbnB1dCgpO1xuICAgIGV2ZW50c0NvbnRhaW5lci5hcHBlbmRDaGlsZChldmVudHNGb3JtKVxuICAgIGNvbnN0IGV2ZW50TG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIik7XG4gICAgZXZlbnRMb2cuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJldmVudExvZ1wiKTtcbiAgICBldmVudHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZXZlbnRMb2cpO1xuICB9LFxuICBhZGRTaG93QnV0dG9uKCkge1xuICAgIGNvbnN0IGV2ZW50c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXZlbnRzQ29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHNob3dCdXR0b24gPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImJ1dHRvblwiLCBjb250ZW50OiBcIkNyZWF0ZSBhIE5ldyBFdmVudFwiLCBhdHRyaWJ1dGVzOiB7dHlwZTogXCJidXR0b25cIiwgaWQ6IFwic2hvd0Zvcm1cIn19KTtcbiAgICBzaG93QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudFBhZ2VMaXN0ZW5lcnMuaGFuZGxlU2hvd0J1dHRvbik7XG4gICAgZXZlbnRzQ29udGFpbmVyLmluc2VydEJlZm9yZShzaG93QnV0dG9uLCBldmVudHNDb250YWluZXIuZmlyc3RDaGlsZCk7XG4gIH0sXG4gIGFwcGVuZFVzZXJBbmRGcmllbmRFdmVudHMoKSB7XG4gICAgY29uc3QgZXZlbnRMb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2V2ZW50TG9nXCIpO1xuICAgIGNvbnN0IGV2ZW50SG9sZGVyID0gW107XG4gICAgY29uc3QgdXNlckhvbGRlciA9IFtOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSldO1xuICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcbiAgICAgIGRhdGFTZXQ6IFwiZnJpZW5kc1wiLFxuICAgICAgZmV0Y2hUeXBlOiBcIkdFVFwiLFxuICAgICAgZGF0YUJhc2VPYmplY3Q6IFwiXCIsXG4gICAgICBlbWJlZEl0ZW06IFwiP19lbWJlZD1ldmVudHNcIlxuICAgIH0pXG4gICAgLnRoZW4ocGFyc2VkUmVzcG9uc2UgPT4ge1xuICAgICAgcGFyc2VkUmVzcG9uc2UuZm9yRWFjaChyZXNwb25zZSA9PiB7XG4gICAgICAgIGlmKHJlc3BvbnNlLnVzZXJJZCA9PT0gTnVtYmVyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIikpKSB7XG4gICAgICAgICAgdXNlckhvbGRlci5wdXNoKHJlc3BvbnNlLm90aGVyRnJpZW5kSWQpO1xuICAgICAgICB9O1xuICAgICAgfSlcbiAgICAgIHVzZXJIb2xkZXIuZm9yRWFjaCh1c2VySWQgPT4ge1xuICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICAgICAgZGF0YVNldDogXCJldmVudHNcIixcbiAgICAgICAgICBmZXRjaFR5cGU6IFwiR0VUXCIsXG4gICAgICAgICAgZGF0YUJhc2VPYmplY3Q6IFwiXCIsXG4gICAgICAgICAgZW1iZWRJdGVtOiBgP191c2VySWQ9JHt1c2VySWR9YFxuICAgICAgICB9KVxuICAgICAgICAudGhlbihwYXJzZWRSZXNwb25zZSA9PiB7XG4gICAgICAgICAgcGFyc2VkUmVzcG9uc2UuZm9yRWFjaChyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UudXNlcklkID09PSB1c2VySWQpIHtcbiAgICAgICAgICAgICAgZXZlbnRIb2xkZXIucHVzaChyZXNwb25zZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbnN0IHNvcnRlZEV2ZW50cyA9IGV2ZW50SG9sZGVyLnNvcnQoIChhLCBiKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoYS5ldmVudERhdGUpIC0gbmV3IERhdGUoYi5ldmVudERhdGUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbnN0IGRvY3VGcmFnID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICAgIHNvcnRlZEV2ZW50cy5mb3JFYWNoKGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHdoaWxlIChldmVudExvZy5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgIGV2ZW50TG9nLnJlbW92ZUNoaWxkKGV2ZW50TG9nLmZpcnN0Q2hpbGQpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgZXZlbnRJdGVtID0gdGhpcy5jcmVhdGVFdmVudEl0ZW0oZXZlbnQpO1xuICAgICAgICAgICAgZG9jdUZyYWcuYXBwZW5kQ2hpbGQoZXZlbnRJdGVtKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBldmVudExvZy5hcHBlbmRDaGlsZChkb2N1RnJhZyk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG4gIGNyZWF0ZUV2ZW50SW5wdXQoKSB7XG4gICAgY29uc3QgZXZlbnRzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNldmVudHNDb250YWluZXJcIik7XG5cbiAgICBjb25zdCBldmVudEZvcm0gPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImZvcm1cIiwgYXR0cmlidXRlczoge2NsYXNzOiBcImV2ZW50SW5wdXRcIn19KTtcbiAgICBldmVudHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZXZlbnRGb3JtKVxuICAgIGNvbnN0IGZvcm1IZWFkZXIgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImgyXCIsIGNvbnRlbnQ6IFwiQWRkIGEgTmV3IEV2ZW50OlwifSk7XG4gICAgZXZlbnRGb3JtLmFwcGVuZENoaWxkKGZvcm1IZWFkZXIpO1xuXG4gICAgY29uc3QgbmFtZUZpZWxkc2V0ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJmaWVsZHNldFwifSk7XG4gICAgY29uc3QgbmFtZUxhYmVsID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJsYWJlbFwiLCBjb250ZW50OiBcIkV2ZW50IE5hbWU6XCIsIGF0dHJpYnV0ZXM6IHtmb3I6IFwiZXZlbnROYW1lXCJ9fSk7XG4gICAgY29uc3QgbmFtZUlucHV0ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJpbnB1dFwiLCBhdHRyaWJ1dGVzOiB7dHlwZTogXCJ0ZXh0XCIsIG5hbWU6IFwiZXZlbnROYW1lXCIsIGlkOiBcImV2ZW50TmFtZVwifX0pO1xuICAgIG5hbWVGaWVsZHNldC5hcHBlbmRDaGlsZChuYW1lTGFiZWwpO1xuICAgIG5hbWVGaWVsZHNldC5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xuXG4gICAgY29uc3QgZGF0ZUZpZWxkc2V0ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJmaWVsZHNldFwifSk7XG4gICAgY29uc3QgZGF0ZUxhYmVsID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJsYWJlbFwiLCBjb250ZW50OiBcIkV2ZW50IERhdGU6XCIsIGF0dHJpYnV0ZXM6IHtmb3I6IFwiZXZlbnREYXRlXCJ9fSk7XG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJpbnB1dFwiLCBhdHRyaWJ1dGVzOiB7dHlwZTogXCJkYXRlXCIsIG5hbWU6IFwiZXZlbnREYXRlXCIsIGlkOiBcImV2ZW50RGF0ZVwifX0pO1xuICAgIGRhdGVGaWVsZHNldC5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuICAgIGRhdGVGaWVsZHNldC5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuXG4gICAgY29uc3QgdGltZUZpZWxkc2V0ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJmaWVsZHNldFwifSk7XG4gICAgY29uc3QgdGltZUxhYmVsID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJsYWJlbFwiLCBjb250ZW50OiBcIkV2ZW50IFRpbWU6XCIsIGF0dHJpYnV0ZXM6IHtmb3I6IFwiZXZlbnRUaW1lXCJ9fSk7XG4gICAgY29uc3QgdGltZUlucHV0ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJpbnB1dFwiLCBhdHRyaWJ1dGVzOiB7dHlwZTogXCJ0aW1lXCIsIG5hbWU6IFwiZXZlbnRUaW1lXCIsIGlkOiBcImV2ZW50VGltZVwifX0pO1xuICAgIHRpbWVGaWVsZHNldC5hcHBlbmRDaGlsZCh0aW1lTGFiZWwpO1xuICAgIHRpbWVGaWVsZHNldC5hcHBlbmRDaGlsZCh0aW1lSW5wdXQpO1xuXG4gICAgY29uc3QgbG9jYXRpb25GaWVsZHNldCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiZmllbGRzZXRcIn0pO1xuICAgIGNvbnN0IGxvY2F0aW9uTGFiZWwgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImxhYmVsXCIsIGNvbnRlbnQ6IFwiRXZlbnQgTG9jYXRpb246XCIsIGF0dHJpYnV0ZXM6IHtmb3I6IFwiZXZlbnRMb2NhdGlvblwifX0pO1xuICAgIGNvbnN0IGxvY2F0aW9uSW5wdXQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImlucHV0XCIsIGF0dHJpYnV0ZXM6IHt0eXBlOiBcInRleHRcIiwgbmFtZTogXCJldmVudExvY2F0aW9uXCIsIGlkOiBcImV2ZW50TG9jYXRpb25cIn19KTtcbiAgICBsb2NhdGlvbkZpZWxkc2V0LmFwcGVuZENoaWxkKGxvY2F0aW9uTGFiZWwpO1xuICAgIGxvY2F0aW9uRmllbGRzZXQuYXBwZW5kQ2hpbGQobG9jYXRpb25JbnB1dCk7XG5cbiAgICBjb25zdCBzYXZlQnV0dG9uID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJidXR0b25cIiwgY29udGVudDogXCJTYXZlXCIsIGF0dHJpYnV0ZXM6IHt0eXBlOiBcImJ1dHRvblwiLCBpZDogXCJzYXZlRXZlbnRcIn19KTtcbiAgICBzYXZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudFBhZ2VMaXN0ZW5lcnMuaGFuZGxlU2F2ZUJ1dHRvbik7XG5cbiAgICBjb25zdCBoaWRlQnV0dG9uID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJidXR0b25cIiwgY29udGVudDogXCJIaWRlIEV2ZW50IElucHV0XCIsIGF0dHJpYnV0ZXM6IHt0eXBlOiBcImJ1dHRvblwiLCBpZDogXCJoaWRlRXZlbnRcIn19KTtcbiAgICBoaWRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudFBhZ2VMaXN0ZW5lcnMuaGFuZGxlSGlkZUJ1dHRvbik7XG5cbiAgICBldmVudEZvcm0uYXBwZW5kQ2hpbGQobmFtZUZpZWxkc2V0KTtcbiAgICBldmVudEZvcm0uYXBwZW5kQ2hpbGQoZGF0ZUZpZWxkc2V0KTtcbiAgICBldmVudEZvcm0uYXBwZW5kQ2hpbGQodGltZUZpZWxkc2V0KTtcbiAgICBldmVudEZvcm0uYXBwZW5kQ2hpbGQobG9jYXRpb25GaWVsZHNldCk7XG4gICAgZXZlbnRGb3JtLmFwcGVuZENoaWxkKHNhdmVCdXR0b24pO1xuICAgIGV2ZW50Rm9ybS5hcHBlbmRDaGlsZChoaWRlQnV0dG9uKTtcblxuICAgIHJldHVybiBldmVudEZvcm07XG4gIH0sXG4gIGNyZWF0ZUV2ZW50SXRlbSAoZXZlbnRPYmplY3QpIHtcbiAgICBjb25zdCBldmVudEl0ZW0gPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImFydGljbGVcIiwgYXR0cmlidXRlczoge2NsYXNzOiBcImV2ZW50SXRlbVwiLCBpZDogYGV2ZW50SXRlbS0tJHtldmVudE9iamVjdC5pZH1gfX0pO1xuICAgIGNvbnN0IGV2ZW50SGVhZGVyID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJoMlwiLCBjb250ZW50OiBldmVudE9iamVjdC5ldmVudE5hbWV9KTtcblxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShldmVudE9iamVjdC5ldmVudERhdGUpO1xuICAgIGNvbnN0IGRhdGlmeSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IG1vbnRoTmFtZXMgPSBbXG4gICAgICAgIFwiSmFudWFyeVwiLFxuICAgICAgICBcIkZlYnJ1YXJ5XCIsXG4gICAgICAgIFwiTWFyY2hcIixcbiAgICAgICAgXCJBcHJpbFwiLFxuICAgICAgICBcIk1heVwiLFxuICAgICAgICBcIkp1bmVcIixcbiAgICAgICAgXCJKdWx5XCIsXG4gICAgICAgIFwiQXVndXN0XCIsXG4gICAgICAgIFwiU2VwdGVtYmVyXCIsXG4gICAgICAgIFwiT2N0b2JlclwiLFxuICAgICAgICBcIk5vdmVtYmVyXCIsXG4gICAgICAgIFwiRGVjZW1iZXJcIlxuICAgICAgXTtcbiAgICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuICAgICAgY29uc3QgbW9udGhJbmRleCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICByZXR1cm4gYCR7bW9udGhOYW1lc1ttb250aEluZGV4XX0gJHtkYXl9LCAke3llYXJ9YDtcbiAgICB9O1xuXG4gICAgY29uc3QgbG9uZ0RhdGUgPSBkYXRpZnkoKTtcblxuICAgIGNvbnN0IGV2ZW50RGF0ZVRpbWUgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcInBcIiwgY29udGVudDogYEF0ICR7ZXZlbnRPYmplY3QuZXZlbnRUaW1lfSBvbiAke2xvbmdEYXRlfWB9KTtcbiAgICBjb25zdCBldmVudExvY2F0aW9uID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJwXCIsIGNvbnRlbnQ6IGBMb2NhdGlvbjogJHtldmVudE9iamVjdC5ldmVudExvY2F0aW9ufWB9KTtcblxuICAgIGV2ZW50SXRlbS5hcHBlbmRDaGlsZChldmVudEhlYWRlcik7XG4gICAgZXZlbnRJdGVtLmFwcGVuZENoaWxkKGV2ZW50RGF0ZVRpbWUpO1xuICAgIGV2ZW50SXRlbS5hcHBlbmRDaGlsZChldmVudExvY2F0aW9uKTtcblxuICAgIGlmIChldmVudE9iamVjdC51c2VySWQgPT09IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpKSkge1xuICAgICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiYnV0dG9uXCIsIGNvbnRlbnQ6IFwiRWRpdFwiLCBhdHRyaWJ1dGVzOiB7dHlwZTogXCJidXR0b25cIiwgaWQ6IGBlZGl0RXZlbnQtLSR7ZXZlbnRPYmplY3QuaWR9YH19KTtcbiAgICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50UGFnZUxpc3RlbmVycy5oYW5kbGVFZGl0QnV0dG9uKTtcbiAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiYnV0dG9uXCIsIGNvbnRlbnQ6IFwiRGVsZXRlXCIsIGF0dHJpYnV0ZXM6IHt0eXBlOiBcImJ1dHRvblwiLCBpZDogYGRlbGV0ZUV2ZW50LS0ke2V2ZW50T2JqZWN0LmlkfWB9fSk7XG4gICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50UGFnZUxpc3RlbmVycy5oYW5kbGVEZWxldGVCdXR0b24pO1xuICAgICAgZXZlbnRJdGVtLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuICAgICAgZXZlbnRJdGVtLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcbiAgICAgICAgZGF0YVNldDogXCJ1c2Vyc1wiLFxuICAgICAgICBmZXRjaFR5cGU6IFwiR0VUXCIsXG4gICAgICAgIGVtYmVkSXRlbTogYC8ke2V2ZW50T2JqZWN0LnVzZXJJZH1gXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHBhcnNlZFJlc3BvbnNlID0+IHtcbiAgICAgICAgY29uc3QgZXZlbnRVc2VyID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJwXCIsIGNvbnRlbnQ6IGBFdmVudCBDcmVhdGVkIEJ5OiAke3BhcnNlZFJlc3BvbnNlLnVzZXJOYW1lfWB9KTtcbiAgICAgICAgZXZlbnRJdGVtLmFwcGVuZENoaWxkKGV2ZW50VXNlcik7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gZXZlbnRJdGVtO1xuICB9LFxuICBjcmVhdGVFdmVudEVkaXRJbnB1dChjb250YWluZXJJZCwgZXZlbnRPYmplY3QpIHtcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJmb3JtXCIsIGF0dHJpYnV0ZXM6IHtjbGFzczogXCJldmVudEVkaXRcIn19KTtcbiAgICBjb25zdCBldmVudEhlYWRlciA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiaDJcIiwgY29udGVudDogZXZlbnRPYmplY3QuZXZlbnROYW1lfSk7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChldmVudEhlYWRlcik7XG5cbiAgICBjb25zdCBuYW1lRmllbGRzZXQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImZpZWxkc2V0XCJ9KTtcbiAgICBjb25zdCBuYW1lTGFiZWwgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImxhYmVsXCIsIGNvbnRlbnQ6IFwiRWRpdCBOYW1lOlwiLCBhdHRyaWJ1dGVzOiB7Zm9yOiBcImV2ZW50TmFtZVwifX0pO1xuICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiaW5wdXRcIiwgYXR0cmlidXRlczoge3R5cGU6IFwidGV4dFwiLCBuYW1lOiBcImV2ZW50TmFtZVwiLCBpZDogYGVkaXROYW1lLS0ke2NvbnRhaW5lcklkfWAsIHZhbHVlOiBldmVudE9iamVjdC5ldmVudE5hbWV9fSk7XG4gICAgbmFtZUZpZWxkc2V0LmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XG4gICAgbmFtZUZpZWxkc2V0LmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG5cbiAgICBjb25zdCBkYXRlRmllbGRzZXQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImZpZWxkc2V0XCJ9KTtcbiAgICBjb25zdCBkYXRlTGFiZWwgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImxhYmVsXCIsIGNvbnRlbnQ6IFwiRWRpdCBEYXRlOlwiLCBhdHRyaWJ1dGVzOiB7Zm9yOiBcImV2ZW50RGF0ZVwifX0pO1xuICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiaW5wdXRcIiwgYXR0cmlidXRlczoge3R5cGU6IFwiZGF0ZVwiLCBuYW1lOiBcImV2ZW50RGF0ZVwiLCBpZDogYGVkaXREYXRlLS0ke2NvbnRhaW5lcklkfWAsIHZhbHVlOiBldmVudE9iamVjdC5ldmVudERhdGV9fSk7XG4gICAgZGF0ZUZpZWxkc2V0LmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gICAgZGF0ZUZpZWxkc2V0LmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG5cbiAgICBjb25zdCB0aW1lRmllbGRzZXQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImZpZWxkc2V0XCJ9KTtcbiAgICBjb25zdCB0aW1lTGFiZWwgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImxhYmVsXCIsIGNvbnRlbnQ6IFwiRWRpdCBUaW1lOlwiLCBhdHRyaWJ1dGVzOiB7Zm9yOiBcImV2ZW50VGltZVwifX0pO1xuICAgIGNvbnN0IHRpbWVJbnB1dCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiaW5wdXRcIiwgYXR0cmlidXRlczoge3R5cGU6IFwidGltZVwiLCBuYW1lOiBcImV2ZW50VGltZVwiLCBpZDogYGVkaXRUaW1lLS0ke2NvbnRhaW5lcklkfWAsIHZhbHVlOiBldmVudE9iamVjdC5ldmVudFRpbWV9fSk7XG4gICAgdGltZUZpZWxkc2V0LmFwcGVuZENoaWxkKHRpbWVMYWJlbCk7XG4gICAgdGltZUZpZWxkc2V0LmFwcGVuZENoaWxkKHRpbWVJbnB1dCk7XG5cbiAgICBjb25zdCBsb2NhdGlvbkZpZWxkc2V0ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJmaWVsZHNldFwifSk7XG4gICAgY29uc3QgbG9jYXRpb25MYWJlbCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwibGFiZWxcIiwgY29udGVudDogXCJFZGl0IExvY2F0aW9uOlwiLCBhdHRyaWJ1dGVzOiB7Zm9yOiBcImV2ZW50TG9jYXRpb25cIn19KTtcbiAgICBjb25zdCBsb2NhdGlvbklucHV0ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJpbnB1dFwiLCBhdHRyaWJ1dGVzOiB7dHlwZTogXCJ0ZXh0XCIsIG5hbWU6IFwiZXZlbnRMb2NhdGlvblwiLCBpZDogYGVkaXRMb2NhdGlvbi0tJHtjb250YWluZXJJZH1gLCB2YWx1ZTogZXZlbnRPYmplY3QuZXZlbnRMb2NhdGlvbn19KTtcbiAgICBsb2NhdGlvbkZpZWxkc2V0LmFwcGVuZENoaWxkKGxvY2F0aW9uTGFiZWwpO1xuICAgIGxvY2F0aW9uRmllbGRzZXQuYXBwZW5kQ2hpbGQobG9jYXRpb25JbnB1dCk7XG5cbiAgICBjb25zdCB1cGRhdGVCdXR0b24gPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImJ1dHRvblwiLCBjb250ZW50OiBcIlVwZGF0ZVwiLCBhdHRyaWJ1dGVzOiB7dHlwZTogXCJidXR0b25cIiwgaWQ6IGBzdWJtaXRFZGl0cy0tJHtjb250YWluZXJJZH1gfX0pO1xuICAgIHVwZGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnRQYWdlTGlzdGVuZXJzLmhhbmRsZVVwZGF0ZUJ1dHRvbik7XG5cbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWVGaWVsZHNldCk7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlRmllbGRzZXQpO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodGltZUZpZWxkc2V0KTtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uRmllbGRzZXQpO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodXBkYXRlQnV0dG9uKTtcblxuICAgIGxldCBjdXJyZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2V2ZW50SXRlbS0tJHtjb250YWluZXJJZH1gKTtcbiAgICB3aGlsZSAoY3VycmVudENvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgICBjdXJyZW50Q29udGFpbmVyLnJlbW92ZUNoaWxkKGN1cnJlbnRDb250YWluZXIuZmlyc3RDaGlsZCk7XG4gICAgfTtcbiAgICBjdXJyZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xuICB9XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGV2ZW50czsiLCJpbXBvcnQgbm9tYWREYXRhIGZyb20gXCIuL25vbWFkRGF0YVwiXG5pbXBvcnQgZG9tQ29tcG9uZW50cyBmcm9tIFwiLi9kb21Db21wb25lbnRzXCI7XG5pbXBvcnQgZnJpZW5kc0V2ZW50c0xpc3RlbmVyIGZyb20gXCIuL2ZyaWVuZHNFdmVudHNMaXN0ZW5lclwiO1xuXG5jb25zdCBmcmllbmRzID0ge1xuXG5cbiAgZGVmaW5lQ3VycmVudFVzZXJzRnJpZW5kcyAoKSB7XG4gICAgJChcIiNvdXRwdXRcIikuZW1wdHkoKVxuICAgIGxldCB1c2VySWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKTtcbiAgICBsZXQgY3VycmVudFVzZXIgPSBOdW1iZXIodXNlcklkKTtcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50VXNlciwgdXNlcklkKVxuICAgIGNvbnN0IHRhcmdldENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3V0cHV0XCIpXG4gICAgY29uc3QgZnJpZW5kU2Nyb2xsQ29udGFpbmVyID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgIGVsZW1lbnRUeXBlOiBcInNlY3Rpb25cIixcbiAgICAgIGNzc0NsYXNzOiBcImZyaWVuZFNjcm9sbENvbnRhaW5lclwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBpZDogXCJmcmllbmRTY3JvbGxDb250YWluZXJcIlxuICAgICAgfVxuICAgIH0pXG4gICAgdGFyZ2V0Q29udGFpbmVyLmFwcGVuZENoaWxkKGZyaWVuZFNjcm9sbENvbnRhaW5lcilcblxuICAgIGZyaWVuZFNjcm9sbENvbnRhaW5lci5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgZWxlbWVudFR5cGU6IFwic2VjdGlvblwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBpZDogXCJhbGxGcmllbmRDb250YWluZXJcIixcbiAgICAgIH1cbiAgICB9KSlcbiAgICBjb25zdCBhbGxGcmllbmRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsbEZyaWVuZENvbnRhaW5lclwiKTtcbiAgICBhbGxGcmllbmRDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgIGVsZW1lbnRUeXBlOiBcImgyXCIsXG4gICAgICBjb250ZW50OiBcImZyaWVuZHM6XCIsXG4gICAgICBjc3NDbGFzczogXCJmcmllbmRUYWdcIlxuICAgIH0pKVxuXG4gICAgbGV0IGZyaWVuZEhvbGRlciA9IFtdO1xuXG4vLyBQVUxMIEZST00gRlJJRU5EUyBKU09OLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5ub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG5cImRhdGFTZXRcIiA6IFwiZnJpZW5kc1wiLFxuXCJmZXRjaFR5cGVcIiA6IFwiR0VUXCIsXG5cImRhdGFCYXNlT2JqZWN0XCIgOiBcIlwiLFxuXCJlbWJlZEl0ZW1cIiA6IFwiP19lbWJlZD1ldmVudHNcIn0pXG4udGhlbihmcm9tRnJpZW5kcyA9PiB7XG4gIC8vIGNvbnNvbGUubG9nKGZyb21GcmllbmRzKVxuICBmcm9tRnJpZW5kcy5mb3JFYWNoKGZyaWVuZERhdGEgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGZyaWVuZERhdGEpXG4gICAgaWYgKGZyaWVuZERhdGEudXNlcklkID09PSBjdXJyZW50VXNlcikge1xuICAgICAgZnJpZW5kSG9sZGVyLnB1c2goZnJpZW5kRGF0YS5vdGhlckZyaWVuZElkKVxuICAgIH1cbiAgfSlcbiAgZnJpZW5kSG9sZGVyLmZvckVhY2gob2ZmaWNpYWxGcmllbmQgPT4ge1xuICAgIHRoaXMubG9hZEN1cnJlbnRVc2Vyc0ZyaWVuZHMob2ZmaWNpYWxGcmllbmQpXG4gIH0pXG59KVxufSxcbmxvYWRDdXJyZW50VXNlcnNGcmllbmRzIChmcmllbmQpIHtcbiAgLy8gUFVMTCBGUk9NIFVTRVJTIEpTT04gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gY29uc29sZS5sb2coZnJpZW5kKVxuICAgICAgY29uc3QgYWxsRnJpZW5kQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGxGcmllbmRDb250YWluZXJcIilcbiAgICAgIGFsbEZyaWVuZENvbnRhaW5lci5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICBlbGVtZW50VHlwZTogXCJhcnRpY2xlXCIsXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICBjbGFzczogXCJmcmllbmQtY29udGFpbmVyXCIsXG4gICAgICAgICAgaWQ6IGBmcmllbmQtJHtmcmllbmR9YFxuICAgICAgICB9XG4gICAgICB9KSlcbiAgICAgIGNvbnN0IGZyaWVuZENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBmcmllbmQtJHtmcmllbmR9YClcbiAgICAvLyBHRVQgQSBCT1ggSEVSRSBUSEFUIENPTlRBSU5TIFZJU1VBTCBPRiBGUklFTkRTXG5cbiAgICAgIGxldCBmcmllbmREb21CdWlsZGVyID0gW107XG4gICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICBcImRhdGFTZXRcIiA6IFwidXNlcnNcIixcbiAgICAgIFwiZmV0Y2hUeXBlXCIgOiBcIkdFVFwiLFxuICAgICAgXCJkYXRhQmFzZU9iamVjdFwiIDogXCJcIixcbiAgICAgIFwiZW1iZWRJdGVtXCIgOiBcIj9fZW1iZWQ9ZXZlbnRzXCJ9KVxuICAgICAgLnRoZW4oZnJvbVVzZXJEYXRhID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZnJvbVVzZXJEYXRhKTtcbiAgICAgICAgZnJvbVVzZXJEYXRhLmZvckVhY2godXNlckluZm8gPT4ge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGZyaWVuZCwgdXNlckluZm8uaWQpXG4gICAgICAgICAgaWYgKHVzZXJJbmZvLmlkID09PSBmcmllbmQpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXJJbmZvLnVzZXJOYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IGZyaWVuZElkZW50aWZpZXIgPSB7XG4gICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImgyXCIsXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IHVzZXJJbmZvLnVzZXJOYW1lLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnJpZW5kRG9tQnVpbGRlci5wdXNoKGZyaWVuZElkZW50aWZpZXIpXG4gICAgICAgICAgICAvLyBQVUxMIEZST00gRVZFTlRTIEpTT04gLS0tLS0tXG4gICAgICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICAgICAgICAgICAgXCJkYXRhU2V0XCIgOiBcImV2ZW50c1wiLFxuICAgICAgICAgICAgXCJmZXRjaFR5cGVcIiA6IFwiR0VUXCIsXG4gICAgICAgICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiBcIlwiLFxuICAgICAgICAgICAgXCJlbWJlZEl0ZW1cIiA6IFwiP19lbWJlZD1ldmVudHNcIn0pXG4gICAgICAgICAgICAudGhlbihldmVudHMgPT4ge1xuICAgICAgICAgICAgICBldmVudHMuZm9yRWFjaChldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnVzZXJJZCA9PT0gZnJpZW5kKSB7XG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudC5ldmVudE5hbWUpO1xuICAgICAgICAgICAgICAgICAgY29uc3QgZXZlbnRIb2xkZXIgPSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcInBcIixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogYEVWRU5UOiAke2V2ZW50LmV2ZW50TmFtZX0gb24gJHtldmVudC5ldmVudERhdGV9YCxcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgICAgICAgICAgICAgIGlkOiBgZXZlbnQtJHtldmVudC5pZH1gLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBmcmllbmREb21CdWlsZGVyLnB1c2goZXZlbnRIb2xkZXIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vIFBVTEwgRlJPTSBORVdTSVRFTVMgSlNPTiAtLS0tLS1cbiAgICAgICAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcbiAgICAgICAgICAgIFwiZGF0YVNldFwiIDogXCJuZXdzaXRlbXNcIixcbiAgICAgICAgICAgIFwiZmV0Y2hUeXBlXCIgOiBcIkdFVFwiLFxuICAgICAgICAgICAgXCJkYXRhQmFzZU9iamVjdFwiIDogXCJcIixcbiAgICAgICAgICAgIFwiZW1iZWRJdGVtXCIgOiBcIj9fZW1iZWQ9bmV3c2l0ZW1zXCJ9KVxuICAgICAgICAgICAgLnRoZW4obmV3c1NoaXogPT4ge1xuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhuZXdzU2hpeilcbiAgICAgICAgICAgICAgbmV3c1NoaXouZm9yRWFjaCh1c2VyU3BlY2lmaWNBcnRpY2xlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXJTcGVjaWZpY0FydGljbGVzLnVzZXJJZCA9PT0gZnJpZW5kKSB7XG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh1c2VyU3BlY2lmaWNBcnRpY2xlcy50aXRsZSlcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGFydGljbGVIb2xkZXIgPSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcInBcIixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogYEFSVElDTEU6ICR7dXNlclNwZWNpZmljQXJ0aWNsZXMudGl0bGV9YCxcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgICAgICAgICAgICAgIGlkOiBgYXJ0aWNsZS0ke3VzZXJTcGVjaWZpY0FydGljbGVzLmlkfWAsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGZyaWVuZERvbUJ1aWxkZXIucHVzaChhcnRpY2xlSG9sZGVyKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZnJpZW5kRG9tQnVpbGRlcilcbiAgICAgICAgICAgICAgZnJpZW5kRG9tQnVpbGRlci5mb3JFYWNoKG9iamVjdCA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cob2JqZWN0KTtcbiAgICAgICAgICAgICAgICBmcmllbmRDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KG9iamVjdCkpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUZyaWVuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICAgICAgICAgICAgZGVsZXRlRnJpZW5kLmNsYXNzTGlzdC5hZGQoYGRlbGV0ZS1mcmllbmQtJHtmcmllbmR9YClcbiAgICAgICAgICAgICAgZGVsZXRlRnJpZW5kLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIilcbiAgICAgICAgICAgICAgZGVsZXRlRnJpZW5kLnRleHRDb250ZW50ID0gXCJERUxFVEVcIjtcbiAgICAgICAgICAgICAgZnJpZW5kQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZUZyaWVuZCk7XG4gICAgICAgICAgICAgIGRlbGV0ZUZyaWVuZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGZyaWVuZHNFdmVudHNMaXN0ZW5lci5mcmllbmRzRGVsZXRlRnJpZW5kKClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcblxuICB9LFxuICBpbml0aWFsaXplUG90ZW50aWFsRnJpZW5kcyAoKSB7XG4gICAgbGV0IHVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIik7XG4gICAgbGV0IGN1cnJlbnRVc2VyID0gTnVtYmVyKHVzZXJJZCk7XG4gICAgLy8gY29uc29sZS5sb2coXCJmcmllbmRzIFBhZ2UgdXNlciBpZCBpcy1cIixjdXJyZW50VXNlcik7XG5cbiAgICBjb25zdCBzY3JvbGxUYXJnZXRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZyaWVuZFNjcm9sbENvbnRhaW5lclwiKTtcbiAgICBjb25zdCBmaW5kTmV3RnJpZW5kQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgbGV0IGZyaWVuZHNJSGF2ZSA9IFtdO1xuICAgIGZpbmROZXdGcmllbmRDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmdXR1cmUtZnJpZW5kc1wiKTtcbiAgICBzY3JvbGxUYXJnZXRDb250YWluZXIuYXBwZW5kQ2hpbGQoZmluZE5ld0ZyaWVuZENvbnRhaW5lcik7XG4gICAgY29uc3QgZmluZE5ld0ZyaWVuZFRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcbiAgICBmaW5kTmV3RnJpZW5kQ29udGFpbmVyLmFwcGVuZENoaWxkKGZpbmROZXdGcmllbmRUYWcpO1xuICAgIGZpbmROZXdGcmllbmRUYWcuY2xhc3NMaXN0LmFkZChcImZyaWVuZFRvQmVcIik7XG4gICAgZmluZE5ld0ZyaWVuZFRhZy50ZXh0Q29udGVudCA9IFwiZnJpZW5kIHRvIGJlOlwiXG5cbiAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICBcImRhdGFTZXRcIiA6IFwiZnJpZW5kc1wiLFxuICAgICAgXCJmZXRjaFR5cGVcIiA6IFwiR0VUXCIsXG4gICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiBcIlwiLFxuICAgICAgXCJlbWJlZEl0ZW1cIiA6IFwiP19lbWJlZD1mcmllbmRzXCJcbiAgICB9KVxuICAgIC50aGVuKGZyb21GcmllbmRzID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGZyb21GcmllbmRzKVxuICAgICAgZnJvbUZyaWVuZHMuZm9yRWFjaChmcmllbmREYXRhID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZnJpZW5kRGF0YSlcbiAgICAgICAgaWYgKGZyaWVuZERhdGEudXNlcklkID09PSBjdXJyZW50VXNlcikge1xuICAgICAgICAgIGZyaWVuZHNJSGF2ZS5wdXNoKGZyaWVuZERhdGEub3RoZXJGcmllbmRJZClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC8vIGNvbnNvbGUubG9nKGZyaWVuZHNJSGF2ZSlcblxuICAgICAgICB0aGlzLnNob3dVc2VyUG90ZW50aWFsRnJpZW5kcyhmcmllbmRzSUhhdmUpXG4gICAgfSlcbiAgfSxcbiAgc2hvd1VzZXJQb3RlbnRpYWxGcmllbmRzIChmcmllbmQpIHtcbiAgICBsZXQgdXNlcklkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKTtcbiAgICBsZXQgY3VycmVudFVzZXIgPSBOdW1iZXIodXNlcklkKTtcbiAgICAvLyBjb25zb2xlLmxvZyhmcmllbmQpXG4gICAgbGV0IGFsbFRoZVVzZXJzID0gW11cbiAgICBmcmllbmQucHVzaChjdXJyZW50VXNlcilcbiAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICBcImRhdGFTZXRcIiA6IFwidXNlcnNcIixcbiAgICAgIFwiZmV0Y2hUeXBlXCIgOiBcIkdFVFwiLFxuICAgICAgXCJkYXRhQmFzZU9iamVjdFwiIDogXCJcIixcbiAgICAgIFwiZW1iZWRJdGVtXCIgOiBcIj9fZW1iZWQ9dXNlcnNcIlxuICAgIH0pXG4gICAgLnRoZW4oYWxsVXNlcnMgPT4ge1xuICAgICAgYWxsVXNlcnMuZm9yRWFjaCh1c2VyID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2codXNlci5pZClcbiAgICAgICAgYWxsVGhlVXNlcnMucHVzaCh1c2VyLmlkKVxuICAgICAgfSlcbiAgICAgIGNvbnNvbGUubG9nKFwiZXZlcnlvbmVcIixhbGxUaGVVc2VycywgXCJ1c2VyIGFuZCBmcmllbmRzXCIsZnJpZW5kKVxuICAgICAgbGV0IG5vdEN1cnJlbnRGcmllbmQgPSB0aGlzLmRpZmZlcmVuY2VPZjJBcnJheXMoYWxsVGhlVXNlcnMsIGZyaWVuZClcbiAgICAgIG5vdEN1cnJlbnRGcmllbmQuZm9yRWFjaChub0ZyaWVuZE9mTWluZSA9PiB7XG4gICAgICAgIHRoaXMucHJpbnRQb3RlbnRpYWxGcmllbmRzVG9Ccm93c2VyKG5vRnJpZW5kT2ZNaW5lKVxuXG4gICAgICB9KVxuICAgIH0pXG4gIH0sXG4gICBkaWZmZXJlbmNlT2YyQXJyYXlzIChhcnJheTEsIGFycmF5Mikge1xuICAgIHZhciB0ZW1wID0gW107XG4gICAgYXJyYXkxID0gYXJyYXkxLnRvU3RyaW5nKCkuc3BsaXQoXCIsXCIpLm1hcChOdW1iZXIpO1xuICAgIGFycmF5MiA9IGFycmF5Mi50b1N0cmluZygpLnNwbGl0KFwiLFwiKS5tYXAoTnVtYmVyKTtcbiAgICBcbiAgICBmb3IgKHZhciBpIGluIGFycmF5MSkge1xuICAgIGlmKGFycmF5Mi5pbmRleE9mKGFycmF5MVtpXSkgPT09IC0xKSB0ZW1wLnB1c2goYXJyYXkxW2ldKTtcbiAgICB9XG4gICAgZm9yKGkgaW4gYXJyYXkyKSB7XG4gICAgaWYoYXJyYXkxLmluZGV4T2YoYXJyYXkyW2ldKSA9PT0gLTEpIHRlbXAucHVzaChhcnJheTJbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gdGVtcC5zb3J0KChhLGIpID0+IGEtYik7XG4gICAgfSxcbiAgICBwcmludFBvdGVudGlhbEZyaWVuZHNUb0Jyb3dzZXIgKG5vdEFGcmllbmQpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKG5vdEFGcmllbmQpXG4gICAgICBjb25zdCB0YXJnZXRTZWN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmdXR1cmUtZnJpZW5kc1wiKTtcbiAgICAgIHRhcmdldFNlY3Rpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgZWxlbWVudFR5cGU6IFwiZGl2XCIsXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICBpZDogYHBvdGVudGlhbEZyaWVuZC0ke25vdEFGcmllbmR9YFxuICAgICAgICB9XG4gICAgICB9KSlcblxuICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xuICAgICAgICBcImRhdGFTZXRcIiA6IFwidXNlcnNcIixcbiAgICAgICAgXCJmZXRjaFR5cGVcIiA6IFwiR0VUXCIsXG4gICAgICAgIFwiZGF0YUJhc2VPYmplY3RcIiA6IFwiXCIsXG4gICAgICAgIFwiZW1iZWRJdGVtXCIgOiBcIj9fZW1iZWQ9dXNlcnNcIlxuICAgICAgfSlcbiAgICAgIC50aGVuKHVzZXJzSW5mbyA9PiB7XG4gICAgICAgIHVzZXJzSW5mby5mb3JFYWNoKHVzZXIgPT4ge1xuICAgICAgICAgIGlmICh1c2VyLmlkID09PSBub3RBRnJpZW5kKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyLmlkLCBcImlzIG5vIGZyaWVuZFwiKVxuICAgICAgICAgICAgY29uc3QgcG90ZW50aWFsRnJpZW5kQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHBvdGVudGlhbEZyaWVuZC0ke25vdEFGcmllbmR9YClcbiAgICAgICAgICAgIHBvdGVudGlhbEZyaWVuZENvbnRhaW5lci5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJoMlwiLFxuICAgICAgICAgICAgICBjb250ZW50OiB1c2VyLnVzZXJOYW1lLFxuICAgICAgICAgICAgICBjc3NDbGFzczogYHBvdGVudGlhbC1mcmllbmQtJHt1c2VyLmlkfWBcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgcG90ZW50aWFsRnJpZW5kQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICBjb250ZW50OiBcIkFkZCBGcmllbmRcIixcbiAgICAgICAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgICAgICAgIGlkOiBgYWRkLWZyaWVuZC1idXR0b24tJHt1c2VyLmlkfWAsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICBjbGFzczogXCJhZGQtZnJpZW5kLWJ1dHRvblwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgY29uc3QgZm9yQWRkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGFkZC1mcmllbmQtYnV0dG9uLSR7dXNlci5pZH1gKTtcbiAgICAgICAgICAgIGZvckFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICBmcmllbmRzRXZlbnRzTGlzdGVuZXIuZnJpZW5kc0FkZEZyaWVuZCgpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICAvLyBjb25zb2xlLmxvZyhub3RBRnJpZW5kKVxuICAgIH0sXG4gICAgZnJpZW5kU29ydEZyb21NZXNzYWdlc1NlY3Rpb24gKGFycmF5T2ZGcmllbmRzLCBmcmllbmRUb0FkZCwgZnJpZW5kVG9BZGROYW1lKSB7XG4gICAgICBsZXQgdXNlcklkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyk7XG4gICAgICBsZXQgY3VycmVudFVzZXIgPSBOdW1iZXIodXNlcklkKTtcbiAgICAgIGFycmF5T2ZGcmllbmRzLnB1c2goY3VycmVudFVzZXIpXG4gICAgICBsZXQgYXJyYXlPZlVzZXJzID0gW11cbiAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcbiAgICAgICAgXCJkYXRhU2V0XCIgOiBcInVzZXJzXCIsXG4gICAgICAgIFwiZmV0Y2hUeXBlXCIgOiBcIkdFVFwiLFxuICAgICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiBcIlwiLFxuICAgICAgICBcImVtYmVkSXRlbVwiIDogXCI/X2VtYmVkPWV2ZW50c1wifSlcbiAgICAgICAgLnRoZW4odXNlcnMgPT4ge1xuICAgICAgICAgIHVzZXJzLmZvckVhY2godXNlciA9PiB7XG4gICAgICAgICAgICBhcnJheU9mVXNlcnMucHVzaCh1c2VyLmlkKVxuICAgICAgICAgIH0pXG4gICAgICAgICAgbGV0IG5vdEZyaWVuZHNMaXN0ID0gdGhpcy5jb21wYXJlTWVzc2FnZUZyaWVuZEFycmF5cyhhcnJheU9mVXNlcnMsIGFycmF5T2ZGcmllbmRzKVxuICAgICAgICAgIHRoaXMubWVzc2VuZ2VyQWRkZnJpZW5kRmluYWxlKG5vdEZyaWVuZHNMaXN0LCBmcmllbmRUb0FkZCwgZnJpZW5kVG9BZGROYW1lKVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgY29tcGFyZU1lc3NhZ2VGcmllbmRBcnJheXMgKGFycmF5MSwgYXJyYXkyKSB7XG4gICAgICB2YXIgdGVtcCA9IFtdO1xuICAgICAgYXJyYXkxID0gYXJyYXkxLnRvU3RyaW5nKCkuc3BsaXQoJywnKS5tYXAoTnVtYmVyKTtcbiAgICAgIGFycmF5MiA9IGFycmF5Mi50b1N0cmluZygpLnNwbGl0KCcsJykubWFwKE51bWJlcik7XG5cbiAgICAgIGZvciAodmFyIGkgaW4gYXJyYXkxKSB7XG4gICAgICBpZihhcnJheTIuaW5kZXhPZihhcnJheTFbaV0pID09PSAtMSkgdGVtcC5wdXNoKGFycmF5MVtpXSk7XG4gICAgICB9XG4gICAgICBmb3IoaSBpbiBhcnJheTIpIHtcbiAgICAgIGlmKGFycmF5MS5pbmRleE9mKGFycmF5MltpXSkgPT09IC0xKSB0ZW1wLnB1c2goYXJyYXkyW2ldKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0ZW1wLnNvcnQoKGEsYikgPT4gYS1iKTtcbiAgICB9LFxuICAgIG1lc3NlbmdlckFkZGZyaWVuZEZpbmFsZSAobm90ZnJpZW5kcywgd2FudGVkRnJpZW5kLCBmcmllbmRUb0FkZE5hbWUpIHtcbiAgICAgIGNvbnNvbGUubG9nKG5vdGZyaWVuZHMsIE51bWJlcih3YW50ZWRGcmllbmQpKVxuICAgICAgY29uc3QgZmluYWxGcmllbmQgPSBub3RmcmllbmRzLmZpbHRlcihmcmllbmRzVGhhdEFyZW50ID0+IGZyaWVuZHNUaGF0QXJlbnQgPT09IE51bWJlcih3YW50ZWRGcmllbmQpKVxuICAgICAgLy8gY29uc29sZS5sb2coZmluYWxGcmllbmRbMF0sIE51bWJlcih3YW50ZWRGcmllbmQpKVxuICAgICAgaWYgKGZpbmFsRnJpZW5kWzBdID09PSBOdW1iZXIod2FudGVkRnJpZW5kKSkge1xuICAgICAgICBpZiAoZnJpZW5kVG9BZGROYW1lID09PSBcIm1vZGFsXCIpIHtcbiAgICAgICAgICBmcmllbmRzRXZlbnRzTGlzdGVuZXIuc2VhcmNoQmFyQWRkRnJpZW5kVG9Kc29uKGZpbmFsRnJpZW5kKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubW9kYWxRdWVzdGlvbmFpcmVPZkZyaWVuZHNoaXBWYWxpZGl0eSh3YW50ZWRGcmllbmQsZnJpZW5kVG9BZGROYW1lKVxuICAgICAgICB9Ly8gYWxlcnQoYFlvdSd2ZSBhZGRlZCBhIGZlbGxvdyBOb21hZCAke2ZyaWVuZFRvQWRkTmFtZX0geW91ciBmcmllbmQgbGlzdGApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydChcIlVoLi4uLiBZb3UgY2FuJ3QgZnJpZW5kIHRoZXJlIChpdCdzIHlvdSBvciBzb21lb25lIHdobydzIGFscmVhZHkgYSBmcmllbmQpLlwiKVxuICAgICAgfVxuICAgIH0sXG4gICAgbW9kYWxRdWVzdGlvbmFpcmVPZkZyaWVuZHNoaXBWYWxpZGl0eSAod2FudGVkRnJpZW5kLCBmcmllbmRUb0FkZE5hbWUpIHtcblxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdXRwdXRcIikuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgZWxlbWVudFR5cGU6IFwic2VjdGlvblwiLFxuICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgaWQ6IFwibW9kYWwtY29udGFpbmVyXCJcbiAgICAgICAgfVxuICAgICAgfSkpXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsLWNvbnRhaW5lclwiKS5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICBlbGVtZW50VHlwZTogXCJkaXZcIixcbiAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgIGlkOiBcImZyaWVuZHNfX2JhY2tkcm9wXCJcbiAgICAgICAgfVxuICAgICAgfSkpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC1jb250YWluZXJcIikuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgZWxlbWVudFR5cGU6IFwiZGl2XCIsXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICBpZDogXCJmcmllbmRzX19tb2RhbFwiXG4gICAgICAgIH1cbiAgICAgIH0pKVxuICAgICAgY29uc3QgbW9kYWxQYXJlbnRUYXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZyaWVuZHNfX21vZGFsXCIpO1xuICAgICAgbW9kYWxQYXJlbnRUYXJnZXQuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgZWxlbWVudFR5cGU6IFwiaDFcIixcbiAgICAgICAgY29udGVudDogYFlvdSBzdXJlIHlvdSB3YW50ICR7ZnJpZW5kVG9BZGROYW1lfSBhcyBhIGZyaWVuZD9gLFxuICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgaWQ6IFwiZnJpZW5kc19fY29udGVudFwiXG4gICAgICAgIH1cbiAgICAgIH0pKVxuICAgICAgbW9kYWxQYXJlbnRUYXJnZXQuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgZWxlbWVudFR5cGU6IFwicFwiLFxuICAgICAgICBjb250ZW50OiBcIkkgbWVhbiByZWFsbHkuLi4uXCIsXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICBocmVmOiBcIiNcIixcbiAgICAgICAgICBpZDogXCJmcmllbmRzX19jbG9zZVwiXG4gICAgICAgIH1cbiAgICAgIH0pKVxuICAgICAgbW9kYWxQYXJlbnRUYXJnZXQuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgZWxlbWVudFR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgIGNvbnRlbnQ6IFwiRG9uJ3QgRnJpZW5kXCIsXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICBpZDogXCJkb250RnJpZW5kXCIsXG4gICAgICAgICAgdHlwZTogXCJidXR0b25cIlxuICAgICAgICB9XG4gICAgICB9KSlcbiAgICAgIG1vZGFsUGFyZW50VGFyZ2V0LmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImJ1dHRvblwiLFxuICAgICAgICBjb250ZW50OiBgWWVzLCBtYWtlICR7ZnJpZW5kVG9BZGROYW1lfSBhIEZyaWVuZGAsXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICBpZDogXCJmcmllbmRJdFVwXCIsXG4gICAgICAgICAgbmFtZTogd2FudGVkRnJpZW5kLFxuICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCJcbiAgICAgICAgfVxuICAgICAgfSkpXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRvbnRGcmllbmRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtmcmllbmRzRXZlbnRzTGlzdGVuZXIuY2xvc2VNZXNzYWdlTW9kYWwoKVxuICAgICAgfSlcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnJpZW5kSXRVcFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBmcmllbmRzRXZlbnRzTGlzdGVuZXIuY2xvc2VNZXNzYWdlTW9kYWwoKVxuICAgICAgfSlcbiAgICAgIHRoaXMub3BlbkZyaWVuZE1vZGFsKClcbiAgICB9LFxuICAgIG9wZW5GcmllbmRNb2RhbCAoKSB7XG4gICAgICBsZXQgYmFja2Ryb3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZyaWVuZHNfX2JhY2tkcm9wXCIpO1xuICAgICAgbGV0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmcmllbmRzX19tb2RhbFwiKTtcbiAgICAgIGJhY2tkcm9wLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH0sXG4gICAgYnVpbGRGcmllbmRTZWFyY2hCYXIgKCkge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdXRwdXRcIikuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgZWxlbWVudFR5cGU6IFwiZGl2XCIsXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICBpZDogXCJmcmllbmQtc2VhcmNoLWJveFwiXG4gICAgICAgIH1cbiAgICAgIH0pKVxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmcmllbmQtc2VhcmNoLWJveFwiKS5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICBlbGVtZW50VHlwZTogXCJpbnB1dFwiLFxuICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgaWQ6IFwiZnJpZW5kLXNlYXJjaC1pbnB1dFwiLFxuICAgICAgICAgIGNsYXNzOiBcInNlYXJjaC10eHRcIixcbiAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlNlYXJjaCBGb3IgRnJpZW5kc1wiXG4gICAgICAgIH1cbiAgICAgIH0pKVxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmcmllbmQtc2VhcmNoLWJveFwiKS5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICBlbGVtZW50VHlwZTogXCJhXCIsXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICBjbGFzczogXCJmcmllbmQtc2VhcmNoLWJ0blwiLFxuICAgICAgICAgIGhyZWY6IFwiI1wiLFxuICAgICAgICAgIGlkOiBcImZyaWVuZC1pY29uLWFuY2hvclwiXG4gICAgICAgIH1cbiAgICAgIH0pKVxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmcmllbmQtaWNvbi1hbmNob3JcIikuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgZWxlbWVudFR5cGU6IFwiaVwiLFxuICAgICAgICBjc3NDbGFzczogXCJmYXNcIlxuICAgICAgfSkpXG4gICAgICBsZXQgc2VhcmNoSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmFzXCIpO1xuICAgICAgc2VhcmNoSWNvbi5jbGFzc0xpc3QuYWRkKFwiZmEtc2VhcmNoXCIpO1xuXG4gICAgICBjb25zdCB1c2Vyc1NlYXJjaEZyaWVuZElucHV0RW50ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZyaWVuZC1zZWFyY2gtaW5wdXRcIik7XG4gICAgICB1c2Vyc1NlYXJjaEZyaWVuZElucHV0RW50ZXIuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIGtleVByZXNzRXZlbnQgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudC5rZXkpXG4gICAgICAgIGlmIChrZXlQcmVzc0V2ZW50LmNoYXJDb2RlID09PSAxMykge1xuICAgICAgICAgIGxldCB1c2VySW5wdXRFbnRlciA9IGtleVByZXNzRXZlbnQudGFyZ2V0LnZhbHVlO1xuXG4gICAgICAgICAgZnJpZW5kc0V2ZW50c0xpc3RlbmVyLnNlYXJjaElucHV0TWFnaWModXNlcklucHV0RW50ZXIpO1xuICAgICAgICAgIHVzZXJzU2VhcmNoRnJpZW5kSW5wdXRFbnRlci52YWx1ZSA9IFwiXCI7XG5cbiAgICAgICAgfVxuICAgICAgfSlcblxuXG4gICAgICBjb25zdCB1c2Vyc1NlYXJjaEZyaWVuZElucHV0Q2xpY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZyaWVuZC1pY29uLWFuY2hvclwiKTtcbiAgICAgIHVzZXJzU2VhcmNoRnJpZW5kSW5wdXRDbGljay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBsZXQgdXNlcklucHV0Q2xpY2sgPSB1c2Vyc1NlYXJjaEZyaWVuZElucHV0RW50ZXIudmFsdWVcbiAgICAgICAgZnJpZW5kc0V2ZW50c0xpc3RlbmVyLnNlYXJjaElucHV0TWFnaWModXNlcklucHV0Q2xpY2spO1xuICAgICAgICB1c2Vyc1NlYXJjaEZyaWVuZElucHV0RW50ZXIudmFsdWUgPSBcIlwiO1xuXG4gICAgICB9KVxuICAgIH0sXG4gICAgc2VhcmNoUmVzdWx0RGlzcGxheWVkIChmcmllbmRTZWFyY2hSZXN1bHREaXNwbGF5ZWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwieW9cIilcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3V0cHV0XCIpLmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgIGVsZW1lbnRUeXBlOiBcInNlY3Rpb25cIixcbiAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgIGlkOiBcIm1vZGFsLWNvbnRhaW5lclwiXG4gICAgICAgIH1cbiAgICAgIH0pKVxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC1jb250YWluZXJcIikuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgZWxlbWVudFR5cGU6IFwiZGl2XCIsXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICBpZDogXCJmcmllbmRzX19iYWNrZHJvcFwiXG4gICAgICAgIH1cbiAgICAgIH0pKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtY29udGFpbmVyXCIpLmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImRpdlwiLFxuICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgaWQ6IFwiZnJpZW5kc19fbW9kYWxcIlxuICAgICAgICB9XG4gICAgICB9KSlcbiAgICAgIGNvbnN0IG1vZGFsUGFyZW50VGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmcmllbmRzX19tb2RhbFwiKTtcbiAgICAgIG1vZGFsUGFyZW50VGFyZ2V0LmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImgxXCIsXG4gICAgICAgIGNvbnRlbnQ6IGBXb3VsZCB5b3UgbGlrZSB0byBiZSBmcmllbmRzIHdpdGggJHtmcmllbmRTZWFyY2hSZXN1bHREaXNwbGF5ZWQudXNlck5hbWV9P2AsXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICBpZDogXCJmcmllbmRzX19jb250ZW50XCJcbiAgICAgICAgfVxuICAgICAgfSkpXG4gICAgICBtb2RhbFBhcmVudFRhcmdldC5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICBlbGVtZW50VHlwZTogXCJwXCIsXG4gICAgICAgIGNvbnRlbnQ6IGBJIG1lYW4gJHtmcmllbmRTZWFyY2hSZXN1bHREaXNwbGF5ZWQudXNlck5hbWV9IGlzIHByZXR0eSBjb29sLi4uYCxcbiAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgIGhyZWY6IFwiI1wiLFxuICAgICAgICAgIGlkOiBcImZyaWVuZHNfX2Nsb3NlXCJcbiAgICAgICAgfVxuICAgICAgfSkpXG4gICAgICBtb2RhbFBhcmVudFRhcmdldC5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICBlbGVtZW50VHlwZTogXCJidXR0b25cIixcbiAgICAgICAgY29udGVudDogXCJEb24ndCBGcmllbmRcIixcbiAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgIGlkOiBcImRvbnRGcmllbmRcIixcbiAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiXG4gICAgICAgIH1cbiAgICAgIH0pKVxuICAgICAgbW9kYWxQYXJlbnRUYXJnZXQuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgZWxlbWVudFR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgIGNvbnRlbnQ6IGBZZXMsIG1ha2UgJHtmcmllbmRTZWFyY2hSZXN1bHREaXNwbGF5ZWQudXNlck5hbWV9IGEgRnJpZW5kYCxcbiAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgIGlkOiBcImZyaWVuZEl0VXAtc2VhcmNoTW9kYWxcIixcbiAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiXG4gICAgICAgIH1cbiAgICAgIH0pKVxuXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRvbnRGcmllbmRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtmcmllbmRzRXZlbnRzTGlzdGVuZXIuY2xvc2VNZXNzYWdlTW9kYWwoKVxuICAgICAgfSlcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnJpZW5kSXRVcC1zZWFyY2hNb2RhbFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBmcmllbmRzRXZlbnRzTGlzdGVuZXIuc2VhcmNoQmFyRnJpZW5kaW5nKGZyaWVuZFNlYXJjaFJlc3VsdERpc3BsYXllZC5pZClcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMub3BlbkZyaWVuZE1vZGFsKClcbiAgICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnJpZW5kc1xuXG4vLyBjb25zdCB0ZXN0ZXIgPSBbXG4vLyAgIHtcbi8vICAgICBlbGVtZW50VHlwZTogXCJoMlwiLFxuLy8gICAgIGNvbnRlbnQ6IFwiamFrZSBiYW5ub25cIlxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgZWxlbWVudFR5cGU6IFwicFwiLFxuLy8gICAgIGNvbnRlbnQ6IFwiUG9vbCBQYXJ0eSAzcG1cIlxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgZWxlbWVudFR5cGU6IFwicFwiLFxuLy8gICAgIGNvbnRlbnQ6IFwiY2hlY2sgb3V0IHRoaXMgbmV3cyBhcnRpY2xlXCJcbi8vICAgfVxuLy8gXSIsImltcG9ydCBmcmllbmRzIGZyb20gXCIuL2ZyaWVuZHNcIlxuaW1wb3J0IG1lc3NhZ2VzIGZyb20gXCIuL21lc3NhZ2VzXCJcbmltcG9ydCBub21hZERhdGEgZnJvbSBcIi4vbm9tYWREYXRhXCI7XG5cbmNvbnN0IGZyaWVuZHNFdmVudHNMaXN0ZW5lciA9IHtcbiAgZnJpZW5kc0RlbGV0ZUZyaWVuZCAoKSB7XG4gICAgY29uc3QgZnJpZW5kVG9EZWxldGUgPSAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC52YWx1ZSkuc3BsaXQoXCItXCIpWzJdO1xuICAgIGxldCB1c2VySWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpO1xuICAgIGxldCBjdXJyZW50VXNlciA9IHVzZXJJZDtcbiAgICBjb25zb2xlLmxvZyhmcmllbmRUb0RlbGV0ZSwgY3VycmVudFVzZXIpO1xuICAgIGxldCBmaW5hbE51bWJlclNlbmRGb3JEZWxldGUgPSAwXG5cbiAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICBcImRhdGFTZXRcIiA6IFwiZnJpZW5kc1wiLFxuICAgICAgXCJmZXRjaFR5cGVcIiA6IFwiR0VUXCIsXG4gICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiBcIlwiLFxuICAgICAgXCJlbWJlZEl0ZW1cIiA6IFwiP19lbWJlZD1mcmllbmRzXCJcbiAgICB9KVxuICAgIC50aGVuKGRlc3Ryb3lGcmllbmRzSGVhcnQgPT4ge1xuICAgICAgZGVzdHJveUZyaWVuZHNIZWFydC5mb3JFYWNoKGdvb2RieWVGcmllbmQgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhnb29kYnllRnJpZW5kLnVzZXJJZCwgTnVtYmVyKGN1cnJlbnRVc2VyKSlcbiAgICAgICAgaWYgKGdvb2RieWVGcmllbmQub3RoZXJGcmllbmRJZCA9PT0gTnVtYmVyKGZyaWVuZFRvRGVsZXRlKSAmJiBnb29kYnllRnJpZW5kLnVzZXJJZCA9PT0gTnVtYmVyKGN1cnJlbnRVc2VyKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQZWFjZU91dFwiLGdvb2RieWVGcmllbmQuaWQpO1xuICAgICAgICAgICAgZmluYWxOdW1iZXJTZW5kRm9yRGVsZXRlID0gZ29vZGJ5ZUZyaWVuZC5pZDtcblxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgbGV0IGdvb2RCeWVTZWFyY2hSZXN1bHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGZyaWVuZC0ke2ZyaWVuZFRvRGVsZXRlfWApO1xuICAgICAgZ29vZEJ5ZVNlYXJjaFJlc3VsdHMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChnb29kQnllU2VhcmNoUmVzdWx0cyk7XG5cbiAgICAgIGNvbnNvbGUubG9nKGZpbmFsTnVtYmVyU2VuZEZvckRlbGV0ZSlcbiAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcbiAgICAgICAgXCJkZWxldGVJZFwiIDogZmluYWxOdW1iZXJTZW5kRm9yRGVsZXRlLFxuICAgICAgICBcImRhdGFTZXRcIiA6IFwiZnJpZW5kc1wiLFxuICAgICAgICBcImZldGNoVHlwZVwiIDogXCJERUxFVEVcIixcbiAgICAgICAgXCJkYXRhQmFzZU9iamVjdFwiIDoge1xuICAgICAgICAgIFwidXNlcklkXCI6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIilcbiAgICAgICAgfVxuICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICQoXCIjb3V0cHV0XCIpLmVtcHR5KCk7XG4gICAgICAgIGZyaWVuZHMuZGVmaW5lQ3VycmVudFVzZXJzRnJpZW5kcygpO1xuICAgICAgICBmcmllbmRzLmluaXRpYWxpemVQb3RlbnRpYWxGcmllbmRzKCk7XG4gICAgICB9KVxuICAgIH0pXG5cbiAgfSxcbiAgZnJpZW5kc0FkZEZyaWVuZCAoKSB7XG4gICAgbGV0IHVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIik7XG4gICAgbGV0IGN1cnJlbnRVc2VyID0gTnVtYmVyKHVzZXJJZCk7XG5cblxuICAgIGNvbnN0IGZyaWVuZFRvQmVBZGRlZCA9IChldmVudC50YXJnZXQuaWQpLnNwbGl0KFwiLVwiKVszXTtcbiAgICBjb25zb2xlLmxvZyhgdXNlciR7Y3VycmVudFVzZXJ9YCxgQWRkaW5nIEZyaWVuZCR7ZnJpZW5kVG9CZUFkZGVkfWApXG5cbiAgICBsZXQgZ29vZEJ5ZU5vbkZyaWVuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwb3RlbnRpYWxGcmllbmQtJHtmcmllbmRUb0JlQWRkZWR9YCk7XG4gICAgZ29vZEJ5ZU5vbkZyaWVuZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGdvb2RCeWVOb25GcmllbmQpO1xuICAgIC8vIGFsZXJ0KGAke2V2ZW50LnRhcmdldC5wcmV2aW91c1NpYmxpbmcuaW5uZXJUZXh0fSBpcyBub3cgeW91ciBmcmllbmQhYCk7XG5cbiAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICBcImRhdGFTZXRcIiA6IFwiZnJpZW5kc1wiLFxuICAgICAgXCJmZXRjaFR5cGVcIiA6IFwiUE9TVFwiLFxuICAgICAgXCJkYXRhQmFzZU9iamVjdFwiIDoge1xuICAgICAgICBcInVzZXJJZFwiOiBjdXJyZW50VXNlcixcbiAgICAgICAgXCJvdGhlckZyaWVuZElkXCI6IE51bWJlcihmcmllbmRUb0JlQWRkZWQpLFxuICAgICAgfVxuICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgJChcIiNvdXRwdXRcIikuZW1wdHkoKTtcbiAgICAgIGZyaWVuZHMuZGVmaW5lQ3VycmVudFVzZXJzRnJpZW5kcygpO1xuICAgICAgZnJpZW5kcy5pbml0aWFsaXplUG90ZW50aWFsRnJpZW5kcygpO1xuICAgIH0pXG4gIH0sXG4gIHNoaXogKCkge1xuICAgIGlmIChldmVudC50YXJnZXQuYXR0cmlidXRlcy5uYW1lLnZhbHVlID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBjb25zb2xlLmxvZyhcInNoemliYWxsXCIpXG4gICAgfVxuICAgIGNvbnN0IGZyaWVuZFRvQmVBZGRlZCA9IGV2ZW50LnRhcmdldC5hdHRyaWJ1dGVzLm5hbWUudmFsdWU7XG4gICAgY29uc3QgZnJpZW5kVG9CZUFkZGVkSGFzQU5hbWUgPSBldmVudC50YXJnZXQudGV4dENvbnRlbnQuc3BsaXQoXCI6XCIpWzBdXG4gICAgbGV0IGZyaWVuZHNJSGF2ZSA9IFtdXG4gICAgbGV0IHVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xuICAgIGxldCBjdXJyZW50VXNlciA9IE51bWJlcih1c2VySWQpO1xuICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcbiAgICAgIFwiZGF0YVNldFwiIDogXCJmcmllbmRzXCIsXG4gICAgICBcImZldGNoVHlwZVwiIDogXCJHRVRcIixcbiAgICAgIFwiZGF0YUJhc2VPYmplY3RcIiA6IFwiXCIsXG4gICAgICBcImVtYmVkSXRlbVwiIDogXCI/X2VtYmVkPWZyaWVuZHNcIlxuICAgIH0pXG4gICAgLnRoZW4oZnJvbUZyaWVuZHMgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coZnJvbUZyaWVuZHMpXG4gICAgICBmcm9tRnJpZW5kcy5mb3JFYWNoKGZyaWVuZERhdGEgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhmcmllbmREYXRhKVxuICAgICAgICBpZiAoZnJpZW5kRGF0YS51c2VySWQgPT09IGN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgZnJpZW5kc0lIYXZlLnB1c2goZnJpZW5kRGF0YS5vdGhlckZyaWVuZElkKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLy8gY29uc29sZS5sb2coZnJpZW5kc0lIYXZlKVxuICAgICAgZnJpZW5kcy5mcmllbmRTb3J0RnJvbU1lc3NhZ2VzU2VjdGlvbihmcmllbmRzSUhhdmUsIGZyaWVuZFRvQmVBZGRlZCwgZnJpZW5kVG9CZUFkZGVkSGFzQU5hbWUpXG4gICAgfSlcbiAgfSxcbiAgY2xvc2VNZXNzYWdlTW9kYWwoKSB7XG4gICAgbGV0IHVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xuICAgIGxldCBjdXJyZW50VXNlciA9IE51bWJlcih1c2VySWQpO1xuXG4gICAgaWYgKGV2ZW50LnRhcmdldC5pZCA9PT0gXCJkb250RnJpZW5kXCIpIHtcbiAgICAgIGxldCBnb29kQnllU2VhcmNoUmVzdWx0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtY29udGFpbmVyXCIpO1xuICAgICAgZ29vZEJ5ZVNlYXJjaFJlc3VsdHMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChnb29kQnllU2VhcmNoUmVzdWx0cyk7XG4gICAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuaWQgPT09IFwiZnJpZW5kSXRVcFwiKSB7XG4gICAgICBsZXQgZ29vZEJ5ZVNlYXJjaFJlc3VsdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsLWNvbnRhaW5lclwiKTtcbiAgICAgIGdvb2RCeWVTZWFyY2hSZXN1bHRzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZ29vZEJ5ZVNlYXJjaFJlc3VsdHMpO1xuICAgICAgbGV0IGZyaWVuZFRvYmUgPSBldmVudC50YXJnZXQuYXR0cmlidXRlcy5uYW1lLnZhbHVlO1xuICAgICAgY29uc29sZS5sb2coZnJpZW5kVG9iZSlcbiAgICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xuICAgICAgICAgIFwiZGF0YVNldFwiIDogXCJmcmllbmRzXCIsXG4gICAgICAgICAgXCJmZXRjaFR5cGVcIiA6IFwiUE9TVFwiLFxuICAgICAgICAgIFwiZGF0YUJhc2VPYmplY3RcIiA6IHtcbiAgICAgICAgICAgIFwidXNlcklkXCI6IGN1cnJlbnRVc2VyLFxuICAgICAgICAgICAgXCJvdGhlckZyaWVuZElkXCI6IE51bWJlcihmcmllbmRUb2JlKSxcbiAgICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgfVxuICB9LFxuICBzZWFyY2hJbnB1dE1hZ2ljICh1c2VySW5wdXQpIHtcbiAgICBsZXQgdXNlcklkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyk7XG4gICAgbGV0IGN1cnJlbnRVc2VyID0gTnVtYmVyKHVzZXJJZCk7XG4gICAgLy8gY29uc29sZS5sb2codXNlcklucHV0KVxuICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcbiAgICAgIFwiZGF0YVNldFwiIDogXCJ1c2Vyc1wiLFxuICAgICAgXCJmZXRjaFR5cGVcIiA6IFwiR0VUXCIsXG4gICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiBcIlwiLFxuICAgICAgXCJlbWJlZEl0ZW1cIiA6IFwiP19lbWJlZD11c2Vyc1wiXG4gICAgfSlcbiAgICAudGhlbih1c2VycyA9PiB7XG4gICAgICBjb25zdCBmb3VuZFVzZXJzID0gdXNlcnMuZmluZCh1c2VyID0+IHVzZXIudXNlck5hbWUuaW5jbHVkZXModXNlcklucHV0KSk7XG4gICAgICBjb25zb2xlLmxvZyhmb3VuZFVzZXJzLmlkLCBjdXJyZW50VXNlcilcbiAgICAgIGlmIChmb3VuZFVzZXJzLmlkID09PSBjdXJyZW50VXNlcikge1xuICAgICAgICBhbGVydChcIkNhbid0IGZyaWVuZCB5b3Vyc2VsZlwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZyaWVuZHMuc2VhcmNoUmVzdWx0RGlzcGxheWVkKGZvdW5kVXNlcnMpO1xuICAgICAgfVxuICAgIH0pXG4gIH0sXG4gIHNlYXJjaEJhckZyaWVuZGluZyAoZnJpZW5kVG9CZUZyb21TZWFyY2hJZCkge1xuICAgIGNvbnN0IGRlZmluZWRBc0Zyb21TZWFyY2hNb2RhbCA9IFwibW9kYWxcIlxuICAgIGxldCBmcmllbmRzSUhhdmUgPSBbXVxuICAgIGxldCB1c2VySWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKTtcbiAgICBsZXQgY3VycmVudFVzZXIgPSBOdW1iZXIodXNlcklkKTtcbiAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICBcImRhdGFTZXRcIiA6IFwiZnJpZW5kc1wiLFxuICAgICAgXCJmZXRjaFR5cGVcIiA6IFwiR0VUXCIsXG4gICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiBcIlwiLFxuICAgICAgXCJlbWJlZEl0ZW1cIiA6IFwiP19lbWJlZD1mcmllbmRzXCJcbiAgICB9KVxuICAgIC50aGVuKGZyb21GcmllbmRzID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGZyb21GcmllbmRzKVxuICAgICAgZnJvbUZyaWVuZHMuZm9yRWFjaChmcmllbmREYXRhID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZnJpZW5kRGF0YSlcbiAgICAgICAgaWYgKGZyaWVuZERhdGEudXNlcklkID09PSBjdXJyZW50VXNlcikge1xuICAgICAgICAgIGZyaWVuZHNJSGF2ZS5wdXNoKGZyaWVuZERhdGEub3RoZXJGcmllbmRJZClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC8vIGNvbnNvbGUubG9nKGZyaWVuZHNJSGF2ZSlcbiAgICAgIGZyaWVuZHMuZnJpZW5kU29ydEZyb21NZXNzYWdlc1NlY3Rpb24oZnJpZW5kc0lIYXZlLCBmcmllbmRUb0JlRnJvbVNlYXJjaElkLCBkZWZpbmVkQXNGcm9tU2VhcmNoTW9kYWwpXG4gICAgfSlcbiAgfSxcbiAgc2VhcmNoQmFyQWRkRnJpZW5kVG9Kc29uIChmcmllbmRUb0JlKSB7XG4gICAgbGV0IHVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xuICAgIGxldCBjdXJyZW50VXNlciA9IE51bWJlcih1c2VySWQpO1xuXG4gICAgbGV0IGdvb2RCeWVTZWFyY2hSZXN1bHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC1jb250YWluZXJcIik7XG4gICAgZ29vZEJ5ZVNlYXJjaFJlc3VsdHMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChnb29kQnllU2VhcmNoUmVzdWx0cyk7XG5cbiAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICBcImRhdGFTZXRcIiA6IFwiZnJpZW5kc1wiLFxuICAgICAgXCJmZXRjaFR5cGVcIiA6IFwiUE9TVFwiLFxuICAgICAgXCJkYXRhQmFzZU9iamVjdFwiIDoge1xuICAgICAgICBcInVzZXJJZFwiOiBjdXJyZW50VXNlcixcbiAgICAgICAgXCJvdGhlckZyaWVuZElkXCI6IE51bWJlcihmcmllbmRUb0JlKSxcbiAgICAgIH1cbiAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmcmllbmRzRXZlbnRzTGlzdGVuZXIiLCJpbXBvcnQgbm9tYWREYXRhIGZyb20gXCIuL25vbWFkRGF0YVwiO1xuaW1wb3J0IGRvbUNvbXBvbmVudHMgZnJvbSBcIi4vZG9tQ29tcG9uZW50c1wiO1xuaW1wb3J0IG1lc3NhZ2VzRXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vbWVzc2FnZXNFdmVudExpc3RlbmVyc1wiO1xuaW1wb3J0IGZyaWVuZHNFdmVudHNMaXN0ZW5lciBmcm9tIFwiLi9mcmllbmRzRXZlbnRzTGlzdGVuZXIuanNcIjtcblxuY29uc3QgbWVzc2FnZXMgPSB7XG5cbiAgICBjcmVhdGVNZXNzYWdlQm9hcmQoKSB7XG4gICAgICAgICQoXCIjb3V0cHV0XCIpLmVtcHR5KClcblxuICAgICAgICBsZXQgb3V0cHV0QXJ0aWNsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3V0cHV0XCIpXG5cbiAgICAgICAgLy9jcmVhdGUgZGlzcGxheSBjb250YWluZXJcbiAgICAgICAgbGV0IG1lc3NhZ2VzQ29udGFpbmVyID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJzZWN0aW9uXCIsXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwibWVzc2FnZXNDb250YWluZXJcIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgaWQgOiBcIm1lc3NhZ2VzQ29udGFpbmVyXCJcbiAgICAgICAgICAgIH19KTtcblxuICAgICAgICAvL2NyZWF0ZSBtZXNzYWdlIGlucHV0IGZpZWxkXG4gICAgICAgIGxldCBtZXNzYWdlSW5wdXQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImlucHV0XCIsXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwibWVzc2FnZUlucHV0XCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgIGlkIDogXCJtZXNzYWdlSW5wdXRcIixcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJFbnRlciBNZXNzYWdlIEhlcmVcIlxuICAgICAgICAgICAgfX0pO1xuXG4gICAgICAgIC8vY3JlYXRlIHN1Ym1pdCBidXR0b24gZm9yIGlucHV0IGZpZWxkXG4gICAgICAgIGxldCBtZXNzYWdlU3VibWl0QnV0dG9uID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJidXR0b25cIixcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJtZXNzYWdlU3VibWl0QnV0dG9uXCIsXG4gICAgICAgICAgICBjb250ZW50IDogXCJTdWJtaXRcIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgaWQgOiBcIm1lc3NhZ2VTdWJtaXRCdXR0b25cIixcbiAgICAgICAgICAgICAgICB0eXBlIDogXCJidXR0b25cIlxuICAgICAgICAgICAgfX0pO1xuXG4gICAgICAgIG1lc3NhZ2VTdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1lc3NhZ2VzRXZlbnRMaXN0ZW5lcnMucG9zdE5ld01lc3NhZ2UsIHtvbmNlOiB0cnVlfSk7XG4gICAgICAgIG1lc3NhZ2VzQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VJbnB1dCk7XG4gICAgICAgIG1lc3NhZ2VzQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VTdWJtaXRCdXR0b24pO1xuICAgICAgICBvdXRwdXRBcnRpY2xlLmFwcGVuZENoaWxkKG1lc3NhZ2VzQ29udGFpbmVyKTtcblxuICAgICAgICAgICAgdGhpcy5nZXRNZXNzYWdlcygpXG4gICAgfSxcblxuICAgIGdldE1lc3NhZ2VzKCkge1xuXG4gICAgICAgIC8vR0VUIGZldGNoICYgLnRoZW4gdG8gYnVpbGQgb2JqZWN0KHMpIGZvciBjcmVhdGVEb21FbGVtZW50KCkgdXNpbmcgX2V4cGFuZCB0byBkaXNwbGF5IFVOOiBtZXNzYWdlXG4gICAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcblxuICAgICAgICAgICAgICAgIGRhdGFTZXQgOiBcIm1lc3NhZ2VzXCIsXG4gICAgICAgICAgICAgICAgZmV0Y2hUeXBlIDogXCJHRVRcIixcbiAgICAgICAgICAgICAgICBlbWJlZEl0ZW0gOiBcIj9fZXhwYW5kPXVzZXJcIlxuXG4gICAgICAgIH0pLnRoZW4obWVzc2FnZXMgPT4ge1xuXG4gICAgICAgICAgICBsZXQgbWVzc2FnZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVzc2FnZXNDb250YWluZXJcIik7XG4gICAgICAgICAgICBsZXQgbWVzc2FnZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZXNzYWdlSW5wdXRcIik7XG5cbiAgICAgICAgICAgIC8vc29ydCBtZXNzYWdlcyBieSB0aW1lU3RhbXBcbiAgICAgICAgICAgIG1lc3NhZ2VzLnNvcnQoZnVuY3Rpb24oYSxiKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoYS50aW1lU3RhbXApIC0gbmV3IERhdGUoYi50aW1lU3RhbXApO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vYnVpbGQgRE9NIENvbXBvbmVudCBmb3IgZWFjaCBtZXNzYWdlIGFuZCBhcHBlbmRcbiAgICAgICAgICAgIG1lc3NhZ2VzLmZvckVhY2gobWVzc2FnZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSlcbiAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZVRleHQgPSBtZXNzYWdlLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgbGV0IHVzZXJOYW1lID0gbWVzc2FnZS51c2VyLnVzZXJOYW1lO1xuICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlSWQgPSBtZXNzYWdlLmlkO1xuICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlVGltZVN0YW1wID0gbWVzc2FnZS50aW1lU3RhbXA7XG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2VVc2VyID0gYCR7bWVzc2FnZS51c2VySWR9YDtcbiAgICAgICAgICAgICAgICBsZXQgbG9nZ2VkSW5Vc2VyID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKTtcblxuICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlRGl2ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcyA6IFwibWVzc2FnZURpdlwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQgOiBgbWVzc2FnZURpdl8ke21lc3NhZ2VJZH1gXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2VFbGVtZW50ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQUREIExJTksgSEVSRVxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwiaDNcIixcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgOiBcIm1lc3NhZ2VVc2VyTmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50IDogYCR7dXNlck5hbWV9OmAsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogYG1lc3NhZ2Uke21lc3NhZ2VJZH1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogcGFyc2VJbnQobWVzc2FnZVVzZXIpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2VFbGVtZW50MiA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJwXCIsXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzIDogXCJtZXNzYWdlVGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50IDogYCR7bWVzc2FnZVRleHR9YCxcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBtZXNzYWdlSWRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2VVc2VyID09PSBsb2dnZWRJblVzZXIpIHtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZUVkaXRCdXR0b24gPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcyA6IFwibWVzc2FnZUVkaXRCdXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgOiBcIkVkaXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGBtZXNzYWdlRWRpdEJ1dHRvbl8ke21lc3NhZ2VJZH1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG1lc3NhZ2VUaW1lU3RhbXAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA6IFwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1lc3NhZ2VzRXZlbnRMaXN0ZW5lcnMuZWRpdE1lc3NhZ2UsIHtvbmNlOiB0cnVlfSlcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZURpdi5hcHBlbmRDaGlsZChtZXNzYWdlRWxlbWVudClcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsZW1lbnQuYXBwZW5kQ2hpbGQobWVzc2FnZUVsZW1lbnQyKVxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRGl2LmFwcGVuZENoaWxkKG1lc3NhZ2VFZGl0QnV0dG9uKVxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlQ29udGFpbmVyLmluc2VydEJlZm9yZShtZXNzYWdlRGl2LCBtZXNzYWdlSW5wdXQpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWxlbWVudC5hcHBlbmRDaGlsZChtZXNzYWdlRWxlbWVudDIpXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VDb250YWluZXIuaW5zZXJ0QmVmb3JlKG1lc3NhZ2VFbGVtZW50LCBtZXNzYWdlSW5wdXQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1lc3NhZ2VFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmcmllbmRzRXZlbnRzTGlzdGVuZXIuc2hpeilcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lc3NhZ2VzO1xuIiwiaW1wb3J0IG5vbWFkRGF0YSBmcm9tIFwiLi9ub21hZERhdGFcIjtcbmltcG9ydCBkb21Db21wb25lbnRzIGZyb20gXCIuL2RvbUNvbXBvbmVudHNcIjtcbmltcG9ydCBtZXNzYWdlcyBmcm9tIFwiLi9tZXNzYWdlc1wiO1xuLy8gaW1wb3J0IGZyaWVuZHNFdmVudHNMaXN0ZW5lciBmcm9tIFwiLi9mcmllbmRzRXZlbnRzTGlzdGVuZXIuanNcIjtcblxuY29uc3QgbWVzc2FnZXNFdmVudExpc3RlbmVycyA9IHtcblxuICAgIHBvc3ROZXdNZXNzYWdlKCkge1xuXG4gICAgICAgIGxldCBtZXNzYWdlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lc3NhZ2VJbnB1dFwiKS52YWx1ZTtcblxuICAgICAgICBsZXQgdGltZVN0YW1wID0gbmV3IERhdGUoKTtcblxuICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG5cbiAgICAgICAgICAgIGRhdGFTZXQgOiBcIm1lc3NhZ2VzXCIsXG4gICAgICAgICAgICBmZXRjaFR5cGUgOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGRhdGFCYXNlT2JqZWN0IDoge1xuICAgICAgICAgICAgICAgIHVzZXJJZCA6IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpKSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlIDogbWVzc2FnZUlucHV0LFxuICAgICAgICAgICAgICAgIHRpbWVTdGFtcCA6IHRpbWVTdGFtcFxuICAgICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKHNoaXQgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coc2hpdClcbiAgICAgICAgICAgICQoXCIjb3V0cHV0XCIpLmVtcHR5KCk7XG4gICAgICAgICAgICBtZXNzYWdlcy5jcmVhdGVNZXNzYWdlQm9hcmQoKTtcbiAgICAgICAgfSlcbiAgICB9LFxuXG4gICAgZWRpdE1lc3NhZ2UoKSB7XG4gICAgICAgIGxldCBudW1iZXIgPSBldmVudC5jdXJyZW50VGFyZ2V0LmlkO1xuICAgICAgICBsZXQgbWVzc2FnZUFycmF5ID0gbnVtYmVyLnNwbGl0KFwiX1wiKTtcbiAgICAgICAgbGV0IG1lc3NhZ2VJZCA9IG1lc3NhZ2VBcnJheVsxXTtcbiAgICAgICAgbGV0IG1lc3NhZ2VUb0VkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHttZXNzYWdlSWR9YCk7XG4gICAgICAgIGxldCBtZXNzYWdlVGV4dCA9IG1lc3NhZ2VUb0VkaXQuaW5uZXJIVE1MO1xuICAgICAgICBsZXQgbWVzc2FnZURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkIChgbWVzc2FnZURpdl8ke21lc3NhZ2VJZH1gKVxuICAgICAgICBsZXQgbWVzc2FnZVRpbWVTdGFtcCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQubmFtZTtcblxuXG4gICAgICAgIGxldCBtZXNzYWdlRWRpdEZvcm0gPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQgKHtcblxuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImZvcm1cIixcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJtZXNzYWdlRWRpdEZvcm1cIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgaWQgOiBcIm1lc3NhZ2VFZGl0Rm9ybVwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBtZXNzYWdlRWRpdEZpZWxkc2V0ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcblxuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImZpZWxkc2V0XCIsXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwibWVzc2FnZUVkaXRGaWVsZHNldFwiLFxuICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICBpZCA6IFwibWVzc2FnZUVkaXRGaWVsZHNldFwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBtZXNzYWdlRWRpdElucHV0ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcblxuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImlucHV0XCIsXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwibWVzc2FnZUVkaXRJbnB1dFwiLFxuICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICBpZCA6IGBtZXNzYWdlRWRpdElucHV0XyR7bWVzc2FnZUlkfWAsXG4gICAgICAgICAgICAgICAgdmFsdWUgOiBgJHttZXNzYWdlVGV4dH1gXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBtZXNzYWdlRWRpdFN1Ym1pdEJ1dHRvbiA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG5cbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJidXR0b25cIixcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJtZXNzYWdlRWRpdFN1Ym1pdEJ1dHRvblwiLFxuICAgICAgICAgICAgY29udGVudCA6IFwiU3VibWl0XCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgIGlkIDogYG1lc3NhZ2VFZGl0U3VibWl0QnV0dG9uXyR7bWVzc2FnZUlkfWAsXG4gICAgICAgICAgICAgICAgbmFtZTogbWVzc2FnZVRpbWVTdGFtcCxcbiAgICAgICAgICAgICAgICB0eXBlIDogXCJidXR0b25cIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgbWVzc2FnZUVkaXRTdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1lc3NhZ2VzRXZlbnRMaXN0ZW5lcnMuaGFuZGxlRWRpdFN1Ym1pdEJ1dHRvbilcbiAgICAgICAgbWVzc2FnZUVkaXRGaWVsZHNldC5hcHBlbmRDaGlsZChtZXNzYWdlRWRpdElucHV0KVxuICAgICAgICBtZXNzYWdlRWRpdEZpZWxkc2V0LmFwcGVuZENoaWxkKG1lc3NhZ2VFZGl0U3VibWl0QnV0dG9uKVxuICAgICAgICBtZXNzYWdlRWRpdEZvcm0uYXBwZW5kQ2hpbGQobWVzc2FnZUVkaXRGaWVsZHNldClcbiAgICAgICAgbWVzc2FnZURpdi5hcHBlbmRDaGlsZChtZXNzYWdlRWRpdEZvcm0pXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cbiAgICB9LFxuXG4gICAgaGFuZGxlRWRpdFN1Ym1pdEJ1dHRvbigpIHtcbiAgICAgICAgbGV0IG51bWJlciA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQ7XG4gICAgICAgIGxldCBtZXNzYWdlQXJyYXkgPSBudW1iZXIuc3BsaXQoXCJfXCIpO1xuICAgICAgICBsZXQgbWVzc2FnZUlkID0gbWVzc2FnZUFycmF5WzFdO1xuICAgICAgICBsZXQgbWVzc2FnZVRpbWVTdGFtcCA9IGAke2V2ZW50LmN1cnJlbnRUYXJnZXQubmFtZX1gO1xuICAgICAgICBsZXQgbWVzc2FnZUVkaXRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBtZXNzYWdlRWRpdElucHV0XyR7bWVzc2FnZUlkfWApO1xuXG4gICAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcblxuICAgICAgICAgICAgcHV0SWQgOiBtZXNzYWdlSWQsXG4gICAgICAgICAgICBkYXRhU2V0IDogXCJtZXNzYWdlc1wiLFxuICAgICAgICAgICAgZmV0Y2hUeXBlIDogXCJQVVRcIixcbiAgICAgICAgICAgIGRhdGFCYXNlT2JqZWN0IDoge1xuICAgICAgICAgICAgICAgIHVzZXJJZCA6IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpKSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBgJHttZXNzYWdlRWRpdElucHV0LnZhbHVlfWAsXG4gICAgICAgICAgICAgICAgdGltZVN0YW1wOiBgJHttZXNzYWdlVGltZVN0YW1wfWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbihzaGl0ID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNoaXQpXG4gICAgICAgICAgICAkKFwiI291dHB1dFwiKS5lbXB0eSgpO1xuICAgICAgICAgICAgbWVzc2FnZXMuY3JlYXRlTWVzc2FnZUJvYXJkKCk7XG4gICAgICAgIH0pXG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgbWVzc2FnZXNFdmVudExpc3RlbmVyczsiLCJpbXBvcnQgbm9tYWREYXRhIGZyb20gXCIuL25vbWFkRGF0YVwiO1xuaW1wb3J0IGRvbUNvbXBvbmVudHMgZnJvbSBcIi4vZG9tQ29tcG9uZW50c1wiO1xuaW1wb3J0IG5ld3NMaXN0ZW5lciBmcm9tIFwiLi9uZXdzTGlzdGVuZXJcIjtcblxuXG5jb25zdCBuZXdzID0ge1xuXG4gICAgZ2V0QVBJTmV3cygpIHtcbiAgICAgICAgLy9jbGVhciB3aGVuIGNhbGxlZC5cbiAgICAgICAgJChcIiNvdXRwdXRcIikuZW1wdHkoKTtcbiAgICAgICAgLy9nZXRBUElOZXdzIHdpbGwgcHVsbCBuZXdzIGZyb20gQVBJIHRoZW4gY2FsbCBjcmVhdGVFbGVtZW50IGFuZCBhcHBlbmQgdG8gb3V0cHV0LlxuICAgICAgICAvL0NyZWF0ZSBhIGhlYWRlciBmb3IgaW5jb21pbmcgbmV3cy5cbiAgICAgICAgbGV0IGFydGljbGVDb3VudGVyID0gMDtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG5ld3NDb250YWluZXIgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiZGl2XCIsXG4gICAgICAgICAgICBjc3NDbGFzczogXCJtYWluVmVpblwiXG4gICAgICAgIH0pXG4gICAgXG4gICAgICAgIGNvbnN0IHRhcmdldFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvdXRwdXRcIik7XG4gICAgXG4gICAgICAgIC8vTmV3IGNvbnRhaW5lciBmb3Igc2Nyb2xsaW5nLlxuICAgICAgICBjb25zdCBuZXdzSGVhZGVyID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImgxXCIsXG4gICAgICAgICAgICBjb250ZW50OiBcIkN1cnJlbnQgTmV3c1wiLFxuICAgICAgICAgICAgY3NzQ2xhc3M6IFwibmV3c0FQSUhlYWRlclwiXG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgICAgIG5ld3NDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3c0hlYWRlcik7XG4gICAgICAgIHRhcmdldFZhbHVlLmFwcGVuZENoaWxkKG5ld3NDb250YWluZXIpO1xuICAgICAgICAvL3B1bGwgdGhlIGRhdGEgZnJvbSB0aGUgYXBpIGFuZCBkaXNwbGF5IGl0IHRvIHRoZSBkb20uXG4gICAgICAgIGxldCBjdXJyZW50QXJ0aWNsZXNEaXYgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImRpdlwiLFxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcImN1cnJlbnRBcnRpY2xlc0RpdlwiLFxuICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICBpZCA6IFwiY3VycmVudEFydGljbGVzRGl2XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGZldGNoKFwiaHR0cHM6Ly9uZXdzYXBpLm9yZy92Mi9ldmVyeXRoaW5nP3E9dmFubGlmZSZmcm9tPTIwMTktMDEtMDUmc29ydEJ5PXB1Ymxpc2hlZEF0Jmxhbmd1YWdlPWVuJmFwaUtleT05ZjVjNTA5ZmU5MDA0NGRjOTVhOGE2OTYzNTczMjg0ZlwiKVxuICAgICAgICAgICAgLnRoZW4obmV3c0l0ZW1zID0+IG5ld3NJdGVtcy5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihkaXNwbGF5RGF0YSA9PiB7XG5cbiAgICAgICAgICAgICAgICBkaXNwbGF5RGF0YS5hcnRpY2xlcy5mb3JFYWNoKGRhdGFHcmFuID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFydFVSTCA9IGRhdGFHcmFuLnVybDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFydFRpdGxlID0gZGF0YUdyYW4udGl0bGU7XG4gICAgICAgICAgICAgICAgICAgIGxldCBhcnREZXNjID0gZGF0YUdyYW4uZGVzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgICAgIGxldCBhcnRJbWFnZSA9IGRhdGFHcmFuLnVybFRvSW1hZ2U7XG4gICAgICAgICAgICAgICAgICAgIC8vY291bnRlciB1c2VkIHRvIGdpdmUgdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRhZ2dpbmcgYW5kIGdyYWJiaW5nLlxuICAgICAgICAgICAgICAgICAgICBhcnRpY2xlQ291bnRlcisrO1xuXG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oYGFydGljbGVfJHthcnRpY2xlQ291bnRlcn1fdGl0bGVgLCBgJHthcnRUaXRsZX1gKTtcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShgYXJ0aWNsZV8ke2FydGljbGVDb3VudGVyfV91cmxgLCBgJHthcnRVUkx9YCk7XG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oYGFydGljbGVfJHthcnRpY2xlQ291bnRlcn1fZGVzY2AsIGAke2FydERlc2N9YCk7XG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oYGFydGljbGVfJHthcnRpY2xlQ291bnRlcn1faW1hZ2VgLCBgJHthcnRJbWFnZX1gKVxuXG4gICAgICAgICAgICAgICAgICAgIC8vYWRkIHNlY3Rpb24gY29udGFpbmVyIGZvciBhbGwgYXJ0aWNsZXMuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld3NBUElBcnRDb250YWluID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImFydGljbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzOiBcIm5ld3NBUElBcnRpY2xlQ29udGFpbmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhdHRyaWJ1dGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBzdHlsZTogXCJoZWlnaHQ6OTV2aDsgb3ZlcmZsb3c6IHNjcm9sbDsgY29sb3I6d2hpdGU7dGV4dC1hbGlnbjpjZW50ZXI7Zm9udC1zaXplOjIwcHg7b3ZlcmZsb3c6YXV0bzsgYm9yZGVyLXJhZGl1czogMTJweDtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXJ0aWNsZUNvbnRhaW5lciA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJzZWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjc3NDbGFzczogYG5ld3NBUElDb250YWluZXJfJHthcnRpY2xlQ291bnRlcn1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiYXBpU2VjdGlvbkdyYWJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogXCJib3JkZXItcmFkaXVzOiAxMnB4O1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIG5ld3NBUElBcnRDb250YWluLmFwcGVuZENoaWxkKGFydGljbGVDb250YWluZXIpXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRBcnRpY2xlc0Rpdi5hcHBlbmRDaGlsZChuZXdzQVBJQXJ0Q29udGFpbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NyZWF0ZSBmaWVsZHNldCBmb3IgYXJ0aWNsZXMgdG8gYmUgYW5kIHRoZW4gYXR0YWNoIHRoZW0gdG8gdGhlIHNlY3Rpb25zIGFib3ZlLlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnRBUElTZWN0aW9uID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogZGF0YUdyYW4udGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3M6IFwiYXBpRGF0YVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGBhcnRpY2xlXyR7YXJ0aWNsZUNvdW50ZXJ9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IFwiY29sb3I6d2hpdGU7dGV4dC1hbGlnbjpjZW50ZXI7Zm9udC1zaXplOjIwcHg7b3ZlcmZsb3c6YXV0bzsgYm9yZGVyLXJhZGl1czogMTJweDtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudEFQSVNlY3Rpb24uYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJpbWdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBkYXRhR3Jhbi51cmxUb0ltYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzOiBgYXBpSW1hZ2VgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGBhcGlJbWFnZV8ke2FydGljbGVDb3VudGVyfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogYCR7ZGF0YUdyYW4udXJsVG9JbWFnZX1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0eWxlOiBcIndpZHRoOiAzMCU7IGhlaWdodDogMTUlOyBib3JkZXItcmFkaXVzOiAxMnB4O1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50QXJ0aWNsZXNEaXYuYXBwZW5kQ2hpbGQocGFyZW50QVBJU2VjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NyZWF0aW5nIGJ1dHRvbiBpbiBvcmRlciB0byBhdHRhY2ggdG8gaW5kaXZpZHVhbCBhcnRpY2xlcy5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2F2ZUFwaUJ1dHRvbiA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJSZW1lbWJlciBUaGlzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3M6IFwiYWxsQnV0dG9uc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogYCR7YXJ0aWNsZUNvdW50ZXJ9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zdHlsZTogXCIgIGJvcmRlcjogMDsgbGluZS1oZWlnaHQ6Mjsgd2lkdGg6OSU7IGJhY2tncm91bmQ6cmdiKDgxLCA3OCwgNzgpOyBjb2xvcjpyZ2IoIDE5MSwgMTYyLCA0NCk7bGluZS1oZWlnaHQ6IDI7IGJvcmRlci1yYWRpdXM6IDEycHg7XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLy9FdmVudGxpc3RlbmVyIHRvIHNlbmQgY3VycmVudCBkYXRhIHRvIHNhdmVmdW5jdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgcGFyZW50QVBJU2VjdGlvbi5hcHBlbmRDaGlsZChzYXZlQXBpQnV0dG9uKTtcbiAgICAgICAgICAgICAgICAgICAgc2F2ZUFwaUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmV3c0xpc3RlbmVyLnNhdmVCdXR0b25MaXN0ZW5lcilcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIG5ld3NDb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudEFydGljbGVzRGl2KVxuICAgICAgICAgICAgICAgIC8vY2FsbHMgdGhlIGNyZWF0b3IgdG8gbWFrZSB0aGUgU0FWRUQgQVJUSUNMRVMgU2VjdGlvblxuICAgICAgICAgICAgICAgIG5ld3Muc2F2ZWROZXdzRWxlbWVudHNDcmVhdG9yKClcbiAgICAgICAgICAgIH0pXG4gICAgfSxcbi8vIG1ldGhvZCBkaXNwbGF5cyBmcmllbmRzIG5ld3MuXG4gICAgZ2V0VXNlckZyaWVuZHNOZXdzKCkge1xuICAgICAgICAvL2NyZWF0ZSBhcnJheSBhbmQgY2FsbCB0byBnZXQgdXNlciBkYXRhLlxuICAgICAgICBjb25zdCBmcmllbmRIb2xkZXIgPSBbXTtcbiAgICAgICAgbGV0IGZyaWVuZHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFydGljbGUxXCIpO1xuICAgICAgICBcbiAgICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xuICAgICAgICAgICAgICAgIGRhdGFTZXQ6IFwidXNlcnNcIixcbiAgICAgICAgICAgICAgICBmZXRjaFR5cGU6IFwiR0VUXCIsXG4gICAgICAgICAgICAgICAgZW1iZWRJdGVtOiBcIj9fZW1iZWQ9ZnJpZW5kc1wiXG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihwYXJzZWRSZXNwb25zZSA9PiB7XG5cbiAgICAgICAgICAgICAgICAvL2ZvciBsb29wIHRvIHJ1biB0aHJvdWdoIGFycmF5IG9mIHVzZXIgaW5mby5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnNlZFJlc3BvbnNlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcGFyc2VkUmVzcG9uc2VbaV07XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHN0YXRlbWVudCB0byBjY21wYXJlIHJlc3BvbnNlIGlkIHRvIHNlc3Npb24gaWQgaW5vcmRlciB0byBzZWUgaWYgdGhlIG5ld3MgYXJ0aWNsZSBpcyB0aGUgdXNlcnMgb3IgZnJpZW5kLlxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuaWQgPT09IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgbm90IHRoZSB1c2VyIHRoZW4gbG9wIHRocm91Z2ggYXJyYXkgYW5kIHB1c2ggaWQncy5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcmVzcG9uc2UuZnJpZW5kcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZyaWVuZHMgPSByZXNwb25zZS5mcmllbmRzW2pdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJpZW5kSG9sZGVyLnB1c2goZnJpZW5kcy5vdGhlckZyaWVuZElkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb25jZSBmcmllbmRob2xkZXIgYXJyYXkgaXMgbG9hZGVkIGxvb3AgdGhyb3VnaCBhZ2FpbiB0byBjb21wYXJlIGFnYWlucyBwdWxsZWQgZGF0YUl0ZW1zIHRoYXQgaGF2ZSBiZWVuIGZldGNoZWQuXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmllbmRIb2xkZXIuZm9yRWFjaChmcmllbmRJZCA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVNldDogXCJuZXdzSXRlbXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hUeXBlOiBcIkdFVFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWJlZEl0ZW06IGA/dXNlcklkPSR7ZnJpZW5kSWR9YFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihwYXJzZWRSZXNwb25zZSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZnJpZW5kc0NvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZFJlc3BvbnNlLmZvckVhY2gocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jYWxsIHRoZSBmdW5jdGlvbiB0aGF0IGJ1aWxkcyBET00gZWxlbWVudCBmb3Igc3RvcnkgYW5kIHBvc3RzIHRvIERPTS4gIEJlIHN1cmUgdGhhdCBmdW5jdGlvbiBpbmNsdWRlcyBkaXNwbGF5aW5nIGEgdXNlck5hbWUgdG8gZGluc3Rpbmd1aXNoIHVzZXIncyBzdG9yaWVzIGZyb20gZnJpZW5kcycgc3Rvcmllcy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFydGljbGVTZWN0aW9uRnJpZW5kID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJzZWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3M6IGBuZXdzQXJ0aWNsZUNvbnRhaW5lci0tJHtyZXNwb25zZS5pZH1gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmcmllbmRzSGVhZGVyID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiaDNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBgJHtyZXNwb25zZS50aXRsZX1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzOiBcIm5ld3NUaXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdzVVJMID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogcmVzcG9uc2UudXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzOiBcIm5ld3NVUkxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IGAke3Jlc3BvbnNlLnVybH1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IFwiYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnRpY2xlU2VjdGlvbkZyaWVuZC5hcHBlbmRDaGlsZChmcmllbmRzSGVhZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFydGljbGVTZWN0aW9uRnJpZW5kLmFwcGVuZENoaWxkKG5ld3NVUkwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJpZW5kc0NvbnRhaW5lci5hcHBlbmRDaGlsZChhcnRpY2xlU2VjdGlvbkZyaWVuZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgIH0sXG5cbiAgICBzYXZlZE5ld3NFbGVtZW50c0NyZWF0b3IoKSB7XG4gICAgICAgIC8vQ3JlYXRlcyB0aGUgaGVhZGVyIGZvciB0aGUgc2F2ZWQgbmV3cyBhcnRpY2xlcy5cbiAgICAgICAgbGV0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5WZWluXCIpXG4gICAgICAgIGNvbnN0IG1haW5TYXZlZENvbnRhaW5lciA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICBlbGVtZW50VHlwZTogXCJhcnRpY2xlXCIsXG4gICAgICAgICAgICBjc3NDbGFzczogXCJhcnRpY2xlMVwiLFxuICAgICAgICAgICAgYXR0cmlidXRlOntcbiAgICAgICAgICAgICAgICBzdHlsZTogXCJib3JkZXItd2lkdGg6IHRoaW5cIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5TYXZlZENvbnRhaW5lcik7XG4gICAgICAgIGNvbnN0IHNhdmVkSGVhZGVyID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImgxXCIsXG4gICAgICAgICAgICBjb250ZW50OiBcIlNhdmVkIE5ld3NcIixcbiAgICAgICAgICAgIGNzc0NsYXNzOiBcInNhdmVkSGVhZGVyXCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGU6IHtcbiAgICAgICAgICAgICAgICBpZDogXCJzYXZlZEhlYWRlclwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBtYWluU2F2ZWRDb250YWluZXIuYXBwZW5kQ2hpbGQoc2F2ZWRIZWFkZXIpO1xuICAgICAgICBjb25zdCBzYXZlUmVmID0gXCJcIjtcblxuICAgICAgICAvL2NyZWF0ZXMgdGhlIG9iamVjdCB0aGF0IGlzIG5lZWRlZCB0byB1c2UgdGhlIGNyZWF0ZURvbUVsZW1lbnQgRmFjdG9yeS5cbiAgICAgICAgbGV0IG5ld3NDcmVhdG9yS2V5ID0ge1xuICAgICAgICAgICAgXCJkYXRhU2V0XCI6IFwibmV3c0l0ZW1zXCIsXG4gICAgICAgICAgICBcImZldGNoVHlwZVwiOiBcIkdFVFwiLFxuICAgICAgICAgICAgXCJlbWJlZEl0ZW1cIjogYD9fZW1iZWQ9JHtzYXZlUmVmfWBcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLy9NYWtlcyB0aGUgY2FsbCB0byB0aGUgZGF0YSBmYWN0b3J5IHRvIGZldGNoL2dldCBkYXRhIHRvIHB1dCBpbiB0aGUgb2JqZWN0LlxuICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YShuZXdzQ3JlYXRvcktleSlcbiAgICAgICAgICAgIC50aGVuKGRiR3JhYnMgPT4ge1xuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZGJHcmFicy5mb3JFYWNoKGRiR3JhYiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlY3Rpb25TYXZlZENvbnRhaW5lciA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJzZWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjc3NDbGFzczogYG5ld3NBcnRpY2xlQ29udGFpbmVyLS0ke2RiR3JhYi5pZH1gXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzYXZlZEhlYWRlciA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJoM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogYCR7ZGJHcmFiLnRpdGxlfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICBjc3NDbGFzczogXCJuZXdzVGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzYXZlZE5ld3NVUkwgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogZGJHcmFiLnVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzOiBcIm5ld3NVUkxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOiBgJHtkYkdyYWIudXJsfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBcImJsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVsQnV0b24gPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIkFESU9TXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjc3NDbGFzczogXCJhbGxCdXR0b25zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGBuZXdzRGVsZXRlQnV0dG9uLS0ke2RiR3JhYi5pZH1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC8vY3JlYXRpbmcgYSBidXR0b24gYW5kIHBvaW50aW5nIGF0IHRoZSBhcnRpY2xlIHRvIGRlbGV0ZS4gQXR0YWNoZWQgZXZlbnQgbGlzdG5lci5cbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgc2VjdGlvblNhdmVkQ29udGFpbmVyLmFwcGVuZENoaWxkKHNhdmVkSGVhZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgc2VjdGlvblNhdmVkQ29udGFpbmVyLmFwcGVuZENoaWxkKHNhdmVkTmV3c1VSTCk7XG4gICAgICAgICAgICAgICAgICAgIHNlY3Rpb25TYXZlZENvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxCdXRvbik7XG4gICAgICAgICAgICAgICAgICAgIGRlbEJ1dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuZXdzTGlzdGVuZXIuZGVsZXRlQnV0dG9uTGlzdGVuZXIpO1xuICAgICAgICAgICAgICAgICAgICBtYWluU2F2ZWRDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VjdGlvblNhdmVkQ29udGFpbmVyKVxuICAgICAgICAgICAgICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5TYXZlZENvbnRhaW5lcilcbiAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgbmV3cy5nZXRVc2VyRnJpZW5kc05ld3MoKTtcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgXG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgbmV3cyIsImltcG9ydCBub21hZERhdGEgZnJvbSBcIi4vbm9tYWREYXRhXCI7XG5pbXBvcnQgZG9tQ29tcG9uZW50cyBmcm9tIFwiLi9kb21Db21wb25lbnRzXCI7XG5pbXBvcnQgbmV3cyBmcm9tIFwiLi9uZXdzXCI7XG5cblxuXG5cbmNvbnN0IG5ld3NMaXN0ZW5lciA9IHtcblxuICAgIHNhdmVCdXR0b25MaXN0ZW5lcigpIHtcbiAgICAgICAgLy9UaGlzIGlzIGZ1bmN0aW9uaW5nIGFuZCB3cml0aW5nIHRvIEpTT04uIE5lZWQgdG8gYXR0YWNoIHRoaXMgdG8gdGhlIHNhdmUgYnV0dG9uLlxuICAgICAgICBjb25zdCBzYXZlSUQgPSBldmVudC50YXJnZXQubmFtZTtcbiAgICAgICAgbGV0IGFydGljbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYXJ0aWNsZV8ke3NhdmVJRH1gKVxuICAgICAgICBsZXQgYXJ0VGl0bGUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGBhcnRpY2xlXyR7c2F2ZUlEfV90aXRsZWApO1xuICAgICAgICBsZXQgYXJ0RGVzY3JpcHRpb24gPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGBhcnRpY2xlXyR7c2F2ZUlEfV9kZXNjYCk7XG4gICAgICAgIGxldCBhcnRpY2xlVVJMID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShgYXJ0aWNsZV8ke3NhdmVJRH1fdXJsYCk7XG5cbiAgICAgICAgXG5cbiAgICAgICAgY29uc3QgbmV3c09iamVjdFBvc3QgPSB7XG4gICAgICAgICAgICBcImRhdGFTZXRcIjogXCJuZXdzSXRlbXNcIixcbiAgICAgICAgICAgIFwiZmV0Y2hUeXBlXCI6IFwiUE9TVFwiLFxuICAgICAgICAgICAgXCJkYXRhQmFzZU9iamVjdFwiOiB7XG4gICAgICAgICAgICAgICAgXCJ1c2VySWRcIjogTnVtYmVyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpKSxcbiAgICAgICAgICAgICAgICBcInVybFwiOiBgJHthcnRpY2xlVVJMfWAsXG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBgJHthcnRUaXRsZX1gLFxuICAgICAgICAgICAgICAgIFwic3lub3BzaXNcIjogYCR7YXJ0RGVzY3JpcHRpb259YFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHNlc3Npb25TdG9yYWdlKVxuICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YShuZXdzT2JqZWN0UG9zdClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24pXG4gICAgICAgICAgICAudGhlbihzaGl0ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzaGl0KVxuICAgICAgICAgICAgICAgICQoXCIjb3V0cHV0XCIpLmVtcHR5KCk7XG4gICAgICAgICAgICAgICAgbmV3cy5nZXRBUElOZXdzKCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KVxuICAgIH0sXG4gICAgZGVsZXRlQnV0dG9uTGlzdGVuZXIoKSB7XG4gICAgICAgIC8vVG8gZGVsZXRlIGZyb20gc2F2ZWQgbmV3cyBhcnRpY2xlcy5cbiAgICAgICAgY29uc3QgZGVsZXRlSUQgPSBldmVudC50YXJnZXQuaWQuc3BsaXQoXCItLVwiKVsxXTtcbiAgICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xuICAgICAgICAgICAgICAgIGRlbGV0ZUlkOiBkZWxldGVJRCxcbiAgICAgICAgICAgICAgICBkYXRhU2V0OiBcIm5ld3NJdGVtc1wiLFxuICAgICAgICAgICAgICAgIGZldGNoVHlwZTogXCJERUxFVEVcIixcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgJChcIi5hcnRpY2xlMVwiKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBuZXdzLnNhdmVkTmV3c0VsZW1lbnRzQ3JlYXRvcigpO1xuICAgICAgICAgICAgfSlcbiAgICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXdzTGlzdGVuZXIiLCJpbXBvcnQgZXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vZXZlbnRMaXN0ZW5lcnNcIjtcbmNvbnN0IG5vbWFkRGF0YSA9IHtcblxuICAgIGNvbm5lY3RUb0RhdGEoZmV0Y2hPYmplY3QpIHtcblxuICAgICAgICBsZXQgZGF0YVNldCA9IGZldGNoT2JqZWN0LmRhdGFTZXQ7XG4gICAgICAgIGxldCBlbWJlZEl0ZW0gPSBmZXRjaE9iamVjdC5lbWJlZEl0ZW07XG4gICAgICAgIGxldCBmZXRjaFR5cGUgPSBmZXRjaE9iamVjdC5mZXRjaFR5cGU7XG4gICAgICAgIGxldCBkYXRhQmFzZU9iamVjdCA9IGZldGNoT2JqZWN0LmRhdGFCYXNlT2JqZWN0O1xuICAgICAgICBsZXQgcHV0SWQgPSBmZXRjaE9iamVjdC5wdXRJZDtcbiAgICAgICAgbGV0IGRlbGV0ZUlkID0gZmV0Y2hPYmplY3QuZGVsZXRlSWQ7XG5cbiAgICAgICAgaWYgKGZldGNoVHlwZSA9PSBcIkdFVFwiKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODgvJHtkYXRhU2V0fSR7ZW1iZWRJdGVtfWApXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpIC8vIHBhcnNlcyByZXNwb25zZSB0byBKU09OXG5cbiAgICAgICAgfSBlbHNlIGlmIChmZXRjaFR5cGUgPT09IFwiUE9TVFwiKXtcblxuICAgICAgICAvLyBEZWZhdWx0IG9wdGlvbnMgYXJlIG1hcmtlZCB3aXRoICpcbiAgICAgICAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODgvJHtkYXRhU2V0fWAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogYCR7ZmV0Y2hUeXBlfWAsIC8vICpHRVQsIFBPU1QsIFBVVCwgREVMRVRFLCBldGMuXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXG4gICAgICAgICAgICAgICAgLy8gXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyByZWZlcnJlcjogXCJuby1yZWZlcnJlclwiLCAvLyBuby1yZWZlcnJlciwgKmNsaWVudFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YUJhc2VPYmplY3QpLCAvLyBib2R5IGRhdGEgdHlwZSBtdXN0IG1hdGNoIFwiQ29udGVudC1UeXBlXCIgaGVhZGVyXG4gICAgICAgIH0pXG5cbiAgICAgICAgfSBlbHNlIGlmKGZldGNoVHlwZSA9PT0gXCJQVVRcIil7XG4gICAgICAgIHJldHVybiBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDg4LyR7ZGF0YVNldH0vJHtwdXRJZH1gLCB7XG4gICAgICAgICAgICBtZXRob2Q6IGAke2ZldGNoVHlwZX1gLCAvLyAqR0VULCBQT1NULCBQVVQsIERFTEVURSwgZXRjLlxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxuICAgICAgICAgICAgICAgIC8vIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gcmVmZXJyZXI6IFwibm8tcmVmZXJyZXJcIiwgLy8gbm8tcmVmZXJyZXIsICpjbGllbnRcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGFCYXNlT2JqZWN0KSwgLy8gYm9keSBkYXRhIHR5cGUgbXVzdCBtYXRjaCBcIkNvbnRlbnQtVHlwZVwiIGhlYWRlclxuICAgICAgICB9KVxuICAgICAgICB9IGVsc2UgaWYgKGZldGNoVHlwZSA9PT0gXCJERUxFVEVcIikge1xuICAgICAgICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC8ke2RhdGFTZXR9LyR7ZGVsZXRlSWR9YCwge1xuICAgICAgICAgICAgbWV0aG9kOiBgJHtmZXRjaFR5cGV9YCwgLy8gKkdFVCwgUE9TVCwgUFVULCBERUxFVEUsIGV0Yy5cbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcbiAgICAgICAgICAgICAgICAvLyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIHJlZmVycmVyOiBcIm5vLXJlZmVycmVyXCIsIC8vIG5vLXJlZmVycmVyLCAqY2xpZW50XG4gICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyAoXCJZT1UgU0NSRVdFRCBJVCBVUFwiKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBub21hZERhdGEiLCJpbXBvcnQgbm9tYWREYXRhIGZyb20gXCIuL25vbWFkRGF0YVwiO1xuaW1wb3J0IGRvbUNvbXBvbmVudHMgZnJvbSBcIi4vZG9tQ29tcG9uZW50c1wiO1xuaW1wb3J0IHRhc2tzRXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vdGFza3NFdmVudExpc3RlbmVyc1wiO1xuaW1wb3J0IHRhc2tzUG9wdXAgZnJvbSBcIi4vdGFza3NQb3B1cFwiO1xuLy8gaW1wb3J0IGV2ZW50TGlzdGVuZXJzIGZyb20gXCIuL2V2ZW50TGlzdGVuZXJzXCJcblxuY29uc3QgdGFza3MgPSB7XG5cbiAgICBjcmVhdGVUYXNrVGFibGVzKCkge1xuICAgICAgICAkKFwiI291dHB1dFwiKS5lbXB0eSgpXG4gICAgICAgIC8vbmVlZCB0byBnZXQgc2Vzc2lvbiBzdG9yYWdlIGJlZm9yZSBidWlsZGluZyB0YXNrcyBmb3JtIHVwb24gbG9nSW5cbiAgICAgICAgdGhpcy5nZXRUYXNrcygpO1xuICAgICAgICBsZXQgb3V0cHV0QXJ0aWNsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3V0cHV0XCIpXG5cbiAgICAgICAgLy9jcmVhdGUgZGlzcGxheSBjb250YWluZXJcbiAgICAgICAgbGV0IHRhc2tzQ29udGFpbmVyID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJzZWN0aW9uXCIsXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwidGFza3NDb250YWluZXJcIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgaWQgOiBcInRhc2tzQ29udGFpbmVyXCJcbiAgICAgICAgICAgIH19KTtcblxuICAgICAgICAvL2NyZWF0ZSB0YXNrcyB0YWJsZXNcbiAgICAgICAgbGV0IGFjdGl2ZVRhc2tzVGFibGUgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcInRhYmxlXCIsXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwiYWN0aXZlVGFza3NUYWJsZVwiLFxuICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICBpZCA6IFwiYWN0aXZlVGFza3NUYWJsZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBhY3RpdmVUYXNrc1RhYmxlVGl0bGUgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImNhcHRpb25cIixcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJhY3RpdmVUYXNrc1RhYmxlVGl0bGVcIixcbiAgICAgICAgICAgIGNvbnRlbnQgOiBcIkFDVElWRSBUQVNLU1wiXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBjb21wbGV0ZWRUYXNrc1RhYmxlID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJ0YWJsZVwiLFxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcImNvbXBsZXRlZFRhc2tzVGFibGVcIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgaWQgOiBcImNvbXBsZXRlZFRhc2tzVGFibGVcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgY29tcGxldGVkVGFza3NUYWJsZVRpdGxlID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJjYXB0aW9uXCIsXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwiY29tcGxldGVkVGFza3NUYWJsZVRpdGxlXCIsXG4gICAgICAgICAgICBjb250ZW50IDogXCJDT01QTEVURUQgVEFTS1NcIlxuICAgICAgICB9KVxuXG4gICAgICAgIC8vY3JlYXRlIHJvdyB3aXRoIGNvbHVtbiBoZWFkZXJzXG4gICAgICAgIGxldCBhY3RpdmVUYXNrc0hlYWRlclJvdyA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwidHJcIixcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJhY3RpdmVUYXNrc0hlYWRlclJvd1wiLFxuICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICBpZCA6IFwiYWN0aXZlVGFza3NIZWFkZXJSb3dcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgY29tcGxldGVkVGFza3NIZWFkZXJSb3cgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcInRyXCIsXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwiY29tcGxldGVkVGFza3NIZWFkZXJSb3dcIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgaWQgOiBcImNvbXBsZXRlZFRhc2tzSGVhZGVyUm93XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9jcmVhdGUgY29sdW1uIGhlYWRlcnNcbiAgICAgICAgbGV0IGFjdGl2ZVRhc2tzSGVhZGVyID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJ0aFwiLFxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcImFjdGl2ZVRhc2tzSGVhZGVyXCIsXG4gICAgICAgICAgICBjb250ZW50OiBcIlRhc2tcIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgaWQgOiBcImFjdGl2ZVRhc2tzSGVhZGVyXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGFjdGl2ZVRhc2tzRHVlRGF0ZUhlYWRlciA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwidGhcIixcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJhY3RpdmVUYXNrc0R1ZURhdGVIZWFkZXJcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiRHVlIERhdGVcIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgaWQgOiBcImFjdGl2ZVRhc2tzRHVlRGF0ZUhlYWRlclwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgYWN0aXZlVGFza3NFZGl0ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJ0aFwiLFxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcImFjdGl2ZVRhc2tzRWRpdFwiLFxuICAgICAgICAgICAgY29udGVudDogXCJcIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgaWQgOiBcImFjdGl2ZVRhc2tzRWRpdFwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBjb21wbGV0ZWRUYXNrc0hlYWRlciA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwidGhcIixcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJjb21wbGV0ZWRUYXNrc0hlYWRlclwiLFxuICAgICAgICAgICAgY29udGVudDogXCJUYXNrXCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgIGlkIDogXCJjb21wbGV0ZWRUYXNrc0hlYWRlclwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBjb21wbGV0ZWRUYXNrc0R1ZURhdGVIZWFkZXIgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcInRoXCIsXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwiY29tcGxldGVkVGFza3NEdWVEYXRlSGVhZGVyXCIsXG4gICAgICAgICAgICBjb250ZW50OiBcIkR1ZSBEYXRlXCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgIGlkIDogXCJjb21wbGV0ZWRUYXNrc0R1ZURhdGVIZWFkZXJcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy9jcmVhdGUgYnV0dG9uIHRvIG1ha2UgbmV3IHRhc2tzXG4gICAgICAgIGxldCBjcmVhdGVUYXNrQnV0dG9uID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJidXR0b25cIixcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJjcmVhdGVUYXNrQnV0dG9uXCIsXG4gICAgICAgICAgICBjb250ZW50IDogXCJDcmVhdGUgTmV3IFRhc2tcIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgaWQgOiBcImNyZWF0ZVRhc2tCdXR0b25cIixcbiAgICAgICAgICAgICAgICB0eXBlIDogXCJidXR0b25cIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgbGV0IGNvbXBsZXRlZFRhc2tzRWRpdCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwidGhcIixcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJjb21wbGV0ZWRUYXNrc0VkaXRcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgIGlkIDogXCJjb21wbGV0ZWRUYXNrc0VkaXRcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvL2FwcGVuZCBoZWFkZXIgcm93IHRvIHRhYmxlIGFuZCB0YWJsZSB0byBjb250YWluZXJcbiAgICAgICAgYWN0aXZlVGFza3NUYWJsZS5hcHBlbmRDaGlsZChhY3RpdmVUYXNrc1RhYmxlVGl0bGUpO1xuICAgICAgICBjb21wbGV0ZWRUYXNrc1RhYmxlLmFwcGVuZENoaWxkKGNvbXBsZXRlZFRhc2tzVGFibGVUaXRsZSk7XG4gICAgICAgIGFjdGl2ZVRhc2tzSGVhZGVyUm93LmFwcGVuZENoaWxkKGFjdGl2ZVRhc2tzSGVhZGVyKVxuICAgICAgICBhY3RpdmVUYXNrc0hlYWRlclJvdy5hcHBlbmRDaGlsZChhY3RpdmVUYXNrc0R1ZURhdGVIZWFkZXIpO1xuICAgICAgICBhY3RpdmVUYXNrc0hlYWRlclJvdy5hcHBlbmRDaGlsZChhY3RpdmVUYXNrc0VkaXQpO1xuICAgICAgICBhY3RpdmVUYXNrc1RhYmxlLmFwcGVuZENoaWxkKGFjdGl2ZVRhc2tzSGVhZGVyUm93KTtcbiAgICAgICAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aXZlVGFza3NUYWJsZSk7XG4gICAgICAgIGNvbXBsZXRlZFRhc2tzSGVhZGVyUm93LmFwcGVuZENoaWxkKGNvbXBsZXRlZFRhc2tzSGVhZGVyKVxuICAgICAgICBjb21wbGV0ZWRUYXNrc0hlYWRlclJvdy5hcHBlbmRDaGlsZChjb21wbGV0ZWRUYXNrc0R1ZURhdGVIZWFkZXIpO1xuICAgICAgICBjb21wbGV0ZWRUYXNrc0hlYWRlclJvdy5hcHBlbmRDaGlsZChjb21wbGV0ZWRUYXNrc0VkaXQpO1xuICAgICAgICBjb21wbGV0ZWRUYXNrc1RhYmxlLmFwcGVuZENoaWxkKGNvbXBsZXRlZFRhc2tzSGVhZGVyUm93KTtcbiAgICAgICAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQoY29tcGxldGVkVGFza3NUYWJsZSk7XG4gICAgICAgIGNyZWF0ZVRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRhc2tzUG9wdXAuY3JlYXRlTmV3VGFza0Zvcm0pO1xuICAgICAgICB0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVUYXNrQnV0dG9uKTtcbiAgICAgICAgb3V0cHV0QXJ0aWNsZS5hcHBlbmRDaGlsZCh0YXNrc0NvbnRhaW5lcik7XG5cbiAgICAgICAgXG4gICAgfSxcblxuICAgIGdldFRhc2tzKCkge1xuXG4gICAgICAgIGxldCBjdXJyZW50VXNlciA9IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpKTtcbiAgICAgICAgLy9wb3B1bGF0ZSB0YXNrc1xuICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG5cbiAgICAgICAgICAgIGRhdGFTZXQgOiBcInRhc2tzXCIsXG4gICAgICAgICAgICBmZXRjaFR5cGUgOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW1iZWRJdGVtIDogXCI/X2VtYmVkPXVzZXJzXCJcblxuICAgICAgICB9KS50aGVuKHRhc2tzID0+IHtcblxuICAgICAgICAgICAgdGFza3Muc29ydChmdW5jdGlvbihhLGIpe1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShhLmV4cGVjdGVkQ29tcGxldGlvbkRhdGUpIC0gbmV3IERhdGUoYi5leHBlY3RlZENvbXBsZXRpb25EYXRlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuXG4gICAgICAgICAgICAgICAgaWYgKHRhc2sudXNlcklkID09PSBjdXJyZW50VXNlcikge1xuICAgICAgICAgICAgICAgIGxldCBzdGF0dXMgPSB0YXNrLmNvbXBsZXRlO1xuICAgICAgICAgICAgICAgIGxldCBhY3RpdmVUYXNrc1RhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY3RpdmVUYXNrc1RhYmxlXCIpO1xuICAgICAgICAgICAgICAgIGxldCBjb21wbGV0ZWRUYXNrc1RhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb21wbGV0ZWRUYXNrc1RhYmxlXCIpO1xuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBhIG5ldyB0YWJsZSByb3cgZm9yIGVhY2ggdGFza1xuICAgICAgICAgICAgICAgIGxldCB0YXNrUm93ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzIDogXCJ0YXNrVGFibGVSb3dcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkIDogYHRhc2tUYWJsZVJvd18ke3Rhc2suaWR9YFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIC8vY3JlYXRlIGNlbGxzIHRvIGhvbGQgdGFzayBhbmQgZHVlIGRhdGVcbiAgICAgICAgICAgICAgICBsZXQgdGFza0NlbGwgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgOiBcInRhc2tDZWxsXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZCA6IGB0YXNrQ2VsbF8ke3Rhc2suaWR9YFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIGxldCBkdWVEYXRlQ2VsbCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcyA6IFwiZHVlRGF0ZUNlbGxcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkIDogYGR1ZURhdGVDZWxsXyR7dGFzay5pZH1gXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgbGV0IHRhc2tFZGl0Q2VsbCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcyA6IFwidGFza0VkaXRDZWxsXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZCA6IGB0YXNrRWRpdENlbGxfJHt0YXNrLmlkfWBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBsZXQgdGFza0VkaXRCdXR0b24gPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzIDogXCJ0YXNrRWRpdEJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50IDogXCJFZGl0XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZCA6IGB0YXNrRWRpdEJ1dHRvbl8ke3Rhc2suaWR9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgOiBcImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgLy9jcmVhdGUgdGFzayBjaGVja2JveCBhbmQgdGl0bGVcbiAgICAgICAgICAgICAgICBsZXQgdGFza0xhYmVsID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzIDogXCJ0YXNrTGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkIDogYHRhc2tMYWJlbF8ke3Rhc2suaWR9YFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAvL2NyZWF0ZSB0YXNrIHRpdGxlXG4gICAgICAgICAgICAgICAgbGV0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGAke3Rhc2sudGFza31gKTtcblxuICAgICAgICAgICAgICAgIC8vY3JlYXRlIHRhc2sgY2hlY2tib3hcbiAgICAgICAgICAgICAgICBsZXQgdGFza0NoZWNrYm94ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzIDogXCJ0YXNrQ2hlY2tib3hcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkIDogYHRhc2tDaGVja2JveF8ke3Rhc2suaWR9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgOiBcImNoZWNrYm94XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA6IGAke3Rhc2sudGFza31gXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC8vY3JlYXRlIHRhc2sgZHV0ZSBkYXRlXG4gICAgICAgICAgICAgICAgbGV0IGR1ZURhdGVBcnJheSA9IG5ldyBEYXRlKHRhc2suZXhwZWN0ZWRDb21wbGV0aW9uRGF0ZSkudG9EYXRlU3RyaW5nKCkuc3BsaXQoXCIgXCIpXG4gICAgICAgICAgICAgICAgbGV0IGR1ZURhdGUgPSBgJHtkdWVEYXRlQXJyYXlbMV19ICR7ZHVlRGF0ZUFycmF5WzJdfSAke2R1ZURhdGVBcnJheVszXX1gXG5cblxuICAgICAgICAgICAgICAgIGxldCB0YXNrRHVlRGF0ZSA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJwXCIsXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzIDogXCJ0YXNrRHVlRGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50IDogZHVlRGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkIDogYHRhc2tEdWVEYXRlXyR7dGFzay5pZH1gXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgLy9hcHBlbmQgLS0gb3JkZXIgaXMgaW1wb3J0YW50IGZvciBjaGVja2JveCBhbmQgbGFiZWwgdG8gZW5zdXJlIGJveCBpbiBvbiB0aGUgbGVmdFxuICAgICAgICAgICAgICAgIHRhc2tDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHRhc2tzRXZlbnRMaXN0ZW5lcnMubWFya1Rhc2tDb21wbGV0ZSlcbiAgICAgICAgICAgICAgICB0YXNrRWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGFza3NFdmVudExpc3RlbmVycy50YXNrRWRpdEJ1dHRvbilcbiAgICAgICAgICAgICAgICB0YXNrTGFiZWwuYXBwZW5kQ2hpbGQodGFza0NoZWNrYm94KTtcbiAgICAgICAgICAgICAgICB0YXNrTGFiZWwuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgICAgICAgICAgICAgICB0YXNrQ2VsbC5hcHBlbmRDaGlsZCh0YXNrTGFiZWwpO1xuICAgICAgICAgICAgICAgIGR1ZURhdGVDZWxsLmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlKTtcbiAgICAgICAgICAgICAgICB0YXNrRWRpdENlbGwuYXBwZW5kQ2hpbGQodGFza0VkaXRCdXR0b24pO1xuICAgICAgICAgICAgICAgIHRhc2tSb3cuYXBwZW5kQ2hpbGQodGFza0NlbGwpO1xuICAgICAgICAgICAgICAgIHRhc2tSb3cuYXBwZW5kQ2hpbGQoZHVlRGF0ZUNlbGwpO1xuICAgICAgICAgICAgICAgIHRhc2tSb3cuYXBwZW5kQ2hpbGQodGFza0VkaXRDZWxsKTtcblxuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMpIHtcblxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWRUYXNrc1RhYmxlLmFwcGVuZENoaWxkKHRhc2tSb3cpO1xuICAgICAgICAgICAgICAgICAgICB0YXNrQ2hlY2tib3guc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLCBcIlwiKVxuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlVGFza3NUYWJsZS5hcHBlbmRDaGlsZCh0YXNrUm93KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fSk7XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB0YXNrcztcbiIsImltcG9ydCBub21hZERhdGEgZnJvbSBcIi4vbm9tYWREYXRhXCI7XG5pbXBvcnQgdGFza3MgZnJvbSBcIi4vdGFza3NcIjtcbmltcG9ydCBkb21Db21wb25lbnRzIGZyb20gXCIuL2RvbUNvbXBvbmVudHNcIlxuXG5jb25zdCB0YXNrc0V2ZW50TGlzdGVuZXJzID0ge1xuXG4gICAgY3JlYXRlTmV3VGFzaygpIHtcblxuICAgICAgICBsZXQgdGFza1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrVGl0bGVJbnB1dFwiKS52YWx1ZTtcbiAgICAgICAgbGV0IGR1ZURhdGVGaWVsZFZhbGl1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0RhdGVJbnB1dFwiKS52YWx1ZTtcbiAgICAgICAgbGV0IHVzZXJJZCA9IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKSk7XG5cbiAgICAgICAgbGV0IGR1ZURhdGVBcnJheSA9IGR1ZURhdGVGaWVsZFZhbGl1ZS5zcGxpdChcIi1cIilcbiAgICAgICAgbGV0IGR1ZURhdGUgPSBgJHtkdWVEYXRlQXJyYXlbMV19ICR7ZHVlRGF0ZUFycmF5WzJdfSAke2R1ZURhdGVBcnJheVswXX1gO1xuXG4gICAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcblxuICAgICAgICAgICAgZGF0YVNldCA6IFwidGFza3NcIixcbiAgICAgICAgICAgIGZldGNoVHlwZSA6IFwiUE9TVFwiLFxuICAgICAgICAgICAgZGF0YUJhc2VPYmplY3QgOiB7XG4gICAgICAgICAgICAgICAgdXNlcklkIDogdXNlcklkLFxuICAgICAgICAgICAgICAgIHRhc2sgOiB0YXNrVGl0bGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWRDb21wbGV0aW9uRGF0ZSA6IGR1ZURhdGUsXG4gICAgICAgICAgICAgICAgY29tcGxldGUgOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oc2hpdCA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzaGl0KVxuICAgICAgICAgICAgJChcIiNvdXRwdXRcIikuZW1wdHkoKVxuICAgICAgICAgICAgdGFza3MuY3JlYXRlVGFza1RhYmxlcygpO1xuICAgICAgICB9KVxuICAgIH0sXG5cbiAgICBtYXJrVGFza0NvbXBsZXRlKCkge1xuICAgICAgICBsZXQgdGFza1RvRWRpdElkID0gZXZlbnQudGFyZ2V0LmlkLnNwbGl0KFwiX1wiKVsxXTtcblxuICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG5cbiAgICAgICAgICAgIGRhdGFTZXQgOiBcInRhc2tzXCIsXG4gICAgICAgICAgICBmZXRjaFR5cGUgOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW1iZWRJdGVtIDogYD8maWQ9JHt0YXNrVG9FZGl0SWR9YFxuICAgICAgICB9KS50aGVuKHBhcnNlZFRhc2tzID0+IHtcblxuXG4gICAgICAgICAgICBsZXQgdGFza0lkID0gcGFyc2VkVGFza3NbMF0uaWQ7XG4gICAgICAgICAgICBsZXQgdXNlcklkID0gcGFyc2VkVGFza3NbMF0udXNlcklkO1xuICAgICAgICAgICAgbGV0IHRhc2sgPSBwYXJzZWRUYXNrc1swXS50YXNrO1xuICAgICAgICAgICAgbGV0IGV4cGVjdGVkQ29tcGxldGlvbkRhdGUgPSBwYXJzZWRUYXNrc1swXS5leHBlY3RlZENvbXBsZXRpb25EYXRlO1xuICAgICAgICAgICAgbGV0IGNvbXBsZXRlID0gcGFyc2VkVGFza3NbMF0uY29tcGxldGU7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2tJZCwgdXNlcklkLCB0YXNrLCBleHBlY3RlZENvbXBsZXRpb25EYXRlLCBjb21wbGV0ZSlcblxuICAgICAgICAgICAgaWYgKGNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgY29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29tcGxldGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcbiAgICAgICAgICAgICAgICBwdXRJZCA6IHRhc2tUb0VkaXRJZCxcbiAgICAgICAgICAgICAgICBkYXRhU2V0IDogXCJ0YXNrc1wiLFxuICAgICAgICAgICAgICAgIGZldGNoVHlwZSA6IFwiUFVUXCIsXG4gICAgICAgICAgICAgICAgZGF0YUJhc2VPYmplY3QgOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiB0YXNrSWQsXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZCA6IHVzZXJJZCxcbiAgICAgICAgICAgICAgICAgICAgdGFzayA6IHRhc2ssXG4gICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkQ29tcGxldGlvbkRhdGU6IGV4cGVjdGVkQ29tcGxldGlvbkRhdGUsXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBjb21wbGV0ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLnRoZW4oc2hpdCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2hpdClcbiAgICAgICAgICAgICAgICAkKFwiI291dHB1dFwiKS5lbXB0eSgpXG4gICAgICAgICAgICAgICAgdGFza3MuY3JlYXRlVGFza1RhYmxlcygpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH0sXG5cbiAgICB0YXNrRWRpdEJ1dHRvbigpIHtcblxuICAgICAgICBsZXQgbnVtYmVyID0gZXZlbnQuY3VycmVudFRhcmdldC5pZDtcbiAgICAgICAgbGV0IHRhc2tBcnJheSA9IG51bWJlci5zcGxpdChcIl9cIik7XG4gICAgICAgIGxldCB0YXNrSWQgPSB0YXNrQXJyYXlbMV07XG5cbiAgICAgICAgbGV0IHRhc2tDZWxsVG9FbXB0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB0YXNrQ2VsbF8ke3Rhc2tJZH1gKTtcbiAgICAgICAgbGV0IHRhc2tMYWJsZVRvUmVtb3ZlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRhc2tMYWJlbF8ke3Rhc2tJZH1gKTtcbiAgICAgICAgbGV0IGR1ZURhdGVDZWxsVG9FbXB0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkdWVEYXRlQ2VsbF8ke3Rhc2tJZH1gKTtcbiAgICAgICAgbGV0IGR1ZURhdGVUb1JlbW92ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB0YXNrRHVlRGF0ZV8ke3Rhc2tJZH1gKTtcbiAgICAgICAgbGV0IHRhc2tFZGl0Q2VsbFRvRW1wdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdGFza0VkaXRDZWxsXyR7dGFza0lkfWApO1xuICAgICAgICBsZXQgdGFza0VkaXRCdXR0b25Ub1JlbW92ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB0YXNrRWRpdEJ1dHRvbl8ke3Rhc2tJZH1gKTtcblxuICAgICAgICBsZXQgdGFza1RvRWRpdFRleHQgPSB0YXNrTGFibGVUb1JlbW92ZS5pbm5lclRleHQ7XG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tUb0VkaXRUZXh0KVxuXG4gICAgICAgIGxldCB0YXNrVG9FZGl0VGl0bGUgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImlucHV0XCIsXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwidGFza1RvRWRpdFRpdGxlXCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgIGlkIDogYHRhc2tUb0VkaXRUaXRsZV8ke3Rhc2tJZH1gLFxuICAgICAgICAgICAgICAgIHZhbHVlIDogYCR7dGFza1RvRWRpdFRleHR9YFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGxldCB0YXNrRHVlRGF0ZVRvRWRpdCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwiaW5wdXRcIixcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJ0YXNrRHVlRGF0ZVRvRWRpdFwiLFxuICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICBpZCA6IGB0YXNrRHVlRGF0ZVRvRWRpdF8ke3Rhc2tJZH1gLFxuICAgICAgICAgICAgICAgIHR5cGUgOiBcImRhdGVcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGxldCBlZGl0ZWRUYXNrU3VibWl0QnV0dG9uID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJidXR0b25cIixcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJlZGl0ZWRUYXNrU3VibWl0QnV0dG9uXCIsXG4gICAgICAgICAgICBjb250ZW50IDogXCJTdW1iaXRcIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgaWQgOiBgZWRpdGVkVGFza1N1Ym1pdEJ1dHRvbl8ke251bWJlcn1gLFxuICAgICAgICAgICAgICAgIHR5cGUgOiBcImJ1dHRvblwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGFza0NlbGxUb0VtcHR5LnJlbW92ZUNoaWxkKHRhc2tMYWJsZVRvUmVtb3ZlKTtcbiAgICAgICAgdGFza0NlbGxUb0VtcHR5LmFwcGVuZENoaWxkKHRhc2tUb0VkaXRUaXRsZSlcbiAgICAgICAgZHVlRGF0ZUNlbGxUb0VtcHR5LnJlbW92ZUNoaWxkKGR1ZURhdGVUb1JlbW92ZSk7XG4gICAgICAgIGR1ZURhdGVDZWxsVG9FbXB0eS5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZVRvRWRpdCk7XG4gICAgICAgIHRhc2tFZGl0Q2VsbFRvRW1wdHkucmVtb3ZlQ2hpbGQodGFza0VkaXRCdXR0b25Ub1JlbW92ZSk7XG4gICAgICAgIHRhc2tFZGl0Q2VsbFRvRW1wdHkuYXBwZW5kQ2hpbGQoZWRpdGVkVGFza1N1Ym1pdEJ1dHRvbik7XG4gICAgICAgIGVkaXRlZFRhc2tTdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRhc2tzRXZlbnRMaXN0ZW5lcnMuc2F2ZVRhc2tFZGl0KVxuXG4gICAgfSxcbiAgICBzYXZlVGFza0VkaXQoKSB7XG4gICAgICAgIGxldCB0YXNrTnVtYmVyID0gZXZlbnQuY3VycmVudFRhcmdldC5pZDtcbiAgICAgICAgbGV0IHRhc2tBcnJheSA9IHRhc2tOdW1iZXIuc3BsaXQoXCJfXCIpO1xuICAgICAgICBsZXQgdGFza0lkID0gdGFza0FycmF5WzJdO1xuICAgICAgICBsZXQgdGFza0VkaXRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB0YXNrVG9FZGl0VGl0bGVfJHt0YXNrSWR9YCkudmFsdWU7XG4gICAgICAgIGxldCB0YXNrRWRpdERhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdGFza0R1ZURhdGVUb0VkaXRfJHt0YXNrSWR9YCkudmFsdWU7XG5cbiAgICAgICAgbGV0IGR1ZURhdGVBcnJheSA9IHRhc2tFZGl0RGF0ZS5zcGxpdChcIi1cIilcbiAgICAgICAgbGV0IGR1ZURhdGUgPSBgJHtkdWVEYXRlQXJyYXlbMV19ICR7ZHVlRGF0ZUFycmF5WzJdfSAke2R1ZURhdGVBcnJheVswXX1gO1xuXG5cbiAgICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xuXG4gICAgICAgICAgICBwdXRJZCA6IHRhc2tJZCxcbiAgICAgICAgICAgIGRhdGFTZXQgOiBcInRhc2tzXCIsXG4gICAgICAgICAgICBmZXRjaFR5cGUgOiBcIlBVVFwiLFxuICAgICAgICAgICAgZGF0YUJhc2VPYmplY3QgOiB7XG4gICAgICAgICAgICAgICAgdXNlcklkIDogTnVtYmVyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIikpLFxuICAgICAgICAgICAgICAgIHRhc2s6IHRhc2tFZGl0SW5wdXQsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWRDb21wbGV0aW9uRGF0ZTogZHVlRGF0ZSxcbiAgICAgICAgICAgICAgICBjb21wbGV0ZSA6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4oc2hpdCA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzaGl0KVxuICAgICAgICAgICAgJChcIiNvdXRwdXRcIikuZW1wdHkoKTtcbiAgICAgICAgICAgIHRhc2tzLmNyZWF0ZVRhc2tUYWJsZXMoKTtcbiAgICAgICAgfSlcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCB0YXNrc0V2ZW50TGlzdGVuZXJzOyIsImltcG9ydCBkb21Db21wb25lbnRzIGZyb20gXCIuL2RvbUNvbXBvbmVudHNcIjtcbmltcG9ydCB0YXNrc0V2ZW50TGlzdGVuZXJzIGZyb20gXCIuL3Rhc2tzRXZlbnRMaXN0ZW5lcnNcIjtcblxuY29uc3QgdGFza3NQb3B1cCA9IHtcblxuICAgIGNyZWF0ZU5ld1Rhc2tGb3JtKCkge1xuICAgICAgICBsZXQgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tzQ29udGFpbmVyXCIpO1xuICAgICAgICBsZXQgdGFza1BvcHVwRGl2ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJkaXZcIixcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJ0YXNrUG9wdXBEaXZcIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgaWQgOiBcInRhc2tQb3B1cERpdlwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBuZXdUYXNrRm9ybSA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwiZGl2XCIsXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwibmV3VGFza0Zvcm1cIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgaWQgOiBcIm5ld1Rhc2tGb3JtXCIsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBuZXdUYXNrRm9ybVRpdGxlID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJoMlwiLFxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcIm5ld1Rhc2tGb3JtVGl0bGVcIixcbiAgICAgICAgICAgIGNvbnRlbnQgOiBcIkNyZWF0ZSBBIE5ldyBUYXNrXCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgIGlkIDogXCJuZXdUYXNrRm9ybVRpdGxlXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGhvcml6b250YWxMaW5lID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50ICh7XG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwiaHJcIlxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgdGFza1RpdGxlSW5wdXQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQgKHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJpbnB1dFwiLFxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcInRhc2tUaXRsZUlucHV0XCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgIGlkIDogXCJ0YXNrVGl0bGVJbnB1dFwiLFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyIDogXCJFbnRlciBuZXcgdGFzayB0aXRsZVwiLFxuICAgICAgICAgICAgICAgIHR5cGUgOiBcInRleHRcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgdGFza0RhdGVJbnB1dCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCAoe1xuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImlucHV0XCIsXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwidGFza0RhdGVJbnB1dFwiLFxuICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICBpZCA6IFwidGFza0RhdGVJbnB1dFwiLFxuICAgICAgICAgICAgICAgIHR5cGUgOiBcImRhdGVcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgc3VibWl0TmV3VGFza0J1dHRvbiA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCAoe1xuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcInN1Ym1pdE5ld1Rhc2tCdXR0b25cIixcbiAgICAgICAgICAgIGNvbnRlbnQgOiBcIlN1Ym1pdFwiLFxuICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICBpZCA6IFwic3VibWl0TmV3VGFza0J1dHRvblwiLFxuICAgICAgICAgICAgICAgIHR5cGUgOiBcImJ1dHRvblwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHN1Ym1pdE5ld1Rhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRhc2tzRXZlbnRMaXN0ZW5lcnMuY3JlYXRlTmV3VGFzaylcbiAgICAgICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQobmV3VGFza0Zvcm1UaXRsZSk7XG4gICAgICAgIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKGhvcml6b250YWxMaW5lKTtcbiAgICAgICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza1RpdGxlSW5wdXQpO1xuICAgICAgICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrRGF0ZUlucHV0KTtcbiAgICAgICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQoc3VibWl0TmV3VGFza0J1dHRvbik7XG4gICAgICAgIHRhc2tQb3B1cERpdi5hcHBlbmRDaGlsZChuZXdUYXNrRm9ybSk7XG4gICAgICAgIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tQb3B1cERpdik7XG4gICAgfVxuXG59XG5leHBvcnQgZGVmYXVsdCB0YXNrc1BvcHVwOyJdfQ==
