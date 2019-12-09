const REHMAT_STRING_HELPER = {
    ReplaceAll: (haystack, needle, replacer) => {
        let replaced = haystack;
        while (replaced.indexOf(needle) !== -1) {
            replaced = replaced.replace(needle, replacer);
        }
        return replaced;
    }
};