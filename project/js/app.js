(function() {
    // delete pron_toggle
    var toggleLinks = document.getElementsByClassName('pron_toggle');
    for (var i = 0; i < toggleLinks.length; i++) {
        toggleLinks[i].innerHTML = '';
    }

    // show IPA
    var spans = document.getElementsByTagName("span");
    for (var i = 0; i < spans.length; i++) {
        var classNameOfSpan = spans[i].className;
        if (classNameOfSpan == "show_ipapr"   ||
            classNameOfSpan == "show_spellpr" ||
            classNameOfSpan == "show_rhpr") {
            spans[i].style.display="inline";
        }
    }
})();
