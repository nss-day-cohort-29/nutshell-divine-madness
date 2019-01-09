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
    attributes = {}
  }) {
    const element = document.createElement(elementType);
    element.textContent = content;

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
  }

};
var _default = domComponents;
exports.default = _default;

},{}],2:[function(require,module,exports){
"use strict";

var _domComponents = _interopRequireDefault(require("./domComponents"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
