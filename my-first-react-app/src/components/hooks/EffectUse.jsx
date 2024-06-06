import { useEffect, useState } from "react";

const EffectUse = () => {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);
  return (
    <>
      <div>
        <button onClick={() => setResourceType("post")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.length
        ? items.map((item) => {
            return <pre>{JSON.stringify(item)}</pre>;
          })
        : null}
    </>
  );
};

export default EffectUse;
