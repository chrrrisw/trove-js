// // Should start a test server, instead of querying Trove.
QUnit.config.testTimeout = 15000;

QUnit.module( "work tests", function( hooks ) {
  // You can invoke the hooks methods more than once.
  hooks.before( function( assert ) {
    var key_file_done = assert.async();
    // Get the key_file
    $.get('../__key_file__', function(data) {
      data = data.replace(/(\r\n|\n|\r)/gm, '');

      Trove.init(data);
      assert.equal(Trove.trove_key, data, "Key is set");
      key_file_done();
    } );
  } );

  QUnit.test( "article test", function( assert ) {
    var article_done = assert.async();
    var identifier = 66672502;
    var my_article = new Trove.Article( {
      init: identifier,
      reclevel: Trove.RECLEVEL.FULL,
      includes: [Trove.INCLUDES.TAGS, Trove.INCLUDES.COMMENTS],
      done: function(returned) {
        assert.equal(returned.id, identifier, "Checking article id");
        // console.log(JSON.stringify(returned, null, '\t'));
        console.log("\t" + returned.id + " " + returned.title);
        article_done();
      }
    } );
  } );

  QUnit.test( "book test", function( assert ) {
    var book_done = assert.async();
    var identifier = 9920934;
    var my_book = new Trove.Book( {
      init: identifier,
      reclevel: Trove.RECLEVEL.FULL,
      includes: [Trove.INCLUDES.TAGS, Trove.INCLUDES.COMMENTS],
      done: function(returned) {
        assert.equal(returned.id, identifier, "Checking book id");
        // console.log(JSON.stringify(returned, null, '\t'));
        console.log("\t" + returned.id + " " + returned.title);
        book_done();
      }
    } );
  } );

  QUnit.test("collection test", function(assert) {
    var collection_done = assert.async();
    var identifier = 198289774;
    var my_collection = new Trove.Collection({
      init: identifier,
      reclevel: Trove.RECLEVEL.FULL,
      includes: [Trove.INCLUDES.TAGS, Trove.INCLUDES.COMMENTS],
      done: function(returned) {
        assert.equal(returned.id, identifier, "Checking collection id");
        // console.log(JSON.stringify(returned, null, '\t'));
        console.log("\t" + returned.id + " " + returned.title);
        collection_done();
      }
    });
  });

  QUnit.test("map test", function(assert) {
    var map_done = assert.async();
    var identifier = 189341370;
    var my_map = new Trove.Map({
      init: identifier,
      reclevel: Trove.RECLEVEL.FULL,
      includes: [Trove.INCLUDES.TAGS, Trove.INCLUDES.COMMENTS],
      done: function(returned) {
        assert.equal(returned.id, identifier, "Checking list id");
        // console.log(JSON.stringify(returned, null, '\t'));
        console.log("\t" + returned.id + " " + returned.title);
        map_done();
      }
    });
  });

  QUnit.test("music test", function(assert) {
    var music_done = assert.async();
    var identifier = 9291894;
    var my_music = new Trove.Music({
      init: identifier,
      reclevel: Trove.RECLEVEL.FULL,
      includes: [Trove.INCLUDES.TAGS, Trove.INCLUDES.COMMENTS],
      done: function(returned) {
        assert.equal(returned.id, identifier, "Checking music id");
        // console.log(JSON.stringify(returned, null, '\t'));
        console.log("\t" + returned.id + " " + returned.title);
        music_done();
      }
    });
  });

  QUnit.test("picture test", function(assert) {
    var picture_done = assert.async();
    var identifier = 208468572;
    var my_person = new Trove.Picture({
      init: identifier,
      reclevel: Trove.RECLEVEL.FULL,
      includes: [Trove.INCLUDES.TAGS, Trove.INCLUDES.COMMENTS],
      done: function(returned) {
        assert.equal(returned.id, identifier, "Checking picture id");
        // console.log(JSON.stringify(returned, null, '\t'));
        console.log("\t" + returned.id + " " + returned.title);
        picture_done();
      }
    });
  });


} );

