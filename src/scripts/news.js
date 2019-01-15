import nomadData from "./nomadData";
import domComponents from "./domComponents";
import newsListener from "./newsListener";


const newsContainer = document.querySelector("#output")

const news = {
    getAPINews() {
        //$(".output").empty();
        //getAPINews will pull news from API then call createElement and append to output.
        //Create a header for incoming news.
        sessionStorage.setItem("userId", 1) //take me out when you're done testing........
        let articleCounter = 0;
        const newsHeader = domComponents.createDomElement({
            elementType: "h1",
            content: "Current News",
            cssClass: "newsAPIHeader"
        
        });
        newsContainer.appendChild(newsHeader);
        //pull the data from the api and display it to the dom.
        return fetch("https://newsapi.org/v2/everything?q=vanlife&from=2019-01-05&sortBy=publishedAt&apiKey=9f5c509fe90044dc95a8a6963573284f")
            .then(newsItems => newsItems.json())
            .then(displayData => {
                displayData.articles.forEach(dataGran => {
                    let artURL = dataGran.url;
                    let artTitle = dataGran.title;
                    let artDesc = dataGran.description;
                    let artImage = dataGran.urlToImage;
                    //counter used to give unique identifier for tagging and grabbing.
                    articleCounter++;

                    sessionStorage.setItem(`article_${articleCounter}_title`, `${artTitle}`);
                    sessionStorage.setItem(`article_${articleCounter}_url`, `${artURL}`);
                    sessionStorage.setItem(`article_${articleCounter}_desc`, `${artDesc}`);
                    sessionStorage.setItem(`article_${articleCounter}_image`, `${artImage}`)

                    //add section container for all articles.
                    newsHeader.appendChild(domComponents.createDomElement({
                            elementType: "section",
                            cssClass: `newsAPIContainer_${articleCounter}`,
                            attribute: {
                                id: "apiSectionGrab",
                                style: "color:white;text-align:center;font-size:20px;overflow:auto; border-radius: 12px;"
                            }
                        }))
                        //create fieldset for articles to be and then attach them to the sections above.
                    const parentAPISection = document.querySelector(`.newsAPIContainer_${articleCounter}`)
                    parentAPISection.appendChild(domComponents.createDomElement({
                            elementType: "fieldset",
                            content: dataGran.title,
                            cssClass: `apiData`,
                            attributes: {
                                id: `article_${articleCounter}`,
                                style: "color:white;text-align:center;font-size:20px;overflow:auto; border-radius: 12px;"
                            }
                        }))
                    parentAPISection.appendChild(domComponents.createDomElement({
                            elementType: "img",
                            content: dataGran.urlToImage,
                            cssClass: `apiImage`,
                            attributes: {
                                id: `apiImage_${articleCounter}`,
                                src: dataGran.urlToImage,
                                style: "width: 30%; height: 15%; border-radius: 12px;"
                            }
                        }))

                        //creating button in order to attach to individual articles.
                        
                    const saveApiButton = domComponents.createDomElement({
                            elementType: "button",
                            content: "Remember This",
                            cssClass: "newsSaveButton",
                            attributes: {
                                name: `${articleCounter}`,
                                style: "  border: 0; line-height:2; width:9%; background:rgb(81, 78, 78); color:rgb( 191, 162, 44);line-height: 2; border-radius: 12px;"
                            }
                        })
                        //Eventlistener to send current data to savefunction.
                    parentAPISection.appendChild(saveApiButton);
                    saveApiButton.addEventListener("click", newsListener.saveButtonListener)
                })
            })
    },
// method displays friends news.
    getUserFriendsNews() {
        //create array and call to get user data.
        const friendHolder = [];
        //console.log(sessionStorage.getItem("userId"))
        nomadData.connectToData({
                dataSet: "users",
                fetchType: "GET",
                embedItem: "?_embed=friends"

            })
            .then(parsedResponse => {

                //for loop to run through array of user info.
                for (let i = 0; i < parsedResponse.length; i++) {
                    const response = parsedResponse[i];
                    // if statement to ccmpare response id to session id inorder to see if the news article is the users or friend.
                    if (response.id === Number(sessionStorage.getItem("userId"))) {
                        // if not the user then lop through array and push id's.
                        for (let j = 0; j < response.friends.length; j++) {
                            const friends = response.friends[j];

                            friendHolder.push(friends.otherFriendId);
                           
                        }
                        // once friendholder array is loaded loop through again to compare agains pulled dataItems that have been fetched.
                        friendHolder.forEach(friendId => {

                            nomadData.connectToData({

                                dataSet: "newsItems",
                                fetchType: "GET",
                                embedItem: `?userId=${friendId}`

                            }).then(parsedResponse => {

                                let friendsContainer = document.querySelector(".article1");
                               
                                parsedResponse.forEach(response => {
                                    //call the function that builds DOM element for story and posts to DOM.  Be sure that function includes displaying a userName to dinstinguish user's stories from friends' stories.
                                    friendsContainer.appendChild(domComponents.createDomElement({
                                        elementType: "section",
                                        cssClass: `newsArticleContainer--${response.id}`
                                    }))
                                    const parentSavedSection = document.querySelector(`.newsArticleContainer--${response.id}`)
                                    parentSavedSection.appendChild(domComponents.createDomElement({
                                        elementType: "h3",
                                        content: `${response.title}`,
                                        cssClass: "newsTitle"
                                    }))
                                    parentSavedSection.appendChild(domComponents.createDomElement({
                                            elementType: "a",
                                            content: response.url,
                                            cssClass: "newsURL",
                                            attributes: {
                                                href: `${response.url}`,
                                                target: "blank"
                                            }
                                        }))
                                });
                            });
                        });
                    }
                }
            })
    },



    savedNewsElementsCreator() {
        //Creates the header for the saved news articles.

        const mainSavedContainer = domComponents.createDomElement({
            elementType: "article",
            cssClass: "article1"
        })
        newsContainer.appendChild(mainSavedContainer);
        const savedHeader = domComponents.createDomElement({
            elementType: "h1",
            content: "Saved News"
        });
        mainSavedContainer.appendChild(savedHeader);
        const saveRef = "";

        //creates the object that is needed to use the createDomElement Factory.
        let newsCreatorKey = {
            "dataSet": "newsItems",
            "fetchType": "GET",
            "embedItem": `?_embed=${saveRef}`
        }


        //Makes the call to the data factory to fetch/get data to put in the object.
        nomadData.connectToData(newsCreatorKey)
            .then(dbGrabs => {
                // const articleButton = document.querySelector(".newsTitle");
                // console.log(articleButton);
                dbGrabs.forEach(dbGrab => {
                    mainSavedContainer.appendChild(domComponents.createDomElement({
                        elementType: "section",
                        cssClass: `newsArticleContainer--${dbGrab.id}`
                    }))
                    const parentSavedSection = document.querySelector(`.newsArticleContainer--${dbGrab.id}`)
                    parentSavedSection.appendChild(domComponents.createDomElement({
                        elementType: "h3",
                        content: `${dbGrab.title}`,
                        cssClass: "newsTitle"
                    }))
                    parentSavedSection.appendChild(domComponents.createDomElement({
                        elementType: "a",
                        content: dbGrab.url,
                        cssClass: "newsURL",
                        attributes: {
                            href: `${dbGrab.url}`,
                            target: "blank"
                        }
                    }))
                    const delButon = domComponents.createDomElement({
                            elementType: "button",
                            content: "ADIOS",
                            attributes: {
                                id: `newsDeleteButton--${dbGrab.id}`,
                            }

                        })
                        //creating a button and pointing at the article to delete. Attached event listner.
                    parentSavedSection.appendChild(delButon);
                    delButon.addEventListener("click", newsListener.deleteButtonListener);
                })

                news.getUserFriendsNews();

            })
            //})
    }
}
export default news