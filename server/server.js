const express = require('express');
const path = require('path');

// // ElasticSearch imports
// const { Client } = require('@elastic/elasticsearch');
// const client = new Client({ node: 'http://localhost:9200' }); // change the address for Azure virtual machine

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));
};

// // ElasticSearch error handling (example)
// client.ping({}, (error) => {
//     if (error) {
//         console.log('Elasticsearch cluster is down!');
//     } else {
//         console.log('Elasticsearch cluster is up and running!');        
//     }
// });

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});