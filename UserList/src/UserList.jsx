import { useState, useEffect } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.users); 
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>User List</h2>
      {loading ? (
        <p>Loading users...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.firstName} {user.lastName}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
