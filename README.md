# trove-js
A JavaScript library to access the National Library of Australia's (NLA) Trove API.

The Trove website can be found at: http://trove.nla.gov.au

Trove's API is documented at: http://help.nla.gov.au/trove/building-with-trove/api-technical-guide

This library works with: http://api.trove.nla.gov.au

A simple live search example is [here](http://chrrrisw.github.io/trove-js/).

## If you just want to use the library in your webpage
1. Get a Trove API key: [see here](#getting_key)
2. Download dist/trove-api.js or dist/trove-api.min.js
3. Include it in your web page
4. Use it

## Developing the library

Source files are in `src`, concatenated and minified distribution files are in `dist`.

You'll need `npm` and `grunt-cli` installed to generate the distribution files.

Clone this repository, and go to the directory created. Type:

```bash
npm install
```

This will install the dependencies for building and testing.

There are a number of grunt tasks defined, but be aware that the unit tests will need a Trove API key in the `__key_file__` file.

| Task      | Description
|:--------- |:-------------
| default   | Check code style, generate the docs, run unit tests, concatenate and uglify the source files.
| prepare   | Used to prepare the code for uploading to GitHub (code style, docs, concat and uglify).
| test      | Checks code style and runs unit tests (you'll need an API key to run the tests).

To build the dist/trove-api.js after modifying a source file just type:

```bash
grunt
```

to run the default task, or

```bash
grunt prepare
```

which should check your files for code style and produce a concatenated file, as well as an uglified one.

## <a name="getting_key"></a>Getting an API key
You'll need to get an API key first, by signing up and requesting one. Instructions for doing so are found at [Trove Help](http://help.nla.gov.au/trove/building-with-trove/api).

Both the unit tests and the demo page will load a key from the `__key_file__` file. So if you want to run the tests or
try out the demo page, put your key in this file (__DON'T commit and push this change to GitHub__).

Please comply with the conditions of use, an put "powered by trove" somewhere on your site.

## Library initialisation
In your JavaScript, initialise the library first giving it your key:

```javascript
Trove.init(your_key);
```

## Asynchrony
Remember that each time you make a call for data, the data will not be available until the Trove servers respond. For example, if you were to write:

```javascript
var article = new Trove.NewspaperArticle({
    init: 18342701
});
console.log(article.heading);
```

you would, more than likely, see 'undefined' at the console.  For this reason, the API provides a parameter for a function to be called when the request completes:

```javascript
var article = new Trove.NewspaperArticle({
    init: 18342701,
    done: function (a) {console.log(a.heading)};
});
```

You could also write:

```javascript
function done_callback(a) {
    console.log(a.heading);
}

var article = new Trove.NewspaperArticle({
    init: 18342701,
    done: done_callback
});
```

to get the same result. The parameter to the called function is the object that has been updated by the request.

## Examples and Documentation

Please see the [wiki](https://github.com/chrrrisw/trove-js/wiki) for examples

There are API docs [here](https://github.com/chrrrisw/trove-js/blob/master/docs/api.md) and you can build HTML API pages using ```grunt jsdoc```.

There is a simple search example at http://chrrrisw.github.io/trove-js/
