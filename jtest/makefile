all:
	docker-compose -f /mnt/c/Users/suria/Desktop/ts/jtest/docker-compose.yml up -d --build;

clean :
	docker-compose down;
	@if [ -n "$$(docker images -aq)" ]; then docker rmi -f $$(docker images -aq); fi
	@if [ -n "$$(docker volume ls -q)" ]; then docker volume rm $$(docker volume ls -q); fi
	@if [ -n "$$(docker network ls -q)" ]; then docker network rm $$(docker network ls -q); fi
	rm -rf /mnt/c/Users/suria/Desktop/ts/jtest/test

re : clean
	$(MAKE) all

.PHONY: all clean re
