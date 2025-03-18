const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" />
    <link rel="stylesheet" href="style.css">
    <title>Business Dashboard</title>
   
</head>
<body>
    <div class="container">
        <!-- Navigation -->
        <nav>
            <div class="logo">LOGO</div>
            
            <div class="nav-links">
              <a href="#" >Pricing</a>
              <a href="#">Integration</a>
              <a href="#">Contact Sales</a>
            </div>
            
            <div class="burger" onclick="toggleMenu()">
              <div></div>
              <div></div>
              <div></div>
            </div>
            
            <a href="#" class="download-btn">Download App</a>
          </nav>
        
        
        <!-- Hero Section with custom shape -->
        <div class="hero-container">
            <div class="hero">
                <div class="hero-content">
                    <h1>We Make Your Business Different</h1>
                    <a href="#" class="consultation-btn">Book a consultation</a>
                </div>
                <img src="image.png" alt="Business illustration">
            </div>
        </div>
        
        <!-- Dashboard Section -->
        <div class="dashboard">
            <!-- Sales Card -->
            <div class="dashboard-card sales">
                <a href="#" class="track-sales-btn">Track Sales</a>
                <div class="sales-chart">
                    <div class="y-labels">
                        <span>800</span>
                        <span>600</span>
                        <span>400</span>
                        <span>200</span>
                        <span>0</span>
                    </div>
                    
                    <svg class="line-chart1" viewBox="0 0 650 160" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                        <!-- Define a Drop Shadow Filter -->
                        <defs>
                            <filter id="shadow" x="0%" y="0%" width="200%" height="200%">
                                <feDropShadow dx="0" dy="10" stdDeviation="6" flood-color="violet" flood-opacity="0.5"/>
                            </filter>
                        </defs>
                    
                        <!-- Shadow Polyline -->
                        <polyline 
                            points="50,80 100,100 200,60 300,90 400,40 500,80 600,60"
                            stroke="violet" 
                            stroke-width="8" 
                            fill="none" 
                            opacity="0.2" 
                            filter="url(#shadow)"
                        />
                    
                        <!-- Main Violet Polyline -->
                        <polyline class="first"
                            points="50,80 100,100 200,60 300,90 400,40 500,80 600,60"
                            stroke="violet" 
                            stroke-width="3" 
                            fill="none"
                        />
                    </svg>
                    <svg class="line-chart2" viewBox="0 0 650 160" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                        <!-- Define a Drop Shadow Filter -->
                        <defs>
                            <filter id="shadow2" x="-50%" y="-50%" width="200%" height="200%">
                                <feDropShadow dx="0" dy="10" stdDeviation="6" flood-color="black" flood-opacity="0.3"/>
                            </filter>
                        </defs>
                    
                        <!-- Shadow Polyline (flipped points) -->
                        <polyline 
                            points="50,80 100,60 200,100 300,70 400,120 500,80 600,100"
                            stroke="green" 
                            stroke-width="8" 
                            fill="none" 
                            opacity="0.2" 
                            filter="url(#shadow2)"
                        />
                    
                        <!-- Main Green Polyline (flipped points) -->
                        <polyline 
                            points="50,80 100,60 200,100 300,70 400,120 500,80 600,100"
                            stroke="green" 
                            stroke-width="3" 
                            fill="none"
                        />
                    </svg>
                    
                    <div class="months">
                        <span>Jan</span>
                        <span>Feb</span>
                        <span>Mar</span>
                        <span>Apr</span>
                        <span>May</span>
                        <span>Jun</span>
                    </div>
                </div>
            </div>
            
            <!-- Lecture Card -->
            <div class="dashboard-card lecture">
                <div>
                    <div class="play-button">
                        <div class="play-button-triangle"></div>
                    </div>
                    <p class="lecture-title">Business Lecture</p>
                    <p class="large-number">400+</p>
                </div>
            </div>
            
            <!-- Metrics Card -->
            <div class="dashboard-card metrics">
                <div class="metrics-badge">
                    <div class="dadge-cercle">
                        <i class="fas fa-bolt"></i>
                    </div>
                    35 metrics
                </div>
                <p class="metrics-text">Easily track business metrics</p>
            </div>
        </div>
        
        <!-- Footer Section -->
        <footer class="footer">
            <div class="footer-container">
                <div class="footer-content">
                    <div class="footer-column">
                        <h3>Company</h3>
                        <ul class="footer-links">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Press</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                    
                    <div class="footer-column">
                        <h3>Product</h3>
                        <ul class="footer-links">
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Security</a></li>
                            <li><a href="#">Enterprise</a></li>
                        </ul>
                    </div>
                    
                    <div class="footer-column">
                        <h3>Resources</h3>
                        <ul class="footer-links">
                            <li><a href="#">Documentation</a></li>
                            <li><a href="#">Tutorials</a></li>
                            <li><a href="#">Support</a></li>
                            <li><a href="#">API</a></li>
                        </ul>
                    </div>
                    
                    <div class="footer-column">
                        <h3>Stay Updated</h3>
                        <p style="font-size: 14px; opacity: 0.7; margin-bottom: 15px;">Subscribe to our newsletter for the latest updates and offers.</p>
                        
                        <div class="newsletter">
                            <form class="newsletter-form">
                                <input type="email" class="newsletter-input" placeholder="Your email address">
                                <button type="submit" class="newsletter-button">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
                
                <div class="footer-bottom">
                    <div class="footer-logo">LOGO</div>
                    
                    <div class="footer-social">
                        <a href="#" class="social-icon">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z"></path>
                            </svg>
                        </a>
                        <a href="#" class="social-icon">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </a>
                        <a href="#" class="social-icon">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="black"></path>
                                <circle cx="17.5" cy="6.5" r="1.5" fill="black"></circle>
                            </svg>
                        </a>
                        <a href="#" class="social-icon">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </a>
                    </div>
                    
                    <div class="copyright">
                        © 2025 Your Business. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    </div>

    <script>
        // Simple animation for the line chart
        document.addEventListener('DOMContentLoaded', function () {
            const polylines = document.querySelectorAll('.line-chart1 polyline');

            polylines.forEach(polyline => {
                const length = polyline.getTotalLength();
                polyline.style.strokeDasharray = length;
                polyline.style.strokeDashoffset = length;
            });

            setTimeout(() => {
                polylines.forEach(polyline => {
                    polyline.style.transition = 'stroke-dashoffset 2s ease-in-out';
                    polyline.style.strokeDashoffset = '0';
                });
            }, 500);
        });

        document.addEventListener('DOMContentLoaded', function () {
            const polylines = document.querySelectorAll('.line-chart2 polyline');

            polylines.forEach(polyline => {
                const length = polyline.getTotalLength();
                polyline.style.strokeDasharray = length;
                polyline.style.strokeDashoffset = length;
            });

            setTimeout(() => {
                polylines.forEach(polyline => {
                    polyline.style.transition = 'stroke-dashoffset 2s ease-in-out';
                    polyline.style.strokeDashoffset = '0';
                });
            }, 500);
        });
        

        function toggleMenu() {
      const navLinks = document.querySelector('.nav-links');
      navLinks.classList.toggle('active');
    }
    window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('fade-out');
  });


    </script>
</body>
</html>
`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});