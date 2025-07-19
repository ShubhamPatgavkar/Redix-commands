to run/fetch the latest redis image 

**docker run -d --name redis -p 6379:6379 redis:latest


to start the container
PS C:\\Users\\shubham>  docker exec -it redis redis-cli**



**// String commands
127.0.0.1:6379> set name "shubham is the king "**

**OK**

**127.0.0.1:6379> get name**

**"shubham is the king "**

**127.0.0.1:6379>

// mset for multiple
127.0.0.1:6379> mset user:1 shubham user:2 shweta user:3 king**

**OK**

**127.0.0.1:6379> mget user:1 user:3**

**1) "shubham"**

**2) "king"

127.0.0.1:6379> set count 0**

**OK**

**127.0.0.1:6379> incr count**

**(integer) 1**

**127.0.0.1:6379> incr count**

**(integer) 2**

