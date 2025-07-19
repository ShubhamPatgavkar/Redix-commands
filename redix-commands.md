🧱 1. Clean Up Containers (Optional but Recommended)

docker stop redis redis-commander RE

docker rm redis redis-commander RE

🐳 2. Start Redis with RedisJSON Enabled

You need a Redis image that supports RedisJSON module. Use the redis/redis-stack image:



docker run -d --name redis -p 6379:6379 redis/redis-stack:latest

✅ This comes with redis-cli and RedisJSON already built-in.



🧭 3. Start Redis Commander (UI for Redis)

docker run -d --name redis-commander \\

&nbsp; --link redis \\

&nbsp; -p 8081:8081 \\

&nbsp; rediscommander/redis-commander:latest

Access Redis UI at: http://localhost:8081



🧪 4. Redis CLI Commands Recap

✅ Basic String Commands:

set name "shubham is the king"

get name



mset user:1 shubham user:2 shweta user:3 king

mget user:1 user:3



set count 0

incr count

incr count


✅ RedisJSON Commands (Requires Redis Stack):

\# Set a string as JSON

json.set bike $ '"KTM DUKE 200"'



\# Get JSON string

json.get bike



\# Length of JSON string

json.strlen bike $



\# Numeric operations on JSON numbers

json.set crashes $ 1

json.numincrby crashes $ 2

json.numincrby crashes $ -1

json.nummultby crashes $ 5



\# Set JSON array

json.set jsonArr $ '\["Shubham", {"success": 2}, null]'

json.get jsonArr

json.get jsonArr $

