import classes from "./TaskForm.module.css";

const TaskForm = () => {
  const formSubmitHandler = () => {};

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={classes["form-group"]}>
        <label htmlFor="title">Title: </label>
        <input type="text" name="title" placeHolder="Enter a title..." />
      </div>
      <div className={classes["form-group"]}>
        <label htmlFor="description">Description: </label>
        <input
          type="text"
          name="description"
          placeHolder="Enter a description..."
        />
      </div>
    </form>
  );
};

export default TaskForm;
