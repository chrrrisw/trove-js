function test_trove (key) {
    console.log('testing...');
    $('.sidebar-form').on('submit', function(){
        console.log('Form submitted');
        return false;
    });

    var newspaper_table = $('#newspaper');
    var article_div = $('#article');

    Trove.init(key);

    var n = new Trove.Newspaper({
        identifier: 35,
        done: function(np) {
            console.dir(np);
        }
    });
    // n.get(35);

    var a = new Trove.NewspaperArticle({
        identifier :18342701,
        done : function (article) {
            var n = article.get_newspaper({
                done: function (newspaper) {
                    for (var k in newspaper) {
                        if (typeof(newspaper[k]) != 'function') {
                            newspaper_table.append(
                                '<tr>' +
                                '<td>' + k + '</td>' +
                                '<td>' + newspaper[k] + '</td>' +
                                '</tr>');
                        }
                    }
                    article_div.append('<p>' + article.heading + '</p>');
                }
            });
        }
    });


    // var act_newspapers = new Trove.NewspaperList({state: 'act'});

    demo_search = new Trove.Search({
        zones: [Trove.ZONES.NEWSPAPER, Trove.ZONES.PICTURE],
        done: function(s) {
            console.dir(s.response);
        }
    });

    demo_search.query({
        terms: 'willoughby',
        start: 40,
        number: 4
    });
}

var demo_search;
var key_field;
var date_field;
var zone_dropdown;
var categories_dropdown;
var started = false;
var settings_sidebar;
var results_accordion;
var newspaper_modal;

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

function search(terms) {

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
'    <div class="title">' +
'        <i class="dropdown icon"></i>' +
'        %title% (%count%)' +
'    </div>';

var content_template =
'    <div class="content">' +
'        <table class="ui celled table">' +
'            <thead>' +
'                <tr><th>ID</th><th>Trove URL</th></tr>' +
'            </thead>' +
'            <tbody>' +
'                %items%' +
'            </tbody>' +
'        </table>' +
'    </div>';

var item_template =
'    <tr>' +
'        <td>%identifier%</td>' +
'        <td><a href="%trove_url%">See here</a></td>' +
'    </tr>';

function search_done(s) {
    var zone_items;
    var zone_name;
    var temp1, temp2;

    results_accordion.empty();

    for (zone_name in s.items) {
        zone_items = s.items[zone_name];

        // Add a title
        temp1 = title_template.replace('%title%', zone_name);
        temp1 = temp1.replace('%count%', zone_items.length);
        results_accordion.append(temp1);

        // Add the contents
        temp2 = '';
        for (var item_num in zone_items) {
            temp1 = item_template.replace('%identifier%', zone_items[item_num].id);
            temp1 = temp1.replace('%trove_url%', zone_items[item_num].troveUrl);
            temp2 = temp2 + temp1;
        }
        results_accordion.append(content_template.replace('%items%', temp2));
    }
}

function get_newspapers(evt) {
    console.log('Getting newspaper list');
    $('.ui.request.newspaper.button').addClass('loading');
}

function apply_newspapers(dlg) {
    console.log('apply');
}

function cancel_newspapers(dlg) {
    console.log('cancel');
}

function documentReady(jQuery) {

    // Initialise the newspaper modal
    newspaper_modal = $('.ui.newspaper.modal');
    newspaper_modal.modal({
        onApprove: apply_newspapers,
        onDeny: cancel_newspapers
    });
    newspaper_modal.modal('attach events', '.ui.newspaper.button', 'show');
    $('.ui.request.newspaper.button').on('click', get_newspapers);

    // Initialise the sidebar
    settings_sidebar = $('.ui.sidebar');
    settings_sidebar.sidebar('attach events', '.searchlimits');

    results_accordion = $('#results-accordion');
    results_accordion.accordion();

    // Fill in and initiliase the categories dropdown
    categories_dropdown = $('.ui.categories.dropdown');
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
    zone_dropdown = $('.ui.zones.dropdown');
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

    key_field = $('#key_id');
    date_field = $('#date-range');
}

$(document).ready(documentReady);
