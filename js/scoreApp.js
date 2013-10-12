var SCOREAPP = SCOREAPP || {}; //Namespace aanmaken


(function () { // anonymous self invoking function

    //controler
    SCOREAPP.controler = {
        init: function () {
                // Initialize router
                SCOREAPP.router.init();
            }
    };

   
    //Routing (gebruik de micro lib routie.js)
    SCOREAPP.router = {
        init: function () {
            routie({
                'ranking': function() {
                    //console.log("routie doet de ranking");
                    Transparency.render(document.getElementById('activities'), SCOREAPP.ranking);
                },
                'schedule': function() {
                    //console.log("routie doet de schedule");
                    Transparency.render(document.getElementById('activities'), SCOREAPP.schedule);
                },
                'game': function() {
                    //console.log("routie doet de game");
                    Transparency.render(document.getElementById('activities'), SCOREAPP.game);
                },
                '*':function() { //catch all
                    //uitvoeren als je iets onbekends tegen komt
                    //error feedback? of de homepage?
                }
            });

        }
    }

    //Templating (gebruik de micro lib transparency.js)
    //Laat json data om een 'pagina' samen te stellen





    //Domready (gebruik de micro lib domReady.js)
    domready(function () {
        // dom is loaded! init de app:
        SCOREAPP.controler.init();
    })

})();//end:Self invoking function

