# All settings

`Settings` is a list of all the **customization** possible for an index.

It is possible to update all the settings in one go or individually with the dedicated routes. Updates in the settings route are **partial**. This means that any parameters not provided in the body will be left unchanged.

These are the reference pages for the dedicated routes:

- [Synonyms](/reference/api/synonyms.md)
- [Stop-words](/reference/api/stop_words.md)
- [Ranking rules](/reference/api/ranking_rules.md)
- [Attributes For Faceting](/reference/api/attributes_for_faceting.md)
- [Distinct attribute](/reference/api/distinct_attribute.md)
- [Searchable attributes](/reference/api/searchable_attributes.md)
- [Displayed attributes](/reference/api/displayed_attributes.md)

[Learn more about the settings in this guide](/reference/features/settings.md)

::: note
Updating the settings means overwriting the default settings of MeiliSearch. You can reset to default values using the `DELETE` routes.
:::

## Get settings

<RouteHighlighter method="GET" route="/indexes/:index_uid/settings" />

Get the settings of an index.

[Learn more about the settings](/reference/features/settings.md).

#### Path variables

| Variable      | Description   |
| ------------- | ------------- |
| **index_uid** | The index UID |

### Response body

| Variable                  | Type      | Description                                                                      | Default value                                                                                     |
| ------------------------  | --------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| **synonyms**              | Object    | List of associated words treated similarly                                       | `{}`                                                                                              |
| **stopWords**             | [Strings] | List of words ignored by MeiliSearch when present in search queries              | `[]`                                                                                              |
| **rankingRules**          | [Strings] | List of ranking rules sorted by order of importance                              | [A list of ordered built-in ranking rules](/learn/core_concepts/relevancy.md#order-of-the-rules) |
| **attributesForFaceting** | [Strings] | Attributes to use as [facets](/reference/features/faceted_search.md)         | `[]`                                                                                              |
| **distinctAttribute**     | String    | Search returns documents with distinct (different) values of the given field     | `null`                                                                                            |
| **searchableAttributes**  | [Strings] | Fields in which to search for matching query words sorted by order of importance | `["*"]` (all attributes)                                                                          |
| **displayedAttributes**   | [Strings] | Fields displayed in the returned documents                                       | `["*"]` (all attributes)                                                                                         |

[Learn more about the settings in this guide](/reference/features/settings.md)

### Example

<CodeSamples id="get_settings_1" />

#### Response: `200 Ok`

List the settings.

```json
{
  "rankingRules": [
    "typo",
    "words",
    "proximity",
    "attribute",
    "wordsPosition",
    "exactness",
    "desc(release_date)"
  ],
  "attributesForFaceting": ["genres"],
  "distinctAttribute": null,
  "searchableAttributes": ["title", "description", "genre"],
  "displayedAttributes": [
    "title",
    "description",
    "genre",
    "release_date"
  ],
  "stopWords": null,
  "synonyms": {
    "wolverine": ["xmen", "logan"],
    "logan": ["wolverine", "xmen"]
  }
}
```

## Update settings

<RouteHighlighter method="POST" route="/indexes/:index_uid/settings" />

Update the settings of an index.

Updates in the settings route are **partial**. This means that any parameters not provided in the body will be left unchanged.
[Learn more about the settings in this guide](/reference/features/settings.md).

If the provided index does not exist, it will be created.

#### Path variables

| Variable      | Description   |
| ------------- | ------------- |
| **index_uid** | The index UID |

#### Body

| Variable                  | Type      | Description                                                                      | Default value                                                                                     |
| ------------------------  | --------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| **synonyms**              | Object    | List of associated words treated similarly                                       | `{}`                                                                                              |
| **stopWords**             | [Strings] | List of words ignored by MeiliSearch when present in search queries              | `[]`                                                                                              |
| **rankingRules**          | [Strings] | List of ranking rules sorted by order of importance                              | [A list of ordered built-in ranking rules](/learn/core_concepts/relevancy.md#order-of-the-rules) |
| **attributesForFaceting** | [Strings] | Attributes to use as [facets](/reference/features/faceted_search.md)         | `[]`                                                                                              |
| **distinctAttribute**     | String    | Search returns documents with distinct (different) values of the given field     | `null`                                                                                            |
| **searchableAttributes**  | [Strings] | Fields in which to search for matching query words sorted by order of importance | `["*"]` (all attributes)                                                                                          |
| **displayedAttributes**   | [Strings] | Fields displayed in the returned documents                                       | `["*"]` (all attributes)                                                                                                                                |

### Example

<CodeSamples id="update_settings_1" />

#### Response: `202 Accepted`

```json
{
  "updateId": 1
}
```

This `updateId` allows you to [track the current update](/reference/api/updates.md).

## Reset settings

<RouteHighlighter method="DELETE" route="/indexes/:index_uid/settings"/>

Reset the settings of an index.

All settings will be reset to their default value.

| Variable                  | Description                                                                      | Default value                                                                                     |
| ------------------------  | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| **synonyms**              | List of associated words treated similarly                                       | `{}`                                                                                              |
| **stopWords**             | List of words ignored by MeiliSearch when present in search queries              | `[]`                                                                                              |
| **rankingRules**          | List of ranking rules sorted by order of importance                              | [A list of ordered built-in ranking rules](/learn/core_concepts/relevancy.md#order-of-the-rules) |
| **attributesForFaceting** | Attributes to use as [facets](/reference/features/faceted_search.md)         | `[]`                                                                                              |
| **distinctAttribute**     | Search returns documents with distinct (different) values of a given field       | `null`                                                                                            |
| **searchableAttributes**  | Fields in which to search for matching query words sorted by order of importance | `["*"]` (all attributes)                                                                          |
| **displayedAttributes**   | Fields displayed in the returned documents documents                             | `["*"]` (all attributes)                                                                          |

[Learn more about the settings](/reference/features/settings.md).

#### Path variables

| Variable      | Description   |
| ------------- | ------------- |
| **index_uid** | The index UID |

#### Example

<CodeSamples id="reset_settings_1" />

#### Response: `202 Accepted`

```json
{
  "updateId": 1
}
```

This `updateId` allows you to [track the current update](/reference/api/updates.md).
