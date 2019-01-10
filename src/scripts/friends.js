import nomadData from "./nomadData"
import domComponents from "./domComponents";

const friends = {

  
  defineCurrentUsersFriends () {
    const currentUser = 1;
    let friendHolder = [];
// PULL FROM FRIENDS JSON-------------------------
    const friendIntersectionTable = {
    "dataSet" : "friends",
    "fetchType" : "GET",
    "dataBaseObject" : "",
    "embedItem" : "?_embed=events"
}
nomadData.connectToData(friendIntersectionTable)
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
      const userInfo = {
        "dataSet" : "users",
        "fetchType" : "GET",
        "dataBaseObject" : "",
        "embedItem" : "?_embed=events"
      }
      const userEvents = {
        "dataSet" : "events",
        "fetchType" : "GET",
        "dataBaseObject" : "",
        "embedItem" : "?_embed=events"
      }
      const usersSavedArticle = {
        "dataSet" : "newsitems",
        "fetchType" : "GET",
        "dataBaseObject" : "",
        "embedItem" : "?_embed=newsitems"
      }
      const targetContainer = document.getElementById("output")
      targetContainer.appendChild(domComponents.createDomElement({
        elementType: "section",
        attributes: {
          class: "friend-container",
          id: `friend-${friend}`
        }
      }))
      const friendContainer = document.getElementById(`friend-${friend}`)
      const deleteFriend = document.createElement("button")
      deleteFriend.classList.add(`delete-friend-${friend}`)
      deleteFriend.textContent = "DELETE";
      friendContainer.appendChild(deleteFriend);
      let friendDomBuilder = [];
      nomadData.connectToData(userInfo)
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
            nomadData.connectToData(userEvents)
            .then(events => {
              events.forEach(event => {
                if (event.userId === friend) {
                  // console.log(event.eventName);
                  const eventHolder = {
                    elementType: "p",
                    content: `Your fellow nomads upcoming event: ${event.eventName} on ${event.eventDate}`
                  }
                  friendDomBuilder.push(eventHolder)
                }
              })
            })
            // PULL FROM NEWSITEMS JSON ------
            nomadData.connectToData(usersSavedArticle)
            .then(newsShiz => {
              // console.log(newsShiz)
              newsShiz.forEach(userSpecificArticles => {
                if (userSpecificArticles.userId === friend) {
                  console.log(userSpecificArticles.title)
                  const articleHolder = {
                    elementType: "p",
                    content: userSpecificArticles.title
                  }
                  friendDomBuilder.push(articleHolder)
                }
              })
              console.log(friendDomBuilder)
              friendDomBuilder.forEach(object => {
                // console.log(object);
                friendContainer.appendChild(domComponents.createDomElement(object))
              })
            })
          }
        })
      })

  }
}

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