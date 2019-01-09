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
    navBarContainer.innerHTML = navHTML; // let navUl = document.createElement("ul")
    // navBarContainer.appendChild(navUl)
    // let navBarItems = ["articles", "events", "tasks", "friends", "messages"]
    // navBarItems.forEach(items =>{
    //   let element = document.createElement("li")
    //   let elementPath = document.createElement("a")
    //   elementPath.setAttribute("href", "#")
    //   element.textContent = items
    //   // navUl.appendChild(element)
    //   element.appendChild(elementPath)
    //   navUl.appendChild(element)
  }

};
var _default = domComponents;
exports.default = _default;

},{}],2:[function(require,module,exports){
"use strict";

var _events = _interopRequireDefault(require("./events"));

var _domComponents = _interopRequireDefault(require("./domComponents"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_events.default.currentEvent();

_domComponents.default.createNavBar();

console.log("hello");

},{"./domComponents":1,"./events":3}],3:[function(require,module,exports){
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

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2RvbUNvbXBvbmVudHMuanMiLCIuLi9zY3JpcHRzL2RvbVJlbmRlcmVyLmpzIiwiLi4vc2NyaXB0cy9ldmVudHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUNBQSxNQUFNLGFBQWEsR0FBRztBQUNwQixFQUFBLGdCQUFnQixDQUFDO0FBQUUsSUFBQSxXQUFGO0FBQWUsSUFBQSxPQUFPLEdBQUcsSUFBekI7QUFBK0IsSUFBQSxVQUFVLEdBQUc7QUFBNUMsR0FBRCxFQUFtRDtBQUNqRSxVQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixXQUF2QixDQUFoQjtBQUNBLElBQUEsT0FBTyxDQUFDLFdBQVIsR0FBc0IsT0FBdEI7O0FBQ0EsU0FBSyxJQUFJLEdBQVQsSUFBZ0IsVUFBaEIsRUFBNEI7QUFDMUIsTUFBQSxPQUFPLENBQUMsWUFBUixDQUFxQixHQUFyQixFQUEwQixVQUFVLENBQUMsR0FBRCxDQUFwQztBQUNEOztBQUNELFdBQU8sT0FBUDtBQUNELEdBUm1COztBQVNwQixFQUFBLFlBQVksR0FBRTtBQUNaLFFBQUksT0FBTyxHQUFJOzs7Ozs7Ozs7OztLQUFmO0FBWUEsUUFBSSxlQUFlLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBdEI7QUFDQSxJQUFBLGVBQWUsQ0FBQyxTQUFoQixHQUE0QixPQUE1QixDQWRZLENBZ0JaO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQzs7QUF0Q2lCLENBQXRCO2VBeUNlLGE7Ozs7OztBQ3pDZjs7QUFDQTs7OztBQUVBLGdCQUFPLFlBQVA7O0FBQ0EsdUJBQWMsWUFBZDs7QUFFQSxPQUFPLENBQUMsR0FBUixDQUFZLE9BQVo7Ozs7Ozs7OztBQ05BLE1BQU0sTUFBTSxHQUFHO0FBQ2YsRUFBQSxZQUFZLEdBQUk7QUFDZCxJQUFBLE9BQU8sQ0FBQyxHQUFSLENBQWEsSUFBYjtBQUNEOztBQUhjLENBQWY7ZUFNZSxNIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgZG9tQ29tcG9uZW50cyA9IHtcclxuICBjcmVhdGVEb21FbGVtZW50KHsgZWxlbWVudFR5cGUsIGNvbnRlbnQgPSBudWxsLCBhdHRyaWJ1dGVzID0ge30gfSkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudFR5cGUpO1xyXG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XHJcbiAgICBmb3IgKGxldCBrZXkgaW4gYXR0cmlidXRlcykge1xyXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxuICB9LFxyXG4gIGNyZWF0ZU5hdkJhcigpe1xyXG4gICAgbGV0IG5hdkhUTUwgPSBgIFxyXG4gICAgICA8bmF2PlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIDxsaT48YSBjbGFzcyA9IFwiYWN0aXZlXCIgaHJlZiA9IFwiI1wiPkFydGljbGVzPC9hPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGEgaHJlZiA9IFwiI1wiPkV2ZW50czwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxhIGhyZWYgPSBcIiNcIj5UYXNrczwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxhIGhyZWYgPSBcIiNcIj5GcmllbmRzPC9hPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGEgaHJlZiA9IFwiI1wiPk1lc3NhZ2VzPC9hPjwvbGk+XHJcbiAgICAgICAgICA8bGkgaWQgPSBcImxvZ29cIiA+PGEgaHJlZj1cIiNhYm91dFwiPk5vbWFkczwvYT48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgYFxyXG4gICAgbGV0IG5hdkJhckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi1uYXZcIilcclxuICAgIG5hdkJhckNvbnRhaW5lci5pbm5lckhUTUwgPSBuYXZIVE1MXHJcblxyXG4gICAgLy8gbGV0IG5hdlVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpXHJcbiAgICAvLyBuYXZCYXJDb250YWluZXIuYXBwZW5kQ2hpbGQobmF2VWwpXHJcblxyXG4gICAgLy8gbGV0IG5hdkJhckl0ZW1zID0gW1wiYXJ0aWNsZXNcIiwgXCJldmVudHNcIiwgXCJ0YXNrc1wiLCBcImZyaWVuZHNcIiwgXCJtZXNzYWdlc1wiXVxyXG5cclxuICAgIC8vIG5hdkJhckl0ZW1zLmZvckVhY2goaXRlbXMgPT57XHJcbiAgICAvLyAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXHJcbiAgICAvLyAgIGxldCBlbGVtZW50UGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpXHJcbiAgICAvLyAgIGVsZW1lbnRQYXRoLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIjXCIpXHJcbiAgICAvLyAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBpdGVtc1xyXG4gICAgLy8gICAvLyBuYXZVbC5hcHBlbmRDaGlsZChlbGVtZW50KVxyXG4gICAgLy8gICBlbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnRQYXRoKVxyXG4gICAgLy8gICBuYXZVbC5hcHBlbmRDaGlsZChlbGVtZW50KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRvbUNvbXBvbmVudHMiLCJpbXBvcnQgZXZlbnRzIGZyb20gXCIuL2V2ZW50c1wiO1xyXG5pbXBvcnQgZG9tQ29tcG9uZW50cyBmcm9tIFwiLi9kb21Db21wb25lbnRzXCI7XHJcblxyXG5ldmVudHMuY3VycmVudEV2ZW50KClcclxuZG9tQ29tcG9uZW50cy5jcmVhdGVOYXZCYXIoKVxyXG5cclxuY29uc29sZS5sb2coXCJoZWxsb1wiKVxyXG4iLCJjb25zdCBldmVudHMgPSB7XHJcbmN1cnJlbnRFdmVudCAoKSB7XHJcbiAgY29uc29sZS5sb2cgKFwieW9cIilcclxufVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBldmVudHMiXX0=
