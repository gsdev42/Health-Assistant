document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById('user-input');
    const messageText = userInput.value.trim();
    if (messageText === '') return;

    const messageContainer = document.createElement('div');
    messageContainer.classList.add('message', 'user-message');
    messageContainer.innerText = messageText;
    document.getElementById('chat-messages').appendChild(messageContainer);

    userInput.value = '';
    userInput.focus();

    // Simulate bot response
    setTimeout(() => {
        const botMessage = document.createElement('div');
        botMessage.classList.add('message', 'bot-message');
        botMessage.innerText = 'This is a simulated response.';
        document.getElementById('chat-messages').appendChild(botMessage);

        // Scroll to the bottom of the chat
        document.getElementById('chat-messages').scrollTop = document.getElementById('chat-messages').scrollHeight;
    }, 1000);
}
