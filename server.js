const express = require('express');
const app = express();
const client = require('./client');
const port = 3000;

const axios = require('axios');

app.get('/', async (req, res) => {
    try {

        const cacheData = await client.get('jsonData');
        if (cacheData) {
            console.log('Serving from Redis cache');
            return res.json(JSON.parse(cacheData));
        }

        const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1");

        await client.set('jsonData', JSON.stringify(response.data), {
            EX: 30 // expire after 30 seconds
        });

        console.log('Serving from API and caching');
        return res.json(response.data);

    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Something went wrong');
    }
});


app.listen(port,()=>{
    console.log(`Server is Running On: ${port}`);
});



