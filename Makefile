.PHONY: init
init:
	@echo "Copy .env example"
	@cp .env.example .env
	@cp .api/.env.example .api/.env
	@cp .web/.env.example .web/.env
	@cp .admin/.env.example .admin/.env

.PHONY: run
run:
	@docker-compose up

.PHONY: build
build:
	@docker-compose build

.PHONY: build-%
build-%:
	@echo "Building $*"
	@docker-compose build $*

.PHONY: clean
clean:
	@echo "Stoping all"
	@docker-compose stop
	@echo "Removing all"
	@docker-compose rm -f

.PHONY: clean-%
clean-%:
	@echo "Stoping $*"
	@docker-compose stop $*
	@echo "Removing $*"
	@docker-compose rm -f $*

.PHONY: purge
purge: clean
	@echo "Removing all images"
	@docker rmi $$(docker images  | grep sneaker-try-on_1 | awk '{print $$1}')
	@docker volume rm $$(docker volume ls | grep sneaker-try-on_1 | awk '{print $$2}')

.PHONY: purge-%
purge-%: clean-%
	@echo "Removing image for $*"
	@docker rmi $$(docker images | grep sneaker-try-on_1 | grep $* | awk '{print $$1}')

.PHONY: exec-%
exec-%:
	@echo "Welcome to $*"
	@docker-compose exec $* bash


.PHONY: drop-db
drop-db:
	@echo "Stoping db ..."
	@docker-compose stop db || true
	@echo "Deleting db container ..."
	@docker ps -a | grep sneaker-try-on_db_1 | awk '{print $$1}' | xargs docker rm
	@echo "Deleting db volume ..."
	@docker volume rm sneaker-try-on_1_database-data
