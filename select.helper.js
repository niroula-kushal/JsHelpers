function clearSelectOptions(selectElm) {
    while(selectElm.firstChild) selectElm.firstChild.remove();
}

function addDefaultOption(selectElm, defaultOptionText) {
    var optionText = defaultOptionText || "All";
    var optionElm = generateOptionElm(optionText, 0);
    selectElm.appendChild(optionElm);
}

function addOptions(selectElm, options) {
    var docFragment = document.createDocumentFragment();
    for (var option of options) {
        var optionText = option.text;
        var optionValue = option.value;
        var optionSelected = option.selected;
        var optionElm = generateOptionElm(optionText, optionValue, optionSelected);
        docFragment.appendChild(optionElm);
    }
    selectElm.appendChild(docFragment);
}

function generateOptionElm(text, value, selected) {
    return new Option(text, value, false, selected);
}
/**
 * each option needs to be an object of the following format
 {
     text : "Your option text",
     value : "Your option value",
     selected : false // boolean stating whether this option is selected or not
 }
 */