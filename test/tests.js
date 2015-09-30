QUnit.test( "init test", function( assert ) {
    // Get the key_file
    $.get('/__key_file__', function(data) {
        Trove.init(data);
        search = new Trove.Search({
            done: function(s) {
                console.log(s._last_search);
                assert.ok( s.__last_search.zone == 'all', "Default zone passed");
            }
        });
        search.query({
            terms: "john smith"
        });
    });

    assert.ok( 1 == "1", "Passed!" );
});
