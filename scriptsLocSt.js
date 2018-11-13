window.addEventListener('load', handler, false);

function handler() {
    var page = document.getElementById('page'),
        frm = document.forms['customize'],
        colorChoices = frm.elements['colorChoices'],
        color = window.localStorage['page-color'],
        fontChoice = frm.elements['fontSize'],
        setFont = window.localStorage['fontSize'];

    if (!color) {
        page.style.backgroundColor = colorChoices[0].value;
    } else {
        page.style.backgroundColor = color;
    };

    if (!setFont) {
        page.style.fontSize = fontChoice.value + 'px';
    } else {
        page.style.fontSize = setFont + 'px';
        fontChoice.value = setFont;
    };

    colorChoices.addEventListener('change', setBackGround, false);
    fontChoice.addEventListener('change', setFontSize, false);

    //function for displaying chosen font size and saving to local Storage
    function setFontSize() {
        setFont = this.value;
        page.style.fontSize = setFont + 'px';
        window.localStorage.setItem('fontSize', setFont);
    };


    //function for displaying chosen page color and saving to local Storage
    function setBackGround() {
        color = this.value;
        page.style.backgroundColor = color;
        window.localStorage.setItem('page-color', color);
    };
};