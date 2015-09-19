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

    var search = new Trove.Search({
        zones: [Trove.ZONE.NEWS, Trove.ZONE.PIC],
        done_callback: function(s) {
            console.dir(s.response);
        }
    });

    search.query({
        terms: 'willoughby',
        start: 40,
        number: 4
    });
}

function start(evt) {
    test_trove($('#key_id').val());
}

function documentReady(jQuery) {

    $('.ui.sidebar').sidebar('attach events', '.searchlimits');

    $('.ui.normal.dropdown').dropdown();

    var zone_dropdown = $('.ui.zone.dropdown');
    zone_dropdown.dropdown({
        useLabels: false
    });

    $('#start').on('click', start);
}

$(document).ready(documentReady);
