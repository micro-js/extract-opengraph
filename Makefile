#
# Vars
#

BIN = ./node_modules/.bin

#
# Tasks
#

node_modules: package.json
	@npm install

test: node_modules
	@${BIN}/tape test/*

validate: node_modules
	@standard

init:
	@git init
	@git add .
	@git commit -am "FIRST"
	@hub create micro-js/extract-opengraph -d "Extract opengraph metadata from a DOM (or dom-like thing, e.g. jsdom) into an object"
	@travis enable
	@git push -u origin master

.PHONY: test validate init
