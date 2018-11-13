window.addEventListener('load', handler, false);

function handler() {

    var page = document.getElementById('page'),
        frm = document.forms['customize'],
        colorChoices = frm.elements['colorChoices'],
        color = readCookie('page-color'),
        fontChoice = frm.elements['fontSize'],
        setFont = readCookie('fontSize'),
        btnSave = frm.elements['btnSave'];

    if (!color) {
        page.style.backgroundColor = colorChoices[0].value;
    } else {
        page.style.backgroundColor = color;
    };

    if (!setFont) {
        page.style.fontSize = fontChoice.value;
    } else {
        page.style.fontSize = setFont+'px';
        fontChoice.value = readCookie('fontSize');
    };


    colorChoices.addEventListener('change', showSaveBackGround, false);
    fontChoice.addEventListener('change', setFontSize, false);
    btnSave.addEventListener('click', saveToCookies, false);


    //function for displaying chosen 'color' and saving it to cookie on name 'page-color'
    function showSaveBackGround() {
        color = this.value;
        page.style.backgroundColor = color;
    };


    function setFontSize() {
        setFont = this.value;
        page.style.fontSize = setFont + 'px';
        fontChoice.value = setFont;
    };


    function saveToCookies() {
        makeCookie('fontSize', setFont, 7);
        makeCookie("page-color", color, 7);

    };


    //function for encoding and setting cookie to the document
    function makeCookie(name, value, days) {
        var cName = encodeURIComponent(name);
        cValue = value,
            cExpire = setCookieExpireIn(days);
        document.cookie = cName + '=' + cValue + ';expires=' + cExpire;
    };


    //function for getting a string for cookie 'expire' property 
    function setCookieExpireIn(days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        return date.toGMTString();
    };


    //function for reading value on specific name from cookie
    function readCookie(name) {
        name = decodeURIComponent(name);
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        };
        return null;
    };


    //to erase cookie ( not really needed, just did it in case for the future reference)
    // function eraseCookie(name) {
    //     makeCookie(name, "", -1);
    // };
};