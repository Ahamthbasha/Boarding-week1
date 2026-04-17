import React, { useEffect, useState } from "react";

const Search = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState({});
  const [error, setError] = useState("");
  const [count, setCount] = useState(1);
  const [dir, setDir] = useState("UP");

  useEffect(() => {
    async function fetchUser() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${count}`,
        );
        const result = await response.json();
        setUsers(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, [count]);

  const increment = () => {
    setCount((count) => count + 1);
  };

  const decrement = () => {
    setCount((count) => count - 1);
  };

  const update = () => {
    console.log("clicked");
    if (count == 10) {
      decrement();
      setDir("DOWN");
    } else if (count == 1) {
      increment();
      setDir("UP");
    } else {
      dir == "UP" ? increment() : decrement();
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {Object.keys(users).length != 0 && (
        <>
          <h1>User Details</h1>

          <div key={users.id}>
            <p>name:{users.name}</p>
            <p>username:{users.username}</p>
            <p>email:{users.email}</p>
          </div>

          <button onClick={update}>Chang User</button>
        </>
      )}
    </div>
  );
};

export default Search;
