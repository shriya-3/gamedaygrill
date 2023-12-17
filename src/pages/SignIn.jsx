import React, { useState } from 'react';

const UserList = ({ userList }) => {
  const [loginResult, setLoginResult] = useState(null);

  const authenticateUser = (username, password) => {
    const userExists = userList.some(
      (user) => user.username === username && user.password === password
    );

    setLoginResult(userExists ? 'Login successful!' : 'Invalid username or password');
  };

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {userList.map((user, index) => (
          <li key={index}>
            <strong>Username:</strong> {user.username},{' '}
            <strong>Password:</strong> {user.password},{' '}
            <strong>Email:</strong> {user.email}
          </li>
        ))}
      </ul>

      <h2>Login</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const username = e.target.elements.username.value;
          const password = e.target.elements.password.value;
          authenticateUser(username, password);
        }}
      >
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>

      {loginResult && <p>{loginResult}</p>}
    </div>
  );
};

const App = () => {
  const userList = [
    { username: 'user1', password: 'pass1', email: 'user1@example.com' },
    { username: 'user2', password: 'pass2', email: 'user2@example.com' },
    { username: 'user3', password: 'pass3', email: 'user3@example.com' },
  ];

  return (
    <div>
      <h1>React User List Authentication Example</h1>
      <UserList userList={userList} />
    </div>
  );
};

export default App;