import React from 'react';

// UserDetails component
function UserDetails({ user }) {
    return (
        <div>
            <h2>{user.name}</h2>
            <p><strong>Email: </strong>{user.email}</p>
            <p><strong>Phone: </strong>{user.phone}</p>
            <p><strong>Company: </strong>{user.company.name}</p>
            <p><strong>Website: </strong>{user.website}</p>
            <p><strong>Address: </strong>{`${user.address.street}, ${user.address.city}`}</p>
        </div>
    );
}

export default UserDetails;
