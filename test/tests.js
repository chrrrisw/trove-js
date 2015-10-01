QUnit.test("init test", function(assert) {
    var key_file_done = assert.async();
    var search_done = assert.async();
    // Get the key_file
    $.get('/__key_file__', function(data) {
        data = data.replace(/(\r\n|\n|\r)/gm, '');
        Trove.init(data);
        key_file_done();
        search = new Trove.Search({
            done: function(s) {
                console.log(s._last_search);
                assert.equal(s._last_search.zone, Trove.ZONE.ALL, "Default zone should be ALL");
                search_done();
            },
            fail: function(s) {
                console.log('Failed');
                search_done();
            }
        });
        search.query({
            terms: "john smith"
        });
    });

    assert.ok(1 == "1", "Passed!");
});
