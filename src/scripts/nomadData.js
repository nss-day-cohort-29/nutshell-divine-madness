const nomadData = {

    connectToData(fetchObject) {

      let dataSet = fetchObject.dataSet;
      let embedItem = fetchObject.embedItem;
      let fetchType = fetchObject.fetchType;
      let dataBaseObject = fetchObject.dataBaseObject;
      let putId = fetchObject.putId;

        if (fetchType == "GET") {

        return fetch(`http://localhost:8088/${dataSet}${embedItem}`)
            .then(response => response.json()) // parses response to JSON

        } else if (fetchType === "POST"){

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

        } else if(fetchType === "PUT"){
        return fetch(`http://localhost:8088/${dataSet}/${putId}`, {
            method: `${fetchType}`, // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            // referrer: "no-referrer", // no-referrer, *client
            body: JSON.stringify(dataBaseObject), // body data type must match "Content-Type" header
        })
        } else {
            console.log ("YOU SCREWED IT UP")
        }
    }
  }

  export default nomadData