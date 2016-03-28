document.addEventListener('WebComponentsReady', function () {

    // ===== SEARCH FIELD

    var search = document.querySelector('.search');
    var searchField = document.querySelector('.search-field');
    var sort = document.querySelector('#sort');
    var searchFilled = 'search-filled';

    if (searchField.value.trim() !== '') {
        searchField.parentNode.classList.add(searchFilled);
    }

    search.addEventListener('submit', function (evt) {
        evt.preventDefault();

        var value = evt.target[0].value;
        window.location = window.location.origin + '/search/' + value;
    });

    searchField.addEventListener('focus', function (evt) {
        searchField.parentNode.classList.add(searchFilled);
    });

    searchField.addEventListener('blur', function (evt) {
        if (evt.target.value.trim() === '') {
            searchField.parentNode.classList.remove(searchFilled);
        }
    });

    // NEXT IMAGES EVENT
    var images = document.querySelector('#images');
    setInterval(function () {
        images.selectNext();
    }, 5000);
    //setTimeout(function () {
    //    images.selectNext();
    //}, 1000);

    //document.querySelector('#images').selected = 4


    // CHANGE MENUS
    var menus = document.querySelector('#menus'),
        menu = document.querySelector('#menu');

    menus.addEventListener('iron-select', function () {
        menu.selected = menus.selected;
    });


    // CHANGE TABS
    var tabs = document.querySelector('#tabs');
    var tab = document.querySelector('#pages');

    tabs.addEventListener('iron-select', function () {
        tab.selected = tabs.selected;
    });
});

function clickDialogHandler(e) {
    var button = e.target;
    while (!button.hasAttribute('data-dialog') && button !== document.body) {
        button = button.parentElement;
    }
    if (!button.hasAttribute('data-dialog')) {
        return;
    }
    var id = button.getAttribute('data-dialog');
    var dialog = document.getElementById(id);
    if (dialog) {
        dialog.open();
    }
}

// VIDEO EVENT
$(document).on('mouseover', 'video', function () {
    $(this).get(0).play();
});

// FUNCTION FOR INPUT
function validate() {
    document.getElementById('inputForValidation').validate();
}
function clearInput() {
    document.getElementById('inputWithButton').value = '';
}