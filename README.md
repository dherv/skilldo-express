### mysql

##### setup mysql for local development

`docker-compose up -d`
`docker exec -it <container-id> bash`
`mysql -uroot -proot`
`CREATE DATABASE skilldo`

exit mysql and the container then verify you have access by running:
`mysql -h 127.0.0.1 -P 33064 -uroot -proot`
