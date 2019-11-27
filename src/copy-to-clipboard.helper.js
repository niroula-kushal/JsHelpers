
const CLIPBOARD_HELPER = {};

CLIPBOARD_HELPER.COPY_TO_CLIPBOARD_ELMS = _a('.copy-to-clipboard');

CLIPBOARD_HELPER.SELECTORS_TO_WATCH = [];

document.addEventListener('click', e => {
    const elementToCopyFrom = CLIPBOARD_HELPER.GetElementToCopyFromUsingEvent(e);
    CLIPBOARD_HELPER.CopyFromElement(elementToCopyFrom);
});

CLIPBOARD_HELPER.Watch = function(selector) {
    CLIPBOARD_HELPER.SELECTORS_TO_WATCH.push(selector);
};

CLIPBOARD_HELPER.COPY_TO_CLIPBOARD_ELMS.forEach(elm => {
    elm.addEventListener('click', e => {
        e.preventDefault();
        const targetElm = CLIPBOARD_HELPER.GetElementToCopyFrom(elm);
        CLIPBOARD_HELPER.CopyFromElement(targetElm);
    });
});

CLIPBOARD_HELPER.GetElementToCopyFromUsingEvent = e => {
    const targetElm = e.target;
    for(const selector of CLIPBOARD_HELPER.SELECTORS_TO_WATCH)
    {
        if(targetElm.matches(selector)) return targetElm;
    }
    for(const selector of CLIPBOARD_HELPER.SELECTORS_TO_WATCH)
    {
        const parentMatchingSelectorElement = targetElm.closest(selector);
        if(parentMatchingSelectorElement) return parentMatchingSelectorElement;
    }
    return null;
};

CLIPBOARD_HELPER.CopyFromElement = elm => {
    if (elm) {
        let text = elm.value;
        if (text === undefined) text = elm.textContent;
        CLIPBOARD_HELPER.CopyTextToClipboard(text);
    }
};

CLIPBOARD_HELPER.CopyTextToClipboard = function(text) {
    if (!navigator.clipboard) {
        CLIPBOARD_HELPER.CopyTextToClipboardUsingTextarea(text);
        return;
    }
    navigator.clipboard.writeText(text).then(function () {
        console.log("Copy successfull");
    }, function (err) {
        console.error('Error copying : ', err);
    });
}

CLIPBOARD_HELPER.CopyTextToClipboardUsingTextarea = function(text) {
    const textArea = document.createElement("textarea");
    textArea.classList.add('hide');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        document.execCommand('copy');
        console.log("Copy successfull");
    } catch (err) {
        console.error("Error copying : ", err);
    }
    document.body.removeChild(textArea);
}

CLIPBOARD_HELPER.GetElementToCopyFrom = function (elm) {
    let targetStr = elm.dataset.target;
    if (!targetStr) return elm;
    return __(targetStr);
};