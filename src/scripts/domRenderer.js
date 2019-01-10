// import events from "./events";

// import nomadData from "./nomadData";
import nomadData from "./nomadData";
import friends from "./friends";
import eventListeners from "./eventListeners";
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

// news.newsElementCreator();
news.newsElementCreator();

