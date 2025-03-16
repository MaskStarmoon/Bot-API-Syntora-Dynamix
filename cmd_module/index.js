// code load module cmd
const fs = require('fs');
const path = require('path');

const folderCmdPath = path.join(__dirname, 'cmd_module', 'cmd');
const cmd_src = {};

fs.readdirSync(folderCmdPath).forEach(file => {
    if (file.endsWith('.js')) {
        const filePath = path.join(folderCmdPath, file);
        try {
            const command = require(filePath);
            if (command.config && command.config.nama) {
                cmd_src[command.config.nama] = {
                    config: command.config,
                    Syntora: async function (...args) {
                        return command.Syntora ? await command.Syntora(...args) : null;
                    }
                };
            }
        } catch (error) {
            console.error(`Gagal meload file ${file}:`, error);
        }
    }
});

module.exports = { cmd_src };
