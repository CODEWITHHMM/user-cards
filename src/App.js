import React, { useState, useEffect } from 'react';
import './App.css';

// UserCard component
function UserCard({ user }) {
  return (
    <div className="ec-card">
      <div className="row">
        <div className="col-auto">
          <img
            src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`}
            alt="Avatar"
            style={{ width: '200px', height: '200px' }}
          />
        </div>
        <div className="col">
          <h2>{user.name}</h2>
          <p><strong>Id: </strong>{user.id}</p>
          <p><strong>Email: </strong>{user.email}</p>
          <p><strong>Phone: </strong>{user.phone}</p>
          <p><strong>Company: </strong>{user.company.name}</p>
          <p><strong>Website: </strong>{user.website}</p>
          <p><strong>Address: </strong>{`${user.address.street}, ${user.address.city}`}</p>
        </div>
      </div>
    </div>
  );
}

// App component
function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users') // Using the provided API URL
      .then((response) => response.json())
      .then((data) => {
        setUsers(data); // Update state with the fetched data
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false); // Stop loading on error
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      {users.map((user, index) => (
        <UserCard key={index} user={user} />
      ))}
    </div>
  );
}

export default App;
