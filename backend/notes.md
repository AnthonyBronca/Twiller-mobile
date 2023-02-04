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
npx sequelize model:generate --name Tweet --attributes userId:integer,tweet:string,imageUrl:string
npx sequelize model:generate --name Comment --attributes tweetId:integer,userId:integer,comment:string
npx sequelize model:generate --name Image --attributes url:string,tweetId:integer
npx sequelize model:generate --name Retweet --attributes userId:integer,tweetId:integer
npx sequelize model:generate --name Reply --attributes userId:integer,tweetId:integer,commentId:integer,reply:string
npx sequelize model:generate --name Like --attributes userId:integer,tweetId:integer
npx sequelize model:generate --name Follow --attributes followerId:integer,followingId:integer

npx dotenv sequelize db:migrate
npx dotenv sequelize db:migrate:undo:all

Seed Commands
npx sequelize seed:generate --name User
npx sequelize seed:generate --name Tweet
npx sequelize seed:generate --name Image
npx sequelize seed:generate --name Comment
npx sequelize seed:generate --name Like,
npx sequelize seed:generate --name Reply,
npx sequelize seed:generate --name Retweet,
