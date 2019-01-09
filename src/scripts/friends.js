import nomadData from "./nomadData"

const friends = {

  buildFriendPage () {
// PULL FROM FRIENDS JSON-------------------------
    let friendIntersectionTable = {
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
  })
})
// PULL FROM USERS JSON -----------------------
    let userInfo = {
      "dataSet" : "users",
      "fetchType" : "GET",
      "dataBaseObject" : "",
      "embedItem" : "?_embed=events"
    }
    nomadData.connectToData(userInfo)
    .then(fromUserData => {
      console.log(fromUserData)
      fromUserData.forEach(userData => {
        // console.log(userData)
      })
    })
    

  
  }
}

export default friends