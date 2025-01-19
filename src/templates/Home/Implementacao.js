const express = require('express');
const http = require('http');

const app = express();
const SERVER_URL_1 = 'http://localhost:5173/home';
const SERVER_URL_2 = 'http://seu-servidor2.com/';

app.get('/status1', async (req, res) => {
    http.get(SERVER_URL_1, (response) => {
        res.json({ status: 'online' });
    }).on('error', () => {
        res.json({ status: 'em manutenção' });
    });
});

app.get('/status2', async (req, res) => {
    http.get(SERVER_URL_2, (response) => {
        res.json({ status: 'online' });
    }).on('error', () => {
        res.json({ status: 'em manutenção' });
    });
});

app.listen(5173, () => console.log('API de status rodando na porta 3000'));