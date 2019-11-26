const BACK_URL_HELPER = {
    backUrls : _a('.go-back')
};
BACK_URL_HELPER.backUrls.forEach(elm => {
    elm.addEventListener('click', e => {
        if (history.length !== 1) {
            e.preventDefault();
            history.back();
        }
    });
});