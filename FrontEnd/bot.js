const API_KEY = "AIzaSyCWwMDCks8HCk21bdBW4y9wPNUvMDdNwfk";
const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

// Store conversation history
let conversationHistory = [];

async function getBotReply(userMessage) {
    try {
        // Add user message to history
        conversationHistory.push({
            role: "user",
            parts: [{ text: userMessage }]
        });

        const response = await fetch(`${API_URL}?key=${API_KEY}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                contents: conversationHistory,
                safetySettings: [
                    { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" },
                    { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_ONLY_HIGH" },
                    { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_ONLY_HIGH" },
                    { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_ONLY_HIGH" },
                    { category: "HARM_CATEGORY_CIVIC_INTEGRITY", threshold: "BLOCK_ONLY_HIGH" }
                ]
            })
        });

        console.log("Response status:", response.status);
        console.log("Response URL:", response.url);
        
        if (!response.ok) {
            const errorData = await response.json();
            console.error("API Error Response:", errorData);
            throw new Error(`API Error: ${response.status} - ${JSON.stringify(errorData)}`);
        }

        const data = await response.json();
        console.log("API Response:", data);
        const botMessage = data.candidates[0].content.parts[0].text;
        
        // Add bot response to history
        conversationHistory.push({
            role: "model",
            parts: [{ text: botMessage }]
        });
        
        return botMessage;
    } catch (error) {
        console.error("Error getting bot reply:", error);
        // Remove the user message from history if there was an error
        conversationHistory.pop();
        return "Sorry, I encountered an error. Please try again.";
    }
}

// Function to clear conversation history
function clearConversationHistory() {
    conversationHistory = [];
    console.log("Conversation history cleared");
}
