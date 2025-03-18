const express = require("express");
const { exec } = require("child_process");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const VMRUN_PATH = `"C:\\Program Files (x86)\\VMware\\VMware Workstation\\vmrun.exe"`;

// 📌 Route pour lister les machines virtuelles
app.get("/list-vms", (req, res) => {
    exec(`${VMRUN_PATH} -T ws list`, (error, stdout, stderr) => {
        if (error) {
            return res.status(500).json({ success: false, message: "Erreur lors de la récupération des VMs", error: stderr });
        }
        
        const lines = stdout.split("\n").slice(1); // Ignorer la première ligne ("Total running VMs: X")
        const vms = lines.filter(line => line.trim() !== "").map(vm => ({ path: vm.trim(), status: "Running" }));
        
        res.json({ success: true, vms });
    });
});

// 📌 Route pour démarrer une VM
app.post("/start-vm", (req, res) => {
    const { vmPath } = req.body;
    exec(`${VMRUN_PATH} -T ws start "${vmPath}"`, (error, stdout, stderr) => {
        if (error) return res.status(500).json({ success: false, message: "Erreur au démarrage", error: stderr });
        res.json({ success: true, message: "VM démarrée avec succès" });
    });
});

// 📌 Route pour arrêter une VM
app.post("/stop-vm", (req, res) => {
    const { vmPath } = req.body;
    exec(`${VMRUN_PATH} -T ws stop "${vmPath}"`, (error, stdout, stderr) => {
        if (error) return res.status(500).json({ success: false, message: "Erreur à l'arrêt", error: stderr });
        res.json({ success: true, message: "VM arrêtée avec succès" });
    });
});

// 📌 Route pour supprimer une VM (⚠️ Attention, suppression définitive)
app.post("/delete-vm", (req, res) => {
    const { vmPath } = req.body;
    exec(`del "${vmPath}"`, (error, stdout, stderr) => {
        if (error) return res.status(500).json({ success: false, message: "Erreur lors de la suppression", error: stderr });
        res.json({ success: true, message: "VM supprimée avec succès" });
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
});
