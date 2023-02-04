[index.md - v1.0.0-beta.1](README.md) / Exports

# index.md - v1.0.0-beta.1

## Table of contents

### Variables

- [default](modules.md#default)

### Functions

- [loadYml](modules.md#loadyml)
- [loadYmlSync](modules.md#loadymlsync)
- [parseYml](modules.md#parseyml)

## Variables

### default

• **default**: `Object`

#### Type declaration

| Name          | Type                                                                       |
| :------------ | :------------------------------------------------------------------------- |
| `loadYml`     | (`path`: `string` \| `URL` \| `Buffer`) => `Promise`<`unknown` \| `null`\> |
| `loadYmlSync` | (`path`: `string` \| `URL` \| `Buffer`) => `unknown` \| `null`             |
| `parseYml`    | (`data`: `string`) => `unknown` \| `null`                                  |

#### Defined in

[index.ts:57](https://github.com/saqqdy/load-yml/blob/6a7f7b9/src/index.ts#L57)

## Functions

### loadYml

▸ **loadYml**(`path`): `Promise`<`unknown` \| `null`\>

load .yml or .yaml

**`Example`**

```ts
import { loadYml } from 'load-yml'
const data = await loadYml('/path/of/yaml') // \{ "name": "saqqdy" \}
```

#### Parameters

| Name   | Type                          | Description |
| :----- | :---------------------------- | :---------- |
| `path` | `string` \| `URL` \| `Buffer` | file path   |

#### Returns

`Promise`<`unknown` \| `null`\>

- result

#### Defined in

[index.ts:36](https://github.com/saqqdy/load-yml/blob/6a7f7b9/src/index.ts#L36)

---

### loadYmlSync

▸ **loadYmlSync**(`path`): `unknown` \| `null`

load .yml or .yaml sync

**`Example`**

```ts
import { loadYmlSync } from 'load-yml'
const data = loadYmlSync('/path/of/yaml') // \{ "name": "saqqdy" \}
```

#### Parameters

| Name   | Type                          | Description |
| :----- | :---------------------------- | :---------- |
| `path` | `string` \| `URL` \| `Buffer` | file path   |

#### Returns

`unknown` \| `null`

- result

#### Defined in

[index.ts:52](https://github.com/saqqdy/load-yml/blob/6a7f7b9/src/index.ts#L52)

---

### parseYml

▸ **parseYml**(`data`): `unknown` \| `null`

parse yaml data

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `data` | `string` | file path   |

#### Returns

`unknown` \| `null`

- result

#### Defined in

[index.ts:17](https://github.com/saqqdy/load-yml/blob/6a7f7b9/src/index.ts#L17)
