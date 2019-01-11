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
        "otherFriendId": friendToBeAdded,
      }
    })
  }
}

export default friendsEventsListener