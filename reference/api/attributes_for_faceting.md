# Attributes for faceting

_Child route of the [settings route](/reference/api/settings.md)._

The attributes that can be used as [facets for faceted search](/reference/features/faceted_search.md).

Attributes for faceting can also be updated directly through the [global settings route](/reference/api/settings.md#update-settings) along with the other settings.

[Learn more about faceted search](/reference/features/faceted_search.md).

## Get attributes for faceting

<RouteHighlighter method="GET" route="/indexes/:index_uid/settings/attributes-for-faceting" />

Get the [attributes for faceting](/reference/features/faceted_search.md) of an index.

#### Path variables

| Variable      | Description   |
| ------------- | ------------- |
| **index_uid** | The index UID |

### Example

<CodeSamples id="get_attributes_for_faceting_1" />

#### Response: `200 Ok`

List the settings.

```json
["genres", "director"]
```

## Update attributes for faceting

<RouteHighlighter method="POST" route="/indexes/:index_uid/settings/attributes-for-faceting" />

Update the [attributes for faceting](/reference/features/faceted_search.md) of an index.

#### Path variables

| Variable      | Description   |
| ------------- | ------------- |
| **index_uid** | The index UID |

#### Body

An array of strings that contains the attributes to use as facets.

[More information about the body](/reference/features/settings.md#attributes-for-faceting).

### Example

<CodeSamples id="update_attributes_for_faceting_1" />

#### Response: `202 Accepted`

```json
{
  "updateId": 1
}
```

This `updateId` allows you to [track the current update](/reference/api/updates.md).

## Reset attributes for faceting

<RouteHighlighter method="DELETE" route="/indexes/:index_uid/settings/attributes-for-faceting"/>

Reset the [attributes for faceting](/reference/features/faceted_search.md) of the index to the default value.

#### Default value

An empty array (`[]`).

#### Path variables

| Variable      | Description   |
| ------------- | ------------- |
| **index_uid** | The index UID |

#### Example

<CodeSamples id="reset_attributes_for_faceting_1" />

#### Response: `202 Accepted`

```json
{
  "updateId": 1
}
```

This `updateId` allows you to [track the current update](/reference/api/updates.md).
