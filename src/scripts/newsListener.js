import nomadData from "./nomadData";
import domComponents from "./domComponents";
import news from "./news";



const output = document.querySelector("#output")
const newsListener = {

    saveButtonListener(){
            //This is functioning and writing to JSON. Need to attach this to the save button.
            
            const saveID = event.target.name;
            let article = document.getElementById(`article_${saveID}`)
            let artTitle = sessionStorage.getItem(`article_${saveID}_title`);
            let artDescription = sessionStorage.getItem(`article_${saveID}_desc`);
            let articleURL = sessionStorage.getItem(`article_${saveID}_url`);
                            
            console.log(article)
            // console.log(event.target, event.currentTarget)
            const newsObjectPost = {
                    "dataSet" : "newsItems",
                    "fetchType" : "POST",
                    "dataBaseObject" : {
                        "userId": Number(sessionStorage.getItem('userId')),
                        "url": `${articleURL}`,
                        "title": `${artTitle}`,
                        "synopsis": `${artDescription}`
                    }
            }
            console.log(sessionStorage)
            nomadData.connectToData(newsObjectPost)
            .then(response => response.json)
            .then (shit => {
                console.log(shit)
                $("#output").empty();
                news.getAPINews();
                news.savedNewsElementsCreator();
            })
            
        // })
    },
    deleteButtonListener(){
        //To delete from saved news articles. 
        const deleteID = event.target.id.split("--")[1];
        console.log(deleteID);
        nomadData.connectToData({
            deleteId: deleteID,
            dataSet: "newsItems",
            fetchType: "DELETE",
            // dataBaseObject: {
            //     userId: sessionStorage.getItem("userId")
        })
        .then( () => {
        $(".article1").empty();
        news.savedNewsElementsCreator();
         })
    },
}

export default newsListener