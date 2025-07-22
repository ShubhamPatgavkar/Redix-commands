// client.js
const redis = require('redis');
const client = redis.createClient();

client.on('error', (err) => {
    console.error('Redis connection error:', err);
});

// Immediately connect once when app starts
(async () => {
    try {
        await client.connect();
        console.log("✅ Redis connected");
    } catch (err) {
        console.error("❌ Redis failed to connect:", err);
    }
})();

module.exports = client;
