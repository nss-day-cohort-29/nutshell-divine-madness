// import events from "./events";
// import nomadData from "./nomadData";
import news from "./news"
import messages from "./messages";
import domComponents from "./domComponents";
import eventListeners from "./eventListeners";

//BUILDS NAIGATIONBAR//
// domComponents.createNavBar()
domComponents.buildLoginForm()
$("modalButton").click(eventListeners.modalDisplayAnimation)

//NEWS SECTION
// news.save();
// news.allSaved();
// news.getNews();
news.newsElementCreator();