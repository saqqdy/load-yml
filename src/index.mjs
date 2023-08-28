import main from './index.cjs.js'

const {
	version,
	parseYml,
	stringifyYml,
	loadYml,
	loadYmlSync
} = main

export {
	main as default,
	version,
	parseYml,
	stringifyYml,
	loadYml,
	loadYmlSync
}
