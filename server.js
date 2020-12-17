const express = require('express');
const server = express();
const cors = require('cors');

server.use(cors());

const flats = [
    {name: 'St Johns Road, Clarkenwell',
    price: '£500,000',
    description:'This is a 2 bedroom flat in the heart of city of London.' }, 

    {name: 'Dance Square, London',
    price: '£450,000',
    description:'This is a 1 bedroom flat with a balcony.'}
];

server.get('/', (req, res) => res.send({flats}));

const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Express departing now from http://localhost:${port}`))