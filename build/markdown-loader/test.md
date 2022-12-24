```
const ensureVPre = function (markdown) {
	if (markdown && markdown.renderer && markdown.renderer.rules) {
		const rules = ['code_inline', 'code_block', 'fence']
		const rendererRules = markdown.renderer.rules
		rules.forEach(function (rule) {
			if (typeof rendererRules[rule] === 'function') {
				const saved = rendererRules[rule]
				rendererRules[rule] = function () {
					return saved.apply(this, arguments).replace(/(<pre|<code)/g, '$1 v-pre')
				}
			}
		})
	}
}
ensureVPre(parser)
```
