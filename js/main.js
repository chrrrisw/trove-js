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
    console.log("newspaper_search_done");
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
    console.log("search");
    newspaper_search.query({
        terms: trovesearch.val(),
        number: 10
    });
}

function initialise_trove() {
    console.log("initialise");
    Trove.init(trovekey.val());
}


function documentReady(jQuery) {
    console.log('documentReady');
    searchbutton.click(search_newspapers);
    initbutton.click(initialise_trove);
}

$(document).ready(documentReady);
