install:
	npm ci

brain-games: # запуск
	node bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint