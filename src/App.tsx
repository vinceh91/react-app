import { useEffect, useState } from "react";
import axios, { CanceledError } from "axios";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => setUsers(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    return () => controller.abort();
  }, []);

  function deleteUser(id: number) {
    const originalUsers = users;
    setUsers(users.filter((user) => user.id != id));

    axios
      .delete("https://jsonplaceholder.typicode.com/xusers/" + id)
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  }
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id} className="">
            {user.name}
            <button
              className="btn btn-outline-danger"
              onClick={() => deleteUser(user.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
