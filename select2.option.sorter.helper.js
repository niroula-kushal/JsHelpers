function shouldNotBeSorted(option) {
    if (!option.id) return true;
    if (option.id === 0) return true;
    else if (option.id === "ALL" || option.id === "NONE") return true;
    return false;
}

function select2OptionSorter(data) {
    return data.sort(function (a, b) {
        if (shouldNotBeSorted(a) && shouldNotBeSorted(b)) return 0;
        if (shouldNotBeSorted(a)) return -1;
        if (shouldNotBeSorted(b)) return 1;
        return a.text.toLowerCase() < b.text.toLowerCase() ? -1 : a.text.toLowerCase() > b.text.toLowerCase() ? 1 : 0;
    });
}

/** Usage
 * $('.just-typeahead').select2({sorter: select2OptionSorter});
 * 
 */