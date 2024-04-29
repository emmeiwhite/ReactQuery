import { useMutation, useQueryClient } from "@tanstack/react-query";
import customFetch from "./utils";
import { useState } from "react";

const SingleItem = ({ item }) => {
  // Real Time update we'll go with the useQueryClient()
  const queryClient = useQueryClient();

  const { mutate: editTask, isLoading } = useMutation({
    mutationFn: ({ taskId, isDone }) => {
      return customFetch.patch(`${taskId}`, { isDone });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]);
    },
  });

  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.isDone}
        onChange={(e) => editTask({ taskId: item.id, isDone: !item.isDone })}
        disabled={isLoading}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.isDone && "line-through",
        }}
      >
        {item.title}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => console.log("delete task")}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