QUnit.module( "list tests", function( hooks ) {

  // You can invoke the hooks methods more than once.
  hooks.before( function( assert ) {
    var key_file_done = assert.async();
    // Get the key_file
    $.get('../__key_file__', function(data) {
      data = data.replace(/(\r\n|\n|\r)/gm, '');
      Trove.init(data);
      assert.equal(Trove.trove_key, data, "Key is set");
      key_file_done();
    } );
  } );

  QUnit.test("contributor list test", function(assert) {
    assert.timeout(30000);
    var list_done = assert.async();
    var my_contributor_list = new Trove.ContributorList({
      // terms: 'light horse',
      done: function(returned) {
        // console.log('number of contributors', returned.contributors.length);
        for (var c in returned.contributors) {
          // console.log(JSON.stringify(returned.contributors[c], null, '\t'));
        }
        assert.ok(returned.contributors.length > 0, "Checking contributors > 0");
        returned.contributors[0].get({
          reclevel: Trove.RECLEVEL.FULL,
          done: function(returned2) {
              console.log(JSON.stringify(returned2, null, '\t'));
              list_done();
          }
        });
      },
      fail: function(returned) {
        list_done();
      }
    });
    my_contributor_list.get();
  });

  QUnit.test("list test", function(assert) {
    var list_done = assert.async();
    var identifier = 25390;
    var my_list = new Trove.List({
      init: identifier,
      reclevel: Trove.RECLEVEL.FULL,
      includes: [Trove.INCLUDES.TAGS, Trove.INCLUDES.COMMENTS],
      done: function(returned) {
        assert.equal(returned.id, identifier, "Checking list id");
        console.log(JSON.stringify(returned, null, '\t'));
        list_done();
      }
    });
  });

  QUnit.test("newspaper list test", function(assert) {
    var list_done = assert.async();
    var my_np_list = new Trove.NewspaperList({
      state: Trove.STATES.ACT,
      done: function(returned) {
        // console.log('number of newspapers', returned.newspapers.length);
        for (var np in returned.newspapers) {
          // console.log(JSON.stringify(returned.newspapers[np], null, '\t'));
          console.log("\t" + returned.newspapers[np].id + " " + returned.newspapers[np].title);
        }
        assert.ok(returned.newspapers.length > 0, "Checking newspapers > 0");
        returned.newspapers[0].get({
          includes: [Trove.INCLUDES.YEARS],
          range: '19250101-19251231',
          done: function(np) {
            console.log(JSON.stringify(np, null, '\t'));
            list_done();
          }
        });
      }
    });
  });

} );


//     // QUnit.test("contributor test", function(assert) {
//     // });

QUnit.module( "newspaper tests", function( hooks ) {

  // You can invoke the hooks methods more than once.
  hooks.before( function( assert ) {
    var key_file_done = assert.async();
    // Get the key_file
    $.get('../__key_file__', function(data) {
      data = data.replace(/(\r\n|\n|\r)/gm, '');
      Trove.init(data);
      assert.equal(Trove.trove_key, data, "Key is set");
      key_file_done();
    } );
  } );

  QUnit.test("newspaper article test", function(assert) {
    var article_done = assert.async();
    var identifier = 112823324;
    var my_np_article = new Trove.NewspaperArticle({
      init: identifier,
      reclevel: Trove.RECLEVEL.FULL,
      includes: [Trove.INCLUDES.TAGS, Trove.INCLUDES.COMMENTS, Trove.INCLUDES.ARTICLETEXT],
      done: function(returned) {
        // console.dir(returned.newspapers);
        assert.equal(returned.id, identifier, "Checking newspaper id");
        console.log(JSON.stringify(returned, null, '\t'));
        article_done();
      }
    });
  });

  QUnit.test("gazette article test", function(assert) {
    var article_done = assert.async();
    var identifier = 241299520;
    var my_np_article = new Trove.Gazette({
      init: identifier,
      reclevel: Trove.RECLEVEL.FULL,
      includes: [Trove.INCLUDES.TAGS, Trove.INCLUDES.COMMENTS, Trove.INCLUDES.ARTICLETEXT],
      done: function(returned) {
        // console.dir(returned.newspapers);
        assert.equal(returned.id, identifier, "Checking gazette id");
        console.log(JSON.stringify(returned, null, '\t'));
        article_done();
      }
    });
  });

  QUnit.test("newspaper title test", function(assert) {
    var title_done = assert.async();
    var identifier = 167;
    var my_np_title = new Trove.NewspaperTitle({
      init: identifier,
      reclevel: Trove.RECLEVEL.FULL,
      includes: [Trove.INCLUDES.YEARS],
      done: function(returned) {
        assert.equal(returned.id, identifier, "Checking newspaper title id");
        console.log(JSON.stringify(returned, null, '\t'));
        title_done();
      }
    });
  });

} );

