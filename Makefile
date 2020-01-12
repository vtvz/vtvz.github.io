.DEFAULT_GOAL := help
.PHONY: help init update docs up down restart logs test-up test-down test test-run test-clean watch cs fix-perms

help: ## Show this help (default)
	@echo "Usage: make [command] [args=\"\"] \n"
	@grep -E '(^[a-zA-Z_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[32m%-15s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'

up: ## Start jekyll and assets continius building
	docker-compose up -d

down: ## Stop jekyll and assets continius building
	docker-compose down

restart: down up ## Restart jekyll and assets continius building

build: ## Build production ready site
	docker-compose run -u 1000:1000 jekyll jekyll build --future -d public

image: ## Build jekyll image and push it
	docker build . -t vtvz/improved-jekyll:latest
	docker push vtvz/improved-jekyll:latest
