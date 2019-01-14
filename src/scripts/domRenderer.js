// import events from "./events";
import messages from "./messages";
import friends from "./friends";
import nomadData from "./nomadData";
import news from "./news";
// import friendsEventsListener from "friendsEventsListener./s";
console.log("DomRenderer is working")
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
//NEWS SECTION
news.getAPINews();
//news.savedNewsElementsCreator();


// friends.defineCurrentUsersFriends();
// friends.initializePotentialFriends();

// messages.createMessageBoard();

function userLogin () {

    let userName = "Hernando";
    let password = "yomama";

    nomadData.connectToData({

        "dataSet" : "users",
        "fetchType" : "GET",
        "embedItem" : "?_embed=events"

    }).then(parsedUsers => {

        parsedUsers.forEach(user => {

            if (userName === user.userName && password === user.password) {

                sessionStorage.setItem('userId', user.id)
            }
        });
    })
    // let userId = sessionStorage.getItem('userId');
    // loadDashboard(userId)
    // console.log("UserId = ", sessionStorage.getItem('userId'))
}

userLogin();

// function loadDashboard (userId) {
//     console.log(`Thanks for passing the userId.  The userId is ${userId}`)
// }
