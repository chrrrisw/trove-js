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
                    for (k in newspaper) {
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
            })
        }
    });


    // var act_newspapers = new Trove.NewspaperList({state: 'act'});

    test_search = new Trove.Search({
        zones: [Trove.ZONE.NEWS, Trove.ZONE.PIC],
        done: function(s) {
            console.dir(s.response);
        }
    });

    test_search.query({
        terms: 'willoughby',
        start: 40,
        number: 4
    });
}

var test_search;
var key_field;
var zone_dropdown;
var categories_dropdown;
var started = false;
var settings_sidebar;
var results_accordion;

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

function search(terms) {

    // If we haven't initialised yet, do so
    // Show the sidebar if the user hasn't entered a key
    if (!started) {
        if (key_field.val() == '') {
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
        test_search.query({
            zones: zone_dropdown.val(),
            terms: terms
        });
    }
}

function search_previous() {
    if (started) {
        test_search.previous();
    }
}

function search_next() {
    if (started) {
        test_search.next();
    }
}

// function cvrt()
// {
//     return books[i].getElementsByTagName(arguments[1])[0].childNodes[0].nodeValue;
// }

var title_template = ' \
    <div class="title"> \
        <i class="dropdown icon"></i> \
        %title% (%count%) \
    </div>';

var content_template = ' \
    <div class="content"> \
        <table class="ui celled table"> \
            <thead> \
                <tr><th>ID</th><th>Trove URL</th></tr> \
            </thead> \
            <tbody> \
                %items% \
            </tbody> \
        </table> \
    </div>';

var item_template = ' \
    <tr> \
        <td>%identifier%</td> \
        <td><a href="%trove_url%">See here</a></td> \
    </tr>';

function search_done(s) {
    // people -> people
    // article -> work
    // list -> list
    // collection -> work
    // book -> work
    // picture -> work
    // map -> work
    // music -> work
    // newspaper -> article
    console.dir(s.response.zone);
    var zone_items;
    var zone_name;
    var temp1, temp2;
    for (var zone_num in s.response.zone) {
        zone_name = s.response.zone[zone_num].name;
        console.log(zone_name);
        if (zone_name == 'people') {
            zone_items = s.response.zone[zone_num].records['people'];
        } else if (zone_name == 'list') {
            zone_items = s.response.zone[zone_num].records['list'];
        } else if (zone_name == 'newspaper') {
            zone_items = s.response.zone[zone_num].records['article'];
        } else {
            zone_items = s.response.zone[zone_num].records['work'];
        }

        // Add a title
        // results_accordion.append('<div class="title"><i class="dropdown icon"></i>' + zone_name + '</div>');
        temp1 = title_template.replace('%title%', zone_name);
        temp1 = temp1.replace('%count%', zone_items.length);
        results_accordion.append(temp1);

        // Add the contents
        // results_accordion.append('<div class="content"><p>Stuff here</p></div>');
        temp2 = '';
        for (item_num in zone_items) {
            temp1 = item_template.replace('%identifier%', zone_items[item_num].id);
            temp1 = temp1.replace('%trove_url%', zone_items[item_num].troveUrl);
            temp2 = temp2 + temp1;
        }
        results_accordion.append(content_template.replace('%items%', temp2));
    }
}

function documentReady(jQuery) {

    // Initialise the sidebar
    settings_sidebar = $('.ui.sidebar');
    settings_sidebar.sidebar('attach events', '.searchlimits');

    results_accordion = $('#results-accordion');
    results_accordion.accordion();

    // Fill in and initiliase the categories dropdown
    categories_dropdown = $('.ui.categories.dropdown');
    for (z in Trove.CATEGORIES) {
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
    for (z in Trove.ZONE) {
        zone_dropdown.append('<option value="' + Trove.ZONE[z] + '">' + Trove.ZONE[z].capitalize() + '</option>');
    }
    zone_dropdown.dropdown();

    $('.sidebar-form').on('submit', function(){
        console.log('Form submitted');
        return false;
    });

    // Create a Search object
    test_search = new Trove.Search({
        done: search_done
    });

    key_field = $('#key_id');
}

$(document).ready(documentReady);
