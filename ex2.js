document.addEventListener('DOMContentLoaded', function() {
    var ul = document.querySelector('ul'); // we have an existing <ul> element

    for (var i = 1; i <= 4; i++) {
        var li = document.createElement('li');
        li.textContent = 'Item ' + i;
        ul.appendChild(li);
    }
});