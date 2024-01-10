import { useState } from "react";

function TaskForm(props, ) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');



  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
    });

    setInput("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a task"
        value={input}
        name="text"
        className="task-input"
        onChange={handleChange}
      />
      <button className="task-button">Submit</button>
    </form>
  );
}

export default TaskForm;
