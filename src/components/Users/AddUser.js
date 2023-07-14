import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enterUsername, setEnterUserName] = useState("");
  const [enterUserAge, setEnterUserAge] = useState("");
  const [error, setError] = useState();

  const usernameChangeHandler = (e) => {
    setEnterUserName(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setEnterUserAge(e.target.value);
  };

  const addUserHandler = (e) => {
    e.preventDefault();

    if (enterUsername.trim().length === 0 || enterUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enterUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onAddUser(enterUsername, enterUserAge);
    setEnterUserName("");
    setEnterUserAge("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card cssClass={classes.form}>
        <form onSubmit={addUserHandler}>
          <div>
            <label>Username</label>
            <input
              type="text"
              value={enterUsername}
              onChange={usernameChangeHandler}
            ></input>
            <label>Age</label>
            <input
              type="number"
              value={enterUserAge}
              onChange={ageChangeHandler}
            ></input>
          </div>
          <Button type="submit">Add Users</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
