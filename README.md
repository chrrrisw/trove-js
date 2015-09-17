# trove-js
A JavaScript library to access the National Library of Australia's Trove API

You'll need to get an API key first, by signing up and requesting one. Instructions for doing so are found at [Trove Help](http://help.nla.gov.au/trove/building-with-trove/api).

Then you'll need to include the trove-api.js in your HTML.

In your JavaScript, initialise the library first giving it your key:

    Trove.init( *your_key* );

Getting a list of newpapers:

    var newspaper_list  = new Trove.NewspaperList();
    nl.get();

    or

    nl.get("vic");
    