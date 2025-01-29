"use client";

interface User {
  id: number;
  name: string;
}

interface UsersProps {
  users: User[];
}

export const Users: React.FC<UsersProps> = ({ users }) => {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
