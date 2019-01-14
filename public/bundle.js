(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _eventListeners = _interopRequireDefault(require("./eventListeners"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const dashboard = {
  createNavBar() {
    let navHTML = ` 
      <nav>
        <ul>
          <li id = "newsLink"><a class = "active" href = "#">Articles</a></li>
          <li id = "eventLink"><a href = "#">Events</a></li>
          <li><a href = "#">Tasks</a></li>
          <li id = "friendsLink"><a href = "#">Friends</a></li>
          <li id = "messagesLink"><a href = "#">Messages</a></li>
          <li id = "logo" ><a href="#">Nomads</a></li>
        </ul>
      </nav>
    `;
    let navBarContainer = document.querySelector("#main-nav");
    navBarContainer.innerHTML = navHTML;
    $("#messagesLink").click(_eventListeners.default.messagesNavLink);
    $("#eventLink").click(_eventListeners.default.eventsNavLink);
    $("#friendsLink").click(_eventListeners.default.friendsNavLink);
    $("#newsLink").click(_eventListeners.default.newsNavLink);
  },

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
    $("#registerButton").click(_eventListeners.default.userLogin); // $("#logIn").click(eventListeners.loadDashboard)
  }

};
var _default = dashboard;
exports.default = _default;

},{"./eventListeners":3}],2:[function(require,module,exports){
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

},{"./dashboard":1,"./eventListeners":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// import nomadData from "./nomadData";
// import domComponents from "./domComponents";
// import events from "./events";
// import dashboard from "./dashboard"
// import messages from "./messages";
// import friends from "./friends";
// import news from "./news";
const eventListeners = {
  /*===============================================================================================================
  LOGIN FORM: user enters Username and Password. when User clicks login, the input field and NOMADS header disappear
  and the user will be displayed the "Dashboard" and the navigation bar. Upon login, sessionStorage is started. In the Console
  you will be able to see Who is logged in and what their userId is. ie. 1,2,3,4 etc.
  =================================================================================================================*/
  userLogin() {
    let logInVal = document.querySelector("#userNameVal").value;
    let passwordVal = document.querySelector("#passwordVal").value; //get to compare

    nomadData.connectToData({
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

          dashboard.createNavBar(); //session storage

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

    nomadData.connectToData({
      "dataSet": "users",
      "fetchType": "POST",
      "dataBaseObject": {
        "userName": regUserName,
        "email": regEmail,
        "password": regPassword
      }
    }).then(nomadData.connectToData({
      "dataSet": "users",
      "fetchType": "GET",
      "embedItem": `?userName=${regUserName}`
    }).then(user => {
      console.log(user);
      user.forEach(x => {
        sessionStorage.setItem("userId", x.id); //hides NOMAD heading

        $(".t-border").hide(); //hides the form

        $(".form").hide(); //displays navigatin bar

        dashboard.createNavBar();
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
   THESE 5 ARRAY METHODS ARE GOING TO STAY IN THE MAIN EVENTLISTENERS FILE EVEYTHING ELSE WILL BE SEPERATED INTO SEPERATE
  EL FILES
  =================================================================================================================*/
  messagesNavLink() {
    messages.createMessageBoard();
    console.log("working");
  },

  eventsNavLink() {
    events.showEventForm(); //appendUserEvent

    console.log("events clicked");
  },

  friendsNavLink() {
    console.log("friends nav link clicked");
    friends.loadCurrentUsersFriends();
    friends.defineCurrentUsersFriends();
  },

  newsNavLink() {
    //NEWS SECTION
    news.save();
    news.allSaved();
    news.getNews();
    news.newsElementCreator();
    console.log("news link clicked");
  },

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
    nomadData.connectToData({
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
      events.appendUserEvents();
    });
  },

  handleEventDeleteButton() {
    const idToDelete = event.target.id.split("--")[1];
    nomadData.connectToData({
      deleteId: idToDelete,
      dataSet: "events",
      fetchType: "DELETE",
      dataBaseObject: {
        userId: sessionStorage.getItem("userId")
      }
    }).then(() => {
      events.appendUserEvents();
    });
  },

  handleEventEditButton() {
    const idToEdit = event.target.id.split("--")[1]; // const eventObject =

    domComponents.createEventEditInput(idToEdit);
  },

  handleEventUpdateButton() {}

};
var _default = eventListeners;
exports.default = _default;

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2Rhc2hib2FyZC5qcyIsIi4uL3NjcmlwdHMvZG9tUmVuZGVyZXIuanMiLCIuLi9zY3JpcHRzL2V2ZW50TGlzdGVuZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQ0FBOzs7O0FBQ0EsTUFBTSxTQUFTLEdBQUc7QUFDaEIsRUFBQSxZQUFZLEdBQUU7QUFDWixRQUFJLE9BQU8sR0FBSTs7Ozs7Ozs7Ozs7S0FBZjtBQVlBLFFBQUksZUFBZSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFdBQXZCLENBQXRCO0FBQ0EsSUFBQSxlQUFlLENBQUMsU0FBaEIsR0FBNEIsT0FBNUI7QUFDQSxJQUFBLENBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUIsS0FBbkIsQ0FBeUIsd0JBQWUsZUFBeEM7QUFDQSxJQUFBLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0IsS0FBaEIsQ0FBc0Isd0JBQWUsYUFBckM7QUFDQSxJQUFBLENBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0IsS0FBbEIsQ0FBd0Isd0JBQWUsY0FBdkM7QUFDQSxJQUFBLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZSxLQUFmLENBQXFCLHdCQUFlLFdBQXBDO0FBQ0MsR0FwQmE7O0FBcUJkLEVBQUEsY0FBYyxHQUFFO0FBQ2Q7QUFDQSxRQUFJLFFBQVEsR0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBQWhCO0FBcUNFLElBQUEsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhLElBQWIsQ0FBa0IsUUFBbEI7O0FBQ0EsNEJBQWUscUJBQWY7O0FBQ0EsSUFBQSxDQUFDLENBQUMsUUFBRCxDQUFELENBQVksS0FBWixDQUFrQix3QkFBZSxTQUFqQztBQUNBLElBQUEsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUIsS0FBckIsQ0FBMkIsd0JBQWUsZ0JBQTFDO0FBQ0EsSUFBQSxD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LFFBSFM7QUFJcEIsTUFBQSxjQUFjLEVBQUU7QUFDWixRQUFBLE1BQU0sRUFBRSxjQUFjLENBQUMsT0FBZixDQUF1QixRQUF2QjtBQURJO0FBSkksS0FBeEIsRUFRQyxJQVJELENBUU8sTUFBTTtBQUNULE1BQUEsTUFBTSxDQUFDLGdCQUFQO0FBQ0gsS0FWRDtBQVdELEdBekxnQjs7QUEwTGpCLEVBQUEscUJBQXFCLEdBQUc7QUFDdEIsVUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxFQUFiLENBQWdCLEtBQWhCLENBQXNCLElBQXRCLEVBQTRCLENBQTVCLENBQWpCLENBRHNCLENBRXRCOztBQUNBLElBQUEsYUFBYSxDQUFDLG9CQUFkLENBQW1DLFFBQW5DO0FBQ0gsR0E5TGtCOztBQStMbkIsRUFBQSx1QkFBdUIsR0FBRyxDQUV6Qjs7QUFqTWtCLENBQXZCO2VBb01lLGMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgZXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vZXZlbnRMaXN0ZW5lcnNcIlxuY29uc3QgZGFzaGJvYXJkID0ge1xuICBjcmVhdGVOYXZCYXIoKXtcbiAgICBsZXQgbmF2SFRNTCA9IGAgXG4gICAgICA8bmF2PlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpIGlkID0gXCJuZXdzTGlua1wiPjxhIGNsYXNzID0gXCJhY3RpdmVcIiBocmVmID0gXCIjXCI+QXJ0aWNsZXM8L2E+PC9saT5cbiAgICAgICAgICA8bGkgaWQgPSBcImV2ZW50TGlua1wiPjxhIGhyZWYgPSBcIiNcIj5FdmVudHM8L2E+PC9saT5cbiAgICAgICAgICA8bGk+PGEgaHJlZiA9IFwiI1wiPlRhc2tzPC9hPjwvbGk+XG4gICAgICAgICAgPGxpIGlkID0gXCJmcmllbmRzTGlua1wiPjxhIGhyZWYgPSBcIiNcIj5GcmllbmRzPC9hPjwvbGk+XG4gICAgICAgICAgPGxpIGlkID0gXCJtZXNzYWdlc0xpbmtcIj48YSBocmVmID0gXCIjXCI+TWVzc2FnZXM8L2E+PC9saT5cbiAgICAgICAgICA8bGkgaWQgPSBcImxvZ29cIiA+PGEgaHJlZj1cIiNcIj5Ob21hZHM8L2E+PC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmF2PlxuICAgIGBcbiAgICBsZXQgbmF2QmFyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLW5hdlwiKVxuICAgIG5hdkJhckNvbnRhaW5lci5pbm5lckhUTUwgPSBuYXZIVE1MXG4gICAgJChcIiNtZXNzYWdlc0xpbmtcIikuY2xpY2soZXZlbnRMaXN0ZW5lcnMubWVzc2FnZXNOYXZMaW5rKVxuICAgICQoXCIjZXZlbnRMaW5rXCIpLmNsaWNrKGV2ZW50TGlzdGVuZXJzLmV2ZW50c05hdkxpbmspXG4gICAgJChcIiNmcmllbmRzTGlua1wiKS5jbGljayhldmVudExpc3RlbmVycy5mcmllbmRzTmF2TGluaylcbiAgICAkKFwiI25ld3NMaW5rXCIpLmNsaWNrKGV2ZW50TGlzdGVuZXJzLm5ld3NOYXZMaW5rKVxuICAgIH0sXG4gICAgYnVpbGRMb2dpbkZvcm0oKXtcbiAgICAgIC8vdXNpbmcgc3RyaW5nIGludGVycG9sYXRpb24gdG8gY3JlYXRlIHRoZSBmb3JtXG4gICAgICBsZXQgZm9ybUhUTUwgPSBgXG4gICAgICA8aDEgY2xhc3MgPSBcInQtYm9yZGVyXCI+Tm9tYWRzPC9oMT5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3MgPSBcImZvcm1cIj5cbiAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIiBjbGFzcyA9IHJlZ2lzdGVyRm9ybT5cbiAgICAgICAgICAgIDxpbnB1dCBpZCA9IFwicmVnVXNlck5hbWVcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyID0gXCJVc2VybmFtZVwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgPGlucHV0IGlkID0gXCJyZWdFbWFpbFwiIHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyID0gXCJFbWFpbFwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgPGlucHV0IGlkID0gXCJyZWdQYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyID0gXCJQYXNzd29yZFwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgPGlucHV0IGlkID0gXCJyZWdDb25maXJtUGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlciA9IFwiQ29uZmlybSBQYXNzd29yZFwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgPGJ1dHRvbiBpZCA9IFwicmVnaXN0ZXJCdXR0b25cIj5DcmVhdGUgQWNjb3VudDwvYnV0dG9uPlxuICAgICAgICAgICAgPHAgY2xhc3MgPSBcIm1lc3NhZ2VcIj5BbHJlYWR5IGEgUmVnaXN0ZXJlZCBNZW1iZXI/IDxhIGhyZWYgPSBcIiNcIj5Mb2dJbiA8L2E+PC9wPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8Zm9ybSBjbGFzcyA9IFwibG9naW4tZm9ybVwiPlxuICAgICAgICAgICAgPGlucHV0IGlkID0gXCJ1c2VyTmFtZVZhbFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXIgPSBcIlVzZXJuYW1lXCI+XG4gICAgICAgICAgICA8aW5wdXQgaWQgPSBcInBhc3N3b3JkVmFsXCIgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXIgPSBcIlBhc3N3b3JkXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJsb2dJblwiPkxvZ2luPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJtb2RhbEJ1dHRvblwiPk5vbWFkcyBNaXNzaW9uPC9idXR0b24+XG4gICAgICAgICAgICA8cCBjbGFzcyA9IFwibWVzc2FnZVwiPkRvbid0IGhhdmUgYW4gYWNjb3VudD8gPGEgaHJlZiA9IFwiI1wiPlJlZ2lzdGVyPC9hPjwvcD5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJub21hZE1vZGFsXCIgY2xhc3M9XCJtb2RhbFwiPlxuICAgICAgICA8IS0tIE1vZGFsIGNvbnRlbnQgLS0+XG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNsb3NlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICAgICAgPGgyPlRoZSBQdXJwb3NlIEJlaGluZCBOb21hZHM8L2gyPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICAgIDxoMz5UaGUgbWluZHMgYmVoaW5nIE5vbWFkczwvaDM+XG4gICAgICAgICAgICAgIDxpbWcgaWQgPSBcImNyZWF0b3JzSW1hZ2VcIiBzcmMgPSBcImltYWdlcy9ub21hZENyZWF0b3JzLmpwZ1wiIGFsdCA9IFwiYXBwbGljYXRpb24gY3JlYXRvcnNcIj5cbiAgICAgICAgICAgICAgPHA+QXMgb3V0ZG9vcnNtYW4sIGVudmlyb25tZW50YWxpc3QsIGFuZCBmaWxtbWFrZXJzIGNvbnRpbnVlIHRvIGdyb3cuIFNvIGRvIHRoZSBhZHZlbnR1cm91cyBzcGlyaXRzIG9mIHRob3NlIHdobyBlbWJyYWNlIGNvbnNjaW91cyBjb25zdW1lcmlzbSBhbmQgc3VzdGFpbmFibGUgbGl2aW5nLiBUaGUgcHVycG9zZSBpcyB0byBtYWtlIGEgcG9pbnQgb2YgcGx1Z2dpbmcgaW50byBtb2Rlcm4gbGlmZSBhbmQgY29ubmVjdGluZyB3aXRoIHlvdXIgZmVsbG93IG5vbWFkcyBmcm9tIGFueXdoZXJlIHlvdSBtYXkgYmUuIFNoYXJlIHlvdXIgbG9jYXRpb24sIE1lZXQgdXAsIEV4Y2hhbmdlIHN0b3JpZXMsIENyZWF0ZSByZWxhdGlvbnNoaXBzIHdpdGggcGVvcGxlIHdobyBoYXZlIHNpbWlsYXIgaW50ZXJlc3QgYW5kIGVuaGFuY2UgeW91ciB0cmF2ZWxpbmcgZXhwZXJpZW5jZSB3aXRoIG5vbWFkcy48L3A+IFxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgPGgzPkNyZWF0ZWQgQnk6IERpdmluZSBNYWRuZXNzJmNvcHk8L2gzPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICBgXG4gICAgICAgICQoXCIjb3V0cHV0XCIpLmh0bWwoZm9ybUhUTUwpXG4gICAgICAgIGV2ZW50TGlzdGVuZXJzLm1vZGFsRGlzcGxheUFuaW1hdGlvbigpXG4gICAgICAgICQoXCIjbG9nSW5cIikuY2xpY2soZXZlbnRMaXN0ZW5lcnMudXNlckxvZ2luKVxuICAgICAgICAkKFwiI3JlZ2lzdGVyQnV0dG9uXCIpLmNsaWNrKGV2ZW50TGlzdGVuZXJzLnVzZXJSZWdpc3RyYXRpb24pXG4gICAgICAgICQoXCIjcmVnaXN0ZXJCdXR0b25cIikuY2xpY2soZXZlbnRMaXN0ZW5lcnMudXNlckxvZ2luKVxuICAgICAgICAvLyAkKFwiI2xvZ0luXCIpLmNsaWNrKGV2ZW50TGlzdGVuZXJzLmxvYWREYXNoYm9hcmQpXG4gIFxuICAgICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgZGFzaGJvYXJkIiwiLy8gaW1wb3J0IGV2ZW50cyBmcm9tIFwiLi9ldmVudHNcIjtcblxuLy8gaW1wb3J0IG5vbWFkRGF0YSBmcm9tIFwiLi9ub21hZERhdGFcIjtcbi8vIGltcG9ydCBub21hZERhdGEgZnJvbSBcIi4vbm9tYWREYXRhXCI7XG4vLyBpbXBvcnQgZnJpZW5kcyBmcm9tIFwiLi9mcmllbmRzXCI7XG4vLyBpbXBvcnQgbmV3cyBmcm9tIFwiLi9uZXdzXCJcbi8vIGltcG9ydCBtZXNzYWdlcyBmcm9tIFwiLi9tZXNzYWdlc1wiO1xuaW1wb3J0IGRhc2hCb2FyZCBmcm9tIFwiLi9kYXNoYm9hcmRcIlxuLy8gaW1wb3J0IGRvbUNvbXBvbmVudHMgZnJvbSBcIi4vZG9tQ29tcG9uZW50c1wiO1xuaW1wb3J0IGV2ZW50TGlzdGVuZXJzIGZyb20gXCIuL2V2ZW50TGlzdGVuZXJzXCI7XG5cbi8vQlVJTERTIE5BSUdBVElPTkJBUi8vXG4vLyBkb21Db21wb25lbnRzLmNyZWF0ZU5hdkJhcigpXG5kYXNoQm9hcmQuYnVpbGRMb2dpbkZvcm0oKVxuJChcIm1vZGFsQnV0dG9uXCIpLmNsaWNrKGV2ZW50TGlzdGVuZXJzLm1vZGFsRGlzcGxheUFuaW1hdGlvbilcblxuLy9ORVdTIFNFQ1RJT05cbi8vIG5ld3Muc2F2ZSgpO1xuLy8gbmV3cy5hbGxTYXZlZCgpO1xuLy8gbmV3cy5nZXROZXdzKCk7XG5cblxuLy8gbmV3cy5uZXdzRWxlbWVudENyZWF0b3IoKTtcbi8vIG5ld3MubmV3c0VsZW1lbnRDcmVhdG9yKCk7XG5cbiIsIi8vIGltcG9ydCBub21hZERhdGEgZnJvbSBcIi4vbm9tYWREYXRhXCI7XG4vLyBpbXBvcnQgZG9tQ29tcG9uZW50cyBmcm9tIFwiLi9kb21Db21wb25lbnRzXCI7XG4vLyBpbXBvcnQgZXZlbnRzIGZyb20gXCIuL2V2ZW50c1wiO1xuLy8gaW1wb3J0IGRhc2hib2FyZCBmcm9tIFwiLi9kYXNoYm9hcmRcIlxuLy8gaW1wb3J0IG1lc3NhZ2VzIGZyb20gXCIuL21lc3NhZ2VzXCI7XG4vLyBpbXBvcnQgZnJpZW5kcyBmcm9tIFwiLi9mcmllbmRzXCI7XG4vLyBpbXBvcnQgbmV3cyBmcm9tIFwiLi9uZXdzXCI7XG5cbmNvbnN0IGV2ZW50TGlzdGVuZXJzID0ge1xuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgTE9HSU4gRk9STTogdXNlciBlbnRlcnMgVXNlcm5hbWUgYW5kIFBhc3N3b3JkLiB3aGVuIFVzZXIgY2xpY2tzIGxvZ2luLCB0aGUgaW5wdXQgZmllbGQgYW5kIE5PTUFEUyBoZWFkZXIgZGlzYXBwZWFyXG4gICAgYW5kIHRoZSB1c2VyIHdpbGwgYmUgZGlzcGxheWVkIHRoZSBcIkRhc2hib2FyZFwiIGFuZCB0aGUgbmF2aWdhdGlvbiBiYXIuIFVwb24gbG9naW4sIHNlc3Npb25TdG9yYWdlIGlzIHN0YXJ0ZWQuIEluIHRoZSBDb25zb2xlXG4gICAgeW91IHdpbGwgYmUgYWJsZSB0byBzZWUgV2hvIGlzIGxvZ2dlZCBpbiBhbmQgd2hhdCB0aGVpciB1c2VySWQgaXMuIGllLiAxLDIsMyw0IGV0Yy5cbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgdXNlckxvZ2luKCl7XG4gICAgICAgIGxldCBsb2dJblZhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdXNlck5hbWVWYWxcIikudmFsdWVcbiAgICAgICAgbGV0IHBhc3N3b3JkVmFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwYXNzd29yZFZhbFwiKS52YWx1ZVxuICAgICAgICAvL2dldCB0byBjb21wYXJlXG4gICAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcblxuICAgICAgICBcImRhdGFTZXRcIiA6IFwidXNlcnNcIixcbiAgICAgICAgXCJmZXRjaFR5cGVcIiA6IFwiR0VUXCIsXG4gICAgICAgIFwiZW1iZWRJdGVtXCIgOiBcIj9fZW1iZWQ9dXNlcnNcIlxuXG4gICAgfSkudGhlbihwYXJzZWRVc2VycyA9PiB7XG5cbiAgICAgICAgcGFyc2VkVXNlcnMuZm9yRWFjaCh1c2VyID0+IHtcbiAgICAgICAgICAgICAgLypJZiBsb2dpbiBjcmVkZW50aWFscyBtYXRjaCB0aG9zZSBpbiBkYXRhYmFzZS5qc29uLiBXZSB3YW50IHRoZSB1c2VyIHRvIGJlIGRpc3BsYXllZCB0aGVpciBcImRhc2hib2FkXCJcbiAgICAgICAgICAgICAgYW5kIG5hdmlnYXRpb24gYmFyLiBTbyB3ZSBuZWVkIHRvIHNldCBkaXNwbGF5IHRvIG5vbmUgYW5kIGludm9rZSB0aGUgZnVuY3Rpb24gLSBjcmVhdGVOYXZCYXIoKSovXG4gICAgICAgICAgICBpZihsb2dJblZhbCA9PT0gdXNlci51c2VyTmFtZSAmJiBwYXNzd29yZFZhbCA9PT0gdXNlci5wYXNzd29yZCkge1xuICAgICAgICAgICAgICAgICAgICAvL2hpZGVzIE5PTUFEIGhlYWRpbmdcbiAgICAgICAgICAgICAgICAgICAgJChcIi50LWJvcmRlclwiKS5oaWRlKClcbiAgICAgICAgICAgICAgICAgICAgLy9oaWRlcyB0aGUgZm9ybVxuICAgICAgICAgICAgICAgICAgICAkKFwiLmZvcm1cIikuaGlkZSgpXG4gICAgICAgICAgICAgICAgICAgIC8vZGlzcGxheXMgbmF2aWdhdGluIGJhclxuICAgICAgICAgICAgICAgICAgICBkYXNoYm9hcmQuY3JlYXRlTmF2QmFyKClcbiAgICAgICAgICAgICAgICAgICAgLy9zZXNzaW9uIHN0b3JhZ2VcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInVzZXJJZFwiLCB1c2VyLmlkKVxuICAgICAgICAgICAgICAgICAgICBsZXQgdXNlcklkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKVxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nIHZlcmlmeWluZyB0aGF0IGNyZWRlbnRpYWxzIG1hdGNoIGFuZCB1c2VyIGlzIGxvZ2dlZCBpblxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvZ2dlZCBpbiBhc1wiICsgXCIgXCIgKyB1c2VyLnVzZXJOYW1lKVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInlvdXIgdXNlciBJRCBpczogXCIgKyB1c2VySWQpXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBSRUdJU1RSQVRJT04gRk9STTogV2hlbiByZWdpc3RlcmluZyBmb3IgYW4gYWNjb3VudCB0aGUgdXNlciB3aWxsIGVudGVyIGRlc2lyZWQgdXNlcm5hbWUsIGVtYWlsLCBhbmQgcGFzc3dvcmRcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgdXNlclJlZ2lzdHJhdGlvbigpe1xuICAgICAgICBsZXQgcmVnVXNlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JlZ1VzZXJOYW1lXCIpLnZhbHVlXG4gICAgICAgIGxldCByZWdFbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVnRW1haWxcIikudmFsdWVcbiAgICAgICAgbGV0IHJlZ1Bhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZWdQYXNzd29yZFwiKS52YWx1ZVxuICAgICAgICAvLyBsZXQgcmVnQ29uZmlybVBhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZWdVc2VyTmFtZVwiKS52YWx1ZVxuXG4gICAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcblxuICAgICAgICAgICAgICAgIFwiZGF0YVNldFwiIDogXCJ1c2Vyc1wiLFxuICAgICAgICAgICAgICAgIFwiZmV0Y2hUeXBlXCIgOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidXNlck5hbWVcIjogcmVnVXNlck5hbWUsXG4gICAgICAgICAgICAgICAgICAgIFwiZW1haWxcIjogcmVnRW1haWwsXG4gICAgICAgICAgICAgICAgICAgIFwicGFzc3dvcmRcIjogcmVnUGFzc3dvcmRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS50aGVuKFxuICAgICAgICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xuICAgICAgICAgICAgICAgIFwiZGF0YVNldFwiIDogXCJ1c2Vyc1wiLFxuICAgICAgICAgICAgICAgIFwiZmV0Y2hUeXBlXCIgOiBcIkdFVFwiLFxuICAgICAgICAgICAgICAgIFwiZW1iZWRJdGVtXCIgOiBgP3VzZXJOYW1lPSR7cmVnVXNlck5hbWV9YFxuICAgICAgICAgICAgfSkudGhlbih1c2VyID0+e1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXIpXG4gICAgICAgICAgICAgICAgdXNlci5mb3JFYWNoKCB4ID0+e1xuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwidXNlcklkXCIsIHguaWQpXG5cbiAgICAgICAgICAgICAgICAvL2hpZGVzIE5PTUFEIGhlYWRpbmdcbiAgICAgICAgICAgICAgICAkKFwiLnQtYm9yZGVyXCIpLmhpZGUoKVxuICAgICAgICAgICAgICAgIC8vaGlkZXMgdGhlIGZvcm1cbiAgICAgICAgICAgICAgICAkKFwiLmZvcm1cIikuaGlkZSgpXG4gICAgICAgICAgICAgICAgLy9kaXNwbGF5cyBuYXZpZ2F0aW4gYmFyXG4gICAgICAgICAgICAgICAgZGFzaGJvYXJkLmNyZWF0ZU5hdkJhcigpXG4gICAgICAgICAgICAgICAgbGV0IHVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIilcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nIHZlcmlmeWluZyB0aGF0IGNyZWRlbnRpYWxzIG1hdGNoIGFuZCB1c2VyIGlzIGxvZ2dlZCBpblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibG9nZ2VkIGluIGFzXCIgKyBcIiBcIiArIHgudXNlck5hbWUpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ5b3VyIHVzZXIgSUQgaXM6IFwiICsgdXNlcklkKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgfSxcbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIE1PREFMOiB1c2VyIHdpbGwgY2xpY2sgdGhlIE5PTUFEIE1JU1NJT04gYnV0dG9uIGFuZCBhIG1vZGFsIHdpbGwgcG9wIHVwIGRlc2NyaWJpbmcgd2hhdCB0aGUgYXBwbGljYXRpb24gaXMgYWJvdXRcbiAgICBhbmQgd2hvIGl0IGlzIHRhaWxvcmVkIHRvd2FyZHNcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgbW9kYWxEaXNwbGF5QW5pbWF0aW9uKCl7XG4gICAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm9tYWRNb2RhbFwiKTtcblxuICAgICAgICAvLyB0YXJnZXQgbW9kYWwgdG8gb3BlbiBpdFxuICAgICAgICBsZXQgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbEJ1dHRvblwiKTtcblxuICAgICAgICAvLyBHZXQgdGhlIDxzcGFuPiBlbGVtZW50IHRoYXQgY2xvc2VzIHRoZSBtb2RhbFxuICAgICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjbG9zZVwiKVswXTtcbiAgICAgICAgLy8gV2hlbiB0aGUgdXNlciBjbGlja3MgdGhlIGJ1dHRvbiwgb3BlbiB0aGUgbW9kYWxcbiAgICAgICAgYnRuLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfVxuICAgICAgICAvLyBXaGVuIHRoZSB1c2VyIGNsaWNrcyBvbiA8c3Bhbj4gKHgpLCBjbG9zZSB0aGUgbW9kYWxcbiAgICAgICAgc3Bhbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgICAgICAvLyBXaGVuIHRoZSB1c2VyIGNsaWNrcyBhbnl3aGVyZSBvdXRzaWRlIG9mIHRoZSBtb2RhbCwgY2xvc2UgaXRcbiAgICAgICAgd2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PSBtb2RhbCkge1xuICAgICAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAkKFwiLm1lc3NhZ2UgYVwiKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAkKFwiZm9ybVwiKS5hbmltYXRlKHtoZWlnaHQ6IFwidG9nZ2xlXCIsIG9wYWNpdHk6IFwidG9nZ2xlXCJ9LCBcInNsb3dcIilcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgTkFWQkFSIExJIEVMSVNURU5FUlM6IFdoZW4gdXNlciBjbGlja3MgYW4gaXRlbSBpbiB0aGUgTkFWQkFSIHRoZSBjb250ZW50IGFzc29jaWF0ZWQgd2l0aCB0aGF0IHRhYiB3aWxsIHBvcHVsYXRlIHRoZSBET01cblxuICAgIFRIRVNFIDUgQVJSQVkgTUVUSE9EUyBBUkUgR09JTkcgVE8gU1RBWSBJTiBUSEUgTUFJTiBFVkVOVExJU1RFTkVSUyBGSUxFIEVWRVlUSElORyBFTFNFIFdJTEwgQkUgU0VQRVJBVEVEIElOVE8gU0VQRVJBVEVcbiAgICBFTCBGSUxFU1xuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICBtZXNzYWdlc05hdkxpbmsoKXtcbiAgICAgICAgbWVzc2FnZXMuY3JlYXRlTWVzc2FnZUJvYXJkKClcbiAgICAgICAgY29uc29sZS5sb2coXCJ3b3JraW5nXCIpXG5cbiAgICB9LFxuICAgIGV2ZW50c05hdkxpbmsoKXtcbiAgICAgICAgICAgIGV2ZW50cy5zaG93RXZlbnRGb3JtKClcbiAgICAgICAgICAgIC8vYXBwZW5kVXNlckV2ZW50XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImV2ZW50cyBjbGlja2VkXCIpXG4gICAgfSxcbiAgICBmcmllbmRzTmF2TGluaygpe1xuICAgICAgICBjb25zb2xlLmxvZyhcImZyaWVuZHMgbmF2IGxpbmsgY2xpY2tlZFwiKVxuICAgICAgICBmcmllbmRzLmxvYWRDdXJyZW50VXNlcnNGcmllbmRzKClcbiAgICAgICAgZnJpZW5kcy5kZWZpbmVDdXJyZW50VXNlcnNGcmllbmRzKClcbiAgICB9LFxuICAgIG5ld3NOYXZMaW5rKCl7XG4gICAgICAgIC8vTkVXUyBTRUNUSU9OXG4gICAgICAgIG5ld3Muc2F2ZSgpO1xuICAgICAgICBuZXdzLmFsbFNhdmVkKCk7XG4gICAgICAgIG5ld3MuZ2V0TmV3cygpO1xuICAgICAgICBuZXdzLm5ld3NFbGVtZW50Q3JlYXRvcigpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIm5ld3MgbGluayBjbGlja2VkXCIpXG4gICAgfSxcbiAgICBmcmllbmRzRGVsZXRlRnJpZW5kICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0KTtcblxuICAgIH0sXG4gICAgaGFuZGxlRXZlbnRTYXZlQnV0dG9uKCkge1xuICAgICAgICBjb25zdCBuYW1lSW5wdXR0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2V2ZW50TmFtZVwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZGF0ZUlucHV0dGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNldmVudERhdGVcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IHRpbWVJbnB1dHRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXZlbnRUaW1lXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBsb2NhdGlvbklucHV0dGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNldmVudExvY2F0aW9uXCIpLnZhbHVlO1xuXG4gICAgICAgIGNvbnN0IGV2ZW50T2JqZWN0ID0ge1xuICAgICAgICAgICAgZXZlbnROYW1lOiBuYW1lSW5wdXR0ZWQsXG4gICAgICAgICAgICBldmVudERhdGU6IGRhdGVJbnB1dHRlZCxcbiAgICAgICAgICAgIGV2ZW50VGltZTogdGltZUlucHV0dGVkLFxuICAgICAgICAgICAgZXZlbnRMb2NhdGlvbjogbG9jYXRpb25JbnB1dHRlZFxuICAgICAgICB9O1xuXG5cbiAgICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xuICAgICAgICAgICAgZGF0YVNldDogXCJldmVudHNcIixcbiAgICAgICAgICAgIGZldGNoVHlwZTogXCJQT1NUXCIsXG4gICAgICAgICAgICBkYXRhQmFzZU9iamVjdDoge1xuICAgICAgICAgICAgICAgIHVzZXJJZDogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSxcbiAgICAgICAgICAgICAgICBldmVudE5hbWU6IGV2ZW50T2JqZWN0LmV2ZW50TmFtZSxcbiAgICAgICAgICAgICAgICBldmVudERhdGU6IGV2ZW50T2JqZWN0LmV2ZW50RGF0ZSxcbiAgICAgICAgICAgICAgICBldmVudFRpbWU6IGV2ZW50T2JqZWN0LmV2ZW50VGltZSxcbiAgICAgICAgICAgICAgICBldmVudExvY2F0aW9uOiBldmVudE9iamVjdC5ldmVudExvY2F0aW9uXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKCAoKSA9PiB7XG4gICAgICAgICAgICBldmVudHMuYXBwZW5kVXNlckV2ZW50cygpO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBoYW5kbGVFdmVudERlbGV0ZUJ1dHRvbigpIHtcbiAgICAgICAgY29uc3QgaWRUb0RlbGV0ZSA9IGV2ZW50LnRhcmdldC5pZC5zcGxpdChcIi0tXCIpWzFdO1xuICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICAgICAgICBkZWxldGVJZDogaWRUb0RlbGV0ZSxcbiAgICAgICAgICAgIGRhdGFTZXQ6IFwiZXZlbnRzXCIsXG4gICAgICAgICAgICBmZXRjaFR5cGU6IFwiREVMRVRFXCIsXG4gICAgICAgICAgICBkYXRhQmFzZU9iamVjdDoge1xuICAgICAgICAgICAgICAgIHVzZXJJZDogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAudGhlbiggKCkgPT4ge1xuICAgICAgICAgICAgZXZlbnRzLmFwcGVuZFVzZXJFdmVudHMoKTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgaGFuZGxlRXZlbnRFZGl0QnV0dG9uKCkge1xuICAgICAgICBjb25zdCBpZFRvRWRpdCA9IGV2ZW50LnRhcmdldC5pZC5zcGxpdChcIi0tXCIpWzFdO1xuICAgICAgICAvLyBjb25zdCBldmVudE9iamVjdCA9XG4gICAgICAgIGRvbUNvbXBvbmVudHMuY3JlYXRlRXZlbnRFZGl0SW5wdXQoaWRUb0VkaXQsIClcbiAgICB9LFxuICAgIGhhbmRsZUV2ZW50VXBkYXRlQnV0dG9uKCkge1xuXG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZXZlbnRMaXN0ZW5lcnM7XG4iXX0=
