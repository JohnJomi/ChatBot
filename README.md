# ChatBot 🤖

An AI-powered chatbot built with Google's Gemini API. Features conversation memory, chat history persistence, and a beautiful modern UI.

## Features

- ✅ **AI-Powered Responses** - Powered by Google's Gemini 2.0 Flash model
- ✅ **Conversation Memory** - Bot remembers previous messages in the conversation
- ✅ **Chat History** - Saves conversations to browser's local storage
- ✅ **Beautiful UI** - Modern, responsive design with gradient background
- ✅ **Clear Chat** - Clear conversation history anytime
- ✅ **Enter to Send** - Press Enter to send messages

## Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **API**: Google Gemini API
- **Fonts**: Google Fonts (Poppins, Inter, Playfair Display)

## Project Structure

```
ChatBot2/
├── FrontEnd/
│   ├── index.html
│   ├── style.css
│   └── script.js
└── BackEnd/
    ├── bot.js (Gemini API integration)
    └── server.js (Chat functionality)
```

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection

### Setup

1. Clone the repository
```bash
git clone https://github.com/yourusername/ChatBot2.git
cd ChatBot2
```

2. Open the chatbot
```bash
cd FrontEnd
open index.html
# Or simply double-click index.html in your file explorer
```

3. Start chatting! 🚀

## API Setup

This project uses Google's Gemini API. To use it with your own API key:

1. Get an API key from [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Replace the `API_KEY` in `BackEnd/bot.js` with your own key

## Usage

- **Send a message**: Type in the input field and click "Send" or press Enter
- **Clear chat**: Click the "Clear Chat" button to reset conversation
- **Chat history**: Your conversations are automatically saved

## Features in Detail

### Conversation Memory
The bot remembers all previous messages in the conversation and uses them for context-aware responses.

### Chat History
Conversations are saved to browser's localStorage and restored when you refresh the page.

### Safety Settings
Currently configured with relaxed safety settings for flexibility. Adjust in `bot.js` if needed.

## Future Enhancements

- [ ] Add Node.js backend to hide API key
- [ ] Database persistence for chat history
- [ ] User accounts and authentication
- [ ] Multiple conversation threads
- [ ] Export chat as PDF or text
- [ ] Dark/Light mode toggle
- [ ] Mobile app version

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Contributing

Feel free to fork, modify, and improve this project!

## Disclaimer

⚠️ **Important**: Your API key is currently visible in the browser code. For production use, consider:
- Setting up a backend server to proxy API calls
- Using environment variables
- Implementing proper authentication

---

**Built with ❤️ by John**
