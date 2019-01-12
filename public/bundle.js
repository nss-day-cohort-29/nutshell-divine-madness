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

var _eventListeners = _interopRequireDefault(require("./eventListeners"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  },

  createEventInput() {
    const formContainer = this.createDomElement({
      elementType: "form",
      attribues: {
        class: "eventInput"
      }
    });
    const formHeader = this.createDomElement({
      elementType: "h1",
      content: "Add a New Event:"
    });
    formContainer.appendChild(formHeader);
    const nameFieldset = this.createDomElement({
      elementType: "fieldset"
    });
    const nameLabel = this.createDomElement({
      elementType: "label",
      content: "Event Name:",
      attributes: {
        for: "eventName"
      }
    });
    const nameInput = this.createDomElement({
      elementType: "input",
      attributes: {
        type: "text",
        name: "eventName",
        id: "eventName"
      }
    });
    nameFieldset.appendChild(nameLabel);
    nameFieldset.appendChild(nameInput);
    const dateFieldset = this.createDomElement({
      elementType: "fieldset"
    });
    const dateLabel = this.createDomElement({
      elementType: "label",
      content: "Event Date:",
      attributes: {
        for: "eventDate"
      }
    });
    const dateInput = this.createDomElement({
      elementType: "input",
      attributes: {
        type: "date",
        name: "eventDate",
        id: "eventDate"
      }
    });
    dateFieldset.appendChild(dateLabel);
    dateFieldset.appendChild(dateInput);
    const timeFieldset = this.createDomElement({
      elementType: "fieldset"
    });
    const timeLabel = this.createDomElement({
      elementType: "label",
      content: "Event Time:",
      attributes: {
        for: "eventTime"
      }
    });
    const timeInput = this.createDomElement({
      elementType: "input",
      attributes: {
        type: "time",
        name: "eventTime",
        id: "eventTime"
      }
    });
    timeFieldset.appendChild(timeLabel);
    timeFieldset.appendChild(timeInput);
    const locationFieldset = this.createDomElement({
      elementType: "fieldset"
    });
    const locationLabel = this.createDomElement({
      elementType: "label",
      content: "Enter Location:",
      attributes: {
        for: "eventLocation"
      }
    });
    const locationInput = this.createDomElement({
      elementType: "input",
      attributes: {
        type: "text",
        name: "eventLocation",
        id: "eventLocation"
      }
    });
    locationFieldset.appendChild(locationLabel);
    locationFieldset.appendChild(locationInput);
    const saveButton = this.createDomElement({
      elementType: "button",
      content: "Save",
      attributes: {
        type: "button",
        id: "saveEvent"
      }
    });
    formContainer.appendChild(nameFieldset);
    formContainer.appendChild(dateFieldset);
    formContainer.appendChild(timeFieldset);
    formContainer.appendChild(locationFieldset);
    formContainer.appendChild(saveButton);
    return formContainer;
  },

  createEventItem(eventObject) {
    const eventItem = this.createDomElement({
      elementType: "article",
      attributes: {
        class: "eventItem"
      }
    });
    const eventHeader = this.createDomElement({
      elementType: "h2",
      content: eventObject.eventName
    });
    const eventDateTime = this.createDomElement({
      elementType: "p",
      content: `At ${eventObject.eventTime} on ${eventObject.eventDate}`
    });
    const eventLocation = this.createDomElement({
      elementType: "p",
      content: `Location: ${eventObject.eventLocation}`
    });
    const editButton = this.createDomElement({
      elementType: "button",
      content: "Edit",
      attributes: {
        type: "button",
        id: `editEvent--${eventObject.id}`
      }
    });
    editButton.addEventListener("click", _eventListeners.default.handleEventEditButton);
    const deleteButton = this.createDomElement({
      elementType: "button",
      content: "Delete",
      attributes: {
        type: "button",
        id: `deleteEvent--${eventObject.id}`
      }
    });
    deleteButton.addEventListener("click", _eventListeners.default.handleEventDeleteButton);
    eventItem.appendChild(eventHeader);
    eventItem.appendChild(eventDateTime);
    eventItem.appendChild(eventLocation);
    eventItem.appendChild(editButton);
    eventItem.appendChild(deleteButton);
    return eventItem;
  },

  createEventEditInput(containerId, eventObject) {
    const formContainer = this.createDomElement({
      elementType: "form",
      attribues: {
        class: "eventEdit"
      }
    });
    const nameFieldset = this.createDomElement({
      elementType: "fieldset"
    });
    const nameLabel = this.createDomElement({
      elementType: "label",
      content: "Edit Name:",
      attributes: {
        for: "eventName"
      }
    });
    const nameInput = this.createDomElement({
      elementType: "input",
      attributes: {
        type: "text",
        name: "eventName",
        value: eventObject.eventName
      }
    });
    nameFieldset.appendChild(nameLabel);
    nameFieldset.appendChild(nameInput);
    const dateFieldset = this.createDomElement({
      elementType: "fieldset"
    });
    const dateLabel = this.createDomElement({
      elementType: "label",
      content: "Edit Date:",
      attributes: {
        for: "eventDate"
      }
    });
    const dateInput = this.createDomElement({
      elementType: "input",
      attributes: {
        type: "date",
        name: "eventDate",
        value: eventObject.eventDate
      }
    });
    dateFieldset.appendChild(dateLabel);
    dateFieldset.appendChild(dateInput);
    const timeFieldset = this.createDomElement({
      elementType: "fieldset"
    });
    const timeLabel = this.createDomElement({
      elementType: "label",
      content: "Edit Time:",
      attributes: {
        for: "eventTime"
      }
    });
    const timeInput = this.createDomElement({
      elementType: "input",
      attributes: {
        type: "time",
        name: "eventTime",
        value: eventObject.eventTime
      }
    });
    timeFieldset.appendChild(timeLabel);
    timeFieldset.appendChild(timeInput);
    const locationFieldset = this.createDomElement({
      elementType: "fieldset"
    });
    const locationLabel = this.createDomElement({
      elementType: "label",
      content: "Edit Location:",
      attributes: {
        for: "eventLocation"
      }
    });
    const locationInput = this.createDomElement({
      elementType: "input",
      attributes: {
        type: "text",
        name: "eventLocation",
        value: eventObject.eventLocation
      }
    });
    locationFieldset.appendChild(locationLabel);
    locationFieldset.appendChild(locationInput); //const updateButton = this.createDomElement({elementType: "button", content: "Update", attributes: {type: "button", id: "submitEdits"}});
    // updateButton.addEventListener("click", eventListeners.handleEventUpdateButton);

    formContainer.appendChild(nameFieldset);
    formContainer.appendChild(dateFieldset);
    formContainer.appendChild(timeFieldset);
    formContainer.appendChild(locationFieldset); //formContainer.appendChild(submitButton);

    let currentContainer = document.querySelector(`#${containerId}`);

    while (currentContainer.firstChild) {
      currentContainer.removeChild(currentContainer.firstChild);
    }

    ;
    return formContainer;
  }

};
var _default = domComponents;
exports.default = _default;

},{"./eventListeners":4}],3:[function(require,module,exports){
"use strict";

var _dashboard = _interopRequireDefault(require("./dashboard"));

var _eventListeners = _interopRequireDefault(require("./eventListeners"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import events from "./events";
// import nomadData from "./nomadData";
// import nomadData from "./nomadData";
// import friends from "./friends";
// import news from "./news"
// import messages from "./messages";
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

},{"./dashboard":1,"./eventListeners":4}],4:[function(require,module,exports){
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
  },

  eventsNavLink() {
    _events.default.showEventForm(); //appendUserEvent


    console.log("events clicked");
  },

  friendsNavLink() {
    console.log("friends nav link clicked");

    _friends.default.loadCurrentUsersFriends();

    _friends.default.defineCurrentUsersFriends();
  },

  newsNavLink() {
    //NEWS SECTION
    _news.default.save();

    _news.default.allSaved();

    _news.default.getNews();

    _news.default.newsElementCreator();

    console.log("news link clicked");
  },

  tasksNavLink() {
    _tasks.default.createTaskTables();
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

},{"./dashboard":1,"./domComponents":2,"./events":5,"./friends":6,"./messages":8,"./news":10,"./nomadData":11,"./tasks":12}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nomadData = _interopRequireDefault(require("./nomadData"));

var _domComponents = _interopRequireDefault(require("./domComponents"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Author: Cole Bryant / Purpose:
//import eventListeners from "./eventListeners";
//createEventInput and createEventItem will be added to this object. so dombuilder.
const events = {
  showEventForm() {
    $("#output").empty();
    const output = document.querySelector("#output");

    const eventForm = _domComponents.default.createEventInput();

    output.appendChild(eventForm);
    const eventLog = document.createElement("article");
    eventLog.setAttribute("id", "eventLog");
    output.appendChild(eventLog);
  },

  appendUserEvents() {
    const eventLog = document.querySelector("#eventLog");

    _nomadData.default.connectToData({
      dataSet: "events",
      fetchType: "GET",
      dataBaseObject: {
        userId: sessionStorage.getItem("userId")
      },
      embedItem: "?_embed=events"
    }).then(parsedResponse => {
      let docuFrag = document.createDocumentFragment();
      parsedResponse.forEach(event => {
        while (eventLog.firstChild) {
          eventLog.removeChild(eventLog.firstChild);
        }

        ;

        const eventItem = _domComponents.default.createEventItem(event);

        docuFrag.appendChild(eventItem);
      });
      eventLog.appendChild(docuFrag);
    });
  }

}; // events.showEventForm();
// events.appendUserEvents();
// events.deleteEvent();

var _default = events;
exports.default = _default;

},{"./domComponents":2,"./nomadData":11}],6:[function(require,module,exports){
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
              id: `add-friend-button-${user.id}`
            }
          }));
          const forAddButton = document.getElementById(`add-friend-button-${user.id}`);
          forAddButton.addEventListener("click", () => {
            _friendsEventsListener.default.friendsAddFriend();
          });
        }
      });
    }); // console.log(notAFriend)

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

},{"./domComponents":2,"./friendsEventsListener":7,"./nomadData":11}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nomadData = _interopRequireDefault(require("./nomadData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import friends from "./friends"
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
  }

};
var _default = friendsEventsListener;
exports.default = _default;

},{"./nomadData":11}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nomadData = _interopRequireDefault(require("./nomadData"));

var _domComponents = _interopRequireDefault(require("./domComponents"));

