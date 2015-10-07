// Should start a test server, instead of querying Trove.

QUnit.test("init test", function(assert) {
    var key_file_done = assert.async();
    // Get the key_file
    $.get('/__key_file__', function(data) {
        data = data.replace(/(\r\n|\n|\r)/gm, '');
        Trove.init(data);
        assert.equal(Trove.trove_key, data, "Key is set");
        key_file_done();
    });
});

QUnit.test("newspaper list test", function(assert) {
    var list_done = assert.async();
    var nl = new Trove.NewspaperList({
        state: Trove.STATES.ACT,
        done: function(n) {
            // console.dir(n.newspapers);
            for (var np in n.newspapers) {
                // console.log(JSON.stringify(n.newspapers[np], null, '\t'));
            }
            assert.ok(n.newspapers.length > 0, "Checking newspapers > 0");
            list_done();
        }
    });
});

QUnit.test("newspaper article test", function(assert) {
    var article_done = assert.async();
    var identifier = 73194857;
    var nl = new Trove.NewspaperArticle({
        init: identifier,
        reclevel: Trove.RECLEVEL.FULL,
        includes: [Trove.INCLUDES.TAGS, Trove.INCLUDES.COMMENTS, Trove.INCLUDES.ARTICLETEXT],
        done: function(n) {
            // console.dir(n.newspapers);
            assert.equal(n.id, identifier, "Checking newspaper id");
            // console.log(JSON.stringify(n, null, '\t'));
            article_done();
        }
    });
});

QUnit.test("book test", function(assert) {
    var book_done = assert.async();
    var identifier = 24834153;
    var nl = new Trove.Book({
        init: identifier,
        reclevel: Trove.RECLEVEL.FULL,
        includes: [Trove.INCLUDES.TAGS, Trove.INCLUDES.COMMENTS],
        done: function(b) {
            assert.equal(b.id, identifier, "Checking book id");
            // console.log(JSON.stringify(b, null, '\t'));
            book_done();
        }
    });
});

QUnit.test("book and newspaper zone search test", function(assert) {
    var search_done = assert.async();
    var search = new Trove.Search();
    var num_records = 4;
    var terms = 'periwinkle';
    var zones = [Trove.ZONES.BOOK, Trove.ZONES.NEWSPAPER];

    search.limit_date_range('188');
    search.query({
        terms: terms,
        zones: zones,
        number: num_records,
        reclevel: Trove.RECLEVEL.FULL,
        done: function(s) {
            // console.log(s._last_search);
            assert.equal(s._last_search.zone, zones.join(','), "Checking zone");
            assert.equal(s._last_search.q, terms, "Checking query terms");
            assert.equal(s._last_search.s, 0, "Checking start");
            assert.equal(s._last_search.n, num_records, "Checking number");
            var skeys = Object.keys(s.items);
            var items;
            for (var index in skeys) {
                items = s.items[skeys[index]];
                for (var item_index in items) {
                    // var ikeys = Object.keys(items[item_index]);
                    // console.log(JSON.stringify(items[item_index], null, '\t'));
                }
            }
            search_done();
        },
        fail: function(s) {
            console.error('Failed');
            search_done();
        }
    });
});

QUnit.test("default zone search test", function(assert) {
    var search_done = assert.async();
    var search = new Trove.Search();
    var num_records = 4;
    var terms = 'webb';

    search.query({
        terms: terms,
        number: num_records,
        done: function(s) {
            // console.log(s._last_search);
            assert.equal(s._last_search.zone, Trove.ZONES.ALL, "Checking default zone");
            assert.equal(s._last_search.q, terms, "Checking query terms");
            assert.equal(s._last_search.s, 0, "Checking start");
            assert.equal(s._last_search.n, num_records, "Checking number");
            search_done();
            for (var zone in Trove.ZONES) {
                // console.log(Trove.ZONES[zone], s.zone_list(Trove.ZONES[zone]).length);
            }
        },
        fail: function(s) {
            console.error('Failed');
            search_done();
        }
    });
});

QUnit.test("newspaper zone search test", function(assert) {
    var search_done = assert.async();
    var search = new Trove.Search();
    var num_records = 4;
    var terms = 'webb';
    var zones = [Trove.ZONES.NEWSPAPER];

    search.query({
        terms: terms,
        zones: zones,
        number: num_records,
        sort: Trove.SORTBY.DATEASC,
        limits: {
            category: Trove.CATEGORIES.FAMILY_NOTICES,
            title: 34,
            decade: 189
        },
        done: function(s) {
            // console.log(s._last_search);
            var article_list = s.zone_list(Trove.ZONES.NEWSPAPER);
            for (var index in article_list) {
                // console.log(JSON.stringify(article_list[index], null, '\t'));
            }
            assert.equal(s._last_search.zone, zones.join(','), "Checking newspaper zone");
            assert.equal(s._last_search.q, terms, "Checking query terms");
            assert.equal(s._last_search.s, 0, "Checking start");
            assert.equal(s._last_search.n, num_records, "Checking number");
            search_done();
        },
        fail: function(s) {
            console.error('Failed');
            search_done();
        }
    });
});

QUnit.test("search next and previous test", function(assert) {
    var search_done = assert.async();
    var next_done = assert.async();
    var previous_done = assert.async();
    var search = new Trove.Search();
    var num_records = 4;
    var terms = 'webb';
    var zones = [Trove.ZONES.NEWSPAPER];

    search.query({
        terms: terms,
        zones: zones,
        number: num_records,
        start: 0,
        done: function(s1) {
            search.next({
                done: function(s) {
                    // console.log(s._last_search);
                    assert.equal(s._last_search.s, num_records, "Checking start");
                    assert.equal(s._last_search.n, num_records, "Checking number");
                    search.previous({
                        done: function(s) {
                            // console.log(s._last_search);
                            assert.equal(s._last_search.s, 0, "Checking start");
                            assert.equal(s._last_search.n, num_records, "Checking number");
                            previous_done();
                        }
                    });
                    next_done();
                }
            });
            search_done();
        }
    });

});

QUnit.test("facet test", function(assert) {
    var num_records = 4;
    var search = new Trove.Search();

    assert.equal(search.facets.length, 0, "Checking facets list");
    search.add_facet(Trove.FACETS.TITLE);
    search.add_facet(Trove.FACETS.CATEGORY);
    assert.equal(search.facets.length, 2, "Checking facets list");
    assert.equal(search.facets[0], Trove.FACETS.TITLE, "Checking title");
    assert.equal(search.facets[1], Trove.FACETS.CATEGORY, "Checking category");

    var search_done = assert.async();
    var facets = search.facets.join(',');
    var terms = 'barnacle';
    var zones = [Trove.ZONES.NEWSPAPER];
    search.query({
        terms: terms,
        zones: zones,
        number: num_records,
        done: function(s) {
            assert.equal(s._last_search.facet, facets, "Checking facets");
            search_done();
        },
        fail: function(s) {
            console.error('Failed');
            search_done();
        }
    });
});
