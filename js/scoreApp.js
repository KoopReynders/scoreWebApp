var SCOREAPP = SCOREAPP || {}; //Namespace aanmaken


(function () { // anonymous self invoking function

    //settings
    SCOREAPP.settings = {
        lv : {
            acces_token : "82996312dc", //van Joost
            tournament_id : 19389, //tournament id van Leaguevine toernooi Autumn 2013 https://www.leaguevine.com/tournaments/19389/autumn-2013/
            pool_A : 19222,
            pool_B : 19221,
            pool_C : 19220,
            pool_D : 19219,
        },
    };
    //data
    SCOREAPP.dataObject = {
        tournament = {title : "homepage title", description : "Ultimate tournament"},
    }
    
    //controler
    SCOREAPP.controler = {
        init: function () {
                //Get data and setup data object
                //SCOREAPP.data.init();
                // Initialize router
                SCOREAPP.router.init();
            }
    };

    //routing (gebruik de micro lib routie.js)
    SCOREAPP.router = {
        init: function () {
            routie({
                'ranking': function() {
                    SCOREAPP.render.page("ranking");
                },
                'schedule': function() {
                    SCOREAPP.render.page("schedule");
                },
                'game': function() {
                    SCOREAPP.render.page("game");
                },
                '*':function() { //catch all
                    //uitvoeren als je iets onbekends tegen komt
                    //error feedback? of de homepage?
                    SCOREAPP.render.page("home");
                }
            });

        }
    }

    //save data object, get, post, sync
    //get data from leaguevine
    //post scores naar leaguevine
    SCOREAPP.data = {
        //self : this,

        init: function () {
            console.log("SCOREAPP.data.init")
            //var lv_url = "https://api.leaguevine.com/v1/pools/?pool_ids=["SCOREAPP.settings.lv.pool_D"]&tournament_id="+SCOREAPP.settings.lv.tournament_id+"&access_token="+SCOREAPP.settings.lv.acces_token
            var lv_url = "https://api.leaguevine.com/v1/pools/?tournament_id="+SCOREAPP.settings.lv.tournament_id+"&access_token="+SCOREAPP.settings.lv.acces_token
            reqwest({
                url: lv_url
              , type: 'json'
              , success: function (lv_data) {
                    SCOREAPP.data.dataObject = lv_data.objects
                    console.log("dataObject: Tournament: " + SCOREAPP.data.dataObject[0].tournament.name)
                    console.log("dataObject: Pool: " + SCOREAPP.data.dataObject[0].name)
                    standings = SCOREAPP.data.dataObject[0].standings
                    console.log("dataObject: Team 1: " + standings[0].team.name)
                    console.log("dataObject: Team 2: " + standings[1].team.name)
                    console.log("dataObject: Team 3: " + standings[2].team.name)
                    console.log("dataObject: Team 4: " + standings[3].team.name)
                    //console.log("dataObject: Pool: " + SCOREAPP.data.dataObject[0].name)
                    //console.log("dataObject: " + JSON.stringify(SCOREAPP.data.dataObject) )
                }
            })
        },
        getData: function(){

        },
        postData: function () {
            reqwest({
                url: 'path/to/json'
              , type: 'json'
              , method: 'post'
              , error: function (err) { 
                    console.log("error reqwest post: " + err)
                }
              , success: function (resp) {
                  //qwery('#content').html(resp.content)
                  console.log("postdata success: " + resp.objects)
                }
            })
        },
    }



    //Templating (gebruik de micro lib transparency.js)
    //Laat json data om een 'pagina' samen te stellen
    SCOREAPP.render = {
        page: function(obj){
            console.log("SCOREAPP.render.page: " +obj)
            //if(typeof obj == "string")console.log(obj);
            //console.log("template.page: "+data)
            //.render(qwery('#ranking'),obj);
            switch(obj){
                case "ranking":
                    
                    break;
                case "schedule":
                    
                    break;
                case "game":
                    
                    break;
                default:
                    //Home page
                    console.log("Home page: " + SCOREAPP.dataObject.tournament);
                    Transparency.render(document.getElementById('home'), SCOREAPP.dataObject.tournament);
            }
        }


    }

    //Domready (gebruik de micro lib domReady.js)
    domready(function () {
        // dom is loaded! init de app:
        SCOREAPP.controler.init();
    })

})();//end:Self invoking function

