let messages = document.getElementById("messages");
let input = document.getElementById("input");
let sendButton = document.getElementById("send-button");
let chatToggle = document.getElementById("chat-toggle");
let chatContainer = document.getElementById("chat-container");
let chatClose = document.getElementById("chat-close");

// Toggle chat open/close
chatToggle.addEventListener("click", () => {
  chatContainer.style.display = "flex";
  chatToggle.style.display = "none";
});

chatClose.addEventListener("click", () => {
  chatContainer.style.display = "none";
  chatToggle.style.display = "flex";
});

// Send button + Enter key
sendButton.addEventListener("click", sendMessage);
input.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});

function sendMessage() {
  let message = input.value.trim();
  if (!message) return;

  input.value = "";
  let messageElement = document.createElement("div");
  messageElement.innerText = message;
  messageElement.classList.add("user-message");
  messages.appendChild(messageElement);
  scrollToBottom();

  let botMessage = generateBotMessage(message);

  setTimeout(function() {
    let botMessageElement = document.createElement("div");
    botMessageElement.innerText = botMessage;
    botMessageElement.classList.add("bot-message");
    messages.appendChild(botMessageElement);
    scrollToBottom();
  }, 1000);
}

function generateBotMessage(message) {
  let responses = {
    "hello": "Hi there!",
    "how are you": "I'm doing well. How are you?",
    "what's your favorite color?": "I'm a bot. I don't have a favorite color.",
    "goodbye": "Goodbye!"
  };

  let response = "I'm sorry, I don't understand.";

  for (let key in responses) {
    if (message.toLowerCase().includes(key)) {
      response = responses[key];
    }
  }

  return response;
}

function scrollToBottom() {
  messages.scrollTop = messages.scrollHeight;
}
