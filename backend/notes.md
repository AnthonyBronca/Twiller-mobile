to deploy to heroku ---

heroku restart && heroku pg:reset DATABASE --confirm twiller && heroku run npm run sequelize db:migrate && heroku run npm run sequelize db:seed:all

$ git add .
$ git commit -am "make it better"
$ git push heroku master

to reset db ---

npm run db:reset

docker tag local-image:tagname new-repo:tagname
docker push new-repo:tagname

Table Migration Commands

npx sequelize model:generate --name User --attributes fullname:string,username:string,email:string,bio:string,profileURL:string,hashedPassword:string,verified:boolean,state:string,link:string,country:string
