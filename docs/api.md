<a name="Trove"></a>
## Trove : <code>object</code>
**Kind**: global namespace

* [Trove](#Trove) : <code>object</code>
  * [.Article](#Trove.Article)
    * [new Article(options)](#new_Trove.Article_new)
  * [.Book](#Trove.Book)
    * [new Book(options)](#new_Trove.Book_new)
  * [.Collection](#Trove.Collection)
    * [new Collection()](#new_Trove.Collection_new)
  * [.List](#Trove.List)
    * [new List()](#new_Trove.List_new)
  * [.Map](#Trove.Map)
    * [new Map(options)](#new_Trove.Map_new)
  * [.Music](#Trove.Music)
    * [new Music(options)](#new_Trove.Music_new)
  * [.Newspaper](#Trove.Newspaper)
    * [new Newspaper(options)](#new_Trove.Newspaper_new)
    * [.get((Number))](#Trove.Newspaper+get)
  * [.NewspaperArticle](#Trove.NewspaperArticle)
    * [new NewspaperArticle(options)](#new_Trove.NewspaperArticle_new)
    * [.get(options)](#Trove.NewspaperArticle+get)
    * [.get_newspaper(done)](#Trove.NewspaperArticle+get_newspaper) ⇒ <code>Newspaper</code>
  * [.NewspaperList](#Trove.NewspaperList)
    * [new NewspaperList(options)](#new_Trove.NewspaperList_new)
    * [.get(options)](#Trove.NewspaperList+get)
  * [.Person](#Trove.Person)
    * [new Person(options)](#new_Trove.Person_new)
  * [.Picture](#Trove.Picture)
    * [new Picture(options)](#new_Trove.Picture_new)
  * [.Search](#Trove.Search)
    * [new Search(options)](#new_Trove.Search_new)
    * [.remove_facet(facet)](#Trove.Search+remove_facet)
    * [.add_facet(facet)](#Trove.Search+add_facet)
    * [.clear_date_range_limit()](#Trove.Search+clear_date_range_limit)
    * [.limit_date_range(start)](#Trove.Search+limit_date_range)
    * [.query(options)](#Trove.Search+query)
    * [.requery(options, delta)](#Trove.Search+requery)
    * [.next(options)](#Trove.Search+next)
    * [.previous(options)](#Trove.Search+previous)
  * [.ZONE](#Trove.ZONE) : <code>enum</code>
  * [.FACETS](#Trove.FACETS) : <code>enum</code>
  * [.LIMITS](#Trove.LIMITS) : <code>enum</code>
  * [.SORTBY](#Trove.SORTBY) : <code>enum</code>
  * [.RECLEVEL](#Trove.RECLEVEL) : <code>enum</code>
  * [.INCLUDE](#Trove.INCLUDE) : <code>enum</code>
  * [.STATES](#Trove.STATES) : <code>enum</code>
  * [.CATEGORIES](#Trove.CATEGORIES) : <code>enum</code>
  * [.init(key)](#Trove.init)

<a name="Trove.Article"></a>
### Trove.Article
**Kind**: static class of <code>[Trove](#Trove)</code>
**Properties**

| Name | Type |
| --- | --- |
| options.contributor | <code>Array</code> |
| options.holdingsCount | <code>number</code> |
| options.id | <code>string</code> |
| options.issued | <code>number</code> &#124; <code>string</code> |
| options.relevance | <code>Object</code> |
| options.title | <code>string</code> |
| options.troveUrl | <code>string</code> |
| options.type | <code>Array</code> |
| options.url | <code>string</code> |
| options.versionCount | <code>number</code> |

<a name="new_Trove.Article_new"></a>
#### new Article(options)
A class to hold a journal article


| Param | Type |
| --- | --- |
| options | <code>Object</code> |

<a name="Trove.Book"></a>
### Trove.Book
**Kind**: static class of <code>[Trove](#Trove)</code>
**Properties**

| Name | Type |
| --- | --- |
| options.contributor | <code>Array</code> |
| options.holdingsCount | <code>number</code> |
| options.id | <code>string</code> |
| options.issued | <code>number</code> &#124; <code>string</code> |
| options.relevance | <code>Object</code> |
| options.title | <code>string</code> |
| options.troveUrl | <code>string</code> |
| options.type | <code>Array</code> |
| options.url | <code>string</code> |

<a name="new_Trove.Book_new"></a>
#### new Book(options)
A class to hold a book


| Param | Type |
| --- | --- |
| options | <code>Object</code> |

<a name="Trove.Collection"></a>
### Trove.Collection
**Kind**: static class of <code>[Trove](#Trove)</code>
<a name="new_Trove.Collection_new"></a>
#### new Collection()
A class to hold a collection

<a name="Trove.List"></a>
### Trove.List
**Kind**: static class of <code>[Trove](#Trove)</code>
<a name="new_Trove.List_new"></a>
#### new List()
A class to hold a list

<a name="Trove.Map"></a>
### Trove.Map
**Kind**: static class of <code>[Trove](#Trove)</code>
**Properties**

| Name | Type |
| --- | --- |
| options.contributor | <code>Array</code> |
| options.holdingsCount | <code>number</code> |
| options.id | <code>string</code> |
| options.identifier | <code>Array</code> |
| options.issued | <code>number</code> &#124; <code>string</code> |
| options.relevance | <code>Object</code> |
| options.title | <code>string</code> |
| options.troveUrl | <code>string</code> |
| options.type | <code>Array</code> |
| options.url | <code>string</code> |
| options.versionCount | <code>number</code> |

<a name="new_Trove.Map_new"></a>
#### new Map(options)
A class to hold a map


| Param | Type |
| --- | --- |
| options | <code>Object</code> |

<a name="Trove.Music"></a>
### Trove.Music
**Kind**: static class of <code>[Trove](#Trove)</code>
**Properties**

| Name | Type |
| --- | --- |
| options.contributor | <code>Array</code> |
| options.holdingsCount | <code>number</code> |
| options.id | <code>string</code> |
| options.issued | <code>number</code> &#124; <code>string</code> |
| options.relevance | <code>Object</code> |
| options.title | <code>string</code> |
| options.troveUrl | <code>string</code> |
| options.type | <code>Array</code> |
| options.url | <code>string</code> |
| options.versionCount | <code>number</code> |

<a name="new_Trove.Music_new"></a>
#### new Music(options)
A class to hold music


| Param | Type |
| --- | --- |
| options | <code>Object</code> |

<a name="Trove.Newspaper"></a>
### Trove.Newspaper
**Kind**: static class of <code>[Trove](#Trove)</code>
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| options.init | <code>number</code> &#124; <code>string</code> | If specified, will request the data immediately id title state issn troveUrl startDate endDate |


* [.Newspaper](#Trove.Newspaper)
  * [new Newspaper(options)](#new_Trove.Newspaper_new)
  * [.get((Number))](#Trove.Newspaper+get)

<a name="new_Trove.Newspaper_new"></a>
#### new Newspaper(options)
An object to hold an instance of a newspaper


| Param | Type |
| --- | --- |
| options | <code>Object</code> |

<a name="Trove.Newspaper+get"></a>
#### newspaper.get((Number))
Get information about the specified newspaper

**Kind**: instance method of <code>[Newspaper](#Trove.Newspaper)</code>

| Param | Description |
| --- | --- |
| (Number) | identifier |

<a name="Trove.NewspaperArticle"></a>
### Trove.NewspaperArticle
**Kind**: static class of <code>[Trove](#Trove)</code>
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| options.init | <code>number</code> | The article identifier for which to retrieve data on construction. |
| options.done | <code>function</code> | The default callback called when data has been returned from the Trove servers. |


* [.NewspaperArticle](#Trove.NewspaperArticle)
  * [new NewspaperArticle(options)](#new_Trove.NewspaperArticle_new)
  * [.get(options)](#Trove.NewspaperArticle+get)
  * [.get_newspaper(done)](#Trove.NewspaperArticle+get_newspaper) ⇒ <code>Newspaper</code>

<a name="new_Trove.NewspaperArticle_new"></a>
#### new NewspaperArticle(options)
A Class to hold newspaper articles


| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | An object specifying the default options |

<a name="Trove.NewspaperArticle+get"></a>
#### newspaperArticle.get(options)
Retrieve article information based on identifier

**Kind**: instance method of <code>[NewspaperArticle](#Trove.NewspaperArticle)</code>

| Param | Type |
| --- | --- |
| options | <code>Object</code> |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| options.identifier | <code>number</code> | The article identifier for which to retrieve data. |
| options.done | <code>function</code> | The callback called when data has been returned from the Trove servers. This overrides the default calback. |

<a name="Trove.NewspaperArticle+get_newspaper"></a>
#### newspaperArticle.get_newspaper(done) ⇒ <code>Newspaper</code>
Retrieve newspaper information for the article

**Kind**: instance method of <code>[NewspaperArticle](#Trove.NewspaperArticle)</code>
**Returns**: <code>Newspaper</code> - the Newspaper object

| Param | Type |
| --- | --- |
| done | <code>function</code> |

<a name="Trove.NewspaperList"></a>
### Trove.NewspaperList
The NewspaperList class is a wrapper around the "http://api.trove.nla.gov.au/newspaper/titles" API. If no state is specified on construction, you will have to call the get() method to actually request the data from Trove. If the state is specified on construction, the get() method will be called immediately. The get() method, called without a state, will return the list of all the newpapers digitised by Trove.

**Kind**: static class of <code>[Trove](#Trove)</code>
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| options.state | <code>string</code> | The state for which the newspaper list will be returned (optional). If specified, the request will be made immediately. |
| options.done | <code>string</code> | The callback on receipt of data (optional). |
| options.fail | <code>function</code> | The callback on failure (optional). |


* [.NewspaperList](#Trove.NewspaperList)
  * [new NewspaperList(options)](#new_Trove.NewspaperList_new)
  * [.get(options)](#Trove.NewspaperList+get)

<a name="new_Trove.NewspaperList_new"></a>
#### new NewspaperList(options)
A list of Newspapers for a specific state or all states.


| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | An object specifying the options for this NewspaperList. |

<a name="Trove.NewspaperList+get"></a>
#### newspaperList.get(options)
Get the data from the Trove server. If done or fail are set, they will be copied into the object, overwriting any existing callbacks.

**Kind**: instance method of <code>[NewspaperList](#Trove.NewspaperList)</code>

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Options for the request. |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| options.state | <code>string</code> | The state for which to request data (optional). If not set, all states will be returned. |
| options.done | <code>function</code> | The callback on receipt of data (optional). |
| options.fail | <code>function</code> | The callback on failure (optional). |

<a name="Trove.Person"></a>
### Trove.Person
**Kind**: static class of <code>[Trove](#Trove)</code>
**Properties**

| Name | Type |
| --- | --- |
| options.id | <code>string</code> |
| options.troveUrl | <code>string</code> |
| options.url | <code>string</code> |

<a name="new_Trove.Person_new"></a>
#### new Person(options)
A class to hold a person


| Param | Type |
| --- | --- |
| options | <code>Object</code> |

<a name="Trove.Picture"></a>
### Trove.Picture
**Kind**: static class of <code>[Trove](#Trove)</code>
**Properties**

| Name | Type |
| --- | --- |
| options.holdingsCount | <code>number</code> |
| options.id | <code>string</code> |
| options.identifier | <code>Array</code> |
| options.relevance | <code>Object</code> |
| options.title | <code>string</code> |
| options.troveUrl | <code>string</code> |
| options.type | <code>Array</code> |
| options.url | <code>string</code> |
| options.versionCount | <code>number</code> |

<a name="new_Trove.Picture_new"></a>
#### new Picture(options)
A class to hold a picture


| Param | Type |
| --- | --- |
| options | <code>Object</code> |

<a name="Trove.Search"></a>
### Trove.Search
**Kind**: static class of <code>[Trove](#Trove)</code>
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| options.zones | <code>string</code> &#124; <code>Array</code> | The default zone or list of zones to search |
| options.done | <code>function</code> | The callback called on receipt of data |
| options.fail | <code>function</code> | The callback called on a failed query |
| options.terms | <code>string</code> | The default search terms |


* [.Search](#Trove.Search)
  * [new Search(options)](#new_Trove.Search_new)
  * [.remove_facet(facet)](#Trove.Search+remove_facet)
  * [.add_facet(facet)](#Trove.Search+add_facet)
  * [.clear_date_range_limit()](#Trove.Search+clear_date_range_limit)
  * [.limit_date_range(start)](#Trove.Search+limit_date_range)
  * [.query(options)](#Trove.Search+query)
  * [.requery(options, delta)](#Trove.Search+requery)
  * [.next(options)](#Trove.Search+next)
  * [.previous(options)](#Trove.Search+previous)

<a name="new_Trove.Search_new"></a>
#### new Search(options)
An object to perform searches


| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | An object specifying the options for this Search |

<a name="Trove.Search+remove_facet"></a>
#### search.remove_facet(facet)
Remove the named facet.

**Kind**: instance method of <code>[Search](#Trove.Search)</code>

| Param | Type | Description |
| --- | --- | --- |
| facet | <code>string</code> | The name of the facet to remove |

<a name="Trove.Search+add_facet"></a>
#### search.add_facet(facet)
Add the named facet.

**Kind**: instance method of <code>[Search](#Trove.Search)</code>

| Param | Type | Description |
| --- | --- | --- |
| facet | <code>string</code> | The name of the facet to add |

<a name="Trove.Search+clear_date_range_limit"></a>
#### search.clear_date_range_limit()
Clear the date range limits.

**Kind**: instance method of <code>[Search](#Trove.Search)</code>
<a name="Trove.Search+limit_date_range"></a>
#### search.limit_date_range(start)
Set the limits on the date range returned

**Kind**: instance method of <code>[Search](#Trove.Search)</code>

| Param | Type | Description |
| --- | --- | --- |
| start | <code>string</code> | The date limit, one of: YYY for decade, YYYY for year, or YYYY-MM for month |

<a name="Trove.Search+query"></a>
#### search.query(options)
Query the Trove database.

**Kind**: instance method of <code>[Search](#Trove.Search)</code>

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | An object containing, at least, the terms to search for. |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| options.zones | <code>string</code> &#124; <code>Array</code> | The default zone or list of zones to search |
| options.terms | <code>string</code> | The default search terms |
| options.start | <code>number</code> |  |
| options.number | <code>number</code> |  |
| options.sort | <code>string</code> |  |
| options.reclevel | <code>string</code> |  |
| options.includes | <code>string</code> &#124; <code>Array</code> |  |
| options.limits | <code>string</code> &#124; <code>Array</code> |  |
| options.facets | <code>string</code> &#124; <code>Array</code> |  |

<a name="Trove.Search+requery"></a>
#### search.requery(options, delta)
Repeat the last query, with a delta applied to the start.

**Kind**: instance method of <code>[Search](#Trove.Search)</code>

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Options to be applied to the query |
| delta | <code>number</code> | The change to be applied to the start number (positive or negative). |

**Properties**

| Name | Type |
| --- | --- |
| options.done | <code>function</code> |
| options.fail | <code>function</code> |

<a name="Trove.Search+next"></a>
#### search.next(options)
Request the next search results

**Kind**: instance method of <code>[Search](#Trove.Search)</code>

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Options to be applied to the query |

**Properties**

| Name | Type |
| --- | --- |
| options.done | <code>function</code> |
| options.fail | <code>function</code> |

<a name="Trove.Search+previous"></a>
#### search.previous(options)
Request the previous search results

**Kind**: instance method of <code>[Search](#Trove.Search)</code>

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Options to be applied to the query |

**Properties**

| Name | Type |
| --- | --- |
| options.done | <code>function</code> |
| options.fail | <code>function</code> |

<a name="Trove.ZONE"></a>
### Trove.ZONE : <code>enum</code>
Enumeration for zones, can include multiple as a list

**Kind**: static enum property of <code>[Trove](#Trove)</code>
**Read only**: true
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| BOOK | <code>string</code> | <code>&quot;book&quot;</code> | The zone for books |
| PICTURE | <code>string</code> | <code>&quot;picture&quot;</code> | The zone for pictures |
| ARTICLE | <code>string</code> | <code>&quot;article&quot;</code> | The zone for journal articles |
| MUSIC | <code>string</code> | <code>&quot;music&quot;</code> | The zone for music |
| MAP | <code>string</code> | <code>&quot;map&quot;</code> | The zone for maps |
| COLLECTION | <code>string</code> | <code>&quot;collection&quot;</code> | The zone for collections |
| NEWSPAPER | <code>string</code> | <code>&quot;newspaper&quot;</code> | The zone for newspapers |
| LIST | <code>string</code> | <code>&quot;list&quot;</code> | The zone for lists |
| ALL | <code>string</code> | <code>&quot;all&quot;</code> | All of the above |

<a name="Trove.FACETS"></a>
### Trove.FACETS : <code>enum</code>
Enumeration for facets

**Kind**: static enum property of <code>[Trove](#Trove)</code>
**Read only**: true
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| FORMAT | <code>string</code> | <code>&quot;format&quot;</code> |
| DECADE | <code>string</code> | <code>&quot;decade&quot;</code> |
| YEAR | <code>string</code> | <code>&quot;year&quot;</code> |
| MONTH | <code>string</code> | <code>&quot;month&quot;</code> |
| LANGUAGE | <code>string</code> | <code>&quot;language&quot;</code> |
| AVAILABILITY | <code>string</code> | <code>&quot;availability&quot;</code> |
| AUSTRALIAN | <code>string</code> | <code>&quot;australian&quot;</code> |
| OCCUPATION | <code>string</code> | <code>&quot;occupation&quot;</code> |
| ZOOM | <code>string</code> | <code>&quot;zoom&quot;</code> |
| VENDORDB | <code>string</code> | <code>&quot;vendordb&quot;</code> |
| VENDOR | <code>string</code> | <code>&quot;vendor&quot;</code> |
| AUDIENCE | <code>string</code> | <code>&quot;audience&quot;</code> |
| TITLE | <code>string</code> | <code>&quot;title&quot;</code> |
| CATEGORY | <code>string</code> | <code>&quot;category&quot;</code> |
| ILLUSTRATED | <code>string</code> | <code>&quot;illustrated&quot;</code> |
| ILLTYPE | <code>string</code> | <code>&quot;illtype&quot;</code> |
| WORD | <code>string</code> | <code>&quot;word&quot;</code> |
| ALL | <code>string</code> | <code>&quot;all&quot;</code> |

<a name="Trove.LIMITS"></a>
### Trove.LIMITS : <code>enum</code>
Enumeration for limits.
Use these to limit the results of a search.

**Kind**: static enum property of <code>[Trove](#Trove)</code>
**Read only**: true
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| FORMAT | <code>string</code> | <code>&quot;l-format&quot;</code> | Limit by format. |
| DECADE | <code>string</code> | <code>&quot;l-decade&quot;</code> | Limit by decade. In the form of YYY e.g. 190 is the 1900s. |
| YEAR | <code>string</code> | <code>&quot;l-year&quot;</code> | Limit by year: limit by decade must also be set. In the form of YYYY. |
| MONTH | <code>string</code> | <code>&quot;l-month&quot;</code> | Limit by month: limit by decade and year must also be set. Only applies to the newspaper zone. |
| LANGUAGE | <code>string</code> | <code>&quot;l-language&quot;</code> | Limit by language |
| AVAILABILITY | <code>string</code> | <code>&quot;l-availability&quot;</code> | Limit by availability (whether online or not) |
| AUSTRALIAN | <code>string</code> | <code>&quot;l-australian&quot;</code> | Limit by whether the work is Australian |
| OCCUPATION | <code>string</code> | <code>&quot;l-occupation&quot;</code> | Limit by occupation. Only applies to the collection zone. |
| ZOOM | <code>string</code> | <code>&quot;l-zoom&quot;</code> | Limit by map scale. Only applies to the map zone. |
| VENDORDB | <code>string</code> | <code>&quot;l-vendordb&quot;</code> | Limit by vendor database code. |
| VENDOR | <code>string</code> | <code>&quot;l-vendor&quot;</code> | Limit by vendor. |
| AUDIENCE | <code>string</code> | <code>&quot;l-audience&quot;</code> | Limit by audience |
| TITLE | <code>string</code> | <code>&quot;l-title&quot;</code> | Limit by title |
| CATEGORY | <code>string</code> | <code>&quot;l-category&quot;</code> | Limit by category |
| ILLUSTRATED | <code>string</code> | <code>&quot;l-illustrated&quot;</code> | Limit by illustration |
| ILLTYPE | <code>string</code> | <code>&quot;l-illtype&quot;</code> | Limit by illustration type |
| WORD | <code>string</code> | <code>&quot;l-word&quot;</code> | Limit by word |
| ALL | <code>string</code> | <code>&quot;l-all&quot;</code> | Limit by all |

<a name="Trove.SORTBY"></a>
### Trove.SORTBY : <code>enum</code>
Enumeration for sort order

**Kind**: static enum property of <code>[Trove](#Trove)</code>
**Read only**: true
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| DATEDESC | <code>string</code> | <code>&quot;datedesc&quot;</code> |
| DATEASC | <code>string</code> | <code>&quot;dateasc&quot;</code> |
| RELEVANCE | <code>string</code> | <code>&quot;relevance&quot;</code> |

<a name="Trove.RECLEVEL"></a>
### Trove.RECLEVEL : <code>enum</code>
Enumeration for record level

**Kind**: static enum property of <code>[Trove](#Trove)</code>
**Read only**: true
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| FULL | <code>string</code> | <code>&quot;full&quot;</code> |
| BRIEF | <code>string</code> | <code>&quot;brief&quot;</code> |

<a name="Trove.INCLUDE"></a>
### Trove.INCLUDE : <code>enum</code>
Enumeration for includes, can include multiple as a list.

**Kind**: static enum property of <code>[Trove](#Trove)</code>
**Read only**: true
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| TAGS | <code>string</code> | <code>&quot;tags&quot;</code> |
| COMMENTS | <code>string</code> | <code>&quot;comments&quot;</code> |
| LISTS | <code>string</code> | <code>&quot;lists&quot;</code> |
| HOLDINGS | <code>string</code> | <code>&quot;holdings&quot;</code> |
| LINKS | <code>string</code> | <code>&quot;links&quot;</code> |
| SUBSCRIBINGLIBS | <code>string</code> | <code>&quot;subscribinglibs&quot;</code> |
| WORKVERSIONS | <code>string</code> | <code>&quot;workversions&quot;</code> |
| ARTICLETEXT | <code>string</code> | <code>&quot;articletext&quot;</code> |
| YEARS | <code>string</code> | <code>&quot;years&quot;</code> |
| LISTITEMS | <code>string</code> | <code>&quot;listitems&quot;</code> |
| ALL | <code>string</code> | <code>&quot;all&quot;</code> |

<a name="Trove.STATES"></a>
### Trove.STATES : <code>enum</code>
Enumeration for states.

**Kind**: static enum property of <code>[Trove](#Trove)</code>
**Read only**: true
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| nsw | <code>string</code> | <code>&quot;nsw&quot;</code> |
| act | <code>string</code> | <code>&quot;act&quot;</code> |
| qld | <code>string</code> | <code>&quot;qld&quot;</code> |
| tas | <code>string</code> | <code>&quot;tas&quot;</code> |
| sa | <code>string</code> | <code>&quot;sa&quot;</code> |
| nt | <code>string</code> | <code>&quot;nt&quot;</code> |
| wa | <code>string</code> | <code>&quot;wa&quot;</code> |
| vic | <code>string</code> | <code>&quot;vic&quot;</code> |
| national | <code>string</code> | <code>&quot;national&quot;</code> |

<a name="Trove.CATEGORIES"></a>
### Trove.CATEGORIES : <code>enum</code>
Enumeration for categories

**Kind**: static enum property of <code>[Trove](#Trove)</code>
**Read only**: true
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| ARTICLE | <code>string</code> | <code>&quot;Article&quot;</code> |
| ADVERTISING | <code>string</code> | <code>&quot;Advertising&quot;</code> |
| LISTS | <code>string</code> | <code>&quot;Detailed lists, results, guides&quot;</code> |
| FAMILY_NOTICES | <code>string</code> | <code>&quot;Family Notices&quot;</code> |
| LITERATURE | <code>string</code> | <code>&quot;Literature&quot;</code> |

<a name="Trove.init"></a>
### Trove.init(key)
**Kind**: static method of <code>[Trove](#Trove)</code>

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | The Trove API key given to you by the National Library of Australia. This function should be called before any queries are made to the Trove servers. |

