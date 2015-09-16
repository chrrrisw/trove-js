# trove-js
A JavaScript library to access the National Library of Australia's Trove API

Initialise first:

    Trove.init(your_api_key_here);

Getting a list of newpapers:

    var newspaper_list  = new Trove.NewspaperList();
    nl.get();

    or

    nl.get("vic");
    