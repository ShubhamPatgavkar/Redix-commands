// index.js
const client = require('./client');

async function init() {
    try {
        await client.connect();
        console.log('✅ Connected to Redis');

        await client.set("user:3","love");

        await client.mSet(["user:1","Shubham","user:2","Shweta"]);
        const result = await client.mGet(["user:1", "user:2"]);

        console.log("MGET Result:", result);
    } catch (err) {
        console.log("❌ Something went wrong:", err);
    } finally {
        await client.quit(); // optional
    }
}

init();
