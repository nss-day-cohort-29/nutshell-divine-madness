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
        <section class = "form">
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
            <input type="text" placeholder = "Username">
            <input type="password" placeholder = "Password">
            <button>Login</button>
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
        `;
    $("#output").html(formHTML);

    _eventListeners.default.modalDisplayAnimation(); //this will target the output article container
    // let logInPage = document.querySelector("#output")
    // logInPage.innerHTML = formHTML
    // $(".login-page").html(formHTML)

    /*applying toggleInputForms event listener to register link on bottom of log
    in form and on the login link of the register page*/
    // eventListeners.toggleInputForms()

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
_domComponents.default.buildLoginForm();

$("modalButton").click(_eventListeners.default.modalDisplayAnimation); // console.log("I'm working")
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
// import domComponents from "./domComponents";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2RvbUNvbXBvbmVudHMuanMiLCIuLi9zY3JpcHRzL2RvbVJlbmRlcmVyLmpzIiwiLi4vc2NyaXB0cy9ldmVudExpc3RlbmVycy5qcyIsIi4uL3NjcmlwdHMvbm9tYWREYXRhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQ0FBOzs7O0FBRUEsTUFBTSxhQUFhLEdBQUc7QUFDcEIsRUFBQSxnQkFBZ0IsQ0FBQztBQUFFLElBQUEsV0FBRjtBQUFlLElBQUEsT0FBTyxHQUFHLElBQXpCO0FBQStCLElBQUEsUUFBL0I7QUFBeUMsSUFBQSxVQUFVLEdBQUc7QUFBdEQsR0FBRCxFQUE2RDtBQUMzRSxVQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixXQUF2QixDQUFoQjtBQUNBLElBQUEsT0FBTyxDQUFDLFdBQVIsR0FBc0IsT0FBdEI7O0FBRUEsUUFBSSxRQUFKLEVBQWM7QUFDWixNQUFBLE9BQU8sQ0FBQyxTQUFSLENBQWtCLEdBQWxCLENBQXNCLFFBQXRCO0FBQ0Q7O0FBRUQsU0FBSyxJQUFJLEdBQVQsSUFBZ0IsVUFBaEIsRUFBNEI7QUFDMUIsTUFBQSxPQUFPLENBQUMsWUFBUixDQUFxQixHQUFyQixFQUEwQixVQUFVLENBQUMsR0FBRCxDQUFwQztBQUNEOztBQUNELFdBQU8sT0FBUDtBQUNELEdBYm1COztBQWNwQixFQUFBLFlBQVksR0FBRTtBQUNaLFFBQUksT0FBTyxHQUFJOzs7Ozs7Ozs7OztLQUFmO0FBWUEsUUFBSSxlQUFlLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBdEI7QUFDQSxJQUFBLGVBQWUsQ0FBQyxTQUFoQixHQUE0QixPQUE1QjtBQUNDLEdBN0JpQjs7QUE4QmxCLEVBQUEsY0FBYyxHQUFFO0FBQ2Q7QUFDQSxRQUFJLFFBQVEsR0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QSxPQUFPLEVBQUU7QUFDTCwwQkFBZ0IsaUNBRFgsQ0FFTDs7QUFGSyxTQUY2QztBQU10RDtBQUNBLFFBQUEsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFMLENBQWUsY0FBZixDQVBnRCxDQU9oQjs7QUFQZ0IsT0FBOUMsQ0FBWjtBQVNDLEtBVk0sTUFVQTtBQUNILE1BQUEsT0FBTyxDQUFDLEdBQVIsQ0FBYSxtQkFBYjtBQUNIO0FBQ0o7O0FBekNhLENBQWxCO2VBNENlLFMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgZXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vZXZlbnRMaXN0ZW5lcnNcIjtcclxuXHJcbmNvbnN0IGRvbUNvbXBvbmVudHMgPSB7XHJcbiAgY3JlYXRlRG9tRWxlbWVudCh7IGVsZW1lbnRUeXBlLCBjb250ZW50ID0gbnVsbCwgY3NzQ2xhc3MsIGF0dHJpYnV0ZXMgPSB7fSB9KSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50VHlwZSk7XHJcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudDtcclxuXHJcbiAgICBpZiAoY3NzQ2xhc3MpIHtcclxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBrZXkgaW4gYXR0cmlidXRlcykge1xyXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxuICB9LFxyXG4gIGNyZWF0ZU5hdkJhcigpe1xyXG4gICAgbGV0IG5hdkhUTUwgPSBgIFxyXG4gICAgICA8bmF2PlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIDxsaT48YSBjbGFzcyA9IFwiYWN0aXZlXCIgaHJlZiA9IFwiI1wiPkFydGljbGVzPC9hPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGEgaHJlZiA9IFwiI1wiPkV2ZW50czwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxhIGhyZWYgPSBcIiNcIj5UYXNrczwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxhIGhyZWYgPSBcIiNcIj5GcmllbmRzPC9hPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGEgaHJlZiA9IFwiI1wiPk1lc3NhZ2VzPC9hPjwvbGk+XHJcbiAgICAgICAgICA8bGkgaWQgPSBcImxvZ29cIiA+PGEgaHJlZj1cIiNhYm91dFwiPk5vbWFkczwvYT48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgYFxyXG4gICAgbGV0IG5hdkJhckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi1uYXZcIilcclxuICAgIG5hdkJhckNvbnRhaW5lci5pbm5lckhUTUwgPSBuYXZIVE1MXHJcbiAgICB9LFxyXG4gICAgYnVpbGRMb2dpbkZvcm0oKXtcclxuICAgICAgLy91c2luZyBzdHJpbmcgaW50ZXJwb2xhdGlvbiB0byBjcmVhdGUgdGhlIGZvcm1cclxuICAgICAgbGV0IGZvcm1IVE1MID0gYFxyXG4gICAgICA8aDEgY2xhc3MgPSBcInQtYm9yZGVyXCI+Tm9tYWRzPC9oMT5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzcyA9IFwiZm9ybVwiPlxyXG4gICAgICAgICAgPGZvcm0gYWN0aW9uPVwiXCIgY2xhc3MgPSByZWdpc3RlckZvcm0+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyID0gXCJOYW1lXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlciA9IFwiRW1haWxcIiByZXF1aXJlZD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXIgPSBcIlVzZXJuYW1lXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlciA9IFwiUGFzc3dvcmRcIiByZXF1aXJlZD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyID0gXCJDb25maXJtIFBhc3N3b3JkXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgIDxidXR0b24+Q3JlYXRlIEFjY291bnQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPHAgY2xhc3MgPSBcIm1lc3NhZ2VcIj5BbHJlYWR5IGEgUmVnaXN0ZXJlZCBNZW1iZXI/IDxhIGhyZWYgPSBcIiNcIj5Mb2dJbiA8L2E+PC9wPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPGZvcm0gY2xhc3MgPSBcImxvZ2luLWZvcm1cIj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXIgPSBcIlVzZXJuYW1lXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlciA9IFwiUGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbj5Mb2dpbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJtb2RhbEJ1dHRvblwiPk5vbWFkcyBNaXNzaW9uPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzID0gXCJtZXNzYWdlXCI+RG9uJ3QgaGF2ZSBhbiBhY2NvdW50PyA8YSBocmVmID0gXCIjXCI+UmVnaXN0ZXI8L2E+PC9wPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8c2VjdGlvbiBpZD1cIm5vbWFkTW9kYWxcIiBjbGFzcz1cIm1vZGFsXCI+XHJcbiAgICAgICAgPCEtLSBNb2RhbCBjb250ZW50IC0tPlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjbG9zZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGgyPlRoZSBQdXJwb3NlIEJlaGluZCBOb21hZHM8L2gyPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgIDxwPkFzIG91dGRvb3JzbWFuLCBlbnZpcm9ubWVudGFsaXN0LCBhbmQgZmlsbW1ha2VycyBjb250aW51ZSB0byBncm93LiBTbyBkbyB0aGUgYWR2ZW50dXJvdXMgc3Bpcml0cyBvZiB0aG9zZSB3aG8gZW1icmFjZSBjb25zY2lvdXMgY29uc3VtZXJpc20gYW5kIHN1c3RhaW5hYmxlIGxpdmluZy4gVGhlIHB1cnBvc2UgaXMgdG8gbWFrZSBhIHBvaW50IG9mIHBsdWdnaW5nIGludG8gbW9kZXJuIGxpZmUgYW5kIGNvbm5lY3Rpbmcgd2l0aCB5b3VyIGZlbGxvdyBub21hZHMgZnJvbSBhbnl3aGVyZSB5b3UgbWF5IGJlLiBTaGFyZSB5b3VyIGxvY2F0aW9uLCBNZWV0IHVwLCBFeGNoYW5nZSBzdG9yaWVzLCBDcmVhdGUgcmVsYXRpb25zaGlwcyB3aXRoIHBlb3BsZSB3aG8gaGF2ZSBzaW1pbGFyIGludGVyZXN0IGFuZCBlbmhhbmNlIHlvdXIgdHJhdmVsaW5nIGV4cGVyaWVuY2Ugd2l0aCBub21hZHMuIFdoYXQgYXJlIHlvdSB3YWl0aW5nIGZvcj8gXHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICA8aDM+Q3JlYXRlZCBCeTogRGl2aW5lIE1hZG5lc3MmY29weTwvaDM+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgYFxyXG4gICAgICAgICQoXCIjb3V0cHV0XCIpLmh0bWwoZm9ybUhUTUwpXHJcbiAgICAgICAgZXZlbnRMaXN0ZW5lcnMubW9kYWxEaXNwbGF5QW5pbWF0aW9uKClcclxuICAgICAgICAvL3RoaXMgd2lsbCB0YXJnZXQgdGhlIG91dHB1dCBhcnRpY2xlIGNvbnRhaW5lclxyXG4gICAgICAgIC8vIGxldCBsb2dJblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI291dHB1dFwiKVxyXG4gICAgICAgIC8vIGxvZ0luUGFnZS5pbm5lckhUTUwgPSBmb3JtSFRNTFxyXG4gICAgICAgIC8vICQoXCIubG9naW4tcGFnZVwiKS5odG1sKGZvcm1IVE1MKVxyXG4gICAgICAgIC8qYXBwbHlpbmcgdG9nZ2xlSW5wdXRGb3JtcyBldmVudCBsaXN0ZW5lciB0byByZWdpc3RlciBsaW5rIG9uIGJvdHRvbSBvZiBsb2dcclxuICAgICAgICBpbiBmb3JtIGFuZCBvbiB0aGUgbG9naW4gbGluayBvZiB0aGUgcmVnaXN0ZXIgcGFnZSovXHJcbiAgICAgICAgLy8gZXZlbnRMaXN0ZW5lcnMudG9nZ2xlSW5wdXRGb3JtcygpXHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkb21Db21wb25lbnRzIiwiLy8gaW1wb3J0IGV2ZW50cyBmcm9tIFwiLi9ldmVudHNcIjtcclxuLy8gaW1wb3J0IG5vbWFkRGF0YSBmcm9tIFwiLi9ub21hZERhdGFcIjtcclxuXHJcbmltcG9ydCBkb21Db21wb25lbnRzIGZyb20gXCIuL2RvbUNvbXBvbmVudHNcIjtcclxuaW1wb3J0IGV2ZW50TGlzdGVuZXJzIGZyb20gXCIuL2V2ZW50TGlzdGVuZXJzXCI7XHJcblxyXG4vL0JVSUxEUyBOQUlHQVRJT05CQVIvL1xyXG4vLyBkb21Db21wb25lbnRzLmNyZWF0ZU5hdkJhcigpXHJcbmRvbUNvbXBvbmVudHMuYnVpbGRMb2dpbkZvcm0oKVxyXG4kKFwibW9kYWxCdXR0b25cIikuY2xpY2soZXZlbnRMaXN0ZW5lcnMubW9kYWxEaXNwbGF5QW5pbWF0aW9uKVxyXG5cclxuLy8gY29uc29sZS5sb2coXCJJJ20gd29ya2luZ1wiKVxyXG5cclxuLy8gdGVtcGxhdGUgZm9yIG9iamVjdCB0byBwYXNzIGludG8gbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoKSBpZiB5b3UgYXJlIGRvaW5nIGEgR0VUXHJcblxyXG4vLyBsZXQgZmV0Y2hUZXN0ID0ge1xyXG5cclxuLy8gICAgIFwiZGF0YVNldFwiIDogXCJ1c2Vyc1wiLFxyXG4vLyAgICAgXCJmZXRjaFR5cGVcIiA6IFwiR0VUXCIsXHJcbi8vICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiBcIlwiLFxyXG4vLyAgICAgXCJlbWJlZEl0ZW1cIiA6IFwiP19lbWJlZD1ldmVudHNcIlxyXG4vLyB9XHJcblxyXG4vLyB0ZW1wbGF0ZSBmb3Igb2JqZWN0IHRvIHBhc3MgaW50byBub21hZERhdGEuY29ubmVjdFRvRGF0YSgpIGlmIHlvdSBhcmUgZG9pbmcgYSBQT1NUXHJcblxyXG4vLyBsZXQgZmV0Y2hUZXN0MiA9IHtcclxuXHJcbi8vICAgICBcImRhdGFTZXRcIiA6IFwiZXZlbnRzXCIsXHJcbi8vICAgICBcImZldGNoVHlwZVwiIDogXCJQT1NUXCIsXHJcbi8vICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiB7XHJcbi8vICAgICAgIFwidXNlcklkXCI6IDEsXHJcbi8vICAgICAgIFwiZXZlbnROYW1lXCI6IFwieWV0IGFub3RoZXIgdG9nYSBwYXJ0eVwiLFxyXG4vLyAgICAgICBcImV2ZW50RGF0ZVwiOiBcIjItMTJcIixcclxuLy8gICAgICAgXCJldmVudFRpbWVcIjogXCIzOjAwcG1cIixcclxuLy8gICAgICAgXCJldmVudExvY2F0aW9uXCI6IFwiVmVnYXNcIlxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyB0ZW1wbGF0ZSBmb3Igb2JqZWN0IHRvIHBhc3MgaW50byBub21hZERhdGEuY29ubmVjdFRvRGF0YSgpIGlmIHlvdSBhcmUgZG9pbmcgYSBQVVRcclxuXHJcbi8vIGxldCBmZXRjaFRlc3QzID0ge1xyXG5cclxuLy8gICAgIFwicHV0SWRcIiA6IDIsXHJcbi8vICAgICBcImRhdGFTZXRcIiA6IFwiZXZlbnRzXCIsXHJcbi8vICAgICBcImZldGNoVHlwZVwiIDogXCJQVVRcIixcclxuLy8gICAgIFwiZGF0YUJhc2VPYmplY3RcIiA6IHtcclxuLy8gICAgICAgXCJpZFwiIDogMixcclxuLy8gICAgICAgXCJ1c2VySWRcIjogMSxcclxuLy8gICAgICAgXCJldmVudE5hbWVcIjogXCJhbm90aGVyIHRvZ2EgcGFydHlcIixcclxuLy8gICAgICAgXCJldmVudERhdGVcIjogXCIyLTE1XCIsXHJcbi8vICAgICAgIFwiZXZlbnRUaW1lXCI6IFwiMzowMHBtXCIsXHJcbi8vICAgICAgIFwiZXZlbnRMb2NhdGlvblwiOiBcIlZlZ2FzXCJcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoZmV0Y2hUZXN0MylcclxuLy8gaW1wb3J0IGV2ZW50cyBmcm9tIFwiLi9ldmVudHNcIjtcclxuaW1wb3J0IG5vbWFkRGF0YSBmcm9tIFwiLi9ub21hZERhdGFcIjtcclxuLy8gaW1wb3J0IG1lc3NhZ2VzIGZyb20gXCIuL21lc3NhZ2VzXCI7XHJcblxyXG5cclxuLy8gbWVzc2FnZXMuY3JlYXRlTWVzc2FnZUJvYXJkKCk7XHJcblxyXG5mdW5jdGlvbiB1c2VyTG9naW4gKCkge1xyXG5cclxuICAgIGxldCB1c2VyTmFtZSA9IFwiSGVybmFuZG9cIjtcclxuICAgIGxldCBwYXNzd29yZCA9IFwieW9tYW1hXCI7XHJcblxyXG4gICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xyXG5cclxuICAgICAgICBcImRhdGFTZXRcIiA6IFwidXNlcnNcIixcclxuICAgICAgICBcImZldGNoVHlwZVwiIDogXCJHRVRcIixcclxuICAgICAgICBcImVtYmVkSXRlbVwiIDogXCI/X2VtYmVkPWV2ZW50c1wiXHJcblxyXG4gICAgfSkudGhlbihwYXJzZWRVc2VycyA9PiB7XHJcblxyXG4gICAgICAgIHBhcnNlZFVzZXJzLmZvckVhY2godXNlciA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZiAodXNlck5hbWUgPT09IHVzZXIudXNlck5hbWUgJiYgcGFzc3dvcmQgPT09IHVzZXIucGFzc3dvcmQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiJ3VzZXJJZCdcIiwgdXNlci5pZClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSlcclxuICAgIGxldCB1c2VySWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiJ3VzZXJJZCdcIik7XHJcbiAgICBsb2FkRGFzaGJvYXJkKHVzZXJJZClcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiVXNlcklkID0gXCIsIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpKVxyXG59XHJcblxyXG51c2VyTG9naW4oKTtcclxuXHJcbmZ1bmN0aW9uIGxvYWREYXNoYm9hcmQgKHVzZXJJZCkge1xyXG4gICAgY29uc29sZS5sb2coYFRoYW5rcyBmb3IgcGFzc2luZyB0aGUgdXNlcklkLiAgVGhlIHVzZXJJZCBpcyAke3VzZXJJZH1gKVxyXG59XHJcbiIsIi8vIGltcG9ydCBkb21Db21wb25lbnRzIGZyb20gXCIuL2RvbUNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IGV2ZW50TGlzdGVuZXJzID0ge1xyXG4gIG1vZGFsRGlzcGxheUFuaW1hdGlvbigpe1xyXG4gICAgICAgIC8vIHRhcmdldCAgbW9kYWxcclxuICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm9tYWRNb2RhbFwiKTtcclxuICAgIC8vIHRhcmdldCBtb2RhbCB0byBvcGVuIG1vZGFsXHJcbiAgICBsZXQgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbEJ1dHRvblwiKTtcclxuXHJcbiAgICAvLyBHZXQgdGhlIDxzcGFuPiBlbGVtZW50IHRoYXQgY2xvc2VzIHRoZSBtb2RhbFxyXG4gICAgbGV0IHNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2VcIilbMF07XHJcblxyXG4gICAgLy8gV2hlbiB0aGUgdXNlciBjbGlja3MgdGhlIGJ1dHRvbiwgb3BlbiB0aGUgbW9kYWxcclxuICAgIGJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICB9XHJcbiAgICAvLyBXaGVuIHRoZSB1c2VyIGNsaWNrcyBvbiA8c3Bhbj4gKHgpLCBjbG9zZSB0aGUgbW9kYWxcclxuICAgIHNwYW4ub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9XHJcbiAgICAvLyBXaGVuIHRoZSB1c2VyIGNsaWNrcyBhbnl3aGVyZSBvdXRzaWRlIG9mIHRoZSBtb2RhbCwgY2xvc2UgaXRcclxuICAgIHdpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PSBtb2RhbCkge1xyXG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJChcIi5tZXNzYWdlIGFcIikuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgJChcImZvcm1cIikuYW5pbWF0ZSh7aGVpZ2h0OiBcInRvZ2dsZVwiLCBvcGFjaXR5OiBcInRvZ2dsZVwifSwgXCJzbG93XCIpXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZXZlbnRMaXN0ZW5lcnMiLCJjb25zdCBub21hZERhdGEgPSB7XHJcblxyXG4gICAgY29ubmVjdFRvRGF0YShmZXRjaE9iamVjdCkge1xyXG5cclxuICAgIGxldCBkYXRhU2V0ID0gZmV0Y2hPYmplY3QuZGF0YVNldDtcclxuICAgIGxldCBlbWJlZEl0ZW0gPSBmZXRjaE9iamVjdC5lbWJlZEl0ZW07XHJcbiAgICBsZXQgZmV0Y2hUeXBlID0gZmV0Y2hPYmplY3QuZmV0Y2hUeXBlO1xyXG4gICAgbGV0IGRhdGFCYXNlT2JqZWN0ID0gZmV0Y2hPYmplY3QuZGF0YUJhc2VPYmplY3Q7XHJcbiAgICBsZXQgcHV0SWQgPSBmZXRjaE9iamVjdC5wdXRJZDtcclxuXHJcbiAgICAgICAgaWYgKGZldGNoVHlwZSA9PSBcIkdFVFwiKSB7XHJcblxyXG4gICAgICAgIHJldHVybiBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDg4LyR7ZGF0YVNldH0ke2VtYmVkSXRlbX1gKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpIC8vIHBhcnNlcyByZXNwb25zZSB0byBKU09OXHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoZmV0Y2hUeXBlID09PSBcIlBPU1RcIil7XHJcblxyXG4gICAgICAgIC8vIERlZmF1bHQgb3B0aW9ucyBhcmUgbWFya2VkIHdpdGggKlxyXG4gICAgICAgIHJldHVybiBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDg4LyR7ZGF0YVNldH1gLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogYCR7ZmV0Y2hUeXBlfWAsIC8vICpHRVQsIFBPU1QsIFBVVCwgREVMRVRFLCBldGMuXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICAgICAgLy8gXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8gcmVmZXJyZXI6IFwibm8tcmVmZXJyZXJcIiwgLy8gbm8tcmVmZXJyZXIsICpjbGllbnRcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YUJhc2VPYmplY3QpLCAvLyBib2R5IGRhdGEgdHlwZSBtdXN0IG1hdGNoIFwiQ29udGVudC1UeXBlXCIgaGVhZGVyXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmKGZldGNoVHlwZSA9PT0gXCJQVVRcIil7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODgvJHtkYXRhU2V0fS8ke3B1dElkfWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBgJHtmZXRjaFR5cGV9YCwgLy8gKkdFVCwgUE9TVCwgUFVULCBERUxFVEUsIGV0Yy5cclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgICAgICAvLyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyByZWZlcnJlcjogXCJuby1yZWZlcnJlclwiLCAvLyBuby1yZWZlcnJlciwgKmNsaWVudFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhQmFzZU9iamVjdCksIC8vIGJvZHkgZGF0YSB0eXBlIG11c3QgbWF0Y2ggXCJDb250ZW50LVR5cGVcIiBoZWFkZXJcclxuICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nIChcIllPVSBTQ1JFV0VEIElUIFVQXCIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBub21hZERhdGEiXX0=
