
const SELECT_HELPER = {
    ClearSelectOptions: function (selectElm) {
        while (selectElm.firstChild) selectElm.firstChild.remove();
    },
    AddDefaultOption: function (selectElm, defaultOptionText) {
        var optionText = defaultOptionText || "All";
        var optionElm = SELECT_HELPER.GenerateOptionElm(optionText, 0);
        selectElm.appendChild(optionElm);
    },
    AddOptions: function (selectElm, options) {
        var docFragment = document.createDocumentFragment();
        for (var option of options) {
            var optionText = option.text;
            var optionValue = option.value;
            var optionSelected = option.selected;
            var optionElm = SELECT_HELPER.GenerateOptionElm(optionText, optionValue, optionSelected);
            docFragment.appendChild(optionElm);
        }
        selectElm.appendChild(docFragment);
    },
    GenerateOptionElm : function(text, value, selected) {
        return new Option(text, value, false, selected);
    }
};

/**
 * each option needs to be an object of the following format
 {
     text : "Your option text",
     value : "Your option value",
     selected : false // boolean stating whether this option is selected or not
 }
 */