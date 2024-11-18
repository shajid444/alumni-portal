import React, { useState, useEffect } from 'react';
import UserList from './UserList';
import Chatbox from './Chatbox';
import axios from 'axios';

import './MessengerApp.css';

const MessengerApp = () => {
    const [users, setUsers] = useState([]); // List of all users
    const [selectedUser, setSelectedUser] = useState(null); // Currently selected user

    // Fetch users from the backend
    useEffect(() => {
        axios.get('http://localhost:5000/info') // Adjust the endpoint to match your backend
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                console.error('Error fetching users:', error);
            });
    }, []);

    return (
        <div className="messenger-app justify-between mt-3 mb-3">
            <div className="user-list-container">
                <UserList users={users} onSelectUser={setSelectedUser} />
            </div>
            <div className="chatbox-container w-full ">
                {selectedUser ? (
                    <Chatbox selectedUser={selectedUser} />
                ) : (
                    <div className="placeholder">Select a user to start chatting</div>
                )}
            </div>
        </div>
    );
};

export default MessengerApp;
