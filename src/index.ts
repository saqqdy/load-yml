import { existsSync, promises, readFileSync } from 'fs'
import stripBom from 'strip-bom'
import yaml from 'js-yaml'

/** @returns a promise for the parsed YAML */
// export function loadYamlFile(path: string | Buffer | URL): Promise<unknown>

/** @returns the parsed YAML */
// export function loadYamlFileSync(path: string | Buffer | URL): unknown

/**
 * parse yaml data
 *
 * @param data - file path
 * @returns - result
 */
export function parseYml(data: string): unknown | null {
	try {
		return yaml.load(stripBom(data))
	} catch {
		return null
	}
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
export async function loadYml(path: string | Buffer | URL): Promise<unknown | null> {
	if (!existsSync(path)) return null
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
export function loadYmlSync(path: string | Buffer | URL): unknown | null {
	if (!existsSync(path)) return null
	return parseYml(readFileSync(path, 'utf8'))
}

export default {
	parseYml,
	loadYml,
	loadYmlSync
}
