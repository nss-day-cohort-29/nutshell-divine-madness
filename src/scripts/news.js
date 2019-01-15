import nomadData from "./nomadData";
import domComponents from "./domComponents";
import newsListener from "./newsListener";


const news = {

    getAPINews() {
        
        $("#output").empty();
        //getAPINews will pull news from API then call createElement and append to output.
        //Create a header for incoming news.
        sessionStorage.setItem("userId", 1) //take me out when you're done testing........
        let articleCounter = 0;
        
        const newsContainer = domComponents.createDomElement({
            elementType: "div",
            cssClass: "mainVein"
        })
    
        const targetValue = document.querySelector("#output");
        
        
        const newsHeader = domComponents.createDomElement({
            elementType: "h1",
            content: "Current News",
            cssClass: "newsAPIHeader"
            
        });
        newsContainer.appendChild(newsHeader);
        targetValue.appendChild(newsContainer);
        //pull the data from the api and display it to the dom.
        let currentArticlesDiv = domComponents.createDomElement({
            elementType : "div",
            cssClass : "currentArticlesDiv",
            attributes : {
                id : "currentArticlesDiv"
            }
        })
        console.log(currentArticlesDiv)
        return fetch("https://newsapi.org/v2/everything?q=vanlife&from=2019-01-05&sortBy=publishedAt&language=en&apiKey=9f5c509fe90044dc95a8a6963573284f")
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
                    const newsAPIArtContain = domComponents.createDomElement({
                        elementType: "article",
                        cssClass: "newsAPIArticleContainer",
                        // attribute: {
                        //     style: "height:95vh; overflow: scroll; color:white;text-align:center;font-size:20px;overflow:auto; border-radius: 12px;"
                        // }
                    })
                    
                    const articleContainer = domComponents.createDomElement({
                        elementType: "section",
                        cssClass: `newsAPIContainer_${articleCounter}`,
                        attribute: {
                            id: "apiSectionGrab",
                            style: "border-radius: 12px;"
                        }
                    })
                    newsAPIArtContain.appendChild(articleContainer)
                    currentArticlesDiv.appendChild(newsAPIArtContain);
                        //create fieldset for articles to be and then attach them to the sections above.
                    const parentAPISection = domComponents.createDomElement({
                            elementType: "fieldset",
                            content: dataGran.title,
                            cssClass: "apiData",
                            attributes: {
                                id: `article_${articleCounter}`,
                                style: "color:white;text-align:center;font-size:20px;overflow:auto; border-radius: 12px;"
                            }
                        })
                    parentAPISection.appendChild(domComponents.createDomElement({
                            elementType: "img",
                            content: dataGran.urlToImage,
                            cssClass: `apiImage`,
                            attributes: {
                                id: `apiImage_${articleCounter}`,
                                src: `${dataGran.urlToImage}`,
                               // style: "width: 30%; height: 15%; border-radius: 12px;"
                            }
                        }))
                        currentArticlesDiv.appendChild(parentAPISection);
                        //creating button in order to attach to individual articles.
                    const saveApiButton = domComponents.createDomElement({
                            elementType: "button",
                            content: "Remember This",
                            cssClass: "allButtons",
                            attributes: {
                                name: `${articleCounter}`,
                                //style: "  border: 0; line-height:2; width:9%; background:rgb(81, 78, 78); color:rgb( 191, 162, 44);line-height: 2; border-radius: 12px;"
                            }
                        })
                        //Eventlistener to send current data to savefunction.
                    parentAPISection.appendChild(saveApiButton);
                    saveApiButton.addEventListener("click", newsListener.saveButtonListener)
                })
                newsContainer.appendChild(currentArticlesDiv)
                news.savedNewsElementsCreator()
            })
    },
// method displays friends news.
    getUserFriendsNews() {
        //create array and call to get user data.
        const friendHolder = [];
        let friendsContainer = document.querySelector(".article1");
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

                                console.log(friendsContainer);
                               
                                parsedResponse.forEach(response => {
                                    //call the function that builds DOM element for story and posts to DOM.  Be sure that function includes displaying a userName to dinstinguish user's stories from friends' stories.
                                    const articleSectionFriend = domComponents.createDomElement({
                                        elementType: "section",
                                        cssClass: `newsArticleContainer--${response.id}`
                                    })
                                    
                                    const friendsHeader = domComponents.createDomElement ({
                                        elementType: "h3",
                                        content: `${response.title}`,
                                        cssClass: "newsTitle"
                                    })
                                    
                                    const newsURL = domComponents.createDomElement({
                                        elementType: "a",
                                        content: response.url,
                                        cssClass: "newsURL",
                                        attributes: {
                                            href: `${response.url}`,
                                            target: "blank"
                                        }
                                    })
                                    articleSectionFriend.appendChild(friendsHeader);
                                    articleSectionFriend.appendChild(newsURL);
                                    friendsContainer.appendChild(articleSectionFriend);
                                });
                            });
                        });
                    }
                }
            })
    },

    savedNewsElementsCreator() {
        //Creates the header for the saved news articles.
        let mainContainer = document.querySelector(".mainVein")
        const mainSavedContainer = domComponents.createDomElement({
            elementType: "article",
            cssClass: "article1",
            attribute:{
                style: "border-width: thin"
            }
        })
        mainContainer.appendChild(mainSavedContainer);
        const savedHeader = domComponents.createDomElement({
            elementType: "h1",
            content: "Saved News",
            cssClass: "savedHeader",
            attribute: {
                id: "savedHeader"
            }
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
                    const sectionSavedContainer = domComponents.createDomElement({
                        elementType: "section",
                        cssClass: `newsArticleContainer--${dbGrab.id}`
                    })
                    
                    const savedHeader = domComponents.createDomElement({
                        elementType: "h3",
                        content: `${dbGrab.title}`,
                        cssClass: "newsTitle"
                    })
                    const savedNewsURL = domComponents.createDomElement({
                        elementType: "a",
                        content: dbGrab.url,
                        cssClass: "newsURL",
                        attributes: {
                            href: `${dbGrab.url}`,
                            target: "blank"
                        }
                    })
                    const delButon = domComponents.createDomElement({
                        elementType: "button",
                        content: "ADIOS",
                        cssClass: "allButtons",
                        attributes: {
                            id: `newsDeleteButton--${dbGrab.id}`,
                        }
                        
                    })
                    //creating a button and pointing at the article to delete. Attached event listner.
                   
                    sectionSavedContainer.appendChild(savedHeader);
                    sectionSavedContainer.appendChild(savedNewsURL);
                    sectionSavedContainer.appendChild(delButon);
                    delButon.addEventListener("click", newsListener.deleteButtonListener);
                    mainSavedContainer.appendChild(sectionSavedContainer)
                    mainContainer.appendChild(mainSavedContainer)
                    

                })

                news.getUserFriendsNews();

            })
            //})
    }
}
export default news