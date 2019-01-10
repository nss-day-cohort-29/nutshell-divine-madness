import nomadData from "./nomadData"

const friends = {

  
  checkCurrentUsersFriends () {
    const currentUser = 4;
// PULL FROM FRIENDS JSON-------------------------
    const friendIntersectionTable = {
    "dataSet" : "friends",
    "fetchType" : "GET",
    "dataBaseObject" : "",
    "embedItem" : "?_embed=events"
}
nomadData.connectToData(friendIntersectionTable)
.then(fromFriends => {
  console.log(fromFriends)
  fromFriends.forEach(friendData => {
    // console.log(friendData)
    if (friendData.userId === currentUser) {
      // PULL FROM USERS JSON -----------------------
          const userInfo = {
            "dataSet" : "users",
            "fetchType" : "GET",
            "dataBaseObject" : "",
            "embedItem" : "?_embed=users"
          }
          nomadData.connectToData(userInfo)
          .then(fromUserData => {
            console.log(fromUserData[friendData.otherFriendId].userName)
          })
      
    }
  })
})
    

  
  }
}

export default friends