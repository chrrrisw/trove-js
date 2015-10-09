var demo_search;
var key_field;
var date_field;
var zone_dropdown;
var categories_dropdown;
var started = false;
var settings_sidebar;
var results_accordion;
var newspaper_modal;
var np_accordion;

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

function init_trove() {

    // If we haven't initialised yet, do so
    // Show the sidebar if the user hasn't entered a key
    if (!started) {
        if (key_field.val() === '') {
            key_field.parent().addClass('error');
            settings_sidebar.sidebar('show');
        } else {
            key_field.parent().removeClass('error');
            Trove.init(key_field.val());
            started = true;
        }
    }

}

function search(terms) {

    init_trove();
    if (started) {
        settings_sidebar.sidebar('hide');

        if (date_field.val() === '') {
            demo_search.clear_date_range_limit();
        } else {
            demo_search.limit_date_range(date_field.val());
        }

        demo_search.query({
            zones: zone_dropdown.val(),
            terms: terms
        });
    }
}

function search_previous() {
    if (started) {
        demo_search.previous();
    }
}

function search_next() {
    if (started) {
        demo_search.next();
    }
}

// function cvrt()
// {
//     return books[i].getElementsByTagName(arguments[1])[0].childNodes[0].nodeValue;
// }

var title_template =
'    <div class="title" id="%id%">' +
'        <i class="dropdown icon"></i>' +
'        %title% (%count%)' +
'    </div>';

var content_template =
'    <div class="content">' +
'        <table class="ui celled very compact table">' +
'            <thead>' +
'                <tr><th>ID</th><th>Trove URL</th></tr>' +
'            </thead>' +
'            <tbody>' +
'                %items%' +
'            </tbody>' +
'        </table>' +
'    </div>';

var np_content_template =
'    <div class="content">' +
'        <table class="ui very compact table">' +
'            <thead>' +
'                <tr><th>ID</th><th>Title</th></tr>' +
'            </thead>' +
'            <tbody class="newspapers" id="%id%">' +
'            </tbody>' +
'        </table>' +
'    </div>';

var item_template =
'    <tr>' +
'        <td>%identifier%</td>' +
'        <td><a href="%trove_url%">See here</a></td>' +
'    </tr>';


var toggle_button_template =
'    <button class="ui compact toggle button">' +
'        %text%' +
'    </button>';

var checkbox_template =
'    <div class="ui %class% checkbox">' +
'        <input type="checkbox" class="hidden" name="%name%">' +
'        <label>%text%</label>' +
'    </div>';

var radio_template =
'    <div class="field">' +
'        <div class="ui radio checkbox">' +
'            <input type="radio" name="%name%" tabindex="0" class="hidden">' +
'            <label>%text%</label>' +
'        </div>' +
'    </div>';

function search_done(s) {
    var zone_items;
    var zone_name;
    var temp1, temp2;

    results_accordion.empty();

    for (zone_name in s.items) {
        zone_items = s.items[zone_name];

        // Add a title
        temp1 = title_template
            .replace('%id%', 'zone-' + zone_name)
            .replace('%title%', zone_name)
            .replace('%count%', zone_items.length);
        results_accordion.append(temp1);

        // Add the contents
        temp2 = '';
        for (var item_num in zone_items) {
            temp1 = item_template
                .replace('%identifier%', zone_items[item_num].id)
                .replace('%trove_url%', zone_items[item_num].troveUrl);
            temp2 = temp2 + temp1;
        }
        results_accordion.append(content_template.replace('%items%', temp2));
    }
}

function get_newspapers(evt) {
    console.log('Getting newspaper list');
    init_trove();
    var table;
    $('.ui.request.newspaper.button').addClass('loading');
    var newspaper_list = new Trove.NewspaperList({
        state: Trove.STATES.ALL,
        includes: [Trove.INCLUDES.YEARS],
        done: function (nl) {
            $('.ui.request.newspaper.button').removeClass('loading');
            // np_accordion.empty();
            console.log(JSON.stringify(nl.newspapers[0], null, '\t'));
            for (var index in nl.newspapers) {
                // console.log(nl.newspapers[index].stateabbr);
                table = $('#state-table-' + nl.newspapers[index].stateabbr);
                table.append(
                    '<tr><td>' +
                    nl.newspapers[index].id +
                    '</td><td>' +
                    nl.newspapers[index].title +
                    '</td></tr>');
            }
        },
        fail: function (nl) {
            $('.ui.request.newspaper.button').removeClass('loading');
        }
    });
}

function apply_newspapers(dlg) {
    console.log('apply');
}

function cancel_newspapers(dlg) {
    console.log('cancel');
}

function documentReady(jQuery) {

    key_field = $('#key_id');
    date_field = $('#date-range');
    newspaper_modal = $('.ui.newspaper.modal');
    settings_sidebar = $('.ui.sidebar');
    results_accordion = $('#results-accordion');
    categories_dropdown = $('.ui.categories.dropdown');
    zone_dropdown = $('.ui.zones.dropdown');
    np_accordion = $('#np-accordion');
    var state_buttons = $('#state-buttons');

    // Get the key_file
    $.get('/__key_file__', function(data) {
        data = data.replace(/(\r\n|\n|\r)/gm, '');
        key_field.val(data);
        Trove.init(data);
        started = true;
    });

    // Initialise the newspaper modal
    var state;
    for (var s in Trove.STATES) {
        state = checkbox_template
            .replace('%name%', s)
            .replace('%class%', 'np-state')
            .replace('%text%', s);
        state_buttons.append(state);
        if (s != 'ALL') {
            state = title_template
                .replace('%id%', 'state-' + s)
                .replace('%title%', s)
                .replace('%count%', '0');
            np_accordion.append(state);
            state = np_content_template
                .replace('%id%', 'state-table-' + s)
            np_accordion.append(state);
        }
    }
    $('.ui.np-state.checkbox').checkbox({
        onChecked: function () {
            console.log('Checked', this.name);
        },
        onUnchecked: function () {
            console.log('Unchecked', this.name);
        }
    });

    newspaper_modal.modal({
        observeChanges: true,
        onApprove: apply_newspapers,
        onDeny: cancel_newspapers
    });
    newspaper_modal.modal('attach events', '.ui.newspaper.button', 'show');
    $('.ui.request.newspaper.button').on('click', get_newspapers);

    // Initialise the sidebar
    settings_sidebar.sidebar('attach events', '.searchlimits');

    // Initialise the accordions
    results_accordion.accordion();
    np_accordion.accordion();

    // Fill in and initiliase the categories dropdown
    for (var z in Trove.CATEGORIES) {
        categories_dropdown.append('<option value="' + Trove.CATEGORIES[z] + '">' + Trove.CATEGORIES[z].capitalize() + '</option>');
    }
    categories_dropdown.dropdown();

    // Catch the enter key in the search prompt
    $('#search-prompt').on('keyup', function (evt) {
        if(evt.keyCode == 13)
            search( $(this).val() );
    });

    // Connect callbacks for previous and next
    $('#search-previous').on('click', search_previous);
    $('#search-next').on('click', search_next);

    // Fill in and initialise the zones dropdown
    for (z in Trove.ZONES) {
        zone_dropdown.append('<option value="' + Trove.ZONES[z] + '">' + Trove.ZONES[z].capitalize() + '</option>');
    }
    zone_dropdown.dropdown();

    // $('.sidebar-form').on('submit', function(){
    //     console.log('Form submitted');
    //     return false;
    // });

    // Create a Search object
    demo_search = new Trove.Search({
        done: search_done
    });

}

$(document).ready(documentReady);
