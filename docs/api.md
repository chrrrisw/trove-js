<a name="Trove"></a>
## Trove : <code>object</code>
**Kind**: global namespace  
**Copyright**: Chris Willoughby 2015  

* [Trove](#Trove) : <code>object</code>
  * [.Article](#Trove.Article) ⇐ <code>[Work](#Trove.Work)</code>
    * [new Article(options)](#new_Trove.Article_new)
    * [.get(options)](#Trove.Work+get)
  * [.Book](#Trove.Book) ⇐ <code>[Work](#Trove.Work)</code>
    * [new Book(options)](#new_Trove.Book_new)
    * [.get(options)](#Trove.Work+get)
  * [.Collection](#Trove.Collection) ⇐ <code>[Work](#Trove.Work)</code>
    * [new Collection(options)](#new_Trove.Collection_new)
    * [.get(options)](#Trove.Work+get)
  * [.List](#Trove.List)
    * [new List(options)](#new_Trove.List_new)
    * [.get(options)](#Trove.List+get)
  * [.Map](#Trove.Map) ⇐ <code>[Work](#Trove.Work)</code>
    * [new Map(options)](#new_Trove.Map_new)
    * [.get(options)](#Trove.Work+get)
  * [.Music](#Trove.Music) ⇐ <code>[Work](#Trove.Work)</code>
    * [new Music(options)](#new_Trove.Music_new)
    * [.get(options)](#Trove.Work+get)
  * [.NewspaperArticle](#Trove.NewspaperArticle)
    * [new NewspaperArticle(options)](#new_Trove.NewspaperArticle_new)
    * [.get(options)](#Trove.NewspaperArticle+get)
    * [.get_newspaper(options)](#Trove.NewspaperArticle+get_newspaper) ⇒ <code>[NewspaperTitle](#Trove.NewspaperTitle)</code>
  * [.NewspaperList](#Trove.NewspaperList)
    * [new NewspaperList(options)](#new_Trove.NewspaperList_new)
    * [.get(options)](#Trove.NewspaperList+get)
  * [.NewspaperTitle](#Trove.NewspaperTitle)
    * [new NewspaperTitle(options)](#new_Trove.NewspaperTitle_new)
    * [.get(options)](#Trove.NewspaperTitle+get)
  * [.Person](#Trove.Person)
    * [new Person(options)](#new_Trove.Person_new)
    * [.get(options)](#Trove.Person+get)
  * [.Picture](#Trove.Picture) ⇐ <code>[Work](#Trove.Work)</code>
    * [new Picture(options)](#new_Trove.Picture_new)
    * [.get(options)](#Trove.Work+get)
  * [.Search](#Trove.Search)
    * [new Search(options)](#new_Trove.Search_new)
    * [.zone_list(zone)](#Trove.Search+zone_list) ⇒ <code>Array.&lt;Object&gt;</code>
    * [.remove_facet(facet)](#Trove.Search+remove_facet)
    * [.add_facet(facet)](#Trove.Search+add_facet)
    * [.clear_date_range_limit()](#Trove.Search+clear_date_range_limit)
    * [.limit_date_range(start)](#Trove.Search+limit_date_range)
    * [.query(options)](#Trove.Search+query)
    * [.requery(options, delta)](#Trove.Search+requery)
    * [.next(options)](#Trove.Search+next)
    * [.previous(options)](#Trove.Search+previous)
  * [.Work](#Trove.Work)
    * [new Work(options)](#new_Trove.Work_new)
    * [.get(options)](#Trove.Work+get)
  * [.ZONES](#Trove.ZONES) : <code>enum</code>
  * [.FORMATS](#Trove.FORMATS) : <code>enum</code>
  * [.AVAILABILITIES](#Trove.AVAILABILITIES) : <code>enum</code>
  * [.VENDORS](#Trove.VENDORS) : <code>enum</code>
  * [.AUDIENCES](#Trove.AUDIENCES) : <code>enum</code>
  * [.CATEGORIES](#Trove.CATEGORIES) : <code>enum</code>
  * [.FACETS](#Trove.FACETS) : <code>enum</code>
  * [.LIMITS](#Trove.LIMITS) : <code>enum</code>
  * [.SORTBY](#Trove.SORTBY) : <code>enum</code>
  * [.RECLEVEL](#Trove.RECLEVEL) : <code>enum</code>
  * [.INCLUDES](#Trove.INCLUDES) : <code>enum</code>
  * [.STATES](#Trove.STATES) : <code>enum</code>
  * [.init(key)](#Trove.init)

<a name="Trove.Article"></a>
### Trove.Article ⇐ <code>[Work](#Trove.Work)</code>
**Kind**: static class of <code>[Trove](#Trove)</code>  
**Extends:** <code>[Work](#Trove.Work)</code>  

* [.Article](#Trove.Article) ⇐ <code>[Work](#Trove.Work)</code>
  * [new Article(options)](#new_Trove.Article_new)
  * [.get(options)](#Trove.Work+get)

<a name="new_Trove.Article_new"></a>
#### new Article(options)
A class to hold a journal article


| Param | Type |
| --- | --- |
| options | <code>Object</code> | 

<a name="Trove.Work+get"></a>
#### article.get(options)
Get the Work metadata from the Trove server.

**Kind**: instance method of <code>[Article](#Trove.Article)</code>  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options object for the query. |
| options.id | <code>number</code> &#124; <code>string</code> | The Work ID for which   to retrieve data. |
| options.done | <code>function</code> | The callback on receipt of data   (optional). |
| options.fail | <code>function</code> | The callback on failure (optional). |
| options.reclevel | <code>[RECLEVEL](#Trove.RECLEVEL)</code> | Whether to return the brief   or full record. |
| options.includes | <code>[Array.&lt;INCLUDES&gt;](#Trove.INCLUDES)</code> |  |

<a name="Trove.Book"></a>
### Trove.Book ⇐ <code>[Work](#Trove.Work)</code>
**Kind**: static class of <code>[Trove](#Trove)</code>  
**Extends:** <code>[Work](#Trove.Work)</code>  

* [.Book](#Trove.Book) ⇐ <code>[Work](#Trove.Work)</code>
  * [new Book(options)](#new_Trove.Book_new)
  * [.get(options)](#Trove.Work+get)

<a name="new_Trove.Book_new"></a>
#### new Book(options)
A class to hold a book


| Param | Type |
| --- | --- |
| options | <code>Object</code> | 

<a name="Trove.Work+get"></a>
#### book.get(options)
Get the Work metadata from the Trove server.

**Kind**: instance method of <code>[Book](#Trove.Book)</code>  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options object for the query. |
| options.id | <code>number</code> &#124; <code>string</code> | The Work ID for which   to retrieve data. |
| options.done | <code>function</code> | The callback on receipt of data   (optional). |
| options.fail | <code>function</code> | The callback on failure (optional). |
| options.reclevel | <code>[RECLEVEL](#Trove.RECLEVEL)</code> | Whether to return the brief   or full record. |
| options.includes | <code>[Array.&lt;INCLUDES&gt;](#Trove.INCLUDES)</code> |  |

<a name="Trove.Collection"></a>
### Trove.Collection ⇐ <code>[Work](#Trove.Work)</code>
**Kind**: static class of <code>[Trove](#Trove)</code>  
**Extends:** <code>[Work](#Trove.Work)</code>  

* [.Collection](#Trove.Collection) ⇐ <code>[Work](#Trove.Work)</code>
  * [new Collection(options)](#new_Trove.Collection_new)
  * [.get(options)](#Trove.Work+get)

<a name="new_Trove.Collection_new"></a>
#### new Collection(options)
A class to hold a collection


| Param | Type |
| --- | --- |
| options | <code>Object</code> | 

<a name="Trove.Work+get"></a>
#### collection.get(options)
Get the Work metadata from the Trove server.

**Kind**: instance method of <code>[Collection](#Trove.Collection)</code>  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options object for the query. |
| options.id | <code>number</code> &#124; <code>string</code> | The Work ID for which   to retrieve data. |
| options.done | <code>function</code> | The callback on receipt of data   (optional). |
| options.fail | <code>function</code> | The callback on failure (optional). |
| options.reclevel | <code>[RECLEVEL](#Trove.RECLEVEL)</code> | Whether to return the brief   or full record. |
| options.includes | <code>[Array.&lt;INCLUDES&gt;](#Trove.INCLUDES)</code> |  |

<a name="Trove.List"></a>
### Trove.List
**Kind**: static class of <code>[Trove](#Trove)</code>  

* [.List](#Trove.List)
  * [new List(options)](#new_Trove.List_new)
  * [.get(options)](#Trove.List+get)

<a name="new_Trove.List_new"></a>
#### new List(options)
A class to hold a list


| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options object for the list. |
| options.init | <code>number</code> &#124; <code>string</code> | The list identifier for which   to retrieve data on construction. |
| options.done | <code>function</code> | The callback on receipt of data   (optional). |
| options.fail | <code>function</code> | The callback on failure (optional). |
| options.reclevel | <code>[RECLEVEL](#Trove.RECLEVEL)</code> | Whether to return the brief   or full record. |
| options.includes | <code>[Array.&lt;INCLUDES&gt;](#Trove.INCLUDES)</code> |  |

<a name="Trove.List+get"></a>
#### list.get(options)
Get the List metadata from the Trove server.

**Kind**: instance method of <code>[List](#Trove.List)</code>  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options object for the query. |
| options.id | <code>number</code> &#124; <code>string</code> | The List ID for which   to retrieve data. |
| options.done | <code>function</code> | The callback on receipt of data   (optional). |
| options.fail | <code>function</code> | The callback on failure (optional). |
| options.reclevel | <code>[RECLEVEL](#Trove.RECLEVEL)</code> | Whether to return the brief   or full record. |
| options.includes | <code>[Array.&lt;INCLUDES&gt;](#Trove.INCLUDES)</code> |  |

<a name="Trove.Map"></a>
### Trove.Map ⇐ <code>[Work](#Trove.Work)</code>
**Kind**: static class of <code>[Trove](#Trove)</code>  
**Extends:** <code>[Work](#Trove.Work)</code>  

* [.Map](#Trove.Map) ⇐ <code>[Work](#Trove.Work)</code>
  * [new Map(options)](#new_Trove.Map_new)
  * [.get(options)](#Trove.Work+get)

<a name="new_Trove.Map_new"></a>
#### new Map(options)
A class to hold a map


| Param | Type |
| --- | --- |
| options | <code>Object</code> | 

<a name="Trove.Work+get"></a>
#### map.get(options)
Get the Work metadata from the Trove server.

**Kind**: instance method of <code>[Map](#Trove.Map)</code>  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options object for the query. |
| options.id | <code>number</code> &#124; <code>string</code> | The Work ID for which   to retrieve data. |
| options.done | <code>function</code> | The callback on receipt of data   (optional). |
| options.fail | <code>function</code> | The callback on failure (optional). |
| options.reclevel | <code>[RECLEVEL](#Trove.RECLEVEL)</code> | Whether to return the brief   or full record. |
| options.includes | <code>[Array.&lt;INCLUDES&gt;](#Trove.INCLUDES)</code> |  |

<a name="Trove.Music"></a>
### Trove.Music ⇐ <code>[Work](#Trove.Work)</code>
**Kind**: static class of <code>[Trove](#Trove)</code>  
**Extends:** <code>[Work](#Trove.Work)</code>  

* [.Music](#Trove.Music) ⇐ <code>[Work](#Trove.Work)</code>
  * [new Music(options)](#new_Trove.Music_new)
  * [.get(options)](#Trove.Work+get)

<a name="new_Trove.Music_new"></a>
#### new Music(options)
A class to hold music


| Param | Type |
| --- | --- |
| options | <code>Object</code> | 

<a name="Trove.Work+get"></a>
#### music.get(options)
Get the Work metadata from the Trove server.

**Kind**: instance method of <code>[Music](#Trove.Music)</code>  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options object for the query. |
| options.id | <code>number</code> &#124; <code>string</code> | The Work ID for which   to retrieve data. |
| options.done | <code>function</code> | The callback on receipt of data   (optional). |
| options.fail | <code>function</code> | The callback on failure (optional). |
| options.reclevel | <code>[RECLEVEL](#Trove.RECLEVEL)</code> | Whether to return the brief   or full record. |
| options.includes | <code>[Array.&lt;INCLUDES&gt;](#Trove.INCLUDES)</code> |  |

<a name="Trove.NewspaperArticle"></a>
### Trove.NewspaperArticle
**Kind**: static class of <code>[Trove](#Trove)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | (brief) Trove newspaper article ID. |
| heading | <code>string</code> | (brief) The article heading. |
| category | <code>string</code> | (brief) The type of article |
| title | <code>Object</code> | (brief) The name and ID of the newspaper   or periodical in which this article is found. |
| title.id | <code>string</code> | (brief) The Trove ID of the newspaper   or periodical. |
| title.value | <code>string</code> | (brief) The name of the newspaper   or periodical. |
| edition | <code>string</code> | (brief) Name of the special edition of   the newspaper or periodical in which this article is found,   if applicable. |
| date | <code>string</code> | (brief) The date of the issue in which   this article was published. |
| page | <code>number</code> | (brief) The page on which this article   appeared. |
| pageSequence | <code>number</code> | (brief) |
| pageLabel | <code>string</code> | (reclevel=full) |
| status | <code>string</code> | (brief) Included is the article is   not currently available. |
| relevance | <code>string</code> | (brief, following search) How relevant   this article is to the search. |
| relevance.score | <code>string</code> | (brief, following search) A   numeric representation of how relevant this article is to the search. |
| snippet | <code>string</code> | (brief, following search) A small amount   of text containing one or more of the search terms. |
| troveUrl | <code>string</code> | (brief) |
| trovePageUrl | <code>string</code> | (brief) |
| supplement | <code>string</code> | (reclevel=full) |
| section | <code>string</code> | (reclevel=full) |
| illustrated | <code>string</code> | (reclevel=full) |
| wordCount | <code>number</code> | (reclevel=full) |
| correctionCount | <code>number</code> | (reclevel=full) |
| listCount | <code>number</code> | (reclevel=full) |
| tagCount | <code>number</code> | (reclevel=full) |
| commentCount | <code>number</code> | (reclevel=full) |
| tag | <code>Array.&lt;Object&gt;</code> | (include=tags) |
| tag.lastupdated | <code>string</code> |  |
| tag.value | <code>string</code> |  |
| comment | <code>Array.&lt;Object&gt;</code> | (include=comments) |
| comment.by | <code>string</code> |  |
| comment.lastupdated | <code>string</code> |  |
| comment.value | <code>string</code> |  |
| list | <code>Array.&lt;Object&gt;</code> | (include=lists) |
| list.by | <code>string</code> |  |
| list.lastupdated | <code>string</code> |  |
| list.url | <code>string</code> |  |
| lastCorrection | <code>Object</code> | (reclevel=full) |
| lastCorrection.by | <code>string</code> | (reclevel=full) |
| lastCorrection.lastupdated | <code>string</code> | (reclevel=full) |
| identifier | <code>string</code> | (reclevel=full) |
| pdf | <code>string</code> | (reclevel=full) |
| articleText | <code>string</code> | (include=articletext) |


* [.NewspaperArticle](#Trove.NewspaperArticle)
  * [new NewspaperArticle(options)](#new_Trove.NewspaperArticle_new)
  * [.get(options)](#Trove.NewspaperArticle+get)
  * [.get_newspaper(options)](#Trove.NewspaperArticle+get_newspaper) ⇒ <code>[NewspaperTitle](#Trove.NewspaperTitle)</code>

<a name="new_Trove.NewspaperArticle_new"></a>
#### new NewspaperArticle(options)
A Class to hold newspaper articles.


| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | An object specifying the default options |
| options.init | <code>number</code> | The article identifier for which   to retrieve data on construction. |
| options.done | <code>function</code> | The callback on receipt of   data (optional). |
| options.fail | <code>function</code> | The callback on failure (optional). |
| options.reclevel | <code>[RECLEVEL](#Trove.RECLEVEL)</code> | Whether to return the brief   or full record. |
| options.includes | <code>[Array.&lt;INCLUDES&gt;](#Trove.INCLUDES)</code> |  |

<a name="Trove.NewspaperArticle+get"></a>
#### newspaperArticle.get(options)
Retrieve article information from Trove based on identifier.

**Kind**: instance method of <code>[NewspaperArticle](#Trove.NewspaperArticle)</code>  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options object for the query. |
| options.id | <code>number</code> | The article ID for which to   retrieve data. |
| options.done | <code>function</code> | The callback on receipt of data   (optional). |
| options.fail | <code>function</code> | The callback on failure (optional). |
| options.reclevel | <code>[RECLEVEL](#Trove.RECLEVEL)</code> | Whether to return the brief   or full record. |
| options.includes | <code>[Array.&lt;INCLUDES&gt;](#Trove.INCLUDES)</code> |  |

<a name="Trove.NewspaperArticle+get_newspaper"></a>
#### newspaperArticle.get_newspaper(options) ⇒ <code>[NewspaperTitle](#Trove.NewspaperTitle)</code>
Retrieve newspaper title information for the article

**Kind**: instance method of <code>[NewspaperArticle](#Trove.NewspaperArticle)</code>  
**Returns**: <code>[NewspaperTitle](#Trove.NewspaperTitle)</code> - The NewspaperTitle object that
  contains the NewspaperArticle.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options object for the query. |
| options.done | <code>function</code> | The callback on receipt of data   (optional). |

<a name="Trove.NewspaperList"></a>
### Trove.NewspaperList
The NewspaperList class is a wrapper around the
  "http://api.trove.nla.gov.au/newspaper/titles" API. If no state
  is specified on construction, you will have to call the get()
  method to actually request the data from Trove. If the state
  is specified on construction, the get() method will be
  called immediately.

  Currently the Trove servers only give basic information on
  each newspaper title returned. If you want the list of years and
  issues, you'll have to call the [NewspaperTitle](#Trove.NewspaperTitle).get()
  method directly, specifying includes and range.

**Kind**: static class of <code>[Trove](#Trove)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| newspapers | <code>[Array.&lt;NewspaperTitle&gt;](#Trove.NewspaperTitle)</code> | The list of   [NewspaperTitles](#Trove.NewspaperTitle) returned from the query. |


* [.NewspaperList](#Trove.NewspaperList)
  * [new NewspaperList(options)](#new_Trove.NewspaperList_new)
  * [.get(options)](#Trove.NewspaperList+get)

<a name="new_Trove.NewspaperList_new"></a>
#### new NewspaperList(options)
A list of Newspapers for a specific state or all states.


| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | An object specifying the options for   this NewspaperList. |
| options.state | <code>[STATES](#Trove.STATES)</code> | The state for which the newspaper   list will be returned (optional). If specified, the request   will be made immediately. |
| options.done | <code>function</code> | The callback on receipt of data   (optional). |
| options.fail | <code>function</code> | The callback on failure (optional). |

<a name="Trove.NewspaperList+get"></a>
#### newspaperList.get(options)
Get the data from the Trove server. If done or fail are set,
  they will be copied into the object, overwriting any
  existing callbacks.

**Kind**: instance method of <code>[NewspaperList](#Trove.NewspaperList)</code>  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Options for the request. |
| options.state | <code>[STATES](#Trove.STATES)</code> | The state for which to   request data (optional). If not set, or set to ALL,   all states will be returned. |
| options.done | <code>function</code> | The callback on receipt of data   (optional). |
| options.fail | <code>function</code> | The callback on failure (optional). |

<a name="Trove.NewspaperTitle"></a>
### Trove.NewspaperTitle
The NewspaperTitle class is a wrapper around the
  "http://api.trove.nla.gov.au/newspaper/title" API.
  The [NewspaperList](#Trove.NewspaperList) class will return a list of
  these objects for a state (or all states).

**Kind**: static class of <code>[Trove](#Trove)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The Trove identifier for the newspaper title. |
| title | <code>string</code> | Name of the newpaper (or magazine). |
| state | <code>string</code> | The state in which the newspaper title was   published. |
| stateabbr | <code>string</code> | An abbreviation for the state. |
| issn | <code>number</code> | International Standard Serial Number. |
| troveURL | <code>string</code> | A link to view the newspaper title in Trove. |
| startDate | <code>string</code> | The earliest publication date of this   newspaper title available in Trove. |
| endDate | <code>string</code> | The most recent publication date of this   newspaper title available in Trove. |
| year | <code>Array.&lt;Object&gt;</code> | A list of the publication years for this newspaper   title that are included in Trove. |
| year.date | <code>string</code> | A year this newspaper title was published |
| year.issuecount | <code>string</code> | The number of issues published in this   year. |
| year.issue | <code>Array.&lt;Object&gt;</code> | List of issues within the specified range. |
| year.issue.id | <code>string</code> | The Trove issue identifier. |
| year.issue.date | <code>string</code> | The data of the issue. |
| year.issue.url | <code>string</code> | The Trove URL for the issue. |


* [.NewspaperTitle](#Trove.NewspaperTitle)
  * [new NewspaperTitle(options)](#new_Trove.NewspaperTitle_new)
  * [.get(options)](#Trove.NewspaperTitle+get)

<a name="new_Trove.NewspaperTitle_new"></a>
#### new NewspaperTitle(options)
A class to hold an instance of a newspaper title.


| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options used on construction. Every   object property can be set on construction through this parameter. |
| options.init | <code>number</code> &#124; <code>string</code> | If specified, will request   the data immediately. |

<a name="Trove.NewspaperTitle+get"></a>
#### newspaperTitle.get(options)
Get information about the specified newspaper title from Trove.

**Kind**: instance method of <code>[NewspaperTitle](#Trove.NewspaperTitle)</code>  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.id | <code>number</code> &#124; <code>string</code> | The identifier of the newspaper   title to retrieve. If not specified, will fall back to the id set   on construction. (optional) |
| options.includes | <code>[Array.&lt;INCLUDES&gt;](#Trove.INCLUDES)</code> | The data to include in   the results. Trove currently only supports   [INCLUDES](#Trove.INCLUDES).YEARS. |
| options.range | <code>string</code> | If YEARS is included, return a list of   publication dates in the given range. Of the form: YYYYMMDD-YYYYMMDD. |

<a name="Trove.Person"></a>
### Trove.Person
**Kind**: static class of <code>[Trove](#Trove)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The Trove identifier for the person |
| troveUrl | <code>string</code> | The full URL for the person |
| url | <code>string</code> | The relative URL for the person |


* [.Person](#Trove.Person)
  * [new Person(options)](#new_Trove.Person_new)
  * [.get(options)](#Trove.Person+get)

<a name="new_Trove.Person_new"></a>
#### new Person(options)
A class to hold a person.
Please note that the Trove API does not currently support People
except as a result of a search.


| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options object for the Person. |
| options.init | <code>number</code> &#124; <code>string</code> | The Person identifier for which   to retrieve data on construction. |
| options.done | <code>function</code> | The callback on receipt of data   (optional). |
| options.fail | <code>function</code> | The callback on failure (optional). |
| options.reclevel | <code>[RECLEVEL](#Trove.RECLEVEL)</code> | Whether to return the brief   or full record. |
| options.includes | <code>[Array.&lt;INCLUDES&gt;](#Trove.INCLUDES)</code> |  |

<a name="Trove.Person+get"></a>
#### person.get(options)
Get the Person metadata from the Trove server.
Currently not supported by Trove.

**Kind**: instance method of <code>[Person](#Trove.Person)</code>  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options object for the query. |
| options.id | <code>number</code> &#124; <code>string</code> | The person ID for which   to retrieve data. |
| options.done | <code>function</code> | The callback on receipt of data   (optional). |
| options.fail | <code>function</code> | The callback on failure (optional). |
| options.reclevel | <code>[RECLEVEL](#Trove.RECLEVEL)</code> | Whether to return the brief   or full record. |
| options.includes | <code>[Array.&lt;INCLUDES&gt;](#Trove.INCLUDES)</code> |  |

<a name="Trove.Picture"></a>
### Trove.Picture ⇐ <code>[Work](#Trove.Work)</code>
**Kind**: static class of <code>[Trove](#Trove)</code>  
**Extends:** <code>[Work](#Trove.Work)</code>  

* [.Picture](#Trove.Picture) ⇐ <code>[Work](#Trove.Work)</code>
  * [new Picture(options)](#new_Trove.Picture_new)
  * [.get(options)](#Trove.Work+get)

<a name="new_Trove.Picture_new"></a>
#### new Picture(options)
A class to hold a picture


| Param | Type |
| --- | --- |
| options | <code>Object</code> | 

<a name="Trove.Work+get"></a>
#### picture.get(options)
Get the Work metadata from the Trove server.

**Kind**: instance method of <code>[Picture](#Trove.Picture)</code>  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options object for the query. |
| options.id | <code>number</code> &#124; <code>string</code> | The Work ID for which   to retrieve data. |
| options.done | <code>function</code> | The callback on receipt of data   (optional). |
| options.fail | <code>function</code> | The callback on failure (optional). |
| options.reclevel | <code>[RECLEVEL](#Trove.RECLEVEL)</code> | Whether to return the brief   or full record. |
| options.includes | <code>[Array.&lt;INCLUDES&gt;](#Trove.INCLUDES)</code> |  |

<a name="Trove.Search"></a>
### Trove.Search
**Kind**: static class of <code>[Trove](#Trove)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| response | <code>Object</code> | The raw response from the server. |
| items | <code>Array.&lt;Object&gt;</code> | The object containing the items created from   the raw response. |
| facets | <code>[Array.&lt;FACETS&gt;](#Trove.FACETS)</code> | The list of facets to include in   the data returned. |
| limits | <code>Object</code> | The limits imposed on the search. |


* [.Search](#Trove.Search)
  * [new Search(options)](#new_Trove.Search_new)
  * [.zone_list(zone)](#Trove.Search+zone_list) ⇒ <code>Array.&lt;Object&gt;</code>
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
| options | <code>Object</code> | An object specifying the options for this   Search |
| options.zones | <code>[Array.&lt;ZONES&gt;](#Trove.ZONES)</code> | The list of zones to search |
| options.done | <code>function</code> | The callback on receipt of data   (optional). |
| options.fail | <code>function</code> | The callback on failure (optional). |
| options.terms | <code>string</code> | The search terms |

<a name="Trove.Search+zone_list"></a>
#### search.zone_list(zone) ⇒ <code>Array.&lt;Object&gt;</code>
Return the array of items returned by the most recent query
  in the specified zone.

**Kind**: instance method of <code>[Search](#Trove.Search)</code>  

| Param | Type | Description |
| --- | --- | --- |
| zone | <code>[ZONES](#Trove.ZONES)</code> | The zone for which the array should be   returned. |

<a name="Trove.Search+remove_facet"></a>
#### search.remove_facet(facet)
Remove the named facet.

**Kind**: instance method of <code>[Search](#Trove.Search)</code>  

| Param | Type | Description |
| --- | --- | --- |
| facet | <code>[FACETS](#Trove.FACETS)</code> | The name of the facet to remove |

<a name="Trove.Search+add_facet"></a>
#### search.add_facet(facet)
Add the named facet.

**Kind**: instance method of <code>[Search](#Trove.Search)</code>  

| Param | Type | Description |
| --- | --- | --- |
| facet | <code>[FACETS](#Trove.FACETS)</code> | The name of the facet to add |

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
| start | <code>string</code> | The date limit, one of: YYY for decade,   YYYY for year, or YYYY-MM for month |

<a name="Trove.Search+query"></a>
#### search.query(options)
Query the Trove database.

**Kind**: instance method of <code>[Search](#Trove.Search)</code>  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | An object containing, at least, the terms to   search for. |
| options.done | <code>function</code> | The callback on receipt of data   (optional). |
| options.fail | <code>function</code> | The callback on failure (optional). |
| options.zones | <code>[Array.&lt;ZONES&gt;](#Trove.ZONES)</code> | The list of zones to search   (mandatory). |
| options.terms | <code>string</code> | The search terms (mandatory). |
| options.start | <code>number</code> | Return records starting at this point  (optional, default=0). |
| options.number | <code>number</code> | Return this number of records   (max. 100, optional, default=20). |
| options.sort | <code>[SORTBY](#Trove.SORTBY)</code> | Sort the results according to this   parameter (optional, default=[SORTBY](#Trove.SORTBY).RELEVANCE). |
| options.reclevel | <code>[RECLEVEL](#Trove.RECLEVEL)</code> | Whether to return the brief   or full record. |
| options.includes | <code>[Array.&lt;INCLUDES&gt;](#Trove.INCLUDES)</code> |  |
| options.limits | <code>Object</code> | Limit the search results   (optional, see [LIMITS](#Trove.LIMITS)). |
| options.facets | <code>[Array.&lt;FACETS&gt;](#Trove.FACETS)</code> |  |

<a name="Trove.Search+requery"></a>
#### search.requery(options, delta)
Repeat the last query, with a delta applied to the start.

**Kind**: instance method of <code>[Search](#Trove.Search)</code>  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Options to be applied to the query |
| options.done | <code>function</code> | The callback on receipt of data   (optional). |
| options.fail | <code>function</code> | The callback on failure (optional). |
| delta | <code>number</code> | The change to be applied to the start number   (positive or negative). |

<a name="Trove.Search+next"></a>
#### search.next(options)
Request the next search results

**Kind**: instance method of <code>[Search](#Trove.Search)</code>  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Options to be applied to the query |
| options.done | <code>function</code> | The callback on receipt of data   (optional). |
| options.fail | <code>function</code> | The callback on failure (optional). |

<a name="Trove.Search+previous"></a>
#### search.previous(options)
Request the previous search results

**Kind**: instance method of <code>[Search](#Trove.Search)</code>  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Options to be applied to the query |
| options.done | <code>function</code> | The callback on receipt of data   (optional). |
| options.fail | <code>function</code> | The callback on failure (optional). |

<a name="Trove.Work"></a>
### Trove.Work
**Kind**: static class of <code>[Trove](#Trove)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> |  |
| url | <code>string</code> |  |
| troveUrl | <code>string</code> |  |
| title | <code>string</code> |  |
| contributor | <code>Array.&lt;string&gt;</code> |  |
| issued | <code>number</code> &#124; <code>string</code> | When the work was issued |
| type | <code>Array.&lt;string&gt;</code> | List of work types |
| isPartOf | <code>string</code> | ? |
| subject | <code>string</code> | ? |
| abstract | <code>string</code> | ? |
| tableOfContents | <code>string</code> | ? |
| language | <code>Array.&lt;string&gt;</code> | List of languages |
| wikipedia | <code>string</code> | ? |
| holdingsCount | <code>number</code> |  |
| versionCount | <code>number</code> |  |
| tagCount | <code>number</code> |  |
| tagCount.level | <code>string</code> |  |
| commentCount | <code>number</code> |  |
| commentCount.level | <code>string</code> |  |
| listCount | <code>number</code> |  |
| tag | <code>string</code> |  |
| tag.lastupdated | <code>string</code> |  |
| comment | <code>string</code> |  |
| comment.lastupdated | <code>string</code> |  |
| comment.by | <code>string</code> |  |
| comment.rating | <code>string</code> |  |
| list | <code>string</code> |  |
| list.url | <code>string</code> |  |
| list.by | <code>string</code> |  |
| list.lastupdated | <code>string</code> |  |
| identifier | <code>Array.&lt;Object&gt;</code> |  |
| identifier.type | <code>string</code> |  |
| identifier.linktype | <code>string</code> |  |
| identifier.linktext | <code>string</code> |  |
| identifier.value | <code>string</code> |  |
| holding | <code>string</code> |  |
| holding.nuc | <code>string</code> |  |
| holding.name | <code>string</code> |  |
| holding.library | <code>string</code> |  |
| holding.url | <code>string</code> |  |
| holding.callNumber | <code>string</code> |  |
| version | <code>string</code> |  |
| version.id | <code>string</code> |  |
| version.record | <code>string</code> |  |


* [.Work](#Trove.Work)
  * [new Work(options)](#new_Trove.Work_new)
  * [.get(options)](#Trove.Work+get)

<a name="new_Trove.Work_new"></a>
#### new Work(options)
A class to hold a work. Work is the parent class for other classes
  (Article, Book, Collection, Map, Music, Picture).


| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options object for the work. |
| options.init | <code>number</code> &#124; <code>string</code> | The work identifier for which   to retrieve data on construction. |
| options.done | <code>function</code> | The callback on receipt of data   (optional). |
| options.fail | <code>function</code> | The callback on failure (optional). |
| options.reclevel | <code>[RECLEVEL](#Trove.RECLEVEL)</code> | Whether to return the brief   or full record. |
| options.includes | <code>[Array.&lt;INCLUDES&gt;](#Trove.INCLUDES)</code> |  |

<a name="Trove.Work+get"></a>
#### work.get(options)
Get the Work metadata from the Trove server.

**Kind**: instance method of <code>[Work](#Trove.Work)</code>  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options object for the query. |
| options.id | <code>number</code> &#124; <code>string</code> | The Work ID for which   to retrieve data. |
| options.done | <code>function</code> | The callback on receipt of data   (optional). |
| options.fail | <code>function</code> | The callback on failure (optional). |
| options.reclevel | <code>[RECLEVEL](#Trove.RECLEVEL)</code> | Whether to return the brief   or full record. |
| options.includes | <code>[Array.&lt;INCLUDES&gt;](#Trove.INCLUDES)</code> |  |

<a name="Trove.ZONES"></a>
### Trove.ZONES : <code>enum</code>
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
| PEOPLE | <code>string</code> | <code>&quot;people&quot;</code> | The zone for people |
| ALL | <code>string</code> | <code>&quot;all&quot;</code> | All of the above |

<a name="Trove.FORMATS"></a>
### Trove.FORMATS : <code>enum</code>
Enumeration for formats.
  Used for facets and limits.

**Kind**: static enum property of <code>[Trove](#Trove)</code>  
**Read only**: true  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| WEBSITE | <code>string</code> | <code>&quot;Archived website&quot;</code> | 
| ARTWORK | <code>string</code> | <code>&quot;Art work&quot;</code> | 
| ARTICLE | <code>string</code> | <code>&quot;Article&quot;</code> | 
| ARTICLEABSTRACT | <code>string</code> | <code>&quot;Article/Abstract&quot;</code> | 
| ARTICLECHAPTER | <code>string</code> | <code>&quot;Article/Book chapter&quot;</code> | 
| ARTICLEPAPER | <code>string</code> | <code>&quot;Article/Conference paper&quot;</code> | 
| ARTICLEJOURNAL | <code>string</code> | <code>&quot;Article/Journal or magazine article&quot;</code> | 
| ARTICLEOTHER | <code>string</code> | <code>&quot;Article/Other article&quot;</code> | 
| ARTICLEREPORT | <code>string</code> | <code>&quot;Article/Report&quot;</code> | 
| ARTICLEREVIEW | <code>string</code> | <code>&quot;Article/Review&quot;</code> | 
| ARTICLEWORKING | <code>string</code> | <code>&quot;Article/Working paper&quot;</code> | 
| AUDIOBOOK | <code>string</code> | <code>&quot;Audio book&quot;</code> | 
| BOOK | <code>string</code> | <code>&quot;Book&quot;</code> | 
| BOOKBRAILLE | <code>string</code> | <code>&quot;Book/Braille&quot;</code> | 
| BOOKILLUSTRATED | <code>string</code> | <code>&quot;Book/Illustrated&quot;</code> | 
| BOOKLARGEPRINT | <code>string</code> | <code>&quot;Book/Large print&quot;</code> | 
| PROCEEDINGS | <code>string</code> | <code>&quot;Conference Proceedings&quot;</code> | 
| DATASET | <code>string</code> | <code>&quot;Data set&quot;</code> | 
| MAP | <code>string</code> | <code>&quot;Map&quot;</code> | 
| MAPAERIAL | <code>string</code> | <code>&quot;Map/Aerial photograph&quot;</code> | 
| MAPATLAS | <code>string</code> | <code>&quot;Map/Atlas&quot;</code> | 
| MAPBRAILLE | <code>string</code> | <code>&quot;Map/Braille&quot;</code> | 
| MAPELECTRONIC | <code>string</code> | <code>&quot;Map/Electronic&quot;</code> | 
| MAPGLOBE | <code>string</code> | <code>&quot;Map/Globe or object&quot;</code> | 
| MAPLARGE | <code>string</code> | <code>&quot;Map/Large print&quot;</code> | 
| MAPSERIES | <code>string</code> | <code>&quot;Map/Map series&quot;</code> | 
| MAPMICROFORM | <code>string</code> | <code>&quot;Map/Microform&quot;</code> | 
| MAPSINGLE | <code>string</code> | <code>&quot;Map/Single map&quot;</code> | 
| OBJECT | <code>string</code> | <code>&quot;Object&quot;</code> | 
| PERIODICAL | <code>string</code> | <code>&quot;Periodical&quot;</code> | 
| PERIODICALJOURNAL | <code>string</code> | <code>&quot;Periodical/Journal, magazine, other&quot;</code> | 
| PERIODICALNEWSPAPER | <code>string</code> | <code>&quot;Periodical/Newspaper&quot;</code> | 
| PHOTO | <code>string</code> | <code>&quot;Photograph&quot;</code> | 
| POSTER | <code>string</code> | <code>&quot;Poster, chart, other&quot;</code> | 
| PUBLISHED | <code>string</code> | <code>&quot;Published&quot;</code> | 
| SHEETMUSIC | <code>string</code> | <code>&quot;Sheet music&quot;</code> | 
| SOUND | <code>string</code> | <code>&quot;Sound&quot;</code> | 
| SOUNDTALK | <code>string</code> | <code>&quot;Sound/Interview, lecture, talk&quot;</code> | 
| SOUNDOTHER | <code>string</code> | <code>&quot;Sound/Other sound&quot;</code> | 
| SOUNDMUSIC | <code>string</code> | <code>&quot;Sound/Recorded music&quot;</code> | 
| THESIS | <code>string</code> | <code>&quot;Thesis&quot;</code> | 
| UNPUBLISHED | <code>string</code> | <code>&quot;Unpublished&quot;</code> | 
| VIDEO | <code>string</code> | <code>&quot;Video&quot;</code> | 
| VIDEOCAPTIONED | <code>string</code> | <code>&quot;Video/Captioned&quot;</code> | 

<a name="Trove.AVAILABILITIES"></a>
### Trove.AVAILABILITIES : <code>enum</code>
Enumeration for availability.
Used for facets and limits.

**Kind**: static enum property of <code>[Trove](#Trove)</code>  
**Read only**: true  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| ONLINE | <code>string</code> | <code>&quot;y&quot;</code> | Online. |
| FREE_ACCESS | <code>string</code> | <code>&quot;y/f&quot;</code> | Freely accessible online. |
| MEMBERSHIP | <code>string</code> | <code>&quot;y/r&quot;</code> | Payment, subscription or membership required. |
| SUBSCRIPTION | <code>string</code> | <code>&quot;y/s&quot;</code> | Subscription required. |
| POSSIBLY | <code>string</code> | <code>&quot;y/u&quot;</code> | Possibly online. |

<a name="Trove.VENDORS"></a>
### Trove.VENDORS : <code>enum</code>
Used for facets and limits.

**Kind**: static enum property of <code>[Trove](#Trove)</code>  
**Read only**: true  
<a name="Trove.AUDIENCES"></a>
### Trove.AUDIENCES : <code>enum</code>
Used for facets and limits.

**Kind**: static enum property of <code>[Trove](#Trove)</code>  
**Read only**: true  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| TRADE | <code>string</code> | <code>&quot;Trade&quot;</code> | 
| GENERAL | <code>string</code> | <code>&quot;General&quot;</code> | 
| ACADEMIC | <code>string</code> | <code>&quot;Academic&quot;</code> | 
| PROFESSIONAL | <code>string</code> | <code>&quot;Professional&quot;</code> | 
| CHILDREN | <code>string</code> | <code>&quot;Children&#x27;s&quot;</code> | 
| CHILDRENUPPER | <code>string</code> | <code>&quot;Children&#x27;s - Upper elementry&quot;</code> | 
| CHILDRENLOWER | <code>string</code> | <code>&quot;Children&#x27;s - Lower elementry&quot;</code> | 

<a name="Trove.CATEGORIES"></a>
### Trove.CATEGORIES : <code>enum</code>
Enumeration for NewspaperArticle categories. Returned as part of the
  brief record for NewspaperArticle, and may also be used to limit
  the results of a search using [LIMITS](#Trove.LIMITS).CATEGORY.
  Used for facets and limits.

**Kind**: static enum property of <code>[Trove](#Trove)</code>  
**Read only**: true  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| ARTICLE | <code>string</code> | <code>&quot;Article&quot;</code> | Classified as an article. |
| ADVERTISING | <code>string</code> | <code>&quot;Advertising&quot;</code> | Classified as advertising. |
| LISTS | <code>string</code> | <code>&quot;Detailed lists, results, guides&quot;</code> | Classified as a list. |
| FAMILY_NOTICES | <code>string</code> | <code>&quot;Family Notices&quot;</code> | Classified as family notices. |
| LITERATURE | <code>string</code> | <code>&quot;Literature&quot;</code> | Classified as literature. |

<a name="Trove.FACETS"></a>
### Trove.FACETS : <code>enum</code>
Enumeration for facets.
Facets are categories that describe the results for your search. For
  example, if you ask for the decade facet, the response will include
  the list of decades your results span across, and how many results
  are found in each decade.

**Kind**: static enum property of <code>[Trove](#Trove)</code>  
**Read only**: true  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| FORMAT | <code>string</code> | <code>&quot;format&quot;</code> | (book, picture, article, music, map, collection)   The format of the resource. For example, is it a book or a   piece of sheet music? See [FORMATS](#Trove.FORMATS). |
| DECADE | <code>string</code> | <code>&quot;decade&quot;</code> | (book, picture, article, music, map, collection, newspaper, list)   Publication decade. e.g 199 represents 1990 – 1999. |
| YEAR | <code>string</code> | <code>&quot;year&quot;</code> | (book, picture, article, music, map, collection, newspaper, list)   Publication year. For newspapers, only available if the decade   facet is also applied. |
| MONTH | <code>string</code> | <code>&quot;month&quot;</code> | (newspaper)   Publication month. Only available if the year facet is also   applied |
| LANGUAGE | <code>string</code> | <code>&quot;language&quot;</code> | (book, picture, article, music, map, collection) |
| AVAILABILITY | <code>string</code> | <code>&quot;availability&quot;</code> | (book, picture, article, music, map, collection, list)   Whether the item is online or not. See   [AVAILABILITIES](#Trove.AVAILABILITIES). |
| AUSTRALIAN | <code>string</code> | <code>&quot;australian&quot;</code> | (book, picture, article, music, map, collection)   Works identified as published primarily in Australia, or   written by Australians |
| OCCUPATION | <code>string</code> | <code>&quot;occupation&quot;</code> | (collection) |
| ZOOM | <code>string</code> | <code>&quot;zoom&quot;</code> | (map) Map scale |
| VENDORDB | <code>string</code> | <code>&quot;vendordb&quot;</code> | (article) Database code |
| VENDOR | <code>string</code> | <code>&quot;vendor&quot;</code> | (article) The vendor who sells subscriptions to access a database   containing these articles. See [VENDORS](#Trove.VENDORS). |
| AUDIENCE | <code>string</code> | <code>&quot;audience&quot;</code> | (article) Only applies to articles from Gale. See   [AUDIENCES](#Trove.AUDIENCES). |
| TITLE | <code>string</code> | <code>&quot;title&quot;</code> | (newspaper) The newspaper title id. |
| CATEGORY | <code>string</code> | <code>&quot;category&quot;</code> | (newspaper) Newspaper article category. See   [CATEGORIES](#Trove.CATEGORIES). |
| ILLUSTRATED | <code>string</code> | <code>&quot;illustrated&quot;</code> | (newspaper) Is a newspaper article illustrated? |
| ILLTYPE | <code>string</code> | <code>&quot;illtype&quot;</code> | (newspaper) Type of illustration for newspaper article. Only available if illustrated facet is applied |
| WORD | <code>string</code> | <code>&quot;word&quot;</code> | (newspaper) Newspaper article word count. |
| ALL | <code>string</code> | <code>&quot;all&quot;</code> | All of the above. |

<a name="Trove.LIMITS"></a>
### Trove.LIMITS : <code>enum</code>
Enumeration for limiting the results of a search.

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
Enumeration for sort order.

**Kind**: static enum property of <code>[Trove](#Trove)</code>  
**Read only**: true  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| DATEDESC | <code>string</code> | <code>&quot;datedesc&quot;</code> | Sort by date (descending). |
| DATEASC | <code>string</code> | <code>&quot;dateasc&quot;</code> | Sort by date (ascending). |
| RELEVANCE | <code>string</code> | <code>&quot;relevance&quot;</code> | Sort by relevance. |

<a name="Trove.RECLEVEL"></a>
### Trove.RECLEVEL : <code>enum</code>
Enumeration for record level

**Kind**: static enum property of <code>[Trove](#Trove)</code>  
**Read only**: true  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| FULL | <code>string</code> | <code>&quot;full&quot;</code> | Get the full metadata (excluding all links, version level records,   tags and comments). |
| BRIEF | <code>string</code> | <code>&quot;brief&quot;</code> | Get the brief metadata. |

<a name="Trove.INCLUDES"></a>
### Trove.INCLUDES : <code>enum</code>
Enumeration for includes, can include multiple as a list.

**Kind**: static enum property of <code>[Trove](#Trove)</code>  
**Read only**: true  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| TAGS | <code>string</code> | <code>&quot;tags&quot;</code> | (Book, Picture, Article, Music, Map, Collection, NewspaperArticle,   List)   Include any public tags on this item. |
| COMMENTS | <code>string</code> | <code>&quot;comments&quot;</code> | (Book, Picture, Article, Music, Map, Collection, NewspaperArticle,   List)   Include any public comments on this item. |
| LISTS | <code>string</code> | <code>&quot;lists&quot;</code> | (Book, Picture, Article, Music, Map, Collection, NewspaperArticle)   Include the name and ID of any public lists this item belongs to. |
| HOLDINGS | <code>string</code> | <code>&quot;holdings&quot;</code> | (Book, Picture, Article, Music, Map, Collection) Include information on which organisations have a copy of this item or version. |
| LINKS | <code>string</code> | <code>&quot;links&quot;</code> | (Book, Picture, Article, Music, Map, Collection) Include the URLs for the item. |
| SUBSCRIBINGLIBS | <code>string</code> | <code>&quot;subscribinglibs&quot;</code> | (Book, Picture, Article, Music, Map, Collection) Include the subsribing organisation NUC ID and links. |
| WORKVERSIONS | <code>string</code> | <code>&quot;workversions&quot;</code> | (Book, Picture, Article, Music, Map, Collection) Include all versions that make up this item. |
| ARTICLETEXT | <code>string</code> | <code>&quot;articletext&quot;</code> | (NewspaperArticle) Include the full text for this digitised newspaper article. |
| YEARS | <code>string</code> | <code>&quot;years&quot;</code> | (Newspapers only) Include a list of years for which digitised articles from this newspaper title appear in Trove. |
| LISTITEMS | <code>string</code> | <code>&quot;listitems&quot;</code> | (List only) Include the brief works, articles, people, external websites that belong to this list. |
| ALL | <code>string</code> | <code>&quot;all&quot;</code> | (All) Include all of the above. |

<a name="Trove.STATES"></a>
### Trove.STATES : <code>enum</code>
Enumeration for Australian states. Used to specify a state for which
  to return [Trove.Newspaper](Trove.Newspaper) titles using the
  [NewspaperList](#Trove.NewspaperList) class. To return all
  [Newspapers](Trove.Newspaper) for all states, do not specify
  a state when making the query via [NewspaperList](#Trove.NewspaperList) or
  use ALL.

**Kind**: static enum property of <code>[Trove](#Trove)</code>  
**Read only**: true  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| NSW | <code>string</code> | <code>&quot;nsw&quot;</code> | New South Wales. |
| ACT | <code>string</code> | <code>&quot;act&quot;</code> | Australian Capital Territory. |
| QLD | <code>string</code> | <code>&quot;qld&quot;</code> | Queensland. |
| TAS | <code>string</code> | <code>&quot;tas&quot;</code> | Tasmania. |
| SA | <code>string</code> | <code>&quot;sa&quot;</code> | South Australia. |
| NT | <code>string</code> | <code>&quot;nt&quot;</code> | Northern Territory. |
| WA | <code>string</code> | <code>&quot;wa&quot;</code> | Western Australia. |
| VIC | <code>string</code> | <code>&quot;vic&quot;</code> | Victoria. |
| NATIONAL | <code>string</code> | <code>&quot;national&quot;</code> | National newspapers (not the same as all states). |
| ALL | <code>string</code> | <code>&quot;&quot;</code> | All states. |

<a name="Trove.init"></a>
### Trove.init(key)
**Kind**: static method of <code>[Trove](#Trove)</code>  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | The Trove API key given to you by the National   Library of Australia. This function should be called before any queries are made to the   Trove servers. |

