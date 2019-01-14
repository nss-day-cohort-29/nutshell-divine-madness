import events from "./events";

import nomadData from "./nomadData";
import friends from "./friends";
import news from "./news"
import messages from "./messages";
import dashBoard from "./dashboard"
// import domComponents from "./domComponents";
import eventListeners from "./eventListeners";

//BUILDS NAIGATIONBAR//
// domComponents.createNavBar()
dashBoard.buildLoginForm()
$("modalButton").click(eventListeners.modalDisplayAnimation)

//NEWS SECTION
// news.save();
// news.allSaved();
// news.getNews();


// news.newsElementCreator();
// news.newsElementCreator();

