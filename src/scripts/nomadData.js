const nomadData = {
  connectToData({dataSet, fetchType, dataBaseObject}) {
    console.log("hello",data)
    // Default options are marked with *
      return fetch(`http://localhost:8088/${dataSet}`, {
          method: `${fetchType}`, // *GET, POST, PUT, DELETE, etc.
          headers: {
              "Content-Type": "application/json; charset=utf-8",
              // "Content-Type": "application/x-www-form-urlencoded",
          },
          // referrer: "no-referrer", // no-referrer, *client
          body: JSON.stringify(dataBaseObject), // body data type must match "Content-Type" header
      })
      .then(response => response.json()); // parses response to JSON
  }
}

export default nomadData