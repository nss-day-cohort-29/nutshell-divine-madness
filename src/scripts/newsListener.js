import nomadData from "./nomadData";
import news from "./news";




const newsListener = {

    saveButtonListener() {
        //This is functioning and writing to JSON. Need to attach this to the save button.
        const saveID = event.target.name;
        let artTitle = sessionStorage.getItem(`article_${saveID}_title`);
        let artDescription = sessionStorage.getItem(`article_${saveID}_desc`);
        let articleURL = sessionStorage.getItem(`article_${saveID}_url`);

        

        const newsObjectPost = {
            "dataSet": "newsItems",
            "fetchType": "POST",
            "dataBaseObject": {
                "userId": Number(sessionStorage.getItem('userId')),
                "url": `${articleURL}`,
                "title": `${artTitle}`,
                "synopsis": `${artDescription}`
            }
        }
        console.log(sessionStorage)
        nomadData.connectToData(newsObjectPost)
            .then(response => response.json)
            .then(shit => {
                console.log(shit)
                $("#output").empty();
                news.getAPINews();
                
            })
    },
    deleteButtonListener() {
        //To delete from saved news articles.
        const deleteID = event.target.id.split("--")[1];
        nomadData.connectToData({
                deleteId: deleteID,
                dataSet: "newsItems",
                fetchType: "DELETE",
                
            })
            .then(() => {
                $(".article1").remove();
                news.savedNewsElementsCreator();
            })
    },
}

export default newsListener