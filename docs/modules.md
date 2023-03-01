[index.md - v1.3.0](README.md) / Exports

# index.md - v1.3.0

## Table of contents

### Variables

- [default](modules.md#default)

### Functions

- [loadYml](modules.md#loadyml)
- [loadYmlSync](modules.md#loadymlsync)
- [parseYml](modules.md#parseyml)
- [stringifyYml](modules.md#stringifyyml)

## Variables

### default

• **default**: `Object`

#### Type declaration

| Name           | Type                                                                       |
| :------------- | :------------------------------------------------------------------------- |
| `loadYml`      | (`path`: `string` \| `URL` \| `Buffer`) => `Promise`<`unknown` \| `null`\> |
| `loadYmlSync`  | (`path`: `string` \| `URL` \| `Buffer`) => `unknown` \| `null`             |
| `parseYml`     | (`data`: `string`, `options?`: `LoadOptions`) => `unknown` \| `null`       |
| `stringifyYml` | <T\>(`data`: `T`, `options?`: `DumpOptions`) => `string` \| `null`         |

#### Defined in

[index.ts:90](https://github.com/saqqdy/load-yml/blob/45fc2db/src/index.ts#L90)

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

[index.ts:63](https://github.com/saqqdy/load-yml/blob/45fc2db/src/index.ts#L63)

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

[index.ts:82](https://github.com/saqqdy/load-yml/blob/45fc2db/src/index.ts#L82)

---

### parseYml

▸ **parseYml**(`data`, `options?`): `unknown` \| `null`

parse yaml data

#### Parameters

| Name       | Type          | Description               |
| :--------- | :------------ | :------------------------ |
| `data`     | `string`      | file path                 |
| `options?` | `LoadOptions` | load options: LoadOptions |

#### Returns

`unknown` \| `null`

- result

#### Defined in

[index.ts:27](https://github.com/saqqdy/load-yml/blob/45fc2db/src/index.ts#L27)

---

### stringifyYml

▸ **stringifyYml**<`T`\>(`data`, `options?`): `string` \| `null`

stringify yaml data

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name       | Type          | Description               |
| :--------- | :------------ | :------------------------ |
| `data`     | `T`           | file path                 |
| `options?` | `DumpOptions` | dump options: DumpOptions |

#### Returns

`string` \| `null`

- result

#### Defined in

[index.ts:43](https://github.com/saqqdy/load-yml/blob/45fc2db/src/index.ts#L43)
