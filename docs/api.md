## Classes

<dl>
<dt><a href="#Article">Article</a> ⇐ <code><a href="#Work">Work</a></code></dt>
<dd><p>A class to hold a journal article.</p>
</dd>
<dt><a href="#Book">Book</a> ⇐ <code><a href="#Work">Work</a></code></dt>
<dd><p>A class to hold a book</p>
</dd>
<dt><a href="#Collection">Collection</a> ⇐ <code><a href="#Work">Work</a></code></dt>
<dd><p>A class to hold a collection</p>
</dd>
<dt><a href="#Contributor">Contributor</a></dt>
<dd><p>Contributors are libraries and other organisations that
  contribute to Trove. Contributors usually have a &quot;name&quot;, an &quot;id&quot; and
  a &quot;url&quot;. They may also have a &quot;nuc&quot; (National Union Catalogue)
  identifier assigned to them. If you want more information, pass
  <a href="#RECLEVEL">RECLEVEL</a>.FULL into the &quot;reclevel&quot; option. See
  <a href="#ContributorList">ContributorList</a> to retrieve lists of Contributors.</p>
</dd>
<dt><a href="#ContributorList">ContributorList</a></dt>
<dd><p>The ContributorList class is a wrapper around the
  &quot;<a href="http://api.trove.nla.gov.au/contributor&quot;">http://api.trove.nla.gov.au/contributor&quot;</a> API. If no &quot;terms&quot;
  are specified on construction, you will have to call the get()
  method to actually request the data from Trove. If the &quot;terms&quot;
  are specified on construction, the get() method will be
  called immediately.</p>
</dd>
<dt><a href="#List">List</a></dt>
<dd><p>A class to hold a list</p>
</dd>
<dt><a href="#Map">Map</a> ⇐ <code><a href="#Work">Work</a></code></dt>
<dd><p>A class to hold a map</p>
</dd>
<dt><a href="#Music">Music</a> ⇐ <code><a href="#Work">Work</a></code></dt>
<dd><p>A class to hold music</p>
</dd>
<dt><a href="#NewspaperArticle">NewspaperArticle</a></dt>
<dd><p>A Class to hold newspaper articles.</p>
</dd>
<dt><a href="#NewspaperList">NewspaperList</a></dt>
<dd><p>The NewspaperList class is a wrapper around the
  &quot;<a href="http://api.trove.nla.gov.au/newspaper/titles&quot;">http://api.trove.nla.gov.au/newspaper/titles&quot;</a> API. If no state
  is specified on construction, you will have to call the get()
  method to actually request the data from Trove. If the state
  is specified on construction, the get() method will be
  called immediately.</p>
<p>  Currently the Trove servers only give basic information on
  each newspaper title returned. If you want the list of years and
  issues, you&#39;ll have to call the <a href="#NewspaperTitle">NewspaperTitle</a>.get()
  method directly, specifying includes and range.</p>
</dd>
<dt><a href="#NewspaperTitle">NewspaperTitle</a></dt>
<dd><p>The NewspaperTitle class is a wrapper around the
  &quot;<a href="http://api.trove.nla.gov.au/newspaper/title&quot;">http://api.trove.nla.gov.au/newspaper/title&quot;</a> API.
  The <a href="#NewspaperList">NewspaperList</a> class will return a list of
  these objects for a state (or all states).</p>
</dd>
<dt><a href="#Person">Person</a></dt>
<dd><p>A class to hold a person.
Please note that the Trove API does not currently support People
except as a result of a search.</p>
</dd>
<dt><a href="#Picture">Picture</a> ⇐ <code><a href="#Work">Work</a></code></dt>
<dd><p>A class to hold a picture</p>
</dd>
<dt><a href="#Search">Search</a></dt>
<dd><p>An object to perform searches</p>
</dd>
<dt><a href="#Work">Work</a></dt>
<dd><p>A class to hold a work. Work is the parent class for other classes
  (Article, Book, Collection, Map, Music, Picture).</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#init">init(key)</a></dt>
<dd></dd>
</dl>

<a name="Article"></a>

## Article ⇐ [<code>Work</code>](#Work)
A class to hold a journal article.

