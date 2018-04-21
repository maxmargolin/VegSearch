window.onload = function() {
        var search = document.getElementById('search');
        var button = document.getElementById('button');
        var input = document.getElementById('input');

        function loading() {
                search.classList.add('loading');






                var searched = document.getElementById("input").value;
                $.getJSON('http://165.227.172.221:3222/' + searched, function(data) {
                        var names = document.getElementsByClassName("centered");
                        var sources = document.getElementsByClassName("bottom");
                        var n;
                        for (n = 0; n < names.length && data[n] != undefined; n++) {
                                names[n].innerHTML = data[n]["title"];
                                sources[n].innerHTML = data[n]["source"];

                        }




                        var items = document.getElementsByClassName("item");
                        var i;
                        //reappear
                        for (i = 0; i < items.length && data[n] != undefined; i++) {
                                items[i].classList.remove('fade');
                                var sub = items[i].getElementsByTagName("a")[0].href = data[i]["url"];
                                var sub = items[i].getElementsByTagName("img")[0].src = data[i]["thumbnail"];
                                setTimeout(function(item) {
                                        item.classList.add('fade');
                                }, 200, items[i]);

                        }

                        //temporary to show cute search loadin
                        setTimeout(function() {
                                search.classList.remove('loading');
                        }, 500);
                });


        }

        button.addEventListener('click', loading);

        input.addEventListener('keydown', function() {
                if (event.keyCode == 13) loading();
        });




};
