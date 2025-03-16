// server api code
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
        const response = await cmd_src[command].Alya(args);
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
        const response = await cmd_src[command].Alya(args);
        res.json({ response });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
