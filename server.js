const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`:root {
    --primary-bg: #1a1d29;
    --accent-bg: #a1e8e4;
    --card-bg: #242735;
    --text-light: #ffffff;
    --text-dark: #121212;
    --accent-orange: #f6c9a0;
    --accent-purple: #d4cbf6;
    --footer-bg: #242735;
}


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

body {
    background-color: var(--primary-bg);
    color: var(--text-light);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

/* Navigation */
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #1e1e2f;
    color: white;
    flex-wrap: wrap;
    ; /* ✅ Add this */
  }

.logo {
    font-weight: bold;
    color: var(--text-light);
    text-transform: uppercase;
    animation: fadeIn 0.5s ease-in-out forwards;
    animation-delay: 0.2s; /* Delay animation on load */
}

.nav-links {
    display: flex;
    gap: 30px;
}

.nav-links a { 
    color: var(--text-light);
    text-decoration: none;
    text-transform: uppercase;
    font-size: 14px;
    padding: 10px 20px; /* Initial padding for consistent size */
    transition: all 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid transparent;
    animation: fadeIn 0.5s ease-in-out forwards;
    animation-delay: 0.4s; /* Delay animation on load */ /* Initial border color */
}

.nav-links a:hover {
    color: var(--accent-bg);
    padding: 15px 30px; /* Increase padding on hover to simulate the size change */
    background-color: var(--accent-bg);
    border-radius:12px 12px 0 0  ;
    color: black;
    font-weight: bold;
}
.burger {
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
    z-index: 100;
    position: relative;
}

.burger div {
    width: 25px;
    height: 3px;
    background-color: white;
    transition: all 0.3s ease;
}

/* Show burger on small screens and hide nav-links initially */
@media (max-width: 768px) {
    .burger {
      display: flex;
    }
  
    .nav-links {
      display: none;
      flex-direction: column;
      position: absolute;      /* ✅ overlay it */
      top: 60px;                /* Adjust based on your nav height */
      left: 0;
      right: 0;
      background-color: #1e1e2f;
      padding: 20px;
      z-index: 1000;            /* ✅ show above other content */
    }
  
    .nav-links.active {
      display: flex;
    }
  
    .download-btn {
      width: 23%;
      text-align: center;
      z-index: 100;
      margin-right: -5%;
      font-size: 10px;
     
      
    }
  }
  @media (max-width: 620px){
    .download-btn{
        position: relative;
        top: 360px;
        margin: 0 10%;
        font-size: 8px;
        padding:2px 5px;
        width: 85%;
        
    }
  }
    
  @media (max-width: 480px){
   .download-btn{
    position: absolute;
    margin: 85% 8%;
    font-size: 8px;
    padding:2px 5px;
    width: 85%;
    
   }
  }

.download-btn {
    position: relative;
    background-color: #000;
    color: white;
    padding: 15px 20px;
    border-radius: 25px;
    text-decoration: none;
    font-size: 14px;
    z-index: 100;
    right: 5%;
}
.download-btn:hover{
    background-color:#292828;
    transform: scale(1.05);
}

/* Hero Section with custom shape */
.hero-container {
    position: relative;
    margin: 20px 0;
    height: 230px;
}

.hero {
    background-color: var(--accent-bg);
    position: absolute;
    top: -40%;
    left: 0;
    width: 100%;
    height: 200%;
    color: var(--text-dark);
    clip-path: polygon(0% 38.5%, 0% 12.8%, 75.7% 12.8%, 75.8% 0%, 100.2% 0%, 100.2% 100.5%, 0% 100.5%);
    padding: 60px 40px;
    overflow: hidden;
    border-radius: 50px;
    display: flex;
    align-items: center;
}

.hero-content {
    width: 60%;
}

.hero h1 {
    font-size: 3rem;
    line-height: 1.2;
    margin-top: 15%;
    max-width: 450px;
}

.hero img {
    position: absolute;
    height: 80%;
    right: 5%;
    bottom: -1px;
    animation: fadeInImg 1.2s ease-in-out forwards;
    animation-delay: 0s; 
}

.consultation-btn {
    display: inline-block;
    color: var(--text-dark);
    text-decoration: none;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    max-width: 480px;
    border-bottom: 2px solid var(--text-dark);
    padding-bottom: 5px;
    margin-top: 25%;
}

/* Dashboard Section */
.dashboard {
    display: flex;
    gap: 20px;
    margin-top: 13%;
    flex-wrap: wrap;
}

.dashboard-card {
    background-color: var(--card-bg);
    border-radius: 25px;
    padding: 20px;
    min-height: 200px;
    flex: 7;
    border: 1px solid rgba(246, 244, 244, 0.3);
}

.dashboard-card.lecture {
    background-color: var(--accent-orange);
    color: var(--text-dark);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 3;
}

.dashboard-card.metrics {
    background-color: var(--accent-purple);
    color: var(--text-dark);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 3;
}

.track-sales-btn {
    display: inline-block;
    background-color: var(--card-bg);
    color: var(--text-light);
    padding: 8px 20px;
    border: 1px solid rgba(246, 244, 244, 0.6);
    border-radius: 25px;
    text-decoration: none;
    font-size: 14px;
    margin-bottom: 20px;
}
.sales-chart {
    height: 180px;
    margin-top: 10px;
    position: relative;
}

.line-chart2 {
    position: absolute;
    top: -35%;
    left: 0;
    width: 100%;
    height: 200px;
}

.play-button {
    width: 40px;
    height: 40px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    transition: all 0.2s ease;
    cursor: pointer;
}
.play-button:hover{
    transform: scale(1.1);
}
.play-button-triangle {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 8px 0 8px 12px;
    border-color: transparent transparent transparent black;
    margin-left: 2px;
}

.dadge-cercle {
    background-color: var(--accent-purple);
    height: 25px;
    width: 25px;
    border-radius: 50%;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.dadge-cercle i {
   height: 20px;
   width: 20px;
   color: black;
   display: flex;
   justify-content: center;
   align-items: center;

}
.dadge-cercle:hover{
    transform: scale(1.1);
}
.metrics-badge {
    display: flex;
    align-items: center;
    font-weight: bold;
    background-color: rgba(0, 0, 0);
    color: white;
    padding: 8px 12px;
    border-radius: 25px;
    font-size: 14px;
    margin-bottom: 20px;
    width: 150px;
    cursor: pointer;
    transition: all 0.2s ease;
}
.metrics-badge:hover{
    transform: scale(1.05);
    background-color: #292727;
}
.large-number {
    font-size: 3rem;
    font-weight: bold;
    margin-top: 50%;
}

.lecture-title {
    font-size: 16px;
    font-weight: bold;
    position: relative;
    top: 46%;
}

.metrics-text {
    font-size: 1.6rem;
    font-weight: bold;
    margin-top: auto;
}

/* SVG Line chart */
.line-chart {
    width: 100%;
    height: 160px;
    stroke-width: 2;
    stroke: rgba(255, 255, 255, 0.7);
    fill: none;
}

/* Months in chart */
.months {
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
    margin-left: 5%;
    margin-right: 5%;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.7);
}

/* Y-axis labels */
.y-labels {
    position: absolute;
    left: 0;
    top: -10%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.7);
}

/* Footer Section */
.footer {
    margin-top: 60px;
    padding-top: 40px;
    position: relative;
}

.footer-container {
    background-color: var(--footer-bg);
    border-radius: 15px 15px 0 0;
    padding: 40px;
    position: relative;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
}

.footer-column h3 {
    font-size: 18px;
    margin-bottom: 20px;
    color: var(--accent-bg);
}

.footer-links {
    list-style: none;
}

.footer-links li {
    margin-bottom: 12px;
}

.footer-links a {
    color: var(--text-light);
    text-decoration: none;
    font-size: 14px;
    opacity: 0.7;
    transition: opacity 0.3s;
}

.footer-links a:hover {
    opacity: 1;
}

.footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
    padding-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-logo {
    font-weight: bold;
    color: var(--text-light);
    text-transform: uppercase;
    font-size: 18px;
}

.footer-social {
    display: flex;
    gap: 15px;
}

.social-icon {
    width: 36px;
    height: 36px;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s;
}

.social-icon:hover {
    background-color: var(--accent-bg);
}

.newsletter {
    margin-top: 20px;
}

.newsletter-form {
    display: flex;
    margin-top: 15px;
}

.newsletter-input {
    flex: 1;
    padding: 12px 15px;
    border-radius: 25px 0 0 25px;
    border: none;
    background-color: rgba(255, 255, 255, 0.05);
    color: var(--text-light);
}

.newsletter-button {
    padding: 12px 25px;
    border-radius: 0 25px 25px 0;
    border: none;
    background-color: var(--accent-bg);
    color: var(--text-dark);
    font-weight: bold;
    cursor: pointer;
}

.copyright {
    font-size: 12px;
    opacity: 0.7;
}
@media (max-width: 920px){
    .dashboard{
      margin-top: 20%;
    }
}
/* Media Queries - Small Screens */
@media (max-width: 768px) {
    nav {
        flex-wrap: wrap;
    }
    
    .nav-links {
        order: 3;
        width: 100%;
        margin-top: 15px;
        justify-content: space-between;
    }
    
    .download-btn {
        order: 2;
    }
    
    .hero-content {
        width: 100%;
    }
    
    .hero img {
        opacity: 0.5;
    }
    
    .hero h1 {
        font-size: 2.5rem;
        position: relative;
        z-index: 2;
    }
    
    .consultation-btn {
        position: relative;
        z-index: 2;
        margin-top: 15%;
    }
    
    .dashboard {
        flex-direction: column;
        margin-top: 33%;
    }
    
    .dashboard-card {
        width: 100%;
    }
    
    .dashboard-card.lecture,
    .dashboard-card.metrics {
        width: 100%;
    }
    
    .footer-content {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Media Queries - Extra Small Screens */
@media (max-width: 480px) {
    nav {
        flex-direction: column;
        align-items: flex-start;
    }
    
    .nav-links {
        flex-direction: column;
        gap: 15px;
        margin-top: 20px;
    }
    
    .download-btn {
        position: absolute;
        top: 20px;
        right: 0;
    }
    
    .hero {
        clip-path: none;
        border-radius: 25px;
       
    }
    
    .hero h1 {
        font-size: 2rem;
        margin-top: 5%;
        color: white;
    }
    .hero img{
        display: none;
    }
    
    .dashboard {
       
        margin-top: 38%;
    }
    
    
    .footer-content {
        grid-template-columns: 1fr;
    }
    
    .footer-bottom {
        flex-direction: column;
        gap: 20px;
        text-align: center;
    }
    
    .months {
        font-size: 10px;
        position: relative;
        bottom: -20%;
    }
    
    .y-labels {
        font-size: 10px;
    }
}
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px); /* drop-in effect */
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
@keyframes fadeInImg {
    from {
        opacity: 0;
        transform: translateY(150px); /* drop-in effect */
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
.nav-links a {
    animation: fadeIn 0.5s ease-in-out forwards;
    opacity: 0;
}

.nav-links a:nth-child(1) {
    animation-delay: 0.2s;
}
.nav-links a:nth-child(2) {
    animation-delay: 0.4s;
}
.nav-links a:nth-child(3) {
    animation-delay: 0.6s;
}
.dashboard-card {
    animation: scaleUp 0.2s ease-out forwards;
    opacity: 0;
    transform: scale(0.8);
}

/* Optional stagger for multiple cards */
.dashboard-card:nth-child(1) { animation-delay: 0.2s; }
.dashboard-card:nth-child(2) { animation-delay: 0.4s; }
.dashboard-card:nth-child(3) { animation-delay: 0.6s; }

section, .container, .hero, .dashboard {
    animation: fadeIn 0.6s ease forwards;
    animation-delay: 0.2s;
    opacity: 0; /* start hidden until animation triggers */
} 
@keyframes scaleUp {
    from {
        opacity: 0;
        transform: scale(0.8);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}    to {
      opacity: 1;
      transform: translateY(0);
    }
`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});