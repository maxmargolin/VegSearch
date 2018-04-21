window.onload = function() {
        var search = document.getElementById('search');
        var button = document.getElementById('button');
        var input = document.getElementById('input');

        function loading() {
                search.classList.add('loading');



                var items = document.getElementsByClassName('item');
                while (items[0]) {
                        items[0].classList.remove('fade');
                        items[0].parentNode.removeChild(items[0]);
                }

                var searched = document.getElementById("input").value;
                $.getJSON('http://165.227.172.221:3222/' + searched, function(data) {
                        for (var i = 0; i < data.length; i++) {
                                if (data[i]["thumbnail"] != "") { //only if theres a thumbnail
                                        var item = document.createElement("div");
                                        var column = document.createElement("div");
                                        item.classList.add("item");
                                        column.classList.add("column");
                                        column.appendChild(item);
                                        document.createElement("div");
                                        var link = document.createElement("a");
                                        link.href = data[i]["url"];
                                        link.setAttribute("target", "_blank");
                                        var img = document.createElement("img");
                                        img.src = data[i]["thumbnail"];
                                        var title = document.createElement("div");
                                        title.classList.add("center");
                                        title.innerHTML = data[i]["title"];
                                        var credit = document.createElement("small");
                                        credit.innerHTML = data[i]["source"];
                                        credit.classList.add("bottom");
                                        link.appendChild(img);
                                        link.appendChild(title);
                                        link.appendChild(credit);
                                        item.appendChild(link);
                                        document.getElementsByClassName("row")[0].appendChild(column);


                                        setTimeout(function(item) {
                                                item.classList.add('fade');
                                        }, 200, item);

                                }
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
