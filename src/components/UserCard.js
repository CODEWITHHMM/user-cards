import React from 'react';
import Avatar from './Avatar';
import UserDetails from './UserDetails';

// UserCard component
function UserCard({ user }) {
    return (
        <div className="ec-card">
            <div className="row">
                <div className="col-auto">
                    <Avatar username={user.username} />
                </div>
                <div className="col">
                    <UserDetails user={user} />
                </div>
            </div>
        </div>
    );
}

export default UserCard;
