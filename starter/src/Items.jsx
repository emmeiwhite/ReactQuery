import { useQuery } from "@tanstack/react-query";
import SingleItem from "./SingleItem";
import customFetch from "./utils";
const Items = () => {
  const { isLoading, data, isError } = useQuery({
    queryKey: ["tasks"],
    queryFn: () => customFetch.get("/dummyNoRoute"),
  });

  // console.log(result);
  // const { isLoading, data, isError } = result;

  if (isLoading) {
    return <h1 style={{ marginTop: "1rem" }}>Loading...</h1>;
  }

  if (isError) {
    return <h1 style={{ marginTop: "1rem" }}>There was an Error...</h1>;
  }

  return (
    <div className="items">
      {data.data.taskList.map((item) => {
        return (
          <SingleItem
            key={item.id}
            item={item}
          />
        );
      })}
    </div>
  );
};
export default Items;
