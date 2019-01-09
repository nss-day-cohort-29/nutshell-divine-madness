const domComponents = {
  createDomElement({ elementType, content = null, attributes = {} }) {
    const element = document.createElement(elementType);
    element.textContent = content;
    for (let key in attributes) {
      element.setAttribute(key, attributes[key]);
    }
    return element;
  },
  createEventsElement (eventObject) {
    const eventItem = this.createDomElement({elementType: "article", attributes: })
    const eventItem = document.createElement("article");
    eventItem.setAttribute("class", "eventItem");
    const eventHeader = document.createElement("h2");
    eventHeader.textContent = eventObject.eventName;
    const eventDateTime = document.createElement("p");
    eventDateTime.textContent = `At ${eventObject.eventTime} on ${eventObject.eventDate}`;
    const eventLocation = document.createElement("p");
    eventLocation.textContent = `Location: ${eventObject.eventLocation}`;
    const saveButton = document.createElement("button");
    saveButton.setAttribute("type", "button");
    saveButton.setAttribute("id", "saveEvent");
    saveButton.textContent = "Save";

    eventItem.appendChild(eventHeader);
    eventItem.appendChild(eventDateTime);
    eventItem.appendChild(eventLocation);
    eventItem.appendChild(saveButton);


    return eventItem;
  }
}

export default domComponents