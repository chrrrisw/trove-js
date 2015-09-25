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
var zone_dropdown;
var started = false;

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

function search(terms) {
    if (started) {
        test_search.query({
            zones: zone_dropdown.val(),
            terms: terms
        });
    }
}

function search_previous() {
    if (started) {
        console.log('prevous');
        test_search.previous();
    }
}

function search_next() {
    if (started) {
        console.log('next');
        test_search.next();
    }
}

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
    console.dir(s.response);
    for (zone_num in s.response.zone) {
        var zone_name = s.response.zone[zone_num].name;
        var zone_items = s.response.zone[zone_num].records[zone_name];
        // console.dir(zone_items);
    }
}

function start(evt) {
    // test_trove($('#key_id').val());

    // Initialise the Trove API with the key
    Trove.init($('#key_id').val());

    // Create a search object with a default done callback
    test_search = new Trove.Search({
        done: search_done
    });

    test_search.limit_date_range('1900');
    started = true;
}

function documentReady(jQuery) {

    if (typeof Symbol() === 'symbol') {
        console.log('your browser has symbol');
    }

    $('.ui.sidebar').sidebar('attach events', '.searchlimits');

    $('.ui.normal.dropdown').dropdown();

    $('#search-prompt').on('keyup', function (evt) {
        if(evt.keyCode == 13)
            search( $(this).val() );
    });

    $('#search-previous').on('click', search_previous);
    $('#search-next').on('click', search_next);

    zone_dropdown = $('.ui.zone.dropdown');
    for (z in Trove.ZONE) {
        zone_dropdown.append('<option value="' + Trove.ZONE[z] + '">' + Trove.ZONE[z].capitalize() + '</option>')
    }
    zone_dropdown.dropdown({
        useLabels: false
    });

    $('#start').on('click', start);
}

$(document).ready(documentReady);
