const IMAGE_PREVIEW_HELPER = {};
IMAGE_PREVIEW_HELPER.toDisplayElms = _a('.to-display');
IMAGE_PREVIEW_HELPER.toDisplayElms.forEach(elm => {
    elm.addEventListener('change', function () {
        const displayInIdSelector = this.dataset.displayin;
        const displayIn = __(`#${displayInIdSelector}`);
        if(displayIn) {
            IMAGE_PREVIEW_HELPER.UpdateDisplayImage(this, displayIn);
        }
    });
});
IMAGE_PREVIEW_HELPER.UpdateDisplayImage = function(input, displayElm) {
    if (input.files && input.files[0]) {
        let reader = new FileReader();
        reader.onload = function (e) {
            displayElm.setAttribute('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
};
