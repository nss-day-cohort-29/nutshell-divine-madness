// import events from "./events";
import nomadData from "./nomadData";
import news from "./news"
import messages from "./messages";
import tasks from "./tasks";

messages.createMessageBoard();
// tasks.createTaskTables();
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
    let userId = sessionStorage.getItem('userId');
    loadDashboard(userId)
    // console.log("UserId = ", sessionStorage.getItem('userId'))
}

userLogin();

function loadDashboard (userId) {
    console.log(`Thanks for passing the userId.  The userId is ${userId}`)
}
