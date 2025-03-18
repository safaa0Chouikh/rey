const express = require('express');
const { exec } = require('child_process');
const path = require('path');

const app = express();
const port = 3000;

// 📍 Chemin vers vmrun (change selon ton installation)
const vmrunPath = '"C:/Program Files (x86)/VMware/VMware Workstation/vmrun.exe"';

// 📍 Chemin vers ta machine virtuelle (.vmx)
const vmxPath = 'C:\Users\pc\OneDrive - OFPPT\Documents\Virtual Machines';

// 🔵 Démarrer la VM
app.get('/start', (req, res) => {
    exec(`${vmrunPath} -T ws start "${vmxPath}"`, (error, stdout, stderr) => {
        if (error) {
            res.status(500).send(`Erreur: ${stderr}`);
            return;
        }
        res.send(`Machine démarrée avec succès : ${stdout}`);
    });
});

// 🔴 Arrêter la VM
app.get('/stop', (req, res) => {
    exec(`${vmrunPath} -T ws stop "${vmxPath}"`, (error, stdout, stderr) => {
        if (error) {
            res.status(500).send(`Erreur: ${stderr}`);
            return;
        }
        res.send(`Machine arrêtée avec succès : ${stdout}`);
    });
});

// 🌍 Afficher la page web
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 🚀 Lancer le serveur
app.listen(port, () => {
    console.log(`Serveur lancé sur http://localhost:${port}`);
});
