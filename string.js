// index.js
const client = require('./client');

async function init() {
    try {
        await client.connect();
        console.log('✅ Connected to Redis');

        await client.set("user:3","love");

        await client.mSet(["user:1","Shubham","user:2","ram"]);
        const result = await client.mGet(["user:1", "user:2"]);
        console.log("MGET Result:", result);

        // playing with list
        await client.lPush("mylist","Ram");
        await client.lPush("mylist","Shyam");


       const res =   await client.lPop("mylist");
    //    const bres = await client.blPop("mylist",10); // if the list becomes empty this will block for 10 seconds 
       // if an element is added in between then it will return that element instead of blocking istantly
        console.log(res);
        // console.log(bres);

        
    } catch (err) {
        console.log("❌ Something went wrong:", err);
    } finally {
        await client.quit(); // optional
    }
}

init();
