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

},{}],2:[function(require,module,exports){
"use strict";

var _events = _interopRequireDefault(require("./events"));

var _nomadData = _interopRequireDefault(require("./nomadData"));

var _news = _interopRequireDefault(require("./news"));

var _messages = _interopRequireDefault(require("./messages"));

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
//NEWS SECTION
// news.save();
// news.allSaved();
// news.getNews();

_news.default.newsElementCreator();

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

},{"./events":3,"./messages":4,"./news":5,"./nomadData":6}],3:[function(require,module,exports){
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

},{"./domComponents":1,"./nomadData":6}],5:[function(require,module,exports){
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

  allSaved() {
    _nomadData.default.connectToData(testnewsObj);
  },

  deleteDB() {},

  newsElementCreator() {
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
    // output.appendChild(NewsTest);

  }

};
var _default = news;
exports.default = _default;

},{"./domComponents":1,"./nomadData":6}],6:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2RvbUNvbXBvbmVudHMuanMiLCIuLi9zY3JpcHRzL2RvbVJlbmRlcmVyLmpzIiwiLi4vc2NyaXB0cy9ldmVudHMuanMiLCIuLi9zY3JpcHRzL21lc3NhZ2VzLmpzIiwiLi4vc2NyaXB0cy9uZXdzLmpzIiwiLi4vc2NyaXB0cy9ub21hZERhdGEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUNBQSxNQUFNLGFBQWEsR0FBRztBQUNwQixFQUFBLGdCQUFnQixDQUFDO0FBQUUsSUFBQSxXQUFGO0FBQWUsSUFBQSxPQUFPLEdBQUcsSUFBekI7QUFBK0IsSUFBQSxRQUEvQjtBQUF5QyxJQUFBLFVBQVUsR0FBRztBQUF0RCxHQUFELEVBQTZEO0FBQzNFLFVBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFdBQXZCLENBQWhCO0FBQ0EsSUFBQSxPQUFPLENBQUMsV0FBUixHQUFzQixPQUF0Qjs7QUFFQSxRQUFJLFFBQUosRUFBYztBQUNaLE1BQUEsT0FBTyxDQUFDLFNBQVIsQ0FBa0IsR0FBbEIsQ0FBc0IsUUFBdEI7QUFDRDs7QUFFRCxTQUFLLElBQUksR0FBVCxJQUFnQixVQUFoQixFQUE0QjtBQUMxQixNQUFBLE9BQU8sQ0FBQyxZQUFSLENBQXFCLEdBQXJCLEVBQTBCLFVBQVUsQ0FBQyxHQUFELENBQXBDO0FBQ0Q7O0FBQ0QsV0FBTyxPQUFQO0FBQ0Q7O0FBYm1CLENBQXRCO2VBZ0JlLGE7Ozs7OztBQ2hCZjs7QUFDQTs7QUFDQTs7QUFvREE7Ozs7QUFuREEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxhQUFaLEUsQ0FFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtB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QyxDQUFaO0FBVUMsS0FiTSxNQWFBLElBQUcsU0FBUyxLQUFLLEtBQWpCLEVBQXVCO0FBQzlCLGFBQU8sS0FBSyxDQUFFLHlCQUF3QixPQUFRLElBQUcsS0FBTSxFQUEzQyxFQUE4QztBQUN0RCxRQUFBLE1BQU0sRUFBRyxHQUFFLFNBQVUsRUFEaUM7QUFDOUI7QUFDeEIsUUFBQSxPQUFPLEVBQUU7QUFDTCwwQkFBZ0IsaUNBRFgsQ0FFTDs7QUFGSyxTQUY2QztBQU10RDtBQUNBLFFBQUEsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFMLENBQWUsY0FBZixDQVBnRCxDQU9oQjs7QUFQZ0IsT0FBOUMsQ0FBWjtBQVNDLEtBVk0sTUFVQTtBQUNILE1BQUEsT0FBTyxDQUFDLEdBQVIsQ0FBYSxtQkFBYjtBQUNIO0FBQ0o7O0FBekNhLENBQWxCO2VBNENpQixTIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgZG9tQ29tcG9uZW50cyA9IHtcbiAgY3JlYXRlRG9tRWxlbWVudCh7IGVsZW1lbnRUeXBlLCBjb250ZW50ID0gbnVsbCwgY3NzQ2xhc3MsIGF0dHJpYnV0ZXMgPSB7fSB9KSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudFR5cGUpO1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuXG4gICAgaWYgKGNzc0NsYXNzKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3MpO1xuICAgIH1cblxuICAgIGZvciAobGV0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50O1xuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBkb21Db21wb25lbnRzIiwiaW1wb3J0IGV2ZW50cyBmcm9tIFwiLi9ldmVudHNcIjtcbmltcG9ydCBub21hZERhdGEgZnJvbSBcIi4vbm9tYWREYXRhXCI7XG5pbXBvcnQgbmV3cyBmcm9tIFwiLi9uZXdzXCJcbmNvbnNvbGUubG9nKFwiSSdtIHdvcmtpbmdcIilcblxuLy8gdGVtcGxhdGUgZm9yIG9iamVjdCB0byBwYXNzIGludG8gbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoKSBpZiB5b3UgYXJlIGRvaW5nIGEgR0VUXG5cbi8vIGxldCBmZXRjaFRlc3QgPSB7XG5cbi8vICAgICBcImRhdGFTZXRcIiA6IFwidXNlcnNcIixcbi8vICAgICBcImZldGNoVHlwZVwiIDogXCJHRVRcIixcbi8vICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiBcIlwiLFxuLy8gICAgIFwiZW1iZWRJdGVtXCIgOiBcIj9fZW1iZWQ9ZXZlbnRzXCJcbi8vIH1cblxuLy8gdGVtcGxhdGUgZm9yIG9iamVjdCB0byBwYXNzIGludG8gbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoKSBpZiB5b3UgYXJlIGRvaW5nIGEgUE9TVFxuXG4vLyBsZXQgZmV0Y2hUZXN0MiA9IHtcblxuLy8gICAgIFwiZGF0YVNldFwiIDogXCJldmVudHNcIixcbi8vICAgICBcImZldGNoVHlwZVwiIDogXCJQT1NUXCIsXG4vLyAgICAgXCJkYXRhQmFzZU9iamVjdFwiIDoge1xuLy8gICAgICAgXCJ1c2VySWRcIjogMSxcbi8vICAgICAgIFwiZXZlbnROYW1lXCI6IFwieWV0IGFub3RoZXIgdG9nYSBwYXJ0eVwiLFxuLy8gICAgICAgXCJldmVudERhdGVcIjogXCIyLTEyXCIsXG4vLyAgICAgICBcImV2ZW50VGltZVwiOiBcIjM6MDBwbVwiLFxuLy8gICAgICAgXCJldmVudExvY2F0aW9uXCI6IFwiVmVnYXNcIlxuLy8gICAgIH1cbi8vIH1cblxuLy8gdGVtcGxhdGUgZm9yIG9iamVjdCB0byBwYXNzIGludG8gbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoKSBpZiB5b3UgYXJlIGRvaW5nIGEgUFVUXG5cbi8vIGxldCBmZXRjaFRlc3QzID0ge1xuXG4vLyAgICAgXCJwdXRJZFwiIDogMixcbi8vICAgICBcImRhdGFTZXRcIiA6IFwiZXZlbnRzXCIsXG4vLyAgICAgXCJmZXRjaFR5cGVcIiA6IFwiUFVUXCIsXG4vLyAgICAgXCJkYXRhQmFzZU9iamVjdFwiIDoge1xuLy8gICAgICAgXCJpZFwiIDogMixcbi8vICAgICAgIFwidXNlcklkXCI6IDEsXG4vLyAgICAgICBcImV2ZW50TmFtZVwiOiBcImFub3RoZXIgdG9nYSBwYXJ0eVwiLFxuLy8gICAgICAgXCJldmVudERhdGVcIjogXCIyLTE1XCIsXG4vLyAgICAgICBcImV2ZW50VGltZVwiOiBcIjM6MDBwbVwiLFxuLy8gICAgICAgXCJldmVudExvY2F0aW9uXCI6IFwiVmVnYXNcIlxuLy8gICAgIH1cbi8vIH1cblxuLy8gbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoZmV0Y2hUZXN0Mylcbi8vTkVXUyBTRUNUSU9OXG4vLyBuZXdzLnNhdmUoKTtcbi8vIG5ld3MuYWxsU2F2ZWQoKTtcbi8vIG5ld3MuZ2V0TmV3cygpO1xubmV3cy5uZXdzRWxlbWVudENyZWF0b3IoKTtcblxuaW1wb3J0IG1lc3NhZ2VzIGZyb20gXCIuL21lc3NhZ2VzXCI7XG5cblxuLy8gbWVzc2FnZXMuY3JlYXRlTWVzc2FnZUJvYXJkKCk7XG5cbmZ1bmN0aW9uIHVzZXJMb2dpbiAoKSB7XG5cbiAgICBsZXQgdXNlck5hbWUgPSBcIkhlcm5hbmRvXCI7XG4gICAgbGV0IHBhc3N3b3JkID0gXCJ5b21hbWFcIjtcblxuICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcblxuICAgICAgICBcImRhdGFTZXRcIiA6IFwidXNlcnNcIixcbiAgICAgICAgXCJmZXRjaFR5cGVcIiA6IFwiR0VUXCIsXG4gICAgICAgIFwiZW1iZWRJdGVtXCIgOiBcIj9fZW1iZWQ9ZXZlbnRzXCJcblxuICAgIH0pLnRoZW4ocGFyc2VkVXNlcnMgPT4ge1xuXG4gICAgICAgIHBhcnNlZFVzZXJzLmZvckVhY2godXNlciA9PiB7XG5cbiAgICAgICAgICAgIGlmICh1c2VyTmFtZSA9PT0gdXNlci51c2VyTmFtZSAmJiBwYXNzd29yZCA9PT0gdXNlci5wYXNzd29yZCkge1xuXG4gICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgndXNlcklkJywgdXNlci5pZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSlcbiAgICBsZXQgdXNlcklkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyk7XG4gICAgbG9hZERhc2hib2FyZCh1c2VySWQpXG4gICAgLy8gY29uc29sZS5sb2coXCJVc2VySWQgPSBcIiwgc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJykpXG59XG5cbnVzZXJMb2dpbigpO1xuXG5mdW5jdGlvbiBsb2FkRGFzaGJvYXJkICh1c2VySWQpIHtcbiAgICBjb25zb2xlLmxvZyhgVGhhbmtzIGZvciBwYXNzaW5nIHRoZSB1c2VySWQuICBUaGUgdXNlcklkIGlzICR7dXNlcklkfWApXG59XG4iLCJjb25zdCBldmVudHMgPSB7XG5jdXJyZW50RXZlbnQgKCkge1xuICBjb25zb2xlLmxvZyAoXCJ5b1wiKVxufVxufVxuXG5leHBvcnQgZGVmYXVsdCBldmVudHMiLCJpbXBvcnQgbm9tYWREYXRhIGZyb20gXCIuL25vbWFkRGF0YVwiO1xuaW1wb3J0IGRvbUNvbXBvbmVudHMgZnJvbSBcIi4vZG9tQ29tcG9uZW50c1wiO1xuXG5jb25zdCBtZXNzYWdlcyA9IHtcblxuICAgIGNyZWF0ZU1lc3NhZ2VCb2FyZCgpIHtcblxuICAgICAgICBsZXQgb3V0cHV0QXJ0aWNsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3V0cHV0XCIpXG5cbiAgICAgICAgLy9jcmVhdGUgZGlzcGxheSBjb250YWluZXJcbiAgICAgICAgbGV0IG1lc3NhZ2VzQ29udGFpbmVyID0gZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIiA6IFwiZGl2XCIsXG4gICAgICAgICAgICBcImNzc0NsYXNzXCIgOiBcIm1lc3NhZ2VzQ29udGFpbmVyXCIsXG4gICAgICAgICAgICBcImF0dHJpYnV0ZXNcIiA6IHtcbiAgICAgICAgICAgICAgICBpZCA6IFwibWVzc2FnZXNDb250YWluZXJcIlxuICAgICAgICAgICAgfX0pO1xuXG4gICAgICAgIC8vY3JlYXRlIG1lc3NhZ2UgaW5wdXQgZmllbGRcbiAgICAgICAgbGV0IG1lc3NhZ2VJbnB1dCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICBcImVsZW1lbnRUeXBlXCIgOiBcImlucHV0XCIsXG4gICAgICAgICAgICBcImNzc0NsYXNzXCIgOiBcIm1lc3NhZ2VJbnB1dFwiLFxuICAgICAgICAgICAgXCJhdHRyaWJ1dGVzXCIgOiB7XG4gICAgICAgICAgICAgICAgaWQgOiBcIm1lc3NhZ2VJbnB1dFwiLFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkVudGVyIE1lc3NhZ2UgSGVyZVwiXG4gICAgICAgICAgICB9fSk7XG4gICAgICAgIC8vY3JlYXRlIHN1Ym1pdCBidXR0b24gZm9yIGlucHV0IGZpZWxkXG5cbiAgICAgICAgbGV0IG1lc3NhZ2VTdWJtaXRCdXR0b24gPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiIDogXCJidXR0b25cIixcbiAgICAgICAgICAgIFwiY3NzQ2xhc3NcIiA6IFwibWVzc2FnZVN1Ym1pdEJ1dHRvblwiLFxuICAgICAgICAgICAgXCJjb250ZW50XCIgOiBcIlN1Ym1pdFwiLFxuICAgICAgICAgICAgXCJhdHRyaWJ1dGVzXCIgOiB7XG4gICAgICAgICAgICAgICAgaWQgOiBcIm1lc3NhZ2VTdWJtaXRCdXR0b25cIlxuICAgICAgICAgICAgfX0pO1xuXG4gICAgICAgIG1lc3NhZ2VzQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VJbnB1dCk7XG4gICAgICAgIG1lc3NhZ2VzQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VTdWJtaXRCdXR0b24pO1xuICAgICAgICBvdXRwdXRBcnRpY2xlLmFwcGVuZENoaWxkKG1lc3NhZ2VzQ29udGFpbmVyKTtcblxuICAgICAgICB0aGlzLmdldE1lc3NhZ2VzKClcblxuICAgIH0sXG5cbiAgICBnZXRNZXNzYWdlcygpIHtcblxuICAgICAgICAvL0dFVCBmZXRjaCAmIC50aGVuIHRvIGJ1aWxkIG9iamVjdChzKSBmb3IgY3JlYXRlRG9tRWxlbWVudCgpIHVzaW5nIF9leHBhbmQgdG8gZGlzcGxheSBVTjogbWVzc2FnZVxuICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG5cbiAgICAgICAgICAgICAgICBcImRhdGFTZXRcIiA6IFwibWVzc2FnZXNcIixcbiAgICAgICAgICAgICAgICBcImZldGNoVHlwZVwiIDogXCJHRVRcIixcbiAgICAgICAgICAgICAgICBcImVtYmVkSXRlbVwiIDogXCI/X2V4cGFuZD11c2VyXCJcblxuICAgICAgICB9KS50aGVuKHBhcnNlZE1lc3NhZ2VzID0+IHtcblxuICAgICAgICAgICAgbGV0IG1lc3NhZ2VDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lc3NhZ2VzQ29udGFpbmVyXCIpO1xuICAgICAgICAgICAgbGV0IG1lc3NhZ2VJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVzc2FnZUlucHV0XCIpO1xuXG4gICAgICAgICAgICBwYXJzZWRNZXNzYWdlcy5mb3JFYWNoKG1lc3NhZ2UgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlVGV4dCA9IG1lc3NhZ2UubWVzc2FnZTtcbiAgICAgICAgICAgICAgICBsZXQgdXNlck5hbWUgPSBtZXNzYWdlLnVzZXIudXNlck5hbWU7XG4gICAgICAgICAgICAgICAgbGV0IHRpbWVTdGFtcCA9IG1lc3NhZ2UudGltZVN0YW1wO1xuXG4gICAgICAgICAgICAgICAgbWVzc2FnZUNvbnRhaW5lci5pbnNlcnRCZWZvcmUoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcblxuICAgICAgICAgICAgICAgICAgICBcImVsZW1lbnRUeXBlXCIgOiBcInBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJjc3NDbGFzc1wiIDogXCJtZXNzYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY29udGVudFwiIDogYCR7dXNlck5hbWV9OiAgJHttZXNzYWdlVGV4dH1gXG5cbiAgICAgICAgICAgICAgICB9KSwgbWVzc2FnZUlucHV0KVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfSxcblxuICAgIHBvc3ROZXdNZXNzYWdlKCkge1xuXG4gICAgICAgIC8vY2FsbGVkIGJ5IGV2ZW50TGlzdGVuZXIgb24gc3VibWl0IGJ1dHRvblxuICAgICAgICAvL3BlcmZvcm0gUE9TVCBmZXRjaFxuICAgICAgICAvL2NhbGwgZG9tUmVmcmVzaCBmdW5jdGlvblxuICAgIH0sXG5cbiAgICBlZGl0TWVzc2FnZSgpIHtcblxuICAgICAgICAvL2JyaW5nIHVwIG1lc3NhZ2UgaW4gYSBwcmVwb3B1bGF0ZWQgZm9ybVxuICAgICAgICAvL2ZvciBjb250YWlucyBhIHN1Ym1pdCBidXR0b24gKHNhbWUgb25lIGFzIGluIHBvc3ROZXdNZXNzYWdlKCk/KVxuICAgICAgICAvL2FsbG93IGVkaXRzXG4gICAgICAgIC8vZG8gUFVUIGZldGNoXG4gICAgfSxcblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lc3NhZ2VzOyIsImltcG9ydCBub21hZERhdGEgZnJvbSBcIi4vbm9tYWREYXRhXCI7XG5pbXBvcnQgZG9tQ29tcG9uZW50cyBmcm9tIFwiLi9kb21Db21wb25lbnRzXCI7XG4vL3B1bGwgZnJvbSBhcGkgdGhlbiBkaXNwbGF5IHRvIGRvbS5cbi8vIGNyZWF0ZSBzYXZlIGJ1dHRvbiBzZW5kIHNhdmVkIGFydGljbGVzIHRvIEpzb25cbi8vIGNyZWF0ZSBidXR0b24gdG8gcHVsbCBhbGwgc2F2ZWQgbWF0ZXJpYWxzIGluIGpzb24uXG4vLyBkZWxldGUgbWV0aG9kIGZvciBhcnRpY2xlc1xuY29uc3QgbmV3cyA9IHtcblxuICAgIGdldE5ld3MoKXtcbiAgICAgICAgLy9wdWxsIHRoZW4gc2VuZCBwdWxsZWQgZGF0YSB0byBkb21cbiAgICAgICByZXR1cm4gZmV0Y2goXCJodHRwOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cy8xXCIpXG4gICAgICAgICAgICAudGhlbihuZXdzSXRlbXMgPT4gbmV3c0l0ZW1zLmpzb24oKSlcbiAgICB9LFxuICAgIHNhdmUoKSB7XG4gICAgICAgIC8vVGhpcyBpcyBmdW5jdGlvbmluZyBhbmQgd3JpdGluZyB0byBKU09OLlxuICAgICAgICB0aGlzLmdldE5ld3MoKS50aGVuKHBvc3QgPT57XG4gICAgICAgIGNvbnN0IG5ld3NPYmplY3QgPSB7XG4gICAgICAgICAgICAgICAgXCJkYXRhU2V0XCIgOiBcIm5ld3NJdGVtc1wiLFxuICAgICAgICAgICAgICAgIFwiZmV0Y2hUeXBlXCIgOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidXNlcklkXCI6IDEsXG4gICAgICAgICAgICAgICAgICAgIFwidXJsXCI6IGAke3Bvc3QudGl0bGV9YCxcbiAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBgJHtwb3N0LmJvZHl9YCxcbiAgICAgICAgICAgICAgICAgICAgXCJzeW5vcHNpc1wiOiBcImJsYWggYmxhaCBibGFoXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2codGVzdG5ld3NPYmopO1xuICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YShuZXdzT2JqZWN0KTtcbiAgICB9KVxuICAgIH0sXG5cbiAgICBhbGxTYXZlZCgpe1xuICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh0ZXN0bmV3c09iailcbiAgICB9LFxuXG4gICAgZGVsZXRlREIoKXtcblxuICAgIH0sXG5cbiAgICBuZXdzRWxlbWVudENyZWF0b3IoKXtcbiAgICAgICAgY29uc3QgbmV3c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3V0cHV0XCIpXG4gICAgICAgIGxldCBuZXdzQ3JlYXRvcktleSA9IHtcbiAgICAgICAgICAgIFwiZGF0YVNldFwiIDogXCJuZXdzSXRlbXNcIixcbiAgICAgICAgICAgIFwiZmV0Y2hUeXBlXCIgOiBcIkdFVFwiLFxuICAgICAgICAgICAgXCJkYXRhQmFzZU9iamVjdFwiIDogXCJcIixcbiAgICAgICAgICAgIFwiZW1iZWRJdGVtXCIgOiBcIj9fZW1iZWQ9bmV3c0l0ZW1zXCJcbiAgICAgICAgfVxuICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YShuZXdzQ3JlYXRvcktleSlcbiAgICAgICAgLnRoZW4gKGRiR3JhYnMgPT4ge1xuICAgICAgICAgICAgZGJHcmFicy5mb3JFYWNoKGRiR3JhYiA9PiAge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRiR3JhYik7XG4gICAgICAgICAgICAgICAgbmV3c0NvbnRhaW5lci5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJTQVZFIEJJVENIXCIsXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzOiBcIm5ld3NTYXZlQnV0dG9uXCIgICAgXG4gICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgbmV3c0NvbnRhaW5lci5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJoMlwiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBkYkdyYWIudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzOiBcIm5ld3NUaXRsZVwiICAgIFxuICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICAgIG5ld3NDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwicFwiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBkYkdyYWIuc3lub3BzaXMsICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3M6IFwibmV3c0JvZHlcIiAgIFxuICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICAgIG5ld3NDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBkYkdyYWIudXJsLCAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzOiBcIm5ld3NVUkxcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlczp7XG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmOmAke2RiR3JhYi51cmx9YFxuICAgICAgICAgICAgICAgICAgICB9ICAgXG4gICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICAvLyBjb25zdCBOZXdzVGVzdCA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudChcImgyXCIsdGVzdFBhc3MsXCJ0ZXN0T2JqXCIsbnVsbCk7XG4gICAgICAgIC8vIG91dHB1dC5hcHBlbmRDaGlsZChOZXdzVGVzdCk7XG4gICAgICAgIFxuXG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgbmV3cyIsImNvbnN0IG5vbWFkRGF0YSA9IHtcblxuICAgIGNvbm5lY3RUb0RhdGEoZmV0Y2hPYmplY3QpIHtcblxuICAgICAgbGV0IGRhdGFTZXQgPSBmZXRjaE9iamVjdC5kYXRhU2V0O1xuICAgICAgbGV0IGVtYmVkSXRlbSA9IGZldGNoT2JqZWN0LmVtYmVkSXRlbTtcbiAgICAgIGxldCBmZXRjaFR5cGUgPSBmZXRjaE9iamVjdC5mZXRjaFR5cGU7XG4gICAgICBsZXQgZGF0YUJhc2VPYmplY3QgPSBmZXRjaE9iamVjdC5kYXRhQmFzZU9iamVjdDtcbiAgICAgIGxldCBwdXRJZCA9IGZldGNoT2JqZWN0LnB1dElkO1xuXG4gICAgICAgIGlmIChmZXRjaFR5cGUgPT0gXCJHRVRcIikge1xuXG4gICAgICAgIHJldHVybiBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDg4LyR7ZGF0YVNldH0ke2VtYmVkSXRlbX1gKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKSAvLyBwYXJzZXMgcmVzcG9uc2UgdG8gSlNPTlxuXG4gICAgICAgIH0gZWxzZSBpZiAoZmV0Y2hUeXBlID09PSBcIlBPU1RcIil7XG5cbiAgICAgICAgLy8gRGVmYXVsdCBvcHRpb25zIGFyZSBtYXJrZWQgd2l0aCAqXG4gICAgICAgIHJldHVybiBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDg4LyR7ZGF0YVNldH1gLCB7XG4gICAgICAgICAgICBtZXRob2Q6IGAke2ZldGNoVHlwZX1gLCAvLyAqR0VULCBQT1NULCBQVVQsIERFTEVURSwgZXRjLlxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxuICAgICAgICAgICAgICAgIC8vIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gcmVmZXJyZXI6IFwibm8tcmVmZXJyZXJcIiwgLy8gbm8tcmVmZXJyZXIsICpjbGllbnRcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGFCYXNlT2JqZWN0KSwgLy8gYm9keSBkYXRhIHR5cGUgbXVzdCBtYXRjaCBcIkNvbnRlbnQtVHlwZVwiIGhlYWRlclxuICAgICAgICB9KVxuXG4gICAgICAgIH0gZWxzZSBpZihmZXRjaFR5cGUgPT09IFwiUFVUXCIpe1xuICAgICAgICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC8ke2RhdGFTZXR9LyR7cHV0SWR9YCwge1xuICAgICAgICAgICAgbWV0aG9kOiBgJHtmZXRjaFR5cGV9YCwgLy8gKkdFVCwgUE9TVCwgUFVULCBERUxFVEUsIGV0Yy5cbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcbiAgICAgICAgICAgICAgICAvLyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIHJlZmVycmVyOiBcIm5vLXJlZmVycmVyXCIsIC8vIG5vLXJlZmVycmVyLCAqY2xpZW50XG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhQmFzZU9iamVjdCksIC8vIGJvZHkgZGF0YSB0eXBlIG11c3QgbWF0Y2ggXCJDb250ZW50LVR5cGVcIiBoZWFkZXJcbiAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nIChcIllPVSBTQ1JFV0VEIElUIFVQXCIpXG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICBleHBvcnQgZGVmYXVsdCBub21hZERhdGEiXX0=
