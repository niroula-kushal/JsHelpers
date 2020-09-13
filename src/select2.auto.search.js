    $('body').on('keydown','.select2-selection', ev => {
        if (ev.which < 32)
            return;

        var target = jQuery(ev.target).closest('.select2-container');
        if (!target.length)
            return;

        target = target.prev();
        target.select2('open');

        var search = target.data('select2').dropdown.$search ||
            target.data('select2').selection.$search;

        search.focus();
    });
