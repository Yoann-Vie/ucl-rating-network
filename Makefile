import_football_data:
	echo "Importing Football Data"
	docker-compose exec mongo mongoimport --username root --password password --authenticationDatabase admin --db football_data --collection 2017_2018_clubs --file /usr/local/data/2017-2018/clubs.json --jsonArray
	docker-compose exec mongo mongoimport --username root --password password --authenticationDatabase admin --db football_data --collection 2017_2018_groups --file /usr/local/data/2017-2018/groups.json --jsonArray
	docker-compose exec mongo mongoimport --username root --password password --authenticationDatabase admin --db football_data --collection 2017_2018_rounds --file /usr/local/data/2017-2018/rounds.json --jsonArray
	docker-compose exec mongo mongoimport --username root --password password --authenticationDatabase admin --db football_data --collection 2016_2017_clubs --file /usr/local/data/2016-2017/clubs.json --jsonArray
	docker-compose exec mongo mongoimport --username root --password password --authenticationDatabase admin --db football_data --collection 2016_2017_groups --file /usr/local/data/2016-2017/groups.json --jsonArray
	docker-compose exec mongo mongoimport --username root --password password --authenticationDatabase admin --db football_data --collection 2016_2017_rounds --file /usr/local/data/2016-2017/rounds.json --jsonArray
	docker-compose exec mongo mongoimport --username root --password password --authenticationDatabase admin --db football_data --collection 2015_2016_clubs --file /usr/local/data/2015-2016/clubs.json --jsonArray
	docker-compose exec mongo mongoimport --username root --password password --authenticationDatabase admin --db football_data --collection 2015_2016_groups --file /usr/local/data/2015-2016/groups.json --jsonArray
	docker-compose exec mongo mongoimport --username root --password password --authenticationDatabase admin --db football_data --collection 2015_2016_rounds --file /usr/local/data/2015-2016/rounds.json --jsonArray

import_sample:
	echo "Importing Sample Data"
	docker-compose exec mongo mongorestore --username root --password password