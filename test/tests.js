// Should start a test server, instead of querying Trove.
var search = new Trove.Search();

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

QUnit.test("default zone search test", function(assert) {
    var search_done = assert.async();
    var terms = 'periwinkle';
    search.query({
        terms: terms,
        done: function(s) {
            // console.log(s._last_search);
            assert.equal(s._last_search.zone, Trove.ZONE.ALL, "Checking default zone");
            assert.equal(s._last_search.q, terms, "Checking query terms");
            assert.equal(s._last_search.s, 0, "Checking start");
            assert.equal(s._last_search.n, 20, "Checking number");
            search_done();
        },
        fail: function(s) {
            console.log('Failed');
            search_done();
        }
    });
});

QUnit.test("newspaper zone search test", function(assert) {
    var search_done = assert.async();
    var terms = 'periwinkle';
    var zones = [Trove.ZONE.NEWSPAPER];
    search.query({
        terms: terms,
        zones: zones,
        done: function(s) {
            // console.log(s._last_search);
            assert.equal(s._last_search.zone, zones.join(','), "Checking newspaper zone");
            assert.equal(s._last_search.q, terms, "Checking query terms");
            assert.equal(s._last_search.s, 0, "Checking start");
            assert.equal(s._last_search.n, 20, "Checking number");
            search_done();
        },
        fail: function(s) {
            console.log('Failed');
            search_done();
        }
    });
});

QUnit.test("search next test", function(assert) {
    var search_done = assert.async();
    search.next({
        done: function(s) {
            // console.log(s._last_search);
            assert.equal(s._last_search.s, 20, "Checking start");
            assert.equal(s._last_search.n, 20, "Checking number");
            search_done();
        }
    });
});

QUnit.test("search previous test", function(assert) {
    var search_done = assert.async();
    search.previous({
        done: function(s) {
            // console.log(s._last_search);
            assert.equal(s._last_search.s, 0, "Checking start");
            assert.equal(s._last_search.n, 20, "Checking number");
            search_done();
        }
    });
});

QUnit.test("facet test", function(assert) {
    assert.equal(search.facets.length, 0, "Checking facets list");
    search.add_facet(Trove.FACETS.TITLE);
    search.add_facet(Trove.FACETS.CATEGORY);
    assert.equal(search.facets.length, 2, "Checking facets list");
    assert.equal(search.facets[0], Trove.FACETS.TITLE, "Checking title");
    assert.equal(search.facets[1], Trove.FACETS.CATEGORY, "Checking category");

    var search_done = assert.async();
    var facets = search.facets.join(',');
    var terms = 'barnacle';
    var zones = [Trove.ZONE.NEWSPAPER];
    search.query({
        terms: terms,
        zones: zones,
        done: function(s) {
            assert.equal(s._last_search.facet, facets, "Checking facets");
            search_done();
        },
        fail: function(s) {
            console.log('Failed');
            search_done();
        }
    });
});
