console.log("Server is starting...");
const express = require("express");
const { exec } = require("child_process");
const path = require("path");

const app = express();
const PORT = 3000;

// Chemin vers vmrun.exe
const VMRUN_PATH = `"C:\\Program Files (x86)\\VMware\\VMware Workstation\\vmrun.exe"`;
// Chemin vers ta machine virtuelle
const VM_PATH = `"C:\\Users\\pc\\OneDrive - OFPPT\\Documents\\Virtual Machines\\Ubuntu 64-bit\\Ubuntu 64-bit.vmx"`;

// Route pour démarrer la VM
app.get("/start-vm", (req, res) => {
    const command = `${VMRUN_PATH} -T ws start ${VM_PATH}`;

    exec(command, (error, stdout, stderr) => {
        if (error) {
            return res.status(500).json({ success: false, message: "Erreur lors du démarrage", error: stderr });
        }
        res.json({ success: true, message: "Machine virtuelle démarrée avec succès", output: stdout });
    });
});

// Lancer le serveur
app
