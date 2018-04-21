window.onload = function() {
        var search = document.getElementById('search');
        var button = document.getElementById('button');
        var input = document.getElementById('input');

        function loading() {
                search.classList.add('loading');

                setTimeout(function() {
                        search.classList.remove('loading');
                }, 1000);




                // Create the XHR object.
                function createCORSRequest(method, url) {
                        var xhr = new XMLHttpRequest();
                        if ("withCredentials" in xhr) {
                                // XHR for Chrome/Firefox/Opera/Safari.
                                xhr.open(method, url, true);
                        } else if (typeof XDomainRequest != "undefined") {
                                // XDomainRequest for IE.
                                xhr = new XDomainRequest();
                                xhr.open(method, url);
                        } else {
                                // CORS not supported.
                                xhr = null;
                        }
                        return xhr;
                }

                // Helper method to parse the title tag from the response.


                // Make the actual CORS request.
                function makeCorsRequest() {
                        // This is a sample server that supports CORS.
                        searched=document.getElementById("input").value;
                        var url = 'http://165.227.172.221:3222/'+searched;

                        var xhr = createCORSRequest('GET', url);
                        if (!xhr) {
                                alert('CORS not supported');
                                return;
                        }

                        // Response handlers.

                        xhr.onload = function() {
                                var json = JSON.parse(xhr.responseText);
                                var title = json[0]["recipeHeaderTitle"];
                                var names = document.getElementsByClassName("centered");
                                var n;
                                for (n = 0; n < names.length; n++) {
                                        names[n].innerHTML=json[n]["recipeHeaderTitle"];;
                                }
                        };

                        xhr.onerror = function() {
                                alert('Woops, there was an error making the request.');
                        };

                        xhr.send();
                }
                makeCorsRequest();




                var items = document.getElementsByClassName("item");
                var i;
                for (i = 0; i < items.length; i++) {
                        items[i].classList.toggle('fade');
                }
        }

        button.addEventListener('click', loading);

        input.addEventListener('keydown', function() {
                if (event.keyCode == 13) loading();
        });




};
