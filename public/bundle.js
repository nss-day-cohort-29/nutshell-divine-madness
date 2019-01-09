(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const domComponents = {
  createDomElement({
    elementType,
    content = null,
<<<<<<< HEAD
=======
    cssClass,
>>>>>>> master
    attributes = {}
  }) {
    const element = document.createElement(elementType);
    element.textContent = content;

<<<<<<< HEAD
=======
    if (cssClass) {
      element.classList.add(cssClass);
    }

>>>>>>> master
    for (let key in attributes) {
      element.setAttribute(key, attributes[key]);
    }

    return element;
<<<<<<< HEAD
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
              <p>As outdoorsman, environmentalist and filmmakers continue to grow. So do the adventurous spirits of those who embrace conscious consumerism and sustainable living. The purpose is to make a point of plugging into modern life and connecting with your fellow nomads from anywhere you may be. Share your location, Meet up, Exchange stories, Create relationships with people who have similar interest and enhance your traveling experience with nomads. What are you waiting for? 
            </div>
            <div class="modal-footer">
              <h3>Created By: Divine Madness&copy</h3>
            </div>
          </div>
        </div>
        `; //this will target the output article container

    let logInPage = document.querySelector("#output");
    logInPage.innerHTML = formHTML; // $(".login-page").html(formHTML)
=======
>>>>>>> master
  }

};
var _default = domComponents;
exports.default = _default;
<<<<<<< HEAD
=======

},{}],2:[function(require,module,exports){
"use strict";

var _events = _interopRequireDefault(require("./events"));
>>>>>>> master

},{}],2:[function(require,module,exports){
"use strict";

var _domComponents = _interopRequireDefault(require("./domComponents"));

var _messages = _interopRequireDefault(require("./messages"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

<<<<<<< HEAD
// import events from "./events";
// import nomadData from "./nomadData";
//BUILDS NAIGATIONBAR//
// domComponents.createNavBar()
_domComponents.default.buildLoginForm(); // console.log("I'm working")
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

},{"./domComponents":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2RvbUNvbXBvbmVudHMuanMiLCIuLi9zY3JpcHRzL2RvbVJlbmRlcmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDQUEsTUFBTSxhQUFhLEdBQUc7QUFDcEIsRUFBQSxnQkFBZ0IsQ0FBQztBQUFFLElBQUEsV0FBRjtBQUFlLElBQUEsT0FBTyxHQUFHLElBQXpCO0FBQStCLElBQUEsVUFBVSxHQUFHO0FBQTVDLEdBQUQsRUFBbUQ7QUFDakUsVUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBaEI7QUFDQSxJQUFBLE9BQU8sQ0FBQyxXQUFSLEdBQXNCLE9BQXRCOztBQUNBLFNBQUssSUFBSSxHQUFULElBQWdCLFVBQWhCLEVBQTRCO0FBQzFCLE1BQUEsT0FBTyxDQUFDLFlBQVIsQ0FBcUIsR0FBckIsRUFBMEIsVUFBVSxDQUFDLEdBQUQsQ0FBcEM7QUFDRDs7QUFDRCxXQUFPLE9BQVA7QUFDRCxHQVJtQjs7QUFTcEIsRUFBQSxZQUFZLEdBQUU7QUFDWixRQUFJLE9BQU8sR0FBSTs7Ozs7Ozs7Ozs7S0FBZjtBQVlBLFFBQUksZUFBZSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFdBQXZCLENBQXRCO0FBQ0EsSUFBQSxlQUFlLENBQUMsU0FBaEIsR0FBNEIsT0FBNUI7QUFDQyxHQXhCaUI7O0FBeUJsQixFQUFBLGNBQWMsR0FBRTtBQUNkO0FBQ0EsUUFBSSxRQUFRLEdBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBQWhCLENBRmMsQ0FzQ1o7O0FBQ0EsUUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBaEI7QUFDQSxJQUFBLFNBQVMsQ0FBQyxTQUFWLEdBQXNCLFFBQXRCLENBeENZLENBeUNaO0FBQ0Q7O0FBbkVlLENBQXRCO2VBc0VlLGE7Ozs7OztBQ3BFZjs7OztBQUZBO0FBQ0E7QUFHQTtBQUNBO0FBQ0EsdUJBQWMsY0FBZCxHLENBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNvbnN0IGRvbUNvbXBvbmVudHMgPSB7XHJcbiAgY3JlYXRlRG9tRWxlbWVudCh7IGVsZW1lbnRUeXBlLCBjb250ZW50ID0gbnVsbCwgYXR0cmlidXRlcyA9IHt9IH0pIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnRUeXBlKTtcclxuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xyXG4gICAgZm9yIChsZXQga2V5IGluIGF0dHJpYnV0ZXMpIHtcclxuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgfSxcclxuICBjcmVhdGVOYXZCYXIoKXtcclxuICAgIGxldCBuYXZIVE1MID0gYCBcclxuICAgICAgPG5hdj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICA8bGk+PGEgY2xhc3MgPSBcImFjdGl2ZVwiIGhyZWYgPSBcIiNcIj5BcnRpY2xlczwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxhIGhyZWYgPSBcIiNcIj5FdmVudHM8L2E+PC9saT5cclxuICAgICAgICAgIDxsaT48YSBocmVmID0gXCIjXCI+VGFza3M8L2E+PC9saT5cclxuICAgICAgICAgIDxsaT48YSBocmVmID0gXCIjXCI+RnJpZW5kczwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxhIGhyZWYgPSBcIiNcIj5NZXNzYWdlczwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpIGlkID0gXCJsb2dvXCIgPjxhIGhyZWY9XCIjYWJvdXRcIj5Ob21hZHM8L2E+PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L25hdj5cclxuICAgIGBcclxuICAgIGxldCBuYXZCYXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4tbmF2XCIpXHJcbiAgICBuYXZCYXJDb250YWluZXIuaW5uZXJIVE1MID0gbmF2SFRNTFxyXG4gICAgfSxcclxuICAgIGJ1aWxkTG9naW5Gb3JtKCl7XHJcbiAgICAgIC8vdXNpbmcgc3RyaW5nIGludGVycG9sYXRpb24gdG8gY3JlYXRlIHRoZSBmb3JtXHJcbiAgICAgIGxldCBmb3JtSFRNTCA9IGBcclxuICAgICAgPGgxIGNsYXNzID0gXCJ0LWJvcmRlclwiPk5vbWFkczwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzcyA9IFwiZm9ybVwiPlxyXG4gICAgICAgICAgPGZvcm0gYWN0aW9uPVwiXCIgY2xhc3MgPSByZWdpc3RlckZvcm0+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyID0gXCJOYW1lXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlciA9IFwiRW1haWxcIiByZXF1aXJlZD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXIgPSBcIlVzZXJuYW1lXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlciA9IFwiUGFzc3dvcmRcIiByZXF1aXJlZD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyID0gXCJDb25maXJtIFBhc3N3b3JkXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgIDxidXR0b24+Q3JlYXRlIEFjY291bnQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPHAgY2xhc3MgPSBcIm1lc3NhZ2VcIj5BbHJlYWR5IGEgUmVnaXN0ZXJlZCBNZW1iZXI/IDxhIGhyZWYgPSBcIiNcIj5Mb2dJbiA8L2E+PC9wPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPGZvcm0gY2xhc3MgPSBcImxvZ2luLWZvcm1cIj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXIgPSBcIlVzZXJuYW1lXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlciA9IFwiUGFzc3dvcmRcIiByZXF1aXJlZD5cclxuICAgICAgICAgICAgPGJ1dHRvbj5Mb2dpbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGlkID0gXCJtb2RhbEJ1dHRvblwiPk5vbWFkcyBNaXNzaW9uPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzID0gXCJtZXNzYWdlXCI+RG9uJ3QgaGF2ZSBhbiBhY2NvdW50PyA8YSBocmVmID0gXCIjXCI+UmVnaXN0ZXI8L2E+PC9wPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJub21hZE1vZGFsXCIgY2xhc3M9XCJtb2RhbFwiPlxyXG4gICAgICAgIDwhLS0gTW9kYWwgY29udGVudCAtLT5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNsb3NlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8aDI+VGhlIFB1cnBvc2UgQmVoaW5kIE5vbWFkczwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgIDxwPkFzIG91dGRvb3JzbWFuLCBlbnZpcm9ubWVudGFsaXN0IGFuZCBmaWxtbWFrZXJzIGNvbnRpbnVlIHRvIGdyb3cuIFNvIGRvIHRoZSBhZHZlbnR1cm91cyBzcGlyaXRzIG9mIHRob3NlIHdobyBlbWJyYWNlIGNvbnNjaW91cyBjb25zdW1lcmlzbSBhbmQgc3VzdGFpbmFibGUgbGl2aW5nLiBUaGUgcHVycG9zZSBpcyB0byBtYWtlIGEgcG9pbnQgb2YgcGx1Z2dpbmcgaW50byBtb2Rlcm4gbGlmZSBhbmQgY29ubmVjdGluZyB3aXRoIHlvdXIgZmVsbG93IG5vbWFkcyBmcm9tIGFueXdoZXJlIHlvdSBtYXkgYmUuIFNoYXJlIHlvdXIgbG9jYXRpb24sIE1lZXQgdXAsIEV4Y2hhbmdlIHN0b3JpZXMsIENyZWF0ZSByZWxhdGlvbnNoaXBzIHdpdGggcGVvcGxlIHdobyBoYXZlIHNpbWlsYXIgaW50ZXJlc3QgYW5kIGVuaGFuY2UgeW91ciB0cmF2ZWxpbmcgZXhwZXJpZW5jZSB3aXRoIG5vbWFkcy4gV2hhdCBhcmUgeW91IHdhaXRpbmcgZm9yPyBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICA8aDM+Q3JlYXRlZCBCeTogRGl2aW5lIE1hZG5lc3MmY29weTwvaDM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYFxyXG4gICAgICAgIC8vdGhpcyB3aWxsIHRhcmdldCB0aGUgb3V0cHV0IGFydGljbGUgY29udGFpbmVyXHJcbiAgICAgICAgbGV0IGxvZ0luUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3V0cHV0XCIpXHJcbiAgICAgICAgbG9nSW5QYWdlLmlubmVySFRNTCA9IGZvcm1IVE1MXHJcbiAgICAgICAgLy8gJChcIi5sb2dpbi1wYWdlXCIpLmh0bWwoZm9ybUhUTUwpXHJcbiAgICAgIH1cclxuICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkb21Db21wb25lbnRzIiwiLy8gaW1wb3J0IGV2ZW50cyBmcm9tIFwiLi9ldmVudHNcIjtcclxuLy8gaW1wb3J0IG5vbWFkRGF0YSBmcm9tIFwiLi9ub21hZERhdGFcIjtcclxuaW1wb3J0IGRvbUNvbXBvbmVudHMgZnJvbSBcIi4vZG9tQ29tcG9uZW50c1wiO1xyXG5cclxuLy9CVUlMRFMgTkFJR0FUSU9OQkFSLy9cclxuLy8gZG9tQ29tcG9uZW50cy5jcmVhdGVOYXZCYXIoKVxyXG5kb21Db21wb25lbnRzLmJ1aWxkTG9naW5Gb3JtKClcclxuLy8gY29uc29sZS5sb2coXCJJJ20gd29ya2luZ1wiKVxyXG5cclxuLy8gdGVtcGxhdGUgZm9yIG9iamVjdCB0byBwYXNzIGludG8gbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoKSBpZiB5b3UgYXJlIGRvaW5nIGEgR0VUXHJcblxyXG4vLyBsZXQgZmV0Y2hUZXN0ID0ge1xyXG5cclxuLy8gICAgIFwiZGF0YVNldFwiIDogXCJ1c2Vyc1wiLFxyXG4vLyAgICAgXCJmZXRjaFR5cGVcIiA6IFwiR0VUXCIsXHJcbi8vICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiBcIlwiLFxyXG4vLyAgICAgXCJlbWJlZEl0ZW1cIiA6IFwiP19lbWJlZD1ldmVudHNcIlxyXG4vLyB9XHJcblxyXG4vLyB0ZW1wbGF0ZSBmb3Igb2JqZWN0IHRvIHBhc3MgaW50byBub21hZERhdGEuY29ubmVjdFRvRGF0YSgpIGlmIHlvdSBhcmUgZG9pbmcgYSBQT1NUXHJcblxyXG4vLyBsZXQgZmV0Y2hUZXN0MiA9IHtcclxuXHJcbi8vICAgICBcImRhdGFTZXRcIiA6IFwiZXZlbnRzXCIsXHJcbi8vICAgICBcImZldGNoVHlwZVwiIDogXCJQT1NUXCIsXHJcbi8vICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiB7XHJcbi8vICAgICAgIFwidXNlcklkXCI6IDEsXHJcbi8vICAgICAgIFwiZXZlbnROYW1lXCI6IFwieWV0IGFub3RoZXIgdG9nYSBwYXJ0eVwiLFxyXG4vLyAgICAgICBcImV2ZW50RGF0ZVwiOiBcIjItMTJcIixcclxuLy8gICAgICAgXCJldmVudFRpbWVcIjogXCIzOjAwcG1cIixcclxuLy8gICAgICAgXCJldmVudExvY2F0aW9uXCI6IFwiVmVnYXNcIlxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyB0ZW1wbGF0ZSBmb3Igb2JqZWN0IHRvIHBhc3MgaW50byBub21hZERhdGEuY29ubmVjdFRvRGF0YSgpIGlmIHlvdSBhcmUgZG9pbmcgYSBQVVRcclxuXHJcbi8vIGxldCBmZXRjaFRlc3QzID0ge1xyXG5cclxuLy8gICAgIFwicHV0SWRcIiA6IDIsXHJcbi8vICAgICBcImRhdGFTZXRcIiA6IFwiZXZlbnRzXCIsXHJcbi8vICAgICBcImZldGNoVHlwZVwiIDogXCJQVVRcIixcclxuLy8gICAgIFwiZGF0YUJhc2VPYmplY3RcIiA6IHtcclxuLy8gICAgICAgXCJpZFwiIDogMixcclxuLy8gICAgICAgXCJ1c2VySWRcIjogMSxcclxuLy8gICAgICAgXCJldmVudE5hbWVcIjogXCJhbm90aGVyIHRvZ2EgcGFydHlcIixcclxuLy8gICAgICAgXCJldmVudERhdGVcIjogXCIyLTE1XCIsXHJcbi8vICAgICAgIFwiZXZlbnRUaW1lXCI6IFwiMzowMHBtXCIsXHJcbi8vICAgICAgIFwiZXZlbnRMb2NhdGlvblwiOiBcIlZlZ2FzXCJcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoZmV0Y2hUZXN0MylcclxuIl19
=======
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
        sessionStorage.setItem('userId', user.id);
      }
    });
  });

  let userId = sessionStorage.getItem('userId');
  loadDashboard(userId); // console.log("UserId = ", sessionStorage.getItem('userId'))
}

userLogin();

function loadDashboard(userId) {
  console.log(`Thanks for passing the userId.  The userId is ${userId}`);
}

},{"./events":3,"./messages":4,"./nomadData":5}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const events = {
  currentEvent() {
    console.log("yo");
  }

};
var _default = events;
exports.default = _default;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nomadData = _interopRequireDefault(require("./nomadData"));

var _domComponents = _interopRequireDefault(require("./domComponents"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const messages = {
  createMessageBoard() {
    let outputArticle = document.getElementById("output"); //create display container

    let messagesContainer = _domComponents.default.createDomElement({
      "elementType": "div",
      "cssClass": "messagesContainer",
      "attributes": {
        id: "messagesContainer"
      }
    }); //create message input field


    let messageInput = _domComponents.default.createDomElement({
      "elementType": "input",
      "cssClass": "messageInput",
      "attributes": {
        id: "messageInput",
        placeholder: "Enter Message Here"
      }
    }); //create submit button for input field


    let messageSubmitButton = _domComponents.default.createDomElement({
      "elementType": "button",
      "cssClass": "messageSubmitButton",
      "content": "Submit",
      "attributes": {
        id: "messageSubmitButton"
      }
    });

    messagesContainer.appendChild(messageInput);
    messagesContainer.appendChild(messageSubmitButton);
    outputArticle.appendChild(messagesContainer);
    this.getMessages();
  },

  getMessages() {
    //GET fetch & .then to build object(s) for createDomElement() using _expand to display UN: message
    _nomadData.default.connectToData({
      "dataSet": "messages",
      "fetchType": "GET",
      "embedItem": "?_expand=user"
    }).then(parsedMessages => {
      let messageContainer = document.getElementById("messagesContainer");
      let messageInput = document.getElementById("messageInput");
      parsedMessages.forEach(message => {
        let messageText = message.message;
        let userName = message.user.userName;
        let timeStamp = message.timeStamp;
        messageContainer.insertBefore(_domComponents.default.createDomElement({
          "elementType": "p",
          "cssClass": "message",
          "content": `${userName}:  ${messageText}`
        }), messageInput);
      });
    });
  },

  postNewMessage() {//called by eventListener on submit button
    //perform POST fetch
    //call domRefresh function
  },

  editMessage() {//bring up message in a prepopulated form
    //for contains a submit button (same one as in postNewMessage()?)
    //allow edits
    //do PUT fetch
  }

};
var _default = messages;
exports.default = _default;

},{"./domComponents":1,"./nomadData":5}],5:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2RvbUNvbXBvbmVudHMuanMiLCIuLi9zY3JpcHRzL2RvbVJlbmRlcmVyLmpzIiwiLi4vc2NyaXB0cy9ldmVudHMuanMiLCIuLi9zY3JpcHRzL21lc3NhZ2VzLmpzIiwiLi4vc2NyaXB0cy9ub21hZERhdGEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUNBQSxNQUFNLGFBQWEsR0FBRztBQUNwQixFQUFBLGdCQUFnQixDQUFDO0FBQUUsSUFBQSxXQUFGO0FBQWUsSUFBQSxPQUFPLEdBQUcsSUFBekI7QUFBK0IsSUFBQSxRQUEvQjtBQUF5QyxJQUFBLFVBQVUsR0FBRztBQUF0RCxHQUFELEVBQTZEO0FBQzNFLFVBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFdBQXZCLENBQWhCO0FBQ0EsSUFBQSxPQUFPLENBQUMsV0FBUixHQUFzQixPQUF0Qjs7QUFFQSxRQUFJLFFBQUosRUFBYztBQUNaLE1BQUEsT0FBTyxDQUFDLFNBQVIsQ0FBa0IsR0FBbEIsQ0FBc0IsUUFBdEI7QUFDRDs7QUFFRCxTQUFLLElBQUksR0FBVCxJQUFnQixVQUFoQixFQUE0QjtBQUMxQixNQUFBLE9BQU8sQ0FBQyxZQUFSLENBQXFCLEdBQXJCLEVBQTBCLFVBQVUsQ0FBQyxHQUFELENBQXBDO0FBQ0Q7O0FBQ0QsV0FBTyxPQUFQO0FBQ0Q7O0FBYm1CLENBQXRCO2VBZ0JlLGE7Ozs7OztBQ2hCZjs7QUFDQTs7QUFDQTs7OztBQUdBO0FBRUEsU0FBUyxTQUFULEdBQXNCO0FBRWxCLE1BQUksUUFBUSxHQUFHLFVBQWY7QUFDQSxNQUFJLFFBQVEsR0FBRyxRQUFmOztBQUVBLHFCQUFVLGFBQVYsQ0FBd0I7QUFFcEIsZUFBWSxPQUZRO0FBR3BCLGlCQUFjLEtBSE07QUFJcEIsaUJBQWM7QUFKTSxHQUF4QixFQU1HLElBTkgsQ0FNUSxXQUFXLElBQUk7QUFFbkIs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QyxFQUE4QztBQUN0RCxRQUFBLE1BQU0sRUFBRyxHQUFFLFNBQVUsRUFEaUM7QUFDOUI7QUFDeEIsUUFBQSxPQUFPLEVBQUU7QUFDTCwwQkFBZ0IsaUNBRFgsQ0FFTDs7QUFGSyxTQUY2QztBQU10RDtBQUNBLFFBQUEsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFMLENBQWUsY0FBZixDQVBnRCxDQU9oQjs7QUFQZ0IsT0FBOUMsQ0FBWjtBQVNDLEtBVk0sTUFVQTtBQUNILE1BQUEsT0FBTyxDQUFDLEdBQVIsQ0FBYSxtQkFBYjtBQUNIO0FBQ0o7O0FBekNhLENBQWxCO2VBNENpQixTIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgZG9tQ29tcG9uZW50cyA9IHtcbiAgY3JlYXRlRG9tRWxlbWVudCh7IGVsZW1lbnRUeXBlLCBjb250ZW50ID0gbnVsbCwgY3NzQ2xhc3MsIGF0dHJpYnV0ZXMgPSB7fSB9KSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudFR5cGUpO1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuXG4gICAgaWYgKGNzc0NsYXNzKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3MpO1xuICAgIH1cblxuICAgIGZvciAobGV0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50O1xuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBkb21Db21wb25lbnRzIiwiaW1wb3J0IGV2ZW50cyBmcm9tIFwiLi9ldmVudHNcIjtcbmltcG9ydCBub21hZERhdGEgZnJvbSBcIi4vbm9tYWREYXRhXCI7XG5pbXBvcnQgbWVzc2FnZXMgZnJvbSBcIi4vbWVzc2FnZXNcIjtcblxuXG4vLyBtZXNzYWdlcy5jcmVhdGVNZXNzYWdlQm9hcmQoKTtcblxuZnVuY3Rpb24gdXNlckxvZ2luICgpIHtcblxuICAgIGxldCB1c2VyTmFtZSA9IFwiSGVybmFuZG9cIjtcbiAgICBsZXQgcGFzc3dvcmQgPSBcInlvbWFtYVwiO1xuXG4gICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xuXG4gICAgICAgIFwiZGF0YVNldFwiIDogXCJ1c2Vyc1wiLFxuICAgICAgICBcImZldGNoVHlwZVwiIDogXCJHRVRcIixcbiAgICAgICAgXCJlbWJlZEl0ZW1cIiA6IFwiP19lbWJlZD1ldmVudHNcIlxuXG4gICAgfSkudGhlbihwYXJzZWRVc2VycyA9PiB7XG5cbiAgICAgICAgcGFyc2VkVXNlcnMuZm9yRWFjaCh1c2VyID0+IHtcblxuICAgICAgICAgICAgaWYgKHVzZXJOYW1lID09PSB1c2VyLnVzZXJOYW1lICYmIHBhc3N3b3JkID09PSB1c2VyLnBhc3N3b3JkKSB7XG5cbiAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd1c2VySWQnLCB1c2VyLmlkKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KVxuICAgIGxldCB1c2VySWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKTtcbiAgICBsb2FkRGFzaGJvYXJkKHVzZXJJZClcbiAgICAvLyBjb25zb2xlLmxvZyhcIlVzZXJJZCA9IFwiLCBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKSlcbn1cblxudXNlckxvZ2luKCk7XG5cbmZ1bmN0aW9uIGxvYWREYXNoYm9hcmQgKHVzZXJJZCkge1xuICAgIGNvbnNvbGUubG9nKGBUaGFua3MgZm9yIHBhc3NpbmcgdGhlIHVzZXJJZC4gIFRoZSB1c2VySWQgaXMgJHt1c2VySWR9YClcbn0iLCJjb25zdCBldmVudHMgPSB7XG5jdXJyZW50RXZlbnQgKCkge1xuICBjb25zb2xlLmxvZyAoXCJ5b1wiKVxufVxufVxuXG5leHBvcnQgZGVmYXVsdCBldmVudHMiLCJpbXBvcnQgbm9tYWREYXRhIGZyb20gXCIuL25vbWFkRGF0YVwiO1xuaW1wb3J0IGRvbUNvbXBvbmVudHMgZnJvbSBcIi4vZG9tQ29tcG9uZW50c1wiO1xuXG5jb25zdCBtZXNzYWdlcyA9IHtcblxuICAgIGNyZWF0ZU1lc3NhZ2VCb2FyZCgpIHtcblxuICAgICAgICBsZXQgb3V0cHV0QXJ0aWNsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3V0cHV0XCIpXG5cbiAgICAgICAgLy9jcmVhdGUgZGlzcGxheSBjb250YWluZXJcbiAgICAgICAgbGV0IG1lc3NhZ2VzQ29udGFpbmVyID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIiA6IFwiZGl2XCIsXG4gICAgICAgICAgICBcImNzc0NsYXNzXCIgOiBcIm1lc3NhZ2VzQ29udGFpbmVyXCIsXG4gICAgICAgICAgICBcImF0dHJpYnV0ZXNcIiA6IHtcbiAgICAgICAgICAgICAgICBpZCA6IFwibWVzc2FnZXNDb250YWluZXJcIlxuICAgICAgICAgICAgfX0pO1xuXG4gICAgICAgIC8vY3JlYXRlIG1lc3NhZ2UgaW5wdXQgZmllbGRcbiAgICAgICAgbGV0IG1lc3NhZ2VJbnB1dCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICBcImVsZW1lbnRUeXBlXCIgOiBcImlucHV0XCIsXG4gICAgICAgICAgICBcImNzc0NsYXNzXCIgOiBcIm1lc3NhZ2VJbnB1dFwiLFxuICAgICAgICAgICAgXCJhdHRyaWJ1dGVzXCIgOiB7XG4gICAgICAgICAgICAgICAgaWQgOiBcIm1lc3NhZ2VJbnB1dFwiLFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkVudGVyIE1lc3NhZ2UgSGVyZVwiXG4gICAgICAgICAgICB9fSk7XG4gICAgICAgIC8vY3JlYXRlIHN1Ym1pdCBidXR0b24gZm9yIGlucHV0IGZpZWxkXG5cbiAgICAgICAgbGV0IG1lc3NhZ2VTdWJtaXRCdXR0b24gPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiIDogXCJidXR0b25cIixcbiAgICAgICAgICAgIFwiY3NzQ2xhc3NcIiA6IFwibWVzc2FnZVN1Ym1pdEJ1dHRvblwiLFxuICAgICAgICAgICAgXCJjb250ZW50XCIgOiBcIlN1Ym1pdFwiLFxuICAgICAgICAgICAgXCJhdHRyaWJ1dGVzXCIgOiB7XG4gICAgICAgICAgICAgICAgaWQgOiBcIm1lc3NhZ2VTdWJtaXRCdXR0b25cIlxuICAgICAgICAgICAgfX0pO1xuXG4gICAgICAgIG1lc3NhZ2VzQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VJbnB1dCk7XG4gICAgICAgIG1lc3NhZ2VzQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VTdWJtaXRCdXR0b24pO1xuICAgICAgICBvdXRwdXRBcnRpY2xlLmFwcGVuZENoaWxkKG1lc3NhZ2VzQ29udGFpbmVyKTtcblxuICAgICAgICB0aGlzLmdldE1lc3NhZ2VzKClcblxuICAgIH0sXG5cbiAgICBnZXRNZXNzYWdlcygpIHtcblxuICAgICAgICAvL0dFVCBmZXRjaCAmIC50aGVuIHRvIGJ1aWxkIG9iamVjdChzKSBmb3IgY3JlYXRlRG9tRWxlbWVudCgpIHVzaW5nIF9leHBhbmQgdG8gZGlzcGxheSBVTjogbWVzc2FnZVxuICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG5cbiAgICAgICAgICAgICAgICBcImRhdGFTZXRcIiA6IFwibWVzc2FnZXNcIixcbiAgICAgICAgICAgICAgICBcImZldGNoVHlwZVwiIDogXCJHRVRcIixcbiAgICAgICAgICAgICAgICBcImVtYmVkSXRlbVwiIDogXCI/X2V4cGFuZD11c2VyXCJcblxuICAgICAgICB9KS50aGVuKHBhcnNlZE1lc3NhZ2VzID0+IHtcblxuICAgICAgICAgICAgbGV0IG1lc3NhZ2VDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lc3NhZ2VzQ29udGFpbmVyXCIpO1xuICAgICAgICAgICAgbGV0IG1lc3NhZ2VJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVzc2FnZUlucHV0XCIpO1xuXG4gICAgICAgICAgICBwYXJzZWRNZXNzYWdlcy5mb3JFYWNoKG1lc3NhZ2UgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlVGV4dCA9IG1lc3NhZ2UubWVzc2FnZTtcbiAgICAgICAgICAgICAgICBsZXQgdXNlck5hbWUgPSBtZXNzYWdlLnVzZXIudXNlck5hbWU7XG4gICAgICAgICAgICAgICAgbGV0IHRpbWVTdGFtcCA9IG1lc3NhZ2UudGltZVN0YW1wO1xuXG4gICAgICAgICAgICAgICAgbWVzc2FnZUNvbnRhaW5lci5pbnNlcnRCZWZvcmUoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcblxuICAgICAgICAgICAgICAgICAgICBcImVsZW1lbnRUeXBlXCIgOiBcInBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJjc3NDbGFzc1wiIDogXCJtZXNzYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY29udGVudFwiIDogYCR7dXNlck5hbWV9OiAgJHttZXNzYWdlVGV4dH1gXG5cbiAgICAgICAgICAgICAgICB9KSwgbWVzc2FnZUlucHV0KVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfSxcblxuICAgIHBvc3ROZXdNZXNzYWdlKCkge1xuXG4gICAgICAgIC8vY2FsbGVkIGJ5IGV2ZW50TGlzdGVuZXIgb24gc3VibWl0IGJ1dHRvblxuICAgICAgICAvL3BlcmZvcm0gUE9TVCBmZXRjaFxuICAgICAgICAvL2NhbGwgZG9tUmVmcmVzaCBmdW5jdGlvblxuICAgIH0sXG5cbiAgICBlZGl0TWVzc2FnZSgpIHtcblxuICAgICAgICAvL2JyaW5nIHVwIG1lc3NhZ2UgaW4gYSBwcmVwb3B1bGF0ZWQgZm9ybVxuICAgICAgICAvL2ZvciBjb250YWlucyBhIHN1Ym1pdCBidXR0b24gKHNhbWUgb25lIGFzIGluIHBvc3ROZXdNZXNzYWdlKCk/KVxuICAgICAgICAvL2FsbG93IGVkaXRzXG4gICAgICAgIC8vZG8gUFVUIGZldGNoXG4gICAgfSxcblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lc3NhZ2VzOyIsImNvbnN0IG5vbWFkRGF0YSA9IHtcblxuICAgIGNvbm5lY3RUb0RhdGEoZmV0Y2hPYmplY3QpIHtcblxuICAgICAgbGV0IGRhdGFTZXQgPSBmZXRjaE9iamVjdC5kYXRhU2V0O1xuICAgICAgbGV0IGVtYmVkSXRlbSA9IGZldGNoT2JqZWN0LmVtYmVkSXRlbTtcbiAgICAgIGxldCBmZXRjaFR5cGUgPSBmZXRjaE9iamVjdC5mZXRjaFR5cGU7XG4gICAgICBsZXQgZGF0YUJhc2VPYmplY3QgPSBmZXRjaE9iamVjdC5kYXRhQmFzZU9iamVjdDtcbiAgICAgIGxldCBwdXRJZCA9IGZldGNoT2JqZWN0LnB1dElkO1xuXG4gICAgICAgIGlmIChmZXRjaFR5cGUgPT0gXCJHRVRcIikge1xuXG4gICAgICAgIHJldHVybiBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDg4LyR7ZGF0YVNldH0ke2VtYmVkSXRlbX1gKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKSAvLyBwYXJzZXMgcmVzcG9uc2UgdG8gSlNPTlxuXG4gICAgICAgIH0gZWxzZSBpZiAoZmV0Y2hUeXBlID09PSBcIlBPU1RcIil7XG5cbiAgICAgICAgLy8gRGVmYXVsdCBvcHRpb25zIGFyZSBtYXJrZWQgd2l0aCAqXG4gICAgICAgIHJldHVybiBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDg4LyR7ZGF0YVNldH1gLCB7XG4gICAgICAgICAgICBtZXRob2Q6IGAke2ZldGNoVHlwZX1gLCAvLyAqR0VULCBQT1NULCBQVVQsIERFTEVURSwgZXRjLlxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxuICAgICAgICAgICAgICAgIC8vIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gcmVmZXJyZXI6IFwibm8tcmVmZXJyZXJcIiwgLy8gbm8tcmVmZXJyZXIsICpjbGllbnRcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGFCYXNlT2JqZWN0KSwgLy8gYm9keSBkYXRhIHR5cGUgbXVzdCBtYXRjaCBcIkNvbnRlbnQtVHlwZVwiIGhlYWRlclxuICAgICAgICB9KVxuXG4gICAgICAgIH0gZWxzZSBpZihmZXRjaFR5cGUgPT09IFwiUFVUXCIpe1xuICAgICAgICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC8ke2RhdGFTZXR9LyR7cHV0SWR9YCwge1xuICAgICAgICAgICAgbWV0aG9kOiBgJHtmZXRjaFR5cGV9YCwgLy8gKkdFVCwgUE9TVCwgUFVULCBERUxFVEUsIGV0Yy5cbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcbiAgICAgICAgICAgICAgICAvLyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIHJlZmVycmVyOiBcIm5vLXJlZmVycmVyXCIsIC8vIG5vLXJlZmVycmVyLCAqY2xpZW50XG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhQmFzZU9iamVjdCksIC8vIGJvZHkgZGF0YSB0eXBlIG11c3QgbWF0Y2ggXCJDb250ZW50LVR5cGVcIiBoZWFkZXJcbiAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nIChcIllPVSBTQ1JFV0VEIElUIFVQXCIpXG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICBleHBvcnQgZGVmYXVsdCBub21hZERhdGEiXX0=
>>>>>>> master
