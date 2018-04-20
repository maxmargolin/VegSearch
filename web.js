window.onload = function() {
        var search = document.getElementById('search');
        var button = document.getElementById('button');
        var input = document.getElementById('input');

        function loading() {
                search.classList.add('loading');

                setTimeout(function() {
                        search.classList.remove('loading');
                }, 1000);
                var slideSource = document.getElementById('1');
                slideSource.classList.toggle('fade');
                var slideSource = document.getElementById('2');
                slideSource.classList.toggle('fade');
                var slideSource = document.getElementById('3');
                slideSource.classList.toggle('fade');
                var slideSource = document.getElementById('4');
                slideSource.classList.toggle('fade');
        }

        button.addEventListener('click', loading);

        input.addEventListener('keydown', function() {
                if (event.keyCode == 13) loading();
        });




};
