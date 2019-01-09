const domComponents = {
  createDomElement({ elementType, content = null, attributes = {} }) {
    const element = document.createElement(elementType);
    element.textContent = content;
    for (let key in attributes) {
      element.setAttribute(key, attributes[key]);
    }
    return element;
  },
  createNavBar(){
    let navHTML = ` 
      <nav>
        <ul>
          <li><a class = "active" href = "#">Articles</a></li>
          <li><a href = "#">Events</a></li>
          <li><a href = "#">Tasks</a></li>
          <li><a href = "#">Friends</a></li>
          <li><a href = "#">Messages</a></li>
          <li id = "logo" ><a href="#about">Nomads</a></li>
        </ul>
      </nav>
    `
    let navBarContainer = document.querySelector("#main-nav")
    navBarContainer.innerHTML = navHTML

    // let navUl = document.createElement("ul")
    // navBarContainer.appendChild(navUl)

    // let navBarItems = ["articles", "events", "tasks", "friends", "messages"]

    // navBarItems.forEach(items =>{
    //   let element = document.createElement("li")
    //   let elementPath = document.createElement("a")
    //   elementPath.setAttribute("href", "#")
    //   element.textContent = items
    //   // navUl.appendChild(element)
    //   element.appendChild(elementPath)
    //   navUl.appendChild(element)
    }
  }

export default domComponents