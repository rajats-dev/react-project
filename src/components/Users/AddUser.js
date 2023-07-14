import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import { useRef, useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();

    const enterUsername = nameInputRef.current.value;
    const enterUserAge = ageInputRef.current.value;

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
    nameInputRef.current.value = " ";
    ageInputRef.current.value = " ";
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
            <input type="text" ref={nameInputRef}></input>
            <label>Age</label>
            <input type="number" ref={ageInputRef}></input>
          </div>
          <Button type="submit">Add Users</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
