/* BOT API WEB MADE BY RANGE */
const express = require('express');
const app = express();
const fs = require('fs');
const axios = require('axios');
const path = require('path');
const { cmd_src } = require('./cmd_module/index.js');

app.use(express.json());
app.post('/api/command', async (req, res) => {
    const { command, args } = req.body;
    
    if (!cmd_src[command]) {
        return res.status(404).json({ error: "Command not found" });
    }

    try {
        const response = await cmd_src[command].Syntora(args);
        res.json({ response });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.get('/api/command', async (req, res) => {
    const { command, args } = req.query;
    
    if (!cmd_src[command]) {
        return res.status(404).json({ error: "Command not found" });
    }

    try {
        const response = await cmd_src[command].Syntora(args);
        res.json({ response });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});
app.get('/', (req, res) => { 
 res.sendFile(path.join(__dirname, 'Web', 'index.html'));
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {});
