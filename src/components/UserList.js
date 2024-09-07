import React from 'react';
import UserCard from './UserCard';

// UserList component
function UserList({ users }) {
    return (
        <div>
            {users.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}
        </div>
    );
}

export default UserList;
