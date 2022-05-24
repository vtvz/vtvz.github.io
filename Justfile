export DOCKER_BUILDKIT := "1"

# Show this help
help:
  @just --list --unsorted

# Start jekyll and assets continues building
up *args:
	docker-compose up -d {{ args }}


# Stop jekyll and assets continues building
down:
	docker-compose down

# Restart jekyll and assets continues building
restart: down up

# Bash of webpack container
webpack:
	docker-compose exec webpack sh

# Bash of jekyll container
jekyll:
	docker-compose exec jekyll bash

# Build production ready site
build:
	rm -rf public
	docker-compose run -u 1000:1000 webpack ./node_modules/.bin/webpack --mode=production
	docker-compose run -u 1000:1000 webpack ./node_modules/.bin/gulp sass:dist
	docker-compose run -u 1000:1000 jekyll jekyll build --future -d public --trace

# Clean cache
clean:
	docker-compose run -u 1000:1000 jekyll jekyll clean
	docker-compose run -u 1000:1000 webpack ./node_modules/.bin/gulp clean

# Build jekyll image and push it
image:
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
