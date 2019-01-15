import dashBoard from "./dashboard"
import eventListeners from "./eventListeners";
// import events from "./events";
// import nomadData from "./nomadData";
// import nomadData from "./nomadData";
// import friends from "./friends";
import news from "./news"
import newsListener from "./newsListener";
// import messages from "./messages";
// import domComponents from "./domComponents";

//BUILDS NAIGATIONBAR//
// domComponents.createNavBar()
dashBoard.buildLoginForm()
$("modalButton").click(eventListeners.modalDisplayAnimation)

// //NEWS SECTION
// news.getAPINews();
// news.savedNewsElementsCreator();


// news.newsElementCreator();
// news.newsElementCreator();

