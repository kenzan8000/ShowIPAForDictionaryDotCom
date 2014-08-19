(function() {
    // clear toggle
    var toggleLinks = document.getElementsByClassName('pronounce-IPA-button');
    for (var i = 0; i < toggleLinks.length; i++) {
        toggleLinks[i].style.display = 'none';
    }

    // show Spell and IPA
    var spellPronunciations = document.getElementsByClassName('spellpron');
    for (var i = 0; i < spellPronunciations.length; i++) {
        spellPronunciations[i].style.display = "inline";
        spellPronunciations[i].className = "";
    }
    var IPAPronunciations = document.getElementsByClassName('ipapron');
    for (var i = 0; i < IPAPronunciations.length; i++) {
        IPAPronunciations[i].style.display = "inline";
        IPAPronunciations[i].className = "";
    }
})();
