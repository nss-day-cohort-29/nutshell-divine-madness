import friends from "./friends"
import nomadData from "./nomadData";

const friendsEventsListener = {
  friendsDeleteFriend () {
    const friendToDelete = (event.target.classList.value).split("-")[2];
    let userId = sessionStorage.getItem('userId');
    let currentUser = userId;
    console.log(friendToDelete, currentUser);
    let finalNumberSendForDelete = 0

    nomadData.connectToData({
      "dataSet" : "friends",
      "fetchType" : "GET",
      "dataBaseObject" : "",
      "embedItem" : "?_embed=friends"
    })
    .then(destroyFriendsHeart => {
      destroyFriendsHeart.forEach(goodbyeFriend => {
        console.log(goodbyeFriend.userId, Number(currentUser))
        if (goodbyeFriend.otherFriendId === Number(friendToDelete) && goodbyeFriend.userId === Number(currentUser)) {
            console.log("PeaceOut",goodbyeFriend.id);
            finalNumberSendForDelete = goodbyeFriend.id;

        }
      })
      let goodByeSearchResults = document.getElementById(`friend-${friendToDelete}`);
      goodByeSearchResults.parentNode.removeChild(goodByeSearchResults);

      console.log(finalNumberSendForDelete)
      nomadData.connectToData({
        "deleteId" : finalNumberSendForDelete,
        "dataSet" : "friends",
        "fetchType" : "DELETE",
        "dataBaseObject" : {
          "userId": sessionStorage.getItem("userId")
        }
      })
    })
  },
  friendsAddFriend () {
    let userId = sessionStorage.getItem('userId');
    let currentUser = Number(userId);


    const friendToBeAdded = (event.target.id).split("-")[3];
    console.log(`user${currentUser}`,`Adding Friend${friendToBeAdded}`)

    let goodByeNonFriend = document.getElementById(`potentialFriend-${friendToBeAdded}`);
    goodByeNonFriend.parentNode.removeChild(goodByeNonFriend);
    alert(`${event.target.previousSibling.innerText} is now your friend!`);

    nomadData.connectToData({
      "dataSet" : "friends",
      "fetchType" : "POST",
      "dataBaseObject" : {
        "userId": currentUser,
        "otherFriendId": Number(friendToBeAdded),
      }
    })
  },
  shiz () {
    const friendToBeAdded = event.target.attributes.name.value;
    const friendToBeAddedHasAName = event.target.textContent.split(":")[0]
    let friendsIHave = []
    let userId = sessionStorage.getItem('userId');
    let currentUser = Number(userId);
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
      let please = friends.friendSortFromMessagesSection(friendsIHave, friendToBeAdded, friendToBeAddedHasAName)

        // this.showUserPotentialFriends(friendsIHave)
    })
  },
  closeMessageModal() {
    let userId = sessionStorage.getItem('userId');
    let currentUser = Number(userId);

    if (event.target.id === "dontFriend") {
      let goodByeSearchResults = document.getElementById("modal-container");
      goodByeSearchResults.parentNode.removeChild(goodByeSearchResults);
    } else if (event.target.id === "friendItUp") {
      let goodByeSearchResults = document.getElementById("modal-container");
      goodByeSearchResults.parentNode.removeChild(goodByeSearchResults);
      let friendTobe = event.target.attributes.name.value;
      console.log(friendTobe)
        nomadData.connectToData({
          "dataSet" : "friends",
          "fetchType" : "POST",
          "dataBaseObject" : {
            "userId": currentUser,
            "otherFriendId": Number(friendTobe),
          }
      })

    }
  },
  searchInputMagic (userInput) {
    // console.log(userInput)
    nomadData.connectToData({
      "dataSet" : "users",
      "fetchType" : "GET",
      "dataBaseObject" : "",
      "embedItem" : "?_embed=users"
    })
    .then(users => {
      const foundUsers = users.find(user => user.userName.includes(userInput)
      );
      friends.searchResultDisplayed(foundUsers)
    })
  }
}

export default friendsEventsListener