QUnit.module( "search tests", function( hooks ) {

  // You can invoke the hooks methods more than once.
  hooks.before( function( assert ) {
    var key_file_done = assert.async();
    // Get the key_file
    $.get('../__key_file__', function(data) {
      data = data.replace(/(\r\n|\n|\r)/gm, '');
      Trove.init(data);
      assert.equal(Trove.trove_key, data, "Key is set");
      key_file_done();
    } );
  } );


  QUnit.test("book, newspaper and gazette zone search test", function(assert) {
    var search_done = assert.async();
    var search = new Trove.Search();
    var num_records = 4;
    var terms = 'faraday';
    var zones = [Trove.ZONES.BOOK, Trove.ZONES.NEWSPAPER, Trove.ZONES.GAZETTE];

    search.limit_date_range('188');
    search.query({
      terms: terms,
      zones: zones,
      number: num_records,
      reclevel: Trove.RECLEVEL.FULL,
      done: function(returned) {
        console.log(returned);
        assert.equal(returned.limits.decade, '188', "Checking date range");
        assert.equal(returned.reclevel, "full", "Checking reclevel");
        assert.equal(returned._last_search.zone, zones.join(','), "Checking zone");
        assert.equal(returned._last_search.q, terms, "Checking query terms");
        assert.equal(returned._last_search.s, '*', "Checking start");
        assert.equal(returned._last_search.n, num_records, "Checking number");
        var returned_zones = Object.keys(returned.items);
        var zone_items;
        for (var index in returned_zones) {
            zone_items = returned.items[returned_zones[index]];
            assert.ok(zone_items.length <= num_records, "checking number returned");
            // for (var item_index in zone_items) {
            //     console.log(JSON.stringify(zone_items[item_index], null, '\t'));
            // }
        }
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
    var terms = 'periwinkle';
    var zones = [Trove.ZONES.NEWSPAPER];
    var first_query = [];
    var num;

    search.query({
      terms: terms,
      zones: zones,
      number: num_records,
      bulkHarvest: true,
      done: function(s1) {

        assert.equal(s1.items.newspaper.length, num_records, "Checking number");

        // Store the results
        console.log(s1.items.newspaper);
        for (num in s1.items.newspaper) {
          first_query.push(s1.items.newspaper[num].id);
        }

        // Go to the next results
        search.next(Trove.ZONES.NEWSPAPER, {
          done: function(s2) {

            assert.equal(s2.items.newspaper.length, num_records, "Checking number");

            // Store the results
            console.log(s2.items.newspaper);

            // console.log(s._last_search);
            // assert.equal(s2._last_search.s, num_records, "Checking start");

            // Go back to the previous results
            search.previous(Trove.ZONES.NEWSPAPER, {
              done: function(s3) {

                assert.equal(s3.items.newspaper.length, num_records, "Checking number");

                // Check that the results are the same as the first time
                console.log(s3.items.newspaper);
                for (num in s3.items.newspaper) {
                  assert.equal(s3.items.newspaper[num].id, first_query[num], "Checking item");
                }

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

} );

// // QUnit.test("person test", function(assert) {
// //     var person_done = assert.async();
// //     var identifier = 467965;
// //     var my_person = new Trove.Person({
// //         init: identifier,
// //         reclevel: Trove.RECLEVEL.FULL,
// //         includes: [Trove.INCLUDES.TAGS, Trove.INCLUDES.COMMENTS],
// //         done: function(returned) {
// //             assert.equal(returned.id, identifier, "Checking person id");
// //             console.log(JSON.stringify(returned, null, '\t'));
// //             person_done();
// //         }
// //     });
// // });

// // QUnit.test("work test", function(assert) {
// // });

// // QUnit.test("default zone search test", function(assert) {
// //     var search_done = assert.async();
// //     var search = new Trove.Search();
// //     var num_records = 4;
// //     var terms = 'webb';

// //     search.query({
// //         terms: terms,
// //         number: num_records,
// //         done: function(s) {
// //             // console.log(s._last_search);
// //             assert.equal(s._last_search.zone, Trove.ZONES.ALL, "Checking default zone");
// //             assert.equal(s._last_search.q, terms, "Checking query terms");
// //             assert.equal(s._last_search.s, 0, "Checking start");
// //             assert.equal(s._last_search.n, num_records, "Checking number");

// //             // for (var zone in Trove.ZONES) {
// //             //     console.log(Trove.ZONES[zone], s.zone_list(Trove.ZONES[zone]).length);
// //             // }

// //             // console.log(JSON.stringify(s.zone_list(Trove.ZONES.PEOPLE)[0], null, '\t'));

// //             // s.zone_list(Trove.ZONES.PEOPLE)[0].get({
// //             //     // reclevel: Trove.RECLEVEL.FULL,
// //             //     // includes: [Trove.INCLUDES.ALL],
// //             //     done: function(p) {
// //             //         console.log(JSON.stringify(p, null, '\t'));
// //             //         search_done();
// //             //     },
// //             //     fail: function(p) {
// //             //         search_done();
// //             //     }
// //             // });

// //             search_done();
// //         },
// //         fail: function(s) {
// //             console.error('Failed');
// //             search_done();
// //         }
// //     });
// // });

// // QUnit.test("newspaper zone search test", function(assert) {
// //     var search_done = assert.async();
// //     var search = new Trove.Search();
// //     var num_records = 4;
// //     var terms = 'webb';
// //     var zones = [Trove.ZONES.NEWSPAPER];

// //     search.query({
// //         terms: terms,
// //         zones: zones,
// //         number: num_records,
// //         sort: Trove.SORTBY.DATEASC,
// //         limits: {
// //             category: Trove.CATEGORIES.FAMILY_NOTICES,
// //             title: 34,
// //             decade: 189
// //         },
// //         done: function(s) {
// //             // console.log(s._last_search);
// //             var article_list = s.zone_list(Trove.ZONES.NEWSPAPER);
// //             for (var index in article_list) {
// //                 // console.log(JSON.stringify(article_list[index], null, '\t'));
// //             }
// //             assert.equal(s._last_search.zone, zones.join(','), "Checking newspaper zone");
// //             assert.equal(s._last_search.q, terms, "Checking query terms");
// //             assert.equal(s._last_search.s, 0, "Checking start");
// //             assert.equal(s._last_search.n, num_records, "Checking number");
// //             search_done();
// //         },
// //         fail: function(s) {
// //             console.error('Failed');
// //             search_done();
// //         }
// //     });
// // });
