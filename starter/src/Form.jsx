import { useState } from "react";
import customFetch from "./utils";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const Form = () => {
  const [newItemName, setNewItemName] = useState("");

  const { mutate: createTask, isLoading } = useMutation({
    mutationFn: (task) => customFetch.post("/", { title: task }),
    onError: (error) => {
      toast.error(error.response.data.msg);
    },
    onSuccess: () => {
      setNewItemName("");
      toast.success("Task Added Successfully!");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(newItemName);
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
          className={isLoading ? "btn btn-disabled" : "btn"}
          disabled={isLoading}
        >
          add task
        </button>
      </div>
    </form>
  );
};
export default Form;
