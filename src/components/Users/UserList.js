import Card from "../UI/Card";
import classes from "../UI/UsersList.module.css";

const UserList = (props) => {
  return (
    <Card cssClass={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li>
            {user.name}({user.age})
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
