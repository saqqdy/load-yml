import { promises, readFileSync } from 'fs'
import { type DumpOptions, type LoadOptions, dump, load } from 'js-yaml'

/**
 * Strip UTF-8 byte order mark (BOM) from a string
 *
 * @param data - string
 * @returns - result
 */
function stripBom(data: string): string {
	if (typeof data !== 'string') throw new TypeError(`Expected a string, got ${typeof data}`)

	// Catches EFBBBF (UTF-8 BOM) because the buffer-to-string
	// conversion translates it to FEFF (UTF-16 BOM).
	if (data.charCodeAt(0) === 0xfeff) return (data as string).slice(1)

	return data
}

/**
 * parse yaml data
 *
 * @param data - file path
 * @param options - load options: LoadOptions
 * @returns - result
 */
export function parseYml(data: string, options?: LoadOptions): unknown {
		return load(stripBom(data), options)
}

/**
 * stringify yaml data
 *
 * @param data - file path
 * @param options - dump options: DumpOptions
 * @returns - result
 */
export function stringifyYml<T>(data: T, options?: DumpOptions): string {
		return dump(data, options)
}

/**
 * load .yml or .yaml
 *
 * @example
 * ```ts
 * import { loadYml } from 'load-yml'
 * const data = await loadYml('/path/of/yaml') // \{ "name": "saqqdy" \}
 * ```
 * @param path - file path
 * @returns - result
 */
export async function loadYml(path: string | Buffer | URL): Promise<unknown> {
	return parseYml(await promises.readFile(path, 'utf8'))
}

/**
 * load .yml or .yaml sync
 *
 * @example
 * ```ts
 * import { loadYmlSync } from 'load-yml'
 * const data = loadYmlSync('/path/of/yaml') // \{ "name": "saqqdy" \}
 * ```
 * @param path - file path
 * @returns - result
 */
export function loadYmlSync(path: string | Buffer | URL): unknown {
	return parseYml(readFileSync(path, 'utf8'))
}

export const version = '__VERSION__' as string
