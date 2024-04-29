import { useState } from "react";
import customFetch from "./utils";
import { useMutation } from "@tanstack/react-query";

const Form = () => {
  const [newItemName, setNewItemName] = useState("");

  const { mutate: createTask, isLoading } = useMutation({
    mutationFn: () => customFetch.post("/", { title: "New day is a new gift" }),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>task bud</h4>
      <div className="form-control">
        <input
          type="text "
          className="form-input"
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button
          type="submit"
          className="btn"
        >
          add task
        </button>
      </div>
    </form>
  );
};
export default Form;
