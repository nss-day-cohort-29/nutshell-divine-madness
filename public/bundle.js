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

  createEventsElement(eventObject) {
    const eventItem = document.createElement("article");
    eventItem.setAttribute("class", "eventItem");
    const eventHeader = document.createElement("h2");
    eventHeader.textContent = eventObject.eventName;
    const eventDateTime = document.createElement("p");
    eventDateTime.textContent = `At ${eventObject.eventTime} on ${eventObject.eventDate}`;
    const eventLocation = document.createElement("p");
    eventLocation.textContent = `Location: ${eventObject.eventLocation}`;
    const saveButton = document.createElement("button");
    saveButton.setAttribute("type", "button");
    saveButton.setAttribute("id", "saveEvent");
    saveButton.textContent = "Save";
    eventItem.appendChild(eventHeader);
    eventItem.appendChild(eventDateTime);
    eventItem.appendChild(eventLocation);
    eventItem.appendChild(saveButton);
    return eventItem;
  }

};
var _default = domComponents;
exports.default = _default;

},{}],2:[function(require,module,exports){
"use strict";

var _events = _interopRequireDefault(require("./events"));

var _nomadData = _interopRequireDefault(require("./nomadData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log("I'm working"); // template for object to pass into nomadData.connectToData() if you are doing a GET
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

},{"./events":3,"./nomadData":4}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nomadData = _interopRequireDefault(require("./nomadData"));

var _domComponents = _interopRequireDefault(require("./domComponents"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Author: Cole Bryant / Purpose:
const events = {
  getAllEvents() {
    const getFetchObject = {
      "dataSet": "events",
      "fetchType": "GET",
      "dataBaseObject": "",
      "embedItem": "?_embed=events"
    };

    _nomadData.default.connectToData(getFetchObject).then(parsedResponse => {
      let docuFrag = document.createDocumentFragment();
      let output = document.querySelector(".output");
      parsedResponse.forEach(event => {
        const eventItem = _domComponents.default.createEventsElement(event);

        docuFrag.appendChild(eventItem);
      });
      output.appendChild(docuFrag);
    });
  },

  saveEvent() {
    _nomadData.default.connectToData({}).then();
  }

};
events.getAllEvents();
var _default = events;
exports.default = _default;

},{"./domComponents":1,"./nomadData":4}],4:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2RvbUNvbXBvbmVudHMuanMiLCIuLi9zY3JpcHRzL2RvbVJlbmRlcmVyLmpzIiwiLi4vc2NyaXB0cy9ldmVudHMuanMiLCIuLi9zY3JpcHRzL25vbWFkRGF0YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FBLE1BQU0sYUFBYSxHQUFHO0FBQ3BCLEVBQUEsZ0JBQWdCLENBQUM7QUFBRSxJQUFBLFdBQUY7QUFBZSxJQUFBLE9BQU8sR0FBRyxJQUF6QjtBQUErQixJQUFBLFVBQVUsR0FBRztBQUE1QyxHQUFELEVBQW1EO0FBQ2pFLFVBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFdBQXZCLENBQWhCO0FBQ0EsSUFBQSxPQUFPLENBQUMsV0FBUixHQUFzQixPQUF0Qjs7QUFDQSxTQUFLLElBQUksR0FBVCxJQUFnQixVQUFoQixFQUE0QjtBQUMxQixNQUFBLE9BQU8sQ0FBQyxZQUFSLENBQXFCLEdBQXJCLEVBQTBCLFVBQVUsQ0FBQyxHQUFELENBQXBDO0FBQ0Q7O0FBQ0QsV0FBTyxPQUFQO0FBQ0QsR0FSbUI7O0FBU3BCLEVBQUEsbUJBQW1CLENBQUUsV0FBRixFQUFlO0FBQ2hDLFVBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFNBQXZCLENBQWxCO0FBQ0EsSUFBQSxTQUFTLENBQUMsWUFBVixDQUF1QixPQUF2QixFQUFnQyxXQUFoQztBQUNBLFVBQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLElBQXZCLENBQXBCO0FBQ0EsSUFBQSxXQUFXLENBQUMsV0FBWixHQUEwQixXQUFXLENBQUMsU0FBdEM7QUFDQSxVQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixHQUF2QixDQUF0QjtBQUNBLElBQUEsYUFBYSxDQUFDLFdBQWQsR0FBNkIsTUFBSyxXQUFXLENBQUMsU0FBVSxPQUFN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Q0FBRSx5QkFBd0IsT0FBUSxFQUFsQyxFQUFxQztBQUM3QyxRQUFBLE1BQU0sRUFBRyxHQUFFLFNBQVUsRUFEd0I7QUFDckI7QUFDeEIsUUFBQSxPQUFPLEVBQUU7QUFDTCwwQkFBZ0IsaUNBRFgsQ0FFTDs7QUFGSyxTQUZvQztBQU03QztBQUNBLFFBQUEsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFMLENBQWUsY0FBZixDQVB1QyxDQU9QOztBQVBPLE9BQXJDLENBQVo7QUFVQyxLQWJNLE1BYUEsSUFBRyxTQUFTLEtBQUssS0FBakIsRUFBdUI7QUFDOUIsYUFBTyxLQUFLLENBQUUseUJBQXdCLE9BQVEsSUFBRyxLQUFNLEVBQTNDLEVBQThDO0FBQ3RELFFBQUEsTUFBTSxFQUFHLEdBQUUsU0FBVSxFQURpQztBQUM5QjtBQUN4QixRQUFBLE9BQU8sRUFBRTtBQUNMLDBCQUFnQixpQ0FEWCxDQUVMOztBQUZLLFNBRjZDO0FBTXREO0FBQ0EsUUFBQSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQUwsQ0FBZSxjQUFmLENBUGdELENBT2hCOztBQVBnQixPQUE5QyxDQUFaO0FBU0MsS0FWTSxNQVVBO0FBQ0gsTUFBQSxPQUFPLENBQUMsR0FBUixDQUFhLG1CQUFiO0FBQ0g7QUFDSjs7QUF6Q2EsQ0FBbEI7ZUE0Q2lCLFMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjb25zdCBkb21Db21wb25lbnRzID0ge1xyXG4gIGNyZWF0ZURvbUVsZW1lbnQoeyBlbGVtZW50VHlwZSwgY29udGVudCA9IG51bGwsIGF0dHJpYnV0ZXMgPSB7fSB9KSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50VHlwZSk7XHJcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudDtcclxuICAgIGZvciAobGV0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XHJcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcclxuICAgIH1cclxuICAgIHJldHVybiBlbGVtZW50O1xyXG4gIH0sXHJcbiAgY3JlYXRlRXZlbnRzRWxlbWVudCAoZXZlbnRPYmplY3QpIHtcclxuICAgIGNvbnN0IGV2ZW50SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIpO1xyXG4gICAgZXZlbnRJdGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZXZlbnRJdGVtXCIpO1xyXG4gICAgY29uc3QgZXZlbnRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICBldmVudEhlYWRlci50ZXh0Q29udGVudCA9IGV2ZW50T2JqZWN0LmV2ZW50TmFtZTtcclxuICAgIGNvbnN0IGV2ZW50RGF0ZVRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGV2ZW50RGF0ZVRpbWUudGV4dENvbnRlbnQgPSBgQXQgJHtldmVudE9iamVjdC5ldmVudFRpbWV9IG9uICR7ZXZlbnRPYmplY3QuZXZlbnREYXRlfWA7XHJcbiAgICBjb25zdCBldmVudExvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBldmVudExvY2F0aW9uLnRleHRDb250ZW50ID0gYExvY2F0aW9uOiAke2V2ZW50T2JqZWN0LmV2ZW50TG9jYXRpb259YDtcclxuICAgIGNvbnN0IHNhdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgc2F2ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xyXG4gICAgc2F2ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNhdmVFdmVudFwiKTtcclxuICAgIHNhdmVCdXR0b24udGV4dENvbnRlbnQgPSBcIlNhdmVcIjtcclxuXHJcbiAgICBldmVudEl0ZW0uYXBwZW5kQ2hpbGQoZXZlbnRIZWFkZXIpO1xyXG4gICAgZXZlbnRJdGVtLmFwcGVuZENoaWxkKGV2ZW50RGF0ZVRpbWUpO1xyXG4gICAgZXZlbnRJdGVtLmFwcGVuZENoaWxkKGV2ZW50TG9jYXRpb24pO1xyXG4gICAgZXZlbnRJdGVtLmFwcGVuZENoaWxkKHNhdmVCdXR0b24pO1xyXG5cclxuXHJcbiAgICByZXR1cm4gZXZlbnRJdGVtO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZG9tQ29tcG9uZW50cyIsImltcG9ydCBldmVudHMgZnJvbSBcIi4vZXZlbnRzXCI7XHJcbmltcG9ydCBub21hZERhdGEgZnJvbSBcIi4vbm9tYWREYXRhXCI7XHJcbmNvbnNvbGUubG9nKFwiSSdtIHdvcmtpbmdcIilcclxuXHJcbi8vIHRlbXBsYXRlIGZvciBvYmplY3QgdG8gcGFzcyBpbnRvIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKCkgaWYgeW91IGFyZSBkb2luZyBhIEdFVFxyXG5cclxuLy8gbGV0IGZldGNoVGVzdCA9IHtcclxuXHJcbi8vICAgICBcImRhdGFTZXRcIiA6IFwidXNlcnNcIixcclxuLy8gICAgIFwiZmV0Y2hUeXBlXCIgOiBcIkdFVFwiLFxyXG4vLyAgICAgXCJkYXRhQmFzZU9iamVjdFwiIDogXCJcIixcclxuLy8gICAgIFwiZW1iZWRJdGVtXCIgOiBcIj9fZW1iZWQ9ZXZlbnRzXCJcclxuLy8gfVxyXG5cclxuLy8gdGVtcGxhdGUgZm9yIG9iamVjdCB0byBwYXNzIGludG8gbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoKSBpZiB5b3UgYXJlIGRvaW5nIGEgUE9TVFxyXG5cclxuLy8gbGV0IGZldGNoVGVzdDIgPSB7XHJcblxyXG4vLyAgICAgXCJkYXRhU2V0XCIgOiBcImV2ZW50c1wiLFxyXG4vLyAgICAgXCJmZXRjaFR5cGVcIiA6IFwiUE9TVFwiLFxyXG4vLyAgICAgXCJkYXRhQmFzZU9iamVjdFwiIDoge1xyXG4vLyAgICAgICBcInVzZXJJZFwiOiAxLFxyXG4vLyAgICAgICBcImV2ZW50TmFtZVwiOiBcInlldCBhbm90aGVyIHRvZ2EgcGFydHlcIixcclxuLy8gICAgICAgXCJldmVudERhdGVcIjogXCIyLTEyXCIsXHJcbi8vICAgICAgIFwiZXZlbnRUaW1lXCI6IFwiMzowMHBtXCIsXHJcbi8vICAgICAgIFwiZXZlbnRMb2NhdGlvblwiOiBcIlZlZ2FzXCJcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gdGVtcGxhdGUgZm9yIG9iamVjdCB0byBwYXNzIGludG8gbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoKSBpZiB5b3UgYXJlIGRvaW5nIGEgUFVUXHJcblxyXG4vLyBsZXQgZmV0Y2hUZXN0MyA9IHtcclxuXHJcbi8vICAgICBcInB1dElkXCIgOiAyLFxyXG4vLyAgICAgXCJkYXRhU2V0XCIgOiBcImV2ZW50c1wiLFxyXG4vLyAgICAgXCJmZXRjaFR5cGVcIiA6IFwiUFVUXCIsXHJcbi8vICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiB7XHJcbi8vICAgICAgIFwiaWRcIiA6IDIsXHJcbi8vICAgICAgIFwidXNlcklkXCI6IDEsXHJcbi8vICAgICAgIFwiZXZlbnROYW1lXCI6IFwiYW5vdGhlciB0b2dhIHBhcnR5XCIsXHJcbi8vICAgICAgIFwiZXZlbnREYXRlXCI6IFwiMi0xNVwiLFxyXG4vLyAgICAgICBcImV2ZW50VGltZVwiOiBcIjM6MDBwbVwiLFxyXG4vLyAgICAgICBcImV2ZW50TG9jYXRpb25cIjogXCJWZWdhc1wiXHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8vIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKGZldGNoVGVzdDMpIiwiLy8gQXV0aG9yOiBDb2xlIEJyeWFudCAvIFB1cnBvc2U6XHJcblxyXG5pbXBvcnQgbm9tYWREYXRhIGZyb20gXCIuL25vbWFkRGF0YVwiO1xyXG5pbXBvcnQgZG9tQ29tcG9uZW50cyBmcm9tIFwiLi9kb21Db21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBldmVudHMgPSB7XHJcbiAgZ2V0QWxsRXZlbnRzKCkge1xyXG4gICAgY29uc3QgZ2V0RmV0Y2hPYmplY3QgPSB7XHJcbiAgICAgIFwiZGF0YVNldFwiOiBcImV2ZW50c1wiLFxyXG4gICAgICBcImZldGNoVHlwZVwiOiBcIkdFVFwiLFxyXG4gICAgICBcImRhdGFCYXNlT2JqZWN0XCI6IFwiXCIsXHJcbiAgICAgIFwiZW1iZWRJdGVtXCI6IFwiP19lbWJlZD1ldmVudHNcIlxyXG4gICAgfTtcclxuXHJcbiAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YShnZXRGZXRjaE9iamVjdClcclxuICAgIC50aGVuKHBhcnNlZFJlc3BvbnNlID0+IHtcclxuICAgICAgbGV0IGRvY3VGcmFnID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgICBsZXQgb3V0cHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdXRwdXRcIik7XHJcbiAgICAgIHBhcnNlZFJlc3BvbnNlLmZvckVhY2goZXZlbnQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGV2ZW50SXRlbSA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRXZlbnRzRWxlbWVudChldmVudCk7XHJcbiAgICAgICAgZG9jdUZyYWcuYXBwZW5kQ2hpbGQoZXZlbnRJdGVtKTtcclxuICAgICAgfSk7XHJcbiAgICAgIG91dHB1dC5hcHBlbmRDaGlsZChkb2N1RnJhZyk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHNhdmVFdmVudCgpIHtcclxuICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHt9KVxyXG4gICAgLnRoZW4oKTtcclxuICB9XHJcbn07XHJcblxyXG5ldmVudHMuZ2V0QWxsRXZlbnRzKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBldmVudHM7IiwiY29uc3Qgbm9tYWREYXRhID0ge1xyXG5cclxuICAgIGNvbm5lY3RUb0RhdGEoZmV0Y2hPYmplY3QpIHtcclxuXHJcbiAgICAgIGxldCBkYXRhU2V0ID0gZmV0Y2hPYmplY3QuZGF0YVNldDtcclxuICAgICAgbGV0IGVtYmVkSXRlbSA9IGZldGNoT2JqZWN0LmVtYmVkSXRlbTtcclxuICAgICAgbGV0IGZldGNoVHlwZSA9IGZldGNoT2JqZWN0LmZldGNoVHlwZTtcclxuICAgICAgbGV0IGRhdGFCYXNlT2JqZWN0ID0gZmV0Y2hPYmplY3QuZGF0YUJhc2VPYmplY3Q7XHJcbiAgICAgIGxldCBwdXRJZCA9IGZldGNoT2JqZWN0LnB1dElkO1xyXG5cclxuICAgICAgICBpZiAoZmV0Y2hUeXBlID09IFwiR0VUXCIpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODgvJHtkYXRhU2V0fSR7ZW1iZWRJdGVtfWApXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkgLy8gcGFyc2VzIHJlc3BvbnNlIHRvIEpTT05cclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChmZXRjaFR5cGUgPT09IFwiUE9TVFwiKXtcclxuXHJcbiAgICAgICAgLy8gRGVmYXVsdCBvcHRpb25zIGFyZSBtYXJrZWQgd2l0aCAqXHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODgvJHtkYXRhU2V0fWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBgJHtmZXRjaFR5cGV9YCwgLy8gKkdFVCwgUE9TVCwgUFVULCBERUxFVEUsIGV0Yy5cclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgICAgICAvLyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyByZWZlcnJlcjogXCJuby1yZWZlcnJlclwiLCAvLyBuby1yZWZlcnJlciwgKmNsaWVudFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhQmFzZU9iamVjdCksIC8vIGJvZHkgZGF0YSB0eXBlIG11c3QgbWF0Y2ggXCJDb250ZW50LVR5cGVcIiBoZWFkZXJcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB9IGVsc2UgaWYoZmV0Y2hUeXBlID09PSBcIlBVVFwiKXtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC8ke2RhdGFTZXR9LyR7cHV0SWR9YCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IGAke2ZldGNoVHlwZX1gLCAvLyAqR0VULCBQT1NULCBQVVQsIERFTEVURSwgZXRjLlxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgICAgIC8vIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vIHJlZmVycmVyOiBcIm5vLXJlZmVycmVyXCIsIC8vIG5vLXJlZmVycmVyLCAqY2xpZW50XHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGFCYXNlT2JqZWN0KSwgLy8gYm9keSBkYXRhIHR5cGUgbXVzdCBtYXRjaCBcIkNvbnRlbnQtVHlwZVwiIGhlYWRlclxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cgKFwiWU9VIFNDUkVXRUQgSVQgVVBcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBleHBvcnQgZGVmYXVsdCBub21hZERhdGEiXX0=
