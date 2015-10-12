var trovekey = $("#trovekey");
var trovesearch = $("#trovesearch");
var initbutton = $("#initbutton");
var searchbutton = $("searchbutton");

function newspaper_search_done(s) {
    console.log("newspaper_search_done");

}

function search() {
    console.log("search");
}

function initialise() {
    console.log("initialise");
    Trove.init(trovekey.val());
}


function documentReady(jQuery) {
    initbutton.on('press', initialise);
    searchbutton.on('click', search);
}

$(document).ready(documentReady);
