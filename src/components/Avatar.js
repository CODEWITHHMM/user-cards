import React from 'react';

// Avatar component
function Avatar({ username }) {
    return (
        <img
            src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`}
            alt="Avatar"
            style={{ width: '200px', height: '200px' }}
        />
    );
}

export default Avatar;
