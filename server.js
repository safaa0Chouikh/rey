const express = require("express"); // Importer Express
const { exec } = require("child_process");
const cors = require("cors");
const path = require("path"); // Importer path pour servir un fichier HTML

const app = express(); // Initialisation d'Express
const PORT = 3000;

app.use(cors());
app.use(express.json());

// 📌 Route pour la page d'accueil
app.get("/", (req, res) => {
    res.send("<h1>Bienvenue sur le serveur de gestion VMware</h1>");
});

// 📌 Route pour lister les machines virtuelles
app.get("/list-vms", (req, res) => {
    const VMRUN_PATH = `"C:\\Program Files (x86)\\VMware\\VMware Workstation\\vmrun.exe"`;
    
    exec(`${VMRUN_PATH} -T ws list`, (error, stdout, stderr) => {
        if (error) {
            return res.status(500).json({ success: false, message: "Erreur lors de la récupération des VMs", error: stderr });
        }
        
        const lines = stdout.split("\n").slice(1); // Ignorer la première ligne ("Total running VMs: X")
        const vms = lines.filter(line => line.trim() !== "").map(vm => ({ path: vm.trim(), status: "Running" }));
        
        res.json({ success: true, vms });
    });
});

// 📌 Démarrage du serveur
app.listen(PORT, () => {
    console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
});
