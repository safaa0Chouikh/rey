const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
<title>Login-Form</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
<div class="ring">
<i></i>
<i></i>
+ 93%
<i></i>
<div class="login">
<h2>Login</h2>
<div class="inputBx">
<input type="text" placeholder="Username">
</div>
<div class="inputBx">
<input type="password" placeholder="Password">
</div>
<div class="inputBx">
<input type="submit" value="Sign in">
</div>
<div class="links">
<a href="#">Forget Password</a>
<a href="#">Signup</a>
</div>
</div>
</div>
</body>
</html>`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});