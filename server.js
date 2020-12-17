const express = require('express');
const server = express();
const cors = require('cors');

server.use(cors());

const flats = [
    {Address: 'St Johns Road, Clarkenwell',
    Price: '£2,000/month',
    Description:'This is a 2 bedroom flat in the heart of city of London.' }, 

    {Address: 'Dance Square, London',
    Price: '£1,500/month',
    Description:'This is a 1 bedroom flat with a balcony.'}
];

server.get('/', (req, res) => res.send(JSON.stringify(flats)));

const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Express departing now from http://localhost:${port}`))