**Kind**: global class  
**Extends**: [<code>Work</code>](#Work)  

* [Article](#Article) ⇐ [<code>Work</code>](#Work)
    * [new exports.Article(options)](#new_Article_new)
    * [.process_done()](#Work+process_done)
    * [.process_fail()](#Work+process_fail)
    * [.get(options)](#Work+get)

<a name="new_Article_new"></a>

### new exports.Article(options)
Create an Article


| Param | Type |
| --- | --- |
| options | <code>Object</code> | 

<a name="Work+process_done"></a>

### article.process_done()
Internal

**Kind**: instance method of [<code>Article</code>](#Article)  
<a name="Work+process_fail"></a>

### article.process_fail()
Internal

**Kind**: instance method of [<code>Article</code>](#Article)  
<a name="Work+get"></a>

### article.get(options)
Get the Work metadata from the Trove server.

**Kind**: instance method of [<code>Article</code>](#Article)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options object for the query. |
| options.id | <code>number</code> \| <code>string</code> | The Work ID for which   to retrieve data. |
| options.done | <code>function</code> | The callback on receipt of data   (optional). |
| options.fail | <code>function</code> | The callback on failure (optional). |
| options.reclevel | [<code>RECLEVEL</code>](#RECLEVEL) | Whether to return the brief   or full record. |
| options.includes | [<code>Array.&lt;INCLUDES&gt;</code>](#INCLUDES) |  |

<a name="Book"></a>

## Book ⇐ [<code>Work</code>](#Work)
A class to hold a book

**Kind**: global class  
**Extends**: [<code>Work</code>](#Work)  

* [Book](#Book) ⇐ [<code>Work</code>](#Work)
    * [new exports.Book(options)](#new_Book_new)
    * [.process_done()](#Work+process_done)
    * [.process_fail()](#Work+process_fail)
    * [.get(options)](#Work+get)

<a name="new_Book_new"></a>

### new exports.Book(options)

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 

<a name="Work+process_done"></a>

### book.process_done()
Internal

**Kind**: instance method of [<code>Book</code>](#Book)  
<a name="Work+process_fail"></a>

### book.process_fail()
Internal

**Kind**: instance method of [<code>Book</code>](#Book)  
<a name="Work+get"></a>

### book.get(options)
Get the Work metadata from the Trove server.

**Kind**: instance method of [<code>Book</code>](#Book)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options object for the query. |
| options.id | <code>number</code> \| <code>string</code> | The Work ID for which   to retrieve data. |
| options.done | <code>function</code> | The callback on receipt of data   (optional). |
| options.fail | <code>function</code> | The callback on failure (optional). |
| options.reclevel | [<code>RECLEVEL</code>](#RECLEVEL) | Whether to return the brief   or full record. |
| options.includes | [<code>Array.&lt;INCLUDES&gt;</code>](#INCLUDES) |  |

<a name="Collection"></a>

## Collection ⇐ [<code>Work</code>](#Work)
A class to hold a collection

**Kind**: global class  
**Extends**: [<code>Work</code>](#Work)  

* [Collection](#Collection) ⇐ [<code>Work</code>](#Work)
    * [new exports.Collection(options)](#new_Collection_new)
    * [.process_done()](#Work+process_done)
    * [.process_fail()](#Work+process_fail)
    * [.get(options)](#Work+get)

<a name="new_Collection_new"></a>

### new exports.Collection(options)

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 

<a name="Work+process_done"></a>

### collection.process_done()
Internal

**Kind**: instance method of [<code>Collection</code>](#Collection)  
<a name="Work+process_fail"></a>

### collection.process_fail()
Internal

**Kind**: instance method of [<code>Collection</code>](#Collection)  
<a name="Work+get"></a>

### collection.get(options)
Get the Work metadata from the Trove server.

**Kind**: instance method of [<code>Collection</code>](#Collection)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options object for the query. |
| options.id | <code>number</code> \| <code>string</code> | The Work ID for which   to retrieve data. |
| options.done | <code>function</code> | The callback on receipt of data   (optional). |
| options.fail | <code>function</code> | The callback on failure (optional). |
| options.reclevel | [<code>RECLEVEL</code>](#RECLEVEL) | Whether to return the brief   or full record. |
| options.includes | [<code>Array.&lt;INCLUDES&gt;</code>](#INCLUDES) |  |

<a name="Contributor"></a>

## Contributor
Contributors are libraries and other organisations that
  contribute to Trove. Contributors usually have a "name", an "id" and
  a "url". They may also have a "nuc" (National Union Catalogue)
  identifier assigned to them. If you want more information, pass
  [RECLEVEL](#RECLEVEL).FULL into the "reclevel" option. See
  [ContributorList](#ContributorList) to retrieve lists of Contributors.

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The Trove identifier for the contributor. |
| url | <code>string</code> | The Trove-relative URL. |
| name | <code>string</code> | The name of the contributor. |
| nuc | <code>Array.&lt;string&gt;</code> | The list of NUCs for the contributor. |
| shortname | <code>string</code> | The short name of the contributor. |
| totalholdings | <code>number</code> | The number of holdings for the   contributor. |
| accesspolicy | <code>string</code> | The access policy for the contributor. |
| algentry | <code>string</code> | Australian Libraries Gateway URL. |
| parent | <code>Object</code> | An object holding the parents of this   contributor. |
| parent.id | <code>string</code> | The ID of the parent. |
| parent.url | <code>string</code> | The Trove-relative URL of the parent. |
| parent.value | <code>string</code> | The name of the parent. |


* [Contributor](#Contributor)
    * [new exports.Contributor(options)](#new_Contributor_new)
    * [.get_parent(options)](#Contributor+get_parent) ⇒ [<code>Contributor</code>](#Contributor)
    * [.get(options)](#Contributor+get)

<a name="new_Contributor_new"></a>

### new exports.Contributor(options)

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options object for the contributor. |
| options.init | <code>string</code> | The contributor ID for which   to retrieve data on construction (optional). |
| options.reclevel | [<code>RECLEVEL</code>](#RECLEVEL) | Whether to return the brief   or full record (optional, default=brief). |
| options.done | <code>function</code> | The callback on receipt of data   (optional). |
| options.fail | <code>function</code> | The callback on failure (optional). |

<a name="Contributor+get_parent"></a>

### contributor.get_parent(options) ⇒ [<code>Contributor</code>](#Contributor)
Get the parent Contributor for this Contributor. The "parent"
attribute is only available if [RECLEVEL](#RECLEVEL).FULL
was specified on requesting the data from Trove.

**Kind**: instance method of [<code>Contributor</code>](#Contributor)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.done | <code>function</code> | The callback on completion (optional). |
| options.fail | <code>function</code> | The callback on failure (optional). |

<a name="Contributor+get"></a>

### contributor.get(options)
Get the Contributor metadata from the Trove server. If "done" or "fail"
  are set, they will be copied into the object, overwriting any
  existing callbacks. This is also true for "id" and "reclevel".

**Kind**: instance method of [<code>Contributor</code>](#Contributor)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options object for the query. |
| options.id | <code>string</code> | The Contributor ID (NUC code) for which   to retrieve data (optional if specified previously). |
| options.reclevel | [<code>RECLEVEL</code>](#RECLEVEL) | Whether to return the brief   or full record (optional). |
| options.done | <code>function</code> | The callback on receipt of data   (optional). |
| options.fail | <code>function</code> | The callback on failure (optional). |

<a name="ContributorList"></a>

## ContributorList
The ContributorList class is a wrapper around the
  "http://api.trove.nla.gov.au/contributor" API. If no "terms"
  are specified on construction, you will have to call the get()
  method to actually request the data from Trove. If the "terms"
  are specified on construction, the get() method will be
  called immediately.

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| contributors | [<code>Array.&lt;Contributor&gt;</code>](#Contributor) | The list of   [Contributors](#Contributor) returned from the query. |


* [ContributorList](#ContributorList)
    * [new exports.ContributorList(options)](#new_ContributorList_new)
    * [.get(options)](#ContributorList+get)

<a name="new_ContributorList_new"></a>

### new exports.ContributorList(options)

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | An object specifying the options for   this ContributorList. |
| options.terms | <code>string</code> | The search terms for which the contributor   list will be returned (optional). If specified, the request   will be made immediately. The search will be performed by the   Trove servers on the NUC symbol and name. |
| options.reclevel | [<code>RECLEVEL</code>](#RECLEVEL) | Whether to return the brief   or full records (optional, default=brief). |
| options.done | <code>function</code> | The callback on receipt of data   (optional). |
| options.fail | <code>function</code> | The callback on failure (optional). |

<a name="ContributorList+get"></a>

### contributorList.get(options)
Get the data from the Trove server. If "done" or "fail" are set,
  they will be copied into the object, overwriting any
  existing callbacks. This is also true for "terms" and "reclevel".

**Kind**: instance method of [<code>ContributorList</code>](#ContributorList)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Options for the request. |
| options.terms | <code>string</code> | The search terms for which to   request data (optional). |
| options.reclevel | [<code>RECLEVEL</code>](#RECLEVEL) | Whether to return the brief   or full records (optional). |
| options.done | <code>function</code> | The callback on receipt of data   (optional). |
| options.fail | <code>function</code> | The callback on failure (optional). |

<a name="List"></a>

## List
A class to hold a list

**Kind**: global class  

* [List](#List)
    * [new exports.List(options)](#new_List_new)
    * [.get(options)](#List+get)

<a name="new_List_new"></a>

### new exports.List(options)

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options object for the list. |
| options.init | <code>number</code> \| <code>string</code> | The list identifier for which   to retrieve data on construction. |
| options.done | <code>function</code> | The callback on receipt of data   (optional). |
| options.fail | <code>function</code> | The callback on failure (optional). |
| options.reclevel | [<code>RECLEVEL</code>](#RECLEVEL) | Whether to return the brief   or full record. |
| options.includes | [<code>Array.&lt;INCLUDES&gt;</code>](#INCLUDES) |  |

<a name="List+get"></a>

### list.get(options)
Get the List metadata from the Trove server.

**Kind**: instance method of [<code>List</code>](#List)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options object for the query. |
| options.id | <code>number</code> \| <code>string</code> | The List ID for which   to retrieve data. |
| options.done | <code>function</code> | The callback on receipt of data   (optional). |
| options.fail | <code>function</code> | The callback on failure (optional). |
| options.reclevel | [<code>RECLEVEL</code>](#RECLEVEL) | Whether to return the brief   or full record. |
| options.includes | [<code>Array.&lt;INCLUDES&gt;</code>](#INCLUDES) |  |

<a name="Map"></a>

## Map ⇐ [<code>Work</code>](#Work)
A class to hold a map

**Kind**: global class  
**Extends**: [<code>Work</code>](#Work)  

* [Map](#Map) ⇐ [<code>Work</code>](#Work)
    * [new exports.Map(options)](#new_Map_new)
    * [.process_done()](#Work+process_done)
    * [.process_fail()](#Work+process_fail)
    * [.get(options)](#Work+get)

<a name="new_Map_new"></a>

### new exports.Map(options)

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 

<a name="Work+process_done"></a>

### map.process_done()
Internal

**Kind**: instance method of [<code>Map</code>](#Map)  
<a name="Work+process_fail"></a>

### map.process_fail()
Internal

**Kind**: instance method of [<code>Map</code>](#Map)  
<a name="Work+get"></a>

### map.get(options)
Get the Work metadata from the Trove server.

**Kind**: instance method of [<code>Map</code>](#Map)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options object for the query. |
| options.id | <code>number</code> \| <code>string</code> | The Work ID for which   to retrieve data. |
| options.done | <code>function</code> | The callback on receipt of data   (optional). |
| options.fail | <code>function</code> | The callback on failure (optional). |
| options.reclevel | [<code>RECLEVEL</code>](#RECLEVEL) | Whether to return the brief   or full record. |
| options.includes | [<code>Array.&lt;INCLUDES&gt;</code>](#INCLUDES) |  |

<a name="Music"></a>

## Music ⇐ [<code>Work</code>](#Work)
A class to hold music

**Kind**: global class  
**Extends**: [<code>Work</code>](#Work)  

* [Music](#Music) ⇐ [<code>Work</code>](#Work)
    * [new exports.Music(options)](#new_Music_new)
    * [.process_done()](#Work+process_done)
    * [.process_fail()](#Work+process_fail)
    * [.get(options)](#Work+get)

<a name="new_Music_new"></a>

### new exports.Music(options)

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 

<a name="Work+process_done"></a>

### music.process_done()
Internal

**Kind**: instance method of [<code>Music</code>](#Music)  
<a name="Work+process_fail"></a>

### music.process_fail()
Internal

**Kind**: instance method of [<code>Music</code>](#Music)  
<a name="Work+get"></a>

### music.get(options)
Get the Work metadata from the Trove server.

**Kind**: instance method of [<code>Music</code>](#Music)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options object for the query. |
| options.id | <code>number</code> \| <code>string</code> | The Work ID for which   to retrieve data. |
| options.done | <code>function</code> | The callback on receipt of data   (optional). |
| options.fail | <code>function</code> | The callback on failure (optional). |
| options.reclevel | [<code>RECLEVEL</code>](#RECLEVEL) | Whether to return the brief   or full record. |
| options.includes | [<code>Array.&lt;INCLUDES&gt;</code>](#INCLUDES) |  |

<a name="NewspaperArticle"></a>

## NewspaperArticle
A Class to hold newspaper articles.

**Kind**: global class  
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


* [NewspaperArticle](#NewspaperArticle)
    * [new exports.NewspaperArticle(options)](#new_NewspaperArticle_new)
    * [.get(options)](#NewspaperArticle+get)
    * [.get_newspaper(options)](#NewspaperArticle+get_newspaper) ⇒ [<code>NewspaperTitle</code>](#NewspaperTitle)

<a name="new_NewspaperArticle_new"></a>

### new exports.NewspaperArticle(options)

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | An object specifying the default options |
| options.init | <code>number</code> | The article identifier for which   to retrieve data on construction. |
| options.done | <code>function</code> | The callback on receipt of   data (optional). |
| options.fail | <code>function</code> | The callback on failure (optional). |
| options.reclevel | [<code>RECLEVEL</code>](#RECLEVEL) | Whether to return the brief   or full record. |
| options.includes | [<code>Array.&lt;INCLUDES&gt;</code>](#INCLUDES) |  |

<a name="NewspaperArticle+get"></a>

### newspaperArticle.get(options)
Retrieve article information from Trove based on identifier.

**Kind**: instance method of [<code>NewspaperArticle</code>](#NewspaperArticle)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options object for the query. |
| options.id | <code>number</code> | The article ID for which to   retrieve data. |
| options.done | <code>function</code> | The callback on receipt of data   (optional). |
| options.fail | <code>function</code> | The callback on failure (optional). |
| options.reclevel | [<code>RECLEVEL</code>](#RECLEVEL) | Whether to return the brief   or full record. |
| options.includes | [<code>Array.&lt;INCLUDES&gt;</code>](#INCLUDES) |  |

<a name="NewspaperArticle+get_newspaper"></a>

### newspaperArticle.get_newspaper(options) ⇒ [<code>NewspaperTitle</code>](#NewspaperTitle)
Retrieve newspaper title information for the article

**Kind**: instance method of [<code>NewspaperArticle</code>](#NewspaperArticle)  
**Returns**: [<code>NewspaperTitle</code>](#NewspaperTitle) - The NewspaperTitle object that
  contains the NewspaperArticle.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options object for the query. |
| options.done | <code>function</code> | The callback on receipt of data   (optional). |

<a name="NewspaperList"></a>

## NewspaperList
The NewspaperList class is a wrapper around the
  "http://api.trove.nla.gov.au/newspaper/titles" API. If no state
  is specified on construction, you will have to call the get()
  method to actually request the data from Trove. If the state
  is specified on construction, the get() method will be
  called immediately.

  Currently the Trove servers only give basic information on
  each newspaper title returned. If you want the list of years and
  issues, you'll have to call the [NewspaperTitle](#NewspaperTitle).get()
  method directly, specifying includes and range.

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| newspapers | [<code>Array.&lt;NewspaperTitle&gt;</code>](#NewspaperTitle) | The list of   [NewspaperTitles](#NewspaperTitle) returned from the query. |


* [NewspaperList](#NewspaperList)
    * [new exports.NewspaperList(options)](#new_NewspaperList_new)
    * [.get(options)](#NewspaperList+get)

<a name="new_NewspaperList_new"></a>

### new exports.NewspaperList(options)

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | An object specifying the options for   this NewspaperList. |
| options.state | [<code>STATES</code>](#STATES) | The state for which the newspaper   list will be returned (optional). If specified, the request   will be made immediately. |
| options.done | <code>function</code> | The callback on receipt of data   (optional). |
| options.fail | <code>function</code> | The callback on failure (optional). |

<a name="NewspaperList+get"></a>

### newspaperList.get(options)
Get the data from the Trove server. If done or fail are set,
  they will be copied into the object, overwriting any
  existing callbacks.

**Kind**: instance method of [<code>NewspaperList</code>](#NewspaperList)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Options for the request. |
| options.state | [<code>STATES</code>](#STATES) | The state for which to   request data (optional). If not set, or set to ALL,   all states will be returned. |
| options.done | <code>function</code> | The callback on receipt of data   (optional). |
| options.fail | <code>function</code> | The callback on failure (optional). |

<a name="NewspaperTitle"></a>

## NewspaperTitle
The NewspaperTitle class is a wrapper around the
  "http://api.trove.nla.gov.au/newspaper/title" API.
  The [NewspaperList](#NewspaperList) class will return a list of
  these objects for a state (or all states).

**Kind**: global class  
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


* [NewspaperTitle](#NewspaperTitle)
    * [new exports.NewspaperTitle(options)](#new_NewspaperTitle_new)
    * [.get(options)](#NewspaperTitle+get)

<a name="new_NewspaperTitle_new"></a>

### new exports.NewspaperTitle(options)

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options used on construction. Every   object property can be set on construction through this parameter. |
| options.init | <code>number</code> \| <code>string</code> | If specified, will request   the data immediately. |

<a name="NewspaperTitle+get"></a>

### newspaperTitle.get(options)
Get information about the specified newspaper title from Trove.

**Kind**: instance method of [<code>NewspaperTitle</code>](#NewspaperTitle)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.id | <code>number</code> \| <code>string</code> | The identifier of the newspaper   title to retrieve. If not specified, will fall back to the id set   on construction. (optional) |
| options.includes | [<code>Array.&lt;INCLUDES&gt;</code>](#INCLUDES) | The data to include in   the results. Trove currently only supports   [INCLUDES](#INCLUDES).YEARS. |
| options.range | <code>string</code> | If YEARS is included, return a list of   publication dates in the given range. Of the form: YYYYMMDD-YYYYMMDD. |

<a name="Person"></a>

## Person
A class to hold a person.
Please note that the Trove API does not currently support People
except as a result of a search.

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The Trove identifier for the person |
| troveUrl | <code>string</code> | The full URL for the person |
| url | <code>string</code> | The relative URL for the person |


* [Person](#Person)
    * [new exports.Person(options)](#new_Person_new)
    * [.get(options)](#Person+get)

<a name="new_Person_new"></a>

### new exports.Person(options)

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options object for the Person. |
| options.init | <code>number</code> \| <code>string</code> | The Person identifier for which   to retrieve data on construction. |
| options.done | <code>function</code> | The callback on receipt of data   (optional). |
| options.fail | <code>function</code> | The callback on failure (optional). |
| options.reclevel | [<code>RECLEVEL</code>](#RECLEVEL) | Whether to return the brief   or full record. |
| options.includes | [<code>Array.&lt;INCLUDES&gt;</code>](#INCLUDES) |  |

<a name="Person+get"></a>

### person.get(options)
Get the Person metadata from the Trove server.
Currently not supported by Trove.

**Kind**: instance method of [<code>Person</code>](#Person)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options object for the query. |
| options.id | <code>number</code> \| <code>string</code> | The person ID for which   to retrieve data. |
| options.done | <code>function</code> | The callback on receipt of data   (optional). |
| options.fail | <code>function</code> | The callback on failure (optional). |
| options.reclevel | [<code>RECLEVEL</code>](#RECLEVEL) | Whether to return the brief   or full record. |
| options.includes | [<code>Array.&lt;INCLUDES&gt;</code>](#INCLUDES) |  |

<a name="Picture"></a>

## Picture ⇐ [<code>Work</code>](#Work)
A class to hold a picture

**Kind**: global class  
**Extends**: [<code>Work</code>](#Work)  

* [Picture](#Picture) ⇐ [<code>Work</code>](#Work)
    * [new exports.Picture(options)](#new_Picture_new)
    * [.process_done()](#Work+process_done)
    * [.process_fail()](#Work+process_fail)
    * [.get(options)](#Work+get)

<a name="new_Picture_new"></a>

### new exports.Picture(options)

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 

<a name="Work+process_done"></a>

### picture.process_done()
Internal

**Kind**: instance method of [<code>Picture</code>](#Picture)  
<a name="Work+process_fail"></a>

### picture.process_fail()
Internal

**Kind**: instance method of [<code>Picture</code>](#Picture)  
<a name="Work+get"></a>

### picture.get(options)
Get the Work metadata from the Trove server.

**Kind**: instance method of [<code>Picture</code>](#Picture)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options object for the query. |
| options.id | <code>number</code> \| <code>string</code> | The Work ID for which   to retrieve data. |
| options.done | <code>function</code> | The callback on receipt of data   (optional). |
| options.fail | <code>function</code> | The callback on failure (optional). |
| options.reclevel | [<code>RECLEVEL</code>](#RECLEVEL) | Whether to return the brief   or full record. |
| options.includes | [<code>Array.&lt;INCLUDES&gt;</code>](#INCLUDES) |  |

<a name="Search"></a>

## Search
An object to perform searches

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| response | <code>Object</code> | The raw response from the server. |
| items | <code>Array.&lt;Object&gt;</code> | The object containing the items created from   the raw response. |
| facets | [<code>Array.&lt;FACETS&gt;</code>](#FACETS) | The list of facets to include in   the data returned. |
| limits | <code>Object</code> | The limits imposed on the search. |


* [Search](#Search)
    * [new exports.Search(options)](#new_Search_new)
    * [.zone_list(zone)](#Search+zone_list) ⇒ <code>Array.&lt;Object&gt;</code>
    * [.remove_facet(facet)](#Search+remove_facet)
    * [.add_facet(facet)](#Search+add_facet)
    * [.clear_date_range_limit()](#Search+clear_date_range_limit)
    * [.limit_date_range(start)](#Search+limit_date_range)
    * [.query(options)](#Search+query)
    * [.requery(options, delta)](#Search+requery)
    * [.next(options)](#Search+next)
    * [.previous(options)](#Search+previous)

<a name="new_Search_new"></a>

### new exports.Search(options)

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | An object specifying the options for this   Search |
| options.zones | [<code>Array.&lt;ZONES&gt;</code>](#ZONES) | The list of zones to search |
| options.done | <code>function</code> | The callback on receipt of data   (optional). |
| options.fail | <code>function</code> | The callback on failure (optional). |
| options.terms | <code>string</code> | The search terms |

<a name="Search+zone_list"></a>

### search.zone_list(zone) ⇒ <code>Array.&lt;Object&gt;</code>
Return the array of items returned by the most recent query
  in the specified zone.

**Kind**: instance method of [<code>Search</code>](#Search)  

| Param | Type | Description |
| --- | --- | --- |
| zone | [<code>ZONES</code>](#ZONES) | The zone for which the array should be   returned. |

<a name="Search+remove_facet"></a>

### search.remove_facet(facet)
Remove the named facet.

**Kind**: instance method of [<code>Search</code>](#Search)  

| Param | Type | Description |
| --- | --- | --- |
| facet | [<code>FACETS</code>](#FACETS) | The name of the facet to remove |

<a name="Search+add_facet"></a>

### search.add_facet(facet)
Add the named facet.

**Kind**: instance method of [<code>Search</code>](#Search)  

| Param | Type | Description |
| --- | --- | --- |
| facet | [<code>FACETS</code>](#FACETS) | The name of the facet to add |

<a name="Search+clear_date_range_limit"></a>

### search.clear_date_range_limit()
Clear the date range limits.

**Kind**: instance method of [<code>Search</code>](#Search)  
<a name="Search+limit_date_range"></a>

### search.limit_date_range(start)
Set the limits on the date range returned

**Kind**: instance method of [<code>Search</code>](#Search)  

| Param | Type | Description |
| --- | --- | --- |
| start | <code>string</code> | The date limit, one of: YYY for decade,   YYYY for year, or YYYY-MM for month |

<a name="Search+query"></a>

### search.query(options)
Query the Trove database.

**Kind**: instance method of [<code>Search</code>](#Search)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | An object containing, at least, the terms to   search for. |
| options.done | <code>function</code> | The callback on receipt of data   (optional). |
| options.fail | <code>function</code> | The callback on failure (optional). |
| options.zones | [<code>Array.&lt;ZONES&gt;</code>](#ZONES) | The list of zones to search   (mandatory). |
| options.terms | <code>string</code> | The search terms (mandatory). |
| options.start | <code>number</code> | Return records starting at this point  (optional, default=0). |
| options.number | <code>number</code> | Return this number of records   (max. 100, optional, default=20). |
| options.sort | [<code>SORTBY</code>](#SORTBY) | Sort the results according to this   parameter (optional, default=[SORTBY](#SORTBY).RELEVANCE). |
| options.reclevel | [<code>RECLEVEL</code>](#RECLEVEL) | Whether to return the brief   or full record. |
| options.includes | [<code>Array.&lt;INCLUDES&gt;</code>](#INCLUDES) |  |
| options.limits | <code>Object</code> | Limit the search results   (optional, see [LIMITS](#LIMITS)). |
| options.facets | [<code>Array.&lt;FACETS&gt;</code>](#FACETS) |  |

<a name="Search+requery"></a>

### search.requery(options, delta)
Repeat the last query, with a delta applied to the start.

**Kind**: instance method of [<code>Search</code>](#Search)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Options to be applied to the query |
| options.done | <code>function</code> | The callback on receipt of data   (optional). |
| options.fail | <code>function</code> | The callback on failure (optional). |
| delta | <code>number</code> | The change to be applied to the start number   (positive or negative). |

<a name="Search+next"></a>

### search.next(options)
Request the next search results

**Kind**: instance method of [<code>Search</code>](#Search)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Options to be applied to the query |
| options.done | <code>function</code> | The callback on receipt of data   (optional). |
| options.fail | <code>function</code> | The callback on failure (optional). |

<a name="Search+previous"></a>

### search.previous(options)
Request the previous search results

**Kind**: instance method of [<code>Search</code>](#Search)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Options to be applied to the query |
| options.done | <code>function</code> | The callback on receipt of data   (optional). |
| options.fail | <code>function</code> | The callback on failure (optional). |

<a name="Work"></a>

## Work
A class to hold a work. Work is the parent class for other classes
  (Article, Book, Collection, Map, Music, Picture).

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> |  |
| url | <code>string</code> |  |
| troveUrl | <code>string</code> |  |
| title | <code>string</code> |  |
| contributor | <code>Array.&lt;string&gt;</code> |  |
| issued | <code>number</code> \| <code>string</code> | When the work was issued |
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


* [Work](#Work)
    * [new exports.Work(options)](#new_Work_new)
    * [.process_done()](#Work+process_done)
    * [.process_fail()](#Work+process_fail)
    * [.get(options)](#Work+get)

<a name="new_Work_new"></a>

### new exports.Work(options)
Create a Work object instance.


| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options object for the work. |
| options.init | <code>number</code> \| <code>string</code> | The work identifier for which   to retrieve data on construction. |
| options.done | <code>function</code> | The callback on receipt of data   (optional). |
| options.fail | <code>function</code> | The callback on failure (optional). |
| options.reclevel | [<code>RECLEVEL</code>](#RECLEVEL) | Whether to return the brief   or full record. |
| options.includes | [<code>Array.&lt;INCLUDES&gt;</code>](#INCLUDES) |  |

<a name="Work+process_done"></a>

### work.process_done()
Internal

**Kind**: instance method of [<code>Work</code>](#Work)  
<a name="Work+process_fail"></a>

### work.process_fail()
Internal

**Kind**: instance method of [<code>Work</code>](#Work)  
<a name="Work+get"></a>

### work.get(options)
Get the Work metadata from the Trove server.

**Kind**: instance method of [<code>Work</code>](#Work)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options object for the query. |
| options.id | <code>number</code> \| <code>string</code> | The Work ID for which   to retrieve data. |
| options.done | <code>function</code> | The callback on receipt of data   (optional). |
| options.fail | <code>function</code> | The callback on failure (optional). |
| options.reclevel | [<code>RECLEVEL</code>](#RECLEVEL) | Whether to return the brief   or full record. |
| options.includes | [<code>Array.&lt;INCLUDES&gt;</code>](#INCLUDES) |  |

<a name="ZONES"></a>

## ZONES : <code>enum</code>
Enumeration for zones, can include multiple as a list

**Kind**: global enum  
**Read only**: true  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| BOOK | <code>string</code> | The zone for books. |
| PICTURE | <code>string</code> | The zone for pictures |
| ARTICLE | <code>string</code> | The zone for journal articles |
| MUSIC | <code>string</code> | The zone for music |
| MAP | <code>string</code> | The zone for maps |
| COLLECTION | <code>string</code> | The zone for collections |
| NEWSPAPER | <code>string</code> | The zone for newspapers |
| LIST | <code>string</code> | The zone for lists |
| PEOPLE | <code>string</code> | The zone for people |
| ALL | <code>string</code> | All of the above |

<a name="FORMATS"></a>

## FORMATS : <code>enum</code>
Enumeration for formats.
Used for facets and limits.

**Kind**: global enum  
**Read only**: true  
<a name="AVAILABILITIES"></a>

## AVAILABILITIES : <code>enum</code>
Enumeration for availability.
Used for facets and limits.

**Kind**: global enum  
**Read only**: true  
<a name="VENDORS"></a>

## VENDORS : <code>enum</code>
Used for facets and limits.

**Kind**: global enum  
**Read only**: true  
<a name="AUDIENCES"></a>

## AUDIENCES : <code>enum</code>
Used for facets and limits.

**Kind**: global enum  
**Read only**: true  
<a name="CATEGORIES"></a>

## CATEGORIES : <code>enum</code>
Enumeration for NewspaperArticle categories. Returned as part of the
  brief record for NewspaperArticle, and may also be used to limit
  the results of a search using [LIMITS](#LIMITS).CATEGORY.
  Used for facets and limits.

**Kind**: global enum  
**Read only**: true  
<a name="FACETS"></a>

## FACETS : <code>enum</code>
Enumeration for facets.
Facets are categories that describe the results for your search. For
  example, if you ask for the decade facet, the response will include
  the list of decades your results span across, and how many results
  are found in each decade.

**Kind**: global enum  
**Read only**: true  
<a name="LIMITS"></a>

## LIMITS : <code>enum</code>
Enumeration for limiting the results of a search.

**Kind**: global enum  
**Read only**: true  
<a name="SORTBY"></a>

## SORTBY : <code>enum</code>
Enumeration for sort order.

**Kind**: global enum  
**Read only**: true  
<a name="RECLEVEL"></a>

## RECLEVEL : <code>enum</code>
Enumeration for record level

**Kind**: global enum  
**Read only**: true  
<a name="INCLUDES"></a>

## INCLUDES : <code>enum</code>
Enumeration for includes, can include multiple as a list.

**Kind**: global enum  
**Read only**: true  
<a name="STATES"></a>

## STATES : <code>enum</code>
Enumeration for Australian states. Used to specify a state for which
  to return [Newspaper](Newspaper) titles using the
  [NewspaperList](#NewspaperList) class. To return all
  [Newspapers](Newspaper) for all states, do not specify
  a state when making the query via [NewspaperList](#NewspaperList) or
  use ALL.

**Kind**: global enum  
**Read only**: true  
<a name="init"></a>

## init(key)
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | The Trove API key given to you by the National   Library of Australia. This function should be called before any queries are made to the   Trove servers. |

