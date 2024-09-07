import React from 'react';
import './App.css';

const users = [
  {
    name: 'Anjali Kapoor',
    email: 'AnjaliK@designpro.com',
    phone: '011-234-5678',
    company: 'DesignPro Studio',
    website: 'anjalikapoor.com',
    address: 'Delhi',
    avatar: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Starlight'
  },
  {
    name: 'Ravi Kumar',
    email: 'RaviK@techinnovate.io',
    phone: '055-678-1234',
    company: 'Tech Innovate',
    website: 'ravitech.io',
    address: 'Noida',
    avatar: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Thunder'
  },
  {
    name: 'Neha Jain',
    email: 'NehaJ@marketingplus.com',
    phone: '080-345-6789',
    company: 'Marketing Plus',
    website: 'nehaplus.com',
    address: 'Jaipur',
    avatar: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Rainbow'
  },
  {
    name: 'Arjun Mehta',
    email: 'ArjunM@codecraft.io',
    phone: '070-789-3456',
    company: 'CodeCraft',
    website: 'arjuncode.io',
    address: 'Gurgaon',
    avatar: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Phoenix'
  },
  {
    name: 'Pooja Desai',
    email: 'PoojaD@bizsolutions.com',
    phone: '060-456-7890',
    company: 'Biz Solutions',
    website: 'poojadesai.com',
    address: 'Surat',
    avatar: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Moonlight'
  },
  {
    name: 'Sahil Aggarwal',
    email: 'SahilA@digitalgenius.com',
    phone: '095-234-5678',
    company: 'Digital Genius',
    website: 'sahilgenius.com',
    address: 'Kolkata',
    avatar: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Blaze'
  },
  {
    name: 'Shruti Gupta',
    email: 'ShrutiG@webcreative.com',
    phone: '085-789-3456',
    company: 'Web Creative',
    website: 'shrutiweb.com',
    address: 'Lucknow',
    avatar: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Sunshine'
  },
  {
    name: 'Vivek Nair',
    email: 'VivekN@techhub.io',
    phone: '065-123-7890',
    company: 'Tech Hub',
    website: 'viveknair.io',
    address: 'Cochin',
    avatar: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Comet'
  },
  {
    name: 'Simran Singh',
    email: 'SimranS@creativecore.com',
    phone: '078-345-6789',
    company: 'Creative Core',
    website: 'simrancreative.com',
    address: 'Chandigarh',
    avatar: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Nova'
  },
  {
    name: 'Aditya Chauhan',
    email: 'AdityaC@nextgen.io',
    phone: '045-678-2345',
    company: 'NextGen Tech',
    website: 'adityanextgen.io',
    address: 'Pune',
    avatar: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Storm'
  }

  // Add more users if needed
];

function UserCard({ user }) {
  return (
    <div className="ec-card">
      <div className="row">
        <div className="col-auto">
          <img src={user.avatar} alt="Avatar" />
        </div>
        <div className="col">
          <h2>{user.name}</h2>
          <p><strong>Email: </strong>{user.email}</p>
          <p><strong>Phone: </strong>{user.phone}</p>
          <p><strong>Company: </strong>{user.company}</p>
          <p><strong>Website: </strong>{user.website}</p>
          <p><strong>Address: </strong>{user.address}</p>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      {users.map((user, index) => (
        <UserCard key={index} user={user} />
      ))}
    </div>
  );
}

export default App;
