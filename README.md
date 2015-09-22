# trove-js
A JavaScript library to access the National Library of Australia's Trove API

## Getting an API key
You'll need to get an API key first, by signing up and requesting one. Instructions for doing so are found at [Trove Help](http://help.nla.gov.au/trove/building-with-trove/api).

Please comply with the conditions of use, an put "powered by trove" somewhere on your site.

## Library initialisation
In your JavaScript, initialise the library first giving it your key:

    Trove.init( *your_key* );

## Asynchrony
Remember that each time you make a call for data, the data will not be available until the Trove servers respond. For example, if you were to write:

    var article = new Trove.NewspaperArticle({
        init :18342701
    });
    console.log(article.heading);

you would, more than likely, see 'undefined' at the console.  For this reason, the API provides a second parameter for a function to be called when the request completes:

    var article = new Trove.NewspaperArticle({
        init :18342701,
        done: function (a) {console.log(a.heading)};
    });

You could also write:

    function done_callback(a) {
        console.log(a.heading);
    }

    var article = new Trove.NewspaperArticle({
        init :18342701,
        done : done_callback
    });

to get the same result. The parameter to the called function is the object that has been updated by the request.

## Examples

Please see the [wiki](https://github.com/chrrrisw/trove-js/wiki) for examples
