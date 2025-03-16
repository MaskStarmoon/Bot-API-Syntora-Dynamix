/* BOT API WEB MADE BY RANGE */
const { spawn } = require("child_process");
const logo = `
███████╗██╗   ██╗███╗   ██╗████████╗ ██████╗ ██████╗  █████╗ 
██╔════╝██║   ██║████╗  ██║╚══██╔══╝██╔═══██╗██╔══██╗██╔══██╗
███████╗██║   ██║██╔██╗ ██║   ██║   ██║   ██║██████╔╝███████║
╚════██║██║   ██║██║╚██╗██║   ██║   ██║   ██║██╔═══╝ ██╔══██║
███████║╚██████╔╝██║ ╚████║   ██║   ╚██████╔╝██║     ██║  ██║
╚══════╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝    ╚═════╝ ╚═╝     ╚═╝  ╚═╝
                S   Y   N   T   O   R   A
    ---------------------------------------------------
`;

console.log(logo);

function syntora() {
  console.log("🚀 Menjalankan server...");
  
  const child = spawn("node Server-Api.js", {
    cwd: __dirname,
    stdio: "inherit",
    shell: true
  });

  child.on("error", (err) => {
    console.error("❌ Error menjalankan server:", err);
  });

  child.on("close", (code) => {
    if (code === 2) {
      console.warn("⚠️ Server berhenti dengan kode 2, mencoba restart...");
      syntora(); 
    } else {
      console.log("❌ Server berhenti. Kode:", code);
    }
  });
}

syntora();
setInterval(() => {
  console.clear();
  console.log(logo);
}, 3600000);
