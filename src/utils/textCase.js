const randomIntInRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

export const toTitleCase = (phrase, separator = ' ') =>
	phrase
		.toLowerCase()
		.split(separator)
		.map(word => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
		.join(separator)

export const toCamelCase = (phrase, separator = ' ') =>
	phrase
		.toLowerCase()
		.split(separator)
		.map((word, idx) => {
			if (!idx) return `${word.charAt(0).toLowerCase()}${word.slice(1)}`

			return `${word.charAt(0).toUpperCase()}${word.slice(1)}`
		})
		.join('')

export const toPascalCase = (phrase, separator = ' ') =>
	phrase
		.toLowerCase()
		.split(separator)
		.map(word => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
		.join('')

export const toLowerCase = phrase => phrase.toLowerCase()

export const toUpperCase = phrase => phrase.toUpperCase()

export const toSentenceCase = phrase => `${phrase.charAt(0).toUpperCase()}${phrase.toLowerCase().slice(1)}`

export const toToggleCase = (phrase, separator = ' ') =>
	phrase
		.toLowerCase()
		.split(separator)
		.map(word => {
			const { length } = word
			const qty = randomIntInRange(length - 1)
			let count = 0
			const indexList = []
			let idxRef

			while (count !== qty) {
				const idx = randomIntInRange(0, length - 1, idxRef)
				indexList.push(idx)
				idxRef = idx

				count++
			}

			if (!indexList.length) return word.toLowerCase()

			let toggleWord = word
			indexList.forEach(idx => {
				toggleWord = toggleWord.replace(word[idx], word[idx].toUpperCase())
			})

			return toggleWord
		})
		.join(separator)
