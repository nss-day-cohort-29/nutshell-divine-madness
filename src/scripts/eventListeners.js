import dashboard from "./dashboard"
import domComponents from "./domComponents";
import nomadData from "./nomadData";
import events from "./events";
import messages from "./messages";
import friends from "./friends";
import news from "./news";
import tasks from "./tasks";
import newsListener from "./newsListener";

const eventListeners = {
    /*===============================================================================================================
    LOGIN FORM: user enters Username and Password. when User clicks login, the input field and NOMADS header disappear
    and the user will be displayed the "Dashboard" and the navigation bar. Upon login, sessionStorage is started. In the Console
    you will be able to see Who is logged in and what their userId is. ie. 1,2,3,4 etc.
    =================================================================================================================*/
    userLogin(){
        let logInVal = document.querySelector("#userNameVal").value
        let passwordVal = document.querySelector("#passwordVal").value
        //get to compare
        nomadData.connectToData({

        "dataSet" : "users",
        "fetchType" : "GET",
        "embedItem" : "?_embed=users"

    }).then(parsedUsers => {

        parsedUsers.forEach(user => {
              /*If login credentials match those in database.json. We want the user to be displayed their "dashboad"
              and navigation bar. So we need to set display to none and invoke the function - createNavBar()*/
            if(logInVal === user.userName && passwordVal === user.password) {
                    //hides NOMAD heading
                    $(".t-border").hide()
                    //hides the form
                    $(".form").hide()
                    //displays navigatin bar
                    dashboard.createNavBar()
                    //session storage

                    sessionStorage.setItem("userId", user.id)
                    let userId = sessionStorage.getItem("userId")
                    //console.log verifying that credentials match and user is logged in
                    console.log("logged in as" + " " + user.userName)
                    console.log("your user ID is: " + userId)

                nomadData.connectToData({
                    "dataSet" : "users",
                    "fetchType" : "GET",
                    "dataBaseObject" : "",
                    "embedItem" : "?_embed=users"
                })
                .then(users => {
                    users.forEach(user => {
                        if (user.id === Number(userId)) {
                            const targetContainer = document.getElementById("output")
                            targetContainer.appendChild(domComponents.createDomElement({
                                elementType: "div",
                                content: `welcome ${user.userName}`,
                                cssClass: "welcome-user"
                            }));
                        }
                    })
                })
                }
            })
        })
    },
    /*===============================================================================================================
    REGISTRATION FORM: When registering for an account the user will enter desired username, email, and password
    =================================================================================================================*/
    userRegistration(){
        let regUserName = document.querySelector("#regUserName").value
        let regEmail = document.querySelector("#regEmail").value
        let regPassword = document.querySelector("#regPassword").value
        // let regConfirmPassword = document.querySelector("#regUserName").value

        nomadData.connectToData({

                "dataSet" : "users",
                "fetchType" : "POST",
                "dataBaseObject" : {
                    "userName": regUserName,
                    "email": regEmail,
                    "password": regPassword
                }
            }).then(
            nomadData.connectToData({
                "dataSet" : "users",
                "fetchType" : "GET",
                "embedItem" : `?userName=${regUserName}`
            }).then(user =>{
                console.log(user)
                user.forEach( x =>{
                    sessionStorage.setItem("userId", x.id)

                //hides NOMAD heading
                $(".t-border").hide()
                //hides the form
                $(".form").hide()
                //displays navigatin bar
                dashboard.createNavBar()
                let userId = sessionStorage.getItem("userId")
                //console.log verifying that credentials match and user is logged in
                console.log("logged in as" + " " + x.userName)
                console.log("your user ID is: " + userId)
                })
            }))
        },
    /*===============================================================================================================
    MODAL: user will click the NOMAD MISSION button and a modal will pop up describing what the application is about
    and who it is tailored towards
    =================================================================================================================*/
    modalDisplayAnimation(){
        let modal = document.getElementById("nomadModal");

        // target modal to open it
        let btn = document.getElementById("modalButton");

        // Get the <span> element that closes the modal
        let span = document.getElementsByClassName("close")[0];
        // When the user clicks the button, open the modal
        btn.onclick = function() {
        modal.style.display = "block";
        }
        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
        modal.style.display = "none";
        }
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
        $(".message a").click(function(){
        $("form").animate({height: "toggle", opacity: "toggle"}, "slow")
        })
    },
    /*===============================================================================================================
    NAVBAR LI ELISTENERS: When user clicks an item in the NAVBAR the content associated with that tab will populate the DOM
    =================================================================================================================*/
    messagesNavLink(){
        messages.createMessageBoard()
        console.log("working")
        friends.buildFriendSearchBar()

    },
    eventsNavLink(){
            events.showEventForm()
            events.appendUserAndFriendEvents();
            //appendUserEvent
            console.log("events clicked")
    },
    friendsNavLink(){
        console.log("friends nav link clicked")
        friends.defineCurrentUsersFriends();
        friends.initializePotentialFriends();

    },
    newsNavLink(){
        //NEWS SECTION
        
        news.getAPINews();
        // news.savedNewsElementsCreator();
        console.log("news link clicked")
    },
    tasksNavLink(){
        tasks.createTaskTables()
        friends.buildFriendSearchBar()
    },
    nomadNavLink(){
        dashboard.buildLoginForm()
        $("nav").hide()
        sessionStorage.clear()
        console.log("signed out")
    },
    /*========================================================================================================
    END OF NAVIGATION EVENTLISTENERS
    =========================================================================================================*/

    friendsDeleteFriend () {
        console.log(event.target);

    }
};

export default eventListeners;
