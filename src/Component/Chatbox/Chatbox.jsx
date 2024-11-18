import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './Chatbox.css';

const socket = io('http://localhost:5000'); // Backend URL

const Chatbox = ({ selectedUser }) => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (selectedUser) {
            // Load chat history for the selected user
            socket.emit('load_chat', {
                sender: 'CurrentUserID', // Replace with the current logged-in user ID
                receiver: selectedUser._id,
            });

            socket.on('chat_history', (chatHistory) => {
                setMessages(chatHistory);
            });

            return () => {
                socket.off('chat_history');
            };
        }
    }, [selectedUser]);

    useEffect(() => {
        socket.on('receive_message', (data) => {
            if (
                (data.sender === 'CurrentUserID' && data.receiver === selectedUser._id) ||
                (data.sender === selectedUser._id && data.receiver === 'CurrentUserID')
            ) {
                setMessages((prevMessages) => [...prevMessages, data]);
            }
        });

        return () => {
            socket.off('receive_message');
        };
    }, [selectedUser]);

    const sendMessage = () => {
        if (message.trim() && selectedUser) {
            const data = {
                message,
                sender: 'CurrentUserID', // Replace with the current logged-in user ID
                receiver: selectedUser._id,
            };
            socket.emit('send_message', data);
            setMessages((prevMessages) => [...prevMessages, data]);
            setMessage('');
        }
    };

    return (
        <div className="chatbox h-auto">
            <div className="chat-header">{selectedUser.name}</div>
            <div className="chat-messages">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`chat-bubble ${msg.sender === 'CurrentUserID' ? 'sent' : 'received'
                            }`}
                    >
                        <span>{msg.message}</span>
                    </div>
                ))}
            </div>
            <div className="chat-input ">
                <input
                    type="text"
                    placeholder="Write a message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Chatbox;
