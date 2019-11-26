
const CLIPBOARD_HELPER = {};

CLIPBOARD_HELPER.COPY_TO_CLIPBOARD_ELMS = _a('.copy-to-clipboard');
CLIPBOARD_HELPER.COPY_TO_CLIPBOARD_ELMS.forEach(elm => {
    elm.addEventListener('click', e => {
        e.preventDefault();
        const targetElm = CLIPBOARD_HELPER.getTarget(elm);
        if (targetElm) {
            let text = targetElm.value;
            if (text === undefined) text = targetElm.textContent;
            CLIPBOARD_HELPER.CopyTextToClipboard(text);
        }
    });
});

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

CLIPBOARD_HELPER.getTarget = function (elm) {
    let targetStr = elm.dataset.target;
    if (!targetStr) return elm;
};