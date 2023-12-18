"use client"


export const DataBaseFunc = () => {
    const MySchema = {
            id: "SCNA-ICHSS-WDWDWDWD", // Unique identifier for the chat session
            participants: ["SCNA-SDWDW", "SCNA-WDWDWD"], // Array of user IDs participating in the chat
            createdAt: 123324121244, // Date and time the chat session was created
          
            // Messages
            messages: [
              {
                id: String, // Unique identifier for each message
                sender: String, // User ID of the message sender
                recipient: String, // User ID of the message recipient (null if sent to all participants)
                content: String, // Message text
                timestamp: Date, // Date and time the message was sent
                read: Boolean, // Whether the message is read by the recipient
                reactions: { // Object containing emojis and user IDs who reacted
                  thumbsUp: [String], // Array of user IDs who upvoted
                  thumbsDown: [String], // Array of user IDs who downvoted
                  // Add other emoji reactions as needed
                },
              },
            ],
          
            // Additional data (optional)
            unreadCount: { // Object mapping user IDs to their unread message count
              user1: 2,
              user2: 0,
            },
            lastMessage: { // Object containing details of the most recent message
              id: String,
              sender: String,
              content: String,
              timestamp: Date,
            },
          };
          
          // Example usage:
          const myChat = {
            id: "chat123",
            participants: ["user1", "user2"],
            messages: [
              // ... individual messages ...
            ],
            // ... other chat details ...
          };
          
     
  

     return {MySchema}
}