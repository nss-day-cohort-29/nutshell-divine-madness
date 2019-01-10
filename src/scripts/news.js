import nomadData from "./nomadData";
//pull from api then display to dom.
// create save button send saved articles to Json
// create button to pull all saved materials in json.
// delete method for articles
const news = {

    getNews(){
        //pull then send pulled data to dom
    
            return fetch("https://data.nashville.gov/resource/xbru-cfzi.json?$$app_token=lfAtpDX8XuYvee5T9U6FnVpFP",
            {Authorization: {Bearer: "lfAtpDX8XuYvee5T9U6FnVpFP"}})
            .then(newsContainer => newsItems.json());

            
          },


    save(){
        //This is functioning and writing to JSON.
        const testnewsObj = {
                "dataSet" : "newsItems",
                "fetchType" : "POST",
                "dataBaseObject" : {
                    "userId": 1,
                    "url": "www.fuckoff.com",
                    "title": "Read above",
                    "synopsis": "blah blah blah"
                }
                
        }
        nomadData.connectToData(testnewsObj);
        
    },
    
    allSaved(){

        const testnewsObj1 = {
            "dataSet" : "newsItems",
            "fetchType" : "GET",
            "dataBaseObject" : "",
            "embedItem" : "?_embed=events"
            }

        nomadData.connectToData(testnewsObj1)
        .then(testnews => console.log(testnews))
        

    },

    delete(){


    }



}

export default news