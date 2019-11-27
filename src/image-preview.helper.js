const IMAGE_PREVIEW_HELPER = {
    SELECTORS: []
};

IMAGE_PREVIEW_HELPER.Watch = selector => IMAGE_PREVIEW_HELPER.SELECTORS.push(selector);

document.body.addEventListener('change', e => {
    const target = e.target;
    if(target.hasAttribute("type") && target.getAttribute("type") == "file") {        
        for(const selector of IMAGE_PREVIEW_HELPER.SELECTORS) {
            if(target.matches(selector)) {
                IMAGE_PREVIEW_HELPER.Display(target);
            }
        }
    }
});

IMAGE_PREVIEW_HELPER.toDisplayElms = _a('.to-display');
IMAGE_PREVIEW_HELPER.toDisplayElms.forEach(elm => {
    elm.addEventListener('change', function () {
        IMAGE_PREVIEW_HELPER.Display(elm);
    });
});

IMAGE_PREVIEW_HELPER.Display = (inputElm) => {
    const displayInIdSelector = inputElm.dataset.displayIn;
    const displayIn = __(`#${displayInIdSelector}`);
    if(displayIn) {
        IMAGE_PREVIEW_HELPER.UpdateDisplayImage(inputElm, displayIn);
    }
};

IMAGE_PREVIEW_HELPER.UpdateDisplayImage = function(input, displayElm) {
    if (input.files && input.files[0]) {
        let reader = new FileReader();
        reader.onload = function (e) {
            displayElm.setAttribute('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
};
