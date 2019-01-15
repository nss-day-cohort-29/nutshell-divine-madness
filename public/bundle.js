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

var _news = _interopRequireDefault(require("./news"));

var _newsListener = _interopRequireDefault(require("./newsListener"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import events from "./events";
// import nomadData from "./nomadData";
// import nomadData from "./nomadData";
// import friends from "./friends";
// import messages from "./messages";
// import dashBoard from "./dashboard"
// import domComponents from "./domComponents";
// import eventListeners from "./eventListeners";
//BUILDS NAIGATIONBAR//
// domComponents.createNavBar()
// dashBoard.buildLoginForm()
// $("modalButton").click(eventListeners.modalDisplayAnimation)
// //NEWS SECTION
_news.default.getAPINews();

_news.default.savedNewsElementsCreator(); // news.newsElementCreator();
// news.newsElementCreator();

},{"./news":3,"./newsListener":4}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nomadData = _interopRequireDefault(require("./nomadData"));

var _domComponents = _interopRequireDefault(require("./domComponents"));

var _newsListener = _interopRequireDefault(require("./newsListener"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//pull from api then display to dom.
// create save button send saved articles to Json
// create button to pull all saved materials in json.
// delete method for articles
const newsContainer = document.querySelector("#output");
const news = {
  getAPINews() {
    //getAPINews will pull news from API then call createElement and append to output.
    //Create a header for incoming news.
    sessionStorage.setItem("userId", 1); //take me out when you're done testing........

    let articleCounter = 0;

    const newsHeader = _domComponents.default.createDomElement({
      elementType: "h1",
      content: "Current News",
      cssClass: "newsAPIHeader"
    });

    newsContainer.appendChild(newsHeader); //pull the data from the api and display it to the dom.

    return fetch("https://newsapi.org/v2/everything?q=vanlife&from=2019-01-05&sortBy=publishedAt&apiKey=9f5c509fe90044dc95a8a6963573284f").then(newsItems => newsItems.json()).then(displayData => {
      displayData.articles.forEach(dataGran => {
        let artURL = dataGran.url;
        let artTitle = dataGran.title;
        let artDesc = dataGran.description;
        articleCounter++;
        sessionStorage.setItem(`article_${articleCounter}_title`, `${artTitle}`);
        sessionStorage.setItem(`article_${articleCounter}_url`, `${artURL}`);
        sessionStorage.setItem(`article_${articleCounter}_desc`, `${artDesc}`); //console.log(displayData.articles)
        //add section container for all articles.

        newsHeader.appendChild(_domComponents.default.createDomElement({
          elementType: "section",
          cssClass: `newsAPIContainer_${articleCounter}`
        })); //create fieldset for articles to be and then attach them to the sections above.

        const parentAPISection = document.querySelector(`.newsAPIContainer_${articleCounter}`);
        parentAPISection.appendChild(_domComponents.default.createDomElement({
          elementType: "fieldset",
          content: dataGran.title,
          //!!!! Cannot find anything unique to get a good name. No unique identifier on API.
          cssClass: `apiData`,
          attributes: {
            id: `article_${articleCounter}`
          }
        })); //creating button in order to attach to individual articles. But cannot find unique identifier.
        // const newsApiArticles = document.querySelector(`.newsAPIContainer`);

        const saveApiButton = _domComponents.default.createDomElement({
          elementType: "button",
          content: "SAVE BITCH",
          cssClass: "newsSaveButton",
          attributes: {
            name: `${articleCounter}`
          }
        }); //Eventlistener to send current data to savefunction.


        parentAPISection.appendChild(saveApiButton);
        saveApiButton.addEventListener("click", _newsListener.default.saveButtonListener);
      });
    });
  },

  getUserFriendsNews() {
    const friendHolder = [];
    console.log(sessionStorage.getItem("userId"));

    _nomadData.default.connectToData({
      dataSet: "users",
      fetchType: "GET",
      embedItem: "?_embed=friends"
    }).then(parsedResponse => {
      console.log(parsedResponse);

      for (let i = 0; i < parsedResponse.length; i++) {
        const response = parsedResponse[i];

        if (response.id === Number(sessionStorage.getItem("userId"))) {
          for (let j = 0; j < response.friends.length; j++) {
            const friends = response.friends[j];
            friendHolder.push(friends.otherFriendId);
            console.log(friendHolder);
          }

          friendHolder.forEach(friendId => {
            _nomadData.default.connectToData({
              dataSet: "newsItems",
              fetchType: "GET",
              embedItem: `?userId=${friendId}`
            }).then(parsedResponse => {
              let friendsContainer = document.querySelector(".article1");
              console.log(friendsContainer);
              parsedResponse.forEach(response => {
                //call the function that builds DOM element for story and posts to DOM.  Be sure that function includes displaying a userName to dinstinguish user's stories from friends' stories
                friendsContainer.appendChild(_domComponents.default.createDomElement({
                  elementType: "section",
                  cssClass: `newsArticleContainer--${response.id}`
                }));
                const parentSavedSection = document.querySelector(`.newsArticleContainer--${response.id}`);
                parentSavedSection.appendChild(_domComponents.default.createDomElement({
                  elementType: "h3",
                  content: `${response.title}`,
                  cssClass: "newsTitle"
                }));
                parentSavedSection.appendChild(_domComponents.default.createDomElement({
                  elementType: "a",
                  content: response.url,
                  cssClass: "newsURL",
                  attributes: {
                    href: `${response.url}`,
                    target: "blank"
                  }
                })); //         const delButon = domComponents.createDomElement({
                //             elementType: "button",
                //             content: "ADIOS",
                //             attributes: {
                //             id: `newsDeleteButton--${response.id}`,
                //             }
                //     })
                // //creating a button and pointing at the article to delete. Attached event listner.
                //         parentSavedSection.appendChild(delButon);
                //         delButon.addEventListener("click", newsListener.deleteButtonListener);
              });
            });
          });
        }
      }
    });
  },

  savedNewsElementsCreator(saveButton) {
    //Creates the header for the saved news articles.
    const mainSavedContainer = _domComponents.default.createDomElement({
      elementType: "article",
      cssClass: "article1"
    });

    newsContainer.appendChild(mainSavedContainer);

    const savedHeader = _domComponents.default.createDomElement({
      elementType: "h1",
      content: "Saved News"
    });

    mainSavedContainer.appendChild(savedHeader);
    const saveRef = saveButton; //creates the object that is needed to use the createDomElement Factory.

    let newsCreatorKey = {
      "dataSet": "newsItems",
      "fetchType": "GET",
      "embedItem": `?_embed=${saveRef}` //Makes the call to the data factory to fetch/get data to put in the object.

    };

    _nomadData.default.connectToData(newsCreatorKey).then(dbGrabs => {
      // const articleButton = document.querySelector(".newsTitle");
      // console.log(articleButton);
      dbGrabs.forEach(dbGrab => {
        mainSavedContainer.appendChild(_domComponents.default.createDomElement({
          elementType: "section",
          cssClass: `newsArticleContainer--${dbGrab.id}`
        }));
        const parentSavedSection = document.querySelector(`.newsArticleContainer--${dbGrab.id}`);
        parentSavedSection.appendChild(_domComponents.default.createDomElement({
          elementType: "h3",
          content: `${dbGrab.title}`,
          cssClass: "newsTitle"
        }));
        parentSavedSection.appendChild(_domComponents.default.createDomElement({
          elementType: "a",
          content: dbGrab.url,
          cssClass: "newsURL",
          attributes: {
            href: `${dbGrab.url}`,
            target: "blank"
          }
        }));

        const delButon = _domComponents.default.createDomElement({
          elementType: "button",
          content: "ADIOS",
          attributes: {
            id: `newsDeleteButton--${dbGrab.id}`
          }
        }); //creating a button and pointing at the article to delete. Attached event listner.


        parentSavedSection.appendChild(delButon);
        delButon.addEventListener("click", _newsListener.default.deleteButtonListener);
      });
      news.getUserFriendsNews();
    }); //})

  }

};
var _default = news;
exports.default = _default;

},{"./domComponents":1,"./newsListener":4,"./nomadData":5}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nomadData = _interopRequireDefault(require("./nomadData"));

var _domComponents = _interopRequireDefault(require("./domComponents"));

var _news = _interopRequireDefault(require("./news"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const output = document.querySelector("#output");
const newsListener = {
  saveButtonListener() {
    //This is functioning and writing to JSON. Need to attach this to the save button.
    const saveID = event.target.name;
    let article = document.getElementById(`article_${saveID}`);
    let artTitle = sessionStorage.getItem(`article_${saveID}_title`);
    let artDescription = sessionStorage.getItem(`article_${saveID}_desc`);
    let articleURL = sessionStorage.getItem(`article_${saveID}_url`);
    console.log(article); // console.log(event.target, event.currentTarget)

    const newsObjectPost = {
      "dataSet": "newsItems",
      "fetchType": "POST",
      "dataBaseObject": {
        "userId": Number(sessionStorage.getItem('userId')),
        "url": `${articleURL}`,
        "title": `${artTitle}`,
        "synopsis": `${artDescription}`
      }
    };
    console.log(sessionStorage);

    _nomadData.default.connectToData(newsObjectPost).then(response => response.json).then(shit => {
      console.log(shit);
      $("#output").empty();

      _news.default.getAPINews();

      _news.default.savedNewsElementsCreator();
    }); // })

  },

  deleteButtonListener() {
    //To delete from saved news articles. 
    const deleteID = event.target.id.split("--")[1];
    console.log(deleteID);

    _nomadData.default.connectToData({
      deleteId: deleteID,
      dataSet: "newsItems",
      fetchType: "DELETE" // dataBaseObject: {
      //     userId: sessionStorage.getItem("userId")

    }).then(() => {
      $(".article1").empty();

      _news.default.savedNewsElementsCreator();
    });
  }

};
var _default = newsListener;
exports.default = _default;

},{"./domComponents":1,"./news":3,"./nomadData":5}],5:[function(require,module,exports){
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
    let deleteId = fetchObject.deleteId;

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
    } else if (fetchType === "DELETE") {
      return fetch(`http://localhost:8088/${dataSet}/${deleteId}`, {
        method: `${fetchType}`,
        // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json; charset=utf-8" // "Content-Type": "application/x-www-form-urlencoded",

        } // referrer: "no-referrer", // no-referrer, *client

      });
    } else {
      console.log("YOU SCREWED IT UP");
    }
  }

};
var _default = nomadData;
exports.default = _default;

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2RvbUNvbXBvbmVudHMuanMiLCIuLi9zY3JpcHRzL2RvbVJlbmRlcmVyLmpzIiwiLi4vc2NyaXB0cy9uZXdzLmpzIiwiLi4vc2NyaXB0cy9uZXdzTGlzdGVuZXIuanMiLCIuLi9zY3JpcHRzL25vbWFkRGF0YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FBLE1BQU0sYUFBYSxHQUFHO0FBQ3BCLEVBQUEsZ0JBQWdCLENBQUM7QUFBRSxJQUFBLFdBQUY7QUFBZSxJQUFBLE9BQU8sR0FBRyxJQUF6QjtBQUErQixJQUFBLFFBQS9CO0FBQXlDLElBQUEsVUFBVSxHQUFHO0FBQXRELEdBQUQsRUFBNkQ7QUFDM0UsVUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBaEI7QUFDQSxJQUFBLE9BQU8sQ0FBQyxXQUFSLEdBQXNCLE9BQXRCOztBQUNBLFFBQUksUUFBSixFQUFjO0FBQ1osTUFBQSxPQUFPLENBQUMsU0FBUixDQUFrQixHQUFsQixDQUFzQixRQUF0QjtBQUNEOztBQUNELFNBQUssSUFBSSxHQUFULElBQWdCLFVBQWhCLEVBQTRCO0FBQzFCLE1BQUEsT0FBTyxDQUFDLFlBQVIsQ0FBcUIsR0FBckIsRUFBMEIsVUFBVSxDQUFDLEdBQUQsQ0FBcEM7QUFDRDs7QUFDRCxXQUFPLE9BQVA7QUFDRDs7QUFYbUIsQ0FBdEI7ZUFlZSxhOzs7Ozs7QUNYZjs7QUFDQTs7OztBQUxBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsY0FBSyxVQUFMOztBQUNBLGNBQUssd0JBQUwsRyxDQUdBO0FBQ0E7Ozs7Ozs7Ozs7QUN0QkE7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFU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dEQsUUFBQSxNQUFNLEVBQUcsR0FBRSxTQUFVLEVBRGlDO0FBQzlCO0FBQ3hCLFFBQUEsT0FBTyxFQUFFO0FBQ0wsMEJBQWdCLGlDQURYLENBRUw7O0FBRkssU0FGNkM7QUFNdEQ7QUFDQSxRQUFBLElBQUksRUFBRSxJQUFJLENBQUMsU0FBTCxDQUFlLGNBQWYsQ0FQZ0QsQ0FPaEI7O0FBUGdCLE9BQTlDLENBQVo7QUFTQyxLQVZNLE1BVUEsSUFBSSxTQUFTLEtBQUssUUFBbEIsRUFBNEI7QUFDbkMsYUFBTyxLQUFLLENBQUUseUJBQXdCLE9BQVEsSUFBRyxRQUFTLEVBQTlDLEVBQWlEO0FBQ3pELFFBQUEsTUFBTSxFQUFHLEdBQUUsU0FBVSxFQURvQztBQUNqQztBQUN4QixRQUFBLE9BQU8sRUFBRTtBQUNMLDBCQUFnQixpQ0FEWCxDQUVMOztBQUZLLFNBRmdELENBTXpEOztBQU55RCxPQUFqRCxDQUFaO0FBUUMsS0FUTSxNQVNBO0FBQ0gsTUFBQSxPQUFPLENBQUMsR0FBUixDQUFhLG1CQUFiO0FBQ0g7QUFDSjs7QUFuRGEsQ0FBbEI7ZUFzRGUsUyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNvbnN0IGRvbUNvbXBvbmVudHMgPSB7XG4gIGNyZWF0ZURvbUVsZW1lbnQoeyBlbGVtZW50VHlwZSwgY29udGVudCA9IG51bGwsIGNzc0NsYXNzLCBhdHRyaWJ1dGVzID0ge30gfSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnRUeXBlKTtcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICBpZiAoY3NzQ2xhc3MpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjc3NDbGFzcyk7XG4gICAgfVxuICAgIGZvciAobGV0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG4gIFxufVxuXG5leHBvcnQgZGVmYXVsdCBkb21Db21wb25lbnRzIiwiLy8gaW1wb3J0IGV2ZW50cyBmcm9tIFwiLi9ldmVudHNcIjtcbi8vIGltcG9ydCBub21hZERhdGEgZnJvbSBcIi4vbm9tYWREYXRhXCI7XG4vLyBpbXBvcnQgbm9tYWREYXRhIGZyb20gXCIuL25vbWFkRGF0YVwiO1xuLy8gaW1wb3J0IGZyaWVuZHMgZnJvbSBcIi4vZnJpZW5kc1wiO1xuaW1wb3J0IG5ld3MgZnJvbSBcIi4vbmV3c1wiXG5pbXBvcnQgbmV3c0xpc3RlbmVyIGZyb20gXCIuL25ld3NMaXN0ZW5lclwiO1xuLy8gaW1wb3J0IG1lc3NhZ2VzIGZyb20gXCIuL21lc3NhZ2VzXCI7XG4vLyBpbXBvcnQgZGFzaEJvYXJkIGZyb20gXCIuL2Rhc2hib2FyZFwiXG4vLyBpbXBvcnQgZG9tQ29tcG9uZW50cyBmcm9tIFwiLi9kb21Db21wb25lbnRzXCI7XG4vLyBpbXBvcnQgZXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vZXZlbnRMaXN0ZW5lcnNcIjtcblxuLy9CVUlMRFMgTkFJR0FUSU9OQkFSLy9cbi8vIGRvbUNvbXBvbmVudHMuY3JlYXRlTmF2QmFyKClcbi8vIGRhc2hCb2FyZC5idWlsZExvZ2luRm9ybSgpXG4vLyAkKFwibW9kYWxCdXR0b25cIikuY2xpY2soZXZlbnRMaXN0ZW5lcnMubW9kYWxEaXNwbGF5QW5pbWF0aW9uKVxuXG4vLyAvL05FV1MgU0VDVElPTlxubmV3cy5nZXRBUElOZXdzKCk7XG5uZXdzLnNhdmVkTmV3c0VsZW1lbnRzQ3JlYXRvcigpO1xuXG5cbi8vIG5ld3MubmV3c0VsZW1lbnRDcmVhdG9yKCk7XG4vLyBuZXdzLm5ld3NFbGVtZW50Q3JlYXRvcigpO1xuXG4iLCJpbXBvcnQgbm9tYWREYXRhIGZyb20gXCIuL25vbWFkRGF0YVwiO1xuaW1wb3J0IGRvbUNvbXBvbmVudHMgZnJvbSBcIi4vZG9tQ29tcG9uZW50c1wiO1xuaW1wb3J0IG5ld3NMaXN0ZW5lciBmcm9tIFwiLi9uZXdzTGlzdGVuZXJcIjtcbi8vcHVsbCBmcm9tIGFwaSB0aGVuIGRpc3BsYXkgdG8gZG9tLlxuLy8gY3JlYXRlIHNhdmUgYnV0dG9uIHNlbmQgc2F2ZWQgYXJ0aWNsZXMgdG8gSnNvblxuLy8gY3JlYXRlIGJ1dHRvbiB0byBwdWxsIGFsbCBzYXZlZCBtYXRlcmlhbHMgaW4ganNvbi5cbi8vIGRlbGV0ZSBtZXRob2QgZm9yIGFydGljbGVzXG5cbmNvbnN0IG5ld3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI291dHB1dFwiKVxuXG5jb25zdCBuZXdzID0ge1xuICAgIGdldEFQSU5ld3MgKCkge1xuICAgIC8vZ2V0QVBJTmV3cyB3aWxsIHB1bGwgbmV3cyBmcm9tIEFQSSB0aGVuIGNhbGwgY3JlYXRlRWxlbWVudCBhbmQgYXBwZW5kIHRvIG91dHB1dC5cbiAgICAvL0NyZWF0ZSBhIGhlYWRlciBmb3IgaW5jb21pbmcgbmV3cy5cbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwidXNlcklkXCIsIDEpIC8vdGFrZSBtZSBvdXQgd2hlbiB5b3UncmUgZG9uZSB0ZXN0aW5nLi4uLi4uLi5cbiAgICBsZXQgYXJ0aWNsZUNvdW50ZXIgPSAwO1xuICAgIGNvbnN0IG5ld3NIZWFkZXIgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe2VsZW1lbnRUeXBlOiBcImgxXCIsIGNvbnRlbnQ6IFwiQ3VycmVudCBOZXdzXCIsIGNzc0NsYXNzOlwibmV3c0FQSUhlYWRlclwifSk7XG4gICAgbmV3c0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdzSGVhZGVyKTtcbiAgICAvL3B1bGwgdGhlIGRhdGEgZnJvbSB0aGUgYXBpIGFuZCBkaXNwbGF5IGl0IHRvIHRoZSBkb20uXG4gICAgICAgIHJldHVybiBmZXRjaChcImh0dHBzOi8vbmV3c2FwaS5vcmcvdjIvZXZlcnl0aGluZz9xPXZhbmxpZmUmZnJvbT0yMDE5LTAxLTA1JnNvcnRCeT1wdWJsaXNoZWRBdCZhcGlLZXk9OWY1YzUwOWZlOTAwNDRkYzk1YThhNjk2MzU3MzI4NGZcIilcbiAgICAgICAgLnRoZW4obmV3c0l0ZW1zID0+IG5ld3NJdGVtcy5qc29uKCkpXG4gICAgICAgIC50aGVuKGRpc3BsYXlEYXRhID0+IHtcbiAgICAgICAgICAgIGRpc3BsYXlEYXRhLmFydGljbGVzLmZvckVhY2goZGF0YUdyYW4gPT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgIGxldCBhcnRVUkwgPSBkYXRhR3Jhbi51cmw7XG4gICAgICAgICAgICBsZXQgYXJ0VGl0bGUgPSBkYXRhR3Jhbi50aXRsZTtcbiAgICAgICAgICAgIGxldCBhcnREZXNjID0gZGF0YUdyYW4uZGVzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgYXJ0aWNsZUNvdW50ZXIgKys7XG5cbiAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGBhcnRpY2xlXyR7YXJ0aWNsZUNvdW50ZXJ9X3RpdGxlYCwgYCR7YXJ0VGl0bGV9YCk7XG4gICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShgYXJ0aWNsZV8ke2FydGljbGVDb3VudGVyfV91cmxgLCBgJHthcnRVUkx9YCk7XG4gICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShgYXJ0aWNsZV8ke2FydGljbGVDb3VudGVyfV9kZXNjYCwgYCR7YXJ0RGVzY31gKTtcblxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhkaXNwbGF5RGF0YS5hcnRpY2xlcylcbiAgICAgICAgICAgICAvL2FkZCBzZWN0aW9uIGNvbnRhaW5lciBmb3IgYWxsIGFydGljbGVzLlxuICAgICAgICAgICAgbmV3c0hlYWRlci5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOlwic2VjdGlvblwiLFxuICAgICAgICAgICAgICAgIGNzc0NsYXNzOiBgbmV3c0FQSUNvbnRhaW5lcl8ke2FydGljbGVDb3VudGVyfWBcbiAgICAgICAgfSkpXG4gICAgICAgIC8vY3JlYXRlIGZpZWxkc2V0IGZvciBhcnRpY2xlcyB0byBiZSBhbmQgdGhlbiBhdHRhY2ggdGhlbSB0byB0aGUgc2VjdGlvbnMgYWJvdmUuXG4gICAgICAgICAgICBjb25zdCBwYXJlbnRBUElTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLm5ld3NBUElDb250YWluZXJfJHthcnRpY2xlQ291bnRlcn1gKVxuICAgICAgICAgICAgcGFyZW50QVBJU2VjdGlvbi5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiZmllbGRzZXRcIixcbiAgICAgICAgICAgICAgICBjb250ZW50OiBkYXRhR3Jhbi50aXRsZSxcbiAgICAgICAgLy8hISEhIENhbm5vdCBmaW5kIGFueXRoaW5nIHVuaXF1ZSB0byBnZXQgYSBnb29kIG5hbWUuIE5vIHVuaXF1ZSBpZGVudGlmaWVyIG9uIEFQSS5cbiAgICAgICAgICAgIGNzc0NsYXNzOiBgYXBpRGF0YWAsXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgIGlkIDogYGFydGljbGVfJHthcnRpY2xlQ291bnRlcn1gXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpXG4gICAgICAgIC8vY3JlYXRpbmcgYnV0dG9uIGluIG9yZGVyIHRvIGF0dGFjaCB0byBpbmRpdmlkdWFsIGFydGljbGVzLiBCdXQgY2Fubm90IGZpbmQgdW5pcXVlIGlkZW50aWZpZXIuXG4gICAgICAgIC8vIGNvbnN0IG5ld3NBcGlBcnRpY2xlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5uZXdzQVBJQ29udGFpbmVyYCk7XG4gICAgICAgIGNvbnN0IHNhdmVBcGlCdXR0b24gPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICBjb250ZW50OiBcIlNBVkUgQklUQ0hcIixcbiAgICAgICAgICAgIGNzc0NsYXNzOiBcIm5ld3NTYXZlQnV0dG9uXCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgIG5hbWUgOiBgJHthcnRpY2xlQ291bnRlcn1gXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4vL0V2ZW50bGlzdGVuZXIgdG8gc2VuZCBjdXJyZW50IGRhdGEgdG8gc2F2ZWZ1bmN0aW9uLlxuICAgICAgICBwYXJlbnRBUElTZWN0aW9uLmFwcGVuZENoaWxkKHNhdmVBcGlCdXR0b24pO1xuICAgICAgICBzYXZlQXBpQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuZXdzTGlzdGVuZXIuc2F2ZUJ1dHRvbkxpc3RlbmVyKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgIH0pXG4gICAgICAgIH0sXG5cbiAgICBnZXRVc2VyRnJpZW5kc05ld3MoKSB7XG4gICAgICAgICAgICBjb25zdCBmcmllbmRIb2xkZXIgPSBbXTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIikpXG4gICAgICAgICAgICBub21hZERhdGEuY29ubmVjdFRvRGF0YSh7XG4gICAgICAgICAgICAgIGRhdGFTZXQ6IFwidXNlcnNcIixcbiAgICAgICAgICAgICAgZmV0Y2hUeXBlOiBcIkdFVFwiLFxuICAgICAgICAgICAgICBlbWJlZEl0ZW06IFwiP19lbWJlZD1mcmllbmRzXCJcbiAgICAgICAgXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocGFyc2VkUmVzcG9uc2UgPT4ge1xuICAgICAgICBcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cocGFyc2VkUmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyc2VkUmVzcG9uc2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcGFyc2VkUmVzcG9uc2VbaV07XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmlkID09PSBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSkpIHtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJlc3BvbnNlLmZyaWVuZHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZnJpZW5kcyA9IHJlc3BvbnNlLmZyaWVuZHNbal07XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBmcmllbmRIb2xkZXIucHVzaChmcmllbmRzLm90aGVyRnJpZW5kSWQpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhmcmllbmRIb2xkZXIpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZnJpZW5kSG9sZGVyLmZvckVhY2goZnJpZW5kSWQgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKHtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgZGF0YVNldDogXCJuZXdzSXRlbXNcIixcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2hUeXBlOiBcIkdFVFwiLFxuICAgICAgICAgICAgICAgICAgICBlbWJlZEl0ZW06IGA/dXNlcklkPSR7ZnJpZW5kSWR9YFxuICAgIFxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHBhcnNlZFJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZnJpZW5kc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXJ0aWNsZTFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhmcmllbmRzQ29udGFpbmVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VkUmVzcG9uc2UuZm9yRWFjaChyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NhbGwgdGhlIGZ1bmN0aW9uIHRoYXQgYnVpbGRzIERPTSBlbGVtZW50IGZvciBzdG9yeSBhbmQgcG9zdHMgdG8gRE9NLiAgQmUgc3VyZSB0aGF0IGZ1bmN0aW9uIGluY2x1ZGVzIGRpc3BsYXlpbmcgYSB1c2VyTmFtZSB0byBkaW5zdGluZ3Vpc2ggdXNlcidzIHN0b3JpZXMgZnJvbSBmcmllbmRzJyBzdG9yaWVzXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyaWVuZHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOlwic2VjdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3M6IGBuZXdzQXJ0aWNsZUNvbnRhaW5lci0tJHtyZXNwb25zZS5pZH1gXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudFNhdmVkU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5uZXdzQXJ0aWNsZUNvbnRhaW5lci0tJHtyZXNwb25zZS5pZH1gKVxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50U2F2ZWRTZWN0aW9uLmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiaDNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBgJHtyZXNwb25zZS50aXRsZX1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzOiBcIm5ld3NUaXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRTYXZlZFNlY3Rpb24uYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogcmVzcG9uc2UudXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzOiBcIm5ld3NVUkxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOmAke3Jlc3BvbnNlLnVybH1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogXCJibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBjb25zdCBkZWxCdXRvbiA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgY29udGVudDogXCJBRElPU1wiLFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBpZDogYG5ld3NEZWxldGVCdXR0b24tLSR7cmVzcG9uc2UuaWR9YCxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gICAgIH0pXG4gICAgICAgICAgICAgICAgLy8gLy9jcmVhdGluZyBhIGJ1dHRvbiBhbmQgcG9pbnRpbmcgYXQgdGhlIGFydGljbGUgdG8gZGVsZXRlLiBBdHRhY2hlZCBldmVudCBsaXN0bmVyLlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgcGFyZW50U2F2ZWRTZWN0aW9uLmFwcGVuZENoaWxkKGRlbEJ1dG9uKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGRlbEJ1dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuZXdzTGlzdGVuZXIuZGVsZXRlQnV0dG9uTGlzdGVuZXIpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgXG5cblxuICAgIHNhdmVkTmV3c0VsZW1lbnRzQ3JlYXRvcihzYXZlQnV0dG9uKXtcbi8vQ3JlYXRlcyB0aGUgaGVhZGVyIGZvciB0aGUgc2F2ZWQgbmV3cyBhcnRpY2xlcy5cbiAgICAgXG4gICAgICAgIGNvbnN0IG1haW5TYXZlZENvbnRhaW5lciA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiYXJ0aWNsZVwiLCBjc3NDbGFzczogXCJhcnRpY2xlMVwifSlcbiAgICAgICAgbmV3c0NvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluU2F2ZWRDb250YWluZXIpO1xuICAgICAgICBjb25zdCBzYXZlZEhlYWRlciA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGU6IFwiaDFcIiwgY29udGVudDogXCJTYXZlZCBOZXdzXCJ9KTtcbiAgICAgICAgbWFpblNhdmVkQ29udGFpbmVyLmFwcGVuZENoaWxkKHNhdmVkSGVhZGVyKTtcbiAgICAgICAgY29uc3Qgc2F2ZVJlZiA9IHNhdmVCdXR0b247XG4gICAgICAgIFxuLy9jcmVhdGVzIHRoZSBvYmplY3QgdGhhdCBpcyBuZWVkZWQgdG8gdXNlIHRoZSBjcmVhdGVEb21FbGVtZW50IEZhY3RvcnkuXG4gICAgICAgICAgICBsZXQgbmV3c0NyZWF0b3JLZXkgPSB7XG4gICAgICAgICAgICBcImRhdGFTZXRcIiA6IFwibmV3c0l0ZW1zXCIsXG4gICAgICAgICAgICBcImZldGNoVHlwZVwiIDogXCJHRVRcIixcbiAgICAgICAgICAgIFwiZW1iZWRJdGVtXCIgOiBgP19lbWJlZD0ke3NhdmVSZWZ9YFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG5cbiAgICAvL01ha2VzIHRoZSBjYWxsIHRvIHRoZSBkYXRhIGZhY3RvcnkgdG8gZmV0Y2gvZ2V0IGRhdGEgdG8gcHV0IGluIHRoZSBvYmplY3QuXG4gICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEobmV3c0NyZWF0b3JLZXkpXG4gICAgLnRoZW4oZGJHcmFicyA9PiB7XG4gICAgLy8gY29uc3QgYXJ0aWNsZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3c1RpdGxlXCIpO1xuICAgIC8vIGNvbnNvbGUubG9nKGFydGljbGVCdXR0b24pO1xuICAgIGRiR3JhYnMuZm9yRWFjaChkYkdyYWIgPT5cbiAgICB7ICAgXG4gICAgICAgIG1haW5TYXZlZENvbnRhaW5lci5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICBlbGVtZW50VHlwZTpcInNlY3Rpb25cIixcbiAgICAgICAgY3NzQ2xhc3M6IGBuZXdzQXJ0aWNsZUNvbnRhaW5lci0tJHtkYkdyYWIuaWR9YFxuICAgIH0pKVxuICAgICAgICBjb25zdCBwYXJlbnRTYXZlZFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubmV3c0FydGljbGVDb250YWluZXItLSR7ZGJHcmFiLmlkfWApXG4gICAgICAgIHBhcmVudFNhdmVkU2VjdGlvbi5hcHBlbmRDaGlsZChkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiaDNcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IGAke2RiR3JhYi50aXRsZX1gLFxuICAgICAgICAgICAgY3NzQ2xhc3M6IFwibmV3c1RpdGxlXCJcbiAgICB9KSlcbiAgICBwYXJlbnRTYXZlZFNlY3Rpb24uYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgZWxlbWVudFR5cGU6IFwiYVwiLFxuICAgICAgICBjb250ZW50OiBkYkdyYWIudXJsLFxuICAgICAgICBjc3NDbGFzczogXCJuZXdzVVJMXCIsXG4gICAgICAgIGF0dHJpYnV0ZXM6e1xuICAgICAgICBocmVmOmAke2RiR3JhYi51cmx9YCxcbiAgICAgICAgdGFyZ2V0OiBcImJsYW5rXCJcbiAgICB9XG4gICAgICAgIH0pKVxuICAgICAgICBjb25zdCBkZWxCdXRvbiA9IGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICBlbGVtZW50VHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiQURJT1NcIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICAgIGlkOiBgbmV3c0RlbGV0ZUJ1dHRvbi0tJHtkYkdyYWIuaWR9YCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgIH0pXG4vL2NyZWF0aW5nIGEgYnV0dG9uIGFuZCBwb2ludGluZyBhdCB0aGUgYXJ0aWNsZSB0byBkZWxldGUuIEF0dGFjaGVkIGV2ZW50IGxpc3RuZXIuXG4gICAgICAgIHBhcmVudFNhdmVkU2VjdGlvbi5hcHBlbmRDaGlsZChkZWxCdXRvbik7XG4gICAgICAgIGRlbEJ1dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuZXdzTGlzdGVuZXIuZGVsZXRlQnV0dG9uTGlzdGVuZXIpO1xuICAgIH0pXG5cbiAgICBuZXdzLmdldFVzZXJGcmllbmRzTmV3cygpO1xuICAgICAgIFxuICAgIH0pXG4vL30pXG4gICAgfVxuICAgIH1cbmV4cG9ydCBkZWZhdWx0IG5ld3MiLCJpbXBvcnQgbm9tYWREYXRhIGZyb20gXCIuL25vbWFkRGF0YVwiO1xuaW1wb3J0IGRvbUNvbXBvbmVudHMgZnJvbSBcIi4vZG9tQ29tcG9uZW50c1wiO1xuaW1wb3J0IG5ld3MgZnJvbSBcIi4vbmV3c1wiO1xuXG5cblxuY29uc3Qgb3V0cHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvdXRwdXRcIilcbmNvbnN0IG5ld3NMaXN0ZW5lciA9IHtcblxuICAgIHNhdmVCdXR0b25MaXN0ZW5lcigpe1xuICAgICAgICAgICAgLy9UaGlzIGlzIGZ1bmN0aW9uaW5nIGFuZCB3cml0aW5nIHRvIEpTT04uIE5lZWQgdG8gYXR0YWNoIHRoaXMgdG8gdGhlIHNhdmUgYnV0dG9uLlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBzYXZlSUQgPSBldmVudC50YXJnZXQubmFtZTtcbiAgICAgICAgICAgIGxldCBhcnRpY2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGFydGljbGVfJHtzYXZlSUR9YClcbiAgICAgICAgICAgIGxldCBhcnRUaXRsZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oYGFydGljbGVfJHtzYXZlSUR9X3RpdGxlYCk7XG4gICAgICAgICAgICBsZXQgYXJ0RGVzY3JpcHRpb24gPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGBhcnRpY2xlXyR7c2F2ZUlEfV9kZXNjYCk7XG4gICAgICAgICAgICBsZXQgYXJ0aWNsZVVSTCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oYGFydGljbGVfJHtzYXZlSUR9X3VybGApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc29sZS5sb2coYXJ0aWNsZSlcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldCwgZXZlbnQuY3VycmVudFRhcmdldClcbiAgICAgICAgICAgIGNvbnN0IG5ld3NPYmplY3RQb3N0ID0ge1xuICAgICAgICAgICAgICAgICAgICBcImRhdGFTZXRcIiA6IFwibmV3c0l0ZW1zXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZmV0Y2hUeXBlXCIgOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRhQmFzZU9iamVjdFwiIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1c2VySWRcIjogTnVtYmVyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidXJsXCI6IGAke2FydGljbGVVUkx9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjogYCR7YXJ0VGl0bGV9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3lub3BzaXNcIjogYCR7YXJ0RGVzY3JpcHRpb259YFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzZXNzaW9uU3RvcmFnZSlcbiAgICAgICAgICAgIG5vbWFkRGF0YS5jb25uZWN0VG9EYXRhKG5ld3NPYmplY3RQb3N0KVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbilcbiAgICAgICAgICAgIC50aGVuIChzaGl0ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzaGl0KVxuICAgICAgICAgICAgICAgICQoXCIjb3V0cHV0XCIpLmVtcHR5KCk7XG4gICAgICAgICAgICAgICAgbmV3cy5nZXRBUElOZXdzKCk7XG4gICAgICAgICAgICAgICAgbmV3cy5zYXZlZE5ld3NFbGVtZW50c0NyZWF0b3IoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgLy8gfSlcbiAgICB9LFxuICAgIGRlbGV0ZUJ1dHRvbkxpc3RlbmVyKCl7XG4gICAgICAgIC8vVG8gZGVsZXRlIGZyb20gc2F2ZWQgbmV3cyBhcnRpY2xlcy4gXG4gICAgICAgIGNvbnN0IGRlbGV0ZUlEID0gZXZlbnQudGFyZ2V0LmlkLnNwbGl0KFwiLS1cIilbMV07XG4gICAgICAgIGNvbnNvbGUubG9nKGRlbGV0ZUlEKTtcbiAgICAgICAgbm9tYWREYXRhLmNvbm5lY3RUb0RhdGEoe1xuICAgICAgICAgICAgZGVsZXRlSWQ6IGRlbGV0ZUlELFxuICAgICAgICAgICAgZGF0YVNldDogXCJuZXdzSXRlbXNcIixcbiAgICAgICAgICAgIGZldGNoVHlwZTogXCJERUxFVEVcIixcbiAgICAgICAgICAgIC8vIGRhdGFCYXNlT2JqZWN0OiB7XG4gICAgICAgICAgICAvLyAgICAgdXNlcklkOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKCAoKSA9PiB7XG4gICAgICAgICQoXCIuYXJ0aWNsZTFcIikuZW1wdHkoKTtcbiAgICAgICAgbmV3cy5zYXZlZE5ld3NFbGVtZW50c0NyZWF0b3IoKTtcbiAgICAgICAgIH0pXG4gICAgfSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3c0xpc3RlbmVyIiwiY29uc3Qgbm9tYWREYXRhID0ge1xuXG4gICAgY29ubmVjdFRvRGF0YShmZXRjaE9iamVjdCkge1xuXG4gICAgICAgIGxldCBkYXRhU2V0ID0gZmV0Y2hPYmplY3QuZGF0YVNldDtcbiAgICAgICAgbGV0IGVtYmVkSXRlbSA9IGZldGNoT2JqZWN0LmVtYmVkSXRlbTtcbiAgICAgICAgbGV0IGZldGNoVHlwZSA9IGZldGNoT2JqZWN0LmZldGNoVHlwZTtcbiAgICAgICAgbGV0IGRhdGFCYXNlT2JqZWN0ID0gZmV0Y2hPYmplY3QuZGF0YUJhc2VPYmplY3Q7XG4gICAgICAgIGxldCBwdXRJZCA9IGZldGNoT2JqZWN0LnB1dElkO1xuICAgICAgICBsZXQgZGVsZXRlSWQgPSBmZXRjaE9iamVjdC5kZWxldGVJZDtcblxuICAgICAgICBpZiAoZmV0Y2hUeXBlID09IFwiR0VUXCIpIHtcbiAgICAgICAgICAgIFxuICAgICAgICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC8ke2RhdGFTZXR9JHtlbWJlZEl0ZW19YClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkgLy8gcGFyc2VzIHJlc3BvbnNlIHRvIEpTT05cblxuICAgICAgICB9IGVsc2UgaWYgKGZldGNoVHlwZSA9PT0gXCJQT1NUXCIpe1xuXG4gICAgICAgIC8vIERlZmF1bHQgb3B0aW9ucyBhcmUgbWFya2VkIHdpdGggKlxuICAgICAgICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC8ke2RhdGFTZXR9YCwge1xuICAgICAgICAgICAgbWV0aG9kOiBgJHtmZXRjaFR5cGV9YCwgLy8gKkdFVCwgUE9TVCwgUFVULCBERUxFVEUsIGV0Yy5cbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcbiAgICAgICAgICAgICAgICAvLyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIHJlZmVycmVyOiBcIm5vLXJlZmVycmVyXCIsIC8vIG5vLXJlZmVycmVyLCAqY2xpZW50XG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhQmFzZU9iamVjdCksIC8vIGJvZHkgZGF0YSB0eXBlIG11c3QgbWF0Y2ggXCJDb250ZW50LVR5cGVcIiBoZWFkZXJcbiAgICAgICAgfSlcblxuICAgICAgICB9IGVsc2UgaWYoZmV0Y2hUeXBlID09PSBcIlBVVFwiKXtcbiAgICAgICAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODgvJHtkYXRhU2V0fS8ke3B1dElkfWAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogYCR7ZmV0Y2hUeXBlfWAsIC8vICpHRVQsIFBPU1QsIFBVVCwgREVMRVRFLCBldGMuXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXG4gICAgICAgICAgICAgICAgLy8gXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyByZWZlcnJlcjogXCJuby1yZWZlcnJlclwiLCAvLyBuby1yZWZlcnJlciwgKmNsaWVudFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YUJhc2VPYmplY3QpLCAvLyBib2R5IGRhdGEgdHlwZSBtdXN0IG1hdGNoIFwiQ29udGVudC1UeXBlXCIgaGVhZGVyXG4gICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSBpZiAoZmV0Y2hUeXBlID09PSBcIkRFTEVURVwiKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDg4LyR7ZGF0YVNldH0vJHtkZWxldGVJZH1gLCB7XG4gICAgICAgICAgICBtZXRob2Q6IGAke2ZldGNoVHlwZX1gLCAvLyAqR0VULCBQT1NULCBQVVQsIERFTEVURSwgZXRjLlxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxuICAgICAgICAgICAgICAgIC8vIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gcmVmZXJyZXI6IFwibm8tcmVmZXJyZXJcIiwgLy8gbm8tcmVmZXJyZXIsICpjbGllbnRcbiAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nIChcIllPVSBTQ1JFV0VEIElUIFVQXCIpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5vbWFkRGF0YSJdfQ==
