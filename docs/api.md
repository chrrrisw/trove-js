<a name="Trove"></a>
## Trove : <code>object</code>
**Kind**: global namespace  

* [Trove](#Trove) : <code>object</code>
  * [.Article](#Trove.Article) ⇐ <code>[Work](#Trove.Work)</code>
    * [new Article(options)](#new_Trove.Article_new)
  * [.Book](#Trove.Book) ⇐ <code>[Work](#Trove.Work)</code>
    * [new Book(options)](#new_Trove.Book_new)
  * [.Collection](#Trove.Collection) ⇐ <code>[Work](#Trove.Work)</code>
    * [new Collection(options)](#new_Trove.Collection_new)
  * [.List](#Trove.List)
    * [new List()](#new_Trove.List_new)
  * [.Map](#Trove.Map) ⇐ <code>[Work](#Trove.Work)</code>
    * [new Map(options)](#new_Trove.Map_new)
  * [.Music](#Trove.Music) ⇐ <code>[Work](#Trove.Work)</code>
    * [new Music(options)](#new_Trove.Music_new)
  * [.NewspaperTitle](#Trove.NewspaperTitle)
    * [new NewspaperTitle(options)](#new_Trove.NewspaperTitle_new)
    * [.get((Number))](#Trove.NewspaperTitle+get)
  * [.NewspaperArticle](#Trove.NewspaperArticle)
    * [new NewspaperArticle(options)](#new_Trove.NewspaperArticle_new)
    * [.get(options)](#Trove.NewspaperArticle+get)
    * [.get_newspaper(done)](#Trove.NewspaperArticle+get_newspaper) ⇒ <code>[NewspaperTitle](#Trove.NewspaperTitle)</code>
  * [.NewspaperList](#Trove.NewspaperList)
    * [new NewspaperList(options)](#new_Trove.NewspaperList_new)
    * [.get(options)](#Trove.NewspaperList+get)
  * [.Person](#Trove.Person)
    * [new Person(options)](#new_Trove.Person_new)
  * [.Picture](#Trove.Picture) ⇐ <code>[Work](#Trove.Work)</code>
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
  * [.Work](#Trove.Work)
    * [new Work(options)](#new_Trove.Work_new)
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
### Trove.Article ⇐ <code>[Work](#Trove.Work)</code>
**Kind**: static class of <code>[Trove](#Trove)</code>  
**Extends:** <code>[Work](#Trove.Work)</code>  
<a name="new_Trove.Article_new"></a>
#### new Article(options)
A class to hold a journal article


| Param | Type |
| --- | --- |
| options | <code>Object</code> | 

<a name="Trove.Book"></a>
### Trove.Book ⇐ <code>[Work](#Trove.Work)</code>
**Kind**: static class of <code>[Trove](#Trove)</code>  
**Extends:** <code>[Work](#Trove.Work)</code>  
<a name="new_Trove.Book_new"></a>
#### new Book(options)
A class to hold a book


| Param | Type |
| --- | --- |
| options | <code>Object</code> | 

<a name="Trove.Collection"></a>
### Trove.Collection ⇐ <code>[Work](#Trove.Work)</code>
**Kind**: static class of <code>[Trove](#Trove)</code>  
**Extends:** <code>[Work](#Trove.Work)</code>  
<a name="new_Trove.Collection_new"></a>
#### new Collection(options)
A class to hold a collection


| Param | Type |
| --- | --- |
| options | <code>Object</code> | 

<a name="Trove.List"></a>
### Trove.List
**Kind**: static class of <code>[Trove](#Trove)</code>  
<a name="new_Trove.List_new"></a>
#### new List()
A class to hold a list

<a name="Trove.Map"></a>
### Trove.Map ⇐ <code>[Work](#Trove.Work)</code>
**Kind**: static class of <code>[Trove](#Trove)</code>  
**Extends:** <code>[Work](#Trove.Work)</code>  
<a name="new_Trove.Map_new"></a>
#### new Map(options)
A class to hold a map


| Param | Type |
| --- | --- |
| options | <code>Object</code> | 

<a name="Trove.Music"></a>
### Trove.Music ⇐ <code>[Work](#Trove.Work)</code>
**Kind**: static class of <code>[Trove](#Trove)</code>  
**Extends:** <code>[Work](#Trove.Work)</code>  
<a name="new_Trove.Music_new"></a>
#### new Music(options)
A class to hold music


| Param | Type |
| --- | --- |
| options | <code>Object</code> | 

<a name="Trove.NewspaperTitle"></a>
### Trove.NewspaperTitle
**Kind**: static class of <code>[Trove](#Trove)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| options.init | <code>number</code> &#124; <code>string</code> | If specified, will request the data immediately. |
| id |  | The identifier of the newspaper title. |
| title |  | Name of the newpaper (or magazine). |
| state |  | The state in which the newspaper title was primarily published. |
| issn |  | International Standard Serial Number. |
| troveURL |  | A link to view the newspaper title in Trove. |
| startDate |  | The earliest publication date of this newspaper title available in Trove. |
| endDate |  | The most recent publication date of this newspaper title available in Trove. |
| year |  | A list of the publication years for this newspaper title that are included in Trove. |
| year.date |  | A year this newspaper title was published |
| year.issuecount |  | The number of issues published in this year. |
| year.issue |  |  |
| year.issue.id |  |  |
| year.issue.date |  |  |
| year.issue.url |  |  |


* [.NewspaperTitle](#Trove.NewspaperTitle)
  * [new NewspaperTitle(options)](#new_Trove.NewspaperTitle_new)
  * [.get((Number))](#Trove.NewspaperTitle+get)

<a name="new_Trove.NewspaperTitle_new"></a>
#### new NewspaperTitle(options)
An object to hold an instance of a newspaper title.


| Param | Type |
| --- | --- |
| options | <code>Object</code> | 

<a name="Trove.NewspaperTitle+get"></a>
#### newspaperTitle.get((Number))
Get information about the specified newspaper title from Trove.

**Kind**: instance method of <code>[NewspaperTitle](#Trove.NewspaperTitle)</code>  

| Param | Description |
| --- | --- |
| (Number) | identifier |

<a name="Trove.NewspaperArticle"></a>
### Trove.NewspaperArticle
**Kind**: static class of <code>[Trove](#Trove)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | (brief) Trove newspaper article ID. |
| heading | <code>string</code> | (brief) The article heading. |
| category | <code>string</code> | (brief) The type of article |
| title | <code>Object</code> | (brief) The name and ID of the newspaper or periodical in which this article is found. |
| title.id | <code>string</code> | (brief) The Trove ID of the newspaper or periodical. |
| title.value | <code>string</code> | (brief) The name of the newspaper or periodical. |
| edition | <code>string</code> | (brief) Name of the special edition of the newspaper or periodical in which this article is found, if applicable. |
| date | <code>string</code> | (brief) The date of the issue in which this article was published. |
| page | <code>number</code> | (brief) The page on which this article appeared. |
| pageSequence | <code>number</code> | (brief) |
| pageLabel | <code>string</code> | (reclevel=full) |
| status | <code>string</code> | (brief) Included is the article is not currently available. |
| relevance | <code>string</code> | (brief, following search) How relevant this article is to the search. |
| relevance.score | <code>string</code> | (brief, following search) A numeric representation of how relevant this article is to the search. |
| snippet | <code>string</code> | (brief, following search) A small amount of text containing one or more of the search terms. |
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
  * [.get_newspaper(done)](#Trove.NewspaperArticle+get_newspaper) ⇒ <code>[NewspaperTitle](#Trove.NewspaperTitle)</code>

<a name="new_Trove.NewspaperArticle_new"></a>
#### new NewspaperArticle(options)
A Class to hold newspaper articles.


| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | An object specifying the default options |
| options.init | <code>number</code> | The article identifier for which to retrieve data on construction. |
| options.done | <code>function</code> | The callback called when data has been returned from the Trove servers. |
| options.reclevel | <code>[RECLEVEL](#Trove.RECLEVEL)</code> |  |
| options.includes | <code>[Array.&lt;INCLUDE&gt;](#Trove.INCLUDE)</code> |  |

<a name="Trove.NewspaperArticle+get"></a>
#### newspaperArticle.get(options)
Retrieve article information from Trove based on identifier.

**Kind**: instance method of <code>[NewspaperArticle](#Trove.NewspaperArticle)</code>  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options object for the query. |
| options.identifier | <code>number</code> | The article ID for which to retrieve data. |
| options.done | <code>function</code> | The callback for when data has been returned from the Trove servers. |
| options.reclevel | <code>[RECLEVEL](#Trove.RECLEVEL)</code> | Whether to return the brief or full record. |
| options.includes | <code>[Array.&lt;INCLUDE&gt;](#Trove.INCLUDE)</code> |  |

<a name="Trove.NewspaperArticle+get_newspaper"></a>
#### newspaperArticle.get_newspaper(done) ⇒ <code>[NewspaperTitle](#Trove.NewspaperTitle)</code>
Retrieve newspaper title information for the article

**Kind**: instance method of <code>[NewspaperArticle](#Trove.NewspaperArticle)</code>  
**Returns**: <code>[NewspaperTitle](#Trove.NewspaperTitle)</code> - The NewspaperTitle object that contains the NewspaperArticle.  

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
### Trove.Picture ⇐ <code>[Work](#Trove.Work)</code>
**Kind**: static class of <code>[Trove](#Trove)</code>  
**Extends:** <code>[Work](#Trove.Work)</code>  
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

<a name="Trove.Work"></a>
### Trove.Work
**Kind**: static class of <code>[Trove](#Trove)</code>  
**Properties**

| Name | Type |
| --- | --- |
| options.contributor | <code>Array</code> | 
| options.identifier | <code>Array</code> | 
| options.type | <code>Array</code> | 
| options.holdingsCount | <code>number</code> | 
| options.versionCount | <code>number</code> | 
| options.issued | <code>number</code> &#124; <code>string</code> | 
| options.relevance | <code>Object</code> | 
| options.id | <code>string</code> | 
| options.title | <code>string</code> | 
| options.troveUrl | <code>string</code> | 
| options.url | <code>string</code> | 

<a name="new_Trove.Work_new"></a>
#### new Work(options)
A class to hold a work. Work is the super class for other classes


| Param | Type |
| --- | --- |
| options | <code>Object</code> | 

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

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| TAGS | <code>string</code> | <code>&quot;tags&quot;</code> | (Book, Picture, Article, Music, Map, Collection, NewspaperArticle, List) Include any public tags on this item. |
| COMMENTS | <code>string</code> | <code>&quot;comments&quot;</code> | (Book, Picture, Article, Music, Map, Collection, NewspaperArticle, List) Include any public comments on this item. |
| LISTS | <code>string</code> | <code>&quot;lists&quot;</code> | (Book, Picture, Article, Music, Map, Collection, NewspaperArticle) Include the name and ID of any public lists this item belongs to. |
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
Enumeration for Australian states. Used to specify a state for which to return [Trove.Newspaper](Trove.Newspaper) titles using the [NewspaperList](#Trove.NewspaperList) class. To return all [Newspapers](Trove.Newspaper) for all states, do not specify a state when making the query via [NewspaperList](#Trove.NewspaperList) or use ALL.

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

<a name="Trove.CATEGORIES"></a>
### Trove.CATEGORIES : <code>enum</code>
Enumeration for NewspaperArticle categories. Returned as part of the brief record for NewspaperArticle, and may also be used to limit the results of a search using [LIMITS](#Trove.LIMITS).CATEGORY.

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

<a name="Trove.init"></a>
### Trove.init(key)
**Kind**: static method of <code>[Trove](#Trove)</code>  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | The Trove API key given to you by the National Library of Australia. This function should be called before any queries are made to the Trove servers. |

