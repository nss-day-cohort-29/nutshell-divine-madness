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
            console.log("PeaceOut",goodbyeFriend.id)
        }
      })
    })
    
  // nomadData.connectToData({
  //   "deleteId" : 2,
  //   "dataSet" : "friends",
  //   "fetchType" : "DELETE",
  //   "dataBaseObject" : {
  //     "userId": sessionStorage.getItem("userId")
  //   }
  // })
  },
}

export default friendsEventsListener