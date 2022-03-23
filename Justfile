# Show this help
help:
  @just --list --unsorted

install:
	docker-compose run -u 1000:1000 webpack ./node_modules/.bin/webpack --mode=production

up: ## Start jekyll and assets continius building
	docker-compose up -d

webpack: ## Bash of webpack container
	docker-compose exec webpack sh

jekyll: ## Bash of jekyll container
	docker-compose exec jekyll bash

down: ## Stop jekyll and assets continius building
	docker-compose down

restart: down up ## Restart jekyll and assets continius building

build: ## Build production ready site
	rm -rf public
	docker-compose run -u 1000:1000 webpack ./node_modules/.bin/webpack --mode=production
	docker-compose run -u 1000:1000 webpack ./node_modules/.bin/gulp sass:dist
	docker-compose run -u 1000:1000 jekyll jekyll build --future -d public --trace

clean: ## Clean cache
	docker-compose run -u 1000:1000 jekyll jekyll clean
	docker-compose run -u 1000:1000 webpack ./node_modules/.bin/gulp clean

image: ## Build jekyll image and push it
	docker build . -t vtvz/improved-jekyll:latest
	docker-compose build jekyll
	docker push vtvz/improved-jekyll:latest

infra:
	kubectl apply -f ./_infra -n vz

logs:
	docker-compose logs -f

pdf:
	@until $(curl --output /dev/null --silent --head --fail http://localhost:4001/); do \
		printf '.'; \
		sleep 5; \
	done
	google-chrome --headless --print-to-pdf="assets/files/Vitaly-Zaslavsky–CV.pdf" --run-all-compositor-stages-before-draw --print-to-pdf-no-header --virtual-time-budget=10000 http://localhost:4001/
