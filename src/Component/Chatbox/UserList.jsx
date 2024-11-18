import React, { useState } from 'react';
import './UserList.css';

const UserList = ({ users, onSelectUser }) => {
  const [search, setSearch] = useState(''); // State for search input

  // Filter users based on the search query
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="user-list">
      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />
      <ul>
        {filteredUsers.map((user) => (
          <li
            key={user._id}
            onClick={() => onSelectUser(user)}
            className="user-item"
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
