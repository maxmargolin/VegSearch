window.onload = function() {
        var search = document.getElementById('search');
        var button = document.getElementById('button');
        var input = document.getElementById('input');

        function loading() {
                search.classList.add('loading');

                setTimeout(function() {
                        search.classList.remove('loading');
                }, 1000);

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
