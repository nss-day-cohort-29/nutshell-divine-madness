(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

  createNavBar() {
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
    `;
    let navBarContainer = document.querySelector("#main-nav");
    navBarContainer.innerHTML = navHTML;
  },

  buildLoginForm() {
    //using string interpolation to create the form
    let formHTML = `
      <h1 class = "t-border">Nomads</h1>
        <div class = "form">
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
            <input type="text" placeholder = "Username" required>
            <input type="password" placeholder = "Password" required>
            <button>Login</button>
            <button id = "modalButton">Nomads Mission</button>
            <p class = "message">Don't have an account? <a href = "#">Register</a></p>
          </form>
        </div>
        <div id="nomadModal" class="modal">
        <!-- Modal content -->
          <div class="modal-content">
            <div class="modal-header">
              <span class="close">&times;</span>
              <h2>The Purpose Behind Nomads</h2>
            </div>
            <div class="modal-body">
              <p>As outdoorsman, environmentalist, and filmmakers continue to grow. So do the adventurous spirits of those who embrace conscious consumerism and sustainable living. The purpose is to make a point of plugging into modern life and connecting with your fellow nomads from anywhere you may be. Share your location, Meet up, Exchange stories, Create relationships with people who have similar interest and enhance your traveling experience with nomads. What are you waiting for? 
            </div>
            <div class="modal-footer">
              <h3>Created By: Divine Madness&copy</h3>
            </div>
          </div>
        </div>
        `;

    _eventListeners.default.toggleInputForms(); //this will target the output article container


    let logInPage = document.querySelector("#output");
    logInPage.innerHTML = formHTML; // $(".login-page").html(formHTML)
  }

};
var _default = domComponents;
exports.default = _default;

},{"./eventListeners":3}],2:[function(require,module,exports){
"use strict";

var _domComponents = _interopRequireDefault(require("./domComponents"));

var _eventListeners = _interopRequireDefault(require("./eventListeners"));

var _nomadData = _interopRequireDefault(require("./nomadData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import events from "./events";
// import nomadData from "./nomadData";
//BUILDS NAIGATIONBAR//
// domComponents.createNavBar()
_domComponents.default.buildLoginForm(); // eventListeners.toggleInputForms()
// console.log("I'm working")
// template for object to pass into nomadData.connectToData() if you are doing a GET
// let fetchTest = {
//     "dataSet" : "users",
//     "fetchType" : "GET",
//     "dataBaseObject" : "",
//     "embedItem" : "?_embed=events"
// }
// template for object to pass into nomadData.connectToData() if you are doing a POST
// let fetchTest2 = {
//     "dataSet" : "events",
//     "fetchType" : "POST",
//     "dataBaseObject" : {
//       "userId": 1,
//       "eventName": "yet another toga party",
//       "eventDate": "2-12",
//       "eventTime": "3:00pm",
//       "eventLocation": "Vegas"
//     }
// }
// template for object to pass into nomadData.connectToData() if you are doing a PUT
// let fetchTest3 = {
//     "putId" : 2,
//     "dataSet" : "events",
//     "fetchType" : "PUT",
//     "dataBaseObject" : {
//       "id" : 2,
//       "userId": 1,
//       "eventName": "another toga party",
//       "eventDate": "2-15",
//       "eventTime": "3:00pm",
//       "eventLocation": "Vegas"
//     }
// }
// nomadData.connectToData(fetchTest3)
// import events from "./events";


// import messages from "./messages";
// messages.createMessageBoard();
function userLogin() {
  let userName = "Hernando";
  let password = "yomama";

  _nomadData.default.connectToData({
    "dataSet": "users",
    "fetchType": "GET",
    "embedItem": "?_embed=events"
  }).then(parsedUsers => {
    parsedUsers.forEach(user => {
      if (userName === user.userName && password === user.password) {
        sessionStorage.setItem("'userId'", user.id);
      }
    });
  });

  let userId = sessionStorage.getItem("'userId'");
  loadDashboard(userId); // console.log("UserId = ", sessionStorage.getItem('userId'))
}

userLogin();

function loadDashboard(userId) {
  console.log(`Thanks for passing the userId.  The userId is ${userId}`);
}

},{"./domComponents":1,"./eventListeners":3,"./nomadData":4}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const eventListeners = {
  modalDisplayAnimation() {
    // target  modal
    let modal = document.getElementById("nomadModal"); // target modal to open modal

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
  },

  toggleInputForms() {
    $(".message a").click(function () {
      $("form").animate({
        height: "toggle",
        opacity: "toggle"
      }, "slow");
    });
  }

};
var _default = eventListeners;
exports.default = _default;

},{}],4:[function(require,module,exports){
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
    } else {
      console.log("YOU SCREWED IT UP");
    }
  }

};
var _default = nomadData;
exports.default = _default;

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2RvbUNvbXBvbmVudHMuanMiLCIuLi9zY3JpcHRzL2RvbVJlbmRlcmVyLmpzIiwiLi4vc2NyaXB0cy9ldmVudExpc3RlbmVycy5qcyIsIi4uL3NjcmlwdHMvbm9tYWREYXRhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQ0FBOzs7O0FBRUEsTUFBTSxhQUFhLEdBQUc7QUFDcEIsRUFBQSxnQkFBZ0IsQ0FBQztBQUFFLElBQUEsV0FBRjtBQUFlLElBQUEsT0FBTyxHQUFHLElBQXpCO0FBQStCLElBQUEsUUFBL0I7QUFBeUMsSUFBQSxVQUFVLEdBQUc7QUFBdEQsR0FBRCxFQUE2RDtBQUMzRSxVQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixXQUF2QixDQUFoQjtBQUNBLElBQUEsT0FBTyxDQUFDLFdBQVIsR0FBc0IsT0FBdEI7O0FBRUEsUUFBSSxRQUFKLEVBQWM7QUFDWixNQUFBLE9BQU8sQ0FBQyxTQUFSLENBQWtCLEdBQWxCLENBQXNCLFFBQXRCO0FBQ0Q7O0FBRUQsU0FBSyxJQUFJLEdBQVQsSUFBZ0IsVUFBaEIsRUFBNEI7QUFDMUIsTUFBQSxPQUFPLENBQUMsWUFBUixDQUFxQixHQUFyQixFQUEwQixVQUFVLENBQUMsR0FBRCxDQUFwQztBQUNEOztBQUNELFdBQU8sT0FBUDtBQUNELEdBYm1COztBQWNwQixFQUFBLFlBQVksR0FBRTtBQUNaLFFBQUksT0FBTyxHQUFJOzs7Ozs7Ozs7OztLQUFmO0FBWUEsUUFBSSxlQUFlLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBdEI7QUFDQSxJQUFBLGVBQWUsQ0FBQyxTQUFoQixHQUE0QixPQUE1QjtBQUNDLEdBN0JpQjs7QUE4QmxCLEVBQUEsY0FBYyxHQUFFO0FBQ2Q7QUFDQSxRQUFJLFFBQVEsR0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QixRQUFBLE9BQU8sRUFBRTtBQUNMLDBCQUFnQixpQ0FEWCxDQUVMOztBQUZLLFNBRjZDO0FBTXREO0FBQ0EsUUFBQSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQUwsQ0FBZSxjQUFmLENBUGdELENBT2hCOztBQVBnQixPQUE5QyxDQUFaO0FBU0MsS0FWTSxNQVVBO0FBQ0gsTUFBQSxPQUFPLENBQUMsR0FBUixDQUFhLG1CQUFiO0FBQ0g7QUFDSjs7QUF6Q2EsQ0FBbEI7ZUE0Q2UsUyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCBldmVudExpc3RlbmVycyBmcm9tIFwiLi9ldmVudExpc3RlbmVyc1wiO1xyXG5cclxuY29uc3QgZG9tQ29tcG9uZW50cyA9IHtcclxuICBjcmVhdGVEb21FbGVtZW50KHsgZWxlbWVudFR5cGUsIGNvbnRlbnQgPSBudWxsLCBjc3NDbGFzcywgYXR0cmlidXRlcyA9IHt9IH0pIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnRUeXBlKTtcclxuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xyXG5cclxuICAgIGlmIChjc3NDbGFzcykge1xyXG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XHJcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcclxuICAgIH1cclxuICAgIHJldHVybiBlbGVtZW50O1xyXG4gIH0sXHJcbiAgY3JlYXRlTmF2QmFyKCl7XHJcbiAgICBsZXQgbmF2SFRNTCA9IGAgXHJcbiAgICAgIDxuYXY+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgPGxpPjxhIGNsYXNzID0gXCJhY3RpdmVcIiBocmVmID0gXCIjXCI+QXJ0aWNsZXM8L2E+PC9saT5cclxuICAgICAgICAgIDxsaT48YSBocmVmID0gXCIjXCI+RXZlbnRzPC9hPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGEgaHJlZiA9IFwiI1wiPlRhc2tzPC9hPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGEgaHJlZiA9IFwiI1wiPkZyaWVuZHM8L2E+PC9saT5cclxuICAgICAgICAgIDxsaT48YSBocmVmID0gXCIjXCI+TWVzc2FnZXM8L2E+PC9saT5cclxuICAgICAgICAgIDxsaSBpZCA9IFwibG9nb1wiID48YSBocmVmPVwiI2Fib3V0XCI+Tm9tYWRzPC9hPjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9uYXY+XHJcbiAgICBgXHJcbiAgICBsZXQgbmF2QmFyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLW5hdlwiKVxyXG4gICAgbmF2QmFyQ29udGFpbmVyLmlubmVySFRNTCA9IG5hdkhUTUxcclxuICAgIH0sXHJcbiAgICBidWlsZExvZ2luRm9ybSgpe1xyXG4gICAgICAvL3VzaW5nIHN0cmluZyBpbnRlcnBvbGF0aW9uIHRvIGNyZWF0ZSB0aGUgZm9ybVxyXG4gICAgICBsZXQgZm9ybUhUTUwgPSBgXHJcbiAgICAgIDxoMSBjbGFzcyA9IFwidC1ib3JkZXJcIj5Ob21hZHM8L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3MgPSBcImZvcm1cIj5cclxuICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiIGNsYXNzID0gcmVnaXN0ZXJGb3JtPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlciA9IFwiTmFtZVwiIHJlcXVpcmVkPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXIgPSBcIkVtYWlsXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyID0gXCJVc2VybmFtZVwiIHJlcXVpcmVkPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXIgPSBcIlBhc3N3b3JkXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlciA9IFwiQ29uZmlybSBQYXNzd29yZFwiIHJlcXVpcmVkPlxyXG4gICAgICAgICAgICA8YnV0dG9uPkNyZWF0ZSBBY2NvdW50PC9idXR0b24+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzID0gXCJtZXNzYWdlXCI+QWxyZWFkeSBhIFJlZ2lzdGVyZWQgTWVtYmVyPyA8YSBocmVmID0gXCIjXCI+TG9nSW4gPC9hPjwvcD5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDxmb3JtIGNsYXNzID0gXCJsb2dpbi1mb3JtXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyID0gXCJVc2VybmFtZVwiIHJlcXVpcmVkPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXIgPSBcIlBhc3N3b3JkXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgIDxidXR0b24+TG9naW48L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBpZCA9IFwibW9kYWxCdXR0b25cIj5Ob21hZHMgTWlzc2lvbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8cCBjbGFzcyA9IFwibWVzc2FnZVwiPkRvbid0IGhhdmUgYW4gYWNjb3VudD8gPGEgaHJlZiA9IFwiI1wiPlJlZ2lzdGVyPC9hPjwvcD5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkPVwibm9tYWRNb2RhbFwiIGNsYXNzPVwibW9kYWxcIj5cclxuICAgICAgICA8IS0tIE1vZGFsIGNvbnRlbnQgLS0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjbG9zZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGgyPlRoZSBQdXJwb3NlIEJlaGluZCBOb21hZHM8L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICA8cD5BcyBvdXRkb29yc21hbiwgZW52aXJvbm1lbnRhbGlzdCwgYW5kIGZpbG1tYWtlcnMgY29udGludWUgdG8gZ3Jvdy4gU28gZG8gdGhlIGFkdmVudHVyb3VzIHNwaXJpdHMgb2YgdGhvc2Ugd2hvIGVtYnJhY2UgY29uc2Npb3VzIGNvbnN1bWVyaXNtIGFuZCBzdXN0YWluYWJsZSBsaXZpbmcuIFRoZSBwdXJwb3NlIGlzIHRvIG1ha2UgYSBwb2ludCBvZiBwbHVnZ2luZyBpbnRvIG1vZGVybiBsaWZlIGFuZCBjb25uZWN0aW5nIHdpdGggeW91ciBmZWxsb3cgbm9tYWRzIGZyb20gYW55d2hlcmUgeW91IG1heSBiZS4gU2hhcmUgeW91ciBsb2NhdGlvbiwgTWVldCB1cCwgRXhjaGFuZ2Ugc3RvcmllcywgQ3JlYXRlIHJlbGF0aW9uc2hpcHMgd2l0aCBwZW9wbGUgd2hvIGhhdmUgc2ltaWxhciBpbnRlcmVzdCBhbmQgZW5oYW5jZSB5b3VyIHRyYXZlbGluZyBleHBlcmllbmNlIHdpdGggbm9tYWRzLiBXaGF0IGFyZSB5b3Ugd2FpdGluZyBmb3I/IFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgIDxoMz5DcmVhdGVkIEJ5OiBEaXZpbmUgTWFkbmVzcyZjb3B5PC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgXHJcbiAgICAgICAgZXZlbnRMaXN0ZW5lcnMudG9nZ2xlSW5wdXRGb3JtcygpXHJcbiAgICAgICAgLy90aGlzIHdpbGwgdGFyZ2V0IHRoZSBvdXRwdXQgYXJ0aWNsZSBjb250YWluZXJcclxuICAgICAgICBsZXQgbG9nSW5QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvdXRwdXRcIilcclxuICAgICAgICBsb2dJblBhZ2UuaW5uZXJIVE1MID0gZm9ybUhUTUxcclxuICAgICAgICAvLyAkKFwiLmxvZ2luLXBhZ2VcIikuaHRtbChmb3JtSFRNTClcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRvbUNvbXBvbmVudHMiLCIvLyBpbXBvcnQgZXZlbnRzIGZyb20gXCIuL2V2ZW50c1wiO1xyXG4vLyBpbXBvcnQgbm9tYWREYXRhIGZyb20gXCIuL25vbWFkRGF0YVwiO1xyXG5cclxuaW1wb3J0IGRvbUNvbXBvbmVudHMgZnJvbSBcIi4vZG9tQ29tcG9uZW50c1wiO1xyXG5pbXBvcnQgZXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vZXZlbnRMaXN0ZW5lcnNcIjtcclxuXHJcbi8vQlVJTERTIE5BSUdBVElPTkJBUi8vXHJcbi8vIGRvbUNvbXBvbmVudHMuY3JlYXRlTmF2QmFyKClcclxuZG9tQ29tcG9uZW50cy5idWlsZExvZ2luRm9ybSgpXHJcbi8vIGV2ZW50TGlzdGVuZXJzLnRvZ2dsZUlucHV0Rm9ybXMoKVxyXG5cclxuXHJcbi8vIGNvbnNvbGUubG9nKFwiSSdtIHdvcmtpbmdcIilcclxuXHJcbi8vIHRlbXBsYXRlIGZvciBvYmplY3QgdG8gcGFzcyBpbnRvIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKCkgaWYgeW91IGFyZSBkb2luZyBhIEdFVFxyXG5cclxuLy8gbGV0IGZldGNoVGVzdCA9IHtcclxuXHJcbi8vICAgICBcImRhdGFTZXRcIiA6IFwidXNlcnNcIixcclxuLy8gICAgIFwiZmV0Y2hUeXBlXCIgOiBcIkdFVFwiLFxyXG4vLyAgICAgXCJkYXRhQmFzZU9iamVjdFwiIDogXCJcIixcclxuLy8gICAgIFwiZW1iZWRJdGVtXCIgOiBcIj9fZW1iZWQ9ZXZlbnRzXCJcclxuLy8gfVxyXG5cclxuLy8gdGVtcGxhdGUgZm9yIG9iamVjdCB0byBwYXNzIGludG8gbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoKSBpZiB5b3UgYXJlIGRvaW5nIGEgUE9TVFxyXG5cclxuLy8gbGV0IGZldGNoVGVzdDIgPSB7XHJcblxyXG4vLyAgICAgXCJkYXRhU2V0XCIgOiBcImV2ZW50c1wiLFxyXG4vLyAgICAgXCJmZXRjaFR5cGVcIiA6IFwiUE9TVFwiLFxyXG4vLyAgICAgXCJkYXRhQmFzZU9iamVjdFwiIDoge1xyXG4vLyAgICAgICBcInVzZXJJZFwiOiAxLFxyXG4vLyAgICAgICBcImV2ZW50TmFtZVwiOiBcInlldCBhbm90aGVyIHRvZ2EgcGFydHlcIixcclxuLy8gICAgICAgXCJldmVudERhdGVcIjogXCIyLTEyXCIsXHJcbi8vICAgICAgIFwiZXZlbnRUaW1lXCI6IFwiMzowMHBtXCIsXHJcbi8vICAgICAgIFwiZXZlbnRMb2NhdGlvblwiOiBcIlZlZ2FzXCJcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gdGVtcGxhdGUgZm9yIG9iamVjdCB0byBwYXNzIGludG8gbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoKSBpZiB5b3UgYXJlIGRvaW5nIGEgUFVUXHJcblxyXG4vLyBsZXQgZmV0Y2hUZXN0MyA9IHtcclxuXHJcbi8vICAgICBcInB1dElkXCIgOiAyLFxyXG4vLyAgICAgXCJkYXRhU2V0XCIgOiBcImV2ZW50c1wiLFxyXG4vLyAgICAgXCJmZXRjaFR5cGVcIiA6IFwiUFVUXCIsXHJcbi8vICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiB7XHJcbi8vICAgICAgIFwiaWRcIiA6IDIsXHJcbi8vICAgICAgIFwidXNlcklkXCI6IDEsXHJcbi8vICAgICAgIFwiZXZlbnROYW1lXCI6IFwiYW5vdGhlciB0b2dhIHBhcnR5XCIsXHJcbi8vICAgICAgIFwiZXZlbnREYXRlXCI6IFwiMi0xNVwiLFxyXG4vLyAgICAgICBcImV2ZW50VGltZVwiOiBcIjM6MDBwbVwiLFxyXG4vLyAgICAgICBcImV2ZW50TG9jYXRpb25cIjogXCJWZWdhc1wiXHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8vIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKGZldGNoVGVzdDMpXHJcbi8vIGltcG9ydCBldmVudHMgZnJvbSBcIi4vZXZlbnRzXCI7XHJcbmltcG9ydCBub21hZERhdGEgZnJvbSBcIi4vbm9tYWREYXRhXCI7XHJcbi8vIGltcG9ydCBtZXNzYWdlcyBmcm9tIFwiLi9tZXNzYWdlc1wiO1xyXG5cclxuXHJcbi8vIG1lc3NhZ2VzLmNyZWF0ZU1lc3NhZ2VCb2FyZCgpO1xyXG5cclxuZnVuY3Rpb24gdXNlckxvZ2luICgpIHtcclxuXHJcbiAgICBsZXQgdXNlck5hbWUgPSBcIkhlcm5hbmRvXCI7XHJcbiAgICBsZXQgcGFzc3dvcmQgPSBcInlvbWFtYVwiO1xyXG5cclxuICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcclxuXHJcbiAgICAgICAgXCJkYXRhU2V0XCIgOiBcInVzZXJzXCIsXHJcbiAgICAgICAgXCJmZXRjaFR5cGVcIiA6IFwiR0VUXCIsXHJcbiAgICAgICAgXCJlbWJlZEl0ZW1cIiA6IFwiP19lbWJlZD1ldmVudHNcIlxyXG5cclxuICAgIH0pLnRoZW4ocGFyc2VkVXNlcnMgPT4ge1xyXG5cclxuICAgICAgICBwYXJzZWRVc2Vycy5mb3JFYWNoKHVzZXIgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKHVzZXJOYW1lID09PSB1c2VyLnVzZXJOYW1lICYmIHBhc3N3b3JkID09PSB1c2VyLnBhc3N3b3JkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcIid1c2VySWQnXCIsIHVzZXIuaWQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pXHJcbiAgICBsZXQgdXNlcklkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcIid1c2VySWQnXCIpO1xyXG4gICAgbG9hZERhc2hib2FyZCh1c2VySWQpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIlVzZXJJZCA9IFwiLCBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKSlcclxufVxyXG5cclxudXNlckxvZ2luKCk7XHJcblxyXG5mdW5jdGlvbiBsb2FkRGFzaGJvYXJkICh1c2VySWQpIHtcclxuICAgIGNvbnNvbGUubG9nKGBUaGFua3MgZm9yIHBhc3NpbmcgdGhlIHVzZXJJZC4gIFRoZSB1c2VySWQgaXMgJHt1c2VySWR9YClcclxufVxyXG4iLCJjb25zdCBldmVudExpc3RlbmVycyA9IHtcclxuICBtb2RhbERpc3BsYXlBbmltYXRpb24oKXtcclxuICAgICAgICAvLyB0YXJnZXQgIG1vZGFsXHJcbiAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vbWFkTW9kYWxcIik7XHJcbiAgICAvLyB0YXJnZXQgbW9kYWwgdG8gb3BlbiBtb2RhbFxyXG4gICAgbGV0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxCdXR0b25cIik7XHJcblxyXG4gICAgLy8gR2V0IHRoZSA8c3Bhbj4gZWxlbWVudCB0aGF0IGNsb3NlcyB0aGUgbW9kYWxcclxuICAgIGxldCBzcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNsb3NlXCIpWzBdO1xyXG5cclxuICAgIC8vIFdoZW4gdGhlIHVzZXIgY2xpY2tzIHRoZSBidXR0b24sIG9wZW4gdGhlIG1vZGFsXHJcbiAgICBidG4ub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgfVxyXG4gICAgLy8gV2hlbiB0aGUgdXNlciBjbGlja3Mgb24gPHNwYW4+ICh4KSwgY2xvc2UgdGhlIG1vZGFsXHJcbiAgICBzcGFuLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcclxuICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfVxyXG4gICAgLy8gV2hlbiB0aGUgdXNlciBjbGlja3MgYW55d2hlcmUgb3V0c2lkZSBvZiB0aGUgbW9kYWwsIGNsb3NlIGl0XHJcbiAgICB3aW5kb3cub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgIGlmIChldmVudC50YXJnZXQgPT0gbW9kYWwpIHtcclxuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIHRvZ2dsZUlucHV0Rm9ybXMoKXtcclxuICAgICQoXCIubWVzc2FnZSBhXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICQoXCJmb3JtXCIpLmFuaW1hdGUoe2hlaWdodDogXCJ0b2dnbGVcIiwgb3BhY2l0eTogXCJ0b2dnbGVcIn0sIFwic2xvd1wiKVxyXG4gICAgICB9KVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZXZlbnRMaXN0ZW5lcnMiLCJjb25zdCBub21hZERhdGEgPSB7XHJcblxyXG4gICAgY29ubmVjdFRvRGF0YShmZXRjaE9iamVjdCkge1xyXG5cclxuICAgIGxldCBkYXRhU2V0ID0gZmV0Y2hPYmplY3QuZGF0YVNldDtcclxuICAgIGxldCBlbWJlZEl0ZW0gPSBmZXRjaE9iamVjdC5lbWJlZEl0ZW07XHJcbiAgICBsZXQgZmV0Y2hUeXBlID0gZmV0Y2hPYmplY3QuZmV0Y2hUeXBlO1xyXG4gICAgbGV0IGRhdGFCYXNlT2JqZWN0ID0gZmV0Y2hPYmplY3QuZGF0YUJhc2VPYmplY3Q7XHJcbiAgICBsZXQgcHV0SWQgPSBmZXRjaE9iamVjdC5wdXRJZDtcclxuXHJcbiAgICAgICAgaWYgKGZldGNoVHlwZSA9PSBcIkdFVFwiKSB7XHJcblxyXG4gICAgICAgIHJldHVybiBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDg4LyR7ZGF0YVNldH0ke2VtYmVkSXRlbX1gKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpIC8vIHBhcnNlcyByZXNwb25zZSB0byBKU09OXHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoZmV0Y2hUeXBlID09PSBcIlBPU1RcIil7XHJcblxyXG4gICAgICAgIC8vIERlZmF1bHQgb3B0aW9ucyBhcmUgbWFya2VkIHdpdGggKlxyXG4gICAgICAgIHJldHVybiBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDg4LyR7ZGF0YVNldH1gLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogYCR7ZmV0Y2hUeXBlfWAsIC8vICpHRVQsIFBPU1QsIFBVVCwgREVMRVRFLCBldGMuXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICAgICAgLy8gXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8gcmVmZXJyZXI6IFwibm8tcmVmZXJyZXJcIiwgLy8gbm8tcmVmZXJyZXIsICpjbGllbnRcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YUJhc2VPYmplY3QpLCAvLyBib2R5IGRhdGEgdHlwZSBtdXN0IG1hdGNoIFwiQ29udGVudC1UeXBlXCIgaGVhZGVyXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmKGZldGNoVHlwZSA9PT0gXCJQVVRcIil7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODgvJHtkYXRhU2V0fS8ke3B1dElkfWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBgJHtmZXRjaFR5cGV9YCwgLy8gKkdFVCwgUE9TVCwgUFVULCBERUxFVEUsIGV0Yy5cclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgICAgICAvLyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyByZWZlcnJlcjogXCJuby1yZWZlcnJlclwiLCAvLyBuby1yZWZlcnJlciwgKmNsaWVudFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhQmFzZU9iamVjdCksIC8vIGJvZHkgZGF0YSB0eXBlIG11c3QgbWF0Y2ggXCJDb250ZW50LVR5cGVcIiBoZWFkZXJcclxuICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nIChcIllPVSBTQ1JFV0VEIElUIFVQXCIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBub21hZERhdGEiXX0=
