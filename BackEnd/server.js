const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');    
const sendButton = document.getElementById('send-btn');
const clearButton = document.getElementById('clear');

// Load chat history when page loads
window.addEventListener('DOMContentLoaded', function() {
    const savedHistory = localStorage.getItem("ChatHistory");
    if (savedHistory) {
        chatBox.innerHTML = savedHistory;
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});

function addMessage(message, className) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message', className);
    msgDiv.textContent= message;
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}
 
function showTyping() {
    const typingDiv = document.createElement('div');
    typingDiv.classList.add("message", "bot-message");
    typingDiv.textContent = "Bot is thinking...!";
    chatBox.appendChild(typingDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
    return typingDiv;

}

sendButton.onclick  = async () => {
    const message = userInput.value.trim();
    console.log("User message:", message);
    if(message === "") return;
    addMessage(message,"user-message");
    userInput.value = "";

    const typingDiv = showTyping();

    const botReply  = await getBotReply(message);
    typingDiv.remove();

    addMessage(botReply, "bot-message");

    localStorage.setItem("ChatHistory", chatBox.innerHTML);
}   

userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendButton.click();
    }
});     

// Clear chat history
clearButton.onclick = () => {
    clearConversationHistory();
    chatBox.innerHTML = "";
    localStorage.removeItem("ChatHistory");
    console.log("Chat cleared");
}
