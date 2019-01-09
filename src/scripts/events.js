// Author: Cole Bryant / Purpose:

import nomadData from "./nomadData";
import domComponents from "./domComponents";

const events = {
  getAllEvents() {
    const getFetchObject = {
      "dataSet": "events",
      "fetchType": "GET",
      "dataBaseObject": "",
      "embedItem": "?_embed=events"
    };

    nomadData.connectToData(getFetchObject)
    .then(parsedResponse => {
      let docuFrag = document.createDocumentFragment();
      let output = document.querySelector(".output");
      parsedResponse.forEach(event => {
        const eventItem = domComponents.createEventsElement(event);
        docuFrag.appendChild(eventItem);
      });
      output.appendChild(docuFrag);
    });
  },
  saveEvent() {
    nomadData.connectToData({})
    .then();
  }
};

events.getAllEvents();

export default events;