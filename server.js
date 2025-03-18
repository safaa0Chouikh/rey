const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Chatbot</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        #chat-container {
            max-width: 400px;
            margin: 50px auto;
            border: 1px solid #ccc;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            background: white;
        }
        #chat-header {
            background-color: #4CAF50;
            color: white;
            padding: 10px;
            text-align: center;
        }
        #chat-messages {
            padding: 10px;
            max-height: 300px;
            overflow-y: auto;
        }
        .user { color: blue; font-weight: bold; }
        .bot { color: green; font-weight: bold; }
        #user-input {
            width: 100%;
            padding: 10px;
            box-sizing: border-box;
            border: none;
            border-top: 1px solid #ccc;
            outline: none;
        }
    </style>
</head>
<body>

<div id="chat-container">
    <div id="chat-header">AI Chatbot</div>
    <div id="chat-messages"></div>
    <input type="text" id="user-input" placeholder="Type your message...">
</div>

<script>
    var responsesDatabase = {
        greetings: { hello: 'Hi there!', hi: 'Hello!', hey: 'Hey' },
        feelings: { 'how are you': 'I am good! How about you?', fine: 'Glad to hear!', bad: 'Hope your day gets better!' },
        farewell: { bye: 'Goodbye!', goodbye: 'See you later!' },
        default: 'I did not understand that. Can you please rephrase?'
    };

    document.getElementById('user-input').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') { handleUserInput(); }
    });

    function handleUserInput() {
        var userInput = document.getElementById('user-input').value.trim();
        if (userInput) {
            appendMessage('user', userInput);
            document.getElementById('user-input').value = '';
            setTimeout(() => appendMessage('bot', getBotResponse(userInput)), 500);
        }
    }

    function getBotResponse(userInput) {
        userInput = userInput.toLowerCase();
        for (var category in responsesDatabase) {
            if (responsesDatabase[category][userInput]) {
                return responsesDatabase[category][userInput];
            }
        }
        return responsesDatabase.default;
    }

    function appendMessage(sender, message) {
        var chatMessages = document.getElementById('chat-messages');
        var messageDiv = document.createElement('div');
        messageDiv.className = sender;
        messageDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
</script>

</body>
</html>`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
