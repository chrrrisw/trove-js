var trovekey = $("#trovekey");
var trovesearch = $("#trovesearch");
var initbutton = $("#initbutton");
var searchbutton = $("#searchbutton");
var newspapertable = $("#newspapertable");

var newspaper_search = new Trove.Search({
    zones: [Trove.ZONES.NEWSPAPER],
    done: newspaper_search_done
});

function newspaper_search_done(s) {
    var idlink, snippet;
    for (var index in s.items[Trove.ZONES.NEWSPAPER]) {
        idlink = "<a href='" +
            s.items[Trove.ZONES.NEWSPAPER][index].troveUrl +
            "'>" +
            s.items[Trove.ZONES.NEWSPAPER][index].id +
            "</a>";
        snippet = s.items[Trove.ZONES.NEWSPAPER][index].snippet;
        newspapertable.append("<tr><td>" + idlink + "</td><td>" + snippet + "</td></tr>");
    }
}

function search_newspapers() {
    ga('send', 'event', 'trove', 'searched_newspapers');
    newspaper_search.query({
        terms: trovesearch.val(),
        number: 10
    });
}

function initialise_trove() {
    ga('send', 'event', 'trove', 'initialised');
    Trove.init(trovekey.val());
}


function documentReady(jQuery) {
    searchbutton.click(search_newspapers);
    initbutton.click(initialise_trove);
}

$(document).ready(documentReady);
