// server api code
const express = require('express');
const app = express();
const fs = require('fs');
const axios = require('axios');
const path = require('path');
const { cmd_src } = require('./cmd_module/index.js');
