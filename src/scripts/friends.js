import nomadData from "./nomadData"
import domComponents from "./domComponents";
import friendsEventsListener from "./friendsEventsListener";

const friends = {


  defineCurrentUsersFriends () {
    $("#output").empty()
    const currentUser = 1;
    let userId = sessionStorage.getItem('userId');
    // let currentUser = Number(userId);
    console.log(currentUser, userId)
    let friendHolder = [];
// PULL FROM FRIENDS JSON-------------------------

nomadData.connectToData({
"dataSet" : "friends",
"fetchType" : "GET",
"dataBaseObject" : "",
"embedItem" : "?_embed=events"})
.then(fromFriends => {
  // console.log(fromFriends)
  fromFriends.forEach(friendData => {
    // console.log(friendData)
    if (friendData.userId === currentUser) {
      friendHolder.push(friendData.otherFriendId)
    }
  })
  friendHolder.forEach(officialFriend => {
    this.loadCurrentUsersFriends(officialFriend)
  })
})
},
loadCurrentUsersFriends (friend) {
  // PULL FROM USERS JSON -----------------------
  // console.log(friend)
      const targetContainer = document.getElementById("output")
      targetContainer.appendChild(domComponents.createDomElement({
        elementType: "section",
        attributes: {
          class: "friend-container",
          id: `friend-${friend}`
        }
      }))
      const friendContainer = document.getElementById(`friend-${friend}`)


      let friendDomBuilder = [];
      nomadData.connectToData({
      "dataSet" : "users",
      "fetchType" : "GET",
      "dataBaseObject" : "",
      "embedItem" : "?_embed=events"})
      .then(fromUserData => {
        // console.log(fromUserData);
        fromUserData.forEach(userInfo => {
          // console.log(friend, userInfo.id)
          if (userInfo.id === friend) {
            // console.log(userInfo.userName);
            const friendIdentifier = {
              elementType: "h2",
              content: userInfo.userName,
            }
            friendDomBuilder.push(friendIdentifier)
            // PULL FROM EVENTS JSON ------
            nomadData.connectToData({
                "dataSet" : "events",
            "fetchType" : "GET",
            "dataBaseObject" : "",
            "embedItem" : "?_embed=events"})
            .then(events => {
              events.forEach(event => {
                if (event.userId === friend) {
                  // console.log(event.eventName);
                  const eventHolder = {
                    elementType: "p",
                    content: `Your fellow nomads upcoming event: ${event.eventName} on ${event.eventDate}`,
                    attributes: {
                      id: `event-${event.id}`,
                    }
                  }
                  friendDomBuilder.push(eventHolder)
                }
              })
            })
            // PULL FROM NEWSITEMS JSON ------
            nomadData.connectToData({
            "dataSet" : "newsitems",
            "fetchType" : "GET",
            "dataBaseObject" : "",
            "embedItem" : "?_embed=newsitems"})
            .then(newsShiz => {
              // console.log(newsShiz)
              newsShiz.forEach(userSpecificArticles => {
                if (userSpecificArticles.userId === friend) {
                  // console.log(userSpecificArticles.title)
                  const articleHolder = {
                    elementType: "p",
                    content: userSpecificArticles.title,
                    attributes: {
                      id: `article-${userSpecificArticles.id}`,
                    }
                  }
                  friendDomBuilder.push(articleHolder)
                }
              })
              // console.log(friendDomBuilder)
              friendDomBuilder.forEach(object => {
                // console.log(object);
                friendContainer.appendChild(domComponents.createDomElement(object))
              })
              const deleteFriend = document.createElement("button")
              deleteFriend.classList.add(`delete-friend-${friend}`)
              deleteFriend.setAttribute("type", "button")
              deleteFriend.textContent = "DELETE";
              friendContainer.appendChild(deleteFriend);
              deleteFriend.addEventListener("click", () => {
                friendsEventsListener.friendsDeleteFriend()
              })
            })
          }
        })
      })

  },
  initializePotentialFriends () {
    let userId = sessionStorage.getItem("userId");
    let currentUser = Number(userId);
    // console.log("friends Page user id is-",currentUser);

    const targetContainer = document.getElementById("output");
    const findNewFriendContainer = document.createElement("section");
    let friendsIHave = [];
    findNewFriendContainer.setAttribute("id", "future-friends");
    targetContainer.appendChild(findNewFriendContainer);

    nomadData.connectToData({
      "dataSet" : "friends",
      "fetchType" : "GET",
      "dataBaseObject" : "",
      "embedItem" : "?_embed=friends"
    })
    .then(fromFriends => {
      // console.log(fromFriends)
      fromFriends.forEach(friendData => {
        // console.log(friendData)
        if (friendData.userId === currentUser) {
          friendsIHave.push(friendData.otherFriendId)
        }
      })
      // console.log(friendsIHave)

        this.showUserPotentialFriends(friendsIHave)
    })
  },
  showUserPotentialFriends (friend) {
    let userId = sessionStorage.getItem("userId");
    let currentUser = Number(userId);
    // console.log(friend)
    let allTheUsers = []
    friend.push(currentUser)
    nomadData.connectToData({
      "dataSet" : "users",
      "fetchType" : "GET",
      "dataBaseObject" : "",
      "embedItem" : "?_embed=users"
    })
    .then(allUsers => {
      allUsers.forEach(user => {
        // console.log(user.id)
        allTheUsers.push(user.id)
      })
      console.log("everyone",allTheUsers, "user and friends",friend)
      let notCurrentFriend = this.differenceOf2Arrays(allTheUsers, friend)
      notCurrentFriend.forEach(noFriendOfMine => {
        this.printPotentialFriendsToBrowser(noFriendOfMine)

      })
    })
  },
   differenceOf2Arrays (array1, array2) {
    var temp = [];
    array1 = array1.toString().split(",").map(Number);
    array2 = array2.toString().split(",").map(Number);
    
    for (var i in array1) {
    if(array2.indexOf(array1[i]) === -1) temp.push(array1[i]);
    }
    for(i in array2) {
    if(array1.indexOf(array2[i]) === -1) temp.push(array2[i]);
    }
    return temp.sort((a,b) => a-b);
    },
    printPotentialFriendsToBrowser (notAFriend) {
      // console.log(notAFriend)
      const targetSectionContainer = document.getElementById("future-friends");
      targetSectionContainer.appendChild(domComponents.createDomElement({
        elementType: "div",
        attributes: {
          id: `potentialFriend-${notAFriend}`
        }
      }))

      nomadData.connectToData({
        "dataSet" : "users",
        "fetchType" : "GET",
        "dataBaseObject" : "",
        "embedItem" : "?_embed=users"
      })
      .then(usersInfo => {
        usersInfo.forEach(user => {
          if (user.id === notAFriend) {
            console.log(user.id, "is no friend")
            const potentialFriendContainer = document.getElementById(`potentialFriend-${notAFriend}`)
            potentialFriendContainer.appendChild(domComponents.createDomElement({
              elementType: "h2",
              content: user.userName,
              cssClass: `potential-friend-${user.id}`
            }))
            potentialFriendContainer.appendChild(domComponents.createDomElement({
              elementType: "button",
              content: "Add Friend",
              attributes: {
                id: `add-friend-button-${user.id}`,
                type: "button"
              }
            }))
            const forAddButton = document.getElementById(`add-friend-button-${user.id}`);
            forAddButton.addEventListener("click", () => {
              friendsEventsListener.friendsAddFriend()
            })
          }
        })
      })
      // console.log(notAFriend)
    },
    friendSortFromMessagesSection (arrayOfFriends, friendToAdd, friendToAddName) {
      let userId = sessionStorage.getItem('userId');
      let currentUser = Number(userId);
      arrayOfFriends.push(currentUser)
      let arrayOfUsers = []
      nomadData.connectToData({
        "dataSet" : "users",
        "fetchType" : "GET",
        "dataBaseObject" : "",
        "embedItem" : "?_embed=events"})
        .then(users => {
          users.forEach(user => {
            arrayOfUsers.push(user.id)
          })
          let notFriendsList = this.compareMessageFriendArrays(arrayOfUsers, arrayOfFriends)
          this.messengerAddfriendFinale(notFriendsList, friendToAdd, friendToAddName)
        })
    },
    compareMessageFriendArrays (array1, array2) {
      var temp = [];
      array1 = array1.toString().split(',').map(Number);
      array2 = array2.toString().split(',').map(Number);

      for (var i in array1) {
      if(array2.indexOf(array1[i]) === -1) temp.push(array1[i]);
      }
      for(i in array2) {
      if(array1.indexOf(array2[i]) === -1) temp.push(array2[i]);
      }
      return temp.sort((a,b) => a-b);
    },
    messengerAddfriendFinale (notfriends, wantedFriend, friendToAddName) {
      console.log(notfriends, Number(wantedFriend))
      const finalFriend = notfriends.filter(friendsThatArent => friendsThatArent === Number(wantedFriend))
      // console.log(finalFriend[0], Number(wantedFriend))
      if (finalFriend[0] === Number(wantedFriend)) {
        if (friendToAddName === "modal") {
          friendsEventsListener.searchBarAddFriendToJson(finalFriend)
        } else {
          this.modalQuestionaireOfFriendshipValidity(wantedFriend,friendToAddName)
        }// alert(`You've added a fellow Nomad ${friendToAddName} your friend list`)
      } else {
        alert("Uh.... You can't friend there (it's you or someone who's already a friend).")
      }
    },
    modalQuestionaireOfFriendshipValidity (wantedFriend, friendToAddName) {

      document.getElementById("output").appendChild(domComponents.createDomElement({
        elementType: "section",
        attributes: {
          id: "modal-container"
        }
      }))
      document.getElementById("modal-container").appendChild(domComponents.createDomElement({
        elementType: "div",
        attributes: {
          id: "friends__backdrop"
        }
      }));
      document.getElementById("modal-container").appendChild(domComponents.createDomElement({
        elementType: "div",
        attributes: {
          id: "friends__modal"
        }
      }))
      const modalParentTarget = document.getElementById("friends__modal");
      modalParentTarget.appendChild(domComponents.createDomElement({
        elementType: "h1",
        content: `You sure you want ${friendToAddName} as a friend?`,
        attributes: {
          id: "friends__content"
        }
      }))
      modalParentTarget.appendChild(domComponents.createDomElement({
        elementType: "p",
        content: "I mean really....",
        attributes: {
          href: "#",
          id: "friends__close"
        }
      }))
      modalParentTarget.appendChild(domComponents.createDomElement({
        elementType: "button",
        content: "Don't Friend",
        attributes: {
          id: "dontFriend",
          type: "button"
        }
      }))
      modalParentTarget.appendChild(domComponents.createDomElement({
        elementType: "button",
        content: `Yes, make ${friendToAddName} a Friend`,
        attributes: {
          id: "friendItUp",
          name: wantedFriend,
          type: "button"
        }
      }))
      document.getElementById("dontFriend").addEventListener("click", () => {friendsEventsListener.closeMessageModal()
      })
      document.getElementById("friendItUp").addEventListener("click", () => {
        friendsEventsListener.closeMessageModal()
      })
      this.openFriendModal()
    },
    openFriendModal () {
      let backdrop = document.getElementById("friends__backdrop");
      let modal = document.getElementById("friends__modal");
      backdrop.style.display = "block";
      modal.style.display = "block";
    },
    buildFriendSearchBar () {
      document.getElementById("output").appendChild(domComponents.createDomElement({
        elementType: "div",
        attributes: {
          id: "friend-search-box"
        }
      }))
      document.getElementById("friend-search-box").appendChild(domComponents.createDomElement({
        elementType: "input",
        attributes: {
          id: "friend-search-input",
          class: "search-txt",
          type: "text",
          name: "",
          placeholder: "Search For Friends"
        }
      }))
      document.getElementById("friend-search-box").appendChild(domComponents.createDomElement({
        elementType: "a",
        attributes: {
          class: "friend-search-btn",
          href: "#",
          id: "friend-icon-anchor"
        }
      }))
      document.getElementById("friend-icon-anchor").appendChild(domComponents.createDomElement({
        elementType: "i",
        cssClass: "fas"
      }))
      let searchIcon = document.querySelector(".fas");
      searchIcon.classList.add("fa-search");

      const usersSearchFriendInputEnter = document.getElementById("friend-search-input");
      usersSearchFriendInputEnter.addEventListener("keypress", keyPressEvent => {
        // console.log(event.key)
        if (keyPressEvent.charCode === 13) {
          let userInputEnter = keyPressEvent.target.value;

          friendsEventsListener.searchInputMagic(userInputEnter);
          usersSearchFriendInputEnter.value = "";

        }
      })


      const usersSearchFriendInputClick = document.getElementById("friend-icon-anchor");
      usersSearchFriendInputClick.addEventListener("click", () => {
        let userInputClick = usersSearchFriendInputEnter.value
        friendsEventsListener.searchInputMagic(userInputClick);
        usersSearchFriendInputEnter.value = "";

      })
    },
    searchResultDisplayed (friendSearchResultDisplayed) {
      console.log("yo")
      document.getElementById("output").appendChild(domComponents.createDomElement({
        elementType: "section",
        attributes: {
          id: "modal-container"
        }
      }))
      document.getElementById("modal-container").appendChild(domComponents.createDomElement({
        elementType: "div",
        attributes: {
          id: "friends__backdrop"
        }
      }));
      document.getElementById("modal-container").appendChild(domComponents.createDomElement({
        elementType: "div",
        attributes: {
          id: "friends__modal"
        }
      }))
      const modalParentTarget = document.getElementById("friends__modal");
      modalParentTarget.appendChild(domComponents.createDomElement({
        elementType: "h1",
        content: `Would you like to be friends with ${friendSearchResultDisplayed.userName}?`,
        attributes: {
          id: "friends__content"
        }
      }))
      modalParentTarget.appendChild(domComponents.createDomElement({
        elementType: "p",
        content: `I mean ${friendSearchResultDisplayed.userName} is pretty cool...`,
        attributes: {
          href: "#",
          id: "friends__close"
        }
      }))
      modalParentTarget.appendChild(domComponents.createDomElement({
        elementType: "button",
        content: "Don't Friend",
        attributes: {
          id: "dontFriend",
          type: "button"
        }
      }))
      modalParentTarget.appendChild(domComponents.createDomElement({
        elementType: "button",
        content: `Yes, make ${friendSearchResultDisplayed.userName} a Friend`,
        attributes: {
          id: "friendItUp-searchModal",
          type: "button"
        }
      }))

      document.getElementById("dontFriend").addEventListener("click", () => {friendsEventsListener.closeMessageModal()
      })
      document.getElementById("friendItUp-searchModal").addEventListener("click", () => {
        friendsEventsListener.searchBarFriending(friendSearchResultDisplayed.id)
      })

      this.openFriendModal()
    },
};

export default friends

// const tester = [
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