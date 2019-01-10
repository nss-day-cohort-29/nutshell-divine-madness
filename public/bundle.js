(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _events = _interopRequireDefault(require("./events"));

var _nomadData = _interopRequireDefault(require("./nomadData"));

var _news = _interopRequireDefault(require("./news"));

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

_news.default.save();

_news.default.allSaved();

},{"./events":2,"./news":3,"./nomadData":4}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nomadData = _interopRequireDefault(require("./nomadData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//pull from api then display to dom.
// create save button send saved articles to Json
// create button to pull all saved materials in json.
// delete method for articles
const news = {
  getNews() {
    //pull then send pulled data to dom
    return fetch("https://data.nashville.gov/resource/xbru-cfzi.json?$$app_token=lfAtpDX8XuYvee5T9U6FnVpFP", {
      Authorization: {
        Bearer: "lfAtpDX8XuYvee5T9U6FnVpFP"
      }
    }).then(newsContainer => newsItems.json());
  },

  save() {
    //This is functioning and writing to JSON.
    const testnewsObj = {
      "dataSet": "newsItems",
      "fetchType": "POST",
      "dataBaseObject": {
        "userId": 1,
        "url": "www.fuckoff.com",
        "title": "Read above",
        "synopsis": "blah blah blah"
      }
    };

    _nomadData.default.connectToData(testnewsObj);
  },

  allSaved() {
    const testnewsObj1 = {
      "dataSet": "newsItems",
      "fetchType": "GET",
      "dataBaseObject": "",
      "embedItem": "?_embed=events"
    };

    _nomadData.default.connectToData(testnewsObj1).then(testnews => console.log(testnews));
  },

  delete() {}

};
var _default = news;
exports.default = _default;

},{"./nomadData":4}],4:[function(require,module,exports){
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2RvbVJlbmRlcmVyLmpzIiwiLi4vc2NyaXB0cy9ldmVudHMuanMiLCIuLi9zY3JpcHRzL25ld3MuanMiLCIuLi9zY3JpcHRzL25vbWFkRGF0YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7O0FBQ0E7O0FBQ0E7Ozs7QUFDQSxPQUFPLENBQUMsR0FBUixDQUFZLGFBQVosRSxDQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLGNBQUssSUFBTDs7QUFDQSxjQUFLLFFBQUw7Ozs7Ozs7OztBQ2xEQSxNQUFNLE1BQU0sR0FBRztBQUNmLEVBQUEsWUFBWSxHQUFJO0FBQ2QsSUFBQSxPQUFPLENBQUMsR0FBUixDQUFhLElBQWI7QUFDRDs7QUFIYyxDQUFmO2VBTWUsTTs7Ozs7Ozs7Ozs7QUNOZjs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxJQUFJLEdBQUc7QUFFVCxFQUFBLE9BQU8sR0FBRTtBQUNMO0FBRUksV0FBTyxLQUFLLENBQUMsMEZBQUQsRUFDWjtBQUFDLE1BQUEsYUFBYSxFQUFFO0FBQUMsUUFBQSxNQUFNLEVBQUU7QUFBVDtBQUFoQixLQURZLENBQUwsQ0FFTixJQUZNLENBRUQsYUFBYSxJQUFJLFNBQVMsQ0FBQyxJQUFWLEVBRmhCLENBQVA7QUFLRCxHQVZFOztBQWFULEVBQUEsSUFBSSxHQUFFO0FBQ0Y7QUFDQSxVQUFNLFdBQVcsR0FBRztBQUNaLGlCQUFZLFdBREE7QUFFWixtQkFBYyxNQUZGO0FBR1osd0JBQW1CO0FBQ2Ysa0JBQVUsQ0FESztBQUVmLGVBQU8saUJBRlE7QUFHZixpQkFBUyxZQUhNO0FBSWYsb0JBQVk7QUFKRztBQUhQLEtBQXBCOztBQVdBLHVCQUFVLGFBQVYsQ0FBd0IsV0FBeEI7QUFFSCxHQTVCUTs7QUE4QlQsRUFBQSxRQUFRLEdBQUU7QUFFTixVQUFNLFlBQVksR0FBRztBQUNqQixpQkFBWSxXQURLO0FBRWpCLG1CQUFjLEtBRkc7QUFHakIsd0JBQW1CLEVBSEY7QUFJakIsbUJBQWM7QUFKRyxLQUFyQjs7QUFPQSx1QkFBVSxhQUFWLENBQXdCLFlBQXhCLEVBQ0MsSUFERCxDQUNNLFFBQVEsSUFBSSxPQUFPLENBQUMsR0FBUixDQUFZLFFBQVosQ0FEbEI7QUFJSCxHQTNDUTs7QUE2Q1QsRUFBQSxNQUFNLEdBQUUsQ0FHUDs7QUFoRFEsQ0FBYjtlQXNEZSxJOzs7Ozs7Ozs7O0FDM0RmLE1BQU0sU0FBUyxHQUFHO0FBRWQsRUFBQSxhQUFhLENBQUMsV0FBRCxFQUFjO0FBRXpCLFFBQUksT0FBTyxHQUFHLFdBQVcsQ0FBQyxPQUExQjtBQUNBLFFBQUksU0FBUyxHQUFHLFdBQVcsQ0FBQyxTQUE1QjtBQUNBLFFBQUksU0FBUyxHQUFHLFdBQVcsQ0FBQyxTQUE1QjtBQUNBLFFBQUksY0FBYyxHQUFHLFdBQVcsQ0FBQyxjQUFqQztBQUNBLFFBQUksS0FBSyxHQUFHLFdBQVcsQ0FBQyxLQUF4Qjs7QUFFRSxRQUFJLFNBQVMsSUFBSSxLQUFqQixFQUF3QjtBQUV4QixhQUFPLEtBQUssQ0FBRSx5QkFBd0IsT0FBUSxHQUFFLFNBQVUsRUFBOUMsQ0FBTCxDQUNGLElBREUsQ0FDRyxRQUFRLElBQUksUUFBUSxDQUFDLElBQVQsRUFEZixDQUFQLENBRndCLENBR2U7QUFFdEMsS0FMRCxNQUtPLElBQUksU0FBUyxLQUFLLE1BQWxCLEVBQXlCO0FBRWhDO0FBQ0EsYUFBTyxLQUFLLENBQUUseUJBQXdCLE9BQVEsRUFBbEMsRUFBcUM7QUFDN0MsUUFBQSxNQUFNLEVBQUcsR0FBRSxTQUFVLEVBRHdCO0FBQ3JCO0FBQ3hCLFFBQUEsT0FBTyxFQUFFO0FBQ0wsMEJBQWdCLGlDQURYLENBRUw7O0FBRkssU0FGb0M7QUFNN0M7QUFDQSxRQUFBLElBQUksRUFBRSxJQUFJLENBQUMsU0FBTCxDQUFlLGNBQWYsQ0FQdUMsQ0FPUDs7QUFQTyxPQUFyQyxDQUFaO0FBVUMsS0FiTSxNQWFBLElBQUcsU0FBUyxLQUFLLEtBQWpCLEVBQXVCO0FBQzlCLGFBQU8sS0FBSyxDQUFFLHlCQUF3QixPQUFRLElBQUcsS0FBTSxFQUEzQyxFQUE4QztBQUN0RCxRQUFBLE1BQU0sRUFBRyxHQUFFLFNBQVUsRUFEaUM7QUFDOUI7QUFDeEIsUUFBQSxPQUFPLEVBQUU7QUFDTCwwQkFBZ0IsaUNBRFgsQ0FFTDs7QUFGSyxTQUY2QztBQU10RDtBQUNBLFFBQUEsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFMLENBQWUsY0FBZixDQVBnRCxDQU9oQjs7QUFQZ0IsT0FBOUMsQ0FBWjtBQVNDLEtBVk0sTUFVQTtBQUNILE1BQUEsT0FBTyxDQUFDLEdBQVIsQ0FBYSxtQkFBYjtBQUNIO0FBQ0o7O0FBekNhLENBQWxCO2VBNENpQixTIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IGV2ZW50cyBmcm9tIFwiLi9ldmVudHNcIjtcbmltcG9ydCBub21hZERhdGEgZnJvbSBcIi4vbm9tYWREYXRhXCI7XG5pbXBvcnQgbmV3cyBmcm9tIFwiLi9uZXdzXCJcbmNvbnNvbGUubG9nKFwiSSdtIHdvcmtpbmdcIilcblxuLy8gdGVtcGxhdGUgZm9yIG9iamVjdCB0byBwYXNzIGludG8gbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoKSBpZiB5b3UgYXJlIGRvaW5nIGEgR0VUXG5cbi8vIGxldCBmZXRjaFRlc3QgPSB7XG5cbi8vICAgICBcImRhdGFTZXRcIiA6IFwidXNlcnNcIixcbi8vICAgICBcImZldGNoVHlwZVwiIDogXCJHRVRcIixcbi8vICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiBcIlwiLFxuLy8gICAgIFwiZW1iZWRJdGVtXCIgOiBcIj9fZW1iZWQ9ZXZlbnRzXCJcbi8vIH1cblxuLy8gdGVtcGxhdGUgZm9yIG9iamVjdCB0byBwYXNzIGludG8gbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoKSBpZiB5b3UgYXJlIGRvaW5nIGEgUE9TVFxuXG4vLyBsZXQgZmV0Y2hUZXN0MiA9IHtcblxuLy8gICAgIFwiZGF0YVNldFwiIDogXCJldmVudHNcIixcbi8vICAgICBcImZldGNoVHlwZVwiIDogXCJQT1NUXCIsXG4vLyAgICAgXCJkYXRhQmFzZU9iamVjdFwiIDoge1xuLy8gICAgICAgXCJ1c2VySWRcIjogMSxcbi8vICAgICAgIFwiZXZlbnROYW1lXCI6IFwieWV0IGFub3RoZXIgdG9nYSBwYXJ0eVwiLFxuLy8gICAgICAgXCJldmVudERhdGVcIjogXCIyLTEyXCIsXG4vLyAgICAgICBcImV2ZW50VGltZVwiOiBcIjM6MDBwbVwiLFxuLy8gICAgICAgXCJldmVudExvY2F0aW9uXCI6IFwiVmVnYXNcIlxuLy8gICAgIH1cbi8vIH1cblxuLy8gdGVtcGxhdGUgZm9yIG9iamVjdCB0byBwYXNzIGludG8gbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoKSBpZiB5b3UgYXJlIGRvaW5nIGEgUFVUXG5cbi8vIGxldCBmZXRjaFRlc3QzID0ge1xuXG4vLyAgICAgXCJwdXRJZFwiIDogMixcbi8vICAgICBcImRhdGFTZXRcIiA6IFwiZXZlbnRzXCIsXG4vLyAgICAgXCJmZXRjaFR5cGVcIiA6IFwiUFVUXCIsXG4vLyAgICAgXCJkYXRhQmFzZU9iamVjdFwiIDoge1xuLy8gICAgICAgXCJpZFwiIDogMixcbi8vICAgICAgIFwidXNlcklkXCI6IDEsXG4vLyAgICAgICBcImV2ZW50TmFtZVwiOiBcImFub3RoZXIgdG9nYSBwYXJ0eVwiLFxuLy8gICAgICAgXCJldmVudERhdGVcIjogXCIyLTE1XCIsXG4vLyAgICAgICBcImV2ZW50VGltZVwiOiBcIjM6MDBwbVwiLFxuLy8gICAgICAgXCJldmVudExvY2F0aW9uXCI6IFwiVmVnYXNcIlxuLy8gICAgIH1cbi8vIH1cblxuLy8gbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoZmV0Y2hUZXN0MylcblxubmV3cy5zYXZlKCk7XG5uZXdzLmFsbFNhdmVkKCk7IiwiY29uc3QgZXZlbnRzID0ge1xuY3VycmVudEV2ZW50ICgpIHtcbiAgY29uc29sZS5sb2cgKFwieW9cIilcbn1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZXZlbnRzIiwiaW1wb3J0IG5vbWFkRGF0YSBmcm9tIFwiLi9ub21hZERhdGFcIjtcbi8vcHVsbCBmcm9tIGFwaSB0aGVuIGRpc3BsYXkgdG8gZG9tLlxuLy8gY3JlYXRlIHNhdmUgYnV0dG9uIHNlbmQgc2F2ZWQgYXJ0aWNsZXMgdG8gSnNvblxuLy8gY3JlYXRlIGJ1dHRvbiB0byBwdWxsIGFsbCBzYXZlZCBtYXRlcmlhbHMgaW4ganNvbi5cbi8vIGRlbGV0ZSBtZXRob2QgZm9yIGFydGljbGVzXG5jb25zdCBuZXdzID0ge1xuXG4gICAgZ2V0TmV3cygpe1xuICAgICAgICAvL3B1bGwgdGhlbiBzZW5kIHB1bGxlZCBkYXRhIHRvIGRvbVxuICAgIFxuICAgICAgICAgICAgcmV0dXJuIGZldGNoKFwiaHR0cHM6Ly9kYXRhLm5hc2h2aWxsZS5nb3YvcmVzb3VyY2UveGJydS1jZnppLmpzb24/JCRhcHBfdG9rZW49bGZBdHBEWDhYdVl2ZWU1VDlVNkZuVnBGUFwiLFxuICAgICAgICAgICAge0F1dGhvcml6YXRpb246IHtCZWFyZXI6IFwibGZBdHBEWDhYdVl2ZWU1VDlVNkZuVnBGUFwifX0pXG4gICAgICAgICAgICAudGhlbihuZXdzQ29udGFpbmVyID0+IG5ld3NJdGVtcy5qc29uKCkpO1xuXG4gICAgICAgICAgICBcbiAgICAgICAgICB9LFxuXG5cbiAgICBzYXZlKCl7XG4gICAgICAgIC8vVGhpcyBpcyBmdW5jdGlvbmluZyBhbmQgd3JpdGluZyB0byBKU09OLlxuICAgICAgICBjb25zdCB0ZXN0bmV3c09iaiA9IHtcbiAgICAgICAgICAgICAgICBcImRhdGFTZXRcIiA6IFwibmV3c0l0ZW1zXCIsXG4gICAgICAgICAgICAgICAgXCJmZXRjaFR5cGVcIiA6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgIFwiZGF0YUJhc2VPYmplY3RcIiA6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ1c2VySWRcIjogMSxcbiAgICAgICAgICAgICAgICAgICAgXCJ1cmxcIjogXCJ3d3cuZnVja29mZi5jb21cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlJlYWQgYWJvdmVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJzeW5vcHNpc1wiOiBcImJsYWggYmxhaCBibGFoXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEodGVzdG5ld3NPYmopO1xuICAgICAgICBcbiAgICB9LFxuICAgIFxuICAgIGFsbFNhdmVkKCl7XG5cbiAgICAgICAgY29uc3QgdGVzdG5ld3NPYmoxID0ge1xuICAgICAgICAgICAgXCJkYXRhU2V0XCIgOiBcIm5ld3NJdGVtc1wiLFxuICAgICAgICAgICAgXCJmZXRjaFR5cGVcIiA6IFwiR0VUXCIsXG4gICAgICAgICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiBcIlwiLFxuICAgICAgICAgICAgXCJlbWJlZEl0ZW1cIiA6IFwiP19lbWJlZD1ldmVudHNcIlxuICAgICAgICAgICAgfVxuXG4gICAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHRlc3RuZXdzT2JqMSlcbiAgICAgICAgLnRoZW4odGVzdG5ld3MgPT4gY29uc29sZS5sb2codGVzdG5ld3MpKVxuICAgICAgICBcblxuICAgIH0sXG5cbiAgICBkZWxldGUoKXtcblxuXG4gICAgfVxuXG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXdzIiwiY29uc3Qgbm9tYWREYXRhID0ge1xuXG4gICAgY29ubmVjdFRvRGF0YShmZXRjaE9iamVjdCkge1xuXG4gICAgICBsZXQgZGF0YVNldCA9IGZldGNoT2JqZWN0LmRhdGFTZXQ7XG4gICAgICBsZXQgZW1iZWRJdGVtID0gZmV0Y2hPYmplY3QuZW1iZWRJdGVtO1xuICAgICAgbGV0IGZldGNoVHlwZSA9IGZldGNoT2JqZWN0LmZldGNoVHlwZTtcbiAgICAgIGxldCBkYXRhQmFzZU9iamVjdCA9IGZldGNoT2JqZWN0LmRhdGFCYXNlT2JqZWN0O1xuICAgICAgbGV0IHB1dElkID0gZmV0Y2hPYmplY3QucHV0SWQ7XG5cbiAgICAgICAgaWYgKGZldGNoVHlwZSA9PSBcIkdFVFwiKSB7XG5cbiAgICAgICAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODgvJHtkYXRhU2V0fSR7ZW1iZWRJdGVtfWApXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpIC8vIHBhcnNlcyByZXNwb25zZSB0byBKU09OXG5cbiAgICAgICAgfSBlbHNlIGlmIChmZXRjaFR5cGUgPT09IFwiUE9TVFwiKXtcblxuICAgICAgICAvLyBEZWZhdWx0IG9wdGlvbnMgYXJlIG1hcmtlZCB3aXRoICpcbiAgICAgICAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODgvJHtkYXRhU2V0fWAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogYCR7ZmV0Y2hUeXBlfWAsIC8vICpHRVQsIFBPU1QsIFBVVCwgREVMRVRFLCBldGMuXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXG4gICAgICAgICAgICAgICAgLy8gXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyByZWZlcnJlcjogXCJuby1yZWZlcnJlclwiLCAvLyBuby1yZWZlcnJlciwgKmNsaWVudFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YUJhc2VPYmplY3QpLCAvLyBib2R5IGRhdGEgdHlwZSBtdXN0IG1hdGNoIFwiQ29udGVudC1UeXBlXCIgaGVhZGVyXG4gICAgICAgIH0pXG5cbiAgICAgICAgfSBlbHNlIGlmKGZldGNoVHlwZSA9PT0gXCJQVVRcIil7XG4gICAgICAgIHJldHVybiBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDg4LyR7ZGF0YVNldH0vJHtwdXRJZH1gLCB7XG4gICAgICAgICAgICBtZXRob2Q6IGAke2ZldGNoVHlwZX1gLCAvLyAqR0VULCBQT1NULCBQVVQsIERFTEVURSwgZXRjLlxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxuICAgICAgICAgICAgICAgIC8vIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gcmVmZXJyZXI6IFwibm8tcmVmZXJyZXJcIiwgLy8gbm8tcmVmZXJyZXIsICpjbGllbnRcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGFCYXNlT2JqZWN0KSwgLy8gYm9keSBkYXRhIHR5cGUgbXVzdCBtYXRjaCBcIkNvbnRlbnQtVHlwZVwiIGhlYWRlclxuICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2cgKFwiWU9VIFNDUkVXRUQgSVQgVVBcIilcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBkZWZhdWx0IG5vbWFkRGF0YSJdfQ==
