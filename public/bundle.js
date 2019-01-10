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

var _nomadData = _interopRequireDefault(require("./nomadData"));

var _friends = _interopRequireDefault(require("./friends"));

var _eventListeners = _interopRequireDefault(require("./eventListeners"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
        sessionStorage.setItem('userId', user.id);
      }
    });
  });

  let userId = sessionStorage.getItem('userId');
  loadDashboard(userId); // console.log("UserId = ", sessionStorage.getItem('userId'))
}

userLogin();

function loadDashboard(userId) {// console.log(`Thanks for passing the userId.  The userId is ${userId}`)
}

_friends.default.defineCurrentUsersFriends();

},{"./eventListeners":3,"./friends":4,"./nomadData":5}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const eventListeners = {
  friendsDeleteFriend() {
    console.log(event.target);
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

var _nomadData = _interopRequireDefault(require("./nomadData"));

var _domComponents = _interopRequireDefault(require("./domComponents"));

var _eventListeners = _interopRequireDefault(require("./eventListeners"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const friends = {
  defineCurrentUsersFriends() {
    const currentUser = 1;
    let friendHolder = []; // PULL FROM FRIENDS JSON-------------------------

    const friendIntersectionTable = {
      "dataSet": "friends",
      "fetchType": "GET",
      "dataBaseObject": "",
      "embedItem": "?_embed=events"
    };

    _nomadData.default.connectToData(friendIntersectionTable).then(fromFriends => {
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
    const userInfo = {
      "dataSet": "users",
      "fetchType": "GET",
      "dataBaseObject": "",
      "embedItem": "?_embed=events"
    };
    const userEvents = {
      "dataSet": "events",
      "fetchType": "GET",
      "dataBaseObject": "",
      "embedItem": "?_embed=events"
    };
    const usersSavedArticle = {
      "dataSet": "newsitems",
      "fetchType": "GET",
      "dataBaseObject": "",
      "embedItem": "?_embed=newsitems"
    };
    const targetContainer = document.getElementById("output");
    targetContainer.appendChild(_domComponents.default.createDomElement({
      elementType: "section",
      attributes: {
        class: "friend-container",
        id: `friend-${friend}`
      }
    }));
    const friendContainer = document.getElementById(`friend-${friend}`);
    const deleteFriend = document.createElement("button");
    deleteFriend.classList.add(`delete-friend-${friend}`);
    deleteFriend.textContent = "DELETE";
    friendContainer.appendChild(deleteFriend);
    deleteFriend.addEventListener("click", () => {
      _eventListeners.default.friendsDeleteFriend();
    });
    let friendDomBuilder = [];

    _nomadData.default.connectToData(userInfo).then(fromUserData => {
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

          _nomadData.default.connectToData(userEvents).then(events => {
            events.forEach(event => {
              if (event.userId === friend) {
                // console.log(event.eventName);
                const eventHolder = {
                  elementType: "p",
                  content: `Your fellow nomads upcoming event: ${event.eventName} on ${event.eventDate}`
                };
                friendDomBuilder.push(eventHolder);
              }
            });
          }); // PULL FROM NEWSITEMS JSON ------


          _nomadData.default.connectToData(usersSavedArticle).then(newsShiz => {
            // console.log(newsShiz)
            newsShiz.forEach(userSpecificArticles => {
              if (userSpecificArticles.userId === friend) {
                console.log(userSpecificArticles.title);
                const articleHolder = {
                  elementType: "p",
                  content: userSpecificArticles.title
                };
                friendDomBuilder.push(articleHolder);
              }
            });
            console.log(friendDomBuilder);
            friendDomBuilder.forEach(object => {
              // console.log(object);
              friendContainer.appendChild(_domComponents.default.createDomElement(object));
            });
          });
        }
      });
    });
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

},{"./domComponents":1,"./eventListeners":3,"./nomadData":5}],5:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2RvbUNvbXBvbmVudHMuanMiLCIuLi9zY3JpcHRzL2RvbVJlbmRlcmVyLmpzIiwiLi4vc2NyaXB0cy9ldmVudExpc3RlbmVycy5qcyIsIi4uL3NjcmlwdHMvZnJpZW5kcy5qcyIsIi4uL3NjcmlwdHMvbm9tYWREYXRhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDQUEsTUFBTSxhQUFhLEdBQUc7QUFDcEIsRUFBQSxnQkFBZ0IsQ0FBQztBQUFFLElBQUEsV0FBRjtBQUFlLElBQUEsT0FBTyxHQUFHLElBQXpCO0FBQStCLElBQUEsUUFBL0I7QUFBeUMsSUFBQSxVQUFVLEdBQUc7QUFBdEQsR0FBRCxFQUE2RDtBQUMzRSxVQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixXQUF2QixDQUFoQjtBQUNBLElBQUEsT0FBTyxDQUFDLFdBQVIsR0FBc0IsT0FBdEI7O0FBRUEsUUFBSSxRQUFKLEVBQWM7QUFDWixNQUFBLE9BQU8sQ0FBQyxTQUFSLENBQWtCLEdBQWxCLENBQXNCLFFBQXRCO0FBQ0Q7O0FBRUQsU0FBSyxJQUFJLEdBQVQsSUFBZ0IsVUFBaEIsRUFBNEI7QUFDMUIsTUFBQSxPQUFPLENBQUMsWUFBUixDQUFxQixHQUFyQixFQUEwQixVQUFVLENBQUMsR0FBRCxDQUFwQztBQUNEOztBQUNELFdBQU8sT0FBUDtBQUNEOztBQWJtQixDQUF0QjtlQWdCZSxhOzs7Ozs7QUNmZjs7QUFFQTs7QUFDQTs7OztBQUpBO0FBRUE7QUFLQTtBQUVBLFNBQVMsU0FBVCxHQUFzQjtBQUVsQixNQUFJLFFBQVEsR0FBRyxVQUFmO0FBQ0EsTUFBSSxRQUFRLEdBQUcsUUFBZjs7QUFFQSxxQkFBVSxhQUFWLENBQXdCO0FBRXBCLGVBQVksT0FGUTtBQUdwQixpQkFBYyxLQUhNO0FBSXBCLGlCQUFjO0FBSk0sR0FBeEIsRUFNRyxJQU5ILENBTVEs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OUMsQ0FBTCxDQUNGLElBREUsQ0FDRyxRQUFRLElBQUksUUFBUSxDQUFDLElBQVQsRUFEZixDQUFQLENBRndCLENBR2U7QUFFdEMsS0FMRCxNQUtPLElBQUksU0FBUyxLQUFLLE1BQWxCLEVBQXlCO0FBRWhDO0FBQ0EsYUFBTyxLQUFLLENBQUUseUJBQXdCLE9BQVEsRUFBbEMsRUFBcUM7QUFDN0MsUUFBQSxNQUFNLEVBQUcsR0FBRSxTQUFVLEVBRHdCO0FBQ3JCO0FBQ3hCLFFBQUEsT0FBTyxFQUFFO0FBQ0wsMEJBQWdCLGlDQURYLENBRUw7O0FBRkssU0FGb0M7QUFNN0M7QUFDQSxRQUFBLElBQUksRUFBRSxJQUFJLENBQUMsU0FBTCxDQUFlLGNBQWYsQ0FQdUMsQ0FPUDs7QUFQTyxPQUFyQyxDQUFaO0FBVUMsS0FiTSxNQWFBLElBQUcsU0FBUyxLQUFLLEtBQWpCLEVBQXVCO0FBQzlCLGFBQU8sS0FBSyxDQUFFLHlCQUF3QixPQUFRLElBQUcsS0FBTSxFQUEzQyxFQUE4QztBQUN0RCxRQUFBLE1BQU0sRUFBRyxHQUFFLFNBQVUsRUFEaUM7QUFDOUI7QUFDeEIsUUFBQSxPQUFPLEVBQUU7QUFDTCwwQkFBZ0IsaUNBRFgsQ0FFTDs7QUFGSyxTQUY2QztBQU10RDtBQUNBLFFBQUEsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFMLENBQWUsY0FBZixDQVBnRCxDQU9oQjs7QUFQZ0IsT0FBOUMsQ0FBWjtBQVNDLEtBVk0sTUFVQTtBQUNILE1BQUEsT0FBTyxDQUFDLEdBQVIsQ0FBYSxtQkFBYjtBQUNIO0FBQ0o7O0FBekNhLENBQWxCO2VBNENpQixTIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgZG9tQ29tcG9uZW50cyA9IHtcbiAgY3JlYXRlRG9tRWxlbWVudCh7IGVsZW1lbnRUeXBlLCBjb250ZW50ID0gbnVsbCwgY3NzQ2xhc3MsIGF0dHJpYnV0ZXMgPSB7fSB9KSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudFR5cGUpO1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuXG4gICAgaWYgKGNzc0NsYXNzKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3MpO1xuICAgIH1cblxuICAgIGZvciAobGV0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50O1xuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBkb21Db21wb25lbnRzIiwiLy8gaW1wb3J0IGV2ZW50cyBmcm9tIFwiLi9ldmVudHNcIjtcbmltcG9ydCBub21hZERhdGEgZnJvbSBcIi4vbm9tYWREYXRhXCI7XG4vLyBpbXBvcnQgbWVzc2FnZXMgZnJvbSBcIi4vbWVzc2FnZXNcIjtcbmltcG9ydCBmcmllbmRzIGZyb20gXCIuL2ZyaWVuZHNcIjtcbmltcG9ydCBldmVudExpc3RlbmVycyBmcm9tIFwiLi9ldmVudExpc3RlbmVyc1wiO1xuXG5cbi8vIG1lc3NhZ2VzLmNyZWF0ZU1lc3NhZ2VCb2FyZCgpO1xuXG5mdW5jdGlvbiB1c2VyTG9naW4gKCkge1xuXG4gICAgbGV0IHVzZXJOYW1lID0gXCJIZXJuYW5kb1wiO1xuICAgIGxldCBwYXNzd29yZCA9IFwieW9tYW1hXCI7XG5cbiAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG5cbiAgICAgICAgXCJkYXRhU2V0XCIgOiBcInVzZXJzXCIsXG4gICAgICAgIFwiZmV0Y2hUeXBlXCIgOiBcIkdFVFwiLFxuICAgICAgICBcImVtYmVkSXRlbVwiIDogXCI/X2VtYmVkPWV2ZW50c1wiXG5cbiAgICB9KS50aGVuKHBhcnNlZFVzZXJzID0+IHtcblxuICAgICAgICBwYXJzZWRVc2Vycy5mb3JFYWNoKHVzZXIgPT4ge1xuXG4gICAgICAgICAgICBpZiAodXNlck5hbWUgPT09IHVzZXIudXNlck5hbWUgJiYgcGFzc3dvcmQgPT09IHVzZXIucGFzc3dvcmQpIHtcblxuICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3VzZXJJZCcsIHVzZXIuaWQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pXG4gICAgbGV0IHVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xuICAgIGxvYWREYXNoYm9hcmQodXNlcklkKVxuICAgIC8vIGNvbnNvbGUubG9nKFwiVXNlcklkID0gXCIsIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpKVxufVxuXG51c2VyTG9naW4oKTtcblxuZnVuY3Rpb24gbG9hZERhc2hib2FyZCAodXNlcklkKSB7XG4gICAgLy8gY29uc29sZS5sb2coYFRoYW5rcyBmb3IgcGFzc2luZyB0aGUgdXNlcklkLiAgVGhlIHVzZXJJZCBpcyAke3VzZXJJZH1gKVxufVxuXG5mcmllbmRzLmRlZmluZUN1cnJlbnRVc2Vyc0ZyaWVuZHMoKVxuIiwiY29uc3QgZXZlbnRMaXN0ZW5lcnMgPSB7XG5cbiAgZnJpZW5kc0RlbGV0ZUZyaWVuZCAoKSB7XG4gICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0KVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZXZlbnRMaXN0ZW5lcnMiLCJpbXBvcnQgbm9tYWREYXRhIGZyb20gXCIuL25vbWFkRGF0YVwiXG5pbXBvcnQgZG9tQ29tcG9uZW50cyBmcm9tIFwiLi9kb21Db21wb25lbnRzXCI7XG5pbXBvcnQgZXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vZXZlbnRMaXN0ZW5lcnNcIjtcblxuY29uc3QgZnJpZW5kcyA9IHtcblxuICBcbiAgZGVmaW5lQ3VycmVudFVzZXJzRnJpZW5kcyAoKSB7XG4gICAgY29uc3QgY3VycmVudFVzZXIgPSAxO1xuICAgIGxldCBmcmllbmRIb2xkZXIgPSBbXTtcbi8vIFBVTEwgRlJPTSBGUklFTkRTIEpTT04tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgY29uc3QgZnJpZW5kSW50ZXJzZWN0aW9uVGFibGUgPSB7XG4gICAgXCJkYXRhU2V0XCIgOiBcImZyaWVuZHNcIixcbiAgICBcImZldGNoVHlwZVwiIDogXCJHRVRcIixcbiAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiBcIlwiLFxuICAgIFwiZW1iZWRJdGVtXCIgOiBcIj9fZW1iZWQ9ZXZlbnRzXCJcbn1cbm5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKGZyaWVuZEludGVyc2VjdGlvblRhYmxlKVxuLnRoZW4oZnJvbUZyaWVuZHMgPT4ge1xuICAvLyBjb25zb2xlLmxvZyhmcm9tRnJpZW5kcylcbiAgZnJvbUZyaWVuZHMuZm9yRWFjaChmcmllbmREYXRhID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhmcmllbmREYXRhKVxuICAgIGlmIChmcmllbmREYXRhLnVzZXJJZCA9PT0gY3VycmVudFVzZXIpIHtcbiAgICAgIGZyaWVuZEhvbGRlci5wdXNoKGZyaWVuZERhdGEub3RoZXJGcmllbmRJZClcbiAgICB9XG4gIH0pXG4gIGZyaWVuZEhvbGRlci5mb3JFYWNoKG9mZmljaWFsRnJpZW5kID0+IHtcbiAgICB0aGlzLmxvYWRDdXJyZW50VXNlcnNGcmllbmRzKG9mZmljaWFsRnJpZW5kKVxuICB9KVxufSlcbn0sXG5sb2FkQ3VycmVudFVzZXJzRnJpZW5kcyAoZnJpZW5kKSB7XG4gIC8vIFBVTEwgRlJPTSBVU0VSUyBKU09OIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIGNvbnNvbGUubG9nKGZyaWVuZClcbiAgICAgIGNvbnN0IHVzZXJJbmZvID0ge1xuICAgICAgICBcImRhdGFTZXRcIiA6IFwidXNlcnNcIixcbiAgICAgICAgXCJmZXRjaFR5cGVcIiA6IFwiR0VUXCIsXG4gICAgICAgIFwiZGF0YUJhc2VPYmplY3RcIiA6IFwiXCIsXG4gICAgICAgIFwiZW1iZWRJdGVtXCIgOiBcIj9fZW1iZWQ9ZXZlbnRzXCJcbiAgICAgIH1cbiAgICAgIGNvbnN0IHVzZXJFdmVudHMgPSB7XG4gICAgICAgIFwiZGF0YVNldFwiIDogXCJldmVudHNcIixcbiAgICAgICAgXCJmZXRjaFR5cGVcIiA6IFwiR0VUXCIsXG4gICAgICAgIFwiZGF0YUJhc2VPYmplY3RcIiA6IFwiXCIsXG4gICAgICAgIFwiZW1iZWRJdGVtXCIgOiBcIj9fZW1iZWQ9ZXZlbnRzXCJcbiAgICAgIH1cbiAgICAgIGNvbnN0IHVzZXJzU2F2ZWRBcnRpY2xlID0ge1xuICAgICAgICBcImRhdGFTZXRcIiA6IFwibmV3c2l0ZW1zXCIsXG4gICAgICAgIFwiZmV0Y2hUeXBlXCIgOiBcIkdFVFwiLFxuICAgICAgICBcImRhdGFCYXNlT2JqZWN0XCIgOiBcIlwiLFxuICAgICAgICBcImVtYmVkSXRlbVwiIDogXCI/X2VtYmVkPW5ld3NpdGVtc1wiXG4gICAgICB9XG4gICAgICBjb25zdCB0YXJnZXRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm91dHB1dFwiKVxuICAgICAgdGFyZ2V0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgIGVsZW1lbnRUeXBlOiBcInNlY3Rpb25cIixcbiAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgIGNsYXNzOiBcImZyaWVuZC1jb250YWluZXJcIixcbiAgICAgICAgICBpZDogYGZyaWVuZC0ke2ZyaWVuZH1gXG4gICAgICAgIH1cbiAgICAgIH0pKVxuICAgICAgY29uc3QgZnJpZW5kQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGZyaWVuZC0ke2ZyaWVuZH1gKVxuICAgICAgY29uc3QgZGVsZXRlRnJpZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgICAgZGVsZXRlRnJpZW5kLmNsYXNzTGlzdC5hZGQoYGRlbGV0ZS1mcmllbmQtJHtmcmllbmR9YClcbiAgICAgIGRlbGV0ZUZyaWVuZC50ZXh0Q29udGVudCA9IFwiREVMRVRFXCI7XG4gICAgICBmcmllbmRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlRnJpZW5kKTtcbiAgICAgIGRlbGV0ZUZyaWVuZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBldmVudExpc3RlbmVycy5mcmllbmRzRGVsZXRlRnJpZW5kKClcbiAgICAgIH0pXG5cbiAgICAgIGxldCBmcmllbmREb21CdWlsZGVyID0gW107XG4gICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh1c2VySW5mbylcbiAgICAgIC50aGVuKGZyb21Vc2VyRGF0YSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGZyb21Vc2VyRGF0YSk7XG4gICAgICAgIGZyb21Vc2VyRGF0YS5mb3JFYWNoKHVzZXJJbmZvID0+IHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhmcmllbmQsIHVzZXJJbmZvLmlkKVxuICAgICAgICAgIGlmICh1c2VySW5mby5pZCA9PT0gZnJpZW5kKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh1c2VySW5mby51c2VyTmFtZSk7XG4gICAgICAgICAgICBjb25zdCBmcmllbmRJZGVudGlmaWVyID0ge1xuICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJoMlwiLFxuICAgICAgICAgICAgICBjb250ZW50OiB1c2VySW5mby51c2VyTmFtZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZyaWVuZERvbUJ1aWxkZXIucHVzaChmcmllbmRJZGVudGlmaWVyKVxuICAgICAgICAgICAgLy8gUFVMTCBGUk9NIEVWRU5UUyBKU09OIC0tLS0tLVxuICAgICAgICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEodXNlckV2ZW50cylcbiAgICAgICAgICAgIC50aGVuKGV2ZW50cyA9PiB7XG4gICAgICAgICAgICAgIGV2ZW50cy5mb3JFYWNoKGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQudXNlcklkID09PSBmcmllbmQpIHtcbiAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50LmV2ZW50TmFtZSk7XG4gICAgICAgICAgICAgICAgICBjb25zdCBldmVudEhvbGRlciA9IHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwicFwiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBgWW91ciBmZWxsb3cgbm9tYWRzIHVwY29taW5nIGV2ZW50OiAke2V2ZW50LmV2ZW50TmFtZX0gb24gJHtldmVudC5ldmVudERhdGV9YFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgZnJpZW5kRG9tQnVpbGRlci5wdXNoKGV2ZW50SG9sZGVyKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyBQVUxMIEZST00gTkVXU0lURU1TIEpTT04gLS0tLS0tXG4gICAgICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh1c2Vyc1NhdmVkQXJ0aWNsZSlcbiAgICAgICAgICAgIC50aGVuKG5ld3NTaGl6ID0+IHtcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobmV3c1NoaXopXG4gICAgICAgICAgICAgIG5ld3NTaGl6LmZvckVhY2godXNlclNwZWNpZmljQXJ0aWNsZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh1c2VyU3BlY2lmaWNBcnRpY2xlcy51c2VySWQgPT09IGZyaWVuZCkge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codXNlclNwZWNpZmljQXJ0aWNsZXMudGl0bGUpXG4gICAgICAgICAgICAgICAgICBjb25zdCBhcnRpY2xlSG9sZGVyID0ge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJwXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHVzZXJTcGVjaWZpY0FydGljbGVzLnRpdGxlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBmcmllbmREb21CdWlsZGVyLnB1c2goYXJ0aWNsZUhvbGRlcilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGZyaWVuZERvbUJ1aWxkZXIpXG4gICAgICAgICAgICAgIGZyaWVuZERvbUJ1aWxkZXIuZm9yRWFjaChvYmplY3QgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG9iamVjdCk7XG4gICAgICAgICAgICAgICAgZnJpZW5kQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudChvYmplY3QpKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnJpZW5kc1xuXG4vLyBjb25zdCB0ZXN0ZXIgPSBbXG4vLyAgIHtcbi8vICAgICBlbGVtZW50VHlwZTogXCJoMlwiLFxuLy8gICAgIGNvbnRlbnQ6IFwiamFrZSBiYW5ub25cIlxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgZWxlbWVudFR5cGU6IFwicFwiLFxuLy8gICAgIGNvbnRlbnQ6IFwiUG9vbCBQYXJ0eSAzcG1cIlxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgZWxlbWVudFR5cGU6IFwicFwiLFxuLy8gICAgIGNvbnRlbnQ6IFwiY2hlY2sgb3V0IHRoaXMgbmV3cyBhcnRpY2xlXCJcbi8vICAgfVxuLy8gXSIsImNvbnN0IG5vbWFkRGF0YSA9IHtcblxuICAgIGNvbm5lY3RUb0RhdGEoZmV0Y2hPYmplY3QpIHtcblxuICAgICAgbGV0IGRhdGFTZXQgPSBmZXRjaE9iamVjdC5kYXRhU2V0O1xuICAgICAgbGV0IGVtYmVkSXRlbSA9IGZldGNoT2JqZWN0LmVtYmVkSXRlbTtcbiAgICAgIGxldCBmZXRjaFR5cGUgPSBmZXRjaE9iamVjdC5mZXRjaFR5cGU7XG4gICAgICBsZXQgZGF0YUJhc2VPYmplY3QgPSBmZXRjaE9iamVjdC5kYXRhQmFzZU9iamVjdDtcbiAgICAgIGxldCBwdXRJZCA9IGZldGNoT2JqZWN0LnB1dElkO1xuXG4gICAgICAgIGlmIChmZXRjaFR5cGUgPT0gXCJHRVRcIikge1xuXG4gICAgICAgIHJldHVybiBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDg4LyR7ZGF0YVNldH0ke2VtYmVkSXRlbX1gKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKSAvLyBwYXJzZXMgcmVzcG9uc2UgdG8gSlNPTlxuXG4gICAgICAgIH0gZWxzZSBpZiAoZmV0Y2hUeXBlID09PSBcIlBPU1RcIil7XG5cbiAgICAgICAgLy8gRGVmYXVsdCBvcHRpb25zIGFyZSBtYXJrZWQgd2l0aCAqXG4gICAgICAgIHJldHVybiBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDg4LyR7ZGF0YVNldH1gLCB7XG4gICAgICAgICAgICBtZXRob2Q6IGAke2ZldGNoVHlwZX1gLCAvLyAqR0VULCBQT1NULCBQVVQsIERFTEVURSwgZXRjLlxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxuICAgICAgICAgICAgICAgIC8vIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gcmVmZXJyZXI6IFwibm8tcmVmZXJyZXJcIiwgLy8gbm8tcmVmZXJyZXIsICpjbGllbnRcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGFCYXNlT2JqZWN0KSwgLy8gYm9keSBkYXRhIHR5cGUgbXVzdCBtYXRjaCBcIkNvbnRlbnQtVHlwZVwiIGhlYWRlclxuICAgICAgICB9KVxuXG4gICAgICAgIH0gZWxzZSBpZihmZXRjaFR5cGUgPT09IFwiUFVUXCIpe1xuICAgICAgICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC8ke2RhdGFTZXR9LyR7cHV0SWR9YCwge1xuICAgICAgICAgICAgbWV0aG9kOiBgJHtmZXRjaFR5cGV9YCwgLy8gKkdFVCwgUE9TVCwgUFVULCBERUxFVEUsIGV0Yy5cbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcbiAgICAgICAgICAgICAgICAvLyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIHJlZmVycmVyOiBcIm5vLXJlZmVycmVyXCIsIC8vIG5vLXJlZmVycmVyLCAqY2xpZW50XG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhQmFzZU9iamVjdCksIC8vIGJvZHkgZGF0YSB0eXBlIG11c3QgbWF0Y2ggXCJDb250ZW50LVR5cGVcIiBoZWFkZXJcbiAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nIChcIllPVSBTQ1JFV0VEIElUIFVQXCIpXG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICBleHBvcnQgZGVmYXVsdCBub21hZERhdGEiXX0=
