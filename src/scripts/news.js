import nomadData from "./nomadData";
import domComponents from "./domComponents";
//pull from api then display to dom.
// create save button send saved articles to Json
// create button to pull all saved materials in json.
// delete method for articles
const news = {

    getNews(){
        //pull then send pulled data to dom
        return fetch("http://jsonplaceholder.typicode.com/posts/1")
            .then(newsItems => newsItems.json())
    },
    save() {
        //This is functioning and writing to JSON.
        this.getNews().then(post =>{
        const newsObject = {
                "dataSet" : "newsItems",
                "fetchType" : "POST",
                "dataBaseObject" : {
                    "userId": 1,
                    "url": `${post.title}`,
                    "title": `${post.body}`,
                    "synopsis": "blah blah blah"
                }
        }
        // console.log(testnewsObj);
        nomadData.connectToData(newsObject);
    })
    },

    allSaved(){
    // nomadData.connectToData(testnewsObj)
    },

    deleteDB(){


    },

    newsElementCreator(){
        $("#output").empty()
        const newsContainer = document.querySelector("#output")
        let newsCreatorKey = {
            "dataSet" : "newsItems",
            "fetchType" : "GET",
            "dataBaseObject" : "",
            "embedItem" : "?_embed=newsItems"
        }
        nomadData.connectToData(newsCreatorKey)
        .then (dbGrabs => {
            dbGrabs.forEach(dbGrab =>  {
                // console.log(dbGrab);
                newsContainer.appendChild(domComponents.createDomElement({
                    elementType: "button",
                    content: "SAVE BITCH",
                    cssClass: "newsSaveButton"
                }))
                newsContainer.appendChild(domComponents.createDomElement({
                    elementType: "h2",
                    content: dbGrab.title,
                    cssClass: "newsTitle"
                }))
                newsContainer.appendChild(domComponents.createDomElement({
                    elementType: "p",
                    content: dbGrab.synopsis,
                    cssClass: "newsBody"
                }))
                newsContainer.appendChild(domComponents.createDomElement({
                    elementType: "a",
                    content: dbGrab.url,
                    cssClass: "newsURL",
                    attributes:{
                        href:`${dbGrab.url}`
                    }
                }))

            })

        })

        // const NewsTest = domComponents.createDomElement("h2",testPass,"testObj",null);
        //output.appendChild(NewsTest);
        

    }
}
export default news