import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

export function currentDir(meta: ImportMeta) {
	return dirname(fileURLToPath(meta.url))
}
