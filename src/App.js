import React from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
import { useState } from "react";

function App() {
  const [listData, setlistData] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setlistData((prevState) => {
      return [...prevState, { name: uName, age: uAge }];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={listData} />
    </div>
  );
}

export default App;