var _messagesEventListeners = _interopRequireDefault(require("./messagesEventListeners"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import friendsEventListeners from "./friendsEventListeners.js";
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
        type: "submit"
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
              name: messageTimeStamp
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

        messageElement.addEventListener("click", friendsEventListeners.shiz);
      });
    });
  }

};
var _default = messages;
exports.default = _default;

},{"./domComponents":2,"./messagesEventListeners":9,"./nomadData":11}],9:[function(require,module,exports){
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

},{"./domComponents":2,"./messages":8,"./nomadData":11}],10:[function(require,module,exports){
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
        console.log(dbGrab);
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

},{"./domComponents":2,"./nomadData":11}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
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

},{}],12:[function(require,module,exports){
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
        id: "createTaskButton"
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

},{"./domComponents":2,"./nomadData":11,"./tasksEventListeners":13,"./tasksPopup":14}],13:[function(require,module,exports){
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
    }).then(tasks => {
      let taskId = tasks[0].id;
      let userId = tasks[0].userId;
      let task = tasks[0].task;
      let expectedCompletionDate = tasks[0].expectedCompletionDate;
      let complete = tasks[0].complete;
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
      });
    });

    $("#output").empty();

    _tasks.default.createTaskTables();
  }

};
var _default = tasksEventListeners;
exports.default = _default;

},{"./nomadData":11,"./tasks":12}],14:[function(require,module,exports){
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
        id: "submitNewTaskButton" // type : "submit"

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

},{"./domComponents":2,"./tasksEventListeners":13}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2Rhc2hib2FyZC5qcyIsIi4uL3NjcmlwdHMvZG9tQ29tcG9uZW50cy5qcyIsIi4uL3NjcmlwdHMvZG9tUmVuZGVyZXIuanMiLCIuLi9zY3JpcHRzL2V2ZW50TGlzdGVuZXJzLmpzIiwiLi4vc2NyaXB0cy9ldmVudHMuanMiLCIuLi9zY3JpcHRzL2ZyaWVuZHMuanMiLCIuLi9zY3JpcHRzL2ZyaWVuZHNFdmVudHNMaXN0ZW5lci5qcyIsIi4uL3NjcmlwdHMvbWVzc2FnZXMuanMiLCIuLi9zY3JpcHRzL21lc3NhZ2VzRXZlbnRMaXN0ZW5lcnMuanMiLCIuLi9zY3JpcHRzL25ld3MuanMiLCIuLi9zY3JpcHRzL25vbWFkRGF0YS5qcyIsIi4uL3NjcmlwdHMvdGFza3MuanMiLCIuLi9zY3JpcHRzL3Rhc2tzRXZlbnRMaXN0ZW5lcnMuanMiLCIuLi9zY3JpcHRzL3Rhc2tzUG9wdXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FDQUE7Ozs7QUFDQSxNQUFNLFNBQVMsR0FBRztBQUNoQixFQUFBLGNBQWMsR0FBRTtBQUNkO0FBQ0EsUUFBSSxRQUFRLEdBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQUFoQjtBQXFDRSxJQUFBLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYSxJQUFiLENBQWtCLFFBQWxCOztBQUNBLDRCQUFlLHFCQUFmOztBQUNBLElBQUEsQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZLEtBQVosQ0FBa0Isd0JBQWUsU0FBakM7QUFDQSxJQUFBLENBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCLEtBQXJCLENBQTJCLHdCQUFlLGdCQUExQztBQUNBLElBQUEsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUIsS0FBckIsQ0FBMkIsS0FBSyxjQUFoQyxFQTNDWSxDQTRDWjtBQUVELEdBL0NhOztBQWdEaEIsRUFBQSxZ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LE9BRGtDO0FBRWhELE1BQUEsUUFBUSxFQUFHLGVBRnFDO0FBR2hELE1BQUEsVUFBVSxFQUFHO0FBQ1QsUUFBQSxFQUFFLEVBQUcsZUFESTtBQUVULFFBQUEsSUFBSSxFQUFHO0FBRkU7QUFIbUMsS0FBaEMsQ0FBcEI7O0FBU0EsUUFBSSxtQkFBbUIsR0FBRyx1QkFBYyxnQkFBZCxDQUFnQztBQUN0RCxNQUFBLFdBQVcsRUFBRyxRQUR3QztBQUV0RCxNQUFBLFFBQVEsRUFBRyxxQkFGMkM7QUFHdEQsTUFBQSxPQUFPLEVBQUcsUUFINEM7QUFJdEQsTUFBQSxVQUFVLEVBQUc7QUFDVCxRQUFBLEVBQUUsRUFBRyxxQkFESSxDQUVUOztBQUZTO0FBSnlDLEtBQWhDLENBQTFCOztBQVVBLElBQUEsbUJBQW1CLENBQUMsZ0JBQXBCLENBQXFDLE9BQXJDLEVBQThDLDZCQUFvQixhQUFsRTtBQUNBLElBQUEsV0FBVyxDQUFDLFdBQVosQ0FBd0IsZ0JBQXhCO0FBQ0EsSUFBQSxXQUFXLENBQUMsV0FBWixDQUF3QixjQUF4QjtBQUNBLElBQUEsV0FBVyxDQUFDLFdBQVosQ0FBd0IsY0FBeEI7QUFDQSxJQUFBLFdBQVcsQ0FBQyxXQUFaLENBQXdCLGFBQXhCO0FBQ0EsSUFBQSxXQUFXLENBQUMsV0FBWixDQUF3QixtQkFBeEI7QUFDQSxJQUFBLFlBQVksQ0FBQyxXQUFiLENBQXlCLFdBQXpCO0FBQ0EsSUFBQSxjQUFjLENBQUMsV0FBZixDQUEyQixZQUEzQjtBQUNIOztBQXRFYyxDQUFuQjtlQXlFZSxVIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IGV2ZW50TGlzdGVuZXJzIGZyb20gXCIuL2V2ZW50TGlzdGVuZXJzXCJcclxuY29uc3QgZGFzaGJvYXJkID0ge1xyXG4gIGJ1aWxkTG9naW5Gb3JtKCl7XHJcbiAgICAvL3VzaW5nIHN0cmluZyBpbnRlcnBvbGF0aW9uIHRvIGNyZWF0ZSB0aGUgZm9ybVxyXG4gICAgbGV0IGZvcm1IVE1MID0gYFxyXG4gICAgPGgxIGNsYXNzID0gXCJ0LWJvcmRlclwiPk5vbWFkczwvaDE+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzID0gXCJmb3JtXCI+XHJcbiAgICAgICAgPGZvcm0gYWN0aW9uPVwiXCIgY2xhc3MgPSByZWdpc3RlckZvcm0+XHJcbiAgICAgICAgICA8aW5wdXQgaWQgPSBcInJlZ1VzZXJOYW1lXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlciA9IFwiVXNlcm5hbWVcIiByZXF1aXJlZD5cclxuICAgICAgICAgIDxpbnB1dCBpZCA9IFwicmVnRW1haWxcIiB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlciA9IFwiRW1haWxcIiByZXF1aXJlZD5cclxuICAgICAgICAgIDxpbnB1dCBpZCA9IFwicmVnUGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlciA9IFwiUGFzc3dvcmRcIiByZXF1aXJlZD5cclxuICAgICAgICAgIDxpbnB1dCBpZCA9IFwicmVnQ29uZmlybVBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXIgPSBcIkNvbmZpcm0gUGFzc3dvcmRcIiByZXF1aXJlZD5cclxuICAgICAgICAgIDxidXR0b24gaWQgPSBcInJlZ2lzdGVyQnV0dG9uXCI+Q3JlYXRlIEFjY291bnQ8L2J1dHRvbj5cclxuICAgICAgICAgIDxwIGNsYXNzID0gXCJtZXNzYWdlXCI+QWxyZWFkeSBhIFJlZ2lzdGVyZWQgTWVtYmVyPyA8YSBocmVmID0gXCIjXCI+TG9nSW4gPC9hPjwvcD5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPGZvcm0gY2xhc3MgPSBcImxvZ2luLWZvcm1cIj5cclxuICAgICAgICAgIDxpbnB1dCBpZCA9IFwidXNlck5hbWVWYWxcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyID0gXCJVc2VybmFtZVwiPlxyXG4gICAgICAgICAgPGlucHV0IGlkID0gXCJwYXNzd29yZFZhbFwiIHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyID0gXCJQYXNzd29yZFwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBpZCA9IFwibG9nSW5cIj5Mb2dpbjwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBpZCA9IFwibW9kYWxCdXR0b25cIj5Ob21hZHMgTWlzc2lvbjwvYnV0dG9uPlxyXG4gICAgICAgICAgPHAgY2xhc3MgPSBcIm1lc3NhZ2VcIj5Eb24ndCBoYXZlIGFuIGFjY291bnQ/IDxhIGhyZWYgPSBcIiNcIj5SZWdpc3RlcjwvYT48L3A+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDxzZWN0aW9uIGlkPVwibm9tYWRNb2RhbFwiIGNsYXNzPVwibW9kYWxcIj5cclxuICAgICAgPCEtLSBNb2RhbCBjb250ZW50IC0tPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjbG9zZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgIDxoMj5UaGUgUHVycG9zZSBCZWhpbmQgTm9tYWRzPC9oMj5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICA8aDM+VGhlIG1pbmRzIGJlaGluZyBOb21hZHM8L2gzPlxyXG4gICAgICAgICAgICA8aW1nIGlkID0gXCJjcmVhdG9yc0ltYWdlXCIgc3JjID0gXCJpbWFnZXMvbm9tYWRDcmVhdG9ycy5qcGdcIiBhbHQgPSBcImFwcGxpY2F0aW9uIGNyZWF0b3JzXCI+XHJcbiAgICAgICAgICAgIDxwPkFzIG91dGRvb3JzbWFuLCBlbnZpcm9ubWVudGFsaXN0LCBhbmQgZmlsbW1ha2VycyBjb250aW51ZSB0byBncm93LiBTbyBkbyB0aGUgYWR2ZW50dXJvdXMgc3Bpcml0cyBvZiB0aG9zZSB3aG8gZW1icmFjZSBjb25zY2lvdXMgY29uc3VtZXJpc20gYW5kIHN1c3RhaW5hYmxlIGxpdmluZy4gVGhlIHB1cnBvc2UgaXMgdG8gbWFrZSBhIHBvaW50IG9mIHBsdWdnaW5nIGludG8gbW9kZXJuIGxpZmUgYW5kIGNvbm5lY3Rpbmcgd2l0aCB5b3VyIGZlbGxvdyBub21hZHMgZnJvbSBhbnl3aGVyZSB5b3UgbWF5IGJlLiBTaGFyZSB5b3VyIGxvY2F0aW9uLCBNZWV0IHVwLCBFeGNoYW5nZSBzdG9yaWVzLCBDcmVhdGUgcmVsYXRpb25zaGlwcyB3aXRoIHBlb3BsZSB3aG8gaGF2ZSBzaW1pbGFyIGludGVyZXN0IGFuZCBlbmhhbmNlIHlvdXIgdHJhdmVsaW5nIGV4cGVyaWVuY2Ugd2l0aCBub21hZHMuPC9wPiBcclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgIDxoMz5DcmVhdGVkIEJ5OiBEaXZpbmUgTWFkbmVzcyZjb3B5PC9oMz5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgYFxyXG4gICAgICAkKFwiI291dHB1dFwiKS5odG1sKGZvcm1IVE1MKVxyXG4gICAgICBldmVudExpc3RlbmVycy5tb2RhbERpc3BsYXlBbmltYXRpb24oKVxyXG4gICAgICAkKFwiI2xvZ0luXCIpLmNsaWNrKGV2ZW50TGlzdGVuZXJzLnVzZXJMb2dpbilcclxuICAgICAgJChcIiNyZWdpc3RlckJ1dHRvblwiKS5jbGljayhldmVudExpc3RlbmVycy51c2VyUmVnaXN0cmF0aW9uKVxyXG4gICAgICAkKFwiI3JlZ2lzdGVyQnV0dG9uXCIpLmNsaWNrKHRoaXMuYnVpbGRMb2dpbkZvcm0pXHJcbiAgICAgIC8vICQoXCIjcmVnaXN0ZXJCdXR0b25cIikuY2xpY2soZXZlbnRMaXN0ZW5lcnMudXNlckxvZ2luKVxyXG5cclxuICAgIH0sXHJcbiAgY3JlYXRlTmF2QmFyKCl7XHJcbiAgICBsZXQgbmF2SFRNTCA9IGAgXHJcbiAgICAgIDxuYXY+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgPGxpIGlkID0gXCJuZXdzTGlua1wiPjxhIGNsYXNzID0gXCJhY3RpdmVcIiBocmVmID0gXCIjXCI+QXJ0aWNsZXM8L2E+PC9saT5cclxuICAgICAgICAgIDxsaSBpZCA9IFwiZXZlbnRMaW5rXCI+PGEgaHJlZiA9IFwiI1wiPkV2ZW50czwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpIGlkID0gXCJ0YXNrc0xpbmtcIj48YSBocmVmID0gXCIjXCI+VGFza3M8L2E+PC9saT5cclxuICAgICAgICAgIDxsaSBpZCA9IFwiZnJpZW5kc0xpbmtcIj48YSBocmVmID0gXCIjXCI+RnJpZW5kczwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpIGlkID0gXCJtZXNzYWdlc0xpbmtcIj48YSBocmVmID0gXCIjXCI+TWVzc2FnZXM8L2E+PC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzcyA9IFwic2lnbk91dFwiIGlkID0gXCJsb2dvXCIgPjxhIGhyZWY9XCIjXCI+U2lnbiBPdXQ8L2E+PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L25hdj5cclxuICAgIGBcclxuICAgIGxldCBuYXZCYXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4tbmF2XCIpXHJcbiAgICBuYXZCYXJDb250YWluZXIuaW5uZXJIVE1MID0gbmF2SFRNTFxyXG5cclxuICAgIC8qTmF2aWdhdGlvbiBsaW5rIGV2ZW50IGxpc3RlbmVycyovXHJcbiAgICAkKFwiI21lc3NhZ2VzTGlua1wiKS5jbGljayhldmVudExpc3RlbmVycy5tZXNzYWdlc05hdkxpbmspXHJcbiAgICAkKFwiI2V2ZW50TGlua1wiKS5jbGljayhldmVudExpc3RlbmVycy5ldmVudHNOYXZMaW5rKVxyXG4gICAgJChcIiNmcmllbmRzTGlua1wiKS5jbGljayhldmVudExpc3RlbmVycy5mcmllbmRzTmF2TGluaylcclxuICAgICQoXCIjdGFza3NMaW5rXCIpLmNsaWNrKGV2ZW50TGlzdGVuZXJzLnRhc2tzTmF2TGluaylcclxuICAgICQoXCIjbmV3c0xpbmtcIikuY2xpY2soZXZlbnRMaXN0ZW5lcnMubmV3c05hdkxpbmspXHJcblxyXG4gICAgLyphZnRlciBzaWdub3V0IGlzIGNsaWNrZWQgc2Vzc2lvbiBzdG9yYWdlIGlzIGNsZWFyZWQgYW5kIHRoZSBsb2dJbi9yZWdpc3RlciBmb3JtIGlzIHByZXNlbnRlZCBmcm9tIGhlcmVcclxuICAgIGFub3RoZXIgdXNlciBjYW4gbG9nIGluIGFuZCBzZXNzaW9uIHN0b3JhZ2Ugd2lsbCBraWNrIG9mZiBmb3IgdGhlIG5ldyBsb2dnZWQgaW4gdXNlciovXHJcbiAgICAkKFwiLnNpZ25PdXRcIikuY2xpY2soZXZlbnRMaXN0ZW5lcnMubm9tYWROYXZMaW5rKVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGRhc2hib2FyZCIsImltcG9ydCBldmVudExpc3RlbmVycyBmcm9tIFwiLi9ldmVudExpc3RlbmVyc1wiO1xyXG5cclxuY29uc3QgZG9tQ29tcG9uZW50cyA9IHtcclxuICBjcmVhdGVEb21FbGVtZW50KHsgZWxlbWVudFR5cGUsIGNvbnRlbnQgPSBudWxsLCBjc3NDbGFzcywgYXR0cmlidXRlcyA9IHt9IH0pIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnRUeXBlKTtcclxuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xyXG4gICAgaWYoY3NzQ2xhc3Mpe1xyXG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3MpO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQga2V5IGluIGF0dHJpYnV0ZXMpIHtcclxuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgfSxcclxuICBjcmVhdGVFdmVudElucHV0KCkge1xyXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiZm9ybVwiLCBhdHRyaWJ1ZXM6IHtjbGFzczogXCJldmVudElucHV0XCJ9fSk7XHJcbiAgICBjb25zdCBmb3JtSGVhZGVyID0gdGhpcy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJoMVwiLCBjb250ZW50OiBcIkFkZCBhIE5ldyBFdmVudDpcIn0pO1xyXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtSGVhZGVyKTtcclxuXHJcbiAgICBjb25zdCBuYW1lRmllbGRzZXQgPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImZpZWxkc2V0XCJ9KTtcclxuICAgIGNvbnN0IG5hbWVMYWJlbCA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwibGFiZWxcIiwgY29udGVudDogXCJFdmVudCBOYW1lOlwiLCBhdHRyaWJ1dGVzOiB7Zm9yOiBcImV2ZW50TmFtZVwifX0pO1xyXG4gICAgY29uc3QgbmFtZUlucHV0ID0gdGhpcy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJpbnB1dFwiLCBhdHRyaWJ1dGVzOiB7dHlwZTogXCJ0ZXh0XCIsIG5hbWU6IFwiZXZlbnROYW1lXCIsIGlkOiBcImV2ZW50TmFtZVwifX0pO1xyXG4gICAgbmFtZUZpZWxkc2V0LmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XHJcbiAgICBuYW1lRmllbGRzZXQuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcclxuXHJcbiAgICBjb25zdCBkYXRlRmllbGRzZXQgPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImZpZWxkc2V0XCJ9KTtcclxuICAgIGNvbnN0IGRhdGVMYWJlbCA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwibGFiZWxcIiwgY29udGVudDogXCJFdmVudCBEYXRlOlwiLCBhdHRyaWJ1dGVzOiB7Zm9yOiBcImV2ZW50RGF0ZVwifX0pO1xyXG4gICAgY29uc3QgZGF0ZUlucHV0ID0gdGhpcy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJpbnB1dFwiLCBhdHRyaWJ1dGVzOiB7dHlwZTogXCJkYXRlXCIsIG5hbWU6IFwiZXZlbnREYXRlXCIsIGlkOiBcImV2ZW50RGF0ZVwifX0pO1xyXG4gICAgZGF0ZUZpZWxkc2V0LmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XHJcbiAgICBkYXRlRmllbGRzZXQuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcclxuXHJcbiAgICBjb25zdCB0aW1lRmllbGRzZXQgPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImZpZWxkc2V0XCJ9KTtcclxuICAgIGNvbnN0IHRpbWVMYWJlbCA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwibGFiZWxcIiwgY29udGVudDogXCJFdmVudCBUaW1lOlwiLCBhdHRyaWJ1dGVzOiB7Zm9yOiBcImV2ZW50VGltZVwifX0pO1xyXG4gICAgY29uc3QgdGltZUlucHV0ID0gdGhpcy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJpbnB1dFwiLCBhdHRyaWJ1dGVzOiB7dHlwZTogXCJ0aW1lXCIsIG5hbWU6IFwiZXZlbnRUaW1lXCIsIGlkOiBcImV2ZW50VGltZVwifX0pO1xyXG4gICAgdGltZUZpZWxkc2V0LmFwcGVuZENoaWxkKHRpbWVMYWJlbCk7XHJcbiAgICB0aW1lRmllbGRzZXQuYXBwZW5kQ2hpbGQodGltZUlucHV0KTtcclxuXHJcbiAgICBjb25zdCBsb2NhdGlvbkZpZWxkc2V0ID0gdGhpcy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJmaWVsZHNldFwifSk7XHJcbiAgICBjb25zdCBsb2NhdGlvbkxhYmVsID0gdGhpcy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJsYWJlbFwiLCBjb250ZW50OiBcIkVudGVyIExvY2F0aW9uOlwiLCBhdHRyaWJ1dGVzOiB7Zm9yOiBcImV2ZW50TG9jYXRpb25cIn19KTtcclxuICAgIGNvbnN0IGxvY2F0aW9uSW5wdXQgPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImlucHV0XCIsIGF0dHJpYnV0ZXM6IHt0eXBlOiBcInRleHRcIiwgbmFtZTogXCJldmVudExvY2F0aW9uXCIsIGlkOiBcImV2ZW50TG9jYXRpb25cIn19KTtcclxuICAgIGxvY2F0aW9uRmllbGRzZXQuYXBwZW5kQ2hpbGQobG9jYXRpb25MYWJlbCk7XHJcbiAgICBsb2NhdGlvbkZpZWxkc2V0LmFwcGVuZENoaWxkKGxvY2F0aW9uSW5wdXQpO1xyXG5cclxuICAgIGNvbnN0IHNhdmVCdXR0b24gPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImJ1dHRvblwiLCBjb250ZW50OiBcIlNhdmVcIiwgYXR0cmlidXRlczoge3R5cGU6IFwiYnV0dG9uXCIsIGlkOiBcInNhdmVFdmVudFwifX0pO1xyXG5cclxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQobmFtZUZpZWxkc2V0KTtcclxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZUZpZWxkc2V0KTtcclxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodGltZUZpZWxkc2V0KTtcclxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQobG9jYXRpb25GaWVsZHNldCk7XHJcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHNhdmVCdXR0b24pO1xyXG5cclxuICAgIHJldHVybiBmb3JtQ29udGFpbmVyO1xyXG4gIH0sXHJcbiAgY3JlYXRlRXZlbnRJdGVtIChldmVudE9iamVjdCkge1xyXG4gICAgY29uc3QgZXZlbnRJdGVtID0gdGhpcy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJhcnRpY2xlXCIsIGF0dHJpYnV0ZXM6IHtjbGFzczogXCJldmVudEl0ZW1cIn19KTtcclxuICAgIGNvbnN0IGV2ZW50SGVhZGVyID0gdGhpcy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJoMlwiLCBjb250ZW50OiBldmVudE9iamVjdC5ldmVudE5hbWV9KTtcclxuICAgIGNvbnN0IGV2ZW50RGF0ZVRpbWUgPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcInBcIiwgY29udGVudDogYEF0ICR7ZXZlbnRPYmplY3QuZXZlbnRUaW1lfSBvbiAke2V2ZW50T2JqZWN0LmV2ZW50RGF0ZX1gfSk7XHJcbiAgICBjb25zdCBldmVudExvY2F0aW9uID0gdGhpcy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJwXCIsIGNvbnRlbnQ6IGBMb2NhdGlvbjogJHtldmVudE9iamVjdC5ldmVudExvY2F0aW9ufWB9KTtcclxuICAgIGNvbnN0IGVkaXRCdXR0b24gPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImJ1dHRvblwiLCBjb250ZW50OiBcIkVkaXRcIiwgYXR0cmlidXRlczoge3R5cGU6IFwiYnV0dG9uXCIsIGlkOiBgZWRpdEV2ZW50LS0ke2V2ZW50T2JqZWN0LmlkfWB9fSk7XHJcbiAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudExpc3RlbmVycy5oYW5kbGVFdmVudEVkaXRCdXR0b24pO1xyXG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gdGhpcy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJidXR0b25cIiwgY29udGVudDogXCJEZWxldGVcIiwgYXR0cmlidXRlczoge3R5cGU6IFwiYnV0dG9uXCIsIGlkOiBgZGVsZXRlRXZlbnQtLSR7ZXZlbnRPYmplY3QuaWR9YH19KTtcclxuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnRMaXN0ZW5lcnMuaGFuZGxlRXZlbnREZWxldGVCdXR0b24pO1xyXG5cclxuICAgIGV2ZW50SXRlbS5hcHBlbmRDaGlsZChldmVudEhlYWRlcik7XHJcbiAgICBldmVudEl0ZW0uYXBwZW5kQ2hpbGQoZXZlbnREYXRlVGltZSk7XHJcbiAgICBldmVudEl0ZW0uYXBwZW5kQ2hpbGQoZXZlbnRMb2NhdGlvbik7XHJcbiAgICBldmVudEl0ZW0uYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XHJcbiAgICBldmVudEl0ZW0uYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcclxuXHJcbiAgICByZXR1cm4gZXZlbnRJdGVtO1xyXG4gIH0sXHJcbiAgY3JlYXRlRXZlbnRFZGl0SW5wdXQoY29udGFpbmVySWQsIGV2ZW50T2JqZWN0KSB7XHJcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gdGhpcy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJmb3JtXCIsIGF0dHJpYnVlczoge2NsYXNzOiBcImV2ZW50RWRpdFwifX0pO1xyXG5cclxuICAgIGNvbnN0IG5hbWVGaWVsZHNldCA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiZmllbGRzZXRcIn0pO1xyXG4gICAgY29uc3QgbmFtZUxhYmVsID0gdGhpcy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJsYWJlbFwiLCBjb250ZW50OiBcIkVkaXQgTmFtZTpcIiwgYXR0cmlidXRlczoge2ZvcjogXCJldmVudE5hbWVcIn19KTtcclxuICAgIGNvbnN0IG5hbWVJbnB1dCA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiaW5wdXRcIiwgYXR0cmlidXRlczoge3R5cGU6IFwidGV4dFwiLCBuYW1lOiBcImV2ZW50TmFtZVwiLCB2YWx1ZTogZXZlbnRPYmplY3QuZXZlbnROYW1lfX0pO1xyXG4gICAgbmFtZUZpZWxkc2V0LmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XHJcbiAgICBuYW1lRmllbGRzZXQuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcclxuXHJcbiAgICBjb25zdCBkYXRlRmllbGRzZXQgPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImZpZWxkc2V0XCJ9KTtcclxuICAgIGNvbnN0IGRhdGVMYWJlbCA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwibGFiZWxcIiwgY29udGVudDogXCJFZGl0IERhdGU6XCIsIGF0dHJpYnV0ZXM6IHtmb3I6IFwiZXZlbnREYXRlXCJ9fSk7XHJcbiAgICBjb25zdCBkYXRlSW5wdXQgPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImlucHV0XCIsIGF0dHJpYnV0ZXM6IHt0eXBlOiBcImRhdGVcIiwgbmFtZTogXCJldmVudERhdGVcIiwgdmFsdWU6IGV2ZW50T2JqZWN0LmV2ZW50RGF0ZX19KTtcclxuICAgIGRhdGVGaWVsZHNldC5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xyXG4gICAgZGF0ZUZpZWxkc2V0LmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XHJcblxyXG4gICAgY29uc3QgdGltZUZpZWxkc2V0ID0gdGhpcy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJmaWVsZHNldFwifSk7XHJcbiAgICBjb25zdCB0aW1lTGFiZWwgPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImxhYmVsXCIsIGNvbnRlbnQ6IFwiRWRpdCBUaW1lOlwiLCBhdHRyaWJ1dGVzOiB7Zm9yOiBcImV2ZW50VGltZVwifX0pO1xyXG4gICAgY29uc3QgdGltZUlucHV0ID0gdGhpcy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJpbnB1dFwiLCBhdHRyaWJ1dGVzOiB7dHlwZTogXCJ0aW1lXCIsIG5hbWU6IFwiZXZlbnRUaW1lXCIsIHZhbHVlOiBldmVudE9iamVjdC5ldmVudFRpbWV9fSk7XHJcbiAgICB0aW1lRmllbGRzZXQuYXBwZW5kQ2hpbGQodGltZUxhYmVsKTtcclxuICAgIHRpbWVGaWVsZHNldC5hcHBlbmRDaGlsZCh0aW1lSW5wdXQpO1xyXG5cclxuICAgIGNvbnN0IGxvY2F0aW9uRmllbGRzZXQgPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImZpZWxkc2V0XCJ9KTtcclxuICAgIGNvbnN0IGxvY2F0aW9uTGFiZWwgPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImxhYmVsXCIsIGNvbnRlbnQ6IFwiRWRpdCBMb2NhdGlvbjpcIiwgYXR0cmlidXRlczoge2ZvcjogXCJldmVudExvY2F0aW9uXCJ9fSk7XHJcbiAgICBjb25zdCBsb2NhdGlvbklucHV0ID0gdGhpcy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJpbnB1dFwiLCBhdHRyaWJ1dGVzOiB7dHlwZTogXCJ0ZXh0XCIsIG5hbWU6IFwiZXZlbnRMb2NhdGlvblwiLCB2YWx1ZTogZXZlbnRPYmplY3QuZXZlbnRMb2NhdGlvbn19KTtcclxuICAgIGxvY2F0aW9uRmllbGRzZXQuYXBwZW5kQ2hpbGQobG9jYXRpb25MYWJlbCk7XHJcbiAgICBsb2NhdGlvbkZpZWxkc2V0LmFwcGVuZENoaWxkKGxvY2F0aW9uSW5wdXQpO1xyXG5cclxuICAgIC8vY29uc3QgdXBkYXRlQnV0dG9uID0gdGhpcy5jcmVhdGVEb21FbGVtZW50KHtlbGVtZW50VHlwZTogXCJidXR0b25cIiwgY29udGVudDogXCJVcGRhdGVcIiwgYXR0cmlidXRlczoge3R5cGU6IFwiYnV0dG9uXCIsIGlkOiBcInN1Ym1pdEVkaXRzXCJ9fSk7XHJcbiAgICAvLyB1cGRhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50TGlzdGVuZXJzLmhhbmRsZUV2ZW50VXBkYXRlQnV0dG9uKTtcclxuXHJcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWVGaWVsZHNldCk7XHJcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVGaWVsZHNldCk7XHJcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpbWVGaWVsZHNldCk7XHJcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uRmllbGRzZXQpO1xyXG4gICAgLy9mb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XHJcblxyXG4gICAgbGV0IGN1cnJlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtjb250YWluZXJJZH1gKTtcclxuICAgIHdoaWxlIChjdXJyZW50Q29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgY3VycmVudENvbnRhaW5lci5yZW1vdmVDaGlsZChjdXJyZW50Q29udGFpbmVyLmZpcnN0Q2hpbGQpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gZm9ybUNvbnRhaW5lcjtcclxuICB9XHJcbiAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRvbUNvbXBvbmVudHMiLCIvLyBpbXBvcnQgZXZlbnRzIGZyb20gXCIuL2V2ZW50c1wiO1xyXG5cclxuLy8gaW1wb3J0IG5vbWFkRGF0YSBmcm9tIFwiLi9ub21hZERhdGFcIjtcclxuLy8gaW1wb3J0IG5vbWFkRGF0YSBmcm9tIFwiLi9ub21hZERhdGFcIjtcclxuLy8gaW1wb3J0IGZyaWVuZHMgZnJvbSBcIi4vZnJpZW5kc1wiO1xyXG4vLyBpbXBvcnQgbmV3cyBmcm9tIFwiLi9uZXdzXCJcclxuLy8gaW1wb3J0IG1lc3NhZ2VzIGZyb20gXCIuL21lc3NhZ2VzXCI7XHJcbmltcG9ydCBkYXNoQm9hcmQgZnJvbSBcIi4vZGFzaGJvYXJkXCJcclxuLy8gaW1wb3J0IGRvbUNvbXBvbmVudHMgZnJvbSBcIi4vZG9tQ29tcG9uZW50c1wiO1xyXG5pbXBvcnQgZXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vZXZlbnRMaXN0ZW5lcnNcIjtcclxuXHJcbi8vQlVJTERTIE5BSUdBVElPTkJBUi8vXHJcbi8vIGRvbUNvbXBvbmVudHMuY3JlYXRlTmF2QmFyKClcclxuZGFzaEJvYXJkLmJ1aWxkTG9naW5Gb3JtKClcclxuJChcIm1vZGFsQnV0dG9uXCIpLmNsaWNrKGV2ZW50TGlzdGVuZXJzLm1vZGFsRGlzcGxheUFuaW1hdGlvbilcclxuXHJcbi8vTkVXUyBTRUNUSU9OXHJcbi8vIG5ld3Muc2F2ZSgpO1xyXG4vLyBuZXdzLmFsbFNhdmVkKCk7XHJcbi8vIG5ld3MuZ2V0TmV3cygpO1xyXG5cclxuXHJcbi8vIG5ld3MubmV3c0VsZW1lbnRDcmVhdG9yKCk7XHJcbi8vIG5ld3MubmV3c0VsZW1lbnRDcmVhdG9yKCk7XHJcblxyXG4iLCJpbXBvcnQgZGFzaGJvYXJkIGZyb20gXCIuL2Rhc2hib2FyZFwiXHJcbmltcG9ydCBkb21Db21wb25lbnRzIGZyb20gXCIuL2RvbUNvbXBvbmVudHNcIjtcclxuaW1wb3J0IG5vbWFkRGF0YSBmcm9tIFwiLi9ub21hZERhdGFcIjtcclxuaW1wb3J0IGV2ZW50cyBmcm9tIFwiLi9ldmVudHNcIjtcclxuaW1wb3J0IG1lc3NhZ2VzIGZyb20gXCIuL21lc3NhZ2VzXCI7XHJcbmltcG9ydCBmcmllbmRzIGZyb20gXCIuL2ZyaWVuZHNcIjtcclxuaW1wb3J0IG5ld3MgZnJvbSBcIi4vbmV3c1wiO1xyXG5pbXBvcnQgdGFza3MgZnJvbSBcIi4vdGFza3NcIjtcclxuXHJcbmNvbnN0IGV2ZW50TGlzdGVuZXJzID0ge1xyXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIExPR0lOIEZPUk06IHVzZXIgZW50ZXJzIFVzZXJuYW1lIGFuZCBQYXNzd29yZC4gd2hlbiBVc2VyIGNsaWNrcyBsb2dpbiwgdGhlIGlucHV0IGZpZWxkIGFuZCBOT01BRFMgaGVhZGVyIGRpc2FwcGVhclxyXG4gICAgYW5kIHRoZSB1c2VyIHdpbGwgYmUgZGlzcGxheWVkIHRoZSBcIkRhc2hib2FyZFwiIGFuZCB0aGUgbmF2aWdhdGlvbiBiYXIuIFVwb24gbG9naW4sIHNlc3Npb25TdG9yYWdlIGlzIHN0YXJ0ZWQuIEluIHRoZSBDb25zb2xlXHJcbiAgICB5b3Ugd2lsbCBiZSBhYmxlIHRvIHNlZSBXaG8gaXMgbG9nZ2VkIGluIGFuZCB3aGF0IHRoZWlyIHVzZXJJZCBpcy4gaWUuIDEsMiwzLDQgZXRjLlxyXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gICAgdXNlckxvZ2luKCl7XHJcbiAgICAgICAgbGV0IGxvZ0luVmFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN1c2VyTmFtZVZhbFwiKS52YWx1ZVxyXG4gICAgICAgIGxldCBwYXNzd29yZFZhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFzc3dvcmRWYWxcIikudmFsdWVcclxuICAgICAgICAvL2dldCB0byBjb21wYXJlXHJcbiAgICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xyXG5cclxuICAgICAgICBcImRhdGFTZXRcIiA6IFwidXNlcnNcIixcclxuICAgICAgICBcImZldGNoVHlwZVwiIDogXCJHRVRcIixcclxuICAgICAgICBcImVtYmVkSXRlbVwiIDogXCI/X2VtYmVkPXVzZXJzXCJcclxuXHJcbiAgICB9KS50aGVuKHBhcnNlZFVzZXJzID0+IHtcclxuXHJcbiAgICAgICAgcGFyc2VkVXNlcnMuZm9yRWFjaCh1c2VyID0+IHtcclxuICAgICAgICAgICAgICAvKklmIGxvZ2luIGNyZWRlbnRpYWxzIG1hdGNoIHRob3NlIGluIGRhdGFiYXNlLmpzb24uIFdlIHdhbnQgdGhlIHVzZXIgdG8gYmUgZGlzcGxheWVkIHRoZWlyIFwiZGFzaGJvYWRcIlxyXG4gICAgICAgICAgICAgIGFuZCBuYXZpZ2F0aW9uIGJhci4gU28gd2UgbmVlZCB0byBzZXQgZGlzcGxheSB0byBub25lIGFuZCBpbnZva2UgdGhlIGZ1bmN0aW9uIC0gY3JlYXRlTmF2QmFyKCkqL1xyXG4gICAgICAgICAgICBpZihsb2dJblZhbCA9PT0gdXNlci51c2VyTmFtZSAmJiBwYXNzd29yZFZhbCA9PT0gdXNlci5wYXNzd29yZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vaGlkZXMgTk9NQUQgaGVhZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIudC1ib3JkZXJcIikuaGlkZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgLy9oaWRlcyB0aGUgZm9ybVxyXG4gICAgICAgICAgICAgICAgICAgICQoXCIuZm9ybVwiKS5oaWRlKClcclxuICAgICAgICAgICAgICAgICAgICAvL2Rpc3BsYXlzIG5hdmlnYXRpbiBiYXJcclxuICAgICAgICAgICAgICAgICAgICBkYXNoYm9hcmQuY3JlYXRlTmF2QmFyKClcclxuICAgICAgICAgICAgICAgICAgICAvL3Nlc3Npb24gc3RvcmFnZVxyXG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJ1c2VySWRcIiwgdXNlci5pZClcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdXNlcklkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cgdmVyaWZ5aW5nIHRoYXQgY3JlZGVudGlhbHMgbWF0Y2ggYW5kIHVzZXIgaXMgbG9nZ2VkIGluXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb2dnZWQgaW4gYXNcIiArIFwiIFwiICsgdXNlci51c2VyTmFtZSlcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInlvdXIgdXNlciBJRCBpczogXCIgKyB1c2VySWQpXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBSRUdJU1RSQVRJT04gRk9STTogV2hlbiByZWdpc3RlcmluZyBmb3IgYW4gYWNjb3VudCB0aGUgdXNlciB3aWxsIGVudGVyIGRlc2lyZWQgdXNlcm5hbWUsIGVtYWlsLCBhbmQgcGFzc3dvcmRcclxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICAgIHVzZXJSZWdpc3RyYXRpb24oKXtcclxuICAgICAgICBsZXQgcmVnVXNlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JlZ1VzZXJOYW1lXCIpLnZhbHVlXHJcbiAgICAgICAgbGV0IHJlZ0VtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZWdFbWFpbFwiKS52YWx1ZVxyXG4gICAgICAgIGxldCByZWdQYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVnUGFzc3dvcmRcIikudmFsdWVcclxuICAgICAgICAvLyBsZXQgcmVnQ29uZmlybVBhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZWdVc2VyTmFtZVwiKS52YWx1ZVxyXG5cclxuICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XHJcblxyXG4gICAgICAgICAgICAgICAgXCJkYXRhU2V0XCIgOiBcInVzZXJzXCIsXHJcbiAgICAgICAgICAgICAgICBcImZldGNoVHlwZVwiIDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ1c2VyTmFtZVwiOiByZWdVc2VyTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBcImVtYWlsXCI6IHJlZ0VtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicGFzc3dvcmRcIjogcmVnUGFzc3dvcmRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkudGhlbihcclxuICAgICAgICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xyXG4gICAgICAgICAgICAgICAgXCJkYXRhU2V0XCIgOiBcInVzZXJzXCIsXHJcbiAgICAgICAgICAgICAgICBcImZldGNoVHlwZVwiIDogXCJHRVRcIixcclxuICAgICAgICAgICAgICAgIFwiZW1iZWRJdGVtXCIgOiBgP3VzZXJOYW1lPSR7cmVnVXNlck5hbWV9YFxyXG4gICAgICAgICAgICB9KS50aGVuKHVzZXIgPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyKVxyXG4gICAgICAgICAgICAgICAgdXNlci5mb3JFYWNoKCB4ID0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJ1c2VySWRcIiwgeC5pZClcclxuXHJcbiAgICAgICAgICAgICAgICAvL2hpZGVzIE5PTUFEIGhlYWRpbmdcclxuICAgICAgICAgICAgICAgICQoXCIudC1ib3JkZXJcIikuaGlkZSgpXHJcbiAgICAgICAgICAgICAgICAvL2hpZGVzIHRoZSBmb3JtXHJcbiAgICAgICAgICAgICAgICAkKFwiLmZvcm1cIikuaGlkZSgpXHJcbiAgICAgICAgICAgICAgICAvL2Rpc3BsYXlzIG5hdmlnYXRpbiBiYXJcclxuICAgICAgICAgICAgICAgIGRhc2hib2FyZC5jcmVhdGVOYXZCYXIoKVxyXG4gICAgICAgICAgICAgICAgbGV0IHVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIilcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cgdmVyaWZ5aW5nIHRoYXQgY3JlZGVudGlhbHMgbWF0Y2ggYW5kIHVzZXIgaXMgbG9nZ2VkIGluXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvZ2dlZCBpbiBhc1wiICsgXCIgXCIgKyB4LnVzZXJOYW1lKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ5b3VyIHVzZXIgSUQgaXM6IFwiICsgdXNlcklkKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgfSxcclxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBNT0RBTDogdXNlciB3aWxsIGNsaWNrIHRoZSBOT01BRCBNSVNTSU9OIGJ1dHRvbiBhbmQgYSBtb2RhbCB3aWxsIHBvcCB1cCBkZXNjcmliaW5nIHdoYXQgdGhlIGFwcGxpY2F0aW9uIGlzIGFib3V0XHJcbiAgICBhbmQgd2hvIGl0IGlzIHRhaWxvcmVkIHRvd2FyZHNcclxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICAgIG1vZGFsRGlzcGxheUFuaW1hdGlvbigpe1xyXG4gICAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm9tYWRNb2RhbFwiKTtcclxuXHJcbiAgICAgICAgLy8gdGFyZ2V0IG1vZGFsIHRvIG9wZW4gaXRcclxuICAgICAgICBsZXQgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbEJ1dHRvblwiKTtcclxuXHJcbiAgICAgICAgLy8gR2V0IHRoZSA8c3Bhbj4gZWxlbWVudCB0aGF0IGNsb3NlcyB0aGUgbW9kYWxcclxuICAgICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjbG9zZVwiKVswXTtcclxuICAgICAgICAvLyBXaGVuIHRoZSB1c2VyIGNsaWNrcyB0aGUgYnV0dG9uLCBvcGVuIHRoZSBtb2RhbFxyXG4gICAgICAgIGJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gV2hlbiB0aGUgdXNlciBjbGlja3Mgb24gPHNwYW4+ICh4KSwgY2xvc2UgdGhlIG1vZGFsXHJcbiAgICAgICAgc3Bhbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBXaGVuIHRoZSB1c2VyIGNsaWNrcyBhbnl3aGVyZSBvdXRzaWRlIG9mIHRoZSBtb2RhbCwgY2xvc2UgaXRcclxuICAgICAgICB3aW5kb3cub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQgPT0gbW9kYWwpIHtcclxuICAgICAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAkKFwiLm1lc3NhZ2UgYVwiKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICQoXCJmb3JtXCIpLmFuaW1hdGUoe2hlaWdodDogXCJ0b2dnbGVcIiwgb3BhY2l0eTogXCJ0b2dnbGVcIn0sIFwic2xvd1wiKVxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIE5BVkJBUiBMSSBFTElTVEVORVJTOiBXaGVuIHVzZXIgY2xpY2tzIGFuIGl0ZW0gaW4gdGhlIE5BVkJBUiB0aGUgY29udGVudCBhc3NvY2lhdGVkIHdpdGggdGhhdCB0YWIgd2lsbCBwb3B1bGF0ZSB0aGUgRE9NXHJcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgICBtZXNzYWdlc05hdkxpbmsoKXtcclxuICAgICAgICBtZXNzYWdlcy5jcmVhdGVNZXNzYWdlQm9hcmQoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwid29ya2luZ1wiKVxyXG5cclxuICAgIH0sXHJcbiAgICBldmVudHNOYXZMaW5rKCl7XHJcbiAgICAgICAgICAgIGV2ZW50cy5zaG93RXZlbnRGb3JtKClcclxuICAgICAgICAgICAgLy9hcHBlbmRVc2VyRXZlbnRcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJldmVudHMgY2xpY2tlZFwiKVxyXG4gICAgfSxcclxuICAgIGZyaWVuZHNOYXZMaW5rKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJmcmllbmRzIG5hdiBsaW5rIGNsaWNrZWRcIilcclxuICAgICAgICBmcmllbmRzLmxvYWRDdXJyZW50VXNlcnNGcmllbmRzKClcclxuICAgICAgICBmcmllbmRzLmRlZmluZUN1cnJlbnRVc2Vyc0ZyaWVuZHMoKVxyXG4gICAgfSxcclxuICAgIG5ld3NOYXZMaW5rKCl7XHJcbiAgICAgICAgLy9ORVdTIFNFQ1RJT05cclxuICAgICAgICBuZXdzLnNhdmUoKTtcclxuICAgICAgICBuZXdzLmFsbFNhdmVkKCk7XHJcbiAgICAgICAgbmV3cy5nZXROZXdzKCk7XHJcbiAgICAgICAgbmV3cy5uZXdzRWxlbWVudENyZWF0b3IoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm5ld3MgbGluayBjbGlja2VkXCIpXHJcbiAgICB9LFxyXG4gICAgdGFza3NOYXZMaW5rKCl7XHJcbiAgICAgICAgdGFza3MuY3JlYXRlVGFza1RhYmxlcygpXHJcbiAgICB9LFxyXG4gICAgbm9tYWROYXZMaW5rKCl7XHJcbiAgICAgICAgZGFzaGJvYXJkLmJ1aWxkTG9naW5Gb3JtKClcclxuICAgICAgICAkKFwibmF2XCIpLmhpZGUoKVxyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLmNsZWFyKClcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNpZ25lZCBvdXRcIilcclxuICAgIH0sXHJcbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBFTkQgT0YgTkFWSUdBVElPTiBFVkVOVExJU1RFTkVSU1xyXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbiAgICBmcmllbmRzRGVsZXRlRnJpZW5kICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQpO1xyXG4gICAgXHJcbiAgICB9LFxyXG4gICAgaGFuZGxlRXZlbnRTYXZlQnV0dG9uKCkge1xyXG4gICAgICAgIGNvbnN0IG5hbWVJbnB1dHRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXZlbnROYW1lXCIpLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGRhdGVJbnB1dHRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXZlbnREYXRlXCIpLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHRpbWVJbnB1dHRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXZlbnRUaW1lXCIpLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uSW5wdXR0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2V2ZW50TG9jYXRpb25cIikudmFsdWU7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBldmVudE9iamVjdCA9IHtcclxuICAgICAgICAgICAgZXZlbnROYW1lOiBuYW1lSW5wdXR0ZWQsXHJcbiAgICAgICAgICAgIGV2ZW50RGF0ZTogZGF0ZUlucHV0dGVkLFxyXG4gICAgICAgICAgICBldmVudFRpbWU6IHRpbWVJbnB1dHRlZCxcclxuICAgICAgICAgICAgZXZlbnRMb2NhdGlvbjogbG9jYXRpb25JbnB1dHRlZFxyXG4gICAgICAgIH07XHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcclxuICAgICAgICAgICAgZGF0YVNldDogXCJldmVudHNcIixcclxuICAgICAgICAgICAgZmV0Y2hUeXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgZGF0YUJhc2VPYmplY3Q6IHtcclxuICAgICAgICAgICAgICAgIHVzZXJJZDogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSxcclxuICAgICAgICAgICAgICAgIGV2ZW50TmFtZTogZXZlbnRPYmplY3QuZXZlbnROYW1lLFxyXG4gICAgICAgICAgICAgICAgZXZlbnREYXRlOiBldmVudE9iamVjdC5ldmVudERhdGUsXHJcbiAgICAgICAgICAgICAgICBldmVudFRpbWU6IGV2ZW50T2JqZWN0LmV2ZW50VGltZSxcclxuICAgICAgICAgICAgICAgIGV2ZW50TG9jYXRpb246IGV2ZW50T2JqZWN0LmV2ZW50TG9jYXRpb25cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oICgpID0+IHtcclxuICAgICAgICAgICAgZXZlbnRzLmFwcGVuZFVzZXJFdmVudHMoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgaGFuZGxlRXZlbnREZWxldGVCdXR0b24oKSB7XHJcbiAgICAgICAgY29uc3QgaWRUb0RlbGV0ZSA9IGV2ZW50LnRhcmdldC5pZC5zcGxpdChcIi0tXCIpWzFdO1xyXG4gICAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcclxuICAgICAgICAgICAgZGVsZXRlSWQ6IGlkVG9EZWxldGUsXHJcbiAgICAgICAgICAgIGRhdGFTZXQ6IFwiZXZlbnRzXCIsXHJcbiAgICAgICAgICAgIGZldGNoVHlwZTogXCJERUxFVEVcIixcclxuICAgICAgICAgICAgZGF0YUJhc2VPYmplY3Q6IHtcclxuICAgICAgICAgICAgICAgIHVzZXJJZDogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbiggKCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudHMuYXBwZW5kVXNlckV2ZW50cygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICBoYW5kbGVFdmVudEVkaXRCdXR0b24oKSB7XHJcbiAgICAgICAgY29uc3QgaWRUb0VkaXQgPSBldmVudC50YXJnZXQuaWQuc3BsaXQoXCItLVwiKVsxXTtcclxuICAgICAgICAvLyBjb25zdCBldmVudE9iamVjdCA9XHJcbiAgICAgICAgZG9tQ29tcG9uZW50cy5jcmVhdGVFdmVudEVkaXRJbnB1dChpZFRvRWRpdCwgKVxyXG4gICAgfSxcclxuICAgIGhhbmRsZUV2ZW50VXBkYXRlQnV0dG9uKCkge1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGV2ZW50TGlzdGVuZXJzO1xyXG4iLCIvLyBBdXRob3I6IENvbGUgQnJ5YW50IC8gUHVycG9zZTpcclxuXHJcbmltcG9ydCBub21hZERhdGEgZnJvbSBcIi4vbm9tYWREYXRhXCI7XHJcbmltcG9ydCBkb21Db21wb25lbnRzIGZyb20gXCIuL2RvbUNvbXBvbmVudHNcIjtcclxuLy9pbXBvcnQgZXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vZXZlbnRMaXN0ZW5lcnNcIjtcclxuXHJcblxyXG4vL2NyZWF0ZUV2ZW50SW5wdXQgYW5kIGNyZWF0ZUV2ZW50SXRlbSB3aWxsIGJlIGFkZGVkIHRvIHRoaXMgb2JqZWN0LiBzbyBkb21idWlsZGVyLlxyXG5jb25zdCBldmVudHMgPSB7XHJcbiAgc2hvd0V2ZW50Rm9ybSAoKSB7XHJcbiAgICAkKFwiI291dHB1dFwiKS5lbXB0eSgpXHJcbiAgICBjb25zdCBvdXRwdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI291dHB1dFwiKTtcclxuICAgIGNvbnN0IGV2ZW50Rm9ybSA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRXZlbnRJbnB1dCgpO1xyXG4gICAgb3V0cHV0LmFwcGVuZENoaWxkKGV2ZW50Rm9ybSk7XHJcbiAgICBjb25zdCBldmVudExvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIpXHJcbiAgICBldmVudExvZy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImV2ZW50TG9nXCIpO1xyXG4gICAgb3V0cHV0LmFwcGVuZENoaWxkKGV2ZW50TG9nKTtcclxuICB9LFxyXG4gIGFwcGVuZFVzZXJFdmVudHMoKSB7XHJcbiAgICBjb25zdCBldmVudExvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXZlbnRMb2dcIik7XHJcbiAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XHJcbiAgICAgIGRhdGFTZXQ6IFwiZXZlbnRzXCIsXHJcbiAgICAgIGZldGNoVHlwZTogXCJHRVRcIixcclxuICAgICAgZGF0YUJhc2VPYmplY3Q6IHtcclxuICAgICAgICB1c2VySWQ6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIilcclxuICAgICAgICB9LFxyXG4gICAgICBlbWJlZEl0ZW06IFwiP19lbWJlZD1ldmVudHNcIlxyXG4gICAgfSlcclxuICAgIC50aGVuKHBhcnNlZFJlc3BvbnNlID0+IHtcclxuICAgICAgbGV0IGRvY3VGcmFnID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgICBwYXJzZWRSZXNwb25zZS5mb3JFYWNoKGV2ZW50ID0+IHtcclxuICAgICAgICB3aGlsZSAoZXZlbnRMb2cuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgICAgZXZlbnRMb2cucmVtb3ZlQ2hpbGQoZXZlbnRMb2cuZmlyc3RDaGlsZClcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGV2ZW50SXRlbSA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRXZlbnRJdGVtKGV2ZW50KTtcclxuICAgICAgICBkb2N1RnJhZy5hcHBlbmRDaGlsZChldmVudEl0ZW0pO1xyXG4gICAgICB9KTtcclxuICAgICAgZXZlbnRMb2cuYXBwZW5kQ2hpbGQoZG9jdUZyYWcpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxufTtcclxuXHJcbi8vIGV2ZW50cy5zaG93RXZlbnRGb3JtKCk7XHJcbi8vIGV2ZW50cy5hcHBlbmRVc2VyRXZlbnRzKCk7XHJcbi8vIGV2ZW50cy5kZWxldGVFdmVudCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZXZlbnRzOyIsImltcG9ydCBub21hZERhdGEgZnJvbSBcIi4vbm9tYWREYXRhXCJcclxuaW1wb3J0IGRvbUNvbXBvbmVudHMgZnJvbSBcIi4vZG9tQ29tcG9uZW50c1wiO1xyXG5pbXBvcnQgZnJpZW5kc0V2ZW50c0xpc3RlbmVyIGZyb20gXCIuL2ZyaWVuZHNFdmVudHNMaXN0ZW5lclwiO1xyXG5cclxuY29uc3QgZnJpZW5kcyA9IHtcclxuXHJcbiAgXHJcbiAgZGVmaW5lQ3VycmVudFVzZXJzRnJpZW5kcyAoKSB7XHJcbiAgICAkKFwiI291dHB1dFwiKS5lbXB0eSgpXHJcbiAgICBjb25zdCBjdXJyZW50VXNlciA9IDE7XHJcbiAgICBsZXQgdXNlcklkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyk7XHJcbiAgICAvLyBsZXQgY3VycmVudFVzZXIgPSBOdW1iZXIodXNlcklkKTtcclxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRVc2VyLCB1c2VySWQpXHJcbiAgICBsZXQgZnJpZW5kSG9sZGVyID0gW107XHJcbi8vIFBVTEwgRlJPTSBGUklFTkRTIEpTT04tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5ub21hZERhdGEuY29ubmVjdFRvRGF0YSh7ICAgIFxyXG5cImRhdGFTZXRcIiA6IFwiZnJpZW5kc1wiLFxyXG5cImZldGNoVHlwZVwiIDogXCJHRVRcIixcclxuXCJkYXRhQmFzZU9iamVjdFwiIDogXCJcIixcclxuXCJlbWJlZEl0ZW1cIiA6IFwiP19lbWJlZD1ldmVudHNcIn0pXHJcbi50aGVuKGZyb21GcmllbmRzID0+IHtcclxuICAvLyBjb25zb2xlLmxvZyhmcm9tRnJpZW5kcylcclxuICBmcm9tRnJpZW5kcy5mb3JFYWNoKGZyaWVuZERhdGEgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coZnJpZW5kRGF0YSlcclxuICAgIGlmIChmcmllbmREYXRhLnVzZXJJZCA9PT0gY3VycmVudFVzZXIpIHtcclxuICAgICAgZnJpZW5kSG9sZGVyLnB1c2goZnJpZW5kRGF0YS5vdGhlckZyaWVuZElkKVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgZnJpZW5kSG9sZGVyLmZvckVhY2gob2ZmaWNpYWxGcmllbmQgPT4ge1xyXG4gICAgdGhpcy5sb2FkQ3VycmVudFVzZXJzRnJpZW5kcyhvZmZpY2lhbEZyaWVuZClcclxuICB9KVxyXG59KVxyXG59LFxyXG5sb2FkQ3VycmVudFVzZXJzRnJpZW5kcyAoZnJpZW5kKSB7XHJcbiAgLy8gUFVMTCBGUk9NIFVTRVJTIEpTT04gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAvLyBjb25zb2xlLmxvZyhmcmllbmQpXHJcbiAgICAgIGNvbnN0IHRhcmdldENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3V0cHV0XCIpXHJcbiAgICAgIHRhcmdldENvbnRhaW5lci5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xyXG4gICAgICAgIGVsZW1lbnRUeXBlOiBcInNlY3Rpb25cIixcclxuICAgICAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgICAgICBjbGFzczogXCJmcmllbmQtY29udGFpbmVyXCIsXHJcbiAgICAgICAgICBpZDogYGZyaWVuZC0ke2ZyaWVuZH1gXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSlcclxuICAgICAgY29uc3QgZnJpZW5kQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGZyaWVuZC0ke2ZyaWVuZH1gKVxyXG5cclxuXHJcbiAgICAgIGxldCBmcmllbmREb21CdWlsZGVyID0gW107XHJcbiAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcclxuICAgICAgXCJkYXRhU2V0XCIgOiBcInVzZXJzXCIsXHJcbiAgICAgIFwiZmV0Y2hUeXBlXCIgOiBcIkdFVFwiLFxyXG4gICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiBcIlwiLFxyXG4gICAgICBcImVtYmVkSXRlbVwiIDogXCI/X2VtYmVkPWV2ZW50c1wifSlcclxuICAgICAgLnRoZW4oZnJvbVVzZXJEYXRhID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhmcm9tVXNlckRhdGEpO1xyXG4gICAgICAgIGZyb21Vc2VyRGF0YS5mb3JFYWNoKHVzZXJJbmZvID0+IHtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGZyaWVuZCwgdXNlckluZm8uaWQpXHJcbiAgICAgICAgICBpZiAodXNlckluZm8uaWQgPT09IGZyaWVuZCkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh1c2VySW5mby51c2VyTmFtZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZyaWVuZElkZW50aWZpZXIgPSB7XHJcbiAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiaDJcIixcclxuICAgICAgICAgICAgICBjb250ZW50OiB1c2VySW5mby51c2VyTmFtZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmcmllbmREb21CdWlsZGVyLnB1c2goZnJpZW5kSWRlbnRpZmllcilcclxuICAgICAgICAgICAgLy8gUFVMTCBGUk9NIEVWRU5UUyBKU09OIC0tLS0tLVxyXG4gICAgICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XHJcbiAgICAgICAgICAgICAgICBcImRhdGFTZXRcIiA6IFwiZXZlbnRzXCIsXHJcbiAgICAgICAgICAgIFwiZmV0Y2hUeXBlXCIgOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiBcIlwiLFxyXG4gICAgICAgICAgICBcImVtYmVkSXRlbVwiIDogXCI/X2VtYmVkPWV2ZW50c1wifSlcclxuICAgICAgICAgICAgLnRoZW4oZXZlbnRzID0+IHtcclxuICAgICAgICAgICAgICBldmVudHMuZm9yRWFjaChldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQudXNlcklkID09PSBmcmllbmQpIHtcclxuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXZlbnQuZXZlbnROYW1lKTtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgZXZlbnRIb2xkZXIgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwicFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGBZb3VyIGZlbGxvdyBub21hZHMgdXBjb21pbmcgZXZlbnQ6ICR7ZXZlbnQuZXZlbnROYW1lfSBvbiAke2V2ZW50LmV2ZW50RGF0ZX1gLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlkOiBgZXZlbnQtJHtldmVudC5pZH1gLFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBmcmllbmREb21CdWlsZGVyLnB1c2goZXZlbnRIb2xkZXIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLy8gUFVMTCBGUk9NIE5FV1NJVEVNUyBKU09OIC0tLS0tLVxyXG4gICAgICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XHJcbiAgICAgICAgICAgIFwiZGF0YVNldFwiIDogXCJuZXdzaXRlbXNcIixcclxuICAgICAgICAgICAgXCJmZXRjaFR5cGVcIiA6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIFwiZGF0YUJhc2VPYmplY3RcIiA6IFwiXCIsXHJcbiAgICAgICAgICAgIFwiZW1iZWRJdGVtXCIgOiBcIj9fZW1iZWQ9bmV3c2l0ZW1zXCJ9KVxyXG4gICAgICAgICAgICAudGhlbihuZXdzU2hpeiA9PiB7XHJcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobmV3c1NoaXopXHJcbiAgICAgICAgICAgICAgbmV3c1NoaXouZm9yRWFjaCh1c2VyU3BlY2lmaWNBcnRpY2xlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXNlclNwZWNpZmljQXJ0aWNsZXMudXNlcklkID09PSBmcmllbmQpIHtcclxuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codXNlclNwZWNpZmljQXJ0aWNsZXMudGl0bGUpXHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGFydGljbGVIb2xkZXIgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwicFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHVzZXJTcGVjaWZpY0FydGljbGVzLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlkOiBgYXJ0aWNsZS0ke3VzZXJTcGVjaWZpY0FydGljbGVzLmlkfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGZyaWVuZERvbUJ1aWxkZXIucHVzaChhcnRpY2xlSG9sZGVyKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZnJpZW5kRG9tQnVpbGRlcilcclxuICAgICAgICAgICAgICBmcmllbmREb21CdWlsZGVyLmZvckVhY2gob2JqZWN0ID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICBmcmllbmRDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KG9iamVjdCkpXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICBjb25zdCBkZWxldGVGcmllbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcbiAgICAgICAgICAgICAgZGVsZXRlRnJpZW5kLmNsYXNzTGlzdC5hZGQoYGRlbGV0ZS1mcmllbmQtJHtmcmllbmR9YClcclxuICAgICAgICAgICAgICBkZWxldGVGcmllbmQudGV4dENvbnRlbnQgPSBcIkRFTEVURVwiO1xyXG4gICAgICAgICAgICAgIGZyaWVuZENvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVGcmllbmQpO1xyXG4gICAgICAgICAgICAgIGRlbGV0ZUZyaWVuZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZnJpZW5kc0V2ZW50c0xpc3RlbmVyLmZyaWVuZHNEZWxldGVGcmllbmQoKVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuXHJcbiAgfSxcclxuICBpbml0aWFsaXplUG90ZW50aWFsRnJpZW5kcyAoKSB7XHJcbiAgICBsZXQgdXNlcklkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyk7XHJcbiAgICBsZXQgY3VycmVudFVzZXIgPSBOdW1iZXIodXNlcklkKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiZnJpZW5kcyBQYWdlIHVzZXIgaWQgaXMtXCIsY3VycmVudFVzZXIpO1xyXG5cclxuICAgIGNvbnN0IHRhcmdldENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3V0cHV0XCIpO1xyXG4gICAgY29uc3QgZmluZE5ld0ZyaWVuZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xyXG4gICAgbGV0IGZyaWVuZHNJSGF2ZSA9IFtdO1xyXG4gICAgZmluZE5ld0ZyaWVuZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZ1dHVyZS1mcmllbmRzXCIpO1xyXG4gICAgdGFyZ2V0Q29udGFpbmVyLmFwcGVuZENoaWxkKGZpbmROZXdGcmllbmRDb250YWluZXIpO1xyXG5cclxuICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcclxuICAgICAgXCJkYXRhU2V0XCIgOiBcImZyaWVuZHNcIixcclxuICAgICAgXCJmZXRjaFR5cGVcIiA6IFwiR0VUXCIsXHJcbiAgICAgIFwiZGF0YUJhc2VPYmplY3RcIiA6IFwiXCIsXHJcbiAgICAgIFwiZW1iZWRJdGVtXCIgOiBcIj9fZW1iZWQ9ZnJpZW5kc1wiXHJcbiAgICB9KVxyXG4gICAgLnRoZW4oZnJvbUZyaWVuZHMgPT4ge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhmcm9tRnJpZW5kcylcclxuICAgICAgZnJvbUZyaWVuZHMuZm9yRWFjaChmcmllbmREYXRhID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhmcmllbmREYXRhKVxyXG4gICAgICAgIGlmIChmcmllbmREYXRhLnVzZXJJZCA9PT0gY3VycmVudFVzZXIpIHtcclxuICAgICAgICAgIGZyaWVuZHNJSGF2ZS5wdXNoKGZyaWVuZERhdGEub3RoZXJGcmllbmRJZClcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGZyaWVuZHNJSGF2ZSlcclxuICAgICAgXHJcbiAgICAgICAgdGhpcy5zaG93VXNlclBvdGVudGlhbEZyaWVuZHMoZnJpZW5kc0lIYXZlKVxyXG4gICAgfSlcclxuICB9LFxyXG4gIHNob3dVc2VyUG90ZW50aWFsRnJpZW5kcyAoZnJpZW5kKSB7XHJcbiAgICBsZXQgdXNlcklkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyk7XHJcbiAgICBsZXQgY3VycmVudFVzZXIgPSBOdW1iZXIodXNlcklkKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGZyaWVuZClcclxuICAgIGxldCBhbGxUaGVVc2VycyA9IFtdXHJcbiAgICBmcmllbmQucHVzaChjdXJyZW50VXNlcilcclxuICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcclxuICAgICAgXCJkYXRhU2V0XCIgOiBcInVzZXJzXCIsXHJcbiAgICAgIFwiZmV0Y2hUeXBlXCIgOiBcIkdFVFwiLFxyXG4gICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiBcIlwiLFxyXG4gICAgICBcImVtYmVkSXRlbVwiIDogXCI/X2VtYmVkPXVzZXJzXCJcclxuICAgIH0pXHJcbiAgICAudGhlbihhbGxVc2VycyA9PiB7XHJcbiAgICAgIGFsbFVzZXJzLmZvckVhY2godXNlciA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codXNlci5pZClcclxuICAgICAgICBhbGxUaGVVc2Vycy5wdXNoKHVzZXIuaWQpXHJcbiAgICAgIH0pXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZXZlcnlvbmVcIixhbGxUaGVVc2VycywgXCJ1c2VyIGFuZCBmcmllbmRzXCIsZnJpZW5kKVxyXG4gICAgICBsZXQgbm90Q3VycmVudEZyaWVuZCA9IHRoaXMuZGlmZmVyZW5jZU9mMkFycmF5cyhhbGxUaGVVc2VycywgZnJpZW5kKVxyXG4gICAgICBub3RDdXJyZW50RnJpZW5kLmZvckVhY2gobm9GcmllbmRPZk1pbmUgPT4ge1xyXG4gICAgICAgIHRoaXMucHJpbnRQb3RlbnRpYWxGcmllbmRzVG9Ccm93c2VyKG5vRnJpZW5kT2ZNaW5lKVxyXG4gICAgICAgIFxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9LFxyXG4gICBkaWZmZXJlbmNlT2YyQXJyYXlzIChhcnJheTEsIGFycmF5Mikge1xyXG4gICAgdmFyIHRlbXAgPSBbXTtcclxuICAgIGFycmF5MSA9IGFycmF5MS50b1N0cmluZygpLnNwbGl0KCcsJykubWFwKE51bWJlcik7XHJcbiAgICBhcnJheTIgPSBhcnJheTIudG9TdHJpbmcoKS5zcGxpdCgnLCcpLm1hcChOdW1iZXIpO1xyXG4gICAgXHJcbiAgICBmb3IgKHZhciBpIGluIGFycmF5MSkge1xyXG4gICAgaWYoYXJyYXkyLmluZGV4T2YoYXJyYXkxW2ldKSA9PT0gLTEpIHRlbXAucHVzaChhcnJheTFbaV0pO1xyXG4gICAgfVxyXG4gICAgZm9yKGkgaW4gYXJyYXkyKSB7XHJcbiAgICBpZihhcnJheTEuaW5kZXhPZihhcnJheTJbaV0pID09PSAtMSkgdGVtcC5wdXNoKGFycmF5MltpXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGVtcC5zb3J0KChhLGIpID0+IGEtYik7XHJcbiAgICB9LFxyXG4gICAgcHJpbnRQb3RlbnRpYWxGcmllbmRzVG9Ccm93c2VyIChub3RBRnJpZW5kKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKG5vdEFGcmllbmQpXHJcbiAgICAgIGNvbnN0IHRhcmdldFNlY3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZ1dHVyZS1mcmllbmRzXCIpO1xyXG4gICAgICB0YXJnZXRTZWN0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XHJcbiAgICAgICAgZWxlbWVudFR5cGU6IFwiZGl2XCIsXHJcbiAgICAgICAgYXR0cmlidXRlczoge1xyXG4gICAgICAgICAgaWQ6IGBwb3RlbnRpYWxGcmllbmQtJHtub3RBRnJpZW5kfWBcclxuICAgICAgICB9XHJcbiAgICAgIH0pKVxyXG5cclxuICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xyXG4gICAgICAgIFwiZGF0YVNldFwiIDogXCJ1c2Vyc1wiLFxyXG4gICAgICAgIFwiZmV0Y2hUeXBlXCIgOiBcIkdFVFwiLFxyXG4gICAgICAgIFwiZGF0YUJhc2VPYmplY3RcIiA6IFwiXCIsXHJcbiAgICAgICAgXCJlbWJlZEl0ZW1cIiA6IFwiP19lbWJlZD11c2Vyc1wiXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKHVzZXJzSW5mbyA9PiB7XHJcbiAgICAgICAgdXNlcnNJbmZvLmZvckVhY2godXNlciA9PiB7XHJcbiAgICAgICAgICBpZiAodXNlci5pZCA9PT0gbm90QUZyaWVuZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyLmlkLCBcImlzIG5vIGZyaWVuZFwiKVxyXG4gICAgICAgICAgICBjb25zdCBwb3RlbnRpYWxGcmllbmRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcG90ZW50aWFsRnJpZW5kLSR7bm90QUZyaWVuZH1gKVxyXG4gICAgICAgICAgICBwb3RlbnRpYWxGcmllbmRDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcclxuICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2gyJyxcclxuICAgICAgICAgICAgICBjb250ZW50OiB1c2VyLnVzZXJOYW1lLFxyXG4gICAgICAgICAgICAgIGNzc0NsYXNzOiBgcG90ZW50aWFsLWZyaWVuZC0ke3VzZXIuaWR9YFxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgcG90ZW50aWFsRnJpZW5kQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XHJcbiAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiYnV0dG9uXCIsXHJcbiAgICAgICAgICAgICAgY29udGVudDogXCJBZGQgRnJpZW5kXCIsXHJcbiAgICAgICAgICAgICAgYXR0cmlidXRlczoge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGBhZGQtZnJpZW5kLWJ1dHRvbi0ke3VzZXIuaWR9YFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgIGNvbnN0IGZvckFkZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBhZGQtZnJpZW5kLWJ1dHRvbi0ke3VzZXIuaWR9YCk7XHJcbiAgICAgICAgICAgIGZvckFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGZyaWVuZHNFdmVudHNMaXN0ZW5lci5mcmllbmRzQWRkRnJpZW5kKClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgICAvLyBjb25zb2xlLmxvZyhub3RBRnJpZW5kKVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnJpZW5kc1xyXG5cclxuLy8gY29uc3QgdGVzdGVyID0gW1xyXG4vLyAgIHtcclxuLy8gICAgIGVsZW1lbnRUeXBlOiBcImgyXCIsXHJcbi8vICAgICBjb250ZW50OiBcImpha2UgYmFubm9uXCJcclxuLy8gICB9LFxyXG4vLyAgIHtcclxuLy8gICAgIGVsZW1lbnRUeXBlOiBcInBcIixcclxuLy8gICAgIGNvbnRlbnQ6IFwiUG9vbCBQYXJ0eSAzcG1cIlxyXG4vLyAgIH0sXHJcbi8vICAge1xyXG4vLyAgICAgZWxlbWVudFR5cGU6IFwicFwiLFxyXG4vLyAgICAgY29udGVudDogXCJjaGVjayBvdXQgdGhpcyBuZXdzIGFydGljbGVcIlxyXG4vLyAgIH1cclxuLy8gXSIsIi8vIGltcG9ydCBmcmllbmRzIGZyb20gXCIuL2ZyaWVuZHNcIlxyXG5pbXBvcnQgbm9tYWREYXRhIGZyb20gXCIuL25vbWFkRGF0YVwiO1xyXG5cclxuY29uc3QgZnJpZW5kc0V2ZW50c0xpc3RlbmVyID0ge1xyXG4gIGZyaWVuZHNEZWxldGVGcmllbmQgKCkge1xyXG4gICAgY29uc3QgZnJpZW5kVG9EZWxldGUgPSAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC52YWx1ZSkuc3BsaXQoXCItXCIpWzJdO1xyXG4gICAgbGV0IHVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIik7XHJcbiAgICBsZXQgY3VycmVudFVzZXIgPSB1c2VySWQ7XHJcbiAgICBjb25zb2xlLmxvZyhmcmllbmRUb0RlbGV0ZSwgY3VycmVudFVzZXIpO1xyXG4gICAgbGV0IGZpbmFsTnVtYmVyU2VuZEZvckRlbGV0ZSA9IDBcclxuXHJcbiAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XHJcbiAgICAgIFwiZGF0YVNldFwiIDogXCJmcmllbmRzXCIsXHJcbiAgICAgIFwiZmV0Y2hUeXBlXCIgOiBcIkdFVFwiLFxyXG4gICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiBcIlwiLFxyXG4gICAgICBcImVtYmVkSXRlbVwiIDogXCI/X2VtYmVkPWZyaWVuZHNcIlxyXG4gICAgfSlcclxuICAgIC50aGVuKGRlc3Ryb3lGcmllbmRzSGVhcnQgPT4ge1xyXG4gICAgICBkZXN0cm95RnJpZW5kc0hlYXJ0LmZvckVhY2goZ29vZGJ5ZUZyaWVuZCA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZ29vZGJ5ZUZyaWVuZC51c2VySWQsIE51bWJlcihjdXJyZW50VXNlcikpXHJcbiAgICAgICAgaWYgKGdvb2RieWVGcmllbmQub3RoZXJGcmllbmRJZCA9PT0gTnVtYmVyKGZyaWVuZFRvRGVsZXRlKSAmJiBnb29kYnllRnJpZW5kLnVzZXJJZCA9PT0gTnVtYmVyKGN1cnJlbnRVc2VyKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBlYWNlT3V0XCIsZ29vZGJ5ZUZyaWVuZC5pZCk7XHJcbiAgICAgICAgICAgIGZpbmFsTnVtYmVyU2VuZEZvckRlbGV0ZSA9IGdvb2RieWVGcmllbmQuaWQ7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgbGV0IGdvb2RCeWVTZWFyY2hSZXN1bHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGZyaWVuZC0ke2ZyaWVuZFRvRGVsZXRlfWApO1xyXG4gICAgICBnb29kQnllU2VhcmNoUmVzdWx0cy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGdvb2RCeWVTZWFyY2hSZXN1bHRzKTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKGZpbmFsTnVtYmVyU2VuZEZvckRlbGV0ZSlcclxuICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xyXG4gICAgICAgIFwiZGVsZXRlSWRcIiA6IGZpbmFsTnVtYmVyU2VuZEZvckRlbGV0ZSxcclxuICAgICAgICBcImRhdGFTZXRcIiA6IFwiZnJpZW5kc1wiLFxyXG4gICAgICAgIFwiZmV0Y2hUeXBlXCIgOiBcIkRFTEVURVwiLFxyXG4gICAgICAgIFwiZGF0YUJhc2VPYmplY3RcIiA6IHtcclxuICAgICAgICAgIFwidXNlcklkXCI6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIilcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgZnJpZW5kc0FkZEZyaWVuZCAoKSB7XHJcbiAgICBsZXQgdXNlcklkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKTtcclxuICAgIGxldCBjdXJyZW50VXNlciA9IE51bWJlcih1c2VySWQpO1xyXG5cclxuICAgIFxyXG4gICAgY29uc3QgZnJpZW5kVG9CZUFkZGVkID0gKGV2ZW50LnRhcmdldC5pZCkuc3BsaXQoXCItXCIpWzNdO1xyXG4gICAgY29uc29sZS5sb2coYHVzZXIke2N1cnJlbnRVc2VyfWAsYEFkZGluZyBGcmllbmQke2ZyaWVuZFRvQmVBZGRlZH1gKVxyXG4gICAgXHJcbiAgICBsZXQgZ29vZEJ5ZU5vbkZyaWVuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwb3RlbnRpYWxGcmllbmQtJHtmcmllbmRUb0JlQWRkZWR9YCk7XHJcbiAgICBnb29kQnllTm9uRnJpZW5kLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZ29vZEJ5ZU5vbkZyaWVuZCk7XHJcbiAgICBhbGVydChgJHtldmVudC50YXJnZXQucHJldmlvdXNTaWJsaW5nLmlubmVyVGV4dH0gaXMgbm93IHlvdXIgZnJpZW5kIWApO1xyXG5cclxuICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcclxuICAgICAgXCJkYXRhU2V0XCIgOiBcImZyaWVuZHNcIixcclxuICAgICAgXCJmZXRjaFR5cGVcIiA6IFwiUE9TVFwiLFxyXG4gICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiB7XHJcbiAgICAgICAgXCJ1c2VySWRcIjogY3VycmVudFVzZXIsXHJcbiAgICAgICAgXCJvdGhlckZyaWVuZElkXCI6IE51bWJlcihmcmllbmRUb0JlQWRkZWQpLFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnJpZW5kc0V2ZW50c0xpc3RlbmVyIiwiaW1wb3J0IG5vbWFkRGF0YSBmcm9tIFwiLi9ub21hZERhdGFcIjtcclxuaW1wb3J0IGRvbUNvbXBvbmVudHMgZnJvbSBcIi4vZG9tQ29tcG9uZW50c1wiO1xyXG5pbXBvcnQgbWVzc2FnZXNFdmVudExpc3RlbmVycyBmcm9tIFwiLi9tZXNzYWdlc0V2ZW50TGlzdGVuZXJzXCI7XHJcbi8vIGltcG9ydCBmcmllbmRzRXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vZnJpZW5kc0V2ZW50TGlzdGVuZXJzLmpzXCI7XHJcblxyXG5jb25zdCBtZXNzYWdlcyA9IHtcclxuXHJcbiAgICBjcmVhdGVNZXNzYWdlQm9hcmQoKSB7XHJcbiAgICAgICAgJChcIiNvdXRwdXRcIikuZW1wdHkoKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBvdXRwdXRBcnRpY2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdXRwdXRcIilcclxuXHJcbiAgICAgICAgLy9jcmVhdGUgZGlzcGxheSBjb250YWluZXJcclxuICAgICAgICBsZXQgbWVzc2FnZXNDb250YWluZXIgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xyXG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwic2VjdGlvblwiLFxyXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwibWVzc2FnZXNDb250YWluZXJcIixcclxuICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcclxuICAgICAgICAgICAgICAgIGlkIDogXCJtZXNzYWdlc0NvbnRhaW5lclwiXHJcbiAgICAgICAgICAgIH19KTtcclxuXHJcbiAgICAgICAgLy9jcmVhdGUgbWVzc2FnZSBpbnB1dCBmaWVsZFxyXG4gICAgICAgIGxldCBtZXNzYWdlSW5wdXQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xyXG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwiaW5wdXRcIixcclxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcIm1lc3NhZ2VJbnB1dFwiLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xyXG4gICAgICAgICAgICAgICAgaWQgOiBcIm1lc3NhZ2VJbnB1dFwiLFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiRW50ZXIgTWVzc2FnZSBIZXJlXCJcclxuICAgICAgICAgICAgfX0pO1xyXG5cclxuICAgICAgICAvL2NyZWF0ZSBzdWJtaXQgYnV0dG9uIGZvciBpbnB1dCBmaWVsZFxyXG4gICAgICAgIGxldCBtZXNzYWdlU3VibWl0QnV0dG9uID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcclxuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImJ1dHRvblwiLFxyXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwibWVzc2FnZVN1Ym1pdEJ1dHRvblwiLFxyXG4gICAgICAgICAgICBjb250ZW50IDogXCJTdWJtaXRcIixcclxuICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcclxuICAgICAgICAgICAgICAgIGlkIDogXCJtZXNzYWdlU3VibWl0QnV0dG9uXCIsXHJcbiAgICAgICAgICAgICAgICB0eXBlIDogXCJzdWJtaXRcIlxyXG4gICAgICAgICAgICB9fSk7XHJcblxyXG4gICAgICAgIG1lc3NhZ2VTdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1lc3NhZ2VzRXZlbnRMaXN0ZW5lcnMucG9zdE5ld01lc3NhZ2UsIHtvbmNlOiB0cnVlfSk7XHJcbiAgICAgICAgbWVzc2FnZXNDb250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZUlucHV0KTtcclxuICAgICAgICBtZXNzYWdlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlU3VibWl0QnV0dG9uKTtcclxuICAgICAgICBvdXRwdXRBcnRpY2xlLmFwcGVuZENoaWxkKG1lc3NhZ2VzQ29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0TWVzc2FnZXMoKVxyXG4gICAgfSxcclxuXHJcbiAgICBnZXRNZXNzYWdlcygpIHtcclxuXHJcbiAgICAgICAgLy9HRVQgZmV0Y2ggJiAudGhlbiB0byBidWlsZCBvYmplY3QocykgZm9yIGNyZWF0ZURvbUVsZW1lbnQoKSB1c2luZyBfZXhwYW5kIHRvIGRpc3BsYXkgVU46IG1lc3NhZ2VcclxuICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XHJcblxyXG4gICAgICAgICAgICAgICAgZGF0YVNldCA6IFwibWVzc2FnZXNcIixcclxuICAgICAgICAgICAgICAgIGZldGNoVHlwZSA6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgICAgICBlbWJlZEl0ZW0gOiBcIj9fZXhwYW5kPXVzZXJcIlxyXG5cclxuICAgICAgICB9KS50aGVuKG1lc3NhZ2VzID0+IHtcclxuXHJcbiAgICAgICAgICAgIGxldCBtZXNzYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZXNzYWdlc0NvbnRhaW5lclwiKTtcclxuICAgICAgICAgICAgbGV0IG1lc3NhZ2VJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVzc2FnZUlucHV0XCIpO1xyXG5cclxuICAgICAgICAgICAgLy9zb3J0IG1lc3NhZ2VzIGJ5IHRpbWVTdGFtcFxyXG4gICAgICAgICAgICBtZXNzYWdlcy5zb3J0KGZ1bmN0aW9uKGEsYil7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoYS50aW1lU3RhbXApIC0gbmV3IERhdGUoYi50aW1lU3RhbXApO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vYnVpbGQgRE9NIENvbXBvbmVudCBmb3IgZWFjaCBtZXNzYWdlIGFuZCBhcHBlbmRcclxuICAgICAgICAgICAgbWVzc2FnZXMuZm9yRWFjaChtZXNzYWdlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZVRleHQgPSBtZXNzYWdlLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICBsZXQgdXNlck5hbWUgPSBtZXNzYWdlLnVzZXIudXNlck5hbWU7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZUlkID0gbWVzc2FnZS5pZDtcclxuICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlVGltZVN0YW1wID0gbWVzc2FnZS50aW1lU3RhbXA7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZVVzZXIgPSBgJHttZXNzYWdlLnVzZXJJZH1gO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxvZ2dlZEluVXNlciA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2VFbGVtZW50ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImgzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgOiBcIm1lc3NhZ2VVc2VyTmFtZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgOiBgJHt1c2VyTmFtZX06YCxcclxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogYG1lc3NhZ2Uke21lc3NhZ2VJZH1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lIDogcGFyc2VJbnQobWVzc2FnZVVzZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZUVsZW1lbnQyID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwicFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzIDogXCJtZXNzYWdlVGV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgOiBgJHttZXNzYWdlVGV4dH1gLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBtZXNzYWdlSWRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2VVc2VyID09PSBsb2dnZWRJblVzZXIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2VFZGl0QnV0dG9uID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJidXR0b25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgOiBcIm1lc3NhZ2VFZGl0QnV0dG9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgOiBcIkVkaXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBgbWVzc2FnZUVkaXRCdXR0b25fJHttZXNzYWdlSWR9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG1lc3NhZ2VUaW1lU3RhbXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1lc3NhZ2VzRXZlbnRMaXN0ZW5lcnMuZWRpdE1lc3NhZ2UsIHtvbmNlOiB0cnVlfSlcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWxlbWVudC5hcHBlbmRDaGlsZChtZXNzYWdlRWxlbWVudDIpXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsZW1lbnQuYXBwZW5kQ2hpbGQobWVzc2FnZUVkaXRCdXR0b24pXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUNvbnRhaW5lci5pbnNlcnRCZWZvcmUobWVzc2FnZUVsZW1lbnQsIG1lc3NhZ2VJbnB1dClcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbGVtZW50LmFwcGVuZENoaWxkKG1lc3NhZ2VFbGVtZW50MilcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlQ29udGFpbmVyLmluc2VydEJlZm9yZShtZXNzYWdlRWxlbWVudCwgbWVzc2FnZUlucHV0KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZyaWVuZHNFdmVudExpc3RlbmVycy5zaGl6KVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgfSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVzc2FnZXM7XHJcbiIsImltcG9ydCBub21hZERhdGEgZnJvbSBcIi4vbm9tYWREYXRhXCI7XHJcbmltcG9ydCBkb21Db21wb25lbnRzIGZyb20gXCIuL2RvbUNvbXBvbmVudHNcIjtcclxuaW1wb3J0IG1lc3NhZ2VzIGZyb20gXCIuL21lc3NhZ2VzXCI7XHJcbi8vIGltcG9ydCBmcmllbmRzRXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vZnJpZW5kc0V2ZW50TGlzdGVuZXJzLmpzXCI7XHJcblxyXG5jb25zdCBtZXNzYWdlc0V2ZW50TGlzdGVuZXJzID0ge1xyXG5cclxuICAgIHBvc3ROZXdNZXNzYWdlKCkge1xyXG5cclxuICAgICAgICBsZXQgbWVzc2FnZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZXNzYWdlSW5wdXRcIikudmFsdWU7XHJcbiAgICAgICAgbGV0IHRpbWVTdGFtcCA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcclxuXHJcbiAgICAgICAgICAgIGRhdGFTZXQgOiBcIm1lc3NhZ2VzXCIsXHJcbiAgICAgICAgICAgIGZldGNoVHlwZSA6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBkYXRhQmFzZU9iamVjdCA6IHtcclxuICAgICAgICAgICAgICAgIHVzZXJJZCA6IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpKSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgOiBtZXNzYWdlSW5wdXQsLy8udmFsdWUsXHJcbiAgICAgICAgICAgICAgICB0aW1lU3RhbXAgOiB0aW1lU3RhbXBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLnRoZW4oc2hpdCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNoaXQpXHJcbiAgICAgICAgICAgICQoXCIjb3V0cHV0XCIpLmVtcHR5KCk7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VzLmNyZWF0ZU1lc3NhZ2VCb2FyZCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG5cclxuICAgIGVkaXRNZXNzYWdlKCkge1xyXG4gICAgICAgIGxldCBudW1iZXIgPSBldmVudC5jdXJyZW50VGFyZ2V0LmlkO1xyXG4gICAgICAgIGxldCBtZXNzYWdlQXJyYXkgPSBudW1iZXIuc3BsaXQoXCJfXCIpO1xyXG4gICAgICAgIGxldCBtZXNzYWdlSWQgPSBtZXNzYWdlQXJyYXlbMV07XHJcblxyXG4gICAgICAgIGxldCBtZXNzYWdlVG9FZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7bWVzc2FnZUlkfWApO1xyXG4gICAgICAgIGxldCBtZXNzYWdlVGV4dCA9IG1lc3NhZ2VUb0VkaXQuaW5uZXJIVE1MO1xyXG4gICAgICAgIGxldCBtZXNzYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG1lc3NhZ2Uke21lc3NhZ2VJZH1gKTtcclxuICAgICAgICBsZXQgbWVzc2FnZVRpbWVTdGFtcCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQubmFtZTtcclxuXHJcbiAgICAgICAgbGV0IG1lc3NhZ2VFZGl0Rm9ybSA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCAoe1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImZvcm1cIixcclxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcIm1lc3NhZ2VFZGl0Rm9ybVwiLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xyXG4gICAgICAgICAgICAgICAgaWQgOiBcIm1lc3NhZ2VFZGl0Rm9ybVwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IG1lc3NhZ2VFZGl0RmllbGRzZXQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImZpZWxkc2V0XCIsXHJcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJtZXNzYWdlRWRpdEZpZWxkc2V0XCIsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XHJcbiAgICAgICAgICAgICAgICBpZCA6IFwibWVzc2FnZUVkaXRGaWVsZHNldFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IG1lc3NhZ2VFZGl0SW5wdXQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImlucHV0XCIsXHJcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJtZXNzYWdlRWRpdElucHV0XCIsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XHJcbiAgICAgICAgICAgICAgICBpZCA6IGBtZXNzYWdlRWRpdElucHV0XyR7bWVzc2FnZUlkfWAsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA6IGAke21lc3NhZ2VUZXh0fWBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgbWVzc2FnZUVkaXRTdWJtaXRCdXR0b24gPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImJ1dHRvblwiLFxyXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwibWVzc2FnZUVkaXRTdWJtaXRCdXR0b25cIixcclxuICAgICAgICAgICAgY29udGVudCA6IFwiU3VibWl0XCIsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XHJcbiAgICAgICAgICAgICAgICBpZCA6IGBtZXNzYWdlRWRpdFN1Ym1pdEJ1dHRvbl8ke21lc3NhZ2VJZH1gLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogbWVzc2FnZVRpbWVTdGFtcCxcclxuICAgICAgICAgICAgICAgIHR5cGUgOiBcImJ1dHRvblwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBtZXNzYWdlRWRpdFN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbWVzc2FnZXNFdmVudExpc3RlbmVycy5oYW5kbGVFZGl0U3VibWl0QnV0dG9uKVxyXG4gICAgICAgIG1lc3NhZ2VFZGl0RmllbGRzZXQuYXBwZW5kQ2hpbGQobWVzc2FnZUVkaXRJbnB1dClcclxuICAgICAgICBtZXNzYWdlRWRpdEZpZWxkc2V0LmFwcGVuZENoaWxkKG1lc3NhZ2VFZGl0U3VibWl0QnV0dG9uKVxyXG4gICAgICAgIG1lc3NhZ2VFZGl0Rm9ybS5hcHBlbmRDaGlsZChtZXNzYWdlRWRpdEZpZWxkc2V0KVxyXG4gICAgICAgIG1lc3NhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZUVkaXRGb3JtKVxyXG4gICAgfSxcclxuXHJcbiAgICBoYW5kbGVFZGl0U3VibWl0QnV0dG9uKCkge1xyXG4gICAgICAgIGxldCBudW1iZXIgPSBldmVudC5jdXJyZW50VGFyZ2V0LmlkO1xyXG4gICAgICAgIGxldCBtZXNzYWdlQXJyYXkgPSBudW1iZXIuc3BsaXQoXCJfXCIpO1xyXG4gICAgICAgIGxldCBtZXNzYWdlSWQgPSBtZXNzYWdlQXJyYXlbMV07XHJcbiAgICAgICAgbGV0IG1lc3NhZ2VUaW1lU3RhbXAgPSBgJHtldmVudC5jdXJyZW50VGFyZ2V0Lm5hbWV9YDtcclxuICAgICAgICBsZXQgbWVzc2FnZUVkaXRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBtZXNzYWdlRWRpdElucHV0XyR7bWVzc2FnZUlkfWApO1xyXG5cclxuICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XHJcblxyXG4gICAgICAgICAgICBwdXRJZCA6IG1lc3NhZ2VJZCxcclxuICAgICAgICAgICAgZGF0YVNldCA6IFwibWVzc2FnZXNcIixcclxuICAgICAgICAgICAgZmV0Y2hUeXBlIDogXCJQVVRcIixcclxuICAgICAgICAgICAgZGF0YUJhc2VPYmplY3QgOiB7XHJcbiAgICAgICAgICAgICAgICB1c2VySWQgOiBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSksXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBgJHttZXNzYWdlRWRpdElucHV0LnZhbHVlfWAsXHJcbiAgICAgICAgICAgICAgICB0aW1lU3RhbXA6IGAke21lc3NhZ2VUaW1lU3RhbXB9YFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkudGhlbihzaGl0ID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc2hpdClcclxuICAgICAgICAgICAgJChcIiNvdXRwdXRcIikuZW1wdHkoKTtcclxuICAgICAgICAgICAgbWVzc2FnZXMuY3JlYXRlTWVzc2FnZUJvYXJkKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBtZXNzYWdlc0V2ZW50TGlzdGVuZXJzOyIsImltcG9ydCBub21hZERhdGEgZnJvbSBcIi4vbm9tYWREYXRhXCI7XHJcbmltcG9ydCBkb21Db21wb25lbnRzIGZyb20gXCIuL2RvbUNvbXBvbmVudHNcIjtcclxuLy9wdWxsIGZyb20gYXBpIHRoZW4gZGlzcGxheSB0byBkb20uXHJcbi8vIGNyZWF0ZSBzYXZlIGJ1dHRvbiBzZW5kIHNhdmVkIGFydGljbGVzIHRvIEpzb25cclxuLy8gY3JlYXRlIGJ1dHRvbiB0byBwdWxsIGFsbCBzYXZlZCBtYXRlcmlhbHMgaW4ganNvbi5cclxuLy8gZGVsZXRlIG1ldGhvZCBmb3IgYXJ0aWNsZXNcclxuY29uc3QgbmV3cyA9IHtcclxuXHJcbiAgICBnZXROZXdzKCl7XHJcbiAgICAgICAgLy9wdWxsIHRoZW4gc2VuZCBwdWxsZWQgZGF0YSB0byBkb21cclxuICAgICAgICByZXR1cm4gZmV0Y2goXCJodHRwOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cy8xXCIpXHJcbiAgICAgICAgICAgIC50aGVuKG5ld3NJdGVtcyA9PiBuZXdzSXRlbXMuanNvbigpKVxyXG4gICAgfSxcclxuICAgIHNhdmUoKSB7XHJcbiAgICAgICAgLy9UaGlzIGlzIGZ1bmN0aW9uaW5nIGFuZCB3cml0aW5nIHRvIEpTT04uXHJcbiAgICAgICAgdGhpcy5nZXROZXdzKCkudGhlbihwb3N0ID0+e1xyXG4gICAgICAgIGNvbnN0IG5ld3NPYmplY3QgPSB7XHJcbiAgICAgICAgICAgICAgICBcImRhdGFTZXRcIiA6IFwibmV3c0l0ZW1zXCIsXHJcbiAgICAgICAgICAgICAgICBcImZldGNoVHlwZVwiIDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ1c2VySWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICBcInVybFwiOiBgJHtwb3N0LnRpdGxlfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBgJHtwb3N0LmJvZHl9YCxcclxuICAgICAgICAgICAgICAgICAgICBcInN5bm9wc2lzXCI6IFwiYmxhaCBibGFoIGJsYWhcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0ZXN0bmV3c09iaik7XHJcbiAgICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEobmV3c09iamVjdCk7XHJcbiAgICB9KVxyXG4gICAgfSxcclxuXHJcbiAgICBhbGxTYXZlZCgpe1xyXG4gICAgLy8gbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEodGVzdG5ld3NPYmopXHJcbiAgICB9LFxyXG5cclxuICAgIGRlbGV0ZURCKCl7XHJcbiAgICAgICAgXHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBuZXdzRWxlbWVudENyZWF0b3IoKXtcclxuICAgICAgICAkKFwiI291dHB1dFwiKS5lbXB0eSgpXHJcbiAgICAgICAgY29uc3QgbmV3c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3V0cHV0XCIpXHJcbiAgICAgICAgbGV0IG5ld3NDcmVhdG9yS2V5ID0ge1xyXG4gICAgICAgICAgICBcImRhdGFTZXRcIiA6IFwibmV3c0l0ZW1zXCIsXHJcbiAgICAgICAgICAgIFwiZmV0Y2hUeXBlXCIgOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiBcIlwiLFxyXG4gICAgICAgICAgICBcImVtYmVkSXRlbVwiIDogXCI/X2VtYmVkPW5ld3NJdGVtc1wiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKG5ld3NDcmVhdG9yS2V5KVxyXG4gICAgICAgIC50aGVuIChkYkdyYWJzID0+IHtcclxuICAgICAgICAgICAgZGJHcmFicy5mb3JFYWNoKGRiR3JhYiA9PiAge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGJHcmFiKTtcclxuICAgICAgICAgICAgICAgIG5ld3NDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJidXR0b25cIixcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlNBVkUgQklUQ0hcIixcclxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzczogXCJuZXdzU2F2ZUJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgICAgIG5ld3NDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJoMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGRiR3JhYi50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzczogXCJuZXdzVGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgICAgICBuZXdzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwicFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGRiR3JhYi5zeW5vcHNpcyxcclxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzczogXCJuZXdzQm9keVwiXHJcbiAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgICAgIG5ld3NDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogZGJHcmFiLnVybCxcclxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzczogXCJuZXdzVVJMXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlczp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6YCR7ZGJHcmFiLnVybH1gXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICAvLyBjb25zdCBOZXdzVGVzdCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudChcImgyXCIsdGVzdFBhc3MsXCJ0ZXN0T2JqXCIsbnVsbCk7XHJcbiAgICAgICAgLy9vdXRwdXQuYXBwZW5kQ2hpbGQoTmV3c1Rlc3QpO1xyXG4gICAgICAgIFxyXG5cclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBuZXdzIiwiY29uc3Qgbm9tYWREYXRhID0ge1xyXG5cclxuICAgIGNvbm5lY3RUb0RhdGEoZmV0Y2hPYmplY3QpIHtcclxuXHJcbiAgICAgICAgbGV0IGRhdGFTZXQgPSBmZXRjaE9iamVjdC5kYXRhU2V0O1xyXG4gICAgICAgIGxldCBlbWJlZEl0ZW0gPSBmZXRjaE9iamVjdC5lbWJlZEl0ZW07XHJcbiAgICAgICAgbGV0IGZldGNoVHlwZSA9IGZldGNoT2JqZWN0LmZldGNoVHlwZTtcclxuICAgICAgICBsZXQgZGF0YUJhc2VPYmplY3QgPSBmZXRjaE9iamVjdC5kYXRhQmFzZU9iamVjdDtcclxuICAgICAgICBsZXQgcHV0SWQgPSBmZXRjaE9iamVjdC5wdXRJZDtcclxuICAgICAgICBsZXQgZGVsZXRlSWQgPSBmZXRjaE9iamVjdC5kZWxldGVJZDtcclxuXHJcbiAgICAgICAgaWYgKGZldGNoVHlwZSA9PSBcIkdFVFwiKSB7XHJcblxyXG4gICAgICAgIHJldHVybiBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDg4LyR7ZGF0YVNldH0ke2VtYmVkSXRlbX1gKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpIC8vIHBhcnNlcyByZXNwb25zZSB0byBKU09OXHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoZmV0Y2hUeXBlID09PSBcIlBPU1RcIil7XHJcblxyXG4gICAgICAgIC8vIERlZmF1bHQgb3B0aW9ucyBhcmUgbWFya2VkIHdpdGggKlxyXG4gICAgICAgIHJldHVybiBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDg4LyR7ZGF0YVNldH1gLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogYCR7ZmV0Y2hUeXBlfWAsIC8vICpHRVQsIFBPU1QsIFBVVCwgREVMRVRFLCBldGMuXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICAgICAgLy8gXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8gcmVmZXJyZXI6IFwibm8tcmVmZXJyZXJcIiwgLy8gbm8tcmVmZXJyZXIsICpjbGllbnRcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YUJhc2VPYmplY3QpLCAvLyBib2R5IGRhdGEgdHlwZSBtdXN0IG1hdGNoIFwiQ29udGVudC1UeXBlXCIgaGVhZGVyXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmKGZldGNoVHlwZSA9PT0gXCJQVVRcIil7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODgvJHtkYXRhU2V0fS8ke3B1dElkfWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBgJHtmZXRjaFR5cGV9YCwgLy8gKkdFVCwgUE9TVCwgUFVULCBERUxFVEUsIGV0Yy5cclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgICAgICAvLyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyByZWZlcnJlcjogXCJuby1yZWZlcnJlclwiLCAvLyBuby1yZWZlcnJlciwgKmNsaWVudFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhQmFzZU9iamVjdCksIC8vIGJvZHkgZGF0YSB0eXBlIG11c3QgbWF0Y2ggXCJDb250ZW50LVR5cGVcIiBoZWFkZXJcclxuICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZmV0Y2hUeXBlID09PSBcIkRFTEVURVwiKSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODgvJHtkYXRhU2V0fS8ke2RlbGV0ZUlkfWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBgJHtmZXRjaFR5cGV9YCwgLy8gKkdFVCwgUE9TVCwgUFVULCBERUxFVEUsIGV0Yy5cclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgICAgICAvLyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyByZWZlcnJlcjogXCJuby1yZWZlcnJlclwiLCAvLyBuby1yZWZlcnJlciwgKmNsaWVudFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cgKFwiWU9VIFNDUkVXRUQgSVQgVVBcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5vbWFkRGF0YSIsImltcG9ydCBub21hZERhdGEgZnJvbSBcIi4vbm9tYWREYXRhXCI7XHJcbmltcG9ydCBkb21Db21wb25lbnRzIGZyb20gXCIuL2RvbUNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHRhc2tzRXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vdGFza3NFdmVudExpc3RlbmVyc1wiO1xyXG5pbXBvcnQgdGFza3NQb3B1cCBmcm9tIFwiLi90YXNrc1BvcHVwXCI7XHJcbi8vIGltcG9ydCBldmVudExpc3RlbmVycyBmcm9tIFwiLi9ldmVudExpc3RlbmVyc1wiXHJcblxyXG5jb25zdCB0YXNrcyA9IHtcclxuXHJcbiAgICBjcmVhdGVUYXNrVGFibGVzKCkge1xyXG4gICAgICAgICQoXCIjb3V0cHV0XCIpLmVtcHR5KClcclxuXHJcbiAgICAgICAgbGV0IG91dHB1dEFydGljbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm91dHB1dFwiKVxyXG5cclxuICAgICAgICAvL2NyZWF0ZSBkaXNwbGF5IGNvbnRhaW5lclxyXG4gICAgICAgIGxldCB0YXNrc0NvbnRhaW5lciA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJzZWN0aW9uXCIsXHJcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJ0YXNrc0NvbnRhaW5lclwiLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xyXG4gICAgICAgICAgICAgICAgaWQgOiBcInRhc2tzQ29udGFpbmVyXCJcclxuICAgICAgICAgICAgfX0pO1xyXG5cclxuICAgICAgICAvL2NyZWF0ZSB0YXNrcyB0YWJsZXNcclxuICAgICAgICBsZXQgYWN0aXZlVGFza3NUYWJsZSA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJ0YWJsZVwiLFxyXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwiYWN0aXZlVGFza3NUYWJsZVwiLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xyXG4gICAgICAgICAgICAgICAgaWQgOiBcImFjdGl2ZVRhc2tzVGFibGVcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBhY3RpdmVUYXNrc1RhYmxlVGl0bGUgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xyXG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwiY2FwdGlvblwiLFxyXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwiYWN0aXZlVGFza3NUYWJsZVRpdGxlXCIsXHJcbiAgICAgICAgICAgIGNvbnRlbnQgOiBcIkFDVElWRSBUQVNLU1wiXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBjb21wbGV0ZWRUYXNrc1RhYmxlID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcclxuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcInRhYmxlXCIsXHJcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJjb21wbGV0ZWRUYXNrc1RhYmxlXCIsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XHJcbiAgICAgICAgICAgICAgICBpZCA6IFwiY29tcGxldGVkVGFza3NUYWJsZVwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IGNvbXBsZXRlZFRhc2tzVGFibGVUaXRsZSA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJjYXB0aW9uXCIsXHJcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJjb21wbGV0ZWRUYXNrc1RhYmxlVGl0bGVcIixcclxuICAgICAgICAgICAgY29udGVudCA6IFwiQ09NUExFVEVEIFRBU0tTXCJcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvL2NyZWF0ZSByb3cgd2l0aCBjb2x1bW4gaGVhZGVyc1xyXG4gICAgICAgIGxldCBhY3RpdmVUYXNrc0hlYWRlclJvdyA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJ0clwiLFxyXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwiYWN0aXZlVGFza3NIZWFkZXJSb3dcIixcclxuICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcclxuICAgICAgICAgICAgICAgIGlkIDogXCJhY3RpdmVUYXNrc0hlYWRlclJvd1wiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IGNvbXBsZXRlZFRhc2tzSGVhZGVyUm93ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcclxuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcInRyXCIsXHJcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJjb21wbGV0ZWRUYXNrc0hlYWRlclJvd1wiLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xyXG4gICAgICAgICAgICAgICAgaWQgOiBcImNvbXBsZXRlZFRhc2tzSGVhZGVyUm93XCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL2NyZWF0ZSBjb2x1bW4gaGVhZGVyc1xyXG4gICAgICAgIGxldCBhY3RpdmVUYXNrc0hlYWRlciA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJ0aFwiLFxyXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwiYWN0aXZlVGFza3NIZWFkZXJcIixcclxuICAgICAgICAgICAgY29udGVudDogXCJUYXNrXCIsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XHJcbiAgICAgICAgICAgICAgICBpZCA6IFwiYWN0aXZlVGFza3NIZWFkZXJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBhY3RpdmVUYXNrc0R1ZURhdGVIZWFkZXIgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xyXG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwidGhcIixcclxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcImFjdGl2ZVRhc2tzRHVlRGF0ZUhlYWRlclwiLFxyXG4gICAgICAgICAgICBjb250ZW50OiBcIkR1ZSBEYXRlXCIsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XHJcbiAgICAgICAgICAgICAgICBpZCA6IFwiYWN0aXZlVGFza3NEdWVEYXRlSGVhZGVyXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgY29tcGxldGVkVGFza3NIZWFkZXIgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xyXG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwidGhcIixcclxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcImNvbXBsZXRlZFRhc2tzSGVhZGVyXCIsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiVGFza1wiLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xyXG4gICAgICAgICAgICAgICAgaWQgOiBcImNvbXBsZXRlZFRhc2tzSGVhZGVyXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgY29tcGxldGVkVGFza3NEdWVEYXRlSGVhZGVyID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcclxuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcInRoXCIsXHJcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJjb21wbGV0ZWRUYXNrc0R1ZURhdGVIZWFkZXJcIixcclxuICAgICAgICAgICAgY29udGVudDogXCJEdWUgRGF0ZVwiLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xyXG4gICAgICAgICAgICAgICAgaWQgOiBcImNvbXBsZXRlZFRhc2tzRHVlRGF0ZUhlYWRlclwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvL2NyZWF0ZSBidXR0b24gdG8gbWFrZSBuZXcgdGFza3NcclxuICAgICAgICBsZXQgY3JlYXRlVGFza0J1dHRvbiA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJidXR0b25cIixcclxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcImNyZWF0ZVRhc2tCdXR0b25cIixcclxuICAgICAgICAgICAgY29udGVudCA6IFwiQ3JlYXRlIE5ldyBUYXNrXCIsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XHJcbiAgICAgICAgICAgICAgICBpZCA6IFwiY3JlYXRlVGFza0J1dHRvblwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy9hcHBlbmQgaGVhZGVyIHJvdyB0byB0YWJsZSBhbmQgdGFibGUgdG8gY29udGFpbmVyXHJcbiAgICAgICAgYWN0aXZlVGFza3NUYWJsZS5hcHBlbmRDaGlsZChhY3RpdmVUYXNrc1RhYmxlVGl0bGUpO1xyXG4gICAgICAgIGNvbXBsZXRlZFRhc2tzVGFibGUuYXBwZW5kQ2hpbGQoY29tcGxldGVkVGFza3NUYWJsZVRpdGxlKTtcclxuICAgICAgICBhY3RpdmVUYXNrc0hlYWRlclJvdy5hcHBlbmRDaGlsZChhY3RpdmVUYXNrc0hlYWRlcilcclxuICAgICAgICBhY3RpdmVUYXNrc0hlYWRlclJvdy5hcHBlbmRDaGlsZChhY3RpdmVUYXNrc0R1ZURhdGVIZWFkZXIpO1xyXG4gICAgICAgIGFjdGl2ZVRhc2tzVGFibGUuYXBwZW5kQ2hpbGQoYWN0aXZlVGFza3NIZWFkZXJSb3cpO1xyXG4gICAgICAgIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKGFjdGl2ZVRhc2tzVGFibGUpO1xyXG4gICAgICAgIGNvbXBsZXRlZFRhc2tzSGVhZGVyUm93LmFwcGVuZENoaWxkKGNvbXBsZXRlZFRhc2tzSGVhZGVyKVxyXG4gICAgICAgIGNvbXBsZXRlZFRhc2tzSGVhZGVyUm93LmFwcGVuZENoaWxkKGNvbXBsZXRlZFRhc2tzRHVlRGF0ZUhlYWRlcik7XHJcbiAgICAgICAgY29tcGxldGVkVGFza3NUYWJsZS5hcHBlbmRDaGlsZChjb21wbGV0ZWRUYXNrc0hlYWRlclJvdyk7XHJcbiAgICAgICAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQoY29tcGxldGVkVGFza3NUYWJsZSk7XHJcbiAgICAgICAgY3JlYXRlVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGFza3NQb3B1cC5jcmVhdGVOZXdUYXNrRm9ybSk7XHJcbiAgICAgICAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVGFza0J1dHRvbik7XHJcbiAgICAgICAgb3V0cHV0QXJ0aWNsZS5hcHBlbmRDaGlsZCh0YXNrc0NvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIHRoaXMuZ2V0VGFza3MoKTtcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0VGFza3MoKSB7XHJcblxyXG4gICAgICAgIGxldCBjdXJyZW50VXNlciA9IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpKTtcclxuXHJcbiAgICAgICAgLy9wb3B1bGF0ZSB0YXNrc1xyXG4gICAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcclxuXHJcbiAgICAgICAgICAgIGRhdGFTZXQgOiBcInRhc2tzXCIsXHJcbiAgICAgICAgICAgIGZldGNoVHlwZSA6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIGVtYmVkSXRlbSA6IFwiP19lbWJlZD11c2Vyc1wiXHJcblxyXG4gICAgICAgIH0pLnRoZW4odGFza3MgPT4ge1xyXG5cclxuICAgICAgICAgICAgdGFza3Muc29ydChmdW5jdGlvbihhLGIpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGEuZXhwZWN0ZWRDb21wbGV0aW9uRGF0ZSkgLSBuZXcgRGF0ZShiLmV4cGVjdGVkQ29tcGxldGlvbkRhdGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRhc2sudXNlcklkID09PSBjdXJyZW50VXNlcikge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBzdGF0dXMgPSB0YXNrLmNvbXBsZXRlO1xyXG4gICAgICAgICAgICAgICAgbGV0IGFjdGl2ZVRhc2tzVGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjdGl2ZVRhc2tzVGFibGVcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29tcGxldGVkVGFza3NUYWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tcGxldGVkVGFza3NUYWJsZVwiKTtcclxuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBhIG5ldyB0YWJsZSByb3cgZm9yIGVhY2ggdGFza1xyXG4gICAgICAgICAgICAgICAgbGV0IHRhc2tSb3cgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJ0clwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzIDogXCJ0YXNrVGFibGVSb3dcIixcclxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZCA6IGB0YXNrVGFibGVSb3dfJHt0YXNrLmlkfWBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIC8vY3JlYXRlIGNlbGxzIHRvIGhvbGQgdGFzayBhbmQgZHVlIGRhdGVcclxuICAgICAgICAgICAgICAgIGxldCB0YXNrQ2VsbCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcInRkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgOiBcInRhc2tDZWxsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQgOiBgdGFza0NlbGxfJHt0YXNrLmlkfWBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBkdWVEYXRlQ2VsbCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcInRkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgOiBcImR1ZURhdGVDZWxsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQgOiBgZHVlRGF0ZUNlbGxfJHt0YXNrLmlkfWBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIC8vY3JlYXRlIHRhc2sgY2hlY2tib3ggYW5kIHRpdGxlXHJcbiAgICAgICAgICAgICAgICBsZXQgdGFza0xhYmVsID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwibGFiZWxcIixcclxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcyA6IFwidGFza0xhYmVsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQgOiBgdGFza0xhYmVsXyR7dGFzay5pZH1gXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC8vY3JlYXRlIHRhc2sgdGl0bGVcclxuICAgICAgICAgICAgICAgIGxldCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgJHt0YXNrLnRhc2t9YCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9jcmVhdGUgdGFzayBjaGVja2JveFxyXG4gICAgICAgICAgICAgICAgbGV0IHRhc2tDaGVja2JveCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImlucHV0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgOiBcInRhc2tDaGVja2JveFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkIDogYHRhc2tDaGVja2JveF8ke3Rhc2suaWR9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA6IFwiY2hlY2tib3hcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgOiBgJHt0YXNrLnRhc2t9YFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAvL2NyZWF0ZSB0YXNrIGR1dGUgZGF0ZVxyXG4gICAgICAgICAgICAgICAgbGV0IGR1ZURhdGVBcnJheSA9IG5ldyBEYXRlKHRhc2suZXhwZWN0ZWRDb21wbGV0aW9uRGF0ZSkudG9EYXRlU3RyaW5nKCkuc3BsaXQoXCIgXCIpXHJcbiAgICAgICAgICAgICAgICBsZXQgZHVlRGF0ZSA9IGAke2R1ZURhdGVBcnJheVsxXX0gJHtkdWVEYXRlQXJyYXlbMl19LCAke2R1ZURhdGVBcnJheVszXX1gXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHRhc2tEdWVEYXRlID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwicFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzIDogXCJ0YXNrRHVlRGF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgOiBkdWVEYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkIDogYHRhc2tEdWVEYXRlXyR7dGFzay5pZH1gXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC8vYXBwZW5kIC0tIG9yZGVyIGlzIGltcG9ydGFudCBmb3IgY2hlY2tib3ggYW5kIGxhYmVsIHRvIGVuc3VyZSBib3ggaW4gb24gdGhlIGxlZnRcclxuICAgICAgICAgICAgICAgIHRhc2tDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHRhc2tzRXZlbnRMaXN0ZW5lcnMubWFya1Rhc2tDb21wbGV0ZSlcclxuICAgICAgICAgICAgICAgIHRhc2tMYWJlbC5hcHBlbmRDaGlsZCh0YXNrQ2hlY2tib3gpO1xyXG4gICAgICAgICAgICAgICAgdGFza0xhYmVsLmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XHJcbiAgICAgICAgICAgICAgICB0YXNrQ2VsbC5hcHBlbmRDaGlsZCh0YXNrTGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgZHVlRGF0ZUNlbGwuYXBwZW5kQ2hpbGQodGFza0R1ZURhdGUpO1xyXG4gICAgICAgICAgICAgICAgdGFza1Jvdy5hcHBlbmRDaGlsZCh0YXNrQ2VsbCk7XHJcbiAgICAgICAgICAgICAgICB0YXNrUm93LmFwcGVuZENoaWxkKGR1ZURhdGVDZWxsKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZFRhc2tzVGFibGUuYXBwZW5kQ2hpbGQodGFza1Jvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFza0NoZWNrYm94LnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIiwgXCJcIilcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZVRhc2tzVGFibGUuYXBwZW5kQ2hpbGQodGFza1Jvdyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0YXNrcztcclxuIiwiaW1wb3J0IG5vbWFkRGF0YSBmcm9tIFwiLi9ub21hZERhdGFcIjtcclxuaW1wb3J0IHRhc2tzIGZyb20gXCIuL3Rhc2tzXCI7XHJcblxyXG5jb25zdCB0YXNrc0V2ZW50TGlzdGVuZXJzID0ge1xyXG5cclxuICAgIGNyZWF0ZU5ld1Rhc2soKSB7XHJcblxyXG4gICAgICAgIGxldCB0YXNrVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tUaXRsZUlucHV0XCIpLnZhbHVlO1xyXG4gICAgICAgIGxldCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrRGF0ZUlucHV0XCIpLnZhbHVlO1xyXG4gICAgICAgIGxldCB1c2VySWQgPSBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSk7XHJcblxyXG4gICAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcclxuXHJcbiAgICAgICAgICAgIGRhdGFTZXQgOiBcInRhc2tzXCIsXHJcbiAgICAgICAgICAgIGZldGNoVHlwZSA6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBkYXRhQmFzZU9iamVjdCA6IHtcclxuICAgICAgICAgICAgICAgIHVzZXJJZCA6IHVzZXJJZCxcclxuICAgICAgICAgICAgICAgIHRhc2sgOiB0YXNrVGl0bGUsXHJcbiAgICAgICAgICAgICAgICBleHBlY3RlZENvbXBsZXRpb25EYXRlIDogZHVlRGF0ZSxcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlIDogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKHNoaXQgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzaGl0KVxyXG4gICAgICAgICAgICAkKFwiI291dHB1dFwiKS5lbXB0eSgpXHJcbiAgICAgICAgICAgIHRhc2tzLmNyZWF0ZVRhc2tUYWJsZXMoKVxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG5cclxuICAgIG1hcmtUYXNrQ29tcGxldGUoKSB7XHJcbiAgICAgICAgbGV0IHRhc2tUb0VkaXRJZCA9IGV2ZW50LnRhcmdldC5pZC5zcGxpdChcIl9cIilbMV07XHJcblxyXG4gICAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcclxuXHJcbiAgICAgICAgICAgIGRhdGFTZXQgOiBcInRhc2tzXCIsXHJcbiAgICAgICAgICAgIGZldGNoVHlwZSA6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIGVtYmVkSXRlbSA6IGA/JmlkPSR7dGFza1RvRWRpdElkfWBcclxuICAgICAgICB9KS50aGVuKHRhc2tzID0+IHtcclxuXHJcblxyXG4gICAgICAgICAgICBsZXQgdGFza0lkID0gdGFza3NbMF0uaWQ7XHJcbiAgICAgICAgICAgIGxldCB1c2VySWQgPSB0YXNrc1swXS51c2VySWQ7XHJcbiAgICAgICAgICAgIGxldCB0YXNrID0gdGFza3NbMF0udGFzaztcclxuICAgICAgICAgICAgbGV0IGV4cGVjdGVkQ29tcGxldGlvbkRhdGUgPSB0YXNrc1swXS5leHBlY3RlZENvbXBsZXRpb25EYXRlO1xyXG4gICAgICAgICAgICBsZXQgY29tcGxldGUgPSB0YXNrc1swXS5jb21wbGV0ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2tJZCwgdXNlcklkLCB0YXNrLCBleHBlY3RlZENvbXBsZXRpb25EYXRlLCBjb21wbGV0ZSlcclxuXHJcbiAgICAgICAgICAgIGlmIChjb21wbGV0ZSkge1xyXG4gICAgICAgICAgICAgICAgY29tcGxldGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcclxuICAgICAgICAgICAgICAgIHB1dElkIDogdGFza1RvRWRpdElkLFxyXG4gICAgICAgICAgICAgICAgZGF0YVNldCA6IFwidGFza3NcIixcclxuICAgICAgICAgICAgICAgIGZldGNoVHlwZSA6IFwiUFVUXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhQmFzZU9iamVjdCA6IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogdGFza0lkLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZCA6IHVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICB0YXNrIDogdGFzayxcclxuICAgICAgICAgICAgICAgICAgICBleHBlY3RlZENvbXBsZXRpb25EYXRlOiBleHBlY3RlZENvbXBsZXRpb25EYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBjb21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgJChcIiNvdXRwdXRcIikuZW1wdHkoKVxyXG4gICAgICAgIHRhc2tzLmNyZWF0ZVRhc2tUYWJsZXMoKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCB0YXNrc0V2ZW50TGlzdGVuZXJzOyIsImltcG9ydCBkb21Db21wb25lbnRzIGZyb20gXCIuL2RvbUNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHRhc2tzRXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vdGFza3NFdmVudExpc3RlbmVyc1wiO1xyXG5cclxuY29uc3QgdGFza3NQb3B1cCA9IHtcclxuXHJcbiAgICBjcmVhdGVOZXdUYXNrRm9ybSgpIHtcclxuICAgICAgICBsZXQgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tzQ29udGFpbmVyXCIpO1xyXG4gICAgICAgIGxldCB0YXNrUG9wdXBEaXYgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xyXG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwiZGl2XCIsXHJcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJ0YXNrUG9wdXBEaXZcIixcclxuICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcclxuICAgICAgICAgICAgICAgIGlkIDogXCJ0YXNrUG9wdXBEaXZcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBuZXdUYXNrRm9ybSA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJkaXZcIixcclxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcIm5ld1Rhc2tGb3JtXCIsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XHJcbiAgICAgICAgICAgICAgICBpZCA6IFwibmV3VGFza0Zvcm1cIixcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgbmV3VGFza0Zvcm1UaXRsZSA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJoMlwiLFxyXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwibmV3VGFza0Zvcm1UaXRsZVwiLFxyXG4gICAgICAgICAgICBjb250ZW50IDogXCJDcmVhdGUgQSBOZXcgVGFza1wiLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xyXG4gICAgICAgICAgICAgICAgaWQgOiBcIm5ld1Rhc2tGb3JtVGl0bGVcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBob3Jpem9udGFsTGluZSA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCAoe1xyXG4gICAgICAgICAgICBlbGVtZW50VHlwZSA6IFwiaHJcIlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgdGFza1RpdGxlSW5wdXQgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQgKHtcclxuICAgICAgICAgICAgZWxlbWVudFR5cGUgOiBcImlucHV0XCIsXHJcbiAgICAgICAgICAgIGNzc0NsYXNzIDogXCJ0YXNrVGl0bGVJbnB1dFwiLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xyXG4gICAgICAgICAgICAgICAgaWQgOiBcInRhc2tUaXRsZUlucHV0XCIsXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciA6IFwiRW50ZXIgbmV3IHRhc2sgdGl0bGVcIixcclxuICAgICAgICAgICAgICAgIHR5cGUgOiBcInRleHRcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCB0YXNrRGF0ZUlucHV0ID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50ICh7XHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJpbnB1dFwiLFxyXG4gICAgICAgICAgICBjc3NDbGFzcyA6IFwidGFza0RhdGVJbnB1dFwiLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xyXG4gICAgICAgICAgICAgICAgaWQgOiBcInRhc2tEYXRlSW5wdXRcIixcclxuICAgICAgICAgICAgICAgIHR5cGUgOiBcImRhdGVcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBzdWJtaXROZXdUYXNrQnV0dG9uID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50ICh7XHJcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlIDogXCJidXR0b25cIixcclxuICAgICAgICAgICAgY3NzQ2xhc3MgOiBcInN1Ym1pdE5ld1Rhc2tCdXR0b25cIixcclxuICAgICAgICAgICAgY29udGVudCA6IFwiU3VibWl0XCIsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XHJcbiAgICAgICAgICAgICAgICBpZCA6IFwic3VibWl0TmV3VGFza0J1dHRvblwiLFxyXG4gICAgICAgICAgICAgICAgLy8gdHlwZSA6IFwic3VibWl0XCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzdWJtaXROZXdUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0YXNrc0V2ZW50TGlzdGVuZXJzLmNyZWF0ZU5ld1Rhc2spXHJcbiAgICAgICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQobmV3VGFza0Zvcm1UaXRsZSk7XHJcbiAgICAgICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQoaG9yaXpvbnRhbExpbmUpO1xyXG4gICAgICAgIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tUaXRsZUlucHV0KTtcclxuICAgICAgICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrRGF0ZUlucHV0KTtcclxuICAgICAgICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZChzdWJtaXROZXdUYXNrQnV0dG9uKTtcclxuICAgICAgICB0YXNrUG9wdXBEaXYuYXBwZW5kQ2hpbGQobmV3VGFza0Zvcm0pO1xyXG4gICAgICAgIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tQb3B1cERpdik7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHRhc2tzUG9wdXA7Il19
