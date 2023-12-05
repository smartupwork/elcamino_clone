up: clean
	docker-compose up -d
dbssh:
	docker-compose exec db /bin/bash
db:
	docker-compose exec db /usr/bin/mysql -u elcamino -pelcamino -h 127.0.0.1 elcamino
shell:
	docker-compose exec php php -d memory_limit=-1 /app/yii shell/index
ssh:
	docker-compose exec php /bin/bash
down:
	docker-compose stop
clean:
	docker system prune --force
rm:
	docker-compose stop; docker-compose rm -f
list:
	docker-compose ps
reload: down up
logs:
	docker-compose logs -f
install:
	docker-compose exec php /usr/local/bin/composer.phar install --prefer-dist --no-interaction
update:
	docker-compose exec php /usr/local/bin/composer.phar update --prefer-dist --no-interaction
info:
	docker-compose exec php /usr/local/bin/composer.phar info


