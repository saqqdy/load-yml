[index.md - v1.0.0-beta.1](README.md) / Exports

# index.md - v1.0.0-beta.1

## Table of contents

### Functions

- [loadYml](modules.md#loadyml)
- [loadYmlSync](modules.md#loadymlsync)

## Functions

### loadYml

▸ **loadYml**(`path`): `Promise`<`unknown` \| `null`\>

load .yml or .yaml

#### Parameters

| Name   | Type                          | Description |
| :----- | :---------------------------- | :---------- |
| `path` | `string` \| `URL` \| `Buffer` | file path   |

#### Returns

`Promise`<`unknown` \| `null`\>

- result

#### Defined in

index.ts:31

---

### loadYmlSync

▸ **loadYmlSync**(`path`): `unknown` \| `null`

load .yml or .yaml sync

#### Parameters

| Name   | Type                          | Description |
| :----- | :---------------------------- | :---------- |
| `path` | `string` \| `URL` \| `Buffer` | file path   |

#### Returns

`unknown` \| `null`

- result

#### Defined in

index.ts:42
