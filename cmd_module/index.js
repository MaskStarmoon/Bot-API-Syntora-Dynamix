// code load module cmd by Range
const fs = require('fs');
const path = require('path');

const folderCmdPath = path.join(__dirname, 'cmd');
const cmd_src = {};

// Cek apakah folder ada
if (!fs.existsSync(folderCmdPath)) {
    console.error("Folder cmd_module/cmd tidak ditemukan!");
} else {
    console.log("Folder ditemukan, membaca file...");
    const files = fs.readdirSync(folderCmdPath).filter(file => file.endsWith('.js'));
    console.log("Mendeteksi file:", files.join(", "));
    files.forEach(file => {
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
                    console.log(`Berhasil memuat command: ${command.config.nama}`);
                }
            } catch (error) {
                console.error(`Gagal memuat file ${file}:`, error);
            }
        });
}

module.exports = { cmd_src };
